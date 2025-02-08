/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import {
  createConnection,
  TextDocuments,
  Diagnostic,
  DiagnosticSeverity,
  ProposedFeatures,
  InitializeParams,
  DidChangeConfigurationNotification,
  CompletionItem,
  CompletionItemKind,
  TextDocumentPositionParams,
  TextDocumentSyncKind,
  InitializeResult,
  DocumentDiagnosticReportKind,
  type DocumentDiagnosticReport,
  WorkspaceFolder,
  DidChangeTextDocumentParams,
  Position,
  WorkspaceDiagnosticReport,
  RelatedFullDocumentDiagnosticReport,
  FullDocumentDiagnosticReport,
} from "vscode-languageserver/node";
import { URI } from "vscode-uri";

import { TextDocument } from "vscode-languageserver-textdocument";
import { getErrors, loadCompiler } from "./compiler";
import { join, relative } from "path";

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
const documents = new TextDocuments(TextDocument);

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;

class WorkspaceManager {
  private workspaceFolders: WorkspaceFolder[] = [];
  private taintedFiles = []

  initialize(params: InitializeParams) {
    if (params.workspaceFolders) {
      this.workspaceFolders = params.workspaceFolders;
    }
  }

  private async getErrors(root: string) {
    if (!compiler) compiler = await loadCompiler();

    return await getErrors(
      root,
      // override with all unsaved files
      Object.fromEntries(
        documents
          .all()
          .map((doc) => [
            relative(root, URI.parse(doc.uri).fsPath),
            doc.getText(),
          ])
      )
    );
  }

  async validateTextDocument(
    document: TextDocument
  ): Promise<FullDocumentDiagnosticReport> {
    const items: Diagnostic[] = [];
    const settings = await getDocumentSettings(document.uri);
    const root = this.findWorkspaceRoot(document.uri);
    const errors = await this.getErrors(root);
    const relativeFileName = relative(root, URI.parse(document.uri).fsPath);
    for (const uri of this.taintedFiles) {
      connection.sendDiagnostics({ uri , diagnostics: [] });
    }
    const newTainted = []

    for (const error of errors) {
      const diagnostic: Diagnostic = {
        severity: DiagnosticSeverity.Error,
        range: {
          start: Position.create(error.line - 1, error.col - 1),
          end: Position.create(error.line - 1, error.col + error.len - 1),
        },
        message: error.msg,
        source: "easelsp",
      };

      if (!this.taintedFiles.includes(document.uri) && relativeFileName === error.file) {
        items.push(diagnostic);
      } else {
        const uri = URI.file(join(root, error.file)).toString();
        newTainted.push(uri);
        connection.sendDiagnostics({ uri, diagnostics: [diagnostic] });
      }
    }

    this.taintedFiles = newTainted;
    return { kind: "full", items: items };
  }

  private findWorkspaceRoot(documentUri: string): string | null {
    const fsPath = URI.parse(documentUri).fsPath;

    // Find the workspace folder that contains this file
    const workspaceFolder = this.workspaceFolders.find((folder) => {
      const folderPath = URI.parse(folder.uri).fsPath;
      return fsPath.startsWith(folderPath);
    });

    if (workspaceFolder) {
      return URI.parse(workspaceFolder.uri).fsPath;
    }

    return null;
  }
}

// Usage in your LSP server
const workspaceManager = new WorkspaceManager();
let compiler = null;

