var Lh = Object.defineProperty;
var bl = e => {
    throw TypeError(e)
}
;
var Bh = (e, t, n) => t in e ? Lh(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var Qn = (e, t, n) => Bh(e, typeof t != "symbol" ? t + "" : t, n)
  , Nh = (e, t, n) => t.has(e) || bl("Cannot " + n);
var Or = (e, t, n) => (Nh(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , Dr = (e, t, n) => t.has(e) ? bl("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n);
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        r(s);
    new MutationObserver(s => {
        for (const o of s)
            if (o.type === "childList")
                for (const a of o.addedNodes)
                    a.tagName === "LINK" && a.rel === "modulepreload" && r(a)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(s) {
        const o = {};
        return s.integrity && (o.integrity = s.integrity),
        s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials" ? o.credentials = "include" : s.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const o = n(s);
        fetch(s.href, o)
    }
}
)();
/**
* @vue/shared v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ki(e) {
    const t = Object.create(null);
    for (const n of e.split(","))
        t[n] = 1;
    return n => n in t
}
const Ce = {}
  , ar = []
  , Ft = () => {}
  , $u = () => !1
  , vo = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
  , bo = e => e.startsWith("onUpdate:")
  , ze = Object.assign
  , _i = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , Hh = Object.prototype.hasOwnProperty
  , Ae = (e, t) => Hh.call(e, t)
  , ie = Array.isArray
  , ir = e => cs(e) === "[object Map]"
  , Au = e => cs(e) === "[object Set]"
  , wl = e => cs(e) === "[object Date]"
  , de = e => typeof e == "function"
  , Ie = e => typeof e == "string"
  , yt = e => typeof e == "symbol"
  , De = e => e !== null && typeof e == "object"
  , Ou = e => (De(e) || de(e)) && de(e.then) && de(e.catch)
  , Du = Object.prototype.toString
  , cs = e => Du.call(e)
  , jh = e => cs(e).slice(8, -1)
  , Eu = e => cs(e) === "[object Object]"
  , wo = e => Ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , jr = ki(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , xo = e => {
    const t = Object.create(null);
    return (n => t[n] || (t[n] = e(n)))
}
  , Vh = /-\w/g
  , We = xo(e => e.replace(Vh, t => t.slice(1).toUpperCase()))
  , Wh = /\B([A-Z])/g
  , un = xo(e => e.replace(Wh, "-$1").toLowerCase())
  , ko = xo(e => e.charAt(0).toUpperCase() + e.slice(1))
  , Vr = xo(e => e ? `on${ko(e)}` : "")
  , Qe = (e, t) => !Object.is(e, t)
  , qs = (e, ...t) => {
    for (let n = 0; n < e.length; n++)
        e[n](...t)
}
  , Pu = (e, t, n, r=!1) => {
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        writable: r,
        value: n
    })
}
  , Ci = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
;
let xl;
const _o = () => xl || (xl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function _t(e) {
    if (ie(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n]
              , s = Ie(r) ? Kh(r) : _t(r);
            if (s)
                for (const o in s)
                    t[o] = s[o]
        }
        return t
    } else if (Ie(e) || De(e))
        return e
}
const zh = /;(?![^(]*\))/g
  , Uh = /:([^]+)/
  , Gh = /\/\*[^]*?\*\//g;
function Kh(e) {
    const t = {};
    return e.replace(Gh, "").split(zh).forEach(n => {
        if (n) {
            const r = n.split(Uh);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }
    ),
    t
}
function Ee(e) {
    let t = "";
    if (Ie(e))
        t = e;
    else if (ie(e))
        for (let n = 0; n < e.length; n++) {
            const r = Ee(e[n]);
            r && (t += r + " ")
        }
    else if (De(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
function He(e) {
    if (!e)
        return null;
    let {class: t, style: n} = e;
    return t && !Ie(t) && (e.class = Ee(t)),
    n && (e.style = _t(n)),
    e
}
const Yh = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , Jh = ki(Yh);
function Mu(e) {
    return !!e || e === ""
}
function Qh(e, t) {
    if (e.length !== t.length)
        return !1;
    let n = !0;
    for (let r = 0; n && r < e.length; r++)
        n = Si(e[r], t[r]);
    return n
}
function Si(e, t) {
    if (e === t)
        return !0;
    let n = wl(e)
      , r = wl(t);
    if (n || r)
        return n && r ? e.getTime() === t.getTime() : !1;
    if (n = yt(e),
    r = yt(t),
    n || r)
        return e === t;
    if (n = ie(e),
    r = ie(t),
    n || r)
        return n && r ? Qh(e, t) : !1;
    if (n = De(e),
    r = De(t),
    n || r) {
        if (!n || !r)
            return !1;
        const s = Object.keys(e).length
          , o = Object.keys(t).length;
        if (s !== o)
            return !1;
        for (const a in e) {
            const i = e.hasOwnProperty(a)
              , l = t.hasOwnProperty(a);
            if (i && !l || !i && l || !Si(e[a], t[a]))
                return !1
        }
    }
    return String(e) === String(t)
}
const Tu = e => !!(e && e.__v_isRef === !0)
  , fe = e => Ie(e) ? e : e == null ? "" : ie(e) || De(e) && (e.toString === Du || !de(e.toString)) ? Tu(e) ? fe(e.value) : JSON.stringify(e, Ru, 2) : String(e)
  , Ru = (e, t) => Tu(t) ? Ru(e, t.value) : ir(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce( (n, [r,s], o) => (n[Go(r, o) + " =>"] = s,
    n), {})
} : Au(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n => Go(n))
} : yt(t) ? Go(t) : De(t) && !ie(t) && !Eu(t) ? String(t) : t
  , Go = (e, t="") => {
    var n;
    return yt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
}
;
/**
* @vue/reactivity v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ve;
class Iu {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this._on = 0,
        this.effects = [],
        this.cleanups = [],
        this._isPaused = !1,
        this.__v_skip = !0,
        this.parent = Ve,
        !t && Ve && (this.index = (Ve.scopes || (Ve.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, n;
            if (this.scopes)
                for (t = 0,
                n = this.scopes.length; t < n; t++)
                    this.scopes[t].pause();
            for (t = 0,
            n = this.effects.length; t < n; t++)
                this.effects[t].pause()
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, n;
            if (this.scopes)
                for (t = 0,
                n = this.scopes.length; t < n; t++)
                    this.scopes[t].resume();
            for (t = 0,
            n = this.effects.length; t < n; t++)
                this.effects[t].resume()
        }
    }
    run(t) {
        if (this._active) {
            const n = Ve;
            try {
                return Ve = this,
                t()
            } finally {
                Ve = n
            }
        }
    }
    on() {
        ++this._on === 1 && (this.prevScope = Ve,
        Ve = this)
    }
    off() {
        if (this._on > 0 && --this._on === 0) {
            if (Ve === this)
                Ve = this.prevScope;
            else {
                let t = Ve;
                for (; t; ) {
                    if (t.prevScope === this) {
                        t.prevScope = this.prevScope;
                        break
                    }
                    t = t.prevScope
                }
            }
            this.prevScope = void 0
        }
    }
    stop(t) {
        if (this._active) {
            this._active = !1;
            let n, r;
            for (n = 0,
            r = this.effects.length; n < r; n++)
                this.effects[n].stop();
            for (this.effects.length = 0,
            n = 0,
            r = this.cleanups.length; n < r; n++)
                this.cleanups[n]();
            if (this.cleanups.length = 0,
            this.scopes) {
                for (n = 0,
                r = this.scopes.length; n < r; n++)
                    this.scopes[n].stop(!0);
                this.scopes.length = 0
            }
            if (!this.detached && this.parent && !t) {
                const s = this.parent.scopes.pop();
                s && s !== this && (this.parent.scopes[this.index] = s,
                s.index = this.index)
            }
            this.parent = void 0
        }
    }
}
function $i(e) {
    return new Iu(e)
}
function Co() {
    return Ve
}
function Ai(e, t=!1) {
    Ve && Ve.cleanups.push(e)
}
let Te;
const Ko = new WeakSet;
class qu {
    constructor(t) {
        this.fn = t,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 5,
        this.next = void 0,
        this.cleanup = void 0,
        this.scheduler = void 0,
        Ve && Ve.active && Ve.effects.push(this)
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        this.flags & 64 && (this.flags &= -65,
        Ko.has(this) && (Ko.delete(this),
        this.trigger()))
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Lu(this)
    }
    run() {
        if (!(this.flags & 1))
            return this.fn();
        this.flags |= 2,
        kl(this),
        Bu(this);
        const t = Te
          , n = Ct;
        Te = this,
        Ct = !0;
        try {
            return this.fn()
        } finally {
            Nu(this),
            Te = t,
            Ct = n,
            this.flags &= -3
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep)
                Ei(t);
            this.deps = this.depsTail = void 0,
            kl(this),
            this.onStop && this.onStop(),
            this.flags &= -2
        }
    }
    trigger() {
        this.flags & 64 ? Ko.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        Aa(this) && this.run()
    }
    get dirty() {
        return Aa(this)
    }
}
let Fu = 0, Wr, zr;
function Lu(e, t=!1) {
    if (e.flags |= 8,
    t) {
        e.next = zr,
        zr = e;
        return
    }
    e.next = Wr,
    Wr = e
}
function Oi() {
    Fu++
}
function Di() {
    if (--Fu > 0)
        return;
    if (zr) {
        let t = zr;
        for (zr = void 0; t; ) {
            const n = t.next;
            t.next = void 0,
            t.flags &= -9,
            t = n
        }
    }
    let e;
    for (; Wr; ) {
        let t = Wr;
        for (Wr = void 0; t; ) {
            const n = t.next;
            if (t.next = void 0,
            t.flags &= -9,
            t.flags & 1)
                try {
                    t.trigger()
                } catch (r) {
                    e || (e = r)
                }
            t = n
        }
    }
    if (e)
        throw e
}
function Bu(e) {
    for (let t = e.deps; t; t = t.nextDep)
        t.version = -1,
        t.prevActiveLink = t.dep.activeLink,
        t.dep.activeLink = t
}
function Nu(e) {
    let t, n = e.depsTail, r = n;
    for (; r; ) {
        const s = r.prevDep;
        r.version === -1 ? (r === n && (n = s),
        Ei(r),
        Zh(r)) : t = r,
        r.dep.activeLink = r.prevActiveLink,
        r.prevActiveLink = void 0,
        r = s
    }
    e.deps = t,
    e.depsTail = n
}
function Aa(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (t.dep.version !== t.version || t.dep.computed && (Hu(t.dep.computed) || t.dep.version !== t.version))
            return !0;
    return !!e._dirty
}
function Hu(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17,
    e.globalVersion === Jr) || (e.globalVersion = Jr,
    !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Aa(e))))
        return;
    e.flags |= 2;
    const t = e.dep
      , n = Te
      , r = Ct;
    Te = e,
    Ct = !0;
    try {
        Bu(e);
        const s = e.fn(e._value);
        (t.version === 0 || Qe(s, e._value)) && (e.flags |= 128,
        e._value = s,
        t.version++)
    } catch (s) {
        throw t.version++,
        s
    } finally {
        Te = n,
        Ct = r,
        Nu(e),
        e.flags &= -3
    }
}
function Ei(e, t=!1) {
    const {dep: n, prevSub: r, nextSub: s} = e;
    if (r && (r.nextSub = s,
    e.prevSub = void 0),
    s && (s.prevSub = r,
    e.nextSub = void 0),
    n.subs === e && (n.subs = r,
    !r && n.computed)) {
        n.computed.flags &= -5;
        for (let o = n.computed.deps; o; o = o.nextDep)
            Ei(o, !0)
    }
    !t && !--n.sc && n.map && n.map.delete(n.key)
}
function Zh(e) {
    const {prevDep: t, nextDep: n} = e;
    t && (t.nextDep = n,
    e.prevDep = void 0),
    n && (n.prevDep = t,
    e.nextDep = void 0)
}
let Ct = !0;
const ju = [];
function sn() {
    ju.push(Ct),
    Ct = !1
}
function on() {
    const e = ju.pop();
    Ct = e === void 0 ? !0 : e
}
function kl(e) {
    const {cleanup: t} = e;
    if (e.cleanup = void 0,
    t) {
        const n = Te;
        Te = void 0;
        try {
            t()
        } finally {
            Te = n
        }
    }
}
let Jr = 0;
class Xh {
    constructor(t, n) {
        this.sub = t,
        this.dep = n,
        this.version = n.version,
        this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
class So {
    constructor(t) {
        this.computed = t,
        this.version = 0,
        this.activeLink = void 0,
        this.subs = void 0,
        this.map = void 0,
        this.key = void 0,
        this.sc = 0,
        this.__v_skip = !0
    }
    track(t) {
        if (!Te || !Ct || Te === this.computed)
            return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== Te)
            n = this.activeLink = new Xh(Te,this),
            Te.deps ? (n.prevDep = Te.depsTail,
            Te.depsTail.nextDep = n,
            Te.depsTail = n) : Te.deps = Te.depsTail = n,
            Vu(n);
        else if (n.version === -1 && (n.version = this.version,
        n.nextDep)) {
            const r = n.nextDep;
            r.prevDep = n.prevDep,
            n.prevDep && (n.prevDep.nextDep = r),
            n.prevDep = Te.depsTail,
            n.nextDep = void 0,
            Te.depsTail.nextDep = n,
            Te.depsTail = n,
            Te.deps === n && (Te.deps = r)
        }
        return n
    }
    trigger(t) {
        this.version++,
        Jr++,
        this.notify(t)
    }
    notify(t) {
        Oi();
        try {
            for (let n = this.subs; n; n = n.prevSub)
                n.sub.notify() && n.sub.dep.notify()
        } finally {
            Di()
        }
    }
}
function Vu(e) {
    if (e.dep.sc++,
    e.sub.flags & 4) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let r = t.deps; r; r = r.nextDep)
                Vu(r)
        }
        const n = e.dep.subs;
        n !== e && (e.prevSub = n,
        n && (n.nextSub = e)),
        e.dep.subs = e
    }
}
const Us = new WeakMap
  , qn = Symbol("")
  , Oa = Symbol("")
  , Qr = Symbol("");
function Ze(e, t, n) {
    if (Ct && Te) {
        let r = Us.get(e);
        r || Us.set(e, r = new Map);
        let s = r.get(n);
        s || (r.set(n, s = new So),
        s.map = r,
        s.key = n),
        s.track()
    }
}
function Qt(e, t, n, r, s, o) {
    const a = Us.get(e);
    if (!a) {
        Jr++;
        return
    }
    const i = l => {
        l && l.trigger()
    }
    ;
    if (Oi(),
    t === "clear")
        a.forEach(i);
    else {
        const l = ie(e)
          , u = l && wo(n);
        if (l && n === "length") {
            const c = Number(r);
            a.forEach( (d, f) => {
                (f === "length" || f === Qr || !yt(f) && f >= c) && i(d)
            }
            )
        } else
            switch ((n !== void 0 || a.has(void 0)) && i(a.get(n)),
            u && i(a.get(Qr)),
            t) {
            case "add":
                l ? u && i(a.get("length")) : (i(a.get(qn)),
                ir(e) && i(a.get(Oa)));
                break;
            case "delete":
                l || (i(a.get(qn)),
                ir(e) && i(a.get(Oa)));
                break;
            case "set":
                ir(e) && i(a.get(qn));
                break
            }
    }
    Di()
}
function ep(e, t) {
    const n = Us.get(e);
    return n && n.get(t)
}
function Zn(e) {
    const t = _e(e);
    return t === e ? t : (Ze(t, "iterate", Qr),
    gt(e) ? t : t.map($t))
}
function $o(e) {
    return Ze(e = _e(e), "iterate", Qr),
    e
}
function Rt(e, t) {
    return an(e) ? gr(Fn(e) ? $t(t) : t) : $t(t)
}
const tp = {
    __proto__: null,
    [Symbol.iterator]() {
        return Yo(this, Symbol.iterator, e => Rt(this, e))
    },
    concat(...e) {
        return Zn(this).concat(...e.map(t => ie(t) ? Zn(t) : t))
    },
    entries() {
        return Yo(this, "entries", e => (e[1] = Rt(this, e[1]),
        e))
    },
    every(e, t) {
        return Wt(this, "every", e, t, void 0, arguments)
    },
    filter(e, t) {
        return Wt(this, "filter", e, t, n => n.map(r => Rt(this, r)), arguments)
    },
    find(e, t) {
        return Wt(this, "find", e, t, n => Rt(this, n), arguments)
    },
    findIndex(e, t) {
        return Wt(this, "findIndex", e, t, void 0, arguments)
    },
    findLast(e, t) {
        return Wt(this, "findLast", e, t, n => Rt(this, n), arguments)
    },
    findLastIndex(e, t) {
        return Wt(this, "findLastIndex", e, t, void 0, arguments)
    },
    forEach(e, t) {
        return Wt(this, "forEach", e, t, void 0, arguments)
    },
    includes(...e) {
        return Jo(this, "includes", e)
    },
    indexOf(...e) {
        return Jo(this, "indexOf", e)
    },
    join(e) {
        return Zn(this).join(e)
    },
    lastIndexOf(...e) {
        return Jo(this, "lastIndexOf", e)
    },
    map(e, t) {
        return Wt(this, "map", e, t, void 0, arguments)
    },
    pop() {
        return Er(this, "pop")
    },
    push(...e) {
        return Er(this, "push", e)
    },
    reduce(e, ...t) {
        return _l(this, "reduce", e, t)
    },
    reduceRight(e, ...t) {
        return _l(this, "reduceRight", e, t)
    },
    shift() {
        return Er(this, "shift")
    },
    some(e, t) {
        return Wt(this, "some", e, t, void 0, arguments)
    },
    splice(...e) {
        return Er(this, "splice", e)
    },
    toReversed() {
        return Zn(this).toReversed()
    },
    toSorted(e) {
        return Zn(this).toSorted(e)
    },
    toSpliced(...e) {
        return Zn(this).toSpliced(...e)
    },
    unshift(...e) {
        return Er(this, "unshift", e)
    },
    values() {
        return Yo(this, "values", e => Rt(this, e))
    }
};
function Yo(e, t, n) {
    const r = $o(e)
      , s = r[t]();
    return r !== e && !gt(e) && (s._next = s.next,
    s.next = () => {
        const o = s._next();
        return o.done || (o.value = n(o.value)),
        o
    }
    ),
    s
}
const np = Array.prototype;
function Wt(e, t, n, r, s, o) {
    const a = $o(e)
      , i = a !== e && !gt(e)
      , l = a[t];
    if (l !== np[t]) {
        const d = l.apply(e, o);
        return i ? $t(d) : d
    }
    let u = n;
    a !== e && (i ? u = function(d, f) {
        return n.call(this, Rt(e, d), f, e)
    }
    : n.length > 2 && (u = function(d, f) {
        return n.call(this, d, f, e)
    }
    ));
    const c = l.call(a, u, r);
    return i && s ? s(c) : c
}
function _l(e, t, n, r) {
    const s = $o(e)
      , o = s !== e && !gt(e);
    let a = n
      , i = !1;
    s !== e && (o ? (i = r.length === 0,
    a = function(u, c, d) {
        return i && (i = !1,
        u = Rt(e, u)),
        n.call(this, u, Rt(e, c), d, e)
    }
    ) : n.length > 3 && (a = function(u, c, d) {
        return n.call(this, u, c, d, e)
    }
    ));
    const l = s[t](a, ...r);
    return i ? Rt(e, l) : l
}
function Jo(e, t, n) {
    const r = _e(e);
    Ze(r, "iterate", Qr);
    const s = r[t](...n);
    return (s === -1 || s === !1) && Do(n[0]) ? (n[0] = _e(n[0]),
    r[t](...n)) : s
}
function Er(e, t, n=[]) {
    sn(),
    Oi();
    const r = _e(e)[t].apply(e, n);
    return Di(),
    on(),
    r
}
const rp = ki("__proto__,__v_isRef,__isVue")
  , Wu = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(yt));
function sp(e) {
    yt(e) || (e = String(e));
    const t = _e(this);
    return Ze(t, "has", e),
    t.hasOwnProperty(e)
}
class zu {
    constructor(t=!1, n=!1) {
        this._isReadonly = t,
        this._isShallow = n
    }
    get(t, n, r) {
        if (n === "__v_skip")
            return t.__v_skip;
        const s = this._isReadonly
          , o = this._isShallow;
        if (n === "__v_isReactive")
            return !s;
        if (n === "__v_isReadonly")
            return s;
        if (n === "__v_isShallow")
            return o;
        if (n === "__v_raw")
            return r === (s ? o ? Qu : Ju : o ? Yu : Ku).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
        const a = ie(t);
        if (!s) {
            let l;
            if (a && (l = tp[n]))
                return l;
            if (n === "hasOwnProperty")
                return sp
        }
        const i = Reflect.get(t, n, Pe(t) ? t : r);
        if ((yt(n) ? Wu.has(n) : rp(n)) || (s || Ze(t, "get", n),
        o))
            return i;
        if (Pe(i)) {
            const l = a && wo(n) ? i : i.value;
            return s && De(l) ? xn(l) : l
        }
        return De(i) ? s ? xn(i) : St(i) : i
    }
}
class Uu extends zu {
    constructor(t=!1) {
        super(!1, t)
    }
    set(t, n, r, s) {
        let o = t[n];
        const a = ie(t) && wo(n);
        if (!this._isShallow) {
            const u = an(o);
            if (!gt(r) && !an(r) && (o = _e(o),
            r = _e(r)),
            !a && Pe(o) && !Pe(r))
                return u || (o.value = r),
                !0
        }
        const i = a ? Number(n) < t.length : Ae(t, n)
          , l = Reflect.set(t, n, r, Pe(t) ? t : s);
        return t === _e(s) && (i ? Qe(r, o) && Qt(t, "set", n, r) : Qt(t, "add", n, r)),
        l
    }
    deleteProperty(t, n) {
        const r = Ae(t, n);
        t[n];
        const s = Reflect.deleteProperty(t, n);
        return s && r && Qt(t, "delete", n, void 0),
        s
    }
    has(t, n) {
        const r = Reflect.has(t, n);
        return (!yt(n) || !Wu.has(n)) && Ze(t, "has", n),
        r
    }
    ownKeys(t) {
        return Ze(t, "iterate", ie(t) ? "length" : qn),
        Reflect.ownKeys(t)
    }
}
class Gu extends zu {
    constructor(t=!1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const op = new Uu
  , ap = new Gu
  , ip = new Uu(!0)
  , lp = new Gu(!0)
  , Da = e => e
  , ys = e => Reflect.getPrototypeOf(e);
function cp(e, t, n) {
    return function(...r) {
        const s = this.__v_raw
          , o = _e(s)
          , a = ir(o)
          , i = e === "entries" || e === Symbol.iterator && a
          , l = e === "keys" && a
          , u = s[e](...r)
          , c = n ? Da : t ? gr : $t;
        return !t && Ze(o, "iterate", l ? Oa : qn),
        ze(Object.create(u), {
            next() {
                const {value: d, done: f} = u.next();
                return f ? {
                    value: d,
                    done: f
                } : {
                    value: i ? [c(d[0]), c(d[1])] : c(d),
                    done: f
                }
            }
        })
    }
}
function vs(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function up(e, t) {
    const n = {
        get(s) {
            const o = this.__v_raw
              , a = _e(o)
              , i = _e(s);
            e || (Qe(s, i) && Ze(a, "get", s),
            Ze(a, "get", i));
            const {has: l} = ys(a)
              , u = t ? Da : e ? gr : $t;
            if (l.call(a, s))
                return u(o.get(s));
            if (l.call(a, i))
                return u(o.get(i));
            o !== a && o.get(s)
        },
        get size() {
            const s = this.__v_raw;
            return !e && Ze(_e(s), "iterate", qn),
            s.size
        },
        has(s) {
            const o = this.__v_raw
              , a = _e(o)
              , i = _e(s);
            return e || (Qe(s, i) && Ze(a, "has", s),
            Ze(a, "has", i)),
            s === i ? o.has(s) : o.has(s) || o.has(i)
        },
        forEach(s, o) {
            const a = this
              , i = a.__v_raw
              , l = _e(i)
              , u = t ? Da : e ? gr : $t;
            return !e && Ze(l, "iterate", qn),
            i.forEach( (c, d) => s.call(o, u(c), u(d), a))
        }
    };
    return ze(n, e ? {
        add: vs("add"),
        set: vs("set"),
        delete: vs("delete"),
        clear: vs("clear")
    } : {
        add(s) {
            const o = _e(this)
              , a = ys(o)
              , i = _e(s)
              , l = !t && !gt(s) && !an(s) ? i : s;
            return a.has.call(o, l) || Qe(s, l) && a.has.call(o, s) || Qe(i, l) && a.has.call(o, i) || (o.add(l),
            Qt(o, "add", l, l)),
            this
        },
        set(s, o) {
            !t && !gt(o) && !an(o) && (o = _e(o));
            const a = _e(this)
              , {has: i, get: l} = ys(a);
            let u = i.call(a, s);
            u || (s = _e(s),
            u = i.call(a, s));
            const c = l.call(a, s);
            return a.set(s, o),
            u ? Qe(o, c) && Qt(a, "set", s, o) : Qt(a, "add", s, o),
            this
        },
        delete(s) {
            const o = _e(this)
              , {has: a, get: i} = ys(o);
            let l = a.call(o, s);
            l || (s = _e(s),
            l = a.call(o, s)),
            i && i.call(o, s);
            const u = o.delete(s);
            return l && Qt(o, "delete", s, void 0),
            u
        },
        clear() {
            const s = _e(this)
              , o = s.size !== 0
              , a = s.clear();
            return o && Qt(s, "clear", void 0, void 0),
            a
        }
    }),
    ["keys", "values", "entries", Symbol.iterator].forEach(s => {
        n[s] = cp(s, e, t)
    }
    ),
    n
}
function Ao(e, t) {
    const n = up(e, t);
    return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(Ae(n, s) && s in r ? n : r, s, o)
}
const dp = {
    get: Ao(!1, !1)
}
  , fp = {
    get: Ao(!1, !0)
}
  , hp = {
    get: Ao(!0, !1)
}
  , pp = {
    get: Ao(!0, !0)
}
  , Ku = new WeakMap
  , Yu = new WeakMap
  , Ju = new WeakMap
  , Qu = new WeakMap;
function gp(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function mp(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : gp(jh(e))
}
function St(e) {
    return an(e) ? e : Oo(e, !1, op, dp, Ku)
}
function yp(e) {
    return Oo(e, !1, ip, fp, Yu)
}
function xn(e) {
    return Oo(e, !0, ap, hp, Ju)
}
function Xn(e) {
    return Oo(e, !0, lp, pp, Qu)
}
function Oo(e, t, n, r, s) {
    if (!De(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const o = mp(e);
    if (o === 0)
        return e;
    const a = s.get(e);
    if (a)
        return a;
    const i = new Proxy(e,o === 2 ? r : n);
    return s.set(e, i),
    i
}
function Fn(e) {
    return an(e) ? Fn(e.__v_raw) : !!(e && e.__v_isReactive)
}
function an(e) {
    return !!(e && e.__v_isReadonly)
}
function gt(e) {
    return !!(e && e.__v_isShallow)
}
function Do(e) {
    return e ? !!e.__v_raw : !1
}
function _e(e) {
    const t = e && e.__v_raw;
    return t ? _e(t) : e
}
function vp(e) {
    return !Ae(e, "__v_skip") && Object.isExtensible(e) && Pu(e, "__v_skip", !0),
    e
}
const $t = e => De(e) ? St(e) : e
  , gr = e => De(e) ? xn(e) : e;
function Pe(e) {
    return e ? e.__v_isRef === !0 : !1
}
function Q(e) {
    return Zu(e, !1)
}
function rn(e) {
    return Zu(e, !0)
}
function Zu(e, t) {
    return Pe(e) ? e : new bp(e,t)
}
class bp {
    constructor(t, n) {
        this.dep = new So,
        this.__v_isRef = !0,
        this.__v_isShallow = !1,
        this._rawValue = n ? t : _e(t),
        this._value = n ? t : $t(t),
        this.__v_isShallow = n
    }
    get value() {
        return this.dep.track(),
        this._value
    }
    set value(t) {
        const n = this._rawValue
          , r = this.__v_isShallow || gt(t) || an(t);
        t = r ? t : _e(t),
        Qe(t, n) && (this._rawValue = t,
        this._value = r ? t : $t(t),
        this.dep.trigger())
    }
}
function x(e) {
    return Pe(e) ? e.value : e
}
function Re(e) {
    return de(e) ? e() : x(e)
}
const wp = {
    get: (e, t, n) => t === "__v_raw" ? e : x(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
        const s = e[t];
        return Pe(s) && !Pe(n) ? (s.value = n,
        !0) : Reflect.set(e, t, n, r)
    }
};
function Xu(e) {
    return Fn(e) ? e : new Proxy(e,wp)
}
class xp {
    constructor(t) {
        this.__v_isRef = !0,
        this._value = void 0;
        const n = this.dep = new So
          , {get: r, set: s} = t(n.track.bind(n), n.trigger.bind(n));
        this._get = r,
        this._set = s
    }
    get value() {
        return this._value = this._get()
    }
    set value(t) {
        this._set(t)
    }
}
function Eo(e) {
    return new xp(e)
}
function Bt(e) {
    const t = ie(e) ? new Array(e.length) : {};
    for (const n in e)
        t[n] = ed(e, n);
    return t
}
class kp {
    constructor(t, n, r) {
        this._object = t,
        this._defaultValue = r,
        this.__v_isRef = !0,
        this._value = void 0,
        this._key = yt(n) ? n : String(n),
        this._raw = _e(t);
        let s = !0
          , o = t;
        if (!ie(t) || yt(this._key) || !wo(this._key))
            do
                s = !Do(o) || gt(o);
            while (s && (o = o.__v_raw));
        this._shallow = s
    }
    get value() {
        let t = this._object[this._key];
        return this._shallow && (t = x(t)),
        this._value = t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        if (this._shallow && Pe(this._raw[this._key])) {
            const n = this._object[this._key];
            if (Pe(n)) {
                n.value = t;
                return
            }
        }
        this._object[this._key] = t
    }
    get dep() {
        return ep(this._raw, this._key)
    }
}
class _p {
    constructor(t) {
        this._getter = t,
        this.__v_isRef = !0,
        this.__v_isReadonly = !0,
        this._value = void 0
    }
    get value() {
        return this._value = this._getter()
    }
}
function Ln(e, t, n) {
    return Pe(e) ? e : de(e) ? new _p(e) : De(e) && arguments.length > 1 ? ed(e, t, n) : Q(e)
}
function ed(e, t, n) {
    return new kp(e,t,n)
}
class Cp {
    constructor(t, n, r) {
        this.fn = t,
        this.setter = n,
        this._value = void 0,
        this.dep = new So(this),
        this.__v_isRef = !0,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 16,
        this.globalVersion = Jr - 1,
        this.next = void 0,
        this.effect = this,
        this.__v_isReadonly = !n,
        this.isSSR = r
    }
    notify() {
        if (this.flags |= 16,
        !(this.flags & 8) && Te !== this)
            return Lu(this, !0),
            !0
    }
    get value() {
        const t = this.dep.track();
        return Hu(this),
        t && (t.version = this.dep.version),
        this._value
    }
    set value(t) {
        this.setter && this.setter(t)
    }
}
function Sp(e, t, n=!1) {
    let r, s;
    return de(e) ? r = e : (r = e.get,
    s = e.set),
    new Cp(r,s,n)
}
const bs = {}
  , Gs = new WeakMap;
let Mn;
function $p(e, t=!1, n=Mn) {
    if (n) {
        let r = Gs.get(n);
        r || Gs.set(n, r = []),
        r.push(e)
    }
}
function Ap(e, t, n=Ce) {
    const {immediate: r, deep: s, once: o, scheduler: a, augmentJob: i, call: l} = n
      , u = k => s ? k : gt(k) || s === !1 || s === 0 ? Zt(k, 1) : Zt(k);
    let c, d, f, p, h = !1, g = !1;
    if (Pe(e) ? (d = () => e.value,
    h = gt(e)) : Fn(e) ? (d = () => u(e),
    h = !0) : ie(e) ? (g = !0,
    h = e.some(k => Fn(k) || gt(k)),
    d = () => e.map(k => {
        if (Pe(k))
            return k.value;
        if (Fn(k))
            return u(k);
        if (de(k))
            return l ? l(k, 2) : k()
    }
    )) : de(e) ? t ? d = l ? () => l(e, 2) : e : d = () => {
        if (f) {
            sn();
            try {
                f()
            } finally {
                on()
            }
        }
        const k = Mn;
        Mn = c;
        try {
            return l ? l(e, 3, [p]) : e(p)
        } finally {
            Mn = k
        }
    }
    : d = Ft,
    t && s) {
        const k = d
          , _ = s === !0 ? 1 / 0 : s;
        d = () => Zt(k(), _)
    }
    const m = Co()
      , b = () => {
        c.stop(),
        m && m.active && _i(m.effects, c)
    }
    ;
    if (o && t) {
        const k = t;
        t = (..._) => {
            k(..._),
            b()
        }
    }
    let y = g ? new Array(e.length).fill(bs) : bs;
    const v = k => {
        if (!(!(c.flags & 1) || !c.dirty && !k))
            if (t) {
                const _ = c.run();
                if (s || h || (g ? _.some( ($, A) => Qe($, y[A])) : Qe(_, y))) {
                    f && f();
                    const $ = Mn;
                    Mn = c;
                    try {
                        const A = [_, y === bs ? void 0 : g && y[0] === bs ? [] : y, p];
                        y = _,
                        l ? l(t, 3, A) : t(...A)
                    } finally {
                        Mn = $
                    }
                }
            } else
                c.run()
    }
    ;
    return i && i(v),
    c = new qu(d),
    c.scheduler = a ? () => a(v, !1) : v,
    p = k => $p(k, !1, c),
    f = c.onStop = () => {
        const k = Gs.get(c);
        if (k) {
            if (l)
                l(k, 4);
            else
                for (const _ of k)
                    _();
            Gs.delete(c)
        }
    }
    ,
    t ? r ? v(!0) : y = c.run() : a ? a(v.bind(null, !0), !0) : c.run(),
    b.pause = c.pause.bind(c),
    b.resume = c.resume.bind(c),
    b.stop = b,
    b
}
function Zt(e, t=1 / 0, n) {
    if (t <= 0 || !De(e) || e.__v_skip || (n = n || new Map,
    (n.get(e) || 0) >= t))
        return e;
    if (n.set(e, t),
    t--,
    Pe(e))
        Zt(e.value, t, n);
    else if (ie(e))
        for (let r = 0; r < e.length; r++)
            Zt(e[r], t, n);
    else if (Au(e) || ir(e))
        e.forEach(r => {
            Zt(r, t, n)
        }
        );
    else if (Eu(e)) {
        for (const r in e)
            Zt(e[r], t, n);
        for (const r of Object.getOwnPropertySymbols(e))
            Object.prototype.propertyIsEnumerable.call(e, r) && Zt(e[r], t, n)
    }
    return e
}
/**
* @vue/runtime-core v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function us(e, t, n, r) {
    try {
        return r ? e(...r) : e()
    } catch (s) {
        Po(s, t, n)
    }
}
function Nt(e, t, n, r) {
    if (de(e)) {
        const s = us(e, t, n, r);
        return s && Ou(s) && s.catch(o => {
            Po(o, t, n)
        }
        ),
        s
    }
    if (ie(e)) {
        const s = [];
        for (let o = 0; o < e.length; o++)
            s.push(Nt(e[o], t, n, r));
        return s
    }
}
function Po(e, t, n, r=!0) {
    const s = t ? t.vnode : null
      , {errorHandler: o, throwUnhandledErrorInProduction: a} = t && t.appContext.config || Ce;
    if (t) {
        let i = t.parent;
        const l = t.proxy
          , u = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; i; ) {
            const c = i.ec;
            if (c) {
                for (let d = 0; d < c.length; d++)
                    if (c[d](e, l, u) === !1)
                        return
            }
            i = i.parent
        }
        if (o) {
            sn(),
            us(o, null, 10, [e, l, u]),
            on();
            return
        }
    }
    Op(e, n, s, r, a)
}
function Op(e, t, n, r=!0, s=!1) {
    if (s)
        throw e;
    console.error(e)
}
const st = [];
let Tt = -1;
const lr = [];
let yn = null
  , rr = 0;
const td = Promise.resolve();
let Ks = null;
function lt(e) {
    const t = Ks || td;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function Dp(e) {
    let t = Tt + 1
      , n = st.length;
    for (; t < n; ) {
        const r = t + n >>> 1
          , s = st[r]
          , o = Zr(s);
        o < e || o === e && s.flags & 2 ? t = r + 1 : n = r
    }
    return t
}
function Pi(e) {
    if (!(e.flags & 1)) {
        const t = Zr(e)
          , n = st[st.length - 1];
        !n || !(e.flags & 2) && t >= Zr(n) ? st.push(e) : st.splice(Dp(t), 0, e),
        e.flags |= 1,
        nd()
    }
}
function nd() {
    Ks || (Ks = td.then(sd))
}
function Ep(e) {
    ie(e) ? lr.push(...e) : yn && e.id === -1 ? yn.splice(rr + 1, 0, e) : e.flags & 1 || (lr.push(e),
    e.flags |= 1),
    nd()
}
function Cl(e, t, n=Tt + 1) {
    for (; n < st.length; n++) {
        const r = st[n];
        if (r && r.flags & 2) {
            if (e && r.id !== e.uid)
                continue;
            st.splice(n, 1),
            n--,
            r.flags & 4 && (r.flags &= -2),
            r(),
            r.flags & 4 || (r.flags &= -2)
        }
    }
}
function rd(e) {
    if (lr.length) {
        const t = [...new Set(lr)].sort( (n, r) => Zr(n) - Zr(r));
        if (lr.length = 0,
        yn) {
            yn.push(...t);
            return
        }
        for (yn = t,
        rr = 0; rr < yn.length; rr++) {
            const n = yn[rr];
            n.flags & 4 && (n.flags &= -2),
            n.flags & 8 || n(),
            n.flags &= -2
        }
        yn = null,
        rr = 0
    }
}
const Zr = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function sd(e) {
    try {
        for (Tt = 0; Tt < st.length; Tt++) {
            const t = st[Tt];
            t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2),
            us(t, t.i, t.i ? 15 : 14),
            t.flags & 4 || (t.flags &= -2))
        }
    } finally {
        for (; Tt < st.length; Tt++) {
            const t = st[Tt];
            t && (t.flags &= -2)
        }
        Tt = -1,
        st.length = 0,
        rd(),
        Ks = null,
        (st.length || lr.length) && sd()
    }
}
let Ke = null
  , od = null;
function Ys(e) {
    const t = Ke;
    return Ke = e,
    od = e && e.type.__scopeId || null,
    t
}
function V(e, t=Ke, n) {
    if (!t || e._n)
        return e;
    const r = (...s) => {
        r._d && Zs(-1);
        const o = Ys(t);
        let a;
        try {
            a = e(...s)
        } finally {
            Ys(o),
            r._d && Zs(1)
        }
        return a
    }
    ;
    return r._n = !0,
    r._c = !0,
    r._d = !0,
    r
}
function Sl(e, t) {
    if (Ke === null)
        return e;
    const n = Io(Ke)
      , r = e.dirs || (e.dirs = []);
    for (let s = 0; s < t.length; s++) {
        let[o,a,i,l=Ce] = t[s];
        o && (de(o) && (o = {
            mounted: o,
            updated: o
        }),
        o.deep && Zt(a),
        r.push({
            dir: o,
            instance: n,
            value: a,
            oldValue: void 0,
            arg: i,
            modifiers: l
        }))
    }
    return e
}
function An(e, t, n, r) {
    const s = e.dirs
      , o = t && t.dirs;
    for (let a = 0; a < s.length; a++) {
        const i = s[a];
        o && (i.oldValue = o[a].value);
        let l = i.dir[r];
        l && (sn(),
        Nt(l, n, 8, [e.el, i, e, t]),
        on())
    }
}
function Mi(e, t) {
    if (Xe) {
        let n = Xe.provides;
        const r = Xe.parent && Xe.parent.provides;
        r === n && (n = Xe.provides = Object.create(r)),
        n[e] = t
    }
}
function et(e, t, n=!1) {
    const r = tt();
    if (r || Bn) {
        let s = Bn ? Bn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
        if (s && e in s)
            return s[e];
        if (arguments.length > 1)
            return n && de(t) ? t.call(r && r.proxy) : t
    }
}
function Ti() {
    return !!(tt() || Bn)
}
const Pp = Symbol.for("v-scx")
  , Mp = () => et(Pp);
function ct(e, t) {
    return ds(e, null, t)
}
function ad(e, t) {
    return ds(e, null, {
        flush: "post"
    })
}
function Tp(e, t) {
    return ds(e, null, {
        flush: "sync"
    })
}
function Oe(e, t, n) {
    return ds(e, t, n)
}
function ds(e, t, n=Ce) {
    const {immediate: r, deep: s, flush: o, once: a} = n
      , i = ze({}, n)
      , l = t && r || !t && o !== "post";
    let u;
    if (ns) {
        if (o === "sync") {
            const p = Mp();
            u = p.__watcherHandles || (p.__watcherHandles = [])
        } else if (!l) {
            const p = () => {}
            ;
            return p.stop = Ft,
            p.resume = Ft,
            p.pause = Ft,
            p
        }
    }
    const c = Xe;
    i.call = (p, h, g) => Nt(p, c, h, g);
    let d = !1;
    o === "post" ? i.scheduler = p => {
        rt(p, c && c.suspense)
    }
    : o !== "sync" && (d = !0,
    i.scheduler = (p, h) => {
        h ? p() : Pi(p)
    }
    ),
    i.augmentJob = p => {
        t && (p.flags |= 4),
        d && (p.flags |= 2,
        c && (p.id = c.uid,
        p.i = c))
    }
    ;
    const f = Ap(e, t, i);
    return ns && (u ? u.push(f) : l && f()),
    f
}
function Rp(e, t, n) {
    const r = this.proxy
      , s = Ie(e) ? e.includes(".") ? id(r, e) : () => r[e] : e.bind(r, r);
    let o;
    de(t) ? o = t : (o = t.handler,
    n = t);
    const a = fs(this)
      , i = ds(s, o.bind(r), n);
    return a(),
    i
}
function id(e, t) {
    const n = t.split(".");
    return () => {
        let r = e;
        for (let s = 0; s < n.length && r; s++)
            r = r[n[s]];
        return r
    }
}
const gn = new WeakMap
  , ld = Symbol("_vte")
  , Ip = e => e.__isTeleport
  , Tn = e => e && (e.disabled || e.disabled === "")
  , qp = e => e && (e.defer || e.defer === "")
  , $l = e => typeof SVGElement < "u" && e instanceof SVGElement
  , Al = e => typeof MathMLElement == "function" && e instanceof MathMLElement
  , Ea = (e, t) => {
    const n = e && e.to;
    return Ie(n) ? t ? t(n) : null : n
}
  , Fp = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, r, s, o, a, i, l, u) {
        const {mc: c, pc: d, pbc: f, o: {insert: p, querySelector: h, createText: g, createComment: m, parentNode: b}} = u
          , y = Tn(t.props);
        let {dynamicChildren: v} = t;
        const k = (A, S, P) => {
            A.shapeFlag & 16 && c(A.children, S, P, s, o, a, i, l)
        }
          , _ = (A=t) => {
            const S = Tn(A.props)
              , P = A.target = Ea(A.props, h)
              , U = Pa(P, A, g, p);
            P && (a !== "svg" && $l(P) ? a = "svg" : a !== "mathml" && Al(P) && (a = "mathml"),
            s && s.isCE && (s.ce._teleportTargets || (s.ce._teleportTargets = new Set)).add(P),
            S || (k(A, P, U),
            Fr(A, !1)))
        }
          , $ = A => {
            const S = () => {
                if (gn.get(A) === S) {
                    if (gn.delete(A),
                    Tn(A.props)) {
                        const P = b(A.el) || n;
                        k(A, P, A.anchor),
                        Fr(A, !0)
                    }
                    _(A)
                }
            }
            ;
            gn.set(A, S),
            rt(S, o)
        }
        ;
        if (e == null) {
            const A = t.el = g("")
              , S = t.anchor = g("");
            if (p(A, n, r),
            p(S, n, r),
            qp(t.props) || o && o.pendingBranch) {
                $(t);
                return
            }
            y && (k(t, n, S),
            Fr(t, !0)),
            _()
        } else {
            t.el = e.el;
            const A = t.anchor = e.anchor
              , S = gn.get(e);
            if (S) {
                S.flags |= 8,
                gn.delete(e),
                $(t);
                return
            }
            t.targetStart = e.targetStart;
            const P = t.target = e.target
              , U = t.targetAnchor = e.targetAnchor
              , ee = Tn(e.props)
              , M = ee ? n : P
              , q = ee ? A : U;
            if (a === "svg" || $l(P) ? a = "svg" : (a === "mathml" || Al(P)) && (a = "mathml"),
            v ? (f(e.dynamicChildren, v, M, s, o, a, i),
            Li(e, t, !0)) : l || d(e, t, M, q, s, o, a, i, !1),
            y)
                ee ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ws(t, n, A, u, 1);
            else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                const D = t.target = Ea(t.props, h);
                D && ws(t, D, null, u, 0)
            } else
                ee && ws(t, P, U, u, 1);
            Fr(t, y)
        }
    },
    remove(e, t, n, {um: r, o: {remove: s}}, o) {
        const {shapeFlag: a, children: i, anchor: l, targetStart: u, targetAnchor: c, target: d, props: f} = e;
        let p = o || !Tn(f);
        const h = gn.get(e);
        if (h && (h.flags |= 8,
        gn.delete(e),
        p = !1),
        d && (s(u),
        s(c)),
        o && s(l),
        a & 16)
            for (let g = 0; g < i.length; g++) {
                const m = i[g];
                r(m, t, n, p, !!m.dynamicChildren)
            }
    },
    move: ws,
    hydrate: Lp
};
function ws(e, t, n, {o: {insert: r}, m: s}, o=2) {
    o === 0 && r(e.targetAnchor, t, n);
    const {el: a, anchor: i, shapeFlag: l, children: u, props: c} = e
      , d = o === 2;
    if (d && r(a, t, n),
    !gn.has(e) && (!d || Tn(c)) && l & 16)
        for (let f = 0; f < u.length; f++)
            s(u[f], t, n, 2);
    d && r(i, t, n)
}
function Lp(e, t, n, r, s, o, {o: {nextSibling: a, parentNode: i, querySelector: l, insert: u, createText: c}}, d) {
    function f(m, b) {
        let y = b;
        for (; y; ) {
            if (y && y.nodeType === 8) {
                if (y.data === "teleport start anchor")
                    t.targetStart = y;
                else if (y.data === "teleport anchor") {
                    t.targetAnchor = y,
                    m._lpa = t.targetAnchor && a(t.targetAnchor);
                    break
                }
            }
            y = a(y)
        }
    }
    function p(m, b) {
        b.anchor = d(a(m), b, i(m), n, r, s, o)
    }
    const h = t.target = Ea(t.props, l)
      , g = Tn(t.props);
    if (h) {
        const m = h._lpa || h.firstChild;
        t.shapeFlag & 16 && (g ? (p(e, t),
        f(h, m),
        t.targetAnchor || Pa(h, t, c, u, i(e) === h ? e : null)) : (t.anchor = a(e),
        f(h, m),
        t.targetAnchor || Pa(h, t, c, u),
        d(m && a(m), t, h, n, r, s, o))),
        Fr(t, g)
    } else
        g && t.shapeFlag & 16 && (p(e, t),
        t.targetStart = e,
        t.targetAnchor = a(e));
    return t.anchor && a(t.anchor)
}
const Bp = Fp;
function Fr(e, t) {
    const n = e.ctx;
    if (n && n.ut) {
        let r, s;
        for (t ? (r = e.el,
        s = e.anchor) : (r = e.targetStart,
        s = e.targetAnchor); r && r !== s; )
            r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid),
            r = r.nextSibling;
        n.ut()
    }
}
function Pa(e, t, n, r, s=null) {
    const o = t.targetStart = n("")
      , a = t.targetAnchor = n("");
    return o[ld] = a,
    e && (r(o, e, s),
    r(a, e, s)),
    a
}
const Np = Symbol("_leaveCb");
function Ri(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t,
    Ri(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function se(e, t) {
    return de(e) ? ze({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
function Qo() {
    const e = tt();
    return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : ""
}
function cd(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}
function Ol(e, t) {
    let n;
    return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable)
}
const Js = new WeakMap;
function Ur(e, t, n, r, s=!1) {
    if (ie(e)) {
        e.forEach( (g, m) => Ur(g, t && (ie(t) ? t[m] : t), n, r, s));
        return
    }
    if (cr(r) && !s) {
        r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Ur(e, t, n, r.component.subTree);
        return
    }
    const o = r.shapeFlag & 4 ? Io(r.component) : r.el
      , a = s ? null : o
      , {i, r: l} = e
      , u = t && t.r
      , c = i.refs === Ce ? i.refs = {} : i.refs
      , d = i.setupState
      , f = _e(d)
      , p = d === Ce ? $u : g => Ol(c, g) ? !1 : Ae(f, g)
      , h = (g, m) => !(m && Ol(c, m));
    if (u != null && u !== l) {
        if (Dl(t),
        Ie(u))
            c[u] = null,
            p(u) && (d[u] = null);
        else if (Pe(u)) {
            const g = t;
            h(u, g.k) && (u.value = null),
            g.k && (c[g.k] = null)
        }
    }
    if (de(l))
        us(l, i, 12, [a, c]);
    else {
        const g = Ie(l)
          , m = Pe(l);
        if (g || m) {
            const b = () => {
                if (e.f) {
                    const y = g ? p(l) ? d[l] : c[l] : h() || !e.k ? l.value : c[e.k];
                    if (s)
                        ie(y) && _i(y, o);
                    else if (ie(y))
                        y.includes(o) || y.push(o);
                    else if (g)
                        c[l] = [o],
                        p(l) && (d[l] = c[l]);
                    else {
                        const v = [o];
                        h(l, e.k) && (l.value = v),
                        e.k && (c[e.k] = v)
                    }
                } else
                    g ? (c[l] = a,
                    p(l) && (d[l] = a)) : m && (h(l, e.k) && (l.value = a),
                    e.k && (c[e.k] = a))
            }
            ;
            if (a) {
                const y = () => {
                    b(),
                    Js.delete(e)
                }
                ;
                y.id = -1,
                Js.set(e, y),
                rt(y, n)
            } else
                Dl(e),
                b()
        }
    }
}
function Dl(e) {
    const t = Js.get(e);
    t && (t.flags |= 8,
    Js.delete(e))
}
_o().requestIdleCallback;
_o().cancelIdleCallback;
const cr = e => !!e.type.__asyncLoader
  , ud = e => e.type.__isKeepAlive;
function dd(e, t) {
    hd(e, "a", t)
}
function fd(e, t) {
    hd(e, "da", t)
}
function hd(e, t, n=Xe) {
    const r = e.__wdc || (e.__wdc = () => {
        let s = n;
        for (; s; ) {
            if (s.isDeactivated)
                return;
            s = s.parent
        }
        return e()
    }
    );
    if (Mo(t, r, n),
    n) {
        let s = n.parent;
        for (; s && s.parent; )
            ud(s.parent.vnode) && Hp(r, t, n, s),
            s = s.parent
    }
}
function Hp(e, t, n, r) {
    const s = Mo(t, e, r, !0);
    Un( () => {
        _i(r[t], s)
    }
    , n)
}
function Mo(e, t, n=Xe, r=!1) {
    if (n) {
        const s = n[e] || (n[e] = [])
          , o = t.__weh || (t.__weh = (...a) => {
            sn();
            const i = fs(n)
              , l = Nt(t, n, e, a);
            return i(),
            on(),
            l
        }
        );
        return r ? s.unshift(o) : s.push(o),
        o
    }
}
const dn = e => (t, n=Xe) => {
    (!ns || e === "sp") && Mo(e, (...r) => t(...r), n)
}
  , pd = dn("bm")
  , jt = dn("m")
  , jp = dn("bu")
  , Vp = dn("u")
  , Ii = dn("bum")
  , Un = dn("um")
  , Wp = dn("sp")
  , zp = dn("rtg")
  , Up = dn("rtc");
function Gp(e, t=Xe) {
    Mo("ec", e, t)
}
const Kp = "components"
  , gd = Symbol.for("v-ndc");
function Ma(e) {
    return Ie(e) ? Yp(Kp, e, !1) || e : e || gd
}
function Yp(e, t, n=!0, r=!1) {
    const s = Ke || Xe;
    if (s) {
        const o = s.type;
        {
            const i = Rg(o, !1);
            if (i && (i === t || i === We(t) || i === ko(We(t))))
                return o
        }
        const a = El(s[e] || o[e], t) || El(s.appContext[e], t);
        return !a && r ? o : a
    }
}
function El(e, t) {
    return e && (e[t] || e[We(t)] || e[ko(We(t))])
}
function en(e, t, n, r) {
    let s;
    const o = n
      , a = ie(e);
    if (a || Ie(e)) {
        const i = a && Fn(e);
        let l = !1
          , u = !1;
        i && (l = !gt(e),
        u = an(e),
        e = $o(e)),
        s = new Array(e.length);
        for (let c = 0, d = e.length; c < d; c++)
            s[c] = t(l ? u ? gr($t(e[c])) : $t(e[c]) : e[c], c, void 0, o)
    } else if (typeof e == "number") {
        s = new Array(e);
        for (let i = 0; i < e; i++)
            s[i] = t(i + 1, i, void 0, o)
    } else if (De(e))
        if (e[Symbol.iterator])
            s = Array.from(e, (i, l) => t(i, l, void 0, o));
        else {
            const i = Object.keys(e);
            s = new Array(i.length);
            for (let l = 0, u = i.length; l < u; l++) {
                const c = i[l];
                s[l] = t(e[c], c, l, o)
            }
        }
    else
        s = [];
    return s
}
function te(e, t, n={}, r, s) {
    if (Ke.ce || Ke.parent && cr(Ke.parent) && Ke.parent.ce) {
        const u = Object.keys(n).length > 0;
        return t !== "default" && (n.name = t),
        T(),
        Y(Fe, null, [he("slot", n, r && r())], u ? -2 : 64)
    }
    let o = e[t];
    o && o._c && (o._d = !1),
    T();
    const a = o && md(o(n))
      , i = n.key || a && a.key
      , l = Y(Fe, {
        key: (i && !yt(i) ? i : `_${t}`) + (!a && r ? "_fb" : "")
    }, a || (r ? r() : []), a && e._ === 1 ? 64 : -2);
    return l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]),
    o && o._c && (o._d = !0),
    l
}
function md(e) {
    return e.some(t => ts(t) ? !(t.type === Ht || t.type === Fe && !md(t.children)) : !0) ? e : null
}
function Jp(e, t) {
    const n = {};
    for (const r in e)
        n[Vr(r)] = e[r];
    return n
}
const Ta = e => e ? Fd(e) ? Io(e) : Ta(e.parent) : null
  , Gr = ze(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => Ta(e.parent),
    $root: e => Ta(e.root),
    $host: e => e.ce,
    $emit: e => e.emit,
    $options: e => bd(e),
    $forceUpdate: e => e.f || (e.f = () => {
        Pi(e.update)
    }
    ),
    $nextTick: e => e.n || (e.n = lt.bind(e.proxy)),
    $watch: e => Rp.bind(e)
})
  , Zo = (e, t) => e !== Ce && !e.__isScriptSetup && Ae(e, t)
  , Qp = {
    get({_: e}, t) {
        if (t === "__v_skip")
            return !0;
        const {ctx: n, setupState: r, data: s, props: o, accessCache: a, type: i, appContext: l} = e;
        if (t[0] !== "$") {
            const f = a[t];
            if (f !== void 0)
                switch (f) {
                case 1:
                    return r[t];
                case 2:
                    return s[t];
                case 4:
                    return n[t];
                case 3:
                    return o[t]
                }
            else {
                if (Zo(r, t))
                    return a[t] = 1,
                    r[t];
                if (s !== Ce && Ae(s, t))
                    return a[t] = 2,
                    s[t];
                if (Ae(o, t))
                    return a[t] = 3,
                    o[t];
                if (n !== Ce && Ae(n, t))
                    return a[t] = 4,
                    n[t];
                Ra && (a[t] = 0)
            }
        }
        const u = Gr[t];
        let c, d;
        if (u)
            return t === "$attrs" && Ze(e.attrs, "get", ""),
            u(e);
        if ((c = i.__cssModules) && (c = c[t]))
            return c;
        if (n !== Ce && Ae(n, t))
            return a[t] = 4,
            n[t];
        if (d = l.config.globalProperties,
        Ae(d, t))
            return d[t]
    },
    set({_: e}, t, n) {
        const {data: r, setupState: s, ctx: o} = e;
        return Zo(s, t) ? (s[t] = n,
        !0) : r !== Ce && Ae(r, t) ? (r[t] = n,
        !0) : Ae(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (o[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: r, appContext: s, props: o, type: a}}, i) {
        let l;
        return !!(n[i] || e !== Ce && i[0] !== "$" && Ae(e, i) || Zo(t, i) || Ae(o, i) || Ae(r, i) || Ae(Gr, i) || Ae(s.config.globalProperties, i) || (l = a.__cssModules) && l[i])
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : Ae(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
};
function yd() {
    return Zp().slots
}
function Zp(e) {
    const t = tt();
    return t.setupContext || (t.setupContext = Bd(t))
}
function Xr(e) {
    return ie(e) ? e.reduce( (t, n) => (t[n] = null,
    t), {}) : e
}
function Xp(e, t) {
    const n = Xr(e);
    for (const r in t) {
        if (r.startsWith("__skip"))
            continue;
        let s = n[r];
        s ? ie(s) || de(s) ? s = n[r] = {
            type: s,
            default: t[r]
        } : s.default = t[r] : s === null && (s = n[r] = {
            default: t[r]
        }),
        s && t[`__skip_${r}`] && (s.skipFactory = !0)
    }
    return n
}
function eg(e, t) {
    return !e || !t ? e || t : ie(e) && ie(t) ? e.concat(t) : ze({}, Xr(e), Xr(t))
}
let Ra = !0;
function tg(e) {
    const t = bd(e)
      , n = e.proxy
      , r = e.ctx;
    Ra = !1,
    t.beforeCreate && Pl(t.beforeCreate, e, "bc");
    const {data: s, computed: o, methods: a, watch: i, provide: l, inject: u, created: c, beforeMount: d, mounted: f, beforeUpdate: p, updated: h, activated: g, deactivated: m, beforeDestroy: b, beforeUnmount: y, destroyed: v, unmounted: k, render: _, renderTracked: $, renderTriggered: A, errorCaptured: S, serverPrefetch: P, expose: U, inheritAttrs: ee, components: M, directives: q, filters: D} = t;
    if (u && ng(u, r, null),
    a)
        for (const H in a) {
            const j = a[H];
            de(j) && (r[H] = j.bind(n))
        }
    if (s) {
        const H = s.call(n, n);
        De(H) && (e.data = St(H))
    }
    if (Ra = !0,
    o)
        for (const H in o) {
            const j = o[H]
              , le = de(j) ? j.bind(n, n) : de(j.get) ? j.get.bind(n, n) : Ft
              , K = !de(j) && de(j.set) ? j.set.bind(n) : Ft
              , we = O({
                get: le,
                set: K
            });
            Object.defineProperty(r, H, {
                enumerable: !0,
                configurable: !0,
                get: () => we.value,
                set: pe => we.value = pe
            })
        }
    if (i)
        for (const H in i)
            vd(i[H], r, n, H);
    if (l) {
        const H = de(l) ? l.call(n) : l;
        Reflect.ownKeys(H).forEach(j => {
            Mi(j, H[j])
        }
        )
    }
    c && Pl(c, e, "c");
    function R(H, j) {
        ie(j) ? j.forEach(le => H(le.bind(n))) : j && H(j.bind(n))
    }
    if (R(pd, d),
    R(jt, f),
    R(jp, p),
    R(Vp, h),
    R(dd, g),
    R(fd, m),
    R(Gp, S),
    R(Up, $),
    R(zp, A),
    R(Ii, y),
    R(Un, k),
    R(Wp, P),
    ie(U))
        if (U.length) {
            const H = e.exposed || (e.exposed = {});
            U.forEach(j => {
                Object.defineProperty(H, j, {
                    get: () => n[j],
                    set: le => n[j] = le,
                    enumerable: !0
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    _ && e.render === Ft && (e.render = _),
    ee != null && (e.inheritAttrs = ee),
    M && (e.components = M),
    q && (e.directives = q),
    P && cd(e)
}
function ng(e, t, n=Ft) {
    ie(e) && (e = Ia(e));
    for (const r in e) {
        const s = e[r];
        let o;
        De(s) ? "default"in s ? o = et(s.from || r, s.default, !0) : o = et(s.from || r) : o = et(s),
        Pe(o) ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: a => o.value = a
        }) : t[r] = o
    }
}
function Pl(e, t, n) {
    Nt(ie(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function vd(e, t, n, r) {
    let s = r.includes(".") ? id(n, r) : () => n[r];
    if (Ie(e)) {
        const o = t[e];
        de(o) && Oe(s, o)
    } else if (de(e))
        Oe(s, e.bind(n));
    else if (De(e))
        if (ie(e))
            e.forEach(o => vd(o, t, n, r));
        else {
            const o = de(e.handler) ? e.handler.bind(n) : t[e.handler];
            de(o) && Oe(s, o, e)
        }
}
function bd(e) {
    const t = e.type
      , {mixins: n, extends: r} = t
      , {mixins: s, optionsCache: o, config: {optionMergeStrategies: a}} = e.appContext
      , i = o.get(t);
    let l;
    return i ? l = i : !s.length && !n && !r ? l = t : (l = {},
    s.length && s.forEach(u => Qs(l, u, a, !0)),
    Qs(l, t, a)),
    De(t) && o.set(t, l),
    l
}
function Qs(e, t, n, r=!1) {
    const {mixins: s, extends: o} = t;
    o && Qs(e, o, n, !0),
    s && s.forEach(a => Qs(e, a, n, !0));
    for (const a in t)
        if (!(r && a === "expose")) {
            const i = rg[a] || n && n[a];
            e[a] = i ? i(e[a], t[a]) : t[a]
        }
    return e
}
const rg = {
    data: Ml,
    props: Tl,
    emits: Tl,
    methods: Lr,
    computed: Lr,
    beforeCreate: nt,
    created: nt,
    beforeMount: nt,
    mounted: nt,
    beforeUpdate: nt,
    updated: nt,
    beforeDestroy: nt,
    beforeUnmount: nt,
    destroyed: nt,
    unmounted: nt,
    activated: nt,
    deactivated: nt,
    errorCaptured: nt,
    serverPrefetch: nt,
    components: Lr,
    directives: Lr,
    watch: og,
    provide: Ml,
    inject: sg
};
function Ml(e, t) {
    return t ? e ? function() {
        return ze(de(e) ? e.call(this, this) : e, de(t) ? t.call(this, this) : t)
    }
    : t : e
}
function sg(e, t) {
    return Lr(Ia(e), Ia(t))
}
function Ia(e) {
    if (ie(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function nt(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function Lr(e, t) {
    return e ? ze(Object.create(null), e, t) : t
}
function Tl(e, t) {
    return e ? ie(e) && ie(t) ? [...new Set([...e, ...t])] : ze(Object.create(null), Xr(e), Xr(t ?? {})) : t
}
function og(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = ze(Object.create(null), e);
    for (const r in t)
        n[r] = nt(e[r], t[r]);
    return n
}
function wd() {
    return {
        app: null,
        config: {
            isNativeTag: $u,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let ag = 0;
function ig(e, t) {
    return function(r, s=null) {
        de(r) || (r = ze({}, r)),
        s != null && !De(s) && (s = null);
        const o = wd()
          , a = new WeakSet
          , i = [];
        let l = !1;
        const u = o.app = {
            _uid: ag++,
            _component: r,
            _props: s,
            _container: null,
            _context: o,
            _instance: null,
            version: qg,
            get config() {
                return o.config
            },
            set config(c) {},
            use(c, ...d) {
                return a.has(c) || (c && de(c.install) ? (a.add(c),
                c.install(u, ...d)) : de(c) && (a.add(c),
                c(u, ...d))),
                u
            },
            mixin(c) {
                return o.mixins.includes(c) || o.mixins.push(c),
                u
            },
            component(c, d) {
                return d ? (o.components[c] = d,
                u) : o.components[c]
            },
            directive(c, d) {
                return d ? (o.directives[c] = d,
                u) : o.directives[c]
            },
            mount(c, d, f) {
                if (!l) {
                    const p = u._ceVNode || he(r, s);
                    return p.appContext = o,
                    f === !0 ? f = "svg" : f === !1 && (f = void 0),
                    e(p, c, f),
                    l = !0,
                    u._container = c,
                    c.__vue_app__ = u,
                    Io(p.component)
                }
            },
            onUnmount(c) {
                i.push(c)
            },
            unmount() {
                l && (Nt(i, u._instance, 16),
                e(null, u._container),
                delete u._container.__vue_app__)
            },
            provide(c, d) {
                return o.provides[c] = d,
                u
            },
            runWithContext(c) {
                const d = Bn;
                Bn = u;
                try {
                    return c()
                } finally {
                    Bn = d
                }
            }
        };
        return u
    }
}
let Bn = null;
function lg(e, t, n=Ce) {
    const r = tt()
      , s = We(t)
      , o = un(t)
      , a = xd(e, s)
      , i = Eo( (l, u) => {
        let c, d = Ce, f;
        return Tp( () => {
            const p = e[s];
            Qe(c, p) && (c = p,
            u())
        }
        ),
        {
            get() {
                return l(),
                n.get ? n.get(c) : c
            },
            set(p) {
                const h = n.set ? n.set(p) : p;
                if (!Qe(h, c) && !(d !== Ce && Qe(p, d)))
                    return;
                const g = r.vnode.props;
                g && (t in g || s in g || o in g) && (`onUpdate:${t}`in g || `onUpdate:${s}`in g || `onUpdate:${o}`in g) || (c = p,
                u()),
                r.emit(`update:${t}`, h),
                Qe(p, h) && Qe(p, d) && !Qe(h, f) && u(),
                d = p,
                f = h
            }
        }
    }
    );
    return i[Symbol.iterator] = () => {
        let l = 0;
        return {
            next() {
                return l < 2 ? {
                    value: l++ ? a || Ce : i,
                    done: !1
                } : {
                    done: !0
                }
            }
        }
    }
    ,
    i
}
const xd = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${We(t)}Modifiers`] || e[`${un(t)}Modifiers`];
function cg(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const r = e.vnode.props || Ce;
    let s = n;
    const o = t.startsWith("update:")
      , a = o && xd(r, t.slice(7));
    a && (a.trim && (s = n.map(c => Ie(c) ? c.trim() : c)),
    a.number && (s = n.map(Ci)));
    let i, l = r[i = Vr(t)] || r[i = Vr(We(t))];
    !l && o && (l = r[i = Vr(un(t))]),
    l && Nt(l, e, 6, s);
    const u = r[i + "Once"];
    if (u) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[i])
            return;
        e.emitted[i] = !0,
        Nt(u, e, 6, s)
    }
}
const ug = new WeakMap;
function kd(e, t, n=!1) {
    const r = n ? ug : t.emitsCache
      , s = r.get(e);
    if (s !== void 0)
        return s;
    const o = e.emits;
    let a = {}
      , i = !1;
    if (!de(e)) {
        const l = u => {
            const c = kd(u, t, !0);
            c && (i = !0,
            ze(a, c))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(l),
        e.extends && l(e.extends),
        e.mixins && e.mixins.forEach(l)
    }
    return !o && !i ? (De(e) && r.set(e, null),
    null) : (ie(o) ? o.forEach(l => a[l] = null) : ze(a, o),
    De(e) && r.set(e, a),
    a)
}
function To(e, t) {
    return !e || !vo(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    Ae(e, t[0].toLowerCase() + t.slice(1)) || Ae(e, un(t)) || Ae(e, t))
}
function Rl(e) {
    const {type: t, vnode: n, proxy: r, withProxy: s, propsOptions: [o], slots: a, attrs: i, emit: l, render: u, renderCache: c, props: d, data: f, setupState: p, ctx: h, inheritAttrs: g} = e
      , m = Ys(e);
    let b, y;
    try {
        if (n.shapeFlag & 4) {
            const k = s || r
              , _ = k;
            b = It(u.call(_, k, c, d, p, f, h)),
            y = i
        } else {
            const k = t;
            b = It(k.length > 1 ? k(d, {
                attrs: i,
                slots: a,
                emit: l
            }) : k(d, null)),
            y = t.props ? i : dg(i)
        }
    } catch (k) {
        Kr.length = 0,
        Po(k, e, 1),
        b = he(Ht)
    }
    let v = b;
    if (y && g !== !1) {
        const k = Object.keys(y)
          , {shapeFlag: _} = v;
        k.length && _ & 7 && (o && k.some(bo) && (y = fg(y, o)),
        v = Vn(v, y, !1, !0))
    }
    return n.dirs && (v = Vn(v, null, !1, !0),
    v.dirs = v.dirs ? v.dirs.concat(n.dirs) : n.dirs),
    n.transition && Ri(v, n.transition),
    b = v,
    Ys(m),
    b
}
const dg = e => {
    let t;
    for (const n in e)
        (n === "class" || n === "style" || vo(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , fg = (e, t) => {
    const n = {};
    for (const r in e)
        (!bo(r) || !(r.slice(9)in t)) && (n[r] = e[r]);
    return n
}
;
function hg(e, t, n) {
    const {props: r, children: s, component: o} = e
      , {props: a, children: i, patchFlag: l} = t
      , u = o.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && l >= 0) {
        if (l & 1024)
            return !0;
        if (l & 16)
            return r ? Il(r, a, u) : !!a;
        if (l & 8) {
            const c = t.dynamicProps;
            for (let d = 0; d < c.length; d++) {
                const f = c[d];
                if (_d(a, r, f) && !To(u, f))
                    return !0
            }
        }
    } else
        return (s || i) && (!i || !i.$stable) ? !0 : r === a ? !1 : r ? a ? Il(r, a, u) : !0 : !!a;
    return !1
}
function Il(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length)
        return !0;
    for (let s = 0; s < r.length; s++) {
        const o = r[s];
        if (_d(t, e, o) && !To(n, o))
            return !0
    }
    return !1
}
function _d(e, t, n) {
    const r = e[n]
      , s = t[n];
    return n === "style" && De(r) && De(s) ? !Si(r, s) : r !== s
}
function pg({vnode: e, parent: t, suspense: n}, r) {
    for (; t; ) {
        const s = t.subTree;
        if (s.suspense && s.suspense.activeBranch === e && (s.suspense.vnode.el = s.el = r,
        e = s),
        s === e)
            (e = t.vnode).el = r,
            t = t.parent;
        else
            break
    }
    n && n.activeBranch === e && (n.vnode.el = r)
}
const Cd = {}
  , Sd = () => Object.create(Cd)
  , $d = e => Object.getPrototypeOf(e) === Cd;
function gg(e, t, n, r=!1) {
    const s = {}
      , o = Sd();
    e.propsDefaults = Object.create(null),
    Ad(e, t, s, o);
    for (const a in e.propsOptions[0])
        a in s || (s[a] = void 0);
    n ? e.props = r ? s : yp(s) : e.type.props ? e.props = s : e.props = o,
    e.attrs = o
}
function mg(e, t, n, r) {
    const {props: s, attrs: o, vnode: {patchFlag: a}} = e
      , i = _e(s)
      , [l] = e.propsOptions;
    let u = !1;
    if ((r || a > 0) && !(a & 16)) {
        if (a & 8) {
            const c = e.vnode.dynamicProps;
            for (let d = 0; d < c.length; d++) {
                let f = c[d];
                if (To(e.emitsOptions, f))
                    continue;
                const p = t[f];
                if (l)
                    if (Ae(o, f))
                        p !== o[f] && (o[f] = p,
                        u = !0);
                    else {
                        const h = We(f);
                        s[h] = qa(l, i, h, p, e, !1)
                    }
                else
                    p !== o[f] && (o[f] = p,
                    u = !0)
            }
        }
    } else {
        Ad(e, t, s, o) && (u = !0);
        let c;
        for (const d in i)
            (!t || !Ae(t, d) && ((c = un(d)) === d || !Ae(t, c))) && (l ? n && (n[d] !== void 0 || n[c] !== void 0) && (s[d] = qa(l, i, d, void 0, e, !0)) : delete s[d]);
        if (o !== i)
            for (const d in o)
                (!t || !Ae(t, d)) && (delete o[d],
                u = !0)
    }
    u && Qt(e.attrs, "set", "")
}
function Ad(e, t, n, r) {
    const [s,o] = e.propsOptions;
    let a = !1, i;
    if (t)
        for (let l in t) {
            if (jr(l))
                continue;
            const u = t[l];
            let c;
            s && Ae(s, c = We(l)) ? !o || !o.includes(c) ? n[c] = u : (i || (i = {}))[c] = u : To(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u,
            a = !0)
        }
    if (o) {
        const l = _e(n)
          , u = i || Ce;
        for (let c = 0; c < o.length; c++) {
            const d = o[c];
            n[d] = qa(s, l, d, u[d], e, !Ae(u, d))
        }
    }
    return a
}
function qa(e, t, n, r, s, o) {
    const a = e[n];
    if (a != null) {
        const i = Ae(a, "default");
        if (i && r === void 0) {
            const l = a.default;
            if (a.type !== Function && !a.skipFactory && de(l)) {
                const {propsDefaults: u} = s;
                if (n in u)
                    r = u[n];
                else {
                    const c = fs(s);
                    r = u[n] = l.call(null, t),
                    c()
                }
            } else
                r = l;
            s.ce && s.ce._setProp(n, r)
        }
        a[0] && (o && !i ? r = !1 : a[1] && (r === "" || r === un(n)) && (r = !0))
    }
    return r
}
const yg = new WeakMap;
function Od(e, t, n=!1) {
    const r = n ? yg : t.propsCache
      , s = r.get(e);
    if (s)
        return s;
    const o = e.props
      , a = {}
      , i = [];
    let l = !1;
    if (!de(e)) {
        const c = d => {
            l = !0;
            const [f,p] = Od(d, t, !0);
            ze(a, f),
            p && i.push(...p)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(c),
        e.extends && c(e.extends),
        e.mixins && e.mixins.forEach(c)
    }
    if (!o && !l)
        return De(e) && r.set(e, ar),
        ar;
    if (ie(o))
        for (let c = 0; c < o.length; c++) {
            const d = We(o[c]);
            ql(d) && (a[d] = Ce)
        }
    else if (o)
        for (const c in o) {
            const d = We(c);
            if (ql(d)) {
                const f = o[c]
                  , p = a[d] = ie(f) || de(f) ? {
                    type: f
                } : ze({}, f)
                  , h = p.type;
                let g = !1
                  , m = !0;
                if (ie(h))
                    for (let b = 0; b < h.length; ++b) {
                        const y = h[b]
                          , v = de(y) && y.name;
                        if (v === "Boolean") {
                            g = !0;
                            break
                        } else
                            v === "String" && (m = !1)
                    }
                else
                    g = de(h) && h.name === "Boolean";
                p[0] = g,
                p[1] = m,
                (g || Ae(p, "default")) && i.push(d)
            }
        }
    const u = [a, i];
    return De(e) && r.set(e, u),
    u
}
function ql(e) {
    return e[0] !== "$" && !jr(e)
}
const qi = e => e === "_" || e === "_ctx" || e === "$stable"
  , Fi = e => ie(e) ? e.map(It) : [It(e)]
  , vg = (e, t, n) => {
    if (t._n)
        return t;
    const r = V( (...s) => Fi(t(...s)), n);
    return r._c = !1,
    r
}
  , Dd = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
        if (qi(s))
            continue;
        const o = e[s];
        if (de(o))
            t[s] = vg(s, o, r);
        else if (o != null) {
            const a = Fi(o);
            t[s] = () => a
        }
    }
}
  , Ed = (e, t) => {
    const n = Fi(t);
    e.slots.default = () => n
}
  , Pd = (e, t, n) => {
    for (const r in t)
        (n || !qi(r)) && (e[r] = t[r])
}
  , bg = (e, t, n) => {
    const r = e.slots = Sd();
    if (e.vnode.shapeFlag & 32) {
        const s = t._;
        s ? (Pd(r, t, n),
        n && Pu(r, "_", s, !0)) : Dd(t, r)
    } else
        t && Ed(e, t)
}
  , wg = (e, t, n) => {
    const {vnode: r, slots: s} = e;
    let o = !0
      , a = Ce;
    if (r.shapeFlag & 32) {
        const i = t._;
        i ? n && i === 1 ? o = !1 : Pd(s, t, n) : (o = !t.$stable,
        Dd(t, s)),
        a = t
    } else
        t && (Ed(e, t),
        a = {
            default: 1
        });
    if (o)
        for (const i in s)
            !qi(i) && a[i] == null && delete s[i]
}
  , rt = Sg;
function xg(e) {
    return kg(e)
}
function kg(e, t) {
    const n = _o();
    n.__VUE__ = !0;
    const {insert: r, remove: s, patchProp: o, createElement: a, createText: i, createComment: l, setText: u, setElementText: c, parentNode: d, nextSibling: f, setScopeId: p=Ft, insertStaticContent: h} = e
      , g = (w, C, E, F=null, I=null, L=null, J=void 0, G=null, z=!!C.dynamicChildren) => {
        if (w === C)
            return;
        w && !Pr(w, C) && (F = ut(w),
        pe(w, I, L, !0),
        w = null),
        C.patchFlag === -2 && (z = !1,
        C.dynamicChildren = null);
        const {type: B, ref: ae, shapeFlag: Z} = C;
        switch (B) {
        case Ro:
            m(w, C, E, F);
            break;
        case Ht:
            b(w, C, E, F);
            break;
        case Fs:
            w == null && y(C, E, F, J);
            break;
        case Fe:
            M(w, C, E, F, I, L, J, G, z);
            break;
        default:
            Z & 1 ? _(w, C, E, F, I, L, J, G, z) : Z & 6 ? q(w, C, E, F, I, L, J, G, z) : (Z & 64 || Z & 128) && B.process(w, C, E, F, I, L, J, G, z, bt)
        }
        ae != null && I ? Ur(ae, w && w.ref, L, C || w, !C) : ae == null && w && w.ref != null && Ur(w.ref, null, L, w, !0)
    }
      , m = (w, C, E, F) => {
        if (w == null)
            r(C.el = i(C.children), E, F);
        else {
            const I = C.el = w.el;
            C.children !== w.children && u(I, C.children)
        }
    }
      , b = (w, C, E, F) => {
        w == null ? r(C.el = l(C.children || ""), E, F) : C.el = w.el
    }
      , y = (w, C, E, F) => {
        [w.el,w.anchor] = h(w.children, C, E, F, w.el, w.anchor)
    }
      , v = ({el: w, anchor: C}, E, F) => {
        let I;
        for (; w && w !== C; )
            I = f(w),
            r(w, E, F),
            w = I;
        r(C, E, F)
    }
      , k = ({el: w, anchor: C}) => {
        let E;
        for (; w && w !== C; )
            E = f(w),
            s(w),
            w = E;
        s(C)
    }
      , _ = (w, C, E, F, I, L, J, G, z) => {
        if (C.type === "svg" ? J = "svg" : C.type === "math" && (J = "mathml"),
        w == null)
            $(C, E, F, I, L, J, G, z);
        else {
            const B = w.el && w.el._isVueCE ? w.el : null;
            try {
                B && B._beginPatch(),
                P(w, C, I, L, J, G, z)
            } finally {
                B && B._endPatch()
            }
        }
    }
      , $ = (w, C, E, F, I, L, J, G) => {
        let z, B;
        const {props: ae, shapeFlag: Z, transition: oe, dirs: ce} = w;
        if (z = w.el = a(w.type, L, ae && ae.is, ae),
        Z & 8 ? c(z, w.children) : Z & 16 && S(w.children, z, null, F, I, Xo(w, L), J, G),
        ce && An(w, null, F, "created"),
        A(z, w, w.scopeId, J, F),
        ae) {
            for (const X in ae)
                X !== "value" && !jr(X) && o(z, X, null, ae[X], L, F);
            "value"in ae && o(z, "value", null, ae.value, L),
            (B = ae.onVnodeBeforeMount) && Mt(B, F, w)
        }
        ce && An(w, null, F, "beforeMount");
        const ve = _g(I, oe);
        ve && oe.beforeEnter(z),
        r(z, C, E),
        ((B = ae && ae.onVnodeMounted) || ve || ce) && rt( () => {
            try {
                B && Mt(B, F, w),
                ve && oe.enter(z),
                ce && An(w, null, F, "mounted")
            } finally {}
        }
        , I)
    }
      , A = (w, C, E, F, I) => {
        if (E && p(w, E),
        F)
            for (let L = 0; L < F.length; L++)
                p(w, F[L]);
        if (I) {
            let L = I.subTree;
            if (C === L || Rd(L.type) && (L.ssContent === C || L.ssFallback === C)) {
                const J = I.vnode;
                A(w, J, J.scopeId, J.slotScopeIds, I.parent)
            }
        }
    }
      , S = (w, C, E, F, I, L, J, G, z=0) => {
        for (let B = z; B < w.length; B++) {
            const ae = w[B] = G ? Yt(w[B]) : It(w[B]);
            g(null, ae, C, E, F, I, L, J, G)
        }
    }
      , P = (w, C, E, F, I, L, J) => {
        const G = C.el = w.el;
        let {patchFlag: z, dynamicChildren: B, dirs: ae} = C;
        z |= w.patchFlag & 16;
        const Z = w.props || Ce
          , oe = C.props || Ce;
        let ce;
        if (E && On(E, !1),
        (ce = oe.onVnodeBeforeUpdate) && Mt(ce, E, C, w),
        ae && An(C, w, E, "beforeUpdate"),
        E && On(E, !0),
        (Z.innerHTML && oe.innerHTML == null || Z.textContent && oe.textContent == null) && c(G, ""),
        B ? U(w.dynamicChildren, B, G, E, F, Xo(C, I), L) : J || j(w, C, G, null, E, F, Xo(C, I), L, !1),
        z > 0) {
            if (z & 16)
                ee(G, Z, oe, E, I);
            else if (z & 2 && Z.class !== oe.class && o(G, "class", null, oe.class, I),
            z & 4 && o(G, "style", Z.style, oe.style, I),
            z & 8) {
                const ve = C.dynamicProps;
                for (let X = 0; X < ve.length; X++) {
                    const ue = ve[X]
                      , be = Z[ue]
                      , qe = oe[ue];
                    (qe !== be || ue === "value") && o(G, ue, be, qe, I, E)
                }
            }
            z & 1 && w.children !== C.children && c(G, C.children)
        } else
            !J && B == null && ee(G, Z, oe, E, I);
        ((ce = oe.onVnodeUpdated) || ae) && rt( () => {
            ce && Mt(ce, E, C, w),
            ae && An(C, w, E, "updated")
        }
        , F)
    }
      , U = (w, C, E, F, I, L, J) => {
        for (let G = 0; G < C.length; G++) {
            const z = w[G]
              , B = C[G]
              , ae = z.el && (z.type === Fe || !Pr(z, B) || z.shapeFlag & 198) ? d(z.el) : E;
            g(z, B, ae, null, F, I, L, J, !0)
        }
    }
      , ee = (w, C, E, F, I) => {
        if (C !== E) {
            if (C !== Ce)
                for (const L in C)
                    !jr(L) && !(L in E) && o(w, L, C[L], null, I, F);
            for (const L in E) {
                if (jr(L))
                    continue;
                const J = E[L]
                  , G = C[L];
                J !== G && L !== "value" && o(w, L, G, J, I, F)
            }
            "value"in E && o(w, "value", C.value, E.value, I)
        }
    }
      , M = (w, C, E, F, I, L, J, G, z) => {
        const B = C.el = w ? w.el : i("")
          , ae = C.anchor = w ? w.anchor : i("");
        let {patchFlag: Z, dynamicChildren: oe, slotScopeIds: ce} = C;
        ce && (G = G ? G.concat(ce) : ce),
        w == null ? (r(B, E, F),
        r(ae, E, F),
        S(C.children || [], E, ae, I, L, J, G, z)) : Z > 0 && Z & 64 && oe && w.dynamicChildren && w.dynamicChildren.length === oe.length ? (U(w.dynamicChildren, oe, E, I, L, J, G),
        (C.key != null || I && C === I.subTree) && Li(w, C, !0)) : j(w, C, E, ae, I, L, J, G, z)
    }
      , q = (w, C, E, F, I, L, J, G, z) => {
        C.slotScopeIds = G,
        w == null ? C.shapeFlag & 512 ? I.ctx.activate(C, E, F, J, z) : D(C, E, F, I, L, J, z) : N(w, C, z)
    }
      , D = (w, C, E, F, I, L, J) => {
        const G = w.component = Eg(w, F, I);
        if (ud(w) && (G.ctx.renderer = bt),
        Pg(G, !1, J),
        G.asyncDep) {
            if (I && I.registerDep(G, R, J),
            !w.el) {
                const z = G.subTree = he(Ht);
                b(null, z, C, E),
                w.placeholder = z.el
            }
        } else
            R(G, w, C, E, I, L, J)
    }
      , N = (w, C, E) => {
        const F = C.component = w.component;
        if (hg(w, C, E))
            if (F.asyncDep && !F.asyncResolved) {
                H(F, C, E);
                return
            } else
                F.next = C,
                F.update();
        else
            C.el = w.el,
            F.vnode = C
    }
      , R = (w, C, E, F, I, L, J) => {
        const G = () => {
            if (w.isMounted) {
                let {next: Z, bu: oe, u: ce, parent: ve, vnode: X} = w;
                {
                    const dt = Md(w);
                    if (dt) {
                        Z && (Z.el = X.el,
                        H(w, Z, J)),
                        dt.asyncDep.then( () => {
                            rt( () => {
                                w.isUnmounted || B()
                            }
                            , I)
                        }
                        );
                        return
                    }
                }
                let ue = Z, be;
                On(w, !1),
                Z ? (Z.el = X.el,
                H(w, Z, J)) : Z = X,
                oe && qs(oe),
                (be = Z.props && Z.props.onVnodeBeforeUpdate) && Mt(be, ve, Z, X),
                On(w, !0);
                const qe = Rl(w)
                  , je = w.subTree;
                w.subTree = qe,
                g(je, qe, d(je.el), ut(je), w, I, L),
                Z.el = qe.el,
                ue === null && pg(w, qe.el),
                ce && rt(ce, I),
                (be = Z.props && Z.props.onVnodeUpdated) && rt( () => Mt(be, ve, Z, X), I)
            } else {
                let Z;
                const {el: oe, props: ce} = C
                  , {bm: ve, m: X, parent: ue, root: be, type: qe} = w
                  , je = cr(C);
                On(w, !1),
                ve && qs(ve),
                !je && (Z = ce && ce.onVnodeBeforeMount) && Mt(Z, ue, C),
                On(w, !0);
                {
                    be.ce && be.ce._hasShadowRoot() && be.ce._injectChildStyle(qe, w.parent ? w.parent.type : void 0);
                    const dt = w.subTree = Rl(w);
                    g(null, dt, E, F, w, I, L),
                    C.el = dt.el
                }
                if (X && rt(X, I),
                !je && (Z = ce && ce.onVnodeMounted)) {
                    const dt = C;
                    rt( () => Mt(Z, ue, dt), I)
                }
                (C.shapeFlag & 256 || ue && cr(ue.vnode) && ue.vnode.shapeFlag & 256) && w.a && rt(w.a, I),
                w.isMounted = !0,
                C = E = F = null
            }
        }
        ;
        w.scope.on();
        const z = w.effect = new qu(G);
        w.scope.off();
        const B = w.update = z.run.bind(z)
          , ae = w.job = z.runIfDirty.bind(z);
        ae.i = w,
        ae.id = w.uid,
        z.scheduler = () => Pi(ae),
        On(w, !0),
        B()
    }
      , H = (w, C, E) => {
        C.component = w;
        const F = w.vnode.props;
        w.vnode = C,
        w.next = null,
        mg(w, C.props, F, E),
        wg(w, C.children, E),
        sn(),
        Cl(w),
        on()
    }
      , j = (w, C, E, F, I, L, J, G, z=!1) => {
        const B = w && w.children
          , ae = w ? w.shapeFlag : 0
          , Z = C.children
          , {patchFlag: oe, shapeFlag: ce} = C;
        if (oe > 0) {
            if (oe & 128) {
                K(B, Z, E, F, I, L, J, G, z);
                return
            } else if (oe & 256) {
                le(B, Z, E, F, I, L, J, G, z);
                return
            }
        }
        ce & 8 ? (ae & 16 && $e(B, I, L),
        Z !== B && c(E, Z)) : ae & 16 ? ce & 16 ? K(B, Z, E, F, I, L, J, G, z) : $e(B, I, L, !0) : (ae & 8 && c(E, ""),
        ce & 16 && S(Z, E, F, I, L, J, G, z))
    }
      , le = (w, C, E, F, I, L, J, G, z) => {
        w = w || ar,
        C = C || ar;
        const B = w.length
          , ae = C.length
          , Z = Math.min(B, ae);
        let oe;
        for (oe = 0; oe < Z; oe++) {
            const ce = C[oe] = z ? Yt(C[oe]) : It(C[oe]);
            g(w[oe], ce, E, null, I, L, J, G, z)
        }
        B > ae ? $e(w, I, L, !0, !1, Z) : S(C, E, F, I, L, J, G, z, Z)
    }
      , K = (w, C, E, F, I, L, J, G, z) => {
        let B = 0;
        const ae = C.length;
        let Z = w.length - 1
          , oe = ae - 1;
        for (; B <= Z && B <= oe; ) {
            const ce = w[B]
              , ve = C[B] = z ? Yt(C[B]) : It(C[B]);
            if (Pr(ce, ve))
                g(ce, ve, E, null, I, L, J, G, z);
            else
                break;
            B++
        }
        for (; B <= Z && B <= oe; ) {
            const ce = w[Z]
              , ve = C[oe] = z ? Yt(C[oe]) : It(C[oe]);
            if (Pr(ce, ve))
                g(ce, ve, E, null, I, L, J, G, z);
            else
                break;
            Z--,
            oe--
        }
        if (B > Z) {
            if (B <= oe) {
                const ce = oe + 1
                  , ve = ce < ae ? C[ce].el : F;
                for (; B <= oe; )
                    g(null, C[B] = z ? Yt(C[B]) : It(C[B]), E, ve, I, L, J, G, z),
                    B++
            }
        } else if (B > oe)
            for (; B <= Z; )
                pe(w[B], I, L, !0),
                B++;
        else {
            const ce = B
              , ve = B
              , X = new Map;
            for (B = ve; B <= oe; B++) {
                const ft = C[B] = z ? Yt(C[B]) : It(C[B]);
                ft.key != null && X.set(ft.key, B)
            }
            let ue, be = 0;
            const qe = oe - ve + 1;
            let je = !1
              , dt = 0;
            const Ar = new Array(qe);
            for (B = 0; B < qe; B++)
                Ar[B] = 0;
            for (B = ce; B <= Z; B++) {
                const ft = w[B];
                if (be >= qe) {
                    pe(ft, I, L, !0);
                    continue
                }
                let Pt;
                if (ft.key != null)
                    Pt = X.get(ft.key);
                else
                    for (ue = ve; ue <= oe; ue++)
                        if (Ar[ue - ve] === 0 && Pr(ft, C[ue])) {
                            Pt = ue;
                            break
                        }
                Pt === void 0 ? pe(ft, I, L, !0) : (Ar[Pt - ve] = B + 1,
                Pt >= dt ? dt = Pt : je = !0,
                g(ft, C[Pt], E, null, I, L, J, G, z),
                be++)
            }
            const ml = je ? Cg(Ar) : ar;
            for (ue = ml.length - 1,
            B = qe - 1; B >= 0; B--) {
                const ft = ve + B
                  , Pt = C[ft]
                  , yl = C[ft + 1]
                  , vl = ft + 1 < ae ? yl.el || Td(yl) : F;
                Ar[B] === 0 ? g(null, Pt, E, vl, I, L, J, G, z) : je && (ue < 0 || B !== ml[ue] ? we(Pt, E, vl, 2) : ue--)
            }
        }
    }
      , we = (w, C, E, F, I=null) => {
        const {el: L, type: J, transition: G, children: z, shapeFlag: B} = w;
        if (B & 6) {
            we(w.component.subTree, C, E, F);
            return
        }
        if (B & 128) {
            w.suspense.move(C, E, F);
            return
        }
        if (B & 64) {
            J.move(w, C, E, bt);
            return
        }
        if (J === Fe) {
            r(L, C, E);
            for (let Z = 0; Z < z.length; Z++)
                we(z[Z], C, E, F);
            r(w.anchor, C, E);
            return
        }
        if (J === Fs) {
            v(w, C, E);
            return
        }
        if (F !== 2 && B & 1 && G)
            if (F === 0)
                G.beforeEnter(L),
                r(L, C, E),
                rt( () => G.enter(L), I);
            else {
                const {leave: Z, delayLeave: oe, afterLeave: ce} = G
                  , ve = () => {
                    w.ctx.isUnmounted ? s(L) : r(L, C, E)
                }
                  , X = () => {
                    L._isLeaving && L[Np](!0),
                    Z(L, () => {
                        ve(),
                        ce && ce()
                    }
                    )
                }
                ;
                oe ? oe(L, ve, X) : X()
            }
        else
            r(L, C, E)
    }
      , pe = (w, C, E, F=!1, I=!1) => {
        const {type: L, props: J, ref: G, children: z, dynamicChildren: B, shapeFlag: ae, patchFlag: Z, dirs: oe, cacheIndex: ce, memo: ve} = w;
        if (Z === -2 && (I = !1),
        G != null && (sn(),
        Ur(G, null, E, w, !0),
        on()),
        ce != null && (C.renderCache[ce] = void 0),
        ae & 256) {
            C.ctx.deactivate(w);
            return
        }
        const X = ae & 1 && oe
          , ue = !cr(w);
        let be;
        if (ue && (be = J && J.onVnodeBeforeUnmount) && Mt(be, C, w),
        ae & 6)
            xe(w.component, E, F);
        else {
            if (ae & 128) {
                w.suspense.unmount(E, F);
                return
            }
            X && An(w, null, C, "beforeUnmount"),
            ae & 64 ? w.type.remove(w, C, E, bt, F) : B && !B.hasOnce && (L !== Fe || Z > 0 && Z & 64) ? $e(B, C, E, !1, !0) : (L === Fe && Z & 384 || !I && ae & 16) && $e(z, C, E),
            F && Se(w)
        }
        const qe = ve != null && ce == null;
        (ue && (be = J && J.onVnodeUnmounted) || X || qe) && rt( () => {
            be && Mt(be, C, w),
            X && An(w, null, C, "unmounted"),
            qe && (w.el = null)
        }
        , E)
    }
      , Se = w => {
        const {type: C, el: E, anchor: F, transition: I} = w;
        if (C === Fe) {
            Ge(E, F);
            return
        }
        if (C === Fs) {
            k(w);
            return
        }
        const L = () => {
            s(E),
            I && !I.persisted && I.afterLeave && I.afterLeave()
        }
        ;
        if (w.shapeFlag & 1 && I && !I.persisted) {
            const {leave: J, delayLeave: G} = I
              , z = () => J(E, L);
            G ? G(w.el, L, z) : z()
        } else
            L()
    }
      , Ge = (w, C) => {
        let E;
        for (; w !== C; )
            E = f(w),
            s(w),
            w = E;
        s(C)
    }
      , xe = (w, C, E) => {
        const {bum: F, scope: I, job: L, subTree: J, um: G, m: z, a: B} = w;
        Fl(z),
        Fl(B),
        F && qs(F),
        I.stop(),
        L && (L.flags |= 8,
        pe(J, w, C, E)),
        G && rt(G, C),
        rt( () => {
            w.isUnmounted = !0
        }
        , C)
    }
      , $e = (w, C, E, F=!1, I=!1, L=0) => {
        for (let J = L; J < w.length; J++)
            pe(w[J], C, E, F, I)
    }
      , ut = w => {
        if (w.shapeFlag & 6)
            return ut(w.component.subTree);
        if (w.shapeFlag & 128)
            return w.suspense.next();
        const C = f(w.anchor || w.el)
          , E = C && C[ld];
        return E ? f(E) : C
    }
    ;
    let vt = !1;
    const Me = (w, C, E) => {
        let F;
        w == null ? C._vnode && (pe(C._vnode, null, null, !0),
        F = C._vnode.component) : g(C._vnode || null, w, C, null, null, null, E),
        C._vnode = w,
        vt || (vt = !0,
        Cl(F),
        rd(),
        vt = !1)
    }
      , bt = {
        p: g,
        um: pe,
        m: we,
        r: Se,
        mt: D,
        mc: S,
        pc: j,
        pbc: U,
        n: ut,
        o: e
    };
    return {
        render: Me,
        hydrate: void 0,
        createApp: ig(Me)
    }
}
function Xo({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}
function On({effect: e, job: t}, n) {
    n ? (e.flags |= 32,
    t.flags |= 4) : (e.flags &= -33,
    t.flags &= -5)
}
function _g(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function Li(e, t, n=!1) {
    const r = e.children
      , s = t.children;
    if (ie(r) && ie(s))
        for (let o = 0; o < r.length; o++) {
            const a = r[o];
            let i = s[o];
            i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = s[o] = Yt(s[o]),
            i.el = a.el),
            !n && i.patchFlag !== -2 && Li(a, i)),
            i.type === Ro && (i.patchFlag === -1 && (i = s[o] = Yt(i)),
            i.el = a.el),
            i.type === Ht && !i.el && (i.el = a.el)
        }
}
function Cg(e) {
    const t = e.slice()
      , n = [0];
    let r, s, o, a, i;
    const l = e.length;
    for (r = 0; r < l; r++) {
        const u = e[r];
        if (u !== 0) {
            if (s = n[n.length - 1],
            e[s] < u) {
                t[r] = s,
                n.push(r);
                continue
            }
            for (o = 0,
            a = n.length - 1; o < a; )
                i = o + a >> 1,
                e[n[i]] < u ? o = i + 1 : a = i;
            u < e[n[o]] && (o > 0 && (t[r] = n[o - 1]),
            n[o] = r)
        }
    }
    for (o = n.length,
    a = n[o - 1]; o-- > 0; )
        n[o] = a,
        a = t[a];
    return n
}
function Md(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : Md(t)
}
function Fl(e) {
    if (e)
        for (let t = 0; t < e.length; t++)
            e[t].flags |= 8
}
function Td(e) {
    if (e.placeholder)
        return e.placeholder;
    const t = e.component;
    return t ? Td(t.subTree) : null
}
const Rd = e => e.__isSuspense;
function Sg(e, t) {
    t && t.pendingBranch ? ie(e) ? t.effects.push(...e) : t.effects.push(e) : Ep(e)
}
const Fe = Symbol.for("v-fgt")
  , Ro = Symbol.for("v-txt")
  , Ht = Symbol.for("v-cmt")
  , Fs = Symbol.for("v-stc")
  , Kr = [];
let pt = null;
function T(e=!1) {
    Kr.push(pt = e ? null : [])
}
function $g() {
    Kr.pop(),
    pt = Kr[Kr.length - 1] || null
}
let es = 1;
function Zs(e, t=!1) {
    es += e,
    e < 0 && pt && t && (pt.hasOnce = !0)
}
function Id(e) {
    return e.dynamicChildren = es > 0 ? pt || ar : null,
    $g(),
    es > 0 && pt && pt.push(e),
    e
}
function ke(e, t, n, r, s, o) {
    return Id(W(e, t, n, r, s, o, !0))
}
function Y(e, t, n, r, s) {
    return Id(he(e, t, n, r, s, !0))
}
function ts(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function Pr(e, t) {
    return e.type === t.type && e.key === t.key
}
const qd = ({key: e}) => e ?? null
  , Ls = ({ref: e, ref_key: t, ref_for: n}) => (typeof e == "number" && (e = "" + e),
e != null ? Ie(e) || Pe(e) || de(e) ? {
    i: Ke,
    r: e,
    k: t,
    f: !!n
} : e : null);
function W(e, t=null, n=null, r=0, s=null, o=e === Fe ? 0 : 1, a=!1, i=!1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && qd(t),
        ref: t && Ls(t),
        scopeId: od,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: o,
        patchFlag: r,
        dynamicProps: s,
        dynamicChildren: null,
        appContext: null,
        ctx: Ke
    };
    return i ? (Bi(l, n),
    o & 128 && e.normalize(l)) : n && (l.shapeFlag |= Ie(n) ? 8 : 16),
    es > 0 && !a && pt && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && pt.push(l),
    l
}
const he = Ag;
function Ag(e, t=null, n=null, r=0, s=null, o=!1) {
    if ((!e || e === gd) && (e = Ht),
    ts(e)) {
        const i = Vn(e, t, !0);
        return n && Bi(i, n),
        es > 0 && !o && pt && (i.shapeFlag & 6 ? pt[pt.indexOf(e)] = i : pt.push(i)),
        i.patchFlag = -2,
        i
    }
    if (Ig(e) && (e = e.__vccOpts),
    t) {
        t = Je(t);
        let {class: i, style: l} = t;
        i && !Ie(i) && (t.class = Ee(i)),
        De(l) && (Do(l) && !ie(l) && (l = ze({}, l)),
        t.style = _t(l))
    }
    const a = Ie(e) ? 1 : Rd(e) ? 128 : Ip(e) ? 64 : De(e) ? 4 : de(e) ? 2 : 0;
    return W(e, t, n, r, s, a, o, !0)
}
function Je(e) {
    return e ? Do(e) || $d(e) ? ze({}, e) : e : null
}
function Vn(e, t, n=!1, r=!1) {
    const {props: s, ref: o, patchFlag: a, children: i, transition: l} = e
      , u = t ? me(s || {}, t) : s
      , c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: u,
        key: u && qd(u),
        ref: t && t.ref ? n && o ? ie(o) ? o.concat(Ls(t)) : [o, Ls(t)] : Ls(t) : o,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: i,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Fe ? a === -1 ? 16 : a | 16 : a,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: l,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Vn(e.ssContent),
        ssFallback: e.ssFallback && Vn(e.ssFallback),
        placeholder: e.placeholder,
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return l && r && Ri(c, l.clone(c)),
    c
}
function it(e=" ", t=0) {
    return he(Ro, null, e, t)
}
function Ll(e, t) {
    const n = he(Fs, null, e);
    return n.staticCount = t,
    n
}
function Ye(e="", t=!1) {
    return t ? (T(),
    Y(Ht, null, e)) : he(Ht, null, e)
}
function It(e) {
    return e == null || typeof e == "boolean" ? he(Ht) : ie(e) ? he(Fe, null, e.slice()) : ts(e) ? Yt(e) : he(Ro, null, String(e))
}
function Yt(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Vn(e)
}
function Bi(e, t) {
    let n = 0;
    const {shapeFlag: r} = e;
    if (t == null)
        t = null;
    else if (ie(t))
        n = 16;
    else if (typeof t == "object")
        if (r & 65) {
            const s = t.default;
            s && (s._c && (s._d = !1),
            Bi(e, s()),
            s._c && (s._d = !0));
            return
        } else {
            n = 32;
            const s = t._;
            !s && !$d(t) ? t._ctx = Ke : s === 3 && Ke && (Ke.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        de(t) ? (t = {
            default: t,
            _ctx: Ke
        },
        n = 32) : (t = String(t),
        r & 64 ? (n = 16,
        t = [it(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function me(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const s in r)
            if (s === "class")
                t.class !== r.class && (t.class = Ee([t.class, r.class]));
            else if (s === "style")
                t.style = _t([t.style, r.style]);
            else if (vo(s)) {
                const o = t[s]
                  , a = r[s];
                a && o !== a && !(ie(o) && o.includes(a)) ? t[s] = o ? [].concat(o, a) : a : a == null && o == null && !bo(s) && (t[s] = a)
            } else
                s !== "" && (t[s] = r[s])
    }
    return t
}
function Mt(e, t, n, r=null) {
    Nt(e, t, 7, [n, r])
}
const Og = wd();
let Dg = 0;
function Eg(e, t, n) {
    const r = e.type
      , s = (t ? t.appContext : e.appContext) || Og
      , o = {
        uid: Dg++,
        vnode: e,
        type: r,
        parent: t,
        appContext: s,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        job: null,
        scope: new Iu(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(s.provides),
        ids: t ? t.ids : ["", 0, 0],
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: Od(r, s),
        emitsOptions: kd(r, s),
        emit: null,
        emitted: null,
        propsDefaults: Ce,
        inheritAttrs: r.inheritAttrs,
        ctx: Ce,
        data: Ce,
        props: Ce,
        attrs: Ce,
        slots: Ce,
        refs: Ce,
        setupState: Ce,
        setupContext: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return o.ctx = {
        _: o
    },
    o.root = t ? t.root : o,
    o.emit = cg.bind(null, o),
    e.ce && e.ce(o),
    o
}
let Xe = null;
const tt = () => Xe || Ke;
let Xs, Fa;
{
    const e = _o()
      , t = (n, r) => {
        let s;
        return (s = e[n]) || (s = e[n] = []),
        s.push(r),
        o => {
            s.length > 1 ? s.forEach(a => a(o)) : s[0](o)
        }
    }
    ;
    Xs = t("__VUE_INSTANCE_SETTERS__", n => Xe = n),
    Fa = t("__VUE_SSR_SETTERS__", n => ns = n)
}
const fs = e => {
    const t = Xe;
    return Xs(e),
    e.scope.on(),
    () => {
        e.scope.off(),
        Xs(t)
    }
}
  , Bl = () => {
    Xe && Xe.scope.off(),
    Xs(null)
}
;
function Fd(e) {
    return e.vnode.shapeFlag & 4
}
let ns = !1;
function Pg(e, t=!1, n=!1) {
    t && Fa(t);
    const {props: r, children: s} = e.vnode
      , o = Fd(e);
    gg(e, r, o, t),
    bg(e, s, n || t);
    const a = o ? Mg(e, t) : void 0;
    return t && Fa(!1),
    a
}
function Mg(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = new Proxy(e.ctx,Qp);
    const {setup: r} = n;
    if (r) {
        sn();
        const s = e.setupContext = r.length > 1 ? Bd(e) : null
          , o = fs(e)
          , a = us(r, e, 0, [e.props, s])
          , i = Ou(a);
        if (on(),
        o(),
        (i || e.sp) && !cr(e) && cd(e),
        i) {
            if (a.then(Bl, Bl),
            t)
                return a.then(l => {
                    Nl(e, l)
                }
                ).catch(l => {
                    Po(l, e, 0)
                }
                );
            e.asyncDep = a
        } else
            Nl(e, a)
    } else
        Ld(e)
}
function Nl(e, t, n) {
    de(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : De(t) && (e.setupState = Xu(t)),
    Ld(e)
}
function Ld(e, t, n) {
    const r = e.type;
    e.render || (e.render = r.render || Ft);
    {
        const s = fs(e);
        sn();
        try {
            tg(e)
        } finally {
            on(),
            s()
        }
    }
}
const Tg = {
    get(e, t) {
        return Ze(e, "get", ""),
        e[t]
    }
};
function Bd(e) {
    const t = n => {
        e.exposed = n || {}
    }
    ;
    return {
        attrs: new Proxy(e.attrs,Tg),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function Io(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Xu(vp(e.exposed)),{
        get(t, n) {
            if (n in t)
                return t[n];
            if (n in Gr)
                return Gr[n](e)
        },
        has(t, n) {
            return n in t || n in Gr
        }
    })) : e.proxy
}
function Rg(e, t=!0) {
    return de(e) ? e.displayName || e.name : e.name || t && e.__name
}
function Ig(e) {
    return de(e) && "__vccOpts"in e
}
const O = (e, t) => Sp(e, t, ns);
function Nn(e, t, n) {
    try {
        Zs(-1);
        const r = arguments.length;
        return r === 2 ? De(t) && !ie(t) ? ts(t) ? he(e, null, [t]) : he(e, t) : he(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && ts(n) && (n = [n]),
        he(e, t, n))
    } finally {
        Zs(1)
    }
}
const qg = "3.5.33";
/**
* @vue/runtime-dom v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let La;
const Hl = typeof window < "u" && window.trustedTypes;
if (Hl)
    try {
        La = Hl.createPolicy("vue", {
            createHTML: e => e
        })
    } catch {}
const Nd = La ? e => La.createHTML(e) : e => e
  , Fg = "http://www.w3.org/2000/svg"
  , Lg = "http://www.w3.org/1998/Math/MathML"
  , Kt = typeof document < "u" ? document : null
  , jl = Kt && Kt.createElement("template")
  , Bg = {
    insert: (e, t, n) => {
        t.insertBefore(e, n || null)
    }
    ,
    remove: e => {
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e, t, n, r) => {
        const s = t === "svg" ? Kt.createElementNS(Fg, e) : t === "mathml" ? Kt.createElementNS(Lg, e) : n ? Kt.createElement(e, {
            is: n
        }) : Kt.createElement(e);
        return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple),
        s
    }
    ,
    createText: e => Kt.createTextNode(e),
    createComment: e => Kt.createComment(e),
    setText: (e, t) => {
        e.nodeValue = t
    }
    ,
    setElementText: (e, t) => {
        e.textContent = t
    }
    ,
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => Kt.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, r, s, o) {
        const a = n ? n.previousSibling : t.lastChild;
        if (s && (s === o || s.nextSibling))
            for (; t.insertBefore(s.cloneNode(!0), n),
            !(s === o || !(s = s.nextSibling)); )
                ;
        else {
            jl.innerHTML = Nd(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
            const i = jl.content;
            if (r === "svg" || r === "mathml") {
                const l = i.firstChild;
                for (; l.firstChild; )
                    i.appendChild(l.firstChild);
                i.removeChild(l)
            }
            t.insertBefore(i, n)
        }
        return [a ? a.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
}
  , Ng = Symbol("_vtc");
function Hg(e, t, n) {
    const r = e[Ng];
    r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Vl = Symbol("_vod")
  , jg = Symbol("_vsh")
  , Vg = Symbol("")
  , Wg = /(?:^|;)\s*display\s*:/;
function zg(e, t, n) {
    const r = e.style
      , s = Ie(n);
    let o = !1;
    if (n && !s) {
        if (t)
            if (Ie(t))
                for (const a of t.split(";")) {
                    const i = a.slice(0, a.indexOf(":")).trim();
                    n[i] == null && Br(r, i, "")
                }
            else
                for (const a in t)
                    n[a] == null && Br(r, a, "");
        for (const a in n) {
            a === "display" && (o = !0);
            const i = n[a];
            i != null ? Gg(e, a, !Ie(t) && t ? t[a] : void 0, i) || Br(r, a, i) : Br(r, a, "")
        }
    } else if (s) {
        if (t !== n) {
            const a = r[Vg];
            a && (n += ";" + a),
            r.cssText = n,
            o = Wg.test(n)
        }
    } else
        t && e.removeAttribute("style");
    Vl in e && (e[Vl] = o ? r.display : "",
    e[jg] && (r.display = "none"))
}
const Wl = /\s*!important$/;
function Br(e, t, n) {
    if (ie(n))
        n.forEach(r => Br(e, t, r));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const r = Ug(e, t);
        Wl.test(n) ? e.setProperty(un(r), n.replace(Wl, ""), "important") : e[r] = n
    }
}
const zl = ["Webkit", "Moz", "ms"]
  , ea = {};
function Ug(e, t) {
    const n = ea[t];
    if (n)
        return n;
    let r = We(t);
    if (r !== "filter" && r in e)
        return ea[t] = r;
    r = ko(r);
    for (let s = 0; s < zl.length; s++) {
        const o = zl[s] + r;
        if (o in e)
            return ea[t] = o
    }
    return t
}
function Gg(e, t, n, r) {
    return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ie(r) && n === r
}
const Ul = "http://www.w3.org/1999/xlink";
function Gl(e, t, n, r, s, o=Jh(t)) {
    r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ul, t.slice(6, t.length)) : e.setAttributeNS(Ul, t, n) : n == null || o && !Mu(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : yt(n) ? String(n) : n)
}
function Kl(e, t, n, r, s) {
    if (t === "innerHTML" || t === "textContent") {
        n != null && (e[t] = t === "innerHTML" ? Nd(n) : n);
        return
    }
    const o = e.tagName;
    if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
        const i = o === "OPTION" ? e.getAttribute("value") || "" : e.value
          , l = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
        (i !== l || !("_value"in e)) && (e.value = l),
        n == null && e.removeAttribute(t),
        e._value = n;
        return
    }
    let a = !1;
    if (n === "" || n == null) {
        const i = typeof e[t];
        i === "boolean" ? n = Mu(n) : n == null && i === "string" ? (n = "",
        a = !0) : i === "number" && (n = 0,
        a = !0)
    }
    try {
        e[t] = n
    } catch {}
    a && e.removeAttribute(s || t)
}
function sr(e, t, n, r) {
    e.addEventListener(t, n, r)
}
function Kg(e, t, n, r) {
    e.removeEventListener(t, n, r)
}
const Yl = Symbol("_vei");
function Yg(e, t, n, r, s=null) {
    const o = e[Yl] || (e[Yl] = {})
      , a = o[t];
    if (r && a)
        a.value = r;
    else {
        const [i,l] = Jg(t);
        if (r) {
            const u = o[t] = Xg(r, s);
            sr(e, i, u, l)
        } else
            a && (Kg(e, i, a, l),
            o[t] = void 0)
    }
}
const Jl = /(?:Once|Passive|Capture)$/;
function Jg(e) {
    let t;
    if (Jl.test(e)) {
        t = {};
        let r;
        for (; r = e.match(Jl); )
            e = e.slice(0, e.length - r[0].length),
            t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : un(e.slice(2)), t]
}
let ta = 0;
const Qg = Promise.resolve()
  , Zg = () => ta || (Qg.then( () => ta = 0),
ta = Date.now());
function Xg(e, t) {
    const n = r => {
        if (!r._vts)
            r._vts = Date.now();
        else if (r._vts <= n.attached)
            return;
        Nt(em(r, n.value), t, 5, [r])
    }
    ;
    return n.value = e,
    n.attached = Zg(),
    n
}
function em(e, t) {
    if (ie(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e),
            e._stopped = !0
        }
        ,
        t.map(r => s => !s._stopped && r && r(s))
    } else
        return t
}
const Ql = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
  , tm = (e, t, n, r, s, o) => {
    const a = s === "svg";
    t === "class" ? Hg(e, r, a) : t === "style" ? zg(e, n, r) : vo(t) ? bo(t) || Yg(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : nm(e, t, r, a)) ? (Kl(e, t, r),
    !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Gl(e, t, r, a, o, t !== "value")) : e._isVueCE && (rm(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ie(r))) ? Kl(e, We(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r),
    Gl(e, t, r, a))
}
;
function nm(e, t, n, r) {
    if (r)
        return !!(t === "innerHTML" || t === "textContent" || t in e && Ql(t) && de(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const s = e.tagName;
        if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
            return !1
    }
    return Ql(t) && Ie(n) ? !1 : t in e
}
function rm(e, t) {
    const n = e._def.props;
    if (!n)
        return !1;
    const r = We(t);
    return Array.isArray(n) ? n.some(s => We(s) === r) : Object.keys(n).some(s => We(s) === r)
}
const Zl = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return ie(t) ? n => qs(t, n) : t
}
;
function sm(e) {
    e.target.composing = !0
}
function Xl(e) {
    const t = e.target;
    t.composing && (t.composing = !1,
    t.dispatchEvent(new Event("input")))
}
const na = Symbol("_assign");
function ec(e, t, n) {
    return t && (e = e.trim()),
    n && (e = Ci(e)),
    e
}
const tc = {
    created(e, {modifiers: {lazy: t, trim: n, number: r}}, s) {
        e[na] = Zl(s);
        const o = r || s.props && s.props.type === "number";
        sr(e, t ? "change" : "input", a => {
            a.target.composing || e[na](ec(e.value, n, o))
        }
        ),
        (n || o) && sr(e, "change", () => {
            e.value = ec(e.value, n, o)
        }
        ),
        t || (sr(e, "compositionstart", sm),
        sr(e, "compositionend", Xl),
        sr(e, "change", Xl))
    },
    mounted(e, {value: t}) {
        e.value = t ?? ""
    },
    beforeUpdate(e, {value: t, oldValue: n, modifiers: {lazy: r, trim: s, number: o}}, a) {
        if (e[na] = Zl(a),
        e.composing)
            return;
        const i = (o || e.type === "number") && !/^0\d/.test(e.value) ? Ci(e.value) : e.value
          , l = t ?? "";
        if (i === l)
            return;
        const u = e.getRootNode();
        (u instanceof Document || u instanceof ShadowRoot) && u.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === l) || (e.value = l)
    }
}
  , om = ["ctrl", "shift", "alt", "meta"]
  , am = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => "button"in e && e.button !== 0,
    middle: e => "button"in e && e.button !== 1,
    right: e => "button"in e && e.button !== 2,
    exact: (e, t) => om.some(n => e[`${n}Key`] && !t.includes(n))
}
  , eo = (e, t) => {
    if (!e)
        return e;
    const n = e._withMods || (e._withMods = {})
      , r = t.join(".");
    return n[r] || (n[r] = ( (s, ...o) => {
        for (let a = 0; a < t.length; a++) {
            const i = am[t[a]];
            if (i && i(s, t))
                return
        }
        return e(s, ...o)
    }
    ))
}
  , im = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , Ba = (e, t) => {
    const n = e._withKeys || (e._withKeys = {})
      , r = t.join(".");
    return n[r] || (n[r] = (s => {
        if (!("key"in s))
            return;
        const o = un(s.key);
        if (t.some(a => a === o || im[a] === o))
            return e(s)
    }
    ))
}
  , lm = ze({
    patchProp: tm
}, Bg);
let nc;
function cm() {
    return nc || (nc = xg(lm))
}
const um = ( (...e) => {
    const t = cm().createApp(...e)
      , {mount: n} = t;
    return t.mount = r => {
        const s = fm(r);
        if (!s)
            return;
        const o = t._component;
        !de(o) && !o.render && !o.template && (o.template = s.innerHTML),
        s.nodeType === 1 && (s.textContent = "");
        const a = n(s, !1, dm(s));
        return s instanceof Element && (s.removeAttribute("v-cloak"),
        s.setAttribute("data-v-app", "")),
        a
    }
    ,
    t
}
);
function dm(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function fm(e) {
    return Ie(e) ? document.querySelector(e) : e
}
function Na(e, t={}, n) {
    for (const r in e) {
        const s = e[r]
          , o = n ? `${n}:${r}` : r;
        typeof s == "object" && s !== null ? Na(s, t, o) : typeof s == "function" && (t[o] = s)
    }
    return t
}
const Hd = ( () => {
    if (console.createTask)
        return console.createTask;
    const e = {
        run: t => t()
    };
    return () => e
}
)();
function jd(e, t, n, r) {
    for (let s = n; s < e.length; s += 1)
        try {
            const o = r ? r.run( () => e[s](...t)) : e[s](...t);
            if (o && typeof o.then == "function")
                return Promise.resolve(o).then( () => jd(e, t, s + 1, r))
        } catch (o) {
            return Promise.reject(o)
        }
}
function hm(e, t, n) {
    if (e.length > 0)
        return jd(e, t, 0, Hd(n))
}
function pm(e, t, n) {
    if (e.length > 0) {
        const r = Hd(n);
        return Promise.all(e.map(s => r.run( () => s(...t))))
    }
}
function ra(e, t) {
    for (const n of [...e])
        n(t)
}
var gm = class {
    constructor() {
        Qn(this, "_hooks");
        Qn(this, "_before");
        Qn(this, "_after");
        Qn(this, "_deprecatedHooks");
        Qn(this, "_deprecatedMessages");
        this._hooks = {},
        this._before = void 0,
        this._after = void 0,
        this._deprecatedMessages = void 0,
        this._deprecatedHooks = {},
        this.hook = this.hook.bind(this),
        this.callHook = this.callHook.bind(this),
        this.callHookWith = this.callHookWith.bind(this)
    }
    hook(t, n, r={}) {
        if (!t || typeof n != "function")
            return () => {}
            ;
        const s = t;
        let o;
        for (; this._deprecatedHooks[t]; )
            o = this._deprecatedHooks[t],
            t = o.to;
        if (o && !r.allowDeprecated) {
            let a = o.message;
            a || (a = `${s} hook has been deprecated` + (o.to ? `, please use ${o.to}` : "")),
            this._deprecatedMessages || (this._deprecatedMessages = new Set),
            this._deprecatedMessages.has(a) || (console.warn(a),
            this._deprecatedMessages.add(a))
        }
        if (!n.name)
            try {
                Object.defineProperty(n, "name", {
                    get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
                    configurable: !0
                })
            } catch {}
        return this._hooks[t] = this._hooks[t] || [],
        this._hooks[t].push(n),
        () => {
            n && (this.removeHook(t, n),
            n = void 0)
        }
    }
    hookOnce(t, n) {
        let r, s = (...o) => (typeof r == "function" && r(),
        r = void 0,
        s = void 0,
        n(...o));
        return r = this.hook(t, s),
        r
    }
    removeHook(t, n) {
        const r = this._hooks[t];
        if (r) {
            const s = r.indexOf(n);
            s !== -1 && r.splice(s, 1),
            r.length === 0 && (this._hooks[t] = void 0)
        }
    }
    clearHook(t) {
        this._hooks[t] = void 0
    }
    deprecateHook(t, n) {
        this._deprecatedHooks[t] = typeof n == "string" ? {
            to: n
        } : n;
        const r = this._hooks[t] || [];
        this._hooks[t] = void 0;
        for (const s of r)
            this.hook(t, s)
    }
    deprecateHooks(t) {
        for (const n in t)
            this.deprecateHook(n, t[n])
    }
    addHooks(t) {
        const n = Na(t)
          , r = Object.keys(n).map(s => this.hook(s, n[s]));
        return () => {
            for (const s of r)
                s();
            r.length = 0
        }
    }
    removeHooks(t) {
        const n = Na(t);
        for (const r in n)
            this.removeHook(r, n[r])
    }
    removeAllHooks() {
        this._hooks = {}
    }
    callHook(t, ...n) {
        return this.callHookWith(hm, t, n)
    }
    callHookParallel(t, ...n) {
        return this.callHookWith(pm, t, n)
    }
    callHookWith(t, n, r) {
        const s = this._before || this._after ? {
            name: n,
            args: r,
            context: {}
        } : void 0;
        this._before && ra(this._before, s);
        const o = t(this._hooks[n] ? [...this._hooks[n]] : [], r, n);
        return o instanceof Promise ? o.finally( () => {
            this._after && s && ra(this._after, s)
        }
        ) : (this._after && s && ra(this._after, s),
        o)
    }
    beforeEach(t) {
        return this._before = this._before || [],
        this._before.push(t),
        () => {
            if (this._before !== void 0) {
                const n = this._before.indexOf(t);
                n !== -1 && this._before.splice(n, 1)
            }
        }
    }
    afterEach(t) {
        return this._after = this._after || [],
        this._after.push(t),
        () => {
            if (this._after !== void 0) {
                const n = this._after.indexOf(t);
                n !== -1 && this._after.splice(n, 1)
            }
        }
    }
}
;
function mm() {
    return new gm
}
const ym = new Set(["link", "style", "script", "noscript"])
  , vm = new Set(["title", "titleTemplate", "script", "style", "noscript"])
  , Ha = new Set(["base", "meta", "link", "style", "script", "noscript"])
  , bm = new Set(["title", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"])
  , wm = new Set(["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"])
  , xm = new Set(["key", "tagPosition", "tagPriority", "tagDuplicateStrategy", "innerHTML", "textContent", "processTemplateParams"])
  , km = new Set(["templateParams", "htmlAttrs", "bodyAttrs"])
  , _m = new Set(["theme-color", "google-site-verification", "og", "article", "book", "profile", "twitter", "author"])
  , Cm = ["name", "property", "http-equiv"]
  , Sm = new Set(["viewport", "description", "keywords", "robots"]);
function Vd(e) {
    const t = e.split(":");
    return t.length ? _m.has(t[1]) : !1
}
function ja(e) {
    const {props: t, tag: n} = e;
    if (wm.has(n))
        return n;
    if (n === "link" && t.rel === "canonical")
        return "canonical";
    if (n === "link" && t.rel === "alternate") {
        const r = t.hreflang || t.type;
        if (r)
            return `alternate:${r}`
    }
    if (t.charset)
        return "charset";
    if (e.tag === "meta") {
        for (const r of Cm)
            if (t[r] !== void 0) {
                const s = t[r]
                  , o = s && typeof s == "string" && s.includes(":")
                  , a = s && Sm.has(s)
                  , l = !(o || a) && e.key ? `:key:${e.key}` : "";
                return `${n}:${s}${l}`
            }
    }
    if (e.key)
        return `${n}:key:${e.key}`;
    if (t.id)
        return `${n}:id:${t.id}`;
    if (n === "link" && t.rel === "alternate")
        return `alternate:${t.href || ""}`;
    if (vm.has(n)) {
        const r = e.textContent || e.innerHTML;
        if (r)
            return `${n}:content:${r}`
    }
}
function Wd(e) {
    const t = e._h || e._d;
    if (t)
        return t;
    const n = e.textContent || e.innerHTML;
    return n || `${e.tag}:${Object.entries(e.props).map( ([r,s]) => `${r}:${String(s)}`).join(",")}`
}
function to(e, t, n) {
    typeof e === "function" && (!n || n !== "titleTemplate" && !(n[0] === "o" && n[1] === "n")) && (e = e());
    const s = t ? t(n, e) : e;
    if (Array.isArray(s))
        return s.map(o => to(o, t));
    if ((s == null ? void 0 : s.constructor) === Object) {
        const o = {};
        for (const a of Object.keys(s))
            o[a] = to(s[a], t, a);
        return o
    }
    return s
}
function $m(e, t) {
    const n = e === "style" ? new Map : new Set;
    function r(s) {
        if (s == null || s === void 0)
            return;
        const o = String(s).trim();
        if (o)
            if (e === "style") {
                const [a,...i] = o.split(":").map(l => l ? l.trim() : "");
                a && i.length && n.set(a, i.join(":"))
            } else
                o.split(" ").filter(Boolean).forEach(a => n.add(a))
    }
    return typeof t == "string" ? e === "style" ? t.split(";").forEach(r) : r(t) : Array.isArray(t) ? t.forEach(s => r(s)) : t && typeof t == "object" && Object.entries(t).forEach( ([s,o]) => {
        o && o !== "false" && (e === "style" ? n.set(String(s).trim(), String(o)) : r(s))
    }
    ),
    n
}
function zd(e, t) {
    if (e.props = e.props || {},
    !t)
        return e;
    if (e.tag === "templateParams")
        return e.props = t,
        e;
    const n = Ha.has(e.tag) || e.tag === "htmlAttrs" || e.tag === "bodyAttrs";
    return Object.entries(t).forEach( ([r,s]) => {
        if (r === "__proto__" || r === "constructor" || r === "prototype")
            return;
        if (s === null) {
            e.props[r] = null;
            return
        }
        if (r === "class" || r === "style") {
            e.props[r] = $m(r, s);
            return
        }
        if (xm.has(r)) {
            if ((r === "textContent" || r === "innerHTML") && typeof s == "object") {
                let u = t.type;
                if (t.type || (u = "application/json"),
                !(u != null && u.endsWith("json")) && u !== "speculationrules")
                    return;
                t.type = u,
                e.props.type = u,
                e[r] = JSON.stringify(s)
            } else
                e[r] = s;
            return
        }
        const o = r.startsWith("data-")
          , a = n && !o ? r.toLowerCase() : r
          , i = String(s)
          , l = e.tag === "meta" && a === "content";
        i === "true" || i === "" ? e.props[a] = o || l ? i : !0 : !s && o && i === "false" ? e.props[a] = "false" : s !== void 0 && (e.props[a] = s)
    }
    ),
    e
}
function Am(e, t) {
    const n = typeof t == "object" && typeof t != "function" ? t : {
        [e === "script" || e === "noscript" || e === "style" ? "innerHTML" : "textContent"]: t
    }
      , r = zd({
        tag: e,
        props: {}
    }, n);
    return r.key && ym.has(r.tag) && (r.props["data-hid"] = r._h = r.key),
    r.tag === "script" && typeof r.innerHTML == "object" && (r.innerHTML = JSON.stringify(r.innerHTML),
    r.props.type = r.props.type || "application/json"),
    Array.isArray(r.props.content) ? r.props.content.map(s => ({
        ...r,
        props: {
            ...r.props,
            content: s
        }
    })) : r
}
function Om(e, t) {
    if (!e)
        return [];
    typeof e == "function" && (e = e());
    const n = (s, o) => {
        for (let a = 0; a < t.length; a++)
            o = t[a](s, o);
        return o
    }
    ;
    e = n(void 0, e);
    const r = [];
    return e = to(e, n),
    Object.entries(e || {}).forEach( ([s,o]) => {
        if (o !== void 0)
            for (const a of Array.isArray(o) ? o : [o])
                r.push(Am(s, a))
    }
    ),
    r.flat()
}
const rc = (e, t) => e._w === t._w ? e._p - t._p : e._w - t._w
  , sc = {
    base: -10,
    title: 10
}
  , Dm = {
    critical: -8,
    high: -1,
    low: 2
}
  , oc = {
    meta: {
        "content-security-policy": -30,
        charset: -20,
        viewport: -15
    },
    link: {
        preconnect: 20,
        stylesheet: 60,
        preload: 70,
        modulepreload: 70,
        prefetch: 90,
        "dns-prefetch": 90,
        prerender: 90
    },
    script: {
        async: 30,
        defer: 80,
        sync: 50
    },
    style: {
        imported: 40,
        sync: 60
    }
}
  , Em = /@import/
  , Mr = e => e === "" || e === !0;
function Pm(e, t) {
    if (typeof t.tagPriority == "number")
        return t.tagPriority;
    let n = 100;
    const r = Dm[t.tagPriority] || 0
      , s = e.resolvedOptions.disableCapoSorting ? {
        link: {},
        script: {},
        style: {}
    } : oc;
    if (t.tag in sc)
        n = sc[t.tag];
    else if (t.tag === "meta") {
        const o = t.props["http-equiv"] === "content-security-policy" ? "content-security-policy" : t.props.charset ? "charset" : t.props.name === "viewport" ? "viewport" : null;
        o && (n = oc.meta[o])
    } else if (t.tag === "link" && t.props.rel)
        n = s.link[t.props.rel];
    else if (t.tag === "script") {
        const o = String(t.props.type);
        Mr(t.props.async) ? n = s.script.async : t.props.src && !Mr(t.props.defer) && !Mr(t.props.async) && o !== "module" && !o.endsWith("json") || t.innerHTML && !o.endsWith("json") ? n = s.script.sync : (Mr(t.props.defer) && t.props.src && !Mr(t.props.async) || o === "module") && (n = s.script.defer)
    } else
        t.tag === "style" && (n = t.innerHTML && Em.test(t.innerHTML) ? s.style.imported : s.style.sync);
    return (n || 100) + r
}
function ac(e, t) {
    const n = typeof t == "function" ? t(e) : t
      , r = n.key || String(e.plugins.size + 1);
    e.plugins.get(r) || (e.plugins.set(r, n),
    e.hooks.addHooks(n.hooks || {}))
}
function Mm(e={}) {
    var i;
    const t = mm();
    t.addHooks(e.hooks || {});
    const n = !e.document
      , r = new Map
      , s = new Map
      , o = new Set
      , a = {
        _entryCount: 1,
        plugins: s,
        dirty: !1,
        resolvedOptions: e,
        hooks: t,
        ssr: n,
        entries: r,
        headEntries() {
            return [...r.values()]
        },
        use: l => ac(a, l),
        push(l, u) {
            const c = {
                ...u || {}
            };
            delete c.head;
            const d = c._index ?? a._entryCount++
              , f = {
                _i: d,
                input: l,
                options: c
            }
              , p = {
                _poll(h=!1) {
                    a.dirty = !0,
                    !h && o.add(d),
                    t.callHook("entries:updated", a)
                },
                dispose() {
                    r.delete(d) && a.invalidate()
                },
                patch(h) {
                    (!c.mode || c.mode === "server" && n || c.mode === "client" && !n) && (f.input = h,
                    r.set(d, f),
                    p._poll())
                }
            };
            return p.patch(l),
            p
        },
        async resolveTags() {
            const l = {
                tagMap: new Map,
                tags: [],
                entries: [...a.entries.values()]
            };
            for (await t.callHook("entries:resolve", l); o.size; ) {
                const p = o.values().next().value;
                o.delete(p);
                const h = r.get(p);
                if (h) {
                    const g = {
                        tags: Om(h.input, e.propResolvers || []).map(m => Object.assign(m, h.options)),
                        entry: h
                    };
                    await t.callHook("entries:normalize", g),
                    h._tags = g.tags.map( (m, b) => (m._w = Pm(a, m),
                    m._p = (h._i << 10) + b,
                    m._d = ja(m),
                    m._d || (m._h = Wd(m)),
                    m))
                }
            }
            let u = !1;
            l.entries.flatMap(p => (p._tags || []).map(h => ({
                ...h,
                props: {
                    ...h.props
                }
            }))).sort(rc).reduce( (p, h) => {
                const g = h._d || h._h;
                if (!p.has(g))
                    return p.set(g, h);
                const m = p.get(g);
                if (((h == null ? void 0 : h.tagDuplicateStrategy) || (km.has(h.tag) ? "merge" : null) || (h.key && h.key === m.key ? "merge" : null)) === "merge") {
                    const y = {
                        ...m.props
                    };
                    Object.entries(h.props).forEach( ([v,k]) => y[v] = v === "style" ? new Map([...m.props.style || new Map, ...k]) : v === "class" ? new Set([...m.props.class || new Set, ...k]) : k),
                    p.set(g, {
                        ...h,
                        props: y
                    })
                } else
                    h._p >> 10 === m._p >> 10 && h.tag === "meta" && Vd(g) ? (p.set(g, Object.assign([...Array.isArray(m) ? m : [m], h], h)),
                    u = !0) : (h._w === m._w ? h._p > m._p : (h == null ? void 0 : h._w) < (m == null ? void 0 : m._w)) && p.set(g, h);
                return p
            }
            , l.tagMap);
            const c = l.tagMap.get("title")
              , d = l.tagMap.get("titleTemplate");
            if (a._title = c == null ? void 0 : c.textContent,
            d) {
                const p = d == null ? void 0 : d.textContent;
                if (a._titleTemplate = p,
                p) {
                    let h = typeof p == "function" ? p(c == null ? void 0 : c.textContent) : p;
                    typeof h == "string" && !a.plugins.has("template-params") && (h = h.replace("%s", (c == null ? void 0 : c.textContent) || "")),
                    c ? h === null ? l.tagMap.delete("title") : l.tagMap.set("title", {
                        ...c,
                        textContent: h
                    }) : (d.tag = "title",
                    d.textContent = h)
                }
            }
            l.tags = Array.from(l.tagMap.values()),
            u && (l.tags = l.tags.flat().sort(rc)),
            await t.callHook("tags:beforeResolve", l),
            await t.callHook("tags:resolve", l),
            await t.callHook("tags:afterResolve", l);
            const f = [];
            for (const p of l.tags) {
                const {innerHTML: h, tag: g, props: m} = p;
                if (bm.has(g) && !(Object.keys(m).length === 0 && !p.innerHTML && !p.textContent) && !(g === "meta" && !m.content && !m["http-equiv"] && !m.charset)) {
                    if (g === "script" && h) {
                        if (String(m.type).endsWith("json")) {
                            const b = typeof h == "string" ? h : JSON.stringify(h);
                            p.innerHTML = b.replace(/</g, "\\u003C")
                        } else
                            typeof h == "string" && (p.innerHTML = h.replace(new RegExp(`</${g}`,"g"), `<\\/${g}`));
                        p._d = ja(p)
                    }
                    f.push(p)
                }
            }
            return f
        },
        invalidate() {
            for (const l of r.values())
                o.add(l._i);
            a.dirty = !0,
            t.callHook("entries:updated", a)
        }
    };
    return ((e == null ? void 0 : e.plugins) || []).forEach(l => ac(a, l)),
    a.hooks.callHook("init", a),
    (i = e.init) == null || i.forEach(l => l && a.push(l)),
    a
}
async function Ud(e, t={}) {
    const n = t.document || e.resolvedOptions.document;
    if (!n || !e.dirty)
        return;
    const r = {
        shouldRender: !0,
        tags: []
    };
    if (await e.hooks.callHook("dom:beforeRender", r),
    !!r.shouldRender)
        return e._domUpdatePromise || (e._domUpdatePromise = new Promise(async s => {
            var p;
            const o = new Map
              , a = new Promise(h => {
                e.resolveTags().then(g => {
                    h(g.map(m => {
                        const b = o.get(m._d) || 0
                          , y = {
                            tag: m,
                            id: (b ? `${m._d}:${b}` : m._d) || m._h,
                            shouldRender: !0
                        };
                        return m._d && Vd(m._d) && o.set(m._d, b + 1),
                        y
                    }
                    ))
                }
                )
            }
            );
            let i = e._dom;
            if (!i) {
                i = {
                    title: n.title,
                    elMap: new Map().set("htmlAttrs", n.documentElement).set("bodyAttrs", n.body)
                };
                for (const h of ["body", "head"]) {
                    const g = (p = n[h]) == null ? void 0 : p.children;
                    for (const m of g) {
                        const b = m.tagName.toLowerCase();
                        if (!Ha.has(b))
                            continue;
                        const y = zd({
                            tag: b,
                            props: {}
                        }, {
                            innerHTML: m.innerHTML,
                            ...m.getAttributeNames().reduce( (v, k) => (v[k] = m.getAttribute(k),
                            v), {}) || {}
                        });
                        if (y.key = m.getAttribute("data-hid") || void 0,
                        y._d = ja(y) || Wd(y),
                        i.elMap.has(y._d)) {
                            let v = 1
                              , k = y._d;
                            for (; i.elMap.has(k); )
                                k = `${y._d}:${v++}`;
                            i.elMap.set(k, m)
                        } else
                            i.elMap.set(y._d, m)
                    }
                }
            }
            i.pendingSideEffects = {
                ...i.sideEffects
            },
            i.sideEffects = {};
            function l(h, g, m) {
                const b = `${h}:${g}`;
                i.sideEffects[b] = m,
                delete i.pendingSideEffects[b]
            }
            function u({id: h, $el: g, tag: m}) {
                const b = m.tag.endsWith("Attrs");
                i.elMap.set(h, g),
                b || (m.textContent && m.textContent !== g.textContent && (g.textContent = m.textContent),
                m.innerHTML && m.innerHTML !== g.innerHTML && (g.innerHTML = m.innerHTML),
                l(h, "el", () => {
                    g == null || g.remove(),
                    i.elMap.delete(h)
                }
                ));
                for (const y in m.props) {
                    if (!Object.prototype.hasOwnProperty.call(m.props, y))
                        continue;
                    const v = m.props[y];
                    if (y.startsWith("on") && typeof v == "function") {
                        const _ = g == null ? void 0 : g.dataset;
                        if (_ && _[`${y}fired`]) {
                            const $ = y.slice(0, -5);
                            v.call(g, new Event($.substring(2)))
                        }
                        g.getAttribute(`data-${y}`) !== "" && ((m.tag === "bodyAttrs" ? n.defaultView : g).addEventListener(y.substring(2), v.bind(g)),
                        g.setAttribute(`data-${y}`, ""));
                        continue
                    }
                    const k = `attr:${y}`;
                    if (y === "class") {
                        if (!v)
                            continue;
                        for (const _ of v)
                            b && l(h, `${k}:${_}`, () => g.classList.remove(_)),
                            !g.classList.contains(_) && g.classList.add(_)
                    } else if (y === "style") {
                        if (!v)
                            continue;
                        for (const [_,$] of v)
                            l(h, `${k}:${_}`, () => {
                                g.style.removeProperty(_)
                            }
                            ),
                            g.style.setProperty(_, $)
                    } else
                        v !== !1 && v !== null && (g.getAttribute(y) !== v && g.setAttribute(y, v === !0 ? "" : String(v)),
                        b && l(h, k, () => g.removeAttribute(y)))
                }
            }
            const c = []
              , d = {
                bodyClose: void 0,
                bodyOpen: void 0,
                head: void 0
            }
              , f = await a;
            for (const h of f) {
                const {tag: g, shouldRender: m, id: b} = h;
                if (m) {
                    if (g.tag === "title") {
                        n.title = g.textContent,
                        l("title", "", () => n.title = i.title);
                        continue
                    }
                    h.$el = h.$el || i.elMap.get(b),
                    h.$el ? u(h) : Ha.has(g.tag) && c.push(h)
                }
            }
            for (const h of c) {
                const g = h.tag.tagPosition || "head";
                h.$el = n.createElement(h.tag.tag),
                u(h),
                d[g] = d[g] || n.createDocumentFragment(),
                d[g].appendChild(h.$el)
            }
            for (const h of f)
                await e.hooks.callHook("dom:renderTag", h, n, l);
            d.head && n.head.appendChild(d.head),
            d.bodyOpen && n.body.insertBefore(d.bodyOpen, n.body.firstChild),
            d.bodyClose && n.body.appendChild(d.bodyClose);
            for (const h in i.pendingSideEffects)
                i.pendingSideEffects[h]();
            e._dom = i,
            await e.hooks.callHook("dom:rendered", {
                renders: f
            }),
            s()
        }
        ).finally( () => {
            e._domUpdatePromise = void 0,
            e.dirty = !1
        }
        )),
        e._domUpdatePromise
}
function Tm(e={}) {
    var r, s, o;
    const t = ((r = e.domOptions) == null ? void 0 : r.render) || Ud;
    e.document = e.document || (typeof window < "u" ? document : void 0);
    const n = ((o = (s = e.document) == null ? void 0 : s.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : o.innerHTML) || !1;
    return Mm({
        ...e,
        plugins: [...e.plugins || [], {
            key: "client",
            hooks: {
                "entries:updated": t
            }
        }],
        init: [n ? JSON.parse(n) : !1, ...e.init || []]
    })
}
function Rm(e, t) {
    let n = 0;
    return () => {
        const r = ++n;
        t( () => {
            n === r && e()
        }
        )
    }
}
const Im = (e, t) => Pe(t) ? Re(t) : t
  , Gd = "usehead";
function qm(e) {
    return {
        install(n) {
            n.config.globalProperties.$unhead = e,
            n.config.globalProperties.$head = e,
            n.provide(Gd, e)
        }
    }.install
}
function Fm() {
    if (Ti()) {
        const e = et(Gd);
        if (e)
            return e
    }
    throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")
}
function Lm(e, t={}) {
    const n = t.head || Fm();
    return n.ssr ? n.push(e || {}, t) : Bm(n, e, t)
}
function Bm(e, t, n={}) {
    const r = Q(!1);
    let s;
    return ct( () => {
        const a = r.value ? {} : to(t, Im);
        s ? s.patch(a) : s = e.push(a, n)
    }
    ),
    tt() && (Ii( () => {
        s.dispose()
    }
    ),
    fd( () => {
        r.value = !0
    }
    ),
    dd( () => {
        r.value = !1
    }
    )),
    s
}
function Nm(e={}) {
    const t = Tm({
        domOptions: {
            render: Rm( () => Ud(t), n => setTimeout(n, 0))
        },
        ...e
    });
    return t.install = qm(t),
    t
}
const Hm = {
    install(e) {
        if (e._context.provides.usehead)
            return;
        const t = Nm();
        e.use(t)
    }
};
var xs = {
    inherit: "inherit",
    current: "currentcolor",
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    slate: {
        50: "oklch(98.4% 0.003 247.858)",
        100: "oklch(96.8% 0.007 247.896)",
        200: "oklch(92.9% 0.013 255.508)",
        300: "oklch(86.9% 0.022 252.894)",
        400: "oklch(70.4% 0.04 256.788)",
        500: "oklch(55.4% 0.046 257.417)",
        600: "oklch(44.6% 0.043 257.281)",
        700: "oklch(37.2% 0.044 257.287)",
        800: "oklch(27.9% 0.041 260.031)",
        900: "oklch(20.8% 0.042 265.755)",
        950: "oklch(12.9% 0.042 264.695)"
    },
    gray: {
        50: "oklch(98.5% 0.002 247.839)",
        100: "oklch(96.7% 0.003 264.542)",
        200: "oklch(92.8% 0.006 264.531)",
        300: "oklch(87.2% 0.01 258.338)",
        400: "oklch(70.7% 0.022 261.325)",
        500: "oklch(55.1% 0.027 264.364)",
        600: "oklch(44.6% 0.03 256.802)",
        700: "oklch(37.3% 0.034 259.733)",
        800: "oklch(27.8% 0.033 256.848)",
        900: "oklch(21% 0.034 264.665)",
        950: "oklch(13% 0.028 261.692)"
    },
    zinc: {
        50: "oklch(98.5% 0 0)",
        100: "oklch(96.7% 0.001 286.375)",
        200: "oklch(92% 0.004 286.32)",
        300: "oklch(87.1% 0.006 286.286)",
        400: "oklch(70.5% 0.015 286.067)",
        500: "oklch(55.2% 0.016 285.938)",
        600: "oklch(44.2% 0.017 285.786)",
        700: "oklch(37% 0.013 285.805)",
        800: "oklch(27.4% 0.006 286.033)",
        900: "oklch(21% 0.006 285.885)",
        950: "oklch(14.1% 0.005 285.823)"
    },
    neutral: {
        50: "oklch(98.5% 0 0)",
        100: "oklch(97% 0 0)",
        200: "oklch(92.2% 0 0)",
        300: "oklch(87% 0 0)",
        400: "oklch(70.8% 0 0)",
        500: "oklch(55.6% 0 0)",
        600: "oklch(43.9% 0 0)",
        700: "oklch(37.1% 0 0)",
        800: "oklch(26.9% 0 0)",
        900: "oklch(20.5% 0 0)",
        950: "oklch(14.5% 0 0)"
    },
    stone: {
        50: "oklch(98.5% 0.001 106.423)",
        100: "oklch(97% 0.001 106.424)",
        200: "oklch(92.3% 0.003 48.717)",
        300: "oklch(86.9% 0.005 56.366)",
        400: "oklch(70.9% 0.01 56.259)",
        500: "oklch(55.3% 0.013 58.071)",
        600: "oklch(44.4% 0.011 73.639)",
        700: "oklch(37.4% 0.01 67.558)",
        800: "oklch(26.8% 0.007 34.298)",
        900: "oklch(21.6% 0.006 56.043)",
        950: "oklch(14.7% 0.004 49.25)"
    },
    mauve: {
        50: "oklch(98.5% 0 0)",
        100: "oklch(96% 0.003 325.6)",
        200: "oklch(92.2% 0.005 325.62)",
        300: "oklch(86.5% 0.012 325.68)",
        400: "oklch(71.1% 0.019 323.02)",
        500: "oklch(54.2% 0.034 322.5)",
        600: "oklch(43.5% 0.029 321.78)",
        700: "oklch(36.4% 0.029 323.89)",
        800: "oklch(26.3% 0.024 320.12)",
        900: "oklch(21.2% 0.019 322.12)",
        950: "oklch(14.5% 0.008 326)"
    },
    olive: {
        50: "oklch(98.8% 0.003 106.5)",
        100: "oklch(96.6% 0.005 106.5)",
        200: "oklch(93% 0.007 106.5)",
        300: "oklch(88% 0.011 106.6)",
        400: "oklch(73.7% 0.021 106.9)",
        500: "oklch(58% 0.031 107.3)",
        600: "oklch(46.6% 0.025 107.3)",
        700: "oklch(39.4% 0.023 107.4)",
        800: "oklch(28.6% 0.016 107.4)",
        900: "oklch(22.8% 0.013 107.4)",
        950: "oklch(15.3% 0.006 107.1)"
    },
    mist: {
        50: "oklch(98.7% 0.002 197.1)",
        100: "oklch(96.3% 0.002 197.1)",
        200: "oklch(92.5% 0.005 214.3)",
        300: "oklch(87.2% 0.007 219.6)",
        400: "oklch(72.3% 0.014 214.4)",
        500: "oklch(56% 0.021 213.5)",
        600: "oklch(45% 0.017 213.2)",
        700: "oklch(37.8% 0.015 216)",
        800: "oklch(27.5% 0.011 216.9)",
        900: "oklch(21.8% 0.008 223.9)",
        950: "oklch(14.8% 0.004 228.8)"
    },
    taupe: {
        50: "oklch(98.6% 0.002 67.8)",
        100: "oklch(96% 0.002 17.2)",
        200: "oklch(92.2% 0.005 34.3)",
        300: "oklch(86.8% 0.007 39.5)",
        400: "oklch(71.4% 0.014 41.2)",
        500: "oklch(54.7% 0.021 43.1)",
        600: "oklch(43.8% 0.017 39.3)",
        700: "oklch(36.7% 0.016 35.7)",
        800: "oklch(26.8% 0.011 36.5)",
        900: "oklch(21.4% 0.009 43.1)",
        950: "oklch(14.7% 0.004 49.3)"
    },
    red: {
        50: "oklch(97.1% 0.013 17.38)",
        100: "oklch(93.6% 0.032 17.717)",
        200: "oklch(88.5% 0.062 18.334)",
        300: "oklch(80.8% 0.114 19.571)",
        400: "oklch(70.4% 0.191 22.216)",
        500: "oklch(63.7% 0.237 25.331)",
        600: "oklch(57.7% 0.245 27.325)",
        700: "oklch(50.5% 0.213 27.518)",
        800: "oklch(44.4% 0.177 26.899)",
        900: "oklch(39.6% 0.141 25.723)",
        950: "oklch(25.8% 0.092 26.042)"
    },
    orange: {
        50: "oklch(98% 0.016 73.684)",
        100: "oklch(95.4% 0.038 75.164)",
        200: "oklch(90.1% 0.076 70.697)",
        300: "oklch(83.7% 0.128 66.29)",
        400: "oklch(75% 0.183 55.934)",
        500: "oklch(70.5% 0.213 47.604)",
        600: "oklch(64.6% 0.222 41.116)",
        700: "oklch(55.3% 0.195 38.402)",
        800: "oklch(47% 0.157 37.304)",
        900: "oklch(40.8% 0.123 38.172)",
        950: "oklch(26.6% 0.079 36.259)"
    },
    amber: {
        50: "oklch(98.7% 0.022 95.277)",
        100: "oklch(96.2% 0.059 95.617)",
        200: "oklch(92.4% 0.12 95.746)",
        300: "oklch(87.9% 0.169 91.605)",
        400: "oklch(82.8% 0.189 84.429)",
        500: "oklch(76.9% 0.188 70.08)",
        600: "oklch(66.6% 0.179 58.318)",
        700: "oklch(55.5% 0.163 48.998)",
        800: "oklch(47.3% 0.137 46.201)",
        900: "oklch(41.4% 0.112 45.904)",
        950: "oklch(27.9% 0.077 45.635)"
    },
    yellow: {
        50: "oklch(98.7% 0.026 102.212)",
        100: "oklch(97.3% 0.071 103.193)",
        200: "oklch(94.5% 0.129 101.54)",
        300: "oklch(90.5% 0.182 98.111)",
        400: "oklch(85.2% 0.199 91.936)",
        500: "oklch(79.5% 0.184 86.047)",
        600: "oklch(68.1% 0.162 75.834)",
        700: "oklch(55.4% 0.135 66.442)",
        800: "oklch(47.6% 0.114 61.907)",
        900: "oklch(42.1% 0.095 57.708)",
        950: "oklch(28.6% 0.066 53.813)"
    },
    lime: {
        50: "oklch(98.6% 0.031 120.757)",
        100: "oklch(96.7% 0.067 122.328)",
        200: "oklch(93.8% 0.127 124.321)",
        300: "oklch(89.7% 0.196 126.665)",
        400: "oklch(84.1% 0.238 128.85)",
        500: "oklch(76.8% 0.233 130.85)",
        600: "oklch(64.8% 0.2 131.684)",
        700: "oklch(53.2% 0.157 131.589)",
        800: "oklch(45.3% 0.124 130.933)",
        900: "oklch(40.5% 0.101 131.063)",
        950: "oklch(27.4% 0.072 132.109)"
    },
    green: {
        50: "oklch(98.2% 0.018 155.826)",
        100: "oklch(96.2% 0.044 156.743)",
        200: "oklch(92.5% 0.084 155.995)",
        300: "oklch(87.1% 0.15 154.449)",
        400: "oklch(79.2% 0.209 151.711)",
        500: "oklch(72.3% 0.219 149.579)",
        600: "oklch(62.7% 0.194 149.214)",
        700: "oklch(52.7% 0.154 150.069)",
        800: "oklch(44.8% 0.119 151.328)",
        900: "oklch(39.3% 0.095 152.535)",
        950: "oklch(26.6% 0.065 152.934)"
    },
    emerald: {
        50: "oklch(97.9% 0.021 166.113)",
        100: "oklch(95% 0.052 163.051)",
        200: "oklch(90.5% 0.093 164.15)",
        300: "oklch(84.5% 0.143 164.978)",
        400: "oklch(76.5% 0.177 163.223)",
        500: "oklch(69.6% 0.17 162.48)",
        600: "oklch(59.6% 0.145 163.225)",
        700: "oklch(50.8% 0.118 165.612)",
        800: "oklch(43.2% 0.095 166.913)",
        900: "oklch(37.8% 0.077 168.94)",
        950: "oklch(26.2% 0.051 172.552)"
    },
    teal: {
        50: "oklch(98.4% 0.014 180.72)",
        100: "oklch(95.3% 0.051 180.801)",
        200: "oklch(91% 0.096 180.426)",
        300: "oklch(85.5% 0.138 181.071)",
        400: "oklch(77.7% 0.152 181.912)",
        500: "oklch(70.4% 0.14 182.503)",
        600: "oklch(60% 0.118 184.704)",
        700: "oklch(51.1% 0.096 186.391)",
        800: "oklch(43.7% 0.078 188.216)",
        900: "oklch(38.6% 0.063 188.416)",
        950: "oklch(27.7% 0.046 192.524)"
    },
    cyan: {
        50: "oklch(98.4% 0.019 200.873)",
        100: "oklch(95.6% 0.045 203.388)",
        200: "oklch(91.7% 0.08 205.041)",
        300: "oklch(86.5% 0.127 207.078)",
        400: "oklch(78.9% 0.154 211.53)",
        500: "oklch(71.5% 0.143 215.221)",
        600: "oklch(60.9% 0.126 221.723)",
        700: "oklch(52% 0.105 223.128)",
        800: "oklch(45% 0.085 224.283)",
        900: "oklch(39.8% 0.07 227.392)",
        950: "oklch(30.2% 0.056 229.695)"
    },
    sky: {
        50: "oklch(97.7% 0.013 236.62)",
        100: "oklch(95.1% 0.026 236.824)",
        200: "oklch(90.1% 0.058 230.902)",
        300: "oklch(82.8% 0.111 230.318)",
        400: "oklch(74.6% 0.16 232.661)",
        500: "oklch(68.5% 0.169 237.323)",
        600: "oklch(58.8% 0.158 241.966)",
        700: "oklch(50% 0.134 242.749)",
        800: "oklch(44.3% 0.11 240.79)",
        900: "oklch(39.1% 0.09 240.876)",
        950: "oklch(29.3% 0.066 243.157)"
    },
    blue: {
        50: "oklch(97% 0.014 254.604)",
        100: "oklch(93.2% 0.032 255.585)",
        200: "oklch(88.2% 0.059 254.128)",
        300: "oklch(80.9% 0.105 251.813)",
        400: "oklch(70.7% 0.165 254.624)",
        500: "oklch(62.3% 0.214 259.815)",
        600: "oklch(54.6% 0.245 262.881)",
        700: "oklch(48.8% 0.243 264.376)",
        800: "oklch(42.4% 0.199 265.638)",
        900: "oklch(37.9% 0.146 265.522)",
        950: "oklch(28.2% 0.091 267.935)"
    },
    indigo: {
        50: "oklch(96.2% 0.018 272.314)",
        100: "oklch(93% 0.034 272.788)",
        200: "oklch(87% 0.065 274.039)",
        300: "oklch(78.5% 0.115 274.713)",
        400: "oklch(67.3% 0.182 276.935)",
        500: "oklch(58.5% 0.233 277.117)",
        600: "oklch(51.1% 0.262 276.966)",
        700: "oklch(45.7% 0.24 277.023)",
        800: "oklch(39.8% 0.195 277.366)",
        900: "oklch(35.9% 0.144 278.697)",
        950: "oklch(25.7% 0.09 281.288)"
    },
    violet: {
        50: "oklch(96.9% 0.016 293.756)",
        100: "oklch(94.3% 0.029 294.588)",
        200: "oklch(89.4% 0.057 293.283)",
        300: "oklch(81.1% 0.111 293.571)",
        400: "oklch(70.2% 0.183 293.541)",
        500: "oklch(60.6% 0.25 292.717)",
        600: "oklch(54.1% 0.281 293.009)",
        700: "oklch(49.1% 0.27 292.581)",
        800: "oklch(43.2% 0.232 292.759)",
        900: "oklch(38% 0.189 293.745)",
        950: "oklch(28.3% 0.141 291.089)"
    },
    purple: {
        50: "oklch(97.7% 0.014 308.299)",
        100: "oklch(94.6% 0.033 307.174)",
        200: "oklch(90.2% 0.063 306.703)",
        300: "oklch(82.7% 0.119 306.383)",
        400: "oklch(71.4% 0.203 305.504)",
        500: "oklch(62.7% 0.265 303.9)",
        600: "oklch(55.8% 0.288 302.321)",
        700: "oklch(49.6% 0.265 301.924)",
        800: "oklch(43.8% 0.218 303.724)",
        900: "oklch(38.1% 0.176 304.987)",
        950: "oklch(29.1% 0.149 302.717)"
    },
    fuchsia: {
        50: "oklch(97.7% 0.017 320.058)",
        100: "oklch(95.2% 0.037 318.852)",
        200: "oklch(90.3% 0.076 319.62)",
        300: "oklch(83.3% 0.145 321.434)",
        400: "oklch(74% 0.238 322.16)",
        500: "oklch(66.7% 0.295 322.15)",
        600: "oklch(59.1% 0.293 322.896)",
        700: "oklch(51.8% 0.253 323.949)",
        800: "oklch(45.2% 0.211 324.591)",
        900: "oklch(40.1% 0.17 325.612)",
        950: "oklch(29.3% 0.136 325.661)"
    },
    pink: {
        50: "oklch(97.1% 0.014 343.198)",
        100: "oklch(94.8% 0.028 342.258)",
        200: "oklch(89.9% 0.061 343.231)",
        300: "oklch(82.3% 0.12 346.018)",
        400: "oklch(71.8% 0.202 349.761)",
        500: "oklch(65.6% 0.241 354.308)",
        600: "oklch(59.2% 0.249 0.584)",
        700: "oklch(52.5% 0.223 3.958)",
        800: "oklch(45.9% 0.187 3.815)",
        900: "oklch(40.8% 0.153 2.432)",
        950: "oklch(28.4% 0.109 3.907)"
    },
    rose: {
        50: "oklch(96.9% 0.015 12.422)",
        100: "oklch(94.1% 0.03 12.58)",
        200: "oklch(89.2% 0.058 10.001)",
        300: "oklch(81% 0.117 11.638)",
        400: "oklch(71.2% 0.194 13.428)",
        500: "oklch(64.5% 0.246 16.439)",
        600: "oklch(58.6% 0.253 17.585)",
        700: "oklch(51.4% 0.222 16.935)",
        800: "oklch(45.5% 0.188 13.697)",
        900: "oklch(41% 0.159 10.272)",
        950: "oklch(27.1% 0.105 12.094)"
    }
};
function Va(e, t={}, n) {
    for (const r in e) {
        const s = e[r]
          , o = n ? `${n}:${r}` : r;
        typeof s == "object" && s !== null ? Va(s, t, o) : typeof s == "function" && (t[o] = s)
    }
    return t
}
const jm = {
    run: e => e()
}
  , Vm = () => jm
  , Kd = typeof console.createTask < "u" ? console.createTask : Vm;
function Wm(e, t) {
    const n = t.shift()
      , r = Kd(n);
    return e.reduce( (s, o) => s.then( () => r.run( () => o(...t))), Promise.resolve())
}
function zm(e, t) {
    const n = t.shift()
      , r = Kd(n);
    return Promise.all(e.map(s => r.run( () => s(...t))))
}
function sa(e, t) {
    for (const n of [...e])
        n(t)
}
class Um {
    constructor() {
        this._hooks = {},
        this._before = void 0,
        this._after = void 0,
        this._deprecatedMessages = void 0,
        this._deprecatedHooks = {},
        this.hook = this.hook.bind(this),
        this.callHook = this.callHook.bind(this),
        this.callHookWith = this.callHookWith.bind(this)
    }
    hook(t, n, r={}) {
        if (!t || typeof n != "function")
            return () => {}
            ;
        const s = t;
        let o;
        for (; this._deprecatedHooks[t]; )
            o = this._deprecatedHooks[t],
            t = o.to;
        if (o && !r.allowDeprecated) {
            let a = o.message;
            a || (a = `${s} hook has been deprecated` + (o.to ? `, please use ${o.to}` : "")),
            this._deprecatedMessages || (this._deprecatedMessages = new Set),
            this._deprecatedMessages.has(a) || (console.warn(a),
            this._deprecatedMessages.add(a))
        }
        if (!n.name)
            try {
                Object.defineProperty(n, "name", {
                    get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
                    configurable: !0
                })
            } catch {}
        return this._hooks[t] = this._hooks[t] || [],
        this._hooks[t].push(n),
        () => {
            n && (this.removeHook(t, n),
            n = void 0)
        }
    }
    hookOnce(t, n) {
        let r, s = (...o) => (typeof r == "function" && r(),
        r = void 0,
        s = void 0,
        n(...o));
        return r = this.hook(t, s),
        r
    }
    removeHook(t, n) {
        if (this._hooks[t]) {
            const r = this._hooks[t].indexOf(n);
            r !== -1 && this._hooks[t].splice(r, 1),
            this._hooks[t].length === 0 && delete this._hooks[t]
        }
    }
    deprecateHook(t, n) {
        this._deprecatedHooks[t] = typeof n == "string" ? {
            to: n
        } : n;
        const r = this._hooks[t] || [];
        delete this._hooks[t];
        for (const s of r)
            this.hook(t, s)
    }
    deprecateHooks(t) {
        Object.assign(this._deprecatedHooks, t);
        for (const n in t)
            this.deprecateHook(n, t[n])
    }
    addHooks(t) {
        const n = Va(t)
          , r = Object.keys(n).map(s => this.hook(s, n[s]));
        return () => {
            for (const s of r.splice(0, r.length))
                s()
        }
    }
    removeHooks(t) {
        const n = Va(t);
        for (const r in n)
            this.removeHook(r, n[r])
    }
    removeAllHooks() {
        for (const t in this._hooks)
            delete this._hooks[t]
    }
    callHook(t, ...n) {
        return n.unshift(t),
        this.callHookWith(Wm, t, ...n)
    }
    callHookParallel(t, ...n) {
        return n.unshift(t),
        this.callHookWith(zm, t, ...n)
    }
    callHookWith(t, n, ...r) {
        const s = this._before || this._after ? {
            name: n,
            args: r,
            context: {}
        } : void 0;
        this._before && sa(this._before, s);
        const o = t(n in this._hooks ? [...this._hooks[n]] : [], r);
        return o instanceof Promise ? o.finally( () => {
            this._after && s && sa(this._after, s)
        }
        ) : (this._after && s && sa(this._after, s),
        o)
    }
    beforeEach(t) {
        return this._before = this._before || [],
        this._before.push(t),
        () => {
            if (this._before !== void 0) {
                const n = this._before.indexOf(t);
                n !== -1 && this._before.splice(n, 1)
            }
        }
    }
    afterEach(t) {
        return this._after = this._after || [],
        this._after.push(t),
        () => {
            if (this._after !== void 0) {
                const n = this._after.indexOf(t);
                n !== -1 && this._after.splice(n, 1)
            }
        }
    }
}
function Gm() {
    return new Um
}
function Yd(e) {
    return Co() ? (Ai(e),
    !0) : !1
}
const oa = new WeakMap
  , Km = (...e) => {
    var t;
    const n = e[0]
      , r = (t = tt()) == null ? void 0 : t.proxy;
    if (r == null && !Ti())
        throw new Error("injectLocal must be called in setup");
    return r && oa.has(r) && n in oa.get(r) ? oa.get(r)[n] : et(...e)
}
;
function Ym(e) {
    let t = 0, n, r;
    const s = () => {
        t -= 1,
        r && t <= 0 && (r.stop(),
        n = void 0,
        r = void 0)
    }
    ;
    return (...o) => (t += 1,
    r || (r = $i(!0),
    n = r.run( () => e(...o))),
    Yd(s),
    n)
}
function Jm(e) {
    if (!Pe(e))
        return St(e);
    const t = new Proxy({},{
        get(n, r, s) {
            return x(Reflect.get(e.value, r, s))
        },
        set(n, r, s) {
            return Pe(e.value[r]) && !Pe(s) ? e.value[r].value = s : e.value[r] = s,
            !0
        },
        deleteProperty(n, r) {
            return Reflect.deleteProperty(e.value, r)
        },
        has(n, r) {
            return Reflect.has(e.value, r)
        },
        ownKeys() {
            return Object.keys(e.value)
        },
        getOwnPropertyDescriptor() {
            return {
                enumerable: !0,
                configurable: !0
            }
        }
    });
    return St(t)
}
function Jd(e) {
    return Jm(O(e))
}
function Qd(e, ...t) {
    const n = t.flat()
      , r = n[0];
    return Jd( () => Object.fromEntries(typeof r == "function" ? Object.entries(Bt(e)).filter( ([s,o]) => !r(Re(o), s)) : Object.entries(Bt(e)).filter(s => !n.includes(s[0]))))
}
const Qm = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Zm = Object.prototype.toString
  , Xm = e => Zm.call(e) === "[object Object]"
  , ey = () => {}
;
function Ni(...e) {
    if (e.length !== 1)
        return Ln(...e);
    const t = e[0];
    return typeof t == "function" ? xn(Eo( () => ({
        get: t,
        set: ey
    }))) : Q(t)
}
function Wa(e, ...t) {
    const n = t.flat()
      , r = n[0];
    return Jd( () => Object.fromEntries(typeof r == "function" ? Object.entries(Bt(e)).filter( ([s,o]) => r(Re(o), s)) : n.map(s => [s, Ni(e, s)])))
}
function ty(e, t) {
    function n(...r) {
        return new Promise( (s, o) => {
            Promise.resolve(e( () => t.apply(this, r), {
                fn: t,
                thisArg: this,
                args: r
            })).then(s).catch(o)
        }
        )
    }
    return n
}
const Zd = e => e();
function ny(e=Zd, t={}) {
    const {initialState: n="active"} = t
      , r = Ni(n === "active");
    function s() {
        r.value = !1
    }
    function o() {
        r.value = !0
    }
    return {
        isActive: xn(r),
        pause: s,
        resume: o,
        eventFilter: (...i) => {
            r.value && e(...i)
        }
    }
}
function ic(e) {
    return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e)
}
function aa(e) {
    return Array.isArray(e) ? e : [e]
}
function ry(e) {
    return tt()
}
function sy(e, t, n={}) {
    const {eventFilter: r=Zd, ...s} = n;
    return Oe(e, ty(r, t), s)
}
function oy(e, t, n={}) {
    const {eventFilter: r, initialState: s="active", ...o} = n
      , {eventFilter: a, pause: i, resume: l, isActive: u} = ny(r, {
        initialState: s
    });
    return {
        stop: sy(e, t, {
            ...o,
            eventFilter: a
        }),
        pause: i,
        resume: l,
        isActive: u
    }
}
function Xd(e, t=!0, n) {
    ry() ? jt(e, n) : t ? e() : lt(e)
}
function ay(e, t, n) {
    return Oe(e, t, {
        ...n,
        immediate: !0
    })
}
const rs = Qm ? window : void 0;
function ef(e) {
    var t;
    const n = Re(e);
    return (t = n == null ? void 0 : n.$el) != null ? t : n
}
function za(...e) {
    const t = []
      , n = () => {
        t.forEach(i => i()),
        t.length = 0
    }
      , r = (i, l, u, c) => (i.addEventListener(l, u, c),
    () => i.removeEventListener(l, u, c))
      , s = O( () => {
        const i = aa(Re(e[0])).filter(l => l != null);
        return i.every(l => typeof l != "string") ? i : void 0
    }
    )
      , o = ay( () => {
        var i, l;
        return [(l = (i = s.value) == null ? void 0 : i.map(u => ef(u))) != null ? l : [rs].filter(u => u != null), aa(Re(s.value ? e[1] : e[0])), aa(x(s.value ? e[2] : e[1])), Re(s.value ? e[3] : e[2])]
    }
    , ([i,l,u,c]) => {
        if (n(),
        !(i != null && i.length) || !(l != null && l.length) || !(u != null && u.length))
            return;
        const d = Xm(c) ? {
            ...c
        } : c;
        t.push(...i.flatMap(f => l.flatMap(p => u.map(h => r(f, p, h, d)))))
    }
    , {
        flush: "post"
    })
      , a = () => {
        o(),
        n()
    }
    ;
    return Yd(n),
    a
}
function iy() {
    const e = rn(!1)
      , t = tt();
    return t && jt( () => {
        e.value = !0
    }
    , t),
    e
}
function ly(e) {
    const t = iy();
    return O( () => (t.value,
    !!e()))
}
const cy = Symbol("vueuse-ssr-width");
function uy() {
    const e = Ti() ? Km(cy, null) : null;
    return typeof e == "number" ? e : void 0
}
function dy(e, t={}) {
    const {window: n=rs, ssrWidth: r=uy()} = t
      , s = ly( () => n && "matchMedia"in n && typeof n.matchMedia == "function")
      , o = rn(typeof r == "number")
      , a = rn()
      , i = rn(!1)
      , l = u => {
        i.value = u.matches
    }
    ;
    return ct( () => {
        if (o.value) {
            o.value = !s.value;
            const u = Re(e).split(",");
            i.value = u.some(c => {
                const d = c.includes("not all")
                  , f = c.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/)
                  , p = c.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
                let h = !!(f || p);
                return f && h && (h = r >= ic(f[1])),
                p && h && (h = r <= ic(p[1])),
                d ? !h : h
            }
            );
            return
        }
        s.value && (a.value = n.matchMedia(Re(e)),
        i.value = a.value.matches)
    }
    ),
    za(a, "change", l, {
        passive: !0
    }),
    O( () => i.value)
}
const ks = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , _s = "__vueuse_ssr_handlers__"
  , fy = hy();
function hy() {
    return _s in ks || (ks[_s] = ks[_s] || {}),
    ks[_s]
}
function tf(e, t) {
    return fy[e] || t
}
function py(e) {
    return dy("(prefers-color-scheme: dark)", e)
}
function gy(e) {
    return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number"
}
const my = {
    boolean: {
        read: e => e === "true",
        write: e => String(e)
    },
    object: {
        read: e => JSON.parse(e),
        write: e => JSON.stringify(e)
    },
    number: {
        read: e => Number.parseFloat(e),
        write: e => String(e)
    },
    any: {
        read: e => e,
        write: e => String(e)
    },
    string: {
        read: e => e,
        write: e => String(e)
    },
    map: {
        read: e => new Map(JSON.parse(e)),
        write: e => JSON.stringify(Array.from(e.entries()))
    },
    set: {
        read: e => new Set(JSON.parse(e)),
        write: e => JSON.stringify(Array.from(e))
    },
    date: {
        read: e => new Date(e),
        write: e => e.toISOString()
    }
}
  , lc = "vueuse-storage";
function yy(e, t, n, r={}) {
    var s;
    const {flush: o="pre", deep: a=!0, listenToStorageChanges: i=!0, writeDefaults: l=!0, mergeDefaults: u=!1, shallow: c, window: d=rs, eventFilter: f, onError: p=D => {
        console.error(D)
    }
    , initOnMounted: h} = r
      , g = (c ? rn : Q)(typeof t == "function" ? t() : t)
      , m = O( () => Re(e));
    if (!n)
        try {
            n = tf("getDefaultStorage", () => {
                var D;
                return (D = rs) == null ? void 0 : D.localStorage
            }
            )()
        } catch (D) {
            p(D)
        }
    if (!n)
        return g;
    const b = Re(t)
      , y = gy(b)
      , v = (s = r.serializer) != null ? s : my[y]
      , {pause: k, resume: _} = oy(g, D => U(D), {
        flush: o,
        deep: a,
        eventFilter: f
    });
    Oe(m, () => M(), {
        flush: o
    });
    let $ = !1;
    const A = D => {
        h && !$ || M(D)
    }
      , S = D => {
        h && !$ || q(D)
    }
    ;
    d && i && (n instanceof Storage ? za(d, "storage", A, {
        passive: !0
    }) : za(d, lc, S)),
    h ? Xd( () => {
        $ = !0,
        M()
    }
    ) : M();
    function P(D, N) {
        if (d) {
            const R = {
                key: m.value,
                oldValue: D,
                newValue: N,
                storageArea: n
            };
            d.dispatchEvent(n instanceof Storage ? new StorageEvent("storage",R) : new CustomEvent(lc,{
                detail: R
            }))
        }
    }
    function U(D) {
        try {
            const N = n.getItem(m.value);
            if (D == null)
                P(N, null),
                n.removeItem(m.value);
            else {
                const R = v.write(D);
                N !== R && (n.setItem(m.value, R),
                P(N, R))
            }
        } catch (N) {
            p(N)
        }
    }
    function ee(D) {
        const N = D ? D.newValue : n.getItem(m.value);
        if (N == null)
            return l && b != null && n.setItem(m.value, v.write(b)),
            b;
        if (!D && u) {
            const R = v.read(N);
            return typeof u == "function" ? u(R, b) : y === "object" && !Array.isArray(R) ? {
                ...b,
                ...R
            } : R
        } else
            return typeof N != "string" ? N : v.read(N)
    }
    function M(D) {
        if (!(D && D.storageArea !== n)) {
            if (D && D.key == null) {
                g.value = b;
                return
            }
            if (!(D && D.key !== m.value)) {
                k();
                try {
                    const N = v.write(g.value);
                    (D === void 0 || (D == null ? void 0 : D.newValue) !== N) && (g.value = ee(D))
                } catch (N) {
                    p(N)
                } finally {
                    D ? lt(_) : _()
                }
            }
        }
    }
    function q(D) {
        M(D.detail)
    }
    return g
}
const vy = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function by(e={}) {
    const {selector: t="html", attribute: n="class", initialValue: r="auto", window: s=rs, storage: o, storageKey: a="vueuse-color-scheme", listenToStorageChanges: i=!0, storageRef: l, emitAuto: u, disableTransition: c=!0} = e
      , d = {
        auto: "",
        light: "light",
        dark: "dark",
        ...e.modes || {}
    }
      , f = py({
        window: s
    })
      , p = O( () => f.value ? "dark" : "light")
      , h = l || (a == null ? Ni(r) : yy(a, r, o, {
        window: s,
        listenToStorageChanges: i
    }))
      , g = O( () => h.value === "auto" ? p.value : h.value)
      , m = tf("updateHTMLAttrs", (k, _, $) => {
        const A = typeof k == "string" ? s == null ? void 0 : s.document.querySelector(k) : ef(k);
        if (!A)
            return;
        const S = new Set
          , P = new Set;
        let U = null;
        if (_ === "class") {
            const M = $.split(/\s/g);
            Object.values(d).flatMap(q => (q || "").split(/\s/g)).filter(Boolean).forEach(q => {
                M.includes(q) ? S.add(q) : P.add(q)
            }
            )
        } else
            U = {
                key: _,
                value: $
            };
        if (S.size === 0 && P.size === 0 && U === null)
            return;
        let ee;
        c && (ee = s.document.createElement("style"),
        ee.appendChild(document.createTextNode(vy)),
        s.document.head.appendChild(ee));
        for (const M of S)
            A.classList.add(M);
        for (const M of P)
            A.classList.remove(M);
        U && A.setAttribute(U.key, U.value),
        c && (s.getComputedStyle(ee).opacity,
        document.head.removeChild(ee))
    }
    );
    function b(k) {
        var _;
        m(t, n, (_ = d[k]) != null ? _ : k)
    }
    function y(k) {
        e.onChanged ? e.onChanged(k, b) : b(k)
    }
    Oe(g, y, {
        flush: "post",
        immediate: !0
    }),
    Xd( () => y(g.value));
    const v = O({
        get() {
            return u ? h.value : g.value
        },
        set(k) {
            h.value = k
        }
    });
    return Object.assign(v, {
        store: h,
        system: p,
        state: g
    })
}
function wy(e={}) {
    const {valueDark: t="dark", valueLight: n=""} = e
      , r = by({
        ...e,
        onChanged: (a, i) => {
            var l;
            e.onChanged ? (l = e.onChanged) == null || l.call(e, a === "dark", i, a) : i(a)
        }
        ,
        modes: {
            dark: t,
            light: n
        }
    })
      , s = O( () => r.system.value);
    return O({
        get() {
            return r.value === "dark"
        },
        set(a) {
            const i = a ? "dark" : "light";
            s.value === i ? r.value = "auto" : r.value = i
        }
    })
}
const nf = {
    ui: {
        colors: {
            primary: "green",
            secondary: "blue",
            success: "green",
            info: "blue",
            warning: "yellow",
            error: "red",
            neutral: "slate"
        },
        icons: {
            arrowLeft: "i-lucide-arrow-left",
            arrowRight: "i-lucide-arrow-right",
            check: "i-lucide-check",
            chevronDoubleLeft: "i-lucide-chevrons-left",
            chevronDoubleRight: "i-lucide-chevrons-right",
            chevronDown: "i-lucide-chevron-down",
            chevronLeft: "i-lucide-chevron-left",
            chevronRight: "i-lucide-chevron-right",
            chevronUp: "i-lucide-chevron-up",
            close: "i-lucide-x",
            ellipsis: "i-lucide-ellipsis",
            external: "i-lucide-arrow-up-right",
            file: "i-lucide-file",
            folder: "i-lucide-folder",
            folderOpen: "i-lucide-folder-open",
            loading: "i-lucide-loader-circle",
            minus: "i-lucide-minus",
            plus: "i-lucide-plus",
            search: "i-lucide-search",
            upload: "i-lucide-upload"
        }
    },
    colorMode: !0
};
/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
const xy = () => {}
  , no = Array.isArray;
function cc(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function ky(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (var n in e)
        if (!_y(e[n], t[n]))
            return !1;
    return !0
}
function _y(e, t) {
    return no(e) ? uc(e, t) : no(t) ? uc(t, e) : (e == null ? void 0 : e.valueOf()) === (t == null ? void 0 : t.valueOf())
}
function uc(e, t) {
    return no(t) ? e.length === t.length && e.every( (n, r) => n === t[r]) : e.length === 1 && e[0] === t
}
const rf = Symbol("")
  , sf = Symbol("");
/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
function dc(e) {
    const t = et(rf)
      , n = et(sf)
      , r = O( () => {
        const l = x(e.to);
        return t.resolve(l)
    }
    )
      , s = O( () => {
        const {matched: l} = r.value
          , {length: u} = l
          , c = l[u - 1]
          , d = n.matched;
        if (!c || !d.length)
            return -1;
        const f = d.findIndex(cc.bind(null, c));
        if (f > -1)
            return f;
        const p = fc(l[u - 2]);
        return u > 1 && fc(c) === p && d[d.length - 1].path !== p ? d.findIndex(cc.bind(null, l[u - 2])) : f
    }
    )
      , o = O( () => s.value > -1 && Oy(n.params, r.value.params))
      , a = O( () => s.value > -1 && s.value === n.matched.length - 1 && ky(n.params, r.value.params));
    function i(l={}) {
        if (Ay(l)) {
            const u = t[x(e.replace) ? "replace" : "push"](x(e.to)).catch(xy);
            return e.viewTransition && typeof document < "u" && "startViewTransition"in document && document.startViewTransition( () => u),
            u
        }
        return Promise.resolve()
    }
    return {
        route: r,
        href: O( () => r.value.href),
        isActive: o,
        isExactActive: a,
        navigate: i
    }
}
function Cy(e) {
    return e.length === 1 ? e[0] : e
}
const Sy = se({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        },
        viewTransition: Boolean
    },
    useLink: dc,
    setup(e, {slots: t}) {
        const n = St(dc(e))
          , {options: r} = et(rf)
          , s = O( () => ({
            [hc(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
            [hc(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return () => {
            const o = t.default && Cy(t.default(n));
            return e.custom ? o : Nn("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value
            }, o)
        }
    }
})
  , $y = Sy;
function Ay(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t))
                return
        }
        return e.preventDefault && e.preventDefault(),
        !0
    }
}
function Oy(e, t) {
    for (const n in t) {
        const r = t[n]
          , s = e[n];
        if (typeof r == "string") {
            if (r !== s)
                return !1
        } else if (!no(s) || s.length !== r.length || r.some( (o, a) => o.valueOf() !== s[a].valueOf()))
            return !1
    }
    return !0
}
function fc(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const hc = (e, t, n) => e ?? t ?? n;
function Dy(e) {
    return et(sf)
}
const Ey = St(nf)
  , Cn = () => Ey;
function ia(e) {
    if (e === null || typeof e != "object")
        return !1;
    const t = Object.getPrototypeOf(e);
    return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0
}
function Ua(e, t, n=".", r) {
    if (!ia(t))
        return Ua(e, {}, n, r);
    const s = {
        ...t
    };
    for (const o of Object.keys(e)) {
        if (o === "__proto__" || o === "constructor")
            continue;
        const a = e[o];
        a != null && (r && r(s, o, a, n) || (Array.isArray(a) && Array.isArray(s[o]) ? s[o] = [...a, ...s[o]] : ia(a) && ia(s[o]) ? s[o] = Ua(a, s[o], (n ? `${n}.` : "") + o.toString(), r) : s[o] = a))
    }
    return s
}
function Py(e) {
    return (...t) => t.reduce( (n, r) => Ua(n, r, "", e), {})
}
const hs = Py();
function My(e) {
    return hs(e, {
        dir: "ltr"
    })
}
function Ga(e) {
    return typeof e == "string" ? `'${e}'` : new Ty().serialize(e)
}
const Ty = (function() {
    var t;
    class e {
        constructor() {
            Dr(this, t, new Map)
        }
        compare(r, s) {
            const o = typeof r
              , a = typeof s;
            return o === "string" && a === "string" ? r.localeCompare(s) : o === "number" && a === "number" ? r - s : String.prototype.localeCompare.call(this.serialize(r, !0), this.serialize(s, !0))
        }
        serialize(r, s) {
            if (r === null)
                return "null";
            switch (typeof r) {
            case "string":
                return s ? r : `'${r}'`;
            case "bigint":
                return `${r}n`;
            case "object":
                return this.$object(r);
            case "function":
                return this.$function(r)
            }
            return String(r)
        }
        serializeObject(r) {
            const s = Object.prototype.toString.call(r);
            if (s !== "[object Object]")
                return this.serializeBuiltInType(s.length < 10 ? `unknown:${s}` : s.slice(8, -1), r);
            const o = r.constructor
              , a = o === Object || o === void 0 ? "" : o.name;
            if (a !== "" && globalThis[a] === o)
                return this.serializeBuiltInType(a, r);
            if (typeof r.toJSON == "function") {
                const i = r.toJSON();
                return a + (i !== null && typeof i == "object" ? this.$object(i) : `(${this.serialize(i)})`)
            }
            return this.serializeObjectEntries(a, Object.entries(r))
        }
        serializeBuiltInType(r, s) {
            const o = this["$" + r];
            if (o)
                return o.call(this, s);
            if (typeof (s == null ? void 0 : s.entries) == "function")
                return this.serializeObjectEntries(r, s.entries());
            throw new Error(`Cannot serialize ${r}`)
        }
        serializeObjectEntries(r, s) {
            const o = Array.from(s).sort( (i, l) => this.compare(i[0], l[0]));
            let a = `${r}{`;
            for (let i = 0; i < o.length; i++) {
                const [l,u] = o[i];
                a += `${this.serialize(l, !0)}:${this.serialize(u)}`,
                i < o.length - 1 && (a += ",")
            }
            return a + "}"
        }
        $object(r) {
            let s = Or(this, t).get(r);
            return s === void 0 && (Or(this, t).set(r, `#${Or(this, t).size}`),
            s = this.serializeObject(r),
            Or(this, t).set(r, s)),
            s
        }
        $function(r) {
            const s = Function.prototype.toString.call(r);
            return s.slice(-15) === "[native code] }" ? `${r.name || ""}()[native]` : `${r.name}(${r.length})${s.replace(/\s*\n\s*/g, "")}`
        }
        $Array(r) {
            let s = "[";
            for (let o = 0; o < r.length; o++)
                s += this.serialize(r[o]),
                o < r.length - 1 && (s += ",");
            return s + "]"
        }
        $Date(r) {
            try {
                return `Date(${r.toISOString()})`
            } catch {
                return "Date(null)"
            }
        }
        $ArrayBuffer(r) {
            return `ArrayBuffer[${new Uint8Array(r).join(",")}]`
        }
        $Set(r) {
            return `Set${this.$Array(Array.from(r).sort( (s, o) => this.compare(s, o)))}`
        }
        $Map(r) {
            return this.serializeObjectEntries("Map", r.entries())
        }
    }
    t = new WeakMap;
    for (const n of ["Error", "RegExp", "URL"])
        e.prototype["$" + n] = function(r) {
            return `${n}(${r})`
        }
        ;
    for (const n of ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"])
        e.prototype["$" + n] = function(r) {
            return `${n}[${r.join(",")}]`
        }
        ;
    for (const n of ["BigInt64Array", "BigUint64Array"])
        e.prototype["$" + n] = function(r) {
            return `${n}[${r.join("n,")}${r.length > 0 ? "n" : ""}]`
        }
        ;
    return e
}
)();
function of(e, t) {
    return e === t || Ga(e) === Ga(t)
}
function Ry(e, t) {
    const n = Ka(e)
      , r = Ka(t);
    return af(n, r)
}
function af(e, t) {
    var s, o;
    const n = []
      , r = new Set([...Object.keys(e.props || {}), ...Object.keys(t.props || {})]);
    if (e.props && t.props)
        for (const a of r) {
            const i = e.props[a]
              , l = t.props[a];
            i && l ? n.push(...af((s = e.props) == null ? void 0 : s[a], (o = t.props) == null ? void 0 : o[a])) : (i || l) && n.push(new pc((l || i).key,i ? "removed" : "added",l,i))
        }
    return r.size === 0 && e.hash !== t.hash && n.push(new pc((t || e).key,"changed",t,e)),
    n
}
function Ka(e, t="") {
    if (e && typeof e != "object")
        return new gc(t,e,Ga(e));
    const n = {}
      , r = [];
    for (const s in e)
        n[s] = Ka(e[s], t ? `${t}.${s}` : s),
        r.push(n[s].hash);
    return new gc(t,e,`{${r.join(":")}}`,n)
}
class pc {
    constructor(t, n, r, s) {
        this.key = t,
        this.type = n,
        this.newValue = r,
        this.oldValue = s
    }
    toString() {
        return this.toJSON()
    }
    toJSON() {
        var t;
        switch (this.type) {
        case "added":
            return `Added   \`${this.key}\``;
        case "removed":
            return `Removed \`${this.key}\``;
        case "changed":
            return `Changed \`${this.key}\` from \`${((t = this.oldValue) == null ? void 0 : t.toString()) || "-"}\` to \`${this.newValue.toString()}\``
        }
    }
}
class gc {
    constructor(t, n, r, s) {
        this.key = t,
        this.value = n,
        this.hash = r,
        this.props = s
    }
    toString() {
        return this.props ? `{${Object.keys(this.props).join(",")}}` : JSON.stringify(this.value)
    }
    toJSON() {
        const t = this.key || ".";
        return this.props ? `${t}({${Object.keys(this.props).join(",")}})` : `${t}(${this.value})`
    }
}
function Iy(e, t) {
    const n = {
        ...e
    };
    for (const r of t)
        delete n[r];
    return n
}
function qy(e, t, n) {
    typeof t == "string" && (t = t.split(".").map(s => {
        const o = Number(s);
        return Number.isNaN(o) ? s : o
    }
    ));
    let r = e;
    for (const s of t) {
        if (r == null)
            return n;
        r = r[s]
    }
    return r !== void 0 ? r : n
}
function mc(e, t) {
    return !e && !t ? "" : [...Array.isArray(e) ? e : [e], t].filter(Boolean)
}
function Fy(e) {
    return (t, n) => Ly(t, n, x(e))
}
function Ly(e, t, n) {
    return qy(n, `messages.${e}`, e).replace(/\{(\w+)\}/g, (s, o) => `${(t == null ? void 0 : t[o]) ?? `{${o}}`}`)
}
function By(e) {
    const t = O( () => x(e).name)
      , n = O( () => x(e).code)
      , r = O( () => x(e).dir);
    return {
        lang: t,
        code: n,
        dir: r,
        locale: Pe(e) ? e : Q(e),
        t: Fy(e)
    }
}
const yc = My({
    name: "English",
    code: "en",
    messages: {
        inputMenu: {
            noMatch: "No matching data",
            noData: "No data",
            create: 'Create "{label}"'
        },
        calendar: {
            prevYear: "Previous year",
            nextYear: "Next year",
            prevMonth: "Previous month",
            nextMonth: "Next month"
        },
        inputNumber: {
            increment: "Increment",
            decrement: "Decrement"
        },
        commandPalette: {
            placeholder: "Type a command or search...",
            noMatch: "No matching data",
            noData: "No data",
            close: "Close",
            back: "Back"
        },
        selectMenu: {
            noMatch: "No matching data",
            noData: "No data",
            create: 'Create "{label}"',
            search: "Search..."
        },
        toast: {
            close: "Close"
        },
        carousel: {
            prev: "Prev",
            next: "Next",
            dots: "Choose slide to display",
            goto: "Go to slide {slide}"
        },
        modal: {
            close: "Close"
        },
        slideover: {
            close: "Close"
        },
        alert: {
            close: "Close"
        },
        table: {
            noData: "No data"
        },
        fileUpload: {
            removeFile: "Remove {filename}"
        }
    }
})
  , Ny = Symbol.for("nuxt-ui.locale-context")
  , Hy = e => {
    const t = e || Ln(et(Ny, yc));
    return By(O( () => t.value || yc))
}
  , jy = Ym(Hy)
  , vc = Gm();
function Vy() {
    return {
        isHydrating: !0,
        payload: {
            serverRendered: !1
        },
        hooks: vc,
        hook: vc.hook
    }
}
function Wy(e) {
    return {
        install(t) {
            t.runWithContext( () => e({
                vueApp: t
            }))
        }
    }
}
const zy = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
function Uy(e, t) {
    return e in xs && typeof xs[e] == "object" && t in xs[e] ? xs[e][t] : ""
}
function Gy(e, t) {
    return `${zy.map(n => `--ui-color-${e}-${n}: var(--color-${t === "neutral" ? "old-neutral" : t}-${n}, ${Uy(t, n)});`).join(`
  `)}`
}
function bc(e, t) {
    return `--ui-${e}: var(--ui-color-${e}-${t});`
}
const Ky = Wy( () => {
    const e = Cn();
    Vy();
    const t = O( () => {
        const {neutral: r, ...s} = e.ui.colors;
        return `@layer base {
  :root {
  ${Object.entries(e.ui.colors).map( ([o,a]) => Gy(o, a)).join(`
  `)}
  }
  :root, .light {
  ${Object.keys(s).map(o => bc(o, 500)).join(`
  `)}
  }
  .dark {
  ${Object.keys(s).map(o => bc(o, 400)).join(`
  `)}
  }
}`
    }
    )
      , n = {
        style: [{
            innerHTML: () => t.value,
            tagPriority: -2,
            id: "nuxt-ui-colors"
        }]
    };
    {
        const r = document.createElement("style");
        r.innerHTML = t.value,
        r.setAttribute("data-nuxt-ui-colors", ""),
        document.head.appendChild(r),
        n.script = [{
            innerHTML: "document.head.removeChild(document.querySelector('[data-nuxt-ui-colors]'))"
        }]
    }
    Lm(n)
}
)
  , Yy = {
    install() {
        wy()
    }
}
  , Jy = {
    install(e) {
        e.use(Hm),
        e.use(Ky),
        e.use(Yy)
    }
};
function Gn(e, t) {
    const n = typeof e == "string" && !t ? `${e}Context` : t
      , r = Symbol(n);
    return [a => {
        const i = et(r, a);
        if (i || i === null)
            return i;
        throw new Error(`Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`)
    }
    , a => (Mi(r, a),
    a)]
}
function ur() {
    let e = document.activeElement;
    if (e == null)
        return null;
    for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
        e = e.shadowRoot.activeElement;
    return e
}
function lf(e, t, n) {
    const r = n.originalEvent.target
      , s = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && r.addEventListener(e, t, {
        once: !0
    }),
    r.dispatchEvent(s)
}
function Hi(e) {
    return e ? e.flatMap(t => t.type === Fe ? Hi(t.children) : [t]) : []
}
const [ji] = Gn("ConfigProvider");
function Qy(e, t) {
    var n;
    const r = rn();
    return ct( () => {
        r.value = e()
    }
    , {
        ...t,
        flush: (n = void 0) != null ? n : "sync"
    }),
    xn(r)
}
function qo(e) {
    return Co() ? (Ai(e),
    !0) : !1
}
function Zy() {
    const e = new Set
      , t = o => {
        e.delete(o)
    }
    ;
    return {
        on: o => {
            e.add(o);
            const a = () => t(o);
            return qo(a),
            {
                off: a
            }
        }
        ,
        off: t,
        trigger: (...o) => Promise.all(Array.from(e).map(a => a(...o))),
        clear: () => {
            e.clear()
        }
    }
}
function Xy(e) {
    let t = !1, n;
    const r = $i(!0);
    return (...s) => (t || (n = r.run( () => e(...s)),
    t = !0),
    n)
}
function ev(e) {
    let t = 0, n, r;
    const s = () => {
        t -= 1,
        r && t <= 0 && (r.stop(),
        n = void 0,
        r = void 0)
    }
    ;
    return (...o) => (t += 1,
    r || (r = $i(!0),
    n = r.run( () => e(...o))),
    qo(s),
    n)
}
function tv(e) {
    if (!Pe(e))
        return St(e);
    const t = new Proxy({},{
        get(n, r, s) {
            return x(Reflect.get(e.value, r, s))
        },
        set(n, r, s) {
            return Pe(e.value[r]) && !Pe(s) ? e.value[r].value = s : e.value[r] = s,
            !0
        },
        deleteProperty(n, r) {
            return Reflect.deleteProperty(e.value, r)
        },
        has(n, r) {
            return Reflect.has(e.value, r)
        },
        ownKeys() {
            return Object.keys(e.value)
        },
        getOwnPropertyDescriptor() {
            return {
                enumerable: !0,
                configurable: !0
            }
        }
    });
    return St(t)
}
function nv(e) {
    return tv(O(e))
}
function rv(e, ...t) {
    const n = t.flat()
      , r = n[0];
    return nv( () => Object.fromEntries(typeof r == "function" ? Object.entries(Bt(e)).filter( ([s,o]) => !r(Re(o), s)) : Object.entries(Bt(e)).filter(s => !n.includes(s[0]))))
}
const Sn = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const sv = e => typeof e < "u"
  , ov = Object.prototype.toString
  , av = e => ov.call(e) === "[object Object]"
  , iv = () => {}
  , wc = lv();
function lv() {
    var e, t;
    return Sn && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent))
}
function cv(e, t) {
    function n(...r) {
        return new Promise( (s, o) => {
            Promise.resolve(e( () => t.apply(this, r), {
                fn: t,
                thisArg: this,
                args: r
            })).then(s).catch(o)
        }
        )
    }
    return n
}
const cf = e => e();
function uv(e=cf, t={}) {
    const {initialState: n="active"} = t
      , r = fv(n === "active");
    function s() {
        r.value = !1
    }
    function o() {
        r.value = !0
    }
    return {
        isActive: xn(r),
        pause: s,
        resume: o,
        eventFilter: (...i) => {
            r.value && e(...i)
        }
    }
}
function dv(e) {
    return tt()
}
function la(e) {
    return Array.isArray(e) ? e : [e]
}
function fv(...e) {
    if (e.length !== 1)
        return Ln(...e);
    const t = e[0];
    return typeof t == "function" ? xn(Eo( () => ({
        get: t,
        set: iv
    }))) : Q(t)
}
function hv(e, t=1e4) {
    return Eo( (n, r) => {
        let s = Re(e), o;
        const a = () => setTimeout( () => {
            s = Re(e),
            r()
        }
        , Re(t));
        return qo( () => {
            clearTimeout(o)
        }
        ),
        {
            get() {
                return n(),
                s
            },
            set(i) {
                s = i,
                r(),
                clearTimeout(o),
                o = a()
            }
        }
    }
    )
}
function pv(e, t, n={}) {
    const {eventFilter: r=cf, ...s} = n;
    return Oe(e, cv(r, t), s)
}
function xc(e, t, n={}) {
    const {eventFilter: r, initialState: s="active", ...o} = n
      , {eventFilter: a, pause: i, resume: l, isActive: u} = uv(r, {
        initialState: s
    });
    return {
        stop: pv(e, t, {
            ...o,
            eventFilter: a
        }),
        pause: i,
        resume: l,
        isActive: u
    }
}
function gv(e, t, ...[n]) {
    const {flush: r="sync", deep: s=!1, immediate: o=!0, direction: a="both", transform: i={}} = n || {}
      , l = []
      , u = "ltr"in i && i.ltr || (f => f)
      , c = "rtl"in i && i.rtl || (f => f);
    return (a === "both" || a === "ltr") && l.push(xc(e, f => {
        l.forEach(p => p.pause()),
        t.value = u(f),
        l.forEach(p => p.resume())
    }
    , {
        flush: r,
        deep: s,
        immediate: o
    })),
    (a === "both" || a === "rtl") && l.push(xc(t, f => {
        l.forEach(p => p.pause()),
        e.value = c(f),
        l.forEach(p => p.resume())
    }
    , {
        flush: r,
        deep: s,
        immediate: o
    })),
    () => {
        l.forEach(f => f.stop())
    }
}
function mv(e, t) {
    dv() && Ii(e, t)
}
function yv(e, t, n) {
    return Oe(e, t, {
        ...n,
        immediate: !0
    })
}
const Vi = Sn ? window : void 0;
function xr(e) {
    var t;
    const n = Re(e);
    return (t = n == null ? void 0 : n.$el) != null ? t : n
}
function Wi(...e) {
    const t = []
      , n = () => {
        t.forEach(i => i()),
        t.length = 0
    }
      , r = (i, l, u, c) => (i.addEventListener(l, u, c),
    () => i.removeEventListener(l, u, c))
      , s = O( () => {
        const i = la(Re(e[0])).filter(l => l != null);
        return i.every(l => typeof l != "string") ? i : void 0
    }
    )
      , o = yv( () => {
        var i, l;
        return [(l = (i = s.value) == null ? void 0 : i.map(u => xr(u))) != null ? l : [Vi].filter(u => u != null), la(Re(s.value ? e[1] : e[0])), la(x(s.value ? e[2] : e[1])), Re(s.value ? e[3] : e[2])]
    }
    , ([i,l,u,c]) => {
        if (n(),
        !(i != null && i.length) || !(l != null && l.length) || !(u != null && u.length))
            return;
        const d = av(c) ? {
            ...c
        } : c;
        t.push(...i.flatMap(f => l.flatMap(p => u.map(h => r(f, p, h, d)))))
    }
    , {
        flush: "post"
    })
      , a = () => {
        o(),
        n()
    }
    ;
    return qo(n),
    a
}
function vv() {
    const e = rn(!1)
      , t = tt();
    return t && jt( () => {
        e.value = !0
    }
    , t),
    e
}
function bv(e) {
    return typeof e == "function" ? e : typeof e == "string" ? t => t.key === e : Array.isArray(e) ? t => e.includes(t.key) : () => !0
}
function wv(...e) {
    let t, n, r = {};
    e.length === 3 ? (t = e[0],
    n = e[1],
    r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0,
    n = e[0],
    r = e[1]) : (t = e[0],
    n = e[1]) : (t = !0,
    n = e[0]);
    const {target: s=Vi, eventName: o="keydown", passive: a=!1, dedupe: i=!1} = r
      , l = bv(t);
    return Wi(s, o, c => {
        c.repeat && Re(i) || l(c) && n(c)
    }
    , a)
}
function xv(e) {
    return JSON.parse(JSON.stringify(e))
}
function mr(e, t, n, r={}) {
    var s, o, a;
    const {clone: i=!1, passive: l=!1, eventName: u, deep: c=!1, defaultValue: d, shouldEmit: f} = r
      , p = tt()
      , h = n || (p == null ? void 0 : p.emit) || ((s = p == null ? void 0 : p.$emit) == null ? void 0 : s.bind(p)) || ((a = (o = p == null ? void 0 : p.proxy) == null ? void 0 : o.$emit) == null ? void 0 : a.bind(p == null ? void 0 : p.proxy));
    let g = u;
    t || (t = "modelValue"),
    g = g || `update:${t.toString()}`;
    const m = v => i ? typeof i == "function" ? i(v) : xv(v) : v
      , b = () => sv(e[t]) ? m(e[t]) : d
      , y = v => {
        f ? f(v) && h(g, v) : h(g, v)
    }
    ;
    if (l) {
        const v = b()
          , k = Q(v);
        let _ = !1;
        return Oe( () => e[t], $ => {
            _ || (_ = !0,
            k.value = m($),
            lt( () => _ = !1))
        }
        ),
        Oe(k, $ => {
            !_ && ($ !== e[t] || c) && y($)
        }
        , {
            deep: c
        }),
        k
    } else
        return O({
            get() {
                return b()
            },
            set(v) {
                y(v)
            }
        })
}
const kv = ev( () => {
    const e = Q(new Map)
      , t = Q()
      , n = O( () => {
        for (const a of e.value.values())
            if (a)
                return !0;
        return !1
    }
    )
      , r = ji({
        scrollBody: Q(!0)
    });
    let s = null;
    const o = () => {
        document.body.style.paddingRight = "",
        document.body.style.marginRight = "",
        document.body.style.pointerEvents = "",
        document.documentElement.style.removeProperty("--scrollbar-width"),
        document.body.style.overflow = t.value ?? "",
        wc && (s == null || s()),
        t.value = void 0
    }
    ;
    return Oe(n, (a, i) => {
        var d;
        if (!Sn)
            return;
        if (!a) {
            i && o();
            return
        }
        t.value === void 0 && (t.value = document.body.style.overflow);
        const l = window.innerWidth - document.documentElement.clientWidth
          , u = {
            padding: l,
            margin: 0
        }
          , c = (d = r.scrollBody) != null && d.value ? typeof r.scrollBody.value == "object" ? hs({
            padding: r.scrollBody.value.padding === !0 ? l : r.scrollBody.value.padding,
            margin: r.scrollBody.value.margin === !0 ? l : r.scrollBody.value.margin
        }, u) : u : {
            padding: 0,
            margin: 0
        };
        l > 0 && (document.body.style.paddingRight = typeof c.padding == "number" ? `${c.padding}px` : String(c.padding),
        document.body.style.marginRight = typeof c.margin == "number" ? `${c.margin}px` : String(c.margin),
        document.documentElement.style.setProperty("--scrollbar-width", `${l}px`),
        document.body.style.overflow = "hidden"),
        wc && (s = Wi(document, "touchmove", f => Cv(f), {
            passive: !1
        })),
        lt( () => {
            document.body.style.pointerEvents = "none",
            document.body.style.overflow = "hidden"
        }
        )
    }
    , {
        immediate: !0,
        flush: "sync"
    }),
    e
}
);
function _v(e) {
    const t = Math.random().toString(36).substring(2, 7)
      , n = kv();
    n.value.set(t, e);
    const r = O({
        get: () => n.value.get(t) ?? !1,
        set: s => n.value.set(t, s)
    });
    return mv( () => {
        n.value.delete(t)
    }
    ),
    r
}
function uf(e) {
    const t = window.getComputedStyle(e);
    if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
        return !0;
    {
        const n = e.parentNode;
        return !(n instanceof Element) || n.tagName === "BODY" ? !1 : uf(n)
    }
}
function Cv(e) {
    const t = e || window.event
      , n = t.target;
    return n instanceof Element && uf(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(),
    !1)
}
function dr(e, t) {
    return e - t * Math.floor(e / t)
}
const df = 1721426;
function In(e, t, n, r) {
    t = ps(e, t);
    let s = t - 1
      , o = -2;
    return n <= 2 ? o = 0 : wn(t) && (o = -1),
    df - 1 + 365 * s + Math.floor(s / 4) - Math.floor(s / 100) + Math.floor(s / 400) + Math.floor((367 * n - 362) / 12 + o + r)
}
function wn(e) {
    return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0)
}
function ps(e, t) {
    return e === "BC" ? 1 - t : t
}
function Fo(e) {
    let t = "AD";
    return e <= 0 && (t = "BC",
    e = 1 - e),
    [t, e]
}
const Sv = {
    standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
};
class At {
    fromJulianDay(t) {
        let n = t
          , r = n - df
          , s = Math.floor(r / 146097)
          , o = dr(r, 146097)
          , a = Math.floor(o / 36524)
          , i = dr(o, 36524)
          , l = Math.floor(i / 1461)
          , u = dr(i, 1461)
          , c = Math.floor(u / 365)
          , d = s * 400 + a * 100 + l * 4 + c + (a !== 4 && c !== 4 ? 1 : 0)
          , [f,p] = Fo(d)
          , h = n - In(f, p, 1, 1)
          , g = 2;
        n < In(f, p, 3, 1) ? g = 0 : wn(p) && (g = 1);
        let m = Math.floor(((h + g) * 12 + 373) / 367)
          , b = n - In(f, p, m, 1) + 1;
        return new Le(f,p,m,b)
    }
    toJulianDay(t) {
        return In(t.era, t.year, t.month, t.day)
    }
    getDaysInMonth(t) {
        return Sv[wn(t.year) ? "leapyear" : "standard"][t.month - 1]
    }
    getMonthsInYear(t) {
        return 12
    }
    getDaysInYear(t) {
        return wn(t.year) ? 366 : 365
    }
    getMaximumMonthsInYear() {
        return 12
    }
    getMaximumDaysInMonth() {
        return 31
    }
    getYearsInEra(t) {
        return 9999
    }
    getEras() {
        return ["BC", "AD"]
    }
    isInverseEra(t) {
        return t.era === "BC"
    }
    balanceDate(t) {
        t.year <= 0 && (t.era = t.era === "BC" ? "AD" : "BC",
        t.year = 1 - t.year)
    }
    constructor() {
        this.identifier = "gregory"
    }
}
const $v = {
    "001": 1,
    AD: 1,
    AE: 6,
    AF: 6,
    AI: 1,
    AL: 1,
    AM: 1,
    AN: 1,
    AR: 1,
    AT: 1,
    AU: 1,
    AX: 1,
    AZ: 1,
    BA: 1,
    BE: 1,
    BG: 1,
    BH: 6,
    BM: 1,
    BN: 1,
    BY: 1,
    CH: 1,
    CL: 1,
    CM: 1,
    CN: 1,
    CR: 1,
    CY: 1,
    CZ: 1,
    DE: 1,
    DJ: 6,
    DK: 1,
    DZ: 6,
    EC: 1,
    EE: 1,
    EG: 6,
    ES: 1,
    FI: 1,
    FJ: 1,
    FO: 1,
    FR: 1,
    GB: 1,
    GE: 1,
    GF: 1,
    GP: 1,
    GR: 1,
    HR: 1,
    HU: 1,
    IE: 1,
    IQ: 6,
    IR: 6,
    IS: 1,
    IT: 1,
    JO: 6,
    KG: 1,
    KW: 6,
    KZ: 1,
    LB: 1,
    LI: 1,
    LK: 1,
    LT: 1,
    LU: 1,
    LV: 1,
    LY: 6,
    MC: 1,
    MD: 1,
    ME: 1,
    MK: 1,
    MN: 1,
    MQ: 1,
    MV: 5,
    MY: 1,
    NL: 1,
    NO: 1,
    NZ: 1,
    OM: 6,
    PL: 1,
    QA: 6,
    RE: 1,
    RO: 1,
    RS: 1,
    RU: 1,
    SD: 6,
    SE: 1,
    SI: 1,
    SK: 1,
    SM: 1,
    SY: 6,
    TJ: 1,
    TM: 1,
    TR: 1,
    UA: 1,
    UY: 1,
    UZ: 1,
    VA: 1,
    VN: 1,
    XK: 1
};
function Ne(e, t) {
    return t = at(t, e.calendar),
    e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day
}
function zi(e, t) {
    return t = at(t, e.calendar),
    e = Ya(e),
    t = Ya(t),
    e.era === t.era && e.year === t.year && e.month === t.month
}
function bn(e, t) {
    return Ui(e.calendar, t.calendar) && Ne(e, t)
}
function kc(e, t) {
    return Ui(e.calendar, t.calendar) && zi(e, t)
}
function Ui(e, t) {
    var n, r;
    return ((n = e.isEqual) == null ? void 0 : n.call(e, t)) ?? ((r = t.isEqual) == null ? void 0 : r.call(t, e)) ?? e.identifier === t.identifier
}
function ff(e, t) {
    return Ne(e, pf(t))
}
function hf(e, t, n) {
    let r = e.calendar.toJulianDay(e)
      , s = Pv(t)
      , o = Math.ceil(r + 1 - s) % 7;
    return o < 0 && (o += 7),
    o
}
function Av(e) {
    return tn(Date.now(), e)
}
function pf(e) {
    return Rv(Av(e))
}
function gf(e, t) {
    return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t)
}
function Ov(e, t) {
    return _c(e) - _c(t)
}
function _c(e) {
    return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond
}
let ca = null
  , Dv = !1;
function kr() {
    return ca == null && (ca = new Intl.DateTimeFormat().resolvedOptions().timeZone),
    ca
}
function mf() {
    return Dv
}
function Ya(e) {
    return e.subtract({
        days: e.day - 1
    })
}
function Cc(e) {
    return e.add({
        days: e.calendar.getDaysInMonth(e) - e.day
    })
}
const Sc = new Map
  , ua = new Map;
function Ev(e) {
    if (Intl.Locale) {
        let n = Sc.get(e);
        return n || (n = new Intl.Locale(e).maximize().region,
        n && Sc.set(e, n)),
        n
    }
    let t = e.split("-")[1];
    return t === "u" ? void 0 : t
}
function Pv(e) {
    let t = ua.get(e);
    if (!t) {
        if (Intl.Locale) {
            let r = new Intl.Locale(e);
            if ("getWeekInfo"in r && (t = r.getWeekInfo(),
            t))
                return ua.set(e, t),
                t.firstDay
        }
        let n = Ev(e);
        if (e.includes("-fw-")) {
            let r = e.split("-fw-")[1].split("-")[0];
            r === "mon" ? t = {
                firstDay: 1
            } : r === "tue" ? t = {
                firstDay: 2
            } : r === "wed" ? t = {
                firstDay: 3
            } : r === "thu" ? t = {
                firstDay: 4
            } : r === "fri" ? t = {
                firstDay: 5
            } : r === "sat" ? t = {
                firstDay: 6
            } : t = {
                firstDay: 0
            }
        } else
            e.includes("-ca-iso8601") ? t = {
                firstDay: 1
            } : t = {
                firstDay: n && $v[n] || 0
            };
        ua.set(e, t)
    }
    return t.firstDay
}
function yr(e) {
    e = at(e, new At);
    let t = ps(e.era, e.year);
    return yf(t, e.month, e.day, e.hour, e.minute, e.second, e.millisecond)
}
function yf(e, t, n, r, s, o, a) {
    let i = new Date;
    return i.setUTCHours(r, s, o, a),
    i.setUTCFullYear(e, t - 1, n),
    i.getTime()
}
function Ja(e, t) {
    if (t === "UTC")
        return 0;
    if (e > 0 && t === kr() && !mf())
        return new Date(e).getTimezoneOffset() * -6e4;
    let {year: n, month: r, day: s, hour: o, minute: a, second: i} = vf(e, t);
    return yf(n, r, s, o, a, i, 0) - Math.floor(e / 1e3) * 1e3
}
const $c = new Map;
function vf(e, t) {
    let n = $c.get(t);
    n || (n = new Intl.DateTimeFormat("en-US",{
        timeZone: t,
        hour12: !1,
        era: "short",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    }),
    $c.set(t, n));
    let r = n.formatToParts(new Date(e))
      , s = {};
    for (let o of r)
        o.type !== "literal" && (s[o.type] = o.value);
    return {
        year: s.era === "BC" || s.era === "B" ? -s.year + 1 : +s.year,
        month: +s.month,
        day: +s.day,
        hour: s.hour === "24" ? 0 : +s.hour,
        minute: +s.minute,
        second: +s.second
    }
}
const Ac = 864e5;
function Mv(e, t, n, r) {
    return (n === r ? [n] : [n, r]).filter(o => Tv(e, t, o))
}
function Tv(e, t, n) {
    let r = vf(n, t);
    return e.year === r.year && e.month === r.month && e.day === r.day && e.hour === r.hour && e.minute === r.minute && e.second === r.second
}
function Xt(e, t, n="compatible") {
    let r = vr(e);
    if (t === "UTC")
        return yr(r);
    if (t === kr() && n === "compatible" && !mf()) {
        r = at(r, new At);
        let l = new Date
          , u = ps(r.era, r.year);
        return l.setFullYear(u, r.month - 1, r.day),
        l.setHours(r.hour, r.minute, r.second, r.millisecond),
        l.getTime()
    }
    let s = yr(r)
      , o = Ja(s - Ac, t)
      , a = Ja(s + Ac, t)
      , i = Mv(r, t, s - o, s - a);
    if (i.length === 1)
        return i[0];
    if (i.length > 1)
        switch (n) {
        case "compatible":
        case "earlier":
            return i[0];
        case "later":
            return i[i.length - 1];
        case "reject":
            throw new RangeError("Multiple possible absolute times found")
        }
    switch (n) {
    case "earlier":
        return Math.min(s - o, s - a);
    case "compatible":
    case "later":
        return Math.max(s - o, s - a);
    case "reject":
        throw new RangeError("No such absolute time found")
    }
}
function bf(e, t, n="compatible") {
    return new Date(Xt(e, t, n))
}
function tn(e, t) {
    let n = Ja(e, t)
      , r = new Date(e + n)
      , s = r.getUTCFullYear()
      , o = r.getUTCMonth() + 1
      , a = r.getUTCDate()
      , i = r.getUTCHours()
      , l = r.getUTCMinutes()
      , u = r.getUTCSeconds()
      , c = r.getUTCMilliseconds();
    return new os(s < 1 ? "BC" : "AD",s < 1 ? -s + 1 : s,o,a,t,n,i,l,u,c)
}
function Rv(e) {
    return new Le(e.calendar,e.era,e.year,e.month,e.day)
}
function vr(e, t) {
    let n = 0
      , r = 0
      , s = 0
      , o = 0;
    if ("timeZone"in e)
        ({hour: n, minute: r, second: s, millisecond: o} = e);
    else if ("hour"in e && !t)
        return e;
    return t && ({hour: n, minute: r, second: s, millisecond: o} = t),
    new ss(e.calendar,e.era,e.year,e.month,e.day,n,r,s,o)
}
function at(e, t) {
    if (Ui(e.calendar, t))
        return e;
    let n = t.fromJulianDay(e.calendar.toJulianDay(e))
      , r = e.copy();
    return r.calendar = t,
    r.era = n.era,
    r.year = n.year,
    r.month = n.month,
    r.day = n.day,
    Wn(r),
    r
}
function Iv(e, t, n) {
    if (e instanceof os)
        return e.timeZone === t ? e : Fv(e, t);
    let r = Xt(e, t, n);
    return tn(r, t)
}
function qv(e) {
    let t = yr(e) - e.offset;
    return new Date(t)
}
function Fv(e, t) {
    let n = yr(e) - e.offset;
    return at(tn(n, t), e.calendar)
}
const Tr = 36e5;
function Lo(e, t) {
    var a, i;
    let n = e.copy()
      , r = "hour"in n ? Hv(n, t) : 0;
    Qa(n, t.years || 0),
    n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e),
    n.month += t.months || 0,
    Za(n),
    wf(n),
    n.day += (t.weeks || 0) * 7,
    n.day += t.days || 0,
    n.day += r,
    Lv(n),
    n.calendar.balanceDate && n.calendar.balanceDate(n),
    n.year < 1 && (n.year = 1,
    n.month = 1,
    n.day = 1);
    let s = n.calendar.getYearsInEra(n);
    if (n.year > s) {
        let l = (i = (a = n.calendar).isInverseEra) == null ? void 0 : i.call(a, n);
        n.year = s,
        n.month = l ? 1 : n.calendar.getMonthsInYear(n),
        n.day = l ? 1 : n.calendar.getDaysInMonth(n)
    }
    n.month < 1 && (n.month = 1,
    n.day = 1);
    let o = n.calendar.getMonthsInYear(n);
    return n.month > o && (n.month = o,
    n.day = n.calendar.getDaysInMonth(n)),
    n.day = Math.max(1, Math.min(n.calendar.getDaysInMonth(n), n.day)),
    n
}
function Qa(e, t) {
    var n, r;
    (r = (n = e.calendar).isInverseEra) != null && r.call(n, e) && (t = -t),
    e.year += t
}
function Za(e) {
    for (; e.month < 1; )
        Qa(e, -1),
        e.month += e.calendar.getMonthsInYear(e);
    let t = 0;
    for (; e.month > (t = e.calendar.getMonthsInYear(e)); )
        e.month -= t,
        Qa(e, 1)
}
function Lv(e) {
    for (; e.day < 1; )
        e.month--,
        Za(e),
        e.day += e.calendar.getDaysInMonth(e);
    for (; e.day > e.calendar.getDaysInMonth(e); )
        e.day -= e.calendar.getDaysInMonth(e),
        e.month++,
        Za(e)
}
function wf(e) {
    e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)),
    e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day))
}
function Wn(e) {
    e.calendar.constrainDate && e.calendar.constrainDate(e),
    e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)),
    wf(e)
}
function xf(e) {
    let t = {};
    for (let n in e)
        typeof e[n] == "number" && (t[n] = -e[n]);
    return t
}
function kf(e, t) {
    return Lo(e, xf(t))
}
function Gi(e, t) {
    let n = e.copy();
    return t.era != null && (n.era = t.era),
    t.year != null && (n.year = t.year),
    t.month != null && (n.month = t.month),
    t.day != null && (n.day = t.day),
    Wn(n),
    n
}
function ro(e, t) {
    let n = e.copy();
    return t.hour != null && (n.hour = t.hour),
    t.minute != null && (n.minute = t.minute),
    t.second != null && (n.second = t.second),
    t.millisecond != null && (n.millisecond = t.millisecond),
    Nv(n),
    n
}
function Bv(e) {
    e.second += Math.floor(e.millisecond / 1e3),
    e.millisecond = Cs(e.millisecond, 1e3),
    e.minute += Math.floor(e.second / 60),
    e.second = Cs(e.second, 60),
    e.hour += Math.floor(e.minute / 60),
    e.minute = Cs(e.minute, 60);
    let t = Math.floor(e.hour / 24);
    return e.hour = Cs(e.hour, 24),
    t
}
function Nv(e) {
    e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)),
    e.second = Math.max(0, Math.min(e.second, 59)),
    e.minute = Math.max(0, Math.min(e.minute, 59)),
    e.hour = Math.max(0, Math.min(e.hour, 23))
}
function Cs(e, t) {
    let n = e % t;
    return n < 0 && (n += t),
    n
}
function Hv(e, t) {
    return e.hour += t.hours || 0,
    e.minute += t.minutes || 0,
    e.second += t.seconds || 0,
    e.millisecond += t.milliseconds || 0,
    Bv(e)
}
function Ki(e, t, n, r) {
    var o, a;
    let s = e.copy();
    switch (t) {
    case "era":
        {
            let i = e.calendar.getEras()
              , l = i.indexOf(e.era);
            if (l < 0)
                throw new Error("Invalid era: " + e.era);
            l = nn(l, n, 0, i.length - 1, r == null ? void 0 : r.round),
            s.era = i[l],
            Wn(s);
            break
        }
    case "year":
        (a = (o = s.calendar).isInverseEra) != null && a.call(o, s) && (n = -n),
        s.year = nn(e.year, n, -1 / 0, 9999, r == null ? void 0 : r.round),
        s.year === -1 / 0 && (s.year = 1),
        s.calendar.balanceYearMonth && s.calendar.balanceYearMonth(s, e);
        break;
    case "month":
        s.month = nn(e.month, n, 1, e.calendar.getMonthsInYear(e), r == null ? void 0 : r.round);
        break;
    case "day":
        s.day = nn(e.day, n, 1, e.calendar.getDaysInMonth(e), r == null ? void 0 : r.round);
        break;
    default:
        throw new Error("Unsupported field " + t)
    }
    return e.calendar.balanceDate && e.calendar.balanceDate(s),
    Wn(s),
    s
}
function _f(e, t, n, r) {
    let s = e.copy();
    switch (t) {
    case "hour":
        {
            let o = e.hour
              , a = 0
              , i = 23;
            if ((r == null ? void 0 : r.hourCycle) === 12) {
                let l = o >= 12;
                a = l ? 12 : 0,
                i = l ? 23 : 11
            }
            s.hour = nn(o, n, a, i, r == null ? void 0 : r.round);
            break
        }
    case "minute":
        s.minute = nn(e.minute, n, 0, 59, r == null ? void 0 : r.round);
        break;
    case "second":
        s.second = nn(e.second, n, 0, 59, r == null ? void 0 : r.round);
        break;
    case "millisecond":
        s.millisecond = nn(e.millisecond, n, 0, 999, r == null ? void 0 : r.round);
        break;
    default:
        throw new Error("Unsupported field " + t)
    }
    return s
}
function nn(e, t, n, r, s=!1) {
    if (s) {
        e += Math.sign(t),
        e < n && (e = r);
        let o = Math.abs(t);
        t > 0 ? e = Math.ceil(e / o) * o : e = Math.floor(e / o) * o,
        e > r && (e = n)
    } else
        e += t,
        e < n ? e = r - (n - e - 1) : e > r && (e = n + (e - r - 1));
    return e
}
function Cf(e, t) {
    let n;
    if (t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0) {
        let s = Lo(vr(e), {
            years: t.years,
            months: t.months,
            weeks: t.weeks,
            days: t.days
        });
        n = Xt(s, e.timeZone)
    } else
        n = yr(e) - e.offset;
    n += t.milliseconds || 0,
    n += (t.seconds || 0) * 1e3,
    n += (t.minutes || 0) * 6e4,
    n += (t.hours || 0) * 36e5;
    let r = tn(n, e.timeZone);
    return at(r, e.calendar)
}
function jv(e, t) {
    return Cf(e, xf(t))
}
function Vv(e, t, n, r) {
    switch (t) {
    case "hour":
        {
            let s = 0
              , o = 23;
            if ((r == null ? void 0 : r.hourCycle) === 12) {
                let h = e.hour >= 12;
                s = h ? 12 : 0,
                o = h ? 23 : 11
            }
            let a = vr(e)
              , i = at(ro(a, {
                hour: s
            }), new At)
              , l = [Xt(i, e.timeZone, "earlier"), Xt(i, e.timeZone, "later")].filter(h => tn(h, e.timeZone).day === i.day)[0]
              , u = at(ro(a, {
                hour: o
            }), new At)
              , c = [Xt(u, e.timeZone, "earlier"), Xt(u, e.timeZone, "later")].filter(h => tn(h, e.timeZone).day === u.day).pop()
              , d = yr(e) - e.offset
              , f = Math.floor(d / Tr)
              , p = d % Tr;
            return d = nn(f, n, Math.floor(l / Tr), Math.floor(c / Tr), r == null ? void 0 : r.round) * Tr + p,
            at(tn(d, e.timeZone), e.calendar)
        }
    case "minute":
    case "second":
    case "millisecond":
        return _f(e, t, n, r);
    case "era":
    case "year":
    case "month":
    case "day":
        {
            let s = Ki(vr(e), t, n, r)
              , o = Xt(s, e.timeZone);
            return at(tn(o, e.timeZone), e.calendar)
        }
    default:
        throw new Error("Unsupported field " + t)
    }
}
function Wv(e, t, n) {
    let r = vr(e)
      , s = ro(Gi(r, t), t);
    if (s.compare(r) === 0)
        return e;
    let o = Xt(s, e.timeZone, n);
    return at(tn(o, e.timeZone), e.calendar)
}
function zv(e) {
    return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`
}
function Sf(e) {
    let t = at(e, new At), n;
    return t.era === "BC" ? n = t.year === 1 ? "0000" : "-" + String(Math.abs(1 - t.year)).padStart(6, "00") : n = String(t.year).padStart(4, "0"),
    `${n}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`
}
function $f(e) {
    return `${Sf(e)}T${zv(e)}`
}
function Uv(e) {
    let t = Math.sign(e) < 0 ? "-" : "+";
    e = Math.abs(e);
    let n = Math.floor(e / 36e5)
      , r = Math.floor(e % 36e5 / 6e4)
      , s = Math.floor(e % 36e5 % 6e4 / 1e3)
      , o = `${t}${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
    return s !== 0 && (o += `:${String(s).padStart(2, "0")}`),
    o
}
function Gv(e) {
    return `${$f(e)}${Uv(e.offset)}[${e.timeZone}]`
}
function Yi(e) {
    let t = typeof e[0] == "object" ? e.shift() : new At, n;
    if (typeof e[0] == "string")
        n = e.shift();
    else {
        let a = t.getEras();
        n = a[a.length - 1]
    }
    let r = e.shift()
      , s = e.shift()
      , o = e.shift();
    return [t, n, r, s, o]
}
var bi;
const go = class go {
    constructor(...t) {
        Dr(this, bi);
        let[n,r,s,o,a] = Yi(t);
        this.calendar = n,
        this.era = r,
        this.year = s,
        this.month = o,
        this.day = a,
        Wn(this)
    }
    copy() {
        return this.era ? new go(this.calendar,this.era,this.year,this.month,this.day) : new go(this.calendar,this.year,this.month,this.day)
    }
    add(t) {
        return Lo(this, t)
    }
    subtract(t) {
        return kf(this, t)
    }
    set(t) {
        return Gi(this, t)
    }
    cycle(t, n, r) {
        return Ki(this, t, n, r)
    }
    toDate(t) {
        return bf(this, t)
    }
    toString() {
        return Sf(this)
    }
    compare(t) {
        return gf(this, t)
    }
}
;
bi = new WeakMap;
let Le = go;
var wi;
const mo = class mo {
    constructor(...t) {
        Dr(this, wi);
        let[n,r,s,o,a] = Yi(t);
        this.calendar = n,
        this.era = r,
        this.year = s,
        this.month = o,
        this.day = a,
        this.hour = t.shift() || 0,
        this.minute = t.shift() || 0,
        this.second = t.shift() || 0,
        this.millisecond = t.shift() || 0,
        Wn(this)
    }
    copy() {
        return this.era ? new mo(this.calendar,this.era,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond) : new mo(this.calendar,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond)
    }
    add(t) {
        return Lo(this, t)
    }
    subtract(t) {
        return kf(this, t)
    }
    set(t) {
        return Gi(ro(this, t), t)
    }
    cycle(t, n, r) {
        switch (t) {
        case "era":
        case "year":
        case "month":
        case "day":
            return Ki(this, t, n, r);
        default:
            return _f(this, t, n, r)
        }
    }
    toDate(t, n) {
        return bf(this, t, n)
    }
    toString() {
        return $f(this)
    }
    compare(t) {
        let n = gf(this, t);
        return n === 0 ? Ov(this, vr(t)) : n
    }
}
;
wi = new WeakMap;
let ss = mo;
var xi;
const yo = class yo {
    constructor(...t) {
        Dr(this, xi);
        let[n,r,s,o,a] = Yi(t)
          , i = t.shift()
          , l = t.shift();
        this.calendar = n,
        this.era = r,
        this.year = s,
        this.month = o,
        this.day = a,
        this.timeZone = i,
        this.offset = l,
        this.hour = t.shift() || 0,
        this.minute = t.shift() || 0,
        this.second = t.shift() || 0,
        this.millisecond = t.shift() || 0,
        Wn(this)
    }
    copy() {
        return this.era ? new yo(this.calendar,this.era,this.year,this.month,this.day,this.timeZone,this.offset,this.hour,this.minute,this.second,this.millisecond) : new yo(this.calendar,this.year,this.month,this.day,this.timeZone,this.offset,this.hour,this.minute,this.second,this.millisecond)
    }
    add(t) {
        return Cf(this, t)
    }
    subtract(t) {
        return jv(this, t)
    }
    set(t, n) {
        return Wv(this, t, n)
    }
    cycle(t, n, r) {
        return Vv(this, t, n, r)
    }
    toDate() {
        return qv(this)
    }
    toString() {
        return Gv(this)
    }
    toAbsoluteString() {
        return this.toDate().toISOString()
    }
    compare(t) {
        return this.toDate().getTime() - Iv(t, this.timeZone).toDate().getTime()
    }
}
;
xi = new WeakMap;
let os = yo;
const fr = [[1868, 9, 8], [1912, 7, 30], [1926, 12, 25], [1989, 1, 8], [2019, 5, 1]]
  , Kv = [[1912, 7, 29], [1926, 12, 24], [1989, 1, 7], [2019, 4, 30]]
  , Bs = [1867, 1911, 1925, 1988, 2018]
  , vn = ["meiji", "taisho", "showa", "heisei", "reiwa"];
function Oc(e) {
    const t = fr.findIndex( ([n,r,s]) => e.year < n || e.year === n && e.month < r || e.year === n && e.month === r && e.day < s);
    return t === -1 ? fr.length - 1 : t === 0 ? 0 : t - 1
}
function da(e) {
    let t = Bs[vn.indexOf(e.era)];
    if (!t)
        throw new Error("Unknown era: " + e.era);
    return new Le(e.year + t,e.month,e.day)
}
class Yv extends At {
    fromJulianDay(t) {
        let n = super.fromJulianDay(t)
          , r = Oc(n);
        return new Le(this,vn[r],n.year - Bs[r],n.month,n.day)
    }
    toJulianDay(t) {
        return super.toJulianDay(da(t))
    }
    balanceDate(t) {
        let n = da(t)
          , r = Oc(n);
        vn[r] !== t.era && (t.era = vn[r],
        t.year = n.year - Bs[r]),
        this.constrainDate(t)
    }
    constrainDate(t) {
        let n = vn.indexOf(t.era)
          , r = Kv[n];
        if (r != null) {
            let[s,o,a] = r
              , i = s - Bs[n];
            t.year = Math.max(1, Math.min(i, t.year)),
            t.year === i && (t.month = Math.min(o, t.month),
            t.month === o && (t.day = Math.min(a, t.day)))
        }
        if (t.year === 1 && n >= 0) {
            let[,s,o] = fr[n];
            t.month = Math.max(s, t.month),
            t.month === s && (t.day = Math.max(o, t.day))
        }
    }
    getEras() {
        return vn
    }
    getYearsInEra(t) {
        let n = vn.indexOf(t.era)
          , r = fr[n]
          , s = fr[n + 1];
        if (s == null)
            return 9999 - r[0] + 1;
        let o = s[0] - r[0];
        return (t.month < s[1] || t.month === s[1] && t.day < s[2]) && o++,
        o
    }
    getDaysInMonth(t) {
        return super.getDaysInMonth(da(t))
    }
    getMinimumMonthInYear(t) {
        let n = Dc(t);
        return n ? n[1] : 1
    }
    getMinimumDayInMonth(t) {
        let n = Dc(t);
        return n && t.month === n[1] ? n[2] : 1
    }
    constructor(...t) {
        super(...t),
        this.identifier = "japanese"
    }
}
function Dc(e) {
    if (e.year === 1) {
        let t = vn.indexOf(e.era);
        return fr[t]
    }
}
const Af = -543;
class Jv extends At {
    fromJulianDay(t) {
        let n = super.fromJulianDay(t)
          , r = ps(n.era, n.year);
        return new Le(this,r - Af,n.month,n.day)
    }
    toJulianDay(t) {
        return super.toJulianDay(Ec(t))
    }
    getEras() {
        return ["BE"]
    }
    getDaysInMonth(t) {
        return super.getDaysInMonth(Ec(t))
    }
    balanceDate() {}
    constructor(...t) {
        super(...t),
        this.identifier = "buddhist"
    }
}
function Ec(e) {
    let[t,n] = Fo(e.year + Af);
    return new Le(t,n,e.month,e.day)
}
const so = 1911;
function Of(e) {
    return e.era === "minguo" ? e.year + so : 1 - e.year + so
}
function Pc(e) {
    let t = e - so;
    return t > 0 ? ["minguo", t] : ["before_minguo", 1 - t]
}
class Qv extends At {
    fromJulianDay(t) {
        let n = super.fromJulianDay(t)
          , r = ps(n.era, n.year)
          , [s,o] = Pc(r);
        return new Le(this,s,o,n.month,n.day)
    }
    toJulianDay(t) {
        return super.toJulianDay(Mc(t))
    }
    getEras() {
        return ["before_minguo", "minguo"]
    }
    balanceDate(t) {
        let[n,r] = Pc(Of(t));
        t.era = n,
        t.year = r
    }
    isInverseEra(t) {
        return t.era === "before_minguo"
    }
    getDaysInMonth(t) {
        return super.getDaysInMonth(Mc(t))
    }
    getYearsInEra(t) {
        return t.era === "before_minguo" ? 9999 : 9999 - so
    }
    constructor(...t) {
        super(...t),
        this.identifier = "roc"
    }
}
function Mc(e) {
    let[t,n] = Fo(Of(e));
    return new Le(t,n,e.month,e.day)
}
const Tc = 1948320
  , Rc = [0, 31, 62, 93, 124, 155, 186, 216, 246, 276, 306, 336];
class Zv {
    fromJulianDay(t) {
        let n = t - Tc
          , r = 1 + Math.floor((33 * n + 3) / 12053)
          , s = 365 * (r - 1) + Math.floor((8 * r + 21) / 33)
          , o = n - s
          , a = o < 216 ? Math.floor(o / 31) : Math.floor((o - 6) / 30)
          , i = o - Rc[a] + 1;
        return new Le(this,r,a + 1,i)
    }
    toJulianDay(t) {
        let n = Tc - 1 + 365 * (t.year - 1) + Math.floor((8 * t.year + 21) / 33);
        return n += Rc[t.month - 1],
        n += t.day,
        n
    }
    getMonthsInYear() {
        return 12
    }
    getDaysInMonth(t) {
        return t.month <= 6 ? 31 : t.month <= 11 || dr(25 * t.year + 11, 33) < 8 ? 30 : 29
    }
    getMaximumMonthsInYear() {
        return 12
    }
    getMaximumDaysInMonth() {
        return 31
    }
    getEras() {
        return ["AP"]
    }
    getYearsInEra() {
        return 9377
    }
    constructor() {
        this.identifier = "persian"
    }
}
const fa = 78
  , Ic = 80;
class Xv extends At {
    fromJulianDay(t) {
        let n = super.fromJulianDay(t), r = n.year - fa, s = t - In(n.era, n.year, 1, 1), o;
        s < Ic ? (r--,
        o = wn(n.year - 1) ? 31 : 30,
        s += o + 155 + 90 + 10) : (o = wn(n.year) ? 31 : 30,
        s -= Ic);
        let a, i;
        if (s < o)
            a = 1,
            i = s + 1;
        else {
            let l = s - o;
            l < 155 ? (a = Math.floor(l / 31) + 2,
            i = l % 31 + 1) : (l -= 155,
            a = Math.floor(l / 30) + 7,
            i = l % 30 + 1)
        }
        return new Le(this,r,a,i)
    }
    toJulianDay(t) {
        let n = t.year + fa, [r,s] = Fo(n), o, a;
        return wn(s) ? (o = 31,
        a = In(r, s, 3, 21)) : (o = 30,
        a = In(r, s, 3, 22)),
        t.month === 1 ? a + t.day - 1 : (a += o + Math.min(t.month - 2, 5) * 31,
        t.month >= 8 && (a += (t.month - 7) * 30),
        a += t.day - 1,
        a)
    }
    getDaysInMonth(t) {
        return t.month === 1 && wn(t.year + fa) || t.month >= 2 && t.month <= 6 ? 31 : 30
    }
    getYearsInEra() {
        return 9919
    }
    getEras() {
        return ["saka"]
    }
    balanceDate() {}
    constructor(...t) {
        super(...t),
        this.identifier = "indian"
    }
}
const oo = 1948440
  , qc = 1948439
  , wt = 1300
  , er = 1600
  , e0 = 460322;
function ao(e, t, n, r) {
    return r + Math.ceil(29.5 * (n - 1)) + (t - 1) * 354 + Math.floor((3 + 11 * t) / 30) + e - 1
}
function Df(e, t, n) {
    let r = Math.floor((30 * (n - t) + 10646) / 10631)
      , s = Math.min(12, Math.ceil((n - (29 + ao(t, r, 1, 1))) / 29.5) + 1)
      , o = n - ao(t, r, s, 1) + 1;
    return new Le(e,r,s,o)
}
function Fc(e) {
    return (14 + 11 * e) % 30 < 11
}
class Ji {
    fromJulianDay(t) {
        return Df(this, oo, t)
    }
    toJulianDay(t) {
        return ao(oo, t.year, t.month, t.day)
    }
    getDaysInMonth(t) {
        let n = 29 + t.month % 2;
        return t.month === 12 && Fc(t.year) && n++,
        n
    }
    getMonthsInYear() {
        return 12
    }
    getDaysInYear(t) {
        return Fc(t.year) ? 355 : 354
    }
    getMaximumMonthsInYear() {
        return 12
    }
    getMaximumDaysInMonth() {
        return 30
    }
    getYearsInEra() {
        return 9665
    }
    getEras() {
        return ["AH"]
    }
    constructor() {
        this.identifier = "islamic-civil"
    }
}
class t0 extends Ji {
    fromJulianDay(t) {
        return Df(this, qc, t)
    }
    toJulianDay(t) {
        return ao(qc, t.year, t.month, t.day)
    }
    constructor(...t) {
        super(...t),
        this.identifier = "islamic-tbla"
    }
}
const n0 = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";
let Xa, hr;
function Ns(e) {
    return e0 + hr[e - wt]
}
function Nr(e, t) {
    let n = e - wt
      , r = 1 << 11 - (t - 1);
    return (Xa[n] & r) === 0 ? 29 : 30
}
function Lc(e, t) {
    let n = Ns(e);
    for (let r = 1; r < t; r++)
        n += Nr(e, r);
    return n
}
function Bc(e) {
    return hr[e + 1 - wt] - hr[e - wt]
}
class r0 extends Ji {
    constructor() {
        if (super(),
        this.identifier = "islamic-umalqura",
        Xa || (Xa = new Uint16Array(Uint8Array.from(atob(n0), t => t.charCodeAt(0)).buffer)),
        !hr) {
            hr = new Uint32Array(er - wt + 1);
            let t = 0;
            for (let n = wt; n <= er; n++) {
                hr[n - wt] = t;
                for (let r = 1; r <= 12; r++)
                    t += Nr(n, r)
            }
        }
    }
    fromJulianDay(t) {
        let n = t - oo
          , r = Ns(wt)
          , s = Ns(er);
        if (n < r || n > s)
            return super.fromJulianDay(t);
        {
            let o = wt - 1
              , a = 1
              , i = 1;
            for (; i > 0; ) {
                o++,
                i = n - Ns(o) + 1;
                let l = Bc(o);
                if (i === l) {
                    a = 12;
                    break
                } else if (i < l) {
                    let u = Nr(o, a);
                    for (a = 1; i > u; )
                        i -= u,
                        a++,
                        u = Nr(o, a);
                    break
                }
            }
            return new Le(this,o,a,n - Lc(o, a) + 1)
        }
    }
    toJulianDay(t) {
        return t.year < wt || t.year > er ? super.toJulianDay(t) : oo + Lc(t.year, t.month) + (t.day - 1)
    }
    getDaysInMonth(t) {
        return t.year < wt || t.year > er ? super.getDaysInMonth(t) : Nr(t.year, t.month)
    }
    getDaysInYear(t) {
        return t.year < wt || t.year > er ? super.getDaysInYear(t) : Bc(t.year)
    }
}
const Nc = 347997
  , Ef = 1080
  , Pf = 24 * Ef
  , s0 = 29
  , o0 = 12 * Ef + 793
  , a0 = s0 * Pf + o0;
function Rn(e) {
    return dr(e * 7 + 1, 19) < 7
}
function Hs(e) {
    let t = Math.floor((235 * e - 234) / 19)
      , n = 12084 + 13753 * t
      , r = t * 29 + Math.floor(n / 25920);
    return dr(3 * (r + 1), 7) < 3 && (r += 1),
    r
}
function i0(e) {
    let t = Hs(e - 1)
      , n = Hs(e);
    return Hs(e + 1) - n === 356 ? 2 : n - t === 382 ? 1 : 0
}
function Yr(e) {
    return Hs(e) + i0(e)
}
function Mf(e) {
    return Yr(e + 1) - Yr(e)
}
function l0(e) {
    let t = Mf(e);
    switch (t > 380 && (t -= 30),
    t) {
    case 353:
        return 0;
    case 354:
        return 1;
    case 355:
        return 2
    }
}
function Ss(e, t) {
    if (t >= 6 && !Rn(e) && t++,
    t === 4 || t === 7 || t === 9 || t === 11 || t === 13)
        return 29;
    let n = l0(e);
    return t === 2 ? n === 2 ? 30 : 29 : t === 3 ? n === 0 ? 29 : 30 : t === 6 ? Rn(e) ? 30 : 0 : 30
}
class c0 {
    fromJulianDay(t) {
        let n = t - Nc
          , r = n * Pf / a0
          , s = Math.floor((19 * r + 234) / 235) + 1
          , o = Yr(s)
          , a = Math.floor(n - o);
        for (; a < 1; )
            s--,
            o = Yr(s),
            a = Math.floor(n - o);
        let i = 1
          , l = 0;
        for (; l < a; )
            l += Ss(s, i),
            i++;
        i--,
        l -= Ss(s, i);
        let u = a - l;
        return new Le(this,s,i,u)
    }
    toJulianDay(t) {
        let n = Yr(t.year);
        for (let r = 1; r < t.month; r++)
            n += Ss(t.year, r);
        return n + t.day + Nc
    }
    getDaysInMonth(t) {
        return Ss(t.year, t.month)
    }
    getMonthsInYear(t) {
        return Rn(t.year) ? 13 : 12
    }
    getDaysInYear(t) {
        return Mf(t.year)
    }
    getMaximumMonthsInYear() {
        return 13
    }
    getMaximumDaysInMonth() {
        return 30
    }
    getYearsInEra() {
        return 9999
    }
    getEras() {
        return ["AM"]
    }
    balanceYearMonth(t, n) {
        n.year !== t.year && (Rn(n.year) && !Rn(t.year) && n.month > 6 ? t.month-- : !Rn(n.year) && Rn(t.year) && n.month > 6 && t.month++)
    }
    constructor() {
        this.identifier = "hebrew"
    }
}
const ei = 1723856
  , Hc = 1824665
  , ti = 5500;
function io(e, t, n, r) {
    return e + 365 * t + Math.floor(t / 4) + 30 * (n - 1) + r - 1
}
function Qi(e, t) {
    let n = Math.floor(4 * (t - e) / 1461)
      , r = 1 + Math.floor((t - io(e, n, 1, 1)) / 30)
      , s = t + 1 - io(e, n, r, 1);
    return [n, r, s]
}
function Tf(e) {
    return Math.floor(e % 4 / 3)
}
function Rf(e, t) {
    return t % 13 !== 0 ? 30 : Tf(e) + 5
}
class Zi {
    fromJulianDay(t) {
        let[n,r,s] = Qi(ei, t)
          , o = "AM";
        return n <= 0 && (o = "AA",
        n += ti),
        new Le(this,o,n,r,s)
    }
    toJulianDay(t) {
        let n = t.year;
        return t.era === "AA" && (n -= ti),
        io(ei, n, t.month, t.day)
    }
    getDaysInMonth(t) {
        return Rf(t.year, t.month)
    }
    getMonthsInYear() {
        return 13
    }
    getDaysInYear(t) {
        return 365 + Tf(t.year)
    }
    getMaximumMonthsInYear() {
        return 13
    }
    getMaximumDaysInMonth() {
        return 30
    }
    getYearsInEra(t) {
        return t.era === "AA" ? 9999 : 9991
    }
    getEras() {
        return ["AA", "AM"]
    }
    constructor() {
        this.identifier = "ethiopic"
    }
}
class u0 extends Zi {
    fromJulianDay(t) {
        let[n,r,s] = Qi(ei, t);
        return n += ti,
        new Le(this,"AA",n,r,s)
    }
    getEras() {
        return ["AA"]
    }
    getYearsInEra() {
        return 9999
    }
    constructor(...t) {
        super(...t),
        this.identifier = "ethioaa"
    }
}
class d0 extends Zi {
    fromJulianDay(t) {
        let[n,r,s] = Qi(Hc, t)
          , o = "CE";
        return n <= 0 && (o = "BCE",
        n = 1 - n),
        new Le(this,o,n,r,s)
    }
    toJulianDay(t) {
        let n = t.year;
        return t.era === "BCE" && (n = 1 - n),
        io(Hc, n, t.month, t.day)
    }
    getDaysInMonth(t) {
        let n = t.year;
        return t.era === "BCE" && (n = 1 - n),
        Rf(n, t.month)
    }
    isInverseEra(t) {
        return t.era === "BCE"
    }
    balanceDate(t) {
        t.year <= 0 && (t.era = t.era === "BCE" ? "CE" : "BCE",
        t.year = 1 - t.year)
    }
    getEras() {
        return ["BCE", "CE"]
    }
    getYearsInEra(t) {
        return t.era === "BCE" ? 9999 : 9715
    }
    constructor(...t) {
        super(...t),
        this.identifier = "coptic"
    }
}
function f0(e) {
    switch (e) {
    case "buddhist":
        return new Jv;
    case "ethiopic":
        return new Zi;
    case "ethioaa":
        return new u0;
    case "coptic":
        return new d0;
    case "hebrew":
        return new c0;
    case "indian":
        return new Xv;
    case "islamic-civil":
        return new Ji;
    case "islamic-tbla":
        return new t0;
    case "islamic-umalqura":
        return new r0;
    case "japanese":
        return new Yv;
    case "persian":
        return new Zv;
    case "roc":
        return new Qv;
    case "gregory":
    default:
        return new At
    }
}
let ha = new Map;
class Gt {
    constructor(t, n={}) {
        this.formatter = If(t, n),
        this.options = n
    }
    format(t) {
        return this.formatter.format(t)
    }
    formatToParts(t) {
        return this.formatter.formatToParts(t)
    }
    formatRange(t, n) {
        if (typeof this.formatter.formatRange == "function")
            return this.formatter.formatRange(t, n);
        if (n < t)
            throw new RangeError("End date must be >= start date");
        return `${this.formatter.format(t)} – ${this.formatter.format(n)}`
    }
    formatRangeToParts(t, n) {
        if (typeof this.formatter.formatRangeToParts == "function")
            return this.formatter.formatRangeToParts(t, n);
        if (n < t)
            throw new RangeError("End date must be >= start date");
        let r = this.formatter.formatToParts(t)
          , s = this.formatter.formatToParts(n);
        return [...r.map(o => ({
            ...o,
            source: "startRange"
        })), {
            type: "literal",
            value: " – ",
            source: "shared"
        }, ...s.map(o => ({
            ...o,
            source: "endRange"
        }))]
    }
    resolvedOptions() {
        let t = this.formatter.resolvedOptions();
        return g0() && (this.resolvedHourCycle || (this.resolvedHourCycle = m0(t.locale, this.options)),
        t.hourCycle = this.resolvedHourCycle,
        t.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"),
        t.calendar === "ethiopic-amete-alem" && (t.calendar = "ethioaa"),
        t
    }
}
const h0 = {
    true: {
        ja: "h11"
    },
    false: {}
};
function If(e, t={}) {
    if (typeof t.hour12 == "boolean" && p0()) {
        t = {
            ...t
        };
        let s = h0[String(t.hour12)][e.split("-")[0]]
          , o = t.hour12 ? "h12" : "h23";
        t.hourCycle = s ?? o,
        delete t.hour12
    }
    let n = e + (t ? Object.entries(t).sort( (s, o) => s[0] < o[0] ? -1 : 1).join() : "");
    if (ha.has(n))
        return ha.get(n);
    let r = new Intl.DateTimeFormat(e,t);
    return ha.set(n, r),
    r
}
let pa = null;
function p0() {
    return pa == null && (pa = new Intl.DateTimeFormat("en-US",{
        hour: "numeric",
        hour12: !1
    }).format(new Date(2020,2,3,0)) === "24"),
    pa
}
let ga = null;
function g0() {
    return ga == null && (ga = new Intl.DateTimeFormat("fr",{
        hour: "numeric",
        hour12: !1
    }).resolvedOptions().hourCycle === "h12"),
    ga
}
function m0(e, t) {
    if (!t.timeStyle && !t.hour)
        return;
    e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""),
    e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
    let n = If(e, {
        ...t,
        timeZone: void 0
    })
      , r = parseInt(n.formatToParts(new Date(2020,2,3,0)).find(o => o.type === "hour").value, 10)
      , s = parseInt(n.formatToParts(new Date(2020,2,3,23)).find(o => o.type === "hour").value, 10);
    if (r === 0 && s === 23)
        return "h23";
    if (r === 24 && s === 23)
        return "h24";
    if (r === 0 && s === 11)
        return "h11";
    if (r === 12 && s === 11)
        return "h12";
    throw new Error("Unexpected hour cycle result")
}
function kt(e, t=kr()) {
    return Xi(e) ? e.toDate() : e.toDate(t)
}
function y0(e) {
    return e instanceof ss
}
function Xi(e) {
    return e instanceof os
}
function v0(e) {
    return y0(e) || Xi(e)
}
function as(e) {
    if (e instanceof Date) {
        const t = e.getFullYear()
          , n = e.getMonth() + 1;
        return new Date(t,n,0).getDate()
    } else
        return e.set({
            day: 100
        }).day
}
function Hn(e, t) {
    return e.compare(t) < 0
}
function js(e, t) {
    return e.compare(t) > 0
}
function b0(e, t) {
    return e.compare(t) <= 0
}
function w0(e, t) {
    return e.compare(t) >= 0
}
function x0(e, t, n) {
    return w0(e, t) && b0(e, n)
}
function ma(e, t, n) {
    return js(e, t) && Hn(e, n)
}
function k0(e, t, n) {
    const r = hf(e, n);
    return t > r ? e.subtract({
        days: r + 7 - t
    }) : t === r ? e : e.subtract({
        days: r - t
    })
}
function _0(e, t, n) {
    const r = hf(e, n)
      , s = t === 0 ? 6 : t - 1;
    return r === s ? e : r > s ? e.add({
        days: 7 - r + s
    }) : e.add({
        days: s - r
    })
}
function C0(e, t, n, r, s) {
    if (n === void 0 && r === void 0 && s === void 0)
        return !0;
    let o = e.add({
        days: 1
    });
    if ((r != null && r(o) || n != null && n(o)) && !(s != null && s(o)))
        return !1;
    const a = t;
    for (; o.compare(a) < 0; )
        if (o = o.add({
            days: 1
        }),
        (r != null && r(o) || n != null && n(o)) && !(s != null && s(o)))
            return !1;
    return !0
}
function qf(e) {
    const {defaultValue: t, defaultPlaceholder: n, granularity: r="day", locale: s="en"} = e;
    if (Array.isArray(t) && t.length)
        return t.at(-1).copy();
    if (t && !Array.isArray(t))
        return t.copy();
    if (n)
        return n.copy();
    const o = new Date
      , a = o.getFullYear()
      , i = o.getMonth() + 1
      , l = o.getDate()
      , u = ["hour", "minute", "second"]
      , c = new Gt(s)
      , d = f0(c.resolvedOptions().calendar);
    return u.includes(r ?? "day") ? at(new ss(a,i,l,0,0,0), d) : at(new Le(a,i,l), d)
}
function S0(e, t) {
    const n = [];
    for (let r = 0; r < e.length; r += t)
        n.push(e.slice(r, r + t));
    return n
}
function Ff(e) {
    const t = e.querySelector("[data-selected]");
    if (t)
        return t.focus();
    const n = e.querySelector("[data-today]");
    if (n)
        return n.focus();
    const r = e.querySelector("[data-reka-calendar-day]");
    if (r)
        return r.focus()
}
function ni(e, t) {
    const n = [];
    let r = e.add({
        days: 1
    });
    const s = t;
    for (; r.compare(s) < 0; )
        n.push(r),
        r = r.add({
            days: 1
        });
    return n
}
function ya(e) {
    const {dateObj: t, weekStartsOn: n, fixedWeeks: r, locale: s} = e
      , o = as(t)
      , a = Array.from({
        length: o
    }, (m, b) => t.set({
        day: b + 1
    }))
      , i = Ya(t)
      , l = Cc(t)
      , u = k0(i, n, s)
      , c = _0(l, n, s)
      , d = ni(u.subtract({
        days: 1
    }), i)
      , f = ni(l, c.add({
        days: 1
    }))
      , p = d.length + a.length + f.length;
    if (r && p < 42) {
        const m = 42 - p;
        let b = f[f.length - 1];
        b || (b = Cc(t));
        const y = Array.from({
            length: m
        }, (v, k) => {
            const _ = k + 1;
            return b.add({
                days: _
            })
        }
        );
        f.push(...y)
    }
    const h = d.concat(a, f)
      , g = S0(h, 7);
    return {
        value: t,
        cells: h,
        rows: g
    }
}
function Dn(e) {
    const {numberOfMonths: t, dateObj: n, ...r} = e
      , s = [];
    if (!t || t === 1)
        return s.push(ya({
            ...r,
            dateObj: n
        })),
        s;
    s.push(ya({
        ...r,
        dateObj: n
    }));
    for (let o = 1; o < t; o++) {
        const a = n.add({
            months: o
        });
        s.push(ya({
            ...r,
            dateObj: a
        }))
    }
    return s
}
function $0(e, t={}) {
    const n = Q(e);
    function r() {
        return n.value
    }
    function s(m) {
        n.value = m
    }
    function o(m, b) {
        return new Gt(n.value,{
            ...t,
            ...b
        }).format(m)
    }
    function a(m, b=!0) {
        return v0(m) && b ? o(kt(m), {
            dateStyle: "long",
            timeStyle: "long"
        }) : o(kt(m), {
            dateStyle: "long"
        })
    }
    function i(m, b={}) {
        return new Gt(n.value,{
            ...t,
            month: "long",
            year: "numeric",
            ...b
        }).format(m)
    }
    function l(m, b={}) {
        return new Gt(n.value,{
            ...t,
            month: "long",
            ...b
        }).format(m)
    }
    function u() {
        const m = pf(kr());
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(y => ({
            label: l(kt(m.set({
                month: y
            }))),
            value: y
        }))
    }
    function c(m, b={}) {
        return new Gt(n.value,{
            ...t,
            year: "numeric",
            ...b
        }).format(m)
    }
    function d(m, b) {
        return Xi(m) ? new Gt(n.value,{
            ...t,
            ...b,
            timeZone: m.timeZone
        }).formatToParts(kt(m)) : new Gt(n.value,{
            ...t,
            ...b
        }).formatToParts(kt(m))
    }
    function f(m, b="narrow") {
        return new Gt(n.value,{
            ...t,
            weekday: b
        }).format(m)
    }
    function p(m) {
        var v;
        const y = (v = new Gt(n.value,{
            ...t,
            hour: "numeric",
            minute: "numeric"
        }).formatToParts(m).find(k => k.type === "dayPeriod")) == null ? void 0 : v.value;
        return y === "PM" || y === "p.m." ? "PM" : "AM"
    }
    const h = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    };
    function g(m, b, y={}) {
        const v = {
            ...h,
            ...y
        }
          , _ = d(m, v).find($ => $.type === b);
        return _ ? _.value : ""
    }
    return {
        setLocale: s,
        getLocale: r,
        fullMonth: l,
        fullYear: c,
        fullMonthAndYear: i,
        toParts: d,
        custom: o,
        part: g,
        dayPeriod: p,
        selectedDate: a,
        dayOfWeek: f,
        getMonths: u
    }
}
function Lf(e) {
    const t = ji({
        dir: Q("ltr")
    });
    return O( () => {
        var n;
        return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr"
    }
    )
}
function A0(e) {
    const t = tt()
      , n = t == null ? void 0 : t.type.emits
      , r = {};
    return n != null && n.length || console.warn(`No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`),
    n == null || n.forEach(s => {
        r[Vr(We(s))] = (...o) => e(s, ...o)
    }
    ),
    r
}
let va = 0;
function O0() {
    ct(e => {
        if (!Sn)
            return;
        const t = document.querySelectorAll("[data-reka-focus-guard]");
        document.body.insertAdjacentElement("afterbegin", t[0] ?? jc()),
        document.body.insertAdjacentElement("beforeend", t[1] ?? jc()),
        va++,
        e( () => {
            va === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach(n => n.remove()),
            va--
        }
        )
    }
    )
}
function jc() {
    const e = document.createElement("span");
    return e.setAttribute("data-reka-focus-guard", ""),
    e.tabIndex = 0,
    e.style.outline = "none",
    e.style.opacity = "0",
    e.style.position = "fixed",
    e.style.pointerEvents = "none",
    e
}
function Ue() {
    const e = tt()
      , t = Q()
      , n = O( () => {
        var a, i;
        return ["#text", "#comment"].includes((a = t.value) == null ? void 0 : a.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : xr(t)
    }
    )
      , r = Object.assign({}, e.exposed)
      , s = {};
    for (const a in e.props)
        Object.defineProperty(s, a, {
            enumerable: !0,
            configurable: !0,
            get: () => e.props[a]
        });
    if (Object.keys(r).length > 0)
        for (const a in r)
            Object.defineProperty(s, a, {
                enumerable: !0,
                configurable: !0,
                get: () => r[a]
            });
    Object.defineProperty(s, "$el", {
        enumerable: !0,
        configurable: !0,
        get: () => e.vnode.el
    }),
    e.exposed = s;
    function o(a) {
        t.value = a,
        a && (Object.defineProperty(s, "$el", {
            enumerable: !0,
            configurable: !0,
            get: () => a instanceof Element ? a : a.$el
        }),
        e.exposed = s)
    }
    return {
        forwardRef: o,
        currentRef: t,
        currentElement: n
    }
}
function gs(e) {
    const t = tt()
      , n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce( (s, o) => {
        const a = (t == null ? void 0 : t.type.props[o]).default;
        return a !== void 0 && (s[o] = a),
        s
    }
    , {})
      , r = Ln(e);
    return O( () => {
        const s = {}
          , o = (t == null ? void 0 : t.vnode.props) ?? {};
        return Object.keys(o).forEach(a => {
            s[We(a)] = o[a]
        }
        ),
        Object.keys({
            ...n,
            ...s
        }).reduce( (a, i) => (r.value[i] !== void 0 && (a[i] = r.value[i]),
        a), {})
    }
    )
}
function _r(e, t) {
    const n = gs(e)
      , r = t ? A0(t) : {};
    return O( () => ({
        ...n.value,
        ...r
    }))
}
function D0(e, t) {
    const n = hv(!1, 300)
      , r = Q(null)
      , s = Zy();
    function o() {
        r.value = null,
        n.value = !1
    }
    function a(i, l) {
        const u = i.currentTarget
          , c = {
            x: i.clientX,
            y: i.clientY
        }
          , d = E0(c, u.getBoundingClientRect())
          , f = P0(c, d)
          , p = M0(l.getBoundingClientRect())
          , h = R0([...f, ...p]);
        r.value = h,
        n.value = !0
    }
    return ct(i => {
        if (e.value && t.value) {
            const l = c => a(c, t.value)
              , u = c => a(c, e.value);
            e.value.addEventListener("pointerleave", l),
            t.value.addEventListener("pointerleave", u),
            i( () => {
                var c, d;
                (c = e.value) == null || c.removeEventListener("pointerleave", l),
                (d = t.value) == null || d.removeEventListener("pointerleave", u)
            }
            )
        }
    }
    ),
    ct(i => {
        var l;
        if (r.value) {
            const u = c => {
                var m, b;
                if (!r.value || !(c.target instanceof Element))
                    return;
                const d = c.target
                  , f = {
                    x: c.clientX,
                    y: c.clientY
                }
                  , p = ((m = e.value) == null ? void 0 : m.contains(d)) || ((b = t.value) == null ? void 0 : b.contains(d))
                  , h = !T0(f, r.value)
                  , g = !!d.closest("[data-grace-area-trigger]");
                p ? o() : (h || g) && (o(),
                s.trigger())
            }
            ;
            (l = e.value) == null || l.ownerDocument.addEventListener("pointermove", u),
            i( () => {
                var c;
                return (c = e.value) == null ? void 0 : c.ownerDocument.removeEventListener("pointermove", u)
            }
            )
        }
    }
    ),
    {
        isPointerInTransit: n,
        onPointerExit: s.on
    }
}
function E0(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , s = Math.abs(t.right - e.x)
      , o = Math.abs(t.left - e.x);
    switch (Math.min(n, r, s, o)) {
    case o:
        return "left";
    case s:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function P0(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function M0(e) {
    const {top: t, right: n, bottom: r, left: s} = e;
    return [{
        x: s,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: s,
        y: r
    }]
}
function T0(e, t) {
    const {x: n, y: r} = e;
    let s = !1;
    for (let o = 0, a = t.length - 1; o < t.length; a = o++) {
        const i = t[o].x
          , l = t[o].y
          , u = t[a].x
          , c = t[a].y;
        l > r != c > r && n < (u - i) * (r - l) / (c - l) + i && (s = !s)
    }
    return s
}
function R0(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    I0(t)
}
function I0(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const s = e[r];
        for (; t.length >= 2; ) {
            const o = t[t.length - 1]
              , a = t[t.length - 2];
            if ((o.x - a.x) * (s.y - a.y) >= (o.y - a.y) * (s.x - a.x))
                t.pop();
            else
                break
        }
        t.push(s)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const s = e[r];
        for (; n.length >= 2; ) {
            const o = n[n.length - 1]
              , a = n[n.length - 2];
            if ((o.x - a.x) * (s.y - a.y) >= (o.y - a.y) * (s.x - a.x))
                n.pop();
            else
                break
        }
        n.push(s)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var q0 = function(e) {
    if (typeof document > "u")
        return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body
}
  , tr = new WeakMap
  , $s = new WeakMap
  , As = {}
  , ba = 0
  , Bf = function(e) {
    return e && (e.host || Bf(e.parentNode))
}
  , F0 = function(e, t) {
    return t.map(function(n) {
        if (e.contains(n))
            return n;
        var r = Bf(n);
        return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"),
        null)
    }).filter(function(n) {
        return !!n
    })
}
  , L0 = function(e, t, n, r) {
    var s = F0(t, Array.isArray(e) ? e : [e]);
    As[n] || (As[n] = new WeakMap);
    var o = As[n]
      , a = []
      , i = new Set
      , l = new Set(s)
      , u = function(d) {
        !d || i.has(d) || (i.add(d),
        u(d.parentNode))
    };
    s.forEach(u);
    var c = function(d) {
        !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
            if (i.has(f))
                c(f);
            else
                try {
                    var p = f.getAttribute(r)
                      , h = p !== null && p !== "false"
                      , g = (tr.get(f) || 0) + 1
                      , m = (o.get(f) || 0) + 1;
                    tr.set(f, g),
                    o.set(f, m),
                    a.push(f),
                    g === 1 && h && $s.set(f, !0),
                    m === 1 && f.setAttribute(n, "true"),
                    h || f.setAttribute(r, "true")
                } catch (b) {
                    console.error("aria-hidden: cannot operate on ", f, b)
                }
        })
    };
    return c(t),
    i.clear(),
    ba++,
    function() {
        a.forEach(function(d) {
            var f = tr.get(d) - 1
              , p = o.get(d) - 1;
            tr.set(d, f),
            o.set(d, p),
            f || ($s.has(d) || d.removeAttribute(r),
            $s.delete(d)),
            p || d.removeAttribute(n)
        }),
        ba--,
        ba || (tr = new WeakMap,
        tr = new WeakMap,
        $s = new WeakMap,
        As = {})
    }
}
  , B0 = function(e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e])
      , s = q0(e);
    return s ? (r.push.apply(r, Array.from(s.querySelectorAll("[aria-live], script"))),
    L0(r, s, n, "aria-hidden")) : function() {
        return null
    }
};
function N0(e) {
    let t;
    Oe( () => xr(e), n => {
        n ? t = B0(n) : t && t()
    }
    ),
    Un( () => {
        t && t()
    }
    )
}
function Nf(e, t="reka") {
    return `${t}-${Qo == null ? void 0 : Qo()}`
}
function el() {
    return {
        ALT: "Alt",
        ARROW_DOWN: "ArrowDown",
        ARROW_LEFT: "ArrowLeft",
        ARROW_RIGHT: "ArrowRight",
        ARROW_UP: "ArrowUp",
        BACKSPACE: "Backspace",
        CAPS_LOCK: "CapsLock",
        CONTROL: "Control",
        DELETE: "Delete",
        END: "End",
        ENTER: "Enter",
        ESCAPE: "Escape",
        F1: "F1",
        F10: "F10",
        F11: "F11",
        F12: "F12",
        F2: "F2",
        F3: "F3",
        F4: "F4",
        F5: "F5",
        F6: "F6",
        F7: "F7",
        F8: "F8",
        F9: "F9",
        HOME: "Home",
        META: "Meta",
        PAGE_DOWN: "PageDown",
        PAGE_UP: "PageUp",
        SHIFT: "Shift",
        SPACE: " ",
        TAB: "Tab",
        CTRL: "Control",
        ASTERISK: "*",
        SPACE_CODE: "Space"
    }
}
function Hf(e) {
    const t = ji({
        locale: Q("en")
    });
    return O( () => {
        var n;
        return (e == null ? void 0 : e.value) || ((n = t.locale) == null ? void 0 : n.value) || "en"
    }
    )
}
function H0(e) {
    const t = Q()
      , n = O( () => {
        var s;
        return ((s = t.value) == null ? void 0 : s.width) ?? 0
    }
    )
      , r = O( () => {
        var s;
        return ((s = t.value) == null ? void 0 : s.height) ?? 0
    }
    );
    return jt( () => {
        const s = xr(e);
        if (s) {
            t.value = {
                width: s.offsetWidth,
                height: s.offsetHeight
            };
            const o = new ResizeObserver(a => {
                if (!Array.isArray(a) || !a.length)
                    return;
                const i = a[0];
                let l, u;
                if ("borderBoxSize"in i) {
                    const c = i.borderBoxSize
                      , d = Array.isArray(c) ? c[0] : c;
                    l = d.inlineSize,
                    u = d.blockSize
                } else
                    l = s.offsetWidth,
                    u = s.offsetHeight;
                t.value = {
                    width: l,
                    height: u
                }
            }
            );
            return o.observe(s, {
                box: "border-box"
            }),
            () => o.unobserve(s)
        } else
            t.value = void 0
    }
    ),
    {
        width: n,
        height: r
    }
}
function j0(e, t) {
    const n = Q(e);
    function r(o) {
        return t[n.value][o] ?? n.value
    }
    return {
        state: n,
        dispatch: o => {
            n.value = r(o)
        }
    }
}
function V0(e, t) {
    var m;
    const n = Q({})
      , r = Q("none")
      , s = Q(e)
      , o = e.value ? "mounted" : "unmounted";
    let a;
    const i = ((m = t.value) == null ? void 0 : m.ownerDocument.defaultView) ?? Vi
      , {state: l, dispatch: u} = j0(o, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    })
      , c = b => {
        var y;
        if (Sn) {
            const v = new CustomEvent(b,{
                bubbles: !1,
                cancelable: !1
            });
            (y = t.value) == null || y.dispatchEvent(v)
        }
    }
    ;
    Oe(e, async (b, y) => {
        var k;
        const v = y !== b;
        if (await lt(),
        v) {
            const _ = r.value
              , $ = Os(t.value);
            b ? (u("MOUNT"),
            c("enter"),
            $ === "none" && c("after-enter")) : $ === "none" || $ === "undefined" || ((k = n.value) == null ? void 0 : k.display) === "none" ? (u("UNMOUNT"),
            c("leave"),
            c("after-leave")) : y && _ !== $ ? (u("ANIMATION_OUT"),
            c("leave")) : (u("UNMOUNT"),
            c("after-leave"))
        }
    }
    , {
        immediate: !0
    });
    const d = b => {
        const y = Os(t.value)
          , v = y.includes(CSS.escape(b.animationName))
          , k = l.value === "mounted" ? "enter" : "leave";
        if (b.target === t.value && v && (c(`after-${k}`),
        u("ANIMATION_END"),
        !s.value)) {
            const _ = t.value.style.animationFillMode;
            t.value.style.animationFillMode = "forwards",
            a = i == null ? void 0 : i.setTimeout( () => {
                var $;
                (($ = t.value) == null ? void 0 : $.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = _)
            }
            )
        }
        b.target === t.value && y === "none" && u("ANIMATION_END")
    }
      , f = b => {
        b.target === t.value && (r.value = Os(t.value))
    }
      , p = Oe(t, (b, y) => {
        b ? (n.value = getComputedStyle(b),
        b.addEventListener("animationstart", f),
        b.addEventListener("animationcancel", d),
        b.addEventListener("animationend", d)) : (u("ANIMATION_END"),
        a !== void 0 && (i == null || i.clearTimeout(a)),
        y == null || y.removeEventListener("animationstart", f),
        y == null || y.removeEventListener("animationcancel", d),
        y == null || y.removeEventListener("animationend", d))
    }
    , {
        immediate: !0
    })
      , h = Oe(l, () => {
        const b = Os(t.value);
        r.value = l.value === "mounted" ? b : "none"
    }
    );
    return Un( () => {
        p(),
        h()
    }
    ),
    {
        isPresent: O( () => ["mounted", "unmountSuspended"].includes(l.value))
    }
}
function Os(e) {
    return e && getComputedStyle(e).animationName || "none"
}
var jf = se({
    name: "Presence",
    props: {
        present: {
            type: Boolean,
            required: !0
        },
        forceMount: {
            type: Boolean
        }
    },
    slots: {},
    setup(e, {slots: t, expose: n}) {
        var u;
        const {present: r, forceMount: s} = Bt(e)
          , o = Q()
          , {isPresent: a} = V0(r, o);
        n({
            present: a
        });
        let i = t.default({
            present: a.value
        });
        i = Hi(i || []);
        const l = tt();
        if (i && (i == null ? void 0 : i.length) > 1) {
            const c = (u = l == null ? void 0 : l.parent) != null && u.type.name ? `<${l.parent.type.name} />` : "component";
            throw new Error([`Detected an invalid children for \`${c}\` for  \`Presence\` component.`, "", "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.", "You can apply a few solutions:", ["Provide a single child element so that `presence` directive attach correctly.", "Ensure the first child is an actual element instead of a raw text node or comment node."].map(d => `  - ${d}`).join(`
`)].join(`
`))
        }
        return () => s.value || r.value || a.value ? Nn(t.default({
            present: a.value
        })[0], {
            ref: c => {
                const d = xr(c);
                return typeof (d == null ? void 0 : d.hasAttribute) > "u" || (d != null && d.hasAttribute("data-reka-popper-content-wrapper") ? o.value = d.firstElementChild : o.value = d),
                d
            }
        }) : null
    }
});
const tl = se({
    name: "PrimitiveSlot",
    inheritAttrs: !1,
    setup(e, {attrs: t, slots: n}) {
        return () => {
            var l;
            if (!n.default)
                return null;
            const r = Hi(n.default())
              , s = r.findIndex(u => u.type !== Ht);
            if (s === -1)
                return r;
            const o = r[s];
            (l = o.props) == null || delete l.ref;
            const a = o.props ? me(t, o.props) : t
              , i = Vn({
                ...o,
                props: {}
            }, a);
            return r.length === 1 ? i : (r[s] = i,
            r)
        }
    }
})
  , W0 = ["area", "img", "input"]
  , ye = se({
    name: "Primitive",
    inheritAttrs: !1,
    props: {
        asChild: {
            type: Boolean,
            default: !1
        },
        as: {
            type: [String, Object],
            default: "div"
        }
    },
    setup(e, {attrs: t, slots: n}) {
        const r = e.asChild ? "template" : e.as;
        return typeof r == "string" && W0.includes(r) ? () => Nn(r, t) : r !== "template" ? () => Nn(e.as, t, {
            default: n.default
        }) : () => Nn(tl, t, {
            default: n.default
        })
    }
});
function Bo() {
    const e = Q()
      , t = O( () => {
        var n, r;
        return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (r = e.value) == null ? void 0 : r.$el.nextElementSibling : xr(e)
    }
    );
    return {
        primitiveElement: e,
        currentElement: t
    }
}
const z0 = "dismissableLayer.pointerDownOutside"
  , U0 = "dismissableLayer.focusOutside";
function Vf(e, t) {
    const n = t.closest("[data-dismissable-layer]")
      , r = e.dataset.dismissableLayer === "" ? e : e.querySelector("[data-dismissable-layer]")
      , s = Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
    return !!(n && (r === n || s.indexOf(r) < s.indexOf(n)))
}
function G0(e, t, n=!0) {
    var a;
    const r = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , s = Q(!1)
      , o = Q( () => {}
    );
    return ct(i => {
        if (!Sn || !Re(n))
            return;
        const l = async c => {
            const d = c.target;
            if (!(!(t != null && t.value) || !d)) {
                if (Vf(t.value, d)) {
                    s.value = !1;
                    return
                }
                if (c.target && !s.value) {
                    let h = function() {
                        lf(z0, e, p)
                    };
                    var f = h;
                    const p = {
                        originalEvent: c
                    };
                    c.pointerType === "touch" ? (r.removeEventListener("click", o.value),
                    o.value = h,
                    r.addEventListener("click", o.value, {
                        once: !0
                    })) : h()
                } else
                    r.removeEventListener("click", o.value);
                s.value = !1
            }
        }
          , u = window.setTimeout( () => {
            r.addEventListener("pointerdown", l)
        }
        , 0);
        i( () => {
            window.clearTimeout(u),
            r.removeEventListener("pointerdown", l),
            r.removeEventListener("click", o.value)
        }
        )
    }
    ),
    {
        onPointerDownCapture: () => {
            Re(n) && (s.value = !0)
        }
    }
}
function K0(e, t, n=!0) {
    var o;
    const r = ((o = t == null ? void 0 : t.value) == null ? void 0 : o.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , s = Q(!1);
    return ct(a => {
        if (!Sn || !Re(n))
            return;
        const i = async l => {
            if (!(t != null && t.value))
                return;
            await lt(),
            await lt();
            const u = l.target;
            !t.value || !u || Vf(t.value, u) || l.target && !s.value && lf(U0, e, {
                originalEvent: l
            })
        }
        ;
        r.addEventListener("focusin", i),
        a( () => r.removeEventListener("focusin", i))
    }
    ),
    {
        onFocusCapture: () => {
            Re(n) && (s.value = !0)
        }
        ,
        onBlurCapture: () => {
            Re(n) && (s.value = !1)
        }
    }
}
const zt = St({
    layersRoot: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
});
var Y0 = se({
    __name: "DismissableLayer",
    props: {
        disableOutsidePointerEvents: {
            type: Boolean,
            required: !1,
            default: !1
        },
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1
        }
    },
    emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
    setup(e, {emit: t}) {
        const n = e
          , r = t
          , {forwardRef: s, currentElement: o} = Ue()
          , a = O( () => {
            var h;
            return ((h = o.value) == null ? void 0 : h.ownerDocument) ?? globalThis.document
        }
        )
          , i = O( () => zt.layersRoot)
          , l = O( () => o.value ? Array.from(i.value).indexOf(o.value) : -1)
          , u = O( () => zt.layersWithOutsidePointerEventsDisabled.size > 0)
          , c = O( () => {
            const h = Array.from(i.value)
              , [g] = [...zt.layersWithOutsidePointerEventsDisabled].slice(-1)
              , m = h.indexOf(g);
            return l.value >= m
        }
        )
          , d = G0(async h => {
            const g = [...zt.branches].some(m => m == null ? void 0 : m.contains(h.target));
            !c.value || g || (r("pointerDownOutside", h),
            r("interactOutside", h),
            await lt(),
            h.defaultPrevented || r("dismiss"))
        }
        , o)
          , f = K0(h => {
            [...zt.branches].some(m => m == null ? void 0 : m.contains(h.target)) || (r("focusOutside", h),
            r("interactOutside", h),
            h.defaultPrevented || r("dismiss"))
        }
        , o);
        wv("Escape", h => {
            l.value === i.value.size - 1 && (r("escapeKeyDown", h),
            h.defaultPrevented || r("dismiss"))
        }
        );
        let p;
        return ct(h => {
            o.value && (n.disableOutsidePointerEvents && (zt.layersWithOutsidePointerEventsDisabled.size === 0 && (p = a.value.body.style.pointerEvents,
            a.value.body.style.pointerEvents = "none"),
            zt.layersWithOutsidePointerEventsDisabled.add(o.value)),
            i.value.add(o.value),
            h( () => {
                n.disableOutsidePointerEvents && zt.layersWithOutsidePointerEventsDisabled.size === 1 && (a.value.body.style.pointerEvents = p)
            }
            ))
        }
        ),
        ct(h => {
            h( () => {
                o.value && (i.value.delete(o.value),
                zt.layersWithOutsidePointerEventsDisabled.delete(o.value))
            }
            )
        }
        ),
        (h, g) => (T(),
        Y(x(ye), {
            ref: x(s),
            "as-child": h.asChild,
            as: h.as,
            "data-dismissable-layer": "",
            style: _t({
                pointerEvents: u.value ? c.value ? "auto" : "none" : void 0
            }),
            onFocusCapture: x(f).onFocusCapture,
            onBlurCapture: x(f).onBlurCapture,
            onPointerdownCapture: x(d).onPointerDownCapture
        }, {
            default: V( () => [te(h.$slots, "default")]),
            _: 3
        }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]))
    }
})
  , Wf = Y0;
const J0 = Xy( () => Q([]));
function Q0() {
    const e = J0();
    return {
        add(t) {
            const n = e.value[0];
            t !== n && (n == null || n.pause()),
            e.value = Vc(e.value, t),
            e.value.unshift(t)
        },
        remove(t) {
            var n;
            e.value = Vc(e.value, t),
            (n = e.value[0]) == null || n.resume()
        }
    }
}
function Vc(e, t) {
    const n = [...e]
      , r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1),
    n
}
function Z0(e) {
    return e.filter(t => t.tagName !== "A")
}
const wa = "focusScope.autoFocusOnMount"
  , xa = "focusScope.autoFocusOnUnmount"
  , Wc = {
    bubbles: !1,
    cancelable: !0
};
function X0(e, {select: t=!1}={}) {
    const n = ur();
    for (const r of e)
        if (mn(r, {
            select: t
        }),
        ur() !== n)
            return !0
}
function eb(e) {
    const t = zf(e)
      , n = zc(t, e)
      , r = zc(t.reverse(), e);
    return [n, r]
}
function zf(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const s = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || s ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function zc(e, t) {
    for (const n of e)
        if (!tb(n, {
            upTo: t
        }))
            return n
}
function tb(e, {upTo: t}) {
    if (getComputedStyle(e).visibility === "hidden")
        return !0;
    for (; e; ) {
        if (t !== void 0 && e === t)
            return !1;
        if (getComputedStyle(e).display === "none")
            return !0;
        e = e.parentElement
    }
    return !1
}
function nb(e) {
    return e instanceof HTMLInputElement && "select"in e
}
function mn(e, {select: t=!1}={}) {
    if (e && e.focus) {
        const n = ur();
        e.focus({
            preventScroll: !0
        }),
        e !== n && nb(e) && t && e.select()
    }
}
var rb = se({
    __name: "FocusScope",
    props: {
        loop: {
            type: Boolean,
            required: !1,
            default: !1
        },
        trapped: {
            type: Boolean,
            required: !1,
            default: !1
        },
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1
        }
    },
    emits: ["mountAutoFocus", "unmountAutoFocus"],
    setup(e, {emit: t}) {
        const n = e
          , r = t
          , {currentRef: s, currentElement: o} = Ue()
          , a = Q(null)
          , i = Q0()
          , l = St({
            paused: !1,
            pause() {
                this.paused = !0
            },
            resume() {
                this.paused = !1
            }
        });
        ct(c => {
            if (!Sn)
                return;
            const d = o.value;
            if (!n.trapped)
                return;
            function f(m) {
                if (l.paused || !d)
                    return;
                const b = m.target;
                d.contains(b) ? a.value = b : mn(a.value, {
                    select: !0
                })
            }
            function p(m) {
                if (l.paused || !d)
                    return;
                const b = m.relatedTarget;
                b !== null && (d.contains(b) || mn(a.value, {
                    select: !0
                }))
            }
            function h(m) {
                d.contains(a.value) || mn(d)
            }
            document.addEventListener("focusin", f),
            document.addEventListener("focusout", p);
            const g = new MutationObserver(h);
            d && g.observe(d, {
                childList: !0,
                subtree: !0
            }),
            c( () => {
                document.removeEventListener("focusin", f),
                document.removeEventListener("focusout", p),
                g.disconnect()
            }
            )
        }
        ),
        ct(async c => {
            const d = o.value;
            if (await lt(),
            !d)
                return;
            i.add(l);
            const f = ur();
            if (!d.contains(f)) {
                const h = new CustomEvent(wa,Wc);
                d.addEventListener(wa, g => r("mountAutoFocus", g)),
                d.dispatchEvent(h),
                h.defaultPrevented || (X0(Z0(zf(d)), {
                    select: !0
                }),
                ur() === f && mn(d))
            }
            c( () => {
                d.removeEventListener(wa, m => r("mountAutoFocus", m));
                const h = new CustomEvent(xa,Wc)
                  , g = m => {
                    r("unmountAutoFocus", m)
                }
                ;
                d.addEventListener(xa, g),
                d.dispatchEvent(h),
                setTimeout( () => {
                    h.defaultPrevented || mn(f ?? document.body, {
                        select: !0
                    }),
                    d.removeEventListener(xa, g),
                    i.remove(l)
                }
                , 0)
            }
            )
        }
        );
        function u(c) {
            if (!n.loop && !n.trapped || l.paused)
                return;
            const d = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey
              , f = ur();
            if (d && f) {
                const p = c.currentTarget
                  , [h,g] = eb(p);
                h && g ? !c.shiftKey && f === g ? (c.preventDefault(),
                n.loop && mn(h, {
                    select: !0
                })) : c.shiftKey && f === h && (c.preventDefault(),
                n.loop && mn(g, {
                    select: !0
                })) : f === p && c.preventDefault()
            }
        }
        return (c, d) => (T(),
        Y(x(ye), {
            ref_key: "currentRef",
            ref: s,
            tabindex: "-1",
            "as-child": c.asChild,
            as: c.as,
            onKeydown: u
        }, {
            default: V( () => [te(c.$slots, "default")]),
            _: 3
        }, 8, ["as-child", "as"]))
    }
})
  , sb = rb
  , ob = se({
    __name: "Teleport",
    props: {
        to: {
            type: null,
            required: !1,
            default: "body"
        },
        disabled: {
            type: Boolean,
            required: !1
        },
        defer: {
            type: Boolean,
            required: !1
        },
        forceMount: {
            type: Boolean,
            required: !1
        }
    },
    setup(e) {
        const t = vv();
        return (n, r) => x(t) || n.forceMount ? (T(),
        Y(Bp, {
            key: 0,
            to: n.to,
            disabled: n.disabled,
            defer: n.defer
        }, [te(n.$slots, "default")], 8, ["to", "disabled", "defer"])) : Ye("v-if", !0)
    }
})
  , Uf = ob;
function ab(e) {
    function t(r) {
        return Array.isArray(e.date.value) ? e.date.value.some(s => Ne(s, r)) : e.date.value ? Ne(e.date.value, r) : !1
    }
    const n = O( () => {
        var r, s, o, a;
        if (Array.isArray(e.date.value)) {
            if (!e.date.value.length)
                return !1;
            for (const i of e.date.value)
                if ((r = e.isDateDisabled) != null && r.call(e, i) || (s = e.isDateUnavailable) != null && s.call(e, i))
                    return !0
        } else {
            if (!e.date.value)
                return !1;
            if ((o = e.isDateDisabled) != null && o.call(e, e.date.value) || (a = e.isDateUnavailable) != null && a.call(e, e.date.value))
                return !0
        }
        return !1
    }
    );
    return {
        isDateSelected: t,
        isInvalid: n
    }
}
function ib(e, t) {
    const n = t(e)
      , r = n.compare(e)
      , s = {};
    return r >= 7 && (s.day = 1),
    r >= as(e) && (s.month = 1),
    n.set({
        ...s
    })
}
function lb(e, t) {
    const n = t(e)
      , r = e.compare(n)
      , s = {};
    return r >= 7 && (s.day = 35),
    r >= as(e) && (s.month = 13),
    n.set({
        ...s
    })
}
function cb(e, t) {
    return t(e)
}
function ub(e, t) {
    return t(e)
}
function Gf(e) {
    const t = $0(e.locale.value)
      , n = O( () => {
        const g = {
            calendar: e.placeholder.value.calendar.identifier
        };
        return e.placeholder.value.calendar.identifier === "gregory" && e.placeholder.value.era === "BC" && (g.era = "short"),
        g
    }
    )
      , r = Q(Dn({
        dateObj: e.placeholder.value,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
    }))
      , s = O( () => r.value.map(g => g.value));
    function o(g) {
        return !s.value.some(m => kc(g, m))
    }
    const a = g => {
        if (!e.maxValue.value || !r.value.length)
            return !1;
        if (e.disabled.value)
            return !0;
        const m = r.value[r.value.length - 1].value;
        if (!g && !e.nextPage.value) {
            const y = m.add({
                months: 1
            }).set({
                day: 1
            });
            return js(y, e.maxValue.value)
        }
        const b = ib(m, g || e.nextPage.value);
        return js(b, e.maxValue.value)
    }
      , i = g => {
        if (!e.minValue.value || !r.value.length)
            return !1;
        if (e.disabled.value)
            return !0;
        const m = r.value[0].value;
        if (!g && !e.prevPage.value) {
            const y = m.subtract({
                months: 1
            }).set({
                day: 35
            });
            return Hn(y, e.minValue.value)
        }
        const b = lb(m, g || e.prevPage.value);
        return Hn(b, e.minValue.value)
    }
    ;
    function l(g) {
        var m;
        return !!((m = e.isDateDisabled) != null && m.call(e, g) || e.disabled.value || e.maxValue.value && js(g, e.maxValue.value) || e.minValue.value && Hn(g, e.minValue.value))
    }
    const u = g => {
        var m;
        return !!((m = e.isDateUnavailable) != null && m.call(e, g))
    }
      , c = O( () => r.value.length ? r.value[0].rows[0].map(g => t.dayOfWeek(kt(g), e.weekdayFormat.value)) : [])
      , d = g => {
        const m = r.value[0].value;
        if (!g && !e.nextPage.value) {
            const k = m.add({
                months: e.pagedNavigation.value ? e.numberOfMonths.value : 1
            })
              , _ = Dn({
                dateObj: k,
                weekStartsOn: e.weekStartsOn.value,
                locale: e.locale.value,
                fixedWeeks: e.fixedWeeks.value,
                numberOfMonths: e.numberOfMonths.value
            });
            r.value = _,
            e.placeholder.value = _[0].value.set({
                day: 1
            });
            return
        }
        const b = cb(m, g || e.nextPage.value)
          , y = Dn({
            dateObj: b,
            weekStartsOn: e.weekStartsOn.value,
            locale: e.locale.value,
            fixedWeeks: e.fixedWeeks.value,
            numberOfMonths: e.numberOfMonths.value
        });
        r.value = y;
        const v = {};
        if (!g) {
            const k = y[0].value.compare(m);
            k >= as(m) && (v.day = 1),
            k >= 365 && (v.month = 1)
        }
        e.placeholder.value = y[0].value.set({
            ...v
        })
    }
      , f = g => {
        const m = r.value[0].value;
        if (!g && !e.prevPage.value) {
            const k = m.subtract({
                months: e.pagedNavigation.value ? e.numberOfMonths.value : 1
            })
              , _ = Dn({
                dateObj: k,
                weekStartsOn: e.weekStartsOn.value,
                locale: e.locale.value,
                fixedWeeks: e.fixedWeeks.value,
                numberOfMonths: e.numberOfMonths.value
            });
            r.value = _,
            e.placeholder.value = _[0].value.set({
                day: 1
            });
            return
        }
        const b = ub(m, g || e.prevPage.value)
          , y = Dn({
            dateObj: b,
            weekStartsOn: e.weekStartsOn.value,
            locale: e.locale.value,
            fixedWeeks: e.fixedWeeks.value,
            numberOfMonths: e.numberOfMonths.value
        });
        r.value = y;
        const v = {};
        if (!g) {
            const k = m.compare(y[0].value);
            k >= as(m) && (v.day = 1),
            k >= 365 && (v.month = 1)
        }
        e.placeholder.value = y[0].value.set({
            ...v
        })
    }
    ;
    Oe(e.placeholder, g => {
        s.value.some(m => kc(m, g)) || (r.value = Dn({
            dateObj: g,
            weekStartsOn: e.weekStartsOn.value,
            locale: e.locale.value,
            fixedWeeks: e.fixedWeeks.value,
            numberOfMonths: e.numberOfMonths.value
        }))
    }
    ),
    Oe([e.locale, e.weekStartsOn, e.fixedWeeks, e.numberOfMonths], () => {
        r.value = Dn({
            dateObj: e.placeholder.value,
            weekStartsOn: e.weekStartsOn.value,
            locale: e.locale.value,
            fixedWeeks: e.fixedWeeks.value,
            numberOfMonths: e.numberOfMonths.value
        })
    }
    );
    const p = O( () => {
        if (!r.value.length)
            return "";
        if (e.locale.value !== t.getLocale() && t.setLocale(e.locale.value),
        r.value.length === 1) {
            const $ = r.value[0].value;
            return `${t.fullMonthAndYear(kt($), n.value)}`
        }
        const g = kt(r.value[0].value)
          , m = kt(r.value[r.value.length - 1].value)
          , b = t.fullMonth(g, n.value)
          , y = t.fullMonth(m, n.value)
          , v = t.fullYear(g, n.value)
          , k = t.fullYear(m, n.value);
        return v === k ? `${b} - ${y} ${k}` : `${b} ${v} - ${y} ${k}`
    }
    )
      , h = O( () => `${e.calendarLabel.value ?? "Event Date"}, ${p.value}`);
    return {
        isDateDisabled: l,
        isDateUnavailable: u,
        isNextButtonDisabled: a,
        isPrevButtonDisabled: i,
        grid: r,
        weekdays: c,
        visibleView: s,
        isOutsideVisibleView: o,
        formatter: t,
        nextPage: d,
        prevPage: f,
        headingValue: p,
        fullCalendarLabel: h
    }
}
const db = {
    style: {
        border: "0px",
        clip: "rect(0px, 0px, 0px, 0px)",
        "clip-path": "inset(50%)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: "0px",
        position: "absolute",
        "white-space": "nowrap",
        width: "1px"
    }
}
  , fb = {
    role: "heading",
    "aria-level": "2"
}
  , [Cr,hb] = Gn("CalendarRoot");
var pb = se({
    __name: "CalendarRoot",
    props: {
        defaultValue: {
            type: null,
            required: !1,
            default: void 0
        },
        defaultPlaceholder: {
            type: null,
            required: !1
        },
        placeholder: {
            type: null,
            required: !1,
            default: void 0
        },
        pagedNavigation: {
            type: Boolean,
            required: !1,
            default: !1
        },
        preventDeselect: {
            type: Boolean,
            required: !1,
            default: !1
        },
        weekStartsOn: {
            type: Number,
            required: !1,
            default: 0
        },
        weekdayFormat: {
            type: String,
            required: !1,
            default: "narrow"
        },
        calendarLabel: {
            type: String,
            required: !1
        },
        fixedWeeks: {
            type: Boolean,
            required: !1,
            default: !1
        },
        maxValue: {
            type: null,
            required: !1
        },
        minValue: {
            type: null,
            required: !1
        },
        locale: {
            type: String,
            required: !1
        },
        numberOfMonths: {
            type: Number,
            required: !1,
            default: 1
        },
        disabled: {
            type: Boolean,
            required: !1,
            default: !1
        },
        readonly: {
            type: Boolean,
            required: !1,
            default: !1
        },
        initialFocus: {
            type: Boolean,
            required: !1,
            default: !1
        },
        isDateDisabled: {
            type: Function,
            required: !1,
            default: void 0
        },
        isDateUnavailable: {
            type: Function,
            required: !1,
            default: void 0
        },
        dir: {
            type: String,
            required: !1
        },
        nextPage: {
            type: Function,
            required: !1
        },
        prevPage: {
            type: Function,
            required: !1
        },
        modelValue: {
            type: null,
            required: !1
        },
        multiple: {
            type: Boolean,
            required: !1,
            default: !1
        },
        disableDaysOutsideCurrentView: {
            type: Boolean,
            required: !1,
            default: !1
        },
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: "div"
        }
    },
    emits: ["update:modelValue", "update:placeholder"],
    setup(e, {emit: t}) {
        const n = e
          , r = t
          , {disabled: s, readonly: o, initialFocus: a, pagedNavigation: i, weekStartsOn: l, weekdayFormat: u, fixedWeeks: c, multiple: d, minValue: f, maxValue: p, numberOfMonths: h, preventDeselect: g, isDateDisabled: m, isDateUnavailable: b, calendarLabel: y, defaultValue: v, nextPage: k, prevPage: _, dir: $, locale: A, disableDaysOutsideCurrentView: S} = Bt(n)
          , {primitiveElement: P, currentElement: U} = Bo()
          , ee = Hf(A)
          , M = Lf($)
          , q = mr(n, "modelValue", r, {
            defaultValue: v.value,
            passive: n.modelValue === void 0
        })
          , D = qf({
            defaultPlaceholder: n.placeholder,
            defaultValue: q.value,
            locale: n.locale
        })
          , N = mr(n, "placeholder", r, {
            defaultValue: n.defaultPlaceholder ?? D.copy(),
            passive: n.placeholder === void 0
        });
        function R(w) {
            N.value = w.copy()
        }
        const {fullCalendarLabel: H, headingValue: j, isDateDisabled: le, isDateUnavailable: K, isNextButtonDisabled: we, isPrevButtonDisabled: pe, weekdays: Se, isOutsideVisibleView: Ge, nextPage: xe, prevPage: $e, formatter: ut, grid: vt} = Gf({
            locale: ee,
            placeholder: N,
            weekStartsOn: l,
            fixedWeeks: c,
            numberOfMonths: h,
            minValue: f,
            maxValue: p,
            disabled: s,
            weekdayFormat: u,
            pagedNavigation: i,
            isDateDisabled: m.value,
            isDateUnavailable: b.value,
            calendarLabel: y,
            nextPage: k,
            prevPage: _
        })
          , {isInvalid: Me, isDateSelected: bt} = ab({
            date: q,
            isDateDisabled: le,
            isDateUnavailable: K
        });
        Oe(q, w => {
            if (Array.isArray(w) && w.length) {
                const C = w[w.length - 1];
                C && !bn(N.value, C) && R(C)
            } else
                !Array.isArray(w) && w && !bn(N.value, w) && R(w)
        }
        );
        function Et(w) {
            if (d.value) {
                if (!q.value)
                    q.value = [w.copy()];
                else if (Array.isArray(q.value)) {
                    if (q.value.findIndex(E => Ne(E, w)) === -1)
                        q.value = [...q.value, w];
                    else if (!g.value) {
                        const E = q.value.filter(F => !Ne(F, w));
                        if (!E.length) {
                            N.value = w.copy(),
                            q.value = void 0;
                            return
                        }
                        q.value = E.map(F => F.copy())
                    }
                }
            } else {
                if (!q.value) {
                    q.value = w.copy();
                    return
                }
                !g.value && bn(q.value, w) ? (N.value = w.copy(),
                q.value = void 0) : q.value = w.copy()
            }
        }
        return jt( () => {
            a.value && Ff(U.value)
        }
        ),
        hb({
            isDateUnavailable: K,
            dir: M,
            isDateDisabled: le,
            locale: ee,
            formatter: ut,
            modelValue: q,
            placeholder: N,
            disabled: s,
            initialFocus: a,
            pagedNavigation: i,
            grid: vt,
            weekDays: Se,
            weekStartsOn: l,
            weekdayFormat: u,
            fixedWeeks: c,
            multiple: d,
            numberOfMonths: h,
            readonly: o,
            preventDeselect: g,
            fullCalendarLabel: H,
            headingValue: j,
            isInvalid: Me,
            isDateSelected: bt,
            isNextButtonDisabled: we,
            isPrevButtonDisabled: pe,
            isOutsideVisibleView: Ge,
            nextPage: xe,
            prevPage: $e,
            parentElement: U,
            onPlaceholderChange: R,
            onDateChange: Et,
            disableDaysOutsideCurrentView: S,
            minValue: f,
            maxValue: p
        }),
        (w, C) => (T(),
        Y(x(ye), {
            ref_key: "primitiveElement",
            ref: P,
            as: w.as,
            "as-child": w.asChild,
            "aria-label": x(H),
            "data-readonly": x(o) ? "" : void 0,
            "data-disabled": x(s) ? "" : void 0,
            "data-invalid": x(Me) ? "" : void 0,
            dir: x(M)
        }, {
            default: V( () => [te(w.$slots, "default", {
                date: x(N),
                grid: x(vt),
                weekDays: x(Se),
                weekStartsOn: x(l),
                locale: x(ee),
                fixedWeeks: x(c),
                modelValue: x(q)
            }), W("div", db, [W("div", fb, fe(x(H)), 1)])]),
            _: 3
        }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]))
    }
})
  , gb = pb
  , mb = se({
    __name: "CalendarCell",
    props: {
        date: {
            type: null,
            required: !0
        },
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: "td"
        }
    },
    setup(e) {
        const t = Cr();
        return (n, r) => {
            var s, o;
            return T(),
            Y(x(ye), {
                as: n.as,
                "as-child": n.asChild,
                role: "gridcell",
                "aria-selected": x(t).isDateSelected(n.date) ? !0 : void 0,
                "aria-disabled": x(t).isDateDisabled(n.date) || ((o = (s = x(t)).isDateUnavailable) == null ? void 0 : o.call(s, n.date)) || x(t).disableDaysOutsideCurrentView.value,
                "data-disabled": x(t).isDateDisabled(n.date) || x(t).disableDaysOutsideCurrentView.value ? "" : void 0
            }, {
                default: V( () => [te(n.$slots, "default")]),
                _: 3
            }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"])
        }
    }
})
  , yb = mb
  , vb = se({
    __name: "CalendarCellTrigger",
    props: {
        day: {
            type: null,
            required: !0
        },
        month: {
            type: null,
            required: !0
        },
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: "div"
        }
    },
    setup(e) {
        const t = e
          , n = el()
          , r = Cr()
          , {primitiveElement: s} = Bo()
          , o = O( () => t.day.day.toLocaleString(r.locale.value))
          , a = O( () => r.formatter.custom(kt(t.day), {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric"
        }))
          , i = O( () => {
            var b;
            return ((b = r.isDateUnavailable) == null ? void 0 : b.call(r, t.day)) ?? !1
        }
        )
          , l = O( () => ff(t.day, kr()))
          , u = O( () => !zi(t.day, t.month))
          , c = O( () => r.isOutsideVisibleView(t.day))
          , d = O( () => r.isDateDisabled(t.day) || r.disableDaysOutsideCurrentView.value && u.value)
          , f = O( () => !r.disabled.value && Ne(t.day, r.placeholder.value))
          , p = O( () => r.isDateSelected(t.day));
        function h(b) {
            var y;
            r.readonly.value || r.isDateDisabled(b) || (y = r.isDateUnavailable) != null && y.call(r, b) || r.onDateChange(b)
        }
        function g() {
            d.value || h(t.day)
        }
        function m(b) {
            if (d.value)
                return;
            b.preventDefault(),
            b.stopPropagation();
            const y = r.parentElement.value
              , v = 7
              , k = r.dir.value === "rtl" ? -1 : 1;
            switch (b.code) {
            case n.ARROW_RIGHT:
                _(t.day, k);
                break;
            case n.ARROW_LEFT:
                _(t.day, -k);
                break;
            case n.ARROW_UP:
                _(t.day, -v);
                break;
            case n.ARROW_DOWN:
                _(t.day, v);
                break;
            case n.ENTER:
            case n.SPACE_CODE:
                h(t.day)
            }
            function _($, A) {
                const S = $.add({
                    days: A
                });
                if (r.minValue.value && S.compare(r.minValue.value) < 0 || r.maxValue.value && S.compare(r.maxValue.value) > 0)
                    return;
                const P = y.querySelector(`[data-value='${S.toString()}']:not([data-outside-view])`);
                if (!P) {
                    if (A > 0) {
                        if (r.isNextButtonDisabled())
                            return;
                        r.nextPage()
                    } else {
                        if (r.isPrevButtonDisabled())
                            return;
                        r.prevPage()
                    }
                    lt( () => {
                        _($, A)
                    }
                    );
                    return
                }
                if (P && P.hasAttribute("data-disabled"))
                    return _(S, A);
                r.onPlaceholderChange(S),
                P == null || P.focus()
            }
        }
        return (b, y) => (T(),
        Y(x(ye), me({
            ref_key: "primitiveElement",
            ref: s
        }, t, {
            role: "button",
            "aria-label": a.value,
            "data-reka-calendar-cell-trigger": "",
            "aria-disabled": d.value || i.value ? !0 : void 0,
            "data-selected": p.value ? !0 : void 0,
            "data-value": b.day.toString(),
            "data-disabled": d.value ? "" : void 0,
            "data-unavailable": i.value ? "" : void 0,
            "data-today": l.value ? "" : void 0,
            "data-outside-view": u.value ? "" : void 0,
            "data-outside-visible-view": c.value ? "" : void 0,
            "data-focused": f.value ? "" : void 0,
            tabindex: f.value ? 0 : u.value || d.value ? void 0 : -1,
            onClick: g,
            onKeydown: [Ba(m, ["up", "down", "left", "right", "space", "enter"]), y[0] || (y[0] = Ba(eo( () => {}
            , ["prevent"]), ["enter"]))]
        }), {
            default: V( () => [te(b.$slots, "default", {
                dayValue: o.value,
                disabled: d.value,
                today: l.value,
                selected: p.value,
                outsideView: u.value,
                outsideVisibleView: c.value,
                unavailable: i.value
            }, () => [it(fe(o.value), 1)])]),
            _: 3
        }, 16, ["aria-label", "aria-disabled", "data-selected", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-outside-visible-view", "data-focused", "tabindex"]))
    }
})
  , bb = vb
  , wb = se({
    __name: "CalendarGrid",
    props: {
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: "table"
        }
    },
    setup(e) {
        const t = e
          , n = Cr()
          , r = O( () => n.disabled.value ? !0 : void 0)
          , s = O( () => n.readonly.value ? !0 : void 0);
        return (o, a) => (T(),
        Y(x(ye), me(t, {
            tabindex: "-1",
            role: "grid",
            "aria-readonly": s.value,
            "aria-disabled": r.value,
            "data-readonly": s.value && "",
            "data-disabled": r.value && ""
        }), {
            default: V( () => [te(o.$slots, "default")]),
            _: 3
        }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]))
    }
})
  , xb = wb
  , kb = se({
    __name: "CalendarGridBody",
    props: {
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: "tbody"
        }
    },
    setup(e) {
        const t = e;
        return (n, r) => (T(),
        Y(x(ye), He(Je(t)), {
            default: V( () => [te(n.$slots, "default")]),
            _: 3
        }, 16))
    }
})
  , _b = kb
  , Cb = se({
    __name: "CalendarGridHead",
    props: {
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: "thead"
        }
    },
    setup(e) {
        const t = e;
        return (n, r) => (T(),
        Y(x(ye), me(t, {
            "aria-hidden": "true"
        }), {
            default: V( () => [te(n.$slots, "default")]),
            _: 3
        }, 16))
    }
})
  , Sb = Cb
  , $b = se({
    __name: "CalendarGridRow",
    props: {
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: "tr"
        }
    },
    setup(e) {
        const t = e;
        return (n, r) => (T(),
        Y(x(ye), He(Je(t)), {
            default: V( () => [te(n.$slots, "default")]),
            _: 3
        }, 16))
    }
})
  , Ab = $b
  , Ob = se({
    __name: "CalendarHeadCell",
    props: {
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: "th"
        }
    },
    setup(e) {
        const t = e;
        return (n, r) => (T(),
        Y(x(ye), He(Je(t)), {
            default: V( () => [te(n.$slots, "default")]),
            _: 3
        }, 16))
    }
})
  , Db = Ob
  , Eb = se({
    __name: "CalendarHeader",
    props: {
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: "div"
        }
    },
    setup(e) {
        const t = e;
        return (n, r) => (T(),
        Y(x(ye), He(Je(t)), {
            default: V( () => [te(n.$slots, "default")]),
            _: 3
        }, 16))
    }
})
  , Pb = Eb
  , Mb = se({
    __name: "CalendarHeading",
    props: {
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: "div"
        }
    },
    setup(e) {
        const t = e
          , n = Cr();
        return (r, s) => (T(),
        Y(x(ye), me(t, {
            "data-disabled": x(n).disabled.value ? "" : void 0
        }), {
            default: V( () => [te(r.$slots, "default", {
                headingValue: x(n).headingValue.value
            }, () => [it(fe(x(n).headingValue.value), 1)])]),
            _: 3
        }, 16, ["data-disabled"]))
    }
})
  , Tb = Mb
  , Rb = se({
    __name: "CalendarNext",
    props: {
        nextPage: {
            type: Function,
            required: !1
        },
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: "button"
        }
    },
    setup(e) {
        const t = e
          , n = O( () => r.disabled.value || r.isNextButtonDisabled(t.nextPage))
          , r = Cr();
        return (s, o) => (T(),
        Y(x(ye), {
            as: t.as,
            "as-child": t.asChild,
            "aria-label": "Next page",
            type: s.as === "button" ? "button" : void 0,
            "aria-disabled": n.value || void 0,
            "data-disabled": n.value || void 0,
            disabled: n.value,
            onClick: o[0] || (o[0] = a => x(r).nextPage(t.nextPage))
        }, {
            default: V( () => [te(s.$slots, "default", {
                disabled: n.value
            }, () => [o[1] || (o[1] = it(" Next page "))])]),
            _: 3
        }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]))
    }
})
  , Ib = Rb
  , qb = se({
    __name: "CalendarPrev",
    props: {
        prevPage: {
            type: Function,
            required: !1
        },
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: "button"
        }
    },
    setup(e) {
        const t = e
          , n = O( () => r.disabled.value || r.isPrevButtonDisabled(t.prevPage))
          , r = Cr();
        return (s, o) => (T(),
        Y(x(ye), {
            "aria-label": "Previous page",
            as: t.as,
            "as-child": t.asChild,
            type: s.as === "button" ? "button" : void 0,
            "aria-disabled": n.value || void 0,
            "data-disabled": n.value || void 0,
            disabled: n.value,
            onClick: o[0] || (o[0] = a => x(r).prevPage(t.prevPage))
        }, {
            default: V( () => [te(s.$slots, "default", {
                disabled: n.value
            }, () => [o[1] || (o[1] = it(" Prev page "))])]),
            _: 3
        }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]))
    }
})
  , Fb = qb;
const [Kf,Lb] = Gn("PopperRoot");
var Bb = se({
    inheritAttrs: !1,
    __name: "PopperRoot",
    setup(e) {
        const t = Q();
        return Lb({
            anchor: t,
            onAnchorChange: n => t.value = n
        }),
        (n, r) => te(n.$slots, "default")
    }
})
  , Yf = Bb
  , Nb = se({
    __name: "PopperAnchor",
    props: {
        reference: {
            type: null,
            required: !1
        },
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1
        }
    },
    setup(e) {
        const t = e
          , {forwardRef: n, currentElement: r} = Ue()
          , s = Kf();
        return ad( () => {
            s.onAnchorChange(t.reference ?? r.value)
        }
        ),
        (o, a) => (T(),
        Y(x(ye), {
            ref: x(n),
            as: o.as,
            "as-child": o.asChild
        }, {
            default: V( () => [te(o.$slots, "default")]),
            _: 3
        }, 8, ["as", "as-child"]))
    }
})
  , nl = Nb;
const Hb = {
    key: 0,
    d: "M0 0L6 6L12 0"
}
  , jb = {
    key: 1,
    d: "M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"
};
var Vb = se({
    __name: "Arrow",
    props: {
        width: {
            type: Number,
            required: !1,
            default: 10
        },
        height: {
            type: Number,
            required: !1,
            default: 5
        },
        rounded: {
            type: Boolean,
            required: !1
        },
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: "svg"
        }
    },
    setup(e) {
        const t = e;
        return Ue(),
        (n, r) => (T(),
        Y(x(ye), me(t, {
            width: n.width,
            height: n.height,
            viewBox: n.asChild ? void 0 : "0 0 12 6",
            preserveAspectRatio: n.asChild ? void 0 : "none"
        }), {
            default: V( () => [te(n.$slots, "default", {}, () => [n.rounded ? (T(),
            ke("path", jb)) : (T(),
            ke("path", Hb))])]),
            _: 3
        }, 16, ["width", "height", "viewBox", "preserveAspectRatio"]))
    }
})
  , Wb = Vb;
function zb(e) {
    return e !== null
}
function Ub(e) {
    return {
        name: "transformOrigin",
        options: e,
        fn(t) {
            var m, b, y;
            const {placement: n, rects: r, middlewareData: s} = t
              , a = ((m = s.arrow) == null ? void 0 : m.centerOffset) !== 0
              , i = a ? 0 : e.arrowWidth
              , l = a ? 0 : e.arrowHeight
              , [u,c] = ri(n)
              , d = {
                start: "0%",
                center: "50%",
                end: "100%"
            }[c]
              , f = (((b = s.arrow) == null ? void 0 : b.x) ?? 0) + i / 2
              , p = (((y = s.arrow) == null ? void 0 : y.y) ?? 0) + l / 2;
            let h = ""
              , g = "";
            return u === "bottom" ? (h = a ? d : `${f}px`,
            g = `${-l}px`) : u === "top" ? (h = a ? d : `${f}px`,
            g = `${r.floating.height + l}px`) : u === "right" ? (h = `${-l}px`,
            g = a ? d : `${p}px`) : u === "left" && (h = `${r.floating.width + l}px`,
            g = a ? d : `${p}px`),
            {
                data: {
                    x: h,
                    y: g
                }
            }
        }
    }
}
function ri(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
const Gb = ["top", "right", "bottom", "left"]
  , kn = Math.min
  , ht = Math.max
  , lo = Math.round
  , Ds = Math.floor
  , Lt = e => ({
    x: e,
    y: e
})
  , Kb = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};
function si(e, t, n) {
    return ht(e, kn(t, n))
}
function ln(e, t) {
    return typeof e == "function" ? e(t) : e
}
function cn(e) {
    return e.split("-")[0]
}
function Sr(e) {
    return e.split("-")[1]
}
function rl(e) {
    return e === "x" ? "y" : "x"
}
function sl(e) {
    return e === "y" ? "height" : "width"
}
function qt(e) {
    const t = e[0];
    return t === "t" || t === "b" ? "y" : "x"
}
function ol(e) {
    return rl(qt(e))
}
function Yb(e, t, n) {
    n === void 0 && (n = !1);
    const r = Sr(e)
      , s = ol(e)
      , o = sl(s);
    let a = s === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[o] > t.floating[o] && (a = co(a)),
    [a, co(a)]
}
function Jb(e) {
    const t = co(e);
    return [oi(e), t, oi(t)]
}
function oi(e) {
    return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start")
}
const Uc = ["left", "right"]
  , Gc = ["right", "left"]
  , Qb = ["top", "bottom"]
  , Zb = ["bottom", "top"];
function Xb(e, t, n) {
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? Gc : Uc : t ? Uc : Gc;
    case "left":
    case "right":
        return t ? Qb : Zb;
    default:
        return []
    }
}
function e1(e, t, n, r) {
    const s = Sr(e);
    let o = Xb(cn(e), n === "start", r);
    return s && (o = o.map(a => a + "-" + s),
    t && (o = o.concat(o.map(oi)))),
    o
}
function co(e) {
    const t = cn(e);
    return Kb[t] + e.slice(t.length)
}
function t1(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function Jf(e) {
    return typeof e != "number" ? t1(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function uo(e) {
    const {x: t, y: n, width: r, height: s} = e;
    return {
        width: r,
        height: s,
        top: n,
        left: t,
        right: t + r,
        bottom: n + s,
        x: t,
        y: n
    }
}
function Kc(e, t, n) {
    let {reference: r, floating: s} = e;
    const o = qt(t)
      , a = ol(t)
      , i = sl(a)
      , l = cn(t)
      , u = o === "y"
      , c = r.x + r.width / 2 - s.width / 2
      , d = r.y + r.height / 2 - s.height / 2
      , f = r[i] / 2 - s[i] / 2;
    let p;
    switch (l) {
    case "top":
        p = {
            x: c,
            y: r.y - s.height
        };
        break;
    case "bottom":
        p = {
            x: c,
            y: r.y + r.height
        };
        break;
    case "right":
        p = {
            x: r.x + r.width,
            y: d
        };
        break;
    case "left":
        p = {
            x: r.x - s.width,
            y: d
        };
        break;
    default:
        p = {
            x: r.x,
            y: r.y
        }
    }
    switch (Sr(t)) {
    case "start":
        p[a] -= f * (n && u ? -1 : 1);
        break;
    case "end":
        p[a] += f * (n && u ? -1 : 1);
        break
    }
    return p
}
async function n1(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: s, platform: o, rects: a, elements: i, strategy: l} = e
      , {boundary: u="clippingAncestors", rootBoundary: c="viewport", elementContext: d="floating", altBoundary: f=!1, padding: p=0} = ln(t, e)
      , h = Jf(p)
      , m = i[f ? d === "floating" ? "reference" : "floating" : d]
      , b = uo(await o.getClippingRect({
        element: (n = await (o.isElement == null ? void 0 : o.isElement(m))) == null || n ? m : m.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(i.floating)),
        boundary: u,
        rootBoundary: c,
        strategy: l
    }))
      , y = d === "floating" ? {
        x: r,
        y: s,
        width: a.floating.width,
        height: a.floating.height
    } : a.reference
      , v = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(i.floating))
      , k = await (o.isElement == null ? void 0 : o.isElement(v)) ? await (o.getScale == null ? void 0 : o.getScale(v)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , _ = uo(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: i,
        rect: y,
        offsetParent: v,
        strategy: l
    }) : y);
    return {
        top: (b.top - _.top + h.top) / k.y,
        bottom: (_.bottom - b.bottom + h.bottom) / k.y,
        left: (b.left - _.left + h.left) / k.x,
        right: (_.right - b.right + h.right) / k.x
    }
}
const r1 = 50
  , s1 = async (e, t, n) => {
    const {placement: r="bottom", strategy: s="absolute", middleware: o=[], platform: a} = n
      , i = a.detectOverflow ? a : {
        ...a,
        detectOverflow: n1
    }
      , l = await (a.isRTL == null ? void 0 : a.isRTL(t));
    let u = await a.getElementRects({
        reference: e,
        floating: t,
        strategy: s
    })
      , {x: c, y: d} = Kc(u, r, l)
      , f = r
      , p = 0;
    const h = {};
    for (let g = 0; g < o.length; g++) {
        const m = o[g];
        if (!m)
            continue;
        const {name: b, fn: y} = m
          , {x: v, y: k, data: _, reset: $} = await y({
            x: c,
            y: d,
            initialPlacement: r,
            placement: f,
            strategy: s,
            middlewareData: h,
            rects: u,
            platform: i,
            elements: {
                reference: e,
                floating: t
            }
        });
        c = v ?? c,
        d = k ?? d,
        h[b] = {
            ...h[b],
            ..._
        },
        $ && p < r1 && (p++,
        typeof $ == "object" && ($.placement && (f = $.placement),
        $.rects && (u = $.rects === !0 ? await a.getElementRects({
            reference: e,
            floating: t,
            strategy: s
        }) : $.rects),
        {x: c, y: d} = Kc(u, f, l)),
        g = -1)
    }
    return {
        x: c,
        y: d,
        placement: f,
        strategy: s,
        middlewareData: h
    }
}
  , o1 = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: s, rects: o, platform: a, elements: i, middlewareData: l} = t
          , {element: u, padding: c=0} = ln(e, t) || {};
        if (u == null)
            return {};
        const d = Jf(c)
          , f = {
            x: n,
            y: r
        }
          , p = ol(s)
          , h = sl(p)
          , g = await a.getDimensions(u)
          , m = p === "y"
          , b = m ? "top" : "left"
          , y = m ? "bottom" : "right"
          , v = m ? "clientHeight" : "clientWidth"
          , k = o.reference[h] + o.reference[p] - f[p] - o.floating[h]
          , _ = f[p] - o.reference[p]
          , $ = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
        let A = $ ? $[v] : 0;
        (!A || !await (a.isElement == null ? void 0 : a.isElement($))) && (A = i.floating[v] || o.floating[h]);
        const S = k / 2 - _ / 2
          , P = A / 2 - g[h] / 2 - 1
          , U = kn(d[b], P)
          , ee = kn(d[y], P)
          , M = U
          , q = A - g[h] - ee
          , D = A / 2 - g[h] / 2 + S
          , N = si(M, D, q)
          , R = !l.arrow && Sr(s) != null && D !== N && o.reference[h] / 2 - (D < M ? U : ee) - g[h] / 2 < 0
          , H = R ? D < M ? D - M : D - q : 0;
        return {
            [p]: f[p] + H,
            data: {
                [p]: N,
                centerOffset: D - N - H,
                ...R && {
                    alignmentOffset: H
                }
            },
            reset: R
        }
    }
})
  , a1 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: s, middlewareData: o, rects: a, initialPlacement: i, platform: l, elements: u} = t
              , {mainAxis: c=!0, crossAxis: d=!0, fallbackPlacements: f, fallbackStrategy: p="bestFit", fallbackAxisSideDirection: h="none", flipAlignment: g=!0, ...m} = ln(e, t);
            if ((n = o.arrow) != null && n.alignmentOffset)
                return {};
            const b = cn(s)
              , y = qt(i)
              , v = cn(i) === i
              , k = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
              , _ = f || (v || !g ? [co(i)] : Jb(i))
              , $ = h !== "none";
            !f && $ && _.push(...e1(i, g, h, k));
            const A = [i, ..._]
              , S = await l.detectOverflow(t, m)
              , P = [];
            let U = ((r = o.flip) == null ? void 0 : r.overflows) || [];
            if (c && P.push(S[b]),
            d) {
                const D = Yb(s, a, k);
                P.push(S[D[0]], S[D[1]])
            }
            if (U = [...U, {
                placement: s,
                overflows: P
            }],
            !P.every(D => D <= 0)) {
                var ee, M;
                const D = (((ee = o.flip) == null ? void 0 : ee.index) || 0) + 1
                  , N = A[D];
                if (N && (!(d === "alignment" ? y !== qt(N) : !1) || U.every(j => qt(j.placement) === y ? j.overflows[0] > 0 : !0)))
                    return {
                        data: {
                            index: D,
                            overflows: U
                        },
                        reset: {
                            placement: N
                        }
                    };
                let R = (M = U.filter(H => H.overflows[0] <= 0).sort( (H, j) => H.overflows[1] - j.overflows[1])[0]) == null ? void 0 : M.placement;
                if (!R)
                    switch (p) {
                    case "bestFit":
                        {
                            var q;
                            const H = (q = U.filter(j => {
                                if ($) {
                                    const le = qt(j.placement);
                                    return le === y || le === "y"
                                }
                                return !0
                            }
                            ).map(j => [j.placement, j.overflows.filter(le => le > 0).reduce( (le, K) => le + K, 0)]).sort( (j, le) => j[1] - le[1])[0]) == null ? void 0 : q[0];
                            H && (R = H);
                            break
                        }
                    case "initialPlacement":
                        R = i;
                        break
                    }
                if (s !== R)
                    return {
                        reset: {
                            placement: R
                        }
                    }
            }
            return {}
        }
    }
};
function Yc(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Jc(e) {
    return Gb.some(t => e[t] >= 0)
}
const i1 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n, platform: r} = t
              , {strategy: s="referenceHidden", ...o} = ln(e, t);
            switch (s) {
            case "referenceHidden":
                {
                    const a = await r.detectOverflow(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , i = Yc(a, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: i,
                            referenceHidden: Jc(i)
                        }
                    }
                }
            case "escaped":
                {
                    const a = await r.detectOverflow(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , i = Yc(a, n.floating);
                    return {
                        data: {
                            escapedOffsets: i,
                            escaped: Jc(i)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , Qf = new Set(["left", "top"]);
async function l1(e, t) {
    const {placement: n, platform: r, elements: s} = e
      , o = await (r.isRTL == null ? void 0 : r.isRTL(s.floating))
      , a = cn(n)
      , i = Sr(n)
      , l = qt(n) === "y"
      , u = Qf.has(a) ? -1 : 1
      , c = o && l ? -1 : 1
      , d = ln(t, e);
    let {mainAxis: f, crossAxis: p, alignmentAxis: h} = typeof d == "number" ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis
    };
    return i && typeof h == "number" && (p = i === "end" ? h * -1 : h),
    l ? {
        x: p * c,
        y: f * u
    } : {
        x: f * u,
        y: p * c
    }
}
const c1 = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: s, y: o, placement: a, middlewareData: i} = t
              , l = await l1(t, e);
            return a === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
                x: s + l.x,
                y: o + l.y,
                data: {
                    ...l,
                    placement: a
                }
            }
        }
    }
}
  , u1 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: s, platform: o} = t
              , {mainAxis: a=!0, crossAxis: i=!1, limiter: l={
                fn: b => {
                    let {x: y, y: v} = b;
                    return {
                        x: y,
                        y: v
                    }
                }
            }, ...u} = ln(e, t)
              , c = {
                x: n,
                y: r
            }
              , d = await o.detectOverflow(t, u)
              , f = qt(cn(s))
              , p = rl(f);
            let h = c[p]
              , g = c[f];
            if (a) {
                const b = p === "y" ? "top" : "left"
                  , y = p === "y" ? "bottom" : "right"
                  , v = h + d[b]
                  , k = h - d[y];
                h = si(v, h, k)
            }
            if (i) {
                const b = f === "y" ? "top" : "left"
                  , y = f === "y" ? "bottom" : "right"
                  , v = g + d[b]
                  , k = g - d[y];
                g = si(v, g, k)
            }
            const m = l.fn({
                ...t,
                [p]: h,
                [f]: g
            });
            return {
                ...m,
                data: {
                    x: m.x - n,
                    y: m.y - r,
                    enabled: {
                        [p]: a,
                        [f]: i
                    }
                }
            }
        }
    }
}
  , d1 = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: s, rects: o, middlewareData: a} = t
              , {offset: i=0, mainAxis: l=!0, crossAxis: u=!0} = ln(e, t)
              , c = {
                x: n,
                y: r
            }
              , d = qt(s)
              , f = rl(d);
            let p = c[f]
              , h = c[d];
            const g = ln(i, t)
              , m = typeof g == "number" ? {
                mainAxis: g,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...g
            };
            if (l) {
                const v = f === "y" ? "height" : "width"
                  , k = o.reference[f] - o.floating[v] + m.mainAxis
                  , _ = o.reference[f] + o.reference[v] - m.mainAxis;
                p < k ? p = k : p > _ && (p = _)
            }
            if (u) {
                var b, y;
                const v = f === "y" ? "width" : "height"
                  , k = Qf.has(cn(s))
                  , _ = o.reference[d] - o.floating[v] + (k && ((b = a.offset) == null ? void 0 : b[d]) || 0) + (k ? 0 : m.crossAxis)
                  , $ = o.reference[d] + o.reference[v] + (k ? 0 : ((y = a.offset) == null ? void 0 : y[d]) || 0) - (k ? m.crossAxis : 0);
                h < _ ? h = _ : h > $ && (h = $)
            }
            return {
                [f]: p,
                [d]: h
            }
        }
    }
}
  , f1 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: s, rects: o, platform: a, elements: i} = t
              , {apply: l= () => {}
            , ...u} = ln(e, t)
              , c = await a.detectOverflow(t, u)
              , d = cn(s)
              , f = Sr(s)
              , p = qt(s) === "y"
              , {width: h, height: g} = o.floating;
            let m, b;
            d === "top" || d === "bottom" ? (m = d,
            b = f === (await (a.isRTL == null ? void 0 : a.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (b = d,
            m = f === "end" ? "top" : "bottom");
            const y = g - c.top - c.bottom
              , v = h - c.left - c.right
              , k = kn(g - c[m], y)
              , _ = kn(h - c[b], v)
              , $ = !t.middlewareData.shift;
            let A = k
              , S = _;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (S = v),
            (r = t.middlewareData.shift) != null && r.enabled.y && (A = y),
            $ && !f) {
                const U = ht(c.left, 0)
                  , ee = ht(c.right, 0)
                  , M = ht(c.top, 0)
                  , q = ht(c.bottom, 0);
                p ? S = h - 2 * (U !== 0 || ee !== 0 ? U + ee : ht(c.left, c.right)) : A = g - 2 * (M !== 0 || q !== 0 ? M + q : ht(c.top, c.bottom))
            }
            await l({
                ...t,
                availableWidth: S,
                availableHeight: A
            });
            const P = await a.getDimensions(i.floating);
            return h !== P.width || g !== P.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function No() {
    return typeof window < "u"
}
function Kn(e) {
    return al(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function mt(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Vt(e) {
    var t;
    return (t = (al(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function al(e) {
    return No() ? e instanceof Node || e instanceof mt(e).Node : !1
}
function Ot(e) {
    return No() ? e instanceof Element || e instanceof mt(e).Element : !1
}
function fn(e) {
    return No() ? e instanceof HTMLElement || e instanceof mt(e).HTMLElement : !1
}
function Qc(e) {
    return !No() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof mt(e).ShadowRoot
}
function ms(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: s} = Dt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && s !== "inline" && s !== "contents"
}
function h1(e) {
    return /^(table|td|th)$/.test(Kn(e))
}
function Ho(e) {
    try {
        if (e.matches(":popover-open"))
            return !0
    } catch {}
    try {
        return e.matches(":modal")
    } catch {
        return !1
    }
}
const p1 = /transform|translate|scale|rotate|perspective|filter/
  , g1 = /paint|layout|strict|content/
  , En = e => !!e && e !== "none";
let ka;
function il(e) {
    const t = Ot(e) ? Dt(e) : e;
    return En(t.transform) || En(t.translate) || En(t.scale) || En(t.rotate) || En(t.perspective) || !ll() && (En(t.backdropFilter) || En(t.filter)) || p1.test(t.willChange || "") || g1.test(t.contain || "")
}
function m1(e) {
    let t = _n(e);
    for (; fn(t) && !br(t); ) {
        if (il(t))
            return t;
        if (Ho(t))
            return null;
        t = _n(t)
    }
    return null
}
function ll() {
    return ka == null && (ka = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")),
    ka
}
function br(e) {
    return /^(html|body|#document)$/.test(Kn(e))
}
function Dt(e) {
    return mt(e).getComputedStyle(e)
}
function jo(e) {
    return Ot(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function _n(e) {
    if (Kn(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || Qc(e) && e.host || Vt(e);
    return Qc(t) ? t.host : t
}
function Zf(e) {
    const t = _n(e);
    return br(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : fn(t) && ms(t) ? t : Zf(t)
}
function is(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const s = Zf(e)
      , o = s === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , a = mt(s);
    if (o) {
        const i = ai(a);
        return t.concat(a, a.visualViewport || [], ms(s) ? s : [], i && n ? is(i) : [])
    } else
        return t.concat(s, is(s, [], n))
}
function ai(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function Xf(e) {
    const t = Dt(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const s = fn(e)
      , o = s ? e.offsetWidth : n
      , a = s ? e.offsetHeight : r
      , i = lo(n) !== o || lo(r) !== a;
    return i && (n = o,
    r = a),
    {
        width: n,
        height: r,
        $: i
    }
}
function cl(e) {
    return Ot(e) ? e : e.contextElement
}
function pr(e) {
    const t = cl(e);
    if (!fn(t))
        return Lt(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: s, $: o} = Xf(t);
    let a = (o ? lo(n.width) : n.width) / r
      , i = (o ? lo(n.height) : n.height) / s;
    return (!a || !Number.isFinite(a)) && (a = 1),
    (!i || !Number.isFinite(i)) && (i = 1),
    {
        x: a,
        y: i
    }
}
const y1 = Lt(0);
function eh(e) {
    const t = mt(e);
    return !ll() || !t.visualViewport ? y1 : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function v1(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== mt(e) ? !1 : t
}
function zn(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const s = e.getBoundingClientRect()
      , o = cl(e);
    let a = Lt(1);
    t && (r ? Ot(r) && (a = pr(r)) : a = pr(e));
    const i = v1(o, n, r) ? eh(o) : Lt(0);
    let l = (s.left + i.x) / a.x
      , u = (s.top + i.y) / a.y
      , c = s.width / a.x
      , d = s.height / a.y;
    if (o) {
        const f = mt(o)
          , p = r && Ot(r) ? mt(r) : r;
        let h = f
          , g = ai(h);
        for (; g && r && p !== h; ) {
            const m = pr(g)
              , b = g.getBoundingClientRect()
              , y = Dt(g)
              , v = b.left + (g.clientLeft + parseFloat(y.paddingLeft)) * m.x
              , k = b.top + (g.clientTop + parseFloat(y.paddingTop)) * m.y;
            l *= m.x,
            u *= m.y,
            c *= m.x,
            d *= m.y,
            l += v,
            u += k,
            h = mt(g),
            g = ai(h)
        }
    }
    return uo({
        width: c,
        height: d,
        x: l,
        y: u
    })
}
function Vo(e, t) {
    const n = jo(e).scrollLeft;
    return t ? t.left + n : zn(Vt(e)).left + n
}
function th(e, t) {
    const n = e.getBoundingClientRect()
      , r = n.left + t.scrollLeft - Vo(e, n)
      , s = n.top + t.scrollTop;
    return {
        x: r,
        y: s
    }
}
function b1(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: s} = e;
    const o = s === "fixed"
      , a = Vt(r)
      , i = t ? Ho(t.floating) : !1;
    if (r === a || i && o)
        return n;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = Lt(1);
    const c = Lt(0)
      , d = fn(r);
    if ((d || !d && !o) && ((Kn(r) !== "body" || ms(a)) && (l = jo(r)),
    d)) {
        const p = zn(r);
        u = pr(r),
        c.x = p.x + r.clientLeft,
        c.y = p.y + r.clientTop
    }
    const f = a && !d && !o ? th(a, l) : Lt(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
        y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
    }
}
function w1(e) {
    return Array.from(e.getClientRects())
}
function x1(e) {
    const t = Vt(e)
      , n = jo(e)
      , r = e.ownerDocument.body
      , s = ht(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , o = ht(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let a = -n.scrollLeft + Vo(e);
    const i = -n.scrollTop;
    return Dt(r).direction === "rtl" && (a += ht(t.clientWidth, r.clientWidth) - s),
    {
        width: s,
        height: o,
        x: a,
        y: i
    }
}
const Zc = 25;
function k1(e, t) {
    const n = mt(e)
      , r = Vt(e)
      , s = n.visualViewport;
    let o = r.clientWidth
      , a = r.clientHeight
      , i = 0
      , l = 0;
    if (s) {
        o = s.width,
        a = s.height;
        const c = ll();
        (!c || c && t === "fixed") && (i = s.offsetLeft,
        l = s.offsetTop)
    }
    const u = Vo(r);
    if (u <= 0) {
        const c = r.ownerDocument
          , d = c.body
          , f = getComputedStyle(d)
          , p = c.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0
          , h = Math.abs(r.clientWidth - d.clientWidth - p);
        h <= Zc && (o -= h)
    } else
        u <= Zc && (o += u);
    return {
        width: o,
        height: a,
        x: i,
        y: l
    }
}
function _1(e, t) {
    const n = zn(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , s = n.left + e.clientLeft
      , o = fn(e) ? pr(e) : Lt(1)
      , a = e.clientWidth * o.x
      , i = e.clientHeight * o.y
      , l = s * o.x
      , u = r * o.y;
    return {
        width: a,
        height: i,
        x: l,
        y: u
    }
}
function Xc(e, t, n) {
    let r;
    if (t === "viewport")
        r = k1(e, n);
    else if (t === "document")
        r = x1(Vt(e));
    else if (Ot(t))
        r = _1(t, n);
    else {
        const s = eh(e);
        r = {
            x: t.x - s.x,
            y: t.y - s.y,
            width: t.width,
            height: t.height
        }
    }
    return uo(r)
}
function nh(e, t) {
    const n = _n(e);
    return n === t || !Ot(n) || br(n) ? !1 : Dt(n).position === "fixed" || nh(n, t)
}
function C1(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = is(e, [], !1).filter(i => Ot(i) && Kn(i) !== "body")
      , s = null;
    const o = Dt(e).position === "fixed";
    let a = o ? _n(e) : e;
    for (; Ot(a) && !br(a); ) {
        const i = Dt(a)
          , l = il(a);
        !l && i.position === "fixed" && (s = null),
        (o ? !l && !s : !l && i.position === "static" && !!s && (s.position === "absolute" || s.position === "fixed") || ms(a) && !l && nh(e, a)) ? r = r.filter(c => c !== a) : s = i,
        a = _n(a)
    }
    return t.set(e, r),
    r
}
function S1(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: s} = e;
    const a = [...n === "clippingAncestors" ? Ho(t) ? [] : C1(t, this._c) : [].concat(n), r]
      , i = Xc(t, a[0], s);
    let l = i.top
      , u = i.right
      , c = i.bottom
      , d = i.left;
    for (let f = 1; f < a.length; f++) {
        const p = Xc(t, a[f], s);
        l = ht(p.top, l),
        u = kn(p.right, u),
        c = kn(p.bottom, c),
        d = ht(p.left, d)
    }
    return {
        width: u - d,
        height: c - l,
        x: d,
        y: l
    }
}
function $1(e) {
    const {width: t, height: n} = Xf(e);
    return {
        width: t,
        height: n
    }
}
function A1(e, t, n) {
    const r = fn(t)
      , s = Vt(t)
      , o = n === "fixed"
      , a = zn(e, !0, o, t);
    let i = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = Lt(0);
    function u() {
        l.x = Vo(s)
    }
    if (r || !r && !o)
        if ((Kn(t) !== "body" || ms(s)) && (i = jo(t)),
        r) {
            const p = zn(t, !0, o, t);
            l.x = p.x + t.clientLeft,
            l.y = p.y + t.clientTop
        } else
            s && u();
    o && !r && s && u();
    const c = s && !r && !o ? th(s, i) : Lt(0)
      , d = a.left + i.scrollLeft - l.x - c.x
      , f = a.top + i.scrollTop - l.y - c.y;
    return {
        x: d,
        y: f,
        width: a.width,
        height: a.height
    }
}
function _a(e) {
    return Dt(e).position === "static"
}
function eu(e, t) {
    if (!fn(e) || Dt(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return Vt(e) === n && (n = n.ownerDocument.body),
    n
}
function rh(e, t) {
    const n = mt(e);
    if (Ho(e))
        return n;
    if (!fn(e)) {
        let s = _n(e);
        for (; s && !br(s); ) {
            if (Ot(s) && !_a(s))
                return s;
            s = _n(s)
        }
        return n
    }
    let r = eu(e, t);
    for (; r && h1(r) && _a(r); )
        r = eu(r, t);
    return r && br(r) && _a(r) && !il(r) ? n : r || m1(e) || n
}
const O1 = async function(e) {
    const t = this.getOffsetParent || rh
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: A1(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function D1(e) {
    return Dt(e).direction === "rtl"
}
const E1 = {
    convertOffsetParentRelativeRectToViewportRelativeRect: b1,
    getDocumentElement: Vt,
    getClippingRect: S1,
    getOffsetParent: rh,
    getElementRects: O1,
    getClientRects: w1,
    getDimensions: $1,
    getScale: pr,
    isElement: Ot,
    isRTL: D1
};
function sh(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function P1(e, t) {
    let n = null, r;
    const s = Vt(e);
    function o() {
        var i;
        clearTimeout(r),
        (i = n) == null || i.disconnect(),
        n = null
    }
    function a(i, l) {
        i === void 0 && (i = !1),
        l === void 0 && (l = 1),
        o();
        const u = e.getBoundingClientRect()
          , {left: c, top: d, width: f, height: p} = u;
        if (i || t(),
        !f || !p)
            return;
        const h = Ds(d)
          , g = Ds(s.clientWidth - (c + f))
          , m = Ds(s.clientHeight - (d + p))
          , b = Ds(c)
          , v = {
            rootMargin: -h + "px " + -g + "px " + -m + "px " + -b + "px",
            threshold: ht(0, kn(1, l)) || 1
        };
        let k = !0;
        function _($) {
            const A = $[0].intersectionRatio;
            if (A !== l) {
                if (!k)
                    return a();
                A ? a(!1, A) : r = setTimeout( () => {
                    a(!1, 1e-7)
                }
                , 1e3)
            }
            A === 1 && !sh(u, e.getBoundingClientRect()) && a(),
            k = !1
        }
        try {
            n = new IntersectionObserver(_,{
                ...v,
                root: s.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(_,v)
        }
        n.observe(e)
    }
    return a(!0),
    o
}
function M1(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: s=!0, ancestorResize: o=!0, elementResize: a=typeof ResizeObserver == "function", layoutShift: i=typeof IntersectionObserver == "function", animationFrame: l=!1} = r
      , u = cl(e)
      , c = s || o ? [...u ? is(u) : [], ...t ? is(t) : []] : [];
    c.forEach(b => {
        s && b.addEventListener("scroll", n, {
            passive: !0
        }),
        o && b.addEventListener("resize", n)
    }
    );
    const d = u && i ? P1(u, n) : null;
    let f = -1
      , p = null;
    a && (p = new ResizeObserver(b => {
        let[y] = b;
        y && y.target === u && p && t && (p.unobserve(t),
        cancelAnimationFrame(f),
        f = requestAnimationFrame( () => {
            var v;
            (v = p) == null || v.observe(t)
        }
        )),
        n()
    }
    ),
    u && !l && p.observe(u),
    t && p.observe(t));
    let h, g = l ? zn(e) : null;
    l && m();
    function m() {
        const b = zn(e);
        g && !sh(g, b) && n(),
        g = b,
        h = requestAnimationFrame(m)
    }
    return n(),
    () => {
        var b;
        c.forEach(y => {
            s && y.removeEventListener("scroll", n),
            o && y.removeEventListener("resize", n)
        }
        ),
        d == null || d(),
        (b = p) == null || b.disconnect(),
        p = null,
        l && cancelAnimationFrame(h)
    }
}
const T1 = c1
  , R1 = u1
  , tu = a1
  , I1 = f1
  , q1 = i1
  , F1 = o1
  , L1 = d1
  , B1 = (e, t, n) => {
    const r = new Map
      , s = {
        platform: E1,
        ...n
    }
      , o = {
        ...s.platform,
        _c: r
    };
    return s1(e, t, {
        ...s,
        platform: o
    })
}
;
function N1(e) {
    return e != null && typeof e == "object" && "$el"in e
}
function ii(e) {
    if (N1(e)) {
        const t = e.$el;
        return al(t) && Kn(t) === "#comment" ? null : t
    }
    return e
}
function or(e) {
    return typeof e == "function" ? e() : x(e)
}
function H1(e) {
    return {
        name: "arrow",
        options: e,
        fn(t) {
            const n = ii(or(e.element));
            return n == null ? {} : F1({
                element: n,
                padding: e.padding
            }).fn(t)
        }
    }
}
function oh(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function nu(e, t) {
    const n = oh(e);
    return Math.round(t * n) / n
}
function j1(e, t, n) {
    n === void 0 && (n = {});
    const r = n.whileElementsMounted
      , s = O( () => {
        var A;
        return (A = or(n.open)) != null ? A : !0
    }
    )
      , o = O( () => or(n.middleware))
      , a = O( () => {
        var A;
        return (A = or(n.placement)) != null ? A : "bottom"
    }
    )
      , i = O( () => {
        var A;
        return (A = or(n.strategy)) != null ? A : "absolute"
    }
    )
      , l = O( () => {
        var A;
        return (A = or(n.transform)) != null ? A : !0
    }
    )
      , u = O( () => ii(e.value))
      , c = O( () => ii(t.value))
      , d = Q(0)
      , f = Q(0)
      , p = Q(i.value)
      , h = Q(a.value)
      , g = rn({})
      , m = Q(!1)
      , b = O( () => {
        const A = {
            position: p.value,
            left: "0",
            top: "0"
        };
        if (!c.value)
            return A;
        const S = nu(c.value, d.value)
          , P = nu(c.value, f.value);
        return l.value ? {
            ...A,
            transform: "translate(" + S + "px, " + P + "px)",
            ...oh(c.value) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: p.value,
            left: S + "px",
            top: P + "px"
        }
    }
    );
    let y;
    function v() {
        if (u.value == null || c.value == null)
            return;
        const A = s.value;
        B1(u.value, c.value, {
            middleware: o.value,
            placement: a.value,
            strategy: i.value
        }).then(S => {
            d.value = S.x,
            f.value = S.y,
            p.value = S.strategy,
            h.value = S.placement,
            g.value = S.middlewareData,
            m.value = A !== !1
        }
        )
    }
    function k() {
        typeof y == "function" && (y(),
        y = void 0)
    }
    function _() {
        if (k(),
        r === void 0) {
            v();
            return
        }
        if (u.value != null && c.value != null) {
            y = r(u.value, c.value, v);
            return
        }
    }
    function $() {
        s.value || (m.value = !1)
    }
    return Oe([o, a, i, s], v, {
        flush: "sync"
    }),
    Oe([u, c], _, {
        flush: "sync"
    }),
    Oe(s, $, {
        flush: "sync"
    }),
    Co() && Ai(k),
    {
        x: Xn(d),
        y: Xn(f),
        strategy: Xn(p),
        placement: Xn(h),
        middlewareData: Xn(g),
        isPositioned: Xn(m),
        floatingStyles: b,
        update: v
    }
}
const V1 = {
    side: "bottom",
    sideOffset: 0,
    sideFlip: !0,
    align: "center",
    alignOffset: 0,
    alignFlip: !0,
    arrowPadding: 0,
    avoidCollisions: !0,
    collisionBoundary: () => [],
    collisionPadding: 0,
    sticky: "partial",
    hideWhenDetached: !1,
    positionStrategy: "fixed",
    updatePositionStrategy: "optimized",
    prioritizePosition: !1
}
  , [W1,z1] = Gn("PopperContent");
var U1 = se({
    inheritAttrs: !1,
    __name: "PopperContent",
    props: Xp({
        side: {
            type: null,
            required: !1
        },
        sideOffset: {
            type: Number,
            required: !1
        },
        sideFlip: {
            type: Boolean,
            required: !1
        },
        align: {
            type: null,
            required: !1
        },
        alignOffset: {
            type: Number,
            required: !1
        },
        alignFlip: {
            type: Boolean,
            required: !1
        },
        avoidCollisions: {
            type: Boolean,
            required: !1
        },
        collisionBoundary: {
            type: null,
            required: !1
        },
        collisionPadding: {
            type: [Number, Object],
            required: !1
        },
        arrowPadding: {
            type: Number,
            required: !1
        },
        sticky: {
            type: String,
            required: !1
        },
        hideWhenDetached: {
            type: Boolean,
            required: !1
        },
        positionStrategy: {
            type: String,
            required: !1
        },
        updatePositionStrategy: {
            type: String,
            required: !1
        },
        disableUpdateOnLayoutShift: {
            type: Boolean,
            required: !1
        },
        prioritizePosition: {
            type: Boolean,
            required: !1
        },
        reference: {
            type: null,
            required: !1
        },
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1
        }
    }, {
        ...V1
    }),
    emits: ["placed"],
    setup(e, {emit: t}) {
        const n = e
          , r = t
          , s = Kf()
          , {forwardRef: o, currentElement: a} = Ue()
          , i = Q()
          , l = Q()
          , {width: u, height: c} = H0(l)
          , d = O( () => n.side + (n.align !== "center" ? `-${n.align}` : ""))
          , f = O( () => typeof n.collisionPadding == "number" ? n.collisionPadding : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...n.collisionPadding
        })
          , p = O( () => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary])
          , h = O( () => ({
            padding: f.value,
            boundary: p.value.filter(zb),
            altBoundary: p.value.length > 0
        }))
          , g = O( () => ({
            mainAxis: n.sideFlip,
            crossAxis: n.alignFlip
        }))
          , m = Qy( () => [T1({
            mainAxis: n.sideOffset + c.value,
            alignmentAxis: n.alignOffset
        }), n.prioritizePosition && n.avoidCollisions && tu({
            ...h.value,
            ...g.value
        }), n.avoidCollisions && R1({
            mainAxis: !0,
            crossAxis: !!n.prioritizePosition,
            limiter: n.sticky === "partial" ? L1() : void 0,
            ...h.value
        }), !n.prioritizePosition && n.avoidCollisions && tu({
            ...h.value,
            ...g.value
        }), I1({
            ...h.value,
            apply: ({elements: M, rects: q, availableWidth: D, availableHeight: N}) => {
                const {width: R, height: H} = q.reference
                  , j = M.floating.style;
                j.setProperty("--reka-popper-available-width", `${D}px`),
                j.setProperty("--reka-popper-available-height", `${N}px`),
                j.setProperty("--reka-popper-anchor-width", `${R}px`),
                j.setProperty("--reka-popper-anchor-height", `${H}px`)
            }
        }), l.value && H1({
            element: l.value,
            padding: n.arrowPadding
        }), Ub({
            arrowWidth: u.value,
            arrowHeight: c.value
        }), n.hideWhenDetached && q1({
            strategy: "referenceHidden",
            ...h.value
        })])
          , b = O( () => n.reference ?? s.anchor.value)
          , {floatingStyles: y, placement: v, isPositioned: k, middlewareData: _} = j1(b, i, {
            strategy: n.positionStrategy,
            placement: d,
            whileElementsMounted: (...M) => M1(...M, {
                layoutShift: !n.disableUpdateOnLayoutShift,
                animationFrame: n.updatePositionStrategy === "always"
            }),
            middleware: m
        })
          , $ = O( () => ri(v.value)[0])
          , A = O( () => ri(v.value)[1]);
        ad( () => {
            k.value && r("placed")
        }
        );
        const S = O( () => {
            var M;
            return ((M = _.value.arrow) == null ? void 0 : M.centerOffset) !== 0
        }
        )
          , P = Q("");
        ct( () => {
            a.value && (P.value = window.getComputedStyle(a.value).zIndex)
        }
        );
        const U = O( () => {
            var M;
            return ((M = _.value.arrow) == null ? void 0 : M.x) ?? 0
        }
        )
          , ee = O( () => {
            var M;
            return ((M = _.value.arrow) == null ? void 0 : M.y) ?? 0
        }
        );
        return z1({
            placedSide: $,
            onArrowChange: M => l.value = M,
            arrowX: U,
            arrowY: ee,
            shouldHideArrow: S
        }),
        (M, q) => {
            var D, N, R;
            return T(),
            ke("div", {
                ref_key: "floatingRef",
                ref: i,
                "data-reka-popper-content-wrapper": "",
                style: _t({
                    ...x(y),
                    transform: x(k) ? x(y).transform : "translate(0, -200%)",
                    minWidth: "max-content",
                    zIndex: P.value,
                    "--reka-popper-transform-origin": [(D = x(_).transformOrigin) == null ? void 0 : D.x, (N = x(_).transformOrigin) == null ? void 0 : N.y].join(" "),
                    ...((R = x(_).hide) == null ? void 0 : R.referenceHidden) && {
                        visibility: "hidden",
                        pointerEvents: "none"
                    }
                })
            }, [he(x(ye), me({
                ref: x(o)
            }, M.$attrs, {
                "as-child": n.asChild,
                as: M.as,
                "data-side": $.value,
                "data-align": A.value,
                style: {
                    animation: x(k) ? void 0 : "none"
                }
            }), {
                default: V( () => [te(M.$slots, "default")]),
                _: 3
            }, 16, ["as-child", "as", "data-side", "data-align", "style"])], 4)
        }
    }
})
  , ah = U1;
const G1 = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
};
var K1 = se({
    inheritAttrs: !1,
    __name: "PopperArrow",
    props: {
        width: {
            type: Number,
            required: !1
        },
        height: {
            type: Number,
            required: !1
        },
        rounded: {
            type: Boolean,
            required: !1
        },
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: "svg"
        }
    },
    setup(e) {
        const {forwardRef: t} = Ue()
          , n = W1()
          , r = O( () => G1[n.placedSide.value]);
        return (s, o) => {
            var a, i, l, u;
            return T(),
            ke("span", {
                ref: c => {
                    x(n).onArrowChange(c)
                }
                ,
                style: _t({
                    position: "absolute",
                    left: (a = x(n).arrowX) != null && a.value ? `${(i = x(n).arrowX) == null ? void 0 : i.value}px` : void 0,
                    top: (l = x(n).arrowY) != null && l.value ? `${(u = x(n).arrowY) == null ? void 0 : u.value}px` : void 0,
                    [r.value]: 0,
                    transformOrigin: {
                        top: "",
                        right: "0 0",
                        bottom: "center 0",
                        left: "100% 0"
                    }[x(n).placedSide.value],
                    transform: {
                        top: "translateY(100%)",
                        right: "translateY(50%) rotate(90deg) translateX(-50%)",
                        bottom: "rotate(180deg)",
                        left: "translateY(50%) rotate(-90deg) translateX(50%)"
                    }[x(n).placedSide.value],
                    visibility: x(n).shouldHideArrow.value ? "hidden" : void 0
                })
            }, [he(Wb, me(s.$attrs, {
                ref: x(t),
                style: {
                    display: "block"
                },
                as: s.as,
                "as-child": s.asChild,
                rounded: s.rounded,
                width: s.width,
                height: s.height
            }), {
                default: V( () => [te(s.$slots, "default")]),
                _: 3
            }, 16, ["as", "as-child", "rounded", "width", "height"])], 4)
        }
    }
})
  , ih = K1;
const [Yn,Y1] = Gn("PopoverRoot");
var J1 = se({
    __name: "PopoverRoot",
    props: {
        defaultOpen: {
            type: Boolean,
            required: !1,
            default: !1
        },
        open: {
            type: Boolean,
            required: !1,
            default: void 0
        },
        modal: {
            type: Boolean,
            required: !1,
            default: !1
        }
    },
    emits: ["update:open"],
    setup(e, {emit: t}) {
        const n = e
          , r = t
          , {modal: s} = Bt(n)
          , o = mr(n, "open", r, {
            defaultValue: n.defaultOpen,
            passive: n.open === void 0
        });
        return Y1({
            contentId: "",
            triggerId: "",
            modal: s,
            open: o,
            onOpenChange: l => {
                o.value = l
            }
            ,
            onOpenToggle: () => {
                o.value = !o.value
            }
            ,
            triggerElement: Q(),
            hasCustomAnchor: Q(!1)
        }),
        (l, u) => (T(),
        Y(x(Yf), null, {
            default: V( () => [te(l.$slots, "default", {
                open: x(o),
                close: () => o.value = !1
            })]),
            _: 3
        }))
    }
})
  , Q1 = J1
  , Z1 = se({
    __name: "PopoverAnchor",
    props: {
        reference: {
            type: null,
            required: !1
        },
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1
        }
    },
    setup(e) {
        const t = e;
        Ue();
        const n = Yn();
        return pd( () => {
            n.hasCustomAnchor.value = !0
        }
        ),
        Un( () => {
            n.hasCustomAnchor.value = !1
        }
        ),
        (r, s) => (T(),
        Y(x(nl), He(Je(t)), {
            default: V( () => [te(r.$slots, "default")]),
            _: 3
        }, 16))
    }
})
  , X1 = Z1
  , ew = se({
    __name: "PopoverArrow",
    props: {
        width: {
            type: Number,
            required: !1,
            default: 10
        },
        height: {
            type: Number,
            required: !1,
            default: 5
        },
        rounded: {
            type: Boolean,
            required: !1
        },
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: "svg"
        }
    },
    setup(e) {
        const t = e;
        return Ue(),
        (n, r) => (T(),
        Y(x(ih), He(Je(t)), {
            default: V( () => [te(n.$slots, "default")]),
            _: 3
        }, 16))
    }
})
  , tw = ew
  , nw = se({
    __name: "PopoverClose",
    props: {
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: "button"
        }
    },
    setup(e) {
        const t = e;
        Ue();
        const n = Yn();
        return (r, s) => (T(),
        Y(x(ye), {
            type: r.as === "button" ? "button" : void 0,
            as: r.as,
            "as-child": t.asChild,
            onClick: s[0] || (s[0] = o => x(n).onOpenChange(!1))
        }, {
            default: V( () => [te(r.$slots, "default")]),
            _: 3
        }, 8, ["type", "as", "as-child"]))
    }
})
  , rw = nw
  , sw = se({
    __name: "PopoverContentImpl",
    props: {
        trapFocus: {
            type: Boolean,
            required: !1
        },
        side: {
            type: null,
            required: !1
        },
        sideOffset: {
            type: Number,
            required: !1
        },
        sideFlip: {
            type: Boolean,
            required: !1
        },
        align: {
            type: null,
            required: !1
        },
        alignOffset: {
            type: Number,
            required: !1
        },
        alignFlip: {
            type: Boolean,
            required: !1
        },
        avoidCollisions: {
            type: Boolean,
            required: !1
        },
        collisionBoundary: {
            type: null,
            required: !1
        },
        collisionPadding: {
            type: [Number, Object],
            required: !1
        },
        arrowPadding: {
            type: Number,
            required: !1
        },
        sticky: {
            type: String,
            required: !1
        },
        hideWhenDetached: {
            type: Boolean,
            required: !1
        },
        positionStrategy: {
            type: String,
            required: !1
        },
        updatePositionStrategy: {
            type: String,
            required: !1
        },
        disableUpdateOnLayoutShift: {
            type: Boolean,
            required: !1
        },
        prioritizePosition: {
            type: Boolean,
            required: !1
        },
        reference: {
            type: null,
            required: !1
        },
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1
        },
        disableOutsidePointerEvents: {
            type: Boolean,
            required: !1
        }
    },
    emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
    setup(e, {emit: t}) {
        const n = e
          , r = t
          , s = gs(rv(n, "trapFocus", "disableOutsidePointerEvents"))
          , {forwardRef: o} = Ue()
          , a = Yn();
        return O0(),
        (i, l) => (T(),
        Y(x(sb), {
            "as-child": "",
            loop: "",
            trapped: i.trapFocus,
            onMountAutoFocus: l[5] || (l[5] = u => r("openAutoFocus", u)),
            onUnmountAutoFocus: l[6] || (l[6] = u => r("closeAutoFocus", u))
        }, {
            default: V( () => [he(x(Wf), {
                "as-child": "",
                "disable-outside-pointer-events": i.disableOutsidePointerEvents,
                onPointerDownOutside: l[0] || (l[0] = u => r("pointerDownOutside", u)),
                onInteractOutside: l[1] || (l[1] = u => r("interactOutside", u)),
                onEscapeKeyDown: l[2] || (l[2] = u => r("escapeKeyDown", u)),
                onFocusOutside: l[3] || (l[3] = u => r("focusOutside", u)),
                onDismiss: l[4] || (l[4] = u => x(a).onOpenChange(!1))
            }, {
                default: V( () => [he(x(ah), me(x(s), {
                    id: x(a).contentId,
                    ref: x(o),
                    "data-state": x(a).open.value ? "open" : "closed",
                    "aria-labelledby": x(a).triggerId,
                    style: {
                        "--reka-popover-content-transform-origin": "var(--reka-popper-transform-origin)",
                        "--reka-popover-content-available-width": "var(--reka-popper-available-width)",
                        "--reka-popover-content-available-height": "var(--reka-popper-available-height)",
                        "--reka-popover-trigger-width": "var(--reka-popper-anchor-width)",
                        "--reka-popover-trigger-height": "var(--reka-popper-anchor-height)"
                    },
                    role: "dialog"
                }), {
                    default: V( () => [te(i.$slots, "default")]),
                    _: 3
                }, 16, ["id", "data-state", "aria-labelledby"])]),
                _: 3
            }, 8, ["disable-outside-pointer-events"])]),
            _: 3
        }, 8, ["trapped"]))
    }
})
  , lh = sw
  , ow = se({
    __name: "PopoverContentModal",
    props: {
        side: {
            type: null,
            required: !1
        },
        sideOffset: {
            type: Number,
            required: !1
        },
        sideFlip: {
            type: Boolean,
            required: !1
        },
        align: {
            type: null,
            required: !1
        },
        alignOffset: {
            type: Number,
            required: !1
        },
        alignFlip: {
            type: Boolean,
            required: !1
        },
        avoidCollisions: {
            type: Boolean,
            required: !1
        },
        collisionBoundary: {
            type: null,
            required: !1
        },
        collisionPadding: {
            type: [Number, Object],
            required: !1
        },
        arrowPadding: {
            type: Number,
            required: !1
        },
        sticky: {
            type: String,
            required: !1
        },
        hideWhenDetached: {
            type: Boolean,
            required: !1
        },
        positionStrategy: {
            type: String,
            required: !1
        },
        updatePositionStrategy: {
            type: String,
            required: !1
        },
        disableUpdateOnLayoutShift: {
            type: Boolean,
            required: !1
        },
        prioritizePosition: {
            type: Boolean,
            required: !1
        },
        reference: {
            type: null,
            required: !1
        },
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1
        },
        disableOutsidePointerEvents: {
            type: Boolean,
            required: !1
        }
    },
    emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
    setup(e, {emit: t}) {
        const n = e
          , r = t
          , s = Yn()
          , o = Q(!1);
        _v(!0);
        const a = _r(n, r)
          , {forwardRef: i, currentElement: l} = Ue();
        return N0(l),
        (u, c) => (T(),
        Y(lh, me(x(a), {
            ref: x(i),
            "trap-focus": x(s).open.value,
            "disable-outside-pointer-events": "",
            onCloseAutoFocus: c[0] || (c[0] = eo(d => {
                var f;
                r("closeAutoFocus", d),
                o.value || (f = x(s).triggerElement.value) == null || f.focus()
            }
            , ["prevent"])),
            onPointerDownOutside: c[1] || (c[1] = d => {
                r("pointerDownOutside", d);
                const f = d.detail.originalEvent
                  , p = f.button === 0 && f.ctrlKey === !0
                  , h = f.button === 2 || p;
                o.value = h
            }
            ),
            onFocusOutside: c[2] || (c[2] = eo( () => {}
            , ["prevent"]))
        }), {
            default: V( () => [te(u.$slots, "default")]),
            _: 3
        }, 16, ["trap-focus"]))
    }
})
  , aw = ow
  , iw = se({
    __name: "PopoverContentNonModal",
    props: {
        side: {
            type: null,
            required: !1
        },
        sideOffset: {
            type: Number,
            required: !1
        },
        sideFlip: {
            type: Boolean,
            required: !1
        },
        align: {
            type: null,
            required: !1
        },
        alignOffset: {
            type: Number,
            required: !1
        },
        alignFlip: {
            type: Boolean,
            required: !1
        },
        avoidCollisions: {
            type: Boolean,
            required: !1
        },
        collisionBoundary: {
            type: null,
            required: !1
        },
        collisionPadding: {
            type: [Number, Object],
            required: !1
        },
        arrowPadding: {
            type: Number,
            required: !1
        },
        sticky: {
            type: String,
            required: !1
        },
        hideWhenDetached: {
            type: Boolean,
            required: !1
        },
        positionStrategy: {
            type: String,
            required: !1
        },
        updatePositionStrategy: {
            type: String,
            required: !1
        },
        disableUpdateOnLayoutShift: {
            type: Boolean,
            required: !1
        },
        prioritizePosition: {
            type: Boolean,
            required: !1
        },
        reference: {
            type: null,
            required: !1
        },
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1
        },
        disableOutsidePointerEvents: {
            type: Boolean,
            required: !1
        }
    },
    emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
    setup(e, {emit: t}) {
        const n = e
          , r = t
          , s = Yn()
          , o = Q(!1)
          , a = Q(!1)
          , i = _r(n, r);
        return (l, u) => (T(),
        Y(lh, me(x(i), {
            "trap-focus": !1,
            "disable-outside-pointer-events": !1,
            onCloseAutoFocus: u[0] || (u[0] = c => {
                var d;
                r("closeAutoFocus", c),
                c.defaultPrevented || (o.value || (d = x(s).triggerElement.value) == null || d.focus(),
                c.preventDefault()),
                o.value = !1,
                a.value = !1
            }
            ),
            onInteractOutside: u[1] || (u[1] = async c => {
                var p;
                r("interactOutside", c),
                c.defaultPrevented || (o.value = !0,
                c.detail.originalEvent.type === "pointerdown" && (a.value = !0));
                const d = c.target;
                ((p = x(s).triggerElement.value) == null ? void 0 : p.contains(d)) && c.preventDefault(),
                c.detail.originalEvent.type === "focusin" && a.value && c.preventDefault()
            }
            )
        }), {
            default: V( () => [te(l.$slots, "default")]),
            _: 3
        }, 16))
    }
})
  , lw = iw
  , cw = se({
    __name: "PopoverContent",
    props: {
        forceMount: {
            type: Boolean,
            required: !1
        },
        side: {
            type: null,
            required: !1
        },
        sideOffset: {
            type: Number,
            required: !1
        },
        sideFlip: {
            type: Boolean,
            required: !1
        },
        align: {
            type: null,
            required: !1
        },
        alignOffset: {
            type: Number,
            required: !1
        },
        alignFlip: {
            type: Boolean,
            required: !1
        },
        avoidCollisions: {
            type: Boolean,
            required: !1
        },
        collisionBoundary: {
            type: null,
            required: !1
        },
        collisionPadding: {
            type: [Number, Object],
            required: !1
        },
        arrowPadding: {
            type: Number,
            required: !1
        },
        sticky: {
            type: String,
            required: !1
        },
        hideWhenDetached: {
            type: Boolean,
            required: !1
        },
        positionStrategy: {
            type: String,
            required: !1
        },
        updatePositionStrategy: {
            type: String,
            required: !1
        },
        disableUpdateOnLayoutShift: {
            type: Boolean,
            required: !1
        },
        prioritizePosition: {
            type: Boolean,
            required: !1
        },
        reference: {
            type: null,
            required: !1
        },
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1
        },
        disableOutsidePointerEvents: {
            type: Boolean,
            required: !1
        }
    },
    emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
    setup(e, {emit: t}) {
        const n = e
          , r = t
          , s = Yn()
          , o = _r(n, r)
          , {forwardRef: a} = Ue();
        return s.contentId || (s.contentId = Nf(void 0, "reka-popover-content")),
        (i, l) => (T(),
        Y(x(jf), {
            present: i.forceMount || x(s).open.value
        }, {
            default: V( () => [x(s).modal.value ? (T(),
            Y(aw, me({
                key: 0
            }, x(o), {
                ref: x(a)
            }), {
                default: V( () => [te(i.$slots, "default")]),
                _: 3
            }, 16)) : (T(),
            Y(lw, me({
                key: 1
            }, x(o), {
                ref: x(a)
            }), {
                default: V( () => [te(i.$slots, "default")]),
                _: 3
            }, 16))]),
            _: 3
        }, 8, ["present"]))
    }
})
  , uw = cw
  , dw = se({
    __name: "PopoverPortal",
    props: {
        to: {
            type: null,
            required: !1
        },
        disabled: {
            type: Boolean,
            required: !1
        },
        defer: {
            type: Boolean,
            required: !1
        },
        forceMount: {
            type: Boolean,
            required: !1
        }
    },
    setup(e) {
        const t = e;
        return (n, r) => (T(),
        Y(x(Uf), He(Je(t)), {
            default: V( () => [te(n.$slots, "default")]),
            _: 3
        }, 16))
    }
})
  , fw = dw
  , hw = se({
    __name: "PopoverTrigger",
    props: {
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: "button"
        }
    },
    setup(e) {
        const t = e
          , n = Yn()
          , {forwardRef: r, currentElement: s} = Ue();
        return n.triggerId || (n.triggerId = Nf(void 0, "reka-popover-trigger")),
        jt( () => {
            n.triggerElement.value = s.value
        }
        ),
        (o, a) => (T(),
        Y(Ma(x(n).hasCustomAnchor.value ? x(ye) : x(nl)), {
            "as-child": ""
        }, {
            default: V( () => [he(x(ye), {
                id: x(n).triggerId,
                ref: x(r),
                type: o.as === "button" ? "button" : void 0,
                "aria-haspopup": "dialog",
                "aria-expanded": x(n).open.value,
                "aria-controls": x(n).contentId,
                "data-state": x(n).open.value ? "open" : "closed",
                as: o.as,
                "as-child": t.asChild,
                onClick: x(n).onOpenToggle
            }, {
                default: V( () => [te(o.$slots, "default")]),
                _: 3
            }, 8, ["id", "type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])]),
            _: 3
        }))
    }
})
  , pw = hw;
function gw(e) {
    const t = O( () => e.start.value ? !!e.isDateDisabled(e.start.value) : !1)
      , n = O( () => e.end.value ? !!e.isDateDisabled(e.end.value) : !1)
      , r = O( () => t.value || n.value ? !1 : !!(e.start.value && e.end.value && Hn(e.end.value, e.start.value)))
      , s = f => e.start.value ? Ne(e.start.value, f) : !1
      , o = f => e.end.value ? Ne(e.end.value, f) : !1
      , a = f => e.start.value && Ne(e.start.value, f) || e.end.value && Ne(e.end.value, f) ? !0 : e.end.value && e.start.value ? ma(f, e.start.value, e.end.value) : !1
      , i = f => {
        var p;
        if (e.isDateDisabled(f))
            return !0;
        if ((p = e.maximumDays) != null && p.value) {
            if (e.start.value && e.end.value) {
                if (e.fixedDate.value) {
                    const h = ni(e.start.value, e.end.value).length;
                    if (h <= e.maximumDays.value) {
                        const g = e.maximumDays.value - h - 1
                          , m = e.start.value.subtract({
                            days: g
                        })
                          , b = e.end.value.add({
                            days: g
                        });
                        return !ma(f, m, b)
                    }
                }
                return !1
            }
            if (e.start.value) {
                const h = e.start.value.add({
                    days: e.maximumDays.value
                })
                  , g = e.start.value.subtract({
                    days: e.maximumDays.value
                });
                return !ma(f, g, h)
            }
        }
        return !e.start.value || e.end.value || Ne(e.start.value, f),
        !1
    }
      , l = f => {
        var p;
        return !!((p = e.isDateHighlightable) != null && p.call(e, f))
    }
      , u = O( () => {
        var m;
        if (e.start.value && e.end.value && !e.fixedDate.value || !e.start.value || !e.focusedValue.value)
            return null;
        const f = Hn(e.start.value, e.focusedValue.value)
          , p = f ? e.start.value : e.focusedValue.value
          , h = f ? e.focusedValue.value : e.start.value;
        if (Ne(p, h))
            return {
                start: p,
                end: h
            };
        if ((m = e.maximumDays) != null && m.value && !e.end.value) {
            const b = f ? p.add({
                days: e.maximumDays.value
            }) : p.subtract({
                days: e.maximumDays.value
            });
            return {
                start: p,
                end: b
            }
        }
        return C0(p, h, e.allowNonContiguousRanges.value ? () => !1 : e.isDateUnavailable, i, e.isDateHighlightable) ? {
            start: p,
            end: h
        } : null
    }
    );
    return {
        isInvalid: r,
        isSelected: a,
        isDateHighlightable: l,
        highlightedRange: u,
        isSelectionStart: s,
        isSelectionEnd: o,
        isHighlightedStart: f => !u.value || !u.value.start ? !1 : Ne(u.value.start, f),
        isHighlightedEnd: f => !u.value || !u.value.end ? !1 : Ne(u.value.end, f),
        isDateDisabled: i
    }
}
const mw = {
    style: {
        border: "0px",
        clip: "rect(0px, 0px, 0px, 0px)",
        "clip-path": "inset(50%)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: "0px",
        position: "absolute",
        "white-space": "nowrap",
        width: "1px"
    }
}
  , yw = {
    role: "heading",
    "aria-level": "2"
}
  , [$r,vw] = Gn("RangeCalendarRoot");
var bw = se({
    __name: "RangeCalendarRoot",
    props: {
        defaultPlaceholder: {
            type: null,
            required: !1
        },
        defaultValue: {
            type: Object,
            required: !1,
            default: () => ({
                start: void 0,
                end: void 0
            })
        },
        modelValue: {
            type: [Object, null],
            required: !1
        },
        placeholder: {
            type: null,
            required: !1,
            default: void 0
        },
        allowNonContiguousRanges: {
            type: Boolean,
            required: !1,
            default: !1
        },
        pagedNavigation: {
            type: Boolean,
            required: !1,
            default: !1
        },
        preventDeselect: {
            type: Boolean,
            required: !1,
            default: !1
        },
        maximumDays: {
            type: Number,
            required: !1,
            default: void 0
        },
        weekStartsOn: {
            type: Number,
            required: !1,
            default: 0
        },
        weekdayFormat: {
            type: String,
            required: !1,
            default: "narrow"
        },
        calendarLabel: {
            type: String,
            required: !1
        },
        fixedWeeks: {
            type: Boolean,
            required: !1,
            default: !1
        },
        maxValue: {
            type: null,
            required: !1
        },
        minValue: {
            type: null,
            required: !1
        },
        locale: {
            type: String,
            required: !1
        },
        numberOfMonths: {
            type: Number,
            required: !1,
            default: 1
        },
        disabled: {
            type: Boolean,
            required: !1,
            default: !1
        },
        readonly: {
            type: Boolean,
            required: !1,
            default: !1
        },
        initialFocus: {
            type: Boolean,
            required: !1,
            default: !1
        },
        isDateDisabled: {
            type: Function,
            required: !1,
            default: void 0
        },
        isDateUnavailable: {
            type: Function,
            required: !1,
            default: void 0
        },
        isDateHighlightable: {
            type: Function,
            required: !1,
            default: void 0
        },
        dir: {
            type: String,
            required: !1
        },
        nextPage: {
            type: Function,
            required: !1
        },
        prevPage: {
            type: Function,
            required: !1
        },
        disableDaysOutsideCurrentView: {
            type: Boolean,
            required: !1,
            default: !1
        },
        fixedDate: {
            type: String,
            required: !1
        },
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: "div"
        }
    },
    emits: ["update:modelValue", "update:validModelValue", "update:placeholder", "update:startValue"],
    setup(e, {emit: t}) {
        const n = e
          , r = t
          , {disabled: s, readonly: o, initialFocus: a, pagedNavigation: i, weekStartsOn: l, weekdayFormat: u, fixedWeeks: c, numberOfMonths: d, preventDeselect: f, isDateUnavailable: p, isDateHighlightable: h, isDateDisabled: g, calendarLabel: m, maxValue: b, minValue: y, dir: v, locale: k, nextPage: _, prevPage: $, allowNonContiguousRanges: A, disableDaysOutsideCurrentView: S, fixedDate: P, maximumDays: U} = Bt(n)
          , {primitiveElement: ee, currentElement: M} = Bo()
          , q = Lf(v)
          , D = Hf(k)
          , N = Q()
          , R = Q()
          , H = Q(!1)
          , j = mr(n, "modelValue", r, {
            defaultValue: n.defaultValue ?? {
                start: void 0,
                end: void 0
            },
            passive: n.modelValue === void 0
        })
          , le = Q(j.value);
        Oe(le, X => {
            r("update:validModelValue", X)
        }
        );
        const K = qf({
            defaultPlaceholder: n.placeholder,
            defaultValue: j.value.start,
            locale: n.locale
        })
          , we = Q(j.value.start)
          , pe = Q(j.value.end)
          , Se = mr(n, "placeholder", r, {
            defaultValue: n.defaultPlaceholder ?? K.copy(),
            passive: n.placeholder === void 0
        });
        function Ge(X) {
            Se.value = X.copy()
        }
        const {fullCalendarLabel: xe, headingValue: $e, isDateDisabled: ut, isDateUnavailable: vt, isNextButtonDisabled: Me, isPrevButtonDisabled: bt, grid: Et, weekdays: w, isOutsideVisibleView: C, nextPage: E, prevPage: F, formatter: I} = Gf({
            locale: D,
            placeholder: Se,
            weekStartsOn: l,
            fixedWeeks: c,
            numberOfMonths: d,
            minValue: y,
            maxValue: b,
            disabled: s,
            weekdayFormat: u,
            pagedNavigation: i,
            isDateDisabled: g.value,
            isDateUnavailable: p.value,
            calendarLabel: m,
            nextPage: _,
            prevPage: $
        })
          , {isInvalid: L, isSelected: J, isDateHighlightable: G, highlightedRange: z, isSelectionStart: B, isSelectionEnd: ae, isHighlightedStart: Z, isHighlightedEnd: oe, isDateDisabled: ce} = gw({
            start: we,
            end: pe,
            isDateDisabled: ut,
            isDateUnavailable: vt,
            isDateHighlightable: h.value,
            focusedValue: R,
            allowNonContiguousRanges: A,
            fixedDate: P,
            maximumDays: U
        });
        Oe(j, (X, ue) => {
            var be, qe, je, dt;
            (!(ue != null && ue.start) && (X != null && X.start) || !X || !X.start || we.value && !bn(X.start, we.value)) && (we.value = (qe = (be = X == null ? void 0 : X.start) == null ? void 0 : be.copy) == null ? void 0 : qe.call(be)),
            (!(ue != null && ue.end) && X.end || !X || !X.end || pe.value && !bn(X.end, pe.value)) && (pe.value = (dt = (je = X == null ? void 0 : X.end) == null ? void 0 : je.copy) == null ? void 0 : dt.call(je))
        }
        ),
        Oe(we, X => {
            X && !bn(X, Se.value) && Ge(X),
            r("update:startValue", X)
        }
        ),
        Oe([we, pe], ([X,ue]) => {
            var qe, je;
            const be = j.value;
            be && be.start && be.end && X && ue && bn(be.start, X) && bn(be.end, ue) || (H.value = !0,
            ue && X ? (Hn(ue, X) ? j.value = {
                start: ue.copy(),
                end: X.copy()
            } : j.value = {
                start: X.copy(),
                end: ue.copy()
            },
            H.value = !1,
            le.value = {
                start: (qe = j.value.start) == null ? void 0 : qe.copy(),
                end: (je = j.value.end) == null ? void 0 : je.copy()
            }) : X ? j.value = {
                start: X.copy(),
                end: void 0
            } : j.value = {
                start: ue == null ? void 0 : ue.copy(),
                end: void 0
            })
        }
        );
        const ve = el();
        return Wi("keydown", X => {
            var ue, be;
            X.key === ve.ESCAPE && H.value && (we.value = (ue = le.value.start) == null ? void 0 : ue.copy(),
            pe.value = (be = le.value.end) == null ? void 0 : be.copy())
        }
        ),
        vw({
            isDateUnavailable: vt,
            isDateHighlightable: G,
            startValue: we,
            endValue: pe,
            formatter: I,
            modelValue: j,
            placeholder: Se,
            disabled: s,
            initialFocus: a,
            pagedNavigation: i,
            grid: Et,
            weekDays: w,
            weekStartsOn: l,
            weekdayFormat: u,
            fixedWeeks: c,
            numberOfMonths: d,
            readonly: o,
            preventDeselect: f,
            fullCalendarLabel: xe,
            headingValue: $e,
            isInvalid: L,
            isDateDisabled: ce,
            allowNonContiguousRanges: A,
            highlightedRange: z,
            focusedValue: R,
            lastPressedDateValue: N,
            isSelected: J,
            isSelectionEnd: ae,
            isSelectionStart: B,
            isNextButtonDisabled: Me,
            isPrevButtonDisabled: bt,
            isOutsideVisibleView: C,
            nextPage: E,
            prevPage: F,
            parentElement: M,
            onPlaceholderChange: Ge,
            locale: D,
            dir: q,
            isHighlightedStart: Z,
            isHighlightedEnd: oe,
            disableDaysOutsideCurrentView: S,
            fixedDate: P,
            maximumDays: U,
            minValue: y,
            maxValue: b
        }),
        jt( () => {
            a.value && Ff(M.value)
        }
        ),
        (X, ue) => (T(),
        Y(x(ye), {
            ref_key: "primitiveElement",
            ref: ee,
            as: X.as,
            "as-child": X.asChild,
            "aria-label": x(xe),
            "data-readonly": x(o) ? "" : void 0,
            "data-disabled": x(s) ? "" : void 0,
            "data-invalid": x(L) ? "" : void 0,
            dir: x(q)
        }, {
            default: V( () => [W("div", mw, [W("div", yw, fe(x(xe)), 1)]), te(X.$slots, "default", {
                date: x(Se),
                grid: x(Et),
                weekDays: x(w),
                weekStartsOn: x(l),
                locale: x(D),
                fixedWeeks: x(c),
                modelValue: x(j)
            })]),
            _: 3
        }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]))
    }
})
  , ww = bw
  , xw = se({
    __name: "RangeCalendarCell",
    props: {
        date: {
            type: null,
            required: !0
        },
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: "td"
        }
    },
    setup(e) {
        const t = $r();
        return (n, r) => {
            var s, o;
            return T(),
            Y(x(ye), {
                as: n.as,
                "as-child": n.asChild,
                role: "gridcell",
                "aria-selected": x(t).isSelected(n.date) ? !0 : void 0,
                "aria-disabled": x(t).isDateDisabled(n.date) || ((o = (s = x(t)).isDateUnavailable) == null ? void 0 : o.call(s, n.date)) || x(t).disableDaysOutsideCurrentView.value,
                "data-disabled": x(t).isDateDisabled(n.date) || x(t).disableDaysOutsideCurrentView.value ? "" : void 0
            }, {
                default: V( () => [te(n.$slots, "default")]),
                _: 3
            }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"])
        }
    }
})
  , kw = xw
  , _w = se({
    __name: "RangeCalendarCellTrigger",
    props: {
        day: {
            type: null,
            required: !0
        },
        month: {
            type: null,
            required: !0
        },
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: "div"
        }
    },
    setup(e) {
        const t = e
          , n = $r()
          , r = el()
          , {primitiveElement: s} = Bo()
          , o = O( () => n.formatter.custom(kt(t.day), {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric"
        }))
          , a = O( () => {
            var S;
            return ((S = n.isDateUnavailable) == null ? void 0 : S.call(n, t.day)) ?? !1
        }
        )
          , i = O( () => n.isSelected(t.day))
          , l = O( () => n.isSelectionStart(t.day))
          , u = O( () => n.isSelectionEnd(t.day))
          , c = O( () => n.isHighlightedStart(t.day))
          , d = O( () => n.isHighlightedEnd(t.day))
          , f = O( () => n.highlightedRange.value ? x0(t.day, n.highlightedRange.value.start, n.highlightedRange.value.end) : !1)
          , p = O( () => n.allowNonContiguousRanges.value)
          , h = O( () => ff(t.day, kr()))
          , g = O( () => !zi(t.day, t.month))
          , m = O( () => n.isOutsideVisibleView(t.day))
          , b = O( () => n.isDateDisabled(t.day) || n.disableDaysOutsideCurrentView.value && g.value)
          , y = O( () => t.day.day.toLocaleString(n.locale.value))
          , v = O( () => !n.disabled.value && Ne(t.day, n.placeholder.value));
        function k(S, P) {
            var U;
            if (!n.readonly.value && !(n.isDateDisabled(P) || (U = n.isDateUnavailable) != null && U.call(n, P))) {
                if (n.lastPressedDateValue.value = P.copy(),
                n.startValue.value && n.highlightedRange.value === null) {
                    if (Ne(P, n.startValue.value) && !n.preventDeselect.value && !n.endValue.value) {
                        n.startValue.value = void 0,
                        n.onPlaceholderChange(P);
                        return
                    } else if (!n.endValue.value) {
                        S.preventDefault(),
                        n.lastPressedDateValue.value && Ne(n.lastPressedDateValue.value, P) && (n.startValue.value = P.copy());
                        return
                    }
                }
                if (n.startValue.value && n.endValue.value && Ne(n.endValue.value, P) && !n.preventDeselect.value) {
                    n.startValue.value = void 0,
                    n.endValue.value = void 0,
                    n.onPlaceholderChange(P);
                    return
                }
                n.startValue.value ? n.endValue.value ? n.endValue.value && n.startValue.value && (n.fixedDate.value ? n.fixedDate.value === "start" ? P.compare(n.startValue.value) < 0 ? n.startValue.value = P.copy() : n.endValue.value = P.copy() : n.fixedDate.value === "end" && (P.compare(n.endValue.value) > 0 ? n.endValue.value = P.copy() : n.startValue.value = P.copy()) : (n.endValue.value = void 0,
                n.startValue.value = P.copy())) : n.endValue.value = P.copy() : n.startValue.value = P.copy()
            }
        }
        function _(S) {
            b.value || k(S, t.day)
        }
        function $() {
            var S;
            b.value || (S = n.isDateUnavailable) != null && S.call(n, t.day) || (n.focusedValue.value = t.day.copy())
        }
        function A(S) {
            if (b.value)
                return;
            S.preventDefault(),
            S.stopPropagation();
            const P = n.parentElement.value
              , U = 7
              , ee = n.dir.value === "rtl" ? -1 : 1;
            switch (S.code) {
            case r.ARROW_RIGHT:
                M(t.day, ee);
                break;
            case r.ARROW_LEFT:
                M(t.day, -ee);
                break;
            case r.ARROW_UP:
                M(t.day, -U);
                break;
            case r.ARROW_DOWN:
                M(t.day, U);
                break;
            case r.ENTER:
            case r.SPACE_CODE:
                k(S, t.day)
            }
            function M(q, D) {
                const N = q.add({
                    days: D
                });
                if (n.minValue.value && N.compare(n.minValue.value) < 0 || n.maxValue.value && N.compare(n.maxValue.value) > 0)
                    return;
                const R = P.querySelector(`[data-value='${N.toString()}']:not([data-outside-view])`);
                if (!R) {
                    if (D > 0) {
                        if (n.isNextButtonDisabled())
                            return;
                        n.nextPage()
                    } else {
                        if (n.isPrevButtonDisabled())
                            return;
                        n.prevPage()
                    }
                    lt( () => {
                        M(q, D)
                    }
                    );
                    return
                }
                if (R && R.hasAttribute("data-disabled"))
                    return M(N, D);
                n.onPlaceholderChange(N),
                R == null || R.focus()
            }
        }
        return (S, P) => (T(),
        Y(x(ye), {
            ref_key: "primitiveElement",
            ref: s,
            as: S.as,
            "as-child": S.asChild,
            role: "button",
            "aria-label": o.value,
            "data-reka-calendar-cell-trigger": "",
            "aria-selected": i.value && (p.value || !a.value) ? !0 : void 0,
            "aria-disabled": b.value || a.value ? !0 : void 0,
            "data-highlighted": f.value && (p.value || !a.value) ? "" : void 0,
            "data-selection-start": l.value ? !0 : void 0,
            "data-selection-end": u.value ? !0 : void 0,
            "data-highlighted-start": c.value ? !0 : void 0,
            "data-highlighted-end": d.value ? !0 : void 0,
            "data-selected": i.value && (p.value || !a.value) ? !0 : void 0,
            "data-outside-visible-view": m.value ? "" : void 0,
            "data-value": S.day.toString(),
            "data-disabled": b.value ? "" : void 0,
            "data-unavailable": a.value ? "" : void 0,
            "data-today": h.value ? "" : void 0,
            "data-outside-view": g.value ? "" : void 0,
            "data-focused": v.value ? "" : void 0,
            tabindex: v.value ? 0 : g.value || b.value ? void 0 : -1,
            onClick: _,
            onFocusin: $,
            onMouseenter: $,
            onKeydown: Ba(A, ["up", "down", "left", "right", "enter", "space"])
        }, {
            default: V( () => [te(S.$slots, "default", {
                dayValue: y.value,
                disabled: b.value,
                today: h.value,
                selected: i.value,
                outsideView: g.value,
                outsideVisibleView: m.value,
                unavailable: a.value,
                highlighted: f.value && (p.value || !a.value),
                highlightedStart: c.value,
                highlightedEnd: d.value,
                selectionStart: l.value,
                selectionEnd: u.value
            }, () => [it(fe(y.value), 1)])]),
            _: 3
        }, 8, ["as", "as-child", "aria-label", "aria-selected", "aria-disabled", "data-highlighted", "data-selection-start", "data-selection-end", "data-highlighted-start", "data-highlighted-end", "data-selected", "data-outside-visible-view", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-focused", "tabindex"]))
    }
})
  , Cw = _w
  , Sw = se({
    __name: "RangeCalendarGrid",
    props: {
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: "table"
        }
    },
    setup(e) {
        const t = e
          , n = $r()
          , r = O( () => n.disabled.value ? !0 : void 0)
          , s = O( () => n.readonly.value ? !0 : void 0);
        return (o, a) => (T(),
        Y(x(ye), me(t, {
            tabindex: "-1",
            role: "grid",
            "aria-readonly": s.value,
            "aria-disabled": r.value,
            "data-readonly": s.value && "",
            "data-disabled": r.value && ""
        }), {
            default: V( () => [te(o.$slots, "default")]),
            _: 3
        }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]))
    }
})
  , $w = Sw
  , Aw = se({
    __name: "RangeCalendarGridBody",
    props: {
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: "tbody"
        }
    },
    setup(e) {
        const t = e;
        return (n, r) => (T(),
        Y(x(ye), He(Je(t)), {
            default: V( () => [te(n.$slots, "default")]),
            _: 3
        }, 16))
    }
})
  , Ow = Aw
  , Dw = se({
    __name: "RangeCalendarGridHead",
    props: {
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: "thead"
        }
    },
    setup(e) {
        const t = e;
        return (n, r) => (T(),
        Y(x(ye), me(t, {
            "aria-hidden": "true"
        }), {
            default: V( () => [te(n.$slots, "default")]),
            _: 3
        }, 16))
    }
})
  , Ew = Dw
  , Pw = se({
    __name: "RangeCalendarGridRow",
    props: {
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: "tr"
        }
    },
    setup(e) {
        const t = e;
        return (n, r) => (T(),
        Y(x(ye), He(Je(t)), {
            default: V( () => [te(n.$slots, "default")]),
            _: 3
        }, 16))
    }
})
  , Mw = Pw
  , Tw = se({
    __name: "RangeCalendarHeadCell",
    props: {
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: "th"
        }
    },
    setup(e) {
        const t = e;
        return (n, r) => (T(),
        Y(x(ye), He(Je(t)), {
            default: V( () => [te(n.$slots, "default")]),
            _: 3
        }, 16))
    }
})
  , Rw = Tw
  , Iw = se({
    __name: "RangeCalendarHeader",
    props: {
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: "div"
        }
    },
    setup(e) {
        const t = e;
        return (n, r) => (T(),
        Y(x(ye), He(Je(t)), {
            default: V( () => [te(n.$slots, "default")]),
            _: 3
        }, 16))
    }
})
  , qw = Iw
  , Fw = se({
    __name: "RangeCalendarHeading",
    props: {
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: "div"
        }
    },
    setup(e) {
        const t = e
          , n = $r();
        return (r, s) => (T(),
        Y(x(ye), me(t, {
            "data-disabled": x(n).disabled.value ? "" : void 0
        }), {
            default: V( () => [te(r.$slots, "default", {
                headingValue: x(n).headingValue.value
            }, () => [it(fe(x(n).headingValue.value), 1)])]),
            _: 3
        }, 16, ["data-disabled"]))
    }
})
  , Lw = Fw
  , Bw = se({
    __name: "RangeCalendarNext",
    props: {
        nextPage: {
            type: Function,
            required: !1
        },
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: "button"
        }
    },
    setup(e) {
        const t = e
          , n = O( () => r.disabled.value || r.isNextButtonDisabled(t.nextPage))
          , r = $r();
        return (s, o) => (T(),
        Y(x(ye), {
            as: s.as,
            "as-child": s.asChild,
            "aria-label": "Next page",
            type: s.as === "button" ? "button" : void 0,
            "aria-disabled": n.value || void 0,
            "data-disabled": n.value || void 0,
            disabled: n.value,
            onClick: o[0] || (o[0] = a => x(r).nextPage(t.nextPage))
        }, {
            default: V( () => [te(s.$slots, "default", {
                disabled: n.value
            }, () => [o[1] || (o[1] = it(" Next page "))])]),
            _: 3
        }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]))
    }
})
  , Nw = Bw
  , Hw = se({
    __name: "RangeCalendarPrev",
    props: {
        prevPage: {
            type: Function,
            required: !1
        },
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: "button"
        }
    },
    setup(e) {
        const t = e
          , n = O( () => r.disabled.value || r.isPrevButtonDisabled(t.prevPage))
          , r = $r();
        return (s, o) => (T(),
        Y(x(ye), {
            as: s.as,
            "as-child": s.asChild,
            "aria-label": "Previous page",
            type: s.as === "button" ? "button" : void 0,
            "aria-disabled": n.value || void 0,
            "data-disabled": n.value || void 0,
            disabled: n.value,
            onClick: o[0] || (o[0] = a => x(r).prevPage(t.prevPage))
        }, {
            default: V( () => [te(s.$slots, "default", {
                disabled: n.value
            }, () => [o[1] || (o[1] = it(" Prev page "))])]),
            _: 3
        }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]))
    }
})
  , jw = Hw
  , Vw = se({
    __name: "HoverCardArrow",
    props: {
        width: {
            type: Number,
            required: !1,
            default: 10
        },
        height: {
            type: Number,
            required: !1,
            default: 5
        },
        rounded: {
            type: Boolean,
            required: !1
        },
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: "svg"
        }
    },
    setup(e) {
        const t = e;
        return Ue(),
        (n, r) => (T(),
        Y(x(ih), He(Je(t)), {
            default: V( () => [te(n.$slots, "default")]),
            _: 3
        }, 16))
    }
})
  , Ww = Vw;
const [ul,zw] = Gn("HoverCardRoot");
var Uw = se({
    __name: "HoverCardRoot",
    props: {
        defaultOpen: {
            type: Boolean,
            required: !1,
            default: !1
        },
        open: {
            type: Boolean,
            required: !1,
            default: void 0
        },
        openDelay: {
            type: Number,
            required: !1,
            default: 700
        },
        closeDelay: {
            type: Number,
            required: !1,
            default: 300
        }
    },
    emits: ["update:open"],
    setup(e, {emit: t}) {
        const n = e
          , r = t
          , {openDelay: s, closeDelay: o} = Bt(n);
        Ue();
        const a = mr(n, "open", r, {
            defaultValue: n.defaultOpen,
            passive: n.open === void 0
        })
          , i = Q(0)
          , l = Q(0)
          , u = Q(!1)
          , c = Q(!1)
          , d = Q(!1)
          , f = Q();
        function p() {
            clearTimeout(l.value),
            i.value = window.setTimeout( () => a.value = !0, s.value)
        }
        function h() {
            clearTimeout(i.value),
            !u.value && !c.value && (l.value = window.setTimeout( () => a.value = !1, o.value))
        }
        function g() {
            a.value = !1
        }
        return zw({
            open: a,
            onOpenChange(m) {
                a.value = m
            },
            onOpen: p,
            onClose: h,
            onDismiss: g,
            hasSelectionRef: u,
            isPointerDownOnContentRef: c,
            isPointerInTransitRef: d,
            triggerElement: f
        }),
        (m, b) => (T(),
        Y(x(Yf), null, {
            default: V( () => [te(m.$slots, "default", {
                open: x(a)
            })]),
            _: 3
        }))
    }
})
  , Gw = Uw;
function li(e) {
    return t => t.pointerType === "touch" ? void 0 : e()
}
function Kw(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
var Yw = se({
    __name: "HoverCardContentImpl",
    props: {
        side: {
            type: null,
            required: !1
        },
        sideOffset: {
            type: Number,
            required: !1
        },
        sideFlip: {
            type: Boolean,
            required: !1
        },
        align: {
            type: null,
            required: !1
        },
        alignOffset: {
            type: Number,
            required: !1
        },
        alignFlip: {
            type: Boolean,
            required: !1
        },
        avoidCollisions: {
            type: Boolean,
            required: !1
        },
        collisionBoundary: {
            type: null,
            required: !1
        },
        collisionPadding: {
            type: [Number, Object],
            required: !1
        },
        arrowPadding: {
            type: Number,
            required: !1
        },
        sticky: {
            type: String,
            required: !1
        },
        hideWhenDetached: {
            type: Boolean,
            required: !1
        },
        positionStrategy: {
            type: String,
            required: !1
        },
        updatePositionStrategy: {
            type: String,
            required: !1
        },
        disableUpdateOnLayoutShift: {
            type: Boolean,
            required: !1
        },
        prioritizePosition: {
            type: Boolean,
            required: !1
        },
        reference: {
            type: null,
            required: !1
        },
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1
        }
    },
    emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
    setup(e, {emit: t}) {
        const n = e
          , r = t
          , s = gs(n)
          , {forwardRef: o, currentElement: a} = Ue()
          , i = ul()
          , {isPointerInTransit: l, onPointerExit: u} = D0(i.triggerElement, a);
        gv(i.isPointerInTransitRef, l, {
            direction: "rtl"
        }),
        u( () => {
            i.onClose()
        }
        );
        const c = Q(!1);
        let d;
        ct(p => {
            if (c.value) {
                const h = document.body;
                d = h.style.userSelect || h.style.webkitUserSelect,
                h.style.userSelect = "none",
                h.style.webkitUserSelect = "none",
                p( () => {
                    h.style.userSelect = d,
                    h.style.webkitUserSelect = d
                }
                )
            }
        }
        );
        function f() {
            c.value = !1,
            i.isPointerDownOnContentRef.value = !1,
            lt( () => {
                var h;
                ((h = document.getSelection()) == null ? void 0 : h.toString()) !== "" && (i.hasSelectionRef.value = !0)
            }
            )
        }
        return jt( () => {
            a.value && (document.addEventListener("pointerup", f),
            Kw(a.value).forEach(h => h.setAttribute("tabindex", "-1")))
        }
        ),
        Un( () => {
            document.removeEventListener("pointerup", f),
            i.hasSelectionRef.value = !1,
            i.isPointerDownOnContentRef.value = !1
        }
        ),
        (p, h) => (T(),
        Y(x(Wf), {
            "as-child": "",
            "disable-outside-pointer-events": !1,
            onEscapeKeyDown: h[1] || (h[1] = g => r("escapeKeyDown", g)),
            onPointerDownOutside: h[2] || (h[2] = g => r("pointerDownOutside", g)),
            onFocusOutside: h[3] || (h[3] = eo(g => r("focusOutside", g), ["prevent"])),
            onDismiss: x(i).onDismiss
        }, {
            default: V( () => [he(x(ah), me({
                ...x(s),
                ...p.$attrs
            }, {
                ref: x(o),
                "data-state": x(i).open.value ? "open" : "closed",
                style: {
                    userSelect: c.value ? "text" : void 0,
                    WebkitUserSelect: c.value ? "text" : void 0,
                    "--reka-hover-card-content-transform-origin": "var(--reka-popper-transform-origin)",
                    "--reka-hover-card-content-available-width": "var(--reka-popper-available-width)",
                    "--reka-hover-card-content-available-height": "var(--reka-popper-available-height)",
                    "--reka-hover-card-trigger-width": "var(--reka-popper-anchor-width)",
                    "--reka-hover-card-trigger-height": "var(--reka-popper-anchor-height)"
                },
                onPointerdown: h[0] || (h[0] = g => {
                    g.currentTarget.contains(g.target) && (c.value = !0),
                    x(i).hasSelectionRef.value = !1,
                    x(i).isPointerDownOnContentRef.value = !0
                }
                )
            }), {
                default: V( () => [te(p.$slots, "default")]),
                _: 3
            }, 16, ["data-state", "style"])]),
            _: 3
        }, 8, ["onDismiss"]))
    }
})
  , Jw = Yw
  , Qw = se({
    __name: "HoverCardContent",
    props: {
        forceMount: {
            type: Boolean,
            required: !1
        },
        side: {
            type: null,
            required: !1
        },
        sideOffset: {
            type: Number,
            required: !1
        },
        sideFlip: {
            type: Boolean,
            required: !1
        },
        align: {
            type: null,
            required: !1
        },
        alignOffset: {
            type: Number,
            required: !1
        },
        alignFlip: {
            type: Boolean,
            required: !1
        },
        avoidCollisions: {
            type: Boolean,
            required: !1
        },
        collisionBoundary: {
            type: null,
            required: !1
        },
        collisionPadding: {
            type: [Number, Object],
            required: !1
        },
        arrowPadding: {
            type: Number,
            required: !1
        },
        sticky: {
            type: String,
            required: !1
        },
        hideWhenDetached: {
            type: Boolean,
            required: !1
        },
        positionStrategy: {
            type: String,
            required: !1
        },
        updatePositionStrategy: {
            type: String,
            required: !1
        },
        disableUpdateOnLayoutShift: {
            type: Boolean,
            required: !1
        },
        prioritizePosition: {
            type: Boolean,
            required: !1
        },
        reference: {
            type: null,
            required: !1
        },
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1
        }
    },
    emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
    setup(e, {emit: t}) {
        const s = _r(e, t)
          , {forwardRef: o} = Ue()
          , a = ul();
        return (i, l) => (T(),
        Y(x(jf), {
            present: i.forceMount || x(a).open.value
        }, {
            default: V( () => [he(Jw, me(x(s), {
                ref: x(o),
                onPointerenter: l[0] || (l[0] = u => x(li)(x(a).onOpen)(u))
            }), {
                default: V( () => [te(i.$slots, "default")]),
                _: 3
            }, 16)]),
            _: 3
        }, 8, ["present"]))
    }
})
  , Zw = Qw
  , Xw = se({
    __name: "HoverCardPortal",
    props: {
        to: {
            type: null,
            required: !1
        },
        disabled: {
            type: Boolean,
            required: !1
        },
        defer: {
            type: Boolean,
            required: !1
        },
        forceMount: {
            type: Boolean,
            required: !1
        }
    },
    setup(e) {
        const t = e;
        return (n, r) => (T(),
        Y(x(Uf), He(Je(t)), {
            default: V( () => [te(n.$slots, "default")]),
            _: 3
        }, 16))
    }
})
  , ex = Xw
  , tx = se({
    __name: "HoverCardTrigger",
    props: {
        reference: {
            type: null,
            required: !1
        },
        asChild: {
            type: Boolean,
            required: !1
        },
        as: {
            type: null,
            required: !1,
            default: "a"
        }
    },
    setup(e) {
        const {forwardRef: t, currentElement: n} = Ue()
          , r = ul();
        r.triggerElement = n;
        function s() {
            setTimeout( () => {
                !r.isPointerInTransitRef.value && !r.open.value && r.onClose()
            }
            , 0)
        }
        return (o, a) => (T(),
        Y(x(nl), {
            "as-child": "",
            reference: o.reference
        }, {
            default: V( () => [he(x(ye), {
                ref: x(t),
                "as-child": o.asChild,
                as: o.as,
                "data-state": x(r).open.value ? "open" : "closed",
                "data-grace-area-trigger": "",
                onPointerenter: a[0] || (a[0] = i => x(li)(x(r).onOpen)(i)),
                onPointerleave: a[1] || (a[1] = i => x(li)(s)(i)),
                onFocus: a[2] || (a[2] = i => x(r).onOpen()),
                onBlur: a[3] || (a[3] = i => x(r).onClose())
            }, {
                default: V( () => [te(o.$slots, "default")]),
                _: 3
            }, 8, ["as-child", "as", "data-state"])]),
            _: 3
        }, 8, ["reference"]))
    }
})
  , nx = tx;
const rx = {
    Root: gb,
    Header: Pb,
    Heading: Tb,
    Grid: xb,
    Cell: yb,
    HeadCell: Db,
    Next: Ib,
    Prev: Fb,
    GridHead: Sb,
    GridBody: _b,
    GridRow: Ab,
    CellTrigger: bb
}
  , sx = {
    Root: Gw,
    Trigger: nx,
    Portal: ex,
    Content: Zw,
    Arrow: Ww
}
  , ox = {
    Root: Q1,
    Trigger: pw,
    Portal: fw,
    Content: uw,
    Arrow: tw,
    Close: rw,
    Anchor: X1
}
  , ax = {
    Root: ww,
    Header: qw,
    Heading: Lw,
    Grid: $w,
    Cell: kw,
    HeadCell: Rw,
    Next: Nw,
    Prev: jw,
    GridHead: Ew,
    GridBody: Ow,
    GridRow: Mw,
    CellTrigger: Cw
}
  , ix = Symbol("nuxt-ui.portal-target");
function lx(e) {
    const t = et(ix, void 0)
      , n = O( () => e.value === !0 ? t == null ? void 0 : t.value : e.value)
      , r = O( () => typeof n.value == "boolean" ? !n.value : !1)
      , s = O( () => typeof n.value == "boolean" ? "body" : n.value);
    return O( () => ({
        to: s.value,
        disabled: r.value
    }))
}
var cx = /\s+/g
  , ux = e => typeof e != "string" || !e ? e : e.replace(cx, " ").trim()
  , fo = (...e) => {
    const t = []
      , n = r => {
        if (!r && r !== 0 && r !== 0n)
            return;
        if (Array.isArray(r)) {
            for (let o = 0, a = r.length; o < a; o++)
                n(r[o]);
            return
        }
        const s = typeof r;
        if (s === "string" || s === "number" || s === "bigint") {
            if (s === "number" && r !== r)
                return;
            t.push(String(r))
        } else if (s === "object") {
            const o = Object.keys(r);
            for (let a = 0, i = o.length; a < i; a++) {
                const l = o[a];
                r[l] && t.push(l)
            }
        }
    }
    ;
    for (let r = 0, s = e.length; r < s; r++) {
        const o = e[r];
        o != null && n(o)
    }
    return t.length > 0 ? ux(t.join(" ")) : void 0
}
  , ru = e => e === !1 ? "false" : e === !0 ? "true" : e === 0 ? "0" : e
  , ot = e => {
    if (!e || typeof e != "object")
        return !0;
    for (const t in e)
        return !1;
    return !0
}
  , dx = (e, t) => {
    if (e === t)
        return !0;
    if (!e || !t)
        return !1;
    const n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (let s = 0; s < n.length; s++) {
        const o = n[s];
        if (!r.includes(o) || e[o] !== t[o])
            return !1
    }
    return !0
}
  , fx = (e, t) => {
    for (const n in t)
        if (Object.prototype.hasOwnProperty.call(t, n)) {
            const r = t[n];
            n in e ? e[n] = fo(e[n], r) : e[n] = r
        }
    return e
}
  , ch = (e, t) => {
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        Array.isArray(r) ? ch(r, t) : r && t.push(r)
    }
}
  , uh = (...e) => {
    const t = [];
    ch(e, t);
    const n = [];
    for (let r = 0; r < t.length; r++)
        t[r] && n.push(t[r]);
    return n
}
  , ci = (e, t) => {
    const n = {};
    for (const r in e) {
        const s = e[r];
        if (r in t) {
            const o = t[r];
            Array.isArray(s) || Array.isArray(o) ? n[r] = uh(o, s) : typeof s == "object" && typeof o == "object" && s && o ? n[r] = ci(s, o) : n[r] = o + " " + s
        } else
            n[r] = s
    }
    for (const r in t)
        r in e || (n[r] = t[r]);
    return n
}
  , hx = {
    twMerge: !0,
    twMergeConfig: {}
};
function px() {
    let e = null
      , t = {}
      , n = !1;
    return {
        get cachedTwMerge() {
            return e
        },
        set cachedTwMerge(r) {
            e = r
        },
        get cachedTwMergeConfig() {
            return t
        },
        set cachedTwMergeConfig(r) {
            t = r
        },
        get didTwMergeConfigChange() {
            return n
        },
        set didTwMergeConfigChange(r) {
            n = r
        },
        reset() {
            e = null,
            t = {},
            n = !1
        }
    }
}
var Jt = px()
  , gx = e => {
    const t = (r, s) => {
        const {extend: o=null, slots: a={}, variants: i={}, compoundVariants: l=[], compoundSlots: u=[], defaultVariants: c={}} = r
          , d = {
            ...hx,
            ...s
        }
          , f = o != null && o.base ? fo(o.base, r == null ? void 0 : r.base) : r == null ? void 0 : r.base
          , p = o != null && o.variants && !ot(o.variants) ? ci(i, o.variants) : i
          , h = o != null && o.defaultVariants && !ot(o.defaultVariants) ? {
            ...o.defaultVariants,
            ...c
        } : c;
        !ot(d.twMergeConfig) && !dx(d.twMergeConfig, Jt.cachedTwMergeConfig) && (Jt.didTwMergeConfigChange = !0,
        Jt.cachedTwMergeConfig = d.twMergeConfig);
        const g = ot(o == null ? void 0 : o.slots)
          , m = ot(a) ? {} : {
            base: fo(r == null ? void 0 : r.base, g && (o == null ? void 0 : o.base)),
            ...a
        }
          , b = g ? m : fx({
            ...o == null ? void 0 : o.slots
        }, ot(m) ? {
            base: r == null ? void 0 : r.base
        } : m)
          , y = ot(o == null ? void 0 : o.compoundVariants) ? l : uh(o == null ? void 0 : o.compoundVariants, l)
          , v = _ => {
            if (ot(p) && ot(a) && g)
                return e(f, _ == null ? void 0 : _.class, _ == null ? void 0 : _.className)(d);
            if (y && !Array.isArray(y))
                throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof y}`);
            if (u && !Array.isArray(u))
                throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof u}`);
            const $ = (D, N=p, R=null, H=null) => {
                const j = N[D];
                if (!j || ot(j))
                    return null;
                const le = (H == null ? void 0 : H[D]) ?? (_ == null ? void 0 : _[D]);
                if (le === null)
                    return null;
                const K = ru(le);
                if (typeof K == "object")
                    return null;
                const we = h == null ? void 0 : h[D]
                  , pe = K ?? ru(we);
                return j[pe || "false"]
            }
              , A = () => {
                if (!p)
                    return null;
                const D = Object.keys(p)
                  , N = [];
                for (let R = 0; R < D.length; R++) {
                    const H = $(D[R], p);
                    H && N.push(H)
                }
                return N
            }
              , S = (D, N) => {
                if (!p || typeof p != "object")
                    return null;
                const R = [];
                for (const H in p) {
                    const j = $(H, p, D, N)
                      , le = D === "base" && typeof j == "string" ? j : j && j[D];
                    le && R.push(le)
                }
                return R
            }
              , P = {};
            for (const D in _) {
                const N = _[D];
                N !== void 0 && (P[D] = N)
            }
            const U = (D, N) => {
                var H;
                const R = typeof (_ == null ? void 0 : _[D]) == "object" ? {
                    [D]: (H = _[D]) == null ? void 0 : H.initial
                } : {};
                return {
                    ...h,
                    ...P,
                    ...R,
                    ...N
                }
            }
              , ee = (D=[], N) => {
                const R = []
                  , H = D.length;
                for (let j = 0; j < H; j++) {
                    const {class: le, className: K, ...we} = D[j];
                    let pe = !0;
                    const Se = U(null, N);
                    for (const Ge in we) {
                        const xe = we[Ge]
                          , $e = Se[Ge];
                        if (Array.isArray(xe)) {
                            if (!xe.includes($e)) {
                                pe = !1;
                                break
                            }
                        } else {
                            if ((xe == null || xe === !1) && ($e == null || $e === !1))
                                continue;
                            if ($e !== xe) {
                                pe = !1;
                                break
                            }
                        }
                    }
                    pe && (le && R.push(le),
                    K && R.push(K))
                }
                return R
            }
              , M = D => {
                const N = ee(y, D);
                if (!Array.isArray(N))
                    return N;
                const R = {}
                  , H = e;
                for (let j = 0; j < N.length; j++) {
                    const le = N[j];
                    if (typeof le == "string")
                        R.base = H(R.base, le)(d);
                    else if (typeof le == "object")
                        for (const K in le)
                            R[K] = H(R[K], le[K])(d)
                }
                return R
            }
              , q = D => {
                if (u.length < 1)
                    return null;
                const N = {}
                  , R = U(null, D);
                for (let H = 0; H < u.length; H++) {
                    const {slots: j=[], class: le, className: K, ...we} = u[H];
                    if (!ot(we)) {
                        let pe = !0;
                        for (const Se in we) {
                            const Ge = R[Se]
                              , xe = we[Se];
                            if (Ge === void 0 || (Array.isArray(xe) ? !xe.includes(Ge) : xe !== Ge)) {
                                pe = !1;
                                break
                            }
                        }
                        if (!pe)
                            continue
                    }
                    for (let pe = 0; pe < j.length; pe++) {
                        const Se = j[pe];
                        N[Se] || (N[Se] = []),
                        N[Se].push([le, K])
                    }
                }
                return N
            }
            ;
            if (!ot(a) || !g) {
                const D = {};
                if (typeof b == "object" && !ot(b)) {
                    const N = e;
                    for (const R in b)
                        D[R] = H => {
                            const j = M(H)
                              , le = q(H);
                            return N(b[R], S(R, H), j ? j[R] : void 0, le ? le[R] : void 0, H == null ? void 0 : H.class, H == null ? void 0 : H.className)(d)
                        }
                }
                return D
            }
            return e(f, A(), ee(y), _ == null ? void 0 : _.class, _ == null ? void 0 : _.className)(d)
        }
          , k = () => {
            if (!(!p || typeof p != "object"))
                return Object.keys(p)
        }
        ;
        return v.variantKeys = k(),
        v.extend = o,
        v.base = f,
        v.slots = b,
        v.variants = p,
        v.defaultVariants = h,
        v.compoundSlots = u,
        v.compoundVariants = y,
        v
    }
    ;
    return {
        tv: t,
        createTV: r => (s, o) => t(s, o ? ci(r, o) : r)
    }
}
;
const mx = (e, t) => {
    const n = new Array(e.length + t.length);
    for (let r = 0; r < e.length; r++)
        n[r] = e[r];
    for (let r = 0; r < t.length; r++)
        n[e.length + r] = t[r];
    return n
}
  , yx = (e, t) => ({
    classGroupId: e,
    validator: t
})
  , dh = (e=new Map, t=null, n) => ({
    nextPart: e,
    validators: t,
    classGroupId: n
})
  , ho = "-"
  , su = []
  , vx = "arbitrary.."
  , bx = e => {
    const t = xx(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: a => {
            if (a.startsWith("[") && a.endsWith("]"))
                return wx(a);
            const i = a.split(ho)
              , l = i[0] === "" && i.length > 1 ? 1 : 0;
            return fh(i, l, t)
        }
        ,
        getConflictingClassGroupIds: (a, i) => {
            if (i) {
                const l = r[a]
                  , u = n[a];
                return l ? u ? mx(u, l) : l : u || su
            }
            return n[a] || su
        }
    }
}
  , fh = (e, t, n) => {
    if (e.length - t === 0)
        return n.classGroupId;
    const s = e[t]
      , o = n.nextPart.get(s);
    if (o) {
        const u = fh(e, t + 1, o);
        if (u)
            return u
    }
    const a = n.validators;
    if (a === null)
        return;
    const i = t === 0 ? e.join(ho) : e.slice(t).join(ho)
      , l = a.length;
    for (let u = 0; u < l; u++) {
        const c = a[u];
        if (c.validator(i))
            return c.classGroupId
    }
}
  , wx = e => e.slice(1, -1).indexOf(":") === -1 ? void 0 : ( () => {
    const t = e.slice(1, -1)
      , n = t.indexOf(":")
      , r = t.slice(0, n);
    return r ? vx + r : void 0
}
)()
  , xx = e => {
    const {theme: t, classGroups: n} = e;
    return kx(n, t)
}
  , kx = (e, t) => {
    const n = dh();
    for (const r in e) {
        const s = e[r];
        dl(s, n, r, t)
    }
    return n
}
  , dl = (e, t, n, r) => {
    const s = e.length;
    for (let o = 0; o < s; o++) {
        const a = e[o];
        _x(a, t, n, r)
    }
}
  , _x = (e, t, n, r) => {
    if (typeof e == "string") {
        Cx(e, t, n);
        return
    }
    if (typeof e == "function") {
        Sx(e, t, n, r);
        return
    }
    $x(e, t, n, r)
}
  , Cx = (e, t, n) => {
    const r = e === "" ? t : hh(t, e);
    r.classGroupId = n
}
  , Sx = (e, t, n, r) => {
    if (Ax(e)) {
        dl(e(r), t, n, r);
        return
    }
    t.validators === null && (t.validators = []),
    t.validators.push(yx(n, e))
}
  , $x = (e, t, n, r) => {
    const s = Object.entries(e)
      , o = s.length;
    for (let a = 0; a < o; a++) {
        const [i,l] = s[a];
        dl(l, hh(t, i), n, r)
    }
}
  , hh = (e, t) => {
    let n = e;
    const r = t.split(ho)
      , s = r.length;
    for (let o = 0; o < s; o++) {
        const a = r[o];
        let i = n.nextPart.get(a);
        i || (i = dh(),
        n.nextPart.set(a, i)),
        n = i
    }
    return n
}
  , Ax = e => "isThemeGetter"in e && e.isThemeGetter === !0
  , Ox = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = Object.create(null)
      , r = Object.create(null);
    const s = (o, a) => {
        n[o] = a,
        t++,
        t > e && (t = 0,
        r = n,
        n = Object.create(null))
    }
    ;
    return {
        get(o) {
            let a = n[o];
            if (a !== void 0)
                return a;
            if ((a = r[o]) !== void 0)
                return s(o, a),
                a
        },
        set(o, a) {
            o in n ? n[o] = a : s(o, a)
        }
    }
}
  , ui = "!"
  , ou = ":"
  , Dx = []
  , au = (e, t, n, r, s) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: n,
    maybePostfixModifierPosition: r,
    isExternal: s
})
  , Ex = e => {
    const {prefix: t, experimentalParseClassName: n} = e;
    let r = s => {
        const o = [];
        let a = 0, i = 0, l = 0, u;
        const c = s.length;
        for (let g = 0; g < c; g++) {
            const m = s[g];
            if (a === 0 && i === 0) {
                if (m === ou) {
                    o.push(s.slice(l, g)),
                    l = g + 1;
                    continue
                }
                if (m === "/") {
                    u = g;
                    continue
                }
            }
            m === "[" ? a++ : m === "]" ? a-- : m === "(" ? i++ : m === ")" && i--
        }
        const d = o.length === 0 ? s : s.slice(l);
        let f = d
          , p = !1;
        d.endsWith(ui) ? (f = d.slice(0, -1),
        p = !0) : d.startsWith(ui) && (f = d.slice(1),
        p = !0);
        const h = u && u > l ? u - l : void 0;
        return au(o, p, f, h)
    }
    ;
    if (t) {
        const s = t + ou
          , o = r;
        r = a => a.startsWith(s) ? o(a.slice(s.length)) : au(Dx, !1, a, void 0, !0)
    }
    if (n) {
        const s = r;
        r = o => n({
            className: o,
            parseClassName: s
        })
    }
    return r
}
  , Px = e => {
    const t = new Map;
    return e.orderSensitiveModifiers.forEach( (n, r) => {
        t.set(n, 1e6 + r)
    }
    ),
    n => {
        const r = [];
        let s = [];
        for (let o = 0; o < n.length; o++) {
            const a = n[o]
              , i = a[0] === "["
              , l = t.has(a);
            i || l ? (s.length > 0 && (s.sort(),
            r.push(...s),
            s = []),
            r.push(a)) : s.push(a)
        }
        return s.length > 0 && (s.sort(),
        r.push(...s)),
        r
    }
}
  , Mx = e => ({
    cache: Ox(e.cacheSize),
    parseClassName: Ex(e),
    sortModifiers: Px(e),
    ...bx(e)
})
  , Tx = /\s+/
  , Rx = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: s, sortModifiers: o} = t
      , a = []
      , i = e.trim().split(Tx);
    let l = "";
    for (let u = i.length - 1; u >= 0; u -= 1) {
        const c = i[u]
          , {isExternal: d, modifiers: f, hasImportantModifier: p, baseClassName: h, maybePostfixModifierPosition: g} = n(c);
        if (d) {
            l = c + (l.length > 0 ? " " + l : l);
            continue
        }
        let m = !!g
          , b = r(m ? h.substring(0, g) : h);
        if (!b) {
            if (!m) {
                l = c + (l.length > 0 ? " " + l : l);
                continue
            }
            if (b = r(h),
            !b) {
                l = c + (l.length > 0 ? " " + l : l);
                continue
            }
            m = !1
        }
        const y = f.length === 0 ? "" : f.length === 1 ? f[0] : o(f).join(":")
          , v = p ? y + ui : y
          , k = v + b;
        if (a.indexOf(k) > -1)
            continue;
        a.push(k);
        const _ = s(b, m);
        for (let $ = 0; $ < _.length; ++$) {
            const A = _[$];
            a.push(v + A)
        }
        l = c + (l.length > 0 ? " " + l : l)
    }
    return l
}
  , Ix = (...e) => {
    let t = 0, n, r, s = "";
    for (; t < e.length; )
        (n = e[t++]) && (r = ph(n)) && (s && (s += " "),
        s += r);
    return s
}
  , ph = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = ph(e[r])) && (n && (n += " "),
        n += t);
    return n
}
  , di = (e, ...t) => {
    let n, r, s, o;
    const a = l => {
        const u = t.reduce( (c, d) => d(c), e());
        return n = Mx(u),
        r = n.cache.get,
        s = n.cache.set,
        o = i,
        i(l)
    }
      , i = l => {
        const u = r(l);
        if (u)
            return u;
        const c = Rx(l, n);
        return s(l, c),
        c
    }
    ;
    return o = a,
    (...l) => o(Ix(...l))
}
  , qx = []
  , Be = e => {
    const t = n => n[e] || qx;
    return t.isThemeGetter = !0,
    t
}
  , gh = /^\[(?:(\w[\w-]*):)?(.+)\]$/i
  , mh = /^\((?:(\w[\w-]*):)?(.+)\)$/i
  , Fx = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/
  , Lx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , Bx = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , Nx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/
  , Hx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , jx = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , hn = e => Fx.test(e)
  , ge = e => !!e && !Number.isNaN(Number(e))
  , pn = e => !!e && Number.isInteger(Number(e))
  , Ca = e => e.endsWith("%") && ge(e.slice(0, -1))
  , Ut = e => Lx.test(e)
  , yh = () => !0
  , Vx = e => Bx.test(e) && !Nx.test(e)
  , fl = () => !1
  , Wx = e => Hx.test(e)
  , zx = e => jx.test(e)
  , Ux = e => !ne(e) && !re(e)
  , Gx = e => $n(e, wh, fl)
  , ne = e => gh.test(e)
  , Pn = e => $n(e, xh, Vx)
  , iu = e => $n(e, tk, ge)
  , Kx = e => $n(e, _h, yh)
  , Yx = e => $n(e, kh, fl)
  , lu = e => $n(e, vh, fl)
  , Jx = e => $n(e, bh, zx)
  , Es = e => $n(e, Ch, Wx)
  , re = e => mh.test(e)
  , Rr = e => Jn(e, xh)
  , Qx = e => Jn(e, kh)
  , cu = e => Jn(e, vh)
  , Zx = e => Jn(e, wh)
  , Xx = e => Jn(e, bh)
  , Ps = e => Jn(e, Ch, !0)
  , ek = e => Jn(e, _h, !0)
  , $n = (e, t, n) => {
    const r = gh.exec(e);
    return r ? r[1] ? t(r[1]) : n(r[2]) : !1
}
  , Jn = (e, t, n=!1) => {
    const r = mh.exec(e);
    return r ? r[1] ? t(r[1]) : n : !1
}
  , vh = e => e === "position" || e === "percentage"
  , bh = e => e === "image" || e === "url"
  , wh = e => e === "length" || e === "size" || e === "bg-size"
  , xh = e => e === "length"
  , tk = e => e === "number"
  , kh = e => e === "family-name"
  , _h = e => e === "number" || e === "weight"
  , Ch = e => e === "shadow"
  , fi = () => {
    const e = Be("color")
      , t = Be("font")
      , n = Be("text")
      , r = Be("font-weight")
      , s = Be("tracking")
      , o = Be("leading")
      , a = Be("breakpoint")
      , i = Be("container")
      , l = Be("spacing")
      , u = Be("radius")
      , c = Be("shadow")
      , d = Be("inset-shadow")
      , f = Be("text-shadow")
      , p = Be("drop-shadow")
      , h = Be("blur")
      , g = Be("perspective")
      , m = Be("aspect")
      , b = Be("ease")
      , y = Be("animate")
      , v = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , k = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"]
      , _ = () => [...k(), re, ne]
      , $ = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , A = () => ["auto", "contain", "none"]
      , S = () => [re, ne, l]
      , P = () => [hn, "full", "auto", ...S()]
      , U = () => [pn, "none", "subgrid", re, ne]
      , ee = () => ["auto", {
        span: ["full", pn, re, ne]
    }, pn, re, ne]
      , M = () => [pn, "auto", re, ne]
      , q = () => ["auto", "min", "max", "fr", re, ne]
      , D = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"]
      , N = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"]
      , R = () => ["auto", ...S()]
      , H = () => [hn, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...S()]
      , j = () => [hn, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...S()]
      , le = () => [hn, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...S()]
      , K = () => [e, re, ne]
      , we = () => [...k(), cu, lu, {
        position: [re, ne]
    }]
      , pe = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
    }]
      , Se = () => ["auto", "cover", "contain", Zx, Gx, {
        size: [re, ne]
    }]
      , Ge = () => [Ca, Rr, Pn]
      , xe = () => ["", "none", "full", u, re, ne]
      , $e = () => ["", ge, Rr, Pn]
      , ut = () => ["solid", "dashed", "dotted", "double"]
      , vt = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , Me = () => [ge, Ca, cu, lu]
      , bt = () => ["", "none", h, re, ne]
      , Et = () => ["none", ge, re, ne]
      , w = () => ["none", ge, re, ne]
      , C = () => [ge, re, ne]
      , E = () => [hn, "full", ...S()];
    return {
        cacheSize: 500,
        theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [Ut],
            breakpoint: [Ut],
            color: [yh],
            container: [Ut],
            "drop-shadow": [Ut],
            ease: ["in", "out", "in-out"],
            font: [Ux],
            "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
            "inset-shadow": [Ut],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
            radius: [Ut],
            shadow: [Ut],
            spacing: ["px", ge],
            text: [Ut],
            "text-shadow": [Ut],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", hn, ne, re, m]
            }],
            container: ["container"],
            columns: [{
                columns: [ge, ne, re, i]
            }],
            "break-after": [{
                "break-after": v()
            }],
            "break-before": [{
                "break-before": v()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            sr: ["sr-only", "not-sr-only"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: _()
            }],
            overflow: [{
                overflow: $()
            }],
            "overflow-x": [{
                "overflow-x": $()
            }],
            "overflow-y": [{
                "overflow-y": $()
            }],
            overscroll: [{
                overscroll: A()
            }],
            "overscroll-x": [{
                "overscroll-x": A()
            }],
            "overscroll-y": [{
                "overscroll-y": A()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: P()
            }],
            "inset-x": [{
                "inset-x": P()
            }],
            "inset-y": [{
                "inset-y": P()
            }],
            start: [{
                "inset-s": P(),
                start: P()
            }],
            end: [{
                "inset-e": P(),
                end: P()
            }],
            "inset-bs": [{
                "inset-bs": P()
            }],
            "inset-be": [{
                "inset-be": P()
            }],
            top: [{
                top: P()
            }],
            right: [{
                right: P()
            }],
            bottom: [{
                bottom: P()
            }],
            left: [{
                left: P()
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: [pn, "auto", re, ne]
            }],
            basis: [{
                basis: [hn, "full", "auto", i, ...S()]
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["nowrap", "wrap", "wrap-reverse"]
            }],
            flex: [{
                flex: [ge, hn, "auto", "initial", "none", ne]
            }],
            grow: [{
                grow: ["", ge, re, ne]
            }],
            shrink: [{
                shrink: ["", ge, re, ne]
            }],
            order: [{
                order: [pn, "first", "last", "none", re, ne]
            }],
            "grid-cols": [{
                "grid-cols": U()
            }],
            "col-start-end": [{
                col: ee()
            }],
            "col-start": [{
                "col-start": M()
            }],
            "col-end": [{
                "col-end": M()
            }],
            "grid-rows": [{
                "grid-rows": U()
            }],
            "row-start-end": [{
                row: ee()
            }],
            "row-start": [{
                "row-start": M()
            }],
            "row-end": [{
                "row-end": M()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": q()
            }],
            "auto-rows": [{
                "auto-rows": q()
            }],
            gap: [{
                gap: S()
            }],
            "gap-x": [{
                "gap-x": S()
            }],
            "gap-y": [{
                "gap-y": S()
            }],
            "justify-content": [{
                justify: [...D(), "normal"]
            }],
            "justify-items": [{
                "justify-items": [...N(), "normal"]
            }],
            "justify-self": [{
                "justify-self": ["auto", ...N()]
            }],
            "align-content": [{
                content: ["normal", ...D()]
            }],
            "align-items": [{
                items: [...N(), {
                    baseline: ["", "last"]
                }]
            }],
            "align-self": [{
                self: ["auto", ...N(), {
                    baseline: ["", "last"]
                }]
            }],
            "place-content": [{
                "place-content": D()
            }],
            "place-items": [{
                "place-items": [...N(), "baseline"]
            }],
            "place-self": [{
                "place-self": ["auto", ...N()]
            }],
            p: [{
                p: S()
            }],
            px: [{
                px: S()
            }],
            py: [{
                py: S()
            }],
            ps: [{
                ps: S()
            }],
            pe: [{
                pe: S()
            }],
            pbs: [{
                pbs: S()
            }],
            pbe: [{
                pbe: S()
            }],
            pt: [{
                pt: S()
            }],
            pr: [{
                pr: S()
            }],
            pb: [{
                pb: S()
            }],
            pl: [{
                pl: S()
            }],
            m: [{
                m: R()
            }],
            mx: [{
                mx: R()
            }],
            my: [{
                my: R()
            }],
            ms: [{
                ms: R()
            }],
            me: [{
                me: R()
            }],
            mbs: [{
                mbs: R()
            }],
            mbe: [{
                mbe: R()
            }],
            mt: [{
                mt: R()
            }],
            mr: [{
                mr: R()
            }],
            mb: [{
                mb: R()
            }],
            ml: [{
                ml: R()
            }],
            "space-x": [{
                "space-x": S()
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": S()
            }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{
                size: H()
            }],
            "inline-size": [{
                inline: ["auto", ...j()]
            }],
            "min-inline-size": [{
                "min-inline": ["auto", ...j()]
            }],
            "max-inline-size": [{
                "max-inline": ["none", ...j()]
            }],
            "block-size": [{
                block: ["auto", ...le()]
            }],
            "min-block-size": [{
                "min-block": ["auto", ...le()]
            }],
            "max-block-size": [{
                "max-block": ["none", ...le()]
            }],
            w: [{
                w: [i, "screen", ...H()]
            }],
            "min-w": [{
                "min-w": [i, "screen", "none", ...H()]
            }],
            "max-w": [{
                "max-w": [i, "screen", "none", "prose", {
                    screen: [a]
                }, ...H()]
            }],
            h: [{
                h: ["screen", "lh", ...H()]
            }],
            "min-h": [{
                "min-h": ["screen", "lh", "none", ...H()]
            }],
            "max-h": [{
                "max-h": ["screen", "lh", ...H()]
            }],
            "font-size": [{
                text: ["base", n, Rr, Pn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: [r, ek, Kx]
            }],
            "font-stretch": [{
                "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ca, ne]
            }],
            "font-family": [{
                font: [Qx, Yx, t]
            }],
            "font-features": [{
                "font-features": [ne]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: [s, re, ne]
            }],
            "line-clamp": [{
                "line-clamp": [ge, "none", re, iu]
            }],
            leading: [{
                leading: [o, ...S()]
            }],
            "list-image": [{
                "list-image": ["none", re, ne]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "list-style-type": [{
                list: ["disc", "decimal", "none", re, ne]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "placeholder-color": [{
                placeholder: K()
            }],
            "text-color": [{
                text: K()
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...ut(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: [ge, "from-font", "auto", re, Pn]
            }],
            "text-decoration-color": [{
                decoration: K()
            }],
            "underline-offset": [{
                "underline-offset": [ge, "auto", re, ne]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: S()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", re, ne]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            wrap: [{
                wrap: ["break-word", "anywhere", "normal"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", re, ne]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: we()
            }],
            "bg-repeat": [{
                bg: pe()
            }],
            "bg-size": [{
                bg: Se()
            }],
            "bg-image": [{
                bg: ["none", {
                    linear: [{
                        to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, pn, re, ne],
                    radial: ["", re, ne],
                    conic: [pn, re, ne]
                }, Xx, Jx]
            }],
            "bg-color": [{
                bg: K()
            }],
            "gradient-from-pos": [{
                from: Ge()
            }],
            "gradient-via-pos": [{
                via: Ge()
            }],
            "gradient-to-pos": [{
                to: Ge()
            }],
            "gradient-from": [{
                from: K()
            }],
            "gradient-via": [{
                via: K()
            }],
            "gradient-to": [{
                to: K()
            }],
            rounded: [{
                rounded: xe()
            }],
            "rounded-s": [{
                "rounded-s": xe()
            }],
            "rounded-e": [{
                "rounded-e": xe()
            }],
            "rounded-t": [{
                "rounded-t": xe()
            }],
            "rounded-r": [{
                "rounded-r": xe()
            }],
            "rounded-b": [{
                "rounded-b": xe()
            }],
            "rounded-l": [{
                "rounded-l": xe()
            }],
            "rounded-ss": [{
                "rounded-ss": xe()
            }],
            "rounded-se": [{
                "rounded-se": xe()
            }],
            "rounded-ee": [{
                "rounded-ee": xe()
            }],
            "rounded-es": [{
                "rounded-es": xe()
            }],
            "rounded-tl": [{
                "rounded-tl": xe()
            }],
            "rounded-tr": [{
                "rounded-tr": xe()
            }],
            "rounded-br": [{
                "rounded-br": xe()
            }],
            "rounded-bl": [{
                "rounded-bl": xe()
            }],
            "border-w": [{
                border: $e()
            }],
            "border-w-x": [{
                "border-x": $e()
            }],
            "border-w-y": [{
                "border-y": $e()
            }],
            "border-w-s": [{
                "border-s": $e()
            }],
            "border-w-e": [{
                "border-e": $e()
            }],
            "border-w-bs": [{
                "border-bs": $e()
            }],
            "border-w-be": [{
                "border-be": $e()
            }],
            "border-w-t": [{
                "border-t": $e()
            }],
            "border-w-r": [{
                "border-r": $e()
            }],
            "border-w-b": [{
                "border-b": $e()
            }],
            "border-w-l": [{
                "border-l": $e()
            }],
            "divide-x": [{
                "divide-x": $e()
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": $e()
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{
                border: [...ut(), "hidden", "none"]
            }],
            "divide-style": [{
                divide: [...ut(), "hidden", "none"]
            }],
            "border-color": [{
                border: K()
            }],
            "border-color-x": [{
                "border-x": K()
            }],
            "border-color-y": [{
                "border-y": K()
            }],
            "border-color-s": [{
                "border-s": K()
            }],
            "border-color-e": [{
                "border-e": K()
            }],
            "border-color-bs": [{
                "border-bs": K()
            }],
            "border-color-be": [{
                "border-be": K()
            }],
            "border-color-t": [{
                "border-t": K()
            }],
            "border-color-r": [{
                "border-r": K()
            }],
            "border-color-b": [{
                "border-b": K()
            }],
            "border-color-l": [{
                "border-l": K()
            }],
            "divide-color": [{
                divide: K()
            }],
            "outline-style": [{
                outline: [...ut(), "none", "hidden"]
            }],
            "outline-offset": [{
                "outline-offset": [ge, re, ne]
            }],
            "outline-w": [{
                outline: ["", ge, Rr, Pn]
            }],
            "outline-color": [{
                outline: K()
            }],
            shadow: [{
                shadow: ["", "none", c, Ps, Es]
            }],
            "shadow-color": [{
                shadow: K()
            }],
            "inset-shadow": [{
                "inset-shadow": ["none", d, Ps, Es]
            }],
            "inset-shadow-color": [{
                "inset-shadow": K()
            }],
            "ring-w": [{
                ring: $e()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: K()
            }],
            "ring-offset-w": [{
                "ring-offset": [ge, Pn]
            }],
            "ring-offset-color": [{
                "ring-offset": K()
            }],
            "inset-ring-w": [{
                "inset-ring": $e()
            }],
            "inset-ring-color": [{
                "inset-ring": K()
            }],
            "text-shadow": [{
                "text-shadow": ["none", f, Ps, Es]
            }],
            "text-shadow-color": [{
                "text-shadow": K()
            }],
            opacity: [{
                opacity: [ge, re, ne]
            }],
            "mix-blend": [{
                "mix-blend": [...vt(), "plus-darker", "plus-lighter"]
            }],
            "bg-blend": [{
                "bg-blend": vt()
            }],
            "mask-clip": [{
                "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
            }, "mask-no-clip"],
            "mask-composite": [{
                mask: ["add", "subtract", "intersect", "exclude"]
            }],
            "mask-image-linear-pos": [{
                "mask-linear": [ge]
            }],
            "mask-image-linear-from-pos": [{
                "mask-linear-from": Me()
            }],
            "mask-image-linear-to-pos": [{
                "mask-linear-to": Me()
            }],
            "mask-image-linear-from-color": [{
                "mask-linear-from": K()
            }],
            "mask-image-linear-to-color": [{
                "mask-linear-to": K()
            }],
            "mask-image-t-from-pos": [{
                "mask-t-from": Me()
            }],
            "mask-image-t-to-pos": [{
                "mask-t-to": Me()
            }],
            "mask-image-t-from-color": [{
                "mask-t-from": K()
            }],
            "mask-image-t-to-color": [{
                "mask-t-to": K()
            }],
            "mask-image-r-from-pos": [{
                "mask-r-from": Me()
            }],
            "mask-image-r-to-pos": [{
                "mask-r-to": Me()
            }],
            "mask-image-r-from-color": [{
                "mask-r-from": K()
            }],
            "mask-image-r-to-color": [{
                "mask-r-to": K()
            }],
            "mask-image-b-from-pos": [{
                "mask-b-from": Me()
            }],
            "mask-image-b-to-pos": [{
                "mask-b-to": Me()
            }],
            "mask-image-b-from-color": [{
                "mask-b-from": K()
            }],
            "mask-image-b-to-color": [{
                "mask-b-to": K()
            }],
            "mask-image-l-from-pos": [{
                "mask-l-from": Me()
            }],
            "mask-image-l-to-pos": [{
                "mask-l-to": Me()
            }],
            "mask-image-l-from-color": [{
                "mask-l-from": K()
            }],
            "mask-image-l-to-color": [{
                "mask-l-to": K()
            }],
            "mask-image-x-from-pos": [{
                "mask-x-from": Me()
            }],
            "mask-image-x-to-pos": [{
                "mask-x-to": Me()
            }],
            "mask-image-x-from-color": [{
                "mask-x-from": K()
            }],
            "mask-image-x-to-color": [{
                "mask-x-to": K()
            }],
            "mask-image-y-from-pos": [{
                "mask-y-from": Me()
            }],
            "mask-image-y-to-pos": [{
                "mask-y-to": Me()
            }],
            "mask-image-y-from-color": [{
                "mask-y-from": K()
            }],
            "mask-image-y-to-color": [{
                "mask-y-to": K()
            }],
            "mask-image-radial": [{
                "mask-radial": [re, ne]
            }],
            "mask-image-radial-from-pos": [{
                "mask-radial-from": Me()
            }],
            "mask-image-radial-to-pos": [{
                "mask-radial-to": Me()
            }],
            "mask-image-radial-from-color": [{
                "mask-radial-from": K()
            }],
            "mask-image-radial-to-color": [{
                "mask-radial-to": K()
            }],
            "mask-image-radial-shape": [{
                "mask-radial": ["circle", "ellipse"]
            }],
            "mask-image-radial-size": [{
                "mask-radial": [{
                    closest: ["side", "corner"],
                    farthest: ["side", "corner"]
                }]
            }],
            "mask-image-radial-pos": [{
                "mask-radial-at": k()
            }],
            "mask-image-conic-pos": [{
                "mask-conic": [ge]
            }],
            "mask-image-conic-from-pos": [{
                "mask-conic-from": Me()
            }],
            "mask-image-conic-to-pos": [{
                "mask-conic-to": Me()
            }],
            "mask-image-conic-from-color": [{
                "mask-conic-from": K()
            }],
            "mask-image-conic-to-color": [{
                "mask-conic-to": K()
            }],
            "mask-mode": [{
                mask: ["alpha", "luminance", "match"]
            }],
            "mask-origin": [{
                "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
            }],
            "mask-position": [{
                mask: we()
            }],
            "mask-repeat": [{
                mask: pe()
            }],
            "mask-size": [{
                mask: Se()
            }],
            "mask-type": [{
                "mask-type": ["alpha", "luminance"]
            }],
            "mask-image": [{
                mask: ["none", re, ne]
            }],
            filter: [{
                filter: ["", "none", re, ne]
            }],
            blur: [{
                blur: bt()
            }],
            brightness: [{
                brightness: [ge, re, ne]
            }],
            contrast: [{
                contrast: [ge, re, ne]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", p, Ps, Es]
            }],
            "drop-shadow-color": [{
                "drop-shadow": K()
            }],
            grayscale: [{
                grayscale: ["", ge, re, ne]
            }],
            "hue-rotate": [{
                "hue-rotate": [ge, re, ne]
            }],
            invert: [{
                invert: ["", ge, re, ne]
            }],
            saturate: [{
                saturate: [ge, re, ne]
            }],
            sepia: [{
                sepia: ["", ge, re, ne]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none", re, ne]
            }],
            "backdrop-blur": [{
                "backdrop-blur": bt()
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [ge, re, ne]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [ge, re, ne]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": ["", ge, re, ne]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [ge, re, ne]
            }],
            "backdrop-invert": [{
                "backdrop-invert": ["", ge, re, ne]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [ge, re, ne]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [ge, re, ne]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": ["", ge, re, ne]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": S()
            }],
            "border-spacing-x": [{
                "border-spacing-x": S()
            }],
            "border-spacing-y": [{
                "border-spacing-y": S()
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", re, ne]
            }],
            "transition-behavior": [{
                transition: ["normal", "discrete"]
            }],
            duration: [{
                duration: [ge, "initial", re, ne]
            }],
            ease: [{
                ease: ["linear", "initial", b, re, ne]
            }],
            delay: [{
                delay: [ge, re, ne]
            }],
            animate: [{
                animate: ["none", y, re, ne]
            }],
            backface: [{
                backface: ["hidden", "visible"]
            }],
            perspective: [{
                perspective: [g, re, ne]
            }],
            "perspective-origin": [{
                "perspective-origin": _()
            }],
            rotate: [{
                rotate: Et()
            }],
            "rotate-x": [{
                "rotate-x": Et()
            }],
            "rotate-y": [{
                "rotate-y": Et()
            }],
            "rotate-z": [{
                "rotate-z": Et()
            }],
            scale: [{
                scale: w()
            }],
            "scale-x": [{
                "scale-x": w()
            }],
            "scale-y": [{
                "scale-y": w()
            }],
            "scale-z": [{
                "scale-z": w()
            }],
            "scale-3d": ["scale-3d"],
            skew: [{
                skew: C()
            }],
            "skew-x": [{
                "skew-x": C()
            }],
            "skew-y": [{
                "skew-y": C()
            }],
            transform: [{
                transform: [re, ne, "", "none", "gpu", "cpu"]
            }],
            "transform-origin": [{
                origin: _()
            }],
            "transform-style": [{
                transform: ["3d", "flat"]
            }],
            translate: [{
                translate: E()
            }],
            "translate-x": [{
                "translate-x": E()
            }],
            "translate-y": [{
                "translate-y": E()
            }],
            "translate-z": [{
                "translate-z": E()
            }],
            "translate-none": ["translate-none"],
            accent: [{
                accent: K()
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            "caret-color": [{
                caret: K()
            }],
            "color-scheme": [{
                scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", re, ne]
            }],
            "field-sizing": [{
                "field-sizing": ["fixed", "content"]
            }],
            "pointer-events": [{
                "pointer-events": ["auto", "none"]
            }],
            resize: [{
                resize: ["none", "", "y", "x"]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": S()
            }],
            "scroll-mx": [{
                "scroll-mx": S()
            }],
            "scroll-my": [{
                "scroll-my": S()
            }],
            "scroll-ms": [{
                "scroll-ms": S()
            }],
            "scroll-me": [{
                "scroll-me": S()
            }],
            "scroll-mbs": [{
                "scroll-mbs": S()
            }],
            "scroll-mbe": [{
                "scroll-mbe": S()
            }],
            "scroll-mt": [{
                "scroll-mt": S()
            }],
            "scroll-mr": [{
                "scroll-mr": S()
            }],
            "scroll-mb": [{
                "scroll-mb": S()
            }],
            "scroll-ml": [{
                "scroll-ml": S()
            }],
            "scroll-p": [{
                "scroll-p": S()
            }],
            "scroll-px": [{
                "scroll-px": S()
            }],
            "scroll-py": [{
                "scroll-py": S()
            }],
            "scroll-ps": [{
                "scroll-ps": S()
            }],
            "scroll-pe": [{
                "scroll-pe": S()
            }],
            "scroll-pbs": [{
                "scroll-pbs": S()
            }],
            "scroll-pbe": [{
                "scroll-pbe": S()
            }],
            "scroll-pt": [{
                "scroll-pt": S()
            }],
            "scroll-pr": [{
                "scroll-pr": S()
            }],
            "scroll-pb": [{
                "scroll-pb": S()
            }],
            "scroll-pl": [{
                "scroll-pl": S()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", re, ne]
            }],
            fill: [{
                fill: ["none", ...K()]
            }],
            "stroke-w": [{
                stroke: [ge, Rr, Pn, iu]
            }],
            stroke: [{
                stroke: ["none", ...K()]
            }],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        },
        orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
    }
}
  , nk = (e, {cacheSize: t, prefix: n, experimentalParseClassName: r, extend: s={}, override: o={}}) => (Hr(e, "cacheSize", t),
Hr(e, "prefix", n),
Hr(e, "experimentalParseClassName", r),
Ms(e.theme, o.theme),
Ms(e.classGroups, o.classGroups),
Ms(e.conflictingClassGroups, o.conflictingClassGroups),
Ms(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers),
Hr(e, "orderSensitiveModifiers", o.orderSensitiveModifiers),
Ts(e.theme, s.theme),
Ts(e.classGroups, s.classGroups),
Ts(e.conflictingClassGroups, s.conflictingClassGroups),
Ts(e.conflictingClassGroupModifiers, s.conflictingClassGroupModifiers),
Sh(e, s, "orderSensitiveModifiers"),
e)
  , Hr = (e, t, n) => {
    n !== void 0 && (e[t] = n)
}
  , Ms = (e, t) => {
    if (t)
        for (const n in t)
            Hr(e, n, t[n])
}
  , Ts = (e, t) => {
    if (t)
        for (const n in t)
            Sh(e, t, n)
}
  , Sh = (e, t, n) => {
    const r = t[n];
    r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r)
}
  , rk = (e, ...t) => typeof e == "function" ? di(fi, e, ...t) : di( () => nk(fi(), e), ...t)
  , sk = di(fi);
var ok = e => ot(e) ? sk : rk({
    ...e,
    extend: {
        theme: e.theme,
        classGroups: e.classGroups,
        conflictingClassGroupModifiers: e.conflictingClassGroupModifiers,
        conflictingClassGroups: e.conflictingClassGroups,
        ...e.extend
    }
})
  , ak = (e, t) => {
    const n = fo(e);
    return !n || !((t == null ? void 0 : t.twMerge) ?? !0) ? n : ((!Jt.cachedTwMerge || Jt.didTwMergeConfigChange) && (Jt.didTwMergeConfigChange = !1,
    Jt.cachedTwMerge = ok(Jt.cachedTwMergeConfig)),
    Jt.cachedTwMerge(n) || void 0)
}
  , ik = (...e) => t => ak(e, t)
  , {createTV: lk} = gx(ik);
const ck = nf;
var Su;
const xt = lk((Su = ck.ui) == null ? void 0 : Su.tv)
  , uk = {
    slots: {
        content: "bg-default shadow-lg rounded-md ring ring-default data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-popover-content-transform-origin) focus:outline-none pointer-events-auto",
        arrow: "fill-default"
    }
}
  , dk = {
    __name: "Popover",
    props: {
        mode: {
            type: String,
            required: !1,
            default: "click"
        },
        content: {
            type: Object,
            required: !1
        },
        arrow: {
            type: [Boolean, Object],
            required: !1
        },
        portal: {
            type: [Boolean, String],
            required: !1,
            skipCheck: !0,
            default: !0
        },
        reference: {
            type: null,
            required: !1
        },
        dismissible: {
            type: Boolean,
            required: !1,
            default: !0
        },
        class: {
            type: null,
            required: !1
        },
        ui: {
            type: null,
            required: !1
        },
        defaultOpen: {
            type: Boolean,
            required: !1
        },
        open: {
            type: Boolean,
            required: !1
        },
        modal: {
            type: Boolean,
            required: !1
        },
        openDelay: {
            type: Number,
            required: !1,
            default: 0
        },
        closeDelay: {
            type: Number,
            required: !1,
            default: 0
        }
    },
    emits: ["close:prevent", "update:open"],
    setup(e, {emit: t}) {
        const n = e
          , r = t
          , s = yd()
          , o = Cn()
          , a = n.mode === "hover" ? Wa(n, "defaultOpen", "open", "openDelay", "closeDelay") : Wa(n, "defaultOpen", "open", "modal")
          , i = _r(a, r)
          , l = lx(Ln( () => n.portal))
          , u = Ln( () => hs(n.content, {
            side: "bottom",
            sideOffset: 8,
            collisionPadding: 8
        }))
          , c = O( () => n.dismissible ? {} : ["pointerDownOutside", "interactOutside", "escapeKeyDown"].reduce( (g, m) => (g[m] = b => {
            b.preventDefault(),
            r("close:prevent")
        }
        ,
        g), {}))
          , d = Ln( () => n.arrow)
          , f = O( () => {
            var h;
            return xt({
                extend: xt(uk),
                ...((h = o.ui) == null ? void 0 : h.popover) || {}
            })({
                side: u.value.side
            })
        }
        )
          , p = O( () => n.mode === "hover" ? sx : ox);
        return (h, g) => (T(),
        Y(x(p).Root, He(Je(x(i))), {
            default: V( ({open: m}) => [s.default || e.reference ? (T(),
            Y(x(p).Trigger, {
                key: 0,
                "as-child": "",
                reference: e.reference,
                class: Ee(n.class)
            }, {
                default: V( () => [te(h.$slots, "default", {
                    open: m
                })]),
                _: 2
            }, 1032, ["reference", "class"])) : Ye("", !0), "Anchor"in p.value && s.anchor ? (T(),
            Y(x(p).Anchor, {
                key: 1,
                "as-child": ""
            }, {
                default: V( () => [te(h.$slots, "anchor")]),
                _: 3
            })) : Ye("", !0), he(x(p).Portal, He(Je(x(l))), {
                default: V( () => {
                    var b;
                    return [he(x(p).Content, me(u.value, {
                        class: f.value.content({
                            class: [!s.default && n.class, (b = n.ui) == null ? void 0 : b.content]
                        })
                    }, Jp(c.value)), {
                        default: V( () => {
                            var y;
                            return [te(h.$slots, "content"), e.arrow ? (T(),
                            Y(x(p).Arrow, me({
                                key: 0
                            }, d.value, {
                                class: f.value.arrow({
                                    class: (y = n.ui) == null ? void 0 : y.arrow
                                })
                            }), null, 16, ["class"])) : Ye("", !0)]
                        }
                        ),
                        _: 3
                    }, 16, ["class"])]
                }
                ),
                _: 3
            }, 16)]),
            _: 3
        }, 16))
    }
};
function fk(e) {
    const t = Cn()
      , n = O( () => Re(e))
      , r = O( () => n.value.icon && n.value.leading || n.value.icon && !n.value.trailing || n.value.loading && !n.value.trailing || !!n.value.leadingIcon)
      , s = O( () => n.value.icon && n.value.trailing || n.value.loading && n.value.trailing || !!n.value.trailingIcon)
      , o = O( () => n.value.loading ? n.value.loadingIcon || t.ui.icons.loading : n.value.leadingIcon || n.value.icon)
      , a = O( () => n.value.loading && !r.value ? n.value.loadingIcon || t.ui.icons.loading : n.value.trailingIcon || n.value.icon);
    return {
        isLeading: r,
        isTrailing: s,
        leadingIconName: o,
        trailingIconName: a
    }
}
const hk = Symbol("nuxt-ui.button-group");
function pk(e) {
    const t = et(hk, void 0);
    return {
        orientation: O( () => t == null ? void 0 : t.value.orientation),
        size: O( () => (e == null ? void 0 : e.size) ?? (t == null ? void 0 : t.value.size))
    }
}
const gk = Symbol("nuxt-ui.form-loading");
function mk(e) {
    const t = Object.keys(e)
      , n = t.filter(o => o.startsWith("aria-"))
      , r = t.filter(o => o.startsWith("data-"))
      , s = ["active", "activeClass", "ariaCurrentValue", "as", "disabled", "exact", "exactActiveClass", "exactHash", "exactQuery", "external", "href", "download", "inactiveClass", "noPrefetch", "noRel", "prefetch", "prefetchedClass", "rel", "replace", "target", "to", "type", "title", "onClick", ...n, ...r];
    return Wa(e, ...s)
}
function yk(e, t) {
    const n = Ry(e, t).reduce( (o, a) => (a.type === "added" && o.add(a.key),
    o), new Set)
      , r = Object.fromEntries(Object.entries(e).filter( ([o]) => !n.has(o)))
      , s = Object.fromEntries(Object.entries(t).filter( ([o]) => !n.has(o)));
    return of(r, s)
}
const $h = /^[a-z0-9]+(-[a-z0-9]+)*$/
  , Wo = (e, t, n, r="") => {
    const s = e.split(":");
    if (e.slice(0, 1) === "@") {
        if (s.length < 2 || s.length > 3)
            return null;
        r = s.shift().slice(1)
    }
    if (s.length > 3 || !s.length)
        return null;
    if (s.length > 1) {
        const i = s.pop()
          , l = s.pop()
          , u = {
            provider: s.length > 0 ? s[0] : r,
            prefix: l,
            name: i
        };
        return t && !Vs(u) ? null : u
    }
    const o = s[0]
      , a = o.split("-");
    if (a.length > 1) {
        const i = {
            provider: r,
            prefix: a.shift(),
            name: a.join("-")
        };
        return t && !Vs(i) ? null : i
    }
    if (n && r === "") {
        const i = {
            provider: r,
            prefix: "",
            name: o
        };
        return t && !Vs(i, n) ? null : i
    }
    return null
}
  , Vs = (e, t) => e ? !!((t && e.prefix === "" || e.prefix) && e.name) : !1
  , Ah = Object.freeze({
    left: 0,
    top: 0,
    width: 16,
    height: 16
})
  , po = Object.freeze({
    rotate: 0,
    vFlip: !1,
    hFlip: !1
})
  , zo = Object.freeze({
    ...Ah,
    ...po
})
  , hi = Object.freeze({
    ...zo,
    body: "",
    hidden: !1
});
function vk(e, t) {
    const n = {};
    !e.hFlip != !t.hFlip && (n.hFlip = !0),
    !e.vFlip != !t.vFlip && (n.vFlip = !0);
    const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
    return r && (n.rotate = r),
    n
}
function uu(e, t) {
    const n = vk(e, t);
    for (const r in hi)
        r in po ? r in e && !(r in n) && (n[r] = po[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
    return n
}
function bk(e, t) {
    const n = e.icons
      , r = e.aliases || Object.create(null)
      , s = Object.create(null);
    function o(a) {
        if (n[a])
            return s[a] = [];
        if (!(a in s)) {
            s[a] = null;
            const i = r[a] && r[a].parent
              , l = i && o(i);
            l && (s[a] = [i].concat(l))
        }
        return s[a]
    }
    return Object.keys(n).concat(Object.keys(r)).forEach(o),
    s
}
function wk(e, t, n) {
    const r = e.icons
      , s = e.aliases || Object.create(null);
    let o = {};
    function a(i) {
        o = uu(r[i] || s[i], o)
    }
    return a(t),
    n.forEach(a),
    uu(e, o)
}
function Oh(e, t) {
    const n = [];
    if (typeof e != "object" || typeof e.icons != "object")
        return n;
    e.not_found instanceof Array && e.not_found.forEach(s => {
        t(s, null),
        n.push(s)
    }
    );
    const r = bk(e);
    for (const s in r) {
        const o = r[s];
        o && (t(s, wk(e, s, o)),
        n.push(s))
    }
    return n
}
const xk = {
    provider: "",
    aliases: {},
    not_found: {},
    ...Ah
};
function Sa(e, t) {
    for (const n in t)
        if (n in e && typeof e[n] != typeof t[n])
            return !1;
    return !0
}
function Dh(e) {
    if (typeof e != "object" || e === null)
        return null;
    const t = e;
    if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !Sa(e, xk))
        return null;
    const n = t.icons;
    for (const s in n) {
        const o = n[s];
        if (!s || typeof o.body != "string" || !Sa(o, hi))
            return null
    }
    const r = t.aliases || Object.create(null);
    for (const s in r) {
        const o = r[s]
          , a = o.parent;
        if (!s || typeof a != "string" || !n[a] && !r[a] || !Sa(o, hi))
            return null
    }
    return t
}
const du = Object.create(null);
function kk(e, t) {
    return {
        provider: e,
        prefix: t,
        icons: Object.create(null),
        missing: new Set
    }
}
function wr(e, t) {
    const n = du[e] || (du[e] = Object.create(null));
    return n[t] || (n[t] = kk(e, t))
}
function Eh(e, t) {
    return Dh(t) ? Oh(t, (n, r) => {
        r ? e.icons[n] = r : e.missing.add(n)
    }
    ) : []
}
function _k(e, t, n) {
    try {
        if (typeof n.body == "string")
            return e.icons[t] = {
                ...n
            },
            !0
    } catch {}
    return !1
}
let ls = !1;
function Ph(e) {
    return typeof e == "boolean" && (ls = e),
    ls
}
function Ck(e) {
    const t = typeof e == "string" ? Wo(e, !0, ls) : e;
    if (t) {
        const n = wr(t.provider, t.prefix)
          , r = t.name;
        return n.icons[r] || (n.missing.has(r) ? null : void 0)
    }
}
function Sk(e, t) {
    const n = Wo(e, !0, ls);
    if (!n)
        return !1;
    const r = wr(n.provider, n.prefix);
    return t ? _k(r, n.name, t) : (r.missing.add(n.name),
    !0)
}
function $k(e, t) {
    if (typeof e != "object")
        return !1;
    if (typeof t != "string" && (t = e.provider || ""),
    ls && !t && !e.prefix) {
        let s = !1;
        return Dh(e) && (e.prefix = "",
        Oh(e, (o, a) => {
            Sk(o, a) && (s = !0)
        }
        )),
        s
    }
    const n = e.prefix;
    if (!Vs({
        prefix: n,
        name: "a"
    }))
        return !1;
    const r = wr(t, n);
    return !!Eh(r, e)
}
const Mh = Object.freeze({
    width: null,
    height: null
})
  , Th = Object.freeze({
    ...Mh,
    ...po
})
  , Ak = /(-?[0-9.]*[0-9]+[0-9.]*)/g
  , Ok = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function fu(e, t, n) {
    if (t === 1)
        return e;
    if (n = n || 100,
    typeof e == "number")
        return Math.ceil(e * t * n) / n;
    if (typeof e != "string")
        return e;
    const r = e.split(Ak);
    if (r === null || !r.length)
        return e;
    const s = [];
    let o = r.shift()
      , a = Ok.test(o);
    for (; ; ) {
        if (a) {
            const i = parseFloat(o);
            isNaN(i) ? s.push(o) : s.push(Math.ceil(i * t * n) / n)
        } else
            s.push(o);
        if (o = r.shift(),
        o === void 0)
            return s.join("");
        a = !a
    }
}
function Dk(e, t="defs") {
    let n = "";
    const r = e.indexOf("<" + t);
    for (; r >= 0; ) {
        const s = e.indexOf(">", r)
          , o = e.indexOf("</" + t);
        if (s === -1 || o === -1)
            break;
        const a = e.indexOf(">", o);
        if (a === -1)
            break;
        n += e.slice(s + 1, o).trim(),
        e = e.slice(0, r).trim() + e.slice(a + 1)
    }
    return {
        defs: n,
        content: e
    }
}
function Ek(e, t) {
    return e ? "<defs>" + e + "</defs>" + t : t
}
function Pk(e, t, n) {
    const r = Dk(e);
    return Ek(r.defs, t + r.content + n)
}
const Mk = e => e === "unset" || e === "undefined" || e === "none";
function Tk(e, t) {
    const n = {
        ...zo,
        ...e
    }
      , r = {
        ...Th,
        ...t
    }
      , s = {
        left: n.left,
        top: n.top,
        width: n.width,
        height: n.height
    };
    let o = n.body;
    [n, r].forEach(g => {
        const m = []
          , b = g.hFlip
          , y = g.vFlip;
        let v = g.rotate;
        b ? y ? v += 2 : (m.push("translate(" + (s.width + s.left).toString() + " " + (0 - s.top).toString() + ")"),
        m.push("scale(-1 1)"),
        s.top = s.left = 0) : y && (m.push("translate(" + (0 - s.left).toString() + " " + (s.height + s.top).toString() + ")"),
        m.push("scale(1 -1)"),
        s.top = s.left = 0);
        let k;
        switch (v < 0 && (v -= Math.floor(v / 4) * 4),
        v = v % 4,
        v) {
        case 1:
            k = s.height / 2 + s.top,
            m.unshift("rotate(90 " + k.toString() + " " + k.toString() + ")");
            break;
        case 2:
            m.unshift("rotate(180 " + (s.width / 2 + s.left).toString() + " " + (s.height / 2 + s.top).toString() + ")");
            break;
        case 3:
            k = s.width / 2 + s.left,
            m.unshift("rotate(-90 " + k.toString() + " " + k.toString() + ")");
            break
        }
        v % 2 === 1 && (s.left !== s.top && (k = s.left,
        s.left = s.top,
        s.top = k),
        s.width !== s.height && (k = s.width,
        s.width = s.height,
        s.height = k)),
        m.length && (o = Pk(o, '<g transform="' + m.join(" ") + '">', "</g>"))
    }
    );
    const a = r.width
      , i = r.height
      , l = s.width
      , u = s.height;
    let c, d;
    a === null ? (d = i === null ? "1em" : i === "auto" ? u : i,
    c = fu(d, l / u)) : (c = a === "auto" ? l : a,
    d = i === null ? fu(c, u / l) : i === "auto" ? u : i);
    const f = {}
      , p = (g, m) => {
        Mk(m) || (f[g] = m.toString())
    }
    ;
    p("width", c),
    p("height", d);
    const h = [s.left, s.top, l, u];
    return f.viewBox = h.join(" "),
    {
        attributes: f,
        viewBox: h,
        body: o
    }
}
const Rk = /\sid="(\S+)"/g
  , Ik = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let qk = 0;
function Fk(e, t=Ik) {
    const n = [];
    let r;
    for (; r = Rk.exec(e); )
        n.push(r[1]);
    if (!n.length)
        return e;
    const s = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
    return n.forEach(o => {
        const a = typeof t == "function" ? t(o) : t + (qk++).toString()
          , i = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        e = e.replace(new RegExp('([#;"])(' + i + ')([")]|\\.[a-z])',"g"), "$1" + a + s + "$3")
    }
    ),
    e = e.replace(new RegExp(s,"g"), ""),
    e
}
const pi = Object.create(null);
function Lk(e, t) {
    pi[e] = t
}
function gi(e) {
    return pi[e] || pi[""]
}
function hl(e) {
    let t;
    if (typeof e.resources == "string")
        t = [e.resources];
    else if (t = e.resources,
    !(t instanceof Array) || !t.length)
        return null;
    return {
        resources: t,
        path: e.path || "/",
        maxURL: e.maxURL || 500,
        rotate: e.rotate || 750,
        timeout: e.timeout || 5e3,
        random: e.random === !0,
        index: e.index || 0,
        dataAfterTimeout: e.dataAfterTimeout !== !1
    }
}
const pl = Object.create(null)
  , Ir = ["https://api.simplesvg.com", "https://api.unisvg.com"]
  , Ws = [];
for (; Ir.length > 0; )
    Ir.length === 1 || Math.random() > .5 ? Ws.push(Ir.shift()) : Ws.push(Ir.pop());
pl[""] = hl({
    resources: ["https://api.iconify.design"].concat(Ws)
});
function Bk(e, t) {
    const n = hl(t);
    return n === null ? !1 : (pl[e] = n,
    !0)
}
function gl(e) {
    return pl[e]
}
const Nk = () => {
    let e;
    try {
        if (e = fetch,
        typeof e == "function")
            return e
    } catch {}
}
;
let hu = Nk();
function Hk(e, t) {
    const n = gl(e);
    if (!n)
        return 0;
    let r;
    if (!n.maxURL)
        r = 0;
    else {
        let s = 0;
        n.resources.forEach(a => {
            s = Math.max(s, a.length)
        }
        );
        const o = t + ".json?icons=";
        r = n.maxURL - s - n.path.length - o.length
    }
    return r
}
function jk(e) {
    return e === 404
}
const Vk = (e, t, n) => {
    const r = []
      , s = Hk(e, t)
      , o = "icons";
    let a = {
        type: o,
        provider: e,
        prefix: t,
        icons: []
    }
      , i = 0;
    return n.forEach( (l, u) => {
        i += l.length + 1,
        i >= s && u > 0 && (r.push(a),
        a = {
            type: o,
            provider: e,
            prefix: t,
            icons: []
        },
        i = l.length),
        a.icons.push(l)
    }
    ),
    r.push(a),
    r
}
;
function Wk(e) {
    if (typeof e == "string") {
        const t = gl(e);
        if (t)
            return t.path
    }
    return "/"
}
const zk = (e, t, n) => {
    if (!hu) {
        n("abort", 424);
        return
    }
    let r = Wk(t.provider);
    switch (t.type) {
    case "icons":
        {
            const o = t.prefix
              , i = t.icons.join(",")
              , l = new URLSearchParams({
                icons: i
            });
            r += o + ".json?" + l.toString();
            break
        }
    case "custom":
        {
            const o = t.uri;
            r += o.slice(0, 1) === "/" ? o.slice(1) : o;
            break
        }
    default:
        n("abort", 400);
        return
    }
    let s = 503;
    hu(e + r).then(o => {
        const a = o.status;
        if (a !== 200) {
            setTimeout( () => {
                n(jk(a) ? "abort" : "next", a)
            }
            );
            return
        }
        return s = 501,
        o.json()
    }
    ).then(o => {
        if (typeof o != "object" || o === null) {
            setTimeout( () => {
                o === 404 ? n("abort", o) : n("next", s)
            }
            );
            return
        }
        setTimeout( () => {
            n("success", o)
        }
        )
    }
    ).catch( () => {
        n("next", s)
    }
    )
}
  , Uk = {
    prepare: Vk,
    send: zk
};
function Gk(e) {
    const t = {
        loaded: [],
        missing: [],
        pending: []
    }
      , n = Object.create(null);
    e.sort( (s, o) => s.provider !== o.provider ? s.provider.localeCompare(o.provider) : s.prefix !== o.prefix ? s.prefix.localeCompare(o.prefix) : s.name.localeCompare(o.name));
    let r = {
        provider: "",
        prefix: "",
        name: ""
    };
    return e.forEach(s => {
        if (r.name === s.name && r.prefix === s.prefix && r.provider === s.provider)
            return;
        r = s;
        const o = s.provider
          , a = s.prefix
          , i = s.name
          , l = n[o] || (n[o] = Object.create(null))
          , u = l[a] || (l[a] = wr(o, a));
        let c;
        i in u.icons ? c = t.loaded : a === "" || u.missing.has(i) ? c = t.missing : c = t.pending;
        const d = {
            provider: o,
            prefix: a,
            name: i
        };
        c.push(d)
    }
    ),
    t
}
function Rh(e, t) {
    e.forEach(n => {
        const r = n.loaderCallbacks;
        r && (n.loaderCallbacks = r.filter(s => s.id !== t))
    }
    )
}
function Kk(e) {
    e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0,
    setTimeout( () => {
        e.pendingCallbacksFlag = !1;
        const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
        if (!t.length)
            return;
        let n = !1;
        const r = e.provider
          , s = e.prefix;
        t.forEach(o => {
            const a = o.icons
              , i = a.pending.length;
            a.pending = a.pending.filter(l => {
                if (l.prefix !== s)
                    return !0;
                const u = l.name;
                if (e.icons[u])
                    a.loaded.push({
                        provider: r,
                        prefix: s,
                        name: u
                    });
                else if (e.missing.has(u))
                    a.missing.push({
                        provider: r,
                        prefix: s,
                        name: u
                    });
                else
                    return n = !0,
                    !0;
                return !1
            }
            ),
            a.pending.length !== i && (n || Rh([e], o.id),
            o.callback(a.loaded.slice(0), a.missing.slice(0), a.pending.slice(0), o.abort))
        }
        )
    }
    ))
}
let Yk = 0;
function Jk(e, t, n) {
    const r = Yk++
      , s = Rh.bind(null, n, r);
    if (!t.pending.length)
        return s;
    const o = {
        id: r,
        icons: t,
        callback: e,
        abort: s
    };
    return n.forEach(a => {
        (a.loaderCallbacks || (a.loaderCallbacks = [])).push(o)
    }
    ),
    s
}
function Qk(e, t=!0, n=!1) {
    const r = [];
    return e.forEach(s => {
        const o = typeof s == "string" ? Wo(s, t, n) : s;
        o && r.push(o)
    }
    ),
    r
}
var Zk = {
    resources: [],
    index: 0,
    timeout: 2e3,
    rotate: 750,
    random: !1,
    dataAfterTimeout: !1
};
function Xk(e, t, n, r) {
    const s = e.resources.length
      , o = e.random ? Math.floor(Math.random() * s) : e.index;
    let a;
    if (e.random) {
        let $ = e.resources.slice(0);
        for (a = []; $.length > 1; ) {
            const A = Math.floor(Math.random() * $.length);
            a.push($[A]),
            $ = $.slice(0, A).concat($.slice(A + 1))
        }
        a = a.concat($)
    } else
        a = e.resources.slice(o).concat(e.resources.slice(0, o));
    const i = Date.now();
    let l = "pending", u = 0, c, d = null, f = [], p = [];
    typeof r == "function" && p.push(r);
    function h() {
        d && (clearTimeout(d),
        d = null)
    }
    function g() {
        l === "pending" && (l = "aborted"),
        h(),
        f.forEach($ => {
            $.status === "pending" && ($.status = "aborted")
        }
        ),
        f = []
    }
    function m($, A) {
        A && (p = []),
        typeof $ == "function" && p.push($)
    }
    function b() {
        return {
            startTime: i,
            payload: t,
            status: l,
            queriesSent: u,
            queriesPending: f.length,
            subscribe: m,
            abort: g
        }
    }
    function y() {
        l = "failed",
        p.forEach($ => {
            $(void 0, c)
        }
        )
    }
    function v() {
        f.forEach($ => {
            $.status === "pending" && ($.status = "aborted")
        }
        ),
        f = []
    }
    function k($, A, S) {
        const P = A !== "success";
        switch (f = f.filter(U => U !== $),
        l) {
        case "pending":
            break;
        case "failed":
            if (P || !e.dataAfterTimeout)
                return;
            break;
        default:
            return
        }
        if (A === "abort") {
            c = S,
            y();
            return
        }
        if (P) {
            c = S,
            f.length || (a.length ? _() : y());
            return
        }
        if (h(),
        v(),
        !e.random) {
            const U = e.resources.indexOf($.resource);
            U !== -1 && U !== e.index && (e.index = U)
        }
        l = "completed",
        p.forEach(U => {
            U(S)
        }
        )
    }
    function _() {
        if (l !== "pending")
            return;
        h();
        const $ = a.shift();
        if ($ === void 0) {
            if (f.length) {
                d = setTimeout( () => {
                    h(),
                    l === "pending" && (v(),
                    y())
                }
                , e.timeout);
                return
            }
            y();
            return
        }
        const A = {
            status: "pending",
            resource: $,
            callback: (S, P) => {
                k(A, S, P)
            }
        };
        f.push(A),
        u++,
        d = setTimeout(_, e.rotate),
        n($, t, A.callback)
    }
    return setTimeout(_),
    b
}
function Ih(e) {
    const t = {
        ...Zk,
        ...e
    };
    let n = [];
    function r() {
        n = n.filter(i => i().status === "pending")
    }
    function s(i, l, u) {
        const c = Xk(t, i, l, (d, f) => {
            r(),
            u && u(d, f)
        }
        );
        return n.push(c),
        c
    }
    function o(i) {
        return n.find(l => i(l)) || null
    }
    return {
        query: s,
        find: o,
        setIndex: i => {
            t.index = i
        }
        ,
        getIndex: () => t.index,
        cleanup: r
    }
}
function pu() {}
const $a = Object.create(null);
function e_(e) {
    if (!$a[e]) {
        const t = gl(e);
        if (!t)
            return;
        const n = Ih(t)
          , r = {
            config: t,
            redundancy: n
        };
        $a[e] = r
    }
    return $a[e]
}
function t_(e, t, n) {
    let r, s;
    if (typeof e == "string") {
        const o = gi(e);
        if (!o)
            return n(void 0, 424),
            pu;
        s = o.send;
        const a = e_(e);
        a && (r = a.redundancy)
    } else {
        const o = hl(e);
        if (o) {
            r = Ih(o);
            const a = e.resources ? e.resources[0] : ""
              , i = gi(a);
            i && (s = i.send)
        }
    }
    return !r || !s ? (n(void 0, 424),
    pu) : r.query(t, s, n)().abort
}
function gu() {}
function n_(e) {
    e.iconsLoaderFlag || (e.iconsLoaderFlag = !0,
    setTimeout( () => {
        e.iconsLoaderFlag = !1,
        Kk(e)
    }
    ))
}
function r_(e) {
    const t = []
      , n = [];
    return e.forEach(r => {
        (r.match($h) ? t : n).push(r)
    }
    ),
    {
        valid: t,
        invalid: n
    }
}
function qr(e, t, n) {
    function r() {
        const s = e.pendingIcons;
        t.forEach(o => {
            s && s.delete(o),
            e.icons[o] || e.missing.add(o)
        }
        )
    }
    if (n && typeof n == "object")
        try {
            if (!Eh(e, n).length) {
                r();
                return
            }
        } catch (s) {
            console.error(s)
        }
    r(),
    n_(e)
}
function mu(e, t) {
    e instanceof Promise ? e.then(n => {
        t(n)
    }
    ).catch( () => {
        t(null)
    }
    ) : t(e)
}
function s_(e, t) {
    e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t,
    e.iconsQueueFlag || (e.iconsQueueFlag = !0,
    setTimeout( () => {
        e.iconsQueueFlag = !1;
        const {provider: n, prefix: r} = e
          , s = e.iconsToLoad;
        if (delete e.iconsToLoad,
        !s || !s.length)
            return;
        const o = e.loadIcon;
        if (e.loadIcons && (s.length > 1 || !o)) {
            mu(e.loadIcons(s, r, n), c => {
                qr(e, s, c)
            }
            );
            return
        }
        if (o) {
            s.forEach(c => {
                const d = o(c, r, n);
                mu(d, f => {
                    const p = f ? {
                        prefix: r,
                        icons: {
                            [c]: f
                        }
                    } : null;
                    qr(e, [c], p)
                }
                )
            }
            );
            return
        }
        const {valid: a, invalid: i} = r_(s);
        if (i.length && qr(e, i, null),
        !a.length)
            return;
        const l = r.match($h) ? gi(n) : null;
        if (!l) {
            qr(e, a, null);
            return
        }
        l.prepare(n, r, a).forEach(c => {
            t_(n, c, d => {
                qr(e, c.icons, d)
            }
            )
        }
        )
    }
    ))
}
const o_ = (e, t) => {
    const n = Qk(e, !0, Ph())
      , r = Gk(n);
    if (!r.pending.length) {
        let l = !0;
        return t && setTimeout( () => {
            l && t(r.loaded, r.missing, r.pending, gu)
        }
        ),
        () => {
            l = !1
        }
    }
    const s = Object.create(null)
      , o = [];
    let a, i;
    return r.pending.forEach(l => {
        const {provider: u, prefix: c} = l;
        if (c === i && u === a)
            return;
        a = u,
        i = c,
        o.push(wr(u, c));
        const d = s[u] || (s[u] = Object.create(null));
        d[c] || (d[c] = [])
    }
    ),
    r.pending.forEach(l => {
        const {provider: u, prefix: c, name: d} = l
          , f = wr(u, c)
          , p = f.pendingIcons || (f.pendingIcons = new Set);
        p.has(d) || (p.add(d),
        s[u][c].push(d))
    }
    ),
    o.forEach(l => {
        const u = s[l.provider][l.prefix];
        u.length && s_(l, u)
    }
    ),
    t ? Jk(t, r, o) : gu
}
;
function a_(e, t) {
    const n = {
        ...e
    };
    for (const r in t) {
        const s = t[r]
          , o = typeof s;
        r in Mh ? (s === null || s && (o === "string" || o === "number")) && (n[r] = s) : o === typeof n[r] && (n[r] = r === "rotate" ? s % 4 : s)
    }
    return n
}
const i_ = /[\s,]+/;
function l_(e, t) {
    t.split(i_).forEach(n => {
        switch (n.trim()) {
        case "horizontal":
            e.hFlip = !0;
            break;
        case "vertical":
            e.vFlip = !0;
            break
        }
    }
    )
}
function c_(e, t=0) {
    const n = e.replace(/^-?[0-9.]*/, "");
    function r(s) {
        for (; s < 0; )
            s += 4;
        return s % 4
    }
    if (n === "") {
        const s = parseInt(e);
        return isNaN(s) ? 0 : r(s)
    } else if (n !== e) {
        let s = 0;
        switch (n) {
        case "%":
            s = 25;
            break;
        case "deg":
            s = 90
        }
        if (s) {
            let o = parseFloat(e.slice(0, e.length - n.length));
            return isNaN(o) ? 0 : (o = o / s,
            o % 1 === 0 ? r(o) : 0)
        }
    }
    return t
}
function u_(e, t) {
    let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
    for (const r in t)
        n += " " + r + '="' + t[r] + '"';
    return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>"
}
function d_(e) {
    return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ")
}
function f_(e) {
    return "data:image/svg+xml," + d_(e)
}
function h_(e) {
    return 'url("' + f_(e) + '")'
}
const yu = {
    ...Th,
    inline: !1
}
  , p_ = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "aria-hidden": !0,
    role: "img"
}
  , g_ = {
    display: "inline-block"
}
  , mi = {
    backgroundColor: "currentColor"
}
  , qh = {
    backgroundColor: "transparent"
}
  , vu = {
    Image: "var(--svg)",
    Repeat: "no-repeat",
    Size: "100% 100%"
}
  , bu = {
    webkitMask: mi,
    mask: mi,
    background: qh
};
for (const e in bu) {
    const t = bu[e];
    for (const n in vu)
        t[e + n] = vu[n]
}
const zs = {};
["horizontal", "vertical"].forEach(e => {
    const t = e.slice(0, 1) + "Flip";
    zs[e + "-flip"] = t,
    zs[e.slice(0, 1) + "-flip"] = t,
    zs[e + "Flip"] = t
}
);
function wu(e) {
    return e + (e.match(/^[-0-9.]+$/) ? "px" : "")
}
const xu = (e, t) => {
    const n = a_(yu, t)
      , r = {
        ...p_
    }
      , s = t.mode || "svg"
      , o = {}
      , a = t.style
      , i = typeof a == "object" && !(a instanceof Array) ? a : {};
    for (let g in t) {
        const m = t[g];
        if (m !== void 0)
            switch (g) {
            case "icon":
            case "style":
            case "onLoad":
            case "mode":
            case "ssr":
                break;
            case "inline":
            case "hFlip":
            case "vFlip":
                n[g] = m === !0 || m === "true" || m === 1;
                break;
            case "flip":
                typeof m == "string" && l_(n, m);
                break;
            case "color":
                o.color = m;
                break;
            case "rotate":
                typeof m == "string" ? n[g] = c_(m) : typeof m == "number" && (n[g] = m);
                break;
            case "ariaHidden":
            case "aria-hidden":
                m !== !0 && m !== "true" && delete r["aria-hidden"];
                break;
            default:
                {
                    const b = zs[g];
                    b ? (m === !0 || m === "true" || m === 1) && (n[b] = !0) : yu[g] === void 0 && (r[g] = m)
                }
            }
    }
    const l = Tk(e, n)
      , u = l.attributes;
    if (n.inline && (o.verticalAlign = "-0.125em"),
    s === "svg") {
        r.style = {
            ...o,
            ...i
        },
        Object.assign(r, u);
        let g = 0
          , m = t.id;
        return typeof m == "string" && (m = m.replace(/-/g, "_")),
        r.innerHTML = Fk(l.body, m ? () => m + "ID" + g++ : "iconifyVue"),
        Nn("svg", r)
    }
    const {body: c, width: d, height: f} = e
      , p = s === "mask" || (s === "bg" ? !1 : c.indexOf("currentColor") !== -1)
      , h = u_(c, {
        ...u,
        width: d + "",
        height: f + ""
    });
    return r.style = {
        ...o,
        "--svg": h_(h),
        width: wu(u.width),
        height: wu(u.height),
        ...g_,
        ...p ? mi : qh,
        ...i
    },
    Nn("span", r)
}
;
Ph(!0);
Lk("", Uk);
if (typeof document < "u" && typeof window < "u") {
    const e = window;
    if (e.IconifyPreload !== void 0) {
        const t = e.IconifyPreload
          , n = "Invalid IconifyPreload syntax.";
        typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach(r => {
            try {
                (typeof r != "object" || r === null || r instanceof Array || typeof r.icons != "object" || typeof r.prefix != "string" || !$k(r)) && console.error(n)
            } catch {
                console.error(n)
            }
        }
        )
    }
    if (e.IconifyProviders !== void 0) {
        const t = e.IconifyProviders;
        if (typeof t == "object" && t !== null)
            for (let n in t) {
                const r = "IconifyProviders[" + n + "] is invalid.";
                try {
                    const s = t[n];
                    if (typeof s != "object" || !s || s.resources === void 0)
                        continue;
                    Bk(n, s) || console.error(r)
                } catch {
                    console.error(r)
                }
            }
    }
}
const m_ = {
    ...zo,
    body: ""
}
  , y_ = se( (e, {emit: t}) => {
    const n = Q(null);
    function r() {
        var u, c;
        n.value && ((c = (u = n.value).abort) == null || c.call(u),
        n.value = null)
    }
    const s = Q(!!e.ssr)
      , o = Q("")
      , a = rn(null);
    function i() {
        const u = e.icon;
        if (typeof u == "object" && u !== null && typeof u.body == "string")
            return o.value = "",
            {
                data: u
            };
        let c;
        if (typeof u != "string" || (c = Wo(u, !1, !0)) === null)
            return null;
        let d = Ck(c);
        if (!d) {
            const h = n.value;
            return (!h || h.name !== u) && (d === null ? n.value = {
                name: u
            } : n.value = {
                name: u,
                abort: o_([c], l)
            }),
            null
        }
        r(),
        o.value !== u && (o.value = u,
        lt( () => {
            t("load", u)
        }
        ));
        const f = e.customise;
        if (f) {
            d = Object.assign({}, d);
            const h = f(d.body, c.name, c.prefix, c.provider);
            typeof h == "string" && (d.body = h)
        }
        const p = ["iconify"];
        return c.prefix !== "" && p.push("iconify--" + c.prefix),
        c.provider !== "" && p.push("iconify--" + c.provider),
        {
            data: d,
            classes: p
        }
    }
    function l() {
        var c;
        const u = i();
        u ? u.data !== ((c = a.value) == null ? void 0 : c.data) && (a.value = u) : a.value = null
    }
    return s.value ? l() : jt( () => {
        s.value = !0,
        l()
    }
    ),
    Oe( () => e.icon, l),
    Un(r),
    () => {
        const u = a.value;
        if (!u)
            return xu(m_, e);
        let c = e;
        return u.classes && (c = {
            ...e,
            class: u.classes.join(" ")
        }),
        xu({
            ...zo,
            ...u.data
        }, c)
    }
}
, {
    props: ["icon", "mode", "ssr", "width", "height", "style", "color", "inline", "rotate", "hFlip", "horizontalFlip", "vFlip", "verticalFlip", "flip", "id", "ariaHidden", "customise", "title"],
    emits: ["load"]
})
  , yi = {
    __name: "Icon",
    props: {
        name: {
            type: String,
            required: !0
        }
    },
    setup(e) {
        return (t, n) => (T(),
        Y(x(y_), {
            icon: e.name.replace(/^i-/, "")
        }, null, 8, ["icon"]))
    }
}
  , v_ = "img"
  , ku = Symbol("nuxt-ui.avatar-group");
function Fh(e) {
    const t = et(ku, void 0)
      , n = O( () => e.size ?? (t == null ? void 0 : t.value.size));
    return Mi(ku, O( () => ({
        size: n.value
    }))),
    {
        size: n
    }
}
const b_ = {
    slots: {
        root: "relative inline-flex items-center justify-center shrink-0",
        base: "rounded-full ring ring-bg flex items-center justify-center text-inverted font-medium whitespace-nowrap"
    },
    variants: {
        color: {
            primary: "bg-primary",
            secondary: "bg-secondary",
            success: "bg-success",
            info: "bg-info",
            warning: "bg-warning",
            error: "bg-error",
            neutral: "bg-inverted"
        },
        size: {
            "3xs": "h-[4px] min-w-[4px] text-[4px]",
            "2xs": "h-[5px] min-w-[5px] text-[5px]",
            xs: "h-[6px] min-w-[6px] text-[6px]",
            sm: "h-[7px] min-w-[7px] text-[7px]",
            md: "h-[8px] min-w-[8px] text-[8px]",
            lg: "h-[9px] min-w-[9px] text-[9px]",
            xl: "h-[10px] min-w-[10px] text-[10px]",
            "2xl": "h-[11px] min-w-[11px] text-[11px]",
            "3xl": "h-[12px] min-w-[12px] text-[12px]"
        },
        position: {
            "top-right": "top-0 right-0",
            "bottom-right": "bottom-0 right-0",
            "top-left": "top-0 left-0",
            "bottom-left": "bottom-0 left-0"
        },
        inset: {
            false: ""
        },
        standalone: {
            false: "absolute"
        }
    },
    compoundVariants: [{
        position: "top-right",
        inset: !1,
        class: "-translate-y-1/2 translate-x-1/2 transform"
    }, {
        position: "bottom-right",
        inset: !1,
        class: "translate-y-1/2 translate-x-1/2 transform"
    }, {
        position: "top-left",
        inset: !1,
        class: "-translate-y-1/2 -translate-x-1/2 transform"
    }, {
        position: "bottom-left",
        inset: !1,
        class: "translate-y-1/2 -translate-x-1/2 transform"
    }],
    defaultVariants: {
        size: "md",
        color: "primary",
        position: "top-right"
    }
}
  , w_ = Object.assign({
    inheritAttrs: !1
}, {
    __name: "Chip",
    props: eg({
        as: {
            type: null,
            required: !1
        },
        text: {
            type: [String, Number],
            required: !1
        },
        color: {
            type: null,
            required: !1
        },
        size: {
            type: null,
            required: !1
        },
        position: {
            type: null,
            required: !1
        },
        inset: {
            type: Boolean,
            required: !1,
            default: !1
        },
        standalone: {
            type: Boolean,
            required: !1,
            default: !1
        },
        class: {
            type: null,
            required: !1
        },
        ui: {
            type: null,
            required: !1
        }
    }, {
        show: {
            type: Boolean,
            default: !0
        },
        showModifiers: {}
    }),
    emits: ["update:show"],
    setup(e) {
        const t = e
          , n = lg(e, "show", {
            type: Boolean,
            default: !0
        })
          , {size: r} = Fh(t)
          , s = Cn()
          , o = O( () => {
            var a;
            return xt({
                extend: xt(b_),
                ...((a = s.ui) == null ? void 0 : a.chip) || {}
            })({
                color: t.color,
                size: r.value,
                position: t.position,
                inset: t.inset,
                standalone: t.standalone
            })
        }
        );
        return (a, i) => {
            var l;
            return T(),
            Y(x(ye), {
                as: e.as,
                class: Ee(o.value.root({
                    class: [(l = t.ui) == null ? void 0 : l.root, t.class]
                }))
            }, {
                default: V( () => {
                    var u;
                    return [he(x(tl), He(Je(a.$attrs)), {
                        default: V( () => [te(a.$slots, "default")]),
                        _: 3
                    }, 16), n.value ? (T(),
                    ke("span", {
                        key: 0,
                        class: Ee(o.value.base({
                            class: (u = t.ui) == null ? void 0 : u.base
                        }))
                    }, [te(a.$slots, "content", {}, () => [it(fe(e.text), 1)])], 2)) : Ye("", !0)]
                }
                ),
                _: 3
            }, 8, ["as", "class"])
        }
    }
})
  , x_ = {
    slots: {
        root: "inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-elevated",
        image: "h-full w-full rounded-[inherit] object-cover",
        fallback: "font-medium leading-none text-muted truncate",
        icon: "text-muted shrink-0"
    },
    variants: {
        size: {
            "3xs": {
                root: "size-4 text-[8px]"
            },
            "2xs": {
                root: "size-5 text-[10px]"
            },
            xs: {
                root: "size-6 text-xs"
            },
            sm: {
                root: "size-7 text-sm"
            },
            md: {
                root: "size-8 text-base"
            },
            lg: {
                root: "size-9 text-lg"
            },
            xl: {
                root: "size-10 text-xl"
            },
            "2xl": {
                root: "size-11 text-[22px]"
            },
            "3xl": {
                root: "size-12 text-2xl"
            }
        }
    },
    defaultVariants: {
        size: "md"
    }
}
  , k_ = Object.assign({
    inheritAttrs: !1
}, {
    __name: "Avatar",
    props: {
        as: {
            type: null,
            required: !1,
            default: "span"
        },
        src: {
            type: String,
            required: !1
        },
        alt: {
            type: String,
            required: !1
        },
        icon: {
            type: String,
            required: !1
        },
        text: {
            type: String,
            required: !1
        },
        size: {
            type: null,
            required: !1
        },
        chip: {
            type: [Boolean, Object],
            required: !1
        },
        class: {
            type: null,
            required: !1
        },
        style: {
            type: null,
            required: !1
        },
        ui: {
            type: null,
            required: !1
        }
    },
    setup(e) {
        const t = e
          , n = O( () => t.text || (t.alt || "").split(" ").map(u => u.charAt(0)).join("").substring(0, 2))
          , r = Cn()
          , {size: s} = Fh(t)
          , o = O( () => {
            var u;
            return xt({
                extend: xt(x_),
                ...((u = r.ui) == null ? void 0 : u.avatar) || {}
            })({
                size: s.value
            })
        }
        )
          , a = O( () => ({
            "3xs": 16,
            "2xs": 20,
            xs: 24,
            sm: 28,
            md: 32,
            lg: 36,
            xl: 40,
            "2xl": 44,
            "3xl": 48
        })[t.size || "md"])
          , i = Q(!1);
        Oe( () => t.src, () => {
            i.value && (i.value = !1)
        }
        );
        function l() {
            i.value = !0
        }
        return (u, c) => {
            var d;
            return T(),
            Y(Ma(t.chip ? w_ : x(ye)), me({
                as: e.as
            }, t.chip ? typeof t.chip == "object" ? {
                inset: !0,
                ...t.chip
            } : {
                inset: !0
            } : {}, {
                class: o.value.root({
                    class: [(d = t.ui) == null ? void 0 : d.root, t.class]
                }),
                style: t.style
            }), {
                default: V( () => {
                    var f;
                    return [e.src && !i.value ? (T(),
                    Y(Ma(x(v_)), me({
                        key: 0,
                        role: "img",
                        src: e.src,
                        alt: e.alt,
                        width: a.value,
                        height: a.value
                    }, u.$attrs, {
                        class: o.value.image({
                            class: (f = t.ui) == null ? void 0 : f.image
                        }),
                        onError: l
                    }), null, 16, ["src", "alt", "width", "height", "class"])) : (T(),
                    Y(x(tl), He(me({
                        key: 1
                    }, u.$attrs)), {
                        default: V( () => [te(u.$slots, "default", {}, () => {
                            var p, h;
                            return [e.icon ? (T(),
                            Y(yi, {
                                key: 0,
                                name: e.icon,
                                class: Ee(o.value.icon({
                                    class: (p = t.ui) == null ? void 0 : p.icon
                                }))
                            }, null, 8, ["name", "class"])) : (T(),
                            ke("span", {
                                key: 1,
                                class: Ee(o.value.fallback({
                                    class: (h = t.ui) == null ? void 0 : h.fallback
                                }))
                            }, fe(n.value || " "), 3))]
                        }
                        )]),
                        _: 3
                    }, 16))]
                }
                ),
                _: 3
            }, 16, ["as", "class", "style"])
        }
    }
})
  , __ = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/
  , C_ = /^[\s\w\0+.-]{2,}:([/\\]{2})?/
  , S_ = /^([/\\]\s*){2,}[^/\\]/;
function $_(e, t={}) {
    return typeof t == "boolean" && (t = {
        acceptRelative: t
    }),
    t.strict ? __.test(e) : C_.test(e) || (t.acceptRelative ? S_.test(e) : !1)
}
const vi = {
    __name: "LinkBase",
    props: {
        as: {
            type: String,
            required: !1,
            default: "button"
        },
        type: {
            type: String,
            required: !1,
            default: "button"
        },
        disabled: {
            type: Boolean,
            required: !1
        },
        onClick: {
            type: [Function, Array],
            required: !1
        },
        href: {
            type: String,
            required: !1
        },
        navigate: {
            type: Function,
            required: !1
        },
        target: {
            type: [String, Object, null],
            required: !1
        },
        rel: {
            type: [String, Object, null],
            required: !1
        },
        active: {
            type: Boolean,
            required: !1
        },
        isExternal: {
            type: Boolean,
            required: !1
        }
    },
    setup(e) {
        const t = e;
        function n(r) {
            if (t.disabled) {
                r.stopPropagation(),
                r.preventDefault();
                return
            }
            if (t.onClick)
                for (const s of Array.isArray(t.onClick) ? t.onClick : [t.onClick])
                    s(r);
            t.href && t.navigate && !t.isExternal && t.navigate(r)
        }
        return (r, s) => (T(),
        Y(x(ye), me(e.href ? {
            as: "a",
            href: e.disabled ? void 0 : e.href,
            "aria-disabled": e.disabled ? "true" : void 0,
            role: e.disabled ? "link" : void 0,
            tabindex: e.disabled ? -1 : void 0
        } : e.as === "button" ? {
            as: e.as,
            type: e.type,
            disabled: e.disabled
        } : {
            as: e.as
        }, {
            rel: e.rel,
            target: e.target,
            onClick: n
        }), {
            default: V( () => [te(r.$slots, "default")]),
            _: 3
        }, 16, ["rel", "target"]))
    }
}
  , A_ = {
    base: "focus-visible:outline-primary",
    variants: {
        active: {
            true: "text-primary",
            false: "text-muted"
        },
        disabled: {
            true: "cursor-not-allowed opacity-75"
        }
    },
    compoundVariants: [{
        active: !1,
        disabled: !1,
        class: ["hover:text-default", "transition-colors"]
    }]
}
  , O_ = Object.assign({
    inheritAttrs: !1
}, {
    __name: "Link",
    props: {
        as: {
            type: null,
            required: !1,
            default: "button"
        },
        type: {
            type: null,
            required: !1,
            default: "button"
        },
        disabled: {
            type: Boolean,
            required: !1
        },
        active: {
            type: Boolean,
            required: !1,
            default: void 0
        },
        exact: {
            type: Boolean,
            required: !1
        },
        exactQuery: {
            type: [Boolean, String],
            required: !1
        },
        exactHash: {
            type: Boolean,
            required: !1
        },
        inactiveClass: {
            type: String,
            required: !1,
            default: ""
        },
        custom: {
            type: Boolean,
            required: !1
        },
        raw: {
            type: Boolean,
            required: !1
        },
        class: {
            type: null,
            required: !1
        },
        to: {
            type: null,
            required: !1
        },
        href: {
            type: null,
            required: !1
        },
        external: {
            type: Boolean,
            required: !1
        },
        target: {
            type: [String, Object, null],
            required: !1
        },
        rel: {
            type: [String, Object, null],
            required: !1
        },
        noRel: {
            type: Boolean,
            required: !1
        },
        prefetchedClass: {
            type: String,
            required: !1
        },
        prefetch: {
            type: Boolean,
            required: !1
        },
        prefetchOn: {
            type: [String, Object],
            required: !1
        },
        noPrefetch: {
            type: Boolean,
            required: !1
        },
        activeClass: {
            type: String,
            required: !1,
            default: ""
        },
        exactActiveClass: {
            type: String,
            required: !1
        },
        ariaCurrentValue: {
            type: String,
            required: !1,
            default: "page"
        },
        viewTransition: {
            type: Boolean,
            required: !1
        },
        replace: {
            type: Boolean,
            required: !1
        }
    },
    setup(e) {
        const t = e
          , n = Dy()
          , r = Cn()
          , s = gs(Qd(t, "as", "type", "disabled", "active", "exact", "exactQuery", "exactHash", "activeClass", "inactiveClass", "to", "href", "raw", "custom", "class"))
          , o = O( () => {
            var c;
            return xt({
                extend: xt(A_),
                ...hs({
                    variants: {
                        active: {
                            true: t.activeClass,
                            false: t.inactiveClass
                        }
                    }
                }, ((c = r.ui) == null ? void 0 : c.link) || {})
            })
        }
        )
          , a = O( () => t.to ?? t.href)
          , i = O( () => t.external ? !0 : a.value ? typeof a.value == "string" && $_(a.value, {
            acceptRelative: !0
        }) : !1);
        function l({route: c, isActive: d, isExactActive: f}) {
            if (t.active !== void 0)
                return t.active;
            if (!a.value)
                return !1;
            if (t.exactQuery === "partial") {
                if (!yk(c.query, n.query))
                    return !1
            } else if (t.exactQuery === !0 && !of(c.query, n.query))
                return !1;
            return t.exactHash && c.hash !== n.hash ? !1 : !!(t.exact && f || !t.exact && d)
        }
        function u({route: c, isActive: d, isExactActive: f}={}) {
            const p = l({
                route: c,
                isActive: d,
                isExactActive: f
            });
            return t.raw ? [t.class, p ? t.activeClass : t.inactiveClass] : o.value({
                class: t.class,
                active: p,
                disabled: t.disabled
            })
        }
        return (c, d) => !i.value && a.value ? (T(),
        Y(x($y), me({
            key: 0
        }, x(s), {
            to: a.value,
            custom: ""
        }), {
            default: V( ({href: f, navigate: p, route: h, isActive: g, isExactActive: m}) => [e.custom ? te(c.$slots, "default", He(me({
                key: 0
            }, {
                ...c.$attrs,
                ...e.exact && m ? {
                    "aria-current": t.ariaCurrentValue
                } : {},
                as: e.as,
                type: e.type,
                disabled: e.disabled,
                href: f,
                navigate: p,
                active: l({
                    route: h,
                    isActive: g,
                    isExactActive: m
                })
            }))) : (T(),
            Y(vi, me({
                key: 1
            }, {
                ...c.$attrs,
                ...e.exact && m ? {
                    "aria-current": t.ariaCurrentValue
                } : {},
                as: e.as,
                type: e.type,
                disabled: e.disabled,
                href: f,
                navigate: p
            }, {
                class: u({
                    route: h,
                    isActive: g,
                    isExactActive: m
                })
            }), {
                default: V( () => [te(c.$slots, "default", {
                    active: l({
                        route: h,
                        isActive: g,
                        isExactActive: m
                    })
                })]),
                _: 2
            }, 1040, ["class"]))]),
            _: 3
        }, 16, ["to"])) : (T(),
        ke(Fe, {
            key: 1
        }, [e.custom ? te(c.$slots, "default", He(me({
            key: 0
        }, {
            ...c.$attrs,
            as: e.as,
            type: e.type,
            disabled: e.disabled,
            href: a.value,
            target: i.value ? "_blank" : void 0,
            active: e.active,
            isExternal: i.value
        }))) : (T(),
        Y(vi, me({
            key: 1
        }, {
            ...c.$attrs,
            as: e.as,
            type: e.type,
            disabled: e.disabled,
            href: a.value,
            target: i.value ? "_blank" : void 0,
            isExternal: i.value
        }, {
            class: u()
        }), {
            default: V( () => [te(c.$slots, "default", {
                active: e.active
            })]),
            _: 3
        }, 16, ["class"]))], 64))
    }
})
  , D_ = {
    slots: {
        base: ["rounded-md font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75", "transition-colors"],
        label: "truncate",
        leadingIcon: "shrink-0",
        leadingAvatar: "shrink-0",
        leadingAvatarSize: "",
        trailingIcon: "shrink-0"
    },
    variants: {
        buttonGroup: {
            horizontal: "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]",
            vertical: "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]"
        },
        color: {
            primary: "",
            secondary: "",
            success: "",
            info: "",
            warning: "",
            error: "",
            neutral: ""
        },
        variant: {
            solid: "",
            outline: "",
            soft: "",
            subtle: "",
            ghost: "",
            link: ""
        },
        size: {
            xs: {
                base: "px-2 py-1 text-xs gap-1",
                leadingIcon: "size-4",
                leadingAvatarSize: "3xs",
                trailingIcon: "size-4"
            },
            sm: {
                base: "px-2.5 py-1.5 text-xs gap-1.5",
                leadingIcon: "size-4",
                leadingAvatarSize: "3xs",
                trailingIcon: "size-4"
            },
            md: {
                base: "px-2.5 py-1.5 text-sm gap-1.5",
                leadingIcon: "size-5",
                leadingAvatarSize: "2xs",
                trailingIcon: "size-5"
            },
            lg: {
                base: "px-3 py-2 text-sm gap-2",
                leadingIcon: "size-5",
                leadingAvatarSize: "2xs",
                trailingIcon: "size-5"
            },
            xl: {
                base: "px-3 py-2 text-base gap-2",
                leadingIcon: "size-6",
                leadingAvatarSize: "xs",
                trailingIcon: "size-6"
            }
        },
        block: {
            true: {
                base: "w-full justify-center",
                trailingIcon: "ms-auto"
            }
        },
        square: {
            true: ""
        },
        leading: {
            true: ""
        },
        trailing: {
            true: ""
        },
        loading: {
            true: ""
        },
        active: {
            true: {
                base: ""
            },
            false: {
                base: ""
            }
        }
    },
    compoundVariants: [{
        color: "primary",
        variant: "solid",
        class: "text-inverted bg-primary hover:bg-primary/75 active:bg-primary/75 disabled:bg-primary aria-disabled:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    }, {
        color: "secondary",
        variant: "solid",
        class: "text-inverted bg-secondary hover:bg-secondary/75 active:bg-secondary/75 disabled:bg-secondary aria-disabled:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
    }, {
        color: "success",
        variant: "solid",
        class: "text-inverted bg-success hover:bg-success/75 active:bg-success/75 disabled:bg-success aria-disabled:bg-success focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success"
    }, {
        color: "info",
        variant: "solid",
        class: "text-inverted bg-info hover:bg-info/75 active:bg-info/75 disabled:bg-info aria-disabled:bg-info focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-info"
    }, {
        color: "warning",
        variant: "solid",
        class: "text-inverted bg-warning hover:bg-warning/75 active:bg-warning/75 disabled:bg-warning aria-disabled:bg-warning focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warning"
    }, {
        color: "error",
        variant: "solid",
        class: "text-inverted bg-error hover:bg-error/75 active:bg-error/75 disabled:bg-error aria-disabled:bg-error focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-error"
    }, {
        color: "primary",
        variant: "outline",
        class: "ring ring-inset ring-primary/50 text-primary hover:bg-primary/10 active:bg-primary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    }, {
        color: "secondary",
        variant: "outline",
        class: "ring ring-inset ring-secondary/50 text-secondary hover:bg-secondary/10 active:bg-secondary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
    }, {
        color: "success",
        variant: "outline",
        class: "ring ring-inset ring-success/50 text-success hover:bg-success/10 active:bg-success/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-success"
    }, {
        color: "info",
        variant: "outline",
        class: "ring ring-inset ring-info/50 text-info hover:bg-info/10 active:bg-info/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-info"
    }, {
        color: "warning",
        variant: "outline",
        class: "ring ring-inset ring-warning/50 text-warning hover:bg-warning/10 active:bg-warning/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-warning"
    }, {
        color: "error",
        variant: "outline",
        class: "ring ring-inset ring-error/50 text-error hover:bg-error/10 active:bg-error/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-error"
    }, {
        color: "primary",
        variant: "soft",
        class: "text-primary bg-primary/10 hover:bg-primary/15 active:bg-primary/15 focus:outline-none focus-visible:bg-primary/15 disabled:bg-primary/10 aria-disabled:bg-primary/10"
    }, {
        color: "secondary",
        variant: "soft",
        class: "text-secondary bg-secondary/10 hover:bg-secondary/15 active:bg-secondary/15 focus:outline-none focus-visible:bg-secondary/15 disabled:bg-secondary/10 aria-disabled:bg-secondary/10"
    }, {
        color: "success",
        variant: "soft",
        class: "text-success bg-success/10 hover:bg-success/15 active:bg-success/15 focus:outline-none focus-visible:bg-success/15 disabled:bg-success/10 aria-disabled:bg-success/10"
    }, {
        color: "info",
        variant: "soft",
        class: "text-info bg-info/10 hover:bg-info/15 active:bg-info/15 focus:outline-none focus-visible:bg-info/15 disabled:bg-info/10 aria-disabled:bg-info/10"
    }, {
        color: "warning",
        variant: "soft",
        class: "text-warning bg-warning/10 hover:bg-warning/15 active:bg-warning/15 focus:outline-none focus-visible:bg-warning/15 disabled:bg-warning/10 aria-disabled:bg-warning/10"
    }, {
        color: "error",
        variant: "soft",
        class: "text-error bg-error/10 hover:bg-error/15 active:bg-error/15 focus:outline-none focus-visible:bg-error/15 disabled:bg-error/10 aria-disabled:bg-error/10"
    }, {
        color: "primary",
        variant: "subtle",
        class: "text-primary ring ring-inset ring-primary/25 bg-primary/10 hover:bg-primary/15 active:bg-primary/15 disabled:bg-primary/10 aria-disabled:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    }, {
        color: "secondary",
        variant: "subtle",
        class: "text-secondary ring ring-inset ring-secondary/25 bg-secondary/10 hover:bg-secondary/15 active:bg-secondary/15 disabled:bg-secondary/10 aria-disabled:bg-secondary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
    }, {
        color: "success",
        variant: "subtle",
        class: "text-success ring ring-inset ring-success/25 bg-success/10 hover:bg-success/15 active:bg-success/15 disabled:bg-success/10 aria-disabled:bg-success/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-success"
    }, {
        color: "info",
        variant: "subtle",
        class: "text-info ring ring-inset ring-info/25 bg-info/10 hover:bg-info/15 active:bg-info/15 disabled:bg-info/10 aria-disabled:bg-info/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-info"
    }, {
        color: "warning",
        variant: "subtle",
        class: "text-warning ring ring-inset ring-warning/25 bg-warning/10 hover:bg-warning/15 active:bg-warning/15 disabled:bg-warning/10 aria-disabled:bg-warning/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-warning"
    }, {
        color: "error",
        variant: "subtle",
        class: "text-error ring ring-inset ring-error/25 bg-error/10 hover:bg-error/15 active:bg-error/15 disabled:bg-error/10 aria-disabled:bg-error/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-error"
    }, {
        color: "primary",
        variant: "ghost",
        class: "text-primary hover:bg-primary/10 active:bg-primary/10 focus:outline-none focus-visible:bg-primary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
    }, {
        color: "secondary",
        variant: "ghost",
        class: "text-secondary hover:bg-secondary/10 active:bg-secondary/10 focus:outline-none focus-visible:bg-secondary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
    }, {
        color: "success",
        variant: "ghost",
        class: "text-success hover:bg-success/10 active:bg-success/10 focus:outline-none focus-visible:bg-success/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
    }, {
        color: "info",
        variant: "ghost",
        class: "text-info hover:bg-info/10 active:bg-info/10 focus:outline-none focus-visible:bg-info/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
    }, {
        color: "warning",
        variant: "ghost",
        class: "text-warning hover:bg-warning/10 active:bg-warning/10 focus:outline-none focus-visible:bg-warning/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
    }, {
        color: "error",
        variant: "ghost",
        class: "text-error hover:bg-error/10 active:bg-error/10 focus:outline-none focus-visible:bg-error/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent"
    }, {
        color: "primary",
        variant: "link",
        class: "text-primary hover:text-primary/75 active:text-primary/75 disabled:text-primary aria-disabled:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
    }, {
        color: "secondary",
        variant: "link",
        class: "text-secondary hover:text-secondary/75 active:text-secondary/75 disabled:text-secondary aria-disabled:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary"
    }, {
        color: "success",
        variant: "link",
        class: "text-success hover:text-success/75 active:text-success/75 disabled:text-success aria-disabled:text-success focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success"
    }, {
        color: "info",
        variant: "link",
        class: "text-info hover:text-info/75 active:text-info/75 disabled:text-info aria-disabled:text-info focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info"
    }, {
        color: "warning",
        variant: "link",
        class: "text-warning hover:text-warning/75 active:text-warning/75 disabled:text-warning aria-disabled:text-warning focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning"
    }, {
        color: "error",
        variant: "link",
        class: "text-error hover:text-error/75 active:text-error/75 disabled:text-error aria-disabled:text-error focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error"
    }, {
        color: "neutral",
        variant: "solid",
        class: "text-inverted bg-inverted hover:bg-inverted/90 active:bg-inverted/90 disabled:bg-inverted aria-disabled:bg-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverted"
    }, {
        color: "neutral",
        variant: "outline",
        class: "ring ring-inset ring-accented text-default bg-default hover:bg-elevated active:bg-elevated disabled:bg-default aria-disabled:bg-default focus:outline-none focus-visible:ring-2 focus-visible:ring-inverted"
    }, {
        color: "neutral",
        variant: "soft",
        class: "text-default bg-elevated hover:bg-accented/75 active:bg-accented/75 focus:outline-none focus-visible:bg-accented/75 disabled:bg-elevated aria-disabled:bg-elevated"
    }, {
        color: "neutral",
        variant: "subtle",
        class: "ring ring-inset ring-accented text-default bg-elevated hover:bg-accented/75 active:bg-accented/75 disabled:bg-elevated aria-disabled:bg-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-inverted"
    }, {
        color: "neutral",
        variant: "ghost",
        class: "text-default hover:bg-elevated active:bg-elevated focus:outline-none focus-visible:bg-elevated hover:disabled:bg-transparent dark:hover:disabled:bg-transparent hover:aria-disabled:bg-transparent dark:hover:aria-disabled:bg-transparent"
    }, {
        color: "neutral",
        variant: "link",
        class: "text-muted hover:text-default active:text-default disabled:text-muted aria-disabled:text-muted focus:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-inverted"
    }, {
        size: "xs",
        square: !0,
        class: "p-1"
    }, {
        size: "sm",
        square: !0,
        class: "p-1.5"
    }, {
        size: "md",
        square: !0,
        class: "p-1.5"
    }, {
        size: "lg",
        square: !0,
        class: "p-2"
    }, {
        size: "xl",
        square: !0,
        class: "p-2"
    }, {
        loading: !0,
        leading: !0,
        class: {
            leadingIcon: "animate-spin"
        }
    }, {
        loading: !0,
        leading: !1,
        trailing: !0,
        class: {
            trailingIcon: "animate-spin"
        }
    }],
    defaultVariants: {
        color: "primary",
        variant: "solid",
        size: "md"
    }
}
  , Rs = {
    __name: "Button",
    props: {
        label: {
            type: String,
            required: !1
        },
        color: {
            type: null,
            required: !1
        },
        activeColor: {
            type: null,
            required: !1
        },
        variant: {
            type: null,
            required: !1
        },
        activeVariant: {
            type: null,
            required: !1
        },
        size: {
            type: null,
            required: !1
        },
        square: {
            type: Boolean,
            required: !1
        },
        block: {
            type: Boolean,
            required: !1
        },
        loadingAuto: {
            type: Boolean,
            required: !1
        },
        onClick: {
            type: [Function, Array],
            required: !1
        },
        class: {
            type: null,
            required: !1
        },
        ui: {
            type: null,
            required: !1
        },
        icon: {
            type: String,
            required: !1
        },
        avatar: {
            type: Object,
            required: !1
        },
        leading: {
            type: Boolean,
            required: !1
        },
        leadingIcon: {
            type: String,
            required: !1
        },
        trailing: {
            type: Boolean,
            required: !1
        },
        trailingIcon: {
            type: String,
            required: !1
        },
        loading: {
            type: Boolean,
            required: !1
        },
        loadingIcon: {
            type: String,
            required: !1
        },
        as: {
            type: null,
            required: !1
        },
        type: {
            type: null,
            required: !1
        },
        disabled: {
            type: Boolean,
            required: !1
        },
        active: {
            type: Boolean,
            required: !1
        },
        exact: {
            type: Boolean,
            required: !1
        },
        exactQuery: {
            type: [Boolean, String],
            required: !1
        },
        exactHash: {
            type: Boolean,
            required: !1
        },
        inactiveClass: {
            type: String,
            required: !1
        },
        to: {
            type: null,
            required: !1
        },
        href: {
            type: null,
            required: !1
        },
        external: {
            type: Boolean,
            required: !1
        },
        target: {
            type: [String, Object, null],
            required: !1
        },
        rel: {
            type: [String, Object, null],
            required: !1
        },
        noRel: {
            type: Boolean,
            required: !1
        },
        prefetchedClass: {
            type: String,
            required: !1
        },
        prefetch: {
            type: Boolean,
            required: !1
        },
        prefetchOn: {
            type: [String, Object],
            required: !1
        },
        noPrefetch: {
            type: Boolean,
            required: !1
        },
        activeClass: {
            type: String,
            required: !1
        },
        exactActiveClass: {
            type: String,
            required: !1
        },
        ariaCurrentValue: {
            type: String,
            required: !1
        },
        viewTransition: {
            type: Boolean,
            required: !1
        },
        replace: {
            type: Boolean,
            required: !1
        }
    },
    setup(e) {
        const t = e
          , n = yd()
          , r = Cn()
          , {orientation: s, size: o} = pk(t)
          , a = gs(mk(t))
          , i = Q(!1)
          , l = et(gk, void 0);
        async function u(m) {
            i.value = !0;
            const b = Array.isArray(t.onClick) ? t.onClick : [t.onClick];
            try {
                await Promise.all(b.map(y => y == null ? void 0 : y(m)))
            } finally {
                i.value = !1
            }
        }
        const c = O( () => t.loading || t.loadingAuto && (i.value || (l == null ? void 0 : l.value) && t.type === "submit"))
          , {isLeading: d, isTrailing: f, leadingIconName: p, trailingIconName: h} = fk(O( () => ({
            ...t,
            loading: c.value
        })))
          , g = O( () => {
            var m, b, y, v, k, _, $, A, S, P, U;
            return xt({
                extend: xt(D_),
                ...hs({
                    variants: {
                        active: {
                            true: {
                                base: mc((k = (v = (y = (b = (m = r.ui) == null ? void 0 : m.button) == null ? void 0 : b.variants) == null ? void 0 : y.active) == null ? void 0 : v.true) == null ? void 0 : k.base, t.activeClass)
                            },
                            false: {
                                base: mc((P = (S = (A = ($ = (_ = r.ui) == null ? void 0 : _.button) == null ? void 0 : $.variants) == null ? void 0 : A.active) == null ? void 0 : S.false) == null ? void 0 : P.base, t.inactiveClass)
                            }
                        }
                    }
                }, ((U = r.ui) == null ? void 0 : U.button) || {})
            })({
                color: t.color,
                variant: t.variant,
                size: o.value,
                loading: c.value,
                block: t.block,
                square: t.square || !n.default && !t.label,
                leading: d.value,
                trailing: f.value,
                buttonGroup: s.value
            })
        }
        );
        return (m, b) => (T(),
        Y(O_, me({
            type: e.type,
            disabled: e.disabled || c.value
        }, x(Iy)(x(a), ["type", "disabled", "onClick"]), {
            custom: ""
        }), {
            default: V( ({active: y, ...v}) => {
                var k;
                return [he(vi, me(v, {
                    class: g.value.base({
                        class: [(k = t.ui) == null ? void 0 : k.base, t.class],
                        active: y,
                        ...y && e.activeVariant ? {
                            variant: e.activeVariant
                        } : {},
                        ...y && e.activeColor ? {
                            color: e.activeColor
                        } : {}
                    }),
                    onClick: u
                }), {
                    default: V( () => [te(m.$slots, "leading", {}, () => {
                        var _, $, A;
                        return [x(d) && x(p) ? (T(),
                        Y(yi, {
                            key: 0,
                            name: x(p),
                            class: Ee(g.value.leadingIcon({
                                class: (_ = t.ui) == null ? void 0 : _.leadingIcon,
                                active: y
                            }))
                        }, null, 8, ["name", "class"])) : e.avatar ? (T(),
                        Y(k_, me({
                            key: 1,
                            size: (($ = t.ui) == null ? void 0 : $.leadingAvatarSize) || g.value.leadingAvatarSize()
                        }, e.avatar, {
                            class: g.value.leadingAvatar({
                                class: (A = t.ui) == null ? void 0 : A.leadingAvatar,
                                active: y
                            })
                        }), null, 16, ["size", "class"])) : Ye("", !0)]
                    }
                    ), te(m.$slots, "default", {}, () => {
                        var _;
                        return [e.label !== void 0 && e.label !== null ? (T(),
                        ke("span", {
                            key: 0,
                            class: Ee(g.value.label({
                                class: (_ = t.ui) == null ? void 0 : _.label,
                                active: y
                            }))
                        }, fe(e.label), 3)) : Ye("", !0)]
                    }
                    ), te(m.$slots, "trailing", {}, () => {
                        var _;
                        return [x(f) && x(h) ? (T(),
                        Y(yi, {
                            key: 0,
                            name: x(h),
                            class: Ee(g.value.trailingIcon({
                                class: (_ = t.ui) == null ? void 0 : _.trailingIcon,
                                active: y
                            }))
                        }, null, 8, ["name", "class"])) : Ye("", !0)]
                    }
                    )]),
                    _: 2
                }, 1040, ["class"])]
            }
            ),
            _: 3
        }, 16, ["type", "disabled"]))
    }
}
  , E_ = {
    slots: {
        root: "",
        header: "flex items-center justify-between",
        body: "flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0",
        heading: "text-center font-medium truncate mx-auto",
        grid: "w-full border-collapse select-none space-y-1 focus:outline-none",
        gridRow: "grid grid-cols-7 place-items-center",
        gridWeekDaysRow: "mb-1 grid w-full grid-cols-7",
        gridBody: "grid",
        headCell: "rounded-md",
        cell: "relative text-center",
        cellTrigger: ["m-0.5 relative flex items-center justify-center rounded-full whitespace-nowrap focus-visible:ring-2 focus:outline-none data-disabled:text-muted data-unavailable:line-through data-unavailable:text-muted data-unavailable:pointer-events-none data-[selected]:text-inverted data-today:font-semibold data-[outside-view]:text-muted", "transition"]
    },
    variants: {
        color: {
            primary: {
                headCell: "text-primary",
                cellTrigger: "focus-visible:ring-primary data-[selected]:bg-primary data-today:not-data-[selected]:text-primary data-[highlighted]:bg-primary/20 hover:not-data-[selected]:bg-primary/20"
            },
            secondary: {
                headCell: "text-secondary",
                cellTrigger: "focus-visible:ring-secondary data-[selected]:bg-secondary data-today:not-data-[selected]:text-secondary data-[highlighted]:bg-secondary/20 hover:not-data-[selected]:bg-secondary/20"
            },
            success: {
                headCell: "text-success",
                cellTrigger: "focus-visible:ring-success data-[selected]:bg-success data-today:not-data-[selected]:text-success data-[highlighted]:bg-success/20 hover:not-data-[selected]:bg-success/20"
            },
            info: {
                headCell: "text-info",
                cellTrigger: "focus-visible:ring-info data-[selected]:bg-info data-today:not-data-[selected]:text-info data-[highlighted]:bg-info/20 hover:not-data-[selected]:bg-info/20"
            },
            warning: {
                headCell: "text-warning",
                cellTrigger: "focus-visible:ring-warning data-[selected]:bg-warning data-today:not-data-[selected]:text-warning data-[highlighted]:bg-warning/20 hover:not-data-[selected]:bg-warning/20"
            },
            error: {
                headCell: "text-error",
                cellTrigger: "focus-visible:ring-error data-[selected]:bg-error data-today:not-data-[selected]:text-error data-[highlighted]:bg-error/20 hover:not-data-[selected]:bg-error/20"
            },
            neutral: {
                headCell: "text-highlighted",
                cellTrigger: "focus-visible:ring-inverted data-[selected]:bg-inverted data-today:not-data-[selected]:text-highlighted data-[highlighted]:bg-inverted/20 hover:not-data-[selected]:bg-inverted/10"
            }
        },
        size: {
            xs: {
                heading: "text-xs",
                cell: "text-xs",
                headCell: "text-[10px]",
                cellTrigger: "size-7",
                body: "space-y-2 pt-2"
            },
            sm: {
                heading: "text-xs",
                headCell: "text-xs",
                cell: "text-xs",
                cellTrigger: "size-7"
            },
            md: {
                heading: "text-sm",
                headCell: "text-xs",
                cell: "text-sm",
                cellTrigger: "size-8"
            },
            lg: {
                heading: "text-md",
                headCell: "text-md",
                cellTrigger: "size-9 text-md"
            },
            xl: {
                heading: "text-lg",
                headCell: "text-lg",
                cellTrigger: "size-10 text-lg"
            }
        }
    },
    defaultVariants: {
        size: "md",
        color: "primary"
    }
}
  , P_ = {
    __name: "Calendar",
    props: {
        as: {
            type: null,
            required: !1
        },
        nextYearIcon: {
            type: String,
            required: !1
        },
        nextYear: {
            type: Object,
            required: !1
        },
        nextMonthIcon: {
            type: String,
            required: !1
        },
        nextMonth: {
            type: Object,
            required: !1
        },
        prevYearIcon: {
            type: String,
            required: !1
        },
        prevYear: {
            type: Object,
            required: !1
        },
        prevMonthIcon: {
            type: String,
            required: !1
        },
        prevMonth: {
            type: Object,
            required: !1
        },
        color: {
            type: null,
            required: !1
        },
        size: {
            type: null,
            required: !1
        },
        range: {
            type: Boolean,
            required: !1
        },
        multiple: {
            type: Boolean,
            required: !1
        },
        monthControls: {
            type: Boolean,
            required: !1,
            default: !0
        },
        yearControls: {
            type: Boolean,
            required: !1,
            default: !0
        },
        defaultValue: {
            type: null,
            required: !1
        },
        modelValue: {
            type: null,
            required: !1
        },
        class: {
            type: null,
            required: !1
        },
        ui: {
            type: null,
            required: !1
        },
        defaultPlaceholder: {
            type: null,
            required: !1
        },
        placeholder: {
            type: null,
            required: !1
        },
        allowNonContiguousRanges: {
            type: Boolean,
            required: !1
        },
        pagedNavigation: {
            type: Boolean,
            required: !1
        },
        preventDeselect: {
            type: Boolean,
            required: !1
        },
        maximumDays: {
            type: Number,
            required: !1
        },
        weekStartsOn: {
            type: Number,
            required: !1
        },
        weekdayFormat: {
            type: String,
            required: !1
        },
        fixedWeeks: {
            type: Boolean,
            required: !1,
            default: !0
        },
        maxValue: {
            type: null,
            required: !1
        },
        minValue: {
            type: null,
            required: !1
        },
        numberOfMonths: {
            type: Number,
            required: !1
        },
        disabled: {
            type: Boolean,
            required: !1
        },
        readonly: {
            type: Boolean,
            required: !1
        },
        initialFocus: {
            type: Boolean,
            required: !1
        },
        isDateDisabled: {
            type: Function,
            required: !1
        },
        isDateUnavailable: {
            type: Function,
            required: !1
        },
        isDateHighlightable: {
            type: Function,
            required: !1
        },
        nextPage: {
            type: Function,
            required: !1
        },
        prevPage: {
            type: Function,
            required: !1
        },
        disableDaysOutsideCurrentView: {
            type: Boolean,
            required: !1
        },
        fixedDate: {
            type: String,
            required: !1
        }
    },
    emits: ["update:modelValue", "update:placeholder", "update:validModelValue", "update:startValue"],
    setup(e, {emit: t}) {
        const n = e
          , r = t
          , {code: s, dir: o, t: a} = jy()
          , i = Cn()
          , l = _r(Qd(n, "range", "modelValue", "defaultValue", "color", "size", "monthControls", "yearControls", "class", "ui"), r)
          , u = O( () => n.nextYearIcon || (o.value === "rtl" ? i.ui.icons.chevronDoubleLeft : i.ui.icons.chevronDoubleRight))
          , c = O( () => n.nextMonthIcon || (o.value === "rtl" ? i.ui.icons.chevronLeft : i.ui.icons.chevronRight))
          , d = O( () => n.prevYearIcon || (o.value === "rtl" ? i.ui.icons.chevronDoubleRight : i.ui.icons.chevronDoubleLeft))
          , f = O( () => n.prevMonthIcon || (o.value === "rtl" ? i.ui.icons.chevronRight : i.ui.icons.chevronLeft))
          , p = O( () => {
            var m;
            return xt({
                extend: xt(E_),
                ...((m = i.ui) == null ? void 0 : m.calendar) || {}
            })({
                color: n.color,
                size: n.size
            })
        }
        );
        function h(m, b) {
            return b === -1 ? m.subtract({
                years: 1
            }) : m.add({
                years: 1
            })
        }
        const g = O( () => n.range ? ax : rx);
        return (m, b) => {
            var y;
            return T(),
            Y(x(g).Root, me(x(l), {
                "model-value": e.modelValue,
                "default-value": e.defaultValue,
                locale: x(s),
                dir: x(o),
                class: p.value.root({
                    class: [(y = n.ui) == null ? void 0 : y.root, n.class]
                })
            }), {
                default: V( ({weekDays: v, grid: k}) => {
                    var _, $;
                    return [he(x(g).Header, {
                        class: Ee(p.value.header({
                            class: (_ = n.ui) == null ? void 0 : _.header
                        }))
                    }, {
                        default: V( () => {
                            var A;
                            return [n.yearControls ? (T(),
                            Y(x(g).Prev, {
                                key: 0,
                                "prev-page": S => h(S, -1),
                                "aria-label": x(a)("calendar.prevYear"),
                                "as-child": ""
                            }, {
                                default: V( () => [he(Rs, me({
                                    icon: d.value,
                                    size: n.size,
                                    color: "neutral",
                                    variant: "ghost"
                                }, n.prevYear), null, 16, ["icon", "size"])]),
                                _: 1
                            }, 8, ["prev-page", "aria-label"])) : Ye("", !0), n.monthControls ? (T(),
                            Y(x(g).Prev, {
                                key: 1,
                                "aria-label": x(a)("calendar.prevMonth"),
                                "as-child": ""
                            }, {
                                default: V( () => [he(Rs, me({
                                    icon: f.value,
                                    size: n.size,
                                    color: "neutral",
                                    variant: "ghost"
                                }, n.prevMonth), null, 16, ["icon", "size"])]),
                                _: 1
                            }, 8, ["aria-label"])) : Ye("", !0), he(x(g).Heading, {
                                class: Ee(p.value.heading({
                                    class: (A = n.ui) == null ? void 0 : A.heading
                                }))
                            }, {
                                default: V( ({headingValue: S}) => [te(m.$slots, "heading", {
                                    value: S
                                }, () => [it(fe(S), 1)])]),
                                _: 3
                            }, 8, ["class"]), n.monthControls ? (T(),
                            Y(x(g).Next, {
                                key: 2,
                                "aria-label": x(a)("calendar.nextMonth"),
                                "as-child": ""
                            }, {
                                default: V( () => [he(Rs, me({
                                    icon: c.value,
                                    size: n.size,
                                    color: "neutral",
                                    variant: "ghost"
                                }, n.nextMonth), null, 16, ["icon", "size"])]),
                                _: 1
                            }, 8, ["aria-label"])) : Ye("", !0), n.yearControls ? (T(),
                            Y(x(g).Next, {
                                key: 3,
                                "next-page": S => h(S, 1),
                                "aria-label": x(a)("calendar.nextYear"),
                                "as-child": ""
                            }, {
                                default: V( () => [he(Rs, me({
                                    icon: u.value,
                                    size: n.size,
                                    color: "neutral",
                                    variant: "ghost"
                                }, n.nextYear), null, 16, ["icon", "size"])]),
                                _: 1
                            }, 8, ["next-page", "aria-label"])) : Ye("", !0)]
                        }
                        ),
                        _: 3
                    }, 8, ["class"]), W("div", {
                        class: Ee(p.value.body({
                            class: ($ = n.ui) == null ? void 0 : $.body
                        }))
                    }, [(T(!0),
                    ke(Fe, null, en(k, A => {
                        var S;
                        return T(),
                        Y(x(g).Grid, {
                            key: A.value.toString(),
                            class: Ee(p.value.grid({
                                class: (S = n.ui) == null ? void 0 : S.grid
                            }))
                        }, {
                            default: V( () => {
                                var P;
                                return [he(x(g).GridHead, null, {
                                    default: V( () => {
                                        var U;
                                        return [he(x(g).GridRow, {
                                            class: Ee(p.value.gridWeekDaysRow({
                                                class: (U = n.ui) == null ? void 0 : U.gridWeekDaysRow
                                            }))
                                        }, {
                                            default: V( () => [(T(!0),
                                            ke(Fe, null, en(v, ee => {
                                                var M;
                                                return T(),
                                                Y(x(g).HeadCell, {
                                                    key: ee,
                                                    class: Ee(p.value.headCell({
                                                        class: (M = n.ui) == null ? void 0 : M.headCell
                                                    }))
                                                }, {
                                                    default: V( () => [te(m.$slots, "week-day", {
                                                        day: ee
                                                    }, () => [it(fe(ee), 1)])]),
                                                    _: 2
                                                }, 1032, ["class"])
                                            }
                                            ), 128))]),
                                            _: 2
                                        }, 1032, ["class"])]
                                    }
                                    ),
                                    _: 2
                                }, 1024), he(x(g).GridBody, {
                                    class: Ee(p.value.gridBody({
                                        class: (P = n.ui) == null ? void 0 : P.gridBody
                                    }))
                                }, {
                                    default: V( () => [(T(!0),
                                    ke(Fe, null, en(A.rows, (U, ee) => {
                                        var M;
                                        return T(),
                                        Y(x(g).GridRow, {
                                            key: `weekDate-${ee}`,
                                            class: Ee(p.value.gridRow({
                                                class: (M = n.ui) == null ? void 0 : M.gridRow
                                            }))
                                        }, {
                                            default: V( () => [(T(!0),
                                            ke(Fe, null, en(U, q => {
                                                var D;
                                                return T(),
                                                Y(x(g).Cell, {
                                                    key: q.toString(),
                                                    date: q,
                                                    class: Ee(p.value.cell({
                                                        class: (D = n.ui) == null ? void 0 : D.cell
                                                    }))
                                                }, {
                                                    default: V( () => {
                                                        var N;
                                                        return [he(x(g).CellTrigger, {
                                                            day: q,
                                                            month: A.value,
                                                            class: Ee(p.value.cellTrigger({
                                                                class: (N = n.ui) == null ? void 0 : N.cellTrigger
                                                            }))
                                                        }, {
                                                            default: V( () => [te(m.$slots, "day", {
                                                                day: q
                                                            }, () => [it(fe(q.day), 1)])]),
                                                            _: 2
                                                        }, 1032, ["day", "month", "class"])]
                                                    }
                                                    ),
                                                    _: 2
                                                }, 1032, ["date", "class"])
                                            }
                                            ), 128))]),
                                            _: 2
                                        }, 1032, ["class"])
                                    }
                                    ), 128))]),
                                    _: 2
                                }, 1032, ["class"])]
                            }
                            ),
                            _: 2
                        }, 1032, ["class"])
                    }
                    ), 128))], 2)]
                }
                ),
                _: 3
            }, 16, ["model-value", "default-value", "locale", "dir", "class"])
        }
    }
}
  , M_ = {
    class: "controls rl-panel"
}
  , T_ = {
    class: "rl-field key"
}
  , R_ = ["value"]
  , I_ = {
    class: "rl-field range"
}
  , q_ = {
    class: "range-row"
}
  , F_ = {
    class: "presets"
}
  , L_ = ["onClick"]
  , B_ = ["disabled"]
  , N_ = se({
    __name: "ControlBar",
    props: {
        apiKey: {},
        from: {},
        to: {},
        analyzing: {
            type: Boolean
        }
    },
    emits: ["update:apiKey", "update:from", "update:to", "analyze"],
    setup(e, {emit: t}) {
        const n = e
          , r = t
          , s = {
            "24h": 1,
            "7d": 7,
            "14d": 14,
            "30d": 30
        };
        function o(y) {
            return String(y).padStart(2, "0")
        }
        function a(y) {
            if (!y)
                return {
                    date: "",
                    time: "00:00"
                };
            const [v,k="00:00"] = y.split("T");
            return {
                date: v,
                time: k.slice(0, 5)
            }
        }
        function i(y, v) {
            return `${y}T${v || "00:00"}`
        }
        function l(y, v="00:00") {
            return `${y.getFullYear()}-${o(y.getMonth() + 1)}-${o(y.getDate())}T${v}`
        }
        function u(y) {
            if (!y)
                return null;
            const v = new Date(`${y.split("T")[0]}T00:00:00`);
            return isFinite(v.getTime()) ? v : null
        }
        function c(y) {
            const v = u(y);
            return v ? new Le(v.getFullYear(),v.getMonth() + 1,v.getDate()) : null
        }
        function d(y) {
            return `${y.year}-${o(y.month)}-${o(y.day)}`
        }
        const f = O({
            get: () => {
                const y = c(n.from)
                  , v = c(n.to);
                return y && v ? {
                    start: y,
                    end: v
                } : null
            }
            ,
            set: y => {
                !y || !y.start || !y.end || (r("update:from", i(d(y.start), a(n.from).time)),
                r("update:to", i(d(y.end), a(n.to).time)))
            }
        })
          , p = O({
            get: () => a(n.from).time,
            set: y => r("update:from", i(a(n.from).date, y))
        })
          , h = O({
            get: () => a(n.to).time,
            set: y => r("update:to", i(a(n.to).date, y))
        })
          , g = O( () => !n.from || !n.to ? "Pick a date range" : `${a(n.from).date}  →  ${a(n.to).date}`);
        function m(y) {
            const v = new Date
              , k = new Date(v);
            k.setDate(v.getDate() - s[y]),
            r("update:from", l(k, a(n.from).time)),
            r("update:to", l(v, a(n.to).time))
        }
        const b = O( () => {
            const y = u(n.from)
              , v = u(n.to);
            if (!y || !v)
                return null;
            const k = Math.round((v.getTime() - y.getTime()) / 864e5);
            for (const [_,$] of Object.entries(s))
                if (k === $)
                    return _;
            return null
        }
        );
        return (y, v) => {
            const k = P_
              , _ = dk;
            return T(),
            ke("section", M_, [W("div", T_, [v[5] || (v[5] = W("label", {
                for: "rl-key"
            }, "Torn API Key", -1)), W("input", {
                id: "rl-key",
                class: "rl-input",
                type: "password",
                autocomplete: "off",
                spellcheck: "false",
                placeholder: "16-character key",
                value: e.apiKey,
                onChange: v[0] || (v[0] = $ => r("update:apiKey", $.target.value))
            }, null, 40, R_)]), W("div", I_, [v[7] || (v[7] = W("label", null, "Window", -1)), W("div", q_, [he(_, {
                content: {
                    align: "start"
                }
            }, {
                content: V( () => [he(k, {
                    modelValue: f.value,
                    "onUpdate:modelValue": v[1] || (v[1] = $ => f.value = $),
                    range: "",
                    "number-of-months": 2,
                    "weekday-format": "short",
                    class: "range-cal"
                }, null, 8, ["modelValue"])]),
                default: V( () => [W("button", {
                    type: "button",
                    class: Ee(["rl-input range-trigger", {
                        placeholder: !e.from || !e.to
                    }])
                }, fe(g.value), 3)]),
                _: 1
            }), Sl(W("input", {
                "onUpdate:modelValue": v[2] || (v[2] = $ => p.value = $),
                type: "time",
                class: "rl-input time-input",
                "aria-label": "From time"
            }, null, 512), [[tc, p.value]]), v[6] || (v[6] = W("span", {
                class: "time-sep"
            }, "→", -1)), Sl(W("input", {
                "onUpdate:modelValue": v[3] || (v[3] = $ => h.value = $),
                type: "time",
                class: "rl-input time-input",
                "aria-label": "To time"
            }, null, 512), [[tc, h.value]])])]), W("div", F_, [(T(),
            ke(Fe, null, en(["24h", "7d", "14d", "30d"], $ => W("button", {
                key: $,
                class: Ee(["rl-chip", {
                    active: b.value === $
                }]),
                onClick: A => m($)
            }, fe($), 11, L_)), 64))]), W("button", {
                class: "rl-btn analyze",
                disabled: e.analyzing,
                onClick: v[4] || (v[4] = $ => r("analyze"))
            }, fe(e.analyzing ? "Analyzing…" : "Analyze"), 9, B_)])
        }
    }
})
  , Uo = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r,s] of t)
        n[r] = s;
    return n
}
  , H_ = Uo(N_, [["__scopeId", "data-v-0ef9c1ff"]])
  , j_ = {
    class: "kpis"
}
  , V_ = {
    class: "kpi"
}
  , W_ = {
    class: "v"
}
  , z_ = {
    class: "kpi"
}
  , U_ = {
    class: "v gain"
}
  , G_ = {
    class: "sub"
}
  , K_ = {
    class: "kpi"
}
  , Y_ = {
    class: "v loss"
}
  , J_ = {
    class: "sub"
}
  , Q_ = {
    class: "kpi"
}
  , Z_ = {
    class: "kpi"
}
  , X_ = {
    class: "v"
}
  , eC = {
    class: "sub"
}
  , tC = se({
    __name: "KpiStrip",
    props: {
        totals: {},
        memberCount: {},
        windowLabel: {}
    },
    setup(e) {
        const t = e;
        function n(d, f=2) {
            return isFinite(d) ? Math.abs(d) >= 1e4 ? d.toLocaleString(void 0, {
                maximumFractionDigits: 0
            }) : d.toLocaleString(void 0, {
                maximumFractionDigits: f
            }) : "—"
        }
        const r = O( () => t.memberCount == null ? "—" : n(t.memberCount, 0))
          , s = O( () => t.totals ? `+${n(t.totals.gain)}` : "—")
          , o = O( () => t.totals ? `−${n(t.totals.loss)}` : "—")
          , a = O( () => {
            if (!t.totals)
                return {
                    text: "—",
                    cls: ""
                };
            const d = t.totals.gain - t.totals.loss
              , f = d >= 0 ? "+" : "−"
              , p = d > 0 ? "gain" : d < 0 ? "loss" : "";
            return {
                text: f + n(Math.abs(d)),
                cls: p
            }
        }
        )
          , i = O( () => t.totals ? n(t.totals.attacks, 0) : "—")
          , l = O( () => t.totals ? `${t.totals.wins} winning hits` : "from wins")
          , u = O( () => t.totals ? `${t.totals.defendsLost} defends lost` : "from defends lost")
          , c = O( () => t.windowLabel || "across period");
        return (d, f) => (T(),
        ke("section", j_, [W("div", V_, [f[0] || (f[0] = W("div", {
            class: "k"
        }, "Members active", -1)), W("div", W_, fe(r.value), 1), f[1] || (f[1] = W("div", {
            class: "sub"
        }, "as attacker or defender", -1))]), W("div", z_, [f[2] || (f[2] = W("div", {
            class: "k"
        }, "Respect gained", -1)), W("div", U_, fe(s.value), 1), W("div", G_, fe(l.value), 1)]), W("div", K_, [f[3] || (f[3] = W("div", {
            class: "k"
        }, "Respect lost", -1)), W("div", Y_, fe(o.value), 1), W("div", J_, fe(u.value), 1)]), W("div", Q_, [f[4] || (f[4] = W("div", {
            class: "k"
        }, "Net respect", -1)), W("div", {
            class: Ee(["v", a.value.cls])
        }, fe(a.value.text), 3), f[5] || (f[5] = W("div", {
            class: "sub"
        }, "gained − lost", -1))]), W("div", Z_, [f[6] || (f[6] = W("div", {
            class: "k"
        }, "Attacks processed", -1)), W("div", X_, fe(i.value), 1), W("div", eC, fe(c.value), 1)])]))
    }
})
  , nC = Uo(tC, [["__scopeId", "data-v-f993540a"]])
  , _u = new Set(["Attacked", "Mugged", "Hospitalized", "Special", "Assist", "Arrested"]);
async function jn(e, t, n) {
    const r = new URL(`https://api.torn.com/v2/${e}`);
    for (const [i,l] of Object.entries(t ?? {}))
        l != null && r.searchParams.set(i, String(l));
    r.searchParams.set("key", n);
    const s = await fetch(r.toString());
    if (!s.ok)
        throw new Error(`HTTP ${s.status}`);
    const o = await s.json()
      , a = o.error;
    if (a)
        throw new Error(`Torn API error ${a.code}: ${a.error}`);
    return o
}
function nr(e, ...t) {
    for (const n of t) {
        const r = n.split(".").reduce( (s, o) => {
            if (!(s == null || typeof s != "object"))
                return s[o]
        }
        , e);
        if (r != null && r !== 0 && r !== "")
            return r
    }
    return null
}
async function rC(e) {
    try {
        const t = await jn("faction/basic", {}, e)
          , n = nr(t, "id", "ID", "basic.id", "basic.ID", "faction.id", "faction.ID")
          , r = nr(t, "name", "basic.name", "faction.name");
        if (n)
            return {
                fid: Number(n),
                name: r || `Faction ${n}`
            }
    } catch {}
    try {
        const t = await jn("user", {}, e)
          , n = nr(t, "faction.faction_id", "faction.id", "basic.faction.faction_id", "basic.faction.id", "profile.faction.faction_id", "profile.faction.id")
          , r = nr(t, "faction.faction_name", "faction.name", "basic.faction.faction_name", "basic.faction.name");
        if (n)
            return {
                fid: Number(n),
                name: r || `Faction ${n}`
            }
    } catch {}
    try {
        const t = await jn("user/basic", {}, e)
          , n = nr(t, "faction.faction_id", "faction.id", "basic.faction.faction_id", "basic.faction.id")
          , r = nr(t, "faction.faction_name", "faction.name", "basic.faction.faction_name", "basic.faction.name");
        if (n)
            return {
                fid: Number(n),
                name: r || `Faction ${n}`
            }
    } catch {}
    throw new Error("Could not resolve your faction from this API key. Make sure the key has Faction access (Limited Access or higher) and you are currently in a faction.")
}
async function sC(e, t, n, r) {
    const s = [];
    let o = n
      , a = 200;
    for (; a-- > 0; ) {
        const l = await jn("faction/attacks", {
            from: t,
            to: o,
            sort: "DESC",
            limit: 100
        }, e);
        let u = [];
        if (Array.isArray(l.attacks) ? u = l.attacks : l.attacks && typeof l.attacks == "object" && (u = Object.values(l.attacks)),
        !u.length)
            break;
        s.push(...u),
        r(s.length);
        const c = u.map(f => f.ended ?? f.started ?? f.timestamp_ended ?? f.timestamp_started).filter(f => typeof f == "number");
        if (!c.length)
            break;
        const d = Math.min(...c);
        if (d <= t || u.length < 100)
            break;
        o = d - 1,
        await new Promise(f => setTimeout(f, 40))
    }
    const i = new Set;
    return s.filter(l => {
        var c, d;
        const u = l.id ?? l.code ?? `${l.started}-${(c = l.attacker) == null ? void 0 : c.id}-${(d = l.defender) == null ? void 0 : d.id}`;
        return i.has(u) ? !1 : (i.add(u),
        !0)
    }
    )
}
async function oC(e) {
    const t = new Map;
    let n;
    try {
        n = await jn("faction/members", {}, e)
    } catch {
        return t
    }
    const r = n.members;
    if (Array.isArray(r))
        for (const s of r) {
            const o = Number(s.id ?? s.user_id ?? 0)
              , a = String(s.name ?? s.username ?? "");
            o > 0 && a && t.set(o, a)
        }
    else if (r && typeof r == "object")
        for (const [s,o] of Object.entries(r)) {
            const a = Number(o.id ?? o.user_id ?? s)
              , i = String(o.name ?? o.username ?? "");
            a > 0 && i && t.set(a, i)
        }
    return t
}
function Cu(e) {
    const t = e.executed_at ?? e.ready_at ?? e.created_at;
    return typeof t == "number" ? t : null
}
async function aC(e, t, n, r) {
    const s = [];
    let o = n
      , a = 200;
    for (; a-- > 0; ) {
        const l = await jn("faction/crimes", {
            cat: "completed",
            from: t,
            to: o,
            sort: "DESC",
            limit: 100
        }, e);
        let u = [];
        if (Array.isArray(l.crimes) ? u = l.crimes : l.crimes && typeof l.crimes == "object" && (u = Object.values(l.crimes)),
        !u.length)
            break;
        s.push(...u),
        r(s.length);
        const c = u.map(f => Cu(f)).filter(f => typeof f == "number");
        if (!c.length)
            break;
        const d = Math.min(...c);
        if (d <= t || u.length < 100)
            break;
        o = d - 1,
        await new Promise(f => setTimeout(f, 40))
    }
    const i = new Set;
    return s.filter(l => {
        const u = l.id ?? `${Cu(l)}-${l.name ?? ""}`;
        return i.has(u) ? !1 : (i.add(u),
        !0)
    }
    )
}
async function iC(e, t) {
    let n;
    try {
        n = await jn("faction/rankedwars", {}, e)
    } catch {
        return []
    }
    const r = []
      , s = n.rankedwars;
    if (Array.isArray(s))
        for (const o of s)
            o && typeof o == "object" && lC(r, "ranked", o, t);
    return r
}
function lC(e, t, n, r) {
    const s = Number(n.start ?? n.started ?? 0);
    if (!s)
        return;
    const o = n.end ?? n.ended
      , a = typeof o == "number" && o > 0 ? o : null
      , i = n.factions ?? []
      , l = [];
    let u;
    for (const d of i) {
        const f = Number(d.id ?? d.faction_id ?? 0);
        !f || f === r || (l.push(f),
        typeof d.name == "string" && (u = d.name))
    }
    if (!l.length)
        return;
    const c = Number(n.war_id ?? n.id ?? 0) || void 0;
    e.push({
        id: c,
        type: t,
        start: s,
        end: a,
        enemyFids: l,
        enemyName: u
    })
}
function cC(e, t, n={}) {
    var b, y, v, k, _;
    const r = n.warFilter ?? "all"
      , s = n.ocFilter ?? "all"
      , o = n.crimes ?? []
      , a = n.memberNames ?? new Map
      , i = s !== "oc"
      , l = s !== "nonOc"
      , u = new Map
      , c = ($, A) => {
        let S = u.get($);
        return S || (S = {
            id: $,
            name: A ?? "",
            attacks: 0,
            wins: 0,
            defendsLost: 0,
            gained: 0,
            lost: 0
        },
        u.set($, S)),
        A && !S.name && (S.name = A),
        S
    }
    ;
    let d = 0
      , f = 0
      , p = 0
      , h = 0
      , g = 0;
    if (i)
        for (const $ of e) {
            const A = $.attacker ?? {}
              , S = $.defender ?? {}
              , P = ((b = A.faction) == null ? void 0 : b.id) ?? A.faction_id ?? null
              , U = ((y = S.faction) == null ? void 0 : y.id) ?? S.faction_id ?? null
              , ee = Number($.respect_gain ?? $.respect ?? 0) || 0
              , M = $.result ?? ""
              , q = !!A.id && P === t
              , D = !!S.id && U === t;
            if (!q && !D)
                continue;
            const N = !!$.is_ranked_war;
            if (!(r === "war" && !N) && !(r === "nonWar" && N)) {
                if (p++,
                q && A.id != null) {
                    const R = c(A.id, A.name);
                    R.attacks++,
                    ee > 0 && _u.has(M) && (R.wins++,
                    h++,
                    R.gained += ee,
                    d += ee)
                }
                if (D && S.id != null && ee > 0 && _u.has(M)) {
                    const R = c(S.id, S.name);
                    R.defendsLost++,
                    g++,
                    R.lost += ee,
                    f += ee
                }
            }
        }
    if (l)
        for (const $ of o) {
            const A = ($.status ?? "").toLowerCase();
            if (A !== "successful" && A !== "completed")
                continue;
            const S = Number(((v = $.rewards) == null ? void 0 : v.respect) ?? 0) || 0;
            if (S <= 0)
                continue;
            const P = ($.slots ?? []).filter(ee => {
                var M;
                return (((M = ee.user) == null ? void 0 : M.id) ?? ee.user_id) != null
            }
            );
            if (!P.length)
                continue;
            const U = S / P.length;
            for (const ee of P) {
                const M = ((k = ee.user) == null ? void 0 : k.id) ?? ee.user_id
                  , q = ((_ = ee.user) == null ? void 0 : _.name) ?? a.get(M)
                  , D = c(M, q);
                D.gained += U,
                d += U
            }
        }
    return {
        rows: [...u.values()].filter($ => $.attacks > 0 || $.wins > 0 || $.defendsLost > 0 || $.gained > 0 || $.lost > 0),
        totals: {
            attacks: p,
            wins: h,
            defendsLost: g,
            gain: d,
            loss: f
        }
    }
}
function uC(e) {
    const n = [["id", "name", "attacks", "wins", "defends_lost", "respect_gained", "respect_lost", "net", "ratio"].join(",")];
    for (const r of e) {
        const s = r.lost > 0 ? (r.gained / r.lost).toFixed(3) : r.gained > 0 ? "Infinity" : "0";
        n.push([r.id, `"${(r.name ?? "").replace(/"/g, '""')}"`, r.attacks, r.wins, r.defendsLost, r.gained.toFixed(3), r.lost.toFixed(3), (r.gained - r.lost).toFixed(3), s].join(","))
    }
    return n.join(`
`)
}
const dC = {
    class: "rl-panel"
}
  , fC = {
    class: "panel-head"
}
  , hC = {
    class: "filters"
}
  , pC = {
    class: "seg-group"
}
  , gC = {
    class: "war-seg",
    role: "group",
    "aria-label": "War filter"
}
  , mC = ["aria-pressed", "disabled", "onClick"]
  , yC = {
    class: "seg-group"
}
  , vC = {
    class: "war-seg",
    role: "group",
    "aria-label": "OC filter"
}
  , bC = ["aria-pressed", "disabled", "onClick"]
  , wC = ["value"]
  , xC = {
    key: 0,
    class: "war-summary"
}
  , kC = {
    class: "table-scroll"
}
  , _C = ["onClick"]
  , CC = {
    key: 0,
    class: "arrow"
}
  , SC = {
    key: 0
}
  , $C = {
    colspan: "8",
    class: "empty"
}
  , AC = {
    class: "big"
}
  , OC = {
    key: 0
}
  , DC = {
    key: 1
}
  , EC = {
    key: 2
}
  , PC = {
    key: 3
}
  , MC = {
    key: 4
}
  , TC = {
    key: 5
}
  , RC = {
    class: "member"
}
  , IC = {
    class: "name"
}
  , qC = {
    class: "id"
}
  , FC = {
    class: "num"
}
  , LC = {
    class: "num"
}
  , BC = {
    class: "num"
}
  , NC = {
    class: "num gain"
}
  , HC = {
    class: "num loss"
}
  , jC = {
    class: "num"
}
  , VC = {
    class: "ratio-cell"
}
  , WC = ["title"]
  , zC = {
    class: "bar-half right"
}
  , UC = {
    class: "bar-half left"
}
  , GC = {
    key: 1,
    class: "progress on"
}
  , KC = {
    class: "bar-outer"
}
  , YC = se({
    __name: "MemberTable",
    props: {
        rows: {},
        panelTitle: {},
        filter: {},
        sort: {},
        progress: {},
        warFilter: {},
        ocFilter: {},
        activeWars: {},
        warsLoaded: {
            type: Boolean
        },
        hasCrimes: {
            type: Boolean
        }
    },
    emits: ["update:filter", "update:sort", "update:warFilter", "update:ocFilter"],
    setup(e, {emit: t}) {
        const n = e
          , r = t
          , s = [{
            key: "all",
            label: "All"
        }, {
            key: "war",
            label: "War only"
        }, {
            key: "nonWar",
            label: "Non-war"
        }]
          , o = [{
            key: "all",
            label: "All"
        }, {
            key: "oc",
            label: "OC only"
        }, {
            key: "nonOc",
            label: "Non-OC"
        }]
          , a = O( () => {
            if (!n.warsLoaded)
                return "";
            const v = [];
            if (n.ocFilter === "oc" ? v.push("OCs only — attack stats hidden.") : n.ocFilter === "nonOc" && v.push("Excluding OC respect."),
            n.ocFilter !== "oc") {
                if (n.warFilter === "nonWar")
                    v.push("Excluding ranked-war attacks.");
                else if (n.warFilter === "war")
                    if (!n.activeWars.length)
                        v.push("No wars detected in this window — attack rows will be empty.");
                    else {
                        const k = n.activeWars.map(_ => `${_.enemyName ?? `Faction ${_.enemyFids[0] ?? "?"}`} (${_.type})`);
                        v.push(`War-only attacks vs. ${k.join(", ")}.`)
                    }
            }
            return v.join(" ")
        }
        )
          , i = {
            name: "name",
            attacks: "attacks",
            wins: "wins",
            defends: "defendsLost",
            gained: "gained",
            lost: "lost",
            net: "net",
            ratio: "ratio"
        }
          , l = O( () => {
            const v = n.rows.map(A => ({
                ...A,
                net: A.gained - A.lost,
                ratio: A.lost > 0 ? A.gained / A.lost : A.gained > 0 ? 1 / 0 : 0
            }));
            let k = v;
            if (n.filter) {
                const A = n.filter.toLowerCase();
                k = v.filter(S => (S.name ?? "").toLowerCase().includes(A) || String(S.id).includes(A))
            }
            const _ = i[n.sort.key] ?? "net"
              , $ = n.sort.dir;
            return k.slice().sort( (A, S) => {
                const P = A[_]
                  , U = S[_];
                return typeof P == "string" && typeof U == "string" ? P.localeCompare(U) * $ : ((P ?? 0) - (U ?? 0)) * $
            }
            )
        }
        )
          , u = O( () => Math.max(1, ...l.value.map(v => Math.max(v.gained, v.lost))))
          , c = [{
            key: "name",
            label: "Member",
            num: !1
        }, {
            key: "attacks",
            label: "Attacks",
            num: !0
        }, {
            key: "wins",
            label: "Wins",
            num: !0
        }, {
            key: "defends",
            label: "Defends lost",
            num: !0
        }, {
            key: "gained",
            label: "Respect gained",
            num: !0
        }, {
            key: "lost",
            label: "Respect lost",
            num: !0
        }, {
            key: "net",
            label: "Net",
            num: !0
        }, {
            key: "ratio",
            label: "Ratio (G:L)",
            num: !0
        }];
        function d(v) {
            n.sort.key === v ? r("update:sort", {
                key: v,
                dir: n.sort.dir * -1
            }) : r("update:sort", {
                key: v,
                dir: v === "name" ? 1 : -1
            })
        }
        function f(v, k=2) {
            return isFinite(v) ? Math.abs(v) >= 1e4 ? v.toLocaleString(void 0, {
                maximumFractionDigits: 0
            }) : v.toLocaleString(void 0, {
                maximumFractionDigits: k
            }) : "—"
        }
        function p(v, k) {
            return v === 0 && k === 0 ? "—" : k === 0 ? "∞" : (v / k).toFixed(2)
        }
        function h(v) {
            const k = (v || "?").split(/\s+/).map($ => $[0] ?? "").slice(0, 2).join("").toUpperCase();
            let _ = 0;
            for (const $ of v || "")
                _ = (_ * 31 + $.charCodeAt(0)) % 360;
            return {
                initials: k,
                bg: `oklch(0.78 0.11 ${_})`
            }
        }
        function g(v) {
            return Math.max(0, Math.min(100, v / u.value * 100))
        }
        function m(v) {
            return v > 0 ? "gain" : v < 0 ? "loss" : ""
        }
        function b(v) {
            return v > 0 ? "+" : ""
        }
        function y() {
            if (!n.rows.length)
                return;
            const v = new Blob([uC(n.rows)],{
                type: "text/csv"
            })
              , k = URL.createObjectURL(v)
              , _ = document.createElement("a");
            _.href = k,
            _.download = "respect-ledger.csv",
            _.click(),
            URL.revokeObjectURL(k)
        }
        return (v, k) => (T(),
        ke("section", dC, [W("div", fC, [W("h2", null, fe(e.panelTitle), 1), W("div", hC, [W("div", pC, [k[1] || (k[1] = W("span", {
            class: "seg-label"
        }, "War", -1)), W("div", gC, [(T(),
        ke(Fe, null, en(s, _ => W("button", {
            key: _.key,
            type: "button",
            class: Ee(["war-seg-btn", {
                on: e.warFilter === _.key
            }]),
            "aria-pressed": e.warFilter === _.key,
            disabled: e.ocFilter === "oc",
            onClick: $ => r("update:warFilter", _.key)
        }, fe(_.label), 11, mC)), 64))])]), W("div", yC, [k[2] || (k[2] = W("span", {
            class: "seg-label"
        }, "OC", -1)), W("div", vC, [(T(),
        ke(Fe, null, en(o, _ => W("button", {
            key: _.key,
            type: "button",
            class: Ee(["war-seg-btn", {
                on: e.ocFilter === _.key
            }]),
            "aria-pressed": e.ocFilter === _.key,
            disabled: !e.hasCrimes && _.key === "oc",
            onClick: $ => r("update:ocFilter", _.key)
        }, fe(_.label), 11, bC)), 64))])]), W("input", {
            class: "search",
            type: "text",
            placeholder: "Filter by name or ID…",
            value: e.filter,
            onInput: k[0] || (k[0] = _ => r("update:filter", _.target.value))
        }, null, 40, wC), W("button", {
            class: "rl-btn ghost",
            onClick: y
        }, " Export CSV ")])]), a.value ? (T(),
        ke("div", xC, fe(a.value), 1)) : Ye("", !0), W("div", kC, [W("table", null, [W("thead", null, [W("tr", null, [(T(),
        ke(Fe, null, en(c, _ => W("th", {
            key: _.key,
            class: Ee({
                num: _.num
            }),
            onClick: $ => d(_.key)
        }, [it(fe(_.label) + " ", 1), e.sort.key === _.key ? (T(),
        ke("span", CC, fe(e.sort.dir === 1 ? "↑" : "↓"), 1)) : Ye("", !0)], 10, _C)), 64))])]), W("tbody", null, [l.value.length ? Ye("", !0) : (T(),
        ke("tr", SC, [W("td", $C, [W("div", AC, fe(e.rows.length ? "No results" : e.warsLoaded ? "No activity" : "No data yet"), 1), e.rows.length ? (T(),
        ke("div", OC, " Filter excludes all members. ")) : e.warsLoaded && e.ocFilter === "oc" ? (T(),
        ke("div", DC, " No successful OCs in this window. ")) : e.warsLoaded && e.warFilter === "war" ? (T(),
        ke("div", EC, " No war activity in this window. ")) : e.warsLoaded && e.warFilter === "nonWar" ? (T(),
        ke("div", PC, " No non-war activity in this window. ")) : e.warsLoaded ? (T(),
        ke("div", MC, " No faction activity in this window. ")) : (T(),
        ke("div", TC, " Enter an API key, pick a window, and click Analyze. "))])])), (T(!0),
        ke(Fe, null, en(l.value, _ => (T(),
        ke("tr", {
            key: _.id
        }, [W("td", null, [W("div", RC, [W("div", {
            class: "avatar",
            style: _t({
                background: h(_.name).bg
            })
        }, fe(h(_.name).initials), 5), W("div", null, [W("div", IC, fe(_.name || "Unknown"), 1), W("div", qC, "#" + fe(_.id), 1)])])]), W("td", FC, fe(f(_.attacks, 0)), 1), W("td", LC, fe(f(_.wins, 0)), 1), W("td", BC, fe(f(_.defendsLost, 0)), 1), W("td", NC, fe(f(_.gained)), 1), W("td", HC, fe(f(_.lost)), 1), W("td", {
            class: Ee(["num", m(_.net)])
        }, fe(b(_.net)) + fe(f(_.net)), 3), W("td", jC, [W("div", VC, [W("div", {
            class: "bar",
            title: `gained ${f(_.gained)} / lost ${f(_.lost)}`
        }, [W("div", zC, [W("div", {
            class: "g",
            style: _t({
                width: `${g(_.gained)}%`
            })
        }, null, 4)]), W("div", UC, [W("div", {
            class: "l",
            style: _t({
                width: `${g(_.lost)}%`
            })
        }, null, 4)])], 8, WC), W("span", null, fe(p(_.gained, _.lost)), 1)])])]))), 128))])])]), e.progress.on ? (T(),
        ke("div", GC, [W("div", null, fe(e.progress.text), 1), W("div", KC, [W("div", {
            class: "bar-inner",
            style: _t({
                width: `${e.progress.pct}%`
            })
        }, null, 4)])])) : Ye("", !0)]))
    }
})
  , JC = Uo(YC, [["__scopeId", "data-v-5e8bfc2a"]]);
function Is(e, t) {
    const n = localStorage.getItem(e);
    let r = t;
    if (n != null)
        try {
            r = JSON.parse(n)
        } catch {
            r = t
        }
    const s = Q(r);
    return Oe(s, o => {
        if (o == null || o === "") {
            localStorage.removeItem(e);
            return
        }
        localStorage.setItem(e, JSON.stringify(o))
    }
    , {
        deep: !0
    }),
    s
}
const QC = {
    class: "wrap"
}
  , ZC = {
    key: 0,
    class: "err"
}
  , XC = se({
    __name: "App",
    setup(e) {
        const t = Is("respect-ledger:apikey", "")
          , n = Is("respect-ledger:range", {
            from: $(),
            to: A()
        })
          , r = Q(null)
          , s = Q([])
          , o = Q(null)
          , a = Q("")
          , i = Q(null)
          , l = Q({
            on: !1,
            text: "",
            pct: 0
        })
          , u = Q(!1)
          , c = Q("")
          , d = Q({
            key: "net",
            dir: -1
        })
          , f = Is("respect-ledger:warFilter", "all")
          , p = Is("respect-ledger:ocFilter", "all")
          , h = Q(null)
          , g = Q([])
          , m = Q([])
          , b = Q(new Map)
          , y = Q([])
          , v = O( () => r.value ? `${r.value} · members` : "Faction members");
        function k(M) {
            return String(M).padStart(2, "0")
        }
        function _(M) {
            return `${M.getFullYear()}-${k(M.getMonth() + 1)}-${k(M.getDate())}T00:00`
        }
        function $() {
            const M = new Date;
            return M.setDate(M.getDate() - 7),
            _(M)
        }
        function A() {
            return _(new Date)
        }
        function S() {
            const M = h.value;
            if (M == null || !g.value.length && !m.value.length)
                return;
            const q = cC(g.value, M, {
                warFilter: f.value,
                ocFilter: p.value,
                crimes: m.value,
                memberNames: b.value
            });
            s.value = q.rows,
            o.value = q.totals
        }
        Oe([f, p], () => S());
        function P(M) {
            if (!M)
                return null;
            const q = M.includes("T") ? M : `${M}T00:00`
              , D = new Date(q);
            return isFinite(D.getTime()) ? D : null
        }
        const U = O( () => {
            if (f.value !== "war" || !g.value.length)
                return [];
            const M = P(n.value.from)
              , q = P(n.value.to);
            if (!M || !q)
                return y.value;
            const D = Math.floor(M.getTime() / 1e3)
              , N = Math.floor(q.getTime() / 1e3);
            return y.value.filter(R => {
                const H = R.end ?? Number.MAX_SAFE_INTEGER;
                return R.start <= N && H >= D
            }
            )
        }
        );
        async function ee() {
            i.value = null;
            const M = t.value.trim();
            if (!/^[A-Za-z0-9]{16}$/.test(M)) {
                i.value = "API key should be 16 alphanumeric characters.";
                return
            }
            const q = P(n.value.from)
              , D = P(n.value.to);
            if (!q || !D || q >= D) {
                i.value = "Pick a valid date range.";
                return
            }
            const N = Math.floor(q.getTime() / 1e3)
              , R = Math.floor(D.getTime() / 1e3);
            u.value = !0,
            l.value = {
                on: !0,
                text: "Resolving faction…",
                pct: 5
            };
            try {
                const {fid: H, name: j} = await rC(M);
                r.value = j,
                l.value = {
                    on: !0,
                    text: "Fetching attack log…",
                    pct: 10
                };
                const le = await sC(M, N, R, Se => {
                    l.value = {
                        on: !0,
                        text: `Fetched ${Se.toLocaleString()} attacks…`,
                        pct: Math.min(90, 10 + Se / 50)
                    }
                }
                );
                l.value = {
                    on: !0,
                    text: "Fetching wars…",
                    pct: 88
                },
                y.value = await iC(M, H),
                l.value = {
                    on: !0,
                    text: "Fetching faction members…",
                    pct: 90
                },
                b.value = await oC(M),
                l.value = {
                    on: !0,
                    text: "Fetching organized crimes…",
                    pct: 92
                };
                let K = [];
                try {
                    K = await aC(M, N, R, Se => {
                        l.value = {
                            on: !0,
                            text: `Fetched ${Se.toLocaleString()} crimes…`,
                            pct: Math.min(95, 92 + Se / 100)
                        }
                    }
                    )
                } catch {
                    K = []
                }
                h.value = H,
                g.value = le,
                m.value = K,
                l.value = {
                    on: !0,
                    text: "Aggregating…",
                    pct: 96
                },
                S();
                const we = D.getTime() - q.getTime()
                  , pe = we / 864e5;
                a.value = pe >= 1 ? `${pe.toFixed(1)} day window` : `${(we / 36e5).toFixed(1)} hour window`
            } catch (H) {
                i.value = H instanceof Error ? H.message : String(H)
            } finally {
                l.value = {
                    on: !1,
                    text: "",
                    pct: 0
                },
                u.value = !1
            }
        }
        return (M, q) => (T(),
        ke("div", QC, [q[7] || (q[7] = Ll('<header class="mast" data-v-391deaf2><div class="brand" data-v-391deaf2><div class="mark" data-v-391deaf2></div><h1 data-v-391deaf2><s>AskeLads</s> Occultus Ledger</h1><div class="tag" data-v-391deaf2>FACTION · ATTACK LOG ANALYZER</div></div><div class="meta" data-v-391deaf2><div data-v-391deaf2><b data-v-391deaf2>endpoint</b>  api.torn.com/v2/faction/attacks</div><div data-v-391deaf2><b data-v-391deaf2>storage</b>  localStorage (key never leaves your browser)</div></div></header>', 1)), i.value ? (T(),
        ke("div", ZC, fe(i.value), 1)) : Ye("", !0), he(H_, {
            "api-key": x(t),
            from: x(n).from,
            to: x(n).to,
            analyzing: u.value,
            "onUpdate:apiKey": q[0] || (q[0] = D => t.value = D),
            "onUpdate:from": q[1] || (q[1] = D => n.value = {
                ...x(n),
                from: D
            }),
            "onUpdate:to": q[2] || (q[2] = D => n.value = {
                ...x(n),
                to: D
            }),
            onAnalyze: ee
        }, null, 8, ["api-key", "from", "to", "analyzing"]), he(nC, {
            totals: o.value,
            "member-count": o.value ? s.value.length : null,
            "window-label": a.value
        }, null, 8, ["totals", "member-count", "window-label"]), he(JC, {
            rows: s.value,
            "panel-title": v.value,
            filter: c.value,
            sort: d.value,
            progress: l.value,
            "war-filter": x(f),
            "oc-filter": x(p),
            "active-wars": U.value,
            "wars-loaded": !!g.value.length || !!m.value.length,
            "has-crimes": !!m.value.length,
            "onUpdate:filter": q[3] || (q[3] = D => c.value = D),
            "onUpdate:sort": q[4] || (q[4] = D => d.value = D),
            "onUpdate:warFilter": q[5] || (q[5] = D => f.value = D),
            "onUpdate:ocFilter": q[6] || (q[6] = D => p.value = D)
        }, null, 8, ["rows", "panel-title", "filter", "sort", "progress", "war-filter", "oc-filter", "active-wars", "wars-loaded", "has-crimes"]), q[8] || (q[8] = Ll('<div class="footer" data-v-391deaf2><b data-v-391deaf2>how it&#39;s computed</b> · Fetches every attack record in the selected window from <span class="accent-dim" data-v-391deaf2>/v2/faction/attacks</span>, paginating backward with the <span class="accent-dim" data-v-391deaf2>to</span> cursor until the window is exhausted. Only attacks involving your faction are kept. For each member, <span class="gain-text" data-v-391deaf2>gained</span> is the sum of <span class="accent-dim" data-v-391deaf2>respect_gain</span> on attacks where they were the attacker and won; <span class="loss-text" data-v-391deaf2>lost</span> is the sum of <span class="accent-dim" data-v-391deaf2>respect_gain</span> on attacks where they were the defender and the attacker won. Ratio is <span class="accent-dim" data-v-391deaf2>gained / max(lost, 0.01)</span>.<br data-v-391deaf2><b data-v-391deaf2>limits</b> · Torn caps this endpoint at 100 rows per page; long windows may take a minute. Your key is stored only in this browser. </div>', 1))]))
    }
})
  , e2 = Uo(XC, [["__scopeId", "data-v-391deaf2"]]);
um(e2).use(Jy).mount("#app");
