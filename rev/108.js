"use strict";
(self.webpackChunkcoruscate = self.webpackChunkcoruscate || []).push([[108], {
    2108: (e,t,n)=>{
        function a(e) {
            if ("string" == typeof e)
                return e;
            if (e instanceof Uint8Array)
                return (new TextDecoder).decode(e);
            if (e)
                throw new Error(`Unexpected content type: ${e}`);
            return null
        }
        function r(e) {
            if ("string" == typeof e)
                return (new TextEncoder).encode(e);
            if (e instanceof Uint8Array)
                return e;
            if (e)
                throw new Error(`Unexpected content type: ${e}`);
            return null
        }
        n.r(t),
        n.d(t, {
            default: ()=>ua
        });
        class l {
            artifactId;
            constructor(e) {
                this.artifactId = e
            }
        }
        var o = n("compiler")
          , i = n(2024);
        (0,
        i.oT)(o),
        o.__wbindgen_start();
        const s = "easel.toml";
        function c(e) {
            try {
                const t = e.get(s)
                  , n = t instanceof l ? "" : a(t);
                return i.pG.parse_metadata(n)
            } catch {
                return {
                    name: "Untitled",
                    domain: null
                }
            }
        }
        var u = n(8796);
        const m = /[*"\/\\<>:|?]/g;
        function d(e) {
            const t = e.lastIndexOf(".");
            return -1 === t || t < e.lastIndexOf("/") ? "" : e.substring(t + 1)
        }
        function f(e) {
            const t = e.lastIndexOf("/");
            return -1 === t ? e : e.substring(t + 1)
        }
        function h(e) {
            return e.replace(m, "")
        }
        function p(e, t) {
            return 0 === e.length ? t : `${e}/${t}`
        }
        const g = 16777216
          , E = 16777216
          , y = "artifacts.toml"
          , w = "ephemerals.toml"
          , v = i.LF.max_inline_bytes()
          , b = new Set(i.LF.must_compile_file_extensions());
        function _(e, t) {
            const n = i.SF.deserialize(e, t);
            try {
                const e = n.files()
                  , t = new Map;
                for (const n of e)
                    if (n.path === y) {
                        const e = i.LF.deserialize(a(n.contents));
                        for (const [n,a] of e)
                            t.set(n, new l(a))
                    } else
                        t.set(n.path, n.contents);
                return t
            } finally {
                n.free()
            }
        }
        function O(e) {
            const t = new Map
              , n = new Map;
            for (const [a,o] of e)
                o instanceof l || N(a) ? t.set(a, o) : n.set(a, r(o));
            return t.set(w, i.aZ.serialize([...n.keys()])),
            [t, n]
        }
        function k(e, t) {
            return t.length > v && !N(e)
        }
        function N(e) {
            const t = d(e);
            return b.has(t)
        }
        function x(e) {
            const t = S(e)
              , n = i.SF.from_files(t);
            try {
                n.check()
            } finally {
                n.free()
            }
        }
        function S(e) {
            const t = new Array
              , n = new Map;
            for (const [a,o] of e)
                o instanceof l ? n.set(a, o.artifactId) : t.push({
                    path: a,
                    contents: r(o)
                });
            if (n.size > 0) {
                const e = i.LF.serialize(n);
                t.unshift({
                    path: y,
                    contents: r(e)
                })
            }
            return t
        }
        function I(e) {
            return e instanceof C ? e.state.doc.toString() : e
        }
        class C {
            state;
            scrollSnapshot;
            constructor(e) {
                this.state = e
            }
        }
        class P {
            files;
            folders;
            constructor(e=new Set, t=new Set) {
                this.files = e,
                this.folders = t
            }
            clone() {
                return new P(new Set(this.files),new Set(this.folders))
            }
            removeFile(e) {
                this.files.delete(e);
                const t = new Set
                  , n = e.split("/");
                for (let e = 1; e < n.length - 1; ++e)
                    t.add(n.slice(0, e).join("/"));
                for (const e of this.files) {
                    if (t.size <= 0)
                        break;
                    for (const n of t) {
                        if (!e.startsWith(n + "/"))
                            break;
                        t.delete(n)
                    }
                }
                for (const e of t)
                    this.folders.delete(e)
            }
        }
        var $ = n(6255)
          , F = n(8120)
          , T = n(2109);
        class D {
            content;
            constructor(e) {
                this.content = (0,
                $.cn)(e)
            }
            testQuery(e, t) {
                if (!e.getCursor(F.xv.of([t])).next().done)
                    return !0;
                const n = this.content.get();
                if (n instanceof C)
                    return !e.getCursor(n.state.doc).next().done;
                if ("string" == typeof n)
                    return !e.getCursor(F.xv.of([n])).next().done;
                if (!(n instanceof Uint8Array))
                    return !1;
                {
                    const r = d(t)
                      , l = T.getType(r) ?? "application/octet-stream"
                      , o = l?.split("/", 1)[0];
                    switch (o) {
                    case "video":
                    case "audio":
                    case "image":
                        return !1;
                    default:
                        return !e.getCursor(F.xv.of([a(n)])).next().done
                    }
                }
            }
        }
        class R {
            files = (0,
            $.cn)(new Map);
            expanded = (0,
            $.cn)(!1);
            has(e) {
                return this.files.get().has(e)
            }
            insert(e, t, n=0) {
                let a = !1;
                const r = t[n]
                  , l = n >= t.length - 1
                  , o = this.files.get();
                if (l)
                    o.set(r, e),
                    a = !0;
                else {
                    let l = o.get(r);
                    l && l instanceof R || (l = new R,
                    o.set(r, l),
                    a = !0),
                    l.insert(e, t, n + 1)
                }
                a && this.files.set(R.sortItems(o))
            }
            overwrite(e, t, n, a) {
                let r = !1;
                const l = e[t]
                  , o = t >= e.length - 1
                  , i = this.files.get();
                if (o)
                    i.set(l, new D(n)),
                    r = !0;
                else {
                    let o = i.get(l);
                    o && o instanceof R || (o = new R,
                    i.set(l, o),
                    r = !0),
                    o.overwrite(e, t + 1, n, a)
                }
                r && !a && this.files.set(R.sortItems(i))
            }
            delete(e, t=0) {
                const n = e[t]
                  , a = t >= e.length - 1
                  , r = this.files.get();
                if (a) {
                    const e = r.get(n);
                    return e && (r.delete(n),
                    this.files.set(R.sortItems(r))),
                    e
                }
                {
                    const a = r.get(n);
                    return a && a instanceof R ? a.delete(e, t + 1) : void 0
                }
            }
            sortRecursive() {
                this.sort();
                const e = this.files.get();
                for (const t of e.values())
                    t instanceof R && t.sort()
            }
            sort() {
                this.files.set(R.sortItems(this.files.get()))
            }
            static sortItems(e) {
                return new Map([...e].sort(((e,t)=>{
                    const n = e[1]instanceof R
                      , a = t[1]instanceof R
                      , r = e[0]
                      , l = t[0];
                    return n && !a ? -1 : !n && a ? 1 : r < l ? -1 : r > l ? 1 : 0
                }
                )))
            }
            *fileAndFolderPaths(e) {
                for (const [t,n] of this.files.get()) {
                    const a = p(e, t);
                    yield a,
                    n instanceof R && (yield*n.fileAndFolderPaths(a))
                }
            }
            *fileEntries(e) {
                for (const [t,n] of this.files.get()) {
                    const a = p(e, t);
                    n instanceof R ? yield*n.fileEntries(a) : yield[a, n.content.get()]
                }
            }
            find(e, t=0) {
                const n = this.files.get().get(e[t]);
                return t >= e.length - 1 ? n : n instanceof R ? n.find(e, t + 1) : void 0
            }
            findFile(e, t=0) {
                const n = this.find(e, t);
                return n instanceof D ? n : void 0
            }
            findEnclosingFolder(e, t=0) {
                const n = this.files.get().get(e[t]);
                return n instanceof R ? n.findEnclosingFolder(e, t + 1) : [e.slice(0, t), this]
            }
            queryInto(e, t, n) {
                let a = !1;
                const r = this.files.get();
                for (const [l,o] of r) {
                    const r = [...e, l];
                    o instanceof R ? o.queryInto(r, t, n) && (a = !0) : o.testQuery(t, l) && (a = !0,
                    n.files.add(r.join("/")))
                }
                return a && n.folders.add(e.join("/")),
                a
            }
        }
        class U {
            root = new R;
            constructor(e) {
                for (const [t,n] of e)
                    this.overwrite(t.split("/"), n, !0);
                this.sortRecursive()
            }
            overwrite(e, t, n) {
                this.root.overwrite(e, 0, t, n)
            }
            insert(e, t) {
                this.root.insert(e, t)
            }
            delete(e) {
                return this.root.delete(e)
            }
            sortRecursive() {
                this.root.sortRecursive()
            }
            *fileAndFolderPaths() {
                yield*this.root.fileAndFolderPaths("")
            }
            *entries() {
                yield*this.root.fileEntries("")
            }
            collect() {
                const e = new Map;
                for (const [t,n] of this.entries())
                    e.set(t, I(n));
                return e
            }
            query(e) {
                const t = new P;
                return this.root.queryInto([], e, t),
                t
            }
            find(e) {
                return this.root.find(e)
            }
            findFile(e) {
                const t = this.find(e);
                return t instanceof D ? t : void 0
            }
        }
        const z = "coruscate-mod";
        class M {
            modify;
            onPoison;
            saveDelayMs;
            poisoned = !1;
            queue = new Array;
            hasPendingChanges = (0,
            $.cn)(!0);
            saveTimer = null;
            saving;
            constructor(e, t, n=Promise.resolve(), a=200) {
                this.modify = e,
                this.onPoison = t,
                this.saveDelayMs = a,
                this.saving = n.then((()=>{
                    this.updatePendingChangesState()
                }
                )).catch((e=>{
                    this.poisoned = !0,
                    t(e)
                }
                ))
            }
            enqueue(e) {
                if (this.poisoned)
                    return;
                this.hasPendingChanges.set(!0);
                const t = this.queue[this.queue.length - 1];
                "update" === e.type && "update" === t?.type && t.path === e.path ? t.content = e.content : this.queue.push(e),
                this.saveDebounced()
            }
            flush() {
                this.saveTimer && (this.saveTimer = null,
                this.enqueueSave())
            }
            updatePendingChangesState() {
                this.hasPendingChanges.set(this.queue.length > 0)
            }
            async waitForPendingChanges() {
                for (; this.hasPendingChanges.get(); )
                    await this.saving
            }
            saveDebounced() {
                this.saveTimer && clearTimeout(this.saveTimer),
                this.saveTimer = setTimeout((()=>{
                    this.saveTimer = null,
                    this.enqueueSave()
                }
                ), this.saveDelayMs)
            }
            enqueueSave() {
                this.saving = this.saving.then((()=>this.save()))
            }
            async save() {
                if (!this.poisoned)
                    try {
                        const e = this.queue;
                        this.queue = [];
                        for (const t of e)
                            await this.modify(t);
                        this.updatePendingChangesState()
                    } catch (e) {
                        this.poisoned = !0,
                        this.onPoison(e)
                    }
            }
        }
        class q {
            hasUncommittedChanges;
            freed = !1;
            storage;
            saveLoop;
            constructor(e, t=!1) {
                this.hasUncommittedChanges = t,
                this.storage = function() {
                    const e = Date.now().toString(36) + Math.floor(1e9 * Math.random()).toString(36);
                    return V.touch(e).catch(console.error),
                    new ee(e)
                }(),
                this.saveLoop = new M((e=>this.applyModification(e)),(e=>console.error(`Autosave[${this.storage.id}] failed`, e)),this.initialize(e, t))
            }
            free() {
                this.freed || (this.freed = !0,
                A(this.storage.id).catch(console.error))
            }
            enqueue(e) {
                this.saveLoop.enqueue(e)
            }
            flush() {
                this.saveLoop.flush()
            }
            async initialize(e, t) {
                const n = new Array;
                n.push(this.storage.saveModifiedFlag(t));
                for (const [t,a] of e)
                    n.push(this.storage.save(t, a));
                await Promise.all(n),
                this.freed || await async function(e) {
                    await V.touch(e.id),
                    A(V.replaceCurrentSlot(e.id)).catch(console.error)
                }(this.storage)
            }
            setUncommittedState(e) {
                this.hasUncommittedChanges !== e && (this.hasUncommittedChanges = e,
                this.enqueue({
                    type: "uncommitted",
                    hasUncommittedChanges: e
                }))
            }
            async applyModification(e) {
                if (!this.freed)
                    switch (e.type) {
                    case "uncommitted":
                        return this.applyUncommittedChangesModification(e.hasUncommittedChanges);
                    case "update":
                        return this.applyUpdateModification(e.path, e.content);
                    case "delete":
                        return this.applyDeleteModification(e.path, e.isFolder);
                    case "move":
                        return this.applyMoveModification(e.fromPath, e.toPath, e.isFolder)
                    }
            }
            async applyUncommittedChangesModification(e) {
                console.log(`Autosave[${this.storage.id}] uncommitedChanges=${e}`),
                await this.storage.saveModifiedFlag(e)
            }
            async applyUpdateModification(e, t) {
                console.log(`Autosave[${this.storage.id}] update '${e}'`),
                await this.storage.save(e, I(t))
            }
            async applyDeleteModification(e, t) {
                console.log(`Autosave[${this.storage.id}] delete '${e}' (isFolder=${t})`),
                t ? await this.storage.deleteFolder(e + "/") : await this.storage.delete(e)
            }
            async applyMoveModification(e, t, n) {
                console.log(`Autosave[${this.storage.id}] move '${e}' to '${t}' (isFolder=${n})`),
                n ? await this.storage.moveFolder(e + "/", t + "/") : await this.storage.move(e, t)
            }
        }
        async function A(e) {
            await ee.drop(e),
            await V.remove(e)
        }
        var Q = n(3586);
        class L {
            root;
            lastModified;
            freed = !1;
            poison = (0,
            $.cn)(null);
            saveLoop;
            version = 1;
            constructor(e, t, n=Promise.resolve()) {
                this.root = e,
                this.lastModified = t,
                this.saveLoop = new M((e=>this.applyModification(e)),(e=>this.onPoison(e)),n)
            }
            onPoison(e) {
                console.log("FileSystemSaver poisoned", e),
                this.poison.set(`${e}`)
            }
            static writeNew(e, t) {
                return new L(e,new Map,async function(e, t) {
                    console.log(`Filesystem: writing ${e.size} initial files...`);
                    let n = new Array;
                    for (const [a,r] of e.entries()) {
                        if (r instanceof l)
                            return;
                        n.push(j(r, a, t))
                    }
                    await Promise.all(n),
                    console.log(`Filesystem: ${e.size} initial files written`)
                }(t, e))
            }
            free() {
                this.freed || (this.freed = !0)
            }
            enqueue(e) {
                this.saveLoop.enqueue(e),
                ++this.version
            }
            flush() {
                this.saveLoop.flush()
            }
            getSavedFolderName() {
                return this.root.name
            }
            async reload(e, t) {
                try {
                    e: for (; ; ) {
                        await this.saveLoop.waitForPendingChanges();
                        let n = this.version;
                        const a = new Set
                          , r = [{
                            path: "",
                            folder: this.root
                        }];
                        for (; r.length > 0; ) {
                            const {path: t, folder: l} = r.pop();
                            for await(const [o,i] of l.entries()) {
                                if (this.version > n)
                                    continue e;
                                const l = p(t, o);
                                if (B(o))
                                    ;
                                else if (i instanceof FileSystemDirectoryHandle)
                                    a.add(l),
                                    r.push({
                                        path: l,
                                        folder: i
                                    });
                                else if (i instanceof FileSystemFileHandle) {
                                    a.add(l);
                                    const t = this.lastModified.get(l)
                                      , r = await i.getFile()
                                      , o = r.lastModified;
                                    if (o === t)
                                        continue;
                                    const s = await r.arrayBuffer();
                                    if (this.version > n)
                                        continue e;
                                    this.lastModified.set(l, o),
                                    e(l, new Uint8Array(s))
                                }
                            }
                        }
                        if (!(this.version > n)) {
                            for (const e of this.lastModified.keys())
                                a.has(e) || (this.lastModified.delete(e),
                                t(e));
                            break
                        }
                    }
                } catch (e) {
                    console.log("Filesystem: error while reloading", e)
                }
            }
            async applyModification(e) {
                switch (e.type) {
                case "uncommitted":
                    return;
                case "update":
                    return this.applyUpdateModification(e.path, e.content);
                case "delete":
                    return this.applyDeleteModification(e.path, e.isFolder);
                case "move":
                    return this.applyMoveModification(e.fromPath, e.toPath, e.isFolder)
                }
            }
            async applyUpdateModification(e, t) {
                const n = I(t);
                if (!(n instanceof l)) {
                    console.log(`Filesystem: updating '${e}'`);
                    try {
                        const [t,a] = await J(this.root, e, !0)
                          , r = await t.getFileHandle(a, {
                            create: !0
                        })
                          , l = await r.createWritable();
                        await l.truncate(0),
                        await l.write(n),
                        await l.close()
                    } catch (t) {
                        if (G(t, !0))
                            throw t;
                        console.log(`Filesystem: error updating '${e}'`, t)
                    }
                }
            }
            async applyDeleteModification(e, t) {
                console.log(`Filesystem: deleting '${e}'`);
                try {
                    const [n,a] = await J(this.root, e);
                    await n.removeEntry(a, {
                        recursive: t
                    })
                } catch (t) {
                    if (G(t))
                        throw t;
                    console.log(`Filesystem: error deleting '${e}'`, t)
                }
            }
            async applyMoveModification(e, t, n) {
                console.log(`Filesystem: moving '${e}' to '${t}'`);
                try {
                    const [a,r] = await J(this.root, e);
                    n ? await this.moveFolder(a, r, t) : await this.moveFile(a, r, t)
                } catch (n) {
                    if (G(n))
                        throw n;
                    console.log(`Filesystem: error moving '${e}' to '${t}'`, n)
                }
            }
            async moveFolder(e, t, n) {
                try {
                    const a = await e.getDirectoryHandle(t);
                    for await(const [e,t] of a.entries())
                        "directory" === t.kind ? await this.moveFolder(a, e, n + "/" + e) : await this.moveFile(a, e, n + "/" + e);
                    await e.removeEntry(t)
                } catch (e) {
                    if (G(e))
                        throw e;
                    console.log(`Filesystem: error moving folder '${t}' to '${n}'`, e)
                }
            }
            async moveFile(e, t, n) {
                try {
                    const a = await e.getFileHandle(t)
                      , r = await a.getFile()
                      , l = await r.arrayBuffer()
                      , [o,i] = await J(this.root, n, !0)
                      , s = await o.getFileHandle(i, {
                        create: !0
                    })
                      , c = await s.createWritable();
                    await c.truncate(0),
                    await c.write(l),
                    await c.close(),
                    await e.removeEntry(t)
                } catch (e) {
                    if (G(e))
                        throw e;
                    console.log(`Filesystem: error moving file '${t}' to '${n}'`, e)
                }
            }
        }
        async function J(e, t, n=!1) {
            let a = t
              , r = e;
            for (; a; ) {
                const [e,t] = (0,
                Q.T)(a, "/");
                if (!t)
                    break;
                r = await r.getDirectoryHandle(e, {
                    create: n
                }),
                a = t
            }
            return [r, a]
        }
        function G(e, t=!1) {
            if (e instanceof DOMException)
                switch (e.name) {
                case "NotFoundError":
                    return t;
                case "TypeMismatchError":
                    return !1
                }
            else if (e instanceof TypeError)
                return !1;
            return !0
        }
        async function j(e, t, n) {
            try {
                const [a,r] = await J(n, t, !0)
                  , l = await a.getFileHandle(r, {
                    create: !0
                })
                  , o = await l.createWritable();
                await o.truncate(0),
                await o.write(e),
                await o.close()
            } catch (e) {
                if (G(e))
                    throw e;
                console.log(`Filesystem: error writing initial file '${t}'`, e)
            }
        }
        function B(e) {
            return e.startsWith(".") || 0 === e.length
        }
        class W {
            freed = !1;
            aborter = new AbortController;
            files;
            saver;
            preloading;
            reloading = Promise.resolve();
            constructor(e, t) {
                this.files = new U(e),
                this.saver = (0,
                $.cn)(t ?? new q(e)).withDetacher((e=>e?.free())),
                this.preloading = this.preload().catch(console.error)
            }
            free() {
                this.freed || (this.freed = !0,
                this.aborter.abort(),
                this.saver.set(null))
            }
            async preload() {
                const e = new Array;
                for (const [t,n] of this.files.entries())
                    n instanceof l && e.push(this.preloadFile(t).catch((e=>console.error(`Error preloading ${t}`, e))));
                await Promise.all(e)
            }
            async preloadFile(e) {
                const t = this.files.findFile(e.split("/")).content.get();
                if (!(t instanceof l))
                    return;
                const n = t.artifactId
                  , a = d(e);
                if (!a)
                    return;
                const r = (0,
                u.ln)(n, a)
                  , o = await fetch(r, {
                    signal: this.aborter.signal
                })
                  , i = await o.blob()
                  , s = new Uint8Array(await i.arrayBuffer());
                this.acceptPreload(e, n, s)
            }
            acceptPreload(e, t, n) {
                const a = this.files.findFile(e.split("/"));
                if (!a)
                    return;
                const r = a.content.get();
                r instanceof l && r.artifactId === t && (a.content.set(n),
                this.saver.get()?.enqueue({
                    type: "update",
                    path: e,
                    content: n
                }))
            }
            async waitUntilFilesPreloaded() {
                return this.preloading
            }
            async reloadFromDisk() {
                const e = this.saver.get();
                e instanceof L && await (this.reloading = this.reloading.then((()=>{
                    e.reload(((e,t)=>this.onFileModifiedOnDisk(e, t)), (e=>this.onFileRemovedOnDisk(e)))
                }
                )))
            }
            async waitForInProgressReloadingFromDisk() {
                await this.reloading
            }
            onFileModifiedOnDisk(e, t) {
                const n = e.split("/")
                  , a = this.files.find(n);
                if (a instanceof D) {
                    const n = I(a.content.get());
                    if (!(n instanceof l) && 0 === indexedDB.cmp(r(n), t))
                        return;
                    console.log(`Filesystem changed: reloading '${e}'`),
                    a.content.set(t)
                } else
                    console.log(`Filesystem changed: adding '${e}'`),
                    this.files.insert(new D(t), n)
            }
            onFileRemovedOnDisk(e) {
                this.files.delete(e.split("/")) && console.log(`Filesystem changed: deleted '${e}'`)
            }
            switchToFileSaver(e) {
                const t = L.writeNew(e, this.files.collect());
                this.saver.set(t),
                t.reload(((e,t)=>this.onFileModifiedOnDisk(e, t)), (e=>this.onFileRemovedOnDisk(e))).catch(console.error)
            }
            autosaveNowIfNecessary() {
                this.saver.get()?.flush()
            }
            modified() {
                const e = this.saver.get();
                e instanceof q && e.setUncommittedState(!0)
            }
            committed() {
                const e = this.saver.get();
                e instanceof q && e.setUncommittedState(!1)
            }
            hasUncommittedChanges() {
                const e = this.saver.get();
                return e instanceof q && e.hasUncommittedChanges
            }
            onFileEdited(e, t) {
                this.saver.get()?.enqueue({
                    type: "update",
                    path: e,
                    content: t
                }),
                this.modified()
            }
            insertFile(e, t) {
                this.files.insert(new D(t), e.split("/")),
                this.saver.get()?.enqueue({
                    type: "update",
                    path: e,
                    content: t
                }),
                this.modified()
            }
            move(e, t) {
                const n = this.files.delete(e.split("/"));
                n && (this.files.insert(n, t.split("/")),
                this.saver.get()?.enqueue({
                    type: "move",
                    fromPath: e,
                    toPath: t,
                    isFolder: n instanceof R
                }),
                this.modified())
            }
            delete(e) {
                const t = this.files.root.delete(e.split("/"));
                if (t)
                    return this.saver.get()?.enqueue({
                        type: "delete",
                        path: e,
                        isFolder: t instanceof R
                    }),
                    this.modified(),
                    t
            }
            undelete(e, t) {
                if (this.files.root.insert(t, e.split("/")),
                t instanceof D)
                    this.saver.get()?.enqueue({
                        type: "update",
                        path: e,
                        content: t.content.get()
                    });
                else
                    for (const [n,a] of t.fileEntries(e))
                        this.saver.get()?.enqueue({
                            type: "update",
                            path: n,
                            content: a
                        });
                this.modified()
            }
            replaceAll(e) {
                const t = new Set;
                for (const [n,a] of e) {
                    const e = n.split("/");
                    {
                        let n = "";
                        for (let a = 0; a < e.length; ++a)
                            n = p(n, e[a]),
                            t.add(n)
                    }
                    const o = this.files.find(e);
                    if (o instanceof D) {
                        if (!(a instanceof l)) {
                            const e = I(o.content.get());
                            if (!(e instanceof l) && 0 === indexedDB.cmp(r(e), a))
                                continue
                        }
                        o.content.set(a),
                        console.log(`Import: updated '${n}'`)
                    } else
                        o instanceof R ? (this.saver.get()?.enqueue({
                            type: "delete",
                            path: n,
                            isFolder: !0
                        }),
                        this.files.insert(new D(a), e),
                        console.log(`Import: replaced folder '${n}' with file`)) : (this.files.insert(new D(a), e),
                        console.log(`Import: added '${n}'`));
                    this.saver.get()?.enqueue({
                        type: "update",
                        path: n,
                        content: a
                    }),
                    this.modified()
                }
                const n = new Array;
                for (const e of this.files.fileAndFolderPaths())
                    t.has(e) || n.push(e);
                for (const e of n) {
                    const t = this.files.delete(e.split("/"));
                    t && (console.log(`Import: deleted '${e}'`),
                    this.saver.get()?.enqueue({
                        type: "delete",
                        path: e,
                        isFolder: t instanceof R
                    }))
                }
            }
        }
        var X = n(9483)
          , Y = n.n(X)
          , K = n(8555);
        const Z = "ModAutoSaveStorage"
          , H = "modified";
        class V {
            static store = Y().createInstance({
                name: Z,
                storeName: "index"
            });
            static readCurrentSlot() {
                return window.localStorage.getItem(K.F.CurrentAutoSaveSlot) ?? null
            }
            static replaceCurrentSlot(e) {
                const t = V.readCurrentSlot();
                return e ? window.localStorage.setItem(K.F.CurrentAutoSaveSlot, e) : window.localStorage.removeItem(K.F.CurrentAutoSaveSlot),
                t
            }
            static async touch(e) {
                e && await V.store.setItem(e, Date.now())
            }
            static async readExpired() {
                const e = new Array
                  , t = Date.now();
                return await V.store.iterate(((n,a)=>{
                    "number" == typeof n && t - n > 864e5 && e.push(a)
                }
                )),
                e
            }
            static async remove(e) {
                e && await V.store.removeItem(e)
            }
        }
        class ee {
            id;
            store;
            meta;
            constructor(e) {
                this.id = e,
                this.store = Y().createInstance({
                    name: Z,
                    storeName: te(e),
                    driver: Y().INDEXEDDB
                }),
                this.meta = Y().createInstance({
                    name: Z,
                    storeName: ne(e),
                    driver: Y().INDEXEDDB
                })
            }
            static legacy() {
                return new ee(null)
            }
            static async drop(e) {
                if (e) {
                    try {
                        await Y().dropInstance({
                            name: Z,
                            storeName: te(e)
                        })
                    } catch {}
                    try {
                        await Y().dropInstance({
                            name: Z,
                            storeName: ne(e)
                        })
                    } catch {}
                }
            }
            async loadAll() {
                const e = new Map;
                return await this.store.iterate(((t,n)=>{
                    if (t instanceof Uint8Array || "string" == typeof t)
                        e.set(n, t);
                    else if ("object" == typeof t) {
                        const a = t;
                        "string" == typeof a.artifactId && e.set(n, new l(a.artifactId))
                    }
                }
                )),
                e
            }
            async save(e, t) {
                if (t instanceof l) {
                    const n = {
                        artifactId: t.artifactId
                    };
                    await this.store.setItem(e, n)
                } else
                    await this.store.setItem(e, t)
            }
            async deleteFolder(e) {
                const t = new Array;
                await this.store.iterate(((n,a)=>{
                    a.startsWith(e) && t.push(a)
                }
                ));
                const n = new Array;
                for (const e of t)
                    n.push(this.store.removeItem(e));
                await Promise.all(n)
            }
            async delete(e) {
                await this.store.removeItem(e)
            }
            async move(e, t) {
                const n = await this.store.getItem(e);
                n && (await this.store.setItem(t, n),
                await this.store.removeItem(e))
            }
            async moveFolder(e, t) {
                const n = new Array;
                await this.store.iterate(((a,r)=>{
                    r.startsWith(e) && n.push({
                        fromPath: r,
                        toPath: t + r.substring(e.length)
                    })
                }
                ));
                const a = new Array;
                for (const {fromPath: e, toPath: t} of n)
                    a.push(this.move(e, t));
                await Promise.all(a)
            }
            async loadModifiedFlag() {
                return !!await this.meta.getItem(H)
            }
            async saveModifiedFlag(e) {
                await this.meta.setItem(H, e)
            }
        }
        function te(e) {
            return e ? `main-${e}` : "main"
        }
        function ne(e) {
            return e ? `meta-${e}` : "meta"
        }
        var ae = n(7294)
          , re = n(6336);
        async function le(e, t) {
            try {
                if (e ??= "",
                0 === (e = e.trim()).length)
                    return {
                        type: "error",
                        domain: e,
                        error: "Required"
                    };
                let n = `/api/domains/${encodeURIComponent(e)}`;
                t && (n += `?username=${encodeURIComponent(t)}`);
                const a = await fetch(n);
                if (200 === a.status) {
                    const t = await a.json();
                    return t.admin ? {
                        type: "canUpdate",
                        domain: e,
                        existingGameId: t.gameId
                    } : {
                        type: "unavailable",
                        domain: e
                    }
                }
                if (404 === a.status)
                    return (await a.json()).domainQuotaRequired ? {
                        type: "quotaRequired",
                        domain: e
                    } : {
                        type: "canCreate",
                        domain: e
                    };
                if (a.status >= 400 && a.status < 500)
                    return {
                        type: "error",
                        domain: e,
                        error: await a.text()
                    };
                {
                    const t = await a.text();
                    return console.error(`Error retrieving domain details '${e}'`, a.status, t),
                    {
                        type: "error",
                        domain: e,
                        error: `${t}`
                    }
                }
            } catch (t) {
                return console.error("Error validating domain", t),
                {
                    type: "error",
                    domain: e,
                    error: `${t}`
                }
            }
        }
        async function oe(e, t) {
            const n = await fetch(`/api/artifacts/${encodeURIComponent(e)}`, {
                method: "POST",
                body: t,
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (200 === n.status)
                return (await n.json()).artifactId;
            {
                const t = await n.text()
                  , a = `Error uploading ${e} artifact`;
                throw console.error(a, n.status, t),
                new Error(`${a}: ${t}`)
            }
        }
        async function ie(e, t) {
            const n = {
                gameId: t
            }
              , a = await fetch(`/api/domains/${encodeURIComponent(e)}`, {
                method: "POST",
                body: JSON.stringify(n),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (200 !== a.status) {
                const n = await a.text()
                  , r = `Error assigning game '${t}' to domain '${e}'`;
                throw console.error(r, a.status, n),
                new Error(`${r}: ${n}`)
            }
        }
        function se(e) {
            const {gameId: t, gameName: n} = e
              , [a,r] = (0,
            ae.useState)(!1)
              , [l,o] = (0,
            ae.useState)(!1);
            return l ? ae.createElement("div", {
                className: "vstack"
            }, ae.createElement("h3", null, "Deleting Game..."), ae.createElement("p", {
                className: "loading"
            }, "Deleting ", ae.createElement("b", null, n), "...")) : ae.createElement("div", {
                className: "vstack"
            }, ae.createElement("h3", null, "Game Deletion"), ae.createElement(re.s_, {
                className: "vstack"
            }, ae.createElement("div", null, "If you choose to delete ", ae.createElement("b", null, n), ", all data associated with the game will be permanently deleted. This includes all game source code, persistent data, and any other information associated with the game."), ae.createElement("div", null, ae.createElement("b", {
                className: "error-text"
            }, "Warning: "), " this cannot be undone!")), ae.createElement("div", {
                className: "hstack"
            }, ae.createElement(re.zx, {
                tier: "primary",
                raised: !0,
                onClick: function() {
                    r(!0)
                }
            }, "Delete Game")), a && ae.createElement(re.u_, null, ae.createElement(re.s_, {
                className: "opaque vstack"
            }, ae.createElement("h3", null, "Are you sure?"), ae.createElement("p", null, "Are you sure you want to delete ", ae.createElement("b", null, n), " forever?"), ae.createElement("div", {
                className: "hstack"
            }, ae.createElement(re.zx, {
                tier: "primary",
                raised: !0,
                onClick: function() {
                    (async function() {
                        try {
                            o(!0),
                            await async function(e) {
                                const t = await fetch(`/api/games/${encodeURIComponent(e)}`, {
                                    method: "DELETE"
                                });
                                if (200 !== t.status) {
                                    const n = await t.text()
                                      , a = `Error deleting game '${e}'`;
                                    throw console.error(a, t.status, n),
                                    new Error(`${a}: ${n}`)
                                }
                            }(t),
                            e.onDelete()
                        } catch (e) {
                            console.error("Error deleting game", e)
                        }
                    }
                    )().catch(console.error)
                }
            }, "Yes, delete it"), ae.createElement(re.zx, {
                tier: "secondary",
                raised: !0,
                onClick: function() {
                    r(!1)
                }
            }, "Cancel")))))
        }
        var ce = n(7200);
        const ue = 3e5
          , me = 4;
        function de(e) {
            const t = new Array;
            for (const [n,a] of e)
                if (!(a instanceof l) && k(n, a)) {
                    const e = r(a)
                      , l = d(n)
                      , o = i.LF.base64_hash_artifact(e);
                    t.push({
                        path: n,
                        bytes: e,
                        hash: o,
                        extension: l
                    })
                }
            return t
        }
        function fe(e) {
            let t = ""
              , n = 0;
            for (const {path: a, bytes: r} of e) {
                const e = r.byteLength;
                n += e,
                e > g && (t.length > 0 && (t += "\n"),
                t += `File '${a}' is too large: ${Ee(e)} (maximum size is ${Ee(g)})`)
            }
            if (n > E && (t.length > 0 && (t += "\n"),
            t += `Total size of project is too large: ${Ee(n)} (maximum size is ${Ee(E)})`),
            t.length > 0)
                throw t
        }
        function he(e, t, n) {
            return `${e}.${t}/${n}`
        }
        async function pe(e, t, n) {
            t?.("Uploading assets...");
            const a = new Map(e)
              , r = de(e);
            fe(r);
            const o = await async function(e, t) {
                const n = new Array
                  , a = new Map
                  , r = Date.now();
                for (const l of e) {
                    const e = he(l.hash, l.extension, l.bytes.byteLength);
                    if (t) {
                        for (const [e,n] of t)
                            r >= n.timestamp + ue && a.delete(e);
                        const n = t.get(e);
                        if (n) {
                            a.set(e, n.artifactId);
                            continue
                        }
                    }
                    n.push({
                        hash: l.hash,
                        extension: l.extension,
                        size: l.bytes.byteLength
                    })
                }
                if (n.length > 0) {
                    const e = await async function(e) {
                        const t = {
                            files: e
                        }
                          , n = await fetch("/api/artifacts", {
                            method: "POST",
                            body: JSON.stringify(t),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        });
                        if (200 === n.status)
                            return (await n.json()).files;
                        {
                            const t = await n.text()
                              , a = "Error resolving artifacts";
                            throw console.error(a, e, n.status, t),
                            new Error(`${a}: ${t}`)
                        }
                    }(n);
                    for (const n of e) {
                        const e = he(n.hash, n.extension, n.size);
                        a.set(e, n.artifactId),
                        t?.set(e, {
                            artifactId: n.artifactId,
                            timestamp: r
                        })
                    }
                }
                return a
            }(r, n)
              , i = new Array;
            for (const e of r) {
                const t = o.get(he(e.hash, e.extension, e.bytes.byteLength));
                t ? a.set(e.path, new l(t)) : i.push(e)
            }
            const s = new Map;
            for (; i.length > 0 || s.size > 0; ) {
                if (t?.(`Uploading assets (${i.length + s.size} remaining)...`),
                i.length > 0 && s.size < me) {
                    const e = i.pop()
                      , t = `${e.hash}.${e.extension}`
                      , n = oe(t, e.bytes).then((n=>{
                        a.set(e.path, new l(n)),
                        console.log(`Uploaded ${e.path} (${t}): ${n}`)
                    }
                    ));
                    s.set(e.path, n),
                    n.then((()=>s.delete(e.path)))
                }
                await Promise.any(s.values())
            }
            return t?.("Finalizing asset upload..."),
            a
        }
        // e is map from path to source
        async function ge(e, t, n=null, a=null) {
            console.log(`Initiating deployment: gameId=${n} reuse=${a?.gameId}`);
            let r = function(e) {
                const t = S(e);
                return i.SF.from_files(t)
            }(e);
            try {
                t?.("Validating code...");
                const e = r.hash();
                if (a && a.hash === e)
                    return console.log(`Reusing previous deployment: blueprintId=${a.blueprintId} hash=${e}`),
                    t?.("Finalizing..."),
                    a;
                const l = function(e) {
                    return u.bI.deserialize(e.compile())
                }(r);
                t?.("Uploading source code...");
                const o = r.serialize();
                console.log(`Uploading source code (${o.byteLength} bytes)...`);
                const {gameId: i, blueprintId: s} = await async function(e, t, n) {
                    const a = await fetch(`/api/games/${e ? encodeURIComponent(e) : "new"}/source?create=${!!t}`, {
                        method: "POST",
                        body: n
                    });
                    if (200 === a.status)
                        return await a.json();
                    {
                        const e = await a.text()
                          , t = "Error uploading source code";
                        throw console.error(t, a.status, e),
                        new Error(`${t}: ${e}`)
                    }
                }(n ?? a?.gameId, !n, o);
                return t?.("Finalizing deployment..."),
                console.log(`Deployment complete: gameId=${i} blueprintId=${s} hash=${e}`),
                {
                    gameId: i,
                    blueprintId: s,
                    blueprint: l,
                    hash: e
                }
            } finally {
                r.free()
            }
        }
        function Ee(e) {
            const t = e / 1024 / 1024;
            return t <= 0 ? "0 MB" : t < 1 ? "1 MB" : t < 10 ? `${t.toFixed(1)} MB` : `${t.toFixed(0)} MB`
        }
        const ye = /[^@a-z0-9-_\.:\/]/g;
        function we(e) {
            return e ??= "",
            (e = e.trim()).length < 1 ? "Too short" : e.length > 50 ? "Too long" : /[\r\n]/.test(e) ? "Invalid characters" : null
        }
        class ve {
            baseHost = (0,
            ce.UO)();
            sanitize(e) {
                e ??= "";
                const t = (e = e.replace(ye, "")).split("/")
                  , n = new Array;
                this.sanitizeHost(t[0], n);
                for (let e = 1; e < t.length; e++) {
                    const a = 1 === e;
                    this.sanitizeSegment(a, t[e], n)
                }
                return n.join("/")
            }
            sanitizeHost(e, t) {
                e && 0 !== e.length ? t.push(e) : t.push(this.baseHost)
            }
            sanitizeSegment(e, t, n) {
                t && 0 !== t.length ? (e && !t.startsWith("@") && (t = "@" + t),
                n.push(t.toLowerCase())) : "" !== n[n.length - 1] && n.push("")
            }
        }
        class be {
            quota = null;
            async validate(e, t, n=!1, a) {
                const r = await le(t, a);
                if ("quotaRequired" === r.type) {
                    let t = this.quota;
                    if (t && !n || (this.quota = t = await async function(e) {
                        const t = await fetch(`/api/quotas/${encodeURIComponent(e)}/domains`, {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        });
                        if (200 === t.status)
                            return await t.json();
                        {
                            const e = await t.text()
                              , n = "Error checking artifact domain quota";
                            throw console.error(n, t.status, e),
                            new Error(`${n}: ${e}`)
                        }
                    }(e)),
                    t.usedDomainQuota < t.totalDomainQuota)
                        return {
                            type: "canCreate",
                            domain: r.domain
                        }
                }
                return r
            }
        }
        class _e {
            userId;
            artifacts;
            remix;
            constructor(e, t) {
                this.userId = t,
                this.artifacts = de(e),
                this.remix = function(e) {
                    const t = e.get(s)
                      , n = t instanceof l ? "" : a(t);
                    return i.pG.parse_remix(n)
                }(e)
            }
            async validate(e) {
                try {
                    const t = await async function(e, t, n) {
                        const a = new Array;
                        for (const {hash: e, extension: t, bytes: r} of n)
                            a.push({
                                hash: e,
                                extension: t,
                                size: r.byteLength
                            });
                        return await async function(e, t, n) {
                            const a = {
                                files: t,
                                remix: n
                            }
                              , r = await fetch(`/api/games/${e ? encodeURIComponent(e) : "new"}/source/quota`, {
                                method: "POST",
                                body: JSON.stringify(a),
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            });
                            if (200 === r.status)
                                return await r.json();
                            {
                                const e = await r.text()
                                  , n = "Error checking artifact upload quota";
                                throw console.error(n, t, r.status, e),
                                new Error(`${n}: ${e}`)
                            }
                        }(e, a, t)
                    }(e, this.remix, this.artifacts);
                    return this.artifacts.length > 0 && t.usedQuota + t.extraQuota > t.totalQuota ? {
                        type: "insufficient",
                        isSelf: t.ownerUserId === this.userId,
                        extraQuota: t.extraQuota,
                        totalQuota: t.totalQuota,
                        usedQuota: t.usedQuota
                    } : {
                        type: "sufficient"
                    }
                } catch (e) {
                    return {
                        type: "error",
                        error: `${e}`
                    }
                }
            }
        }
        var Oe = n(8489)
          , ke = n(2331)
          , Ne = n(3839);
        function xe(e) {
            const {app: t} = e
              , [n,a] = (0,
            ae.useState)(!1);
            return ae.createElement(ae.Fragment, null, ae.createElement("div", {
                className: "vstack"
            }, ae.createElement("div", null, ae.createElement("i", {
                className: "fas fa-triangle-exclamation warning-text"
            }), " Subdomain is available, but you have reached your subdomain limit."), ae.createElement(re.Ug, null, ae.createElement(re.zx, {
                tier: "primary",
                raised: !0,
                onClick: function() {
                    a(!0),
                    (0,
                    ke.L)("expand-subdomain-purchase", {})
                }
            }, "Purchase additional subdomains"))), n && ae.createElement(Ne.U_, {
                app: t,
                onClose: ()=>a(!1)
            }))
        }
        function Se(e) {
            const t = (0,
            ae.useContext)(Oe.Il)
              , n = (0,
            ae.useMemo)((()=>new ve), [])
              , a = (0,
            ae.useMemo)((()=>new be), [])
              , r = e.domain
              , [l,o] = (0,
            ae.useState)(r)
              , [i,s] = (0,
            ae.useState)(null)
              , [c,u] = (0,
            ae.useState)(!1)
              , [m,d] = (0,
            ae.useState)(null)
              , f = c || l === r || "canCreate" !== i?.type;
            return (0,
            ae.useEffect)((()=>{
                let e = !1
                  , n = setTimeout((async()=>{
                    if (e)
                        return;
                    const n = await a.validate(t.auth.userId, l);
                    e || s(n)
                }
                ), 500);
                return ()=>{
                    e = !0,
                    clearTimeout(n)
                }
            }
            ), [l]),
            ae.createElement("div", {
                className: "vstack stretch"
            }, ae.createElement("h3", null, "Edit URL"), ae.createElement(re.s_, {
                className: "edit-domain-dialog vstack stretch",
                onClick: e=>e.stopPropagation()
            }, ae.createElement("div", {
                className: "customize-url-section"
            }, ae.createElement("span", {
                className: "customize-url-protocol"
            }, `${window.location.protocol}//`), ae.createElement("input", {
                type: "text",
                className: "customize-url-domain",
                readOnly: c,
                value: l,
                onChange: e=>function(e) {
                    s(null),
                    o(n.sanitize(e))
                }(e.target.value)
            }), ae.createElement("div", {
                className: "vstack stretch customize-url-help"
            }, l === r ? ae.createElement("div", null, "Choose a new URL for your game") : function(e, t) {
                if (!e)
                    return ae.createElement("div", null, "Checking availability...");
                switch (e.type) {
                case "canCreate":
                    return ae.createElement("div", null, ae.createElement("i", {
                        className: "fas fa-circle-check success-text"
                    }), " Available");
                case "canUpdate":
                    return ae.createElement("div", null, ae.createElement("i", {
                        className: "fas fa-triangle-exclamation error-text"
                    }), " Existing game found - please choose something else");
                case "unavailable":
                    return ae.createElement("div", null, ae.createElement("i", {
                        className: "fas fa-triangle-exclamation error-text"
                    }), " Unavailable - please choose something else");
                case "quotaRequired":
                    return ae.createElement(xe, {
                        app: t
                    });
                case "error":
                    return ae.createElement("div", null, ae.createElement("i", {
                        className: "fas fa-triangle-exclamation error-text"
                    }), " ", e.error)
                }
            }(i, t)))), m && ae.createElement("p", null, ae.createElement("i", {
                className: "fas fa-triangle-exclamation error-text"
            }), " ", m), ae.createElement(re.Ug, {
                className: "edit-domain-actions"
            }, ae.createElement(re.zx, {
                tier: "primary",
                raised: !0,
                onClick: function() {
                    f || async function() {
                        try {
                            u(!0);
                            let n = i;
                            if (n && n.domain === l || (n = await a.validate(t.auth.userId, l, !0),
                            s(n)),
                            "canCreate" !== n.type)
                                return;
                            await ie(l, e.gameId),
                            e.onDomainChange(l)
                        } catch (t) {
                            console.error(`Error changing domain gameId=${e.gameId} domain=${l}`, t),
                            d(`${t}`)
                        } finally {
                            u(!1)
                        }
                    }().catch(console.error)
                },
                disabled: f
            }, "Change URL")))
        }
        var Ie = n(3765)
          , Ce = n(2104)
          , Pe = n(4792);
        function $e(e) {
            const {app: t, modding: n} = e
              , a = (0,
            $.KO)(n.partying)
              , [r,l] = (0,
            ae.useState)(null)
              , [o,i] = (0,
            ae.useState)(null);
            function s() {
                l(null),
                i(null),
                n.partying.set(null)
            }
            return (0,
            ae.useEffect)((()=>{
                if (!a)
                    return;
                let e = !1;
                return async function() {
                    try {
                        if (await n.source.waitForInProgressReloadingFromDisk(),
                        e)
                            return;
                        const a = await pe(n.source.files.collect(), l, n.uploadedArtifactsCache)
                          , r = await ge(a, l, null, n.previousParty);
                        if (e)
                            return;
                        let o = function(e, t, n, a) {
                            const r = Ie.cG.parse(e.gameId)
                              , l = Ie.c1.parse(e.blueprintId);
                            return t && t.gameId === r ? {
                                ...t,
                                blueprintId: l,
                                blueprint: e.blueprint
                            } : {
                                admin: !0,
                                gameId: r,
                                blueprintId: l,
                                blueprint: e.blueprint,
                                accumulators: new Ce.i2([]),
                                preferences: a.createTemporary(e.gameId).copyFrom(n.preferences)
                            }
                        }(r, t.play.partyGameStore.get(), t.play.baseGameStore.get(), t.play.temporaryPreferences);
                        if (e)
                            return;
                        if ((0,
                        Pe.li)(o) || (o = await (0,
                        Pe.Cp)(o, t.play.temporaryPreferences, (e=>t.play.fetchBlueprint(e)))),
                        e)
                            return;
                        n.previousParty = r,
                        t.play.enterParty(o),
                        t.nav.go("Party"),
                        s()
                    } catch (e) {
                        console.error("Deployment error", e),
                        i(`${e}`)
                    }
                }().catch(console.error),
                ()=>{
                    e = !0
                }
            }
            ), [t, n, a]),
            a ? o ? ae.createElement(ae.Fragment, null, e.children, ae.createElement(re.Cv, {
                onCancel: s,
                error: o
            }, ae.createElement("h1", null, "Uh oh"), ae.createElement("p", null, "There was an error running your code, please fix it and try again:"))) : ae.createElement(ae.Fragment, null, e.children, ae.createElement(re.a_, {
                className: "loading-screen-opaque"
            }, r ?? "Creating party...")) : ae.createElement(ae.Fragment, null, e.children)
        }
        var Fe = n(3833)
          , Te = n(4184)
          , De = n.n(Te)
          , Re = n(9892);
        function Ue(e) {
            const {modding: t, options: n} = e
              , [a,r] = (0,
            ae.useState)(!1)
              , l = (0,
            $.KO)(t.query.search)
              , o = (0,
            ae.useRef)(null);
            return (0,
            ae.useEffect)((()=>{
                function e(e) {
                    if ((e.ctrlKey || e.metaKey) && "KeyF" === e.code) {
                        r(!0);
                        const t = document.querySelector("input.query-find");
                        t && t.focus(),
                        e.stopPropagation(),
                        e.preventDefault()
                    } else
                        "Escape" === e.code && (t.query.clearSearch(),
                        r(!1),
                        e.stopPropagation(),
                        e.preventDefault())
                }
                return window.addEventListener("keydown", e),
                ()=>window.removeEventListener("keydown", e)
            }
            ), [t]),
            ae.createElement(ae.Fragment, null, ae.createElement("div", {
                className: "query-bar",
                ref: o
            }, ae.createElement("div", {
                className: "query-box",
                onClick: function() {
                    r(!0)
                },
                title: "Search"
            }, ae.createElement("i", {
                className: "query-icon fa-solid fa-magnifying-glass"
            }), ae.createElement("span", {
                className: "query-string"
            }, l?.search, l?.replace && ae.createElement("span", {
                className: "query-replace"
            }, " ", ae.createElement("i", {
                className: "fa-solid fa-chevron-right"
            }), " ", l.replace)), l && ae.createElement("i", {
                className: "query-icon-btn fas fa-times",
                title: "Clear search",
                onClick: function(e) {
                    t.query.clearSearch(),
                    e.stopPropagation()
                }
            }))), a && o.current && ae.createElement(re.yR, {
                parent: o.current,
                anchor: (e,t)=>({
                    top: e.top,
                    right: t.width - e.right
                })
            }, ae.createElement(ze, {
                initialQuery: l,
                options: n,
                setQuery: function(e) {
                    t.query.newSearch(e, t.source.files)
                },
                onClose: ()=>r(!1)
            })))
        }
        function ze(e) {
            const {initialQuery: t, options: n, setQuery: a, onClose: r} = e
              , [l,o] = (0,
            ae.useState)(t?.search ?? "")
              , [i,s] = (0,
            ae.useState)(t?.replace ?? "")
              , [c,u] = (0,
            ae.useState)(i.length > 0)
              , [m,d] = (0,
            ae.useState)(t?.caseSensitive ?? n.searchCaseSensitive.get())
              , [f,h] = (0,
            ae.useState)(t?.wholeWord ?? n.searchWholeWord.get())
              , p = (0,
            ae.useRef)(null);
            function g() {
                a(null),
                r()
            }
            function E() {
                l.trim().length > 0 ? (a(new Re.Jb({
                    search: l,
                    replace: c ? i : "",
                    caseSensitive: m,
                    wholeWord: f,
                    literal: !0
                })),
                n.searchCaseSensitive.set(m),
                n.searchWholeWord.set(f)) : a(null),
                r()
            }
            function y(e) {
                p.current && clearTimeout(p.current),
                p.current = setTimeout((()=>{
                    !function(e) {
                        e.trim().length > 0 ? a(new Re.Jb({
                            search: e,
                            caseSensitive: m,
                            wholeWord: f,
                            literal: !0
                        })) : a(null)
                    }(e)
                }
                ), 200)
            }
            function w(e) {
                switch (e.code) {
                case "Escape":
                    g(),
                    e.preventDefault(),
                    e.stopPropagation();
                    break;
                case "Enter":
                    E(),
                    e.preventDefault(),
                    e.stopPropagation()
                }
            }
            return (0,
            ae.useEffect)((()=>()=>{
                p.current && clearTimeout(p.current)
            }
            ), []),
            ae.createElement("form", {
                onSubmit: function(e) {
                    E(),
                    e.preventDefault()
                }
            }, ae.createElement(re.s_, {
                className: "query-panel opaque vstack"
            }, ae.createElement("div", {
                className: "query-box"
            }, ae.createElement("i", {
                className: "query-icon fa-solid fa-magnifying-glass"
            }), ae.createElement("input", {
                type: "text",
                className: "query-string query-find",
                autoFocus: !0,
                value: l,
                placeholder: "Find",
                autoCapitalize: "none",
                autoComplete: "off",
                autoCorrect: "off",
                onChange: function(e) {
                    const t = e.target.value;
                    o(t),
                    y(t)
                },
                onKeyDown: w,
                onFocus: e=>e.target.select()
            }), ae.createElement("i", {
                className: De()("query-icon-toggle fa-solid", {
                    "fa-chevron-down": !c,
                    "fa-chevron-up": c
                }),
                title: "Replace",
                onClick: function() {
                    u(!c)
                }
            }), ae.createElement("i", {
                className: De()("query-icon-toggle fa-solid fa-font-case", {
                    selected: m
                }),
                title: "Match case",
                onClick: function() {
                    d(!m)
                }
            }), ae.createElement("i", {
                className: De()("query-icon-toggle fa-solid fa-w", {
                    selected: f
                }),
                title: "Match whole word",
                onClick: function() {
                    h(!f)
                }
            })), c && ae.createElement("div", {
                className: "query-box"
            }, ae.createElement("i", {
                className: "query-icon fa-solid fa-arrow-right-arrow-left"
            }), ae.createElement("input", {
                type: "text",
                className: "query-string",
                value: i,
                placeholder: "Replace",
                autoCapitalize: "none",
                autoComplete: "off",
                autoCorrect: "off",
                onChange: function(e) {
                    s(e.target.value),
                    y(l)
                },
                onKeyDown: w
            })), ae.createElement(re.Ug, {
                className: "query-action-row"
            }, ae.createElement(re.zx, {
                onClick: g
            }, "Clear"), ae.createElement(re.zx, {
                tier: "primary",
                raised: !0,
                onClick: E
            }, "Search"))))
        }
        function Me(e) {
            const t = (0,
            ae.useRef)(null)
              , [n,a] = (0,
            ae.useState)(!1)
              , [r,l] = (0,
            ae.useState)(null);
            return ae.createElement(ae.Fragment, null, ae.createElement(re.zx, {
                tier: e.tier,
                raised: e.raised,
                className: e.className,
                title: e.title,
                flat: e.flat,
                onClick: function() {
                    t.current?.click()
                },
                onPointerEnter: ()=>a(!0),
                onPointerLeave: ()=>a(!1)
            }, e.children), n && e.title && ae.createElement(re.xW, null, e.title), ae.createElement("input", {
                ref: t,
                type: "file",
                accept: ".zip",
                onChange: function(t) {
                    if (l(null),
                    t && t.target && t.target.files) {
                        async function n(t) {
                            try {
                                const n = await qe(t);
                                e.onMod(n)
                            } catch (e) {
                                l(`${e}`),
                                console.error("Error loading file", e)
                            }
                        }
                        n(t.target.files[0]).catch(console.error)
                    }
                },
                style: {
                    display: "none"
                }
            }), r && ae.createElement(re.Cv, {
                error: r,
                onCancel: ()=>l(null)
            }, ae.createElement("h1", null, "Error loading file"), ae.createElement("p", null, "There was an error loading your file:")))
        }
        async function qe(e) {
            const t = await e.arrayBuffer();
            return _(new Uint8Array(t), e.name)
        }
        var Ae = n(9038)
          , Qe = n(3162)
          , Le = n.n(Qe);
        function Je(e) {
            const {modding: t} = e
              , [n,a] = (0,
            ae.useState)(!1)
              , [r,l] = (0,
            ae.useState)(null)
              , [o,i] = (0,
            ae.useState)(!1);
            return ae.createElement(ae.Fragment, null, ae.createElement(re.zx, {
                tier: e.tier,
                raised: e.raised,
                flat: e.flat,
                className: e.className,
                onClick: function() {
                    (async function() {
                        try {
                            a(!0),
                            await Ge(t.source)
                        } catch (e) {
                            l(`${e}`)
                        } finally {
                            a(!1)
                        }
                    }
                    )().catch(console.error)
                },
                disabled: n,
                title: e.title,
                onPointerEnter: ()=>i(!0),
                onPointerLeave: ()=>i(!1)
            }, e.children), o && e.title && ae.createElement(re.xW, null, e.title), r && ae.createElement(re.u_, null, ae.createElement(re.s_, {
                className: "opaque"
            }, ae.createElement("h3", null, "Error downloading mod"), ae.createElement("p", null, ae.createElement("i", {
                className: "fas fa-triangle-exclamation error-text"
            }), " ", r), ae.createElement(re.Ug, null, ae.createElement(re.LZ, null), ae.createElement(re.zx, {
                tier: "primary",
                raised: !0,
                onClick: ()=>l(null)
            }, "OK")))))
        }
        async function Ge(e) {
            try {
                await e.waitUntilFilesPreloaded()
            } catch {}
            await e.waitForInProgressReloadingFromDisk();
            const t = e.files.collect()
              , n = c(t)
              , a = function(e) {
                const t = S(e)
                  , n = i.SF.from_files(t);
                try {
                    return n.serialize()
                } finally {
                    n.free()
                }
            }(t)
              , r = new Blob([a],{
                type: "application/zip"
            });
            let l = h(n.name);
            0 === l.trim().length && (l = "easel"),
            Le().saveAs(r, `${l}.zip`),
            e.committed()
        }
        function je(e) {
            const t = (0,
            ae.useRef)(null)
              , {modding: n} = e
              , a = window
              , [r,l] = (0,
            ae.useState)(null);
            return ae.createElement(ae.Fragment, null, ae.createElement(re.pO, {
                flat: !0,
                title: "Save to your computer",
                onClick: function() {
                    (async function() {
                        a.showDirectoryPicker ? await async function(e, t) {
                            let n = await t.showDirectoryPicker({
                                id: z,
                                mode: "readwrite",
                                startIn: "documents"
                            });
                            if (!await async function(e) {
                                for await(const t of e.keys())
                                    if (!B(t))
                                        return !1;
                                return !0
                            }(n)) {
                                const t = c(e.files.collect())
                                  , a = await async function(e, t) {
                                    if (!await Be(e, t))
                                        return t;
                                    let n = 1;
                                    for (; ; ) {
                                        const a = `${t} (${n})`;
                                        if (!await Be(e, a))
                                            return a;
                                        n++
                                    }
                                }(n, h(t.name));
                                n = await n.getDirectoryHandle(a, {
                                    create: !0
                                })
                            }
                            e.switchToFileSaver(n)
                        }(n.source, a) : await Ge(n.source)
                    }
                    )().catch(console.error)
                }
            }, ae.createElement("i", {
                className: "fas fa-floppy-disk"
            })), ae.createElement(Ae.S, {
                className: "auto-save-bar-popout",
                header: ae.createElement(re.zx, {
                    flat: !0,
                    className: "auto-save-bar-popout-opener"
                }, ae.createElement("i", {
                    className: "fa-solid fa-caret-down"
                }))
            }, ae.createElement(re.zx, {
                flat: !0,
                onClick: function() {
                    t.current?.click()
                }
            }, ae.createElement("i", {
                className: "fas fa-arrow-up-from-line"
            }), " Import from file"), ae.createElement(Je, {
                modding: n,
                flat: !0
            }, ae.createElement("i", {
                className: "fas fa-arrow-down-to-line"
            }), " Export to file")), ae.createElement("input", {
                ref: t,
                type: "file",
                accept: ".zip",
                onChange: function(e) {
                    const t = e.target.files?.[0];
                    if (t) {
                        async function a(e) {
                            try {
                                const t = await qe(e);
                                n.source.replaceAll(t)
                            } catch (e) {
                                l(`${e}`),
                                console.error("Error loading file", e)
                            }
                        }
                        a(t).catch(console.error)
                    }
                },
                style: {
                    display: "none"
                }
            }), r && ae.createElement(re.Cv, {
                error: r,
                onCancel: ()=>l(null)
            }, ae.createElement("h3", null, "Error"), ae.createElement("p", null, "An error occured:")))
        }
        async function Be(e, t) {
            try {
                return await e.getDirectoryHandle(t),
                !0
            } catch (e) {
                if (e instanceof DOMException)
                    switch (e.name) {
                    case "NotFoundError":
                        return !1;
                    case "TypeMismatchError":
                        return !0
                    }
                throw e
            }
        }
        function We(e) {
            const {modding: t, saver: n} = e
              , a = (0,
            $.KO)(n.saveLoop.hasPendingChanges)
              , r = (0,
            ae.useMemo)((()=>n.getSavedFolderName()), [n])
              , l = (0,
            $.KO)(n.poison);
            return ae.createElement(Ae.S, {
                anchor: "topLeft",
                className: "file-system-save-bar-popout",
                header: ae.createElement(re.zx, {
                    flat: !0,
                    className: "file-system-save-bar-saved-btn"
                }, l ? ae.createElement("i", {
                    className: "fas fa-floppy-disk-circle-xmark error-text"
                }) : a ? ae.createElement("i", {
                    className: "fas fa-spinner-third spin-loop file-system-save-bar-saving"
                }) : ae.createElement(ae.Fragment, null, ae.createElement("i", {
                    className: "fas fa-floppy-disk"
                }), ae.createElement("i", {
                    className: "fas fa-circle-check file-system-save-bar-check"
                })))
            }, l ? ae.createElement(re.zx, {
                flat: !0,
                disabled: !0,
                className: "saving-changes"
            }, ae.createElement("i", {
                className: "fas fa-triangle-exclamation error-text"
            }), " Error saving changes") : a ? ae.createElement(re.zx, {
                flat: !0,
                disabled: !0,
                className: "saving-changes"
            }, ae.createElement("i", {
                className: "fa-solid fa-spinner-third spin-loop"
            }), " Saving changes...") : ae.createElement(re.zx, {
                flat: !0,
                disabled: !0,
                className: "changes-saved"
            }, ae.createElement("i", {
                className: "fa-solid fa-check"
            }), " All changes saved to ", ae.createElement("span", {
                className: "folder-name"
            }, r)), ae.createElement(Je, {
                modding: t,
                flat: !0
            }, ae.createElement("i", {
                className: "fa-solid fa-arrow-down-to-line"
            }), " Export to file"))
        }
        function Xe(e) {
            const {modding: t} = e
              , n = (0,
            $.KO)(t.source.saver);
            return n instanceof q ? ae.createElement(je, {
                modding: t,
                saver: n
            }) : n instanceof L ? ae.createElement(We, {
                modding: t,
                saver: n
            }) : null
        }
        function Ye(e) {
            const [t,n] = (0,
            ae.useState)(!1)
              , a = (0,
            ae.useContext)(Oe.Il)
              , r = (0,
            ae.useContext)(kt)
              , l = (0,
            $.KO)(a.nav.page).split("/")[1] ?? "Code"
              , o = (0,
            $.KO)(r.published);
            function i(e, t) {
                const n = De()("flat", {
                    selected: l === t
                });
                let a = "Editor";
                return t && (a += "/" + t),
                ae.createElement(re.rU, {
                    btn: !0,
                    path: a,
                    className: n
                }, e)
            }
            return (0,
            ae.useEffect)((()=>{
                function e(e) {
                    "F12" === e.key && n(!0)
                }
                return document.addEventListener("keydown", e),
                ()=>document.removeEventListener("keydown", e)
            }
            )),
            ae.createElement(ae.Fragment, null, ae.createElement(re.o8, {
                className: "modding-bar"
            }, ae.createElement(ca, {
                app: a,
                modding: r,
                flat: !0,
                title: "Close this project",
                path: "Editor"
            }, ae.createElement("i", {
                className: "fas fa-times"
            })), i("Code", "Code"), i("Publish", "Publish"), o && ae.createElement(Ke, {
                published: o,
                selected: "Games" === l
            }), t && i("Dissassembly", "Disassemble"), i("Help", "Docs"), ae.createElement(Xe, {
                modding: r
            }), ae.createElement(re.lN, null), ae.createElement(re.LZ, null), "Code" === l && ae.createElement(Ue, {
                modding: r,
                options: a.options
            }), ae.createElement(re.zx, {
                tier: "primary",
                flat: !0,
                raised: !0,
                onPointerDown: function(e) {
                    a.touch.receivePointerDown(e.nativeEvent),
                    r.previewing.set(!0)
                }
            }, "Preview ", ae.createElement("i", {
                className: "fa-solid fa-arrow-right-from-arc"
            }))))
        }
        function Ke(e) {
            const t = (0,
            $.KO)(e.published.gameId);
            return t ? ae.createElement(re.rU, {
                btn: !0,
                path: `Editor/Games/${t}`,
                className: De()("flat", {
                    selected: e.selected
                })
            }, "Manage") : null
        }
        function Ze(e) {
            const t = De()(e.className, "editing-screen-content");
            return ae.createElement(re.lL, {
                className: "editing-screen"
            }, ae.createElement(Ye, null), ae.createElement("div", {
                className: t
            }, e.children))
        }
        function He(e) {
            const t = e.modding
              , n = t.query
              , a = (0,
            $.KO)(n.search)
              , r = (0,
            $.KO)(n.numMatchesInFile)
              , l = "number" == typeof r
              , o = (0,
            $.KO)(n.filter)
              , i = o?.files.size ?? 0;
            return a ? ae.createElement("div", {
                className: "active-query-bar"
            }, ae.createElement("i", {
                className: "active-query-clear fa-solid fa-times",
                title: "Clear search",
                onClick: function() {
                    t.query.clearSearch()
                }
            }), ae.createElement("div", {
                className: "active-query-file-count"
            }, "Filtered to ", i, " ", 1 === i ? "file" : "files"), a.replace && ae.createElement(re.zx, {
                tier: "tertiary",
                flat: !0,
                onClick: function() {
                    const e = t.selectedPath.get()
                      , n = function(e) {
                        const t = e.query.filter.get();
                        if (!t)
                            return;
                        let n = null
                          , a = !1;
                        const r = e.selectedPath.get();
                        for (const e of t.files) {
                            if (n || (n = e),
                            a)
                                return e;
                            e === r && (a = !0)
                        }
                        return n
                    }(t);
                    t.query.onReplaceAll.emit();
                    let a = t.query.filter.get();
                    e && a && (a = a.clone(),
                    a.removeFile(e),
                    t.query.filter.set(a)),
                    n && t.selectedPath.set(n)
                },
                disabled: 0 === i
            }, "Replace All in Selected File"), ae.createElement(re.LZ, null), l && ae.createElement(ae.Fragment, null, ae.createElement("span", {
                className: "active-query-match-count"
            }, r, " ", 1 === r ? "match" : "matches", " in this file"), a.replace && ae.createElement(re.zx, {
                tier: "tertiary",
                flat: !0,
                onClick: ()=>n.onReplaceNext.emit()
            }, "Replace Next"), a.replace && ae.createElement(re.zx, {
                tier: "tertiary",
                flat: !0,
                onClick: ()=>n.onReplaceAll.emit()
            }, "Replace All"), ae.createElement(re.zx, {
                title: "Find Previous",
                flat: !0,
                onClick: ()=>n.onFindPrevious.emit()
            }, ae.createElement("i", {
                className: "icon fa-solid fa-arrow-up"
            })), ae.createElement(re.zx, {
                title: "Find Next",
                flat: !0,
                onClick: ()=>n.onFindNext.emit()
            }, ae.createElement("i", {
                className: "icon fa-solid fa-arrow-down"
            })))) : null
        }
        var Ve = n(5307);
        function et(e) {
            const t = e.app.auth
              , n = (0,
            $.KO)(t.playerName)
              , a = (0,
            $.KO)(t.username);
            return t.isLoggedIn ? ae.createElement(re.rU, {
                btn: !0,
                path: "Editor/Account",
                className: "flat modding-manage-account-btn"
            }, a ?? n) : ae.createElement(Ve.Th, {
                app: e.app,
                className: "flat"
            })
        }
        var tt = n(9459)
          , nt = n(3631);
        function at(e) {
            const {app: t, isSelf: n, extraQuota: a, usedQuota: r, totalQuota: l} = e
              , [o,i] = (0,
            ae.useState)(!1);
            return ae.createElement(ae.Fragment, null, ae.createElement(re.s_, {
                className: "not-enough-storage-panel stretch"
            }, ae.createElement("h3", null, ae.createElement("i", {
                className: "fas fa-triangle-exclamation error-text"
            }), " Not enough storage"), a > 0 ? ae.createElement("p", null, "Publishing this game would require ", ae.createElement("b", null, Ee(a)), " extra storage.", " ", n ? ae.createElement(ae.Fragment, null, "Your account currently has ", ae.createElement("b", null, Ee(l - r)), " available.") : ae.createElement(ae.Fragment, null, "Please ask the owner of the game to purchase more storage.")) : n ? ae.createElement("p", null, "Your quota has been exceeded. You are using ", ae.createElement("b", null, Ee(r)), " but your quota is only ", ae.createElement("b", null, Ee(l)), ".") : ae.createElement("p", null, "The game owner's quota has been exceeded. Please ask the them to purchase more storage."), n && ae.createElement(re.Ug, null, ae.createElement(re.zx, {
                tier: "primary",
                raised: !0,
                onClick: function() {
                    i(!0),
                    (0,
                    ke.L)("expand-storage-purchase", {})
                }
            }, "Purchase more storage"))), o && ae.createElement(Ne.U_, {
                app: t,
                onClose: ()=>i(!1)
            }))
        }
        const rt = ".easel.games"
          , lt = "." + ((0,
        ce.UO)() ?? "easel.games");
        function ot(e) {
            return e ? rt === lt ? e : e.replace(rt, lt) : null
        }
        var it;
        function st(e) {
            const {app: t, files: n} = e
              , r = t.auth
              , o = r.userId
              , u = (0,
            ae.useMemo)((()=>c(n)), [n])
              , m = (0,
            ae.useMemo)((()=>new ve), [])
              , d = (0,
            ae.useMemo)((()=>new be), [])
              , f = (0,
            ae.useMemo)((()=>new _e(n,o)), [n, o])
              , [h,p] = (0,
            ae.useState)(u.name)
              , [g,E] = (0,
            ae.useState)(null)
              , [y,w] = (0,
            ae.useState)(r.username.get() ?? r.playerName.get())
              , [v,b] = (0,
            ae.useState)(null)
              , [_,O] = (0,
            ae.useState)(it.Pending)
              , [k,N] = (0,
            ae.useState)((()=>ot(u.domain)))
              , x = k ?? function(e, t) {
                const n = `@${t}/${e}`.toLowerCase().replaceAll(" ", "-").replace(ye, "");
                return `${(0,
                ce.UO)()}/${n}`
            }(h, y)
              , [S,I] = (0,
            ae.useState)(null)
              , [C,P] = (0,
            ae.useState)(null)
              , [$,F] = (0,
            ae.useState)(!1)
              , T = $ || !!g || !!v || !(S && ("canCreate" === S.type || "canUpdate" === S.type)) || !(_ === it.Available || _ == it.Unchanged) || !(C && "sufficient" === C.type);
            return (0,
            ae.useEffect)((()=>{
                let e = !1
                  , t = setTimeout((async()=>{
                    if (e)
                        return;
                    const t = await d.validate(o, x, !1, y);
                    e || I(t)
                }
                ), 500);
                return ()=>{
                    e = !0,
                    clearTimeout(t)
                }
            }
            ), [x, y, o]),
            (0,
            ae.useEffect)((()=>{
                if (!S)
                    return;
                let e = !1;
                return async function() {
                    const t = "canUpdate" === S.type ? S.existingGameId : null
                      , n = await f.validate(t);
                    e || P(n)
                }().catch(console.error),
                ()=>{
                    e = !0
                }
            }
            ), [S, f]),
            (0,
            ae.useEffect)((()=>{
                let e = !1
                  , t = setTimeout((async()=>{
                    if (e)
                        return;
                    const t = (0,
                    Fe.US)(y);
                    if (t)
                        return void b(t);
                    const n = await (0,
                    Ve.Xf)(y);
                    e || O(n ? n === r.userId ? it.Unchanged : it.Unavailable : it.Available)
                }
                ), 500);
                return ()=>{
                    e = !0,
                    clearTimeout(t)
                }
            }
            ), [y]),
            ae.createElement(re.T3, {
                className: "publish-form vstack form-stack",
                toolbar: ae.createElement(Ye, null)
            }, ae.createElement("div", {
                className: "vstack stretch"
            }, ae.createElement("h1", null, "Publish"), ae.createElement("div", null, "Publish your game to make it available to everyone in the world!")), ae.createElement("div", {
                className: "vstack stretch form-stack"
            }, ae.createElement(re.s_, {
                className: "vstack stretch form-field-stack"
            }, ae.createElement("label", {
                htmlFor: "gameName"
            }, "Game Name"), ae.createElement("div", null, "What would you like your game to be known as?"), ae.createElement("input", {
                id: "gameName",
                type: "text",
                maxLength: 30,
                readOnly: $,
                value: h,
                onChange: e=>function(e) {
                    p(e),
                    E(we(e))
                }(e.target.value)
            }), g && ae.createElement("div", null, ae.createElement("i", {
                className: "fas fa-triangle-exclamation error-text"
            }), " ", g)), ae.createElement(re.s_, {
                className: "vstack stretch form-field-stack"
            }, ae.createElement("label", {
                htmlFor: "username"
            }, "Your Username"), ae.createElement("div", null, "What would you like to be called? Don't use your real name!"), ae.createElement("input", {
                id: "username",
                type: "text",
                maxLength: nt.e4,
                readOnly: $,
                autoComplete: "username",
                autoCapitalize: "off",
                autoCorrect: "off",
                value: y,
                onChange: e=>function(e) {
                    e = (0,
                    Fe.pq)(e),
                    w(e),
                    b(null),
                    O(it.Pending)
                }(e.target.value)
            }), v ? ae.createElement("div", null, ae.createElement("i", {
                className: "fas fa-triangle-exclamation error-text"
            }), " ", v) : _ === it.Unavailable ? ae.createElement("div", null, ae.createElement("i", {
                className: "fas fa-triangle-exclamation error-text"
            }), " Username already taken, please try another") : _ === it.Available ? ae.createElement("div", null, ae.createElement("i", {
                className: "fas fa-circle-check success-text"
            }), " Available") : _ === it.Unchanged ? ae.createElement("div", null, ae.createElement("i", {
                className: "fas fa-badge-check success-text"
            }), " Verified") : ae.createElement("div", null, "Checking availability..."))), ae.createElement("div", {
                className: "vstack stretch"
            }, ae.createElement("h2", null, "Customize your URL"), ae.createElement("div", null, "This will be your game's unique address on the internet. If you like, you can customize it to make it easier to share."), ae.createElement(re.s_, {
                className: "customize-url-section stretch"
            }, ae.createElement("span", {
                className: "customize-url-protocol"
            }, `${window.location.protocol}//`), ae.createElement("input", {
                id: "domain",
                type: "text",
                className: "customize-url-domain",
                readOnly: $,
                autoComplete: "off",
                autoCapitalize: "off",
                autoCorrect: "off",
                value: x,
                onChange: e=>{
                    return t = e.target.value,
                    void ((t = m.sanitize(t)) !== k && (I(null),
                    P(null),
                    N(t)));
                    var t
                }
            }), ae.createElement("div", {
                className: "vstack stretch customize-url-help"
            }, function(e, t) {
                if (!e)
                    return ae.createElement("div", null, "Checking availability...");
                switch (e.type) {
                case "canCreate":
                    return ae.createElement("div", null, ae.createElement("i", {
                        className: "fas fa-circle-check success-text"
                    }), " Available");
                case "canUpdate":
                    return ae.createElement("div", null, ae.createElement("i", {
                        className: "fas fa-badge-check success-text"
                    }), " Existing game found - game will be updated");
                case "unavailable":
                    return ae.createElement("div", null, ae.createElement("i", {
                        className: "fas fa-triangle-exclamation error-text"
                    }), " Unavailable - please choose something else");
                case "quotaRequired":
                    return ae.createElement(xe, {
                        app: t
                    });
                case "error":
                    return ae.createElement("div", null, ae.createElement("i", {
                        className: "fas fa-triangle-exclamation error-text"
                    }), " ", e.error)
                }
            }(S, t)))), function(e, t) {
                if (!e)
                    return null;
                switch (e.type) {
                case "sufficient":
                    return null;
                case "error":
                    return ae.createElement("p", null, ae.createElement("i", {
                        className: "fa-solid fa-triangle-exclamation error-text"
                    }), " ", e.error);
                case "insufficient":
                    return ae.createElement(at, {
                        app: t,
                        isSelf: e.isSelf,
                        extraQuota: e.extraQuota,
                        usedQuota: e.usedQuota,
                        totalQuota: e.totalQuota
                    })
                }
            }(C, t), ae.createElement("div", {
                className: "hstack stretch"
            }, ae.createElement(re.zx, {
                tier: "primary",
                raised: !0,
                onClick: function() {
                    T || async function() {
                        try {
                            F(!0);
                            const n = we(h);
                            E(n);
                            const o = (0,
                            Fe.US)(y);
                            if (b(o),
                            n || o)
                                return;
                            if (await (0,
                            Ve.dd)(r.userId, y))
                                return void b(o);
                            (0,
                            tt.ng)(y, r, t.socket),
                            (0,
                            Ve.I5)(y, r, t.socket);
                            let c = S;
                            if (c && c.domain === x || (c = await d.validate(t.auth.userId, x, !0),
                            I(c)),
                            "canCreate" !== c.type && "canUpdate" !== c.type)
                                return;
                            let u = C;
                            if (!C) {
                                let e = "canUpdate" === c.type ? c.existingGameId : null;
                                u = await f.validate(e),
                                P(u)
                            }
                            if ("sufficient" !== u.type)
                                return;
                            const m = function(e, t, n, r, o) {
                                const c = e.get(s)
                                  , u = c instanceof l ? "" : a(c)
                                  , m = i.pG.overwrite_metadata(u, t, n, r, o);
                                return e.set(s, m),
                                m
                            }(e.files, h.trim(), r.userId, y.trim(), function(e) {
                                return e ? rt === lt ? e : e.replace(lt, rt) : null
                            }(x));
                            e.onSubmit(m, {
                                domain: x,
                                gameId: "canUpdate" === c.type ? c.existingGameId : null
                            }),
                            (0,
                            ke.L)("publish", {
                                "game-name": h
                            })
                        } finally {
                            F(!1)
                        }
                    }().catch(console.error)
                },
                disabled: T
            }, "Publish your game! ", ae.createElement("i", {
                className: "fas fa-cloud-arrow-up"
            })), (!S || !C || _ === it.Pending && !v) && ae.createElement("div", {
                className: "loading"
            }, ae.createElement("i", {
                className: "fa-solid fa-spinner-third spinner"
            }), " Validating requirements...")))
        }
        function ct(e) {
            const {command: t, onSuccess: n} = e
              , [a,r] = (0,
            ae.useState)("Publishing game...")
              , [l,o] = (0,
            ae.useState)(null);
            return (0,
            ae.useEffect)((()=>{
                let a = !1;
                return async function() {
                    try {
                        const l = await pe(e.files, r)
                          , o = await ge(l, r, t.gameId);
                        if (a)
                            return;
                        const i = await async function(e, t, n) {
                            return n?.("Assigning domain..."),
                            await ie(t, e),
                            console.log(`Domain assigned: gameId=${e} domain=${t}`),
                            n?.("Finalizing domain assignment..."),
                            t
                        }(o.gameId, t.domain);
                        if (a)
                            return;
                        n(o.gameId, i)
                    } catch (e) {
                        console.error("Deployment error", e),
                        o(`${e}`)
                    }
                }().catch(console.error),
                ()=>{
                    a = !0
                }
            }
            ), []),
            l ? ae.createElement(re.mf, {
                error: l,
                toolbar: ae.createElement(Ye, null)
            }) : ae.createElement(re.a_, null, a ?? "Publishing your game...")
        }
        async function ut(e) {
            const t = await fetch(`/api/games/${e}/discoverability`);
            if (200 === t.status)
                return await t.json();
            if (404 === t.status)
                return null;
            {
                const n = `Failed to fetch game discoverability (${e}): ${await t.text()}`;
                throw console.error(n),
                new Error(n)
            }
        }
        function mt(e) {
            const {gameId: t, domain: n} = e
              , a = `${window.location.protocol}//${n}`
              , [r,l] = (0,
            ae.useState)(!1);
            return (0,
            ae.useEffect)((()=>{
                let e = !1;
                return async function() {
                    const n = await ut(t);
                    e || n && !n.isDraft || l(!0)
                }().catch(console.error),
                ()=>{
                    e = !0
                }
            }
            ), [t]),
            ae.createElement(re.T3, {
                className: "publish-success-page",
                toolbar: ae.createElement(Ye, null)
            }, ae.createElement("h1", null, "Success!"), ae.createElement("p", null, "Check out your newly-published game here:"), ae.createElement("a", {
                className: "publish-success-link",
                href: a,
                target: "_blank"
            }, ae.createElement(re.s_, null, n, " ", ae.createElement("i", {
                className: "fa-solid fa-up-right-from-square"
            }))), ae.createElement("p", null, "Your game is ready for players. Share this link with friends and the world!"), r && ae.createElement("p", null, ae.createElement(re.rU, {
                path: `Editor/Games/${t}/Discoverability`
            }, "Would you like to make your game discoverable?")))
        }
        function dt(e) {
            const {app: t, files: n} = e
              , a = t.auth.userId
              , [r,l] = (0,
            ae.useState)(null)
              , [o,i] = (0,
            ae.useState)(null)
              , [s,c] = (0,
            ae.useState)(null)
              , [u,m] = (0,
            ae.useState)(!1);
            if ((0,
            ae.useEffect)((()=>{
                let r = !1;
                return async function() {
                    console.log("Performing prechecks...");
                    const o = performance.now();
                    try {
                        if (t.socket.isDisconnected.get())
                            return void m(!0);
                        const s = async function(e) {
                            const t = await fetch(`/api/quotas/${encodeURIComponent(e)}/storage`);
                            if (200 === t.status)
                                return await t.json();
                            {
                                const e = await t.text()
                                  , n = "Error checking storage quota";
                                throw console.error(n, t.status, e),
                                new Error(`${n}: ${e}`)
                            }
                        }(a);
                        l("Validating game has no errors...");
                        {
                            const [e,t] = O(n);
                            x(e);
                            const a = performance.now() - o;
                            console.log(`Mod compiled in ${Math.round(a)} ms`)
                        }
                        if (r)
                            return;
                        l("Checking storage quotas...");
                        const c = de(n);
                        fe(c);
                        const u = await s;
                        if (r)
                            return;
                        if (c.length > 0 && u.usedQuota > u.totalQuota)
                            return void i(u);
                        l("Finalizing checks..."),
                        e.onPrecheckSuccess()
                    } catch (e) {
                        console.error("Error performing publish prechecks", e),
                        c(`${e}`)
                    }
                }().catch(console.error),
                ()=>{
                    r = !0
                }
            }
            ), []),
            s)
                return ae.createElement(re.mf, {
                    error: s,
                    toolbar: ae.createElement(Ye, null)
                });
            if (o)
                return ae.createElement(re.T3, {
                    toolbar: ae.createElement(Ye, null)
                }, ae.createElement("h1", null, "Publish"), ae.createElement("p", null, "Publish your game to make it available to everyone in the world!"), ae.createElement(at, {
                    app: t,
                    isSelf: !0,
                    extraQuota: 0,
                    usedQuota: o.usedQuota,
                    totalQuota: o.totalQuota
                }));
            if (u) {
                function d() {
                    window.location.reload()
                }
                return ae.createElement(re.T3, {
                    toolbar: ae.createElement(Ye, null)
                }, ae.createElement("h1", null, "Update Required"), ae.createElement("p", null, "A new update to Easel is available. You will need to update before you can publish."), ae.createElement("div", null, ae.createElement(re.zx, {
                    tier: "primary",
                    raised: !0,
                    onClick: d
                }, "Update Now")))
            }
            return ae.createElement(re.a_, {
                toolbar: ae.createElement(Ye, null)
            }, r ?? "Validating your game...")
        }
        !function(e) {
            e[e.Pending = 0] = "Pending",
            e[e.Unavailable = 1] = "Unavailable",
            e[e.Available = 2] = "Available",
            e[e.Unchanged = 3] = "Unchanged"
        }(it || (it = {}));
        class ft {
            domain;
            gameId = (0,
            $.cn)(null);
            constructor(e, t=null) {
                this.domain = e,
                t ? this.gameId.set(t) : async function(e) {
                    const t = await le(e);
                    return "canUpdate" === t.type ? t.existingGameId : null
                }(this.domain).then((e=>{
                    this.gameId.set(e)
                }
                )).catch(console.error)
            }
            static tryParse(e) {
                try {
                    const t = ot(c(e).domain);
                    return t ? new ft(t,null) : null
                } catch (e) {
                    return console.error("Failed to parse published mod state", e),
                    null
                }
            }
        }
        function ht(e) {
            const {app: t, modding: n} = e
              , a = t.auth.isLoggedIn
              , r = (0,
            $.ie)((()=>n.source.files.collect()))
              , [l,o] = (0,
            ae.useState)(null)
              , [i,c] = (0,
            ae.useState)(null)
              , [u,m] = (0,
            ae.useState)(!1);
            if (a) {
                if (i)
                    return ae.createElement(mt, {
                        gameId: i.gameId,
                        domain: i.domain
                    });
                if (l) {
                    function d(e, t) {
                        c({
                            gameId: e,
                            domain: t
                        }),
                        n.source.committed(),
                        n.published.set(new ft(t,e))
                    }
                    return ae.createElement(ct, {
                        files: r,
                        command: l,
                        onSuccess: d
                    })
                }
                if (u) {
                    function f(e, t) {
                        n.source.insertFile(s, e),
                        o(t)
                    }
                    return ae.createElement(st, {
                        app: t,
                        files: r,
                        onSubmit: f
                    })
                }
                {
                    function h() {
                        m(!0)
                    }
                    return ae.createElement(dt, {
                        app: t,
                        files: r,
                        onPrecheckSuccess: h
                    })
                }
            }
            return ae.createElement(re.T3, {
                toolbar: ae.createElement(Ye, null)
            }, ae.createElement("h1", null, "Publish"), ae.createElement("p", null, "Ready to share your game with the world? Time to publish your game! Please login to get started."), ae.createElement(re.Ug, null, ae.createElement(Ve.Th, {
                className: "raised",
                app: t
            })))
        }
        var pt = n(9695)
          , gt = n.n(pt);
        function Et(e) {
            const {gameId: t, blueprintId: n, name: r, updated: o, domain: c} = e
              , u = (0,
            ae.useRef)(!1)
              , [m,d] = (0,
            ae.useState)(!1)
              , f = c ? `//${c}` : null;
            return (0,
            ae.useEffect)((()=>()=>{
                u.current = !0
            }
            ), []),
            ae.createElement(ae.Fragment, null, ae.createElement(re.s_, {
                key: t,
                className: "published-game-row reveal-parent"
            }, ae.createElement("div", {
                className: "published-game-info"
            }, ae.createElement("div", {
                className: "published-game-heading"
            }, ae.createElement("a", {
                className: "published-game-name",
                href: f,
                target: "_blank"
            }, r, " ", ae.createElement("i", {
                className: "fas fa-arrow-up-right-from-square reveal"
            })), ae.createElement("span", {
                className: "published-game-age reveal"
            }, " - ", function(e) {
                const t = Date.now() - e;
                return `updated ${gt()(t, {
                    largest: 1,
                    round: !0
                })} ${t > 0 ? " ago" : " from now"}`
            }(o))), c && ae.createElement("a", {
                href: f,
                className: "published-game-domain"
            }, c)), m && ae.createElement("div", {
                className: "published-game-overlay"
            }, ae.createElement(re.gb, {
                className: "published-game-loading"
            }, "Loading...")), ae.createElement("div", {
                className: "published-game-actions"
            }, ae.createElement(re.rU, {
                btn: !0,
                tier: "tertiary",
                path: `Editor/Games/${t}`,
                title: "Manage this game"
            }, ae.createElement("i", {
                className: "fa-solid fa-cog"
            })), ae.createElement(re.zx, {
                disabled: m,
                tier: "primary",
                raised: !0,
                className: "published-game-edit",
                onClick: function() {
                    (async function() {
                        try {
                            d(!0);
                            const r = await async function(e) {
                                const t = await fetch(`/api/sources/${encodeURIComponent(e)}.gz`)
                                  , n = await t.blob()
                                  , a = await n.arrayBuffer();
                                return new Uint8Array(a)
                            }(n);
                            if (u.current)
                                return;
                            const o = _(r);
                            c && function(e, t) {
                                const n = e.get(s)
                                  , r = n instanceof l ? "" : a(n)
                                  , o = i.pG.overwrite_domain(r, t);
                                e.set(s, o)
                            }(o, c),
                            e.onMod(o, new ft(c,t))
                        } catch (e) {
                            console.error("Error opening game", e)
                        } finally {
                            d(!1)
                        }
                    }
                    )().catch(console.error)
                }
            }, "Edit ", ae.createElement("i", {
                className: "fa-solid fa-pencil"
            })))))
        }
        function yt(e) {
            const [t,n] = (0,
            ae.useState)(null);
            return (0,
            ae.useEffect)((()=>{
                let e = !1;
                return async function() {
                    try {
                        const t = await async function() {
                            const e = await fetch("/api/games");
                            if (200 === e.status) {
                                const {games: t} = await e.json();
                                return t
                            }
                            {
                                const t = await e.text()
                                  , n = "Error retrieving owned games";
                                throw console.error(n, e.status, t),
                                new Error(`${n}: ${t}`)
                            }
                        }();
                        if (e)
                            return;
                        n(t)
                    } catch (e) {
                        console.error("Error fetching owned games", e),
                        n([])
                    }
                }(),
                ()=>{
                    e = !0
                }
            }
            ), []),
            t ? ae.createElement("div", {
                className: "published-games-list"
            }, t.map((t=>ae.createElement(Et, {
                key: t.id,
                onMod: e.onMod,
                gameId: t.id,
                blueprintId: t.blueprint,
                name: t.name,
                updated: t.updated,
                domain: t.domain
            })))) : ae.createElement(re.gb, {
                className: "published-games-loading"
            }, "Loading your published games...")
        }
        const wt = i.dt.max_tagline_length()
          , vt = Math.floor(i.dt.max_thumbnail_image_bytes() / 1024);
        function bt(e) {
            const {gameName: t} = e
              , [n,a] = (0,
            ae.useState)(!1)
              , [r,l] = (0,
            ae.useState)(null)
              , [o,s] = (0,
            ae.useState)(e.data.tagline ?? "")
              , [c,u] = (0,
            ae.useState)(null)
              , m = e.data.thumbnailImage
              , [f,h] = (0,
            ae.useState)(null)
              , [p,g] = (0,
            ae.useState)((()=>m ? `/cdn/artifacts/${m}` : null))
              , [E,y] = (0,
            ae.useState)(null);
            function w(e) {
                if (!e)
                    return !!m || (y("Required"),
                    !1);
                const t = Math.ceil(e.size / 1024);
                if (t > vt)
                    return y(`Must be smaller than ${vt} KB. Your file was ${t} KB.`),
                    !1;
                const n = d(e.name)
                  , a = T.getType(n);
                return !(!a || !a.startsWith("image/")) || (y("Must be an image file."),
                !1)
            }
            return (0,
            ae.useEffect)((()=>{
                if (!f)
                    return;
                const e = URL.createObjectURL(f);
                return g(e),
                ()=>{
                    URL.revokeObjectURL(e)
                }
            }
            ), [f]),
            ae.createElement("form", {
                onSubmit: function(t) {
                    t.preventDefault(),
                    async function() {
                        try {
                            l(null),
                            u(null),
                            y(null);
                            let t = w(f);
                            if (o || (u("Required"),
                            t = !1),
                            !t)
                                return void l("Please fix the errors above");
                            a(!0);
                            let n = null;
                            if (f) {
                                const e = d(f.name)
                                  , t = new Uint8Array(await f.arrayBuffer())
                                  , a = i.LF.base64_hash_artifact(t);
                                n = await oe(`${a}.${e}`, t)
                            } else
                                m && (n = function(e) {
                                    const t = e.lastIndexOf(".");
                                    return -1 === t ? e : e.substring(0, t)
                                }(m));
                            await async function(e, t) {
                                const n = await fetch(`/api/games/${e}/discoverability`, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(t)
                                });
                                if (204 !== n.status) {
                                    const t = `Failed to update game discoverability (${e}): ${await n.text()}`;
                                    throw console.error(t),
                                    new Error(t)
                                }
                            }(e.gameId, {
                                tagline: o,
                                thumbnailImage: n
                            }),
                            e.onSubmit()
                        } catch (e) {
                            console.error(`${e}`),
                            l(`${e}`)
                        } finally {
                            a(!1)
                        }
                    }().catch(console.error)
                },
                className: "discoverability-form vstack stretch"
            }, ae.createElement(re.s_, {
                className: "vstack stretch form-panel"
            }, ae.createElement("div", {
                className: "vstack stretch form-field-stack"
            }, ae.createElement("label", {
                htmlFor: "gameName"
            }, "Game Name"), ae.createElement("input", {
                id: "gameName",
                type: "text",
                value: t,
                readOnly: !0
            }), ae.createElement("div", null, "The name of your game. This cannot be changed here. You can change this by publishing your game again with the new name.")), ae.createElement("div", {
                className: "vstack stretch form-field-stack"
            }, ae.createElement("label", {
                htmlFor: "tagline"
            }, "Tagline"), ae.createElement("input", {
                id: "tagline",
                type: "text",
                autoComplete: "off",
                placeholder: "Like dodgeball, except for wizards",
                value: o,
                onChange: e=>s(e.target.value),
                maxLength: wt
            }), c && ae.createElement("div", null, ae.createElement("i", {
                className: "fas fa-triangle-exclamation error-text"
            }), " ", c), ae.createElement("div", null, "Describe your game in a few words. This will be shown in the listing to help people decide what to play.")), ae.createElement("div", {
                className: "vstack stretch form-field-stack"
            }, ae.createElement("label", {
                htmlFor: "thumbnailImage"
            }, "Thumbnail Image"), ae.createElement(re.zx, {
                tier: "secondary",
                raised: !0,
                onClick: ()=>document.getElementById("thumbnailImage")?.click()
            }, "Choose File"), ae.createElement("input", {
                id: "thumbnailImage",
                type: "file",
                onChange: function(e) {
                    const t = e?.target?.files[0];
                    t && (y(null),
                    w(t) && h(t))
                },
                hidden: !0
            }), p && ae.createElement("img", {
                className: "cover-image-preview",
                src: p,
                alt: ""
            }), E && ae.createElement("div", null, ae.createElement("i", {
                className: "fas fa-triangle-exclamation error-text"
            }), " ", E), ae.createElement("div", null, "Choose an image to represent your game. This will be shown wherever Easel links to your game. For best results, the image should have a 16:9 aspect ratio, ideally 304x171 pixels, but any size is acceptable as it will be automatically cropped and resized if needed. Must be smaller than ", vt, " KB."))), ae.createElement("div", {
                className: "hstack stretch"
            }, ae.createElement(re.zx, {
                className: "working",
                disabled: n,
                tier: "primary",
                raised: !0,
                submit: !0
            }, "Submit")), r && ae.createElement("div", null, ae.createElement("i", {
                className: "fas fa-triangle-exclamation error-text"
            }), " ", r))
        }
        function _t(e) {
            const {gameId: t, gameName: n} = e
              , [a,r] = (0,
            ae.useState)(null)
              , [l,o] = (0,
            ae.useState)(null)
              , [i,s] = (0,
            ae.useState)(!1)
              , [c,u] = (0,
            ae.useState)(!1);
            if ((0,
            ae.useEffect)((()=>{
                a || async function() {
                    try {
                        const e = await ut(t);
                        r(e ?? {
                            tagline: "",
                            thumbnailImage: null,
                            isDraft: !0,
                            isReviewed: !1,
                            isFeatured: !1
                        })
                    } catch (e) {
                        console.error(`${e}`),
                        o(`${e}`)
                    }
                }().catch(console.error)
            }
            ), [t, a]),
            l)
                return ae.createElement(ae.Fragment, null, ae.createElement("div", {
                    className: "vstack stretch"
                }, ae.createElement("h2", null, "Error"), ae.createElement("p", null, "Error loading discoverability data: ", l)));
            if (a) {
                function m() {
                    s(!0)
                }
                function d() {
                    r(null),
                    s(!1)
                }
                function f() {
                    (async function() {
                        u(!0);
                        try {
                            await async function(e) {
                                const t = await fetch(`/api/games/${e}/discoverability`, {
                                    method: "DELETE"
                                });
                                if (204 !== t.status && 404 !== t.status) {
                                    const n = `Failed to delete game discoverability (${e}): ${await t.text()}`;
                                    throw console.error(n),
                                    new Error(n)
                                }
                            }(t)
                        } catch (e) {
                            console.error(`${e}`),
                            o(`${e}`)
                        } finally {
                            u(!1),
                            r(null),
                            s(null)
                        }
                    }
                    )().catch(console.error)
                }
                return ae.createElement("div", {
                    className: "vstack stretch"
                }, ae.createElement("h2", null, "Discoverability ", ae.createElement("i", {
                    className: "fa-solid fa-earth-americas"
                })), ae.createElement("div", null, "Share your game with the Easel community and the world! This page allows you to make your game ", ae.createElement("b", null, "discoverable"), ". Games that are discoverable will be listed in the ", ae.createElement("a", {
                    href: (0,
                    ce.al)("/showcase")
                }, ae.createElement("b", null, "Easel showcase")), ", and if they are original enough, they may even be featured directly on the Easel homepage!"), ae.createElement("h3", null, "Status"), a.isDraft ? ae.createElement(ae.Fragment, null, ae.createElement("div", null, ae.createElement("b", null, "Unlisted:"), " Your game is not currently discoverable."), ae.createElement("h3", null, "Make your game discoverable"), ae.createElement(bt, {
                    gameId: t,
                    gameName: n,
                    data: a,
                    onSubmit: d
                })) : ae.createElement(ae.Fragment, null, a.isFeatured ? ae.createElement("div", null, ae.createElement("b", null, "Featured:"), " Your game is discoverable, and the Easel staff have reviewed it and decided to feature it on the ", ae.createElement("a", {
                    href: (0,
                    ce.al)()
                }, ae.createElement("b", null, "Easel homepage")), "!") : ae.createElement("div", null, ae.createElement("b", null, "Discoverable:"), " Your game is discoverable. You find it listed in the ", ae.createElement("a", {
                    href: (0,
                    ce.al)("/showcase")
                }, ae.createElement("b", null, "Easel showcase")), "."), ae.createElement("div", {
                    className: "hstack"
                }, ae.createElement(re.zx, {
                    tier: "primary",
                    raised: !0,
                    onClick: m
                }, "Edit ", ae.createElement("i", {
                    className: "fa-solid fa-edit"
                })), ae.createElement(re.zx, {
                    tier: "secondary",
                    raised: !0,
                    onClick: f,
                    disabled: c,
                    className: "working"
                }, "Change to Undiscoverable ", ae.createElement("i", {
                    className: "fa-solid fa-eye-slash"
                }))), i && ae.createElement(ae.Fragment, null, ae.createElement("h3", null, "Edit"), ae.createElement(bt, {
                    gameId: t,
                    gameName: n,
                    data: a,
                    onSubmit: d
                }))))
            }
            return ae.createElement(ae.Fragment, null, ae.createElement("div", {
                className: "vstack stretch"
            }, ae.createElement("h2", null, "Discoverability"), ae.createElement("div", {
                className: "loading"
            }, "Loading...")))
        }
        class Ot {
            search = (0,
            $.cn)(null);
            filter = (0,
            $.cn)(null);
            numMatchesInFile = (0,
            $.cn)(null);
            onFindPrevious = new $.YZ;
            onFindNext = new $.YZ;
            onReplaceNext = new $.YZ;
            onReplaceAll = new $.YZ;
            newSearch(e, t) {
                e ? (this.search.set(e),
                this.filter.set(t.query(e))) : this.clearSearch()
            }
            clearSearch() {
                this.search.set(null),
                this.filter.set(null),
                this.numMatchesInFile.set(null)
            }
        }
        const kt = ae.createContext(null);
        class Nt {
            freed = !1;
            source;
            published = (0,
            $.cn)(null);
            query = new Ot;
            selectedPath = (0,
            $.cn)("readme.md");
            partying = (0,
            $.cn)(!1);
            previousParty = null;
            previewing = (0,
            $.cn)(!1);
            previousPreview = null;
            uploadedArtifactsCache = new Map;
            constructor(e, t=null, n=null) {
                this.source = new W(e,t),
                this.published.set(n ?? ft.tryParse(e))
            }
            free() {
                this.freed || (this.freed = !0,
                this.source.free())
            }
        }
        function xt(e) {
            const t = De()(e.className, "btn", "transparent");
            return ae.createElement(re.rU, {
                ...e,
                path: "Editor",
                className: t
            }, ae.createElement("i", {
                className: "fa-solid fa-chevron-left"
            }), " Back")
        }
        function St(e, t, n) {
            const [a,r] = n.source.files.root.findEnclosingFolder(e.split("/"));
            let l = 1;
            for (; ; ) {
                let e = "new" + l++;
                if (t && (e += `.${t}`),
                r.has(e))
                    continue;
                const o = [...a, e].join("/");
                if (t)
                    r.overwrite([e], 0, "");
                else {
                    const t = new R;
                    t.expanded.set(!0),
                    r.insert(t, [e], 0)
                }
                return n.selectedPath.set(o),
                o
            }
        }
        async function It(e, t, n) {
            const [a,r] = e.source.files.root.findEnclosingFolder((n ?? "").split("/"))
              , l = a.join("/");
            let o = null;
            for (const n of t) {
                if (!n.name)
                    continue;
                const t = p(l, n.name);
                o = t;
                try {
                    const a = new Uint8Array(await n.arrayBuffer());
                    e.source.insertFile(t, a)
                } catch (e) {
                    console.error("Error inserting external file", e)
                }
            }
            return o
        }
        function Ct(e) {
            const {modding: t, selected: n, setRenaming: a} = e
              , r = (0,
            ae.useRef)(null)
              , l = (0,
            ae.useRef)(null)
              , [o,i] = (0,
            ae.useState)(!1)
              , [s,c] = (0,
            ae.useState)(null);
            return ae.createElement(ae.Fragment, null, ae.createElement(re.zx, {
                ref: l,
                flat: !0,
                onClick: function() {
                    i(!o)
                },
                onPointerEnter: ()=>c("New..."),
                onPointerLeave: ()=>c(null),
                className: "new-file-toolbar-expander"
            }, ae.createElement("i", {
                className: "fa-solid fa-circle-plus"
            })), ae.createElement("input", {
                ref: r,
                type: "file",
                multiple: !0,
                style: {
                    display: "none"
                },
                onChange: function(e) {
                    const a = e.target.files;
                    a && a.length > 0 && It(t, [...a], n ?? "").then((e=>{
                        t.selectedPath.set(e)
                    }
                    )).catch(console.error)
                }
            }), s && ae.createElement(re.xW, null, s), o && ae.createElement(re.yR, {
                parent: l.current,
                anchor: (e,t)=>({
                    bottom: t.height - e.top,
                    left: 0
                }),
                className: "new-file-toolbar-popout float-shadow",
                onPointerLeave: ()=>i(!1)
            }, ae.createElement(re.zx, {
                flat: !0,
                onClick: function() {
                    const e = "esfx" === d(n) ? "esfx" : "easel"
                      , r = St(n, e, t);
                    a(r),
                    i(!1)
                }
            }, ae.createElement("i", {
                className: "fas fa-file-plus"
            }), " New File"), ae.createElement(re.zx, {
                flat: !0,
                onClick: function() {
                    const e = St(n, null, t);
                    a(e),
                    i(!1)
                }
            }, ae.createElement("i", {
                className: "fas fa-folder-plus"
            }), " New Folder"), ae.createElement(re.zx, {
                flat: !0,
                onClick: ()=>r.current?.click()
            }, ae.createElement("i", {
                className: "fas fa-arrow-up-from-line"
            }), " Import File")))
        }
        const Pt = "application/dragging-filepath";
        function $t(e) {
            const [t,n] = (0,
            ae.useState)(e.name)
              , [a,r] = (0,
            ae.useState)(null)
              , l = (0,
            ae.useRef)(null);
            return (0,
            ae.useEffect)((()=>{
                const e = l.current;
                if (e) {
                    const t = e.value;
                    let n = t.lastIndexOf(".");
                    -1 === n && (n = t.length),
                    e.setSelectionRange(0, Math.max(0, n)),
                    e.focus(),
                    e.scrollIntoView({
                        block: "nearest"
                    })
                }
            }
            ), []),
            ae.createElement(ae.Fragment, null, ae.createElement("input", {
                type: "text",
                ref: l,
                className: "file-name",
                value: t,
                onChange: e=>function(e) {
                    n(e),
                    r(null)
                }(e.target.value),
                onKeyDown: function(n) {
                    n.stopPropagation(),
                    "Enter" === n.code ? function() {
                        const n = e.name;
                        if (n === t)
                            return void e.onClose();
                        if (!((a = t) && a.length > 0 && a.length <= 60) || a.startsWith(".") || m.test(a))
                            return void r("Invalid filename");
                        var a;
                        const l = p(e.parentPath, t);
                        if (e.source.files.find(l.split("/")))
                            return void r(`'${t}' already exists`);
                        const o = p(e.parentPath, n);
                        e.source.move(o, l),
                        e.onClose(l)
                    }() : "Escape" === n.code && e.onClose()
                },
                onBlur: function() {
                    e.onClose()
                }
            }), a && ae.createElement(re.yR, {
                className: "file-rename-error-popout float-shadow",
                parent: l.current,
                anchor: e=>({
                    top: e.bottom,
                    left: e.left
                })
            }, ae.createElement("i", {
                className: "fas fa-triangle-exclamation error-text"
            }), " ", a))
        }
        function Ft(e) {
            const {modding: t, depth: n, name: a} = e
              , r = p(e.parentPath, a)
              , l = (0,
            ae.useRef)(null)
              , o = r === e.selected;
            return (0,
            ae.useEffect)((()=>{
                o && l.current?.scrollIntoView({
                    block: "nearest"
                })
            }
            ), [o]),
            ae.createElement(re.wc, {
                ref: l,
                className: De()({
                    selected: o
                }),
                style: {
                    paddingLeft: .8 * n + "em"
                },
                draggable: !0,
                onDragStart: function(e) {
                    e.dataTransfer.setData(Pt, r)
                },
                onPointerDown: function() {
                    t.selectedPath.set(r)
                },
                title: r
            }, ae.createElement("i", {
                className: Tt(a)
            }), e.renaming === r ? ae.createElement($t, {
                source: t.source,
                parentPath: e.parentPath,
                name: a,
                onClose: e.onCloseRename
            }) : ae.createElement("span", {
                className: "file-name"
            }, a))
        }
        function Tt(e) {
            switch (d(e)) {
            case "easel":
                return "fas fa-brackets-curly file-icon file-type-script";
            case "svg":
                return "fas fa-vector-square file-icon file-type-image";
            case "jpeg":
            case "jpg":
            case "png":
            case "gif":
            case "bmp":
            case "tiff":
            case "webp":
                return "fas fa-image file-icon file-type-image";
            case "ico":
                return "fas fa-star file-icon file-type-icon";
            case "esfx":
            case "wav":
                return "fas fa-music-note file-icon file-type-sound";
            case "mp3":
            case "ogg":
            case "m4a":
                return "fas fa-music file-icon file-type-music";
            case "m4v":
            case "mp4":
            case "mov":
            case "webm":
            case "mkv":
            case "avi":
            case "wmv":
            case "flv":
            case "3gp":
                return "fas fa-video file-icon file-type-video";
            case "toml":
            case "json":
            case "ini":
            case "yaml":
            case "yml":
                return "fas fa-cog file-icon file-type-config";
            case "md":
            case "txt":
                return "fas fa-align-left file-icon file-type-text";
            default:
                return "fas fa-file file-icon file-type-unknown"
            }
        }
        const Dt = ae.memo((function(e) {
            const {modding: t, folder: n, depth: a, parentPath: r, filter: l, selected: o, renaming: i, name: s} = e
              , c = p(r, s)
              , u = (0,
            $.KO)(n.expanded);
            return ae.createElement("div", {
                className: De()("folder-wrapper"),
                "data-drop-path": c
            }, ae.createElement(re.wc, {
                className: De()({
                    selected: c === o
                }),
                style: {
                    paddingLeft: .8 * a + "em"
                },
                draggable: !0,
                onDragStart: function(e) {
                    e.dataTransfer.getData(Pt) || e.dataTransfer.setData(Pt, c)
                },
                onPointerDown: function() {
                    n.expanded.set(!u),
                    t.selectedPath.set(c)
                },
                title: c
            }, ae.createElement("i", {
                className: u ? "fas fa-chevron-down expander file-icon" : "fas fa-chevron-right expander file-icon"
            }), e.renaming === c ? ae.createElement($t, {
                source: t.source,
                parentPath: e.parentPath,
                name: s,
                onClose: e.onCloseRename
            }) : ae.createElement("span", {
                className: "file-name"
            }, s)), u && ae.createElement(Rt, {
                modding: t,
                folder: n,
                depth: a + 1,
                parentPath: c,
                filter: l,
                selected: o?.startsWith(c) ? o : null,
                renaming: i?.startsWith(c) ? o : null,
                onCloseRename: e.onCloseRename
            }))
        }
        ));
        function Rt(e) {
            const {modding: t, folder: n, parentPath: a, depth: r, filter: l, selected: o} = e
              , i = (0,
            $.KO)(n.files);
            return ae.createElement(ae.Fragment, null, [...i].map((([i,s])=>s instanceof R ? l && !l.folders.has(p(a, i)) ? null : ae.createElement(Dt, {
                key: i,
                modding: t,
                parent: n,
                folder: s,
                depth: r,
                parentPath: a,
                name: i,
                filter: l,
                selected: o,
                renaming: e.renaming,
                onCloseRename: e.onCloseRename
            }) : l && !l.files.has(p(a, i)) ? null : ae.createElement(Ft, {
                key: i,
                modding: t,
                parent: n,
                file: s,
                depth: r,
                parentPath: a,
                name: i,
                selected: o,
                renaming: e.renaming,
                onCloseRename: e.onCloseRename
            }))))
        }
        const Ut = "";
        function zt(e) {
            const {modding: t} = e
              , n = (0,
            $.KO)(t.selectedPath)
              , [a,r] = (0,
            ae.useState)(null)
              , l = (0,
            ae.useRef)(null)
              , [o,i] = (0,
            ae.useState)(null)
              , s = n !== Ut ? f(n) : null
              , c = (0,
            $.ie)((()=>new Mt))
              , u = (0,
            $.KO)(t.query.filter)
              , m = (0,
            ae.useCallback)((e=>{
                r(null),
                e && t.selectedPath.set(e),
                l.current?.focus()
            }
            ), [t]);
            function d() {
                r(n)
            }
            function h() {
                const e = t.source.delete(n);
                t.selectedPath.set(Ut),
                i({
                    fileOrFolder: e,
                    path: n
                })
            }
            return ae.createElement("div", {
                className: De()("file-tree", e.className)
            }, ae.createElement(re.NB, {
                ref: l,
                className: De()("no-select"),
                tabIndex: 0,
                onKeyDown: function(e) {
                    "Enter" === e.code || "F2" === e.code ? d() : "Delete" === e.code && h()
                },
                onDragEnter: function(e) {
                    e.preventDefault()
                },
                onDragOver: function(e) {
                    if (e.target instanceof Element && c.highlight(e.target.closest("[data-drop-path]")),
                    e.currentTarget) {
                        const t = 10
                          , n = e.currentTarget
                          , a = e.clientY
                          , r = n.clientHeight;
                        a <= .3 * r ? n.scrollTop = Math.max(0, n.scrollTop - t) : a >= .7 * r && (n.scrollTop = Math.min(n.scrollHeight - r, n.scrollTop + t))
                    }
                    e.preventDefault()
                },
                onDrop: function(e) {
                    const n = e.target.closest("[data-drop-path]")?.getAttribute("data-drop-path");
                    if (e.dataTransfer.files.length > 0)
                        It(t, [...e.dataTransfer.files], n).then((e=>{
                            t.selectedPath.set(e)
                        }
                        )).catch(console.error);
                    else {
                        const a = e.dataTransfer.getData(Pt)
                          , r = function(e, t, n) {
                            if (!t || "string" != typeof n || n.startsWith(t))
                                return null;
                            const a = p(n, f(t));
                            return a === t ? null : (console.log(`Moving '${t}' to '${n}'`),
                            e.source.move(t, a),
                            a)
                        }(t, a, n);
                        r && t.selectedPath.set(r)
                    }
                    c.unhighlight(),
                    e.preventDefault()
                },
                "data-drop-path": Ut
            }, ae.createElement(Rt, {
                modding: t,
                folder: t.source.files.root,
                depth: 0,
                parentPath: Ut,
                filter: u,
                selected: n,
                renaming: a,
                onCloseRename: m
            })), ae.createElement(re.o8, null, ae.createElement(re.R1, null, ae.createElement(Ct, {
                modding: t,
                selected: n,
                setRenaming: r
            }), s && ae.createElement(ae.Fragment, null, ae.createElement(re.X, {
                title: `Rename ${s}`,
                flat: !0,
                onClick: d
            }, ae.createElement("i", {
                className: "fas fa-pencil"
            })), ae.createElement(re.X, {
                title: `Delete ${s}`,
                flat: !0,
                onClick: h
            }, ae.createElement("i", {
                className: "fas fa-trash"
            }))), ae.createElement(re.lN, null), ae.createElement(re.LZ, null), !s && o && ae.createElement(re.X, {
                title: `Undo delete ${o.path[o.path.length - 1]}`,
                flat: !0,
                onClick: function() {
                    t.source.undelete(o.path, o.fileOrFolder),
                    t.selectedPath.set(o.path),
                    i(null)
                }
            }, ae.createElement("i", {
                className: "fas fa-trash-undo"
            })))))
        }
        class Mt {
            previousDrop = null;
            clearTimer = null;
            highlight(e) {
                this.previousDrop !== e && (this.previousDrop && this.previousDrop.classList.remove("dragging-over"),
                e && e.classList.add("dragging-over")),
                this.previousDrop = e,
                this.resetClearTimer()
            }
            unhighlight() {
                this.previousDrop && (this.previousDrop.classList.remove("dragging-over"),
                this.previousDrop = null)
            }
            resetClearTimer() {
                this.clearTimer && clearTimeout(this.clearTimer),
                this.previousDrop && (this.clearTimer = setTimeout((()=>{
                    this.unhighlight(),
                    this.clearTimer = null
                }
                ), 500))
            }
        }
        var qt = n(3868);
        function At(e) {
            return ae.createElement("div", {
                className: "missing-source-container"
            }, ae.createElement("div", {
                className: "missing-source"
            }, e.children))
        }
        function Qt(e) {
            const {content: t} = e;
            return ae.createElement("textarea", {
                className: De()("code-viewer", e.className),
                readOnly: !0,
                value: t
            })
        }
        var Lt = n(6485)
          , Jt = n(9119)
          , Gt = n(5383)
          , jt = n(4790)
          , Bt = n(8519)
          , Wt = n(6692)
          , Xt = n(5209)
          , Yt = n(6443)
          , Kt = n(271)
          , Zt = n(3105);
        const Ht = {
            __proto__: null,
            auto: 98,
            null: 190,
            undefined: 192,
            true: 194,
            false: 196,
            pub: 198,
            accumulator: 200,
            await: 202,
            behavior: 204,
            break: 206,
            buff: 208,
            category: 210,
            collect: 212,
            const: 214,
            continue: 216,
            delete: 218,
            else: 220,
            field: 222,
            fn: 224,
            for: 226,
            game: 228,
            give: 230,
            hook: 232,
            if: 234,
            in: 236,
            let: 238,
            loop: 240,
            on: 242,
            once: 244,
            page: 246,
            preference: 248,
            prop: 250,
            repeat: 252,
            return: 254,
            set: 256,
            signal: 258,
            surprise: 260,
            symbol: 262,
            tangible: 264,
            while: 266,
            with: 268,
            use: 270,
            this: 272,
            delve: 274,
            ui: 276
        }
          , Vt = Zt.WQ.deserialize({
            version: 14,
            states: "&rQ`QPOOP(WOPOOO(]QPO'#CbOOQO'#Cg'#CgOOQO'#Ch'#ChOOQO'#Cj'#CjOOQO'#Ck'#CkOOQO'#Cl'#ClOOQO'#Ci'#CiOOQO'#Cr'#CrOOQO'#Cs'#CsO(eQPO'#CvO(lQPO'#CyO(sQPO'#C|OOQO'#C}'#C}OOQO'#D['#D[OOQO'#DQ'#DQQ`QPOOP(zOSO'#C^POOO)C>y)C>yO)VQQO,58|OOQO,59b,59bO)bQPO,59bOOQO,59e,59eO)iQPO,59eOOQO,59h,59hO)pQPO,59hOOQO-E7O-E7OPOOO'#DP'#DPP)wOSO,58xPOOO,58x,58xOOQO'#Ce'#CeO*SQPO'#DRO*_QQO1G.hOOQO1G.h1G.hOOQO1G.|1G.|OOQO1G/P1G/POOQO1G/S1G/SPOOO-E6}-E6}POOO1G.d1G.dOOQO'#Cf'#CfOOQO,59m,59mOOQO-E7P-E7POOQO7+$S7+$S",
            stateData: "*z~OxOSyOSPOSzPQ~OTQOV_OW_OaWObWOcWOdWOeWOiZOl[Oo]Or_O!SRO!TRO!URO!VRO!WRO!XRO!YRO!ZRO![RO!]RO!^RO!_RO!`RO!aRO!bRO!cRO!dRO!eRO!fRO!gRO!hRO!iRO!jRO!kRO!lRO!mRO!nRO!oRO!pRO!qSO!rSO!sSO!tSO!uSO!vSO!wSO!xSO!ySO!zSO!{SO!|SO!}SO#OSO#PSO#QSO#RTO#SUO#TVO#UVO#VXO#WXO#XXO#YXO#ZXO#[XO#]XO#^XO#_XO#`XO#aXO#bXO#cXO#dXO#eXO#fXO#gXO#hXO#iXO#jXO#kXO#lXO#mXO#nXO#oXO#pXO#qXO#rXO#sXO#tXO#uXO#vXO#wXO#xXO#yXO#zXO#{XO#|YO#}YO$OYO$P^O$Q^O$R^O~OzbO~OVdOWdO~OheO~P`OkgO~P`OniO~P`O{lO|lO}nO~OSrO!PoO!QoO~OhsO~P`OktO~P`OnuO~P`O{lO|lO}wO~OVyOWyO!RxO~OS{O!PoO!QoO~OT!_c!X!p!nPa!T!c!W!r!o!a!f~",
            goto: "#j!PPP!QPPP!TPP!_!c!T!T!T!f!f!fPPPPP!T!TPP!TPP!TPP!T!TP!p!v#YPPPPPPPP#`RcPa_OZ[]afhjTpdqRypaWOZ[]afhjQmbRvmQaOQfZQh[Qj]XkafhjQqdRzqa`OZ[]afhj",
            nodeNames: "⚠ LineComment BlockComment Program EndDiscriminator StartDiscriminator Discriminator StaticIdentifier Identifier DiscriminatorOp DiscriminatorAuto Op AssignmentOp Literal Null Undefined Boolean Number String Asset Color AnonymousSymbol Keyword SpecialVariable ) ( ParenSoup ] [ BracketSoup } { BraceSoup Punctuation Ignore",
            maxTerm: 141,
            nodeProps: [["openedBy", 4, "StartDiscriminator", 24, "(", 27, "[", 30, "{"], ["closedBy", 5, "EndDiscriminator", 25, ")", 28, "]", 31, "}"]],
            skippedNodes: [0, 1, 2, 35],
            repeatNodeCount: 3,
            tokenData: "2e~RuXY#fYZ#q]^#qpq#fqr#vrs$Tst$rtu%^uv%uvw&Uwx&sxy']yz'bz{'g{|(U|}(e}!O(j!O!P)}!P!Q*S!Q![(z![!]+T!]!^+[!^!_+a!_!`,Q!`!a,a!a!b-Q!b!c-i!c!}0S!}#O0h#P#Q0m#Q#R0r#R#S1P#T#o1U#o#p1g#p#q1l#q#r2Z#r#s2`~#kQx~XY#fpq#f~#vOy~~#{P!U~!_!`$O~$TO!^~~$WTOr$Trs$gs;'S$T;'S;=`$l<%lO$T~$lOb~~$oP;=`<%l$T~$uR!Q![%O!c!i%O#T#Z%O~%TRd~!Q![%O!c!i%O#T#Z%O~%aP#T#o%d~%iSe~!Q![%d!c!}%d#R#S%d#T#o%d~%|P!W~!a~!_!`&P~&UO!y~~&ZQ!i~vw&a!_!`&n~&fP!g~!_!`&i~&nO!z~~&sO!|~~&vTOw&swx$gx;'S&s;'S;=`'V<%lO&s~'YP;=`<%l&s~'bOi~~'gOh~~'lQ!e~z{'r!_!`(P~'wP!d~!_!`'z~(PO!v~~(UO!w~U(]P!PS!bQ!_!`(`Q(eO!tQ~(jO$P~~(qR!T~!c~!Q![(z!_!`)s!`!a)x~)PRa~!O!P)Y!Q![(z#T#o)k~)]P!Q![)`~)eQa~!Q![)`#T#o)k~)pPa~#T#o)k~)xO!u~~)}O$R~~*SO!S~~*XR!f~z{*b!P!Q*g!_!`+O~*gOz~~*lSP~OY*gZ;'S*g;'S;=`*x<%lO*g~*{P;=`<%l*g~+TO!x~~+[O!r~!o~~+aO$Q~~+hQT~!_~!^!_+n!_!`+{~+sP!l~!_!`+v~+{O#P~~,QO!`~U,XP!QS!qQ!_!`,[Q,aO!]QU,hQSS![Q!_!`,n!`!a,sQ,sO!ZQQ,xP!mQ!_!`,{Q-QO#QQ~-XP!p~!n~!a!b-[~-aP!Y~!_!`-d~-iO!s~~-nY!X~rs.^wx.{z{/e}!O/e!O!P/e!P!Q/e!Q![/e!c!}/e#R#S/e#T#o/e~.aTOr.^rs.ps;'S.^;'S;=`.u<%lO.^~.uOc~~.xP;=`<%l.^~/OTOw.{wx.px;'S.{;'S;=`/_<%lO.{~/bP;=`<%l.{~/jWc~z{/e}!O/e!O!P/e!P!Q/e!Q![/e!c!}/e#R#S/e#T#o/e~0XTV~!Q![0S![!]0S!c!}0S#R#S0S#T#o0S~0mOl~~0rOk~~0wP!k~!_!`0z~1PO#O~~1UOr~~1ZSW~!Q![1U!c!}1U#R#S1U#T#o1U~1lOo~~1qQ!j~!_!`1w#p#q1|~1|O!}~~2RP!h~!_!`2U~2ZO!{~~2`On~~2eO!V~",
            tokenizers: [1, 2, new Zt.RA("j~RQYZXz{^~^O|~~aP!P!Qd~iO}~~",25,43)],
            topRules: {
                Program: [0, 3]
            },
            specialized: [{
                term: 8,
                get: e=>Ht[e] || -1
            }],
            tokenPrec: 440
        });
        var en = n(5524);
        let tn = Vt.configure({
            props: [(0,
            en.Gv)({
                LineComment: en.pJ.lineComment,
                BlockComment: en.pJ.blockComment,
                Discriminator: en.pJ.typeName,
                StartDiscriminator: en.pJ.typeName,
                EndDiscriminator: en.pJ.typeName,
                DiscriminatorAuto: en.pJ.keyword,
                DiscriminatorOp: en.pJ.operator,
                Op: en.pJ.operator,
                AssignmentOp: en.pJ.operator,
                Literal: en.pJ.literal,
                Boolean: en.pJ.bool,
                Number: en.pJ.number,
                V2Prefix: en.pJ.number,
                String: en.pJ.string,
                Color: en.pJ.color,
                Asset: en.pJ.atom,
                AnonymousSymbol: en.pJ.atom,
                Keyword: en.pJ.keyword,
                Identifier: en.pJ.name,
                StaticIdentifier: en.pJ.typeName,
                SpecialVariable: en.pJ.typeName,
                Ignore: en.pJ.name,
                Null: en.pJ.null,
                Undefined: en.pJ.null,
                Punctuation: en.pJ.punctuation,
                Context: en.pJ.operatorKeyword,
                "( )": en.pJ.paren,
                "{ }": en.pJ.brace,
                "[ ]": en.pJ.squareBracket
            }), Jt.uj.add({
                Application: e=>e.column(e.node.from) + e.unit
            }), Jt.x0.add({
                Application: Jt.Dv
            })]
        });
        const nn = Jt.qp.define({
            parser: tn,
            languageData: {
                commentTokens: {
                    line: "//"
                }
            }
        })
          , an = "#20e8c1"
          , rn = "#deab5f"
          , ln = "#bac2d1"
          , on = "#abb2bf"
          , sn = "#7d8799"
          , cn = "#2c313a"
          , un = "#202020"
          , mn = "#353a42"
          , dn = "#528bff"
          , fn = Lt.tk.theme({
            "&": {
                color: ln,
                backgroundColor: un
            },
            ".cm-content": {
                caretColor: dn
            },
            ".cm-cursor, .cm-dropCursor": {
                borderLeftColor: dn
            },
            "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
                backgroundColor: "#3E4451"
            },
            ".cm-panels": {
                backgroundColor: "#21252b",
                color: on
            },
            ".cm-panels.cm-panels-top": {
                borderBottom: "2px solid black"
            },
            ".cm-panels.cm-panels-bottom": {
                borderTop: "2px solid black"
            },
            ".cm-searchMatch": {
                backgroundColor: "#72a1ff59",
                outline: "1px solid #457dff"
            },
            ".cm-searchMatch.cm-searchMatch-selected": {
                backgroundColor: "#6199ff2f"
            },
            ".cm-activeLine": {
                backgroundColor: "#6699ff0b"
            },
            ".cm-selectionMatch": {
                backgroundColor: "#aafe661a"
            },
            "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
                backgroundColor: "#bad0f847"
            },
            ".cm-gutters": {
                backgroundColor: un,
                color: sn,
                border: "none"
            },
            ".cm-activeLineGutter": {
                backgroundColor: cn
            },
            ".cm-foldPlaceholder": {
                backgroundColor: "transparent",
                border: "none",
                color: "#ddd"
            },
            ".cm-tooltip": {
                border: "none",
                backgroundColor: mn
            },
            ".cm-tooltip .cm-tooltip-arrow:before": {
                borderTopColor: "transparent",
                borderBottomColor: "transparent"
            },
            ".cm-tooltip .cm-tooltip-arrow:after": {
                borderTopColor: mn,
                borderBottomColor: mn
            },
            ".cm-tooltip-autocomplete": {
                "& > ul > li[aria-selected]": {
                    backgroundColor: cn,
                    color: on
                }
            }
        }, {
            dark: !0
        })
          , hn = Jt.Qf.define([{
            tag: en.pJ.keyword,
            color: "#c477e0"
        }, {
            tag: [en.pJ.name, en.pJ.deleted, en.pJ.character, en.pJ.propertyName, en.pJ.macroName],
            color: ln
        }, {
            tag: [en.pJ.function(en.pJ.variableName), en.pJ.labelName],
            color: "#61afef"
        }, {
            tag: [en.pJ.color, en.pJ.constant(en.pJ.name), en.pJ.standard(en.pJ.name)],
            color: rn
        }, {
            tag: [en.pJ.definition(en.pJ.name), en.pJ.separator],
            color: on
        }, {
            tag: [en.pJ.typeName, en.pJ.className, en.pJ.changed, en.pJ.annotation, en.pJ.modifier, en.pJ.self, en.pJ.namespace],
            color: an
        }, {
            tag: [en.pJ.operator, en.pJ.operatorKeyword, en.pJ.url, en.pJ.escape, en.pJ.regexp, en.pJ.link, en.pJ.special(en.pJ.string), en.pJ.squareBracket],
            color: "#e8c795"
        }, {
            tag: [en.pJ.meta, en.pJ.comment],
            color: sn
        }, {
            tag: en.pJ.strong,
            fontWeight: "bold"
        }, {
            tag: en.pJ.emphasis,
            fontStyle: "italic"
        }, {
            tag: en.pJ.strikethrough,
            textDecoration: "line-through"
        }, {
            tag: en.pJ.link,
            color: sn,
            textDecoration: "underline"
        }, {
            tag: en.pJ.heading,
            fontWeight: "bold",
            color: an
        }, {
            tag: [en.pJ.atom, en.pJ.bool, en.pJ.number, en.pJ.string, en.pJ.special(en.pJ.variableName)],
            color: rn
        }, {
            tag: [en.pJ.processingInstruction, en.pJ.inserted],
            color: rn
        }, {
            tag: [en.pJ.punctuation],
            color: "#8a95a8"
        }, {
            tag: en.pJ.invalid,
            color: "#ffffff"
        }])
          , pn = [fn, (0,
        Jt.nF)(hn)]
          , gn = F.r$.define({
            combine: e=>e[0]
        });
        function En(e) {
            const {cell: t, query: n, onDocChange: a} = e
              , r = (0,
            $.KO)(n.search)
              , l = (0,
            $.ie)((()=>new $.YZ))
              , o = (0,
            $.T6)((()=>new Lt.tk({
                dispatchTransactions: function(e, t) {
                    t.update(e),
                    l.emit(t.state)
                }
            })), (e=>e.destroy()));
            (0,
            ae.useEffect)((()=>{
                if (!t)
                    return;
                o.setState(t.state),
                o.dispatch({
                    effects: t.scrollSnapshot ?? Lt.tk.scrollIntoView(0)
                }),
                t.scrollSnapshot = null;
                let e = t.state.doc;
                function n(n) {
                    t.state = n;
                    const r = n.doc;
                    r !== e && (e = r,
                    a())
                }
                let r = null;
                function i() {
                    r && clearTimeout(r),
                    r = setTimeout((()=>{
                        r = null,
                        t.scrollSnapshot = o.scrollSnapshot()
                    }
                    ), 200)
                }
                const s = o.scrollDOM;
                return s.addEventListener("scroll", i),
                l.on(n),
                ()=>{
                    l.off(n),
                    s.removeEventListener("scroll", i)
                }
            }
            ), [o, t, a]),
            (0,
            ae.useEffect)((()=>{
                function t() {
                    (0,
                    Re.K9)(o),
                    n.numMatchesInFile.set(Math.max(0, e.query.numMatchesInFile.get() - 1))
                }
                function a() {
                    (0,
                    Re.ko)(o),
                    n.numMatchesInFile.set(bn(o))
                }
                function r() {
                    (0,
                    Re.a7)(o)
                }
                function l() {
                    (0,
                    Re.g)(o)
                }
                return n.onReplaceNext.on(t),
                n.onReplaceAll.on(a),
                n.onFindPrevious.on(r),
                n.onFindNext.on(l),
                ()=>{
                    n.onReplaceNext.off(t),
                    n.onReplaceAll.off(a),
                    n.onFindPrevious.off(r),
                    n.onFindNext.off(l)
                }
            }
            ), [o, n]),
            (0,
            ae.useEffect)((()=>{
                if (r) {
                    const e = Re.ql.of(r);
                    o.dispatch({
                        effects: e
                    }),
                    (0,
                    Re.g)(o),
                    n.numMatchesInFile.set(bn(o))
                } else
                    (0,
                    Re.N$)(o);
                return ()=>{
                    n.numMatchesInFile.set(null)
                }
            }
            ), [o, t, n, r]);
            const i = De()("code-mirror-editor", {
                "code-mirror-editor-loading": !t
            });
            return ae.createElement("div", {
                className: i,
                ref: function(e) {
                    e ? e.appendChild(o.dom) : o.dom.remove()
                }
            })
        }
        function yn(e) {
            return {
                dom: document.createElement("div")
            }
        }
        function wn(e, t) {
            return F.yy.create({
                doc: e,
                extensions: [pn, gn.of(t), ...vn(t), F.yy.tabSize.of(4), Jt.c.of("    "), (0,
                Lt.Eu)(), (0,
                Lt.HQ)(), (0,
                Lt.AE)(), (0,
                Gt.m8)(), (0,
                Jt.mi)(), (0,
                Lt.Uw)(), (0,
                Lt.qr)(), F.yy.allowMultipleSelections.of(!0), (0,
                Jt.nY)(), (0,
                Jt.nF)(Jt.R_, {
                    fallback: !0
                }), (0,
                Jt.n$)(), (0,
                jt.vQ)(), (0,
                jt.ys)(), (0,
                Lt.Zs)(), (0,
                Lt.S2)(), (0,
                Re.yC)({
                    createPanel: yn
                }), (0,
                Lt.ZO)(), (0,
                Re.sW)(), Lt.$f.of([...jt.GA, ...Gt.wQ, ...Gt.f$, ...Jt.e7, ...jt.B1, ...Bt.Fv, Gt.oc])]
            })
        }
        function vn(e) {
            switch (e) {
            case "easel":
                return [new Jt.ri(nn,[])];
            case "json":
                return [(0,
                Xt.AV)()];
            case "markdown":
                return [(0,
                Wt.JH)()];
            case "toml":
                return [Jt.il.define(Yt.V)];
            case "xml":
                return [(0,
                Kt.Ls)()];
            default:
                return []
            }
        }
        function bn(e, t=99) {
            if (!e)
                return 0;
            let n = 0;
            const a = (0,
            Re.uP)(e.state).getCursor(e.state);
            for (; !(a.next().done || (++n,
            n >= t)); )
                ;
            return n
        }
        const _n = .05;
        function On(e) {
            const t = (0,
            ae.useContext)(Oe.Il)
              , {path: n, cell: a} = e
              , [r,l] = (0,
            ae.useState)(null)
              , o = (0,
            ae.useRef)(null);
            function s() {
                const e = o.current;
                e && (o.current = null,
                e.gain.linearRampToValueAtTime(0, e.context.currentTime + _n))
            }
            return (0,
            ae.useEffect)((()=>()=>{
                s()
            }
            ), []),
            a ? ae.createElement("div", {
                className: "sfx-file-preview-bar hstack"
            }, ae.createElement("div", {
                className: "spacer"
            }), ae.createElement(re.zx, {
                tier: "primary",
                raised: !0,
                flat: !0,
                onClick: function() {
                    let e;
                    try {
                        if (s(),
                        !a)
                            return;
                        const r = a.state.doc.toString();
                        if (!r)
                            return;
                        const l = new Map;
                        if (l.set(n, r),
                        e = function(e) {
                            const t = S(e)
                              , n = i.SF.from_files(t);
                            try {
                                return u.bI.deserialize(n.compile())
                            } finally {
                                n.free()
                            }
                        }(l),
                        !e)
                            return;
                        const c = e.synth(t.audio.ctx);
                        if (!c)
                            return;
                        const m = e.sound(0)
                          , d = new GainNode(c.ctx,{
                            gain: 1
                        });
                        d.connect(c.ctx.destination);
                        for (const e of m.bites)
                            c.play(e.elements, c.ctx.currentTime + e.delay, e.duration, d);
                        o.current = d
                    } catch (e) {
                        l(`${e}`)
                    } finally {
                        e?.free()
                    }
                }
            }, "Preview Sound ", ae.createElement("i", {
                className: "fa-solid fa-music"
            })), r && ae.createElement(re.Cv, {
                onCancel: ()=>l(null),
                error: r
            }, ae.createElement("h1", null, "Compilation error"), ae.createElement("p", null, "There is an error in your code, please fix it and try again:"))) : null
        }
        function kn(e) {
            const {file: t, path: n, modding: r} = e
              , [o,i] = (0,
            ae.useState)(null)
              , s = (0,
            $.KO)(t.content)
              , c = d(n)
              , u = function(e) {
                switch (e) {
                case "easel":
                case "esfx":
                    return "easel";
                case "xml":
                case "svg":
                    return "xml";
                case "json":
                    return "json";
                case "toml":
                    return "toml";
                case "md":
                    return "markdown";
                default:
                    return "plaintext"
                }
            }(c);
            (0,
            ae.useEffect)((()=>{
                (async function() {
                    try {
                        i(null),
                        s instanceof l ? await r.source.preloadFile(n) : s instanceof Uint8Array || "string" == typeof s ? t.content.set(new C(wn(a(s), u))) : s instanceof C && function(e) {
                            return e.facet(gn)
                        }(s.state) !== u && t.content.set(new C(wn(s.state.doc.toString(), u)))
                    } catch (e) {
                        console.error("Error preparing file for editing", n, u, e),
                        i(`${e}`)
                    }
                }
                )().catch(console.error)
            }
            ), [n, c, r, t, s, u]);
            const m = s instanceof C ? s : null;
            return ae.createElement("div", {
                className: "text-file-editor"
            }, ae.createElement(En, {
                cell: m,
                query: r.query,
                onDocChange: function() {
                    m && r.source.onFileEdited(n, m)
                }
            }), m && "esfx" === c && ae.createElement(On, {
                cell: m,
                path: n
            }), !m && ae.createElement(At, null, o ? ae.createElement("div", null, ae.createElement("i", {
                className: "fas fa-triangle-exclamation error-text"
            }), " ", o) : ae.createElement(re.gb, null, "Loading...")))
        }
        function Nn(e) {
            const {file: t, mimeType: n, extension: a} = e
              , [o,i] = (0,
            ae.useState)(null)
              , [s,c] = (0,
            ae.useState)(null)
              , m = (0,
            $.KO)(t.content);
            return (0,
            ae.useEffect)((()=>{
                try {
                    c(null);
                    let e = null;
                    if (m instanceof l)
                        i((0,
                        u.ln)(m.artifactId, a));
                    else {
                        const t = function(e) {
                            return e instanceof Uint8Array || "string" == typeof e ? r(e) : r(e.state.doc.toString())
                        }(m);
                        e = URL.createObjectURL(new Blob([t],{
                            type: n
                        })),
                        i(e)
                    }
                    if (e)
                        return ()=>URL.revokeObjectURL(e)
                } catch (e) {
                    c(`${e}`)
                }
            }
            ), [m, n, a]),
            s ? ae.createElement(At, null, s) : o ? n.startsWith("video/") ? ae.createElement("div", {
                className: "asset-viewer-container"
            }, ae.createElement("video", {
                autoPlay: !0,
                muted: !0,
                loop: !0,
                playsInline: !0,
                src: o,
                controls: !0
            })) : n.startsWith("audio/") ? ae.createElement("div", {
                className: "asset-viewer-container"
            }, ae.createElement("audio", {
                src: o,
                controls: !0
            })) : ae.createElement("div", {
                className: "asset-viewer-container"
            }, ae.createElement("img", {
                src: o,
                alt: null
            })) : ae.createElement(At, null, ae.createElement(re.gb, null, "Loading ..."))
        }
        function xn(e) {
            const {file: t, path: n, modding: a} = e
              , r = d(n)
              , l = T.getType(r) ?? "application/octet-stream";
            return function(e) {
                const t = e?.split("/", 1)[0];
                switch (t) {
                case "video":
                case "audio":
                case "image":
                    return !0;
                default:
                    return !1
                }
            }(l) ? ae.createElement(Nn, {
                mimeType: l,
                extension: r,
                file: t
            }) : ae.createElement(kn, {
                file: t,
                path: n,
                modding: a
            })
        }
        function Sn(e) {
            const t = e.modding
              , n = (0,
            ae.useRef)("")
              , a = (0,
            $.KO)(t.selectedPath)
              , r = (0,
            ae.useMemo)((()=>a.split("/")), [a])
              , l = t.source.files.find(r);
            let o = a
              , i = l instanceof D ? l : null;
            if (i)
                n.current = a;
            else {
                const e = t.source.files.findFile(n.current.split("/"));
                e && (i = e,
                o = n.current)
            }
            const s = (0,
            ae.useMemo)((()=>f(o)), [o]);
            return i ? ae.createElement(ae.Fragment, null, ae.createElement(qt.tw, {
                noGame: !0
            }, s ?? "Editor"), ae.createElement(xn, {
                modding: e.modding,
                path: o,
                file: i
            })) : ae.createElement(ae.Fragment, null, ae.createElement(qt.tw, {
                noGame: !0
            }, "Editor"), ae.createElement(At, null, "To begin, select a file from the left sidebar"))
        }
        function In(e) {
            const {modding: t} = e;
            return ae.createElement(ae.Fragment, null, ae.createElement(qt.JL, {
                path: "/Editor/Code"
            }), ae.createElement(Ze, {
                className: "source-screen"
            }, ae.createElement(He, {
                modding: t
            }), ae.createElement("div", {
                className: "mod-screen"
            }, ae.createElement(zt, {
                className: "sidebar",
                modding: t
            }), ae.createElement(Sn, {
                modding: t
            }))))
        }
        class Cn {
            scripts;
            constructor(e) {
                this.scripts = e
            }
        }
        function Pn(e) {
            const {disassembly: t} = e;
            return ae.createElement(re.NB, null, [...t.scripts.values()].map((t=>{
                const n = De()({
                    selected: t.name === e.selected
                });
                return ae.createElement(re.wc, {
                    className: n,
                    key: t.name,
                    onPointerDown: ()=>e.setSelected(t.name),
                    title: t.name
                }, t.name)
            }
            )))
        }
        function $n(e) {
            const {script: t} = e;
            return ae.createElement(Qt, {
                content: t.code
            })
        }
        function Fn(e) {
            const t = (0,
            ae.useContext)(Oe.Il).nav
              , {modding: n} = e
              , a = (0,
            $.ie)((()=>new Cn(function(e) {
                const t = S(e)
                  , n = i.SF.from_files(t);
                try {
                    const e = n.disassemble();
                    e.sort(((e,t)=>e.name.localeCompare(t.name)));
                    const t = new Map;
                    for (const n of e)
                        t.set(n.name, n);
                    return t
                } finally {
                    n.free()
                }
            }(n.source.files.collect()))))
              , r = e.subpath ?? ""
              , l = a.scripts.get(r);
            return ae.createElement(ae.Fragment, null, ae.createElement(qt.tw, {
                noGame: !0
            }, r.length > 0 ? r : "Disassembly"), ae.createElement(qt.JL, {
                path: `/Editor/Disassemble/${r}`
            }), ae.createElement(Ze, {
                className: "disassembly-screen"
            }, ae.createElement(Pn, {
                disassembly: a,
                selected: r,
                setSelected: function(e) {
                    t.go(`Editor/Disassemble/${e}`)
                }
            }), l && ae.createElement($n, {
                script: l
            })))
        }
        function Tn(e) {
            return ae.createElement(ae.Fragment, null, ae.createElement(qt.tw, {
                noGame: !0
            }, "Help"), ae.createElement(qt.JL, {
                path: "/Editor/Docs"
            }), ae.createElement(re.T3, {
                toolbar: ae.createElement(Ye, null)
            }, ae.createElement("h1", null, "Help"), ae.createElement("p", null, "Easel is a game engine, programming language and deployment platform that lets anyone learn to make mini multiplayer games with ease! It is powerful enough to be interesting, but simple enough be accessible. Enjoy exploring the world of coding through creative exploration and play."), ae.createElement("p", null, "You can learn more about Easel at ", ae.createElement("b", null, ae.createElement("a", {
                href: (0,
                ce.al)(),
                target: "_blank"
            }, "easel.games")), "."), ae.createElement("h2", null, "Community"), ae.createElement("p", null, "Join ", ae.createElement("a", {
                href: "https://discord.gg/EJfzutBSz8",
                target: "_blank"
            }, "our official Easel community on Discord"), ". There you can ask questions and get help, share your creations with the other Easel creators, and provide feedback and suggestions to help improve Easel."), ae.createElement("h2", null, "Useful links"), ae.createElement("ul", null, ae.createElement("li", null, ae.createElement("b", null, ae.createElement("a", {
                href: (0,
                ce.al)("/docs/learn/quickstart"),
                target: "_blank"
            }, "Quickstart")), ": start here if you are completely new to Easel."), ae.createElement("li", null, ae.createElement("b", null, ae.createElement("a", {
                href: (0,
                ce.al)("/docs/learn/key-concepts"),
                target: "_blank"
            }, "Key Concepts")), ": a brief explanation of the most unique features of Easel. This will help Easel make more sense. Particularly useful if you are already familiar with other programming languages."), ae.createElement("li", null, ae.createElement("b", null, ae.createElement("a", {
                href: (0,
                ce.al)("/docs/reference"),
                target: "_blank"
            }, "Easel Reference")), ": the comprehensive list of every function available in Easel."), ae.createElement("li", null, ae.createElement("b", null, ae.createElement("a", {
                href: (0,
                ce.al)("/docs/learn"),
                target: "_blank"
            }, "Learn Easel")), ": learn more about Easel here."), ae.createElement("li", null, ae.createElement("b", null, ae.createElement("a", {
                href: (0,
                ce.al)("/docs/learn/why"),
                target: "_blank"
            }, "Why Easel?")), ": an explanation of what is special about Easel and why someone would choose to use it."))))
        }
        function Dn(e) {
            return ae.createElement("div", {
                className: "vstack stretch"
            }, (t = e.details).isOwner ? ae.createElement("p", null, "You are the ", ae.createElement("b", null, "Owner"), " of the game ", ae.createElement("b", null, t.gameName), ".") : t.isAdmin ? ae.createElement("p", null, "You are an ", ae.createElement("b", null, "Administrator"), " of the game ", ae.createElement("b", null, t.gameName), ".") : t.isEditor ? ae.createElement("p", null, "You are a ", ae.createElement("b", null, "Developer"), " of the game ", ae.createElement("b", null, t.gameName), ".") : t.isModerator ? ae.createElement("p", null, "You are a ", ae.createElement("b", null, "Moderator"), " of the game ", ae.createElement("b", null, t.gameName), ".") : ae.createElement("p", null, "This is the management page for your game ", ae.createElement("b", null, t.gameName), "."), ae.createElement("div", null, ae.createElement("b", null, "Created:"), " ", Rn(e.details.createdTimestamp), ae.createElement("br", null), ae.createElement("b", null, "Last updated:"), " ", Rn(e.details.updatedTimestamp)));
            var t
        }
        function Rn(e) {
            const t = Date.now() - e;
            return `${gt()(t, {
                largest: 1,
                round: !0
            })} ${t > 0 ? " ago" : " from now"}`
        }
        function Un(e) {
            const {gameId: t, ban: n} = e;
            return ae.createElement(re.s_, {
                className: "banned-user-display stretch"
            }, ae.createElement("div", null, ae.createElement(re.rU, {
                path: `/Editor/Games/${t}/Players/${n.userId}`
            }, ae.createElement("b", null, n.username ?? n.playerName ?? n.userId)), " - ", function(e) {
                const t = Date.now() - e;
                return `${gt()(t, {
                    largest: 1,
                    round: !0
                })} ${t > 0 ? " ago" : " from now"}`
            }(n.created)), n.expires && ae.createElement("div", null, "Expires in ", function(e) {
                const t = e - Date.now();
                return gt()(t, {
                    largest: 2,
                    round: !0
                })
            }(n.expires)), n.reason && ae.createElement("div", null, ae.createElement("i", null, n.reason)))
        }
        function zn(e) {
            const {gameId: t} = e
              , [n,a] = (0,
            ae.useState)(null);
            return (0,
            ae.useEffect)((()=>{
                if (n)
                    return;
                let e = !1;
                return async function() {
                    const n = await async function(e) {
                        const t = await fetch(`/api/games/${e}/bans`);
                        if (200 === t.status)
                            return (await t.json()).bans;
                        {
                            const n = `Failed to read game bans (${e}): ${await t.text()}`;
                            throw console.error(n),
                            new Error(n)
                        }
                    }(t);
                    e || a(n)
                }().catch(console.error),
                ()=>{
                    e = !0
                }
            }
            ), [t, n]),
            ae.createElement("div", {
                className: "vstack stretch"
            }, ae.createElement("h3", null, "Banned Players"), n ? n.length > 0 ? n.map((e=>ae.createElement(Un, {
                gameId: t,
                ban: e
            }))) : ae.createElement("div", null, "None") : ae.createElement(re.gb, null, "Loading..."))
        }
        function Mn(e) {
            const {app: t, gameId: n} = e
              , a = e.app.auth.username.get() ?? "raysplaceinspace"
              , r = e.app.auth.userId
              , [l,o] = (0,
            ae.useState)(!1)
              , [i,s] = (0,
            ae.useState)("")
              , [c,u] = (0,
            ae.useState)(null)
              , [m,d] = (0,
            ae.useState)(!1)
              , [f,h] = (0,
            ae.useState)(null);
            return ae.createElement("div", {
                className: "vstack stretch"
            }, ae.createElement("h3", null, "Lookup Player"), ae.createElement("div", null, "To ban a player, or assign them privileged roles, begin by entering their username or user ID below.", " ", ae.createElement(re.zx, {
                link: !0,
                onClick: ()=>o(!l)
            }, "Help me find a player ", ae.createElement("i", {
                className: "fa-solid fa-circle-info"
            })), "."), l && ae.createElement("div", null, "Tips for finding a player:", ae.createElement("ul", null, ae.createElement("li", null, "Direct your player to go to ", ae.createElement(re.rU, {
                path: "Account"
            }, "Manage Account"), " to register a username. Then you can enter their username into this form to manage their access to your game."), ae.createElement("li", null, "Alternatively, whenever you are in a game or replay, press ", ae.createElement("b", null, "Ctrl+Shift+P"), " to open the player list, then click on a player's name to go directly to their management page."))), ae.createElement("form", {
                onSubmit: function(e) {
                    e.preventDefault(),
                    async function() {
                        try {
                            if (!i)
                                return void u("Required");
                            let e = i;
                            if (i.includes("."))
                                try {
                                    Ie.$9.parse(i)
                                } catch (e) {
                                    return void u(`Invalid User ID or Username. User IDs look like this: ${r}`)
                                }
                            else if (d(!0),
                            e = await (0,
                            Ve.Xf)(i),
                            d(!1),
                            !e)
                                return void u(`No user found with the registered username '${i}'`);
                            t.nav.go(`Editor/Games/${n}/Players/${e}`)
                        } catch (e) {
                            console.error(`${e}`),
                            h(`${e}`)
                        }
                    }().catch(console.error)
                },
                className: "vstack stretch"
            }, ae.createElement(re.s_, {
                className: "vstack stretch"
            }, ae.createElement("div", {
                className: "vstack stretch form-field-stack"
            }, ae.createElement("label", {
                htmlFor: "userId"
            }, "Username or User ID"), ae.createElement("input", {
                id: "userId",
                type: "text",
                autoComplete: "off",
                autoCapitalize: "off",
                autoCorrect: "off",
                placeholder: a,
                value: i,
                onChange: e=>s(e.target.value)
            }), c && ae.createElement("div", null, ae.createElement("i", {
                className: "fas fa-triangle-exclamation error-text"
            }), " ", c))), ae.createElement("div", {
                className: "hstack stretch"
            }, ae.createElement(re.zx, {
                className: "working",
                disabled: m,
                tier: "primary",
                raised: !0,
                submit: !0
            }, "Find Player ", ae.createElement("i", {
                className: "fa-solid fa-search"
            }))), f && ae.createElement("div", null, ae.createElement("i", {
                className: "fas fa-triangle-exclamation error-text"
            }), " ", f)))
        }
        function qn(e) {
            const {gameId: t, userId: n, playerName: a} = e
              , [r,l] = (0,
            ae.useState)(!1)
              , [o,i] = (0,
            ae.useState)(null)
              , [s,c] = (0,
            ae.useState)(e.initialReason ?? "")
              , [u,m] = (0,
            ae.useState)(-1);
            return ae.createElement(re.u_, null, ae.createElement(re.s_, {
                className: "vstack stretch opaque"
            }, ae.createElement("form", {
                onSubmit: function(r) {
                    r.preventDefault(),
                    async function() {
                        i(null);
                        try {
                            l(!0);
                            const r = -1 === u ? null : 24 * u * 60;
                            await async function(e, t, n, a, r) {
                                const l = await fetch(`/api/games/${e}/bans/${t}`, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        playerName: n,
                                        reason: r,
                                        minutes: a
                                    })
                                });
                                if (204 !== l.status) {
                                    const n = `Failed to create game ban (${e}, ${t}): ${await l.text()}`;
                                    throw console.error(n),
                                    new Error(n)
                                }
                            }(t, n, a, r, s),
                            l(!1),
                            c(""),
                            e.onClose(!0)
                        } catch (e) {
                            i(`${e}`),
                            l(!1)
                        }
                    }().catch(console.error)
                },
                className: "vstack"
            }, ae.createElement("h3", null, "Ban ", a), ae.createElement("div", null, "Is ", ae.createElement("b", null, a), " causing trouble in your game? Use this form to shadow ban them. A shadow ban means the player can still play your game, but to them it will look like no one else is online. They will be unable to chat or interact with other players. The player will not be notified that they have been banned."), ae.createElement("div", {
                className: "vstack stretch form-field-stack"
            }, ae.createElement("label", {
                htmlFor: "days"
            }, "Ban Duration"), ae.createElement("select", {
                value: u,
                onChange: e=>m(parseInt(e.target.value))
            }, ae.createElement("option", {
                value: -1
            }, "Forever"), ae.createElement("option", {
                value: 365
            }, "1 year"), ae.createElement("option", {
                value: 30
            }, "1 month"), ae.createElement("option", {
                value: 7
            }, "1 week"), ae.createElement("option", {
                value: 1
            }, "1 day"))), ae.createElement("div", {
                className: "vstack stretch form-field-stack"
            }, ae.createElement("label", {
                htmlFor: "reason"
            }, "Reason (optional)"), ae.createElement("input", {
                id: "reason",
                type: "text",
                value: s,
                onChange: e=>c(e.target.value),
                maxLength: 240
            }), ae.createElement("div", null, "Only visible to you and other moderators. Will not be shown to the player.")), ae.createElement("div", {
                className: "hstack stretch"
            }, ae.createElement(re.zx, {
                tier: "primary",
                raised: !0,
                disabled: r,
                submit: !0
            }, "Ban ", ae.createElement("i", {
                className: "fa-solid fa-gavel"
            })), ae.createElement(re.zx, {
                tier: "secondary",
                raised: !0,
                disabled: r,
                onClick: function() {
                    e.onClose(!1)
                }
            }, "Cancel")), o && ae.createElement("div", null, ae.createElement("i", {
                className: "fas fa-triangle-exclamation error-text"
            }), " ", o))))
        }
        const An = "Player";
        function Qn(e) {
            const {gameId: t, userId: n, playerName: a} = e
              , [r,l] = (0,
            ae.useState)(e.initialAccessLevel ?? An)
              , [o,i] = (0,
            ae.useState)(!1)
              , [s,c] = (0,
            ae.useState)(null);
            return ae.createElement(re.u_, null, ae.createElement(re.s_, {
                className: "vstack opaque"
            }, ae.createElement("form", {
                className: "vstack stretch",
                onSubmit: function(a) {
                    a.preventDefault(),
                    async function() {
                        c(null);
                        try {
                            i(!0),
                            await async function(e, t, n) {
                                if (n) {
                                    const a = await fetch(`/api/games/${e}/roles/${t}`, {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            access: n
                                        })
                                    });
                                    if (204 !== a.status) {
                                        const n = `Failed to modify game role (${e}, ${t}): ${await a.text()}`;
                                        throw console.error(n),
                                        new Error(n)
                                    }
                                } else {
                                    const n = await fetch(`/api/games/${e}/roles/${t}`, {
                                        method: "DELETE"
                                    });
                                    if (204 !== n.status) {
                                        const a = `Failed to delete game role (${e}, ${t}): ${await n.text()}`;
                                        throw console.error(a),
                                        new Error(a)
                                    }
                                }
                            }(t, n, r === An ? null : r),
                            i(!1),
                            e.onClose(!0)
                        } catch (e) {
                            c(`${e}`),
                            i(!1)
                        }
                    }().catch(console.error)
                }
            }, ae.createElement("h3", null, "Modify access: ", a), ae.createElement("div", null, "You can use this form to grant special privileges to ", ae.createElement("b", null, a), ", so that they can help you manage your game. You can also use this form to revoke these privileges at any time."), ae.createElement("div", {
                className: "vstack stretch form-field-stack"
            }, ae.createElement("label", {
                htmlFor: "accessLevel"
            }, "Access level"), ae.createElement("select", {
                id: "accessLevel",
                value: r,
                onChange: e=>l(e.target.value)
            }, ae.createElement("option", {
                value: "Administrator"
            }, "Administrator"), ae.createElement("option", {
                value: "Developer"
            }, "Developer"), ae.createElement("option", {
                value: "Moderator"
            }, "Moderator"), ae.createElement("option", {
                value: An
            }, "Player")), "Administrator" === r ? ae.createElement("div", null, ae.createElement("b", null, "Administrator:"), " in addition to all Developer privileges, an Administrator can grant privileged access levels to other players.") : "Developer" === r ? ae.createElement("div", null, ae.createElement("b", null, "Developer:"), " in addition to all Moderator privileges, a Developer can publish new versions of the game and change game settings.") : "Moderator" === r ? ae.createElement("div", null, ae.createElement("b", null, "Moderator:"), " in additional to all Player privileges, a Moderator can ban other players.") : ae.createElement("div", null, ae.createElement("b", null, "Player:"), " no special privileges. This is the default setting for people playing your game.")), ae.createElement("div", {
                className: "hstack stretch"
            }, ae.createElement(re.zx, {
                tier: "primary",
                raised: !0,
                disabled: o,
                submit: !0
            }, "OK"), ae.createElement(re.zx, {
                tier: "secondary",
                raised: !0,
                disabled: o,
                onClick: function() {
                    e.onClose(!1)
                }
            }, "Cancel")), s && ae.createElement("div", null, ae.createElement("i", {
                className: "fas fa-triangle-exclamation error-text"
            }), " ", s))))
        }
        function Ln(e) {
            const {app: t, gameId: n, userId: a} = e
              , [r,l] = (0,
            ae.useState)(null)
              , [o,i] = (0,
            ae.useState)(null)
              , [s,c] = (0,
            ae.useState)(!1)
              , [u,m] = (0,
            ae.useState)(!1)
              , [d,f] = (0,
            ae.useState)(!1);
            (0,
            ae.useEffect)((()=>{
                r || async function() {
                    try {
                        const e = await async function(e, t) {
                            const n = await fetch(`/api/games/${e}/roles/${t}`);
                            if (200 === n.status)
                                return await n.json();
                            {
                                const a = `Failed to fetch game roles (${e}, ${t}): ${await n.text()}`;
                                throw console.error(a),
                                new Error(a)
                            }
                        }(n, a);
                        l(e)
                    } catch (e) {
                        console.error(`${e}`),
                        i(`${e}`)
                    }
                }().catch(console.error)
            }
            ), [n, a, r]);
            const h = ae.createElement(re.rU, {
                path: `Editor/Games/${n}/Players`
            }, ae.createElement("i", {
                className: "fa-solid fa-chevron-left"
            }), " Back to Player List");
            if (o)
                return ae.createElement(ae.Fragment, null, h, ae.createElement("div", {
                    className: "vstack stretch"
                }, ae.createElement("h2", null, "Error: ", a), ae.createElement("p", null, "Error loading data for player: ", o)));
            if (r) {
                function p() {
                    m(!0)
                }
                function g(e) {
                    m(!1),
                    e && l(null)
                }
                function E() {
                    f(!0),
                    async function(e, t) {
                        const n = await fetch(`/api/games/${e}/bans/${t}`, {
                            method: "DELETE"
                        });
                        if (204 !== n.status) {
                            const a = `Failed to delete game ban (${e}, ${t}): ${await n.text()}`;
                            throw console.error(a),
                            new Error(a)
                        }
                    }(n, a).then((()=>{
                        l(null),
                        f(!1)
                    }
                    ))
                }
                function y() {
                    c(!0)
                }
                function w(e) {
                    c(!1),
                    e && l(null)
                }
                return ae.createElement(ae.Fragment, null, h, ae.createElement("div", {
                    className: "vstack stretch"
                }, ae.createElement("h2", null, r.username ?? r.playerName ?? a), !r.isOwner && ae.createElement("div", {
                    className: "hstack"
                }, e.viewerIsAdmin && function(e) {
                    return !!e.access || !!e.username && !e.ban
                }(r) && ae.createElement(re.zx, {
                    tier: "primary",
                    raised: !0,
                    onClick: y
                }, "Modify Access ", ae.createElement("i", {
                    className: "fa-solid fa-key"
                })), !r.access && !r.ban && ae.createElement(re.zx, {
                    className: "working",
                    tier: "primary",
                    raised: !0,
                    disabled: d,
                    onClick: p
                }, "Ban ", ae.createElement("i", {
                    className: "fa-solid fa-gavel"
                }))), r.isOwner ? ae.createElement("div", null, ae.createElement("b", null, Jn(a, r)), " is the ", ae.createElement("b", null, "Owner"), " of this game. This player has full control over the game and all its settings.") : "Administrator" === r.access ? ae.createElement("div", null, ae.createElement("b", null, Jn(a, r)), " has ", ae.createElement("b", null, "Administrator"), " access to this game. This player can publish new versions of the game, edit the game's settings, and grant or revoke access levels to other players.") : "Developer" === r.access ? ae.createElement("div", null, ae.createElement("b", null, Jn(a, r)), " has ", ae.createElement("b", null, "Developer"), " access to this game. This player can publish new versions of the game, edit the game's settings, and ban other players. They cannot change the access levels of other players.") : "Moderator" === r.access ? ae.createElement("div", null, ae.createElement("b", null, Jn(a, r)), " has ", ae.createElement("b", null, "Moderator"), " access to this game. This player can ban other players.") : ae.createElement("div", null, ae.createElement("b", null, Jn(a, r)), " is a ", ae.createElement("b", null, "Player"), " of this game. They have no special privileges to the settings or management of the game."), ae.createElement("div", {
                    className: "text-selectable"
                }, ae.createElement("div", null, ae.createElement("b", null, "User ID:"), " ", ae.createElement("span", null, a)), ae.createElement("div", null, ae.createElement("b", null, "Username:"), " ", r.username ? r.username : ae.createElement("i", null, "(None)")), ae.createElement("div", null, ae.createElement("b", null, "Player name:"), " ", r.playerName ? r.playerName : ae.createElement("i", null, "(None)"))), !r.username && ae.createElement(ae.Fragment, null, ae.createElement("h3", null, "Unregistered"), ae.createElement("div", null, "This player has not registered their username, which means their name is not guaranteed to be unique. If you would like to grant access to privileged roles to this player, they must first register a username. You can direct them to the ", ae.createElement(re.rU, {
                    path: "Account"
                }, "Manage Account"), " page to do so.")), r.ban && ae.createElement(ae.Fragment, null, ae.createElement("h3", null, "Banned"), ae.createElement("div", {
                    className: "hstack"
                }, ae.createElement(re.zx, {
                    className: "working",
                    tier: "primary",
                    raised: !0,
                    disabled: d,
                    onClick: E
                }, "Unban ", ae.createElement("i", {
                    className: "fa-solid fa-gavel"
                }))), ae.createElement("div", null, "This player has been ", ae.createElement("b", null, "Banned"), " from the game. This means they cannot see or interact with other players. They may continue to play the game, but in isolation, as it will appear to them as if no other players are online."), ae.createElement("div", null, ae.createElement("div", null, ae.createElement("b", null, "Banned since:"), " ", Gn(r.ban.created)), r.ban.expires && ae.createElement("div", null, ae.createElement("b", null, "Ban expires:"), " ", Gn(r.ban.expires)), r.ban.reason && ae.createElement("div", null, ae.createElement("b", null, "Reason:"), " ", r.ban.reason)))), u && ae.createElement(qn, {
                    gameId: n,
                    userId: a,
                    playerName: r.username ?? r.playerName ?? a,
                    initialReason: r.ban?.reason,
                    onClose: g
                }), s && ae.createElement(Qn, {
                    gameId: n,
                    userId: a,
                    playerName: r.username ?? r.playerName ?? a,
                    initialAccessLevel: r.access,
                    onClose: w
                }))
            }
            return ae.createElement(ae.Fragment, null, h, ae.createElement("div", {
                className: "vstack stretch"
            }, ae.createElement("h2", null, a), ae.createElement("div", {
                className: "loading"
            }, "Loading...")))
        }
        function Jn(e, t) {
            return t.username ? t.username : t.playerName ? t.playerName : e
        }
        function Gn(e) {
            const t = Date.now() - e;
            return `${gt()(t, {
                largest: 1,
                round: !0
            })} ${t > 0 ? " ago" : " from now"}`
        }
        function jn(e) {
            const {gameId: t} = e
              , [n,a] = (0,
            ae.useState)(null);
            return (0,
            ae.useEffect)((()=>{
                if (n)
                    return;
                let e = !1;
                return async function() {
                    const n = await async function(e) {
                        const t = await fetch(`/api/games/${e}/roles`);
                        if (200 === t.status)
                            return (await t.json()).users;
                        {
                            const n = `Failed to fetch game role list (${e}): ${await t.text()}`;
                            throw console.error(n),
                            new Error(n)
                        }
                    }(t);
                    e || a(n)
                }().catch(console.error),
                ()=>{
                    e = !0
                }
            }
            ), [t, n]),
            ae.createElement("div", {
                className: "vstack stretch"
            }, ae.createElement("h3", null, "Contributors"), n ? n.length > 0 ? n.map((e=>ae.createElement(re.s_, {
                key: e.userId,
                className: "stretch"
            }, ae.createElement(re.rU, {
                path: `Editor/Games/${t}/Players/${e.userId}`
            }, ae.createElement("b", null, e.username ?? e.playerName ?? e.userId)), " - ", function(e) {
                return e.isOwner ? "Owner" : "Administrator" === e.access ? "Administrator" : "Developer" === e.access ? "Developer" : "Moderator" === e.access ? "Moderator" : "Player"
            }(e)))) : ae.createElement("div", null, "None") : ae.createElement("div", null, "Loading..."))
        }
        function Bn(e) {
            const {app: t, gameId: n, modding: a} = e
              , r = !!a
              , l = t.auth.isLoggedIn
              , [o,i] = (0,
            ae.useState)(null)
              , [s,c] = (0,
            ae.useState)(null)
              , [u,m] = (0,
            ae.useState)(!1)
              , [d,f] = (0,
            Q.T)(e.subpath, "/")
              , [h,p] = (0,
            ae.useState)(!1);
            (0,
            ae.useEffect)((()=>{
                t.socket.isDisconnected.get() && p(!0)
            }
            ), [t, d]),
            (0,
            ae.useEffect)((()=>{
                let e = !1;
                if (i(null),
                c(null),
                m(!1),
                l)
                    return async function() {
                        try {
                            const t = await async function(e) {
                                const t = await fetch(`/api/games/${e}/manage`);
                                if (200 === t.status)
                                    return await t.json();
                                if (404 === t.status)
                                    return null;
                                {
                                    const n = `Failed to read game access (${e}): ${await t.text()}`;
                                    throw console.error(n),
                                    new Error(n)
                                }
                            }(n);
                            if (e)
                                return;
                            t ? i(t) : m(!0)
                        } catch (e) {
                            c(`${e}`)
                        }
                    }().catch(console.error),
                    ()=>{
                        e = !0
                    }
            }
            ), [n, l]);
            const g = ae.createElement(re.o8, null, r ? ae.createElement(Ye, null) : ae.createElement(xt, null));
            if (h) {
                function E() {
                    window.location.reload()
                }
                return ae.createElement(re.T3, {
                    toolbar: g
                }, ae.createElement("h1", null, "Update Required"), ae.createElement("p", null, "A new update to Easel is available. You will need to update before you can continue."), ae.createElement("div", null, ae.createElement(re.zx, {
                    tier: "primary",
                    raised: !0,
                    onClick: E
                }, "Update Now")))
            }
            if (s)
                return ae.createElement(re.mf, {
                    error: s,
                    toolbar: g
                }, ae.createElement("h1", null, "Error"), ae.createElement("p", null, "Error retrieving details for game ", ae.createElement("b", null, n), ":"));
            if (u)
                return ae.createElement(re.T3, {
                    toolbar: g
                }, ae.createElement("h1", null, "Game Not Found"), ae.createElement("p", null, "No game exists with the ID ", ae.createElement("b", null, n)));
            if (l) {
                if (o) {
                    const y = o.domain ? `${window.location.protocol}//${o.domain}` : null;
                    return ae.createElement(re.T3, {
                        className: "manage-game-page vstack",
                        toolbar: g
                    }, ae.createElement("div", null, ae.createElement("h1", null, o.gameName), y && ae.createElement("div", {
                        className: "manage-game-heading-url"
                    }, ae.createElement("a", {
                        href: y,
                        target: "_blank"
                    }, y), " ", ae.createElement("i", {
                        className: "fa-solid fa-up-right-from-square"
                    }))), ae.createElement("div", {
                        className: "manage-game-heading-tabs hstack"
                    }, o.isModerator && Wn("", "Overview", n, d), o.isOwner && Wn("Url", "URL", n, d), o.isEditor && Wn("Discoverability", "Discoverability", n, d), o.isModerator && Wn("Players", "Players", n, d), o.isOwner && Wn("Delete", "Deletion", n, d)), function(e, t, n, a, r, l, o) {
                        if ("" === e)
                            return a.isModerator ? ae.createElement(ae.Fragment, null, ae.createElement(qt.JL, {
                                path: `/Editor/Games/${n}`
                            }), ae.createElement(qt.tw, {
                                noGame: !0
                            }, "Manage Game"), ae.createElement(Dn, {
                                gameId: n,
                                details: a
                            })) : null;
                        if ("Url" === e) {
                            if (!a.isOwner)
                                return null;
                            function i(e) {
                                r({
                                    ...a,
                                    domain: e
                                })
                            }
                            return ae.createElement(ae.Fragment, null, ae.createElement(qt.JL, {
                                path: `/Editor/Games/${n}/Url`
                            }), ae.createElement(qt.tw, {
                                noGame: !0
                            }, "Edit URL"), o ? ae.createElement(ae.Fragment, null, ae.createElement("div", null, "You cannot edit the URL while you are editing the project."), ae.createElement("div", null, ae.createElement(ca, {
                                app: l,
                                modding: o,
                                raised: !0,
                                tier: "primary"
                            }, "Close Project"))) : ae.createElement(Se, {
                                gameId: n,
                                domain: a.domain,
                                onDomainChange: i
                            }))
                        }
                        if ("Discoverability" === e)
                            return a.isEditor ? ae.createElement(ae.Fragment, null, ae.createElement(qt.JL, {
                                path: `/Editor/Games/${n}/Discoverability`
                            }), ae.createElement(qt.tw, {
                                noGame: !0
                            }, "Discoverability"), ae.createElement(_t, {
                                gameId: n,
                                gameName: a.gameName
                            })) : null;
                        if ("Players" === e) {
                            if (!a.isModerator)
                                return null;
                            const [s,c] = (0,
                            Q.T)(t, "/");
                            return 0 === s.length ? ae.createElement(ae.Fragment, null, ae.createElement(qt.JL, {
                                path: `/Editor/Games/${n}/Players`
                            }), ae.createElement(qt.tw, {
                                noGame: !0
                            }, "Manage Players"), ae.createElement(Mn, {
                                app: l,
                                gameId: n
                            }), a.isAdmin && ae.createElement(jn, {
                                gameId: n
                            }), ae.createElement(zn, {
                                key: n,
                                gameId: n
                            })) : 0 === c.length ? ae.createElement(ae.Fragment, null, ae.createElement(qt.JL, {
                                path: `/Editor/Games/${n}/Players/${s}`
                            }), ae.createElement(qt.tw, {
                                noGame: !0
                            }, "Manage Player"), ae.createElement(Ln, {
                                key: `${n}/${s}`,
                                app: l,
                                gameId: n,
                                userId: s,
                                viewerIsAdmin: a.isAdmin
                            })) : null
                        }
                        if ("Delete" === e) {
                            if (!a.isOwner)
                                return null;
                            function u() {
                                l.nav.go("Editor")
                            }
                            return ae.createElement(ae.Fragment, null, ae.createElement(qt.JL, {
                                path: `/Editor/Games/${n}/Delete`
                            }), ae.createElement(qt.tw, {
                                noGame: !0
                            }, "Delete Game"), o ? ae.createElement(ae.Fragment, null, ae.createElement("div", null, "You cannot delete the game while editing the project."), ae.createElement("div", null, ae.createElement(ca, {
                                app: l,
                                modding: o,
                                raised: !0,
                                tier: "primary"
                            }, "Close Project"))) : ae.createElement(se, {
                                gameId: n,
                                gameName: a.gameName,
                                onDelete: u
                            }))
                        }
                        return null
                    }(d, f, n, o, i, t, a))
                }
                return ae.createElement(re.a_, {
                    toolbar: g
                }, "Loading game details...")
            }
            return ae.createElement(re.T3, {
                toolbar: g
            }, ae.createElement("h1", null, "Game Management"), ae.createElement("p", null, "You must log in to access this page."), ae.createElement(re.Ug, null, ae.createElement(Ve.Th, {
                className: "raised",
                app: t
            })))
        }
        function Wn(e, t, n, a) {
            return ae.createElement(re.rU, {
                path: `Editor/Games/${n}/${e}`,
                btn: !0,
                className: De()("pill", {
                    selected: e === a
                })
            }, t)
        }
        function Xn(e) {
            const {app: t, modding: n} = e;
            (0,
            ae.useEffect)((()=>{
                function e() {
                    n.source.reloadFromDisk().catch(console.error)
                }
                function t() {
                    n.source.autosaveNowIfNecessary()
                }
                function a(e) {
                    const t = n.source.saver.get();
                    t instanceof L && t.saveLoop.hasPendingChanges.get() && e.preventDefault()
                }
                return window.addEventListener("focus", e),
                window.addEventListener("blur", t),
                window.addEventListener("beforeunload", a),
                ()=>{
                    window.removeEventListener("beforeunload", a),
                    window.removeEventListener("blur", t),
                    window.removeEventListener("focus", e)
                }
            }
            ), []);
            const [a,r] = (0,
            Q.T)(e.subpath, "/");
            switch (a) {
            case "Disassemble":
                return ae.createElement(Fn, {
                    modding: n,
                    subpath: r
                });
            case "Publish":
                return ae.createElement(ae.Fragment, null, ae.createElement(qt.JL, {
                    path: "/Editor/Publish"
                }), ae.createElement(ht, {
                    app: t,
                    modding: n
                }));
            case "Docs":
                return ae.createElement(Tn, {
                    modding: n,
                    subpath: r
                });
            case "Code":
            default:
                return ae.createElement(In, {
                    modding: n
                });
            case "Games":
                return ae.createElement(Yn, {
                    app: t,
                    subpath: r,
                    modding: n
                })
            }
        }
        function Yn(e) {
            const [t,n] = (0,
            Q.T)(e.subpath, "/");
            return ae.createElement(Bn, {
                app: e.app,
                gameId: t,
                subpath: n,
                modding: e.modding
            })
        }
        function Kn(e) {
            const {app: t, wantsToRemix: n} = e
              , [a,r] = (0,
            ae.useState)(!1)
              , [l,o] = (0,
            ae.useState)(null);
            return (0,
            ae.useEffect)((()=>{
                let e = !1;
                return async function() {
                    try {
                        const a = function() {
                            let e = V.readCurrentSlot();
                            return Promise.resolve().then((async()=>{
                                await V.touch(e);
                                const t = await V.readExpired();
                                for (const n of t)
                                    n !== e && await A(n)
                            }
                            )).catch(console.error),
                            e ? new ee(e) : ee.legacy()
                        }();
                        console.log("Checking autosave slot", a.id);
                        const r = await a.loadModifiedFlag();
                        if (e)
                            return;
                        if (!r && n)
                            return void console.log("Autosave ignored because it was unchanged and the user wants to remix the game.");
                        const l = await a.loadAll();
                        if (e)
                            return;
                        if (l.size > 0) {
                            console.log("Entering autosave..."),
                            o("Entering autosave...");
                            const e = new Nt(l,new q(l,r));
                            t.enterEditor(e)
                        } else
                            console.log("No autosave found.")
                    } catch (e) {
                        console.error("Error loading autosave", e)
                    } finally {
                        t.modAutoSaveChecked.set(!0)
                    }
                }().catch(console.error),
                setTimeout((()=>{
                    e || r(!0)
                }
                ), 500),
                ()=>{
                    e = !0
                }
            }
            ), [n]),
            ae.createElement(ae.Fragment, null, ae.createElement(qt.tw, {
                noGame: !0
            }, "Editor"), ae.createElement(re.a_, null, ae.createElement("div", null, l ?? "Checking for autosave...", " ", a && ae.createElement(re.zx, {
                link: !0,
                onClick: function() {
                    t.modAutoSaveChecked.set(!0)
                }
            }, "(skip)"))))
        }
        var Zn = n(8573);
        function Hn(e) {
            const {app: t, baseGame: n} = e
              , [r,o] = (0,
            ae.useState)(!1)
              , c = (0,
            ae.useRef)(!1);
            return (0,
            ae.useEffect)((()=>()=>{
                c.current = !0
            }
            ), []),
            ae.createElement(ae.Fragment, null, ae.createElement(re.zx, {
                tier: e.tier ?? "primary",
                raised: !0,
                className: "working",
                onClick: async function() {
                    o(!0);
                    try {
                        const r = await async function(e, t, n) {
                            const r = e.blueprintId
                              , o = await async function(e) {
                                const t = await fetch(`/api/sources/${encodeURIComponent(Ie.c1.stringify(e))}.gz`)
                                  , n = await t.blob()
                                  , a = await n.arrayBuffer();
                                return new Uint8Array(a)
                            }(r);
                            if (n?.())
                                return;
                            const c = (0,
                            Zn.generateSlug)(3, {
                                format: "title"
                            })
                              , u = _(o)
                              , m = e.blueprint.isTemplate()
                              , d = m ? null : e.gameId
                              , f = m ? null : e.blueprint.name;
                            return function(e, t, n, r, o, c) {
                                const u = e.get(s)
                                  , m = u instanceof l ? "" : a(u)
                                  , d = i.pG.derive_toml(m, t, r, n, o, c);
                                e.set(s, d)
                            }(u, c, t.userId, t.username.get() ?? t.playerName.get(), d, f),
                            u
                        }(n, t.auth, (()=>c.current));
                        e.onMod(r)
                    } finally {
                        o(!1)
                    }
                },
                disabled: r
            }, e.children), r && ae.createElement(re.h_, null, ae.createElement(re.a_, {
                className: "loading-screen-opaque"
            }, "Creating new project...")))
        }
        function Vn(e) {
            return window.showDirectoryPicker ? ae.createElement(re.zx, {
                tier: e.tier,
                raised: e.raised,
                onClick: function() {
                    (async function() {
                        try {
                            const t = window
                              , n = await t.showDirectoryPicker({
                                id: z,
                                mode: "readwrite",
                                startIn: "documents"
                            });
                            if (!n)
                                return;
                            const [a,r] = await async function(e) {
                                const t = new Map
                                  , n = new Map
                                  , a = [{
                                    path: "",
                                    folder: e
                                }];
                                for (; a.length > 0; ) {
                                    const {path: e, folder: r} = a.pop();
                                    for await(const [l,o] of r.entries()) {
                                        const r = p(e, l);
                                        if (B(l))
                                            ;
                                        else if (o instanceof FileSystemDirectoryHandle)
                                            a.push({
                                                path: r,
                                                folder: o
                                            }),
                                            n.set(r, null);
                                        else if (o instanceof FileSystemFileHandle) {
                                            const e = await o.getFile()
                                              , a = await e.arrayBuffer();
                                            t.set(r, new Uint8Array(a)),
                                            n.set(r, e.lastModified)
                                        }
                                    }
                                }
                                return [t, new L(e,n)]
                            }(n);
                            e.onMod(a, r)
                        } catch (e) {
                            e instanceof DOMException && "AbortError" === e.name || console.error("Error opening file system folder", e)
                        }
                    }
                    )().catch(console.error)
                }
            }, e.children) : null
        }
        function ea(e) {
            const {app: t} = e
              , n = (0,
            $.KO)(t.play.baseGameStore)
              , a = n.blueprint.isTemplate();
            function r(e, n, a) {
                t.enterEditor(new Nt(e,n,a)),
                t.nav.go("Editor/Code")
            }
            return ae.createElement(ae.Fragment, null, ae.createElement(qt.tw, {
                noGame: !0
            }, "Editor"), ae.createElement(re.T3, {
                toolbar: ae.createElement(re.o8, null, ae.createElement(re.Ff, null), ae.createElement("div", {
                    className: "spacer"
                }), (0,
                ce.bz)() && ae.createElement(re.rU, {
                    btn: !0,
                    className: "flat",
                    path: "Editor/Account/Premium"
                }, "Easel+"), ae.createElement(et, {
                    app: t
                }))
            }, ae.createElement("h1", null, "Game Editor"), !a && ae.createElement("p", null, ae.createElement("b", null, n.blueprint.name), " was made with ", ae.createElement("b", null, ae.createElement("a", {
                href: (0,
                ce.al)()
            }, "Easel")), ". Click the ", ae.createElement("b", null, "Remix"), " button below to make your own version!"), ae.createElement("p", null, ae.createElement("b", null, ae.createElement("a", {
                href: (0,
                ce.al)()
            }, "Easel")), " is a 2D game programming language that lets you code ", ae.createElement("b", null, "multiplayer"), " like singleplayer. Whether you are a first-time coder or an experienced developer, you can make games with ", ae.createElement("b", null, ae.createElement("a", {
                href: (0,
                ce.al)()
            }, "Easel")), "!"), ae.createElement(re.Ug, null, ae.createElement(Hn, {
                app: t,
                baseGame: n,
                onMod: r
            }, n.blueprint.isTemplate() ? ae.createElement(ae.Fragment, null, "New Project ", ae.createElement("i", {
                className: "fa-solid fa-plus"
            })) : ae.createElement(ae.Fragment, null, "Remix '", n.blueprint.name, "' ", ae.createElement("i", {
                className: "fa-solid fa-sparkles"
            }))), ae.createElement(Vn, {
                tier: "secondary",
                raised: !0,
                onMod: r
            }, "Open Project Folder ", ae.createElement("i", {
                className: "fa-solid fa-folder-open"
            })), ae.createElement(Me, {
                tier: "secondary",
                raised: !0,
                onMod: r
            }, "Load Project From File ", ae.createElement("i", {
                className: "fa-solid fa-up-from-line"
            }))), ae.createElement(re.zP, null), ae.createElement(yt, {
                onMod: (e,t)=>r(e, null, t)
            })))
        }
        function ta(e) {
            const {app: t} = e
              , n = (0,
            $.KO)(t.play.baseGameStore)
              , a = (0,
            $.KO)(t.play.gameStore).blueprintId !== n.blueprintId;
            return ae.createElement(re.T3, null, ae.createElement("h1", null, "Game Editor"), ae.createElement("p", null, ae.createElement("b", null, ae.createElement("a", {
                href: (0,
                ce.al)()
            }, "Easel")), " is a 2D game programming language that lets you code ", ae.createElement("b", null, "multiplayer"), " like singleplayer. Whether you are a first-time coder or an experienced developer, you can make games with ", ae.createElement("b", null, ae.createElement("a", {
                href: (0,
                ce.al)()
            }, "Easel")), "!"), ae.createElement("p", null, a ? ae.createElement("span", null, "You are currently in a ", ae.createElement("b", null, "modded"), " party. ") : ae.createElement("span", null, "You are currently in an ", ae.createElement("b", null, "unmodded"), " party. "), ae.createElement("span", null, "Remixing is unavailable for parties, and so modding is unavailable to you at this time. Once your party is over, come back here to make your own game!")))
        }
        function na(e) {
            const {app: t, wantsToRemix: n, modding: a} = e;
            return n ? ae.createElement(ae.Fragment, null, e.children, ae.createElement(aa, {
                app: t,
                modding: a
            })) : ae.createElement(ae.Fragment, null, e.children)
        }
        function aa(e) {
            const {app: t, modding: n} = e
              , a = (0,
            $.KO)(t.play.baseGameStore)
              , r = (0,
            ae.useMemo)((()=>c(n.source.files.collect())), [n]);
            return ae.createElement(re.u_, null, ae.createElement(re.s_, {
                className: "opaque"
            }, ae.createElement("h3", null, "Unsaved Changes"), ae.createElement("p", null, "Looks like you were previously editing a project called ", ae.createElement("b", null, "'", r.name, "'"), " and you had some unsaved changes."), ae.createElement("p", null, "Would you like to discard this project and remix ", ae.createElement("b", null, "'", a.blueprint.name, "'"), " instead?"), ae.createElement("div", {
                className: "hstack"
            }, ae.createElement(re.zx, {
                tier: "primary",
                raised: !0,
                onClick: function() {
                    t.nav.go("Editor/Code")
                }
            }, "Keep Editing '", r.name, "' ", ae.createElement("i", {
                className: "fa-solid fa-edit"
            })), ae.createElement(Hn, {
                tier: "secondary",
                app: t,
                baseGame: a,
                onMod: function(e) {
                    t.enterEditor(new Nt(e)),
                    t.nav.go("Editor/Code")
                }
            }, "Remix '", a.blueprint.name, "' ", ae.createElement("i", {
                className: "fa-solid fa-sparkles"
            })))))
        }
        var ra = n(7866);
        function la(e) {
            const {app: t, modding: n} = e
              , [a,r] = (0,
            ae.useState)(null)
              , [l,o] = (0,
            ae.useState)(null)
              , [i,s] = (0,
            ae.useState)(!1)
              , c = (0,
            $.KO)(n.previewing)
              , u = (0,
            $.KO)(t.play.previewGameStore);
            function m() {
                r(null),
                o(null),
                s(!1),
                n.previewing.set(!1)
            }
            if ((0,
            ra.o)(u?.gameId, !1, t.presence),
            (0,
            ae.useEffect)((()=>{
                if (!c)
                    return;
                let e = !1;
                return async function() {
                    console.log("Entering mod preview...");
                    const a = performance.now();
                    try {
                        if (t.socket.isDisconnected.get())
                            return void s(!0);
                        if (n.source.autosaveNowIfNecessary(),
                        await n.source.waitForInProgressReloadingFromDisk(),
                        e)
                            return;
                        const r = n.source.files.collect();
                        {
                            const [e,t] = O(r);
                            x(e);
                            const n = performance.now() - a;
                            console.log(`Mod compiled in ${Math.round(n)} ms`)
                        }
                        const l = await pe(r, o, n.uploadedArtifactsCache)
                          , i = await ge(l, o, null, n.previousPreview);
                        if (e)
                            return;
                        let c = function(e, t, n, a) {
                            const r = Ie.cG.parse(e.gameId)
                              , l = Ie.c1.parse(e.blueprintId);
                            return t && t.gameId === r ? {
                                ...t,
                                blueprintId: l,
                                blueprint: e.blueprint
                            } : {
                                admin: !0,
                                gameId: r,
                                blueprintId: l,
                                blueprint: e.blueprint,
                                accumulators: new Ce.i2([]),
                                preferences: a.createTemporary(e.gameId).copyFrom(n.preferences)
                            }
                        }(i, t.play.previewGameStore.get(), t.play.baseGameStore.get(), t.play.temporaryPreferences);
                        if (e)
                            return;
                        n.previousPreview = i;
                        const u = t.play.enterPreview(c, t.nav.page.get());
                        let d = null;
                        if (u) {
                            let n;
                            if (o("Entering game..."),
                            n = Number.isInteger(u.maxHumanPlayers) ? await t.play.requestMultiplayer(u) : t.play.requestSingleplayer(u),
                            e)
                                return void await t.play.leaveEpisode(n);
                            n && (d = `Episodes/${Ie.yA.stringify(n)}`)
                        }
                        t.nav.go(d ?? ""),
                        m()
                    } catch (e) {
                        console.log("Error compiling mod: ", e),
                        r(`${e}`)
                    }
                }().catch(console.error),
                ()=>{
                    e = !0
                }
            }
            ), [t, n, c]),
            c) {
                if (a)
                    return ae.createElement(ae.Fragment, null, e.children, ae.createElement(re.Cv, {
                        onCancel: m,
                        error: a
                    }, ae.createElement("h1", null, "Compilation error"), ae.createElement("p", null, "There is an error in your code, please fix it and try again:")));
                if (i) {
                    function d(e) {
                        console.log("PreviewingOverlay: Restarting..."),
                        window.location.reload(),
                        e.stopPropagation()
                    }
                    return ae.createElement(ae.Fragment, null, e.children, ae.createElement(re.u_, {
                        onCancel: m
                    }, ae.createElement(re.s_, {
                        className: "opaque preview-restart-panel"
                    }, ae.createElement("h1", null, "Update Required"), ae.createElement("p", null, ae.createElement("b", null, "Good news!"), " An update to Easel is available."), ae.createElement("p", null, "Please update so you can continue previewing your game."), ae.createElement("div", null, ae.createElement(re.zx, {
                        tier: "primary",
                        raised: !0,
                        onClick: d
                    }, "Update Now")))))
                }
                return ae.createElement(ae.Fragment, null, e.children, ae.createElement(re.a_, {
                    className: "loading-screen-black",
                    toolbar: ae.createElement(re.o8, null, ae.createElement(re.zx, {
                        flat: !0,
                        onClick: m
                    }, ae.createElement("i", {
                        className: "fa-solid fa-chevron-left"
                    }), " Cancel"))
                }, l ?? "Compiling..."))
            }
            return ae.createElement(ae.Fragment, null, e.children)
        }
        var oa = n(3547);
        function ia(e) {
            const {app: t} = e;
            return ae.createElement(Ve.o9, {
                app: t,
                toolbar: ae.createElement(re.o8, null, ae.createElement(xt, null))
            })
        }
        function sa(e) {
            const {app: t} = e
              , n = t.auth.userId
              , [a,r] = (0,
            ae.useState)(null)
              , [l,o] = (0,
            ae.useState)(void 0);
            return (0,
            ae.useEffect)((()=>{
                let e = !1;
                return async function() {
                    if (!n)
                        return;
                    const t = (0,
                    Ne.Eg)(n)
                      , a = (0,
                    Ne.AS)()
                      , l = await t;
                    if (e)
                        return;
                    r(l);
                    const i = await a;
                    e || o(i)
                }().catch(console.error),
                ()=>{
                    e = !0
                }
            }
            ), [n]),
            a && l ? ae.createElement(re.T3, {
                toolbar: ae.createElement(re.o8, null, ae.createElement(xt, null)),
                className: "vstack"
            }, ae.createElement(qt.tw, null, "Easel+"), ae.createElement("h1", null, "Make Games with Easel"), a.length > 0 && ae.createElement(ae.Fragment, null, ae.createElement(re.s_, {
                className: "stretch vstack"
            }, ae.createElement("label", null, "Your Subscription"), ae.createElement(Ne.gr, {
                subscriptions: a
            }), ae.createElement("div", {
                className: "hstack"
            }, a?.length > 0 && ae.createElement(Ne.IZ, {
                app: t
            }, ae.createElement(re.zx, {
                tier: "primary",
                raised: !0,
                submit: !0
            }, "Update Payment Method ", ae.createElement("i", {
                className: "fa-solid fa-credit-card"
            }))))), ae.createElement("h2", null, "Change Subscription")), ae.createElement(Ne.r4, {
                app: e.app,
                existingSubscriptions: a,
                price: l
            })) : ae.createElement(re.T3, {
                toolbar: ae.createElement(re.o8, null, ae.createElement(xt, null)),
                className: "vstack"
            }, ae.createElement("h1", null, "Make Games with Easel"), ae.createElement("div", {
                className: "loading"
            }, "Loading..."))
        }
        function ca(e) {
            const {app: t, modding: n} = e
              , [a,r] = (0,
            ae.useState)(!1)
              , [l,o] = (0,
            ae.useState)(!1);
            function i() {
                t.play.exitAndDiscardPreview(),
                t.exitEditor(),
                e.path && t.nav.go(e.path)
            }
            return ae.createElement(ae.Fragment, null, ae.createElement(re.zx, {
                tier: e.tier,
                raised: e.raised,
                flat: e.flat,
                className: e.className,
                title: e.title,
                onClick: function() {
                    n.source.hasUncommittedChanges() ? o(!0) : i()
                },
                onPointerEnter: ()=>r(!0),
                onPointerLeave: ()=>r(!1)
            }, e.children), a && e.title && ae.createElement(re.xW, null, e.title), l && ae.createElement(re.u_, null, ae.createElement(re.s_, {
                className: "opaque"
            }, ae.createElement("h3", null, "Unsaved changes"), ae.createElement("p", null, "You have unsaved changes, are you sure you want to discard your project?"), ae.createElement(re.Ug, null, ae.createElement(re.LZ, null), ae.createElement(re.zx, {
                tier: "secondary",
                raised: !0,
                onClick: function() {
                    o(!1)
                }
            }, "Cancel"), ae.createElement(re.zx, {
                tier: "primary",
                raised: !0,
                onClick: function() {
                    i(),
                    o(!1)
                }
            }, "Discard without saving")))))
        }
        const ua = function(e) {
            const t = (0,
            ae.useContext)(Oe.Il)
              , n = (0,
            $.KO)(t.modAutoSaveChecked)
              , a = (0,
            $.KO)(t.play.gameStore)
              , r = e.mod
              , l = "Remix" === e.subpath;
            if ("Account" === e.subpath)
                return ae.createElement(oa.YE, {
                    socket: t.socket
                }, ae.createElement(qt.JL, {
                    path: "/Editor/Account"
                }), ae.createElement(ia, {
                    app: t
                }));
            if ("Account/Premium" === e.subpath)
                return ae.createElement(oa.YE, {
                    socket: t.socket
                }, ae.createElement(qt.JL, {
                    path: "/Editor/Account/Premium"
                }), ae.createElement(sa, {
                    app: t
                }));
            if ((0,
            Pe.zf)(a))
                return ae.createElement(ta, {
                    app: t
                });
            if (r)
                return ae.createElement(kt.Provider, {
                    value: r
                }, ae.createElement($e, {
                    app: t,
                    modding: r
                }, ae.createElement(la, {
                    app: t,
                    modding: r
                }, ae.createElement(na, {
                    app: t,
                    modding: r,
                    wantsToRemix: l
                }, ae.createElement(Xn, {
                    app: t,
                    modding: r,
                    subpath: e.subpath
                })))));
            if (n) {
                if (e.subpath.startsWith("Games/")) {
                    const [n,a] = (0,
                    Q.T)(e.subpath.slice(6), "/");
                    return ae.createElement(Bn, {
                        key: n,
                        app: t,
                        gameId: n,
                        subpath: a,
                        modding: r
                    })
                }
                return ae.createElement(oa.YE, {
                    socket: t.socket
                }, ae.createElement(qt.JL, {
                    path: "/Editor"
                }), ae.createElement(ea, {
                    app: t
                }))
            }
            return ae.createElement(Kn, {
                app: t,
                wantsToRemix: l
            })
        }
    }
    ,
    2024: (e,t,n)=>{
        let compiler;
        function r(e) {
            compiler = e
        }
        n.d(t, {
            $K: ()=>M,
            BJ: ()=>A,
            Eo: ()=>se,
            F: ()=>Z,
            HT: ()=>be,
            K_: ()=>R,
            L: ()=>L,
            LE: ()=>ne,
            LF: ()=>x,
            M1: ()=>$e,
            MX: ()=>Ee,
            Nm: ()=>pe,
            Oj: ()=>we,
            Or: ()=>Ue,
            PQ: ()=>ee,
            QP: ()=>X,
            Qr: ()=>le,
            Qs: ()=>Y,
            S5: ()=>fe,
            SF: ()=>CompilerWASM,
            Sv: ()=>q,
            TZ: ()=>de,
            Tg: ()=>oe,
            Tv: ()=>ae,
            UM: ()=>z,
            Us: ()=>G,
            Uu: ()=>ue,
            Wl: ()=>xe,
            XP: ()=>Ie,
            YZ: ()=>ge,
            Zj: ()=>Ce,
            aZ: ()=>F,
            cA: ()=>U,
            d: ()=>ve,
            dU: ()=>ye,
            dt: ()=>P,
            eY: ()=>Se,
            fU: ()=>ie,
            fY: ()=>_e,
            h2: ()=>te,
            h4: ()=>Re,
            hd: ()=>Oe,
            k: ()=>W,
            m_: ()=>Fe,
            mr: ()=>H,
            n_: ()=>Q,
            o$: ()=>Ne,
            o1: ()=>J,
            oH: ()=>Pe,
            oT: ()=>r,
            pG: ()=>I,
            qt: ()=>De,
            qy: ()=>K,
            sB: ()=>B,
            tq: ()=>me,
            ud: ()=>j,
            ug: ()=>Te,
            wZ: ()=>V,
            wg: ()=>re,
            wn: ()=>ce,
            yb: ()=>ke,
            zJ: ()=>he
        }),
        e = n.hmd(e);
        const l = new Array(128).fill(void 0);
        function o(e) {
            return l[e]
        }
        l.push(void 0, null, !0, !1);
        let i = 0
          , s = null;
        function c() {
            return null !== s && 0 !== s.byteLength || (s = new Uint8Array(compiler.memory.buffer)),
            s
        }
        let u = new ("undefined" == typeof TextEncoder ? (0,
        e.require)("util").TextEncoder : TextEncoder)("utf-8");
        const m = "function" == typeof u.encodeInto ? function(e, t) {
            return u.encodeInto(e, t)
        }
        : function(e, t) {
            const n = u.encode(e);
            return t.set(n),
            {
                read: e.length,
                written: n.length
            }
        }
        ;
        function d(e, t, n) {
            if (void 0 === n) {
                const n = u.encode(e)
                  , a = t(n.length, 1) >>> 0;
                return c().subarray(a, a + n.length).set(n),
                i = n.length,
                a
            }
            let a = e.length
              , r = t(a, 1) >>> 0;
            const l = c();
            let o = 0;
            for (; o < a; o++) {
                const t = e.charCodeAt(o);
                if (t > 127)
                    break;
                l[r + o] = t
            }
            if (o !== a) {
                0 !== o && (e = e.slice(o)),
                r = n(r, a, a = o + 3 * e.length, 1) >>> 0;
                const t = c().subarray(r + o, r + a);
                o += m(e, t).written,
                r = n(r, a, o, 1) >>> 0
            }
            return i = o,
            r
        }
        let f = null;
        function mem() {
            return (null === f || !0 === f.buffer.detached || void 0 === f.buffer.detached && f.buffer !== compiler.memory.buffer) && (f = new DataView(compiler.memory.buffer)),
            f
        }
        let p = l.length;
        function g(e) {
            p === l.length && l.push(l.length + 1);
            const t = p;
            return p = l[t],
            l[t] = e,
            t
        }
        function E(e, t) {
            try {
                return e.apply(this, t)
            } catch (e) {
                compiler.__wbindgen_exn_store(g(e))
            }
        }
        let y = new ("undefined" == typeof TextDecoder ? (0,
        e.require)("util").TextDecoder : TextDecoder)("utf-8",{
            ignoreBOM: !0,
            fatal: !0
        });
        function w(e, t) {
            return e >>>= 0,
            y.decode(c().subarray(e, e + t))
        }
        function v(e) {
            const t = o(e);
            return function(e) {
                e < 132 || (l[e] = p,
                p = e)
            }(e),
            t
        }
        function b(e) {
            const t = typeof e;
            if ("number" == t || "boolean" == t || null == e)
                return `${e}`;
            if ("string" == t)
                return `"${e}"`;
            if ("symbol" == t) {
                const t = e.description;
                return null == t ? "Symbol" : `Symbol(${t})`
            }
            if ("function" == t) {
                const t = e.name;
                return "string" == typeof t && t.length > 0 ? `Function(${t})` : "Function"
            }
            if (Array.isArray(e)) {
                const t = e.length;
                let n = "[";
                t > 0 && (n += b(e[0]));
                for (let a = 1; a < t; a++)
                    n += ", " + b(e[a]);
                return n += "]",
                n
            }
            const n = /\[object ([^\]]+)\]/.exec(toString.call(e));
            let a;
            if (!(n && n.length > 1))
                return toString.call(e);
            if (a = n[1],
            "Object" == a)
                try {
                    return "Object(" + JSON.stringify(e) + ")"
                } catch (e) {
                    return "Object"
                }
            return e instanceof Error ? `${e.name}: ${e.message}\n${e.stack}` : a
        }
        function _(e) {
            return null == e
        }
        function O(e, t) {
            const n = t(1 * e.length, 1) >>> 0;
            return c().set(e, n / 1),
            i = e.length,
            n
        }
        function k(e, t) {
            return e >>>= 0,
            c().subarray(e / 1, e / 1 + t)
        }
        y.decode();
        const N = "undefined" == typeof FinalizationRegistry ? {
            register: ()=>{}
            ,
            unregister: ()=>{}
        } : new FinalizationRegistry((e=>compiler.__wbg_artifactlinkshandle_free(e >>> 0, 1)));
        class x {
            __destroy_into_raw() {
                const e = this.__wbg_ptr;
                return this.__wbg_ptr = 0,
                N.unregister(this),
                e
            }
            free() {
                const e = this.__destroy_into_raw();
                compiler.__wbg_artifactlinkshandle_free(e, 0)
            }
            static deserialize(e) {
                try {
                    const r = compiler.__wbindgen_add_to_stack_pointer(-16)
                      , l = d(e, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc)
                      , o = i;
                    compiler.artifactlinkshandle_deserialize(r, l, o);
                    var t = mem().getInt32(r + 0, !0)
                      , n = mem().getInt32(r + 4, !0);
                    if (mem().getInt32(r + 8, !0))
                        throw v(n);
                    return v(t)
                } finally {
                    compiler.__wbindgen_add_to_stack_pointer(16)
                }
            }
            static serialize(e) {
                let t, n;
                try {
                    const u = compiler.__wbindgen_add_to_stack_pointer(-16);
                    compiler.artifactlinkshandle_serialize(u, g(e));
                    var r = mem().getInt32(u + 0, !0)
                      , l = mem().getInt32(u + 4, !0)
                      , o = mem().getInt32(u + 8, !0)
                      , i = mem().getInt32(u + 12, !0)
                      , s = r
                      , c = l;
                    if (i)
                        throw s = 0,
                        c = 0,
                        v(o);
                    return t = s,
                    n = c,
                    w(s, c)
                } finally {
                    compiler.__wbindgen_add_to_stack_pointer(16),
                    compiler.__wbindgen_free(t, n, 1)
                }
            }
            static base64_hash_artifact(e) {
                let t, n;
                try {
                    const m = compiler.__wbindgen_add_to_stack_pointer(-16)
                      , d = O(e, compiler.__wbindgen_malloc)
                      , f = i;
                    compiler.artifactlinkshandle_base64_hash_artifact(m, d, f);
                    var r = mem().getInt32(m + 0, !0)
                      , l = mem().getInt32(m + 4, !0)
                      , o = mem().getInt32(m + 8, !0)
                      , s = mem().getInt32(m + 12, !0)
                      , c = r
                      , u = l;
                    if (s)
                        throw c = 0,
                        u = 0,
                        v(o);
                    return t = c,
                    n = u,
                    w(c, u)
                } finally {
                    compiler.__wbindgen_add_to_stack_pointer(16),
                    compiler.__wbindgen_free(t, n, 1)
                }
            }
            static max_inline_bytes() {
                return compiler.artifactlinkshandle_max_inline_bytes() >>> 0
            }
            static must_compile_file_extensions() {
                try {
                    const n = compiler.__wbindgen_add_to_stack_pointer(-16);
                    compiler.artifactlinkshandle_must_compile_file_extensions(n);
                    var e = mem().getInt32(n + 0, !0)
                      , t = mem().getInt32(n + 4, !0);
                    if (mem().getInt32(n + 8, !0))
                        throw v(t);
                    return v(e)
                } finally {
                    compiler.__wbindgen_add_to_stack_pointer(16)
                }
            }
        }
        const S = "undefined" == typeof FinalizationRegistry ? {
            register: ()=>{}
            ,
            unregister: ()=>{}
        } : new FinalizationRegistry((e=>compiler.__wbg_blueprintmetahandle_free(e >>> 0, 1)));
        class I {
            __destroy_into_raw() {
                const e = this.__wbg_ptr;
                return this.__wbg_ptr = 0,
                S.unregister(this),
                e
            }
            free() {
                const e = this.__destroy_into_raw();
                compiler.__wbg_blueprintmetahandle_free(e, 0)
            }
            static derive_toml(e, t, n, r, l, o) {
                let s, c;
                try {
                    const O = compiler.__wbindgen_add_to_stack_pointer(-16)
                      , k = d(e, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc)
                      , N = i
                      , x = d(t, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc)
                      , S = i
                      , I = d(n, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc)
                      , C = i
                      , P = d(r, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc)
                      , $ = i;
                    var u = _(o) ? 0 : d(o, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc)
                      , m = i;
                    compiler.blueprintmetahandle_derive_toml(O, k, N, x, S, I, C, P, $, !_(l), _(l) ? BigInt(0) : l, u, m);
                    var f = mem().getInt32(O + 0, !0)
                      , p = mem().getInt32(O + 4, !0)
                      , g = mem().getInt32(O + 8, !0)
                      , E = mem().getInt32(O + 12, !0)
                      , y = f
                      , b = p;
                    if (E)
                        throw y = 0,
                        b = 0,
                        v(g);
                    return s = y,
                    c = b,
                    w(y, b)
                } finally {
                    compiler.__wbindgen_add_to_stack_pointer(16),
                    compiler.__wbindgen_free(s, c, 1)
                }
            }
            static parse_metadata(e) {
                try {
                    const r = compiler.__wbindgen_add_to_stack_pointer(-16)
                      , l = d(e, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc)
                      , o = i;
                    compiler.blueprintmetahandle_parse_metadata(r, l, o);
                    var t = mem().getInt32(r + 0, !0)
                      , n = mem().getInt32(r + 4, !0);
                    if (mem().getInt32(r + 8, !0))
                        throw v(n);
                    return v(t)
                } finally {
                    compiler.__wbindgen_add_to_stack_pointer(16)
                }
            }
            static parse_remix(e) {
                try {
                    const r = compiler.__wbindgen_add_to_stack_pointer(-16)
                      , l = d(e, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc)
                      , o = i;
                    compiler.blueprintmetahandle_parse_remix(r, l, o);
                    var t = mem().getInt32(r + 0, !0)
                      , n = mem().getInt32(r + 4, !0);
                    if (mem().getInt32(r + 8, !0))
                        throw v(n);
                    return v(t)
                } finally {
                    compiler.__wbindgen_add_to_stack_pointer(16)
                }
            }
            static overwrite_domain(e, t) {
                let n, r;
                try {
                    const g = compiler.__wbindgen_add_to_stack_pointer(-16)
                      , E = d(e, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc)
                      , y = i;
                    var l = _(t) ? 0 : d(t, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc)
                      , o = i;
                    compiler.blueprintmetahandle_overwrite_domain(g, E, y, l, o);
                    var s = mem().getInt32(g + 0, !0)
                      , c = mem().getInt32(g + 4, !0)
                      , u = mem().getInt32(g + 8, !0)
                      , m = mem().getInt32(g + 12, !0)
                      , f = s
                      , p = c;
                    if (m)
                        throw f = 0,
                        p = 0,
                        v(u);
                    return n = f,
                    r = p,
                    w(f, p)
                } finally {
                    compiler.__wbindgen_add_to_stack_pointer(16),
                    compiler.__wbindgen_free(n, r, 1)
                }
            }
            static overwrite_metadata(e, t, n, r, l) {
                let o, s;
                try {
                    const b = compiler.__wbindgen_add_to_stack_pointer(-16)
                      , O = d(e, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc)
                      , k = i
                      , N = d(t, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc)
                      , x = i
                      , S = d(n, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc)
                      , I = i
                      , C = d(r, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc)
                      , P = i;
                    var c = _(l) ? 0 : d(l, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc)
                      , u = i;
                    compiler.blueprintmetahandle_overwrite_metadata(b, O, k, N, x, S, I, C, P, c, u);
                    var m = mem().getInt32(b + 0, !0)
                      , f = mem().getInt32(b + 4, !0)
                      , p = mem().getInt32(b + 8, !0)
                      , g = mem().getInt32(b + 12, !0)
                      , E = m
                      , y = f;
                    if (g)
                        throw E = 0,
                        y = 0,
                        v(p);
                    return o = E,
                    s = y,
                    w(E, y)
                } finally {
                    compiler.__wbindgen_add_to_stack_pointer(16),
                    compiler.__wbindgen_free(o, s, 1)
                }
            }
        }
        const C = "undefined" == typeof FinalizationRegistry ? {
            register: ()=>{}
            ,
            unregister: ()=>{}
        } : new FinalizationRegistry((e=>compiler.__wbg_discoverablegamelimitshandle_free(e >>> 0, 1)));
        class P {
            __destroy_into_raw() {
                const e = this.__wbg_ptr;
                return this.__wbg_ptr = 0,
                C.unregister(this),
                e
            }
            free() {
                const e = this.__destroy_into_raw();
                compiler.__wbg_discoverablegamelimitshandle_free(e, 0)
            }
            static max_tagline_length() {
                return compiler.discoverablegamelimitshandle_max_tagline_length() >>> 0
            }
            static max_thumbnail_image_bytes() {
                return compiler.discoverablegamelimitshandle_max_thumbnail_image_bytes() >>> 0
            }
        }
        const $ = "undefined" == typeof FinalizationRegistry ? {
            register: ()=>{}
            ,
            unregister: ()=>{}
        } : new FinalizationRegistry((e=>compiler.__wbg_ephemerallinkshandle_free(e >>> 0, 1)));
        class F {
            __destroy_into_raw() {
                const e = this.__wbg_ptr;
                return this.__wbg_ptr = 0,
                $.unregister(this),
                e
            }
            free() {
                const e = this.__destroy_into_raw();
                compiler.__wbg_ephemerallinkshandle_free(e, 0)
            }
            static deserialize(e) {
                try {
                    const r = compiler.__wbindgen_add_to_stack_pointer(-16)
                      , l = d(e, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc)
                      , o = i;
                    compiler.ephemerallinkshandle_deserialize(r, l, o);
                    var t = mem().getInt32(r + 0, !0)
                      , n = mem().getInt32(r + 4, !0);
                    if (mem().getInt32(r + 8, !0))
                        throw v(n);
                    return v(t)
                } finally {
                    compiler.__wbindgen_add_to_stack_pointer(16)
                }
            }
            static serialize(e) {
                let t, n;
                try {
                    const u = compiler.__wbindgen_add_to_stack_pointer(-16);
                    compiler.ephemerallinkshandle_serialize(u, g(e));
                    var r = mem().getInt32(u + 0, !0)
                      , l = mem().getInt32(u + 4, !0)
                      , o = mem().getInt32(u + 8, !0)
                      , i = mem().getInt32(u + 12, !0)
                      , s = r
                      , c = l;
                    if (i)
                        throw s = 0,
                        c = 0,
                        v(o);
                    return t = s,
                    n = c,
                    w(s, c)
                } finally {
                    compiler.__wbindgen_add_to_stack_pointer(16),
                    compiler.__wbindgen_free(t, n, 1)
                }
            }
        }
        const T = "undefined" == typeof FinalizationRegistry ? {
            register: ()=>{}
            ,
            unregister: ()=>{}
        } : new FinalizationRegistry((e=>compiler.__wbg_sourceshandle_free(e >>> 0, 1)));
        class CompilerWASM {
            static __wrap(e) {
                e >>>= 0;
                const t = Object.create(CompilerWASM.prototype);
                return t.__wbg_ptr = e,
                T.register(t, t.__wbg_ptr, t),
                t
            }
            __destroy_into_raw() {
                const e = this.__wbg_ptr;
                return this.__wbg_ptr = 0,
                T.unregister(this),
                e
            }
            free() {
                const e = this.__destroy_into_raw();
                compiler.__wbg_sourceshandle_free(e, 0)
            }
            static from_files(e) {
                try {
                    const r = compiler.__wbindgen_add_to_stack_pointer(-16);
                    compiler.sourceshandle_from_files(r, g(e));
                    var t = mem().getInt32(r + 0, !0)
                      , n = mem().getInt32(r + 4, !0);
                    if (mem().getInt32(r + 8, !0))
                        throw v(n);
                    return CompilerWASM.__wrap(t)
                } finally {
                    compiler.__wbindgen_add_to_stack_pointer(16)
                }
            }
            files() {
                try {
                    const n = compiler.__wbindgen_add_to_stack_pointer(-16);
                    compiler.sourceshandle_files(n, this.__wbg_ptr);
                    var e = mem().getInt32(n + 0, !0)
                      , t = mem().getInt32(n + 4, !0);
                    if (mem().getInt32(n + 8, !0))
                        throw v(t);
                    return v(e)
                } finally {
                    compiler.__wbindgen_add_to_stack_pointer(16)
                }
            }
            static deserialize(e, t) {
                try {
                    const s = compiler.__wbindgen_add_to_stack_pointer(-16)
                      , c = O(e, compiler.__wbindgen_malloc)
                      , u = i;
                    var n = _(t) ? 0 : d(t, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc)
                      , r = i;
                    compiler.sourceshandle_deserialize(s, c, u, n, r);
                    var l = mem().getInt32(s + 0, !0)
                      , o = mem().getInt32(s + 4, !0);
                    if (mem().getInt32(s + 8, !0))
                        throw v(o);
                    return CompilerWASM.__wrap(l)
                } finally {
                    compiler.__wbindgen_add_to_stack_pointer(16)
                }
            }
            serialize() {
                try {
                    const l = compiler.__wbindgen_add_to_stack_pointer(-16);
                    compiler.sourceshandle_serialize(l, this.__wbg_ptr);
                    var e = mem().getInt32(l + 0, !0)
                      , t = mem().getInt32(l + 4, !0)
                      , n = mem().getInt32(l + 8, !0);
                    if (mem().getInt32(l + 12, !0))
                        throw v(n);
                    var r = k(e, t).slice();
                    return compiler.__wbindgen_free(e, 1 * t, 1),
                    r
                } finally {
                    compiler.__wbindgen_add_to_stack_pointer(16)
                }
            }
            hash() {
                let e, t;
                try {
                    const c = compiler.__wbindgen_add_to_stack_pointer(-16);
                    compiler.sourceshandle_hash(c, this.__wbg_ptr);
                    var n = mem().getInt32(c + 0, !0)
                      , r = mem().getInt32(c + 4, !0)
                      , l = mem().getInt32(c + 8, !0)
                      , o = mem().getInt32(c + 12, !0)
                      , i = n
                      , s = r;
                    if (o)
                        throw i = 0,
                        s = 0,
                        v(l);
                    return e = i,
                    t = s,
                    w(i, s)
                } finally {
                    compiler.__wbindgen_add_to_stack_pointer(16),
                    compiler.__wbindgen_free(e, t, 1)
                }
            }
            check() {
                try {
                    const t = compiler.__wbindgen_add_to_stack_pointer(-16);
                    compiler.sourceshandle_check(t, this.__wbg_ptr);
                    var e = mem().getInt32(t + 0, !0);
                    if (mem().getInt32(t + 4, !0))
                        throw v(e)
                } finally {
                    compiler.__wbindgen_add_to_stack_pointer(16)
                }
            }
            compile() {
                try {
                    const l = compiler.__wbindgen_add_to_stack_pointer(-16);
                    compiler.sourceshandle_compile(l, this.__wbg_ptr);
                    var e = mem().getInt32(l + 0, !0)
                      , t = mem().getInt32(l + 4, !0)
                      , n = mem().getInt32(l + 8, !0);
                    if (mem().getInt32(l + 12, !0))
                        throw v(n);
                    var r = k(e, t).slice();
                    return compiler.__wbindgen_free(e, 1 * t, 1),
                    r
                } finally {
                    compiler.__wbindgen_add_to_stack_pointer(16)
                }
            }
            generate_docs_html() {
                try {
                    const n = compiler.__wbindgen_add_to_stack_pointer(-16);
                    compiler.sourceshandle_generate_docs_html(n, this.__wbg_ptr);
                    var e = mem().getInt32(n + 0, !0)
                      , t = mem().getInt32(n + 4, !0);
                    if (mem().getInt32(n + 8, !0))
                        throw v(t);
                    return v(e)
                } finally {
                    compiler.__wbindgen_add_to_stack_pointer(16)
                }
            }
            disassemble() {
                try {
                    const n = compiler.__wbindgen_add_to_stack_pointer(-16);
                    compiler.sourceshandle_disassemble(n, this.__wbg_ptr);
                    var e = mem().getInt32(n + 0, !0)
                      , t = mem().getInt32(n + 4, !0);
                    if (mem().getInt32(n + 8, !0))
                        throw v(t);
                    return v(e)
                } finally {
                    compiler.__wbindgen_add_to_stack_pointer(16)
                }
            }
        }
        function R(e, t) {
            const n = d(String(o(t)), compiler.__wbindgen_malloc, compiler.__wbindgen_realloc)
              , r = i;
            mem().setInt32(e + 4, r, !0),
            mem().setInt32(e + 0, n, !0)
        }
        function U(e) {
            return g(o(e).buffer)
        }
        function z() {
            return E((function(e, t) {
                return g(o(e).call(o(t)))
            }
            ), arguments)
        }
        function M(e, t, n, a) {
            console.debug(o(e), o(t), o(n), o(a))
        }
        function q(e) {
            return o(e).done
        }
        function A(e) {
            return g(Object.entries(o(e)))
        }
        function Q(e) {
            console.error(o(e))
        }
        function L(e, t) {
            let n, r;
            try {
                n = e,
                r = t,
                console.error(w(e, t))
            } finally {
                compiler.__wbindgen_free(n, r, 1)
            }
        }
        function J(e, t, n, a) {
            console.error(o(e), o(t), o(n), o(a))
        }
        function G(e) {
            return g(Array.from(o(e)))
        }
        function j(e) {
            return o(e).getTime()
        }
        function B(e, t) {
            return g(o(e)[t >>> 0])
        }
        function W() {
            return E((function(e, t) {
                return g(Reflect.get(o(e), o(t)))
            }
            ), arguments)
        }
        function X(e, t) {
            return g(o(e)[o(t)])
        }
        function Y(e, t, n, a) {
            console.info(o(e), o(t), o(n), o(a))
        }
        function K(e) {
            let t;
            try {
                t = o(e)instanceof ArrayBuffer
            } catch (e) {
                t = !1
            }
            return t
        }
        function Z(e) {
            let t;
            try {
                t = o(e)instanceof Uint8Array
            } catch (e) {
                t = !1
            }
            return t
        }
        function H(e) {
            return Array.isArray(o(e))
        }
        function V(e) {
            return Number.isSafeInteger(o(e))
        }
        function ee() {
            return g(Symbol.iterator)
        }
        function te(e) {
            return o(e).length
        }
        function ne(e) {
            return o(e).length
        }
        function ae(e, t, n, a) {
            console.log(o(e), o(t), o(n), o(a))
        }
        function re() {
            return g(new Date)
        }
        function le() {
            return g(new Error)
        }
        function oe() {
            return g(new Array)
        }
        function ie(e) {
            return g(new Uint8Array(o(e)))
        }
        function se() {
            return g(new Object)
        }
        function ce() {
            return g(new Map)
        }
        function ue(e, t, n) {
            return g(new Uint8Array(o(e),t >>> 0,n >>> 0))
        }
        function me(e) {
            return g(o(e).next)
        }
        function de() {
            return E((function(e) {
                return g(o(e).next())
            }
            ), arguments)
        }
        function fe(e, t, n) {
            o(e)[v(t)] = v(n)
        }
        function he(e, t, n) {
            o(e)[t >>> 0] = v(n)
        }
        function pe(e, t, n) {
            o(e).set(o(t), n >>> 0)
        }
        function ge(e, t, n) {
            return g(o(e).set(o(t), o(n)))
        }
        function Ee(e, t) {
            const n = d(o(t).stack, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc)
              , r = i;
            mem().setInt32(e + 4, r, !0),
            mem().setInt32(e + 0, n, !0)
        }
        function ye(e) {
            return g(o(e).value)
        }
        function we(e, t, n, a) {
            console.warn(o(e), o(t), o(n), o(a))
        }
        function ve(e) {
            return +o(e)
        }
        function be(e) {
            const t = o(e);
            return "boolean" == typeof t ? t ? 1 : 0 : 2
        }
        function _e(e, t) {
            const n = d(b(o(t)), compiler.__wbindgen_malloc, compiler.__wbindgen_realloc)
              , r = i;
            mem().setInt32(e + 4, r, !0),
            mem().setInt32(e + 0, n, !0)
        }
        function Oe(e, t) {
            return g(new Error(w(e, t)))
        }
        function ke(e, t) {
            return o(e)in o(t)
        }
        function Ne(e) {
            return "function" == typeof o(e)
        }
        function xe(e) {
            const t = o(e);
            return "object" == typeof t && null !== t
        }
        function Se(e) {
            return "string" == typeof o(e)
        }
        function Ie(e) {
            return void 0 === o(e)
        }
        function Ce(e, t) {
            return o(e) == o(t)
        }
        function Pe() {
            return g(compiler.memory)
        }
        function $e(e, t) {
            const n = o(t)
              , a = "number" == typeof n ? n : void 0;
            mem().setFloat64(e + 8, _(a) ? 0 : a, !0),
            mem().setInt32(e + 0, !_(a), !0)
        }
        function Fe(e) {
            return g(o(e))
        }
        function Te(e) {
            v(e)
        }
        function De(e, t) {
            const n = o(t)
              , r = "string" == typeof n ? n : void 0;
            var l = _(r) ? 0 : d(r, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc)
              , s = i;
            mem().setInt32(e + 4, s, !0),
            mem().setInt32(e + 0, l, !0)
        }
        function Re(e, t) {
            return g(w(e, t))
        }
        function Ue(e, t) {
            throw new Error(w(e, t))
        }
    }
    ,
    compiler: (module,exports,require)=>{
        // module id is generally "compiler"
        // w is wasm modules
        var compiler_wasm = require.w[module.id];
        // r looks like esModules?? it defines __esModules on the thing
        // ah it looks like it tags exports with the module type
        
        // so it looks like its reexporting everything from the wasm module
        for (var r in (require.r(exports), compiler_wasm))
          r && (exports[r] = compiler_wasm[r]);
        require(2024), a[""]();
    }
}]);

