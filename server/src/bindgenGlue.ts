//@ts-nocheck
let compiler: any;
export function loadCompiler(e) {
  compiler = e;
}
// e = n.hmd(e);
const l = new Array(128).fill(void 0);
function o(e) {
  return l[e];
}
l.push(void 0, null, !0, !1);
let i = 0,
  s: Uint8Array | null = null;
function c() {
  return (
    (null !== s && 0 !== s.byteLength) ||
      (s = new Uint8Array(compiler.memory.buffer)),
    s
  );
}
let u = new TextEncoder("utf-8");
const m =
  "function" == typeof u.encodeInto
    ? function (e, t) {
        return u.encodeInto(e, t);
      }
    : function (e, t) {
        const n = u.encode(e);
        return (
          t.set(n),
          {
            read: e.length,
            written: n.length,
          }
        );
      };
function d(e, t, n) {
  if (void 0 === n) {
    const n = u.encode(e),
      a = t(n.length, 1) >>> 0;
    return (
      c()
        .subarray(a, a + n.length)
        .set(n),
      (i = n.length),
      a
    );
  }
  let a = e.length,
    r = t(a, 1) >>> 0;
  const l = c();
  let o = 0;
  for (; o < a; o++) {
    const t = e.charCodeAt(o);
    if (t > 127) break;
    l[r + o] = t;
  }
  if (o !== a) {
    0 !== o && (e = e.slice(o)), (r = n(r, a, (a = o + 3 * e.length), 1) >>> 0);
    const t = c().subarray(r + o, r + a);
    (o += m(e, t).written), (r = n(r, a, o, 1) >>> 0);
  }
  return (i = o), r;
}
let f: DataView | null = null;
function mem() {
  return (
    (null === f ||
      !0 === f.buffer.detached ||
      (void 0 === f.buffer.detached && f.buffer !== compiler.memory.buffer)) &&
      (f = new DataView(compiler.memory.buffer)),
    f
  );
}
let p = l.length;
function g(e) {
  p === l.length && l.push(l.length + 1);
  const t = p;
  return (p = l[t]), (l[t] = e), t;
}
function E(e, t) {
  try {
    return e.apply(this, t);
  } catch (e) {
    compiler.__wbindgen_exn_store(g(e));
  }
}
let y = new TextDecoder("utf-8", {
  ignoreBOM: !0,
  fatal: !0,
});
function w(e, t) {
  return (e >>>= 0), y.decode(c().subarray(e, e + t));
}
function v(e) {
  const t = o(e);
  return (
    (function (e) {
      e < 132 || ((l[e] = p), (p = e));
    })(e),
    t
  );
}
function b(e) {
  const t = typeof e;
  if ("number" == t || "boolean" == t || null == e) return `${e}`;
  if ("string" == t) return `"${e}"`;
  if ("symbol" == t) {
    const t = e.description;
    return null == t ? "Symbol" : `Symbol(${t})`;
  }
  if ("function" == t) {
    const t = e.name;
    return "string" == typeof t && t.length > 0 ? `Function(${t})` : "Function";
  }
  if (Array.isArray(e)) {
    const t = e.length;
    let n = "[";
    t > 0 && (n += b(e[0]));
    for (let a = 1; a < t; a++) n += ", " + b(e[a]);
    return (n += "]"), n;
  }
  const n = /\[object ([^\]]+)\]/.exec(toString.call(e));
  let a;
  if (!(n && n.length > 1)) return toString.call(e);
  if (((a = n[1]), "Object" == a))
    try {
      return "Object(" + JSON.stringify(e) + ")";
    } catch (e) {
      return "Object";
    }
  return e instanceof Error ? `${e.name}: ${e.message}\n${e.stack}` : a;
}
function _(e) {
  return null == e;
}
function O(e, t) {
  const n = t(1 * e.length, 1) >>> 0;
  return c().set(e, n / 1), (i = e.length), n;
}
function k(e, t) {
  return (e >>>= 0), c().subarray(e / 1, e / 1 + t);
}
y.decode();


// ugh es2024 or something does not exist so i need to do this what a pain!
//! this isnt actually a real thing
// const FinalizationRegistry: any = undefined;
const N =
  "undefined" == typeof FinalizationRegistry
    ? {
        register: () => {},
        unregister: () => {},
      }
    : new FinalizationRegistry((e) =>
        compiler.__wbg_artifactlinkshandle_free(e >>> 0, 1)
      );