connection.onInitialize((params: InitializeParams) => {
  workspaceManager.initialize(params);
  const capabilities = params.capabilities;
  params.workspaceFolders;

  // Does the client support the `workspace/configuration` request?
  // If not, we fall back using global settings.
  hasConfigurationCapability = !!(
    capabilities.workspace && !!capabilities.workspace.configuration
  );
  hasWorkspaceFolderCapability = !!(
    capabilities.workspace && !!capabilities.workspace.workspaceFolders
  );
  hasDiagnosticRelatedInformationCapability = !!(
    capabilities.textDocument &&
    capabilities.textDocument.publishDiagnostics &&
    capabilities.textDocument.publishDiagnostics.relatedInformation
  );

  const result: InitializeResult = {
    capabilities: {
      textDocumentSync: TextDocumentSyncKind.Incremental,
      // Tell the client that this server supports code completion.
      // completionProvider: {
      //   resolveProvider: true,
      // },
      diagnosticProvider: {
        interFileDependencies: true,
        workspaceDiagnostics: true,
      },
    },
  };
  if (hasWorkspaceFolderCapability) {
    result.capabilities.workspace = {
      workspaceFolders: {
        supported: true,
      },
    };
  }

  return result;
});

connection.onInitialized(() => {
  if (hasConfigurationCapability) {
    // Register for all configuration changes.
    connection.client.register(
      DidChangeConfigurationNotification.type,
      undefined
    );
  }
  if (hasWorkspaceFolderCapability) {
    connection.workspace.onDidChangeWorkspaceFolders((_event) => {
      connection.console.log("Workspace folder change event received.");
    });
  }
});

// The example settings
interface ExampleSettings {
  checkDebounce: number;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: ExampleSettings = { checkDebounce: 1000 };
let globalSettings: ExampleSettings = defaultSettings;

// Cache the settings of all open documents
const documentSettings = new Map<string, Thenable<ExampleSettings>>();

connection.onDidChangeConfiguration((change) => {
  if (hasConfigurationCapability) {
    // Reset all cached document settings
    documentSettings.clear();
  } else {
    globalSettings = change.settings.languageServerExample || defaultSettings;
  }
  // Refresh the diagnostics since the `maxNumberOfProblems` could have changed.
  // We could optimize things here and re-fetch the setting first can compare it
  // to the existing setting, but this is out of scope for this example.
  connection.languages.diagnostics.refresh();
});

function getDocumentSettings(resource: string): Thenable<ExampleSettings> {
  if (!hasConfigurationCapability) {
    return Promise.resolve(globalSettings);
  }
  let result = documentSettings.get(resource);
  if (!result) {
    result = connection.workspace.getConfiguration({
      scopeUri: resource,
      section: "languageServerExample",
    });
    documentSettings.set(resource, result);
  }
  return result;
}

// Only keep settings for open documents
documents.onDidClose((e) => {
  documentSettings.delete(e.document.uri);
});

// connection.languages.diagnostics.on(async (params) => {
//   const document = documents.get(params.textDocument.uri);
//   if (document !== undefined) {
//     return {
//       kind: DocumentDiagnosticReportKind.Full,
//       items: await validateTextDocument(document),
//     } satisfies DocumentDiagnosticReport;
//   } else {
//     // We don't know the document. We can either try to read it from disk
//     // or we don't report problems for it.
//     return {
//       kind: DocumentDiagnosticReportKind.Full,
//       items: [],
//     } satisfies DocumentDiagnosticReport;
//   }
// });

connection.languages.diagnostics.on(async (params) => {
  const document = documents.get(params.textDocument.uri);
  if (document !== undefined) {
    const diagnostics = await workspaceManager.validateTextDocument(document);

    return diagnostics satisfies DocumentDiagnosticReport;
  } else {
    return {
      kind: DocumentDiagnosticReportKind.Full,
      items: [],
    } satisfies DocumentDiagnosticReport;
  }
});

connection.languages.diagnostics.onWorkspace(async (params) => {
  return {
    items: [],
  } satisfies WorkspaceDiagnosticReport;
});

// documents.onDidChangeContent(async (change) => {
//   const diagnostics = await workspaceManager.validateTextDocument(
//     change.document
//   );
//   // Send the diagnostics to the client
//   connection.sendDiagnostics({ uri: change.document.uri, diagnostics });
// });

connection.onDidChangeWatchedFiles((_change) => {
  // Monitored files have change in VSCode
  connection.console.log("We received a file change event");
});
// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();
