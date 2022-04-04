require('./bootstrap');

! function(r, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.formulajs = n() : r.formulajs = n()
}("undefined" != typeof self ? self : this, function() {
    return function(r) {
        function n(t) {
            if (e[t]) return e[t].exports;
            var a = e[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return r[t].call(a.exports, a, a.exports, n), a.l = !0, a.exports
        }
        var e = {};
        return n.m = r, n.c = e, n.d = function(r, e, t) {
            n.o(r, e) || Object.defineProperty(r, e, {
                configurable: !1,
                enumerable: !0,
                get: t
            })
        }, n.n = function(r) {
            var e = r && r.__esModule ? function() {
                return r.default
            } : function() {
                return r
            };
            return n.d(e, "a", e), e
        }, n.o = function(r, n) {
            return Object.prototype.hasOwnProperty.call(r, n)
        }, n.p = "", n(n.s = 11)
    }([function(r, n) {
        n.nil = new Error("#NULL!"), n.div0 = new Error("#DIV/0!"), n.value = new Error("#VALUE!"), n.ref = new Error("#REF!"), n.name = new Error("#NAME?"), n.num = new Error("#NUM!"), n.na = new Error("#N/A"), n.error = new Error("#ERROR!"), n.data = new Error("#GETTING_DATA")
    }, function(r, n, e) {
        function t(r) {
            r < 60 && (r += 1);
            var n = Math.floor(r - 25569),
                e = 86400 * n,
                t = new Date(1e3 * e),
                a = r - Math.floor(r) + 1e-7,
                u = Math.floor(86400 * a),
                o = u % 60;
            u -= o;
            var i = Math.floor(u / 3600),
                f = Math.floor(u / 60) % 60,
                s = t.getDate(),
                l = t.getMonth();
            if (r >= 60 && r < 61) var s = 29,
                l = 1;
            return new Date(t.getFullYear(), l, s, i, f, o)
        }
        var a = e(0);
        n.flattenShallow = function(r) {
            return r && r.reduce ? r.reduce(function(r, n) {
                var e = Array.isArray(r),
                    t = Array.isArray(n);
                return e && t ? r.concat(n) : e ? (r.push(n), r) : t ? [r].concat(n) : [r, n]
            }) : r
        }, n.isFlat = function(r) {
            if (!r) return !1;
            for (var n = 0; n < r.length; ++n)
                if (Array.isArray(r[n])) return !1;
            return !0
        }, n.flatten = function() {
            for (var r = n.argsToArray.apply(null, arguments); !n.isFlat(r);) r = n.flattenShallow(r);
            return r
        }, n.argsToArray = function(r) {
            var e = [];
            return n.arrayEach(r, function(r) {
                e.push(r)
            }), e
        }, n.numbers = function() {
            return this.flatten.apply(null, arguments).filter(function(r) {
                return "number" == typeof r
            })
        }, n.cleanFloat = function(r) {
            return Math.round(1e14 * r) / 1e14
        }, n.parseBool = function(r) {
            if ("boolean" == typeof r) return r;
            if (r instanceof Error) return r;
            if ("number" == typeof r) return 0 !== r;
            if ("string" == typeof r) {
                var n = r.toUpperCase();
                if ("TRUE" === n) return !0;
                if ("FALSE" === n) return !1
            }
            return r instanceof Date && !isNaN(r) || a.value
        }, n.parseNumber = function(r) {
            return r instanceof Error ? r : void 0 === r || null === r || "" === r ? 0 : ("boolean" == typeof r && (r = +r), isNaN(r) ? a.value : parseFloat(r))
        }, n.parseString = function(r) {
            return r instanceof Error ? r : void 0 === r || null === r ? "" : r.toString()
        }, n.parseNumberArray = function(r) {
            var e;
            if (!r || 0 === (e = r.length)) return a.value;
            for (var t; e--;) {
                if (r[e] instanceof Error) return r[e];
                if ((t = n.parseNumber(r[e])) instanceof Error) return t;
                r[e] = t
            }
            return r
        }, n.parseMatrix = function(r) {
            if (!r || 0 === r.length) return a.value;
            for (var e, t = 0; t < r.length; t++)
                if (e = n.parseNumberArray(r[t]), r[t] = e, e instanceof Error) return e;
            return r
        }, n.parseDate = function(r) {
            if (!isNaN(r)) {
                if (r instanceof Date) return new Date(r);
                var n = parseFloat(r);
                return n < 0 || n >= 2958466 ? a.num : t(n)
            }
            return "string" != typeof r || (r = new Date(r), isNaN(r)) ? a.value : r
        }, n.parseDateArray = function(r) {
            for (var n, e = r.length; e--;) {
                if ((n = this.parseDate(r[e])) === a.value) return n;
                r[e] = n
            }
            return r
        }, n.anyError = function() {
            for (var r = 0; r < arguments.length; r++)
                if (arguments[r] instanceof Error) return arguments[r]
        }, n.isDefined = function(r) {
            return void 0 !== r && null !== r
        }, n.anyIsError = function() {
            for (var r = arguments.length; r--;)
                if (arguments[r] instanceof Error) return !0;
            return !1
        }, n.anyIsString = function() {
            for (var r = arguments.length; r--;)
                if ("string" == typeof arguments[r]) return !0;
            return !1
        }, n.arrayValuesToNumbers = function(r) {
            for (var n, e = r.length; e--;)
                if ("number" != typeof(n = r[e]))
                    if (!0 !== n)
                        if (!1 !== n) {
                            if ("string" == typeof n) {
                                var t = this.parseNumber(n);
                                t instanceof Error ? r[e] = 0 : r[e] = t
                            }
                        } else r[e] = 0;
            else r[e] = 1;
            return r
        }, n.rest = function(r, n) {
            return n = n || 1, r && "function" == typeof r.slice ? r.slice(n) : r
        }, n.initial = function(r, n) {
            return n = n || 1, r && "function" == typeof r.slice ? r.slice(0, r.length - n) : r
        }, n.arrayEach = function(r, n) {
            for (var e = -1, t = r.length; ++e < t && !1 !== n(r[e], e, r););
            return r
        }, n.transpose = function(r) {
            return r ? r[0].map(function(n, e) {
                return r.map(function(r) {
                    return r[e]
                })
            }) : a.value
        }
    }, function(r, n, e) {
        var t = e(1),
            a = e(0),
            u = e(3),
            o = e(6),
            i = e(5);
        n.ABS = function(r) {
            return (r = t.parseNumber(r)) instanceof Error ? r : Math.abs(r)
        }, n.ACOS = function(r) {
            if ((r = t.parseNumber(r)) instanceof Error) return r;
            var n = Math.acos(r);
            return isNaN(n) && (n = a.num), n
        }, n.ACOSH = function(r) {
            if ((r = t.parseNumber(r)) instanceof Error) return r;
            var n = Math.log(r + Math.sqrt(r * r - 1));
            return isNaN(n) && (n = a.num), n
        }, n.ACOT = function(r) {
            return (r = t.parseNumber(r)) instanceof Error ? r : Math.atan(1 / r)
        }, n.ACOTH = function(r) {
            if ((r = t.parseNumber(r)) instanceof Error) return r;
            var n = .5 * Math.log((r + 1) / (r - 1));
            return isNaN(n) && (n = a.num), n
        }, n.AGGREGATE = function(r, e, o, i) {
            if (r = t.parseNumber(r), e = t.parseNumber(r), t.anyIsError(r, e)) return a.value;
            switch (r) {
                case 1:
                    return u.AVERAGE(o);
                case 2:
                    return u.COUNT(o);
                case 3:
                    return u.COUNTA(o);
                case 4:
                    return u.MAX(o);
                case 5:
                    return u.MIN(o);
                case 6:
                    return n.PRODUCT(o);
                case 7:
                    return u.STDEV.S(o);
                case 8:
                    return u.STDEV.P(o);
                case 9:
                    return n.SUM(o);
                case 10:
                    return u.VAR.S(o);
                case 11:
                    return u.VAR.P(o);
                case 12:
                    return u.MEDIAN(o);
                case 13:
                    return u.MODE.SNGL(o);
                case 14:
                    return u.LARGE(o, i);
                case 15:
                    return u.SMALL(o, i);
                case 16:
                    return u.PERCENTILE.INC(o, i);
                case 17:
                    return u.QUARTILE.INC(o, i);
                case 18:
                    return u.PERCENTILE.EXC(o, i);
                case 19:
                    return u.QUARTILE.EXC(o, i)
            }
        }, n.ARABIC = function(r) {
            if (void 0 === r || null === r) return 0;
            if (r instanceof Error) return r;
            if (!/^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/.test(r)) return a.value;
            var n = 0;
            return r.replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g, function(r) {
                n += {
                    M: 1e3,
                    CM: 900,
                    D: 500,
                    CD: 400,
                    C: 100,
                    XC: 90,
                    L: 50,
                    XL: 40,
                    X: 10,
                    IX: 9,
                    V: 5,
                    IV: 4,
                    I: 1
                } [r]
            }), n
        }, n.ASIN = function(r) {
            if ((r = t.parseNumber(r)) instanceof Error) return r;
            var n = Math.asin(r);
            return isNaN(n) && (n = a.num), n
        }, n.ASINH = function(r) {
            return r = t.parseNumber(r), r instanceof Error ? r : Math.log(r + Math.sqrt(r * r + 1))
        }, n.ATAN = function(r) {
            return r = t.parseNumber(r), r instanceof Error ? r : Math.atan(r)
        }, n.ATAN2 = function(r, n) {
            r = t.parseNumber(r), n = t.parseNumber(n);
            var e = t.anyError(r, n);
            return e || Math.atan2(r, n)
        }, n.ATANH = function(r) {
            if ((r = t.parseNumber(r)) instanceof Error) return r;
            var n = Math.log((1 + r) / (1 - r)) / 2;
            return isNaN(n) && (n = a.num), n
        }, n.BASE = function(r, n, e) {
            r = t.parseNumber(r), n = t.parseNumber(n), e = t.parseNumber(e);
            var u = t.anyError(r, n, e);
            if (u) return u;
            if (0 === n) return a.num;
            var o = r.toString(n);
            return new Array(Math.max(e + 1 - o.length, 0)).join("0") + o
        }, n.CEILING = function(r, e, a) {
            r = t.parseNumber(r), e = t.parseNumber(e), a = t.parseNumber(a);
            var u = t.anyError(r, e, a);
            if (u) return u;
            if (0 === e) return 0;
            e = Math.abs(e);
            var o = -Math.floor(Math.log(e) / Math.log(10));
            return r >= 0 ? n.ROUND(Math.ceil(r / e) * e, o) : 0 === a ? -n.ROUND(Math.floor(Math.abs(r) / e) * e, o) : -n.ROUND(Math.ceil(Math.abs(r) / e) * e, o)
        }, n.CEILING.MATH = n.CEILING, n.CEILING.PRECISE = n.CEILING, n.COMBIN = function(r, e) {
            r = t.parseNumber(r), e = t.parseNumber(e);
            var u = t.anyError(r, e);
            return u || (r < e ? a.num : n.FACT(r) / (n.FACT(e) * n.FACT(r - e)))
        }, n.COMBINA = function(r, e) {
            r = t.parseNumber(r), e = t.parseNumber(e);
            var u = t.anyError(r, e);
            return u || (r < e ? a.num : 0 === r && 0 === e ? 1 : n.COMBIN(r + e - 1, r - 1))
        }, n.COS = function(r) {
            return r = t.parseNumber(r), r instanceof Error ? r : Math.cos(r)
        }, n.COSH = function(r) {
            return r = t.parseNumber(r), r instanceof Error ? r : (Math.exp(r) + Math.exp(-r)) / 2
        }, n.COT = function(r) {
            return r = t.parseNumber(r), r instanceof Error ? r : 0 === r ? a.div0 : 1 / Math.tan(r)
        }, n.COTH = function(r) {
            if ((r = t.parseNumber(r)) instanceof Error) return r;
            if (0 === r) return a.div0;
            var n = Math.exp(2 * r);
            return (n + 1) / (n - 1)
        }, n.CSC = function(r) {
            return r = t.parseNumber(r), r instanceof Error ? r : 0 === r ? a.div0 : 1 / Math.sin(r)
        }, n.CSCH = function(r) {
            return r = t.parseNumber(r), r instanceof Error ? r : 0 === r ? a.div0 : 2 / (Math.exp(r) - Math.exp(-r))
        }, n.DECIMAL = function(r, n) {
            if (arguments.length < 1) return a.value;
            r = t.parseNumber(r), n = t.parseNumber(n);
            var e = t.anyError(r, n);
            return e || (0 === n ? a.num : parseInt(r, n))
        }, n.DEGREES = function(r) {
            return r = t.parseNumber(r), r instanceof Error ? r : 180 * r / Math.PI
        }, n.EVEN = function(r) {
            return r = t.parseNumber(r), r instanceof Error ? r : n.CEILING(r, -2, -1)
        }, n.EXP = function(r) {
            return arguments.length < 1 ? a.na : arguments.length > 1 ? a.error : (r = t.parseNumber(r)) instanceof Error ? r : r = Math.exp(r)
        };
        var f = [];
        n.FACT = function(r) {
            if ((r = t.parseNumber(r)) instanceof Error) return r;
            var e = Math.floor(r);
            return 0 === e || 1 === e ? 1 : f[e] > 0 ? f[e] : (f[e] = n.FACT(e - 1) * e, f[e])
        }, n.FACTDOUBLE = function(r) {
            if ((r = t.parseNumber(r)) instanceof Error) return r;
            var e = Math.floor(r);
            return e <= 0 ? 1 : e * n.FACTDOUBLE(e - 2)
        }, n.FLOOR = function(r, e) {
            r = t.parseNumber(r), e = t.parseNumber(e);
            var u = t.anyError(r, e);
            if (u) return u;
            if (0 === e) return 0;
            if (!(r >= 0 && e > 0 || r <= 0 && e < 0)) return a.num;
            e = Math.abs(e);
            var o = -Math.floor(Math.log(e) / Math.log(10));
            return r >= 0 ? n.ROUND(Math.floor(r / e) * e, o) : -n.ROUND(Math.ceil(Math.abs(r) / e), o)
        }, n.FLOOR.MATH = function(r, e, a) {
            if (e instanceof Error) return e;
            e = void 0 === e ? 0 : e, r = t.parseNumber(r), e = t.parseNumber(e), a = t.parseNumber(a);
            var u = t.anyError(r, e, a);
            if (u) return u;
            if (0 === e) return 0;
            e = e ? Math.abs(e) : 1;
            var o = -Math.floor(Math.log(e) / Math.log(10));
            return r >= 0 ? n.ROUND(Math.floor(r / e) * e, o) : 0 === a || void 0 === a ? -n.ROUND(Math.ceil(Math.abs(r) / e) * e, o) : -n.ROUND(Math.floor(Math.abs(r) / e) * e, o)
        }, n.FLOOR.PRECISE = n.FLOOR.MATH, n.GCD = function() {
            var r = t.parseNumberArray(t.flatten(arguments));
            if (r instanceof Error) return r;
            for (var n = r.length, e = r[0], a = e < 0 ? -e : e, u = 1; u < n; u++) {
                for (var o = r[u], i = o < 0 ? -o : o; a && i;) a > i ? a %= i : i %= a;
                a += i
            }
            return a
        }, n.INT = function(r) {
            return r = t.parseNumber(r), r instanceof Error ? r : Math.floor(r)
        }, n.ISO = {
            CEILING: n.CEILING
        }, n.LCM = function() {
            var r = t.parseNumberArray(t.flatten(arguments));
            if (r instanceof Error) return r;
            for (var n, e, a, u, o = 1; void 0 !== (a = r.pop());) {
                if (0 === a) return 0;
                for (; a > 1;) {
                    if (a % 2) {
                        for (n = 3, e = Math.floor(Math.sqrt(a)); n <= e && a % n; n += 2);
                        u = n <= e ? n : a
                    } else u = 2;
                    for (a /= u, o *= u, n = r.length; n; r[--n] % u == 0 && 1 == (r[n] /= u) && r.splice(n, 1));
                }
            }
            return o
        }, n.LN = function(r) {
            return r = t.parseNumber(r), r instanceof Error ? r : 0 === r ? a.num : Math.log(r)
        }, n.LN10 = function() {
            return Math.log(10)
        }, n.LN2 = function() {
            return Math.log(2)
        }, n.LOG10E = function() {
            return Math.LOG10E
        }, n.LOG2E = function() {
            return Math.LOG2E
        }, n.LOG = function(r, n) {
            r = t.parseNumber(r), n = t.parseNumber(n);
            var e = t.anyError(r, n);
            return e || (0 === r || 0 === n ? a.num : Math.log(r) / Math.log(n))
        }, n.LOG10 = function(r) {
            return r = t.parseNumber(r), r instanceof Error ? r : 0 === r ? a.num : Math.log(r) / Math.log(10)
        }, n.MOD = function(r, n) {
            r = t.parseNumber(r), n = t.parseNumber(n);
            var e = t.anyError(r, n);
            if (e) return e;
            if (0 === n) return a.div0;
            var u = Math.abs(r % n);
            return u = r < 0 ? n - u : u, n > 0 ? u : -u
        }, n.MROUND = function(r, n) {
            r = t.parseNumber(r), n = t.parseNumber(n);
            var e = t.anyError(r, n);
            return e || (r * n == 0 ? 0 : r * n < 0 ? a.num : Math.round(r / n) * n)
        }, n.MULTINOMIAL = function() {
            var r = t.parseNumberArray(t.flatten(arguments));
            if (r instanceof Error) return r;
            for (var e = 0, a = 1, u = 0; u < r.length; u++) e += r[u], a *= n.FACT(r[u]);
            return n.FACT(e) / a
        }, n.ODD = function(r) {
            if ((r = t.parseNumber(r)) instanceof Error) return r;
            var n = Math.ceil(Math.abs(r));
            return n = 1 & n ? n : n + 1, r >= 0 ? n : -n
        }, n.PI = function() {
            return Math.PI
        }, n.E = function() {
            return Math.E
        }, n.POWER = function(r, n) {
            r = t.parseNumber(r), n = t.parseNumber(n);
            var e = t.anyError(r, n);
            if (e) return e;
            if (0 === r && 0 === n) return a.num;
            var u = Math.pow(r, n);
            return isNaN(u) ? a.num : u
        }, n.PRODUCT = function() {
            var r = t.flatten(arguments),
                n = r.filter(function(r) {
                    return void 0 !== r && null !== r
                });
            if (0 === n.length) return 0;
            var e = t.parseNumberArray(n);
            if (e instanceof Error) return e;
            for (var a = 1, u = 0; u < e.length; u++) a *= e[u];
            return a
        }, n.QUOTIENT = function(r, n) {
            r = t.parseNumber(r), n = t.parseNumber(n);
            var e = t.anyError(r, n);
            return e || parseInt(r / n, 10)
        }, n.RADIANS = function(r) {
            return r = t.parseNumber(r), r instanceof Error ? r : r * Math.PI / 180
        }, n.RAND = function() {
            return Math.random()
        }, n.RANDBETWEEN = function(r, n) {
            r = t.parseNumber(r), n = t.parseNumber(n);
            var e = t.anyError(r, n);
            return e || r + Math.ceil((n - r + 1) * Math.random()) - 1
        }, n.ROMAN = function(r) {
            if ((r = t.parseNumber(r)) instanceof Error) return r;
            for (var n = String(r).split(""), e = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], a = "", u = 3; u--;) a = (e[+n.pop() + 10 * u] || "") + a;
            return new Array(+n.join("") + 1).join("M") + a
        }, n.ROUND = function(r, n) {
            r = t.parseNumber(r), n = t.parseNumber(n);
            var e = t.anyError(r, n);
            return e || Math.round(r * Math.pow(10, n)) / Math.pow(10, n)
        }, n.ROUNDDOWN = function(r, n) {
            r = t.parseNumber(r), n = t.parseNumber(n);
            var e = t.anyError(r, n);
            return e || (r > 0 ? 1 : -1) * Math.floor(Math.abs(r) * Math.pow(10, n)) / Math.pow(10, n)
        }, n.ROUNDUP = function(r, n) {
            r = t.parseNumber(r), n = t.parseNumber(n);
            var e = t.anyError(r, n);
            return e || (r > 0 ? 1 : -1) * Math.ceil(Math.abs(r) * Math.pow(10, n)) / Math.pow(10, n)
        }, n.SEC = function(r) {
            return r = t.parseNumber(r), r instanceof Error ? r : 1 / Math.cos(r)
        }, n.SECH = function(r) {
            return r = t.parseNumber(r), r instanceof Error ? r : 2 / (Math.exp(r) + Math.exp(-r))
        }, n.SERIESSUM = function(r, n, e, u) {
            if (r = t.parseNumber(r), n = t.parseNumber(n), e = t.parseNumber(e), u = t.parseNumberArray(u), t.anyIsError(r, n, e, u)) return a.value;
            for (var o = u[0] * Math.pow(r, n), i = 1; i < u.length; i++) o += u[i] * Math.pow(r, n + i * e);
            return o
        }, n.SIGN = function(r) {
            return r = t.parseNumber(r), r instanceof Error ? r : r < 0 ? -1 : 0 === r ? 0 : 1
        }, n.SIN = function(r) {
            return r = t.parseNumber(r), r instanceof Error ? r : Math.sin(r)
        }, n.SINH = function(r) {
            return r = t.parseNumber(r), r instanceof Error ? r : (Math.exp(r) - Math.exp(-r)) / 2
        }, n.SQRT = function(r) {
            return r = t.parseNumber(r), r instanceof Error ? r : r < 0 ? a.num : Math.sqrt(r)
        }, n.SQRTPI = function(r) {
            return r = t.parseNumber(r), r instanceof Error ? r : Math.sqrt(r * Math.PI)
        }, n.SQRT1_2 = function() {
            return 1 / Math.sqrt(2)
        }, n.SQRT2 = function() {
            return Math.sqrt(2)
        }, n.SUBTOTAL = function(r, e) {
            if ((r = t.parseNumber(r)) instanceof Error) return r;
            switch (r) {
                case 1:
                    return u.AVERAGE(e);
                case 2:
                    return u.COUNT(e);
                case 3:
                    return u.COUNTA(e);
                case 4:
                    return u.MAX(e);
                case 5:
                    return u.MIN(e);
                case 6:
                    return n.PRODUCT(e);
                case 7:
                    return u.STDEV.S(e);
                case 8:
                    return u.STDEV.P(e);
                case 9:
                    return n.SUM(e);
                case 10:
                    return u.VAR.S(e);
                case 11:
                    return u.VAR.P(e);
                case 101:
                    return u.AVERAGE(e);
                case 102:
                    return u.COUNT(e);
                case 103:
                    return u.COUNTA(e);
                case 104:
                    return u.MAX(e);
                case 105:
                    return u.MIN(e);
                case 106:
                    return n.PRODUCT(e);
                case 107:
                    return u.STDEV.S(e);
                case 108:
                    return u.STDEV.P(e);
                case 109:
                    return n.SUM(e);
                case 110:
                    return u.VAR.S(e);
                case 111:
                    return u.VAR.P(e)
            }
        }, n.ADD = function(r, n) {
            if (2 !== arguments.length) return a.na;
            r = t.parseNumber(r), n = t.parseNumber(n);
            var e = t.anyError(r, n);
            return e || r + n
        }, n.MINUS = function(r, n) {
            if (2 !== arguments.length) return a.na;
            r = t.parseNumber(r), n = t.parseNumber(n);
            var e = t.anyError(r, n);
            return e || r - n
        }, n.DIVIDE = function(r, n) {
            if (2 !== arguments.length) return a.na;
            r = t.parseNumber(r), n = t.parseNumber(n);
            var e = t.anyError(r, n);
            return e || (0 === n ? a.div0 : r / n)
        }, n.MULTIPLY = function(r, n) {
            if (2 !== arguments.length) return a.na;
            r = t.parseNumber(r), n = t.parseNumber(n);
            var e = t.anyError(r, n);
            return e || r * n
        }, n.GT = function(r, n) {
            if (2 !== arguments.length) return a.na;
            if (r instanceof Error) return r;
            if (n instanceof Error) return n;
            t.anyIsString(r, n) ? (r = t.parseString(r), n = t.parseString(n)) : (r = t.parseNumber(r), n = t.parseNumber(n));
            var e = t.anyError(r, n);
            return e || r > n
        }, n.GTE = function(r, n) {
            if (2 !== arguments.length) return a.na;
            t.anyIsString(r, n) ? (r = t.parseString(r), n = t.parseString(n)) : (r = t.parseNumber(r), n = t.parseNumber(n));
            var e = t.anyError(r, n);
            return e || r >= n
        }, n.LT = function(r, n) {
            if (2 !== arguments.length) return a.na;
            t.anyIsString(r, n) ? (r = t.parseString(r), n = t.parseString(n)) : (r = t.parseNumber(r), n = t.parseNumber(n));
            var e = t.anyError(r, n);
            return e || r < n
        }, n.LTE = function(r, n) {
            if (2 !== arguments.length) return a.na;
            t.anyIsString(r, n) ? (r = t.parseString(r), n = t.parseString(n)) : (r = t.parseNumber(r), n = t.parseNumber(n));
            var e = t.anyError(r, n);
            return e || r <= n
        }, n.EQ = function(r, n) {
            return 2 !== arguments.length ? a.na : r instanceof Error ? r : n instanceof Error ? n : (null === r && (r = void 0), null === n && (n = void 0), r === n)
        }, n.NE = function(r, n) {
            return 2 !== arguments.length ? a.na : r instanceof Error ? r : n instanceof Error ? n : (null === r && (r = void 0), null === n && (n = void 0), r !== n)
        }, n.POW = function(r, e) {
            return 2 !== arguments.length ? a.na : n.POWER(r, e)
        }, n.SUM = function() {
            var r = 0;
            return t.arrayEach(t.argsToArray(arguments), function(e) {
                if (r instanceof Error) return !1;
                if (e instanceof Error) r = e;
                else if ("number" == typeof e) r += e;
                else if ("string" == typeof e) {
                    var t = parseFloat(e);
                    !isNaN(t) && (r += t)
                } else if (Array.isArray(e)) {
                    var a = n.SUM.apply(null, e);
                    a instanceof Error ? r = a : r += a
                }
            }), r
        }, n.SUMIF = function(r, n, e) {
            if (r = t.flatten(r), e = e ? t.flatten(e) : r, r instanceof Error) return r;
            if (void 0 === n || null === n || n instanceof Error) return 0;
            for (var a = 0, u = "*" === n, o = u ? null : i.parse(n + ""), f = 0; f < r.length; f++) {
                var s = r[f],
                    l = e[f];
                if (u) a += s;
                else {
                    var c = [i.createToken(s, i.TOKEN_TYPE_LITERAL)].concat(o);
                    a += i.compute(c) ? l : 0
                }
            }
            return a
        }, n.SUMIFS = function() {
            var r = t.argsToArray(arguments),
                n = t.parseNumberArray(t.flatten(r.shift()));
            if (n instanceof Error) return n;
            for (var e = r, a = e.length / 2, u = 0; u < a; u++) e[2 * u] = t.flatten(e[2 * u]);
            for (var o = 0, u = 0; u < n.length; u++) {
                for (var f = !1, s = 0; s < a; s++) {
                    var l = e[2 * s][u],
                        c = e[2 * s + 1],
                        m = void 0 === c || "*" === c,
                        p = !1;
                    if (m) p = !0;
                    else {
                        var v = i.parse(c + ""),
                            h = [i.createToken(l, i.TOKEN_TYPE_LITERAL)].concat(v);
                        p = i.compute(h)
                    }
                    if (!p) {
                        f = !1;
                        break
                    }
                    f = !0
                }
                f && (o += n[u])
            }
            return o
        }, n.SUMPRODUCT = function() {
            if (!arguments || 0 === arguments.length) return a.value;
            for (var r, n, e, u, o = arguments.length + 1, i = 0, f = 0; f < arguments[0].length; f++)
                if (arguments[0][f] instanceof Array)
                    for (var s = 0; s < arguments[0][f].length; s++) {
                        for (r = 1, n = 1; n < o; n++) {
                            var l = arguments[n - 1][f][s];
                            if (l instanceof Error) return l;
                            if ((u = t.parseNumber(l)) instanceof Error) return u;
                            r *= u
                        }
                        i += r
                    } else {
                        for (r = 1, n = 1; n < o; n++) {
                            var c = arguments[n - 1][f];
                            if (c instanceof Error) return c;
                            if ((e = t.parseNumber(c)) instanceof Error) return e;
                            r *= e
                        }
                        i += r
                    }
            return i
        }, n.SUMSQ = function() {
            var r = t.parseNumberArray(t.flatten(arguments));
            if (r instanceof Error) return r;
            for (var n = 0, e = r.length, a = 0; a < e; a++) n += o.ISNUMBER(r[a]) ? r[a] * r[a] : 0;
            return n
        }, n.SUMX2MY2 = function(r, n) {
            if (r = t.parseNumberArray(t.flatten(r)), n = t.parseNumberArray(t.flatten(n)), t.anyIsError(r, n)) return a.value;
            for (var e = 0, u = 0; u < r.length; u++) e += r[u] * r[u] - n[u] * n[u];
            return e
        }, n.SUMX2PY2 = function(r, n) {
            if (r = t.parseNumberArray(t.flatten(r)), n = t.parseNumberArray(t.flatten(n)), t.anyIsError(r, n)) return a.value;
            var e = 0;
            r = t.parseNumberArray(t.flatten(r)), n = t.parseNumberArray(t.flatten(n));
            for (var u = 0; u < r.length; u++) e += r[u] * r[u] + n[u] * n[u];
            return e
        }, n.SUMXMY2 = function(r, n) {
            if (r = t.parseNumberArray(t.flatten(r)), n = t.parseNumberArray(t.flatten(n)), t.anyIsError(r, n)) return a.value;
            var e = 0;
            r = t.flatten(r), n = t.flatten(n);
            for (var u = 0; u < r.length; u++) e += Math.pow(r[u] - n[u], 2);
            return e
        }, n.TAN = function(r) {
            return r = t.parseNumber(r), r instanceof Error ? r : Math.tan(r)
        }, n.TANH = function(r) {
            if ((r = t.parseNumber(r)) instanceof Error) return r;
            var n = Math.exp(2 * r);
            return (n - 1) / (n + 1)
        }, n.TRUNC = function(r, n) {
            r = t.parseNumber(r), n = t.parseNumber(n);
            var e = t.anyError(r, n);
            return e || (r > 0 ? 1 : -1) * Math.floor(Math.abs(r) * Math.pow(10, n)) / Math.pow(10, n)
        }
    }, function(r, n, e) {
        var t = e(2),
            a = e(4),
            u = e(8),
            o = e(1),
            i = e(5),
            f = e(0),
            s = e(9);
        n.AVEDEV = function() {
            var r = o.flatten(arguments),
                n = r.filter(o.isDefined);
            if (0 === n.length) return f.num;
            var e = o.parseNumberArray(n);
            return e instanceof Error ? e : u.sum(u(e).subtract(u.mean(e)).abs()[0]) / e.length
        }, n.AVERAGE = function() {
            var r = o.flatten(arguments),
                n = r.filter(o.isDefined);
            if (0 === n.length) return f.div0;
            var e = o.anyError.apply(void 0, n);
            if (e) return e;
            for (var t, a = o.numbers(n), u = a.length, i = 0, s = 0, l = 0; l < u; l++) i += a[l], s += 1;
            return t = i / s, isNaN(t) && (t = f.num), t
        }, n.AVERAGEA = function() {
            var r = o.flatten(arguments),
                n = r.filter(o.isDefined);
            if (0 === n.length) return f.div0;
            var e = o.anyError.apply(void 0, n);
            if (e) return e;
            for (var t, a = n, u = a.length, i = 0, s = 0, l = 0; l < u; l++) {
                var c = a[l];
                "number" == typeof c && (i += c), !0 === c && i++, null !== c && s++
            }
            return t = i / s, isNaN(t) && (t = f.num), t
        }, n.AVERAGEIF = function(r, n, e) {
            if (arguments.length <= 1) return f.na;
            e = e || r;
            var t = o.flatten(e),
                a = t.filter(o.isDefined);
            if (e = o.parseNumberArray(a), r = o.flatten(r), e instanceof Error) return e;
            for (var u = 0, s = 0, l = void 0 === n || "*" === n, c = l ? null : i.parse(n + ""), m = 0; m < r.length; m++) {
                var p = r[m];
                if (l) s += e[m], u++;
                else {
                    var v = [i.createToken(p, i.TOKEN_TYPE_LITERAL)].concat(c);
                    i.compute(v) && (s += e[m], u++)
                }
            }
            return s / u
        }, n.AVERAGEIFS = function() {
            for (var r = o.argsToArray(arguments), n = (r.length - 1) / 2, e = o.flatten(r[0]), t = 0, a = 0, u = 0; u < e.length; u++) {
                for (var f = !1, s = 0; s < n; s++) {
                    var l = r[2 * s + 1][u],
                        c = r[2 * s + 2],
                        m = void 0 === c || "*" === c,
                        p = !1;
                    if (m) p = !0;
                    else {
                        var v = i.parse(c + ""),
                            h = [i.createToken(l, i.TOKEN_TYPE_LITERAL)].concat(v);
                        p = i.compute(h)
                    }
                    if (!p) {
                        f = !1;
                        break
                    }
                    f = !0
                }
                f && (a += e[u], t++)
            }
            var g = a / t;
            return isNaN(g) ? 0 : g
        }, n.BETA = {}, n.BETA.DIST = function(r, n, e, t, a, i) {
            return arguments.length < 4 ? f.value : (a = void 0 === a ? 0 : a, i = void 0 === i ? 1 : i, r = o.parseNumber(r), n = o.parseNumber(n), e = o.parseNumber(e), a = o.parseNumber(a), i = o.parseNumber(i), o.anyIsError(r, n, e, a, i) ? f.value : (r = (r - a) / (i - a), t ? u.beta.cdf(r, n, e) : u.beta.pdf(r, n, e)))
        }, n.BETA.INV = function(r, n, e, t, a) {
            return t = void 0 === t ? 0 : t, a = void 0 === a ? 1 : a, r = o.parseNumber(r), n = o.parseNumber(n), e = o.parseNumber(e), t = o.parseNumber(t), a = o.parseNumber(a), o.anyIsError(r, n, e, t, a) ? f.value : u.beta.inv(r, n, e) * (a - t) + t
        }, n.BINOM = {}, n.BINOM.DIST = function(r, n, e, t) {
            return r = o.parseNumber(r), n = o.parseNumber(n), e = o.parseNumber(e), t = o.parseNumber(t), o.anyIsError(r, n, e, t) ? f.value : t ? u.binomial.cdf(r, n, e) : u.binomial.pdf(r, n, e)
        }, n.BINOM.DIST.RANGE = function(r, n, e, a) {
            if (a = void 0 === a ? e : a, r = o.parseNumber(r), n = o.parseNumber(n), e = o.parseNumber(e), a = o.parseNumber(a), o.anyIsError(r, n, e, a)) return f.value;
            for (var u = 0, i = e; i <= a; i++) u += t.COMBIN(r, i) * Math.pow(n, i) * Math.pow(1 - n, r - i);
            return u
        }, n.BINOM.INV = function(r, n, e) {
            if (r = o.parseNumber(r), n = o.parseNumber(n), e = o.parseNumber(e), o.anyIsError(r, n, e)) return f.value;
            for (var t = 0; t <= r;) {
                if (u.binomial.cdf(t, r, n) >= e) return t;
                t++
            }
        }, n.CHISQ = {}, n.CHISQ.DIST = function(r, n, e) {
            return r = o.parseNumber(r), n = o.parseNumber(n), o.anyIsError(r, n) ? f.value : e ? u.chisquare.cdf(r, n) : u.chisquare.pdf(r, n)
        }, n.CHISQ.DIST.RT = function(r, n) {
            return !r | !n ? f.na : r < 1 || n > Math.pow(10, 10) ? f.num : "number" != typeof r || "number" != typeof n ? f.value : 1 - u.chisquare.cdf(r, n)
        }, n.CHISQ.INV = function(r, n) {
            return r = o.parseNumber(r), n = o.parseNumber(n), o.anyIsError(r, n) ? f.value : u.chisquare.inv(r, n)
        }, n.CHISQ.INV.RT = function(r, n) {
            return !r | !n ? f.na : r < 0 || r > 1 || n < 1 || n > Math.pow(10, 10) ? f.num : "number" != typeof r || "number" != typeof n ? f.value : u.chisquare.inv(1 - r, n)
        }, n.CHISQ.TEST = function(r, n) {
            if (2 !== arguments.length) return f.na;
            if (!(r instanceof Array && n instanceof Array)) return f.value;
            if (r.length !== n.length) return f.value;
            if (r[0] && n[0] && r[0].length !== n[0].length) return f.value;
            var e, t, a, u = r.length;
            for (t = 0; t < u; t++) r[t] instanceof Array || (e = r[t], r[t] = [], r[t].push(e)), n[t] instanceof Array || (e = n[t], n[t] = [], n[t].push(e));
            var o = r[0].length,
                i = 1 === o ? u - 1 : (u - 1) * (o - 1),
                s = 0,
                l = Math.PI;
            for (t = 0; t < u; t++)
                for (a = 0; a < o; a++) s += Math.pow(r[t][a] - n[t][a], 2) / n[t][a];
            return Math.round(1e6 * function(r, n) {
                var e = Math.exp(-.5 * r);
                n % 2 == 1 && (e *= Math.sqrt(2 * r / l));
                for (var t = n; t >= 2;) e = e * r / t, t -= 2;
                for (var a = e, u = n; a > 1e-10 * e;) u += 2, a = a * r / u, e += a;
                return 1 - e
            }(s, i)) / 1e6
        }, n.COLUMN = function(r, n) {
            if (2 !== arguments.length) return f.na;
            if (n < 0) return f.num;
            if (!(r instanceof Array) || "number" != typeof n) return f.value;
            if (0 !== r.length) return u.col(r, n)
        }, n.COLUMNS = function(r) {
            return 1 !== arguments.length ? f.na : r instanceof Array ? 0 === r.length ? 0 : u.cols(r) : f.value
        }, n.CONFIDENCE = {}, n.CONFIDENCE.NORM = function(r, n, e) {
            return r = o.parseNumber(r), n = o.parseNumber(n), e = o.parseNumber(e), o.anyIsError(r, n, e) ? f.value : u.normalci(1, r, n, e)[1] - 1
        }, n.CONFIDENCE.T = function(r, n, e) {
            return r = o.parseNumber(r), n = o.parseNumber(n), e = o.parseNumber(e), o.anyIsError(r, n, e) ? f.value : u.tci(1, r, n, e)[1] - 1
        }, n.CORREL = function(r, n) {
            return r = o.parseNumberArray(o.flatten(r)), n = o.parseNumberArray(o.flatten(n)), o.anyIsError(r, n) ? f.value : u.corrcoeff(r, n)
        }, n.COUNT = function() {
            var r = o.flatten(arguments);
            return o.numbers(r).length
        }, n.COUNTA = function() {
            var r = o.flatten(arguments);
            return r.length - n.COUNTBLANK(r)
        }, n.COUNTIN = function(r, n) {
            var e = 0;
            r = o.flatten(r);
            for (var t = 0; t < r.length; t++) r[t] === n && e++;
            return e
        }, n.COUNTBLANK = function() {
            for (var r, n = o.flatten(arguments), e = 0, t = 0; t < n.length; t++) void 0 !== (r = n[t]) && null !== r && "" !== r || e++;
            return e
        }, n.COUNTIF = function(r, n) {
            if (r = o.flatten(r), void 0 === n || "*" === n) return r.length;
            for (var e = 0, t = i.parse(n + ""), a = 0; a < r.length; a++) {
                var u = r[a],
                    f = [i.createToken(u, i.TOKEN_TYPE_LITERAL)].concat(t);
                i.compute(f) && e++
            }
            return e
        }, n.COUNTIFS = function() {
            for (var r = o.argsToArray(arguments), n = new Array(o.flatten(r[0]).length), e = 0; e < n.length; e++) n[e] = !0;
            for (e = 0; e < r.length; e += 2) {
                var t = o.flatten(r[e]),
                    a = r[e + 1];
                if (!(void 0 === a || "*" === a))
                    for (var u = i.parse(a + ""), f = 0; f < t.length; f++) {
                        var s = t[f],
                            l = [i.createToken(s, i.TOKEN_TYPE_LITERAL)].concat(u);
                        n[f] = n[f] && i.compute(l)
                    }
            }
            var c = 0;
            for (e = 0; e < n.length; e++) n[e] && c++;
            return c
        }, n.COUNTUNIQUE = function() {
            return s.UNIQUE.apply(null, o.flatten(arguments)).length
        }, n.COVARIANCE = {}, n.COVARIANCE.P = function(r, n) {
            if (r = o.parseNumberArray(o.flatten(r)), n = o.parseNumberArray(o.flatten(n)), o.anyIsError(r, n)) return f.value;
            for (var e = u.mean(r), t = u.mean(n), a = 0, i = r.length, s = 0; s < i; s++) a += (r[s] - e) * (n[s] - t);
            return a / i
        }, n.COVARIANCE.S = function(r, n) {
            return r = o.parseNumberArray(o.flatten(r)), n = o.parseNumberArray(o.flatten(n)), o.anyIsError(r, n) ? f.value : u.covariance(r, n)
        }, n.DEVSQ = function() {
            var r = o.parseNumberArray(o.flatten(arguments));
            if (r instanceof Error) return r;
            for (var n = u.mean(r), e = 0, t = 0; t < r.length; t++) e += Math.pow(r[t] - n, 2);
            return e
        }, n.EXPON = {}, n.EXPON.DIST = function(r, n, e) {
            return r = o.parseNumber(r), n = o.parseNumber(n), o.anyIsError(r, n) ? f.value : e ? u.exponential.cdf(r, n) : u.exponential.pdf(r, n)
        }, n.F = {}, n.F.DIST = function(r, n, e, t) {
            return r = o.parseNumber(r), n = o.parseNumber(n), e = o.parseNumber(e), o.anyIsError(r, n, e) ? f.value : t ? u.centralF.cdf(r, n, e) : u.centralF.pdf(r, n, e)
        }, n.F.DIST.RT = function(r, n, e) {
            return 3 !== arguments.length ? f.na : r < 0 || n < 1 || e < 1 ? f.num : "number" != typeof r || "number" != typeof n || "number" != typeof e ? f.value : 1 - u.centralF.cdf(r, n, e)
        }, n.F.INV = function(r, n, e) {
            return r = o.parseNumber(r), n = o.parseNumber(n), e = o.parseNumber(e), o.anyIsError(r, n, e) ? f.value : r <= 0 || r > 1 ? f.num : u.centralF.inv(r, n, e)
        }, n.F.INV.RT = function(r, n, e) {
            return 3 !== arguments.length ? f.na : r < 0 || r > 1 || n < 1 || n > Math.pow(10, 10) || e < 1 || e > Math.pow(10, 10) ? f.num : "number" != typeof r || "number" != typeof n || "number" != typeof e ? f.value : u.centralF.inv(1 - r, n, e)
        }, n.F.TEST = function(r, n) {
            if (!r || !n) return f.na;
            if (!(r instanceof Array && n instanceof Array)) return f.na;
            if (r.length < 2 || n.length < 2) return f.div0;
            var e = function(r, n) {
                    for (var e = 0, t = 0; t < r.length; t++) e += Math.pow(r[t] - n, 2);
                    return e
                },
                a = t.SUM(r) / r.length,
                u = t.SUM(n) / n.length;
            return e(r, a) / (r.length - 1) / (e(n, u) / (n.length - 1))
        }, n.FISHER = function(r) {
            return r = o.parseNumber(r), r instanceof Error ? r : Math.log((1 + r) / (1 - r)) / 2
        }, n.FISHERINV = function(r) {
            if ((r = o.parseNumber(r)) instanceof Error) return r;
            var n = Math.exp(2 * r);
            return (n - 1) / (n + 1)
        }, n.FORECAST = function(r, n, e) {
            if (r = o.parseNumber(r), n = o.parseNumberArray(o.flatten(n)), e = o.parseNumberArray(o.flatten(e)), o.anyIsError(r, n, e)) return f.value;
            for (var t = u.mean(e), a = u.mean(n), i = e.length, s = 0, l = 0, c = 0; c < i; c++) s += (e[c] - t) * (n[c] - a), l += Math.pow(e[c] - t, 2);
            var m = s / l;
            return a - m * t + m * r
        }, n.FREQUENCY = function(r, n) {
            if (r = o.parseNumberArray(o.flatten(r)), n = o.parseNumberArray(o.flatten(n)), o.anyIsError(r, n)) return f.value;
            for (var e = r.length, t = n.length, a = [], u = 0; u <= t; u++) {
                a[u] = 0;
                for (var i = 0; i < e; i++) 0 === u ? r[i] <= n[0] && (a[0] += 1) : u < t ? r[i] > n[u - 1] && r[i] <= n[u] && (a[u] += 1) : u === t && r[i] > n[t - 1] && (a[t] += 1)
            }
            return a
        }, n.GAMMA = function(r) {
            return r = o.parseNumber(r), r instanceof Error ? r : 0 === r ? f.num : parseInt(r, 10) === r && r < 0 ? f.num : u.gammafn(r)
        }, n.GAMMA.DIST = function(r, n, e, t) {
            return 4 !== arguments.length ? f.na : r < 0 || n <= 0 || e <= 0 ? f.value : "number" != typeof r || "number" != typeof n || "number" != typeof e ? f.value : t ? u.gamma.cdf(r, n, e, !0) : u.gamma.pdf(r, n, e, !1)
        }, n.GAMMA.INV = function(r, n, e) {
            return 3 !== arguments.length ? f.na : r < 0 || r > 1 || n <= 0 || e <= 0 ? f.num : "number" != typeof r || "number" != typeof n || "number" != typeof e ? f.value : u.gamma.inv(r, n, e)
        }, n.GAMMALN = function(r) {
            return r = o.parseNumber(r), r instanceof Error ? r : u.gammaln(r)
        }, n.GAMMALN.PRECISE = function(r) {
            return 1 !== arguments.length ? f.na : r <= 0 ? f.num : "number" != typeof r ? f.value : u.gammaln(r)
        }, n.GAUSS = function(r) {
            return r = o.parseNumber(r), r instanceof Error ? r : u.normal.cdf(r, 0, 1) - .5
        }, n.GEOMEAN = function() {
            var r = o.parseNumberArray(o.flatten(arguments));
            return r instanceof Error ? r : u.geomean(r)
        }, n.GROWTH = function(r, n, e, t) {
            if ((r = o.parseNumberArray(r)) instanceof Error) return r;
            var a;
            if (void 0 === n)
                for (n = [], a = 1; a <= r.length; a++) n.push(a);
            if (void 0 === e)
                for (e = [], a = 1; a <= r.length; a++) e.push(a);
            if (n = o.parseNumberArray(n), e = o.parseNumberArray(e), o.anyIsError(n, e)) return f.value;
            void 0 === t && (t = !0);
            var u = r.length,
                i = 0,
                s = 0,
                l = 0,
                c = 0;
            for (a = 0; a < u; a++) {
                var m = n[a],
                    p = Math.log(r[a]);
                i += m, s += p, l += m * p, c += m * m
            }
            i /= u, s /= u, l /= u, c /= u;
            var v, h;
            t ? (v = (l - i * s) / (c - i * i), h = s - v * i) : (v = l / c, h = 0);
            var g = [];
            for (a = 0; a < e.length; a++) g.push(Math.exp(h + v * e[a]));
            return g
        }, n.HARMEAN = function() {
            var r = o.parseNumberArray(o.flatten(arguments));
            if (r instanceof Error) return r;
            for (var n = r.length, e = 0, t = 0; t < n; t++) e += 1 / r[t];
            return n / e
        }, n.HYPGEOM = {}, n.HYPGEOM.DIST = function(r, n, e, a, u) {
            function i(r, n, e, a) {
                return t.COMBIN(e, r) * t.COMBIN(a - e, n - r) / t.COMBIN(a, n)
            }
            return r = o.parseNumber(r), n = o.parseNumber(n), e = o.parseNumber(e), a = o.parseNumber(a), o.anyIsError(r, n, e, a) ? f.value : u ? function(r, n, e, t) {
                for (var a = 0, u = 0; u <= r; u++) a += i(u, n, e, t);
                return a
            }(r, n, e, a) : i(r, n, e, a)
        }, n.INTERCEPT = function(r, e) {
            return r = o.parseNumberArray(r), e = o.parseNumberArray(e), o.anyIsError(r, e) ? f.value : r.length !== e.length ? f.na : n.FORECAST(0, r, e)
        }, n.KURT = function() {
            var r = o.parseNumberArray(o.flatten(arguments));
            if (r instanceof Error) return r;
            for (var n = u.mean(r), e = r.length, t = 0, a = 0; a < e; a++) t += Math.pow(r[a] - n, 4);
            return t /= Math.pow(u.stdev(r, !0), 4), e * (e + 1) / ((e - 1) * (e - 2) * (e - 3)) * t - 3 * (e - 1) * (e - 1) / ((e - 2) * (e - 3))
        }, n.LARGE = function(r, n) {
            return r = o.parseNumberArray(o.flatten(r)), n = o.parseNumber(n), o.anyIsError(r, n) ? r : n < 0 || r.length < n ? f.value : r.sort(function(r, n) {
                return n - r
            })[n - 1]
        }, n.LINEST = function(r, n) {
            if (r = o.parseNumberArray(o.flatten(r)), n = o.parseNumberArray(o.flatten(n)), o.anyIsError(r, n)) return f.value;
            for (var e = u.mean(r), t = u.mean(n), a = n.length, i = 0, s = 0, l = 0; l < a; l++) i += (n[l] - t) * (r[l] - e), s += Math.pow(n[l] - t, 2);
            var c = i / s;
            return [c, e - c * t]
        }, n.LOGEST = function(r, e) {
            if (r = o.parseNumberArray(o.flatten(r)), e = o.parseNumberArray(o.flatten(e)), o.anyIsError(r, e)) return f.value;
            for (var t = 0; t < r.length; t++) r[t] = Math.log(r[t]);
            var a = n.LINEST(r, e);
            return a[0] = Math.round(1e6 * Math.exp(a[0])) / 1e6, a[1] = Math.round(1e6 * Math.exp(a[1])) / 1e6, a
        }, n.LOGNORM = {}, n.LOGNORM.DIST = function(r, n, e, t) {
            return r = o.parseNumber(r), n = o.parseNumber(n), e = o.parseNumber(e), o.anyIsError(r, n, e) ? f.value : t ? u.lognormal.cdf(r, n, e) : u.lognormal.pdf(r, n, e)
        }, n.LOGNORM.INV = function(r, n, e) {
            return r = o.parseNumber(r), n = o.parseNumber(n), e = o.parseNumber(e), o.anyIsError(r, n, e) ? f.value : u.lognormal.inv(r, n, e)
        }, n.MAX = function() {
            var r = o.flatten(arguments),
                n = o.anyError.apply(void 0, r);
            if (n) return n;
            var e = o.numbers(r);
            return 0 === e.length ? 0 : Math.max.apply(Math, e)
        }, n.MAXA = function() {
            var r = o.flatten(arguments),
                n = o.anyError.apply(void 0, r);
            if (n) return n;
            var e = o.arrayValuesToNumbers(r);
            return e = e.map(function(r) {
                return void 0 === r || null === r ? 0 : r
            }), 0 === e.length ? 0 : Math.max.apply(Math, e)
        }, n.MEDIAN = function() {
            var r = o.flatten(arguments),
                n = o.anyError.apply(void 0, r);
            if (n) return n;
            var e = o.arrayValuesToNumbers(r),
                t = u.median(e);
            return isNaN(t) && (t = f.num), t
        }, n.MIN = function() {
            var r = o.flatten(arguments),
                n = o.anyError.apply(void 0, r);
            if (n) return n;
            var e = o.numbers(r);
            return 0 === e.length ? 0 : Math.min.apply(Math, e)
        }, n.MINA = function() {
            var r = o.flatten(arguments),
                n = o.anyError.apply(void 0, r);
            if (n) return n;
            var e = o.arrayValuesToNumbers(r);
            return e = e.map(function(r) {
                return void 0 === r || null === r ? 0 : r
            }), 0 === e.length ? 0 : Math.min.apply(Math, e)
        }, n.MODE = {}, n.MODE.MULT = function() {
            var r = o.parseNumberArray(o.flatten(arguments));
            if (r instanceof Error) return r;
            for (var n, e = r.length, t = {}, a = [], u = 0, i = 0; i < e; i++) n = r[i], t[n] = t[n] ? t[n] + 1 : 1, t[n] > u && (u = t[n], a = []), t[n] === u && (a[a.length] = n);
            return a
        }, n.MODE.SNGL = function() {
            var r = o.parseNumberArray(o.flatten(arguments));
            return r instanceof Error ? r : n.MODE.MULT(r).sort(function(r, n) {
                return r - n
            })[0]
        }, n.NEGBINOM = {}, n.NEGBINOM.DIST = function(r, n, e, t) {
            return r = o.parseNumber(r), n = o.parseNumber(n), e = o.parseNumber(e), o.anyIsError(r, n, e) ? f.value : t ? u.negbin.cdf(r, n, e) : u.negbin.pdf(r, n, e)
        }, n.NORM = {}, n.NORM.DIST = function(r, n, e, t) {
            return r = o.parseNumber(r), n = o.parseNumber(n), e = o.parseNumber(e), o.anyIsError(r, n, e) ? f.value : e <= 0 ? f.num : t ? u.normal.cdf(r, n, e) : u.normal.pdf(r, n, e)
        }, n.NORM.INV = function(r, n, e) {
            return r = o.parseNumber(r), n = o.parseNumber(n), e = o.parseNumber(e), o.anyIsError(r, n, e) ? f.value : u.normal.inv(r, n, e)
        }, n.NORM.S = {}, n.NORM.S.DIST = function(r, n) {
            return r = o.parseNumber(r), r instanceof Error ? f.value : n ? u.normal.cdf(r, 0, 1) : u.normal.pdf(r, 0, 1)
        }, n.NORM.S.INV = function(r) {
            return r = o.parseNumber(r), r instanceof Error ? f.value : u.normal.inv(r, 0, 1)
        }, n.PEARSON = function(r, n) {
            if (n = o.parseNumberArray(o.flatten(n)), r = o.parseNumberArray(o.flatten(r)), o.anyIsError(n, r)) return f.value;
            for (var e = u.mean(r), t = u.mean(n), a = r.length, i = 0, s = 0, l = 0, c = 0; c < a; c++) i += (r[c] - e) * (n[c] - t), s += Math.pow(r[c] - e, 2), l += Math.pow(n[c] - t, 2);
            return i / Math.sqrt(s * l)
        }, n.PERCENTILE = {}, n.PERCENTILE.EXC = function(r, n) {
            if (r = o.parseNumberArray(o.flatten(r)), n = o.parseNumber(n), o.anyIsError(r, n)) return f.value;
            r = r.sort(function(r, n) {
                return r - n
            });
            var e = r.length;
            if (n < 1 / (e + 1) || n > 1 - 1 / (e + 1)) return f.num;
            var t = n * (e + 1) - 1,
                a = Math.floor(t);
            return o.cleanFloat(t === a ? r[t] : r[a] + (t - a) * (r[a + 1] - r[a]))
        }, n.PERCENTILE.INC = function(r, n) {
            if (r = o.parseNumberArray(o.flatten(r)), n = o.parseNumber(n), o.anyIsError(r, n)) return f.value;
            r = r.sort(function(r, n) {
                return r - n
            });
            var e = r.length,
                t = n * (e - 1),
                a = Math.floor(t);
            return o.cleanFloat(t === a ? r[t] : r[a] + (t - a) * (r[a + 1] - r[a]))
        }, n.PERCENTRANK = {}, n.PERCENTRANK.EXC = function(r, n, e) {
            if (e = void 0 === e ? 3 : e, r = o.parseNumberArray(o.flatten(r)), n = o.parseNumber(n), e = o.parseNumber(e), o.anyIsError(r, n, e)) return f.value;
            r = r.sort(function(r, n) {
                return r - n
            });
            for (var t = s.UNIQUE.apply(null, r), a = r.length, u = t.length, i = Math.pow(10, e), l = 0, c = !1, m = 0; !c && m < u;) n === t[m] ? (l = (r.indexOf(t[m]) + 1) / (a + 1), c = !0) : n >= t[m] && (n < t[m + 1] || m === u - 1) && (l = (r.indexOf(t[m]) + 1 + (n - t[m]) / (t[m + 1] - t[m])) / (a + 1), c = !0), m++;
            return Math.floor(l * i) / i
        }, n.PERCENTRANK.INC = function(r, n, e) {
            if (e = void 0 === e ? 3 : e, r = o.parseNumberArray(o.flatten(r)), n = o.parseNumber(n), e = o.parseNumber(e), o.anyIsError(r, n, e)) return f.value;
            r = r.sort(function(r, n) {
                return r - n
            });
            for (var t = s.UNIQUE.apply(null, r), a = r.length, u = t.length, i = Math.pow(10, e), l = 0, c = !1, m = 0; !c && m < u;) n === t[m] ? (l = r.indexOf(t[m]) / (a - 1), c = !0) : n >= t[m] && (n < t[m + 1] || m === u - 1) && (l = (r.indexOf(t[m]) + (n - t[m]) / (t[m + 1] - t[m])) / (a - 1), c = !0), m++;
            return Math.floor(l * i) / i
        }, n.PERMUT = function(r, n) {
            return r = o.parseNumber(r), n = o.parseNumber(n), o.anyIsError(r, n) ? f.value : t.FACT(r) / t.FACT(r - n)
        }, n.PERMUTATIONA = function(r, n) {
            return r = o.parseNumber(r), n = o.parseNumber(n), o.anyIsError(r, n) ? f.value : Math.pow(r, n)
        }, n.PHI = function(r) {
            return r = o.parseNumber(r), r instanceof Error ? f.value : Math.exp(-.5 * r * r) / 2.5066282746310002
        }, n.POISSON = {}, n.POISSON.DIST = function(r, n, e) {
            return r = o.parseNumber(r), n = o.parseNumber(n), o.anyIsError(r, n) ? f.value : e ? u.poisson.cdf(r, n) : u.poisson.pdf(r, n)
        }, n.PROB = function(r, n, e, t) {
            if (void 0 === e) return 0;
            if (t = void 0 === t ? e : t, r = o.parseNumberArray(o.flatten(r)), n = o.parseNumberArray(o.flatten(n)), e = o.parseNumber(e), t = o.parseNumber(t), o.anyIsError(r, n, e, t)) return f.value;
            if (e === t) return r.indexOf(e) >= 0 ? n[r.indexOf(e)] : 0;
            for (var a = r.sort(function(r, n) {
                    return r - n
                }), u = a.length, i = 0, s = 0; s < u; s++) a[s] >= e && a[s] <= t && (i += n[r.indexOf(a[s])]);
            return i
        }, n.QUARTILE = {}, n.QUARTILE.EXC = function(r, e) {
            if (r = o.parseNumberArray(o.flatten(r)), e = o.parseNumber(e), o.anyIsError(r, e)) return f.value;
            switch (e) {
                case 1:
                    return n.PERCENTILE.EXC(r, .25);
                case 2:
                    return n.PERCENTILE.EXC(r, .5);
                case 3:
                    return n.PERCENTILE.EXC(r, .75);
                default:
                    return f.num
            }
        }, n.QUARTILE.INC = function(r, e) {
            if (r = o.parseNumberArray(o.flatten(r)), e = o.parseNumber(e), o.anyIsError(r, e)) return f.value;
            switch (e) {
                case 1:
                    return n.PERCENTILE.INC(r, .25);
                case 2:
                    return n.PERCENTILE.INC(r, .5);
                case 3:
                    return n.PERCENTILE.INC(r, .75);
                default:
                    return f.num
            }
        }, n.RANK = {}, n.RANK.AVG = function(r, n, e) {
            if (r = o.parseNumber(r), n = o.parseNumberArray(o.flatten(n)), o.anyIsError(r, n)) return f.value;
            n = o.flatten(n), e = e || !1;
            var t = e ? function(r, n) {
                return r - n
            } : function(r, n) {
                return n - r
            };
            n = n.sort(t);
            for (var a = n.length, u = 0, i = 0; i < a; i++) n[i] === r && u++;
            return u > 1 ? (2 * n.indexOf(r) + u + 1) / 2 : n.indexOf(r) + 1
        }, n.RANK.EQ = function(r, n, e) {
            if (r = o.parseNumber(r), n = o.parseNumberArray(o.flatten(n)), o.anyIsError(r, n)) return f.value;
            e = e || !1;
            var t = e ? function(r, n) {
                return r - n
            } : function(r, n) {
                return n - r
            };
            return n = n.sort(t), n.indexOf(r) + 1
        }, n.ROW = function(r, n) {
            if (2 !== arguments.length) return f.na;
            if (n < 0) return f.num;
            if (!(r instanceof Array) || "number" != typeof n) return f.value;
            if (0 !== r.length) return u.row(r, n)
        }, n.ROWS = function(r) {
            return 1 !== arguments.length ? f.na : r instanceof Array ? 0 === r.length ? 0 : u.rows(r) : f.value
        }, n.RSQ = function(r, e) {
            return r = o.parseNumberArray(o.flatten(r)), e = o.parseNumberArray(o.flatten(e)), o.anyIsError(r, e) ? f.value : Math.pow(n.PEARSON(r, e), 2)
        }, n.SKEW = function() {
            var r = o.parseNumberArray(o.flatten(arguments));
            if (r instanceof Error) return r;
            for (var n = u.mean(r), e = r.length, t = 0, a = 0; a < e; a++) t += Math.pow(r[a] - n, 3);
            return e * t / ((e - 1) * (e - 2) * Math.pow(u.stdev(r, !0), 3))
        }, n.SKEW.P = function() {
            var r = o.parseNumberArray(o.flatten(arguments));
            if (r instanceof Error) return r;
            for (var n = u.mean(r), e = r.length, t = 0, a = 0, i = 0; i < e; i++) a += Math.pow(r[i] - n, 3), t += Math.pow(r[i] - n, 2);
            return a /= e, t /= e, a / Math.pow(t, 1.5)
        }, n.SLOPE = function(r, n) {
            if (r = o.parseNumberArray(o.flatten(r)), n = o.parseNumberArray(o.flatten(n)), o.anyIsError(r, n)) return f.value;
            for (var e = u.mean(n), t = u.mean(r), a = n.length, i = 0, s = 0, l = 0; l < a; l++) i += (n[l] - e) * (r[l] - t), s += Math.pow(n[l] - e, 2);
            return i / s
        }, n.SMALL = function(r, n) {
            return r = o.parseNumberArray(o.flatten(r)), n = o.parseNumber(n), o.anyIsError(r, n) ? r : r.sort(function(r, n) {
                return r - n
            })[n - 1]
        }, n.STANDARDIZE = function(r, n, e) {
            return r = o.parseNumber(r), n = o.parseNumber(n), e = o.parseNumber(e), o.anyIsError(r, n, e) ? f.value : (r - n) / e
        }, n.STDEV = {}, n.STDEV.P = function() {
            var r = n.VAR.P.apply(this, arguments),
                e = Math.sqrt(r);
            return isNaN(e) && (e = f.num), e
        }, n.STDEV.S = function() {
            var r = n.VAR.S.apply(this, arguments);
            return Math.sqrt(r)
        }, n.STDEVA = function() {
            var r = n.VARA.apply(this, arguments);
            return Math.sqrt(r)
        }, n.STDEVPA = function() {
            var r = n.VARPA.apply(this, arguments),
                e = Math.sqrt(r);
            return isNaN(e) && (e = f.num), e
        }, n.STEYX = function(r, n) {
            if (r = o.parseNumberArray(o.flatten(r)), n = o.parseNumberArray(o.flatten(n)), o.anyIsError(r, n)) return f.value;
            for (var e = u.mean(n), t = u.mean(r), a = n.length, i = 0, s = 0, l = 0, c = 0; c < a; c++) i += Math.pow(r[c] - t, 2), s += (n[c] - e) * (r[c] - t), l += Math.pow(n[c] - e, 2);
            return Math.sqrt((i - s * s / l) / (a - 2))
        }, n.TRANSPOSE = function(r) {
            return r ? u.transpose(r) : f.na
        }, n.T = a.T, n.T.DIST = function(r, e, t) {
            return 1 !== t && 2 !== t ? f.num : 1 === t ? n.T.DIST.RT(r, e) : n.T.DIST["2T"](r, e)
        }, n.T.DIST["2T"] = function(r, n) {
            return 2 !== arguments.length ? f.na : r < 0 || n < 1 ? f.num : "number" != typeof r || "number" != typeof n ? f.value : 2 * (1 - u.studentt.cdf(r, n))
        }, n.T.DIST.RT = function(r, n) {
            return 2 !== arguments.length ? f.na : r < 0 || n < 1 ? f.num : "number" != typeof r || "number" != typeof n ? f.value : 1 - u.studentt.cdf(r, n)
        }, n.T.INV = function(r, n) {
            return r = o.parseNumber(r), n = o.parseNumber(n), o.anyIsError(r, n) ? f.value : u.studentt.inv(r, n)
        }, n.T.INV["2T"] = function(r, n) {
            return r = o.parseNumber(r), n = o.parseNumber(n), r <= 0 || r > 1 || n < 1 ? f.num : o.anyIsError(r, n) ? f.value : Math.abs(u.studentt.inv(r / 2, n))
        }, n.T.TEST = function(r, e) {
            if (r = o.parseNumberArray(o.flatten(r)), e = o.parseNumberArray(o.flatten(e)), o.anyIsError(r, e)) return f.value;
            var t, a = u.mean(r),
                i = u.mean(e),
                s = 0,
                l = 0;
            for (t = 0; t < r.length; t++) s += Math.pow(r[t] - a, 2);
            for (t = 0; t < e.length; t++) l += Math.pow(e[t] - i, 2);
            s /= r.length - 1, l /= e.length - 1;
            var c = Math.abs(a - i) / Math.sqrt(s / r.length + l / e.length);
            return n.T.DIST["2T"](c, r.length + e.length - 2)
        }, n.TREND = function(r, e, t) {
            if (r = o.parseNumberArray(o.flatten(r)), e = o.parseNumberArray(o.flatten(e)), t = o.parseNumberArray(o.flatten(t)), o.anyIsError(r, e, t)) return f.value;
            var a = n.LINEST(r, e),
                u = a[0],
                i = a[1],
                s = [];
            return t.forEach(function(r) {
                s.push(u * r + i)
            }), s
        }, n.TRIMMEAN = function(r, n) {
            if (r = o.parseNumberArray(o.flatten(r)), n = o.parseNumber(n), o.anyIsError(r, n)) return f.value;
            var e = t.FLOOR(r.length * n, 2) / 2;
            return u.mean(o.initial(o.rest(r.sort(function(r, n) {
                return r - n
            }), e), e))
        }, n.VAR = {}, n.VAR.P = function() {
            for (var r, e = o.numbers(o.flatten(arguments)), t = e.length, a = 0, u = n.AVERAGE(e), i = 0; i < t; i++) a += Math.pow(e[i] - u, 2);
            return r = a / t, isNaN(r) && (r = f.num), r
        }, n.VAR.S = function() {
            for (var r = o.numbers(o.flatten(arguments)), e = r.length, t = 0, a = n.AVERAGE(r), u = 0; u < e; u++) t += Math.pow(r[u] - a, 2);
            return t / (e - 1)
        }, n.VARA = function() {
            for (var r = o.flatten(arguments), e = r.length, t = 0, a = 0, u = n.AVERAGEA(r), i = 0; i < e; i++) {
                var f = r[i];
                t += "number" == typeof f ? Math.pow(f - u, 2) : !0 === f ? Math.pow(1 - u, 2) : Math.pow(0 - u, 2), null !== f && a++
            }
            return t / (a - 1)
        }, n.VARPA = function() {
            for (var r, e = o.flatten(arguments), t = e.length, a = 0, u = 0, i = n.AVERAGEA(e), s = 0; s < t; s++) {
                var l = e[s];
                a += "number" == typeof l ? Math.pow(l - i, 2) : !0 === l ? Math.pow(1 - i, 2) : Math.pow(0 - i, 2), null !== l && u++
            }
            return r = a / u, isNaN(r) && (r = f.num), r
        }, n.WEIBULL = {}, n.WEIBULL.DIST = function(r, n, e, t) {
            return r = o.parseNumber(r), n = o.parseNumber(n), e = o.parseNumber(e), o.anyIsError(r, n, e) ? f.value : t ? 1 - Math.exp(-Math.pow(r / e, n)) : Math.pow(r, n - 1) * Math.exp(-Math.pow(r / e, n)) * n / Math.pow(e, n)
        }, n.Z = {}, n.Z.TEST = function(r, e, t) {
            if (r = o.parseNumberArray(o.flatten(r)), e = o.parseNumber(e), o.anyIsError(r, e)) return f.value;
            t = t || n.STDEV.S(r);
            var a = r.length;
            return 1 - n.NORM.S.DIST((n.AVERAGE(r) - e) / (t / Math.sqrt(a)), !0)
        }
    }, function(r, n, e) {
        var t = e(1),
            a = e(0);
        n.ASC = function() {
            throw new Error("ASC is not implemented")
        }, n.BAHTTEXT = function() {
            throw new Error("BAHTTEXT is not implemented")
        }, n.CHAR = function(r) {
            return r = t.parseNumber(r), 0 === r ? a.value : r instanceof Error ? r : String.fromCharCode(r)
        }, n.CLEAN = function(r) {
            if (t.anyIsError(r)) return r;
            r = r || "";
            var n = /[\0-\x1F]/g;
            return r.replace(n, "")
        }, n.CODE = function(r) {
            if (t.anyIsError(r)) return r;
            r = r || "";
            var n = r.charCodeAt(0);
            return isNaN(n) && (n = a.value), n
        }, n.CONCATENATE = function() {
            var r = t.flatten(arguments),
                n = t.anyError.apply(void 0, r);
            if (n) return n;
            for (var e = 0;
                (e = r.indexOf(!0)) > -1;) r[e] = "TRUE";
            for (var a = 0;
                (a = r.indexOf(!1)) > -1;) r[a] = "FALSE";
            return r.join("")
        }, n.CONCAT = n.CONCATENATE, n.DBCS = function() {
            throw new Error("DBCS is not implemented")
        }, n.DOLLAR = function() {
            throw new Error("DOLLAR is not implemented")
        }, n.EXACT = function(r, n) {
            if (2 !== arguments.length) return a.na;
            var e = t.anyError(r, n);
            return e || (r = t.parseString(r), n = t.parseString(n), r === n)
        }, n.FIND = function(r, n, e) {
            if (arguments.length < 2) return a.na;
            r = t.parseString(r), n = t.parseString(n), e = void 0 === e ? 0 : e;
            var u = n.indexOf(r, e - 1);
            return -1 === u ? a.value : u + 1
        }, n.FIXED = function() {
            throw new Error("FIXED is not implemented")
        }, n.HTML2TEXT = function(r) {
            if (t.anyIsError(r)) return r;
            var n = "";
            return r && (r instanceof Array ? r.forEach(function(r) {
                "" !== n && (n += "\n"), n += r.replace(/<(?:.|\n)*?>/gm, "")
            }) : n = r.replace(/<(?:.|\n)*?>/gm, "")), n
        }, n.LEFT = function(r, n) {
            var e = t.anyError(r, n);
            return e || (r = t.parseString(r), n = void 0 === n ? 1 : n, n = t.parseNumber(n), n instanceof Error || "string" != typeof r ? a.value : r.substring(0, n))
        }, n.LEN = function(r) {
            return 0 === arguments.length ? a.error : r instanceof Error ? r : Array.isArray(r) ? a.value : t.parseString(r).length
        }, n.LOWER = function(r) {
            return 1 !== arguments.length ? a.value : (r = t.parseString(r), t.anyIsError(r) ? r : r.toLowerCase())
        }, n.MID = function(r, n, e) {
            if (void 0 === n || null === n) return a.value;
            if (n = t.parseNumber(n), e = t.parseNumber(e), t.anyIsError(n, e) || "string" != typeof r) return e;
            var u = n - 1,
                o = u + e;
            return r.substring(u, o)
        }, n.NUMBERVALUE = function(r, n, e) {
            return n = void 0 === n ? "." : n, e = void 0 === e ? "," : e, Number(r.replace(n, ".").replace(e, ""))
        }, n.PRONETIC = function() {
            throw new Error("PRONETIC is not implemented")
        }, n.PROPER = function(r) {
            return t.anyIsError(r) ? r : isNaN(r) && "number" == typeof r ? a.value : (r = t.parseString(r), r.replace(/\w\S*/g, function(r) {
                return r.charAt(0).toUpperCase() + r.substr(1).toLowerCase()
            }))
        }, n.REGEXEXTRACT = function(r, n) {
            if (arguments.length < 2) return a.na;
            var e = r.match(new RegExp(n));
            return e ? e[e.length > 1 ? e.length - 1 : 0] : null
        }, n.REGEXMATCH = function(r, n, e) {
            if (arguments.length < 2) return a.na;
            var t = r.match(new RegExp(n));
            return e ? t : !!t
        }, n.REGEXREPLACE = function(r, n, e) {
            return arguments.length < 3 ? a.na : r.replace(new RegExp(n), e)
        }, n.REPLACE = function(r, n, e, u) {
            return n = t.parseNumber(n), e = t.parseNumber(e), t.anyIsError(n, e) || "string" != typeof r || "string" != typeof u ? a.value : r.substr(0, n - 1) + u + r.substr(n - 1 + e)
        }, n.REPT = function(r, n) {
            var e = t.anyError(r, n);
            return e || (r = t.parseString(r), n = t.parseNumber(n), n instanceof Error ? n : new Array(n + 1).join(r))
        }, n.RIGHT = function(r, n) {
            var e = t.anyError(r, n);
            return e || (r = t.parseString(r), n = void 0 === n ? 1 : n, n = t.parseNumber(n), n instanceof Error ? n : r.substring(r.length - n))
        }, n.SEARCH = function(r, n, e) {
            var t;
            return "string" != typeof r || "string" != typeof n ? a.value : (e = void 0 === e ? 0 : e, t = n.toLowerCase().indexOf(r.toLowerCase(), e - 1) + 1, 0 === t ? a.value : t)
        }, n.SPLIT = function(r, n) {
            return r.split(n)
        }, n.SUBSTITUTE = function(r, n, e, t) {
            if (arguments.length < 3) return a.na;
            if (r && n) {
                if (void 0 === t) return r.split(n).join(e);
                if (t = Math.floor(Number(t)), Number.isNaN(t) || t <= 0) return a.value;
                for (var u = 0, o = 0; u > -1 && r.indexOf(n, u) > -1;)
                    if (u = r.indexOf(n, u + 1), o++, u > -1 && o === t) return r.substring(0, u) + e + r.substring(u + n.length);
                return r
            }
            return r
        }, n.T = function(r) {
            return r instanceof Error ? r : "string" == typeof r ? r : ""
        }, n.TEXT = function() {
            throw new Error("TEXT is not implemented")
        }, n.TRIM = function(r) {
            return r = t.parseString(r), r instanceof Error ? r : r.replace(/\s+/g, " ").trim()
        }, n.UNICHAR = n.CHAR, n.UNICODE = n.CODE, n.UPPER = function(r) {
            return r = t.parseString(r), r instanceof Error ? r : r.toUpperCase()
        }, n.VALUE = function(r) {
            var n = t.anyError(r);
            if (n) return n;
            if ("string" != typeof r) return a.value;
            var e = /(%)$/.test(r) || /^(%)/.test(r);
            if (r = r.replace(/^[^0-9-]{0,3}/, ""), r = r.replace(/[^0-9]{0,3}$/, ""), "" === (r = r.replace(/[\ ,]/g, ""))) return a.value;
            var u = Number(r);
            return isNaN(u) ? a.value : (u = u || 0, e && (u *= .01), u)
        }
    }, function(r, n) {
        function e(r, n) {
            if (-1 === m.indexOf(n)) throw new Error("Unsupported token type: " + n);
            return {
                value: r,
                type: n
            }
        }

        function t(r) {
            return "string" != typeof r ? r : (/^\d+(\.\d+)?$/.test(r) && (r = -1 === r.indexOf(".") ? parseInt(r, 10) : parseFloat(r)), r)
        }

        function a(r) {
            for (var n = r.length, e = [], t = 0, a = "", u = ""; t < n;) {
                var o = r.charAt(t);
                switch (o) {
                    case ">":
                    case "<":
                    case "=":
                        u += o, a.length > 0 && (e.push(a), a = "");
                        break;
                    default:
                        u.length > 0 && (e.push(u), u = ""), a += o
                }
                t++
            }
            return a.length > 0 && e.push(a), u.length > 0 && e.push(u), e
        }

        function u(r) {
            for (var n = "", a = [], u = 0; u < r.length; u++) {
                var o = r[u];
                0 === u && s.indexOf(o) >= 0 ? a.push(e(o, l)) : n += o
            }
            return n.length > 0 && a.push(e(t(n), c)), a.length > 0 && a[0].type !== l && a.unshift(e(f, l)), a
        }

        function o(r) {
            for (var n, e = [], t = 0; t < r.length; t++) {
                var a = r[t];
                switch (a.type) {
                    case l:
                        n = a.value;
                        break;
                    case c:
                        e.push(a.value)
                }
            }
            return i(e, n)
        }

        function i(r, n) {
            var e = !1;
            switch (n) {
                case ">":
                    e = r[0] > r[1];
                    break;
                case ">=":
                    e = r[0] >= r[1];
                    break;
                case "<":
                    e = r[0] < r[1];
                    break;
                case "<=":
                    e = r[0] <= r[1];
                    break;
                case "=":
                    e = r[0] == r[1];
                    break;
                case "<>":
                    e = r[0] != r[1]
            }
            return e
        }
        var f = "=",
            s = [">", ">=", "<", "<=", "=", "<>"],
            l = "operator",
            c = "literal",
            m = [l, c];
        n.TOKEN_TYPE_OPERATOR = l, n.TOKEN_TYPE_LITERAL = c, n.parse = function(r) {
            return u(a(r))
        }, n.createToken = e, n.compute = o
    }, function(r, n, e) {
        var t = e(0);
        n.CELL = function() {
            throw new Error("CELL is not implemented")
        }, n.ERROR = {}, n.ERROR.TYPE = function(r) {
            switch (r) {
                case t.nil:
                    return 1;
                case t.div0:
                    return 2;
                case t.value:
                    return 3;
                case t.ref:
                    return 4;
                case t.name:
                    return 5;
                case t.num:
                    return 6;
                case t.na:
                    return 7;
                case t.data:
                    return 8
            }
            return t.na
        }, n.INFO = function() {
            throw new Error("INFO is not implemented")
        }, n.ISBLANK = function(r) {
            return null === r
        }, n.ISBINARY = function(r) {
            return /^[01]{1,10}$/.test(r)
        }, n.ISERR = function(r) {
            return [t.value, t.ref, t.div0, t.num, t.name, t.nil].indexOf(r) >= 0 || "number" == typeof r && (isNaN(r) || !isFinite(r))
        }, n.ISERROR = function(r) {
            return n.ISERR(r) || r === t.na
        }, n.ISEVEN = function(r) {
            return !(1 & Math.floor(Math.abs(r)))
        }, n.ISFORMULA = function() {
            throw new Error("ISFORMULA is not implemented")
        }, n.ISLOGICAL = function(r) {
            return !0 === r || !1 === r
        }, n.ISNA = function(r) {
            return r === t.na
        }, n.ISNONTEXT = function(r) {
            return "string" != typeof r
        }, n.ISNUMBER = function(r) {
            return "number" == typeof r && !isNaN(r) && isFinite(r)
        }, n.ISODD = function(r) {
            return !!(1 & Math.floor(Math.abs(r)))
        }, n.ISREF = function() {
            throw new Error("ISREF is not implemented")
        }, n.ISTEXT = function(r) {
            return "string" == typeof r
        }, n.N = function(r) {
            return this.ISNUMBER(r) ? r : r instanceof Date ? r.getTime() : !0 === r ? 1 : !1 === r ? 0 : this.ISERROR(r) ? r : 0
        }, n.NA = function() {
            return t.na
        }, n.SHEET = function() {
            throw new Error("SHEET is not implemented")
        }, n.SHEETS = function() {
            throw new Error("SHEETS is not implemented")
        }, n.TYPE = function(r) {
            return this.ISNUMBER(r) ? 1 : this.ISTEXT(r) ? 2 : this.ISLOGICAL(r) ? 4 : this.ISERROR(r) ? 16 : Array.isArray(r) ? 64 : void 0
        }
    }, function(r, n, e) {
        function t(r) {
            var n = new Date(r);
            return n.setHours(0, 0, 0, 0), n
        }

        function a(r) {
            return 1 === new Date(r, 1, 29).getMonth()
        }

        function u(r, n) {
            return Math.ceil((n - r) / 1e3 / 60 / 60 / 24)
        }

        function o(r) {
            var n = r > -22038912e5 ? 2 : 1;
            return Math.ceil((r - s) / 864e5) + n
        }
        var i = e(0),
            f = e(1),
            s = new Date(Date.UTC(1900, 0, 1)),
            l = [void 0, 0, 1, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, 1, 2, 3, 4, 5, 6, 0],
            c = [
                [],
                [1, 2, 3, 4, 5, 6, 7],
                [7, 1, 2, 3, 4, 5, 6],
                [6, 0, 1, 2, 3, 4, 5],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [7, 1, 2, 3, 4, 5, 6],
                [6, 7, 1, 2, 3, 4, 5],
                [5, 6, 7, 1, 2, 3, 4],
                [4, 5, 6, 7, 1, 2, 3],
                [3, 4, 5, 6, 7, 1, 2],
                [2, 3, 4, 5, 6, 7, 1],
                [1, 2, 3, 4, 5, 6, 7]
            ],
            m = [
                [],
                [6, 0],
                [0, 1],
                [1, 2],
                [2, 3],
                [3, 4],
                [4, 5],
                [5, 6], void 0, void 0, void 0, [0, 0],
                [1, 1],
                [2, 2],
                [3, 3],
                [4, 4],
                [5, 5],
                [6, 6]
            ];
        n.DATE = function(r, n, e) {
            var t;
            return r = f.parseNumber(r), n = f.parseNumber(n), e = f.parseNumber(e), f.anyIsError(r, n, e) ? t = i.value : (t = new Date(r, n - 1, e), t.getFullYear() < 0 && (t = i.num)), t
        }, n.DATEDIF = function(r, e, t) {
            t = t.toUpperCase(), r = f.parseDate(r), e = f.parseDate(e);
            var a, u = r.getFullYear(),
                o = r.getMonth(),
                i = r.getDate(),
                s = e.getFullYear(),
                l = e.getMonth(),
                c = e.getDate();
            switch (t) {
                case "Y":
                    a = Math.floor(n.YEARFRAC(r, e));
                    break;
                case "D":
                    a = n.DAYS(e, r);
                    break;
                case "M":
                    a = l - o + 12 * (s - u), c < i && a--;
                    break;
                case "MD":
                    i <= c ? a = c - i : (0 === l ? (r.setFullYear(s - 1), r.setMonth(12)) : (r.setFullYear(s), r.setMonth(l - 1)), a = n.DAYS(e, r));
                    break;
                case "YM":
                    a = l - o + 12 * (s - u), c < i && a--, a %= 12;
                    break;
                case "YD":
                    l > o || l === o && c < i ? r.setFullYear(s) : r.setFullYear(s - 1), a = n.DAYS(e, r)
            }
            return a
        }, n.DATEVALUE = function(r) {
            if ("string" != typeof r) return i.value;
            var n = Date.parse(r);
            return isNaN(n) ? i.value : new Date(r)
        }, n.DAY = function(r) {
            var n = f.parseDate(r);
            return n instanceof Error ? n : n.getDate()
        }, n.DAYS = function(r, n) {
            return r = f.parseDate(r), n = f.parseDate(n), r instanceof Error ? r : n instanceof Error ? n : o(t(r)) - o(t(n))
        }, n.DAYS360 = function(r, n, e) {
            if (e = f.parseBool(e || "false"), r = f.parseDate(r), n = f.parseDate(n), r instanceof Error) return r;
            if (n instanceof Error) return n;
            if (e instanceof Error) return e;
            var t, a, u = r.getMonth(),
                o = n.getMonth();
            if (e) t = 31 === r.getDate() ? 30 : r.getDate(), a = 31 === n.getDate() ? 30 : n.getDate();
            else {
                var i = new Date(r.getFullYear(), u + 1, 0).getDate(),
                    s = new Date(n.getFullYear(), o + 1, 0).getDate();
                t = r.getDate() === i ? 30 : r.getDate(), n.getDate() === s ? t < 30 ? (o++, a = 1) : a = 30 : a = n.getDate()
            }
            return 360 * (n.getFullYear() - r.getFullYear()) + 30 * (o - u) + (a - t)
        }, n.EDATE = function(r, n) {
            return (r = f.parseDate(r)) instanceof Error ? r : isNaN(n) ? i.value : (n = parseInt(n, 10), r.setMonth(r.getMonth() + n), r)
        }, n.EOMONTH = function(r, n) {
            return (r = f.parseDate(r)) instanceof Error ? r : isNaN(n) ? i.value : (n = parseInt(n, 10), new Date(r.getFullYear(), r.getMonth() + n + 1, 0))
        }, n.HOUR = function(r) {
            return r = f.parseDate(r), r instanceof Error ? r : r.getHours()
        }, n.INTERVAL = function(r) {
            if ("number" != typeof r && "string" != typeof r) return i.value;
            r = parseInt(r, 10);
            var n = Math.floor(r / 94608e4);
            r %= 94608e4;
            var e = Math.floor(r / 2592e3);
            r %= 2592e3;
            var t = Math.floor(r / 86400);
            r %= 86400;
            var a = Math.floor(r / 3600);
            r %= 3600;
            var u = Math.floor(r / 60);
            r %= 60;
            var o = r;
            return n = n > 0 ? n + "Y" : "", e = e > 0 ? e + "M" : "", t = t > 0 ? t + "D" : "", a = a > 0 ? a + "H" : "", u = u > 0 ? u + "M" : "", o = o > 0 ? o + "S" : "", "P" + n + e + t + "T" + a + u + o
        }, n.ISOWEEKNUM = function(r) {
            if ((r = f.parseDate(r)) instanceof Error) return r;
            r = t(r), r.setDate(r.getDate() + 4 - (r.getDay() || 7));
            var n = new Date(r.getFullYear(), 0, 1);
            return Math.ceil(((r - n) / 864e5 + 1) / 7)
        }, n.MINUTE = function(r) {
            return r = f.parseDate(r), r instanceof Error ? r : r.getMinutes()
        }, n.MONTH = function(r) {
            return r = f.parseDate(r), r instanceof Error ? r : r.getMonth() + 1
        }, n.NETWORKDAYS = function(r, n, e) {
            return this.NETWORKDAYS.INTL(r, n, 1, e)
        }, n.NETWORKDAYS.INTL = function(r, n, e, t) {
            if ((r = f.parseDate(r)) instanceof Error) return r;
            if ((n = f.parseDate(n)) instanceof Error) return n;
            var a = !1,
                u = [],
                o = [1, 2, 3, 4, 5, 6, 0],
                s = new RegExp("^[0|1]{7}$");
            if (void 0 === e) e = m[1];
            else if ("string" == typeof e && s.test(e))
                for (a = !0, e = e.split(""), l = 0; l < e.length; l++) "1" === e[l] && u.push(o[l]);
            else e = m[e];
            if (!(e instanceof Array)) return i.value;
            void 0 === t ? t = [] : t instanceof Array || (t = [t]);
            for (var l = 0; l < t.length; l++) {
                var c = f.parseDate(t[l]);
                if (c instanceof Error) return c;
                t[l] = c
            }
            var p = Math.round((n - r) / 864e5) + 1,
                v = p,
                h = r;
            for (l = 0; l < p; l++) {
                for (var g = (new Date).getTimezoneOffset() > 0 ? h.getUTCDay() : h.getDay(), E = a ? u.includes(g) : g === e[0] || g === e[1], N = 0; N < t.length; N++) {
                    var I = t[N];
                    if (I.getDate() === h.getDate() && I.getMonth() === h.getMonth() && I.getFullYear() === h.getFullYear()) {
                        E = !0;
                        break
                    }
                }
                E && v--, h.setDate(h.getDate() + 1)
            }
            return v
        }, n.NOW = function() {
            return new Date
        }, n.SECOND = function(r) {
            return r = f.parseDate(r), r instanceof Error ? r : r.getSeconds()
        }, n.TIME = function(r, n, e) {
            return r = f.parseNumber(r), n = f.parseNumber(n), e = f.parseNumber(e), f.anyIsError(r, n, e) ? i.value : r < 0 || n < 0 || e < 0 ? i.num : (3600 * r + 60 * n + e) / 86400
        }, n.TIMEVALUE = function(r) {
            return r = f.parseDate(r), r instanceof Error ? r : (3600 * r.getHours() + 60 * r.getMinutes() + r.getSeconds()) / 86400
        }, n.TODAY = function() {
            return t(new Date)
        }, n.WEEKDAY = function(r, n) {
            if ((r = f.parseDate(r)) instanceof Error) return r;
            void 0 === n && (n = 1);
            var e = r.getDay();
            return c[n][e]
        }, n.WEEKNUM = function(r, n) {
            if ((r = f.parseDate(r)) instanceof Error) return r;
            if (void 0 === n && (n = 1), 21 === n) return this.ISOWEEKNUM(r);
            var e = l[n],
                t = new Date(r.getFullYear(), 0, 1),
                a = t.getDay() < e ? 1 : 0;
            return t -= 24 * Math.abs(t.getDay() - e) * 60 * 60 * 1e3, Math.floor((r - t) / 864e5 / 7 + 1) + a
        }, n.WORKDAY = function(r, n, e) {
            return this.WORKDAY.INTL(r, n, 1, e)
        }, n.WORKDAY.INTL = function(r, n, e, t) {
            if ((r = f.parseDate(r)) instanceof Error) return r;
            if ((n = f.parseNumber(n)) instanceof Error) return n;
            if (n < 0) return i.num;
            if (!((e = void 0 === e ? m[1] : m[e]) instanceof Array)) return i.value;
            void 0 === t ? t = [] : t instanceof Array || (t = [t]);
            for (var a = 0; a < t.length; a++) {
                var u = f.parseDate(t[a]);
                if (u instanceof Error) return u;
                t[a] = u
            }
            for (var o = 0; o < n;) {
                r.setDate(r.getDate() + 1);
                var s = r.getDay();
                if (s !== e[0] && s !== e[1]) {
                    for (var l = 0; l < t.length; l++) {
                        var c = t[l];
                        if (c.getDate() === r.getDate() && c.getMonth() === r.getMonth() && c.getFullYear() === r.getFullYear()) {
                            o--;
                            break
                        }
                    }
                    o++
                }
            }
            return r
        }, n.YEAR = function(r) {
            return r = f.parseDate(r), r instanceof Error ? r : r.getFullYear()
        }, n.YEARFRAC = function(r, n, e) {
            if ((r = f.parseDate(r)) instanceof Error) return r;
            if ((n = f.parseDate(n)) instanceof Error) return n;
            e = e || 0;
            var t = r.getDate(),
                o = r.getMonth() + 1,
                i = r.getFullYear(),
                s = n.getDate(),
                l = n.getMonth() + 1,
                c = n.getFullYear();
            switch (e) {
                case 0:
                    return 31 === t && 31 === s ? (t = 30, s = 30) : 31 === t ? t = 30 : 30 === t && 31 === s && (s = 30), (s + 30 * l + 360 * c - (t + 30 * o + 360 * i)) / 360;
                case 1:
                    var m = 365;
                    if (i === c || i + 1 === c && (o > l || o === l && t >= s)) return (i === c && a(i) || function(r, n) {
                        var e = r.getFullYear(),
                            t = new Date(e, 2, 1);
                        if (a(e) && r < t && n >= t) return !0;
                        var u = n.getFullYear(),
                            o = new Date(u, 2, 1);
                        return a(u) && n >= o && r < o
                    }(r, n) || 1 === l && 29 === s) && (m = 366), u(r, n) / m;
                    var p = c - i + 1,
                        v = (new Date(c + 1, 0, 1) - new Date(i, 0, 1)) / 1e3 / 60 / 60 / 24,
                        h = v / p;
                    return u(r, n) / h;
                case 2:
                    return u(r, n) / 360;
                case 3:
                    return u(r, n) / 365;
                case 4:
                    return (s + 30 * l + 360 * c - (t + 30 * o + 360 * i)) / 360
            }
        }
    }, function(r, n, e) {
        ! function(n, e) {
            r.exports = e()
        }(0, function() {
            var r = function(r, n) {
                function e(n, e) {
                    var t = n > e ? n : e;
                    return r.pow(10, 17 - ~~(r.log(t > 0 ? t : -t) * r.LOG10E))
                }

                function t(r) {
                    return "[object Function]" === m.call(r)
                }

                function a(r) {
                    return "number" == typeof r && r - r == 0
                }

                function u(r) {
                    return l.apply([], r)
                }

                function o() {
                    return new o._init(arguments)
                }

                function i() {
                    return 0
                }

                function f() {
                    return 1
                }

                function s(r, n) {
                    return r === n ? 1 : 0
                }
                var l = Array.prototype.concat,
                    c = Array.prototype.slice,
                    m = Object.prototype.toString,
                    p = Array.isArray || function(r) {
                        return "[object Array]" === m.call(r)
                    };
                o.fn = o.prototype, o._init = function(r) {
                    if (p(r[0]))
                        if (p(r[0][0])) {
                            t(r[1]) && (r[0] = o.map(r[0], r[1]));
                            for (var n = 0; n < r[0].length; n++) this[n] = r[0][n];
                            this.length = r[0].length
                        } else this[0] = t(r[1]) ? o.map(r[0], r[1]) : r[0], this.length = 1;
                    else if (a(r[0])) this[0] = o.seq.apply(null, r), this.length = 1;
                    else {
                        if (r[0] instanceof o) return o(r[0].toArray());
                        this[0] = [], this.length = 1
                    }
                    return this
                }, o._init.prototype = o.prototype, o._init.constructor = o, o.utils = {
                    calcRdx: e,
                    isArray: p,
                    isFunction: t,
                    isNumber: a,
                    toVector: u
                }, o._random_fn = r.random, o.setRandom = function(r) {
                    if ("function" != typeof r) throw new TypeError("fn is not a function");
                    o._random_fn = r
                }, o.extend = function(r) {
                    var n, e;
                    if (1 === arguments.length) {
                        for (e in r) o[e] = r[e];
                        return this
                    }
                    for (n = 1; n < arguments.length; n++)
                        for (e in arguments[n]) r[e] = arguments[n][e];
                    return r
                }, o.rows = function(r) {
                    return r.length || 1
                }, o.cols = function(r) {
                    return r[0].length || 1
                }, o.dimensions = function(r) {
                    return {
                        rows: o.rows(r),
                        cols: o.cols(r)
                    }
                }, o.row = function(r, n) {
                    return p(n) ? n.map(function(n) {
                        return o.row(r, n)
                    }) : r[n]
                }, o.rowa = function(r, n) {
                    return o.row(r, n)
                }, o.col = function(r, n) {
                    if (p(n)) {
                        var e = o.arange(r.length).map(function() {
                            return new Array(n.length)
                        });
                        return n.forEach(function(n, t) {
                            o.arange(r.length).forEach(function(a) {
                                e[a][t] = r[a][n]
                            })
                        }), e
                    }
                    for (var t = new Array(r.length), a = 0; a < r.length; a++) t[a] = [r[a][n]];
                    return t
                }, o.cola = function(r, n) {
                    return o.col(r, n).map(function(r) {
                        return r[0]
                    })
                }, o.diag = function(r) {
                    for (var n = o.rows(r), e = new Array(n), t = 0; t < n; t++) e[t] = [r[t][t]];
                    return e
                }, o.antidiag = function(r) {
                    for (var n = o.rows(r) - 1, e = new Array(n), t = 0; n >= 0; n--, t++) e[t] = [r[t][n]];
                    return e
                }, o.transpose = function(r) {
                    var n, e, t, a, u, o = [];
                    for (p(r[0]) || (r = [r]), e = r.length, t = r[0].length, u = 0; u < t; u++) {
                        for (n = new Array(e), a = 0; a < e; a++) n[a] = r[a][u];
                        o.push(n)
                    }
                    return 1 === o.length ? o[0] : o
                }, o.map = function(r, n, e) {
                    var t, a, u, o, i;
                    for (p(r[0]) || (r = [r]), a = r.length, u = r[0].length, o = e ? r : new Array(a), t = 0; t < a; t++)
                        for (o[t] || (o[t] = new Array(u)), i = 0; i < u; i++) o[t][i] = n(r[t][i], t, i);
                    return 1 === o.length ? o[0] : o
                }, o.cumreduce = function(r, n, e) {
                    var t, a, u, o, i;
                    for (p(r[0]) || (r = [r]), a = r.length, u = r[0].length, o = e ? r : new Array(a), t = 0; t < a; t++)
                        for (o[t] || (o[t] = new Array(u)), u > 0 && (o[t][0] = r[t][0]), i = 1; i < u; i++) o[t][i] = n(o[t][i - 1], r[t][i]);
                    return 1 === o.length ? o[0] : o
                }, o.alter = function(r, n) {
                    return o.map(r, n, !0)
                }, o.create = function(r, n, e) {
                    var a, u, o = new Array(r);
                    for (t(n) && (e = n, n = r), a = 0; a < r; a++)
                        for (o[a] = new Array(n), u = 0; u < n; u++) o[a][u] = e(a, u);
                    return o
                }, o.zeros = function(r, n) {
                    return a(n) || (n = r), o.create(r, n, i)
                }, o.ones = function(r, n) {
                    return a(n) || (n = r), o.create(r, n, f)
                }, o.rand = function(r, n) {
                    return a(n) || (n = r), o.create(r, n, o._random_fn)
                }, o.identity = function(r, n) {
                    return a(n) || (n = r), o.create(r, n, s)
                }, o.symmetric = function(r) {
                    var n, e, t = r.length;
                    if (r.length !== r[0].length) return !1;
                    for (n = 0; n < t; n++)
                        for (e = 0; e < t; e++)
                            if (r[e][n] !== r[n][e]) return !1;
                    return !0
                }, o.clear = function(r) {
                    return o.alter(r, i)
                }, o.seq = function(r, n, a, u) {
                    t(u) || (u = !1);
                    var o, i = [],
                        f = e(r, n),
                        s = (n * f - r * f) / ((a - 1) * f),
                        l = r;
                    for (o = 0; l <= n && o < a; o++, l = (r * f + s * f * o) / f) i.push(u ? u(l, o) : l);
                    return i
                }, o.arange = function(r, e, t) {
                    var a, u = [];
                    if (t = t || 1, e === n && (e = r, r = 0), r === e || 0 === t) return [];
                    if (r < e && t < 0) return [];
                    if (r > e && t > 0) return [];
                    if (t > 0)
                        for (a = r; a < e; a += t) u.push(a);
                    else
                        for (a = r; a > e; a += t) u.push(a);
                    return u
                }, o.slice = function() {
                    function r(r, e, t, a) {
                        var u, i = [],
                            f = r.length;
                        if (e === n && t === n && a === n) return o.copy(r);
                        if (e = e || 0, t = t || r.length, e = e >= 0 ? e : f + e, t = t >= 0 ? t : f + t, a = a || 1, e === t || 0 === a) return [];
                        if (e < t && a < 0) return [];
                        if (e > t && a > 0) return [];
                        if (a > 0)
                            for (u = e; u < t; u += a) i.push(r[u]);
                        else
                            for (u = e; u > t; u += a) i.push(r[u]);
                        return i
                    }

                    function e(n, e) {
                        var t, u;
                        if (e = e || {}, a(e.row)) {
                            if (a(e.col)) return n[e.row][e.col];
                            var i = o.rowa(n, e.row);
                            return t = e.col || {}, r(i, t.start, t.end, t.step)
                        }
                        if (a(e.col)) {
                            var f = o.cola(n, e.col);
                            return u = e.row || {}, r(f, u.start, u.end, u.step)
                        }
                        return u = e.row || {}, t = e.col || {}, r(n, u.start, u.end, u.step).map(function(n) {
                            return r(n, t.start, t.end, t.step)
                        })
                    }
                    return e
                }(), o.sliceAssign = function(e, t, u) {
                    var i, f;
                    if (a(t.row)) {
                        if (a(t.col)) return e[t.row][t.col] = u;
                        t.col = t.col || {}, t.col.start = t.col.start || 0, t.col.end = t.col.end || e[0].length, t.col.step = t.col.step || 1, i = o.arange(t.col.start, r.min(e.length, t.col.end), t.col.step);
                        var s = t.row;
                        return i.forEach(function(r, n) {
                            e[s][r] = u[n]
                        }), e
                    }
                    if (a(t.col)) {
                        t.row = t.row || {}, t.row.start = t.row.start || 0, t.row.end = t.row.end || e.length, t.row.step = t.row.step || 1, f = o.arange(t.row.start, r.min(e[0].length, t.row.end), t.row.step);
                        var l = t.col;
                        return f.forEach(function(r, n) {
                            e[r][l] = u[n]
                        }), e
                    }
                    return u[0].length === n && (u = [u]), t.row.start = t.row.start || 0, t.row.end = t.row.end || e.length, t.row.step = t.row.step || 1, t.col.start = t.col.start || 0, t.col.end = t.col.end || e[0].length, t.col.step = t.col.step || 1, f = o.arange(t.row.start, r.min(e.length, t.row.end), t.row.step), i = o.arange(t.col.start, r.min(e[0].length, t.col.end), t.col.step), f.forEach(function(r, n) {
                        i.forEach(function(t, a) {
                            e[r][t] = u[n][a]
                        })
                    }), e
                }, o.diagonal = function(r) {
                    var n = o.zeros(r.length, r.length);
                    return r.forEach(function(r, e) {
                        n[e][e] = r
                    }), n
                }, o.copy = function(r) {
                    return r.map(function(r) {
                        return a(r) ? r : r.map(function(r) {
                            return r
                        })
                    })
                };
                var v = o.prototype;
                return v.length = 0, v.push = Array.prototype.push, v.sort = Array.prototype.sort, v.splice = Array.prototype.splice, v.slice = Array.prototype.slice, v.toArray = function() {
                        return this.length > 1 ? c.call(this) : c.call(this)[0]
                    }, v.map = function(r, n) {
                        return o(o.map(this, r, n))
                    }, v.cumreduce = function(r, n) {
                        return o(o.cumreduce(this, r, n))
                    }, v.alter = function(r) {
                        return o.alter(this, r), this
                    },
                    function(r) {
                        for (var n = 0; n < r.length; n++) ! function(r) {
                            v[r] = function(n) {
                                var e, t = this;
                                return n ? (setTimeout(function() {
                                    n.call(t, v[r].call(t))
                                }), this) : (e = o[r](this), p(e) ? o(e) : e)
                            }
                        }(r[n])
                    }("transpose clear symmetric rows cols dimensions diag antidiag".split(" ")),
                    function(r) {
                        for (var n = 0; n < r.length; n++) ! function(r) {
                            v[r] = function(n, e) {
                                var t = this;
                                return e ? (setTimeout(function() {
                                    e.call(t, v[r].call(t, n))
                                }), this) : o(o[r](this, n))
                            }
                        }(r[n])
                    }("row col".split(" ")),
                    function(r) {
                        for (var n = 0; n < r.length; n++) ! function(r) {
                            v[r] = function() {
                                return o(o[r].apply(null, arguments))
                            }
                        }(r[n])
                    }("create zeros ones rand identity".split(" ")), o
            }(Math);
            return function(r, n) {
                    function e(r, n) {
                        return r - n
                    }

                    function t(r, e, t) {
                        return n.max(e, n.min(r, t))
                    }
                    var a = r.utils.isFunction;
                    r.sum = function(r) {
                        for (var n = 0, e = r.length; --e >= 0;) n += r[e];
                        return n
                    }, r.sumsqrd = function(r) {
                        for (var n = 0, e = r.length; --e >= 0;) n += r[e] * r[e];
                        return n
                    }, r.sumsqerr = function(n) {
                        for (var e, t = r.mean(n), a = 0, u = n.length; --u >= 0;) e = n[u] - t, a += e * e;
                        return a
                    }, r.sumrow = function(r) {
                        for (var n = 0, e = r.length; --e >= 0;) n += r[e];
                        return n
                    }, r.product = function(r) {
                        for (var n = 1, e = r.length; --e >= 0;) n *= r[e];
                        return n
                    }, r.min = function(r) {
                        for (var n = r[0], e = 0; ++e < r.length;) r[e] < n && (n = r[e]);
                        return n
                    }, r.max = function(r) {
                        for (var n = r[0], e = 0; ++e < r.length;) r[e] > n && (n = r[e]);
                        return n
                    }, r.unique = function(r) {
                        for (var n = {}, e = [], t = 0; t < r.length; t++) n[r[t]] || (n[r[t]] = !0, e.push(r[t]));
                        return e
                    }, r.mean = function(n) {
                        return r.sum(n) / n.length
                    }, r.meansqerr = function(n) {
                        return r.sumsqerr(n) / n.length
                    }, r.geomean = function(e) {
                        return n.pow(r.product(e), 1 / e.length)
                    }, r.median = function(r) {
                        var n = r.length,
                            t = r.slice().sort(e);
                        return 1 & n ? t[n / 2 | 0] : (t[n / 2 - 1] + t[n / 2]) / 2
                    }, r.cumsum = function(n) {
                        return r.cumreduce(n, function(r, n) {
                            return r + n
                        })
                    }, r.cumprod = function(n) {
                        return r.cumreduce(n, function(r, n) {
                            return r * n
                        })
                    }, r.diff = function(r) {
                        var n, e = [],
                            t = r.length;
                        for (n = 1; n < t; n++) e.push(r[n] - r[n - 1]);
                        return e
                    }, r.rank = function(r) {
                        for (var n, t = r.length, a = r.slice().sort(e), u = new Array(t), o = 0; o < t; o++) {
                            var i = a.indexOf(r[o]),
                                f = a.lastIndexOf(r[o]);
                            n = i === f ? i : (i + f) / 2, u[o] = n + 1
                        }
                        return u
                    }, r.mode = function(r) {
                        var n, t = r.length,
                            a = r.slice().sort(e),
                            u = 1,
                            o = 0,
                            i = 0,
                            f = [];
                        for (n = 0; n < t; n++) a[n] === a[n + 1] ? u++ : (u > o ? (f = [a[n]], o = u, i = 0) : u === o && (f.push(a[n]), i++), u = 1);
                        return 0 === i ? f[0] : f
                    }, r.range = function(n) {
                        return r.max(n) - r.min(n)
                    }, r.variance = function(n, e) {
                        return r.sumsqerr(n) / (n.length - (e ? 1 : 0))
                    }, r.pooledvariance = function(n) {
                        return n.reduce(function(n, e) {
                            return n + r.sumsqerr(e)
                        }, 0) / (n.reduce(function(r, n) {
                            return r + n.length
                        }, 0) - n.length)
                    }, r.deviation = function(n) {
                        for (var e = r.mean(n), t = n.length, a = new Array(t), u = 0; u < t; u++) a[u] = n[u] - e;
                        return a
                    }, r.stdev = function(e, t) {
                        return n.sqrt(r.variance(e, t))
                    }, r.pooledstdev = function(e) {
                        return n.sqrt(r.pooledvariance(e))
                    }, r.meandev = function(e) {
                        for (var t = r.mean(e), a = [], u = e.length - 1; u >= 0; u--) a.push(n.abs(e[u] - t));
                        return r.mean(a)
                    }, r.meddev = function(e) {
                        for (var t = r.median(e), a = [], u = e.length - 1; u >= 0; u--) a.push(n.abs(e[u] - t));
                        return r.median(a)
                    }, r.coeffvar = function(n) {
                        return r.stdev(n) / r.mean(n)
                    }, r.quartiles = function(r) {
                        var t = r.length,
                            a = r.slice().sort(e);
                        return [a[n.round(t / 4) - 1], a[n.round(t / 2) - 1], a[n.round(3 * t / 4) - 1]]
                    }, r.quantiles = function(r, a, u, o) {
                        var i, f, s, l, c, m, p = r.slice().sort(e),
                            v = [a.length],
                            h = r.length;
                        for (void 0 === u && (u = 3 / 8), void 0 === o && (o = 3 / 8), i = 0; i < a.length; i++) f = a[i], s = u + f * (1 - u - o), l = h * f + s, c = n.floor(t(l, 1, h - 1)), m = t(l - c, 0, 1), v[i] = (1 - m) * p[c - 1] + m * p[c];
                        return v
                    }, r.percentile = function(r, n, t) {
                        var a = r.slice().sort(e),
                            u = n * (a.length + (t ? 1 : -1)) + (t ? 0 : 1),
                            o = parseInt(u),
                            i = u - o;
                        return o + 1 < a.length ? a[o - 1] + i * (a[o] - a[o - 1]) : a[o - 1]
                    }, r.percentileOfScore = function(r, n, e) {
                        var t, a, u = 0,
                            o = r.length,
                            i = !1;
                        for ("strict" === e && (i = !0), a = 0; a < o; a++) t = r[a], (i && t < n || !i && t <= n) && u++;
                        return u / o
                    }, r.histogram = function(e, t) {
                        t = t || 4;
                        var a, u = r.min(e),
                            o = (r.max(e) - u) / t,
                            i = e.length,
                            f = [];
                        for (a = 0; a < t; a++) f[a] = 0;
                        for (a = 0; a < i; a++) f[n.min(n.floor((e[a] - u) / o), t - 1)] += 1;
                        return f
                    }, r.covariance = function(n, e) {
                        var t, a = r.mean(n),
                            u = r.mean(e),
                            o = n.length,
                            i = new Array(o);
                        for (t = 0; t < o; t++) i[t] = (n[t] - a) * (e[t] - u);
                        return r.sum(i) / (o - 1)
                    }, r.corrcoeff = function(n, e) {
                        return r.covariance(n, e) / r.stdev(n, 1) / r.stdev(e, 1)
                    }, r.spearmancoeff = function(n, e) {
                        return n = r.rank(n), e = r.rank(e), r.corrcoeff(n, e)
                    }, r.stanMoment = function(e, t) {
                        for (var a = r.mean(e), u = r.stdev(e), o = e.length, i = 0, f = 0; f < o; f++) i += n.pow((e[f] - a) / u, t);
                        return i / e.length
                    }, r.skewness = function(n) {
                        return r.stanMoment(n, 3)
                    }, r.kurtosis = function(n) {
                        return r.stanMoment(n, 4) - 3
                    };
                    var u = r.prototype;
                    ! function(n) {
                        for (var e = 0; e < n.length; e++) ! function(n) {
                            u[n] = function(e, t) {
                                var o = [],
                                    i = 0,
                                    f = this;
                                if (a(e) && (t = e, e = !1), t) return setTimeout(function() {
                                    t.call(f, u[n].call(f, e))
                                }), this;
                                if (this.length > 1) {
                                    for (f = !0 === e ? this : this.transpose(); i < f.length; i++) o[i] = r[n](f[i]);
                                    return o
                                }
                                return r[n](this[0], e)
                            }
                        }(n[e])
                    }("cumsum cumprod".split(" ")),
                    function(n) {
                        for (var e = 0; e < n.length; e++) ! function(n) {
                            u[n] = function(e, t) {
                                var o = [],
                                    i = 0,
                                    f = this;
                                if (a(e) && (t = e, e = !1), t) return setTimeout(function() {
                                    t.call(f, u[n].call(f, e))
                                }), this;
                                if (this.length > 1) {
                                    for ("sumrow" !== n && (f = !0 === e ? this : this.transpose()); i < f.length; i++) o[i] = r[n](f[i]);
                                    return !0 === e ? r[n](r.utils.toVector(o)) : o
                                }
                                return r[n](this[0], e)
                            }
                        }(n[e])
                    }("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(" ")),
                    function(n) {
                        for (var e = 0; e < n.length; e++) ! function(n) {
                            u[n] = function() {
                                var e, t = [],
                                    o = 0,
                                    i = this,
                                    f = Array.prototype.slice.call(arguments);
                                if (a(f[f.length - 1])) {
                                    e = f[f.length - 1];
                                    var s = f.slice(0, f.length - 1);
                                    return setTimeout(function() {
                                        e.call(i, u[n].apply(i, s))
                                    }), this
                                }
                                e = void 0;
                                var l = function(e) {
                                    return r[n].apply(i, [e].concat(f))
                                };
                                if (this.length > 1) {
                                    for (i = i.transpose(); o < i.length; o++) t[o] = l(i[o]);
                                    return t
                                }
                                return l(this[0])
                            }
                        }(n[e])
                    }("quantiles percentileOfScore".split(" "))
                }(r, Math),
                function(r, n) {
                    r.gammaln = function(r) {
                            var e, t, a, u = 0,
                                o = [76.18009172947146, -86.50532032941678, 24.01409824083091, -1.231739572450155, .001208650973866179, -5395239384953e-18],
                                i = 1.000000000190015;
                            for (a = (t = e = r) + 5.5, a -= (e + .5) * n.log(a); u < 6; u++) i += o[u] / ++t;
                            return n.log(2.5066282746310007 * i / e) - a
                        }, r.loggam = function(r) {
                            var e, t, a, u, o, i, f, s = [.08333333333333333, -.002777777777777778, .0007936507936507937, -.0005952380952380952, .0008417508417508418, -.001917526917526918, .00641025641025641, -.02955065359477124, .1796443723688307, -1.3924322169059];
                            if (e = r, f = 0, 1 == r || 2 == r) return 0;
                            for (r <= 7 && (f = n.floor(7 - r), e = r + f), t = 1 / (e * e), a = 2 * n.PI, o = s[9], i = 8; i >= 0; i--) o *= t, o += s[i];
                            if (u = o / e + .5 * n.log(a) + (e - .5) * n.log(e) - e, r <= 7)
                                for (i = 1; i <= f; i++) u -= n.log(e - 1), e -= 1;
                            return u
                        }, r.gammafn = function(r) {
                            var e, t, a, u, o = [-1.716185138865495, 24.76565080557592, -379.80425647094563, 629.3311553128184, 866.9662027904133, -31451.272968848367, -36144.413418691176, 66456.14382024054],
                                i = [-30.8402300119739, 315.35062697960416, -1015.1563674902192, -3107.771671572311, 22538.11842098015, 4755.846277527881, -134659.9598649693, -115132.2596755535],
                                f = !1,
                                s = 0,
                                l = 0,
                                c = 0,
                                m = r;
                            if (m <= 0) {
                                if (!(u = m % 1 + 3.6e-16)) return 1 / 0;
                                f = (1 & m ? -1 : 1) * n.PI / n.sin(n.PI * u), m = 1 - m
                            }
                            for (a = m, t = m < 1 ? m++ : (m -= s = (0 | m) - 1) - 1, e = 0; e < 8; ++e) c = (c + o[e]) * t, l = l * t + i[e];
                            if (u = c / l + 1, a < m) u /= a;
                            else if (a > m)
                                for (e = 0; e < s; ++e) u *= m, m++;
                            return f && (u = f / u), u
                        }, r.gammap = function(n, e) {
                            return r.lowRegGamma(n, e) * r.gammafn(n)
                        }, r.lowRegGamma = function(e, t) {
                            var a, u = r.gammaln(e),
                                o = e,
                                i = 1 / e,
                                f = i,
                                s = t + 1 - e,
                                l = 1 / 1e-30,
                                c = 1 / s,
                                m = c,
                                p = 1,
                                v = -~(8.5 * n.log(e >= 1 ? e : 1 / e) + .4 * e + 17);
                            if (t < 0 || e <= 0) return NaN;
                            if (t < e + 1) {
                                for (; p <= v; p++) i += f *= t / ++o;
                                return i * n.exp(-t + e * n.log(t) - u)
                            }
                            for (; p <= v; p++) a = -p * (p - e), s += 2, c = a * c + s, l = s + a / l, c = 1 / c, m *= c * l;
                            return 1 - m * n.exp(-t + e * n.log(t) - u)
                        }, r.factorialln = function(n) {
                            return n < 0 ? NaN : r.gammaln(n + 1)
                        }, r.factorial = function(n) {
                            return n < 0 ? NaN : r.gammafn(n + 1)
                        }, r.combination = function(e, t) {
                            return e > 170 || t > 170 ? n.exp(r.combinationln(e, t)) : r.factorial(e) / r.factorial(t) / r.factorial(e - t)
                        }, r.combinationln = function(n, e) {
                            return r.factorialln(n) - r.factorialln(e) - r.factorialln(n - e)
                        }, r.permutation = function(n, e) {
                            return r.factorial(n) / r.factorial(n - e)
                        }, r.betafn = function(e, t) {
                            if (!(e <= 0 || t <= 0)) return e + t > 170 ? n.exp(r.betaln(e, t)) : r.gammafn(e) * r.gammafn(t) / r.gammafn(e + t)
                        }, r.betaln = function(n, e) {
                            return r.gammaln(n) + r.gammaln(e) - r.gammaln(n + e)
                        }, r.betacf = function(r, e, t) {
                            var a, u, o, i, f = 1,
                                s = e + t,
                                l = e + 1,
                                c = e - 1,
                                m = 1,
                                p = 1 - s * r / l;
                            for (n.abs(p) < 1e-30 && (p = 1e-30), p = 1 / p, i = p; f <= 100 && (a = 2 * f, u = f * (t - f) * r / ((c + a) * (e + a)), p = 1 + u * p, n.abs(p) < 1e-30 && (p = 1e-30), m = 1 + u / m, n.abs(m) < 1e-30 && (m = 1e-30), p = 1 / p, i *= p * m, u = -(e + f) * (s + f) * r / ((e + a) * (l + a)), p = 1 + u * p, n.abs(p) < 1e-30 && (p = 1e-30), m = 1 + u / m, n.abs(m) < 1e-30 && (m = 1e-30), p = 1 / p, o = p * m, i *= o, !(n.abs(o - 1) < 3e-7)); f++);
                            return i
                        }, r.gammapinv = function(e, t) {
                            var a, u, o, i, f, s, l, c = 0,
                                m = t - 1,
                                p = r.gammaln(t);
                            if (e >= 1) return n.max(100, t + 100 * n.sqrt(t));
                            if (e <= 0) return 0;
                            for (t > 1 ? (s = n.log(m), l = n.exp(m * (s - 1) - p), f = e < .5 ? e : 1 - e, o = n.sqrt(-2 * n.log(f)), a = (2.30753 + .27061 * o) / (1 + o * (.99229 + .04481 * o)) - o, e < .5 && (a = -a), a = n.max(.001, t * n.pow(1 - 1 / (9 * t) - a / (3 * n.sqrt(t)), 3))) : (o = 1 - t * (.253 + .12 * t), a = e < o ? n.pow(e / o, 1 / t) : 1 - n.log(1 - (e - o) / (1 - o))); c < 12; c++) {
                                if (a <= 0) return 0;
                                if (u = r.lowRegGamma(t, a) - e, o = t > 1 ? l * n.exp(-(a - m) + m * (n.log(a) - s)) : n.exp(-a + m * n.log(a) - p), i = u / o, a -= o = i / (1 - .5 * n.min(1, i * ((t - 1) / a - 1))), a <= 0 && (a = .5 * (a + o)), n.abs(o) < 1e-8 * a) break
                            }
                            return a
                        }, r.erf = function(r) {
                            var e, t, a, u, o = [-1.3026537197817094, .6419697923564902, .019476473204185836, -.00956151478680863, -.000946595344482036, .000366839497852761, 42523324806907e-18, -20278578112534e-18, -1624290004647e-18, 130365583558e-17, 1.5626441722e-8, -8.5238095915e-8, 6.529054439e-9, 5.059343495e-9, -9.91364156e-10, -2.27365122e-10, 9.6467911e-11, 2.394038e-12, -6.886027e-12, 8.94487e-13, 3.13092e-13, -1.12708e-13, 3.81e-16, 7.106e-15, -1.523e-15, -9.4e-17, 1.21e-16, -2.8e-17],
                                i = o.length - 1,
                                f = !1,
                                s = 0,
                                l = 0;
                            for (r < 0 && (r = -r, f = !0), e = 2 / (2 + r), t = 4 * e - 2; i > 0; i--) a = s, s = t * s - l + o[i], l = a;
                            return u = e * n.exp(-r * r + .5 * (o[0] + t * s) - l), f ? u - 1 : 1 - u
                        }, r.erfc = function(n) {
                            return 1 - r.erf(n)
                        }, r.erfcinv = function(e) {
                            var t, a, u, o, i = 0;
                            if (e >= 2) return -100;
                            if (e <= 0) return 100;
                            for (o = e < 1 ? e : 2 - e, u = n.sqrt(-2 * n.log(o / 2)), t = -.70711 * ((2.30753 + .27061 * u) / (1 + u * (.99229 + .04481 * u)) - u); i < 2; i++) a = r.erfc(t) - o, t += a / (1.1283791670955126 * n.exp(-t * t) - t * a);
                            return e < 1 ? t : -t
                        }, r.ibetainv = function(e, t, a) {
                            var u, o, i, f, s, l, c, m, p, v, h, g = t - 1,
                                E = a - 1,
                                N = 0;
                            if (e <= 0) return 0;
                            if (e >= 1) return 1;
                            for (t >= 1 && a >= 1 ? (i = e < .5 ? e : 1 - e, f = n.sqrt(-2 * n.log(i)), c = (2.30753 + .27061 * f) / (1 + f * (.99229 + .04481 * f)) - f, e < .5 && (c = -c), m = (c * c - 3) / 6, p = 2 / (1 / (2 * t - 1) + 1 / (2 * a - 1)), v = c * n.sqrt(m + p) / p - (1 / (2 * a - 1) - 1 / (2 * t - 1)) * (m + 5 / 6 - 2 / (3 * p)), c = t / (t + a * n.exp(2 * v))) : (u = n.log(t / (t + a)), o = n.log(a / (t + a)), f = n.exp(t * u) / t, s = n.exp(a * o) / a, v = f + s, c = e < f / v ? n.pow(t * v * e, 1 / t) : 1 - n.pow(a * v * (1 - e), 1 / a)), h = -r.gammaln(t) - r.gammaln(a) + r.gammaln(t + a); N < 10; N++) {
                                if (0 === c || 1 === c) return c;
                                if (l = r.ibeta(c, t, a) - e, f = n.exp(g * n.log(c) + E * n.log(1 - c) + h), s = l / f, c -= f = s / (1 - .5 * n.min(1, s * (g / c - E / (1 - c)))), c <= 0 && (c = .5 * (c + f)), c >= 1 && (c = .5 * (c + f + 1)), n.abs(f) < 1e-8 * c && N > 0) break
                            }
                            return c
                        }, r.ibeta = function(e, t, a) {
                            var u = 0 === e || 1 === e ? 0 : n.exp(r.gammaln(t + a) - r.gammaln(t) - r.gammaln(a) + t * n.log(e) + a * n.log(1 - e));
                            return !(e < 0 || e > 1) && (e < (t + 1) / (t + a + 2) ? u * r.betacf(e, t, a) / t : 1 - u * r.betacf(1 - e, a, t) / a)
                        }, r.randn = function(e, t) {
                            var a, u, o, i, f;
                            if (t || (t = e), e) return r.create(e, t, function() {
                                return r.randn()
                            });
                            do {
                                a = r._random_fn(), u = 1.7156 * (r._random_fn() - .5), o = a - .449871, i = n.abs(u) + .386595, f = o * o + i * (.196 * i - .25472 * o)
                            } while (f > .27597 && (f > .27846 || u * u > -4 * n.log(a) * a * a));
                            return u / a
                        }, r.randg = function(e, t, a) {
                            var u, o, i, f, s, l, c = e;
                            if (a || (a = t), e || (e = 1), t) return l = r.zeros(t, a), l.alter(function() {
                                return r.randg(e)
                            }), l;
                            e < 1 && (e += 1), u = e - 1 / 3, o = 1 / n.sqrt(9 * u);
                            do {
                                do {
                                    s = r.randn(), f = 1 + o * s
                                } while (f <= 0);
                                f *= f * f, i = r._random_fn()
                            } while (i > 1 - .331 * n.pow(s, 4) && n.log(i) > .5 * s * s + u * (1 - f + n.log(f)));
                            if (e == c) return u * f;
                            do {
                                i = r._random_fn()
                            } while (0 === i);
                            return n.pow(i, 1 / c) * u * f
                        },
                        function(n) {
                            for (var e = 0; e < n.length; e++) ! function(n) {
                                r.fn[n] = function() {
                                    return r(r.map(this, function(e) {
                                        return r[n](e)
                                    }))
                                }
                            }(n[e])
                        }("gammaln gammafn factorial factorialln".split(" ")),
                        function(n) {
                            for (var e = 0; e < n.length; e++) ! function(n) {
                                r.fn[n] = function() {
                                    return r(r[n].apply(null, arguments))
                                }
                            }(n[e])
                        }("randn".split(" "))
                }(r, Math),
                function(r, n) {
                    function e(r, e, t, a) {
                        for (var u, o = 0, i = 1, f = 1, s = 1, l = 0, c = 0; n.abs((f - c) / f) > a;) c = f, u = -(e + l) * (e + t + l) * r / (e + 2 * l) / (e + 2 * l + 1), o = f + u * o, i = s + u * i, l += 1, u = l * (t - l) * r / (e + 2 * l - 1) / (e + 2 * l), f = o + u * f, s = i + u * s, o /= s, i /= s, f /= s, s = 1;
                        return f / e
                    }

                    function t(r) {
                        return r / n.abs(r)
                    }

                    function a(e, t, a) {
                        var u = [.9815606342467192, .9041172563704749, .7699026741943047, .5873179542866175, .3678314989981802, .1252334085114689],
                            o = [.04717533638651183, .10693932599531843, .16007832854334622, .20316742672306592, .2334925365383548, .24914704581340277],
                            i = .5 * e;
                        if (i >= 8) return 1;
                        var f = 2 * r.normal.cdf(i, 0, 1, 1, 0) - 1;
                        f = f >= n.exp(-50 / a) ? n.pow(f, a) : 0;
                        var s;
                        s = e > 3 ? 2 : 3;
                        for (var l = i, c = (8 - i) / s, m = l + c, p = 0, v = a - 1, h = 1; h <= s; h++) {
                            for (var g = 0, E = .5 * (m + l), N = .5 * (m - l), I = 1; I <= 12; I++) {
                                var b, d;
                                6 < I ? (b = 12 - I + 1, d = u[b - 1]) : (b = I, d = -u[b - 1]);
                                var M = N * d,
                                    y = E + M,
                                    A = y * y;
                                if (A > 60) break;
                                var T = 2 * r.normal.cdf(y, 0, 1, 1, 0),
                                    R = 2 * r.normal.cdf(y, e, 1, 1, 0),
                                    S = .5 * T - .5 * R;
                                S >= n.exp(-30 / v) && (S = o[b - 1] * n.exp(-.5 * A) * n.pow(S, v), g += S)
                            }
                            g *= 2 * N * a / n.sqrt(2 * n.PI), p += g, l = m, m += c
                        }
                        return (f += p) <= n.exp(-30 / t) ? 0 : (f = n.pow(f, t), f >= 1 ? 1 : f)
                    }

                    function u(r, e, t) {
                        var a = .5 - .5 * r,
                            u = n.sqrt(n.log(1 / (a * a))),
                            o = u + ((((-453642210148e-16 * u - .204231210125) * u - .342242088547) * u - 1) * u + .322232421088) / ((((.0038560700634 * u + .10353775285) * u + .531103462366) * u + .588581570495) * u + .099348462606);
                        t < 120 && (o += (o * o * o + o) / t / 4);
                        var i = .8832 - .2368 * o;
                        return t < 120 && (i += -1.214 / t + 1.208 * o / t), o * (i * n.log(e - 1) + 1.4142)
                    }! function(n) {
                        for (var e = 0; e < n.length; e++) ! function(n) {
                            r[n] = function(r, n, e) {
                                    return this instanceof arguments.callee ? (this._a = r, this._b = n, this._c = e, this) : new arguments.callee(r, n, e)
                                }, r.fn[n] = function(e, t, a) {
                                    var u = r[n](e, t, a);
                                    return u.data = this, u
                                }, r[n].prototype.sample = function(e) {
                                    var t = this._a,
                                        a = this._b,
                                        u = this._c;
                                    return e ? r.alter(e, function() {
                                        return r[n].sample(t, a, u)
                                    }) : r[n].sample(t, a, u)
                                },
                                function(e) {
                                    for (var t = 0; t < e.length; t++) ! function(e) {
                                        r[n].prototype[e] = function(t) {
                                            var a = this._a,
                                                u = this._b,
                                                o = this._c;
                                            return t || 0 === t || (t = this.data), "number" != typeof t ? r.fn.map.call(t, function(t) {
                                                return r[n][e](t, a, u, o)
                                            }) : r[n][e](t, a, u, o)
                                        }
                                    }(e[t])
                                }("pdf cdf inv".split(" ")),
                                function(e) {
                                    for (var t = 0; t < e.length; t++) ! function(e) {
                                        r[n].prototype[e] = function() {
                                            return r[n][e](this._a, this._b, this._c)
                                        }
                                    }(e[t])
                                }("mean median mode variance".split(" "))
                        }(n[e])
                    }("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(" ")), r.extend(r.beta, {
                        pdf: function(e, t, a) {
                            return e > 1 || e < 0 ? 0 : 1 == t && 1 == a ? 1 : t < 512 && a < 512 ? n.pow(e, t - 1) * n.pow(1 - e, a - 1) / r.betafn(t, a) : n.exp((t - 1) * n.log(e) + (a - 1) * n.log(1 - e) - r.betaln(t, a))
                        },
                        cdf: function(n, e, t) {
                            return n > 1 || n < 0 ? 1 * (n > 1) : r.ibeta(n, e, t)
                        },
                        inv: function(n, e, t) {
                            return r.ibetainv(n, e, t)
                        },
                        mean: function(r, n) {
                            return r / (r + n)
                        },
                        median: function(n, e) {
                            return r.ibetainv(.5, n, e)
                        },
                        mode: function(r, n) {
                            return (r - 1) / (r + n - 2)
                        },
                        sample: function(n, e) {
                            var t = r.randg(n);
                            return t / (t + r.randg(e))
                        },
                        variance: function(r, e) {
                            return r * e / (n.pow(r + e, 2) * (r + e + 1))
                        }
                    }), r.extend(r.centralF, {
                        pdf: function(e, t, a) {
                            var u, o;
                            return e < 0 ? 0 : t <= 2 ? 0 === e && t < 2 ? 1 / 0 : 0 === e && 2 === t ? 1 : 1 / r.betafn(t / 2, a / 2) * n.pow(t / a, t / 2) * n.pow(e, t / 2 - 1) * n.pow(1 + t / a * e, -(t + a) / 2) : (u = t * e / (a + e * t), o = a / (a + e * t), t * o / 2 * r.binomial.pdf((t - 2) / 2, (t + a - 2) / 2, u))
                        },
                        cdf: function(n, e, t) {
                            return n < 0 ? 0 : r.ibeta(e * n / (e * n + t), e / 2, t / 2)
                        },
                        inv: function(n, e, t) {
                            return t / (e * (1 / r.ibetainv(n, e / 2, t / 2) - 1))
                        },
                        mean: function(r, n) {
                            return n > 2 ? n / (n - 2) : void 0
                        },
                        mode: function(r, n) {
                            return r > 2 ? n * (r - 2) / (r * (n + 2)) : void 0
                        },
                        sample: function(n, e) {
                            return 2 * r.randg(n / 2) / n / (2 * r.randg(e / 2) / e)
                        },
                        variance: function(r, n) {
                            if (!(n <= 4)) return 2 * n * n * (r + n - 2) / (r * (n - 2) * (n - 2) * (n - 4))
                        }
                    }), r.extend(r.cauchy, {
                        pdf: function(r, e, t) {
                            return t < 0 ? 0 : t / (n.pow(r - e, 2) + n.pow(t, 2)) / n.PI
                        },
                        cdf: function(r, e, t) {
                            return n.atan((r - e) / t) / n.PI + .5
                        },
                        inv: function(r, e, t) {
                            return e + t * n.tan(n.PI * (r - .5))
                        },
                        median: function(r) {
                            return r
                        },
                        mode: function(r) {
                            return r
                        },
                        sample: function(e, t) {
                            return r.randn() * n.sqrt(1 / (2 * r.randg(.5))) * t + e
                        }
                    }), r.extend(r.chisquare, {
                        pdf: function(e, t) {
                            return e < 0 ? 0 : 0 === e && 2 === t ? .5 : n.exp((t / 2 - 1) * n.log(e) - e / 2 - t / 2 * n.log(2) - r.gammaln(t / 2))
                        },
                        cdf: function(n, e) {
                            return n < 0 ? 0 : r.lowRegGamma(e / 2, n / 2)
                        },
                        inv: function(n, e) {
                            return 2 * r.gammapinv(n, .5 * e)
                        },
                        mean: function(r) {
                            return r
                        },
                        median: function(r) {
                            return r * n.pow(1 - 2 / (9 * r), 3)
                        },
                        mode: function(r) {
                            return r - 2 > 0 ? r - 2 : 0
                        },
                        sample: function(n) {
                            return 2 * r.randg(n / 2)
                        },
                        variance: function(r) {
                            return 2 * r
                        }
                    }), r.extend(r.exponential, {
                        pdf: function(r, e) {
                            return r < 0 ? 0 : e * n.exp(-e * r)
                        },
                        cdf: function(r, e) {
                            return r < 0 ? 0 : 1 - n.exp(-e * r)
                        },
                        inv: function(r, e) {
                            return -n.log(1 - r) / e
                        },
                        mean: function(r) {
                            return 1 / r
                        },
                        median: function(r) {
                            return 1 / r * n.log(2)
                        },
                        mode: function() {
                            return 0
                        },
                        sample: function(e) {
                            return -1 / e * n.log(r._random_fn())
                        },
                        variance: function(r) {
                            return n.pow(r, -2)
                        }
                    }), r.extend(r.gamma, {
                        pdf: function(e, t, a) {
                            return e < 0 ? 0 : 0 === e && 1 === t ? 1 / a : n.exp((t - 1) * n.log(e) - e / a - r.gammaln(t) - t * n.log(a))
                        },
                        cdf: function(n, e, t) {
                            return n < 0 ? 0 : r.lowRegGamma(e, n / t)
                        },
                        inv: function(n, e, t) {
                            return r.gammapinv(n, e) * t
                        },
                        mean: function(r, n) {
                            return r * n
                        },
                        mode: function(r, n) {
                            if (r > 1) return (r - 1) * n
                        },
                        sample: function(n, e) {
                            return r.randg(n) * e
                        },
                        variance: function(r, n) {
                            return r * n * n
                        }
                    }), r.extend(r.invgamma, {
                        pdf: function(e, t, a) {
                            return e <= 0 ? 0 : n.exp(-(t + 1) * n.log(e) - a / e - r.gammaln(t) + t * n.log(a))
                        },
                        cdf: function(n, e, t) {
                            return n <= 0 ? 0 : 1 - r.lowRegGamma(e, t / n)
                        },
                        inv: function(n, e, t) {
                            return t / r.gammapinv(1 - n, e)
                        },
                        mean: function(r, n) {
                            return r > 1 ? n / (r - 1) : void 0
                        },
                        mode: function(r, n) {
                            return n / (r + 1)
                        },
                        sample: function(n, e) {
                            return e / r.randg(n)
                        },
                        variance: function(r, n) {
                            if (!(r <= 2)) return n * n / ((r - 1) * (r - 1) * (r - 2))
                        }
                    }), r.extend(r.kumaraswamy, {
                        pdf: function(r, e, t) {
                            return 0 === r && 1 === e ? t : 1 === r && 1 === t ? e : n.exp(n.log(e) + n.log(t) + (e - 1) * n.log(r) + (t - 1) * n.log(1 - n.pow(r, e)))
                        },
                        cdf: function(r, e, t) {
                            return r < 0 ? 0 : r > 1 ? 1 : 1 - n.pow(1 - n.pow(r, e), t)
                        },
                        inv: function(r, e, t) {
                            return n.pow(1 - n.pow(1 - r, 1 / t), 1 / e)
                        },
                        mean: function(n, e) {
                            return e * r.gammafn(1 + 1 / n) * r.gammafn(e) / r.gammafn(1 + 1 / n + e)
                        },
                        median: function(r, e) {
                            return n.pow(1 - n.pow(2, -1 / e), 1 / r)
                        },
                        mode: function(r, e) {
                            if (r >= 1 && e >= 1 && 1 !== r && 1 !== e) return n.pow((r - 1) / (r * e - 1), 1 / r)
                        },
                        variance: function() {
                            throw new Error("variance not yet implemented")
                        }
                    }), r.extend(r.lognormal, {
                        pdf: function(r, e, t) {
                            return r <= 0 ? 0 : n.exp(-n.log(r) - .5 * n.log(2 * n.PI) - n.log(t) - n.pow(n.log(r) - e, 2) / (2 * t * t))
                        },
                        cdf: function(e, t, a) {
                            return e < 0 ? 0 : .5 + .5 * r.erf((n.log(e) - t) / n.sqrt(2 * a * a))
                        },
                        inv: function(e, t, a) {
                            return n.exp(-1.4142135623730951 * a * r.erfcinv(2 * e) + t)
                        },
                        mean: function(r, e) {
                            return n.exp(r + e * e / 2)
                        },
                        median: function(r) {
                            return n.exp(r)
                        },
                        mode: function(r, e) {
                            return n.exp(r - e * e)
                        },
                        sample: function(e, t) {
                            return n.exp(r.randn() * t + e)
                        },
                        variance: function(r, e) {
                            return (n.exp(e * e) - 1) * n.exp(2 * r + e * e)
                        }
                    }), r.extend(r.noncentralt, {
                        pdf: function(e, t, a) {
                            return n.abs(a) < 1e-14 ? r.studentt.pdf(e, t) : n.abs(e) < 1e-14 ? n.exp(r.gammaln((t + 1) / 2) - a * a / 2 - .5 * n.log(n.PI * t) - r.gammaln(t / 2)) : t / e * (r.noncentralt.cdf(e * n.sqrt(1 + 2 / t), t + 2, a) - r.noncentralt.cdf(e, t, a))
                        },
                        cdf: function(e, t, a) {
                            if (n.abs(a) < 1e-14) return r.studentt.cdf(e, t);
                            var u = !1;
                            e < 0 && (u = !0, a = -a);
                            for (var o = r.normal.cdf(-a, 0, 1), i = 1e-14 + 1, f = i, s = e * e / (e * e + t), l = 0, c = n.exp(-a * a / 2), m = n.exp(-a * a / 2 - .5 * n.log(2) - r.gammaln(1.5)) * a; l < 200 || f > 1e-14 || i > 1e-14;) f = i, l > 0 && (c *= a * a / (2 * l), m *= a * a / (2 * (l + .5))), i = c * r.beta.cdf(s, l + .5, t / 2) + m * r.beta.cdf(s, l + 1, t / 2), o += .5 * i, l++;
                            return u ? 1 - o : o
                        }
                    }), r.extend(r.normal, {
                        pdf: function(r, e, t) {
                            return n.exp(-.5 * n.log(2 * n.PI) - n.log(t) - n.pow(r - e, 2) / (2 * t * t))
                        },
                        cdf: function(e, t, a) {
                            return .5 * (1 + r.erf((e - t) / n.sqrt(2 * a * a)))
                        },
                        inv: function(n, e, t) {
                            return -1.4142135623730951 * t * r.erfcinv(2 * n) + e
                        },
                        mean: function(r) {
                            return r
                        },
                        median: function(r) {
                            return r
                        },
                        mode: function(r) {
                            return r
                        },
                        sample: function(n, e) {
                            return r.randn() * e + n
                        },
                        variance: function(r, n) {
                            return n * n
                        }
                    }), r.extend(r.pareto, {
                        pdf: function(r, e, t) {
                            return r < e ? 0 : t * n.pow(e, t) / n.pow(r, t + 1)
                        },
                        cdf: function(r, e, t) {
                            return r < e ? 0 : 1 - n.pow(e / r, t)
                        },
                        inv: function(r, e, t) {
                            return e / n.pow(1 - r, 1 / t)
                        },
                        mean: function(r, e) {
                            if (!(e <= 1)) return e * n.pow(r, e) / (e - 1)
                        },
                        median: function(r, e) {
                            return r * (e * n.SQRT2)
                        },
                        mode: function(r) {
                            return r
                        },
                        variance: function(r, e) {
                            if (!(e <= 2)) return r * r * e / (n.pow(e - 1, 2) * (e - 2))
                        }
                    }), r.extend(r.studentt, {
                        pdf: function(e, t) {
                            return t = t > 1e100 ? 1e100 : t, 1 / (n.sqrt(t) * r.betafn(.5, t / 2)) * n.pow(1 + e * e / t, -(t + 1) / 2)
                        },
                        cdf: function(e, t) {
                            var a = t / 2;
                            return r.ibeta((e + n.sqrt(e * e + t)) / (2 * n.sqrt(e * e + t)), a, a)
                        },
                        inv: function(e, t) {
                            var a = r.ibetainv(2 * n.min(e, 1 - e), .5 * t, .5);
                            return a = n.sqrt(t * (1 - a) / a), e > .5 ? a : -a
                        },
                        mean: function(r) {
                            return r > 1 ? 0 : void 0
                        },
                        median: function() {
                            return 0
                        },
                        mode: function() {
                            return 0
                        },
                        sample: function(e) {
                            return r.randn() * n.sqrt(e / (2 * r.randg(e / 2)))
                        },
                        variance: function(r) {
                            return r > 2 ? r / (r - 2) : r > 1 ? 1 / 0 : void 0
                        }
                    }), r.extend(r.weibull, {
                        pdf: function(r, e, t) {
                            return r < 0 || e < 0 || t < 0 ? 0 : t / e * n.pow(r / e, t - 1) * n.exp(-n.pow(r / e, t))
                        },
                        cdf: function(r, e, t) {
                            return r < 0 ? 0 : 1 - n.exp(-n.pow(r / e, t))
                        },
                        inv: function(r, e, t) {
                            return e * n.pow(-n.log(1 - r), 1 / t)
                        },
                        mean: function(n, e) {
                            return n * r.gammafn(1 + 1 / e)
                        },
                        median: function(r, e) {
                            return r * n.pow(n.log(2), 1 / e)
                        },
                        mode: function(r, e) {
                            return e <= 1 ? 0 : r * n.pow((e - 1) / e, 1 / e)
                        },
                        sample: function(e, t) {
                            return e * n.pow(-n.log(r._random_fn()), 1 / t)
                        },
                        variance: function(e, t) {
                            return e * e * r.gammafn(1 + 2 / t) - n.pow(r.weibull.mean(e, t), 2)
                        }
                    }), r.extend(r.uniform, {
                        pdf: function(r, n, e) {
                            return r < n || r > e ? 0 : 1 / (e - n)
                        },
                        cdf: function(r, n, e) {
                            return r < n ? 0 : r < e ? (r - n) / (e - n) : 1
                        },
                        inv: function(r, n, e) {
                            return n + r * (e - n)
                        },
                        mean: function(r, n) {
                            return .5 * (r + n)
                        },
                        median: function(n, e) {
                            return r.mean(n, e)
                        },
                        mode: function() {
                            throw new Error("mode is not yet implemented")
                        },
                        sample: function(n, e) {
                            return n / 2 + e / 2 + (e / 2 - n / 2) * (2 * r._random_fn() - 1)
                        },
                        variance: function(r, e) {
                            return n.pow(e - r, 2) / 12
                        }
                    }), r.extend(r.binomial, {
                        pdf: function(e, t, a) {
                            return 0 === a || 1 === a ? t * a === e ? 1 : 0 : r.combination(t, e) * n.pow(a, e) * n.pow(1 - a, t - e)
                        },
                        cdf: function(t, a, u) {
                            var o;
                            if (t < 0) return 0;
                            if (t >= a) return 1;
                            if (u < 0 || u > 1 || a <= 0) return NaN;
                            t = n.floor(t);
                            var i = u,
                                f = t + 1,
                                s = a - t,
                                l = f + s,
                                c = n.exp(r.gammaln(l) - r.gammaln(s) - r.gammaln(f) + f * n.log(i) + s * n.log(1 - i));
                            return o = i < (f + 1) / (l + 2) ? c * e(i, f, s, 1e-10) : 1 - c * e(1 - i, s, f, 1e-10), n.round(1e10 * (1 - o)) / 1e10
                        }
                    }), r.extend(r.negbin, {
                        pdf: function(e, t, a) {
                            return e === e >>> 0 && (e < 0 ? 0 : r.combination(e + t - 1, t - 1) * n.pow(1 - a, e) * n.pow(a, t))
                        },
                        cdf: function(n, e, t) {
                            var a = 0,
                                u = 0;
                            if (n < 0) return 0;
                            for (; u <= n; u++) a += r.negbin.pdf(u, e, t);
                            return a
                        }
                    }), r.extend(r.hypgeom, {
                        pdf: function(e, t, a, u) {
                            if (e !== e | 0) return !1;
                            if (e < 0 || e < a - (t - u)) return 0;
                            if (e > u || e > a) return 0;
                            if (2 * a > t) return 2 * u > t ? r.hypgeom.pdf(t - a - u + e, t, t - a, t - u) : r.hypgeom.pdf(u - e, t, t - a, u);
                            if (2 * u > t) return r.hypgeom.pdf(a - e, t, a, t - u);
                            if (a < u) return r.hypgeom.pdf(e, t, u, a);
                            for (var o = 1, i = 0, f = 0; f < e; f++) {
                                for (; o > 1 && i < u;) o *= 1 - a / (t - i), i++;
                                o *= (u - f) * (a - f) / ((f + 1) * (t - a - u + f + 1))
                            }
                            for (; i < u; i++) o *= 1 - a / (t - i);
                            return n.min(1, n.max(0, o))
                        },
                        cdf: function(e, t, a, u) {
                            if (e < 0 || e < a - (t - u)) return 0;
                            if (e >= u || e >= a) return 1;
                            if (2 * a > t) return 2 * u > t ? r.hypgeom.cdf(t - a - u + e, t, t - a, t - u) : 1 - r.hypgeom.cdf(u - e - 1, t, t - a, u);
                            if (2 * u > t) return 1 - r.hypgeom.cdf(a - e - 1, t, a, t - u);
                            if (a < u) return r.hypgeom.cdf(e, t, u, a);
                            for (var o = 1, i = 1, f = 0, s = 0; s < e; s++) {
                                for (; o > 1 && f < u;) {
                                    var l = 1 - a / (t - f);
                                    i *= l, o *= l, f++
                                }
                                i *= (u - s) * (a - s) / ((s + 1) * (t - a - u + s + 1)), o += i
                            }
                            for (; f < u; f++) o *= 1 - a / (t - f);
                            return n.min(1, n.max(0, o))
                        }
                    }), r.extend(r.poisson, {
                        pdf: function(e, t) {
                            return t < 0 || e % 1 != 0 || e < 0 ? 0 : n.pow(t, e) * n.exp(-t) / r.factorial(e)
                        },
                        cdf: function(n, e) {
                            var t = [],
                                a = 0;
                            if (n < 0) return 0;
                            for (; a <= n; a++) t.push(r.poisson.pdf(a, e));
                            return r.sum(t)
                        },
                        mean: function(r) {
                            return r
                        },
                        variance: function(r) {
                            return r
                        },
                        sampleSmall: function(e) {
                            var t = 1,
                                a = 0,
                                u = n.exp(-e);
                            do {
                                a++, t *= r._random_fn()
                            } while (t > u);
                            return a - 1
                        },
                        sampleLarge: function(e) {
                            var t, a, u, o, i, f, s, l, c, m, p = e;
                            for (o = n.sqrt(p), i = n.log(p), s = .931 + 2.53 * o, f = .02483 * s - .059, l = 1.1239 + 1.1328 / (s - 3.4), c = .9277 - 3.6224 / (s - 2);;) {
                                if (a = n.random() - .5, u = n.random(), m = .5 - n.abs(a), t = n.floor((2 * f / m + s) * a + p + .43), m >= .07 && u <= c) return t;
                                if (!(t < 0 || m < .013 && u > m) && n.log(u) + n.log(l) - n.log(f / (m * m) + s) <= t * i - p - r.loggam(t + 1)) return t
                            }
                        },
                        sample: function(r) {
                            return r < 10 ? this.sampleSmall(r) : this.sampleLarge(r)
                        }
                    }), r.extend(r.triangular, {
                        pdf: function(r, n, e, t) {
                            return e <= n || t < n || t > e ? NaN : r < n || r > e ? 0 : r < t ? 2 * (r - n) / ((e - n) * (t - n)) : r === t ? 2 / (e - n) : 2 * (e - r) / ((e - n) * (e - t))
                        },
                        cdf: function(r, e, t, a) {
                            return t <= e || a < e || a > t ? NaN : r <= e ? 0 : r >= t ? 1 : r <= a ? n.pow(r - e, 2) / ((t - e) * (a - e)) : 1 - n.pow(t - r, 2) / ((t - e) * (t - a))
                        },
                        inv: function(r, e, t, a) {
                            return t <= e || a < e || a > t ? NaN : r <= (a - e) / (t - e) ? e + (t - e) * n.sqrt(r * ((a - e) / (t - e))) : e + (t - e) * (1 - n.sqrt((1 - r) * (1 - (a - e) / (t - e))))
                        },
                        mean: function(r, n, e) {
                            return (r + n + e) / 3
                        },
                        median: function(r, e, t) {
                            return t <= (r + e) / 2 ? e - n.sqrt((e - r) * (e - t)) / n.sqrt(2) : t > (r + e) / 2 ? r + n.sqrt((e - r) * (t - r)) / n.sqrt(2) : void 0
                        },
                        mode: function(r, n, e) {
                            return e
                        },
                        sample: function(e, t, a) {
                            var u = r._random_fn();
                            return u < (a - e) / (t - e) ? e + n.sqrt(u * (t - e) * (a - e)) : t - n.sqrt((1 - u) * (t - e) * (t - a))
                        },
                        variance: function(r, n, e) {
                            return (r * r + n * n + e * e - r * n - r * e - n * e) / 18
                        }
                    }), r.extend(r.arcsine, {
                        pdf: function(r, e, t) {
                            return t <= e ? NaN : r <= e || r >= t ? 0 : 2 / n.PI * n.pow(n.pow(t - e, 2) - n.pow(2 * r - e - t, 2), -.5)
                        },
                        cdf: function(r, e, t) {
                            return r < e ? 0 : r < t ? 2 / n.PI * n.asin(n.sqrt((r - e) / (t - e))) : 1
                        },
                        inv: function(r, e, t) {
                            return e + (.5 - .5 * n.cos(n.PI * r)) * (t - e)
                        },
                        mean: function(r, n) {
                            return n <= r ? NaN : (r + n) / 2
                        },
                        median: function(r, n) {
                            return n <= r ? NaN : (r + n) / 2
                        },
                        mode: function() {
                            throw new Error("mode is not yet implemented")
                        },
                        sample: function(e, t) {
                            return (e + t) / 2 + (t - e) / 2 * n.sin(2 * n.PI * r.uniform.sample(0, 1))
                        },
                        variance: function(r, e) {
                            return e <= r ? NaN : n.pow(e - r, 2) / 8
                        }
                    }), r.extend(r.laplace, {
                        pdf: function(r, e, t) {
                            return t <= 0 ? 0 : n.exp(-n.abs(r - e) / t) / (2 * t)
                        },
                        cdf: function(r, e, t) {
                            return t <= 0 ? 0 : r < e ? .5 * n.exp((r - e) / t) : 1 - .5 * n.exp(-(r - e) / t)
                        },
                        mean: function(r) {
                            return r
                        },
                        median: function(r) {
                            return r
                        },
                        mode: function(r) {
                            return r
                        },
                        variance: function(r, n) {
                            return 2 * n * n
                        },
                        sample: function(e, a) {
                            var u = r._random_fn() - .5;
                            return e - a * t(u) * n.log(1 - 2 * n.abs(u))
                        }
                    }), r.extend(r.tukey, {
                        cdf: function(e, t, u) {
                            var o = t,
                                i = [.9894009349916499, .9445750230732326, .8656312023878318, .755404408355003, .6178762444026438, .45801677765722737, .2816035507792589, .09501250983763744],
                                f = [.027152459411754096, .062253523938647894, .09515851168249279, .12462897125553388, .14959598881657674, .16915651939500254, .18260341504492358, .1894506104550685];
                            if (e <= 0) return 0;
                            if (u < 2 || o < 2) return NaN;
                            if (!Number.isFinite(e)) return 1;
                            if (u > 25e3) return a(e, 1, o);
                            var s, l = .5 * u,
                                c = l * n.log(u) - u * n.log(2) - r.gammaln(l),
                                m = l - 1,
                                p = .25 * u;
                            s = u <= 100 ? 1 : u <= 800 ? .5 : u <= 5e3 ? .25 : .125, c += n.log(s);
                            for (var v = 0, h = 1; h <= 50; h++) {
                                for (var g = 0, E = (2 * h - 1) * s, N = 1; N <= 16; N++) {
                                    var I, b;
                                    8 < N ? (I = N - 8 - 1, b = c + m * n.log(E + i[I] * s) - (i[I] * s + E) * p) : (I = N - 1, b = c + m * n.log(E - i[I] * s) + (i[I] * s - E) * p);
                                    var d;
                                    if (b >= -30) {
                                        d = 8 < N ? e * n.sqrt(.5 * (i[I] * s + E)) : e * n.sqrt(.5 * (-i[I] * s + E));
                                        g += a(d, 1, o) * f[I] * n.exp(b)
                                    }
                                }
                                if (h * s >= 1 && g <= 1e-14) break;
                                v += g
                            }
                            if (g > 1e-14) throw new Error("tukey.cdf failed to converge");
                            return v > 1 && (v = 1), v
                        },
                        inv: function(e, t, a) {
                            var o = t;
                            if (a < 2 || o < 2) return NaN;
                            if (e < 0 || e > 1) return NaN;
                            if (0 === e) return 0;
                            if (1 === e) return 1 / 0;
                            var i, f = u(e, o, a),
                                s = r.tukey.cdf(f, t, a) - e;
                            i = s > 0 ? n.max(0, f - 1) : f + 1;
                            for (var l, c = r.tukey.cdf(i, t, a) - e, m = 1; m < 50; m++) {
                                l = i - c * (i - f) / (c - s), s = c, f = i, l < 0 && (l = 0, c = -e), c = r.tukey.cdf(l, t, a) - e, i = l;
                                if (n.abs(i - f) < 1e-4) return l
                            }
                            throw new Error("tukey.inv failed to converge")
                        }
                    })
                }(r, Math),
                function(r, n) {
                    function e(n) {
                        return a(n) || n instanceof r
                    }
                    var t = Array.prototype.push,
                        a = r.utils.isArray;
                    r.extend({
                            add: function(n, t) {
                                return e(t) ? (e(t[0]) || (t = [t]), r.map(n, function(r, n, e) {
                                    return r + t[n][e]
                                })) : r.map(n, function(r) {
                                    return r + t
                                })
                            },
                            subtract: function(n, t) {
                                return e(t) ? (e(t[0]) || (t = [t]), r.map(n, function(r, n, e) {
                                    return r - t[n][e] || 0
                                })) : r.map(n, function(r) {
                                    return r - t
                                })
                            },
                            divide: function(n, t) {
                                return e(t) ? (e(t[0]) || (t = [t]), r.multiply(n, r.inv(t))) : r.map(n, function(r) {
                                    return r / t
                                })
                            },
                            multiply: function(n, t) {
                                var a, u, o, i, f, s, l, c;
                                if (void 0 === n.length && void 0 === t.length) return n * t;
                                if (f = n.length, s = n[0].length, l = r.zeros(f, o = e(t) ? t[0].length : s), c = 0, e(t)) {
                                    for (; c < o; c++)
                                        for (a = 0; a < f; a++) {
                                            for (i = 0, u = 0; u < s; u++) i += n[a][u] * t[u][c];
                                            l[a][c] = i
                                        }
                                    return 1 === f && 1 === c ? l[0][0] : l
                                }
                                return r.map(n, function(r) {
                                    return r * t
                                })
                            },
                            outer: function(n, e) {
                                return r.multiply(n.map(function(r) {
                                    return [r]
                                }), [e])
                            },
                            dot: function(n, t) {
                                e(n[0]) || (n = [n]), e(t[0]) || (t = [t]);
                                for (var a, u, o = 1 === n[0].length && 1 !== n.length ? r.transpose(n) : n, i = 1 === t[0].length && 1 !== t.length ? r.transpose(t) : t, f = [], s = 0, l = o.length, c = o[0].length; s < l; s++) {
                                    for (f[s] = [], a = 0, u = 0; u < c; u++) a += o[s][u] * i[s][u];
                                    f[s] = a
                                }
                                return 1 === f.length ? f[0] : f
                            },
                            pow: function(e, t) {
                                return r.map(e, function(r) {
                                    return n.pow(r, t)
                                })
                            },
                            exp: function(e) {
                                return r.map(e, function(r) {
                                    return n.exp(r)
                                })
                            },
                            log: function(e) {
                                return r.map(e, function(r) {
                                    return n.log(r)
                                })
                            },
                            abs: function(e) {
                                return r.map(e, function(r) {
                                    return n.abs(r)
                                })
                            },
                            norm: function(r, t) {
                                var a = 0,
                                    u = 0;
                                for (isNaN(t) && (t = 2), e(r[0]) && (r = r[0]); u < r.length; u++) a += n.pow(n.abs(r[u]), t);
                                return n.pow(a, 1 / t)
                            },
                            angle: function(e, t) {
                                return n.acos(r.dot(e, t) / (r.norm(e) * r.norm(t)))
                            },
                            aug: function(r, n) {
                                var e, a = [];
                                for (e = 0; e < r.length; e++) a.push(r[e].slice());
                                for (e = 0; e < a.length; e++) t.apply(a[e], n[e]);
                                return a
                            },
                            inv: function(n) {
                                for (var e, t = n.length, a = n[0].length, u = r.identity(t, a), o = r.gauss_jordan(n, u), i = [], f = 0; f < t; f++)
                                    for (i[f] = [], e = a; e < o[0].length; e++) i[f][e - a] = o[f][e];
                                return i
                            },
                            det: function(r) {
                                var n, e = r.length,
                                    t = 2 * e,
                                    a = new Array(t),
                                    u = e - 1,
                                    o = t - 1,
                                    i = u - e + 1,
                                    f = o,
                                    s = 0,
                                    l = 0;
                                if (2 === e) return r[0][0] * r[1][1] - r[0][1] * r[1][0];
                                for (; s < t; s++) a[s] = 1;
                                for (s = 0; s < e; s++) {
                                    for (n = 0; n < e; n++) a[i < 0 ? i + e : i] *= r[s][n], a[f < e ? f + e : f] *= r[s][n], i++, f--;
                                    i = --u - e + 1, f = --o
                                }
                                for (s = 0; s < e; s++) l += a[s];
                                for (; s < t; s++) l -= a[s];
                                return l
                            },
                            gauss_elimination: function(e, t) {
                                var a, u, o, i, f = 0,
                                    s = 0,
                                    l = e.length,
                                    c = e[0].length,
                                    m = 1,
                                    p = 0,
                                    v = [];
                                for (e = r.aug(e, t), a = e[0].length, f = 0; f < l; f++) {
                                    for (u = e[f][f], s = f, i = f + 1; i < c; i++) u < n.abs(e[i][f]) && (u = e[i][f], s = i);
                                    if (s != f)
                                        for (i = 0; i < a; i++) o = e[f][i], e[f][i] = e[s][i], e[s][i] = o;
                                    for (s = f + 1; s < l; s++)
                                        for (m = e[s][f] / e[f][f], i = f; i < a; i++) e[s][i] = e[s][i] - m * e[f][i]
                                }
                                for (f = l - 1; f >= 0; f--) {
                                    for (p = 0, s = f + 1; s <= l - 1; s++) p += v[s] * e[f][s];
                                    v[f] = (e[f][a - 1] - p) / e[f][f]
                                }
                                return v
                            },
                            gauss_jordan: function(e, t) {
                                var a, u, o, i = r.aug(e, t),
                                    f = i.length,
                                    s = i[0].length,
                                    l = 0;
                                for (u = 0; u < f; u++) {
                                    var c = u;
                                    for (o = u + 1; o < f; o++) n.abs(i[o][u]) > n.abs(i[c][u]) && (c = o);
                                    var m = i[u];
                                    for (i[u] = i[c], i[c] = m, o = u + 1; o < f; o++)
                                        for (l = i[o][u] / i[u][u], a = u; a < s; a++) i[o][a] -= i[u][a] * l
                                }
                                for (u = f - 1; u >= 0; u--) {
                                    for (l = i[u][u], o = 0; o < u; o++)
                                        for (a = s - 1; a > u - 1; a--) i[o][a] -= i[u][a] * i[o][u] / l;
                                    for (i[u][u] /= l, a = f; a < s; a++) i[u][a] /= l
                                }
                                return i
                            },
                            triaUpSolve: function(n, e) {
                                var t, a = n[0].length,
                                    u = r.zeros(1, a)[0],
                                    o = !1;
                                return void 0 != e[0].length && (e = e.map(function(r) {
                                    return r[0]
                                }), o = !0), r.arange(a - 1, -1, -1).forEach(function(o) {
                                    t = r.arange(o + 1, a).map(function(r) {
                                        return u[r] * n[o][r]
                                    }), u[o] = (e[o] - r.sum(t)) / n[o][o]
                                }), o ? u.map(function(r) {
                                    return [r]
                                }) : u
                            },
                            triaLowSolve: function(n, e) {
                                var t, a = n[0].length,
                                    u = r.zeros(1, a)[0],
                                    o = !1;
                                return void 0 != e[0].length && (e = e.map(function(r) {
                                    return r[0]
                                }), o = !0), r.arange(a).forEach(function(a) {
                                    t = r.arange(a).map(function(r) {
                                        return n[a][r] * u[r]
                                    }), u[a] = (e[a] - r.sum(t)) / n[a][a]
                                }), o ? u.map(function(r) {
                                    return [r]
                                }) : u
                            },
                            lu: function(n) {
                                var e, t = n.length,
                                    a = r.identity(t),
                                    u = r.zeros(n.length, n[0].length);
                                return r.arange(t).forEach(function(r) {
                                    u[0][r] = n[0][r]
                                }), r.arange(1, t).forEach(function(o) {
                                    r.arange(o).forEach(function(t) {
                                        e = r.arange(t).map(function(r) {
                                            return a[o][r] * u[r][t]
                                        }), a[o][t] = (n[o][t] - r.sum(e)) / u[t][t]
                                    }), r.arange(o, t).forEach(function(t) {
                                        e = r.arange(o).map(function(r) {
                                            return a[o][r] * u[r][t]
                                        }), u[o][t] = n[e.length][t] - r.sum(e)
                                    })
                                }), [a, u]
                            },
                            cholesky: function(e) {
                                var t, a = e.length,
                                    u = r.zeros(e.length, e[0].length);
                                return r.arange(a).forEach(function(o) {
                                    t = r.arange(o).map(function(r) {
                                        return n.pow(u[o][r], 2)
                                    }), u[o][o] = n.sqrt(e[o][o] - r.sum(t)), r.arange(o + 1, a).forEach(function(n) {
                                        t = r.arange(o).map(function(r) {
                                            return u[o][r] * u[n][r]
                                        }), u[n][o] = (e[o][n] - r.sum(t)) / u[o][o]
                                    })
                                }), u
                            },
                            gauss_jacobi: function(e, t, a, u) {
                                for (var o, i, f, s, l = 0, c = 0, m = e.length, p = [], v = [], h = []; l < m; l++)
                                    for (p[l] = [], v[l] = [], h[l] = [], c = 0; c < m; c++) l > c ? (p[l][c] = e[l][c], v[l][c] = h[l][c] = 0) : l < c ? (v[l][c] = e[l][c], p[l][c] = h[l][c] = 0) : (h[l][c] = e[l][c], p[l][c] = v[l][c] = 0);
                                for (f = r.multiply(r.multiply(r.inv(h), r.add(p, v)), -1), i = r.multiply(r.inv(h), t), o = a, s = r.add(r.multiply(f, a), i), l = 2; n.abs(r.norm(r.subtract(s, o))) > u;) o = s, s = r.add(r.multiply(f, o), i), l++;
                                return s
                            },
                            gauss_seidel: function(e, t, a, u) {
                                for (var o, i, f, s, l, c = 0, m = e.length, p = [], v = [], h = []; c < m; c++)
                                    for (p[c] = [], v[c] = [], h[c] = [], o = 0; o < m; o++) c > o ? (p[c][o] = e[c][o], v[c][o] = h[c][o] = 0) : c < o ? (v[c][o] = e[c][o], p[c][o] = h[c][o] = 0) : (h[c][o] = e[c][o], p[c][o] = v[c][o] = 0);
                                for (s = r.multiply(r.multiply(r.inv(r.add(h, p)), v), -1), f = r.multiply(r.inv(r.add(h, p)), t), i = a, l = r.add(r.multiply(s, a), f), c = 2; n.abs(r.norm(r.subtract(l, i))) > u;) i = l, l = r.add(r.multiply(s, i), f), c += 1;
                                return l
                            },
                            SOR: function(e, t, a, u, o) {
                                for (var i, f, s, l, c, m = 0, p = e.length, v = [], h = [], g = []; m < p; m++)
                                    for (v[m] = [], h[m] = [], g[m] = [], i = 0; i < p; i++) m > i ? (v[m][i] = e[m][i], h[m][i] = g[m][i] = 0) : m < i ? (h[m][i] = e[m][i], v[m][i] = g[m][i] = 0) : (g[m][i] = e[m][i], v[m][i] = h[m][i] = 0);
                                for (l = r.multiply(r.inv(r.add(g, r.multiply(v, o))), r.subtract(r.multiply(g, 1 - o), r.multiply(h, o))), s = r.multiply(r.multiply(r.inv(r.add(g, r.multiply(v, o))), t), o), f = a, c = r.add(r.multiply(l, a), s), m = 2; n.abs(r.norm(r.subtract(c, f))) > u;) f = c, c = r.add(r.multiply(l, f), s), m++;
                                return c
                            },
                            householder: function(e) {
                                for (var t, a, u, o, i, f = e.length, s = e[0].length, l = 0, c = [], m = []; l < f - 1; l++) {
                                    for (t = 0, o = l + 1; o < s; o++) t += e[o][l] * e[o][l];
                                    for (i = e[l + 1][l] > 0 ? -1 : 1, t = i * n.sqrt(t), a = n.sqrt((t * t - e[l + 1][l] * t) / 2), c = r.zeros(f, 1), c[l + 1][0] = (e[l + 1][l] - t) / (2 * a), u = l + 2; u < f; u++) c[u][0] = e[u][l] / (2 * a);
                                    m = r.subtract(r.identity(f, s), r.multiply(r.multiply(c, r.transpose(c)), 2)), e = r.multiply(m, r.multiply(e, m))
                                }
                                return e
                            },
                            QR: function() {
                                function e(e) {
                                    var u = e.length,
                                        o = e[0].length,
                                        i = r.zeros(o, o);
                                    e = r.copy(e);
                                    var f, s, l;
                                    for (s = 0; s < o; s++) {
                                        for (i[s][s] = n.sqrt(t(a(u).map(function(r) {
                                                return e[r][s] * e[r][s]
                                            }))), f = 0; f < u; f++) e[f][s] = e[f][s] / i[s][s];
                                        for (l = s + 1; l < o; l++)
                                            for (i[s][l] = t(a(u).map(function(r) {
                                                    return e[r][s] * e[r][l]
                                                })), f = 0; f < u; f++) e[f][l] = e[f][l] - e[f][s] * i[s][l]
                                    }
                                    return [e, i]
                                }
                                var t = r.sum,
                                    a = r.arange;
                                return e
                            }(),
                            lstsq: function() {
                                function n(n) {
                                    n = r.copy(n);
                                    var e = n.length,
                                        t = r.identity(e);
                                    return r.arange(e - 1, -1, -1).forEach(function(e) {
                                        r.sliceAssign(t, {
                                            row: e
                                        }, r.divide(r.slice(t, {
                                            row: e
                                        }), n[e][e])), r.sliceAssign(n, {
                                            row: e
                                        }, r.divide(r.slice(n, {
                                            row: e
                                        }), n[e][e])), r.arange(e).forEach(function(a) {
                                            var u = r.multiply(n[a][e], -1),
                                                o = r.slice(n, {
                                                    row: a
                                                }),
                                                i = r.multiply(r.slice(n, {
                                                    row: e
                                                }), u);
                                            r.sliceAssign(n, {
                                                row: a
                                            }, r.add(o, i));
                                            var f = r.slice(t, {
                                                    row: a
                                                }),
                                                s = r.multiply(r.slice(t, {
                                                    row: e
                                                }), u);
                                            r.sliceAssign(t, {
                                                row: a
                                            }, r.add(f, s))
                                        })
                                    }), t
                                }

                                function e(e, t) {
                                    var a = !1;
                                    void 0 === t[0].length && (t = t.map(function(r) {
                                        return [r]
                                    }), a = !0);
                                    var u = r.QR(e),
                                        o = u[0],
                                        i = u[1],
                                        f = e[0].length,
                                        s = r.slice(o, {
                                            col: {
                                                end: f
                                            }
                                        }),
                                        l = r.slice(i, {
                                            row: {
                                                end: f
                                            }
                                        }),
                                        c = n(l),
                                        m = r.transpose(s);
                                    void 0 === m[0].length && (m = [m]);
                                    var p = r.multiply(r.multiply(c, m), t);
                                    return void 0 === p.length && (p = [
                                        [p]
                                    ]), a ? p.map(function(r) {
                                        return r[0]
                                    }) : p
                                }
                                return e
                            }(),
                            jacobi: function(e) {
                                for (var t, a, u, o, i, f, s, l, c = 1, m = e.length, p = r.identity(m, m), v = []; 1 === c;) {
                                    for (f = e[0][1], o = 0, i = 1, a = 0; a < m; a++)
                                        for (u = 0; u < m; u++) a != u && f < n.abs(e[a][u]) && (f = n.abs(e[a][u]), o = a, i = u);
                                    for (s = e[o][o] === e[i][i] ? e[o][i] > 0 ? n.PI / 4 : -n.PI / 4 : n.atan(2 * e[o][i] / (e[o][o] - e[i][i])) / 2, l = r.identity(m, m), l[o][o] = n.cos(s), l[o][i] = -n.sin(s), l[i][o] = n.sin(s), l[i][i] = n.cos(s), p = r.multiply(p, l), t = r.multiply(r.multiply(r.inv(l), e), l), e = t, c = 0, a = 1; a < m; a++)
                                        for (u = 1; u < m; u++) a != u && n.abs(e[a][u]) > .001 && (c = 1)
                                }
                                for (a = 0; a < m; a++) v.push(e[a][a]);
                                return [p, v]
                            },
                            rungekutta: function(r, n, e, t, a, u) {
                                var o, i, f, s, l;
                                if (2 === u)
                                    for (; t <= e;) o = n * r(t, a), i = n * r(t + n, a + o), f = a + (o + i) / 2, a = f, t += n;
                                if (4 === u)
                                    for (; t <= e;) o = n * r(t, a), i = n * r(t + n / 2, a + o / 2), s = n * r(t + n / 2, a + i / 2), l = n * r(t + n, a + s), f = a + (o + 2 * i + 2 * s + l) / 6, a = f, t += n;
                                return a
                            },
                            romberg: function(r, e, t, a) {
                                for (var u, o, i, f, s, l = 0, c = (t - e) / 2, m = [], p = [], v = []; l < a / 2;) {
                                    for (s = r(e), i = e, f = 0; i <= t; i += c, f++) m[f] = i;
                                    for (u = m.length, i = 1; i < u - 1; i++) s += (i % 2 != 0 ? 4 : 2) * r(m[i]);
                                    s = c / 3 * (s + r(t)), v[l] = s, c /= 2, l++
                                }
                                for (o = v.length, u = 1; 1 !== o;) {
                                    for (i = 0; i < o - 1; i++) p[i] = (n.pow(4, u) * v[i + 1] - v[i]) / (n.pow(4, u) - 1);
                                    o = p.length, v = p, p = [], u++
                                }
                                return v
                            },
                            richardson: function(r, e, t, a) {
                                function u(r, n) {
                                    for (var e, t = 0, a = r.length; t < a; t++) r[t] === n && (e = t);
                                    return e
                                }
                                for (var o, i, f, s, l, c = n.abs(t - r[u(r, t) + 1]), m = 0, p = [], v = []; a >= c;) o = u(r, t + a), i = u(r, t), p[m] = (e[o] - 2 * e[i] + e[2 * i - o]) / (a * a), a /= 2, m++;
                                for (s = p.length, f = 1; 1 != s;) {
                                    for (l = 0; l < s - 1; l++) v[l] = (n.pow(4, f) * p[l + 1] - p[l]) / (n.pow(4, f) - 1);
                                    s = v.length, p = v, v = [], f++
                                }
                                return p
                            },
                            simpson: function(r, n, e, t) {
                                for (var a, u = (e - n) / t, o = r(n), i = [], f = n, s = 0, l = 1; f <= e; f += u, s++) i[s] = f;
                                for (a = i.length; l < a - 1; l++) o += (l % 2 != 0 ? 4 : 2) * r(i[l]);
                                return u / 3 * (o + r(e))
                            },
                            hermite: function(r, n, e, t) {
                                for (var a, u = r.length, o = 0, i = 0, f = [], s = [], l = [], c = []; i < u; i++) {
                                    for (f[i] = 1, a = 0; a < u; a++) i != a && (f[i] *= (t - r[a]) / (r[i] - r[a]));
                                    for (s[i] = 0, a = 0; a < u; a++) i != a && (s[i] += 1 / (r[i] - r[a]));
                                    l[i] = (1 - 2 * (t - r[i]) * s[i]) * (f[i] * f[i]), c[i] = (t - r[i]) * (f[i] * f[i]), o += l[i] * n[i] + c[i] * e[i]
                                }
                                return o
                            },
                            lagrange: function(r, n, e) {
                                for (var t, a, u = 0, o = 0, i = r.length; o < i; o++) {
                                    for (a = n[o], t = 0; t < i; t++) o != t && (a *= (e - r[t]) / (r[o] - r[t]));
                                    u += a
                                }
                                return u
                            },
                            cubic_spline: function(n, e, t) {
                                for (var a, u = n.length, o = 0, i = [], f = [], s = [], l = [], c = [], m = [], p = []; o < u - 1; o++) c[o] = n[o + 1] - n[o];
                                for (s[0] = 0, o = 1; o < u - 1; o++) s[o] = 3 / c[o] * (e[o + 1] - e[o]) - 3 / c[o - 1] * (e[o] - e[o - 1]);
                                for (o = 1; o < u - 1; o++) i[o] = [], f[o] = [], i[o][o - 1] = c[o - 1], i[o][o] = 2 * (c[o - 1] + c[o]), i[o][o + 1] = c[o], f[o][0] = s[o];
                                for (l = r.multiply(r.inv(i), f), a = 0; a < u - 1; a++) m[a] = (e[a + 1] - e[a]) / c[a] - c[a] * (l[a + 1][0] + 2 * l[a][0]) / 3, p[a] = (l[a + 1][0] - l[a][0]) / (3 * c[a]);
                                for (a = 0; a < u && !(n[a] > t); a++);
                                return a -= 1, e[a] + (t - n[a]) * m[a] + r.sq(t - n[a]) * l[a] + (t - n[a]) * r.sq(t - n[a]) * p[a]
                            },
                            gauss_quadrature: function() {
                                throw new Error("gauss_quadrature not yet implemented")
                            },
                            PCA: function(n) {
                                var e, t, a = n.length,
                                    u = n[0].length,
                                    o = 0,
                                    i = [],
                                    f = [],
                                    s = [],
                                    l = [],
                                    c = [],
                                    m = [],
                                    p = [],
                                    v = [],
                                    h = [],
                                    g = [];
                                for (o = 0; o < a; o++) i[o] = r.sum(n[o]) / u;
                                for (o = 0; o < u; o++)
                                    for (p[o] = [], e = 0; e < a; e++) p[o][e] = n[e][o] - i[e];
                                for (p = r.transpose(p), o = 0; o < a; o++)
                                    for (v[o] = [], e = 0; e < a; e++) v[o][e] = r.dot([p[o]], [p[e]]) / (u - 1);
                                for (s = r.jacobi(v), h = s[0], f = s[1], g = r.transpose(h), o = 0; o < f.length; o++)
                                    for (e = o; e < f.length; e++) f[o] < f[e] && (t = f[o], f[o] = f[e], f[e] = t, l = g[o], g[o] = g[e], g[e] = l);
                                for (m = r.transpose(p), o = 0; o < a; o++)
                                    for (c[o] = [], e = 0; e < m.length; e++) c[o][e] = r.dot([g[o]], [m[e]]);
                                return [n, f, g, c]
                            }
                        }),
                        function(n) {
                            for (var e = 0; e < n.length; e++) ! function(n) {
                                r.fn[n] = function(e, t) {
                                    var a = this;
                                    return t ? (setTimeout(function() {
                                        t.call(a, r.fn[n].call(a, e))
                                    }, 15), this) : "number" == typeof r[n](this, e) ? r[n](this, e) : r(r[n](this, e))
                                }
                            }(n[e])
                        }("add divide multiply subtract dot pow exp log abs norm angle".split(" "))
                }(r, Math),
                function(r, n) {
                    function e(r, e, t, a) {
                        if (r > 1 || t > 1 || r <= 0 || t <= 0) throw new Error("Proportions should be greater than 0 and less than 1");
                        var u = (r * e + t * a) / (e + a);
                        return (r - t) / n.sqrt(u * (1 - u) * (1 / e + 1 / a))
                    }
                    var t = [].slice,
                        a = r.utils.isNumber,
                        u = r.utils.isArray;
                    r.extend({
                        zscore: function() {
                            var n = t.call(arguments);
                            return a(n[1]) ? (n[0] - n[1]) / n[2] : (n[0] - r.mean(n[1])) / r.stdev(n[1], n[2])
                        },
                        ztest: function() {
                            var e, a = t.call(arguments);
                            return u(a[1]) ? (e = r.zscore(a[0], a[1], a[3]), 1 === a[2] ? r.normal.cdf(-n.abs(e), 0, 1) : 2 * r.normal.cdf(-n.abs(e), 0, 1)) : a.length > 2 ? (e = r.zscore(a[0], a[1], a[2]), 1 === a[3] ? r.normal.cdf(-n.abs(e), 0, 1) : 2 * r.normal.cdf(-n.abs(e), 0, 1)) : (e = a[0], 1 === a[1] ? r.normal.cdf(-n.abs(e), 0, 1) : 2 * r.normal.cdf(-n.abs(e), 0, 1))
                        }
                    }), r.extend(r.fn, {
                        zscore: function(r, n) {
                            return (r - this.mean()) / this.stdev(n)
                        },
                        ztest: function(e, t, a) {
                            var u = n.abs(this.zscore(e, a));
                            return 1 === t ? r.normal.cdf(-u, 0, 1) : 2 * r.normal.cdf(-u, 0, 1)
                        }
                    }), r.extend({
                        tscore: function() {
                            var e = t.call(arguments);
                            return 4 === e.length ? (e[0] - e[1]) / (e[2] / n.sqrt(e[3])) : (e[0] - r.mean(e[1])) / (r.stdev(e[1], !0) / n.sqrt(e[1].length))
                        },
                        ttest: function() {
                            var e, u = t.call(arguments);
                            return 5 === u.length ? (e = n.abs(r.tscore(u[0], u[1], u[2], u[3])), 1 === u[4] ? r.studentt.cdf(-e, u[3] - 1) : 2 * r.studentt.cdf(-e, u[3] - 1)) : a(u[1]) ? (e = n.abs(u[0]), 1 == u[2] ? r.studentt.cdf(-e, u[1] - 1) : 2 * r.studentt.cdf(-e, u[1] - 1)) : (e = n.abs(r.tscore(u[0], u[1])), 1 == u[2] ? r.studentt.cdf(-e, u[1].length - 1) : 2 * r.studentt.cdf(-e, u[1].length - 1))
                        }
                    }), r.extend(r.fn, {
                        tscore: function(r) {
                            return (r - this.mean()) / (this.stdev(!0) / n.sqrt(this.cols()))
                        },
                        ttest: function(e, t) {
                            return 1 === t ? 1 - r.studentt.cdf(n.abs(this.tscore(e)), this.cols() - 1) : 2 * r.studentt.cdf(-n.abs(this.tscore(e)), this.cols() - 1)
                        }
                    }), r.extend({
                        anovafscore: function() {
                            var e, a, u, o, i, f, s, l, c = t.call(arguments);
                            if (1 === c.length) {
                                for (i = new Array(c[0].length), s = 0; s < c[0].length; s++) i[s] = c[0][s];
                                c = i
                            }
                            for (a = new Array, s = 0; s < c.length; s++) a = a.concat(c[s]);
                            for (u = r.mean(a), e = 0, s = 0; s < c.length; s++) e += c[s].length * n.pow(r.mean(c[s]) - u, 2);
                            for (e /= c.length - 1, f = 0, s = 0; s < c.length; s++)
                                for (o = r.mean(c[s]), l = 0; l < c[s].length; l++) f += n.pow(c[s][l] - o, 2);
                            return f /= a.length - c.length, e / f
                        },
                        anovaftest: function() {
                            var n, e, u, o, i = t.call(arguments);
                            if (a(i[0])) return 1 - r.centralF.cdf(i[0], i[1], i[2]);
                            var f = r.anovafscore(i);
                            for (n = i.length - 1, u = 0, o = 0; o < i.length; o++) u += i[o].length;
                            return e = u - n - 1, 1 - r.centralF.cdf(f, n, e)
                        },
                        ftest: function(n, e, t) {
                            return 1 - r.centralF.cdf(n, e, t)
                        }
                    }), r.extend(r.fn, {
                        anovafscore: function() {
                            return r.anovafscore(this.toArray())
                        },
                        anovaftes: function() {
                            var n, e = 0;
                            for (n = 0; n < this.length; n++) e += this[n].length;
                            return r.ftest(this.anovafscore(), this.length - 1, e - this.length)
                        }
                    }), r.extend({
                        qscore: function() {
                            var e, u, o, i, f, s = t.call(arguments);
                            return a(s[0]) ? (e = s[0], u = s[1], o = s[2], i = s[3], f = s[4]) : (e = r.mean(s[0]), u = r.mean(s[1]), o = s[0].length, i = s[1].length, f = s[2]), n.abs(e - u) / (f * n.sqrt((1 / o + 1 / i) / 2))
                        },
                        qtest: function() {
                            var n, e = t.call(arguments);
                            3 === e.length ? (n = e[0], e = e.slice(1)) : 7 === e.length ? (n = r.qscore(e[0], e[1], e[2], e[3], e[4]), e = e.slice(5)) : (n = r.qscore(e[0], e[1], e[2]), e = e.slice(3));
                            var a = e[0],
                                u = e[1];
                            return 1 - r.tukey.cdf(n, u, a - u)
                        },
                        tukeyhsd: function(n) {
                            for (var e = r.pooledstdev(n), t = n.map(function(n) {
                                    return r.mean(n)
                                }), a = n.reduce(function(r, n) {
                                    return r + n.length
                                }, 0), u = [], o = 0; o < n.length; ++o)
                                for (var i = o + 1; i < n.length; ++i) {
                                    var f = r.qtest(t[o], t[i], n[o].length, n[i].length, e, a, n.length);
                                    u.push([
                                        [o, i], f
                                    ])
                                }
                            return u
                        }
                    }), r.extend({
                        normalci: function() {
                            var e, a = t.call(arguments),
                                u = new Array(2);
                            return e = 4 === a.length ? n.abs(r.normal.inv(a[1] / 2, 0, 1) * a[2] / n.sqrt(a[3])) : n.abs(r.normal.inv(a[1] / 2, 0, 1) * r.stdev(a[2]) / n.sqrt(a[2].length)), u[0] = a[0] - e, u[1] = a[0] + e, u
                        },
                        tci: function() {
                            var e, a = t.call(arguments),
                                u = new Array(2);
                            return e = 4 === a.length ? n.abs(r.studentt.inv(a[1] / 2, a[3] - 1) * a[2] / n.sqrt(a[3])) : n.abs(r.studentt.inv(a[1] / 2, a[2].length - 1) * r.stdev(a[2], !0) / n.sqrt(a[2].length)), u[0] = a[0] - e, u[1] = a[0] + e, u
                        },
                        significant: function(r, n) {
                            return r < n
                        }
                    }), r.extend(r.fn, {
                        normalci: function(n, e) {
                            return r.normalci(n, e, this.toArray())
                        },
                        tci: function(n, e) {
                            return r.tci(n, e, this.toArray())
                        }
                    }), r.extend(r.fn, {
                        oneSidedDifferenceOfProportions: function(n, t, a, u) {
                            var o = e(n, t, a, u);
                            return r.ztest(o, 1)
                        },
                        twoSidedDifferenceOfProportions: function(n, t, a, u) {
                            var o = e(n, t, a, u);
                            return r.ztest(o, 2)
                        }
                    })
                }(r, Math), r.models = function() {
                    function n(n) {
                        var t = n[0].length;
                        return r.arange(t).map(function(a) {
                            var u = r.arange(t).filter(function(r) {
                                return r !== a
                            });
                            return e(r.col(n, a).map(function(r) {
                                return r[0]
                            }), r.col(n, u))
                        })
                    }

                    function e(n, e) {
                        var t = n.length,
                            a = e[0].length - 1,
                            u = t - a - 1,
                            o = r.lstsq(e, n),
                            i = r.multiply(e, o.map(function(r) {
                                return [r]
                            })).map(function(r) {
                                return r[0]
                            }),
                            f = r.subtract(n, i),
                            s = r.mean(n),
                            l = r.sum(i.map(function(r) {
                                return Math.pow(r - s, 2)
                            })),
                            c = r.sum(n.map(function(r, n) {
                                return Math.pow(r - i[n], 2)
                            })),
                            m = l + c;
                        return {
                            exog: e,
                            endog: n,
                            nobs: t,
                            df_model: a,
                            df_resid: u,
                            coef: o,
                            predict: i,
                            resid: f,
                            ybar: s,
                            SST: m,
                            SSE: l,
                            SSR: c,
                            R2: l / m
                        }
                    }

                    function t(e) {
                        var t = n(e.exog),
                            a = Math.sqrt(e.SSR / e.df_resid),
                            u = t.map(function(r) {
                                var n = r.SST,
                                    e = r.R2;
                                return a / Math.sqrt(n * (1 - e))
                            }),
                            o = e.coef.map(function(r, n) {
                                return (r - 0) / u[n]
                            }),
                            i = o.map(function(n) {
                                var t = r.studentt.cdf(n, e.df_resid);
                                return 2 * (t > .5 ? 1 - t : t)
                            }),
                            f = r.studentt.inv(.975, e.df_resid),
                            s = e.coef.map(function(r, n) {
                                var e = f * u[n];
                                return [r - e, r + e]
                            });
                        return {
                            se: u,
                            t: o,
                            p: i,
                            sigmaHat: a,
                            interval95: s
                        }
                    }

                    function a(n) {
                        var e = n.R2 / n.df_model / ((1 - n.R2) / n.df_resid);
                        return {
                            F_statistic: e,
                            pvalue: 1 - function(n, e, t) {
                                return r.beta.cdf(n / (t / e + n), e / 2, t / 2)
                            }(e, n.df_model, n.df_resid)
                        }
                    }

                    function u(r, n) {
                        var u = e(r, n),
                            o = t(u),
                            i = a(u),
                            f = 1 - (1 - u.R2) * ((u.nobs - 1) / u.df_resid);
                        return u.t = o, u.f = i, u.adjust_R2 = f, u
                    }
                    return {
                        ols: u
                    }
                }(), r.extend({
                    buildxmatrix: function() {
                        for (var n = new Array(arguments.length), e = 0; e < arguments.length; e++) {
                            var t = [1];
                            n[e] = t.concat(arguments[e])
                        }
                        return r(n)
                    },
                    builddxmatrix: function() {
                        for (var n = new Array(arguments[0].length), e = 0; e < arguments[0].length; e++) {
                            var t = [1];
                            n[e] = t.concat(arguments[0][e])
                        }
                        return r(n)
                    },
                    buildjxmatrix: function(n) {
                        for (var e = new Array(n.length), t = 0; t < n.length; t++) e[t] = n[t];
                        return r.builddxmatrix(e)
                    },
                    buildymatrix: function(n) {
                        return r(n).transpose()
                    },
                    buildjymatrix: function(r) {
                        return r.transpose()
                    },
                    matrixmult: function(n, e) {
                        var t, a, u, o, i;
                        if (n.cols() == e.rows()) {
                            if (e.rows() > 1) {
                                for (o = [], t = 0; t < n.rows(); t++)
                                    for (o[t] = [], a = 0; a < e.cols(); a++) {
                                        for (i = 0, u = 0; u < n.cols(); u++) i += n.toArray()[t][u] * e.toArray()[u][a];
                                        o[t][a] = i
                                    }
                                return r(o)
                            }
                            for (o = [], t = 0; t < n.rows(); t++)
                                for (o[t] = [], a = 0; a < e.cols(); a++) {
                                    for (i = 0, u = 0; u < n.cols(); u++) i += n.toArray()[t][u] * e.toArray()[a];
                                    o[t][a] = i
                                }
                            return r(o)
                        }
                    },
                    regress: function(n, e) {
                        var t = r.xtranspxinv(n),
                            a = n.transpose(),
                            u = r.matrixmult(r(t), a);
                        return r.matrixmult(u, e)
                    },
                    regresst: function(n, e, t) {
                        var a = r.regress(n, e),
                            u = {};
                        u.anova = {};
                        var o = r.jMatYBar(n, a);
                        u.yBar = o;
                        var i = e.mean();
                        u.anova.residuals = r.residuals(e, o), u.anova.ssr = r.ssr(o, i), u.anova.msr = u.anova.ssr / (n[0].length - 1), u.anova.sse = r.sse(e, o), u.anova.mse = u.anova.sse / (e.length - (n[0].length - 1) - 1), u.anova.sst = r.sst(e, i), u.anova.mst = u.anova.sst / (e.length - 1), u.anova.r2 = 1 - u.anova.sse / u.anova.sst, u.anova.r2 < 0 && (u.anova.r2 = 0), u.anova.fratio = u.anova.msr / u.anova.mse, u.anova.pvalue = r.anovaftest(u.anova.fratio, n[0].length - 1, e.length - (n[0].length - 1) - 1), u.anova.rmse = Math.sqrt(u.anova.mse), u.anova.r2adj = 1 - u.anova.mse / u.anova.mst, u.anova.r2adj < 0 && (u.anova.r2adj = 0), u.stats = new Array(n[0].length);
                        for (var f, s, l, c = r.xtranspxinv(n), m = 0; m < a.length; m++) f = Math.sqrt(u.anova.mse * Math.abs(c[m][m])), s = Math.abs(a[m] / f), l = r.ttest(s, e.length - n[0].length - 1, t), u.stats[m] = [a[m], f, s, l];
                        return u.regress = a, u
                    },
                    xtranspx: function(n) {
                        return r.matrixmult(n.transpose(), n)
                    },
                    xtranspxinv: function(n) {
                        var e = r.matrixmult(n.transpose(), n);
                        return r.inv(e)
                    },
                    jMatYBar: function(n, e) {
                        var t = r.matrixmult(n, e);
                        return new r(t)
                    },
                    residuals: function(n, e) {
                        return r.matrixsubtract(n, e)
                    },
                    ssr: function(r, n) {
                        for (var e = 0, t = 0; t < r.length; t++) e += Math.pow(r[t] - n, 2);
                        return e
                    },
                    sse: function(r, n) {
                        for (var e = 0, t = 0; t < r.length; t++) e += Math.pow(r[t] - n[t], 2);
                        return e
                    },
                    sst: function(r, n) {
                        for (var e = 0, t = 0; t < r.length; t++) e += Math.pow(r[t] - n, 2);
                        return e
                    },
                    matrixsubtract: function(n, e) {
                        for (var t = new Array(n.length), a = 0; a < n.length; a++) {
                            t[a] = new Array(n[a].length);
                            for (var u = 0; u < n[a].length; u++) t[a][u] = n[a][u] - e[a][u]
                        }
                        return r(t)
                    }
                }), r.jStat = r, r
        })
    }, function(r, n, e) {
        var t = e(1),
            a = e(0);
        n.UNIQUE = function() {
            for (var r = [], n = 0; n < arguments.length; ++n) {
                for (var e = !1, t = arguments[n], a = 0; a < r.length && !(e = r[a] === t); ++a);
                e || r.push(t)
            }
            return r
        }, n.FLATTEN = t.flatten, n.ARGS2ARRAY = function() {
            return Array.prototype.slice.call(arguments, 0)
        }, n.REFERENCE = function(r, n) {
            if (!arguments.length) return a.error;
            try {
                for (var e = n.split("."), t = r, u = 0; u < e.length; ++u) {
                    var o = e[u];
                    if ("]" === o[o.length - 1]) {
                        var i = o.indexOf("["),
                            f = o.substring(i + 1, o.length - 1);
                        t = t[o.substring(0, i)][f]
                    } else t = t[o]
                }
                return t
            } catch (r) {}
        }, n.JOIN = function(r, n) {
            return r.join(n)
        }, n.NUMBERS = function() {
            return t.flatten(arguments).filter(function(r) {
                return "number" == typeof r
            })
        }
    }, function(r, n, e) {
        function t(r) {
            return /^[01]{1,10}$/.test(r)
        }
        var a = e(0),
            u = e(8),
            o = e(4),
            i = e(1),
            f = e(13);
        n.BESSELI = function(r, n) {
            return r = i.parseNumber(r), n = i.parseNumber(n), i.anyIsError(r, n) ? a.value : f.besseli(r, n)
        }, n.BESSELJ = function(r, n) {
            return r = i.parseNumber(r), n = i.parseNumber(n), i.anyIsError(r, n) ? a.value : f.besselj(r, n)
        }, n.BESSELK = function(r, n) {
            return r = i.parseNumber(r), n = i.parseNumber(n), i.anyIsError(r, n) ? a.value : f.besselk(r, n)
        }, n.BESSELY = function(r, n) {
            return r = i.parseNumber(r), n = i.parseNumber(n), i.anyIsError(r, n) ? a.value : f.bessely(r, n)
        }, n.BIN2DEC = function(r) {
            if (!t(r)) return a.num;
            var n = parseInt(r, 2),
                e = r.toString();
            return 10 === e.length && "1" === e.substring(0, 1) ? parseInt(e.substring(1), 2) - 512 : n
        }, n.BIN2HEX = function(r, n) {
            if (!t(r)) return a.num;
            var e = r.toString();
            if (10 === e.length && "1" === e.substring(0, 1)) return (0xfffffffe00 + parseInt(e.substring(1), 2)).toString(16);
            var u = parseInt(r, 2).toString(16);
            return void 0 === n ? u : isNaN(n) ? a.value : n < 0 ? a.num : (n = Math.floor(n), n >= u.length ? o.REPT("0", n - u.length) + u : a.num)
        }, n.BIN2OCT = function(r, n) {
            if (!t(r)) return a.num;
            var e = r.toString();
            if (10 === e.length && "1" === e.substring(0, 1)) return (1073741312 + parseInt(e.substring(1), 2)).toString(8);
            var u = parseInt(r, 2).toString(8);
            return void 0 === n ? u : isNaN(n) ? a.value : n < 0 ? a.num : (n = Math.floor(n), n >= u.length ? o.REPT("0", n - u.length) + u : a.num)
        }, n.BITAND = function(r, n) {
            return r = i.parseNumber(r), n = i.parseNumber(n), i.anyIsError(r, n) ? a.value : r < 0 || n < 0 ? a.num : Math.floor(r) !== r || Math.floor(n) !== n ? a.num : r > 0xffffffffffff || n > 0xffffffffffff ? a.num : r & n
        }, n.BITLSHIFT = function(r, n) {
            return r = i.parseNumber(r), n = i.parseNumber(n), i.anyIsError(r, n) ? a.value : r < 0 ? a.num : Math.floor(r) !== r ? a.num : r > 0xffffffffffff ? a.num : Math.abs(n) > 53 ? a.num : n >= 0 ? r << n : r >> -n
        }, n.BITOR = function(r, n) {
            return r = i.parseNumber(r), n = i.parseNumber(n), i.anyIsError(r, n) ? a.value : r < 0 || n < 0 ? a.num : Math.floor(r) !== r || Math.floor(n) !== n ? a.num : r > 0xffffffffffff || n > 0xffffffffffff ? a.num : r | n
        }, n.BITRSHIFT = function(r, n) {
            return r = i.parseNumber(r), n = i.parseNumber(n), i.anyIsError(r, n) ? a.value : r < 0 ? a.num : Math.floor(r) !== r ? a.num : r > 0xffffffffffff ? a.num : Math.abs(n) > 53 ? a.num : n >= 0 ? r >> n : r << -n
        }, n.BITXOR = function(r, n) {
            return r = i.parseNumber(r), n = i.parseNumber(n), i.anyIsError(r, n) ? a.value : r < 0 || n < 0 ? a.num : Math.floor(r) !== r || Math.floor(n) !== n ? a.num : r > 0xffffffffffff || n > 0xffffffffffff ? a.num : r ^ n
        }, n.COMPLEX = function(r, n, e) {
            if (r = i.parseNumber(r), n = i.parseNumber(n), i.anyIsError(r, n)) return r;
            if ("i" !== (e = void 0 === e ? "i" : e) && "j" !== e) return a.value;
            if (0 === r && 0 === n) return 0;
            if (0 === r) return 1 === n ? e : n.toString() + e;
            if (0 === n) return r.toString();
            var t = n > 0 ? "+" : "";
            return r.toString() + t + (1 === n ? e : n.toString() + e)
        }, n.CONVERT = function(r, n, e) {
            if ((r = i.parseNumber(r)) instanceof Error) return r;
            for (var t, u = [
                    ["a.u. of action", "?", null, "action", !1, !1, 1.05457168181818e-34],
                    ["a.u. of charge", "e", null, "electric_charge", !1, !1, 1.60217653141414e-19],
                    ["a.u. of energy", "Eh", null, "energy", !1, !1, 4.35974417757576e-18],
                    ["a.u. of length", "a?", null, "length", !1, !1, 5.29177210818182e-11],
                    ["a.u. of mass", "m?", null, "mass", !1, !1, 9.10938261616162e-31],
                    ["a.u. of time", "?/Eh", null, "time", !1, !1, 2.41888432650516e-17],
                    ["admiralty knot", "admkn", null, "speed", !1, !0, .514773333],
                    ["ampere", "A", null, "electric_current", !0, !1, 1],
                    ["ampere per meter", "A/m", null, "magnetic_field_intensity", !0, !1, 1],
                    ["ångström", "Å", ["ang"], "length", !1, !0, 1e-10],
                    ["are", "ar", null, "area", !1, !0, 100],
                    ["astronomical unit", "ua", null, "length", !1, !1, 1.49597870691667e-11],
                    ["bar", "bar", null, "pressure", !1, !1, 1e5],
                    ["barn", "b", null, "area", !1, !1, 1e-28],
                    ["becquerel", "Bq", null, "radioactivity", !0, !1, 1],
                    ["bit", "bit", ["b"], "information", !1, !0, 1],
                    ["btu", "BTU", ["btu"], "energy", !1, !0, 1055.05585262],
                    ["byte", "byte", null, "information", !1, !0, 8],
                    ["candela", "cd", null, "luminous_intensity", !0, !1, 1],
                    ["candela per square metre", "cd/m?", null, "luminance", !0, !1, 1],
                    ["coulomb", "C", null, "electric_charge", !0, !1, 1],
                    ["cubic ångström", "ang3", ["ang^3"], "volume", !1, !0, 1e-30],
                    ["cubic foot", "ft3", ["ft^3"], "volume", !1, !0, .028316846592],
                    ["cubic inch", "in3", ["in^3"], "volume", !1, !0, 16387064e-12],
                    ["cubic light-year", "ly3", ["ly^3"], "volume", !1, !0, 8.46786664623715e-47],
                    ["cubic metre", "m?", null, "volume", !0, !0, 1],
                    ["cubic mile", "mi3", ["mi^3"], "volume", !1, !0, 4168181825.44058],
                    ["cubic nautical mile", "Nmi3", ["Nmi^3"], "volume", !1, !0, 6352182208],
                    ["cubic Pica", "Pica3", ["Picapt3", "Pica^3", "Picapt^3"], "volume", !1, !0, 7.58660370370369e-8],
                    ["cubic yard", "yd3", ["yd^3"], "volume", !1, !0, .764554857984],
                    ["cup", "cup", null, "volume", !1, !0, .0002365882365],
                    ["dalton", "Da", ["u"], "mass", !1, !1, 1.66053886282828e-27],
                    ["day", "d", ["day"], "time", !1, !0, 86400],
                    ["degree", "°", null, "angle", !1, !1, .0174532925199433],
                    ["degrees Rankine", "Rank", null, "temperature", !1, !0, .555555555555556],
                    ["dyne", "dyn", ["dy"], "force", !1, !0, 1e-5],
                    ["electronvolt", "eV", ["ev"], "energy", !1, !0, 1.60217656514141],
                    ["ell", "ell", null, "length", !1, !0, 1.143],
                    ["erg", "erg", ["e"], "energy", !1, !0, 1e-7],
                    ["farad", "F", null, "electric_capacitance", !0, !1, 1],
                    ["fluid ounce", "oz", null, "volume", !1, !0, 295735295625e-16],
                    ["foot", "ft", null, "length", !1, !0, .3048],
                    ["foot-pound", "flb", null, "energy", !1, !0, 1.3558179483314],
                    ["gal", "Gal", null, "acceleration", !1, !1, .01],
                    ["gallon", "gal", null, "volume", !1, !0, .003785411784],
                    ["gauss", "G", ["ga"], "magnetic_flux_density", !1, !0, 1],
                    ["grain", "grain", null, "mass", !1, !0, 647989e-10],
                    ["gram", "g", null, "mass", !1, !0, .001],
                    ["gray", "Gy", null, "absorbed_dose", !0, !1, 1],
                    ["gross registered ton", "GRT", ["regton"], "volume", !1, !0, 2.8316846592],
                    ["hectare", "ha", null, "area", !1, !0, 1e4],
                    ["henry", "H", null, "inductance", !0, !1, 1],
                    ["hertz", "Hz", null, "frequency", !0, !1, 1],
                    ["horsepower", "HP", ["h"], "power", !1, !0, 745.69987158227],
                    ["horsepower-hour", "HPh", ["hh", "hph"], "energy", !1, !0, 2684519.538],
                    ["hour", "h", ["hr"], "time", !1, !0, 3600],
                    ["imperial gallon (U.K.)", "uk_gal", null, "volume", !1, !0, .00454609],
                    ["imperial hundredweight", "lcwt", ["uk_cwt", "hweight"], "mass", !1, !0, 50.802345],
                    ["imperial quart (U.K)", "uk_qt", null, "volume", !1, !0, .0011365225],
                    ["imperial ton", "brton", ["uk_ton", "LTON"], "mass", !1, !0, 1016.046909],
                    ["inch", "in", null, "length", !1, !0, .0254],
                    ["international acre", "uk_acre", null, "area", !1, !0, 4046.8564224],
                    ["IT calorie", "cal", null, "energy", !1, !0, 4.1868],
                    ["joule", "J", null, "energy", !0, !0, 1],
                    ["katal", "kat", null, "catalytic_activity", !0, !1, 1],
                    ["kelvin", "K", ["kel"], "temperature", !0, !0, 1],
                    ["kilogram", "kg", null, "mass", !0, !0, 1],
                    ["knot", "kn", null, "speed", !1, !0, .514444444444444],
                    ["light-year", "ly", null, "length", !1, !0, 9460730472580800],
                    ["litre", "L", ["l", "lt"], "volume", !1, !0, .001],
                    ["lumen", "lm", null, "luminous_flux", !0, !1, 1],
                    ["lux", "lx", null, "illuminance", !0, !1, 1],
                    ["maxwell", "Mx", null, "magnetic_flux", !1, !1, 1e-18],
                    ["measurement ton", "MTON", null, "volume", !1, !0, 1.13267386368],
                    ["meter per hour", "m/h", ["m/hr"], "speed", !1, !0, .00027777777777778],
                    ["meter per second", "m/s", ["m/sec"], "speed", !0, !0, 1],
                    ["meter per second squared", "m?s??", null, "acceleration", !0, !1, 1],
                    ["parsec", "pc", ["parsec"], "length", !1, !0, 0x6da012f958ee1c],
                    ["meter squared per second", "m?/s", null, "kinematic_viscosity", !0, !1, 1],
                    ["metre", "m", null, "length", !0, !0, 1],
                    ["miles per hour", "mph", null, "speed", !1, !0, .44704],
                    ["millimetre of mercury", "mmHg", null, "pressure", !1, !1, 133.322],
                    ["minute", "?", null, "angle", !1, !1, .000290888208665722],
                    ["minute", "min", ["mn"], "time", !1, !0, 60],
                    ["modern teaspoon", "tspm", null, "volume", !1, !0, 5e-6],
                    ["mole", "mol", null, "amount_of_substance", !0, !1, 1],
                    ["morgen", "Morgen", null, "area", !1, !0, 2500],
                    ["n.u. of action", "?", null, "action", !1, !1, 1.05457168181818e-34],
                    ["n.u. of mass", "m?", null, "mass", !1, !1, 9.10938261616162e-31],
                    ["n.u. of speed", "c?", null, "speed", !1, !1, 299792458],
                    ["n.u. of time", "?/(me?c??)", null, "time", !1, !1, 1.28808866778687e-21],
                    ["nautical mile", "M", ["Nmi"], "length", !1, !0, 1852],
                    ["newton", "N", null, "force", !0, !0, 1],
                    ["œrsted", "Oe ", null, "magnetic_field_intensity", !1, !1, 79.5774715459477],
                    ["ohm", "Ω", null, "electric_resistance", !0, !1, 1],
                    ["ounce mass", "ozm", null, "mass", !1, !0, .028349523125],
                    ["pascal", "Pa", null, "pressure", !0, !1, 1],
                    ["pascal second", "Pa?s", null, "dynamic_viscosity", !0, !1, 1],
                    ["pferdestärke", "PS", null, "power", !1, !0, 735.49875],
                    ["phot", "ph", null, "illuminance", !1, !1, 1e-4],
                    ["pica (1/6 inch)", "pica", null, "length", !1, !0, .00035277777777778],
                    ["pica (1/72 inch)", "Pica", ["Picapt"], "length", !1, !0, .00423333333333333],
                    ["poise", "P", null, "dynamic_viscosity", !1, !1, .1],
                    ["pond", "pond", null, "force", !1, !0, .00980665],
                    ["pound force", "lbf", null, "force", !1, !0, 4.4482216152605],
                    ["pound mass", "lbm", null, "mass", !1, !0, .45359237],
                    ["quart", "qt", null, "volume", !1, !0, .000946352946],
                    ["radian", "rad", null, "angle", !0, !1, 1],
                    ["second", "?", null, "angle", !1, !1, 484813681109536e-20],
                    ["second", "s", ["sec"], "time", !0, !0, 1],
                    ["short hundredweight", "cwt", ["shweight"], "mass", !1, !0, 45.359237],
                    ["siemens", "S", null, "electrical_conductance", !0, !1, 1],
                    ["sievert", "Sv", null, "equivalent_dose", !0, !1, 1],
                    ["slug", "sg", null, "mass", !1, !0, 14.59390294],
                    ["square ångström", "ang2", ["ang^2"], "area", !1, !0, 1e-20],
                    ["square foot", "ft2", ["ft^2"], "area", !1, !0, .09290304],
                    ["square inch", "in2", ["in^2"], "area", !1, !0, 64516e-8],
                    ["square light-year", "ly2", ["ly^2"], "area", !1, !0, 8.95054210748189e31],
                    ["square meter", "m?", null, "area", !0, !0, 1],
                    ["square mile", "mi2", ["mi^2"], "area", !1, !0, 2589988.110336],
                    ["square nautical mile", "Nmi2", ["Nmi^2"], "area", !1, !0, 3429904],
                    ["square Pica", "Pica2", ["Picapt2", "Pica^2", "Picapt^2"], "area", !1, !0, 1792111111111e-17],
                    ["square yard", "yd2", ["yd^2"], "area", !1, !0, .83612736],
                    ["statute mile", "mi", null, "length", !1, !0, 1609.344],
                    ["steradian", "sr", null, "solid_angle", !0, !1, 1],
                    ["stilb", "sb", null, "luminance", !1, !1, 1e-4],
                    ["stokes", "St", null, "kinematic_viscosity", !1, !1, 1e-4],
                    ["stone", "stone", null, "mass", !1, !0, 6.35029318],
                    ["tablespoon", "tbs", null, "volume", !1, !0, 147868e-10],
                    ["teaspoon", "tsp", null, "volume", !1, !0, 492892e-11],
                    ["tesla", "T", null, "magnetic_flux_density", !0, !0, 1],
                    ["thermodynamic calorie", "c", null, "energy", !1, !0, 4.184],
                    ["ton", "ton", null, "mass", !1, !0, 907.18474],
                    ["tonne", "t", null, "mass", !1, !1, 1e3],
                    ["U.K. pint", "uk_pt", null, "volume", !1, !0, .00056826125],
                    ["U.S. bushel", "bushel", null, "volume", !1, !0, .03523907],
                    ["U.S. oil barrel", "barrel", null, "volume", !1, !0, .158987295],
                    ["U.S. pint", "pt", ["us_pt"], "volume", !1, !0, .000473176473],
                    ["U.S. survey mile", "survey_mi", null, "length", !1, !0, 1609.347219],
                    ["U.S. survey/statute acre", "us_acre", null, "area", !1, !0, 4046.87261],
                    ["volt", "V", null, "voltage", !0, !1, 1],
                    ["watt", "W", null, "power", !0, !0, 1],
                    ["watt-hour", "Wh", ["wh"], "energy", !1, !0, 3600],
                    ["weber", "Wb", null, "magnetic_flux", !0, !1, 1],
                    ["yard", "yd", null, "length", !1, !0, .9144],
                    ["year", "yr", null, "time", !1, !0, 31557600]
                ], o = {
                    Yi: ["yobi", 80, 1.2089258196146292e24, "Yi", "yotta"],
                    Zi: ["zebi", 70, 0x400000000000000000, "Zi", "zetta"],
                    Ei: ["exbi", 60, 0x1000000000000000, "Ei", "exa"],
                    Pi: ["pebi", 50, 0x4000000000000, "Pi", "peta"],
                    Ti: ["tebi", 40, 1099511627776, "Ti", "tera"],
                    Gi: ["gibi", 30, 1073741824, "Gi", "giga"],
                    Mi: ["mebi", 20, 1048576, "Mi", "mega"],
                    ki: ["kibi", 10, 1024, "ki", "kilo"]
                }, f = {
                    Y: ["yotta", 1e24, "Y"],
                    Z: ["zetta", 1e21, "Z"],
                    E: ["exa", 1e18, "E"],
                    P: ["peta", 1e15, "P"],
                    T: ["tera", 1e12, "T"],
                    G: ["giga", 1e9, "G"],
                    M: ["mega", 1e6, "M"],
                    k: ["kilo", 1e3, "k"],
                    h: ["hecto", 100, "h"],
                    e: ["dekao", 10, "e"],
                    d: ["deci", .1, "d"],
                    c: ["centi", .01, "c"],
                    m: ["milli", .001, "m"],
                    u: ["micro", 1e-6, "u"],
                    n: ["nano", 1e-9, "n"],
                    p: ["pico", 1e-12, "p"],
                    f: ["femto", 1e-15, "f"],
                    a: ["atto", 1e-18, "a"],
                    z: ["zepto", 1e-21, "z"],
                    y: ["yocto", 1e-24, "y"]
                }, s = null, l = null, c = n, m = e, p = 1, v = 1, h = 0; h < u.length; h++) t = null === u[h][2] ? [] : u[h][2], (u[h][1] === c || t.indexOf(c) >= 0) && (s = u[h]), (u[h][1] === m || t.indexOf(m) >= 0) && (l = u[h]);
            if (null === s) {
                var g = o[n.substring(0, 2)],
                    E = f[n.substring(0, 1)];
                "da" === n.substring(0, 2) && (E = ["dekao", 10, "da"]), g ? (p = g[2], c = n.substring(2)) : E && (p = E[1], c = n.substring(E[2].length));
                for (var N = 0; N < u.length; N++) t = null === u[N][2] ? [] : u[N][2], (u[N][1] === c || t.indexOf(c) >= 0) && (s = u[N])
            }
            if (null === l) {
                var I = o[e.substring(0, 2)],
                    b = f[e.substring(0, 1)];
                "da" === e.substring(0, 2) && (b = ["dekao", 10, "da"]), I ? (v = I[2], m = e.substring(2)) : b && (v = b[1], m = e.substring(b[2].length));
                for (var d = 0; d < u.length; d++) t = null === u[d][2] ? [] : u[d][2], (u[d][1] === m || t.indexOf(m) >= 0) && (l = u[d])
            }
            return null === s || null === l ? a.na : s[3] !== l[3] ? a.na : r * s[6] * p / (l[6] * v)
        }, n.DEC2BIN = function(r, n) {
            if ((r = i.parseNumber(r)) instanceof Error) return r;
            if (!/^-?[0-9]{1,3}$/.test(r) || r < -512 || r > 511) return a.num;
            if (r < 0) return "1" + o.REPT("0", 9 - (512 + r).toString(2).length) + (512 + r).toString(2);
            var e = parseInt(r, 10).toString(2);
            return void 0 === n ? e : isNaN(n) ? a.value : n < 0 ? a.num : (n = Math.floor(n), n >= e.length ? o.REPT("0", n - e.length) + e : a.num)
        }, n.DEC2HEX = function(r, n) {
            if ((r = i.parseNumber(r)) instanceof Error) return r;
            if (!/^-?[0-9]{1,12}$/.test(r) || r < -549755813888 || r > 549755813887) return a.num;
            if (r < 0) return (1099511627776 + r).toString(16);
            var e = parseInt(r, 10).toString(16);
            return void 0 === n ? e : isNaN(n) ? a.value : n < 0 ? a.num : (n = Math.floor(n), n >= e.length ? o.REPT("0", n - e.length) + e : a.num)
        }, n.DEC2OCT = function(r, n) {
            if ((r = i.parseNumber(r)) instanceof Error) return r;
            if (!/^-?[0-9]{1,9}$/.test(r) || r < -536870912 || r > 536870911) return a.num;
            if (r < 0) return (1073741824 + r).toString(8);
            var e = parseInt(r, 10).toString(8);
            return void 0 === n ? e : isNaN(n) ? a.value : n < 0 ? a.num : (n = Math.floor(n), n >= e.length ? o.REPT("0", n - e.length) + e : a.num)
        }, n.DELTA = function(r, n) {
            return n = void 0 === n ? 0 : n, r = i.parseNumber(r), n = i.parseNumber(n), i.anyIsError(r, n) ? a.value : r === n ? 1 : 0
        }, n.ERF = function(r, n) {
            return n = void 0 === n ? 0 : n, r = i.parseNumber(r), n = i.parseNumber(n), i.anyIsError(r, n) ? a.value : u.erf(r)
        }, n.ERF.PRECISE = function() {
            throw new Error("ERF.PRECISE is not implemented")
        }, n.ERFC = function(r) {
            return isNaN(r) ? a.value : u.erfc(r)
        }, n.ERFC.PRECISE = function() {
            throw new Error("ERFC.PRECISE is not implemented")
        }, n.GESTEP = function(r, n) {
            return n = n || 0, r = i.parseNumber(r), i.anyIsError(n, r) ? r : r >= n ? 1 : 0
        }, n.HEX2BIN = function(r, n) {
            if (!/^[0-9A-Fa-f]{1,10}$/.test(r)) return a.num;
            var e = 10 === r.length && "f" === r.substring(0, 1).toLowerCase(),
                t = e ? parseInt(r, 16) - 1099511627776 : parseInt(r, 16);
            if (t < -512 || t > 511) return a.num;
            if (e) return "1" + o.REPT("0", 9 - (512 + t).toString(2).length) + (512 + t).toString(2);
            var u = t.toString(2);
            return void 0 === n ? u : isNaN(n) ? a.value : n < 0 ? a.num : (n = Math.floor(n), n >= u.length ? o.REPT("0", n - u.length) + u : a.num)
        }, n.HEX2DEC = function(r) {
            if (!/^[0-9A-Fa-f]{1,10}$/.test(r)) return a.num;
            var n = parseInt(r, 16);
            return n >= 549755813888 ? n - 1099511627776 : n
        }, n.HEX2OCT = function(r, n) {
            if (!/^[0-9A-Fa-f]{1,10}$/.test(r)) return a.num;
            var e = parseInt(r, 16);
            if (e > 536870911 && e < 0xffe0000000) return a.num;
            if (e >= 0xffe0000000) return (e - 0xffc0000000).toString(8);
            var t = e.toString(8);
            return void 0 === n ? t : isNaN(n) ? a.value : n < 0 ? a.num : (n = Math.floor(n), n >= t.length ? o.REPT("0", n - t.length) + t : a.num)
        }, n.IMABS = function(r) {
            var e = n.IMREAL(r),
                t = n.IMAGINARY(r);
            return i.anyIsError(e, t) ? a.value : Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2))
        }, n.IMAGINARY = function(r) {
            if (void 0 === r || !0 === r || !1 === r) return a.value;
            if (0 === r || "0" === r) return 0;
            if (["i", "j"].indexOf(r) >= 0) return 1;
            r += "", r = r.replace("+i", "+1i").replace("-i", "-1i").replace("+j", "+1j").replace("-j", "-1j");
            var n = r.indexOf("+"),
                e = r.indexOf("-");
            0 === n && (n = r.indexOf("+", 1)), 0 === e && (e = r.indexOf("-", 1));
            var t = r.substring(r.length - 1, r.length),
                u = "i" === t || "j" === t;
            return n >= 0 || e >= 0 ? u ? n >= 0 ? isNaN(r.substring(0, n)) || isNaN(r.substring(n + 1, r.length - 1)) ? a.num : Number(r.substring(n + 1, r.length - 1)) : isNaN(r.substring(0, e)) || isNaN(r.substring(e + 1, r.length - 1)) ? a.num : -Number(r.substring(e + 1, r.length - 1)) : a.num : u ? isNaN(r.substring(0, r.length - 1)) ? a.num : r.substring(0, r.length - 1) : isNaN(r) ? a.num : 0
        }, n.IMARGUMENT = function(r) {
            var e = n.IMREAL(r),
                t = n.IMAGINARY(r);
            return i.anyIsError(e, t) ? a.value : 0 === e && 0 === t ? a.div0 : 0 === e && t > 0 ? Math.PI / 2 : 0 === e && t < 0 ? -Math.PI / 2 : 0 === t && e > 0 ? 0 : 0 === t && e < 0 ? -Math.PI : e > 0 ? Math.atan(t / e) : e < 0 && t >= 0 ? Math.atan(t / e) + Math.PI : Math.atan(t / e) - Math.PI
        }, n.IMCONJUGATE = function(r) {
            var e = n.IMREAL(r),
                t = n.IMAGINARY(r);
            if (i.anyIsError(e, t)) return a.value;
            var u = r.substring(r.length - 1);
            return u = "i" === u || "j" === u ? u : "i", 0 !== t ? n.COMPLEX(e, -t, u) : r
        }, n.IMCOS = function(r) {
            var e = n.IMREAL(r),
                t = n.IMAGINARY(r);
            if (i.anyIsError(e, t)) return a.value;
            var u = r.substring(r.length - 1);
            return u = "i" === u || "j" === u ? u : "i", n.COMPLEX(Math.cos(e) * (Math.exp(t) + Math.exp(-t)) / 2, -Math.sin(e) * (Math.exp(t) - Math.exp(-t)) / 2, u)
        }, n.IMCOSH = function(r) {
            var e = n.IMREAL(r),
                t = n.IMAGINARY(r);
            if (i.anyIsError(e, t)) return a.value;
            var u = r.substring(r.length - 1);
            return u = "i" === u || "j" === u ? u : "i", n.COMPLEX(Math.cos(t) * (Math.exp(e) + Math.exp(-e)) / 2, Math.sin(t) * (Math.exp(e) - Math.exp(-e)) / 2, u)
        }, n.IMCOT = function(r) {
            var e = n.IMREAL(r),
                t = n.IMAGINARY(r);
            return i.anyIsError(e, t) ? a.value : n.IMDIV(n.IMCOS(r), n.IMSIN(r))
        }, n.IMDIV = function(r, e) {
            var t = n.IMREAL(r),
                u = n.IMAGINARY(r),
                o = n.IMREAL(e),
                f = n.IMAGINARY(e);
            if (i.anyIsError(t, u, o, f)) return a.value;
            var s = r.substring(r.length - 1),
                l = e.substring(e.length - 1),
                c = "i";
            if ("j" === s ? c = "j" : "j" === l && (c = "j"), 0 === o && 0 === f) return a.num;
            var m = o * o + f * f;
            return n.COMPLEX((t * o + u * f) / m, (u * o - t * f) / m, c)
        }, n.IMEXP = function(r) {
            var e = n.IMREAL(r),
                t = n.IMAGINARY(r);
            if (i.anyIsError(e, t)) return a.value;
            var u = r.substring(r.length - 1);
            u = "i" === u || "j" === u ? u : "i";
            var o = Math.exp(e);
            return n.COMPLEX(o * Math.cos(t), o * Math.sin(t), u)
        }, n.IMLN = function(r) {
            var e = n.IMREAL(r),
                t = n.IMAGINARY(r);
            if (i.anyIsError(e, t)) return a.value;
            var u = r.substring(r.length - 1);
            return u = "i" === u || "j" === u ? u : "i", n.COMPLEX(Math.log(Math.sqrt(e * e + t * t)), Math.atan(t / e), u)
        }, n.IMLOG10 = function(r) {
            var e = n.IMREAL(r),
                t = n.IMAGINARY(r);
            if (i.anyIsError(e, t)) return a.value;
            var u = r.substring(r.length - 1);
            return u = "i" === u || "j" === u ? u : "i", n.COMPLEX(Math.log(Math.sqrt(e * e + t * t)) / Math.log(10), Math.atan(t / e) / Math.log(10), u)
        }, n.IMLOG2 = function(r) {
            var e = n.IMREAL(r),
                t = n.IMAGINARY(r);
            if (i.anyIsError(e, t)) return a.value;
            var u = r.substring(r.length - 1);
            return u = "i" === u || "j" === u ? u : "i", n.COMPLEX(Math.log(Math.sqrt(e * e + t * t)) / Math.log(2), Math.atan(t / e) / Math.log(2), u)
        }, n.IMPOWER = function(r, e) {
            e = i.parseNumber(e);
            var t = n.IMREAL(r),
                u = n.IMAGINARY(r);
            if (i.anyIsError(e, t, u)) return a.value;
            var o = r.substring(r.length - 1);
            o = "i" === o || "j" === o ? o : "i";
            var f = Math.pow(n.IMABS(r), e),
                s = n.IMARGUMENT(r);
            return n.COMPLEX(f * Math.cos(e * s), f * Math.sin(e * s), o)
        }, n.IMPRODUCT = function() {
            var r = arguments[0];
            if (!arguments.length) return a.value;
            for (var e = 1; e < arguments.length; e++) {
                var t = n.IMREAL(r),
                    u = n.IMAGINARY(r),
                    o = n.IMREAL(arguments[e]),
                    f = n.IMAGINARY(arguments[e]);
                if (i.anyIsError(t, u, o, f)) return a.value;
                r = n.COMPLEX(t * o - u * f, t * f + u * o)
            }
            return r
        }, n.IMREAL = function(r) {
            if (void 0 === r || !0 === r || !1 === r) return a.value;
            if (0 === r || "0" === r) return 0;
            if (["i", "+i", "1i", "+1i", "-i", "-1i", "j", "+j", "1j", "+1j", "-j", "-1j"].indexOf(r) >= 0) return 0;
            r += "";
            var n = r.indexOf("+"),
                e = r.indexOf("-");
            0 === n && (n = r.indexOf("+", 1)), 0 === e && (e = r.indexOf("-", 1));
            var t = r.substring(r.length - 1, r.length),
                u = "i" === t || "j" === t;
            return n >= 0 || e >= 0 ? u ? n >= 0 ? isNaN(r.substring(0, n)) || isNaN(r.substring(n + 1, r.length - 1)) ? a.num : Number(r.substring(0, n)) : isNaN(r.substring(0, e)) || isNaN(r.substring(e + 1, r.length - 1)) ? a.num : Number(r.substring(0, e)) : a.num : u ? isNaN(r.substring(0, r.length - 1)) ? a.num : 0 : isNaN(r) ? a.num : r
        }, n.IMSEC = function(r) {
            if (!0 === r || !1 === r) return a.value;
            var e = n.IMREAL(r),
                t = n.IMAGINARY(r);
            return i.anyIsError(e, t) ? a.value : n.IMDIV("1", n.IMCOS(r))
        }, n.IMSECH = function(r) {
            var e = n.IMREAL(r),
                t = n.IMAGINARY(r);
            return i.anyIsError(e, t) ? a.value : n.IMDIV("1", n.IMCOSH(r))
        }, n.IMSIN = function(r) {
            var e = n.IMREAL(r),
                t = n.IMAGINARY(r);
            if (i.anyIsError(e, t)) return a.value;
            var u = r.substring(r.length - 1);
            return u = "i" === u || "j" === u ? u : "i", n.COMPLEX(Math.sin(e) * (Math.exp(t) + Math.exp(-t)) / 2, Math.cos(e) * (Math.exp(t) - Math.exp(-t)) / 2, u)
        }, n.IMSINH = function(r) {
            var e = n.IMREAL(r),
                t = n.IMAGINARY(r);
            if (i.anyIsError(e, t)) return a.value;
            var u = r.substring(r.length - 1);
            return u = "i" === u || "j" === u ? u : "i", n.COMPLEX(Math.cos(t) * (Math.exp(e) - Math.exp(-e)) / 2, Math.sin(t) * (Math.exp(e) + Math.exp(-e)) / 2, u)
        }, n.IMSQRT = function(r) {
            var e = n.IMREAL(r),
                t = n.IMAGINARY(r);
            if (i.anyIsError(e, t)) return a.value;
            var u = r.substring(r.length - 1);
            u = "i" === u || "j" === u ? u : "i";
            var o = Math.sqrt(n.IMABS(r)),
                f = n.IMARGUMENT(r);
            return n.COMPLEX(o * Math.cos(f / 2), o * Math.sin(f / 2), u)
        }, n.IMCSC = function(r) {
            if (!0 === r || !1 === r) return a.value;
            var e = n.IMREAL(r),
                t = n.IMAGINARY(r);
            return i.anyIsError(e, t) ? a.num : n.IMDIV("1", n.IMSIN(r))
        }, n.IMCSCH = function(r) {
            if (!0 === r || !1 === r) return a.value;
            var e = n.IMREAL(r),
                t = n.IMAGINARY(r);
            return i.anyIsError(e, t) ? a.num : n.IMDIV("1", n.IMSINH(r))
        }, n.IMSUB = function(r, n) {
            var e = this.IMREAL(r),
                t = this.IMAGINARY(r),
                u = this.IMREAL(n),
                o = this.IMAGINARY(n);
            if (i.anyIsError(e, t, u, o)) return a.value;
            var f = r.substring(r.length - 1),
                s = n.substring(n.length - 1),
                l = "i";
            return "j" === f ? l = "j" : "j" === s && (l = "j"), this.COMPLEX(e - u, t - o, l)
        }, n.IMSUM = function() {
            if (!arguments.length) return a.value;
            for (var r = i.flatten(arguments), n = r[0], e = 1; e < r.length; e++) {
                var t = this.IMREAL(n),
                    u = this.IMAGINARY(n),
                    o = this.IMREAL(r[e]),
                    f = this.IMAGINARY(r[e]);
                if (i.anyIsError(t, u, o, f)) return a.value;
                n = this.COMPLEX(t + o, u + f)
            }
            return n
        }, n.IMTAN = function(r) {
            if (!0 === r || !1 === r) return a.value;
            var e = n.IMREAL(r),
                t = n.IMAGINARY(r);
            return i.anyIsError(e, t) ? a.value : this.IMDIV(this.IMSIN(r), this.IMCOS(r))
        }, n.OCT2BIN = function(r, n) {
            if (!/^[0-7]{1,10}$/.test(r)) return a.num;
            var e = 10 === r.length && "7" === r.substring(0, 1),
                t = e ? parseInt(r, 8) - 1073741824 : parseInt(r, 8);
            if (t < -512 || t > 511) return a.num;
            if (e) return "1" + o.REPT("0", 9 - (512 + t).toString(2).length) + (512 + t).toString(2);
            var u = t.toString(2);
            return void 0 === n ? u : isNaN(n) ? a.value : n < 0 ? a.num : (n = Math.floor(n), n >= u.length ? o.REPT("0", n - u.length) + u : a.num)
        }, n.OCT2DEC = function(r) {
            if (!/^[0-7]{1,10}$/.test(r)) return a.num;
            var n = parseInt(r, 8);
            return n >= 536870912 ? n - 1073741824 : n
        }, n.OCT2HEX = function(r, n) {
            if (!/^[0-7]{1,10}$/.test(r)) return a.num;
            var e = parseInt(r, 8);
            if (e >= 536870912) return "ff" + (e + 3221225472).toString(16);
            var t = e.toString(16);
            return void 0 === n ? t : isNaN(n) ? a.value : n < 0 ? a.num : (n = Math.floor(n), n >= t.length ? o.REPT("0", n - t.length) + t : a.num)
        }
    }, function(r, n, e) {
        var t = [e(12), e(14), e(10), e(15), e(2), e(4), e(7), e(16), e(6), e(17), e(3), e(9)];
        for (var a in t) {
            var u = t[a];
            for (var o in u) n[o] = n[o] || u[o]
        }
        n.utils = {
            errors: e(0)
        }
    }, function(r, n, e) {
        function t(r, n) {
            if (n)
                for (var e in n) r[e] = n[e];
            return r
        }
        var a = e(2),
            u = e(3),
            o = e(10),
            i = e(7);
        n.BETADIST = u.BETA.DIST, n.BETAINV = u.BETA.INV, n.BINOMDIST = u.BINOM.DIST, n.CEILING = n.ISOCEILING = t(a.CEILING.MATH, a.CEILING), n.CEILINGMATH = a.CEILING.MATH, n.CEILINGPRECISE = a.CEILING.PRECISE, n.CHIDIST = u.CHISQ.DIST, n.CHIDISTRT = u.CHISQ.DIST.RT, n.CHIINV = u.CHISQ.INV, n.CHIINVRT = u.CHISQ.INV.RT, n.CHITEST = u.CHISQ.TEST, n.CONFIDENCE = t(u.CONFIDENCE.NORM, u.CONFIDENCE), n.COVAR = u.COVARIANCE.P, n.COVARIANCEP = u.COVARIANCE.P, n.COVARIANCES = u.COVARIANCE.S, n.CRITBINOM = u.BINOM.INV, n.EXPONDIST = u.EXPON.DIST, n.ERFCPRECISE = o.ERFC.PRECISE, n.ERFPRECISE = o.ERF.PRECISE, n.FDIST = u.F.DIST, n.FDISTRT = u.F.DIST.RT, n.FINVRT = u.F.INV.RT, n.FINV = u.F.INV, n.FLOOR = t(a.FLOOR.MATH, a.FLOOR), n.FLOORMATH = a.FLOOR.MATH, n.FLOORPRECISE = a.FLOOR.PRECISE, n.FTEST = u.F.TEST, n.GAMMADIST = u.GAMMA.DIST, n.GAMMAINV = u.GAMMA.INV, n.GAMMALNPRECISE = u.GAMMALN.PRECISE, n.HYPGEOMDIST = u.HYPGEOM.DIST, n.LOGINV = u.LOGNORM.INV, n.LOGNORMINV = u.LOGNORM.INV, n.LOGNORMDIST = u.LOGNORM.DIST, n.MODE = t(u.MODE.SNGL, u.MODE), n.MODEMULT = u.MODE.MULT, n.MODESNGL = u.MODE.SNGL, n.NEGBINOMDIST = u.NEGBINOM.DIST, n.NETWORKDAYSINTL = i.NETWORKDAYS.INTL, n.NORMDIST = u.NORM.DIST, n.NORMINV = u.NORM.INV, n.NORMSDIST = u.NORM.S.DIST, n.NORMSINV = u.NORM.S.INV, n.PERCENTILE = t(u.PERCENTILE.EXC, u.PERCENTILE), n.PERCENTILEEXC = u.PERCENTILE.EXC, n.PERCENTILEINC = u.PERCENTILE.INC, n.PERCENTRANK = t(u.PERCENTRANK.INC, u.PERCENTRANK), n.PERCENTRANKEXC = u.PERCENTRANK.EXC, n.PERCENTRANKINC = u.PERCENTRANK.INC, n.POISSON = t(u.POISSON.DIST, u.POISSON), n.POISSONDIST = u.POISSON.DIST, n.QUARTILE = t(u.QUARTILE.INC, u.QUARTILE), n.QUARTILEEXC = u.QUARTILE.EXC, n.QUARTILEINC = u.QUARTILE.INC, n.RANK = t(u.RANK.EQ, u.RANK), n.RANKAVG = u.RANK.AVG, n.RANKEQ = u.RANK.EQ, n.SKEWP = u.SKEW.P, n.STDEV = t(u.STDEV.S, u.STDEV), n.STDEVP = u.STDEV.P, n.STDEVS = u.STDEV.S, n.TDIST = u.T.DIST, n.TDISTRT = u.T.DIST.RT, n.TINV = u.T.INV, n.TTEST = u.T.TEST, n.VAR = t(u.VAR.S, u.VAR), n.VARP = u.VAR.P, n.VARS = u.VAR.S, n.WEIBULL = t(u.WEIBULL.DIST, u.WEIBULL), n.WEIBULLDIST = u.WEIBULL.DIST, n.WORKDAYINTL = i.WORKDAY.INTL, n.ZTEST = u.Z.TEST
    }, function(r, n, e) {
        var t;
        ! function(r) {
            r("undefined" == typeof DO_NOT_EXPORT_BESSEL ? n : t = {})
        }(function(r) {
            function n(r, n) {
                for (var e = 0, t = 0; e < r.length; ++e) t = n * t + r[e];
                return t
            }

            function e(r, n, e, t, a) {
                if (0 === n) return e;
                if (1 === n) return t;
                for (var u = 2 / r, o = t, i = 1; i < n; ++i) o = t * i * u + a * e, e = t, t = o;
                return o
            }

            function t(r, n, t, a, u) {
                return function(t, o) {
                    if (a) {
                        if (0 === t) return 1 == a ? -1 / 0 : 1 / 0;
                        if (t < 0) return NaN
                    }
                    return 0 === o ? r(t) : 1 === o ? n(t) : o < 0 ? NaN : (o |= 0, e(t, o, r(t), n(t), u))
                }
            }
            r.version = "1.0.2";
            var a = Math,
                u = function() {
                    function r(r) {
                        var e = 0,
                            t = 0,
                            l = 0,
                            c = r * r;
                        if (r < 8) t = n(o, c), l = n(i, c), e = t / l;
                        else {
                            var m = r - .785398164;
                            c = 64 / c, t = n(f, c), l = n(s, c), e = a.sqrt(u / r) * (a.cos(m) * t - a.sin(m) * l * 8 / r)
                        }
                        return e
                    }

                    function t(r) {
                        var e = 0,
                            t = 0,
                            o = 0,
                            i = r * r,
                            f = a.abs(r) - 2.356194491;
                        return Math.abs(r) < 8 ? (t = r * n(l, i), o = n(c, i), e = t / o) : (i = 64 / i, t = n(m, i), o = n(p, i), e = a.sqrt(u / a.abs(r)) * (a.cos(f) * t - a.sin(f) * o * 8 / a.abs(r)), r < 0 && (e = -e)), e
                    }
                    var u = .636619772,
                        o = [57568490574, -13362590354, 651619640.7, -11214424.18, 77392.33017, -184.9052456].reverse(),
                        i = [57568490411, 1029532985, 9494680.718, 59272.64853, 267.8532712, 1].reverse(),
                        f = [1, -.001098628627, 2734510407e-14, -2073370639e-15, 2.093887211e-7].reverse(),
                        s = [-.01562499995, .0001430488765, -6911147651e-15, 7.621095161e-7, -9.34935152e-8].reverse(),
                        l = [72362614232, -7895059235, 242396853.1, -2972611.439, 15704.4826, -30.16036606].reverse(),
                        c = [144725228442, 2300535178, 18583304.74, 99447.43394, 376.9991397, 1].reverse(),
                        m = [1, .00183105, -3516396496e-14, 2457520174e-15, -2.40337019e-7].reverse(),
                        p = [.04687499995, -.0002002690873, 8449199096e-15, -8.8228987e-7, 1.05787412e-7].reverse();
                    return function n(u, o) {
                        if (o = Math.round(o), !isFinite(u)) return isNaN(u) ? u : 0;
                        if (o < 0) return (o % 2 ? -1 : 1) * n(u, -o);
                        if (u < 0) return (o % 2 ? -1 : 1) * n(-u, o);
                        if (0 === o) return r(u);
                        if (1 === o) return t(u);
                        if (0 === u) return 0;
                        var i = 0;
                        if (u > o) i = e(u, o, r(u), t(u), -1);
                        else {
                            for (var f = 2 * a.floor((o + a.floor(a.sqrt(40 * o))) / 2), s = !1, l = 0, c = 0, m = 1, p = 0, v = 2 / u, h = f; h > 0; h--) p = h * v * m - l, l = m, m = p, a.abs(m) > 1e10 && (m *= 1e-10, l *= 1e-10, i *= 1e-10, c *= 1e-10), s && (c += m), s = !s, h == o && (i = l);
                            c = 2 * c - m, i /= c
                        }
                        return i
                    }
                }(),
                o = function() {
                    function r(r) {
                        var e = 0,
                            t = 0,
                            c = 0,
                            m = r * r,
                            p = r - .785398164;
                        return r < 8 ? (t = n(i, m), c = n(f, m), e = t / c + o * u(r, 0) * a.log(r)) : (m = 64 / m, t = n(s, m), c = n(l, m), e = a.sqrt(o / r) * (a.sin(p) * t + a.cos(p) * c * 8 / r)), e
                    }

                    function e(r) {
                        var e = 0,
                            t = 0,
                            i = 0,
                            f = r * r,
                            s = r - 2.356194491;
                        return r < 8 ? (t = r * n(c, f), i = n(m, f), e = t / i + o * (u(r, 1) * a.log(r) - 1 / r)) : (f = 64 / f, t = n(p, f), i = n(v, f), e = a.sqrt(o / r) * (a.sin(s) * t + a.cos(s) * i * 8 / r)), e
                    }
                    var o = .636619772,
                        i = [-2957821389, 7062834065, -512359803.6, 10879881.29, -86327.92757, 228.4622733].reverse(),
                        f = [40076544269, 745249964.8, 7189466.438, 47447.2647, 226.1030244, 1].reverse(),
                        s = [1, -.001098628627, 2734510407e-14, -2073370639e-15, 2.093887211e-7].reverse(),
                        l = [-.01562499995, .0001430488765, -6911147651e-15, 7.621095161e-7, -9.34945152e-8].reverse(),
                        c = [-4900604943e3, 127527439e4, -51534381390, 734926455.1, -4237922.726, 8511.937935].reverse(),
                        m = [249958057e5, 424441966400, 3733650367, 22459040.02, 102042.605, 354.9632885, 1].reverse(),
                        p = [1, .00183105, -3516396496e-14, 2457520174e-15, -2.40337019e-7].reverse(),
                        v = [.04687499995, -.0002002690873, 8449199096e-15, -8.8228987e-7, 1.05787412e-7].reverse();
                    return t(r, e, "BESSELY", 1, -1)
                }(),
                i = function() {
                    function r(r) {
                        return r <= 3.75 ? n(t, r * r / 14.0625) : a.exp(a.abs(r)) / a.sqrt(a.abs(r)) * n(u, 3.75 / a.abs(r))
                    }

                    function e(r) {
                        return r < 3.75 ? r * n(o, r * r / 14.0625) : (r < 0 ? -1 : 1) * a.exp(a.abs(r)) / a.sqrt(a.abs(r)) * n(i, 3.75 / a.abs(r))
                    }
                    var t = [1, 3.5156229, 3.0899424, 1.2067492, .2659732, .0360768, .0045813].reverse(),
                        u = [.39894228, .01328592, .00225319, -.00157565, .00916281, -.02057706, .02635537, -.01647633, .00392377].reverse(),
                        o = [.5, .87890594, .51498869, .15084934, .02658733, .00301532, 32411e-8].reverse(),
                        i = [.39894228, -.03988024, -.00362018, .00163801, -.01031555, .02282967, -.02895312, .01787654, -.00420059].reverse();
                    return function n(t, u) {
                        if (0 === (u = Math.round(u))) return r(t);
                        if (1 === u) return e(t);
                        if (u < 0) return NaN;
                        if (0 === a.abs(t)) return 0;
                        if (t == 1 / 0) return 1 / 0;
                        var o, i = 0,
                            f = 2 / a.abs(t),
                            s = 0,
                            l = 1,
                            c = 0,
                            m = 2 * a.round((u + a.round(a.sqrt(40 * u))) / 2);
                        for (o = m; o > 0; o--) c = o * f * l + s, s = l, l = c, a.abs(l) > 1e10 && (l *= 1e-10, s *= 1e-10, i *= 1e-10), o == u && (i = s);
                        return i *= n(t, 0) / l, t < 0 && u % 2 ? -i : i
                    }
                }(),
                f = function() {
                    function r(r) {
                        return r <= 2 ? -a.log(r / 2) * i(r, 0) + n(u, r * r / 4) : a.exp(-r) / a.sqrt(r) * n(o, 2 / r)
                    }

                    function e(r) {
                        return r <= 2 ? a.log(r / 2) * i(r, 1) + 1 / r * n(f, r * r / 4) : a.exp(-r) / a.sqrt(r) * n(s, 2 / r)
                    }
                    var u = [-.57721566, .4227842, .23069756, .0348859, .00262698, 1075e-7, 74e-7].reverse(),
                        o = [1.25331414, -.07832358, .02189568, -.01062446, .00587872, -.0025154, 53208e-8].reverse(),
                        f = [1, .15443144, -.67278579, -.18156897, -.01919402, -.00110404, -4686e-8].reverse(),
                        s = [1.25331414, .23498619, -.0365562, .01504268, -.00780353, .00325614, -68245e-8].reverse();
                    return t(r, e, "BESSELK", 2, 1)
                }();
            r.besselj = u, r.bessely = o, r.besseli = i, r.besselk = f
        })
    }, function(r, n, e) {
        function t(r) {
            var n = [];
            return f.arrayEach(r, function(r) {
                r && n.push(r)
            }), n
        }

        function a(r, n) {
            for (var e = {}, t = 1; t < r[0].length; ++t) e[t] = !0;
            var a = n[0].length;
            for (t = 1; t < n.length; ++t) n[t].length > a && (a = n[t].length);
            for (var u = 1; u < r.length; ++u)
                for (var o = 1; o < r[u].length; ++o) {
                    for (var i = !1, f = !1, l = 0; l < n.length; ++l) {
                        var c = n[l];
                        if (!(c.length < a)) {
                            var m = c[0];
                            if (r[u][0] === m) {
                                f = !0;
                                for (var p = 1; p < c.length; ++p)
                                    if (!i) {
                                        var v = void 0 === c[p] || "*" === c[p];
                                        if (v) i = !0;
                                        else {
                                            var h = s.parse(c[p] + ""),
                                                g = [s.createToken(r[u][o], s.TOKEN_TYPE_LITERAL)].concat(h);
                                            i = s.compute(g)
                                        }
                                    }
                            }
                        }
                    }
                    f && (e[o] = e[o] && i)
                }
            for (var E = [], N = 0; N < r[0].length; ++N) e[N] && E.push(N - 1);
            return E
        }
        var u = e(0),
            o = e(3),
            i = e(2),
            f = e(1),
            s = e(5);
        n.FINDFIELD = function(r, n) {
            var e = null;
            return f.arrayEach(r, function(r, t) {
                if (r[0] === n) return e = t, !1
            }), null == e ? u.value : e
        }, n.DAVERAGE = function(r, e, t) {
            if (isNaN(e) && "string" != typeof e) return u.value;
            var o = a(r, t),
                i = [];
            if ("string" == typeof e) {
                var s = n.FINDFIELD(r, e);
                i = f.rest(r[s])
            } else i = f.rest(r[e]);
            var l = 0;
            return f.arrayEach(o, function(r) {
                l += i[r]
            }), 0 === o.length ? u.div0 : l / o.length
        }, n.DCOUNT = function(r, e, t) {
            if (isNaN(e) && "string" != typeof e) return u.value;
            var i = a(r, t),
                s = [];
            if ("string" == typeof e) {
                var l = n.FINDFIELD(r, e);
                s = f.rest(r[l])
            } else s = f.rest(r[e]);
            var c = [];
            return f.arrayEach(i, function(r) {
                c.push(s[r])
            }), o.COUNT(c)
        }, n.DCOUNTA = function(r, e, t) {
            if (isNaN(e) && "string" != typeof e) return u.value;
            var i = a(r, t),
                s = [];
            if ("string" == typeof e) {
                var l = n.FINDFIELD(r, e);
                s = f.rest(r[l])
            } else s = f.rest(r[e]);
            var c = [];
            return f.arrayEach(i, function(r) {
                c.push(s[r])
            }), o.COUNTA(c)
        }, n.DGET = function(r, e, t) {
            if (isNaN(e) && "string" != typeof e) return u.value;
            var o = a(r, t),
                i = [];
            if ("string" == typeof e) {
                var s = n.FINDFIELD(r, e);
                i = f.rest(r[s])
            } else i = f.rest(r[e]);
            return 0 === o.length ? u.value : o.length > 1 ? u.num : i[o[0]]
        }, n.DMAX = function(r, e, t) {
            if (isNaN(e) && "string" != typeof e) return u.value;
            var o = a(r, t),
                i = [];
            if ("string" == typeof e) {
                var s = n.FINDFIELD(r, e);
                i = f.rest(r[s])
            } else i = f.rest(r[e]);
            var l = i[o[0]];
            return f.arrayEach(o, function(r) {
                l < i[r] && (l = i[r])
            }), l
        }, n.DMIN = function(r, e, t) {
            if (isNaN(e) && "string" != typeof e) return u.value;
            var o = a(r, t),
                i = [];
            if ("string" == typeof e) {
                var s = n.FINDFIELD(r, e);
                i = f.rest(r[s])
            } else i = f.rest(r[e]);
            var l = i[o[0]];
            return f.arrayEach(o, function(r) {
                l > i[r] && (l = i[r])
            }), l
        }, n.DPRODUCT = function(r, e, o) {
            if (isNaN(e) && "string" != typeof e) return u.value;
            var i = a(r, o),
                s = [];
            if ("string" == typeof e) {
                var l = n.FINDFIELD(r, e);
                s = f.rest(r[l])
            } else s = f.rest(r[e]);
            var c = [];
            f.arrayEach(i, function(r) {
                c.push(s[r])
            }), c = t(c);
            var m = 1;
            return f.arrayEach(c, function(r) {
                m *= r
            }), m
        }, n.DSTDEV = function(r, e, i) {
            if (isNaN(e) && "string" != typeof e) return u.value;
            var s = a(r, i),
                l = [];
            if ("string" == typeof e) {
                var c = n.FINDFIELD(r, e);
                l = f.rest(r[c])
            } else l = f.rest(r[e]);
            var m = [];
            return f.arrayEach(s, function(r) {
                m.push(l[r])
            }), m = t(m), o.STDEV.S(m)
        }, n.DSTDEVP = function(r, e, i) {
            if (isNaN(e) && "string" != typeof e) return u.value;
            var s = a(r, i),
                l = [];
            if ("string" == typeof e) {
                var c = n.FINDFIELD(r, e);
                l = f.rest(r[c])
            } else l = f.rest(r[e]);
            var m = [];
            return f.arrayEach(s, function(r) {
                m.push(l[r])
            }), m = t(m), o.STDEV.P(m)
        }, n.DSUM = function(r, e, t) {
            if (isNaN(e) && "string" != typeof e) return u.value;
            var o = a(r, t),
                s = [];
            if ("string" == typeof e) {
                var l = n.FINDFIELD(r, e);
                s = f.rest(r[l])
            } else s = f.rest(r[e]);
            var c = [];
            return f.arrayEach(o, function(r) {
                c.push(s[r])
            }), i.SUM(c)
        }, n.DVAR = function(r, e, t) {
            if (isNaN(e) && "string" != typeof e) return u.value;
            var i = a(r, t),
                s = [];
            if ("string" == typeof e) {
                var l = n.FINDFIELD(r, e);
                s = f.rest(r[l])
            } else s = f.rest(r[e]);
            var c = [];
            return f.arrayEach(i, function(r) {
                c.push(s[r])
            }), o.VAR.S(c)
        }, n.DVARP = function(r, e, t) {
            if (isNaN(e) && "string" != typeof e) return u.value;
            var i = a(r, t),
                s = [];
            if ("string" == typeof e) {
                var l = n.FINDFIELD(r, e);
                s = f.rest(r[l])
            } else s = f.rest(r[e]);
            var c = [];
            return f.arrayEach(i, function(r) {
                c.push(s[r])
            }), o.VAR.P(c)
        }
    }, function(r, n, e) {
        var t = e(0),
            a = e(1),
            u = e(6);
        n.AND = function() {
            for (var r = a.flatten(arguments), n = t.value, e = 0; e < r.length; e++) {
                if (r[e] instanceof Error) return r[e];
                void 0 !== r[e] && null !== r[e] && "string" != typeof r[e] && (n === t.value && (n = !0), r[e] || (n = !1))
            }
            return n
        }, n.CHOOSE = function() {
            if (arguments.length < 2) return t.na;
            var r = arguments[0];
            return r < 1 || r > 254 ? t.value : arguments.length < r + 1 ? t.value : arguments[r]
        }, n.FALSE = function() {
            return !1
        }, n.IF = function(r, n, e) {
            return r instanceof Error ? r : (n = !(arguments.length >= 2) || n, void 0 !== n && null !== n || (n = 0), e = 3 === arguments.length && e, void 0 !== e && null !== e || (e = 0), r ? n : e)
        }, n.IFS = function() {
            for (var r = 0; r < arguments.length / 2; r++)
                if (arguments[2 * r]) return arguments[2 * r + 1];
            return t.na
        }, n.IFERROR = function(r, n) {
            return u.ISERROR(r) ? n : r
        }, n.IFNA = function(r, n) {
            return r === t.na ? n : r
        }, n.NOT = function(r) {
            return "string" == typeof r ? t.value : r instanceof Error ? r : !r
        }, n.OR = function() {
            for (var r = a.flatten(arguments), n = t.value, e = 0; e < r.length; e++) {
                if (r[e] instanceof Error) return r[e];
                void 0 !== r[e] && null !== r[e] && "string" != typeof r[e] && (n === t.value && (n = !1), r[e] && (n = !0))
            }
            return n
        }, n.TRUE = function() {
            return !0
        }, n.XOR = function() {
            for (var r = a.flatten(arguments), n = t.value, e = 0; e < r.length; e++) {
                if (r[e] instanceof Error) return r[e];
                void 0 !== r[e] && null !== r[e] && "string" != typeof r[e] && (n === t.value && (n = 0), r[e] && n++)
            }
            return n === t.value ? n : !!(1 & Math.floor(Math.abs(n)))
        }, n.SWITCH = function() {
            var r;
            if (arguments.length > 0) {
                var n = arguments[0],
                    e = arguments.length - 1,
                    a = Math.floor(e / 2),
                    u = !1,
                    o = e % 2 != 0,
                    i = e % 2 == 0 ? null : arguments[arguments.length - 1];
                if (a)
                    for (var f = 0; f < a; f++)
                        if (n === arguments[2 * f + 1]) {
                            r = arguments[2 * f + 2], u = !0;
                            break
                        } u || (r = o ? i : t.na)
            } else r = t.value;
            return r
        }
    }, function(r, n, e) {
        function t(r) {
            return r && r.getTime && !isNaN(r.getTime())
        }

        function a(r) {
            return r instanceof Date ? r : new Date(r)
        }
        var u = e(0),
            o = e(7),
            i = e(1);
        n.ACCRINT = function(r, n, e, i, f, s, l) {
            return r = a(r), n = a(n), e = a(e), t(r) && t(n) && t(e) ? i <= 0 || f <= 0 ? u.num : -1 === [1, 2, 4].indexOf(s) ? u.num : -1 === [0, 1, 2, 3, 4].indexOf(l) ? u.num : e <= r ? u.num : (f = f || 0, l = l || 0, f * i * o.YEARFRAC(r, e, l)) : u.value
        }, n.ACCRINTM = function() {
            throw new Error("ACCRINTM is not implemented")
        }, n.AMORDEGRC = function() {
            throw new Error("AMORDEGRC is not implemented")
        }, n.AMORLINC = function() {
            throw new Error("AMORLINC is not implemented")
        }, n.COUPDAYBS = function() {
            throw new Error("COUPDAYBS is not implemented")
        }, n.COUPDAYS = function() {
            throw new Error("COUPDAYS is not implemented")
        }, n.COUPDAYSNC = function() {
            throw new Error("COUPDAYSNC is not implemented")
        }, n.COUPNCD = function() {
            throw new Error("COUPNCD is not implemented")
        }, n.COUPNUM = function() {
            throw new Error("COUPNUM is not implemented")
        }, n.COUPPCD = function() {
            throw new Error("COUPPCD is not implemented")
        }, n.CUMIPMT = function(r, e, t, a, o, f) {
            if (r = i.parseNumber(r), e = i.parseNumber(e), t = i.parseNumber(t), i.anyIsError(r, e, t)) return u.value;
            if (r <= 0 || e <= 0 || t <= 0) return u.num;
            if (a < 1 || o < 1 || a > o) return u.num;
            if (0 !== f && 1 !== f) return u.num;
            var s = n.PMT(r, e, t, 0, f),
                l = 0;
            1 === a && (0 === f && (l = -t), a++);
            for (var c = a; c <= o; c++) l += 1 === f ? n.FV(r, c - 2, s, t, 1) - s : n.FV(r, c - 1, s, t, 0);
            return l *= r
        }, n.CUMPRINC = function(r, e, t, a, o, f) {
            if (r = i.parseNumber(r), e = i.parseNumber(e), t = i.parseNumber(t), i.anyIsError(r, e, t)) return u.value;
            if (r <= 0 || e <= 0 || t <= 0) return u.num;
            if (a < 1 || o < 1 || a > o) return u.num;
            if (0 !== f && 1 !== f) return u.num;
            var s = n.PMT(r, e, t, 0, f),
                l = 0;
            1 === a && (l = 0 === f ? s + t * r : s, a++);
            for (var c = a; c <= o; c++) l += f > 0 ? s - (n.FV(r, c - 2, s, t, 1) - s) * r : s - n.FV(r, c - 1, s, t, 0) * r;
            return l
        }, n.DB = function(r, n, e, t, a) {
            if (a = void 0 === a ? 12 : a, r = i.parseNumber(r), n = i.parseNumber(n), e = i.parseNumber(e), t = i.parseNumber(t), a = i.parseNumber(a), i.anyIsError(r, n, e, t, a)) return u.value;
            if (r < 0 || n < 0 || e < 0 || t < 0) return u.num;
            if (-1 === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].indexOf(a)) return u.num;
            if (t > e) return u.num;
            if (n >= r) return 0;
            for (var o = (1 - Math.pow(n / r, 1 / e)).toFixed(3), f = r * o * a / 12, s = f, l = 0, c = t === e ? e - 1 : t, m = 2; m <= c; m++) l = (r - s) * o, s += l;
            return 1 === t ? f : t === e ? (r - s) * o : l
        }, n.DDB = function(r, n, e, t, a) {
            if (a = void 0 === a ? 2 : a, r = i.parseNumber(r), n = i.parseNumber(n), e = i.parseNumber(e), t = i.parseNumber(t), a = i.parseNumber(a), i.anyIsError(r, n, e, t, a)) return u.value;
            if (r < 0 || n < 0 || e < 0 || t < 0 || a <= 0) return u.num;
            if (t > e) return u.num;
            if (n >= r) return 0;
            for (var o = 0, f = 0, s = 1; s <= t; s++) f = Math.min(a / e * (r - o), r - n - o), o += f;
            return f
        }, n.DISC = function() {
            throw new Error("DISC is not implemented")
        }, n.DOLLARDE = function(r, n) {
            if (r = i.parseNumber(r), n = i.parseNumber(n), i.anyIsError(r, n)) return u.value;
            if (n < 0) return u.num;
            if (n >= 0 && n < 1) return u.div0;
            n = parseInt(n, 10);
            var e = parseInt(r, 10);
            e += r % 1 * Math.pow(10, Math.ceil(Math.log(n) / Math.LN10)) / n;
            var t = Math.pow(10, Math.ceil(Math.log(n) / Math.LN2) + 1);
            return e = Math.round(e * t) / t
        }, n.DOLLARFR = function(r, n) {
            if (r = i.parseNumber(r), n = i.parseNumber(n), i.anyIsError(r, n)) return u.value;
            if (n < 0) return u.num;
            if (n >= 0 && n < 1) return u.div0;
            n = parseInt(n, 10);
            var e = parseInt(r, 10);
            return e += r % 1 * Math.pow(10, -Math.ceil(Math.log(n) / Math.LN10)) * n
        }, n.DURATION = function() {
            throw new Error("DURATION is not implemented")
        }, n.EFFECT = function(r, n) {
            return r = i.parseNumber(r), n = i.parseNumber(n), i.anyIsError(r, n) ? u.value : r <= 0 || n < 1 ? u.num : (n = parseInt(n, 10), Math.pow(1 + r / n, n) - 1)
        }, n.FV = function(r, n, e, t, a) {
            if (t = t || 0, a = a || 0, r = i.parseNumber(r), n = i.parseNumber(n), e = i.parseNumber(e), t = i.parseNumber(t), a = i.parseNumber(a), i.anyIsError(r, n, e, t, a)) return u.value;
            var o;
            if (0 === r) o = t + e * n;
            else {
                var f = Math.pow(1 + r, n);
                o = 1 === a ? t * f + e * (1 + r) * (f - 1) / r : t * f + e * (f - 1) / r
            }
            return -o
        }, n.FVSCHEDULE = function(r, n) {
            if (r = i.parseNumber(r), n = i.parseNumberArray(i.flatten(n)), i.anyIsError(r, n)) return u.value;
            for (var e = n.length, t = r, a = 0; a < e; a++) t *= 1 + n[a];
            return t
        }, n.INTRATE = function() {
            throw new Error("INTRATE is not implemented")
        }, n.IPMT = function(r, e, t, a, o, f) {
            if (o = o || 0, f = f || 0, r = i.parseNumber(r), e = i.parseNumber(e), t = i.parseNumber(t), a = i.parseNumber(a), o = i.parseNumber(o), f = i.parseNumber(f), i.anyIsError(r, e, t, a, o, f)) return u.value;
            var s = n.PMT(r, t, a, o, f);
            return (1 === e ? 1 === f ? 0 : -a : 1 === f ? n.FV(r, e - 2, s, a, 1) - s : n.FV(r, e - 1, s, a, 0)) * r
        }, n.IRR = function(r, n) {
            if (n = n || 0, r = i.parseNumberArray(i.flatten(r)), n = i.parseNumber(n), i.anyIsError(r, n)) return u.value;
            for (var e = [], t = !1, a = !1, o = 0; o < r.length; o++) e[o] = 0 === o ? 0 : e[o - 1] + 365, r[o] > 0 && (t = !0), r[o] < 0 && (a = !0);
            if (!t || !a) return u.num;
            n = void 0 === n ? .1 : n;
            var f, s, l, c = n,
                m = !0;
            do {
                l = function(r, n, e) {
                    for (var t = e + 1, a = r[0], u = 1; u < r.length; u++) a += r[u] / Math.pow(t, (n[u] - n[0]) / 365);
                    return a
                }(r, e, c), f = c - l / function(r, n, e) {
                    for (var t = e + 1, a = 0, u = 1; u < r.length; u++) {
                        var o = (n[u] - n[0]) / 365;
                        a -= o * r[u] / Math.pow(t, o + 1)
                    }
                    return a
                }(r, e, c), s = Math.abs(f - c), c = f, m = s > 1e-10 && Math.abs(l) > 1e-10
            } while (m);
            return c
        }, n.ISPMT = function(r, n, e, t) {
            return r = i.parseNumber(r), n = i.parseNumber(n), e = i.parseNumber(e), t = i.parseNumber(t), i.anyIsError(r, n, e, t) ? u.value : t * r * (n / e - 1)
        }, n.MDURATION = function() {
            throw new Error("MDURATION is not implemented")
        }, n.MIRR = function(r, e, t) {
            if (r = i.parseNumberArray(i.flatten(r)), e = i.parseNumber(e), t = i.parseNumber(t), i.anyIsError(r, e, t)) return u.value;
            for (var a = r.length, o = [], f = [], s = 0; s < a; s++) r[s] < 0 ? o.push(r[s]) : f.push(r[s]);
            var l = -n.NPV(t, f) * Math.pow(1 + t, a - 1),
                c = n.NPV(e, o) * (1 + e);
            return Math.pow(l / c, 1 / (a - 1)) - 1
        }, n.NOMINAL = function(r, n) {
            return r = i.parseNumber(r), n = i.parseNumber(n), i.anyIsError(r, n) ? u.value : r <= 0 || n < 1 ? u.num : (n = parseInt(n, 10), (Math.pow(r + 1, 1 / n) - 1) * n)
        }, n.NPER = function(r, n, e, t, a) {
            if (a = void 0 === a ? 0 : a, t = void 0 === t ? 0 : t, r = i.parseNumber(r), n = i.parseNumber(n), e = i.parseNumber(e), t = i.parseNumber(t), a = i.parseNumber(a), i.anyIsError(r, n, e, t, a)) return u.value;
            if (0 === r) return -(e + t) / n;
            var o = n * (1 + r * a) - t * r,
                f = e * r + n * (1 + r * a);
            return Math.log(o / f) / Math.log(1 + r)
        }, n.NPV = function() {
            var r = i.parseNumberArray(i.flatten(arguments));
            if (r instanceof Error) return r;
            for (var n = r[0], e = 0, t = 1; t < r.length; t++) e += r[t] / Math.pow(1 + n, t);
            return e
        }, n.ODDFPRICE = function() {
            throw new Error("ODDFPRICE is not implemented")
        }, n.ODDFYIELD = function() {
            throw new Error("ODDFYIELD is not implemented")
        }, n.ODDLPRICE = function() {
            throw new Error("ODDLPRICE is not implemented")
        }, n.ODDLYIELD = function() {
            throw new Error("ODDLYIELD is not implemented")
        }, n.PDURATION = function(r, n, e) {
            return r = i.parseNumber(r), n = i.parseNumber(n), e = i.parseNumber(e), i.anyIsError(r, n, e) ? u.value : r <= 0 ? u.num : (Math.log(e) - Math.log(n)) / Math.log(1 + r)
        }, n.PMT = function(r, n, e, t, a) {
            if (t = t || 0, a = a || 0, r = i.parseNumber(r), n = i.parseNumber(n), e = i.parseNumber(e), t = i.parseNumber(t), a = i.parseNumber(a), i.anyIsError(r, n, e, t, a)) return u.value;
            var o;
            if (0 === r) o = (e + t) / n;
            else {
                var f = Math.pow(1 + r, n);
                o = 1 === a ? (t * r / (f - 1) + e * r / (1 - 1 / f)) / (1 + r) : t * r / (f - 1) + e * r / (1 - 1 / f)
            }
            return -o
        }, n.PPMT = function(r, e, t, a, o, f) {
            return o = o || 0, f = f || 0, r = i.parseNumber(r), t = i.parseNumber(t), a = i.parseNumber(a), o = i.parseNumber(o), f = i.parseNumber(f), i.anyIsError(r, t, a, o, f) ? u.value : n.PMT(r, t, a, o, f) - n.IPMT(r, e, t, a, o, f)
        }, n.PRICE = function() {
            throw new Error("PRICE is not implemented")
        }, n.PRICEDISC = function() {
            throw new Error("PRICEDISC is not implemented")
        }, n.PRICEMAT = function() {
            throw new Error("PRICEMAT is not implemented")
        }, n.PV = function(r, n, e, t, a) {
            return t = t || 0, a = a || 0, r = i.parseNumber(r), n = i.parseNumber(n), e = i.parseNumber(e), t = i.parseNumber(t), a = i.parseNumber(a), i.anyIsError(r, n, e, t, a) ? u.value : 0 === r ? -e * n - t : ((1 - Math.pow(1 + r, n)) / r * e * (1 + r * a) - t) / Math.pow(1 + r, n)
        }, n.RATE = function(r, n, e, t, a, o) {
            if (o = void 0 === o ? .01 : o, t = void 0 === t ? 0 : t, a = void 0 === a ? 0 : a, r = i.parseNumber(r), n = i.parseNumber(n), e = i.parseNumber(e), t = i.parseNumber(t), a = i.parseNumber(a), o = i.parseNumber(o), i.anyIsError(r, n, e, t, a, o)) return u.value;
            var f = o;
            a = a ? 1 : 0;
            for (var s = 0; s < 20; s++) {
                if (f <= -1) return u.num;
                var l, c;
                if (Math.abs(f) < 1e-10 ? l = e * (1 + r * f) + n * (1 + f * a) * r + t : (c = Math.pow(1 + f, r), l = e * c + n * (1 / f + a) * (c - 1) + t), Math.abs(l) < 1e-10) return f;
                var m;
                if (Math.abs(f) < 1e-10) m = e * r + n * a * r;
                else {
                    c = Math.pow(1 + f, r);
                    var p = r * Math.pow(1 + f, r - 1);
                    m = e * p + n * (1 / f + a) * p + n * (-1 / (f * f)) * (c - 1)
                }
                f -= l / m
            }
            return f
        }, n.RECEIVED = function() {
            throw new Error("RECEIVED is not implemented")
        }, n.RRI = function(r, n, e) {
            return r = i.parseNumber(r), n = i.parseNumber(n), e = i.parseNumber(e), i.anyIsError(r, n, e) ? u.value : 0 === r || 0 === n ? u.num : Math.pow(e / n, 1 / r) - 1
        }, n.SLN = function(r, n, e) {
            return r = i.parseNumber(r), n = i.parseNumber(n), e = i.parseNumber(e), i.anyIsError(r, n, e) ? u.value : 0 === e ? u.num : (r - n) / e
        }, n.SYD = function(r, n, e, t) {
            return r = i.parseNumber(r), n = i.parseNumber(n), e = i.parseNumber(e), t = i.parseNumber(t), i.anyIsError(r, n, e, t) ? u.value : 0 === e ? u.num : t < 1 || t > e ? u.num : (t = parseInt(t, 10), (r - n) * (e - t + 1) * 2 / (e * (e + 1)))
        }, n.TBILLEQ = function(r, n, e) {
            return r = i.parseDate(r), n = i.parseDate(n), e = i.parseNumber(e), i.anyIsError(r, n, e) ? u.value : e <= 0 ? u.num : r > n ? u.num : n - r > 31536e6 ? u.num : 365 * e / (360 - e * o.DAYS360(r, n, !1))
        }, n.TBILLPRICE = function(r, n, e) {
            return r = i.parseDate(r), n = i.parseDate(n), e = i.parseNumber(e), i.anyIsError(r, n, e) ? u.value : e <= 0 ? u.num : r > n ? u.num : n - r > 31536e6 ? u.num : 100 * (1 - e * o.DAYS360(r, n, !1) / 360)
        }, n.TBILLYIELD = function(r, n, e) {
            return r = i.parseDate(r), n = i.parseDate(n), e = i.parseNumber(e), i.anyIsError(r, n, e) ? u.value : e <= 0 ? u.num : r > n ? u.num : n - r > 31536e6 ? u.num : 360 * (100 - e) / (e * o.DAYS360(r, n, !1))
        }, n.VDB = function() {
            throw new Error("VDB is not implemented")
        }, n.XIRR = function(r, n, e) {
            if (r = i.parseNumberArray(i.flatten(r)), n = i.parseDateArray(i.flatten(n)), e = i.parseNumber(e), i.anyIsError(r, n, e)) return u.value;
            for (var t = !1, a = !1, f = 0; f < r.length; f++) r[f] > 0 && (t = !0), r[f] < 0 && (a = !0);
            if (!t || !a) return u.num;
            e = e || .1;
            var s, l, c, m = e,
                p = !0;
            do {
                c = function(r, n, e) {
                    for (var t = e + 1, a = r[0], u = 1; u < r.length; u++) a += r[u] / Math.pow(t, o.DAYS(n[u], n[0]) / 365);
                    return a
                }(r, n, m), s = m - c / function(r, n, e) {
                    for (var t = e + 1, a = 0, u = 1; u < r.length; u++) {
                        var i = o.DAYS(n[u], n[0]) / 365;
                        a -= i * r[u] / Math.pow(t, i + 1)
                    }
                    return a
                }(r, n, m), l = Math.abs(s - m), m = s, p = l > 1e-10 && Math.abs(c) > 1e-10
            } while (p);
            return m
        }, n.XNPV = function(r, n, e) {
            if (r = i.parseNumber(r), n = i.parseNumberArray(i.flatten(n)), e = i.parseDateArray(i.flatten(e)), i.anyIsError(r, n, e)) return u.value;
            for (var t = 0, a = 0; a < n.length; a++) t += n[a] / Math.pow(1 + r, o.DAYS(e[a], e[0]) / 365);
            return t
        }, n.YIELD = function() {
            throw new Error("YIELD is not implemented")
        }, n.YIELDDISC = function() {
            throw new Error("YIELDDISC is not implemented")
        }, n.YIELDMAT = function() {
            throw new Error("YIELDMAT is not implemented")
        }
    }, function(r, n, e) {
        var t = e(0),
            a = e(1);
        n.MATCH = function(r, n, e) {
            if (!r && !n) return t.na;
            if (2 === arguments.length && (e = 1), !(n instanceof Array)) return t.na;
            if (n = a.flatten(n), -1 !== e && 0 !== e && 1 !== e) return t.na;
            for (var u, o, i = 0; i < n.length; i++)
                if (1 === e) {
                    if (n[i] === r) return i + 1;
                    n[i] < r && (o ? n[i] > o && (u = i + 1, o = n[i]) : (u = i + 1, o = n[i]))
                } else if (0 === e) {
                if ("string" == typeof r) {
                    if (r = r.replace(/\?/g, "."), n[i].toLowerCase().match(r.toLowerCase())) return i + 1
                } else if (n[i] === r) return i + 1
            } else if (-1 === e) {
                if (n[i] === r) return i + 1;
                n[i] > r && (o ? n[i] < o && (u = i + 1, o = n[i]) : (u = i + 1, o = n[i]))
            }
            return u || t.na
        }, n.VLOOKUP = function(r, n, e, a) {
            if (!n || !e) return t.na;
            a = !(0 === a || !1 === a);
            for (var u = t.na, o = "number" == typeof r, i = !1, f = 0; f < n.length; f++) {
                var s = n[f];
                if (s[0] === r) {
                    u = e < s.length + 1 ? s[e - 1] : t.ref;
                    break
                }!i && (o && a && s[0] <= r || a && "string" == typeof s[0] && s[0].localeCompare(r) < 0) && (u = e < s.length + 1 ? s[e - 1] : t.ref), o && s[0] > r && (i = !0)
            }
            return u
        }, n.HLOOKUP = function(r, e, t, u) {
            return n.VLOOKUP(r, a.transpose(e), t, u)
        }, n.LOOKUP = function(r, n, e) {
            n = a.flatten(n), e = a.flatten(e);
            for (var u = "number" == typeof r, o = t.na, i = 0; i < n.length; i++) {
                if (n[i] === r) return e[i];
                if (u && n[i] <= r || "string" == typeof n[i] && n[i].localeCompare(r) < 0) o = e[i];
                else if (u && n[i] > r) return o
            }
            return o
        }, n.INDEX = function(r, n, e) {
            var u = a.anyError(r, n, e);
            if (u) return u;
            if (!Array.isArray(r)) return t.value;
            var o = r.length > 0 && !Array.isArray(r[0]);
            return o && !e ? (e = n, n = 1) : (e = e || 1, n = n || 1), e < 0 || n < 0 ? t.value : o && 1 === n && e <= r.length ? r[e - 1] : n <= r.length && e <= r[n - 1].length ? r[n - 1][e - 1] : t.ref
        }
    }])
});