(function () {
    function f(a) {
        throw a;
    }
    var i = void 0,
        j = !0,
        k = null,
        l = !1,
        m = DATA,
        aa = encodeURIComponent,
        p = window,
        ba = Object,
        ca = Function,
        q = document,
        r = Math,
        da = Array,
        s = navigator,
        u = Error,
        ea = parseInt,
        v = String,
        fa = decodeURIComponent,
        ga = RegExp;

    function ha(a, b) {
        return a.width = b
    }
    function ia(a, b) {
        return a.value = b
    }
    function ja(a, b) {
        return a.currentTarget = b
    }
    function ka(a, b) {
        return a.keyCode = b
    }
    function la(a, b) {
        return a.clear = b
    }
    function ma(a, b) {
        return a.name = b
    }
    function na(a, b) {
        return a.stop = b
    }
    function oa(a, b) {
        return a.toString = b
    }

    function pa(a, b) {
        return a.length = b
    }
    function qa(a, b) {
        return a.prototype = b
    }
    function ra(a, b) {
        return a.className = b
    }
    function sa(a, b) {
        return a.target = b
    }
    function ta(a, b) {
        return a.reset = b
    }
    function ua(a, b) {
        return a.height = b
    }
    var va = "appendChild",
        w = "push",
        x = "test",
        wa = "shift",
        xa = "timeStamp",
        ya = "exec",
        za = "clearTimeout",
        Aa = "width",
        Ba = "round",
        Ca = "slice",
        y = "replace",
        Da = "nodeType",
        Ea = "floor",
        Fa = "content",
        Ga = "offsetWidth",
        Ha = "concat",
        Ia = "value",
        Ja = "preventDefault",
        Ka = "item",
        z = "indexOf",
        La = "dispatchEvent",
        Ma = "getElementsByClassName",
        Na = "match",
        Oa = "querySelector",
        Pa = "createElement",
        Qa = "keyCode",
        Ra = "forEach",
        A = "addEventListener",
        Sa = "setAttribute",
        Ta = "handleEvent",
        B = "type",
        Ua = "defaultView",
        Va = "bind",
        Wa = "name",
        Xa = "setActive",
        Ya = "clientX",
        Za = "clientY",
        $a = "substr",
        ab = "stop",
        bb = "toString",
        cb = "executeSql",
        C = "length",
        db = "propertyIsEnumerable",
        eb = "plugins",
        D = "prototype",
        fb = "className",
        gb = "abort",
        hb = "setTimeout",
        ib = "document",
        jb = "removeEventListener",
        E = "split",
        kb = "stopPropagation",
        lb = "userAgent",
        mb = "stack",
        nb = "location",
        ob = "message",
        pb = "getComputedStyle",
        I = "style",
        qb = "close",
        J = "target",
        K = "call",
        rb = "transaction",
        sb = "querySelectorAll",
        L = "Messages",
        tb = "substring",
        ub = "console",
        M = "apply",
        vb = "reset",
        wb = "onclick",
        xb = "navigator",
        yb = "parentNode",
        zb = "fileName",
        Ab = "height",
        Bb = "splice",
        Cb = "offsetHeight",
        N = "join",
        Db = "unshift",
        Eb = "toLowerCase",
        O, Fb = Fb || {}, P = this;

    function Gb(a, b, c) {
        a = a[E](".");
        c = c || P;
        !(a[0] in c) && c.execScript && c.execScript("var " + a[0]);
        for (var d; a[C] && (d = a[wa]());)!a[C] && Q(b) ? c[d] = b : c = c[d] ? c[d] : c[d] = {}
    }
    function Hb(a, b) {
        for (var c = a[E]("."), d = b || P, e; e = c[wa]();) if (d[e] != k) d = d[e];
        else return k;
        return d
    }
    function Ib() {}
    function Jb(a) {
        a.ba = function () {
            return a.Pf ? a.Pf : a.Pf = new a
        }
    }

    function Kb(a) {
        var b = typeof a;
        if ("object" == b) if (a) {
            if (a instanceof da) return "array";
            if (a instanceof ba) return b;
            var c = ba[D][bb][K](a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a[C] && "undefined" != typeof a[Bb] && "undefined" != typeof a[db] && !a[db]("splice")) return "array";
            if ("[object Function]" == c || "undefined" != typeof a[K] && "undefined" != typeof a[db] && !a[db]("call")) return "function"
        } else return "null";
        else if ("function" == b && "undefined" == typeof a[K]) return "object";
        return b
    }

    function Q(a) {
        return a !== i
    }
    function Lb(a) {
        return "array" == Kb(a)
    }
    function Mb(a) {
        var b = Kb(a);
        return "array" == b || "object" == b && "number" == typeof a[C]
    }
    function R(a) {
        return "string" == typeof a
    }
    function Nb(a) {
        return "function" == Kb(a)
    }
    function Pb(a) {
        var b = typeof a;
        return "object" == b && a != k || "function" == b
    }
    function Qb(a) {
        return a[Rb] || (a[Rb] = ++Sb)
    }
    var Rb = "closure_uid_" + (1E9 * r.random() >>> 0),
        Sb = 0;

    function Tb(a, b, c) {
        return a[K][M](a[Va], arguments)
    }

    function Ub(a, b, c) {
        a || f(u());
        if (2 < arguments[C]) {
            var d = da[D][Ca][K](arguments, 2);
            return function () {
                var c = da[D][Ca][K](arguments);
                da[D][Db][M](c, d);
                return a[M](b, c)
            }
        }
        return function () {
            return a[M](b, arguments)
        }
    }
    function S(a, b, c) {
        S = ca[D][Va] && -1 != ca[D][Va][bb]()[z]("native code") ? Tb : Ub;
        return S[M](k, arguments)
    }
    function Vb(a, b) {
        var c = da[D][Ca][K](arguments, 1);
        return function () {
            var b = da[D][Ca][K](arguments);
            b[Db][M](b, c);
            return a[M](this, b)
        }
    }
    var Wb = Date.now || function () {
            return +new Date
        };

    function T(a, b) {
        function c() {}
        qa(c, b[D]);
        a.n = b[D];
        qa(a, new c);
        a[D].constructor = a
    }
    ca[D].bind = ca[D][Va] || function (a, b) {
        if (1 < arguments[C]) {
            var c = da[D][Ca][K](arguments, 1);
            c[Db](this, a);
            return S[M](k, c)
        }
        return S(this, a)
    };

    function Xb(a) {
        return eval("(" + a + ")")
    }
    function Yb(a) {
        this.Cc = a
    }
    Yb[D].Hf = function (a) {
        var b = [];
        this.Md(a, b);
        return b[N]("")
    };
    Yb[D].Md = function (a, b) {
        switch (typeof a) {
            case "string":
                this.Df(a, b);
                break;
            case "number":
                this.jj(a, b);
                break;
            case "boolean":
                b[w](a);
                break;
            case "undefined":
                b[w]("null");
                break;
            case "object":
                if (a == k) {
                    b[w]("null");
                    break
                }
                if (Lb(a)) {
                    this.ij(a, b);
                    break
                }
                this.kj(a, b);
                break;
            case "function":
                break;
            default:
                f(u("Unknown type: " + typeof a))
        }
    };
    var Zb = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    }, $b = /\uffff/ [x]("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
    Yb[D].Df = function (a, b) {
        b[w]('"', a[y]($b, function (a) {
            if (a in Zb) return Zb[a];
            var b = a.charCodeAt(0),
                e = "\\u";
            16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
            return Zb[a] = e + b[bb](16)
        }), '"')
    };
    Yb[D].jj = function (a, b) {
        b[w](isFinite(a) && !isNaN(a) ? a : "null")
    };
    Yb[D].ij = function (a, b) {
        var c = a[C];
        b[w]("[");
        for (var d = "", e = 0; e < c; e++) b[w](d), d = a[e], this.Md(this.Cc ? this.Cc[K](a, v(e), d) : d, b), d = ",";
        b[w]("]")
    };
    Yb[D].kj = function (a, b) {
        b[w]("{");
        var c = "",
            d;
        for (d in a) if (ba[D].hasOwnProperty[K](a, d)) {
            var e = a[d];
            "function" != typeof e && (b[w](c), this.Df(d, b), b[w](":"), this.Md(this.Cc ? this.Cc[K](a, d, e) : e, b), c = ",")
        }
        b[w]("}")
    };

    function ac() {}
    ac[D].Ad = l;
    ac[D].hb = function () {
        this.Ad || (this.Ad = j, this.i())
    };
    ac[D].i = function () {
        if (this.mg) for (; this.mg[C];) this.mg[wa]()()
    };

    function bc(a, b, c) {
        for (var d in a) b[K](c, a[d], d, a)
    }
    function cc(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }
    function dc(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    }
    function ec(a) {
        for (var b in a) return l;
        return j
    }
    var fc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function gc(a, b) {
        for (var c, d, e = 1; e < arguments[C]; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var g = 0; g < fc[C]; g++) c = fc[g], ba[D].hasOwnProperty[K](d, c) && (a[c] = d[c])
        }
    }

    function hc(a) {
        var b = arguments[C];
        if (1 == b && Lb(arguments[0])) return hc[M](k, arguments[0]);
        for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = j;
        return c
    };

    function ic(a, b) {
        this.type = a;
        sa(this, b);
        ja(this, this[J])
    }
    O = ic[D];
    O.i = function () {};
    O.hb = function () {};
    O.Ea = l;
    O.defaultPrevented = l;
    O.sc = j;
    O.stopPropagation = function () {
        this.Ea = j
    };
    O.preventDefault = function () {
        this.defaultPrevented = j;
        this.sc = l
    };
    var jc;

    function kc(a) {
        u.captureStackTrace ? u.captureStackTrace(this, kc) : this.stack = u()[mb] || "";
        a && (this.message = v(a))
    }
    T(kc, u);
    ma(kc[D], "CustomError");

    function lc(a, b) {
        for (var c = 1; c < arguments[C]; c++) {
            var d = v(arguments[c])[y](/\$/g, "$$$$");
            a = a[y](/\%s/, d)
        }
        return a
    }
    function mc(a) {
        return a[y](/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }
    function nc(a, b) {
        if (b) return a[y](oc, "&amp;")[y](pc, "&lt;")[y](qc, "&gt;")[y](rc, "&quot;");
        if (!sc[x](a)) return a; - 1 != a[z]("&") && (a = a[y](oc, "&amp;")); - 1 != a[z]("<") && (a = a[y](pc, "&lt;")); - 1 != a[z](">") && (a = a[y](qc, "&gt;")); - 1 != a[z]('"') && (a = a[y](rc, "&quot;"));
        return a
    }
    var oc = /&/g,
        pc = /</g,
        qc = />/g,
        rc = /\"/g,
        sc = /[&<>\"]/;

    function tc(a) {
        return da[D][N][K](arguments, "")
    };

    function uc(a, b) {
        b[Db](a);
        kc[K](this, lc[M](k, b));
        b[wa]()
    }
    T(uc, kc);
    ma(uc[D], "AssertionError");

    function vc(a, b, c, d) {
        var e = "Assertion failed";
        if (c) var e = e + (": " + c),
            g = d;
        else a && (e += ": " + a, g = b);
        f(new uc("" + e, g || []))
    }
    function U(a, b, c) {
        a || vc("", k, b, da[D][Ca][K](arguments, 2));
        return a
    }
    function wc(a, b) {
        f(new uc("Failure" + (a ? ": " + a : ""), da[D][Ca][K](arguments, 1)))
    }
    function xc(a, b, c) {
        R(a) || vc("Expected string but got %s: %s.", [Kb(a), a], b, da[D][Ca][K](arguments, 2));
        return a
    };
    var yc = da[D],
        zc = yc[z] ? function (a, b, c) {
            U(a[C] != k);
            return yc[z][K](a, b, c)
        } : function (a, b, c) {
            c = c == k ? 0 : 0 > c ? r.max(0, a[C] + c) : c;
            if (R(a)) return !R(b) || 1 != b[C] ? -1 : a[z](b, c);
            for (; c < a[C]; c++) if (c in a && a[c] === b) return c;
            return -1
        }, Ac = yc[Ra] ? function (a, b, c) {
            U(a[C] != k);
            yc[Ra][K](a, b, c)
        } : function (a, b, c) {
            for (var d = a[C], e = R(a) ? a[E]("") : a, g = 0; g < d; g++) g in e && b[K](c, e[g], g, a)
        }, Bc = yc.filter ? function (a, b, c) {
            U(a[C] != k);
            return yc.filter[K](a, b, c)
        } : function (a, b, c) {
            for (var d = a[C], e = [], g = 0, h = R(a) ? a[E]("") : a, n = 0; n < d; n++) if (n in h) {
                var t = h[n];
                b[K](c, t, n, a) && (e[g++] = t)
            }
            return e
        }, Cc = yc.every ? function (a, b, c) {
            U(a[C] != k);
            return yc.every[K](a, b, c)
        } : function (a, b, c) {
            for (var d = a[C], e = R(a) ? a[E]("") : a, g = 0; g < d; g++) if (g in e && !b[K](c, e[g], g, a)) return l;
            return j
        };

    function Dc(a, b) {
        return 0 <= zc(a, b)
    }
    function Ec(a, b) {
        var c = zc(a, b),
            d;
        if (d = 0 <= c) {
            var e = a;
            U(e[C] != k);
            yc[Bb][K](e, c, 1)
        }
        return d
    }
    function Fc(a) {
        return yc[Ha][M](yc, arguments)
    }
    function Gc(a) {
        var b = a[C];
        if (0 < b) {
            for (var c = da(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }
    var Hc = Gc;

    function Ic(a, b, c) {
        U(a[C] != k);
        return 2 >= arguments[C] ? yc[Ca][K](a, b) : yc[Ca][K](a, b, c)
    };
    var Jc = [],
        Kc = l;

    function Lc(a) {
        if (Kc) for (var b = 0; b < Jc[C]; b++) a(S(Jc[b].Gk, Jc[b]))
    };
    var Mc, Nc, Oc, Pc;

    function Qc() {
        return P[xb] ? P[xb][lb] : k
    }
    Pc = Oc = Nc = Mc = l;
    var Rc;
    if (Rc = Qc()) {
        var Sc = P[xb];
        Mc = 0 == Rc[z]("Opera");
        Nc = !Mc && -1 != Rc[z]("MSIE");
        Oc = !Mc && -1 != Rc[z]("WebKit");
        Pc = !Mc && !Oc && "Gecko" == Sc.product
    }
    var Tc = Mc,
        V = Nc,
        Uc = Pc,
        Vc = Oc;

    function Wc() {
        var a = P[ib];
        return a ? a.documentMode : i
    }
    var Xc;
    a: {
        var Yc = "",
            Zc;
        if (Tc && P.opera) var $c = P.opera.version,
            Yc = "function" == typeof $c ? $c() : $c;
        else if (Uc ? Zc = /rv\:([^\);]+)(\)|;)/ : V ? Zc = /MSIE\s+([^\);]+)(\)|;)/ : Vc && (Zc = /WebKit\/(\S+)/), Zc) var ad = Zc[ya](Qc()),
            Yc = ad ? ad[1] : "";
        if (V) {
            var bd = Wc();
            if (bd > parseFloat(Yc)) {
                Xc = v(bd);
                break a
            }
        }
        Xc = Yc
    }
    var cd = Xc,
        dd = {};

    function ed(a) {
        var b;
        if (!(b = dd[a])) {
            b = dd;
            var c = a,
                d = a,
                e = 0;
            a = mc(v(cd))[E](".");
            for (var d = mc(v(d))[E]("."), g = r.max(a[C], d[C]), h = 0; 0 == e && h < g; h++) {
                var n = a[h] || "",
                    t = d[h] || "",
                    F = ga("(\\d*)(\\D*)", "g"),
                    Z = ga("(\\d*)(\\D*)", "g");
                do {
                    var H = F[ya](n) || ["", "", ""],
                        $ = Z[ya](t) || ["", "", ""];
                    if (0 == H[0][C] && 0 == $[0][C]) break;
                    var e = 0 == H[1][C] ? 0 : ea(H[1], 10),
                        G = 0 == $[1][C] ? 0 : ea($[1], 10),
                        e = (e < G ? -1 : e > G ? 1 : 0) || ((0 == H[2][C]) < (0 == $[2][C]) ? -1 : (0 == H[2][C]) > (0 == $[2][C]) ? 1 : 0) || (H[2] < $[2] ? -1 : H[2] > $[2] ? 1 : 0)
                } while (0 == e)
            }
            a = e;
            b = b[c] = 0 <= a
        }
        return b
    }
    var fd;
    var gd = P[ib];
    if (gd && V) {
        var hd = Wc();
        fd = hd || ("CSS1Compat" == gd.compatMode ? ea(cd, 10) : 5)
    } else fd = i;
    var id = fd;

    function jd(a) {
        jd[" "](a);
        return a
    }
    jd[" "] = Ib;
    var kd = !V || V && 9 <= id,
        ld = V && !ed("9");
    !Vc || ed("528");
    Uc && ed("1.9b") || V && ed("8") || Tc && ed("9.5") || Vc && ed("528");
    Uc && !ed("8") || V && ed("9");

    function md(a, b) {
        a && this.ic(a, b)
    }
    T(md, ic);
    O = md[D];
    sa(O, k);
    O.relatedTarget = k;
    O.offsetX = 0;
    O.offsetY = 0;
    O.clientX = 0;
    O.clientY = 0;
    O.screenX = 0;
    O.screenY = 0;
    O.button = 0;
    ka(O, 0);
    O.charCode = 0;
    O.ctrlKey = l;
    O.altKey = l;
    O.shiftKey = l;
    O.metaKey = l;
    O.ub = k;
    O.ic = function (a, b) {
        var c = this.type = a[B];
        ic[K](this, c);
        sa(this, a[J] || a.srcElement);
        ja(this, b);
        var d = a.relatedTarget;
        if (d) {
            if (Uc) {
                var e;
                a: {
                    try {
                        jd(d.nodeName);
                        e = j;
                        break a
                    } catch (g) {}
                    e = l
                }
                e || (d = k)
            }
        } else "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
        this.relatedTarget = d;
        this.offsetX = Vc || a.offsetX !== i ? a.offsetX : a.layerX;
        this.offsetY = Vc || a.offsetY !== i ? a.offsetY : a.layerY;
        this.clientX = a[Ya] !== i ? a[Ya] : a.pageX;
        this.clientY = a[Za] !== i ? a[Za] : a.pageY;
        this.screenX = a.screenX || 0;
        this.screenY = a.screenY || 0;
        this.button = a.button;
        ka(this, a[Qa] || 0);
        this.charCode = a.charCode || ("keypress" == c ? a[Qa] : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.state = a.state;
        this.ub = a;
        a.defaultPrevented && this[Ja]();
        delete this.Ea
    };
    O.stopPropagation = function () {
        md.n[kb][K](this);
        this.ub[kb] ? this.ub[kb]() : this.ub.cancelBubble = j
    };
    O.preventDefault = function () {
        md.n[Ja][K](this);
        var a = this.ub;
        if (a[Ja]) a[Ja]();
        else if (a.returnValue = l, ld) try {
            (a.ctrlKey || 112 <= a[Qa] && 123 >= a[Qa]) && ka(a, -1)
        } catch (b) {}
    };
    O.i = function () {};
    var nd = 0;

    function od() {}
    O = od[D];
    O.key = 0;
    O.Ca = l;
    O.kc = l;
    O.ic = function (a, b, c, d, e, g) {
        Nb(a) ? this.tf = j : a && a[Ta] && Nb(a[Ta]) ? this.tf = l : f(u("Invalid listener argument"));
        this.na = a;
        this.Oe = b;
        this.src = c;
        this.type = d;
        this.capture = !! e;
        this.ed = g;
        this.kc = l;
        this.key = ++nd;
        this.Ca = l
    };
    O.handleEvent = function (a) {
        return this.tf ? this.na[K](this.ed || this.src, a) : this.na[Ta][K](this.na, a)
    };
    var pd = {}, qd = {}, rd = {}, sd = "on",
        td = {};

    function ud(a, b, c, d, e) {
        if (Lb(b)) {
            for (var g = 0; g < b[C]; g++) ud(a, b[g], c, d, e);
            return k
        }
        a: {
            b || f(u("Invalid event type"));
            d = !! d;
            var h = qd;
            b in h || (h[b] = {
                c: 0,
                A: 0
            });
            h = h[b];
            d in h || (h[d] = {
                c: 0,
                A: 0
            }, h.c++);
            var h = h[d],
                g = Qb(a),
                n;
            h.A++;
            if (h[g]) {
                n = h[g];
                for (var t = 0; t < n[C]; t++) if (h = n[t], h.na == c && h.ed == e) {
                    if (h.Ca) break;
                    n[t].kc = l;
                    a = n[t];
                    break a
                }
            } else n = h[g] = [], h.c++;
            t = vd();
            h = new od;
            h.ic(c, t, a, b, d, e);
            h.kc = l;
            t.src = a;
            t.na = h;
            n[w](h);
            rd[g] || (rd[g] = []);
            rd[g][w](h);
            a[A] ? (a == P || !a.Me) && a[A](b, t, d) : a.attachEvent(b in td ? td[b] : td[b] = sd + b, t);
            a = h
        }
        b = a.key;
        pd[b] = a;
        return b
    }
    function vd() {
        var a = wd,
            b = kd ? function (c) {
                return a[K](b.src, b.na, c)
            } : function (c) {
                c = a[K](b.src, b.na, c);
                if (!c) return c
            };
        return b
    }
    function xd(a, b, c, d, e) {
        if (Lb(b)) {
            for (var g = 0; g < b[C]; g++) xd(a, b[g], c, d, e);
            return k
        }
        d = !! d;
        a: {
            g = qd;
            if (b in g && (g = g[b], d in g && (g = g[d], a = Qb(a), g[a]))) {
                a = g[a];
                break a
            }
            a = k
        }
        if (!a) return l;
        for (g = 0; g < a[C]; g++) if (a[g].na == c && a[g].capture == d && a[g].ed == e) return yd(a[g].key);
        return l
    }

    function yd(a) {
        var b = pd[a];
        if (!b || b.Ca) return l;
        var c = b.src,
            d = b[B],
            e = b.Oe,
            g = b.capture;
        c[jb] ? (c == P || !c.Me) && c[jb](d, e, g) : c.detachEvent && c.detachEvent(d in td ? td[d] : td[d] = sd + d, e);
        c = Qb(c);
        rd[c] && (e = rd[c], Ec(e, b), 0 == e[C] && delete rd[c]);
        b.Ca = j;
        if (b = qd[d][g][c]) b.$e = j, zd(d, g, c, b);
        delete pd[a];
        return j
    }

    function zd(a, b, c, d) {
        if (!d.rc && d.$e) {
            for (var e = 0, g = 0; e < d[C]; e++) if (d[e].Ca) {
                var h = d[e].Oe;
                h.src = k
            } else e != g && (d[g] = d[e]), g++;
            pa(d, g);
            d.$e = l;
            0 == g && (delete qd[a][b][c], qd[a][b].c--, 0 == qd[a][b].c && (delete qd[a][b], qd[a].c--), 0 == qd[a].c && delete qd[a])
        }
    }
    function Ad(a, b) {
        var c = 0,
            d = a == k,
            e = b == k;
        if (d) bc(pd, function (a, b) {
            yd(b);
            c++
        });
        else if (d = Qb(a), rd[d]) for (var d = rd[d], g = d[C] - 1; 0 <= g; g--) {
            var h = d[g];
            if (e || b == h[B]) yd(h.key), c++
        }
        return c
    }

    function Bd(a, b, c, d, e) {
        var g = 1;
        b = Qb(b);
        if (a[b]) {
            var h = --a.A,
                n = a[b];
            n.rc ? n.rc++ : n.rc = 1;
            try {
                for (var t = n[C], F = 0; F < t; F++) {
                    var Z = n[F];
                    Z && !Z.Ca && (g &= Cd(Z, e) !== l)
                }
            } finally {
                a.A = r.max(h, a.A), n.rc--, zd(c, d, b, n)
            }
        }
        return Boolean(g)
    }
    function Cd(a, b) {
        a.kc && yd(a.key);
        return a[Ta](b)
    }

    function wd(a, b) {
        if (a.Ca) return j;
        var c = a[B],
            d = qd;
        if (!(c in d)) return j;
        var d = d[c],
            e, g;
        if (!kd) {
            e = b || Hb("window.event");
            var h = j in d,
                n = l in d;
            if (h) {
                if (0 > e[Qa] || e.returnValue != i) return j;
                a: {
                    var t = e,
                        F = l;
                    if (0 == t[Qa]) try {
                        ka(t, -1);
                        break a
                    } catch (Z) {
                        F = j
                    }
                    if (F || t.returnValue == i) t.returnValue = j
                }
            }
            t = new md;
            t.ic(e, this);
            e = j;
            try {
                if (h) {
                    for (var H = [], $ = t.currentTarget; $; $ = $[yb]) H[w]($);
                    g = d[j];
                    g.A = g.c;
                    for (var G = H[C] - 1; !t.Ea && 0 <= G && g.A; G--) ja(t, H[G]), e &= Bd(g, H[G], c, j, t);
                    if (n) {
                        g = d[l];
                        g.A = g.c;
                        for (G = 0; !t.Ea && G < H[C] && g.A; G++) ja(t,
                        H[G]), e &= Bd(g, H[G], c, l, t)
                    }
                } else e = Cd(a, t)
            } finally {
                H && pa(H, 0)
            }
            return e
        }
        c = new md(b, this);
        return e = Cd(a, c)
    }
    Lc(function (a) {
        wd = a(wd)
    });

    function Dd() {}
    T(Dd, ac);
    O = Dd[D];
    O.Me = j;
    O.fc = k;
    O.td = function (a) {
        this.fc = a
    };
    O.addEventListener = function (a, b, c, d) {
        ud(this, a, b, c, d)
    };
    O.removeEventListener = function (a, b, c, d) {
        xd(this, a, b, c, d)
    };
    O.dispatchEvent = function (a) {
        var b = a[B] || a,
            c = qd;
        if (b in c) {
            if (R(a)) a = new ic(a, this);
            else if (a instanceof ic) sa(a, a[J] || this);
            else {
                var d = a;
                a = new ic(b, this);
                gc(a, d)
            }
            var d = 1,
                e, c = c[b],
                b = j in c,
                g;
            if (b) {
                e = [];
                for (g = this; g; g = g.fc) e[w](g);
                g = c[j];
                g.A = g.c;
                for (var h = e[C] - 1; !a.Ea && 0 <= h && g.A; h--) ja(a, e[h]), d &= Bd(g, e[h], a[B], j, a) && a.sc != l
            }
            if (g = l in c) if (g = c[l], g.A = g.c, b) for (h = 0; !a.Ea && h < e[C] && g.A; h++) ja(a, e[h]), d &= Bd(g, e[h], a[B], l, a) && a.sc != l;
            else for (e = this; !a.Ea && e && g.A; e = e.fc) ja(a, e), d &= Bd(g, e, a[B], l, a) && a.sc != l;
            a = Boolean(d)
        } else a = j;
        return a
    };
    O.i = function () {
        Dd.n.i[K](this);
        Ad(this);
        this.fc = k
    };
    var Ed = P;

    function Fd() {
        this.yc = [];
        this.Za = {};
        this.zd = l;
        this.ti = 1;
        this.pf = {};
        this.sf = k;
        ud(p, "beforeunload", this.Ki, l, this)
    }
    Jb(Fd);
    O = Fd[D];
    O.dg = function (a) {
        if (a == k) return "1";
        switch (Kb(a)) {
            case "string":
                return aa(v(a));
            case "number":
                return "" + a;
            case "boolean":
                return a ? "1" : "0";
            case "array":
                var b = [],
                    c;
                for (c in a) b[w](this.dg(a[c]));
                return b[N](",");
            case "object":
                b = [];
                for (c in a) b[w](this.Of(c, a[c]));
                return b[N](",");
            default:
                return ""
        }
    };
    O.Of = function (a, b) {
        var c = [aa(v(a)), this.dg(b)];
        return c[N]("=")
    };
    O.log = function (a, b, c) {
        this.yc[w]([a, b, c]);
        this.zd || (this.zd = j, a = this.Af, Nb(a) ? this && (a = S(a, this)) : a && "function" == typeof a[Ta] ? a = S(a[Ta], a) : f(u("Invalid listener argument")), Ed[hb](a, 0))
    };
    O.Af = function () {
        for (var a = 0; a < this.yc[C]; a++) {
            var b = this.yc[a];
            this.zf(b[0], b[1], b[2])
        }
        this.yc = [];
        this.zd = l
    };
    O.zf = function (a, b, c) {
        var d = this.sf ? ["client=", this.sf, "&"][N]("") : "";
        c = c || "";
        this.lj(c + "/gen204?" + d + this.Of(a, b))
    };
    O.lj = function (a) {
        var b = new Image,
            c = this.ti++;
        this.pf[c] = b;
        b.onload = b.onerror = function () {
            delete Fd.ba().pf[c]
        };
        b.src = a;
        b = k
    };
    O.ej = function (a, b) {
        var c = this.Za[a],
            c = c[1] != k ? c[2] != k ? [c[2], c[1]] : c[1] : c[2];
        this.zf(a, c, b);
        this.bj(a)
    };
    O.bj = function (a) {
        a in this.Za && (Ed[za](this.Za[a][0]), delete this.Za[a])
    };
    O.Ki = function () {
        this.Af();
        for (var a in this.Za) 0 != this.Za[a] && this.ej(a)
    };

    function Gd(a, b) {
        try {
            return Xb(a)
        } catch (c) {
            var d = Fd.ba();
            b.js = a;
            b.error = c[ob];
            d.log("jsonParseErr", b);
            f(c)
        }
    };

    function Hd(a, b, c) {
        this.Bc = a;
        this.Kd = b;
        this.gj = hc(c)
    }
    var Id = k;

    function Jd(a, b, c) {
        if (!Id && "openDatabase" in p) try {
            Id = p.openDatabase("GoogleTranslateMobileWebApp", "1.0", "Google Translate Mobile Web App", 5E5)
        } catch (d) {}
        if (Id) {
            var e = new Hd(Id, a, b);
            e.$j(a, b, function (a) {
                c && c(a, e)
            })
        } else c && c(l, k)
    }
    function Kd(a, b) {
        b = b || k;
        return a ? Vb(a, j, b) : Ib
    }
    function Ld(a) {
        return function (b) {
            a && a(l, b.code)
        }
    }
    O = Hd[D];
    O.$j = function (a, b, c) {
        var d = [];
        d[w]("CREATE TABLE IF NOT EXISTS", a);
        a = [];
        for (var e = 0, g = b[C]; e < g; e++) a[w](b[e] + " TEXT");
        d[w]("(", a[N](","), ")");
        this.Bc[rb](function (a) {
            a[cb](d[N](" "))
        }, Ld(c), Kd(c))
    };
    O.Ld = function (a) {
        for (var b in a) if (!(b in this.gj)) return l;
        return j
    };
    O.cg = function (a, b, c, d) {
        if (this.Ld(a)) {
            var e = [];
            e[w]("SELECT * FROM", this.Kd);
            var g = [],
                h = [];
            Md(a, g, h);
            g[C] && e[w]("WHERE", g[N](" AND "));
            if (b && 0 < b[C]) {
                a = [];
                for (var n in b) a[w](b[n][0] + " " + (b[n][1] ? "ASC" : "DESC"));
                e[w]("ORDER BY", a[N](","))
            }
            c && e[w]("LIMIT", c);
            var t = [];
            this.Bc[rb](function (a) {
                a[cb](e[N](" "), h, function (a, b) {
                    for (var c = 0, d = b.rows[C]; c < d; c++) t[w](b.rows[Ka](c))
                })
            }, Ld(d), Kd(d, t))
        } else d && d(l, -1)
    };
    O.Gf = function (a, b) {
        this.Yj([a], b)
    };
    O.Yj = function (a, b) {
        for (var c = 0, d = a[C]; c < d; c++) if (!this.Ld(a[c])) {
            b && b(l, -1);
            return
        }
        for (var e = [], c = 0, d = a[C]; c < d; c++) {
            var g = a[c],
                h = [],
                n = [],
                t = [],
                F;
            for (F in g) h[w](F), n[w](g[F]), t[w]("?");
            g = ["INSERT INTO", this.Kd, "(", h[N](","), ")", "VALUES", "(", t[N](","), ")"];
            e[w]([g[N](" "), n])
        }
        this.Bc[rb](function (a) {
            for (var b = 0, c = e[C]; b < c; b++) {
                var d = e[b][0],
                    g = e[b][1];
                a[cb](d, g)
            }
        }, Ld(b), Kd(b))
    };
    O.Mf = function (a, b) {
        if (this.Ld(a)) {
            var c = [];
            c[w]("DELETE FROM", this.Kd);
            var d = [],
                e = [];
            Md(a, d, e);
            d[C] && c[w]("WHERE", d[N](" AND "));
            this.Bc[rb](function (a) {
                a[cb](c[N](" "), e)
            }, Ld(b), Kd(b))
        } else b && b(l, -1)
    };

    function Md(a, b, c) {
        for (var d in a) b[w](d + "=?"), c[w](a[d])
    };

    function Nd(a) {
        this.Jd = a
    }
    function Od(a, b) {
        var c = ["sl", "tl", "src", "trg", "ts"];
        Jd(a, c, function (a, c) {
            var g = k;
            a && (g = new Nd(c));
            b && b(a, g)
        })
    }
    Nd[D].Wa = function (a, b, c, d, e) {
        function g(g) {
            g ? (g = {}, g.sl = a, g.tl = b, g.src = c, g.trg = (new Yb(i)).Hf(d), g.ts = (new Date).getTime(), h.Jd.Gf(g, function (a) {
                e && e(a)
            })) : e && e(l)
        }
        var h = this;
        this.Hd(a, b, c, g)
    };
    Nd[D].Hd = function (a, b, c, d) {
        var e = {};
        a && (e.sl = a);
        b && (e.tl = b);
        c && (e.src = c);
        this.Jd.Mf(e, function (a) {
            d && d(a)
        })
    };
    Nd[D].ak = function (a, b, c, d, e, g) {
        var h = {};
        a && (h.sl = a);
        b && (h.tl = b);
        c && (h.src = c);
        this.Jd.cg(h, d, e, function (a, b) {
            var c = [];
            if (a) for (var d = 0, e = b[C]; d < e; d++) {
                var h = {}, G;
                for (G in b[d]) h[G] = b[d][G];
                var Ob = Gd(h.trg, {
                    "class": "trans.common.SavedTranslations"
                });
                h.trg = Ob;
                c[w](h)
            }
            g && g(a, c)
        })
    };
    Nd[D].Rf = function (a, b, c, d, e) {
        this.ak(a, b, c, [
            ["ts"]
        ], d, function (a, b) {
            e && e(a, b)
        })
    };

    function Pd(a) {
        this.Ia = a
    }
    function Qd(a) {
        Od("TranslationHistory", function (b, c) {
            var d = b ? new Pd(c) : k;
            a && a(b, d)
        })
    }
    Pd[D].xj = function (a, b, c, d, e) {
        this.Ia.Wa(a, b, c, d, e)
    };
    la(Pd[D], function (a, b, c, d) {
        this.Ia.Hd(a, b, c, d)
    });
    Pd[D].Dj = function (a, b, c, d) {
        this.Ia.Rf(a, b, c, 100, d)
    };

    function Rd(a) {
        this.Ia = a
    }
    function Sd(a) {
        Od("TranslationStarred", function (b, c) {
            var d = b ? new Rd(c) : k;
            a && a(b, d)
        })
    }
    Rd[D].Ph = function (a, b, c, d, e) {
        this.Ia.Wa(a, b, c, d, e)
    };
    Rd[D].Qh = function (a, b, c, d) {
        this.Ia.Hd(a, b, c, d)
    };
    Rd[D].Sf = function (a, b, c, d) {
        this.Ia.Rf(a, b, c, 0, d)
    };
    var Td = ["ts", "sl", "tl", "src", "trg"],
        Ud = k;

    function Vd(a) {
        Ud ? a(j, Ud) : Jd("LocalTranslation", Td, function (b, c) {
            b && (Ud = c);
            a(b, c)
        })
    }
    function Wd(a, b, c, d, e) {
        Vd(function (g) {
            g ? Xd(a, b, c, d, e) : e(l, {}, l)
        })
    }
    function Xd(a, b, c, d, e) {
        c = {};
        c.sl = a;
        c.tl = b;
        c.src = d;
        Ud.cg(c, [], 0, function (a, b) {
            if (a) if (0 == b[C]) e(j, {}, l);
            else {
                var c = b[0].ts,
                    d = b[0].trg,
                    c = 864E5 < (new Date).getTime() - c;
                e(j, Gd(d, {
                    "class": "trans.common.LocalTranslation"
                }), c)
            } else e(l, {}, l)
        })
    }
    function Yd(a, b, c, d, e, g) {
        Vd(function (h) {
            h ? Zd(a, b, c, d, e, g) : g && g(l)
        })
    }

    function Zd(a, b, c, d, e, g) {
        c = {};
        c.sl = a;
        c.tl = b;
        c.src = d;
        Ud.Mf(c, function (c) {
            c || g && g(l);
            c = {};
            c.sl = a;
            c.tl = b;
            c.src = d;
            c.trg = (new Yb(i)).Hf(e);
            c.ts = (new Date).getTime();
            Ud.Gf(c, function (a) {
                g && g(a)
            })
        })
    };
    var $d = "StopIteration" in P ? P.StopIteration : u("StopIteration");

    function ae() {}
    ae[D].next = function () {
        f($d)
    };
    ae[D].Wj = function () {
        return this
    };

    function be(a) {
        if ("function" == typeof a.W) return a.W();
        if (R(a)) return a[E]("");
        if (Mb(a)) {
            for (var b = [], c = a[C], d = 0; d < c; d++) b[w](a[d]);
            return b
        }
        return cc(a)
    }
    function ce(a, b, c) {
        if ("function" == typeof a[Ra]) a[Ra](b, c);
        else if (Mb(a) || R(a)) Ac(a, b, c);
        else {
            var d;
            var e = a;
            if ("function" == typeof e.Ga) d = e.Ga();
            else if ("function" != typeof e.W) if (Mb(e) || R(e)) {
                d = [];
                for (var e = e[C], g = 0; g < e; g++) d[w](g)
            } else d = dc(e);
            else d = i;
            for (var e = be(a), g = e[C], h = 0; h < g; h++) b[K](c, e[h], d && d[h], a)
        }
    };

    function de(a, b) {
        this.O = {};
        this.l = [];
        var c = arguments[C];
        if (1 < c) {
            c % 2 && f(u("Uneven number of arguments"));
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else a && this.Gi(a)
    }
    O = de[D];
    O.c = 0;
    O.ob = 0;
    O.W = function () {
        this.nc();
        for (var a = [], b = 0; b < this.l[C]; b++) {
            var c = this.l[b];
            a[w](this.O[c])
        }
        return a
    };
    O.Ga = function () {
        this.nc();
        return this.l[Ha]()
    };
    O.ra = function (a) {
        return ee(this.O, a)
    };
    la(O, function () {
        this.O = {};
        pa(this.l, 0);
        this.ob = this.c = 0
    });
    O.remove = function (a) {
        return ee(this.O, a) ? (delete this.O[a], this.c--, this.ob++, this.l[C] > 2 * this.c && this.nc(), j) : l
    };
    O.nc = function () {
        if (this.c != this.l[C]) {
            for (var a = 0, b = 0; a < this.l[C];) {
                var c = this.l[a];
                ee(this.O, c) && (this.l[b++] = c);
                a++
            }
            pa(this.l, b)
        }
        if (this.c != this.l[C]) {
            for (var d = {}, b = a = 0; a < this.l[C];) c = this.l[a], ee(d, c) || (this.l[b++] = c, d[c] = 1), a++;
            pa(this.l, b)
        }
    };
    O.get = function (a, b) {
        return ee(this.O, a) ? this.O[a] : b
    };
    O.set = function (a, b) {
        ee(this.O, a) || (this.c++, this.l[w](a), this.ob++);
        this.O[a] = b
    };
    O.Gi = function (a) {
        var b;
        a instanceof de ? (b = a.Ga(), a = a.W()) : (b = dc(a), a = cc(a));
        for (var c = 0; c < b[C]; c++) this.set(b[c], a[c])
    };
    O.m = function () {
        return new de(this)
    };
    O.Wj = function (a) {
        this.nc();
        var b = 0,
            c = this.l,
            d = this.O,
            e = this.ob,
            g = this,
            h = new ae;
        h.next = function () {
            for (;;) {
                e != g.ob && f(u("The map has changed since the iterator was created"));
                b >= c[C] && f($d);
                var h = c[b++];
                return a ? h : d[h]
            }
        };
        return h
    };

    function ee(a, b) {
        return ba[D].hasOwnProperty[K](a, b)
    };

    function fe(a, b) {
        try {
            var c;
            var d = a,
                e = Hb("window.location.href");
            if (R(d)) c = {
                message: d,
                name: "Unknown error",
                lineNumber: "Not available",
                fileName: e,
                stack: "Not available"
            };
            else {
                var g, h, n = l;
                try {
                    g = d.lineNumber || d.Ak || "Not available"
                } catch (t) {
                    g = "Not available", n = j
                }
                try {
                    h = d[zb] || d.filename || d.sourceURL || P.$googDebugFname || e
                } catch (F) {
                    h = "Not available", n = j
                }
                c = n || !d.lineNumber || !d[zb] || !d[mb] ? {
                    message: d[ob],
                    name: d[Wa],
                    lineNumber: g,
                    fileName: h,
                    stack: d[mb] || "Not available"
                } : d
            }
            var Z = "Message: " + nc(c[ob]) + '\nUrl: <a href="view-source:' + c[zb] + '" target="_new">' + c[zb] + "</a>\nLine: " + c.lineNumber + "\n\nBrowser stack:\n" + nc(c[mb] + "-> ") + "[end]\n\nJS stack traversal:\n" + nc(ge(b) + "-> ");
            return Z
        } catch (H) {
            return "Exception trying to expose exception! You win, we lose. " + H
        }
    }
    function ge(a) {
        return he(a || arguments.callee.caller, [])
    }

    function he(a, b) {
        var c = [];
        if (Dc(b, a)) c[w]("[...circular reference...]");
        else if (a && 50 > b[C]) {
            c[w](ie(a) + "(");
            for (var d = a.arguments, e = 0; e < d[C]; e++) {
                0 < e && c[w](", ");
                var g;
                g = d[e];
                switch (typeof g) {
                    case "object":
                        g = g ? "object" : "null";
                        break;
                    case "string":
                        break;
                    case "number":
                        g = v(g);
                        break;
                    case "boolean":
                        g = g ? "true" : "false";
                        break;
                    case "function":
                        g = (g = ie(g)) ? g : "[fn]";
                        break;
                    default:
                        g = typeof g
                }
                40 < g[C] && (g = g[$a](0, 40) + "...");
                c[w](g)
            }
            b[w](a);
            c[w](")\n");
            try {
                c[w](he(a.caller, b))
            } catch (h) {
                c[w]("[exception trying to get caller]\n")
            }
        } else a ? c[w]("[...long stack...]") : c[w]("[end]");
        return c[N]("")
    }
    function ie(a) {
        if (je[a]) return je[a];
        if (jc) {
            var b = jc(a);
            if (b) return je[a] = b
        }
        a = v(a);
        je[a] || ((b = /function ([^\(]+)/ [ya](a)) ? (b = b[1], je[a] = b) : je[a] = "[Anonymous]");
        return je[a]
    }
    var je = {};

    function ke(a, b, c, d, e) {
        this[vb](a, b, c, d, e)
    }
    ke[D].Kf = k;
    ke[D].Jf = k;
    var le = 0;
    ta(ke[D], function (a, b, c, d, e) {
        "number" == typeof e || le++;
        d || Wb();
        this.tb = a;
        this.Zi = b;
        delete this.Kf;
        delete this.Jf
    });
    ke[D].vj = function (a) {
        this.Kf = a
    };
    ke[D].wj = function (a) {
        this.Jf = a
    };
    ke[D].bg = function (a) {
        this.tb = a
    };

    function me(a) {
        this.uj = a
    }
    me[D].C = k;
    me[D].tb = k;
    me[D].D = k;
    me[D].k = k;

    function ne(a, b) {
        ma(this, a);
        ia(this, b)
    }
    oa(ne[D], function () {
        return this[Wa]
    });
    var oe = new ne("SEVERE", 1E3),
        pe = new ne("WARNING", 900),
        qe = new ne("INFO", 800),
        re = new ne("CONFIG", 700),
        se = new ne("FINE", 500);
    O = me[D];
    O.getParent = function () {
        return this.C
    };
    O.Rd = function () {
        this.D || (this.D = {});
        return this.D
    };
    O.bg = function (a) {
        this.tb = a
    };
    O.yf = function () {
        if (this.tb) return this.tb;
        if (this.C) return this.C.yf();
        wc("Root logger has no level set.");
        return k
    };
    O.Qf = function (a) {
        return a[Ia] >= this.yf()[Ia]
    };
    O.log = function (a, b, c) {
        this.Qf(a) && this.oj(this.pj(a, b, c))
    };
    O.pj = function (a, b, c) {
        var d;
        d = new ke(a, v(b), this.uj);
        c && (d.vj(c), d.wj(fe(c, arguments.callee.caller)));
        return d
    };
    O.Yh = function (a, b) {
        this.log(oe, a, b)
    };
    O.oc = function (a, b) {
        this.log(pe, a, b)
    };
    O.info = function (a, b) {
        this.log(qe, a, b)
    };
    O.J = function (a, b) {
        this.log(se, a, b)
    };
    O.oj = function (a) {
        var b = "log:" + a.Zi;
        if (P[ub]) if (P[ub][xa]) P[ub][xa](b);
        else P[ub].markTimeline && P[ub].markTimeline(b);
        P.msWriteProfilerMark && P.msWriteProfilerMark(b);
        for (b = this; b;) b.Kj(a), b = b.getParent()
    };
    O.Kj = function (a) {
        if (this.k) for (var b = 0, c; c = this.k[b]; b++) c(a)
    };
    O.rj = function (a) {
        this.C = a
    };
    O.nj = function (a, b) {
        this.Rd()[a] = b
    };
    var te = {}, ue = k;

    function ve(a) {
        ue || (ue = new me(""), te[""] = ue, ue.bg(re));
        var b = te[a];
        if (!b) {
            var b = new me(a),
                c = a.lastIndexOf("."),
                d = a[$a](0, c),
                c = a[$a](c + 1),
                d = ve(d);
            d.nj(c, b);
            b.rj(d);
            te[a] = b
        }
        return b
    };
    var we = ga("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

    function xe(a) {
        if (ye) {
            ye = l;
            var b = P[nb];
            if (b) {
                var c = b.href;
                if (c && (c = (c = xe(c)[3] || k) && fa(c)) && c != b.hostname) ye = j, f(u())
            }
        }
        return a[Na](we)
    }
    var ye = Vc;

    function ze() {}
    ze[D].fg = k;
    ze[D].ie = function () {
        return this.fg || (this.fg = this.Fj())
    };
    var Ae;

    function Be() {}
    T(Be, ze);
    Be[D].$f = function () {
        var a = this.jg();
        return a ? new ActiveXObject(a) : new XMLHttpRequest
    };
    Be[D].Fj = function () {
        var a = this.jg(),
            b = {};
        a && (b[0] = j, b[1] = j);
        return b
    };
    Be[D].jg = function () {
        if (!this.kg && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var a = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], b = 0; b < a[C]; b++) {
                var c = a[b];
                try {
                    return new ActiveXObject(c), this.kg = c
                } catch (d) {}
            }
            f(u("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
        }
        return this.kg
    };
    var Ce = new Be;
    Ae = Ce;

    function De(a) {
        this.headers = new de;
        this.Mb = a || k
    }
    T(De, Dd);
    De[D].z = ve("goog.net.XhrIo");
    var Ee = /^https?$/i,
        Fe = [];

    function Ge(a) {
        a.hb();
        Ec(Fe, a)
    }
    O = De[D];
    O.fa = l;
    O.e = k;
    O.Hb = k;
    O.Kb = "";
    O.ge = "";
    O.cb = "";
    O.Nc = l;
    O.Fb = l;
    O.Kc = l;
    O.ya = l;
    O.Lb = 0;
    O.ua = k;
    O.je = "";
    O.Xg = l;
    O.send = function (a, b, c, d) {
        this.e && f(u("[goog.net.XhrIo] Object is active with another request=" + this.Kb + "; newUri=" + a));
        b = b ? b.toUpperCase() : "GET";
        this.Kb = a;
        this.cb = "";
        this.ge = b;
        this.Nc = l;
        this.fa = j;
        this.e = this.Vg();
        this.Hb = this.Mb ? this.Mb.ie() : Ae.ie();
        this.e.onreadystatechange = S(this.Yd, this);
        try {
            this.z.J(this.$("Opening Xhr")), this.Kc = j, this.e.open(b, a, j), this.Kc = l
        } catch (e) {
            this.z.J(this.$("Error opening Xhr: " + e[ob]));
            this.he(5, e);
            return
        }
        a = c || "";
        var g = this.headers.m();
        d && ce(d, function (a, b) {
            g.set(b,
            a)
        });
        d = P.FormData && a instanceof P.FormData;
        "POST" == b && (!g.ra("Content-Type") && !d) && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        ce(g, function (a, b) {
            this.e.setRequestHeader(b, a)
        }, this);
        this.je && (this.e.responseType = this.je);
        "withCredentials" in this.e && (this.e.withCredentials = this.Xg);
        try {
            this.ua && (Ed[za](this.ua), this.ua = k), 0 < this.Lb && (this.z.J(this.$("Will abort after " + this.Lb + "ms if incomplete")), this.ua = Ed[hb](S(this.Wg, this), this.Lb)), this.z.J(this.$("Sending request")),
            this.Fb = j, this.e.send(a), this.Fb = l
        } catch (h) {
            this.z.J(this.$("Send error: " + h[ob])), this.he(5, h)
        }
    };
    O.Vg = function () {
        return this.Mb ? this.Mb.$f() : Ae.$f()
    };
    O.Wg = function () {
        "undefined" != typeof Fb && this.e && (this.cb = "Timed out after " + this.Lb + "ms, aborting", this.z.J(this.$(this.cb)), this[La]("timeout"), this[gb](8))
    };
    O.he = function (a, b) {
        this.fa = l;
        this.e && (this.ya = j, this.e[gb](), this.ya = l);
        this.cb = b;
        this.pe();
        this.Nb()
    };
    O.pe = function () {
        this.Nc || (this.Nc = j, this[La]("complete"), this[La]("error"))
    };
    O.abort = function () {
        this.e && this.fa && (this.z.J(this.$("Aborting")), this.fa = l, this.ya = j, this.e[gb](), this.ya = l, this[La]("complete"), this[La]("abort"), this.Nb())
    };
    O.i = function () {
        this.e && (this.fa && (this.fa = l, this.ya = j, this.e[gb](), this.ya = l), this.Nb(j));
        De.n.i[K](this)
    };
    O.Yd = function () {
        !this.Kc && !this.Fb && !this.ya ? this.Gd() : this.xf()
    };
    O.Gd = function () {
        this.xf()
    };
    O.xf = function () {
        if (this.fa && "undefined" != typeof Fb) if (this.Hb[1] && 4 == this.lb() && 2 == this.nb()) this.z.J(this.$("Local request error detected and ignored"));
        else if (this.Fb && 4 == this.lb()) Ed[hb](S(this.Yd, this), 0);
        else if (this[La]("readystatechange"), this.sh()) {
            this.z.J(this.$("Request complete"));
            this.fa = l;
            try {
                this.Be() ? (this[La]("complete"), this[La]("success")) : (this.cb = this.rh() + " [" + this.nb() + "]", this.pe())
            } finally {
                this.Nb()
            }
        }
    };
    O.Nb = function (a) {
        if (this.e) {
            var b = this.e,
                c = this.Hb[0] ? Ib : k;
            this.Hb = this.e = k;
            this.ua && (Ed[za](this.ua), this.ua = k);
            a || this[La]("ready");
            try {
                b.onreadystatechange = c
            } catch (d) {
                this.z.Yh("Problem encountered resetting onreadystatechange: " + d[ob])
            }
        }
    };
    O.Da = function () {
        return !!this.e
    };
    O.sh = function () {
        return 4 == this.lb()
    };
    O.Be = function () {
        var a = this.nb(),
            b;
        a: switch (a) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                b = j;
                break a;
            default:
                b = l
        }
        return b || 0 === a && !this.qj()
    };
    O.qj = function () {
        var a;
        a = xe(v(this.Kb))[1] || k;
        !a && self[nb] && (a = self[nb].protocol, a = a[$a](0, a[C] - 1));
        a = a ? a[Eb]() : "";
        return Ee[x](a)
    };
    O.lb = function () {
        return this.e ? this.e.readyState : 0
    };
    O.nb = function () {
        try {
            return 2 < this.lb() ? this.e.status : -1
        } catch (a) {
            return this.z.oc("Can not get status: " + a[ob]), -1
        }
    };
    O.rh = function () {
        try {
            return 2 < this.lb() ? this.e.statusText : ""
        } catch (a) {
            return this.z.J("Can not get status: " + a[ob]), ""
        }
    };
    O.$a = function () {
        try {
            return this.e ? this.e.responseText : ""
        } catch (a) {
            return this.z.J("Can not get responseText: " + a[ob]), ""
        }
    };
    O.$ = function (a) {
        return a + " [" + this.ge + " " + this.Kb + " " + this.nb() + "]"
    };
    Lc(function (a) {
        De[D].Gd = a(De[D].Gd)
    });

    function He(a, b) {
        var c;
        a instanceof He ? (this.F = Q(b) ? b : a.F, this.Ke(a.ha), this.Le(a.Zc), this.Fe(a.Ua), this.Ie(a.Zb), this.He(a.fb()), this.Je(a.G.m()), this.Ge(a.Yc)) : a && (c = xe(v(a))) ? (this.F = !! b, this.Ke(c[1] || "", j), this.Le(c[2] || "", j), this.Fe(c[3] || "", j), this.Ie(c[4]), this.He(c[5] || "", j), this.Je(c[6] || "", j), this.Ge(c[7] || "", j)) : (this.F = !! b, this.G = new Ie(k, k, this.F))
    }
    var Je = l;
    O = He[D];
    O.ha = "";
    O.Zc = "";
    O.Ua = "";
    O.Zb = k;
    O.Vf = "";
    O.Yc = "";
    O.dk = l;
    O.F = l;
    oa(O, function () {
        var a = [],
            b = this.ha;
        b && a[w](Ke(b, Le), ":");
        if (b = this.Ua) {
            a[w]("//");
            var c = this.Zc;
            c && a[w](Ke(c, Le), "@");
            a[w](aa(v(b)));
            b = this.Zb;
            b != k && a[w](":", v(b))
        }
        if (b = this.fb()) this.ni() && "/" != b.charAt(0) && a[w]("/"), a[w](Ke(b, "/" == b.charAt(0) ? Me : Ne));
        (b = this.mi()) && a[w]("?", b);
        (b = this.Yc) && a[w]("#", Ke(b, Oe));
        return a[N]("")
    });
    O.m = function () {
        return new He(this)
    };
    O.Ke = function (a, b) {
        this.Fa();
        if (this.ha = b ? a ? fa(a) : "" : a) this.ha = this.ha[y](/:$/, "");
        return this
    };
    O.Le = function (a, b) {
        this.Fa();
        this.Zc = b ? a ? fa(a) : "" : a;
        return this
    };
    O.Fe = function (a, b) {
        this.Fa();
        this.Ua = b ? a ? fa(a) : "" : a;
        return this
    };
    O.ni = function () {
        return !!this.Ua
    };
    O.Ie = function (a) {
        this.Fa();
        a ? (a = Number(a), (isNaN(a) || 0 > a) && f(u("Bad port number " + a)), this.Zb = a) : this.Zb = k;
        return this
    };
    O.fb = function () {
        return this.Vf
    };
    O.He = function (a, b) {
        this.Fa();
        this.Vf = b ? a ? fa(a) : "" : a;
        return this
    };
    O.Je = function (a, b) {
        this.Fa();
        a instanceof Ie ? (this.G = a, this.G.xd(this.F)) : (b || (a = Ke(a, Pe)), this.G = new Ie(a, k, this.F));
        return this
    };
    O.mi = function () {
        return this.G[bb]()
    };
    O.ag = function (a) {
        return this.G.get(a)
    };
    O.Ge = function (a, b) {
        this.Fa();
        this.Yc = b ? a ? fa(a) : "" : a;
        return this
    };
    O.Fa = function () {
        this.dk && f(u("Tried to modify a read-only Uri"))
    };
    O.xd = function (a) {
        this.F = a;
        this.G && this.G.xd(a);
        return this
    };

    function Ke(a, b) {
        return R(a) ? encodeURI(a)[y](b, Qe) : k
    }
    function Qe(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15)[bb](16) + (a & 15)[bb](16)
    }
    var Le = /[#\/\?@]/g,
        Ne = /[\#\?:]/g,
        Me = /[\#\?]/g,
        Pe = /[\#\?@]/g,
        Oe = /#/g;

    function Ie(a, b, c) {
        this.ka = a || k;
        this.F = !! c
    }
    O = Ie[D];
    O.za = function () {
        if (!this.g && (this.g = new de, this.c = 0, this.ka)) for (var a = this.ka[E]("&"), b = 0; b < a[C]; b++) {
            var c = a[b][z]("="),
                d = k,
                e = k;
            0 <= c ? (d = a[b][tb](0, c), e = a[b][tb](c + 1)) : d = a[b];
            d = fa(d[y](/\+/g, " "));
            d = this.Aa(d);
            this.add(d, e ? fa(e[y](/\+/g, " ")) : "")
        }
    };
    O.g = k;
    O.c = k;
    O.add = function (a, b) {
        this.za();
        this.Va();
        a = this.Aa(a);
        var c = this.g.get(a);
        c || this.g.set(a, c = []);
        c[w](b);
        this.c++;
        return this
    };
    O.remove = function (a) {
        this.za();
        a = this.Aa(a);
        return this.g.ra(a) ? (this.Va(), this.c -= this.g.get(a)[C], this.g.remove(a)) : l
    };
    la(O, function () {
        this.Va();
        this.g = k;
        this.c = 0
    });
    O.ra = function (a) {
        this.za();
        a = this.Aa(a);
        return this.g.ra(a)
    };
    O.Ga = function () {
        this.za();
        for (var a = this.g.W(), b = this.g.Ga(), c = [], d = 0; d < b[C]; d++) for (var e = a[d], g = 0; g < e[C]; g++) c[w](b[d]);
        return c
    };
    O.W = function (a) {
        this.za();
        var b = [];
        if (a) this.ra(a) && (b = Fc(b, this.g.get(this.Aa(a))));
        else {
            a = this.g.W();
            for (var c = 0; c < a[C]; c++) b = Fc(b, a[c])
        }
        return b
    };
    O.set = function (a, b) {
        this.za();
        this.Va();
        a = this.Aa(a);
        this.ra(a) && (this.c -= this.g.get(a)[C]);
        this.g.set(a, [b]);
        this.c++;
        return this
    };
    O.get = function (a, b) {
        var c = a ? this.W(a) : [];
        return Je ? 0 < c[C] ? c[0] : b : 0 < c[C] ? v(c[0]) : b
    };
    O.Re = function (a, b) {
        this.remove(a);
        0 < b[C] && (this.Va(), this.g.set(this.Aa(a), Hc(b)), this.c += b[C])
    };
    oa(O, function () {
        if (this.ka) return this.ka;
        if (!this.g) return "";
        for (var a = [], b = this.g.Ga(), c = 0; c < b[C]; c++) for (var d = b[c], e = aa(v(d)), d = this.W(d), g = 0; g < d[C]; g++) {
            var h = e;
            "" !== d[g] && (h += "=" + aa(v(d[g])));
            a[w](h)
        }
        return this.ka = a[N]("&")
    });
    O.Va = function () {
        this.ka = k
    };
    O.m = function () {
        var a = new Ie;
        a.ka = this.ka;
        this.g && (a.g = this.g.m(), a.c = this.c);
        return a
    };
    O.Aa = function (a) {
        a = v(a);
        this.F && (a = a[Eb]());
        return a
    };
    O.xd = function (a) {
        var b = a && !this.F;
        b && (this.za(), this.Va(), ce(this.g, function (a, b) {
            var e = b[Eb]();
            b != e && (this.remove(b), this.Re(e, a))
        }, this));
        this.F = a
    };

    function Re(a, b) {
        this.ei = a || Ib;
        this.G = b || new Ie;
        this.G.ra("client") || this.G.set("client", "webapp")
    }
    Re[D].Ii = function (a, b, c, d) {
        if (d) for (var e = d.Ga(), g = 0, h; h = e[g]; g++) b.Re(h, d.W(h));
        b = b[bb]();
        d = "GET";
        2E3 <= b[C] ? d = "POST" : b[C] && (a += "?" + b, b = "");
        c = S(c || this.ei, this);
        e = new De;
        Fe[w](e);
        c && ud(e, "complete", c);
        ud(e, "ready", Vb(Ge, e));
        e.send(a, d, b, i)
    };
    Re[D].Ac = function (a, b, c, d, e, g) {
        var h = this.G.m();
        h.set("sl", a);
        h.set("tl", b);
        h.set("hl", c);
        h.set("q", d);
        h.set("sc", "1");
        this.Ii("/translate_a/t", h, e, g)
    };

    function Se() {}
    var Te = k,
        Ue = k;
    Se[D].Ac = function (a, b, c, d, e) {
        Wd(a, b, c, d, function (g, h, n) {
            Ve(g, h, n, a, b, c, d, e)
        })
    };

    function Ve(a, b, c, d, e, g, h, n) {
        a ? c || ec(b) ? Ue.Ac(d, e, g, h, function (a) {
            var c = d,
                Z = e,
                H = g,
                $ = h,
                G = b,
                Ob = n;
            0 == a[J].nb() ? Ob && Ob(!ec(G), l, j, G) : (G = {}, a[J].$a() && 0 == a[J].$a()[z]('{"sentences":[') && (G = Gd(a[J].$a(), {
                "class": "trans.common.TranslationService",
                func: "processOnlineServiceWhenLocalResultInvalid_"
            })), Yd(c, Z, H, $, G), Ob && Ob(j, j, l, G))
        }) : n && n(j, l, j, b) : Ue.Ac(d, e, g, h, function (a) {
            var b = n;
            if (b) {
                var c = {};
                a[J].$a() && 0 == a[J].$a()[z]('{"sentences":[') && (c = Gd(a[J].$a(), {
                    "class": "trans.common.TranslationService",
                    func: "processOnlineServiceWhenLocalFailed_"
                }));
                b(a[J].Be(), j, l, c)
            }
            return a = i
        })
    };
    var We, Xe = p.og && p.og.s;

    function Ye(a) {
        if (Xe) try {
            Xe.a && Xe.a(a)
        } catch (b) {} else if (!a) {
            a = We || p.scrollTo;
            var c;
            c = (c = q.getElementById("og_head")) ? c[Cb] : 0;
            a(0, r.max(c, 1))
        }
    };

    function Ze(a, b, c) {
        return r.min(r.max(a, b), c)
    }
    function $e(a, b, c) {
        return r.abs(a - b) <= (c || 1E-6)
    };

    function af(a, b) {
        this.x = Q(a) ? a : 0;
        this.y = Q(b) ? b : 0
    }
    O = af[D];
    O.m = function () {
        return new af(this.x, this.y)
    };
    oa(O, function () {
        return "(" + this.x + ", " + this.y + ")"
    });
    O.floor = function () {
        this.x = r[Ea](this.x);
        this.y = r[Ea](this.y);
        return this
    };
    O.round = function () {
        this.x = r[Ba](this.x);
        this.y = r[Ba](this.y);
        return this
    };
    O.translate = function (a, b) {
        a instanceof af ? (this.x += a.x, this.y += a.y) : (this.x += a, "number" == typeof b && (this.y += b));
        return this
    };

    function bf(a, b) {
        ha(this, a);
        ua(this, b)
    }
    bf[D].m = function () {
        return new bf(this[Aa], this[Ab])
    };
    oa(bf[D], function () {
        return "(" + this[Aa] + " x " + this[Ab] + ")"
    });
    bf[D].floor = function () {
        ha(this, r[Ea](this[Aa]));
        ua(this, r[Ea](this[Ab]));
        return this
    };
    bf[D].round = function () {
        ha(this, r[Ba](this[Aa]));
        ua(this, r[Ba](this[Ab]));
        return this
    };
    var cf, df = !V || V && 9 <= id,
        ef = !Uc && !V || V && V && 9 <= id || Uc && ed("1.9.1");
    V && ed("9");

    function ff(a) {
        a = a[fb];
        return R(a) && a[Na](/\S+/g) || []
    }
    function gf(a, b) {
        for (var c = ff(a), d = Ic(arguments, 1), e = c[C] + d[C], g = c, h = 0; h < d[C]; h++) Dc(g, d[h]) || g[w](d[h]);
        ra(a, c[N](" "));
        return c[C] == e
    }
    function hf(a, b) {
        var c = ff(a),
            d = Ic(arguments, 1),
            e = jf(c, d);
        ra(a, e[N](" "));
        return e[C] == c[C] - d[C]
    }
    function jf(a, b) {
        return Bc(a, function (a) {
            return !Dc(b, a)
        })
    };

    function kf(a, b) {
        var c = b || q,
            d = k;
        if (c[sb] && c[Oa]) c = c[Oa]("." + a);
        else var c = a,
            e = (d = b) || q,
            c = e[sb] && e[Oa] ? e[sb]("." + c) : e[Ma] ? e[Ma](c) : lf(q, "*", c, d),
            c = c[0];
        return (d = c) || k
    }

    function lf(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? b.toUpperCase() : "";
        if (a[sb] && a[Oa] && (b || c)) return c = b + (c ? "." + c : ""), a[sb](c);
        if (c && a[Ma]) {
            a = a[Ma](c);
            if (b) {
                d = {};
                for (var e = 0, g = 0, h; h = a[g]; g++) b == h.nodeName && (d[e++] = h);
                pa(d, e);
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (g = e = 0; h = a[g]; g++) b = h[fb], "function" == typeof b[E] && Dc(b[E](/\s+/), c) && (d[e++] = h);
            pa(d, e);
            return d
        }
        return a
    }

    function mf(a, b) {
        bc(b, function (b, d) {
            "style" == d ? a[I].cssText = b : "class" == d ? ra(a, b) : "for" == d ? a.htmlFor = b : d in nf ? a[Sa](nf[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a[Sa](d, b) : a[d] = b
        })
    }
    var nf = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function of(a, b, c) {
        var d;
        d = arguments;
        var e = d[0],
            g = d[1];
        if (!df && g && (g[Wa] || g[B])) {
            e = ["<", e];
            g[Wa] && e[w](' name="', nc(g[Wa]), '"');
            if (g[B]) {
                e[w](' type="', nc(g[B]), '"');
                var h = {};
                gc(h, g);
                delete h[B];
                g = h
            }
            e[w](">");
            e = e[N]("")
        }
        e = q[Pa](e);
        g && (R(g) ? ra(e, g) : Lb(g) ? gf[M](k, [e][Ha](g)) : mf(e, g));
        2 < d[C] && pf(q, e, d, 2);
        return d = e
    }
    function pf(a, b, c, d) {
        function e(c) {
            c && b[va](R(c) ? a.createTextNode(c) : c)
        }
        for (; d < c[C]; d++) {
            var g = c[d];
            Mb(g) && !(Pb(g) && 0 < g[Da]) ? Ac(qf(g) ? Gc(g) : g, e) : e(g)
        }
    }
    function rf(a, b) {
        a[va](b)
    }

    function sf(a) {
        return a && a[yb] ? a[yb].removeChild(a) : k
    }
    function tf(a) {
        return ef && a.children != i ? a.children : Bc(a.childNodes, function (a) {
            return 1 == a[Da]
        })
    }
    function uf(a, b) {
        if (a.contains && 1 == b[Da]) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b[yb];
        return b == a
    }

    function qf(a) {
        if (a && "number" == typeof a[C]) {
            if (Pb(a)) return "function" == typeof a[Ka] || "string" == typeof a[Ka];
            if (Nb(a)) return "function" == typeof a[Ka]
        }
        return l
    }
    function vf(a) {
        this.Qd = a || P[ib] || q
    }
    O = vf[D];
    O.d = function (a) {
        return R(a) ? this.Qd.getElementById(a) : a
    };
    O.createElement = function (a) {
        return this.Qd[Pa](a)
    };
    O.createTextNode = function (a) {
        return this.Qd.createTextNode(v(a))
    };
    O.appendChild = rf;
    O.Rd = tf;
    O.contains = uf;

    function wf(a, b) {
        var c;
        a: {
            c = b;
            var d = 9 == a[Da] ? a : a.ownerDocument || a[ib];
            if (d[Ua] && d[Ua][pb] && (d = d[Ua][pb](a, k))) {
                c = d[c] || d.getPropertyValue(c) || "";
                break a
            }
            c = ""
        }
        return c || (a.currentStyle ? a.currentStyle[b] : k) || a[I] && a[I][b]
    }
    function xf(a, b) {
        a[I].display = b ? "" : "none"
    };
    V && ed(8);
    var yf = {
        Dk: j
    }, zf = {
        gk: j
    }, Af = {
        gk: j
    }, Bf = {
        Fk: j
    }, Cf = {
        Ck: j
    }, Df = {
        Bk: j
    }, Ef = {
        Ek: j
    }, Ff = {
        Sj: yf,
        Tj: zf,
        Uj: Af,
        Vj: Bf,
        Qj: Cf,
        Rj: Df,
        yk: Ef
    };

    function Gf() {
        f(u("Do not instantiate directly"))
    }
    oa(Gf[D], function () {
        return this[Fa]
    });
    var Hf = {};
    var If = Ff;

    function Jf() {
        Gf[K](this)
    }
    T(Jf, Gf);
    Jf[D].X = If.Sj;

    function Kf() {
        Gf[K](this)
    }
    T(Kf, Gf);
    Kf[D].X = If.Tj;

    function Lf() {
        Gf[K](this)
    }
    T(Lf, Gf);
    Lf[D].X = If.Uj;

    function Mf() {
        Gf[K](this)
    }
    T(Mf, Gf);
    Mf[D].X = If.Vj;

    function Nf() {
        Gf[K](this)
    }
    T(Nf, Gf);
    Nf[D].X = If.Qj;

    function Of() {
        Gf[K](this)
    }
    T(Of, Gf);
    Of[D].X = If.Rj;

    function Pf(a) {
        function b() {}
        qa(b, a[D]);
        return function (a) {
            var d = new b;
            d.content = v(a);
            return d
        }
    }
    Pf(Jf);
    Pf(Kf);
    Pf(Lf);
    Pf(Mf);
    Pf(Nf);
    Pf(Of);

    function Qf(a, b, c, d) {
        a: {
            c = (c = new vf(c)) || cf || (cf = new vf);
            var e = c = c[Pa]("DIV");
            a = a(b || Hf, i, d);
            Pb(a) ? a instanceof Gf && (a.X === yf || a.X === Cf) ? a = xc(a[Fa]) : (wc("Soy template output is unsafe for use as HTML: " + a), a = "zSoyz") : a = v(a);
            e.innerHTML = a;
            if (1 == c.childNodes[C] && (a = c.firstChild, 1 == a[Da])) break a;
            a = c
        }
        return a
    }
    function Rf(a, b) {
        function c() {}
        qa(c, a);
        var d = new c,
            e;
        for (e in b) d[e] = b[e];
        return d
    }
    function W(a) {
        if (a && a.X && a.X === yf) return U(a.constructor === Jf), a[Fa];
        a = v(a);
        return a = a[y](Sf, Tf)
    }

    function X(a) {
        return a && a.X === Ef ? (wc("Tainted SanitizedContentKind.TEXT for |noAutoescape: `%s`", [a[Fa]]), "zSoyz") : v(a)
    }
    var Uf = {
        "\x00": "&#0;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "<": "&lt;",
        ">": "&gt;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        "-": "&#45;",
        "/": "&#47;",
        "=": "&#61;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function Tf(a) {
        return Uf[a]
    }
    var Sf = /[\x00\x22\x26\x27\x3c\x3e]/g;
    var Vf = 0,
        Wf = /^[a-zA-Z0-9_\-]*$/;

    function Xf(a) {
        U(a[Na](Wf), "ControlType.create contains invalid characters" + a);
        return a + "+" + Vf++
    };

    function Yf(a) {
        this.D = [];
        ma(this, a)
    }
    Yf[D].Fd = ve("wireless.events.browser.Dispatcher");
    Yf[D].dispatchEvent = function (a, b, c, d) {
        var e = "*" == b.charAt(0),
            g;
        this[Ta](a, b, c, d) && (g = j);
        var h;
        h = (d || "") + this[Wa] + "->";
        for (var n = -1, t;
        (!g || e) && (t = this.D[++n]);) g = t[La](a, b, c, h) || g;
        !g && !d && this.Fd.oc("Event not handled: " + b + " type: " + (a ? a[B] : "none") + " customArg: " + c);
        return g
    };
    Yf[D].Rd = function () {
        return this.D
    };
    Yf[D].Gb = function (a) {
        this.D[w](a)
    };

    function Zf(a, b) {
        Yf[K](this, b);
        this.Qi = a;
        this.Cd = [];
        this.u = {}
    }
    T(Zf, Yf);
    var $f = new Zf(i, "root");

    function ag(a, b, c) {
        return $f[La](a, b, c)
    }
    Gb("_e", ag, i);
    Zf[D].K = function (a, b, c) {
        U(a, this[Wa] + " - registerHandler: Missing controlType.");
        U(b, this[Wa] + " - registerHandler: Missing handlerFunc. controlType: " + a);
        U(!this.u[a], this[Wa] + " - registerHandler: Handler already defined. controlType: " + a);
        b = this.Cd[w](b, c || this.Qi) - 2;
        this.u[a] = b;
        return this
    };
    Zf[D].handleEvent = function (a, b, c, d) {
        var e = this.u[b];
        if (Q(e)) return this.Si(a, b, c, d), d = this.Cd[e], e = this.Cd[e + 1], d[K](e, a, b, c), j
    };
    Zf[D].Si = function (a, b, c, d) {
        if (this.Fd.Qf(qe) && ")" != b[Ca](-1)) {
            var e = "";
            a && (e = "BrowserType=" + a[B], a.which && (e += " key=" + a.which), a = e, e = " (" + a + ")");
            a = "";
            Q(c) && (a = " customArg: " + c);
            this.Fd.info((d || "") + this[Wa] + " handling event: " + b + a + e)
        }
    };
    var bg = 0;

    function cg(a, b, c, d, e) {
        var g = !! d;
        a[A](b, c, g);
        e && (cg(a, "DOMFocusIn", function (d) {
            d[J] && "TEXTAREA" == d[J].tagName && a[jb](b, c, g)
        }), cg(a, "DOMFocusOut", function (d) {
            d[J] && "TEXTAREA" == d[J].tagName && a[A](b, c, g)
        }))
    }
    function dg(a, b, c, d) {
        var e = q.createEvent("HTMLEvents");
        e.initEvent(b, j, j);
        e.sender = c;
        e.zk = d;
        a[La](e)
    };
    var eg = V ? "-ms-" : Uc ? "-moz-" : Tc ? "-o-" : "-webkit-",
        fg = V ? "ms" : Uc ? "Moz" : Tc ? "O" : "webkit",
        gg = eg + "transform",
        hg = fg + "Transform",
        ig = fg + "Transition";

    function jg(a) {
        a = q[Ua][pb](a, k);
        a = a[hg];
        return "undefined" != typeof WebKitCSSMatrix ? new WebKitCSSMatrix(a) : "undefined" != typeof MSCSSMatrix ? new MSCSSMatrix(a) : "undefined" != typeof CSSMatrix ? new CSSMatrix(a) : {}
    };
    var kg = /iPhone|iPod|iPad/;

    function lg() {
        return -1 != s[lb][z]("Android")
    }
    function mg() {
        return -1 != s[lb][z]("webOS")
    }
    var ng = /Mac OS X.+Silk\//,
        pg = /MSIE 1\d/;

    function qg(a, b, c, d) {
        return a << 21 | b << 14 | c << 7 | d
    }
    var rg = /Android (\d+)\.(\d+)(?:\.(\d+))?/,
        sg = mg;
    "WebKitCSSMatrix" in p && new WebKitCSSMatrix("");
    var tg = pg[x](s[lb]) ? "msTransitionEnd" : "webkitTransitionEnd";

    function ug(a, b, c, d, e, g, h, n) {
        d = d || 0;
        b = "translate3d(" + b + "px," + c + "px," + d + "px)";
        e && (b += " rotate(" + e + "deg)");
        Q(g) && (b += " scale3d(" + g + "," + g + ",1)");
        a[I][hg] = b;
        h && (a[I][hg + "OriginX"] = h + "px");
        n && (a[I][hg + "OriginY"] = n + "px")
    }
    function vg(a, b, c) {
        a[I].left = b + "px";
        a[I].top = c + "px"
    };

    function wg(a) {
        return ga("(?:^| +)" + a + "(?:$| +)")
    }
    function xg(a, b) {
        U(a, "hasClass: node is undefined.");
        return wg(b)[x](a[fb])
    }
    function yg(a, b, c, d) {
        U(a, "toggleClass: node is undefined.");
        var e = wg(c),
            g = d || "",
            h = wg(g);
        b == e[x](a[fb]) && (!d || b != h[x](a[fb])) || (d = a[fb][y](e, " ")[y](h, " "), ra(a, d + " " + (b ? c : g)))
    };
    var zg = kg[x](s[lb]) || lg() || ng[x](s[lb]),
        Ag = p[xb].msPointerEnabled,
        Bg = zg ? "touchstart" : Ag ? "MSPointerDown" : "mousedown",
        Cg = zg ? "touchmove" : Ag ? "MSPointerMove" : "mousemove",
        Dg = zg ? "touchend" : Ag ? "MSPointerUp" : "mouseup",
        Eg = Ag ? "MSPointerCancel" : "touchcancel";

    function Fg(a) {
        return function (b) {
            b.touches = [];
            b.targetTouches = [];
            b.changedTouches = [];
            b[B] != Dg && (b.touches[0] = b, b.targetTouches[0] = b);
            b.changedTouches[0] = b;
            a(b)
        }
    }
    function Gg(a) {
        return a.touches || [a]
    }
    function Hg(a) {
        return Ag ? [a] : a.changedTouches
    }

    function Ig(a) {
        return Ag ? a.pointerId : a.identifier
    };
    var Y, Jg, Kg, Lg = ve("wireless.events.clickbuster");

    function Mg(a) {
        if (!(2500 < Wb() - Jg)) {
            var b = new af(a[Ya], a[Za]);
            if (1 > b.x && 1 > b.y) Lg.oc("Not busting click on label elem at (" + b.x + ", " + b.y + ")");
            else {
                for (var c = 0; c < Y[C]; c += 2) if (25 > r.abs(b.x - Y[c]) && 25 > r.abs(b.y - Y[c + 1])) {
                    Y[Bb](c, c + 2);
                    return
                }
                Lg.oc("busting click at " + b.x + ", " + b.y);
                a[kb]();
                a[Ja]();
                (a = Kg) && a()
            }
        }
    }

    function Ng(a) {
        var b = new af(Gg(a)[0][Ya], Gg(a)[0][Za]);
        Y[w](b.x, b.y);
        p[hb](function () {
            for (var a = b.x, d = b.y, e = 0; e < Y[C]; e += 2) if (Y[e] == a && Y[e + 1] == d) {
                Y[Bb](e, e + 2);
                break
            }
            Kg = i
        }, 2500)
    }
    function Og(a, b, c) {
        Kg = c;
        Y || (q[A]("click", Mg, j), c = Ng, !zg && !Ag && (c = Fg(c)), cg(q, Bg, c, j, j), Y = []);
        Jg = Wb();
        for (c = 0; c < Y[C]; c += 2) if (25 > r.abs(a - Y[c]) && 25 > r.abs(b - Y[c + 1])) {
            Y[Bb](c, c + 2);
            break
        }
    };

    function Pg(a, b) {
        a ? this.N = a : (this.N = q[Pa]("canvas"), ua(this.N, 60), ha(this.N, 60), ua(this.N[I], "20px"), ha(this.N[I], "20px"));
        this.vf = this.N.getContext ? this.N.getContext("2d") : i;
        U(!b || 3 == b[C] && b[bb]()[Na]("[0-9]+,[0-9]+,[0-9]+"), "color of spinner must be specified as an RGB triple, or omitted");
        this.Ri = b ? b + "," : Qg
    }
    var Qg = "46,71,139,",
        Rg = 2 * r.PI,
        Sg = Rg / 12,
        Tg = Sg / 2 - r.asin(0.0625),
        Ug = Sg / 2 - r.asin(0.125 / 0.618 / 2),
        Vg = 0.95 * Sg;
    Pg[D].Cf = 0;
    Pg[D].start = function () {
        !this.Nd && this.vf && (this.Nd = p.setInterval(S(this.Uf, this), 90), this.Uf())
    };
    na(Pg[D], function () {
        p.clearInterval(this.Nd);
        this.Nd = k
    });
    Pg[D].Uf = function () {
        if (this.N[Ga]) {
            var a = this.N[Ab],
                b = a / 2,
                c = r.max(a / 3, a / 2 - 3),
                d = 0.618 * c,
                e = !sg(),
                g = this.vf;
            g.save();
            g.clearRect(0, 0, a, a);
            a = this.Cf + Vg;
            a -= r[Ea](a / Rg) * Rg;
            a + Tg > Rg && (a -= Rg);
            this.Cf = a;
            for (var h = 0; 12 > h; h++) {
                a + Tg > Rg && (a -= Rg);
                g.beginPath();
                if (e || a > Tg) g.arc(b, b, c, a - Tg, a + Tg, l), g.arc(b, b, d, a + Ug, a - Ug, j);
                else {
                    var n = a - Tg;
                    g.moveTo(b + c * r.cos(n), b + c * r.sin(n));
                    n = a + Tg;
                    g.lineTo(b + c * r.cos(n), b + c * r.sin(n));
                    n = a + Ug;
                    g.lineTo(b + d * r.cos(n), b + d * r.sin(n));
                    n = a - Ug;
                    g.lineTo(b + d * r.cos(n), b + d * r.sin(n))
                }
                g.closePath();
                n = h / 11;
                g.fillStyle = "rgba(" + this.Ri + (0.15 + 0.8 * r.pow(n, 3)) + ")";
                g.fill();
                a += Sg
            }
            g.restore()
        }
    };

    function Wg(a, b, c, d) {
        var e;
        if (e = lg()) if (e = !(lg() && -1 != s[lb][z]("Chrome/"))) e = rg[ya](s[lb]) || [], e[wa](), e = qg[M](k, e), e = 8388992 <= e;
        this.Xb = e || c;
        c = a;
        U(!Q(c.wh), "Attempted to decorate the same element twice. This element has already been decorated by a call to decorate(), decorateAll() or a constructor for some class in wireless.ui. Decorating elements more than once may lead to unexpected behaviour when handling events.\nElement innerHTML: " + c.innerHTML);
        c.wh = 1;
        this.b = c;
        this.gc = a.firstChild;
        this.onclick = b || a[wb];
        this.re = d;
        b = S(this.vh, this);
        zg || (b = Fg(b));
        a[A](Bg, b, l);
        a.onclick = S(this.oe, this)
    }

    function Xg(a) {
        var b;
        b = "CSS_WUI_BUTTON";
        U(b, "getElementsByClassName: searchClass is missing.");
        U(a, "getElementsByClassName: node is missing. searchClass=" + b);
        if (a[Ma]) {
            a = a[Ma](b);
            U(a, "Browser's getElementsByClassName() returned null.");
            for (var c = 0, d = a[C]; c < d; c++) U(a[c], "getElementsByClassName: Element " + c + " is missing! searchClass=" + b);
            b = a
        } else b = lf(q, "*", b, a);
        a = [];
        for (var e, g, h, c = 0; d = b[c]; ++c) {
            var n = xg(d, "CSS_WUI_BUTTON_USE_ONCLICK_MARKER");
            !e && xg(d, "CSS_WUI_BUTTON_PILL_LEFT_MARKER") && (e = new Yg);
            !g && xg(d, "CSS_WUI_TAB_MARKER") && (g = new Yg, h = d[yb]);
            if (g && (h != d[yb] || !xg(d, "CSS_WUI_TAB_MARKER"))) g = k;
            e || g || xg(d, "CSS_WUI_BUTTON_STICKY") ? (n = new Zg(d, i, n), e && e.ig(n), g && g.ig(n)) : n = new Wg(d, i, n);
            e && xg(d, "CSS_WUI_BUTTON_PILL_RIGHT_MARKER") && (e = k);
            a[w](n)
        }
        return a
    }
    Wg[D].uh = function () {
        return !!this.Xa
    };
    Wg[D].zb = function (a) {
        if (a != this.uh()) {
            if (a) {
                var b = q[Ua][pb](this.b, k);
                ha(this.b[I], this.b[Ga] - b.borderLeftWidth[E]("px")[0] - b.borderRightWidth[E]("px")[0] + "px");
                this.Xa = new Pg(i, $g());
                b = this.Xa.N;
                ra(b, "CSS_WUI_BUTTON_INNER");
                this.b[va](b);
                this.Xa.start()
            } else this.Xa[ab](), this.b.removeChild(this.Xa.N), this.Xa = i, ha(this.b[I], "");
            xf(this.ue(), !a)
        }
    };
    var $g = Ib;
    O = Wg[D];
    O.d = function () {
        return this.b
    };
    O.ue = function () {
        U(this.gc, "Inner div not found.");
        return this.gc
    };
    O.isEnabled = function () {
        return !xg(this.b, "CSS_WUI_DISABLED")
    };
    O.sb = function (a) {
        xf(this.b, a)
    };
    O.Bg = function (a, b) {
        b && (U(a, "A focus callback can only be used when click events are being used."), U(!this.re, "Automatic ghost click prevention must not be disabled when a focus callback is provided."));
        this.Xb = a;
        this.Xc = b
    };
    O.Ci = function (a) {
        a[B] == Dg && (this.Xc || a[Ja](), ve("button").info("prevent ghost click"), Og(this.se, this.te, this.Xc))
    };
    O.vh = function (a) {
        if (!(1 < Gg(a)[C]) && this.isEnabled() && !a.Wc) {
            this.Sb = a.Wc = j;
            if (!this.eh) {
                var b = !this.Xb || this.Xc,
                    c = S(b ? this.oe : this.ve, this),
                    b = S(b ? this.hh : this.ve, this);
                zg || (c = Fg(c), b = Fg(b));
                this.b[A](Dg, c, l);
                this.b[A](Eg, b, l);
                c = S(this.gh, this);
                zg || (c = Fg(c));
                this.b[A](Cg, c, l);
                this.eh = j
            }
            this.fh();
            this.Ub(j);
            a = new af(Gg(a)[0][Ya], Gg(a)[0][Za]);
            this.se = a.x;
            this.te = a.y
        }
    };
    O.oe = function (a) {
        U(a, "Event must be provided.");
        if (this.isEnabled() && (this.re || this.Ci(a), (a[B] != Dg || this.Sb) && !a.Wc)) {
            a.Wc = j;
            this.Ub(j);
            p[hb](this.Bi(), 0);
            this.qb(j);
            if (this.zi(a)) {
                var b = q[Oa]("*:focus");
                b && b.blur()
            }
            this.Ai(a)
        }
    };
    O.Ai = function (a) {
        if (this[wb]) this[wb](a)
    };
    O.zi = function (a) {
        a = a[Qa];
        return 13 != a && 32 != a
    };
    O.gh = function (a) {
        this.Sb && (1 < Gg(a)[C] || this.Xb ? this.qb() : (a = Gg(a)[0], (!$e(a[Ya], this.se, 12) || !$e(a[Za], this.te, 12)) && this.qb()))
    };
    O.ve = function () {
        this.Wf || (this.Wf = S(this.qb, this, l));
        p[hb](this.Wf, 400)
    };
    O.hh = function () {
        this.qb(l)
    };
    O.qb = function (a) {
        p[za](this.Yi);
        a || this.Ub(l);
        this.Sb = l
    };
    O.Ub = function (a) {
        yg(this.b, a, "CSS_WUI_PRESSED");
        this.gc && yg(this.gc, a, "CSS_WUI_PRESSED")
    };
    O.Bi = function () {
        this.Yf || (this.Yf = S(this.Ub, this, l));
        return this.Yf
    };
    O.fh = function () {
        this.dj && (this.Yi = p[hb](S(function () {
            this.Sb = l;
            this.dj()
        }, this), this.cj()))
    };
    O.cj = function () {
        return this.Xb ? 800 : 500
    };

    function Zg(a, b, c) {
        Wg[K](this, a, S(this.bk, this, b || a[wb]), c)
    }
    T(Zg, Wg);
    Zg[D].setActive = function (a) {
        a && this.ad && this.ad.kh(this);
        yg(this.b, a, "CSS_WUI_ACTIVE");
        yg(this.ue(), a, "CSS_WUI_ACTIVE");
        this.d()[Sa]("aria-pressed", a)
    };
    Zg[D].Da = function () {
        return xg(this.b, "CSS_WUI_ACTIVE")
    };
    Zg[D].Hj = function (a) {
        this.ad = a
    };
    Zg[D].bk = function (a, b) {
        var c = this.Da();
        this.ad ? this[Xa](j) : this[Xa](!c);
        a && a(b)
    };

    function Yg() {
        this.eg = []
    }
    Yg[D].ig = function (a) {
        this.eg[w](a);
        a.Hj(this)
    };
    Yg[D].kh = function (a) {
        for (var b = 0, c; c = this.eg[b]; ++b) c != a && c[Xa](l)
    };
    var ah = {
        ascii_tlds: "AC AD AE AERO AF AG AI AL AM AN AO AQ AR ARPA AS ASIA AT AU AW AX AZ BA BB BD BE BF BG BH BI BIZ BJ BM BN BO BR BS BT BV BW BY BZ CA CAT CC CD CF CG CH CI CK CL CM CN CO COM COOP CR CU CV CX CY CZ DE DJ DK DM DO DZ EC EDU EE EG ER ES ET EU FI FJ FK FM FO FR GA GB GD GE GF GG GH GI GL GM GN GOV GP GQ GR GS GT GU GW GY HK HM HN HR HT HU ID IE IL IM IN INFO INT IO IQ IR IS IT JE JM JO JOBS JP KE KG KH KI KM KN KP KR KW KY KZ LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MG MH MIL MK ML MM MN MO MOBI MP MQ MR MS MT MU MUSEUM MV MW MX MY MZ NA NAME NC NE NET NF NG NI NL NO NP NR NU NZ OM ORG PA PE PF PG PH PK PL PM PN PR PRO PS PT PW PY QA RE RO RS RU RW SA SB SC SD SE SG SH SI SJ SK SL SM SN SO SR ST SU SV SY SZ TC TD TEL TF TG TH TJ TK TL TM TN TO TP TR TRAVEL TT TV TW TZ UA UG UK US UY UZ VA VC VE VG VI VN VU WF WS XN--0ZWM56D XN--11B5BS3A9AJ6G XN--80AKHBYKNJ4F XN--9T4B11YI5A XN--DEBA0AD XN--FIQS8S XN--FIQZ9S XN--FZC2C9E2C XN--G6W251D XN--HGBK6AJ7F53BBA XN--HLCJ6AYA9ESC7A XN--J6W193G XN--JXALPDLP XN--KGBECHTV XN--KPRW13D XN--KPRY57D XN--MGBAAM7A8H XN--MGBAYH7GPA XN--MGBERP4A5D4AR XN--O3CW4H XN--P1AI XN--PGBS0DH XN--WGBH1C XN--XKC2AL3HYE2A XN--YGBI2AMMX XN--ZCKZAH YE YT ZA ZM ZW".split(" "),
        unicode_tlds: "\u6d4b\u8bd5 \u092a\u0930\u0940\u0915\u094d\u0937\u093e \u0438\u0441\u043f\u044b\u0442\u0430\u043d\u0438\u0435 \ud14c\uc2a4\ud2b8 \u05d8\u05e2\u05e1\u05d8 \u4e2d\u56fd \u4e2d\u570b \u0dbd\u0d82\u0d9a\u0dcf \u6e2c\u8a66 \u0622\u0632\u0645\u0627\u06cc\u0634\u06cc \u0baa\u0bb0\u0bbf\u0b9f\u0bcd\u0b9a\u0bc8 \u9999\u6e2f \u03b4\u03bf\u03ba\u03b9\u03bc\u03ae \u0625\u062e\u062a\u0628\u0627\u0631 \u53f0\u6e7e \u53f0\u7063 \u0627\u0645\u0627\u0631\u0627\u062a \u0627\u0644\u0627\u0631\u062f\u0646 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629 \u0e44\u0e17\u0e22 \u0440\u0444 \u062a\u0648\u0646\u0633 \u0645\u0635\u0631 \u0b87\u0bb2\u0b99\u0bcd\u0b95\u0bc8 \u0641\u0644\u0633\u0637\u064a\u0646 \u30c6\u30b9\u30c8".split(" ")
    };

    function bh() {}
    var ch, dh = {
        http: 1,
        https: 1,
        ftp: 1
    };
    bh[D].ck = function () {
        var a;
        try {
            a = ah
        } catch (b) {
            f(u("Variable CFG_twsfe_likelyurl_module_file has not been loaded. This is probaly due the configuration data not being properly included."))
        }
        for (var c = {}, d = a.ascii_tlds, e = 0; e < d[C]; e++) {
            var g = d[e];
            c[g[Eb]()] = 1
        }
        a = a.unicode_tlds;
        for (e = 0; e < a[C]; e++) g = a[e], c[g[Eb]()] = 1;
        return c
    };
    bh[D].ek = function (a) {
        ch || (ch = this.ck());
        return !!ch[a]
    };
    bh[D].Mj = function (a, b) {
        for (var c = a[E]("."), d = 0; d < c[C]; d++) if (!c[d]) return l;
        return 1 < c[C] ? (c = c[c[C] - 1], this.ek(c[Eb]())) : !b
    };
    var eh = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
    bh[D].Nj = function (a) {
        if (a = a[Na](eh)) {
            for (var b = 1; 4 >= b; b++) {
                var c = ea(a[b], 10);
                if (255 < c) return l
            }
            return j
        }
        return l
    };
    bh[D].Ei = function (a, b) {
        return this.Mj(a, b) || this.Nj(a)
    };
    bh[D].lg = function (a, b) {
        var c;
        try {
            c = a instanceof He ? a.m() : new He(a, i)
        } catch (d) {
            return l
        }
        return c.ha && !dh[c.ha[Eb]()] || !c.Ua || !this.Ei(c.Ua, b) ? l : j
    };
    bh[D].Wh = function (a) {
        a = mc(a);
        return 0 <= a.search(/[\s\xa0]/) ? l : this.lg(a, l) ? j : this.lg("http://" + a, j)
    };
    var fh = Fd.ba();

    function gh(a, b, c, d, e) {
        var g = {};
        g.id = b;
        g.sl = c;
        g.tl = d;
        g.query = e[tb](0, 64);
        g.len = e[C];
        g.client = "webapp";
        fh.log(a, g)
    }
    function hh(a, b) {
        if (b && a) for (var c = 0; c < a[C]; ++c) if (a.options[c][Ia] == b) {
            a.selectedIndex = c;
            break
        }
    };

    function ih(a) {
        a = a || {};
        a = (a = Rf(a, {
            lc: "CSS_WUI_BUTTON_LABEL" + (a.lc ? " " + W(a.lc) : ""),
            ma: a.ma ? W(a.ma) : "CSS_WUI_IMG_BUTTON"
        })) || {};
        a = (a = Rf(a, {
            V: "CSS_WUI_BUTTON_IMPL CSS_WUI_NO_TAP_HIGHLIGHT " + (a.V ? " " + W(a.V) : "")
        })) || {};
        var b;
        b = (b = a) || {};
        b = "<div " + (b.Ch ? 'id="' + W(b.Ch) + '" ' : "") + ' class="CSS_WUI_BUTTON CSS_WUI_ENABLED ' + (b.V ? " " + X(b.V) : "") + (b.ma ? " " + X(b.ma) : "") + (b.dc ? " CSS_WUI_BUTTON_STICKY" : "") + (b.Da ? " CSS_WUI_ACTIVE" : "") + (b.nk ? " CSS_WUI_BUTTON_USE_ONCLICK_MARKER" : "") + (b.kk ? " CSS_WUI_INLINE_BLOCK" : "") + '"' + (b.lk ? ' style="display:none" ' : "") + (b.T ? "onclick=\"_e(event, '" + b.T + "'" + (Q(b.ec) ? ", " + X(b.ec) : "") + ')"' : "") + (b.Ah ? 'role="' + W(b.Ah) + '"' : 'role="button"') + (b.yh ? 'aria-label="' + W(b.yh) + '"' : "") + (b.dc && b.Da ? 'aria-pressed="true"' : b.dc ? 'aria-pressed="false"' : "") + (b.Dh ? X(b.Dh) : "") + 'tabindex="0" >';
        return a = b + (a.wa ? '<div class="CSS_WUI_BUTTON_INNER CSS_WUI_ENABLED ' + X(a.wa) + (a.Da ? " CSS_WUI_ACTIVE" : "") + '"></div>' : "") + (a.Yb ? '<div class="CSS_WUI_BUTTON_INNER CSS_WUI_ENABLED ' + (a.lc ? W(a.lc) : "") + (a.maxWidth ? " CSS_WUI_ELLIPSIS" :
            "") + (a.Da ? " CSS_WUI_ACTIVE" : "") + '"' + (a.maxWidth ? ' style="max-width:' + W(a.maxWidth) + '"' : "") + ">" + X(a.Yb) + "</div>" : "") + (a.Bh ? X(a.Bh) : "") + "</div>"
    }
    function jh(a) {
        return ih(Rf(a, {
            ma: "CSS_WUI_NO_BORDER_IMAGE"
        }))
    }
    function kh(a) {
        return ih(Rf(a, {
            dc: !a.Ce,
            V: W(a.Ee) + (a.V ? " " + W(a.V) : ""),
            ma: a.ma ? W(a.ma) : W(a.De)
        }))
    };

    function lh(a) {
        return '<div class="inline">' + ih({
            Yb: a.text,
            T: mh,
            ec: a.id
        }) + "</div>"
    }
    function nh(a) {
        return '<div class="hint">' + W(a[ob]) + "</div>"
    }

    function oh(a) {
        return '<div class="gp-footer">' + (a.ug ? '<a class="ft-bigger" href="javascript:void(0);" onclick="_e(event, \'' + a.wg + "')\">" + W(a.history) + '</a>&nbsp;-&nbsp;<a class="ft-bigger" href="javascript:void(0);" onclick="_e(event, \'' + a.xg + "')\">" + W(a.Ec) + "</a>" : "") + (a.tg ? "<br/><br/>" + X(a.sg) + '&nbsp;-&nbsp;<a href="/?vi=c&hl=en">' + W(a.rg) + '</a>&nbsp;-&nbsp;<a href="http://www.google.com/m/help">' + W(a.vg) + "</a>" : "") + "</div>"
    }

    function ph(a) {
        return '<div class="inline starbutton">' + jh({
            wa: "CSS_IMG_ICON_STAR",
            T: qh,
            ec: a.id,
            dc: j
        }) + "</div>"
    }

    function rh(a) {
        for (var b = '<div class="main-header"><div class="inline lang_list"><div class="margin_right"><select class="ls-select sl">', c = a.Tg, d = c[C], e = 0; e < d; e++) var g = c[e],
            b = b + ('<option value="' + W(g.Code) + '"' + (g.Code == a.Rg ? ' selected="selected"' : "") + ">" + W(g.Name) + "</option>");
        b += "</select></div></div>" + ('<div class="swap-wrap inline">' + ih({
            V: "swap",
            wa: "CSS_IMG_SWAP_LANGUAGE",
            T: sh
        }) + "</div>") + '<div class="inline lang_list"><div class="margin_left"><select class="ls-select tl">';
        c = a.Ug;
        d = c[C];
        for (e = 0; e < d; e++) g = c[e], b += '<option value="' + W(g.Code) + '"' + (g.Code == a.Sg ? ' selected="selected"' : "") + ">" + W(g.Name) + "</option>";
        return b += '</select></div></div></div><div class="secondary-header">' + ('<div id="input-wrap"><textarea class="orig" rows="2" maxlength="200" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off"></textarea><div tabindex="0" class="clear-wrap">' + jh({
            V: "clear",
            wa: "CSS_WUI_IMG_ICON_STOP",
            T: th
        }) + "</div></div>") + ('<div class="go-wrap">' + ih({
            V: "go",
            wa: "CSS_WUI_IMG_ICON_SEARCH",
            T: uh
        }) + "</div>") + "</div>"
    }

    function vh(a) {
        var b = ih({
            wa: "CSS_WUI_IMG_ICON_PREV",
            T: wh
        }),
            c;
        c = c = {
            Yb: a.history,
            T: xh
        };
        c = kh(Rf(c, {
            Ee: "CSS_WUI_BUTTON_PILL_LEFT " + (!c.jd ? "CSS_WUI_BUTTON_PILL_LEFT_MARKER" : ""),
            De: "CSS_WUI_IMG_PILL_LEFT",
            Ce: c.jd
        }));
        b += c;
        a = a = {
            Yb: a.Ec,
            T: yh
        };
        a = kh(Rf(a, {
            Ee: "CSS_WUI_BUTTON_PILL_RIGHT" + (!a.jd ? " CSS_WUI_BUTTON_PILL_RIGHT_MARKER" : ""),
            De: "CSS_WUI_IMG_PILL_RIGHT",
            Ce: a.jd
        }));
        a = a = {
            Pe: b + a
        };
        return a = '<div class="CSS_WUI_TOOLBAR ' + (a.Mh ? X(a.Mh) : "") + " " + (a.Eh ? X(a.Eh) : "CSS_WUI_IMG_BG CSS_WUI_TOOLBAR_BACKGROUND") + '" ' + (a.Nh ? 'id="' + W(a.Nh) + '"' : "") + ' style="' + (a.Oh ? X(a.Oh) : "width: 100%;") + '">' + (1 == a.Qe ? '<div class="' + (a.kd ? X(a.kd) : "CSS_WUI_TOOLBAR_SHADOW_UP") + '"></div>' : "") + '<div class="CSS_WUI_TOOLBAR_LEFT">' + (a.Pe ? X(a.Pe) : "") + '</div><div class="CSS_WUI_TOOLBAR_MIDDLE' + (a.Fh ? " " + X(a.Fh) : "") + '">' + (a.Gh ? X(a.Gh) : "") + '</div><div class="CSS_WUI_TOOLBAR_RIGHT">' + (a.Lh ? X(a.Lh) : "") + "</div>" + (2 == a.Qe || !a.Qe ? '<div class="' + (a.kd ? X(a.kd) : "CSS_WUI_TOOLBAR_SHADOW") + '"></div>' : "") + (a.Hh ? X(a.Hh) : "") + "</div>"
    }

    function zh(a) {
        return a.display ? '<div class="inline ttsbutton">' + jh({
            wa: "CSS_IMG_TTS_BUTTON",
            T: Ah,
            ec: a.We
        }) + "</div>" : ""
    }

    function Bh(a) {
        var b = '<div><div class="text-wrap">' + (a.$d ? '<span class="transliteration">' + W(a.$d) + "</span>" : "") + zh({
            We: "'s'",
            display: a.Gg
        }) + (a.Oa.spell ? '<div class="spellcorr">' + W(a.Ig) + '<a href="javascript:void(0);" onclick="_e(event, \'' + a.Eg + "', ['main', '" + X(a.Oa.spell.spell_res) + "'])\">" + X(a.Oa.spell.spell_html_res) + "</a></div>" : "") + '</div><div class="section-header">' + W(a.Jg) + "</div>" + ph({
            id: "'main'"
        }) + '<div class="text-wrap"><div class="translation">' + W(a.Jc) + "</div>" + (a.ae ? '<span class="transliteration">' + W(a.ae) + "</span>" : "") + zh({
            We: "'t'",
            display: a.Hg
        }) + "</div>";
        if (a.Oa.dict && 0 < a.Oa.dict[C]) {
            b += '<div class="section-header">' + W(a.Fg) + '</div><div class="text-wrap">';
            a = a.Oa.dict;
            for (var c = a[C], d = 0; d < c; d++) {
                for (var e = a[d], b = b + ('<div class="pos">' + W(e.pos)), e = e.terms, g = e[C], h = 0; h < g; h++) var n = e[h],
                    b = b + ('<div class="term">' + W(n) + "</div>");
                b += "</div>"
            }
            b += "</div>"
        }
        return b += "</div>"
    }

    function Ch(a) {
        return '<div class="item_wrapper">' + ph(a) + '<div class="translate_item" onclick="_e(event, \'' + W(a.nh) + "', '" + W(a.id) + '\')"><div><a class="translation">' + W(a.Jc) + '</a></div><div class="translated">' + W(a.oh) + "</div></div></div>"
    };
    var th = Xf("clear"),
        sh = Xf("swap"),
        uh = Xf("translate");

    function Dh(a, b, c, d, e) {
        this.Zg = a;
        this.$g = d;
        this.Dc = e;
        this.b = Qf(rh, {
            Tg: cc(m.SourceLanguageCodeNameList),
            Ug: cc(m.TargetLanguageCodeNameList),
            Rg: b,
            Sg: c
        });
        this.bh = new bh;
        this.t = kf("sl", this.b);
        this.o = kf("tl", this.b);
        this.ne = kf("clear-wrap", this.b);
        if (this.M = kf("orig", this.b)) ud(this.M, "keyup", this.Tb, l, this), this.Tb();
        a = kf("swap-wrap", this.b);
        b = kf("go-wrap", this.b);
        a && Xg(a);
        b && Xg(b);
        this.Fc()
    }
    O = Dh[D];
    O.d = function () {
        return this.b
    };
    O.Fc = function () {
        this.u || (this.u = new Zf(this, "Input"), this.u.K(th, this.clear), this.u.K(sh, this.wi), this.u.K(uh, this.Ze), $f.Gb(this.u))
    };
    la(O, function () {
        this.M && (ia(this.M, ""), this.M.focus(), this.Tb())
    });
    O.Ze = function () {
        var a = this.M[Ia];
        if (/^[\s\xa0]*$/ [x](a == k ? "" : v(a))) this.Dc();
        else {
            var b = this.t[Ia],
                c = this.o[Ia];
            if (this.bh.Wh(a)) {
                var d = p[nb].href,
                    d = d[y]("/m/translate", "/translate"),
                    b = b ? b : "auto",
                    d = d + ("?sl=" + b + "&tl=" + c + "&u=" + escape(a));
                p.open(d, "webtrans")
            } else this.M.blur(), this.$g(b, c, this.Zg, a)
        }
    };
    O.wi = function () {
        var a = this.o[Ia],
            b = this.t[Ia];
        "auto" != b && ("zh" == a[tb](2, 0) && (a = "zh-CN"), hh(this.t, a), hh(this.o, b))
    };
    O.Tb = function () {
        this.ne && this.M && xf(this.ne, this.M[Ia] ? j : l)
    };
    O.Pi = function (a) {
        this.M && (ia(this.M, a), this.Tb())
    };
    O.Dd = function (a) {
        this.t && ia(this.t, a)
    };
    O.Ed = function (a) {
        this.o && ia(this.o, a)
    };

    function Eh() {}
    Jb(Eh);
    Eh[D].fk = 0;
    Eh[D].Ti = function () {
        return ":" + (this.fk++)[bb](36)
    };
    Eh.ba();

    function Fh(a) {
        a || cf || (cf = new vf)
    }
    T(Fh, Dd);
    O = Fh[D];
    O.Ui = Eh.ba();

    function Gh(a, b) {
        switch (a) {
            case 1:
                return b ? "disable" : "enable";
            case 2:
                return b ? "highlight" : "unhighlight";
            case 4:
                return b ? "activate" : "deactivate";
            case 8:
                return b ? "select" : "unselect";
            case 16:
                return b ? "check" : "uncheck";
            case 32:
                return b ? "focus" : "blur";
            case 64:
                return b ? "open" : "close"
        }
        f(u("Invalid component state"))
    }
    O.r = k;
    O.Jb = l;
    O.b = k;
    O.C = k;
    O.D = k;
    O.ib = k;
    O.Yg = l;
    O.lh = function () {
        return this.r || (this.r = this.Ui.Ti())
    };
    O.d = function () {
        return this.b
    };
    O.mh = function (a) {
        this == a && f(u("Unable to set parent component"));
        a && (this.C && this.r && this.C.me(this.r) && this.C != a) && f(u("Unable to set parent component"));
        this.C = a;
        Fh.n.td[K](this, a)
    };
    O.getParent = function () {
        return this.C
    };
    O.td = function (a) {
        this.C && this.C != a && f(u("Method not supported"));
        Fh.n.td[K](this, a)
    };
    O.gb = function () {
        this.ke(function (a) {
            a.Jb && a.gb()
        });
        this.Qb && this.Qb.uk();
        this.Jb = l
    };
    O.i = function () {
        this.Jb && this.gb();
        this.Qb && (this.Qb.hb(), delete this.Qb);
        this.ke(function (a) {
            a.hb()
        });
        !this.Yg && this.b && sf(this.b);
        this.C = this.b = this.ib = this.D = k;
        Fh.n.i[K](this)
    };
    O.me = function (a) {
        return this.ib && a ? (a in this.ib ? this.ib[a] : i) || k : k
    };
    O.ke = function (a, b) {
        this.D && Ac(this.D, a, b)
    };
    O.removeChild = function (a, b) {
        if (a) {
            var c = R(a) ? a : a.lh();
            a = this.me(c);
            if (c && a) {
                var d = this.ib;
                c in d && delete d[c];
                Ec(this.D, a);
                b && (a.gb(), a.b && sf(a.b));
                a.mh(k)
            }
        }
        a || f(u("Child is not in parent component"));
        return a
    };

    function Hh() {}
    var Ih;
    Jb(Hh);
    O = Hh[D];
    O.yd = function (a, b, c) {
        if (a = a.d ? a.d() : a) if (V && !ed("7")) {
            var d = this.Li(ff(a), b);
            d[w](b);
            c = c ? gf : hf;
            Vb(c, a)[M](k, d)
        } else c ? gf(a, b) : hf(a, b)
    };
    O.Bf = function (a, b, c) {
        this.yd(a, b, c)
    };
    O.of = function (a, b) {
        var c;
        if (a.tc(32) && (c = a.Id())) {
            if (!b && a.Lf()) {
                try {
                    c.blur()
                } catch (d) {}
                a.Lf() && a.aj(k)
            }
            var e;
            (e = c.getAttributeNode("tabindex")) && e.specified ? (e = c.tabIndex, e = "number" == typeof e && 0 <= e && 32768 > e) : e = l;
            e != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
        }
    };
    O.S = function (a, b, c) {
        var d = a.d();
        if (d) {
            var e = this.ui(b);
            e && this.yd(a, e, c);
            this.vc(d, b, c)
        }
    };
    O.vc = function (a, b, c) {
        Ih || (Ih = {
            1: "disabled",
            8: "selected",
            16: "checked",
            64: "expanded"
        });
        if (b = Ih[b]) U(a, "The element passed as a first parameter cannot be null."), a[Sa]("aria-" + b, c)
    };
    O.Id = function (a) {
        return a.d()
    };
    O.Sd = function () {
        return "goog-control"
    };
    O.Ej = function () {
        return this.Sd()
    };
    O.Li = function (a, b) {
        var c = [];
        b && (a = a[Ha]([b]));
        Ac([], function (d) {
            Cc(d, Vb(Dc, a)) && (!b || Dc(d, b)) && c[w](d[N]("_"))
        });
        return c
    };
    O.ui = function (a) {
        this.Zf || this.Cj();
        return this.Zf[a]
    };
    O.Cj = function () {
        var a = this.Ej();
        this.Zf = {
            1: a + "-disabled",
            2: a + "-hover",
            4: a + "-active",
            8: a + "-selected",
            16: a + "-checked",
            32: a + "-focused",
            64: a + "-open"
        }
    };

    function Jh() {}
    T(Jh, Hh);
    Jb(Jh);
    Jh[D].vc = function (a, b, c) {
        if (16 == b) U(a, "The button DOM element cannot be null."), a[Sa]("aria-pressed", c);
        else Jh.n.vc[K](this, a, b, c)
    };
    Jh[D].Sd = function () {
        return "goog-button"
    };
    V || Vc && ed("525");

    function Kh(a, b) {
        a || f(u("Invalid class name " + a));
        Nb(b) || f(u("Invalid decorator function " + b))
    }
    var Lh = {};

    function Mh(a, b, c) {
        Fh[K](this, c);
        if (!(a = b)) {
            a = this.constructor;
            for (var d; a;) {
                d = Qb(a);
                if (d = Lh[d]) break;
                a = a.n ? a.n.constructor : k
            }
            a = d ? Nb(d.ba) ? d.ba() : new d : k
        }
        this.Ta = a
    }
    T(Mh, Fh);
    O = Mh[D];
    O.Sa = 0;
    O.zc = 39;
    O.sj = 255;
    O.Vi = 0;
    O.si = j;
    O.aa = k;
    O.Id = function () {
        return this.Ta.Id(this)
    };
    O.Jj = function (a) {
        a && (this.aa ? Dc(this.aa, a) || this.aa[w](a) : this.aa = [a], this.Ta.Bf(this, a, j))
    };
    O.Oj = function (a) {
        a && this.aa && (Ec(this.aa, a), 0 == this.aa[C] && (this.aa = k), this.Ta.Bf(this, a, l))
    };
    O.yd = function (a, b) {
        b ? this.Jj(a) : this.Oj(a)
    };
    O.gb = function () {
        Mh.n.gb[K](this);
        this.mc && this.mc.detach();
        this.si && this.isEnabled() && this.Ta.of(this, l)
    };
    O.i = function () {
        Mh.n.i[K](this);
        this.mc && (this.mc.hb(), delete this.mc);
        delete this.Ta;
        this.aa = k
    };
    O.isEnabled = function () {
        return !this.Ha(1)
    };
    O.Da = function () {
        return this.Ha(4)
    };
    O.setActive = function (a) {
        this.Nf(4, a) && this.S(4, a)
    };
    O.Lf = function () {
        return this.Ha(32)
    };
    O.Gj = function (a) {
        this.Nf(32, a) && this.S(32, a)
    };
    O.Ha = function (a) {
        return !!(this.Sa & a)
    };
    O.S = function (a, b) {
        this.tc(a) && b != this.Ha(a) && (this.Ta.S(this, a, b), this.Sa = b ? this.Sa | a : this.Sa & ~a)
    };
    O.tc = function (a) {
        return !!(this.zc & a)
    };
    O.hj = function (a, b) {
        this.Jb && (this.Ha(a) && !b) && f(u("Component already rendered"));
        !b && this.Ha(a) && this.S(a, l);
        this.zc = b ? this.zc | a : this.zc & ~a
    };
    O.gg = function (a) {
        return !!(this.sj & a) && this.tc(a)
    };
    O.Nf = function (a, b) {
        return this.tc(a) && this.Ha(a) != b && (!(this.Vi & a) || this[La](Gh(a, b))) && !this.Ad
    };
    O.aj = function () {
        this.gg(4) && this[Xa](l);
        this.gg(32) && this.Gj(l)
    };
    var Nh = Mh,
        Oh = Hh;
    Nb(Nh) || f(u("Invalid component class " + Nh));
    Nb(Oh) || f(u("Invalid renderer class " + Oh));
    var Ph = Qb(Nh);
    Lh[Ph] = Oh;
    Kh("goog-control", function () {
        return new Mh(k)
    });

    function Qh() {}
    T(Qh, Jh);
    Jb(Qh);
    Qh[D].of = Ib;
    Qh[D].S = function (a, b, c) {
        Qh.n.S[K](this, a, b, c);
        if ((a = a.d()) && 1 == b) a.disabled = c
    };
    Qh[D].vc = Ib;

    function Rh(a, b, c) {
        Mh[K](this, a, b || Qh.ba(), c)
    }
    T(Rh, Mh);
    Rh[D].i = function () {
        Rh.n.i[K](this);
        delete this.pk;
        delete this.ok
    };
    Kh("goog-button", function () {
        return new Rh(k)
    });

    function Sh() {}
    T(Sh, Jh);
    Jb(Sh);
    Sh[D].Sd = function () {
        return "goog-custom-button"
    };

    function Th(a, b, c) {
        Rh[K](this, a, b || Sh.ba(), c);
        this.hj(16, j)
    }
    T(Th, Rh);
    Kh("goog-toggle-button", function () {
        return new Th(k)
    });
    var Uh = l;

    function Vh(a) {
        a = a[Na](/[\d]+/g);
        pa(a, 3);
        return a[N](".")
    }
    if (s[eb] && s[eb][C]) {
        var Wh = s[eb]["Shockwave Flash"];
        Wh && (Uh = j, Wh.description && Vh(Wh.description));
        s[eb]["Shockwave Flash 2.0"] && (Uh = j)
    } else if (s.mimeTypes && s.mimeTypes[C]) {
        var Xh = s.mimeTypes["application/x-shockwave-flash"];
        (Uh = Xh && Xh.enabledPlugin) && Vh(Xh.enabledPlugin.description)
    } else try {
        var Yh = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),
            Uh = j;
        Vh(Yh.GetVariable("$version"))
    } catch (Zh) {
        try {
            Yh = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), Uh = j
        } catch ($h) {
            try {
                Yh = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
                Uh = j, Vh(Yh.GetVariable("$version"))
            } catch (ai) {}
        }
    };

    function bi(a, b, c, d) {
        this.tj = c;
        this.Pj = d != k ? d : 100
    }
    var ci = {
        ar: 1,
        zh: 1,
        "zh-cn": 1,
        "zh-tw": 1,
        en: 1,
        fr: 1,
        de: 1,
        it: 1,
        ja: 1,
        ko: 1,
        la: 1,
        pt: 1,
        es: 1,
        af: 1,
        sq: 1,
        hy: 1,
        bs: 1,
        ca: 1,
        hr: 1,
        cs: 1,
        da: 1,
        nl: 1,
        eo: 1,
        fi: 1,
        el: 1,
        ht: 1,
        hi: 1,
        hu: 1,
        is: 1,
        id: 1,
        ku: 1,
        lv: 1,
        mk: 1,
        no: 1,
        pl: 1,
        ro: 1,
        ru: 1,
        sr: 1,
        sk: 1,
        sw: 1,
        sv: 1,
        ta: 1,
        th: 1,
        tr: 1,
        vi: 1,
        cy: 1
    };
    bi[D].fb = function (a, b) {
        var c = tc("translate_tts?ie=UTF-8&q=", aa(v(a)), "&tl=", aa(v(b)), this.Lj(a, b) ? "&format=bb" : "", this.tj);
        return c
    };
    bi[D].ee = function (a, b) {
        if (/^[\s\xa0]*$/ [x](a) || !b) return l;
        b = b[Eb]();
        return b in ci && a[C] <= this.Pj ? j : l
    };
    bi[D].Lj = function (a, b) {
        try {
            if (/pv / [x](a) && /zk / [x](a) && /bsch/ [x](a)) return j;
            if ("de" != b || /[aeiouyAEIOUY\u00e4\u00f6\u00fc\u00c4\u00d6\u00dc]/ [x](a) || /[0-9]/ [x](a) || !/\s/ [x](mc(a))) return l
        } catch (c) {
            return l
        }
        return j
    };

    function di(a, b, c, d, e, g, h, n) {
        this.r = (ei++)[bb]();
        fi[this.r] = this;
        this.t = c;
        this.o = d;
        this.Z = a;
        this.f = b;
        this.oa = e;
        this.ac = l;
        this.jh = g;
        n && this.mb(j);
        this.vb = h
    }
    var ei = 0,
        fi = {}, gi = k,
        hi = Xf("changesource"),
        qh = Xf("togglestar"),
        ii = Xf("translate");

    function ji(a, b, c) {
        if (a = fi[c]) a.bi(), gh(a.ac ? "star" : "unstar", c, a.t, a.o, a.Z)
    }
    function ki(a, b, c) {
        if (a = fi[c[0]]) a.ii(c[1]), gh("corr", c[1], a.t, a.o, a.Z)
    }
    function li(a, b, c) {
        if (a = fi[c]) a.translate(), gh("populate", c, a.t, a.o, a.Z)
    }
    O = di[D];
    O.close = function () {
        delete fi[this.r]
    };
    O.d = function () {
        return this.b
    };
    O.xb = function (a) {
        var b = a;
        Q(a) || (b = this.f);
        a = [];
        if (b.sentences) for (var c = 0, d; d = b.sentences[c]; c++) d.trans && a[w](d.trans);
        return a[N]("")
    };
    O.Og = function (a) {
        var b = a;
        Q(a) || (b = this.f);
        a = [];
        if (b.sentences) for (var c = 0, d; d = b.sentences[c]; c++) d.translit && a[w](d.translit);
        return a[N]("")
    };
    O.Pg = function (a) {
        var b = a;
        Q(a) || (b = this.f);
        a = [];
        if (b.sentences) for (var c = 0, d; d = b.sentences[c]; c++) d.src_translit && a[w](d.src_translit);
        return a[N]("")
    };
    O.mb = function (a) {
        this.jh[Xa](a);
        this.ac = a
    };
    O.hd = function (a) {
        return this.Z == a.Z && this.t == a.t && this.o == a.o
    };
    O.bi = function () {
        this.oa(this, !this.ac);
        this.mb(!this.ac)
    };
    O.ii = function (a) {
        this.vb(this.t, this.o, a)
    };

    function mi(a, b, c, d, e, g, h) {
        this.r = (ei++)[bb]();
        fi[this.r] = this;
        this.b = Qf(Ch, {
            id: this.r,
            oh: a,
            Jc: this.xb(b),
            nh: ii
        });
        var n = Xg(this.b),
            n = n[0];
        di[K](this, a, b, c, d, e, n, g, h)
    }
    T(mi, di);
    di[D].translate = function () {
        this.vb(this.t, this.o, this.Z)
    };
    var Ah = Xf("tts");

    function ni(a, b, c, d, e, g, h) {
        this.r = "main";
        fi[this.r] = this;
        this.w = new Audio;
        this.Ab = new bi(k, this.w, "");
        var n = !lg() || -1 != s[lb][z]("Chrome"),
            t = n && this.Ab.ee(a, b.src),
            n = n && this.Ab.ee(this.xb(b), d);
        this.b = Qf(Bh, {
            Oa: b,
            Jc: this.xb(b),
            ae: this.Og(b),
            $d: this.Pg(b),
            Gg: t,
            Hg: n,
            Fg: m[L].DICTIONARY,
            Jg: m[L].TRANSLATION,
            Ig: m[L].DID_YOU_MEAN + " ",
            Eg: hi
        });
        var F = Xg(this.b),
            Z = 0;
        this.ab = k;
        t && (this.ab = F[Z++], this.La = S(this.ab.zb, this.ab, l));
        t = F[Z++];
        di[K](this, a, b, c, d, e, t, g, h);
        this.bb = k;
        n && (this.bb = F[Z++], this.Ma = S(this.bb.zb,
        this.bb, l))
    }
    T(ni, di);
    ni[D].play = function (a) {
        this.w[jb]("ended", this.La, l);
        this.w[jb]("ended", this.Ma, l);
        this.w[jb]("error", this.La, l);
        this.w[jb]("error", this.Ma, l);
        this.w = new Audio;
        "s" == a && this.ab ? (this.Ma && this.Ma(), this.w[A]("ended", this.La, l), this.w[A]("error", this.La, l), this.w.src = "/" + this.Ab.fb(this.Z, this.f.src) + "&prev=input&client=webapp", this.ab.zb(j)) : "t" == a && this.bb && (this.La && this.La(), this.w[A]("ended", this.Ma, l), this.w[A]("error", this.Ma, l), this.w.src = "/" + this.Ab.fb(this.xb(), this.o) + "&client=webapp", this.bb.zb(j));
        this.w.load();
        this.w.play()
    };

    function oi(a, b, c) {
        fi.main.play(c)
    };

    function pi() {
        this.Sa = 0;
        this.f = k;
        this.b = of("DIV", "cllist")
    }
    T(pi, ac);
    O = pi[D];
    O.i = function () {
        this.ze();
        this.b = k;
        pi.n.i[K](this)
    };
    O.d = function () {
        return this.b
    };
    O.update = function (a, b, c, d, e, g) {
        this.S(2);
        this.f = new ni(a, b, c, d, e, g);
        this.b[va](this.f.d())
    };
    O.S = function (a) {
        this.Sa = a;
        this.ze();
        switch (a) {
            case 1:
                a = Qf(nh, {
                    message: m[L].TRANS_IN_PROGRESS
                }), this.b[va](a)
        }
    };
    O.ze = function () {
        this.f && (this.f[qb](), this.f = k);
        for (var a = this.b, b; b = a.firstChild;) a.removeChild(b)
    };
    O.dd = function (a, b) {
        this.f && this.f.hd(a) && this.f.mb(b)
    };

    function qi(a) {
        this.h = a;
        this.Q = a.Q;
        this.wd = {};
        this.li = S(this.fd, this, l)
    }
    O = qi[D];
    O.cd = function () {
        this.jc = q[Pa]("div");
        this.hc = q[Pa]("div");
        var a = this.h.d();
        U(a, "Scroller is not initialized properly.");
        this.h.Rh(this);
        ra(this.jc, "wfx_scrollbar wfx_scrollbar_vertical");
        ra(this.hc, "wfx_scrollbar wfx_scrollbar_horizontal");
        this.fd(l);
        cg(a, ri, S(this.Sh, this));
        cg(a, si, S(this.gd, this))
    };
    O.fd = function (a) {
        this.jc[I].opacity = a ? ".9" : "0";
        this.hc[I].opacity = a ? ".9" : "0"
    };
    O.jf = function (a, b, c, d, e, g, h) {
        if (!this.wd[h]) if (b && e > d) this.Q[va](a);
        else return;
        b = 1 < c ? c - 1 : 0 > c ? -c : 0;
        b *= e - d;
        e = Ze(d * d / e, 30, d / 2);
        e = r.max(8, e - b);
        d -= e;
        c = Ze(c * d, 0, d);
        a[I][g] = c + "px";
        this.wd[h] != e && (this.wd[h] = e, a[I][h] = e + "px")
    };
    O.zj = function (a, b) {
        var c = this.h.ci(a),
            d = this.h.di(b),
            e = this.Q[Ga],
            g = this.Q[Cb],
            h = this.Q.scrollWidth,
            n = this.Q.scrollHeight;
        U(this.hc, "Scrollbar element does not exist yet, call initialize.");
        U(this.jc, "Scrollbar element does not exist yet, call initialize.");
        this.jf(this.hc, a, c, e, h, "right", "width");
        this.jf(this.jc, b, d, g, n, "bottom", "height")
    };
    O.Sh = function () {
        p[za](this.mj);
        this.fd(j)
    };
    O.gd = function () {
        this.mj = p[hb](this.li, 300)
    };

    function ti() {
        this.P = [];
        this.I = []
    }
    O = ti[D];
    O.Ni = function (a, b, c) {
        pa(this.P, pa(this.I, 0));
        this.P[w](a, c);
        this.I[w](b, c);
        this.ld = a;
        this.md = b
    };
    O.ji = function (a, b, c) {
        var d = this.P[this.P[C] - 2],
            e = this.I[this.I[C] - 2],
            d = d - a,
            e = e - b;
        this.nf(this.P, this.oi, d);
        this.nf(this.I, this.pi, e);
        this.xc(this.P, c);
        this.xc(this.I, c);
        this.P[w](a, c);
        this.I[w](b, c);
        this.oi = d;
        this.pi = e;
        return this.mf(a, b, c)
    };
    O.nf = function (a, b, c) {
        b && (c && 2 < a[C] && 0 < b ^ 0 < c) && a[Bb](0, a[C] - 2)
    };
    O.xc = function (a, b) {
        for (; a[C] && 250 < b - a[1] || 10 < a[C];) a[Bb](0, 2)
    };
    O.Di = function (a, b, c) {
        if (Q(a) && Q(b) && c) return this.xc(this.P, c), this.xc(this.I, c), this.mf(a, b, c)
    };
    O.mf = function (a, b, c) {
        a = this.P[C] ? (a - this.P[0]) / (c - this.P[1]) : 0;
        b = this.I[C] ? (b - this.I[0]) / (c - this.I[1]) : 0;
        a = this.wf(a);
        b = this.wf(b);
        return new af(a, b)
    };
    O.wf = function (a) {
        var b = r.abs(a);
        5 < b && (b = 6 > this.I[C] ? 1 : 5);
        return b * (0 > a ? -1 : 1)
    };

    function ui(a, b, c) {
        this.p = a;
        this.Y = b;
        this.L = c;
        this.va = [];
        this.Qa = [];
        this.Vb = [];
        this.Wb = [];
        this.Tc = [];
        this.Uc = []
    }
    O = ui[D];
    O.H = 0;
    O.Ye = function (a) {
        this.va[Bb](a, 1);
        this.H--;
        this.qa = l
    };
    O.Pc = function (a) {
        var b;
        a = Hg(a);
        for (var c = a[C], d = 0; d < this.H; d++) {
            this.Qa[d] = i;
            for (var e = 0; e < c; e++) if (this.va[d] == Ig(a[e])) {
                this.Qa[d] = a[e];
                b = j;
                break
            }
        }
        return b
    };
    O.ih = function (a, b) {
        return 2 < a || 2 < b
    };
    O.sd = function (a) {
        if (!this.Rb && !this.Pb()) {
            for (var b = Hg(a), c = b[C], d = this.L - this.H, c = r.min(c, d), d = 0; d < c; d++) {
                var e = b[d];
                this.va[this.H] = Ig(e);
                this.Tc[this.H] = e[Ya];
                this.Uc[this.H] = e[Za];
                this.H++
            }
            this.Pc(a);
            if (this.Pb()) for (d = 0; d < this.L; d++) this.Vb[d] = this.Wb[d] = 0;
            this.Te(a)
        }
    };
    O.Zh = function (a) {
        if (!this.Rb && this.Pb() && this.Pc(a)) if (this.qa) this.$c(a);
        else {
            for (var b, c = 0; c < this.L; c++) {
                var d = this.Qa[c];
                if (d) {
                    var e = this.va[c],
                        g = this.p[e],
                        e = this.Y[e],
                        h = d[Ya],
                        d = d[Za],
                        g = g - h,
                        e = e - d;
                    this.Vb[c] += r.abs(g);
                    this.Wb[c] += r.abs(e);
                    b = b || this.ih(this.Vb[c], this.Wb[c])
                }
            }
            if (b) {
                for (c = 0; c < this.L; c++) this.Tc[c] = this.Rc(c), this.Uc[c] = this.Sc(c);
                if (this.qa = this.xe(a)) this.$c(a);
                else this[vb]()
            }
        }
    };
    O.uc = function (a) {
        if (!this.Rb && this.bd() && this.Pc(a)) {
            this.qa && this.pd(a);
            a = this.H;
            for (var b = 0, c = 0; c < a; c++) {
                var d = this.Qa[c];
                d && (this.Ye(c - b), b++)
            }
        }
    };
    O.Xh = function (a) {
        if (!this.Rb && this.bd()) {
            for (var b, c = 0; c < this.H; c++) if (this.va[c] == a) {
                b = c;
                break
            }
            Q(b) && (this.qa && this.pd(k), this.Ye(b))
        }
    };
    ta(O, function () {
        this.H = 0;
        this.Rb = this.qa = l
    });
    O.bd = function () {
        return 0 < this.H
    };
    O.Pb = function () {
        return this.H == this.L
    };
    O.pc = function (a) {
        U(1 == this.L || Q(a), "touchIndex not specified in a multi-touch gesture");
        return this.Tc[a || 0]
    };
    O.qc = function (a) {
        U(1 == this.L || Q(a), "touchIndex not specified in a multi-touch gesture");
        return this.Uc[a || 0]
    };
    O.Rc = function (a) {
        U(1 == this.L || Q(a), "touchIndex not specified in a multi-touch gesture");
        a = a || 0;
        var b = this.Qa[a];
        return b ? b[Ya] : this.bf(a)
    };
    O.Sc = function (a) {
        U(1 == this.L || Q(a), "touchIndex not specified in a multi-touch gesture");
        a = a || 0;
        var b = this.Qa[a];
        return b ? b[Za] : this.cf(a)
    };
    O.bf = function (a) {
        U(1 == this.L || Q(a), "touchIndex not specified in a multi-touch gesture");
        a = this.va[a || 0];
        return this.p[a]
    };
    O.cf = function (a) {
        U(1 == this.L || Q(a), "touchIndex not specified in a multi-touch gesture");
        a = this.va[a || 0];
        return this.Y[a]
    };

    function vi(a, b, c) {
        ui[K](this, b, c, 1);
        this.od = a;
        this.nd = new ti
    }
    T(vi, ui);
    O = vi[D];
    O.Te = function (a) {
        this.nd.Ni(this.pc(), this.qc(), a[xa]);
        this.ld = this.pc();
        this.md = this.qc()
    };
    O.xe = function (a) {
        return this.od.yj(a)
    };
    O.$c = function (a) {
        this.ld = this.pc();
        this.md = this.qc();
        this.nd.ji(this.Rc(), this.Sc(), a[xa]);
        this.od.ki(a);
        a[Ja]()
    };
    O.pd = function (a) {
        a && (this.gi = this.nd.Di(this.bf(), this.cf(), a[xa]) || i, a[Ja]());
        this.od.Fi(a);
        Og(this.pc(), this.qc())
    };
    O.Ff = function () {
        return this.Sc() - this.md
    };
    O.Ef = function () {
        return this.Rc() - this.ld
    };
    O.Mi = function () {
        return r.abs(this.Ff()) > r.abs(this.Ef())
    };

    function wi(a, b, c) {
        ui[K](this, b, c, 2);
        this.Od = a
    }
    T(wi, ui);
    wi[D].Te = Ib;
    wi[D].xe = function (a) {
        return this.Od.xk(a)
    };
    wi[D].$c = function (a) {
        this.Od.wk(a);
        a[Ja]()
    };
    wi[D].pd = function (a) {
        this.Od.vk(a);
        a && a[Ja]()
    };

    function xi(a) {
        this.Ob = a;
        this.b = this.Ob.d();
        this.p = {};
        this.Y = {};
        this.k = []
    }
    var yi = [vi, wi];
    O = xi[D];
    O.Zj = function (a, b) {
        var c = this.k[a];
        if (c) return c;
        c = new yi[a](b, this.p, this.Y);
        return this.k[a] = c
    };
    O.Uh = function (a) {
        U(a[B] == Bg, "GestureManager: checkLostTouchEnd called in " + a[B] + " event.");
        var b = Gg(a),
            c = b[C],
            d;
        for (d in this.p) {
            for (var e = 0; e < c; e++) {
                var g = Ig(b[e]);
                if (d == g) {
                    var h = j;
                    break
                }
            }
            h || this.If(+d)
        }
        a = Hg(a);
        b = a[C];
        for (e = 0; e < b; e++) c = Ig(a[e]), Q(this.p[c]) && this.If(+c)
    };
    O.Kh = function (a) {
        this.Uh(a);
        for (var b = j, c = this.k[C], d = 0; d < c; d++) {
            var e = this.k[d];
            if (e && !e.Pb()) {
                b = l;
                break
            }
        }
        if (!b && this.Ob.sd(a)) {
            b = Hg(a);
            e = b[C];
            for (d = 0; d < e; d++) {
                var g = b[d],
                    h = Ig(g);
                U(!this.p[h], "GestureManager: onStart, trying to add a touch that is already tracked");
                this.p[h] = g[Ya];
                this.Y[h] = g[Za]
            }
            for (d = 0; d < c; d++)(e = this.k[d]) && e.sd(a)
        }
    };
    O.Jh = function (a) {
        for (var b = j, c = this.k[C], d = 0; d < c; d++) {
            var e = this.k[d];
            if (e && e.bd()) {
                b = l;
                break
            }
        }
        if (!b) {
            for (d = 0; d < c; d++)(e = this.k[d]) && e.Zh(a);
            a = Hg(a);
            b = a[C];
            for (d = 0; d < b; d++) c = a[d], e = Ig(c), Q(this.p[e]) && (this.p[e] = c[Ya], this.Y[e] = c[Za])
        }
    };
    O.Ih = function (a) {
        for (var b = Hg(a), c = b[C], d, e = 0; e < c; e++) {
            var g = b[e],
                g = Ig(g);
            Q(this.p[g]) && (this.Ob.uc(a), d = j)
        }
        if (d) {
            d = this.k[C];
            for (e = 0; e < d; e++)(g = this.k[e]) && g.uc(a);
            for (e = 0; e < c; e++) g = b[e], g = Ig(g), Q(this.p[g]) && (delete this.p[g], delete this.Y[g])
        }
    };
    O.If = function (a) {
        this.Ob.uc(k);
        for (var b = this.k[C], c = 0; c < b; c++) {
            var d = this.k[c];
            d && d.Xh(a)
        }
        delete this.p[a];
        delete this.Y[a]
    };
    O.enable = function (a, b) {
        var c = S(this.Ih, this),
            d = S(this.Kh, this),
            e = S(this.Jh, this),
            g = c,
            h = b;
        !zg && !Ag && (d = Fg(d), e = Fg(e), g = Fg(g));
        var n = this.b,
            t = !! a;
        cg(n, Bg, d, t, h);
        cg(n, Cg, e, t, h);
        cg(n, Dg, g, t, h);
        cg(n, Eg, c, t, h)
    };
    ta(O, function () {
        for (var a in this.p) delete this.p[Number(a)], delete this.Y[Number(a)];
        for (a = 0; a < this.k[C]; a++) {
            var b = this.k[a];
            b && b[vb]()
        }
    });
    O.Ng = function (a) {
        return this.Zj(0, a)
    };

    function zi() {
        this.Ae = S(this.$i, this);
        this.jb = this.kb = 0
    }
    var Ai = 7 / 60,
        Bi = 7 / 60,
        Ci = 1E3 / 60,
        Di = 0.25 * Ci,
        Ei = 0.01 * Ci;
    O = zi[D];
    O.Tf = function () {
        return 0
    };
    O.start = function (a, b, c, d) {
        U(b.x <= c.x, "Min should not be greater than max for minCoord.x: " + b.x + " and maxCoord.x: " + c.x);
        U(b.y <= c.y, "Min should not be greater than max for minCoord.y: " + b.y + " and maxCoord.y: " + c.y);
        this.cc = b;
        this.bc = c;
        this.U = d.m();
        this.$b = d.m();
        this.ia = this.ph(a);
        if (this.ye(Di) || this.jb || this.kb) if (this.Ba = this.qh(), this.Ba[C]) return a = this.Ba[0], this.we = p[hb](this.Ae, a - Wb()), this.xa = j
    };
    O.Ib = Ib;
    na(O, function () {
        this.xa = l;
        this.Ba = [];
        p[za](this.we);
        this.Ya.vd()
    });
    O.Na = function () {
        return this.xa
    };
    O.hg = function (a) {
        this.Ya = a
    };
    O.qh = function () {
        for (var a = [], b = Wb();;) {
            do this.yi(), b += Ci;
            while (!this.rf() && this.ye(Ei));
            if (0 == this.jb && 0 == this.kb && !this.rf()) break;
            a[w](b, this.qd, this.rd);
            U(1E6 > a[C], "Too many moves created, probably in an infinite loop.");
            this.$b.y = this.rd;
            this.$b.x = this.qd
        }
        return a
    };
    O.qf = function (a, b, c, d) {
        a = 1.25 * a * Ci;
        r.abs(a) < Di && (b < c ? (a = (c - b) * Bi, a = r.max(a, Ei)) : b > d && (a = (b - d) * Bi, a = -r.max(a, Ei)));
        return a
    };
    O.ph = function (a) {
        var b = this.qf(a.x, this.U.x, this.cc.x, this.bc.x);
        if (0 > b * a.x || !a.x && b) this.jb = 2;
        var c = this.qf(a.y, this.U.y, this.cc.y, this.bc.y);
        if (0 > c * a.y || !a.y && c) this.kb = 2;
        return new af(b, c)
    };
    O.rf = function () {
        return this.rd != this.$b.y || this.qd != this.$b.x
    };
    O.kf = function (a, b, c, d, e, g) {
        if (d) {
            d *= 0.97;
            if (a < b) var h = b - a;
            else a > c && (h = c - a);
            h ? 0 > h * d ? (e = 2 == e ? 0 : 1, d += h * Ai) : (e = 2, d = 0 < h ? r.max(h * Bi, Ei) : r.min(h * Bi, -Ei)) : e = 0;
            g ? (this.ia.y = d, this.kb = e) : (this.ia.x = d, this.jb = e)
        }
    };
    O.Hi = function () {
        this.kf(this.U.x, this.cc.x, this.bc.x, this.ia.x, this.jb, l);
        this.kf(this.U.y, this.cc.y, this.bc.y, this.ia.y, this.kb, j)
    };
    O.yi = function () {
        this.U.y += this.ia.y;
        this.U.x += this.ia.x;
        this.rd = r[Ba](this.U.y);
        this.qd = r[Ba](this.U.x);
        this.Hi()
    };
    O.$i = function () {
        if (this.Ba[C]) {
            var a = this.Ba[Bb](0, 3),
                b = a[1],
                a = a[2];
            this.Ya.uf(b, a);
            if (this.Ba[C]) b = this.Ba[0], b -= Wb(), this.we = p[hb](this.Ae, b);
            else this[ab]()
        }
    };
    O.ye = function (a) {
        return r.abs(this.ia.y) >= a || r.abs(this.ia.x) >= a
    };
    var Fi = 1 / 3,
        Gi = 2 / 3,
        Hi = [Fi, Gi, Gi, 1];

    function Ii() {
        this.pb = []
    }
    O = Ii[D];
    O.ff = -5E-4;
    O.Tf = function () {
        return 1
    };
    O.start = function (a, b, c, d) {
        U(b.x <= c.x, "Min should not be greater than max for minCoord.x: " + b.x + " and maxCoord.x: " + c.x);
        U(b.y <= c.y, "Min should not be greater than max for minCoord.y: " + b.y + " and maxCoord.y: " + c.y);
        var e = r.abs(a.y) >= r.abs(a.x),
            g = e ? a.y : a.x;
        a = e ? b.y : b.x;
        var h = e ? c.y : c.x;
        b = e ? b.x : b.y;
        var n = e ? c.x : c.y;
        c = e ? d.y : d.x;
        d = Ze(e ? d.x : d.y, b, n);
        if (c < a || c > h) a = c < a ? a : h, this.wc(e, a, d, 500, "ease-out");
        else if (0.25 <= r.abs(g)) {
            var t = (n = 0 > g) ? -this.ff : this.ff,
                F = n ? a - c : h - c;
            b = g;
            F && (this.$h(g, t, F), g = this.gf(g, this.ef,
            this.rb, this.df), this.wc(e, c + this.df, d, this.rb, g), b = this.ef);
            0 != b && (a = n ? a : h, g = 50 * b, h = a + g, this.ai(g, b, 0), g = this.gf(b, 0, this.rb, g), this.wc(e, h, d, this.rb, g), this.wc(e, a, d, 500, "ease-out"))
        }
        if (this.pb[C]) return this.xa = j, this.Xe(), j
    };
    O.gf = function (a, b, c, d) {
        U(!$e(c, 0) && 0 < c, "Total time must be greater than 0");
        U(!$e(d, 0), "Total displacement must not be 0.");
        U($e(d, (a + b) / 2 * c), "Parameters must form a consistent constant acceleration model in Newtonian kinematics.");
        $e(b, 0) ? c = Hi : ($e(a, b) ? b = [0, 0] : (b = (d - c * b) / (a - b), a *= b, b = [b, a]), a = b[0], b = b[1], U(!$e(c, 0) && !$e(d, 0), "The end point must not lie on any axes. x2 == " + c + " y2 == " + d), b = [a / c, b / d], c = b[0], d = b[1], U(0 <= c && 1 >= c && 0 <= d && 1 >= d, "The intermediate control point must have coordinates within the interval [0,1]."),
        c *= Gi, d *= Gi, a = c + Fi, b = d + Fi, c = [c, d, a, b]);
        return "cubic-bezier(" + c[N](",") + ")"
    };
    O.wc = function (a, b, c, d, e) {
        var g = a ? c : b;
        a = a ? b : c;
        this.pb[w](g, a, d, e)
    };
    O.Xe = function () {
        var a = this.pb,
            b = a[wa](),
            c = a[wa](),
            d = a[wa](),
            a = a[wa]();
        this.Ya.uf(b, c, d, a)
    };
    O.Ib = function () {
        this.xa && (this.pb[C] ? this.Xe() : (this.xa = l, this.Ya.vd()))
    };
    na(O, function () {
        this.xa = l;
        this.pb = [];
        this.Ya.vd()
    });
    O.Na = function () {
        return this.xa
    };
    O.hg = function (a) {
        this.Ya = a
    };
    O.$h = function (a, b, c) {
        U(0 < c * a, "Displacement and initialVelocity must have same sign.");
        U(0 > a * b, "Initial velocity must have the opposite sign of acceleration, and neither can be 0.");
        var d = a * a,
            e = 2 * b,
            g = -d / e;
        r.abs(g) < r.abs(c) ? (c = g, d = 0) : (d = r.sqrt(d + e * c), d *= 0 > a ? -1 : 1);
        a = (d - a) / b;
        this.ef = d;
        this.rb = a;
        this.df = c
    };
    O.ai = function (a, b, c) {
        this.rb = 2 * a / (b + c)
    };

    function Ji() {}
    var Ki = new Ji;
    Ji[D].Ij = 1;
    Ji[D].Lg = function (a) {
        var b;
        switch (this.Ij) {
            case 0:
                b = new zi;
                break;
            case 1:
                b = new Ii
        }
        b.hg(a);
        return b
    };

    function Li(a) {
        this.h = a;
        this.Bd = [];
        this.Ji = S(this.Oi, this)
    }
    O = Li[D];
    O.cd = function () {
        var a = this.h.d();
        U(a, "Scroller element does not exist.");
        this.Th = a;
        cg(a, Mi, S(this.Ve, this));
        1 == this.h.Ne() && (cg(a, Ni, S(this.Vh, this)), cg(a, si, S(this.gd, this)))
    };
    O.addListener = function (a) {
        this.Bd[w](a)
    };
    O.Vh = function () {
        p.clearInterval(this.Xf);
        this.Xf = p.setInterval(this.Ji, 30)
    };
    O.Ve = function () {
        if (!(1 == this.h.Ne() && this.h.Na())) {
            var a = this.h.v.x,
                b = this.h.v.y;
            this.hf(a, b)
        }
    };
    O.gd = function (a) {
        p.clearInterval(this.Xf);
        this.Ve(a)
    };
    O.Oi = function () {
        var a = jg(this.Th),
            b = a.m41,
            a = a.m42;
        this.hf(b, a, j)
    };
    O.hf = function (a, b, c) {
        for (var d = 0; d < this.Bd[C]; d++) {
            var e = this.Bd[d];
            e.zj(a, b, c)
        }
    };

    function Oi(a, b, c, d, e, g, h, n) {
        this.b = a;
        U(a[yb], "Scroller: scrollableElem must have a parentNode when initialized.");
        this.Q = a[yb];
        this.b[A](tg, S(this.Ib, this), l);
        this.be = new xi(this);
        this.be.enable(g);
        this.Ka = this.be.Ng(this);
        this.ea = Ki.Lg(this);
        this.Gc = !! b;
        this.Dg = !! c;
        this.Cg = d;
        this.Cb = e || 1;
        this.j = Pi.m();
        this.Eb = Pi.m();
        this.Ic = Pi.m();
        this.v = Pi.m();
        this.Kg = 1 == this.Cb ? ug : vg;
        U(2 != this.Cb || "static" != wf(this.b, "position"), "The scrollable element must be relatively positioned.");
        this.Mg(Q(h) ? h : this.j.x,
        Q(n) ? n : this.j.y);
        this.Zd = []
    }
    var ri = "scroller:scroll_start_" + bg++,
        si = "scroller:scroll_end_" + bg++,
        Qi = "scroller:drag_end_" + bg++,
        Mi = "scroller:content_moved_" + bg++,
        Ni = "scroller:decel_start_" + bg++,
        Pi = new af(0, 0);
    O = Oi[D];
    O.z = ve("wireless.fx.Scroller");
    O.Wi = j;
    ta(O, function () {
        this[ab]();
        this.Ka[vb]();
        this.eb(this.b, 0);
        this.ce();
        this.Pa("rtl" == wf(q.body, "direction") ? this.B.x : this.j.x, this.j.y)
    });
    O.ce = function () {
        this.Aj();
        this.Oc()
    };
    O.Aj = function () {
        this.Ra = new bf(this.Q[Ga], this.Q[Cb]);
        this.Vc = new bf(this.jk || this.b.scrollWidth, this.ik || this.b.scrollHeight);
        var a = this.dh(),
            b = "rtl" == wf(q.body, "direction"),
            c;
        b ? (c = a[Aa] - this.Ra[Aa], c = this.Eb.x ? r.min(c, this.Eb.x) : c) : c = Pi.x - this.Eb.x;
        this.j = new af(c, Pi.y - this.Eb.y);
        this.B = new af(b ? this.Ic.x : r.min(this.Ra[Aa] - a[Aa] + this.Ic.x, this.j.x), r.min(this.Ra[Ab] - a[Ab] + this.Ic.y, this.j.y))
    };
    O.Mg = function (a, b) {
        U(this.b[yb] == this.Q, "The scrollable node provided to Scroller must be a direct child of the scrollable frame.");
        this.Pa(a, b)
    };
    O.Oc = function () {
        var a = Ze(this.v.x, this.B.x, this.j.x),
            b = Ze(this.v.y, this.B.y, this.j.y);
        (this.v.x != a || this.v.y != b) && this.Pa(a, b)
    };
    O.ci = function (a) {
        a = a || this.v.x;
        return (a - this.B.x) / (this.j.x - this.B.x)
    };
    O.di = function (a) {
        a = a || this.v.y;
        return (a - this.B.y) / (this.j.y - this.B.y)
    };
    O.Pa = function (a, b) {
        this.v.x = a;
        this.v.y = b;
        this.Kg(this.b, a, b);
        dg(this.b, Mi, this)
    };
    O.Xj = function (a, b, c, d) {
        c && 1 == this.Cb && this.eb(this.b, c, gg, d);
        this.Pa(a, b)
    };
    O.Ib = function (a) {
        a[J] == this.b && (this.Mc = l, this.ea.Ib())
    };
    O.Na = function () {
        return this.ea.Na()
    };
    na(O, function () {
        if (this.ea.Na()) if (2 == this.Cb) this.ea[ab]();
        else {
            var a = jg(this.b);
            if (this.Mc) {
                this.v.x = a.m41;
                this.v.y = a.m42;
                this.fe = j;
                var b = this;
                p[hb](function () {
                    var c = jg(b.b);
                    b.eb(b.b, 0);
                    p[hb](function () {
                        b.fe = l
                    }, 0);
                    var d = c.m41 - a.m41,
                        e = c.m42 - a.m42,
                        d = c.m41 + 2 * d,
                        c = c.m42 + 2 * e,
                        d = Ze(d, b.B.x, b.j.x),
                        c = Ze(c, b.B.y, b.j.y);
                    b.le(d, c)
                }, 0)
            } else this.le(a.m41, a.m42)
        }
    });
    O.le = function (a, b) {
        this.ea[ab]();
        this.Pa(a, b)
    };
    O.dh = function () {
        return new bf(r.max(this.Ra[Aa], this.Vc[Aa]), r.max(this.Ra[Ab], this.Vc[Ab]))
    };
    O.sd = function (a) {
        if (this.Ka.qa) return j;
        this.ce();
        this.ea.Na() ? (a[Ja](), this.hk || a[kb](), this[ab]()) : this.eb(this.b, 0);
        this.Xd = this.v.m();
        this.Oc();
        return j
    };
    O.uc = function () {};
    O.yj = function (a) {
        var b = this.Ka.Mi();
        if (this.qk && !b || !this.Gc && (!this.Lc() || b)) return l;
        for (var b = 0, c; c = this.Zd[b]; ++b) if (!c.tk(this, a)) return l;
        for (b = 0; c = this.Zd[b]; ++b) c.rk(this, a);
        return j
    };
    O.ki = function (a) {
        this.Wi || a[kb]();
        this.Xi(this.Ka.Ef(), this.Ka.Ff())
    };
    O.Xi = function (a, b, c) {
        if (!this.fe) {
            U(this.Xd, "Content start not set");
            var d = this.Xd;
            a = d.x + a;
            c || (a = this.Lc() ? this.qe(a, this.B.x, this.j.x) : 0);
            b = d.y + b;
            c || (b = this.Gc ? this.qe(b, this.B.y, this.j.y) : 0);
            this.Qc || (this.Qc = j, dg(this.b, ri, this));
            this.Pa(a, b)
        }
    };
    O.Lc = function () {
        return this.Dg && this.Ra[Aa] < this.Vc[Aa]
    };
    O.qe = function (a, b, c) {
        U(b <= c, "Invalid values for minPosition: " + b + " and maxPosition: " + c);
        a < b ? a -= (a - b) / 2 : a > c && (a -= (a - c) / 2);
        return a
    };
    O.Fi = function () {
        this.fj(this.Ka.gi)
    };
    O.fj = function (a) {
        dg(this.b, Qi, this);
        if (a && this.Cg && !this.Mc) var b = this.xh(a);
        b ? dg(this.b, Ni, this) : (this.Oc(), dg(this.b, si, this), this.Qc = l)
    };
    O.xh = function (a) {
        this.Lc() || (a.x = 0);
        this.Gc || (a.y = 0);
        U(this.B, "Min point is not set");
        U(this.j, "Max point is not set");
        return this.ea.start(a, this.B, this.j, this.v)
    };
    O.eb = function (a, b, c, d) {
        this.Mc = 0 < b;
        c = c || gg;
        d = d || "ease-in-out";
        b = c + " " + b + "ms " + d;
        a[I][ig] = b
    };
    O.d = function () {
        return this.b
    };
    O.Ne = function () {
        return this.ea.Tf()
    };
    O.uf = Oi[D].Xj;
    O.vd = function () {
        this.eb(this.b, 0);
        dg(this.b, si, this);
        this.Qc = l
    };
    O.Rh = function (a) {
        this.Pd || (this.Pd = new Li(this), this.Pd.cd());
        this.Pd.addListener(a)
    };
    var mh = Xf("clear");

    function Ri(a, b, c) {
        this.r = (Si++)[bb]();
        Ti[this.r] = this;
        this.ga = {};
        this.h = this.R = k;
        this.b = of("DIV", "list-brief");
        c && (this.R = Qf(lh, {
            id: this.r,
            text: m[L].CLEAR_THIS_LIST
        }), this.b[va](this.R), xf(this.R, l));
        this.Qg = c || Ib;
        this.oa = a;
        this.vb = b;
        Ui || (Ui = new Zf(k, "TranslationList"), Ui.K(mh, Vi), $f.Gb(Ui))
    }
    T(Ri, ac);
    var Wi = 0,
        Si = 0,
        Ti = {}, Ui = k;
    O = Ri[D];
    O.i = function () {
        bc(this.ga, function (a) {
            sf(a.d());
            a[qb]()
        });
        this.ga = {};
        this.b = this.h = this.R = k;
        Ri.n.i[K](this)
    };
    O.sb = function (a) {
        xf(this.b, a)
    };
    O.d = function () {
        return this.b
    };
    O.Vd = function () {
        if (this.b) {
            this.h = new Oi(this.b, j, l, j);
            var a = new qi(this.h);
            a.cd()
        }
    };
    O.Wa = function (a, b, c, d, e, g) {
        var h = Wi++;
        a = new mi(a, b, c, d, this.oa, this.vb, g);
        e && this.Wd(a);
        this.ga[h] = a;
        e = this.b;
        e.insertBefore(a.d(), e.childNodes[0] || k);
        this.R && xf(this.R, j);
        return a
    };
    O.dd = function (a, b) {
        bc(this.ga, function (c) {
            c.hd(a) && c.mb(b)
        })
    };
    la(O, function () {
        bc(this.ga, function (a) {
            sf(a.d());
            a[qb]()
        });
        this.ga = {};
        this.Qg();
        this.h && this.h[vb]();
        this.R && xf(this.R, l)
    });
    O.Wd = function (a) {
        bc(this.ga, function (b, c, d) {
            b.hd(a) && (sf(b.d()), b[qb](), delete d[c])
        });
        ec(this.ga) && this.R && xf(this.R, l)
    };

    function Vi(a, b, c) {
        (a = Ti[c]) && confirm(m[L].CLEAR_THIS_LIST) && a.clear()
    };
    var xh = Xf("showhistory"),
        wh = Xf("showhomepage"),
        yh = Xf("showstarred");

    function Xi(a, b, c, d, e, g) {
        this.oa = c;
        this.ng = d;
        this.Td = e;
        this.zg = g;
        this.sa = new Dh(m.DisplayLanguage, a, b, S(this.Ag, this), S(this.Dc, this));
        this.f = new pi;
        this.Ja = new Ri(this.oa, S(this.yb, this), this.zg);
        this.pa = new Ri(this.oa, S(this.yb, this));
        this.Ud = of("DIV", "outer-wrap", this.Ja.d(), this.pa.d());
        this.Ja.Vd();
        this.pa.Vd();
        this.Hc = Qf(vh, {
            history: m[L].HISTORY_SECTION_TITLE,
            Ec: m[L].STARRED_SECTION_TITLE
        });
        a = Xg(this.Hc);
        this.yg = a[0];
        this.yg.Bg(j);
        this.pg = a[1];
        this.qg = a[2];
        a = -1 == s[lb][z]("MSIE");
        a = Qf(oh, {
            ug: a,
            tg: j,
            rg: m[L].CLASSIC,
            vg: m[L].FOOTER_HELP,
            history: m[L].HISTORY_SECTION_TITLE,
            wg: xh,
            Ec: m[L].STARRED_SECTION_TITLE,
            xg: yh,
            sg: m[L].COPYRIGHT_RAW
        });
        this.Db = of("DIV", "page", this.sa.d(), this.f.d(), a);
        this.wb = of("DIV", "page", this.Hc, this.Ud);
        xf(this.wb, l);
        this.Bb = this.Db;
        this.b = of("DIV", "frame", this.Db, this.wb);
        this.Fc()
    }
    O = Xi[D];
    O.d = function () {
        return this.b
    };
    O.Fc = function () {
        this.u || (this.u = new Zf(this, "Controller"), this.u.K(xh, this.qi), this.u.K(yh, this.ri), this.u.K(wh, this.Ue), $f.Gb(this.u))
    };
    O.ud = function (a) {
        if (this.Bb != a) {
            xf(this.Bb, l);
            xf(a, j);
            var b = Xe && Xe.ah || 0;
            if (0 == b) {
                var c = kf("gp-titlebar");
                c && (b = c[Cb])
            }
            c = p.innerHeight - this.Hc[Cb] - b;
            b = this.Ud[I];
            "number" == typeof c && (c = r[Ba](c) + "px");
            ua(b, c);
            Ye();
            this.Bb = a
        }
    };
    O.Ue = function () {
        this.Bb != this.Db && (this.ud(this.Db, 2), gh("show", "homepage", "", "", ""))
    };
    O.qi = function () {
        this.pg[Xa](j);
        this.pa.sb(l);
        this.Ja.sb(j);
        this.ud(this.wb, 1);
        gh("show", "history", "", "", "")
    };
    O.ri = function () {
        this.qg[Xa](j);
        this.Ja.sb(l);
        this.pa.sb(j);
        this.ud(this.wb, 1);
        gh("show", "starred", "", "", "")
    };
    O.Ag = function (a, b, c, d) {
        this.f.S(2);
        this.ng(a, b, c, d, S(this.xi, this))
    };
    O.xi = function (a, b, c, d) {
        this.lf(c, d, a, b, j);
        this.f.update(c, d, a, b, this.oa, S(this.yb, this));
        this.Td(a, b, c, this.f.f)
    };
    O.Dc = function () {};
    O.yb = function (a, b, c) {
        a && this.sa.Dd(a);
        b && this.sa.Ed(b);
        "" != c && (this.sa.Pi(c), this.sa.Ze());
        this.Ue()
    };
    O.Se = function (a, b) {
        this.f.dd(a, b);
        this.Ja.dd(a, b);
        b ? this.pa.Wa(a.Z, a.f, a.t, a.o, j, j) : this.pa.Wd(a)
    };
    O.lf = function (a, b, c, d, e) {
        b = this.Ja.Wa(a, b, c, d, e);
        this.Td(c, d, a, b);
        return b
    };
    O.Bj = function (a, b, c, d, e) {
        return this.pa.Wa(a, b, c, d, e, j)
    };
    O.Dd = function (a) {
        this.sa.Dd(a)
    };
    O.Ed = function (a) {
        this.sa.Ed(a)
    };
    var Yi = k,
        Zi = k,
        $i = k,
        aj = m.MaybeDefaultSourceLanguageCode,
        bj = m.MaybeDefaultTargetLanguageCode;

    function cj() {
        $i = new Xi(aj, bj, dj, ej, fj, gj);
        q.body[va]($i.d());
        hj();
        gi || (gi = new Zf(k, "TranslationItem"), gi.K(qh, ji), gi.K(ii, li), gi.K(Ah, oi), gi.K(hi, ki), $f.Gb(gi));
        p[hb](function () {
            Ye()
        }, 300);
        try {
            og.csi.tdt(), og.csi.rdt()
        } catch (a) {}
    }
    function hj() {
        Sd(function (a, b) {
            a && (Zi = b, ij(), Qd(function (a, b) {
                a && (Yi = b, jj())
            }))
        })
    }

    function jj() {
        Yi ? Yi.Dj(k, k, k, function (a, b) {
            if (a) for (var c = b[C] - 1; 0 <= c; c--) {
                var d = b[c],
                    e = d.sl,
                    g = d.tl,
                    h = d.src,
                    d = d.trg;
                0 == c && (aj = e, bj = g);
                $i.lf(h, d, e, g, l)
            }
            kj()
        }) : kj()
    }
    function kj() {
        var a = new He(p[nb].href),
            b = a.ag("sl");
        b && (aj = b);
        (a = a.ag("tl")) && (bj = a);
        $i.yb(aj, bj, m.UserInputQuery)
    }
    function ij() {
        Zi && Zi.Sf(k, k, k, function (a, b) {
            if (a) for (var c = b[C] - 1; 0 <= c; c--) {
                var d = b[c],
                    e = d.sl,
                    g = d.tl,
                    h = d.src,
                    d = d.trg;
                $i.Bj(h, d, e, g, j)
            }
        })
    }
    function gj() {
        Yi && Yi.clear()
    }

    function ej(a, b, c, d, e) {
        var g;
        Te || (Te = new Se, Ue = new Re);
        g = Te;
        g.Ac(a, b, c, d, function (c, g, t, F) {
            c ? (Yi && Yi.xj(a, b, d, F), e(a, b, d, F)) : alert(m[L].UNABLE_TO_TRANSLATE_REQUEST)
        })
    }
    function dj(a, b) {
        if (Zi) {
            var c = a.t,
                d = a.o,
                e = a.Z,
                g = a.f;
            b ? Zi.Ph(c, d, e, g, function () {
                $i.Se(a, b)
            }) : Zi.Qh(c, d, e, function () {
                $i.Se(a, b)
            })
        }
    }
    function fj(a, b, c, d) {
        Zi && Zi.Sf(a, b, c, function (a, b) {
            a && d && d.mb(0 < b[C])
        })
    }
    try {
        og.csi.datr()
    } catch (lj) {}
    Gb("init", cj, i);
})();