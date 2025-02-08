import { join } from "path";
import * as bg_glue from "./bindgenGlue";
import { CompilerObject } from "./bindgenGlue";
import { readFile, readdir, stat } from "fs/promises";
import { glob } from "glob"
const bindgen = {
  "./compiler_bg.js": {
    __wbindgen_object_drop_ref: function (e) {
      return bg_glue.ug(e);
    },
    __wbindgen_is_string: function (e) {
      return bg_glue.eY(e);
    },
    __wbindgen_error_new: function (e, t) {
      return bg_glue.hd(e, t);
    },
    __wbindgen_string_get: function (e, t) {
      return bg_glue.qt(e, t);
    },
    __wbindgen_is_object: function (e) {
      return bg_glue.Wl(e);
    },
    __wbindgen_is_undefined: function (e) {
      return bg_glue.XP(e);
    },
    __wbindgen_in: function (e, t) {
      return bg_glue.yb(e, t);
    },
    __wbindgen_string_new: function (e, t) {
      return bg_glue.h4(e, t);
    },
    __wbg_debug_b6964170b3e87b13: function (e, t, n, r) {
      return bg_glue.$K(e, t, n, r);
    },
    __wbg_error_0aa52a01e6e7818f: function (e) {
      return bg_glue.n_(e);
    },
    __wbg_error_e5dc0d8246d4270a: function (e, t, n, r) {
      return bg_glue.o1(e, t, n, r);
    },
    __wbg_info_e19142e7f34f3101: function (e, t, n, r) {
      return bg_glue.Qs(e, t, n, r);
    },
    __wbg_log_8ebee8c18566458b: function (e, t, n, r) {
      return bg_glue.Tv(e, t, n, r);
    },
    __wbg_warn_c2df9e71b9d2797a: function (e, t, n, r) {
      return bg_glue.Oj(e, t, n, r);
    },
    __wbg_new_8a6f238a6ece86ea: function () {
      return bg_glue.Qr();
    },
    __wbg_stack_0ed75d68575b0f3c: function (e, t) {
      return bg_glue.MX(e, t);
    },
    __wbg_error_7534b8e9a36f1ab4: function (e, t) {
      return bg_glue.L(e, t);
    },
    __wbindgen_jsval_loose_eq: function (e, t) {
      return bg_glue.Zj(e, t);
    },
    __wbindgen_boolean_get: function (e) {
      return bg_glue.HT(e);
    },
    __wbindgen_number_get: function (e, t) {
      return bg_glue.M1(e, t);
    },
    __wbindgen_as_number: function (e) {
      return bg_glue.d(e);
    },
    __wbg_getwithrefkey_1dc361bd10053bfe: function (e, t) {
      return bg_glue.QP(e, t);
    },
    __wbg_set_3f1d0b984ed272ed: function (e, t, n) {
      return bg_glue.S5(e, t, n);
    },
    __wbindgen_object_clone_ref: function (e) {
      return bg_glue.m_(e);
    },
    __wbg_String_8f0eb39a4a4c2f66: function (e, t) {
      return bg_glue.K_(e, t);
    },
    __wbg_get_142c69a0a38ca3a9: function (e, t) {
      return bg_glue.sB(e, t);
    },
    __wbg_length_1799fd5bf657c257: function (e) {
      return bg_glue.h2(e);
    },
    __wbg_new_9163745409122fa8: function () {
      return bg_glue.Tg();
    },
    __wbindgen_is_function: function (e) {
      return bg_glue.o$(e);
    },
    __wbg_new_f26c4aa30e9f9c0e: function () {
      return bg_glue.wn();
    },
    __wbg_next_6a72514087dd23f8: function (e) {
      return bg_glue.tq(e);
    },
    __wbg_next_96ab50690a8f6cca: function (e) {
      return bg_glue.TZ(e);
    },
    __wbg_done_b00ac79b7cf688ec: function (e) {
      return bg_glue.Sv(e);
    },
    __wbg_value_5af0abb3b2b9f90b: function (e) {
      return bg_glue.dU(e);
    },
    __wbg_iterator_c397425a538e3b86: function () {
      return bg_glue.PQ();
    },
    __wbg_get_9528546d1b415178: function (e, t) {
      return bg_glue.k(e, t);
    },
    __wbg_call_aa20ca83b389253c: function (e, t) {
      return bg_glue.UM(e, t);
    },
    __wbg_new_d684b6b3189ca362: function () {
      return bg_glue.Eo();
    },
    __wbg_set_61aa9ab41a0fb137: function (e, t, n) {
      return bg_glue.zJ(e, t, n);
    },
    __wbg_from_a024abd64978c640: function (e) {
      return bg_glue.Us(e);
    },
    __wbg_isArray_643b5b2b3afb0871: function (e) {
      return bg_glue.mr(e);
    },
    __wbg_instanceof_ArrayBuffer_b19b33ccadb20395: function (e) {
      return bg_glue.qy(e);
    },
    __wbg_set_b000a869769fbb80: function (e, t, n) {
      return bg_glue.YZ(e, t, n);
    },
    __wbg_isSafeInteger_1c660d27c689f62a: function (e) {
      return bg_glue.wZ(e);
    },
    __wbg_getTime_6581c5b2b6fa5cd7: function (e) {
      return bg_glue.ud(e);
    },
    __wbg_new0_d1ce931f26a22f53: function () {
      return bg_glue.wg();
    },
    __wbg_entries_2aaa882d15c26fd0: function (e) {
      return bg_glue.BJ(e);
    },
    __wbg_buffer_a215fd0f9dbb5414: function (e) {
      return bg_glue.cA(e);
    },
    __wbg_newwithbyteoffsetandlength_6347c118a44fdb35: function (e, t, n) {
      return bg_glue.Uu(e, t, n);
    },
    __wbg_new_b6f51e9f591d0d1d: function (e) {
      return bg_glue.fU(e);
    },
    __wbg_set_911a2f3ee8dd23b5: function (e, t, n) {
      return bg_glue.Nm(e, t, n);
    },
    __wbg_length_621925723fc28f40: function (e) {
      return bg_glue.LE(e);
    },
    __wbg_instanceof_Uint8Array_ee46a70987a1d66b: function (e) {
      return bg_glue.F(e);
    },
    __wbindgen_debug_string: function (e, t) {
      return bg_glue.fY(e, t);
    },
    __wbindgen_throw: function (e, t) {
      return bg_glue.Or(e, t);
    },
    __wbindgen_memory: function () {
      return bg_glue.oH();
    },
  },
};