class x {
  __wbg_ptr: number;
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return (this.__wbg_ptr = 0), N.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    compiler.__wbg_artifactlinkshandle_free(e, 0);
  }
  static deserialize(e) {
    try {
      const r = compiler.__wbindgen_add_to_stack_pointer(-16),
        l = d(e, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc),
        o = i;
      compiler.artifactlinkshandle_deserialize(r, l, o);
      var t = mem().getInt32(r + 0, !0),
        n = mem().getInt32(r + 4, !0);
      if (mem().getInt32(r + 8, !0)) throw v(n);
      return v(t);
    } finally {
      compiler.__wbindgen_add_to_stack_pointer(16);
    }
  }
  static serialize(e) {
    let t, n;
    try {
      const u = compiler.__wbindgen_add_to_stack_pointer(-16);
      compiler.artifactlinkshandle_serialize(u, g(e));
      var r = mem().getInt32(u + 0, !0),
        l = mem().getInt32(u + 4, !0),
        o = mem().getInt32(u + 8, !0),
        i = mem().getInt32(u + 12, !0),
        s = r,
        c = l;
      if (i) throw ((s = 0), (c = 0), v(o));
      return (t = s), (n = c), w(s, c);
    } finally {
      compiler.__wbindgen_add_to_stack_pointer(16),
        compiler.__wbindgen_free(t, n, 1);
    }
  }
  static base64_hash_artifact(e) {
    let t, n;
    try {
      const m = compiler.__wbindgen_add_to_stack_pointer(-16),
        d = O(e, compiler.__wbindgen_malloc),
        f = i;
      compiler.artifactlinkshandle_base64_hash_artifact(m, d, f);
      var r = mem().getInt32(m + 0, !0),
        l = mem().getInt32(m + 4, !0),
        o = mem().getInt32(m + 8, !0),
        s = mem().getInt32(m + 12, !0),
        c = r,
        u = l;
      if (s) throw ((c = 0), (u = 0), v(o));
      return (t = c), (n = u), w(c, u);
    } finally {
      compiler.__wbindgen_add_to_stack_pointer(16),
        compiler.__wbindgen_free(t, n, 1);
    }
  }
  static max_inline_bytes() {
    return compiler.artifactlinkshandle_max_inline_bytes() >>> 0;
  }
  static must_compile_file_extensions() {
    try {
      const n = compiler.__wbindgen_add_to_stack_pointer(-16);
      compiler.artifactlinkshandle_must_compile_file_extensions(n);
      var e = mem().getInt32(n + 0, !0),
        t = mem().getInt32(n + 4, !0);
      if (mem().getInt32(n + 8, !0)) throw v(t);
      return v(e);
    } finally {
      compiler.__wbindgen_add_to_stack_pointer(16);
    }
  }
}
const S =
  "undefined" == typeof FinalizationRegistry
    ? {
        register: () => {},
        unregister: () => {},
      }
    : new FinalizationRegistry((e) =>
        compiler.__wbg_blueprintmetahandle_free(e >>> 0, 1)
      );
