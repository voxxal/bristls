(() => {
  "use strict";
  var e,
    t,
    n,
    r,
    o,
    i,
    s,
    a,
    c,
    l,
    u,
    d,
    f,
    _,
    h,
    p,
    m,
    g,
    b,
    w,
    v,
    x,
    y,
    E,
    k,
    N,
    S,
    C,
    T,
    P,
    I,
    $,
    A,
    j,
    L,
    O,
    M,
    B,
    U,
    z,
    F,
    R,
    W,
    D,
    q,
    H,
    Z,
    Y,
    J,
    K,
    Q,
    V,
    X,
    G,
    ee,
    te,
    ne,
    re,
    oe,
    ie,
    se,
    ae,
    ce,
    le,
    ue,
    de,
    fe,
    _e,
    he,
    pe,
    me,
    ge,
    be,
    we,
    ve,
    xe,
    ye,
    Ee,
    ke,
    Ne,
    Se,
    Ce,
    Te,
    Pe,
    Ie,
    $e,
    Ae,
    je,
    Le,
    Oe,
    Me,
    Be,
    Ue,
    ze,
    Fe,
    Re,
    We,
    De,
    qe,
    He,
    Ze,
    Ye,
    Je,
    Ke,
    Qe,
    Ve,
    Xe,
    Ge,
    et,
    tt,
    nt,
    rt,
    ot,
    it,
    st,
    at,
    ct,
    lt,
    ut,
    dt,
    ft,
    _t,
    ht = {
      4161: (e, t, n) => {
        var r = n(7294),
          o = n(745),
          i = n(3868),
          s = n(5949),
          a = n(6336),
          c = n(5990),
          l = n(2104),
          u = n(6255);
        const d = r.lazy(() =>
            Promise.all([n.e(736), n.e(743)]).then(n.bind(n, 3743))
          ),
          f = document.getElementById("Coruscate.Metadata")?.dataset.gameId,
          _ =
            document.getElementById("Coruscate.Metadata")?.dataset.blueprintId,
          h = document.getElementById("Coruscate.Metadata")?.dataset.engineId,
          p = new (class {
            status = (0, u.cn)("Loading...");
            error = (0, u.cn)(null);
            prefetched = null;
            constructor(e, t, n) {
              this.prefetch(e, t, n).catch((e) => {
                console.error("Prefetch error", e), this.error.set(`${e}`);
              });
            }
            take() {
              const e = this.prefetched;
              return (this.prefetched = null), e;
            }
            async prefetch(e, t, n) {
              const r = (async function (e) {
                  const t = await fetch(
                    `/api/games/${encodeURIComponent(e)}/identify`,
                    {
                      method: "POST",
                    }
                  );
                  if (200 === t.status) return await t.json();
                  throw await t.text();
                })(t),
                o = (0, c.D)(n, e),
                i = new l.n0(t).load();
              this.status.set("Loading preferences...");
              const s = await i;
              this.status.set("Logging in...");
              const a = await r,
                u = new l.i2(a.accumulators);
              this.status.set("Loading game data...");
              const d = await o;
              (this.prefetched = {
                engineId: e,
                gameId: t,
                blueprintId: n,
                accumulators: u,
                preferences: s,
                serializedBlueprint: d,
                userId: a.userId,
                playerName: a.playerName ?? null,
                username: a.username ?? null,
                email: a.email ?? null,
                authTicket: a.ticket,
                isModerator: a.isModerator ?? !1,
              }),
                this.status.set("Loading user interface...");
            }
          })(h, f, _);
        function m(e) {
          const t = (0, u.KO)(p.error);
          return t
            ? r.createElement(
                a.T3,
                null,
                r.createElement("h1", null, "Error"),
                r.createElement("p", null, "Error during game load:"),
                r.createElement("p", null, r.createElement("pre", null, t))
              )
            : r.createElement(
                r.Suspense,
                {
                  fallback: r.createElement(a.a_, null, "Loading engine..."),
                },
                r.createElement(d, {
                  prefetcher: p,
                  clock: e.clock,
                  nav: e.nav,
                })
              );
        }
        const g = new s.Tn(),
          b = new i.SH(),
          w = document.getElementById("root");
        (0, o.s)(w).render(
          r.createElement(function () {
            return r.createElement(
              i.Ly.Provider,
              {
                value: b,
              },
              r.createElement(m, {
                clock: g,
                nav: b,
              })
            );
          }, null)
        );
      },
      5990: (e, t, n) => {
        async function r(e, t) {
          const n = await fetch(`/api/blueprints/${t}/${e}.gz`);
          if (200 === n.status) {
            const t = await n.blob(),
              r = new Uint8Array(await t.arrayBuffer());
            return (
              console.log(`Fetched Blueprint ${e}: ${r.byteLength} bytes`), r
            );
          }
          if (404 === n.status)
            return console.log(`Unable to find blueprint ${e}`), null;
          throw `error fetching Blueprint ${e}: ${await n.text()}`;
        }
        n.d(t, {
          D: () => r,
        });
      },
      5949: (e, t, n) => {
        n.d(t, {
          Tn: () => d,
          C2: () => _,
        });
        class r {
          epoch = Date.now() - Math.round(performance.now());
          now() {
            return this.fromTimeStamp(performance.now());
          }
          fromTimeStamp(e) {
            return this.epoch + Math.round(e);
          }
        }
        var o = n(5275),
          i = n(7200);
        var s;
        function a(e, t) {
          return new Promise((n, r) => {
            const o = i.Rd("/api/ws/clock"),
              a = new WebSocket(o);
            a.binaryType = "arraybuffer";
            let c = s.Unsent,
              l = e,
              u = e,
              d = Number.POSITIVE_INFINITY,
              f = Number.POSITIVE_INFINITY,
              _ = !1;
            a.addEventListener("open", (e) => {
              !(function e() {
                if (a.readyState === WebSocket.OPEN && l > 0) {
                  if (
                    0 === a.bufferedAmount &&
                    (c === s.Unsent || c === s.Received)
                  ) {
                    c === s.Unsent && (c = s.Sent), --l;
                    const e = t.now();
                    a.send(
                      (function (e) {
                        const t = new ArrayBuffer(8);
                        return (
                          new DataView(t).setBigInt64(
                            0,
                            BigInt(Math.round(e)),
                            !1
                          ),
                          t
                        );
                      })(e)
                    );
                  }
                  setTimeout(e, 10);
                }
              })();
            }),
              a.addEventListener("message", (e) => {
                try {
                  if (((c = s.Received), --u, !(e.data instanceof ArrayBuffer)))
                    throw new Error(
                      `Unable to parse clock message from server: ${e.data}`
                    );
                  const [r, o] = (function (e) {
                      const t = new DataView(e);
                      return [
                        Number(t.getBigInt64(0, false)),
                        Number(t.getBigInt64(8, false)),
                      ];
                    })(e.data),
                    i = t.now() - r;
                  (f = Math.min(f, i)),
                    (d = Math.min(d, o)),
                    0 === u &&
                      0 === l &&
                      (a.close(1e3),
                      n({
                        clientToServerDelta: d,
                        serverToClientDelta: f,
                      }),
                      (_ = !0));
                } catch (e) {
                  (_ = !0),
                    r(`Error handling clock message: ${e}`),
                    a.close(1003);
                }
              }),
              a.addEventListener("close", (e) => {
                _ || ((_ = !0), r("Clock socket closed unexpectedly"));
              }),
              a.addEventListener("error", (e) => {
                _ || ((_ = !0), r("Clock socket error"), a.close(1002));
              });
          });
        }
        !(function (e) {
          (e[(e.Unsent = 0)] = "Unsent"),
            (e[(e.Sent = 1)] = "Sent"),
            (e[(e.Received = 2)] = "Received");
        })(s || (s = {}));
        var c = n(7575);
        function l(e) {
          const { clientToServerDelta: t, serverToClientDelta: n } = e,
            r = (t - n) / 2;
          return {
            offset: r,
            lag: t - r,
          };
        }
        var u = n(6255);
        class d {
          systemClock = new r();
          adjustment = {
            offset: 0,
            lag: 0,
          };
          syncing = null;
          syncedUntil = 0;
          performanceNowEpoch = 0;
          async synchronize() {
            if (this.syncing) return await this.syncing.promise;
            const e = performance.now(),
              t = Date.now() - e;
            if (
              e < this.syncedUntil &&
              Math.abs(t - this.performanceNowEpoch) < 10
            )
              return;
            (this.syncedUntil = e + 36e5), (this.performanceNowEpoch = t);
            const n = (this.syncing = (0, o.Z)()),
              r = performance.now(),
              i = await (async function (e) {
                let t = 0;
                for (;;)
                  try {
                    const t = l(await a(25, e));
                    if (t.lag >= 1e3) {
                      console.log(
                        "Clock synchronization: Too laggy, trying again..."
                      ),
                        await (0, c.g)(5e3);
                      continue;
                    }
                    return t;
                  } catch (e) {
                    if (
                      (++t,
                      console.error("Clock synchronization error", e),
                      t > 5)
                    )
                      return {
                        offset: 0,
                        lag: 0,
                      };
                  }
              })(this.systemClock);
            this.adjustment = i;
            const s = performance.now() - r;
            console.log(
              `Clock offset=${i.offset}ms undirectionalLag=${i.lag}ms elapsed=${s}ms`
            ),
              n.resolve(),
              (this.syncing = null);
          }
          now() {
            return this.systemClock.now() + this.adjustment.offset;
          }
          fromTimeStamp(e) {
            return this.systemClock.fromTimeStamp(e) + this.adjustment.offset;
          }
          session(e) {
            return new f(this, e);
          }
        }
        class f {
          clock;
          epoch;
          constructor(e, t) {
            (this.clock = e), (this.epoch = t);
          }
          now() {
            return this.clock.now() - this.epoch;
          }
          fromTimeStamp(e) {
            return this.clock.fromTimeStamp(e) - this.epoch;
          }
          toAbsolute(e) {
            return this.epoch + e;
          }
        }
        class _ {
          globalClock;
          epoch;
          elapsed = 0;
          active = (0, u.cn)(!1);
          constructor(e) {
            (this.globalClock = e), (this.epoch = e.now());
          }
          now() {
            return this.fromTimeStamp(performance.now());
          }
          fromTimeStamp(e) {
            return this.active.get()
              ? this.elapsed + this.globalClock.fromTimeStamp(e) - this.epoch
              : this.elapsed;
          }
          seek(e) {
            (this.elapsed = e), (this.epoch = this.globalClock.now());
          }
          skip(e) {
            this.elapsed += e;
          }
          unpause() {
            (this.epoch = this.globalClock.now()), this.active.set(!0);
          }
          pause() {
            (this.elapsed = this.now()), this.active.set(!1);
          }
          toAbsolute(e) {
            return this.epoch - this.elapsed + e;
          }
        }
      },
      3868: (e, t, n) => {
        n.d(t, {
          hV: () => d,
          JL: () => c,
          Ly: () => i,
          SH: () => a,
          AO: () => u,
          tw: () => f,
        });
        var r = n(7294),
          o = n(6255);
        const i = r.createContext(null),
          s = /^[@a-z0-9]/;
        class a {
          freed = !1;
          prefix;
          gameTitle;
          page;
          onPopStateHandler = (e) => this.onPopState(e);
          constructor() {
            const { prefix: e, page: t } = (function (e) {
              const t = window.location.pathname.split("/");
              let n = 0;
              for (const e of t)
                if (0 === e.length) ++n;
                else {
                  if (!s.test(e)) break;
                  ++n;
                }
              let r =
                "/" +
                t
                  .splice(0, n)
                  .filter((e) => e.length > 0)
                  .join("/");
              return (
                r.endsWith("/") && (r = r.substring(0, r.length - 1)),
                {
                  prefix: r,
                  page: t.join("/"),
                }
              );
            })();
            (this.prefix = e),
              (this.page = (0, o.cn)(t)),
              (this.gameTitle = (function () {
                const e =
                  document.getElementById("Coruscate.Metadata")?.dataset
                    .gameTitle;
                return e && e.length > 0 ? e : null;
              })()),
              window.addEventListener("popstate", this.onPopStateHandler);
          }
          free() {
            this.freed ||
              ((this.freed = !0),
              window.removeEventListener("popstate", this.onPopStateHandler));
          }
          go(e) {
            e !== this.page.get() &&
              (console.log(`Path: ${e}`), this.page.set(e));
          }
          onPopState(e) {
            if ("string" == typeof e.state) {
              const t = this.parseScopedPath(e.state);
              this.go(t);
            }
          }
          parseScopedPath(e) {
            return e.startsWith("/") ? e.substring(1) : e;
          }
          updateUrlToScopedPath(e) {
            let t = this.prefix;
            e.startsWith("/") || (t += "/"),
              (t += e),
              window.location.pathname !== t &&
                window.history.pushState(e, null, t);
          }
          calculateHomeUrl() {
            return (
              window.location.protocol +
              "//" +
              window.location.host +
              this.prefix
            );
          }
        }
        function c(e) {
          const t = (0, r.useContext)(i),
            { path: n } = e;
          return (
            (0, r.useEffect)(() => {
              t.updateUrlToScopedPath(n);
            }, [t, n]),
            null
          );
        }
        var l = n(6336);
        function u() {
          return r.createElement(
            l.T3,
            null,
            r.createElement("h1", null, "Not Found"),
            r.createElement(
              "p",
              null,
              "It appears you have fallen into the infinite emptiness of the void."
            )
          );
        }
        const d = r.createContext(null),
          f = r.memo(function (e) {
            const t = (0, r.useContext)(i);
            let n = e.children ?? "";
            const o = (0, r.useContext)(d) ?? t.gameTitle;
            return (
              o &&
                o.length > 0 &&
                !e.noGame &&
                (n.length > 0 && (n += " • "), (n += o)),
              n.length > 0 && (n += " • "),
              (n += "Made with Easel"),
              (0, r.useEffect)(() => {
                document.title !== n && (document.title = n);
              }, [n]),
              null
            );
          });
      },
      7200: (e, t, n) => {
        let r, o, i, s, a;
        function c() {
          if (void 0 === o) {
            const e =
              document.getElementById("Coruscate.Metadata")?.dataset.portalHost;
            o = e && e.length > 0 ? e : null;
          }
          return o;
        }
        function l() {
          return (
            void 0 === r &&
              (r = (function () {
                let e = document.referrer;
                if (!(e && e.length > 0)) return !1;
                const t = c();
                if (!t) return !1;
                const n = e.match(/^(?:https?:\/\/)?([^\/]+)/);
                return !!n && n[1] === t;
              })()),
            r
          );
        }
        function u() {
          if (void 0 === s) {
            const e =
              document.getElementById("Coruscate.Metadata")?.dataset.baseHost;
            s = e && e.length > 0 ? e : null;
          }
          return s;
        }
        function d(e) {
          const t = window.location;
          return `${"https:" === t.protocol ? "wss:" : "ws:"}//${
            (function () {
              if (void 0 === i) {
                const e =
                  document.getElementById("Coruscate.Metadata")?.dataset
                    .directHost;
                i = e && e.length > 0 ? e : null;
              }
              return i;
            })() ?? t.host
          }${e}`;
        }
        function f(e = "") {
          const t = c();
          return t ? `${window.location.protocol}//${t}${e}` : null;
        }
        function _() {
          return (
            void 0 === a &&
              (a = window.location.hostname.endsWith("localhost")),
            a
          );
        }
        n.d(t, {
          MT: () => l,
          Rd: () => d,
          UO: () => u,
          al: () => f,
          bz: () => _,
        });
      },
      2104: (e, t, n) => {
        n.d(t, {
          i2: () => r,
          n0: () => c,
          P6: () => _,
        });
        class r {
          lookup = new Map();
          constructor(e) {
            for (const t of e) this.lookup.set(t.field, t.value);
          }
          applyChanges(e) {
            for (const t of e) this.lookup.set(t.field, t.value);
          }
          replace(e) {
            const t = new Map();
            for (const n of e) t.set(n.field, n.value);
            this.lookup = t;
          }
        }
        var o = n(9483),
          i = n.n(o),
          s = n(8555);
        const a = 131072;
        class c {
          storage;
          lookup = new Map();
          writer = Promise.resolve();
          constructor(e) {
            this.storage = i().createInstance({
              name: s.q,
              storeName: e,
            });
          }
          async load() {
            await this.storage.iterate((e, t) => {
              "string" == typeof e && this.lookup.set(t, e);
            });
            let e = 0;
            for (const [t, n] of this.lookup.entries())
              e += t.length + n.length;
            return (
              e > a &&
                (console.error(`Preferences exceed max size: ${e} > 131072`),
                this.lookup.clear()),
              this
            );
          }
          copyFrom(e) {
            for (const [t, n] of e.lookup.entries()) this.lookup.set(t, n);
            return this;
          }
          applyChanges(e) {
            for (const t of e) {
              const e = l(t.field, t.discriminators);
              if (void 0 === t.value)
                this.lookup.has(e) ||
                  (console.log(`Preference deleted: ${e}`),
                  this.lookup.delete(e),
                  (this.writer = this.writer.then(() =>
                    this.storage.removeItem(e)
                  )));
              else {
                const n = this.lookup.get(e),
                  r = d(t.value);
                n !== r &&
                  (r.length < a
                    ? (console.log(`Preference updated: ${e}=${r}`),
                      this.lookup.set(e, r),
                      (this.writer = this.writer.then(() =>
                        this.storage.setItem(e, r)
                      )))
                    : (console.log(`Preference exceeds max size: ${e}=${r}`),
                      this.lookup.delete(e),
                      (this.writer = this.writer.then(() =>
                        this.storage.removeItem(e)
                      ))));
              }
            }
          }
          replace(e) {
            const t = new Set(this.lookup.keys());
            for (const n of e) {
              const e = l(n.field, n.discriminators);
              if ((t.delete(e), void 0 === n.value))
                this.lookup.has(e) ||
                  (console.log(`Preference deleted: ${e}`),
                  this.lookup.delete(e),
                  (this.writer = this.writer.then(() =>
                    this.storage.removeItem(e)
                  )));
              else {
                const t = this.lookup.get(e),
                  r = d(n.value);
                t !== r &&
                  (r.length < a
                    ? (console.log(`Preference updated: ${e}=${r}`),
                      this.lookup.set(e, r),
                      (this.writer = this.writer.then(() =>
                        this.storage.setItem(e, r)
                      )))
                    : (console.log(`Preference exceeds max size: ${e}=${r}`),
                      this.lookup.delete(e),
                      (this.writer = this.writer.then(() =>
                        this.storage.removeItem(e)
                      ))));
              }
            }
            for (const e of t)
              console.log(`Preference deleted: ${e}`),
                this.lookup.delete(e),
                (this.writer = this.writer.then(() =>
                  this.storage.removeItem(e)
                ));
          }
          parseAll() {
            const e = this.lookup,
              t = new Array();
            for (const [n, r] of e.entries())
              try {
                const [e, o] = u(n);
                t.push({
                  field: e,
                  discriminators: o,
                  value: f(r),
                });
              } catch {}
            return t;
          }
        }
        function l(e, t) {
          return JSON.stringify([e, ...t]);
        }
        function u(e) {
          const t = JSON.parse(e);
          return [t.shift(), t];
        }
        function d(e) {
          return JSON.stringify(e);
        }
        function f(e) {
          return JSON.parse(e);
        }
        class _ {
          store;
          alreadyReapedThisSession = !1;
          constructor() {
            this.store = i().createInstance({
              name: s.q,
              storeName: "GamePreferenceStores",
            });
          }
          createTemporary(e) {
            const t = new c(e);
            return (
              this.register(e)
                .then(() => this.reap())
                .catch(console.error),
              t
            );
          }
          async register(e) {
            await this.store.setItem(e, Date.now() + 864e5);
          }
          async reap() {
            if (this.alreadyReapedThisSession) return;
            this.alreadyReapedThisSession = !0;
            const e = new Array();
            await this.store.iterate((t, n) => {
              (function (e) {
                return "number" != typeof e || Date.now() > e;
              })(t) && e.push(n);
            });
            for (const t of e)
              await i().dropInstance({
                name: s.q,
                storeName: t,
              }),
                await this.store.removeItem(t);
            e.length > 0 &&
              console.log(`Reaped ${e.length} game preference stores`);
          }
        }
      },
      6255: (e, t, n) => {
        n.d(t, {
          kF: () => o,
          YZ: () => r,
          j$: () => u,
          cn: () => s,
          KO: () => a,
          T6: () => f,
          ie: () => d,
          P1: () => l,
        });
        class r {
          event;
          listeners = new Array();
          constructor(e = null) {
            this.event = e;
          }
          clear() {
            this.listeners.length = 0;
          }
          on(e) {
            this.listeners.push(e);
          }
          off(e) {
            this.listeners = this.listeners.filter((t) => t !== e);
          }
          emit(...e) {
            for (const t of this.listeners)
              try {
                t(...e);
              } catch (e) {
                console.error(
                  `Error in event handler ${this.event ?? "(anonymous)"}`,
                  e
                );
              }
          }
        }
        class o {
          event;
          listeners = new Array();
          constructor(e = null) {
            this.event = e;
          }
          on(e) {
            this.listeners.push(e);
          }
          off(e) {
            this.listeners = this.listeners.filter((t) => t !== e);
          }
          async handle(...e) {
            for (const t of this.listeners)
              try {
                await t(...e);
              } catch (e) {
                console.error(
                  `Error in event handler ${this.event ?? "(anonymous)"}`,
                  e
                );
              }
          }
        }
        var i = n(7294);
        function s(e) {
          return new c(e);
        }
        function a(e) {
          return (0, i.useSyncExternalStore)(
            (t) => {
              if (e) return e.on(t), () => e.off(t);
            },
            () => e?.get()
          );
        }
        class c {
          value;
          onChanged = new r();
          constructor(e) {
            this.value = e;
          }
          get() {
            return this.value;
          }
          set(e) {
            if (e === this.value) return;
            const t = this.value;
            (this.value = e), this.onChanged.emit(e, t);
          }
          on(e) {
            this.onChanged.on(e);
          }
          off(e) {
            this.onChanged.off(e);
          }
          withDetacher(e) {
            return this.onChanged.on((t, n) => e(n)), this;
          }
        }
        function l(e, t) {
          return (0, i.useSyncExternalStore)(
            (n) => {
              if (t) return t.on(e, n), () => t.off(e, n);
            },
            () => t?.get(e)
          );
        }
        class u {
          lookup = new Map();
          listeners = new Map();
          get size() {
            return this.lookup.size;
          }
          entries() {
            return this.lookup.entries();
          }
          keys() {
            return this.lookup.keys();
          }
          values() {
            return this.lookup.values();
          }
          has(e) {
            return this.lookup.has(e);
          }
          get(e) {
            return this.lookup.get(e);
          }
          set(e, t) {
            const n = this.lookup.get(e);
            if (n === t) return;
            void 0 === t ? this.lookup.delete(e) : this.lookup.set(e, t);
            const r = this.listeners.get(e);
            if (r) for (const e of r) e(t, n);
            return n;
          }
          delete(e) {
            return this.set(e, void 0);
          }
          on(e, t) {
            let n = this.listeners.get(e);
            n || ((n = new Set()), this.listeners.set(e, n)), n.add(t);
          }
          off(e, t) {
            const n = this.listeners.get(e);
            n && n.delete(t) && 0 === n.size && this.listeners.delete(e);
          }
        }
        function d(e) {
          const t = (0, i.useRef)(null);
          return null === t.current && (t.current = e()), t.current;
        }
        function f(e, t) {
          const n = (0, i.useRef)(null);
          return (
            null === n.current && (n.current = e()),
            (0, i.useEffect)(
              () => () => {
                n.current && (t?.(n.current), (n.current = null));
              },
              []
            ),
            n.current
          );
        }
      },
      8555: (e, t, n) => {
        n.d(t, {
          F: () => o,
          q: () => r,
        });
        const r = "coruscate";
        class o {
          static PlayerName = "name";
          static CurrentAutoSaveSlot = "currentAutoSaveSlot";
        }
      },
      6336: (e, t, n) => {
        n.d(t, {
          Ct: () => o,
          zx: () => c,
          zP: () => f,
          Cv: () => b,
          mf: () => P,
          Ug: () => M,
          Ff: () => N,
          Q8: () => k,
          xW: () => L,
          R1: () => A,
          pO: () => O,
          lN: () => j,
          rU: () => y,
          wc: () => U,
          NB: () => B,
          gb: () => z,
          a_: () => W,
          u_: () => p,
          Ez: () => J,
          T3: () => T,
          s_: () => m,
          yR: () => q,
          h_: () => h,
          W: () => g,
          lL: () => F,
          LZ: () => R,
          X: () => H,
          o8: () => S,
          gC: () => Z,
          we: () => K,
          GF: () => C,
        });
        var r = n(7294);
        function o(e) {
          return r.createElement(
            "span",
            {
              className: "badge-parent",
            },
            e.children,
            r.createElement("i", {
              className: "badge fa-solid fa-circle",
            })
          );
        }
        var i = n(4184),
          s = n.n(i);
        function a(e) {
          switch (e) {
            case "primary":
              return "primary float-shadow";
            case "secondary":
              return "secondary float-shadow";
            case "tertiary":
              return "tertiary";
            default:
              return null;
          }
        }
        const c = r.forwardRef(function (e, t) {
            const n = s()(e.className, a(e.tier), {
                btn: !e.link,
                link: e.link,
                flat: e.flat,
                raised: e.raised,
                disabled: e.disabled,
              }),
              o = {
                ...e,
              };
            return (
              delete o.raised,
              delete o.tier,
              delete o.flat,
              delete o.link,
              delete o.submit,
              delete o.children,
              r.createElement(
                "button",
                {
                  ref: t,
                  ...o,
                  type: e.submit ? "submit" : "button",
                  className: n,
                },
                e.children
              )
            );
          }),
          l = r.createContext(
            (function (e = 100) {
              const t = new Array(e);
              for (let e = 0; e < t.length; ++e) {
                const n = 1 + 7 * Math.random(),
                  r = 1 + 1 * n;
                t[e] = {
                  left: 100 * Math.random(),
                  size: (2 / n) * (0.5 + 1 * Math.random()),
                  duration: r,
                  delay: -r * Math.random(),
                };
              }
              return t;
            })()
          ),
          u = r.memo(function () {
            const e = (0, r.useContext)(l),
              t = -performance.now() / 1e3;
            return r.createElement(
              "div",
              {
                className: "falling-bricks",
              },
              e.map((e, n) => {
                const o = {
                  left: e.left + "%",
                  width: e.size + "em",
                  height: e.size + "em",
                  animationDuration: e.duration + "s",
                  animationDelay: e.delay + t + "s",
                };
                return r.createElement("div", {
                  key: n,
                  className: "falling-brick",
                  style: o,
                });
              })
            );
          });
        var d = n(7200);
        function f(e) {
          return r.createElement(
            "a",
            {
              href: (0, d.al)(),
              target: "_blank",
              className: "easel-watermark",
            },
            r.createElement("img", {
              src: "/cdn/static/madeWithEasel.svg",
              className: "easel-watermark-logo",
              alt: "This game was made with Easel",
            })
          );
        }
        var _ = n(3935);
        function h(e) {
          return _.createPortal(e.children, document.body);
        }
        function p(e) {
          return r.createElement(
            h,
            null,
            r.createElement(
              "div",
              {
                className: s()("modal", e.containerClassName),
                onClick: () => e.onCancel?.(),
              },
              r.createElement("div", {
                className: "modal-mask",
              }),
              r.createElement(
                "div",
                {
                  className: "modal-parent",
                },
                r.createElement(
                  "div",
                  {
                    className: s()(e.className, "modal-content"),
                    style: e.style,
                  },
                  e.children
                )
              )
            )
          );
        }
        function m(e) {
          return r.createElement(
            "div",
            {
              ...e,
              className: s()("panel", "frame", "float-shadow", e.className),
            },
            e.children
          );
        }
        function g(e) {
          return r.createElement("textarea", {
            className: s()("readout-area", e.className),
            readOnly: !0,
            value: e.text,
          });
        }
        function b(e) {
          return r.createElement(
            p,
            {
              onCancel: e.onCancel,
            },
            r.createElement(
              m,
              {
                className: "error-modal-panel",
                onClick: (e) => e.stopPropagation(),
              },
              e.children,
              r.createElement(g, {
                className: "error-modal-text",
                text: e.error,
              })
            )
          );
        }
        var w = n(6486),
          v = n.n(w),
          x = n(3868);
        function y(e) {
          const t = (0, r.useContext)(x.Ly),
            n = s()(e.className, a(e.tier), {
              link: !e.noLinkClass,
              btn: e.btn,
            }),
            o = v().omit(e, [
              "btn",
              "tier",
              "className",
              "children",
              "noLinkClass",
              "path",
              "onClick",
            ]);
          return r.createElement(
            "a",
            {
              onClick: function (n) {
                const r = t.parseScopedPath(e.path);
                t.go(r), n.preventDefault(), e.onClick?.(n);
              },
              ...o,
              className: n,
              href: t.prefix + e.path,
            },
            e.children
          );
        }
        var E = n(6255);
        const k = r.createContext(null);
        function N(e) {
          const t = (0, r.useContext)(x.Ly),
            n = (0, r.useContext)(k),
            o = (0, E.KO)(t?.page);
          return (
            n ||
            ("" !== o
              ? r.createElement(
                  y,
                  {
                    path: "",
                    className: "btn flat",
                  },
                  r.createElement("i", {
                    className: "fa-solid fa-chevron-left",
                  }),
                  " Back"
                )
              : null)
          );
        }
        function S(e) {
          return r.createElement(
            "div",
            {
              ...e,
              className: s()(
                e.className,
                "toolbar",
                "hstack",
                "no-float-shadows"
              ),
            },
            e.children
          );
        }
        function C(e = !0) {
          (0, r.useEffect)(() => {
            if (e)
              return (
                document.body.classList.add("scrollable-page"),
                () => {
                  document.body.classList.remove("scrollable-page");
                }
              );
          }, [e]);
        }
        function T(e) {
          C();
          const t = s()(e.className, "page");
          return r.createElement(
            "div",
            {
              className: "page-container",
            },
            e.toolbar ?? r.createElement(S, null, r.createElement(N, null)),
            r.createElement(
              "div",
              {
                className: t,
              },
              e.children
            )
          );
        }
        function P(e) {
          return r.createElement(
            T,
            {
              className: "error-page",
              toolbar: e.toolbar,
            },
            e.children,
            r.createElement(g, {
              className: "error-page-text",
              text: e.error,
            })
          );
        }
        class I {
          elem;
        }
        const $ = r.createContext(new I());
        function A(e) {
          const t = (0, E.ie)(() => new I());
          return r.createElement(
            $.Provider,
            {
              value: t,
            },
            e.children
          );
        }
        const j = r.memo(function () {
            const e = (0, r.useContext)($);
            return e
              ? r.createElement("div", {
                  className: "hover-tip",
                  ref: (t) => {
                    e.elem = t;
                  },
                })
              : null;
          }),
          L = r.memo(function (e) {
            const t = (0, r.useContext)($);
            if (!t) return null;
            const n = t.elem;
            return n ? _.createPortal(e.children, n) : null;
          });
        function O(e) {
          const [t, n] = (0, r.useState)(!1);
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(c, {
              ...e,
              onPointerEnter: function (t) {
                n(!0), e.onPointerEnter?.(t);
              },
              onPointerLeave: function (t) {
                n(!1), e.onPointerEnter?.(t);
              },
            }),
            t && e.title && r.createElement(L, null, e.title)
          );
        }
        function M(e) {
          return r.createElement(
            "div",
            {
              ...e,
              className: s()(e.className, "hstack"),
            },
            e.children
          );
        }
        const B = r.forwardRef(function (e, t) {
            const n = s()(e.className, "listing");
            return r.createElement(
              "div",
              {
                ref: t,
                ...e,
                className: n,
              },
              e.children
            );
          }),
          U = r.forwardRef(function (e, t) {
            const n = s()(e.className, "listing-row");
            return r.createElement(
              "div",
              {
                ref: t,
                ...e,
                className: n,
              },
              e.children
            );
          });
        function z(e) {
          const t = s()(e.className, "loading");
          return r.createElement(
            "div",
            {
              className: t,
            },
            e.children
          );
        }
        function F(e) {
          const t = s()(e.className, "screen");
          return r.createElement(
            "div",
            {
              ...e,
              className: t,
            },
            e.children
          );
        }
        function R(e) {
          const t = {
            flexGrow: e.grow ?? 1,
          };
          return r.createElement("div", {
            className: "spacer",
            style: t,
          });
        }
        function W(e) {
          return r.createElement(
            F,
            {
              className: s()("loading-screen", e.className),
            },
            e.toolbar,
            r.createElement(R, null),
            r.createElement(u, null),
            r.createElement(f, null),
            r.createElement(z, null, e.children)
          );
        }
        function D() {
          return {
            width: document.body.clientWidth,
            height: document.body.clientHeight,
          };
        }
        const q = r.forwardRef((e, t) => {
          const { parent: n } = e;
          if (!n) return null;
          const [o, i] = (0, r.useState)(() => D()),
            a = n.getBoundingClientRect();
          (0, r.useEffect)(() => {
            const e = () => {
              r.startTransition(() => {
                i(D());
              });
            };
            return (
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
            (0, r.useEffect)(() => {}, []);
          const c = s()("popout", e.className),
            l = {
              ...e.style,
              ...e.anchor(a, o),
            },
            u = v().omit(e, [
              "parent",
              "className",
              "style",
              "anchor",
              "children",
            ]);
          return r.createElement(
            h,
            null,
            r.createElement(
              "div",
              {
                ref: t,
                ...u,
                className: c,
                style: l,
              },
              e.children
            )
          );
        });
        function H(e) {
          const [t, n] = (0, r.useState)(!1);
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(c, {
              ...e,
              onPointerEnter: () => n(!0),
              onPointerLeave: () => n(!1),
            }),
            t && e.title && r.createElement(L, null, e.title)
          );
        }
        function Z(e) {
          return r.createElement(
            "div",
            {
              ...e,
              className: s()(e.className, "vstack"),
            },
            e.children
          );
        }
        const Y = "✪";
        function J(e) {
          let t = null;
          return (
            e.verified
              ? (t = r.createElement(
                  "span",
                  {
                    title: "Verified username",
                  },
                  Y
                ))
              : e.bot && (t = r.createElement(Q, null)),
            r.createElement(
              "span",
              {
                className: s()("nametag", e.className),
                style: {
                  color: e.color,
                },
              },
              e.children,
              t
            )
          );
        }
        function K() {
          return r.createElement(
            "span",
            {
              title: "Verified username",
            },
            Y
          );
        }
        function Q() {
          return r.createElement(
            "span",
            {
              title: "Bot",
            },
            "⬗"
          );
        }
      },
      7575: (e, t, n) => {
        function r(e) {
          return new Promise((t) => setTimeout(t, e));
        }
        n.d(t, {
          g: () => r,
        });
      },
    },
    pt = {};

  //! mt is require
  function mt(e) {
    var t = pt[e];
    if (void 0 !== t) return t.exports;
    var n = (pt[e] = {
      id: e,
      loaded: !1,
      exports: {},
    });
    return ht[e].call(n.exports, n, n.exports, mt), (n.loaded = !0), n.exports;
  }
  (mt.m = ht),
    (mt.c = pt),
    (e = []),
    (mt.O = (t, n, r, o) => {
      if (!n) {
        var i = 1 / 0;
        for (l = 0; l < e.length; l++) {
          for (var [n, r, o] = e[l], s = !0, a = 0; a < n.length; a++)
            (!1 & o || i >= o) && Object.keys(mt.O).every((e) => mt.O[e](n[a]))
              ? n.splice(a--, 1)
              : ((s = !1), o < i && (i = o));
          if (s) {
            e.splice(l--, 1);
            var c = r();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      o = o || 0;
      for (var l = e.length; l > 0 && e[l - 1][2] > o; l--) e[l] = e[l - 1];
      e[l] = [n, r, o];
    }),
    (mt.F = {}),
    (mt.E = (e) => {
      Object.keys(mt.F).map((t) => {
        mt.F[t](e);
      });
    }),
    (mt.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return (
        mt.d(t, {
          a: t,
        }),
        t
      );
    }),
    (mt.d = (e, t) => {
      for (var n in t)
        mt.o(t, n) &&
          !mt.o(e, n) &&
          Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n],
          });
    }),
    (mt.f = {}),
    (mt.e = (e) =>
      Promise.all(Object.keys(mt.f).reduce((t, n) => (mt.f[n](e, t), t), []))),
    (mt.u = (e) =>
      e +
      "." +
      {
        108: "9da1bfb8dff9ebd08c79",
        743: "bb8f307a067ef56269c9",
      }[e] +
      ".js"),
    (mt.miniCssF = (e) =>
      e +
      "." +
      {
        108: "83ebe4c23813a48377f7",
        743: "d45bad78675474bde6c3",
      }[e] +
      ".css"),
    (mt.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (mt.hmd = (e) => (
      (e = Object.create(e)).children || (e.children = []),
      Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
          throw new Error(
            "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
              e.id
          );
        },
      }),
      e
    )),
    (mt.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (t = {}),
    (n = "coruscate:"),
    (mt.l = (e, r, o, i) => {
      if (t[e]) t[e].push(r);
      else {
        var s, a;
        if (void 0 !== o)
          for (
            var c = document.getElementsByTagName("script"), l = 0;
            l < c.length;
            l++
          ) {
            var u = c[l];
            if (
              u.getAttribute("src") == e ||
              u.getAttribute("data-webpack") == n + o
            ) {
              s = u;
              break;
            }
          }
        s ||
          ((a = !0),
          ((s = document.createElement("script")).charset = "utf-8"),
          (s.timeout = 120),
          mt.nc && s.setAttribute("nonce", mt.nc),
          s.setAttribute("data-webpack", n + o),
          (s.src = e)),
          (t[e] = [r]);
        var d = (n, r) => {
            (s.onerror = s.onload = null), clearTimeout(f);
            var o = t[e];
            if (
              (delete t[e],
              s.parentNode && s.parentNode.removeChild(s),
              o && o.forEach((e) => e(r)),
              n)
            )
              return n(r);
          },
          f = setTimeout(
            d.bind(null, void 0, {
              type: "timeout",
              target: s,
            }),
            12e4
          );
        (s.onerror = d.bind(null, s.onerror)),
          (s.onload = d.bind(null, s.onload)),
          a && document.head.appendChild(s);
      }
    }),
    (mt.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(e, "__esModule", {
          value: !0,
        });
    }),
    (mt.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e;
      mt.g.importScripts && (e = mt.g.location + "");
      var t = mt.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        if (n.length) for (var r = n.length - 1; r > -1 && !e; ) e = n[r--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (mt.p = e);
    })(),
    (() => {
      if ("undefined" != typeof document) {
        var e = {
          47: 0,
        };
        mt.f.miniCss = (t, n) => {
          e[t]
            ? n.push(e[t])
            : 0 !== e[t] &&
              {
                108: 1,
                743: 1,
              }[t] &&
              n.push(
                (e[t] = ((e) =>
                  new Promise((t, n) => {
                    var r = mt.miniCssF(e),
                      o = mt.p + r;
                    if (
                      ((e, t) => {
                        for (
                          var n = document.getElementsByTagName("link"), r = 0;
                          r < n.length;
                          r++
                        ) {
                          var o =
                            (s = n[r]).getAttribute("data-href") ||
                            s.getAttribute("href");
                          if ("stylesheet" === s.rel && (o === e || o === t))
                            return s;
                        }
                        var i = document.getElementsByTagName("style");
                        for (r = 0; r < i.length; r++) {
                          var s;
                          if (
                            (o = (s = i[r]).getAttribute("data-href")) === e ||
                            o === t
                          )
                            return s;
                        }
                      })(r, o)
                    )
                      return t();
                    ((e, t, n, r, o) => {
                      var i = document.createElement("link");
                      (i.rel = "stylesheet"),
                        (i.type = "text/css"),
                        (i.onerror = i.onload =
                          (n) => {
                            if (
                              ((i.onerror = i.onload = null), "load" === n.type)
                            )
                              r();
                            else {
                              var s =
                                  n && ("load" === n.type ? "missing" : n.type),
                                a = (n && n.target && n.target.href) || t,
                                c = new Error(
                                  "Loading CSS chunk " +
                                    e +
                                    " failed.\n(" +
                                    a +
                                    ")"
                                );
                              (c.code = "CSS_CHUNK_LOAD_FAILED"),
                                (c.type = s),
                                (c.request = a),
                                i.parentNode.removeChild(i),
                                o(c);
                            }
                          }),
                        (i.href = t),
                        document.head.appendChild(i);
                    })(e, o, 0, t, n);
                  }))(t).then(
                  () => {
                    e[t] = 0;
                  },
                  (n) => {
                    throw (delete e[t], n);
                  }
                ))
              );
        };
      }
    })(),
    (() => {
      var e = {
        47: 0,
      };
      (mt.f.j = (t, n) => {
        var r = mt.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else {
            var o = new Promise((n, o) => (r = e[t] = [n, o]));
            n.push((r[2] = o));
            var i = mt.p + mt.u(t),
              s = new Error();
            mt.l(
              i,
              (n) => {
                if (mt.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var o = n && ("load" === n.type ? "missing" : n.type),
                    i = n && n.target && n.target.src;
                  (s.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = o),
                    (s.request = i),
                    r[1](s);
                }
              },
              "chunk-" + t,
              t
            );
          }
      }),
        (mt.F.j = (t) => {
          if (!mt.o(e, t) || void 0 === e[t]) {
            e[t] = null;
            var n = document.createElement("link");
            mt.nc && n.setAttribute("nonce", mt.nc),
              (n.rel = "prefetch"),
              (n.as = "script"),
              (n.href = mt.p + mt.u(t)),
              document.head.appendChild(n);
          }
        }),
        (mt.O.j = (t) => 0 === e[t]);
      var t = (t, n) => {
          var r,
            o,
            [i, s, a] = n,
            c = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (r in s) mt.o(s, r) && (mt.m[r] = s[r]);
            if (a) var l = a(mt);
          }
          for (t && t(n); c < i.length; c++)
            (o = i[c]), mt.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return mt.O(l);
        },
        n = (self.webpackChunkcoruscate = self.webpackChunkcoruscate || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })(),
    (dt = {}),
    (ft = {
      engine: function () {
        return {
          "./engine_bg.js": {
            __wbindgen_error_new: function (e, t) {
              return void 0 === r && (r = mt.c[5151].exports), r.hd(e, t);
            },
            __wbindgen_object_drop_ref: function (e) {
              return void 0 === o && (o = mt.c[5151].exports), o.ug(e);
            },
            __wbindgen_string_new: function (e, t) {
              return void 0 === i && (i = mt.c[5151].exports), i.h4(e, t);
            },
            __wbindgen_number_get: function (e, t) {
              return void 0 === s && (s = mt.c[5151].exports), s.M1(e, t);
            },
            __wbindgen_boolean_get: function (e) {
              return void 0 === a && (a = mt.c[5151].exports), a.HT(e);
            },
            __wbindgen_string_get: function (e, t) {
              return void 0 === c && (c = mt.c[5151].exports), c.qt(e, t);
            },
            __wbindgen_is_string: function (e) {
              return void 0 === l && (l = mt.c[5151].exports), l.eY(e);
            },
            __wbindgen_is_object: function (e) {
              return void 0 === u && (u = mt.c[5151].exports), u.Wl(e);
            },
            __wbindgen_is_undefined: function (e) {
              return void 0 === d && (d = mt.c[5151].exports), d.XP(e);
            },
            __wbindgen_in: function (e, t) {
              return void 0 === f && (f = mt.c[5151].exports), f.yb(e, t);
            },
            __wbindgen_is_bigint: function (e) {
              return void 0 === _ && (_ = mt.c[5151].exports), _.fW(e);
            },
            __wbindgen_bigint_from_i64: function (e) {
              return void 0 === h && (h = mt.c[5151].exports), h.WD(e);
            },
            __wbindgen_jsval_eq: function (e, t) {
              return void 0 === p && (p = mt.c[5151].exports), p.Yq(e, t);
            },
            __wbindgen_bigint_from_u64: function (e) {
              return void 0 === m && (m = mt.c[5151].exports), m.Kx(e);
            },
            __wbindgen_number_new: function (e) {
              return void 0 === g && (g = mt.c[5151].exports), g.pT(e);
            },
            __wbindgen_as_number: function (e) {
              return void 0 === b && (b = mt.c[5151].exports), b.d(e);
            },
            __wbindgen_object_clone_ref: function (e) {
              return void 0 === w && (w = mt.c[5151].exports), w.m_(e);
            },
            __wbg_debug_b6964170b3e87b13: function (e, t, n, r) {
              return void 0 === v && (v = mt.c[5151].exports), v.$K(e, t, n, r);
            },
            __wbg_error_0aa52a01e6e7818f: function (e) {
              return void 0 === x && (x = mt.c[5151].exports), x.n_(e);
            },
            __wbg_error_e5dc0d8246d4270a: function (e, t, n, r) {
              return void 0 === y && (y = mt.c[5151].exports), y.o1(e, t, n, r);
            },
            __wbg_info_e19142e7f34f3101: function (e, t, n, r) {
              return void 0 === E && (E = mt.c[5151].exports), E.Qs(e, t, n, r);
            },
            __wbg_log_8ebee8c18566458b: function (e, t, n, r) {
              return void 0 === k && (k = mt.c[5151].exports), k.Tv(e, t, n, r);
            },
            __wbg_warn_c2df9e71b9d2797a: function (e, t, n, r) {
              return void 0 === N && (N = mt.c[5151].exports), N.Oj(e, t, n, r);
            },
            __wbg_new_8a6f238a6ece86ea: function () {
              return void 0 === S && (S = mt.c[5151].exports), S.Qr();
            },
            __wbg_stack_0ed75d68575b0f3c: function (e, t) {
              return void 0 === C && (C = mt.c[5151].exports), C.MX(e, t);
            },
            __wbg_error_7534b8e9a36f1ab4: function (e, t) {
              return void 0 === T && (T = mt.c[5151].exports), T.L(e, t);
            },
            __wbindgen_jsval_loose_eq: function (e, t) {
              return void 0 === P && (P = mt.c[5151].exports), P.Zj(e, t);
            },
            __wbg_getwithrefkey_1dc361bd10053bfe: function (e, t) {
              return void 0 === I && (I = mt.c[5151].exports), I.QP(e, t);
            },
            __wbg_set_3f1d0b984ed272ed: function (e, t, n) {
              return void 0 === $ && ($ = mt.c[5151].exports), $.S5(e, t, n);
            },
            __wbg_String_8f0eb39a4a4c2f66: function (e, t) {
              return void 0 === A && (A = mt.c[5151].exports), A.K_(e, t);
            },
            __wbg_get_142c69a0a38ca3a9: function (e, t) {
              return void 0 === j && (j = mt.c[5151].exports), j.sB(e, t);
            },
            __wbg_length_1799fd5bf657c257: function (e) {
              return void 0 === L && (L = mt.c[5151].exports), L.h2(e);
            },
            __wbg_new_9163745409122fa8: function () {
              return void 0 === O && (O = mt.c[5151].exports), O.Tg();
            },
            __wbindgen_is_function: function (e) {
              return void 0 === M && (M = mt.c[5151].exports), M.o$(e);
            },
            __wbg_new_f26c4aa30e9f9c0e: function () {
              return void 0 === B && (B = mt.c[5151].exports), B.wn();
            },
            __wbg_next_6a72514087dd23f8: function (e) {
              return void 0 === U && (U = mt.c[5151].exports), U.tq(e);
            },
            __wbg_next_96ab50690a8f6cca: function (e) {
              return void 0 === z && (z = mt.c[5151].exports), z.TZ(e);
            },
            __wbg_done_b00ac79b7cf688ec: function (e) {
              return void 0 === F && (F = mt.c[5151].exports), F.Sv(e);
            },
            __wbg_value_5af0abb3b2b9f90b: function (e) {
              return void 0 === R && (R = mt.c[5151].exports), R.wg(e);
            },
            __wbg_iterator_c397425a538e3b86: function () {
              return void 0 === W && (W = mt.c[5151].exports), W.PQ();
            },
            __wbg_get_9528546d1b415178: function (e, t) {
              return void 0 === D && (D = mt.c[5151].exports), D.k(e, t);
            },
            __wbg_call_aa20ca83b389253c: function (e, t) {
              return void 0 === q && (q = mt.c[5151].exports), q.UM(e, t);
            },
            __wbg_new_d684b6b3189ca362: function () {
              return void 0 === H && (H = mt.c[5151].exports), H.Eo();
            },
            __wbg_set_61aa9ab41a0fb137: function (e, t, n) {
              return void 0 === Z && (Z = mt.c[5151].exports), Z.zJ(e, t, n);
            },
            __wbg_from_a024abd64978c640: function (e) {
              return void 0 === Y && (Y = mt.c[5151].exports), Y.Us(e);
            },
            __wbg_isArray_643b5b2b3afb0871: function (e) {
              return void 0 === J && (J = mt.c[5151].exports), J.mr(e);
            },
            __wbg_instanceof_ArrayBuffer_b19b33ccadb20395: function (e) {
              return void 0 === K && (K = mt.c[5151].exports), K.qy(e);
            },
            __wbg_set_b000a869769fbb80: function (e, t, n) {
              return void 0 === Q && (Q = mt.c[5151].exports), Q.YZ(e, t, n);
            },
            __wbg_isSafeInteger_1c660d27c689f62a: function (e) {
              return void 0 === V && (V = mt.c[5151].exports), V.wZ(e);
            },
            __wbg_entries_2aaa882d15c26fd0: function (e) {
              return void 0 === X && (X = mt.c[5151].exports), X.BJ(e);
            },
            __wbg_buffer_a215fd0f9dbb5414: function (e) {
              return void 0 === G && (G = mt.c[5151].exports), G.cA(e);
            },
            __wbg_newwithbyteoffsetandlength_6347c118a44fdb35: function (
              e,
              t,
              n
            ) {
              return void 0 === ee && (ee = mt.c[5151].exports), ee.Uu(e, t, n);
            },
            __wbg_new_b6f51e9f591d0d1d: function (e) {
              return void 0 === te && (te = mt.c[5151].exports), te.fU(e);
            },
            __wbg_set_911a2f3ee8dd23b5: function (e, t, n) {
              return void 0 === ne && (ne = mt.c[5151].exports), ne.Nm(e, t, n);
            },
            __wbg_length_621925723fc28f40: function (e) {
              return void 0 === re && (re = mt.c[5151].exports), re.LE(e);
            },
            __wbg_instanceof_Uint8Array_ee46a70987a1d66b: function (e) {
              return void 0 === oe && (oe = mt.c[5151].exports), oe.F(e);
            },
            __wbindgen_bigint_get_as_i64: function (e, t) {
              return void 0 === ie && (ie = mt.c[5151].exports), ie.zn(e, t);
            },
            __wbindgen_debug_string: function (e, t) {
              return void 0 === se && (se = mt.c[5151].exports), se.fY(e, t);
            },
            __wbindgen_throw: function (e, t) {
              return void 0 === ae && (ae = mt.c[5151].exports), ae.Or(e, t);
            },
            __wbindgen_memory: function () {
              return void 0 === ce && (ce = mt.c[5151].exports), ce.oH();
            },
          },
        };
      },
      // compiler bindgen functions
      compiler: function () {
        return {
          "./compiler_bg.js": {
            __wbindgen_object_drop_ref: function (e) {
              return void 0 === le && (le = mt.c[2024].exports), le.ug(e);
            },
            __wbindgen_is_string: function (e) {
              return void 0 === ue && (ue = mt.c[2024].exports), ue.eY(e);
            },
            __wbindgen_error_new: function (e, t) {
              return void 0 === de && (de = mt.c[2024].exports), de.hd(e, t);
            },
            __wbindgen_string_get: function (e, t) {
              return void 0 === fe && (fe = mt.c[2024].exports), fe.qt(e, t);
            },
            __wbindgen_is_object: function (e) {
              return void 0 === _e && (_e = mt.c[2024].exports), _e.Wl(e);
            },
            __wbindgen_is_undefined: function (e) {
              return void 0 === he && (he = mt.c[2024].exports), he.XP(e);
            },
            __wbindgen_in: function (e, t) {
              return void 0 === pe && (pe = mt.c[2024].exports), pe.yb(e, t);
            },
            __wbindgen_string_new: function (e, t) {
              return void 0 === me && (me = mt.c[2024].exports), me.h4(e, t);
            },
            __wbg_debug_b6964170b3e87b13: function (e, t, n, r) {
              return (
                void 0 === ge && (ge = mt.c[2024].exports), ge.$K(e, t, n, r)
              );
            },
            __wbg_error_0aa52a01e6e7818f: function (e) {
              return void 0 === be && (be = mt.c[2024].exports), be.n_(e);
            },
            __wbg_error_e5dc0d8246d4270a: function (e, t, n, r) {
              return (
                void 0 === we && (we = mt.c[2024].exports), we.o1(e, t, n, r)
              );
            },
            __wbg_info_e19142e7f34f3101: function (e, t, n, r) {
              return (
                void 0 === ve && (ve = mt.c[2024].exports), ve.Qs(e, t, n, r)
              );
            },
            __wbg_log_8ebee8c18566458b: function (e, t, n, r) {
              return (
                void 0 === xe && (xe = mt.c[2024].exports), xe.Tv(e, t, n, r)
              );
            },
            __wbg_warn_c2df9e71b9d2797a: function (e, t, n, r) {
              return (
                void 0 === ye && (ye = mt.c[2024].exports), ye.Oj(e, t, n, r)
              );
            },
            __wbg_new_8a6f238a6ece86ea: function () {
              return void 0 === Ee && (Ee = mt.c[2024].exports), Ee.Qr();
            },
            __wbg_stack_0ed75d68575b0f3c: function (e, t) {
              return void 0 === ke && (ke = mt.c[2024].exports), ke.MX(e, t);
            },
            __wbg_error_7534b8e9a36f1ab4: function (e, t) {
              return void 0 === Ne && (Ne = mt.c[2024].exports), Ne.L(e, t);
            },
            __wbindgen_jsval_loose_eq: function (e, t) {
              return void 0 === Se && (Se = mt.c[2024].exports), Se.Zj(e, t);
            },
            __wbindgen_boolean_get: function (e) {
              return void 0 === Ce && (Ce = mt.c[2024].exports), Ce.HT(e);
            },
            __wbindgen_number_get: function (e, t) {
              return void 0 === Te && (Te = mt.c[2024].exports), Te.M1(e, t);
            },
            __wbindgen_as_number: function (e) {
              return void 0 === Pe && (Pe = mt.c[2024].exports), Pe.d(e);
            },
            __wbg_getwithrefkey_1dc361bd10053bfe: function (e, t) {
              return void 0 === Ie && (Ie = mt.c[2024].exports), Ie.QP(e, t);
            },
            __wbg_set_3f1d0b984ed272ed: function (e, t, n) {
              return void 0 === $e && ($e = mt.c[2024].exports), $e.S5(e, t, n);
            },
            __wbindgen_object_clone_ref: function (e) {
              return void 0 === Ae && (Ae = mt.c[2024].exports), Ae.m_(e);
            },
            __wbg_String_8f0eb39a4a4c2f66: function (e, t) {
              return void 0 === je && (je = mt.c[2024].exports), je.K_(e, t);
            },
            __wbg_get_142c69a0a38ca3a9: function (e, t) {
              return void 0 === Le && (Le = mt.c[2024].exports), Le.sB(e, t);
            },
            __wbg_length_1799fd5bf657c257: function (e) {
              return void 0 === Oe && (Oe = mt.c[2024].exports), Oe.h2(e);
            },
            __wbg_new_9163745409122fa8: function () {
              return void 0 === Me && (Me = mt.c[2024].exports), Me.Tg();
            },
            __wbindgen_is_function: function (e) {
              return void 0 === Be && (Be = mt.c[2024].exports), Be.o$(e);
            },
            __wbg_new_f26c4aa30e9f9c0e: function () {
              return void 0 === Ue && (Ue = mt.c[2024].exports), Ue.wn();
            },
            __wbg_next_6a72514087dd23f8: function (e) {
              return void 0 === ze && (ze = mt.c[2024].exports), ze.tq(e);
            },
            __wbg_next_96ab50690a8f6cca: function (e) {
              return void 0 === Fe && (Fe = mt.c[2024].exports), Fe.TZ(e);
            },
            __wbg_done_b00ac79b7cf688ec: function (e) {
              return void 0 === Re && (Re = mt.c[2024].exports), Re.Sv(e);
            },
            __wbg_value_5af0abb3b2b9f90b: function (e) {
              return void 0 === We && (We = mt.c[2024].exports), We.dU(e);
            },
            __wbg_iterator_c397425a538e3b86: function () {
              return void 0 === De && (De = mt.c[2024].exports), De.PQ();
            },
            __wbg_get_9528546d1b415178: function (e, t) {
              return void 0 === qe && (qe = mt.c[2024].exports), qe.k(e, t);
            },
            __wbg_call_aa20ca83b389253c: function (e, t) {
              return void 0 === He && (He = mt.c[2024].exports), He.UM(e, t);
            },
            __wbg_new_d684b6b3189ca362: function () {
              return void 0 === Ze && (Ze = mt.c[2024].exports), Ze.Eo();
            },
            __wbg_set_61aa9ab41a0fb137: function (e, t, n) {
              return void 0 === Ye && (Ye = mt.c[2024].exports), Ye.zJ(e, t, n);
            },
            __wbg_from_a024abd64978c640: function (e) {
              return void 0 === Je && (Je = mt.c[2024].exports), Je.Us(e);
            },
            __wbg_isArray_643b5b2b3afb0871: function (e) {
              return void 0 === Ke && (Ke = mt.c[2024].exports), Ke.mr(e);
            },
            __wbg_instanceof_ArrayBuffer_b19b33ccadb20395: function (e) {
              return void 0 === Qe && (Qe = mt.c[2024].exports), Qe.qy(e);
            },
            __wbg_set_b000a869769fbb80: function (e, t, n) {
              return void 0 === Ve && (Ve = mt.c[2024].exports), Ve.YZ(e, t, n);
            },
            __wbg_isSafeInteger_1c660d27c689f62a: function (e) {
              return void 0 === Xe && (Xe = mt.c[2024].exports), Xe.wZ(e);
            },
            __wbg_getTime_6581c5b2b6fa5cd7: function (e) {
              return void 0 === Ge && (Ge = mt.c[2024].exports), Ge.ud(e);
            },
            __wbg_new0_d1ce931f26a22f53: function () {
              return void 0 === et && (et = mt.c[2024].exports), et.wg();
            },
            __wbg_entries_2aaa882d15c26fd0: function (e) {
              return void 0 === tt && (tt = mt.c[2024].exports), tt.BJ(e);
            },
            __wbg_buffer_a215fd0f9dbb5414: function (e) {
              return void 0 === nt && (nt = mt.c[2024].exports), nt.cA(e);
            },
            __wbg_newwithbyteoffsetandlength_6347c118a44fdb35: function (
              e,
              t,
              n
            ) {
              return void 0 === rt && (rt = mt.c[2024].exports), rt.Uu(e, t, n);
            },
            __wbg_new_b6f51e9f591d0d1d: function (e) {
              return void 0 === ot && (ot = mt.c[2024].exports), ot.fU(e);
            },
            __wbg_set_911a2f3ee8dd23b5: function (e, t, n) {
              return void 0 === it && (it = mt.c[2024].exports), it.Nm(e, t, n);
            },
            __wbg_length_621925723fc28f40: function (e) {
              return void 0 === st && (st = mt.c[2024].exports), st.LE(e);
            },
            __wbg_instanceof_Uint8Array_ee46a70987a1d66b: function (e) {
              return void 0 === at && (at = mt.c[2024].exports), at.F(e);
            },
            __wbindgen_debug_string: function (e, t) {
              return void 0 === ct && (ct = mt.c[2024].exports), ct.fY(e, t);
            },
            __wbindgen_throw: function (e, t) {
              return void 0 === lt && (lt = mt.c[2024].exports), lt.Or(e, t);
            },
            __wbindgen_memory: function () {
              return void 0 === ut && (ut = mt.c[2024].exports), ut.oH();
            },
          },
        };
      },
    }),
    (_t = {
      108: ["compiler"],
      743: ["engine"],
    }),
    (mt.w = {}),
    (mt.f.wasm = function (e, t) {
      (_t[e] || []).forEach(function (n, r) {
        var o = dt[n];
        if (o) t.push(o);
        else {
          // compiler and engine hashes
          var i,
            s = ft[n](),
            a = fetch(
              mt.p +
                "" +
                (n + "").replace(/(^[.-]|[^a-zA-Z0-9_-])+/g, "_") +
                "." +
                {
                  108: {
                    compiler: "d5cd3a01c799934dd803",
                  },
                  743: {
                    engine: "47d336ad310b6ed867ba",
                  },
                }[e][n] +
                ".wasm"
            );
          (i =
            s &&
            "function" == typeof s.then &&
            "function" == typeof WebAssembly.compileStreaming
              ? Promise.all([WebAssembly.compileStreaming(a), s]).then(
                  function (e) {
                    return WebAssembly.instantiate(e[0], e[1]);
                  }
                )
              : "function" == typeof WebAssembly.instantiateStreaming
              ? WebAssembly.instantiateStreaming(a, s)
              : a
                  .then(function (e) {
                    return e.arrayBuffer();
                  })
                  .then(function (e) {
                    return WebAssembly.instantiate(e, s);
                  })),
            t.push(
              (dt[n] = i.then(function (e) {
                return (mt.w[n] = (e.instance || e).exports);
              }))
            );
        }
      });
    }),
    mt.O(
      0,
      [47],
      () => {
        mt.E(736), mt.E(743);
      },
      5
    );
  var gt = mt.O(void 0, [736], () => mt(4161));
  gt = mt.O(gt);
})();