const readProject = async (
  path: string,
  overrides: Record<string, string>
): Promise<{ path: string; contents: Uint8Array }[]> => {
  const files = await glob("**/*", { cwd: path, mark: true });
  return (
    await Promise.all(
      files.map(async (subpath) => {
        if (overrides[subpath])
          return {
            path: subpath,
            contents: new TextEncoder().encode(overrides[subpath]),
          };
        
        const relPath = join(path, subpath);
        if (subpath.endsWith("/")) return null as any;

        const contents = await readFile(relPath);
        if (contents.length === 0) return null as any;
        return { path: subpath, contents };
      })
    )
  ).filter((x) => x !== null);
};

let existingCompilerInterface = null;
export const loadCompiler = async () => {
  if (existingCompilerInterface) return existingCompilerInterface;
  const wasmInstance = await WebAssembly.instantiate(
    await readFile(join(__dirname, "./compiler.wasm")),
    bindgen
  );
  const compilerInterface = ((wasmInstance as any).instance || wasmInstance)
    .exports;

  bg_glue.loadCompiler(compilerInterface);
  existingCompilerInterface = compilerInterface;
  return compilerInterface;
};

type EaselError = {
  file: string;
  line: number;
  col: number;
  msg: string;
  len: number;
};

export const getErrors = async (
  path: string,
  overrides: Record<string, string>
): Promise<EaselError[]> => {
  const projectFiles = await readProject(path, overrides);
  const compileResult = CompilerObject.from_files(projectFiles);
  try {
    compileResult.check();
  } catch (e: any) {
    const errStr: string = e as string;
    let matches: RegExpMatchArray | null = null;
    if ((matches = errStr.match(/^(.+): +--> (\d+):(\d+)/))) {
      const file = matches[1];
      const line = parseInt(matches[2]);
      const col = parseInt(matches[3]);
      const msg = errStr.match(/= (.*)$/)!![1];
      return [{ file, line, col, msg, len: 3 }];
    } else if (
      (matches = errStr.match(
        /^(.+\.easel|\.esfx).*: line (\d+) \(char (\d+)\) "(.*)": (.*)$/
      ))
    ) {
      const file = matches[1];
      const line = parseInt(matches[2]);
      const col = parseInt(matches[3]);
      const len = matches[4].length;
      const msg = matches[5];
      return [{ file, line, col, msg, len }];
    }
    return [{ msg: e, line: 1, col: 1, file: "main.easel", len: 50 }];
  }
  return [];
};