class I {
  __wbg_ptr: number;
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return (this.__wbg_ptr = 0), S.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    compiler.__wbg_blueprintmetahandle_free(e, 0);
  }
  static derive_toml(e, t, n, r, l, o) {
    let s, c;
    try {
      const O = compiler.__wbindgen_add_to_stack_pointer(-16),
        k = d(e, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc),
        N = i,
        x = d(t, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc),
        S = i,
        I = d(n, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc),
        C = i,
        P = d(r, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc),
        $ = i;
      var u = _(o)
          ? 0
          : d(o, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc),
        m = i;
      compiler.blueprintmetahandle_derive_toml(
        O,
        k,
        N,
        x,
        S,
        I,
        C,
        P,
        $,
        !_(l),
        _(l) ? BigInt(0) : l,
        u,
        m
      );
      var f = mem().getInt32(O + 0, !0),
        p = mem().getInt32(O + 4, !0),
        g = mem().getInt32(O + 8, !0),
        E = mem().getInt32(O + 12, !0),
        y = f,
        b = p;
      if (E) throw ((y = 0), (b = 0), v(g));
      return (s = y), (c = b), w(y, b);
    } finally {
      compiler.__wbindgen_add_to_stack_pointer(16),
        compiler.__wbindgen_free(s, c, 1);
    }
  }
  static parse_metadata(e) {
    try {
      const r = compiler.__wbindgen_add_to_stack_pointer(-16),
        l = d(e, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc),
        o = i;
      compiler.blueprintmetahandle_parse_metadata(r, l, o);
      var t = mem().getInt32(r + 0, !0),
        n = mem().getInt32(r + 4, !0);
      if (mem().getInt32(r + 8, !0)) throw v(n);
      return v(t);
    } finally {
      compiler.__wbindgen_add_to_stack_pointer(16);
    }
  }
  static parse_remix(e) {
    try {
      const r = compiler.__wbindgen_add_to_stack_pointer(-16),
        l = d(e, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc),
        o = i;
      compiler.blueprintmetahandle_parse_remix(r, l, o);
      var t = mem().getInt32(r + 0, !0),
        n = mem().getInt32(r + 4, !0);
      if (mem().getInt32(r + 8, !0)) throw v(n);
      return v(t);
    } finally {
      compiler.__wbindgen_add_to_stack_pointer(16);
    }
  }
  static overwrite_domain(e, t) {
    let n, r;
    try {
      const g = compiler.__wbindgen_add_to_stack_pointer(-16),
        E = d(e, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc),
        y = i;
      var l = _(t)
          ? 0
          : d(t, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc),
        o = i;
      compiler.blueprintmetahandle_overwrite_domain(g, E, y, l, o);
      var s = mem().getInt32(g + 0, !0),
        c = mem().getInt32(g + 4, !0),
        u = mem().getInt32(g + 8, !0),
        m = mem().getInt32(g + 12, !0),
        f = s,
        p = c;
      if (m) throw ((f = 0), (p = 0), v(u));
      return (n = f), (r = p), w(f, p);
    } finally {
      compiler.__wbindgen_add_to_stack_pointer(16),
        compiler.__wbindgen_free(n, r, 1);
    }
  }
  static overwrite_metadata(e, t, n, r, l) {
    let o, s;
    try {
      const b = compiler.__wbindgen_add_to_stack_pointer(-16),
        O = d(e, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc),
        k = i,
        N = d(t, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc),
        x = i,
        S = d(n, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc),
        I = i,
        C = d(r, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc),
        P = i;
      var c = _(l)
          ? 0
          : d(l, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc),
        u = i;
      compiler.blueprintmetahandle_overwrite_metadata(
        b,
        O,
        k,
        N,
        x,
        S,
        I,
        C,
        P,
        c,
        u
      );
      var m = mem().getInt32(b + 0, !0),
        f = mem().getInt32(b + 4, !0),
        p = mem().getInt32(b + 8, !0),
        g = mem().getInt32(b + 12, !0),
        E = m,
        y = f;
      if (g) throw ((E = 0), (y = 0), v(p));
      return (o = E), (s = y), w(E, y);
    } finally {
      compiler.__wbindgen_add_to_stack_pointer(16),
        compiler.__wbindgen_free(o, s, 1);
    }
  }
}
const C =
  "undefined" == typeof FinalizationRegistry
    ? {
        register: () => {},
        unregister: () => {},
      }
    : new FinalizationRegistry((e) =>
        compiler.__wbg_discoverablegamelimitshandle_free(e >>> 0, 1)
      );
class P {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return (this.__wbg_ptr = 0), C.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    compiler.__wbg_discoverablegamelimitshandle_free(e, 0);
  }
  static max_tagline_length() {
    return compiler.discoverablegamelimitshandle_max_tagline_length() >>> 0;
  }
  static max_thumbnail_image_bytes() {
    return (
      compiler.discoverablegamelimitshandle_max_thumbnail_image_bytes() >>> 0
    );
  }
}
const $ =
  "undefined" == typeof FinalizationRegistry
    ? {
        register: () => {},
        unregister: () => {},
      }
    : new FinalizationRegistry((e) =>
        compiler.__wbg_ephemerallinkshandle_free(e >>> 0, 1)
      );
class F {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return (this.__wbg_ptr = 0), $.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    compiler.__wbg_ephemerallinkshandle_free(e, 0);
  }
  static deserialize(e) {
    try {
      const r = compiler.__wbindgen_add_to_stack_pointer(-16),
        l = d(e, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc),
        o = i;
      compiler.ephemerallinkshandle_deserialize(r, l, o);
      var t = mem().getInt32(r + 0, !0),
        n = mem().getInt32(r + 4, !0);
      if (mem().getInt32(r + 8, !0)) throw v(n);
      return v(t);
    } finally {
      compiler.__wbindgen_add_to_stack_pointer(16);
    }
  }
  static serialize(e) {
    let t, n;
    try {
      const u = compiler.__wbindgen_add_to_stack_pointer(-16);
      compiler.ephemerallinkshandle_serialize(u, g(e));
      var r = mem().getInt32(u + 0, !0),
        l = mem().getInt32(u + 4, !0),
        o = mem().getInt32(u + 8, !0),
        i = mem().getInt32(u + 12, !0),
        s = r,
        c = l;
      if (i) throw ((s = 0), (c = 0), v(o));
      return (t = s), (n = c), w(s, c);
    } finally {
      compiler.__wbindgen_add_to_stack_pointer(16),
        compiler.__wbindgen_free(t, n, 1);
    }
  }
}
const T =
  "undefined" == typeof FinalizationRegistry
    ? {
        register: () => {},
        unregister: () => {},
      }
    : new FinalizationRegistry((e) =>
        compiler.__wbg_sourceshandle_free(e >>> 0, 1)
      );
export class CompilerObject {
  static __wrap(e) {
    e >>>= 0;
    const t = Object.create(CompilerObject.prototype);
    return (t.__wbg_ptr = e), T.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return (this.__wbg_ptr = 0), T.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    compiler.__wbg_sourceshandle_free(e, 0);
  }
  static from_files(e) {
    try {
      const r = compiler.__wbindgen_add_to_stack_pointer(-16);
      compiler.sourceshandle_from_files(r, g(e));
      var t = mem().getInt32(r + 0, !0),
        n = mem().getInt32(r + 4, !0);
      if (mem().getInt32(r + 8, !0)) throw v(n);
      return CompilerObject.__wrap(t);
    } finally {
      compiler.__wbindgen_add_to_stack_pointer(16);
    }
  }
  files() {
    try {
      const n = compiler.__wbindgen_add_to_stack_pointer(-16);
      compiler.sourceshandle_files(n, this.__wbg_ptr);
      var e = mem().getInt32(n + 0, !0),
        t = mem().getInt32(n + 4, !0);
      if (mem().getInt32(n + 8, !0)) throw v(t);
      return v(e);
    } finally {
      compiler.__wbindgen_add_to_stack_pointer(16);
    }
  }
  static deserialize(e, t) {
    try {
      const s = compiler.__wbindgen_add_to_stack_pointer(-16),
        c = O(e, compiler.__wbindgen_malloc),
        u = i;
      var n = _(t)
          ? 0
          : d(t, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc),
        r = i;
      compiler.sourceshandle_deserialize(s, c, u, n, r);
      var l = mem().getInt32(s + 0, !0),
        o = mem().getInt32(s + 4, !0);
      if (mem().getInt32(s + 8, !0)) throw v(o);
      return CompilerObject.__wrap(l);
    } finally {
      compiler.__wbindgen_add_to_stack_pointer(16);
    }
  }
  serialize() {
    try {
      const l = compiler.__wbindgen_add_to_stack_pointer(-16);
      compiler.sourceshandle_serialize(l, this.__wbg_ptr);
      var e = mem().getInt32(l + 0, !0),
        t = mem().getInt32(l + 4, !0),
        n = mem().getInt32(l + 8, !0);
      if (mem().getInt32(l + 12, !0)) throw v(n);
      var r = k(e, t).slice();
      return compiler.__wbindgen_free(e, 1 * t, 1), r;
    } finally {
      compiler.__wbindgen_add_to_stack_pointer(16);
    }
  }
  hash() {
    let e, t;
    try {
      const c = compiler.__wbindgen_add_to_stack_pointer(-16);
      compiler.sourceshandle_hash(c, this.__wbg_ptr);
      var n = mem().getInt32(c + 0, !0),
        r = mem().getInt32(c + 4, !0),
        l = mem().getInt32(c + 8, !0),
        o = mem().getInt32(c + 12, !0),
        i = n,
        s = r;
      if (o) throw ((i = 0), (s = 0), v(l));
      return (e = i), (t = s), w(i, s);
    } finally {
      compiler.__wbindgen_add_to_stack_pointer(16),
        compiler.__wbindgen_free(e, t, 1);
    }
  }
  check() {
    try {
      const t = compiler.__wbindgen_add_to_stack_pointer(-16);
      compiler.sourceshandle_check(t, this.__wbg_ptr);
      var e = mem().getInt32(t + 0, !0);
      if (mem().getInt32(t + 4, !0)) throw v(e);
    } finally {
      compiler.__wbindgen_add_to_stack_pointer(16);
    }
  }
  compile() {
    try {
      const l = compiler.__wbindgen_add_to_stack_pointer(-16);
      compiler.sourceshandle_compile(l, this.__wbg_ptr);
      var e = mem().getInt32(l + 0, !0),
        t = mem().getInt32(l + 4, !0),
        n = mem().getInt32(l + 8, !0);
      if (mem().getInt32(l + 12, !0)) throw v(n);
      var r = k(e, t).slice();
      return compiler.__wbindgen_free(e, 1 * t, 1), r;
    } finally {
      compiler.__wbindgen_add_to_stack_pointer(16);
    }
  }
  generate_docs_html() {
    try {
      const n = compiler.__wbindgen_add_to_stack_pointer(-16);
      compiler.sourceshandle_generate_docs_html(n, this.__wbg_ptr);
      var e = mem().getInt32(n + 0, !0),
        t = mem().getInt32(n + 4, !0);
      if (mem().getInt32(n + 8, !0)) throw v(t);
      return v(e);
    } finally {
      compiler.__wbindgen_add_to_stack_pointer(16);
    }
  }
  disassemble() {
    try {
      const n = compiler.__wbindgen_add_to_stack_pointer(-16);
      compiler.sourceshandle_disassemble(n, this.__wbg_ptr);
      var e = mem().getInt32(n + 0, !0),
        t = mem().getInt32(n + 4, !0);
      if (mem().getInt32(n + 8, !0)) throw v(t);
      return v(e);
    } finally {
      compiler.__wbindgen_add_to_stack_pointer(16);
    }
  }
}
function R(e, t) {
  const n = d(
      String(o(t)),
      compiler.__wbindgen_malloc,
      compiler.__wbindgen_realloc
    ),
    r = i;
  mem().setInt32(e + 4, r, !0), mem().setInt32(e + 0, n, !0);
}
function U(e) {
  return g(o(e).buffer);
}
function z(a: number, b: number)
function z() {
  return E(function (e, t) {
    return g(o(e).call(o(t)));
  }, arguments);
}
function M(e, t, n, a) {
  console.debug(o(e), o(t), o(n), o(a));
}
function q(e) {
  return o(e).done;
}
function A(e) {
  return g(Object.entries(o(e)));
}
function Q(e) {
  console.error(o(e));
}
function L(e, t) {
  let n, r;
  try {
    (n = e), (r = t), console.error(w(e, t));
  } finally {
    compiler.__wbindgen_free(n, r, 1);
  }
}
function J(e, t, n, a) {
  console.error(o(e), o(t), o(n), o(a));
}
function G(e) {
  return g(Array.from(o(e)));
}
function j(e) {
  return o(e).getTime();
}
function B(e, t) {
  return g(o(e)[t >>> 0]);
}
function W(a: number, b:number)
function W() {
  return E(function (e, t) {
    return g(Reflect.get(o(e), o(t)));
  }, arguments);
}
function X(e, t) {
  return g(o(e)[o(t)]);
}
function Y(e, t, n, a) {
  console.info(o(e), o(t), o(n), o(a));
}
function K(e) {
  let t;
  try {
    t = o(e) instanceof ArrayBuffer;
  } catch (e) {
    t = !1;
  }
  return t;
}
function Z(e) {
  let t;
  try {
    t = o(e) instanceof Uint8Array;
  } catch (e) {
    t = !1;
  }
  return t;
}
function H(e) {
  return Array.isArray(o(e));
}
function V(e) {
  return Number.isSafeInteger(o(e));
}
function ee() {
  return g(Symbol.iterator);
}
function te(e) {
  return o(e).length;
}
function ne(e) {
  return o(e).length;
}
function ae(e, t, n, a) {
  console.log(o(e), o(t), o(n), o(a));
}
function re() {
  return g(new Date());
}
function le() {
  return g(new Error());
}
function oe() {
  return g(new Array());
}
function ie(e) {
  return g(new Uint8Array(o(e)));
}
function se() {
  return g(new Object());
}
function ce() {
  return g(new Map());
}
function ue(e, t, n) {
  return g(new Uint8Array(o(e), t >>> 0, n >>> 0));
}
function me(e) {
  return g(o(e).next);
}
function de(a: number)
function de() {
  return E(function (e) {
    return g(o(e).next());
  }, arguments);
}
function fe(e, t, n) {
  o(e)[v(t)] = v(n);
}
function he(e, t, n) {
  o(e)[t >>> 0] = v(n);
}
function pe(e, t, n) {
  o(e).set(o(t), n >>> 0);
}
function ge(e, t, n) {
  return g(o(e).set(o(t), o(n)));
}
function Ee(e, t) {
  const n = d(
      o(t).stack,
      compiler.__wbindgen_malloc,
      compiler.__wbindgen_realloc
    ),
    r = i;
  mem().setInt32(e + 4, r, !0), mem().setInt32(e + 0, n, !0);
}
function ye(e) {
  return g(o(e).value);
}
function we(e, t, n, a) {
  console.warn(o(e), o(t), o(n), o(a));
}
function ve(e) {
  return +o(e);
}
function be(e) {
  const t = o(e);
  return "boolean" == typeof t ? (t ? 1 : 0) : 2;
}
function _e(e, t) {
  const n = d(b(o(t)), compiler.__wbindgen_malloc, compiler.__wbindgen_realloc),
    r = i;
  mem().setInt32(e + 4, r, !0), mem().setInt32(e + 0, n, !0);
}
function Oe(e, t) {
  return g(new Error(w(e, t)));
}
function ke(e, t) {
  return o(e) in o(t);
}
function Ne(e) {
  return "function" == typeof o(e);
}
function xe(e) {
  const t = o(e);
  return "object" == typeof t && null !== t;
}
function Se(e) {
  return "string" == typeof o(e);
}
function Ie(e) {
  return void 0 === o(e);
}
function Ce(e, t) {
  return o(e) == o(t);
}
function Pe() {
  return g(compiler.memory);
}
function $e(e, t) {
  const n = o(t),
    a = "number" == typeof n ? n : void 0;
  mem().setFloat64(e + 8, _(a) ? 0 : a, !0), mem().setInt32(e + 0, !_(a), !0);
}
function Fe(e) {
  return g(o(e));
}
function Te(e) {
  v(e);
}
function De(e, t) {
  const n = o(t),
    r = "string" == typeof n ? n : void 0;
  var l = _(r)
      ? 0
      : d(r, compiler.__wbindgen_malloc, compiler.__wbindgen_realloc),
    s = i;
  mem().setInt32(e + 4, s, !0), mem().setInt32(e + 0, l, !0);
}
function Re(e, t) {
  return g(w(e, t));
}
function Ue(e, t) {
  throw new Error(w(e, t));
}

export {
  M as $K,
  A as BJ,
  se as Eo,
  Z as F,
  be as HT,
  R as K_,
  L as L,
  ne as LE,
  x as LF,
  $e as M1,
  Ee as MX,
  pe as Nm,
  we as Oj,
  Ue as Or,
  ee as PQ,
  X as QP,
  le as Qr,
  Y as Qs,
  fe as S5,
  CompilerObject as SF,
  q as Sv,
  de as TZ,
  oe as Tg,
  ae as Tv,
  z as UM,
  G as Us,
  ue as Uu,
  xe as Wl,
  Ie as XP,
  ge as YZ,
  Ce as Zj,
  F as aZ,
  U as cA,
  ve as d,
  ye as dU,
  P as dt,
  Se as eY,
  ie as fU,
  _e as fY,
  te as h2,
  Re as h4,
  Oe as hd,
  W as k,
  Fe as m_,
  H as mr,
  Q as n_,
  Ne as o$,
  J as o1,
  Pe as oH,
  loadCompiler as oT,
  I as pG,
  De as qt,
  K as qy,
  B as sB,
  me as tq,
  j as ud,
  Te as ug,
  V as wZ,
  re as wg,
  ce as wn,
  ke as yb,
  he as zJ,
};
