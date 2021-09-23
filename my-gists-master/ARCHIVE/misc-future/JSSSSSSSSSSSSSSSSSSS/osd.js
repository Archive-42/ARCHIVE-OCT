(function (window, document) {
  /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
  var k;

  function ba(a) {
    var b = 0;
    return function () {
      return b < a.length
        ? {
            done: !1,
            value: a[b++],
          }
        : {
            done: !0,
          };
    };
  }
  var ca =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (a, b, c) {
          if (a == Array.prototype || a == Object.prototype) return a;
          a[b] = c.value;
          return a;
        };

  function da(a) {
    a = [
      "object" == typeof globalThis && globalThis,
      a,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global,
    ];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  }
  var ea = da(this);

  function fa(a, b) {
    if (b)
      a: {
        var c = ea;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d];
          if (!(e in c)) break a;
          c = c[e];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d &&
          null != b &&
          ca(c, a, {
            configurable: !0,
            writable: !0,
            value: b,
          });
      }
  }

  function ha(a) {
    var b =
      "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b
      ? b.call(a)
      : {
          next: ba(a),
        };
  }

  function r(a) {
    if (!(a instanceof Array)) {
      a = ha(a);
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      a = c;
    }
    return a;
  }
  var ia =
    "function" == typeof Object.assign
      ? Object.assign
      : function (a, b) {
          for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
              for (var e in d)
                Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
          }
          return a;
        };
  fa("Object.assign", function (a) {
    return a || ia;
  });
  var ja =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            function b() {}
            b.prototype = a;
            return new b();
          },
    ka;
  if ("function" == typeof Object.setPrototypeOf) ka = Object.setPrototypeOf;
  else {
    var la;
    a: {
      var ma = {
          a: !0,
        },
        na = {};
      try {
        na.__proto__ = ma;
        la = na.a;
        break a;
      } catch (a) {}
      la = !1;
    }
    ka = la
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var oa = ka;

  function t(a, b) {
    a.prototype = ja(b.prototype);
    a.prototype.constructor = a;
    if (oa) oa(a, b);
    else
      for (var c in b)
        if ("prototype" != c)
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d);
          } else a[c] = b[c];
    a.sc = b.prototype;
  }
  fa("Math.trunc", function (a) {
    return a
      ? a
      : function (b) {
          b = Number(b);
          if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b)
            return b;
          var c = Math.floor(Math.abs(b));
          return 0 > b ? -c : c;
        };
  });
  var u = this || self;

  function pa() {}

  function qa(a) {
    var b = typeof a;
    b = "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
    return "array" == b || ("object" == b && "number" == typeof a.length);
  }

  function sa(a) {
    var b = typeof a;
    return ("object" == b && null != a) || "function" == b;
  }

  function ta(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  }

  function ua(a, b) {
    a = a.split(".");
    var c = u;
    a[0] in c ||
      "undefined" == typeof c.execScript ||
      c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift()); )
      a.length || void 0 === b
        ? c[d] && c[d] !== Object.prototype[d]
          ? (c = c[d])
          : (c = c[d] = {})
        : (c[d] = b);
  }

  function va(a) {
    return a;
  }
  var wa;

  function xa(a) {
    var b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  }

  function ya(a, b) {
    if ("string" === typeof a)
      return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
    for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1;
  }

  function v(a, b, c) {
    for (
      var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0;
      f < d;
      f++
    )
      f in e && b.call(c, e[f], f, a);
  }

  function za(a, b) {
    for (
      var c = a.length,
        d = [],
        e = 0,
        f = "string" === typeof a ? a.split("") : a,
        g = 0;
      g < c;
      g++
    )
      if (g in f) {
        var h = f[g];
        b.call(void 0, h, g, a) && (d[e++] = h);
      }
    return d;
  }

  function Aa(a, b) {
    for (
      var c = a.length,
        d = Array(c),
        e = "string" === typeof a ? a.split("") : a,
        f = 0;
      f < c;
      f++
    )
      f in e && (d[f] = b.call(void 0, e[f], f, a));
    return d;
  }

  function Ba(a, b, c) {
    var d = c;
    v(a, function (e, f) {
      d = b.call(void 0, d, e, f, a);
    });
    return d;
  }

  function Ca(a, b) {
    for (
      var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0;
      e < c;
      e++
    )
      if (e in d && b.call(void 0, d[e], e, a)) return !0;
    return !1;
  }

  function Da(a, b) {
    var c = 0;
    v(
      a,
      function (d, e, f) {
        b.call(void 0, d, e, f) && ++c;
      },
      void 0
    );
    return c;
  }

  function Ea(a, b) {
    b = Fa(a, b, void 0);
    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
  }

  function Fa(a, b, c) {
    for (
      var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0;
      f < d;
      f++
    )
      if (f in e && b.call(c, e[f], f, a)) return f;
    return -1;
  }

  function Ga(a, b) {
    return 0 <= ya(a, b);
  }

  function Ha(a) {
    return Array.prototype.concat.apply([], arguments);
  }

  function Ia(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }

  function Ja(a, b) {
    a.sort(b || Ka);
  }

  function Ka(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }

  function La(a) {
    if (!arguments.length) return [];
    for (var b = [], c = arguments[0].length, d = 1; d < arguments.length; d++)
      arguments[d].length < c && (c = arguments[d].length);
    for (d = 0; d < c; d++) {
      for (var e = [], f = 0; f < arguments.length; f++)
        e.push(arguments[f][d]);
      b.push(e);
    }
    return b;
  }

  function Ma(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a);
  }

  function Na(a, b) {
    var c = {},
      d;
    for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
    return c;
  }

  function Oa(a) {
    var b = Pa,
      c;
    for (c in b) if (!a.call(void 0, b[c], c, b)) return !1;
    return !0;
  }

  function Qa(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = a[d];
    return b;
  }
  var Ra =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " "
    );

  function w(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var f = 0; f < Ra.length; f++)
        (c = Ra[f]),
          Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  var Sa;

  function Ta(a, b) {
    this.Eb = (a === Ua && b) || "";
    this.g = Xa;
  }
  Ta.prototype.Rb = !0;

  function Ya(a) {
    return a instanceof Ta && a.constructor === Ta && a.g === Xa
      ? a.Eb
      : "type_error:Const";
  }
  var Xa = {},
    Ua = {};

  function Za(a) {
    if (void 0 === Sa) {
      var b = null;
      var c = u.trustedTypes;
      if (c && c.createPolicy) {
        try {
          b = c.createPolicy("goog#html", {
            createHTML: va,
            createScript: va,
            createScriptURL: va,
          });
        } catch (d) {
          u.console && u.console.error(d.message);
        }
        Sa = b;
      } else Sa = b;
    }
    (b = Sa) && b.createScriptURL(a);
  }

  function $a(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
  }

  function x(a, b) {
    return -1 != a.toLowerCase().indexOf(b.toLowerCase());
  }

  function ab(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  var z;
  a: {
    var bb = u.navigator;
    if (bb) {
      var cb = bb.userAgent;
      if (cb) {
        z = cb;
        break a;
      }
    }
    z = "";
  }

  function A(a) {
    return -1 != z.indexOf(a);
  }

  function db() {
    return A("Firefox") || A("FxiOS");
  }

  function eb() {
    return (
      A("Safari") &&
      !(
        fb() ||
        A("Coast") ||
        A("Opera") ||
        A("Edge") ||
        A("Edg/") ||
        A("OPR") ||
        db() ||
        A("Silk") ||
        A("Android")
      )
    );
  }

  function fb() {
    return (A("Chrome") || A("CriOS")) && !A("Edge");
  }

  function gb() {
    return A("Android") && !(fb() || db() || A("Opera") || A("Silk"));
  }

  function hb() {
    return "opacity".replace(/\-([a-z])/g, function (a, b) {
      return b.toUpperCase();
    });
  }

  function ib(a) {
    return String(a)
      .replace(/([A-Z])/g, "-$1")
      .toLowerCase();
  }

  function jb(a) {
    return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) {
      return c + d.toUpperCase();
    });
  }
  var kb = "function" === typeof Uint8Array.prototype.slice,
    lb,
    mb = 0,
    nb = 0;

  function ob() {
    this.g = new Uint8Array(64);
    this.h = 0;
  }
  ob.prototype.push = function (a) {
    if (!(this.h + 1 < this.g.length)) {
      var b = this.g;
      this.g = new Uint8Array(Math.ceil(1 + 2 * this.g.length));
      this.g.set(b);
    }
    this.g[this.h++] = a;
  };
  ob.prototype.length = function () {
    return this.h;
  };
  ob.prototype.end = function () {
    var a = this.g,
      b = this.h;
    this.h = 0;
    return 0 === b
      ? lb || (lb = new Uint8Array(0))
      : kb
      ? a.slice(0, b)
      : new Uint8Array(a.subarray(0, b));
  };

  function pb(a, b) {
    for (; 127 < b; ) a.push((b & 127) | 128), (b >>>= 7);
    a.push(b);
  }

  function qb(a, b) {
    a.push((b >>> 0) & 255);
    a.push((b >>> 8) & 255);
    a.push((b >>> 16) & 255);
    a.push((b >>> 24) & 255);
  }

  function rb(a) {
    rb[" "](a);
    return a;
  }
  rb[" "] = pa;

  function sb(a, b) {
    try {
      return rb(a[b]), !0;
    } catch (c) {}
    return !1;
  }

  function tb(a, b) {
    var c = ub;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : (c[a] = b(a));
  }
  var vb = A("Opera"),
    B = A("Trident") || A("MSIE"),
    wb = A("Edge"),
    xb =
      A("Gecko") &&
      !(x(z, "WebKit") && !A("Edge")) &&
      !(A("Trident") || A("MSIE")) &&
      !A("Edge"),
    yb = x(z, "WebKit") && !A("Edge"),
    zb = yb && A("Mobile");

  function Cb() {
    var a = u.document;
    return a ? a.documentMode : void 0;
  }
  var Db;
  a: {
    var Eb = "",
      Fb = (function () {
        var a = z;
        if (xb) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (wb) return /Edge\/([\d\.]+)/.exec(a);
        if (B) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (yb) return /WebKit\/(\S+)/.exec(a);
        if (vb) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    Fb && (Eb = Fb ? Fb[1] : "");
    if (B) {
      var Gb = Cb();
      if (null != Gb && Gb > parseFloat(Eb)) {
        Db = String(Gb);
        break a;
      }
    }
    Db = Eb;
  }
  var Hb = Db,
    ub = {};

  function Ib(a) {
    return tb(a, function () {
      for (
        var b = 0,
          c = $a(String(Hb)).split("."),
          d = $a(String(a)).split("."),
          e = Math.max(c.length, d.length),
          f = 0;
        0 == b && f < e;
        f++
      ) {
        var g = c[f] || "",
          h = d[f] || "";
        do {
          g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
          h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
          if (0 == g[0].length && 0 == h[0].length) break;
          b =
            ab(
              0 == g[1].length ? 0 : parseInt(g[1], 10),
              0 == h[1].length ? 0 : parseInt(h[1], 10)
            ) ||
            ab(0 == g[2].length, 0 == h[2].length) ||
            ab(g[2], h[2]);
          g = g[3];
          h = h[3];
        } while (0 == b);
      }
      return 0 <= b;
    });
  }
  var Jb;
  if (u.document && B) {
    var Kb = Cb();
    Jb = Kb ? Kb : parseInt(Hb, 10) || void 0;
  } else Jb = void 0;
  var Lb = Jb;
  db();
  gb();
  fb();
  eb();
  var Mb = {},
    Nb = null;

  function Ob(a) {
    var b;
    void 0 === b && (b = 0);
    if (!Nb) {
      Nb = {};
      for (
        var c =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
              ""
            ),
          d = ["+/=", "+/", "-_=", "-_.", "-_"],
          e = 0;
        5 > e;
        e++
      ) {
        var f = c.concat(d[e].split(""));
        Mb[e] = f;
        for (var g = 0; g < f.length; g++) {
          var h = f[g];
          void 0 === Nb[h] && (Nb[h] = g);
        }
      }
    }
    b = Mb[b];
    c = Array(Math.floor(a.length / 3));
    d = b[64] || "";
    for (e = f = 0; f < a.length - 2; f += 3) {
      var n = a[f],
        m = a[f + 1];
      h = a[f + 2];
      g = b[n >> 2];
      n = b[((n & 3) << 4) | (m >> 4)];
      m = b[((m & 15) << 2) | (h >> 6)];
      h = b[h & 63];
      c[e++] = g + n + m + h;
    }
    g = 0;
    h = d;
    switch (a.length - f) {
      case 2:
        (g = a[f + 1]), (h = b[(g & 15) << 2] || d);
      case 1:
        (a = a[f]), (c[e] = b[a >> 2] + b[((a & 3) << 4) | (g >> 4)] + h + d);
    }
    return c.join("");
  }

  function Pb() {
    this.h = [];
    this.i = 0;
    this.g = new ob();
  }

  function Qb(a, b) {
    0 !== b.length && (a.h.push(b), (a.i += b.length));
  }

  function Rb(a, b, c) {
    if (null != c) {
      pb(a.g, 8 * b);
      a = a.g;
      var d = c;
      c = 0 > d;
      d = Math.abs(d);
      b = d >>> 0;
      d = Math.floor((d - b) / 4294967296);
      d >>>= 0;
      c &&
        ((d = ~d >>> 0),
        (b = (~b >>> 0) + 1),
        4294967295 < b && ((b = 0), d++, 4294967295 < d && (d = 0)));
      mb = b;
      nb = d;
      c = mb;
      for (b = nb; 0 < b || 127 < c; )
        a.push((c & 127) | 128),
          (c = ((c >>> 7) | (b << 25)) >>> 0),
          (b >>>= 7);
      a.push(c);
    }
  }
  var Sb = "function" === typeof Uint8Array;

  function Tb(a, b, c) {
    return "object" === typeof a
      ? Sb && !Array.isArray(a) && a instanceof Uint8Array
        ? c(a)
        : Ub(a, b, c)
      : b(a);
  }

  function Ub(a, b, c) {
    if (Array.isArray(a)) {
      for (var d = Array(a.length), e = 0; e < a.length; e++) {
        var f = a[e];
        null != f && (d[e] = Tb(f, b, c));
      }
      Array.isArray(a) && a.Sb && Vb(d);
      return d;
    }
    d = {};
    for (e in a)
      Object.prototype.hasOwnProperty.call(a, e) &&
        ((f = a[e]), null != f && (d[e] = Tb(f, b, c)));
    return d;
  }

  function Wb(a) {
    return Ub(
      a,
      function (b) {
        return "number" === typeof b ? (isFinite(b) ? b : String(b)) : b;
      },
      function (b) {
        return Ob(b);
      }
    );
  }
  var Xb = {
    Sb: {
      value: !0,
      configurable: !0,
    },
  };

  function Vb(a) {
    Array.isArray(a) && !Object.isFrozen(a) && Object.defineProperties(a, Xb);
    return a;
  }
  var Yb;

  function Zb(a, b, c) {
    var d = Yb;
    Yb = null;
    a || (a = d);
    d = this.constructor.qc;
    a || (a = d ? [d] : []);
    this.i = d ? 0 : -1;
    this.g = a;
    a: {
      d = this.g.length;
      a = d - 1;
      if (
        d &&
        ((d = this.g[a]),
        !(
          null === d ||
          "object" != typeof d ||
          Array.isArray(d) ||
          (Sb && d instanceof Uint8Array)
        ))
      ) {
        this.j = a - this.i;
        this.h = d;
        break a;
      }
      void 0 !== b && -1 < b
        ? ((this.j = Math.max(b, a + 1 - this.i)), (this.h = null))
        : (this.j = Number.MAX_VALUE);
    }
    if (c)
      for (b = 0; b < c.length; b++)
        (a = c[b]),
          a < this.j
            ? ((a += this.i), (d = this.g[a]) ? Vb(d) : (this.g[a] = $b))
            : (ac(this), (d = this.h[a]) ? Vb(d) : (this.h[a] = $b));
  }
  var $b = Object.freeze(Vb([]));

  function ac(a) {
    var b = a.j + a.i;
    a.g[b] || (a.h = a.g[b] = {});
  }

  function bc(a, b) {
    return -1 === b ? null : b >= a.j ? (a.h ? a.h[b] : void 0) : a.g[b + a.i];
  }

  function cc(a, b, c) {
    b >= a.j ? (ac(a), (a.h[b] = c)) : (a.g[b + a.i] = c);
  }

  function dc(a, b, c) {
    0 !== c ? cc(a, b, c) : cc(a, b, void 0);
    return a;
  }
  Zb.prototype.toJSON = function () {
    return Wb(this.g);
  };
  Zb.prototype.toString = function () {
    return this.g.toString();
  };
  var ec;
  ec = ["av.key", "js", "20210910"].slice(-1)[0];
  var C = document,
    D = window;
  var fc = {
      NONE: 0,
      Zb: 1,
    },
    gc = {
      Yb: 0,
      nc: 1,
      lc: 2,
      oc: 3,
    };

  function hc() {
    this.A = 0;
    this.i = !1;
    this.h = -1;
    this.g = !1;
    this.j = 0;
  }
  hc.prototype.isVisible = function () {
    return this.g ? 0.3 <= this.A : 0.5 <= this.A;
  };
  var F = {
      Xb: 0,
      $b: 1,
    },
    ic = {
      668123728: 0,
      668123729: 1,
    },
    jc = {
      44731964: 0,
      44731965: 1,
    },
    kc = {
      NONE: 0,
      fc: 1,
      ac: 2,
    },
    lc = {
      480596784: 0,
      480596785: 1,
      21063355: 2,
    };

  function mc() {
    this.g = null;
    this.j = !1;
    this.h = null;
  }

  function G(a) {
    a.j = !0;
    return a;
  }

  function nc(a, b) {
    a.h &&
      v(b, function (c) {
        c = a.h[c];
        void 0 !== c && a.i(c);
      });
  }

  function oc(a) {
    mc.call(this);
    this.l = a;
  }
  t(oc, mc);
  oc.prototype.i = function (a) {
    var b;
    if (!(b = null !== this.g)) {
      a: {
        b = this.l;
        for (c in b)
          if (b[c] == a) {
            var c = !0;
            break a;
          }
        c = !1;
      }
      b = !c;
    }
    b || (this.g = a);
  };

  function pc() {
    mc.call(this);
  }
  t(pc, mc);
  pc.prototype.i = function (a) {
    null === this.g && "number" === typeof a && (this.g = a);
  };

  function qc() {
    this.g = {};
    this.h = {};
  }

  function H(a, b, c) {
    a.g[b] || (a.g[b] = new oc(c));
    return a.g[b];
  }

  function rc(a, b, c) {
    (a = a.g[b]) && a.i(c);
  }

  function I(a, b) {
    var c = a.h;
    if (null !== c && b in c) return a.h[b];
    if ((a = a.g[b])) return a.g;
  }

  function sc(a) {
    var b = {},
      c = Na(a.g, function (d) {
        return d.j;
      });
    Ma(
      c,
      function (d, e) {
        d =
          void 0 !== a.h[e]
            ? String(a.h[e])
            : d.j && null !== d.g
            ? String(d.g)
            : "";
        0 < d.length && (b[e] = d);
      },
      a
    );
    return b;
  }

  function tc(a, b) {
    b = b.split("&");
    for (var c = b.length - 1; 0 <= c; c--) {
      var d = b[c].split("="),
        e = d[0];
      d = 1 < d.length ? parseInt(d[1], 10) : 1;
      isNaN(d) || ((e = a.g[e]) && e.i(d));
    }
    return b.join("&");
  }

  function uc(a, b) {
    v(Qa(a.g), function (c) {
      return nc(c, b);
    });
  }

  function vc(a, b) {
    b &&
      "string" === typeof b &&
      (b = b.match(/[&;?]eid=([^&;]+)/)) &&
      2 === b.length &&
      ((b = decodeURIComponent(b[1]).split(",")),
      (b = Aa(b, function (c) {
        return Number(c);
      })),
      uc(a, b));
  }
  var wc = !B && !eb();

  function xc(a, b) {
    if (/-[a-z]/.test(b)) return null;
    if (wc && a.dataset) {
      if (gb() && !(b in a.dataset)) return null;
      a = a.dataset[b];
      return void 0 === a ? null : a;
    }
    return a.getAttribute("data-" + ib(b));
  }

  function yc(a, b) {
    return /-[a-z]/.test(b)
      ? !1
      : wc && a.dataset
      ? b in a.dataset
      : a.hasAttribute
      ? a.hasAttribute("data-" + ib(b))
      : !!a.getAttribute("data-" + ib(b));
  }
  var Ac = B || yb;

  function J(a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0;
  }
  J.prototype.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  J.prototype.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  J.prototype.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };

  function K(a, b) {
    this.width = a;
    this.height = b;
  }
  K.prototype.aspectRatio = function () {
    return this.width / this.height;
  };
  K.prototype.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  K.prototype.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  K.prototype.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };

  function Bc(a) {
    return a ? new Cc(L(a)) : wa || (wa = new Cc());
  }

  function Dc() {
    var a = document;
    a.getElementsByClassName
      ? (a = a.getElementsByClassName("GoogleActiveViewContainer")[0])
      : ((a = document),
        (a =
          a.querySelectorAll && a.querySelector
            ? a.querySelector(".GoogleActiveViewContainer")
            : Ec(a, "*", "GoogleActiveViewContainer", void 0)[0] || null));
    return a || null;
  }

  function Ec(a, b, c, d) {
    a = d || a;
    b = b && "*" != b ? String(b).toUpperCase() : "";
    if (a.querySelectorAll && a.querySelector && (b || c))
      return a.querySelectorAll(b + (c ? "." + c : ""));
    if (c && a.getElementsByClassName) {
      a = a.getElementsByClassName(c);
      if (b) {
        d = {};
        for (var e = 0, f = 0, g; (g = a[f]); f++)
          b == g.nodeName && (d[e++] = g);
        d.length = e;
        return d;
      }
      return a;
    }
    a = a.getElementsByTagName(b || "*");
    if (c) {
      d = {};
      for (f = e = 0; (g = a[f]); f++)
        (b = g.className),
          "function" == typeof b.split && Ga(b.split(/\s+/), c) && (d[e++] = g);
      d.length = e;
      return d;
    }
    return a;
  }

  function Fc(a, b) {
    Ma(b, function (c, d) {
      c && "object" == typeof c && c.Rb && (c = c.Eb);
      "style" == d
        ? (a.style.cssText = c)
        : "class" == d
        ? (a.className = c)
        : "for" == d
        ? (a.htmlFor = c)
        : Gc.hasOwnProperty(d)
        ? a.setAttribute(Gc[d], c)
        : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0)
        ? a.setAttribute(d, c)
        : (a[d] = c);
    });
  }
  var Gc = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width",
  };

  function Hc(a) {
    var b = a.scrollingElement
      ? a.scrollingElement
      : yb || "CSS1Compat" != a.compatMode
      ? a.body || a.documentElement
      : a.documentElement;
    a = a.parentWindow || a.defaultView;
    return B && Ib("10") && a.pageYOffset != b.scrollTop
      ? new J(b.scrollLeft, b.scrollTop)
      : new J(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
  }

  function Ic(a) {
    return a ? a.parentWindow || a.defaultView : window;
  }

  function Jc(a, b, c) {
    var d = arguments,
      e = document,
      f = d[1],
      g = Kc(e, String(d[0]));
    f &&
      ("string" === typeof f
        ? (g.className = f)
        : Array.isArray(f)
        ? (g.className = f.join(" "))
        : Fc(g, f));
    2 < d.length && Lc(e, g, d, 2);
    return g;
  }

  function Lc(a, b, c, d) {
    function e(h) {
      h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h);
    }
    for (; d < c.length; d++) {
      var f = c[d];
      if (!qa(f) || (sa(f) && 0 < f.nodeType)) e(f);
      else {
        a: {
          if (f && "number" == typeof f.length) {
            if (sa(f)) {
              var g = "function" == typeof f.item || "string" == typeof f.item;
              break a;
            }
            if ("function" === typeof f) {
              g = "function" == typeof f.item;
              break a;
            }
          }
          g = !1;
        }
        v(g ? Ia(f) : f, e);
      }
    }
  }

  function Kc(a, b) {
    b = String(b);
    "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
    return a.createElement(b);
  }

  function L(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document;
  }

  function Mc(a) {
    try {
      return (
        a.contentWindow || (a.contentDocument ? Ic(a.contentDocument) : null)
      );
    } catch (b) {}
    return null;
  }

  function Nc(a, b) {
    a && (a = a.parentNode);
    for (var c = 0; a; ) {
      if (b(a)) return a;
      a = a.parentNode;
      c++;
    }
    return null;
  }

  function Cc(a) {
    this.g = a || u.document || document;
  }
  Cc.prototype.getElementsByTagName = function (a, b) {
    return (b || this.g).getElementsByTagName(String(a));
  };
  Cc.prototype.appendChild = function (a, b) {
    a.appendChild(b);
  };
  Cc.prototype.append = function (a, b) {
    Lc(L(a), a, arguments, 1);
  };
  Cc.prototype.canHaveChildren = function (a) {
    if (1 != a.nodeType) return !1;
    switch (a.tagName) {
      case "APPLET":
      case "AREA":
      case "BASE":
      case "BR":
      case "COL":
      case "COMMAND":
      case "EMBED":
      case "FRAME":
      case "HR":
      case "IMG":
      case "INPUT":
      case "IFRAME":
      case "ISINDEX":
      case "KEYGEN":
      case "LINK":
      case "NOFRAMES":
      case "NOSCRIPT":
      case "META":
      case "OBJECT":
      case "PARAM":
      case "SCRIPT":
      case "SOURCE":
      case "STYLE":
      case "TRACK":
      case "WBR":
        return !1;
    }
    return !0;
  };

  function Oc() {
    this.g = this.h = null;
    this.i = "no";
  }

  function Pc(a, b) {
    this.h = (void 0 === a ? 0 : a) || 0;
    this.g = (void 0 === b ? "" : b) || "";
  }
  Pc.prototype.i = function () {
    return !!this.h || !!this.g;
  };
  Pc.prototype.toString = function () {
    return this.h + (this.g ? "-" : "") + this.g;
  };
  Pc.prototype.matches = function (a) {
    return this.g || a.g ? this.g == a.g : this.h || a.h ? this.h == a.h : !1;
  };

  function M() {}
  M.prototype.g = function () {
    return 0;
  };
  M.prototype.i = function () {
    return 0;
  };
  M.prototype.j = function () {
    return 0;
  };
  M.prototype.h = function () {
    return 0;
  };

  function Qc() {
    if (!Rc()) throw Error();
  }
  t(Qc, M);

  function Rc() {
    return !(!D || !D.performance);
  }
  Qc.prototype.g = function () {
    return Rc() && D.performance.now
      ? D.performance.now()
      : M.prototype.g.call(this);
  };
  Qc.prototype.i = function () {
    return Rc() && D.performance.memory
      ? D.performance.memory.totalJSHeapSize || 0
      : M.prototype.i.call(this);
  };
  Qc.prototype.j = function () {
    return Rc() && D.performance.memory
      ? D.performance.memory.usedJSHeapSize || 0
      : M.prototype.j.call(this);
  };
  Qc.prototype.h = function () {
    return Rc() && D.performance.memory
      ? D.performance.memory.jsHeapSizeLimit || 0
      : M.prototype.h.call(this);
  };
  var Sc = xa(function () {
    var a = !1;
    try {
      var b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        },
      });
      u.addEventListener("test", null, b);
    } catch (c) {}
    return a;
  });

  function Tc(a) {
    return a ? (a.passive && Sc() ? a : a.capture || !1) : !1;
  }

  function Uc(a, b, c, d) {
    return a.addEventListener ? (a.addEventListener(b, c, Tc(d)), !0) : !1;
  }

  function Vc(a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, Tc(void 0));
  }

  function Wc() {
    return (
      {
        visible: 1,
        hidden: 2,
        prerender: 3,
        preview: 4,
        unloaded: 5,
      }[
        C.visibilityState ||
          C.webkitVisibilityState ||
          C.mozVisibilityState ||
          ""
      ] || 0
    );
  }

  function Xc() {}
  Xc.prototype.isVisible = function () {
    return 1 === Wc();
  };

  function Yc() {
    return A("iPad") || (A("Android") && !A("Mobile")) || A("Silk");
  }
  var Zc = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
  );

  function $c(a) {
    try {
      return !!a && null != a.location.href && sb(a, "foo");
    } catch (b) {
      return !1;
    }
  }

  function ad(a, b) {
    if (a)
      for (var c in a)
        Object.prototype.hasOwnProperty.call(a, c) &&
          b.call(void 0, a[c], c, a);
  }

  function bd() {
    var a = cd;
    if (!a) return "";
    var b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
    try {
      var c = b.exec(decodeURIComponent(a));
      if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true";
    } catch (d) {}
    return "";
  }

  function N(a, b, c, d) {
    this.top = a;
    this.h = b;
    this.g = c;
    this.left = d;
  }

  function dd(a) {
    return a.h - a.left;
  }

  function ed(a) {
    return a.g - a.top;
  }

  function fd(a) {
    return new N(a.top, a.h, a.g, a.left);
  }
  N.prototype.ceil = function () {
    this.top = Math.ceil(this.top);
    this.h = Math.ceil(this.h);
    this.g = Math.ceil(this.g);
    this.left = Math.ceil(this.left);
    return this;
  };
  N.prototype.floor = function () {
    this.top = Math.floor(this.top);
    this.h = Math.floor(this.h);
    this.g = Math.floor(this.g);
    this.left = Math.floor(this.left);
    return this;
  };
  N.prototype.round = function () {
    this.top = Math.round(this.top);
    this.h = Math.round(this.h);
    this.g = Math.round(this.g);
    this.left = Math.round(this.left);
    return this;
  };

  function gd(a, b, c) {
    b instanceof J
      ? ((a.left += b.x), (a.h += b.x), (a.top += b.y), (a.g += b.y))
      : ((a.left += b),
        (a.h += b),
        "number" === typeof c && ((a.top += c), (a.g += c)));
    return a;
  }

  function hd(a, b, c) {
    a.google_image_requests || (a.google_image_requests = []);
    var d = a.document.createElement("img");
    c && (d.referrerPolicy = "no-referrer");
    d.src = b;
    a.google_image_requests.push(d);
  }

  function id(a) {
    if (jd()) hd(window, a, !0);
    else {
      var b = u.document;
      if (b.body) {
        var c = b.getElementById("goog-srcless-iframe");
        c ||
          ((c = Kc(document, "IFRAME")),
          (c.style.display = "none"),
          (c.id = "goog-srcless-iframe"),
          b.body.appendChild(c));
        b = c;
      } else b = null;
      b && b.contentWindow && hd(b.contentWindow, a, !0);
    }
  }
  var jd = xa(function () {
    return "referrerPolicy" in u.document.createElement("img");
  });
  var kd = {};

  function ld(a) {
    try {
      return a.getBoundingClientRect();
    } catch (b) {
      return {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      };
    }
  }

  function md(a, b) {
    var c = new J(0, 0),
      d = Ic(L(a));
    if (!sb(d, "parent")) return c;
    do {
      if (d == b) {
        var e = a,
          f = L(e);
        var g = new J(0, 0);
        var h = f ? L(f) : document;
        h =
          !B || 9 <= Number(Lb) || "CSS1Compat" == Bc(h).g.compatMode
            ? h.documentElement
            : h.body;
        e != h &&
          ((e = ld(e)),
          (f = Hc(Bc(f).g)),
          (g.x = e.left + f.x),
          (g.y = e.top + f.y));
      } else (g = ld(a)), (g = new J(g.left, g.top));
      c.x += g.x;
      c.y += g.y;
    } while (
      d &&
      d != b &&
      d != d.parent &&
      (a = d.frameElement) &&
      (d = d.parent)
    );
    return c;
  }

  function nd(a) {
    return !(!a || !a.call) && "function" === typeof a;
  }

  function od() {
    var a = C.documentElement,
      b = O();
    try {
      if (C.createEvent) {
        var c = C.createEvent("CustomEvent");
        c.initCustomEvent("osd_load", !0, !0, "");
        a.dispatchEvent(c);
      } else if (nd(b.CustomEvent)) {
        var d = new b.CustomEvent("osd_load", {
          bubbles: !0,
          cancelable: !0,
          detail: "",
        });
        a.dispatchEvent(d);
      } else if (nd(b.Event)) {
        var e = new Event("osd_load", {
          bubbles: !0,
          cancelable: !0,
        });
        a.dispatchEvent(e);
      }
    } catch (f) {}
  }

  function pd() {
    var a = O();
    return "complete" === a.document.readyState || !!a.google_onload_fired;
  }
  var qd = !!window.google_async_iframe_id,
    rd = (qd && window.parent) || window;

  function O() {
    if (qd && !$c(rd)) {
      var a = "." + C.domain;
      try {
        for (; 2 < a.split(".").length && !$c(rd); )
          (C.domain = a = a.substr(a.indexOf(".") + 1)), (rd = window.parent);
      } catch (b) {}
      $c(rd) || (rd = window);
    }
    return rd;
  }
  var sd = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");

  function td() {
    var a = u,
      b = [],
      c = null;
    do {
      var d = a;
      if ($c(d)) {
        var e = d.location.href;
        c = (d.document && d.document.referrer) || null;
      } else (e = c), (c = null);
      b.push(new ud(e || "", d));
      try {
        a = d.parent;
      } catch (f) {
        a = null;
      }
    } while (a && d != a);
    d = 0;
    for (a = b.length - 1; d <= a; ++d) b[d].depth = a - d;
    d = u;
    if (
      d.location &&
      d.location.ancestorOrigins &&
      d.location.ancestorOrigins.length == b.length - 1
    )
      for (a = 1; a < b.length; ++a)
        (e = b[a]),
          e.url ||
            ((e.url = d.location.ancestorOrigins[a - 1] || ""), (e.ub = !0));
    return b;
  }

  function vd(a, b) {
    this.g = a;
    this.h = b;
  }

  function ud(a, b, c) {
    this.url = a;
    this.B = b;
    this.ub = !!c;
    this.depth = null;
  }

  function wd() {
    this.i = "&";
    this.h = {};
    this.j = 0;
    this.g = [];
  }

  function xd(a, b) {
    var c = {};
    c[a] = b;
    return [c];
  }

  function yd(a, b, c, d, e) {
    var f = [];
    ad(a, function (g, h) {
      (g = zd(g, b, c, d, e)) && f.push(h + "=" + g);
    });
    return f.join(b);
  }

  function zd(a, b, c, d, e) {
    if (null == a) return "";
    b = b || "&";
    c = c || ",$";
    "string" == typeof c && (c = c.split(""));
    if (a instanceof Array) {
      if (((d = d || 0), d < c.length)) {
        for (var f = [], g = 0; g < a.length; g++)
          f.push(zd(a[g], b, c, d + 1, e));
        return f.join(c[d]);
      }
    } else if ("object" == typeof a)
      return (
        (e = e || 0), 2 > e ? encodeURIComponent(yd(a, b, c, d, e + 1)) : "..."
      );
    return encodeURIComponent(String(a));
  }

  function Ad(a, b, c) {
    b = b + "//pagead2.googlesyndication.com" + c;
    var d = Bd(a) - c.length;
    if (0 > d) return "";
    a.g.sort(function (l, q) {
      return l - q;
    });
    c = null;
    for (var e = "", f = 0; f < a.g.length; f++)
      for (var g = a.g[f], h = a.h[g], n = 0; n < h.length; n++) {
        if (!d) {
          c = null == c ? g : c;
          break;
        }
        var m = yd(h[n], a.i, ",$");
        if (m) {
          m = e + m;
          if (d >= m.length) {
            d -= m.length;
            b += m;
            e = a.i;
            break;
          }
          c = null == c ? g : c;
        }
      }
    a = "";
    null != c && (a = e + "trn=" + c);
    return b + a;
  }

  function Bd(a) {
    var b = 1,
      c;
    for (c in a.h) b = c.length > b ? c.length : b;
    return 3997 - b - a.i.length - 1;
  }

  function P(a) {
    if (a.Sa && a.hasOwnProperty("Sa")) return a.Sa;
    var b = new a();
    return (a.Sa = b);
  }

  function Cd() {
    this.h = new Xc();
    this.g = Rc() ? new Qc() : new M();
  }

  function Dd(a, b, c) {
    return D.setTimeout(b, c);
  }

  function Ed(a) {
    Q();
    var b = O() || D;
    hd(b, a, !1);
  }

  function Fd() {}

  function Q() {
    var a = P(Fd);
    if (!a.g) {
      if (!D) throw Error("Context has not been set and window is undefined.");
      a.g = P(Cd);
    }
    return a.g;
  }

  function Gd(a) {
    Zb.call(this, a);
  }
  t(Gd, Zb);

  function Hd(a) {
    this.i = a;
    this.g = -1;
    this.h = this.j = 0;
  }

  function Id(a, b) {
    return function (c) {
      for (var d = [], e = 0; e < arguments.length; ++e) d[e] = arguments[e];
      if (-1 < a.g) return b.apply(null, r(d));
      try {
        return (a.g = a.i.g.g()), b.apply(null, r(d));
      } finally {
        (a.j += a.i.g.g() - a.g), (a.g = -1), (a.h += 1);
      }
    };
  }

  function Jd(a, b) {
    this.h = a;
    this.i = b;
    this.g = new Hd(a);
  }
  var Kd = {
    jc: 1,
    pc: 2,
    ic: 3,
  };
  Za(Ya(new Ta(Ua, "https://pagead2.googlesyndication.com/pagead/osd.js")));

  function Ld() {
    this.m = void 0;
    this.i = this.s = 0;
    this.o = -1;
    this.g = new qc();
    G(H(this.g, "mv", kc)).h = void 0 === lc ? null : lc;
    H(this.g, "omid", F);
    G(H(this.g, "epoh", F));
    G(H(this.g, "epph", F));
    G(H(this.g, "umt", F)).h = void 0 === ic ? null : ic;
    G(H(this.g, "phel", F));
    G(H(this.g, "phell", F));
    G(H(this.g, "oseid", Kd));
    var a = this.g;
    a.g.sloi || (a.g.sloi = new pc());
    G(a.g.sloi);
    G(H(this.g, "ovms", gc));
    G(H(this.g, "xdi", F));
    G(H(this.g, "amp", F));
    G(H(this.g, "prf", F));
    G(H(this.g, "gtx", F));
    G(H(this.g, "mvp_lv", F));
    G(H(this.g, "ssmol", F)).h = void 0 === jc ? null : jc;
    this.j = new Jd(Q(), this.g);
    this.h = null;
    this.l = !1;
  }

  function R() {
    return P(Ld);
  }

  function Md() {
    var a = "https:";
    D && D.location && "http:" === D.location.protocol && (a = "http:");
    this.h = a;
    this.g = 0.01;
    this.i = Math.random();
  }

  function Nd(a, b, c, d, e) {
    if ((d ? a.i : Math.random()) < (e || a.g))
      try {
        if (c instanceof wd) var f = c;
        else
          (f = new wd()),
            ad(c, function (h, n) {
              var m = f,
                l = m.j++;
              h = xd(n, h);
              m.g.push(l);
              m.h[l] = h;
            });
        var g = Ad(f, a.h, "/pagead/gen_204?id=" + b + "&");
        g && Ed(g);
      } catch (h) {}
  }

  function Od(a, b, c) {
    c = void 0 === c ? {} : c;
    this.error = a;
    this.context = b.context;
    this.msg = b.message || "";
    this.id = b.id || "jserror";
    this.meta = c;
  }
  var Pd = null;

  function Qd() {
    var a = u.performance;
    return a && a.now && a.timing
      ? Math.floor(a.now() + a.timing.navigationStart)
      : Date.now();
  }

  function Rd() {
    var a = void 0 === a ? u : a;
    return (a = a.performance) && a.now ? a.now() : null;
  }

  function Sd(a, b) {
    var c = Rd() || Qd();
    this.label = a;
    this.type = b;
    this.value = c;
    this.duration = 0;
    this.uniqueId = Math.random();
    this.slotId = void 0;
  }
  var S = u.performance,
    Td = !!(S && S.mark && S.measure && S.clearMarks),
    Ud = xa(function () {
      var a;
      if ((a = Td)) {
        var b;
        if (null === Pd) {
          Pd = "";
          try {
            a = "";
            try {
              a = u.top.location.hash;
            } catch (c) {
              a = u.location.hash;
            }
            a && (Pd = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "");
          } catch (c) {}
        }
        b = Pd;
        a = !!b.indexOf && 0 <= b.indexOf("1337");
      }
      return a;
    });

  function Vd() {
    var a = O();
    this.h = [];
    this.i = a || u;
    var b = null;
    a &&
      ((a.google_js_reporting_queue = a.google_js_reporting_queue || []),
      (this.h = a.google_js_reporting_queue),
      (b = a.google_measure_js_timing));
    this.g = Ud() || (null != b ? b : 1 > Math.random());
  }

  function Wd(a) {
    a &&
      S &&
      Ud() &&
      (S.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"),
      S.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"));
  }
  Vd.prototype.start = function (a, b) {
    if (!this.g) return null;
    a = new Sd(a, b);
    b = "goog_" + a.label + "_" + a.uniqueId + "_start";
    S && Ud() && S.mark(b);
    return a;
  };
  Vd.prototype.end = function (a) {
    if (this.g && "number" === typeof a.value) {
      a.duration = (Rd() || Qd()) - a.value;
      var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
      S && Ud() && S.mark(b);
      !this.g || 2048 < this.h.length || this.h.push(a);
    }
  };

  function Xd() {
    var a = Yd;
    this.h = Zd;
    this.lb = "jserror";
    this.Wa = !0;
    this.Ka = null;
    this.i = this.Ta;
    this.g = void 0 === a ? null : a;
  }

  function $d(a, b, c) {
    return Id(R().j.g, function () {
      try {
        if (a.g && a.g.g) {
          var d = a.g.start(b.toString(), 3);
          var e = c();
          a.g.end(d);
        } else e = c();
      } catch (g) {
        var f = a.Wa;
        try {
          Wd(d), (f = a.i(b, new ae(be(g)), void 0, void 0));
        } catch (h) {
          a.Ta(217, h);
        }
        if (!f) throw g;
      }
      return e;
    })();
  }

  function ce(a, b) {
    var c = de;
    return Id(R().j.g, function (d) {
      for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];
      return $d(c, a, function () {
        return b.apply(void 0, e);
      });
    });
  }
  Xd.prototype.Ta = function (a, b, c, d, e) {
    e = e || this.lb;
    try {
      var f = new wd();
      f.g.push(1);
      f.h[1] = xd("context", a);
      (b.error && b.meta && b.id) || (b = new ae(be(b)));
      if (b.msg) {
        var g = b.msg.substring(0, 512);
        f.g.push(2);
        f.h[2] = xd("msg", g);
      }
      var h = b.meta || {};
      if (this.Ka)
        try {
          this.Ka(h);
        } catch (zc) {}
      if (d)
        try {
          d(h);
        } catch (zc) {}
      b = [h];
      f.g.push(3);
      f.h[3] = b;
      var n = td(),
        m = new ud(u.location.href, u, !1);
      b = null;
      var l = n.length - 1;
      for (d = l; 0 <= d; --d) {
        var q = n[d];
        !b && sd.test(q.url) && (b = q);
        if (q.url && !q.ub) {
          m = q;
          break;
        }
      }
      q = null;
      var p = n.length && n[l].url;
      0 != m.depth && p && (q = n[l]);
      var y = new vd(m, q);
      if (y.h) {
        var Va = y.h.url || "";
        f.g.push(4);
        f.h[4] = xd("top", Va);
      }
      var E = {
        url: y.g.url || "",
      };
      if (y.g.url) {
        var ra = y.g.url.match(Zc),
          Wa = ra[1],
          aa = ra[3],
          Ab = ra[4];
        n = "";
        Wa && (n += Wa + ":");
        aa && ((n += "//"), (n += aa), Ab && (n += ":" + Ab));
        var Bb = n;
      } else Bb = "";
      E = [
        E,
        {
          url: Bb,
        },
      ];
      f.g.push(5);
      f.h[5] = E;
      Nd(this.h, e, f, !1, c);
    } catch (zc) {
      try {
        Nd(
          this.h,
          e,
          {
            context: "ecmserr",
            rctx: a,
            msg: be(zc),
            url: y && y.g.url,
          },
          !1,
          c
        );
      } catch (di) {}
    }
    return this.Wa;
  };

  function be(a) {
    var b = a.toString();
    a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
    a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
    if (a.stack) {
      a = a.stack;
      try {
        -1 == a.indexOf(b) && (a = b + "\n" + a);
        for (var c; a != c; )
          (c = a),
            (a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1"));
        b = a.replace(/\n */g, "\n");
      } catch (d) {}
    }
    return b;
  }

  function ae(a) {
    Od.call(this, Error(a), {
      message: a,
    });
  }
  t(ae, Od);
  var Zd,
    de,
    Yd = new Vd();

  function ee() {
    var a = O();
    a &&
      "undefined" != typeof a.google_measure_js_timing &&
      !a.google_measure_js_timing &&
      ((a = Yd),
      (a.g = !1),
      a.h != a.i.google_js_reporting_queue &&
        (Ud() && v(a.h, Wd), (a.h.length = 0)));
  }
  (function () {
    Zd = new Md();
    de = new Xd();
    var a = O();
    a &&
      a.document &&
      ("complete" == a.document.readyState
        ? ee()
        : Yd.g &&
          Uc(a, "load", function () {
            ee();
          }));
  })();

  function fe(a) {
    de.Ka = function (b) {
      v(a, function (c) {
        c(b);
      });
    };
  }

  function ge(a, b) {
    return $d(de, a, b);
  }

  function he(a, b) {
    return ce(a, b);
  }

  function ie(a, b) {
    Nd(Zd, a, b, "jserror" != a, void 0);
  }

  function je(a, b, c, d) {
    de.Ta(a, b, c, d);
  }
  var ke = Date.now(),
    le = -1,
    me = -1,
    ne = !1;

  function T() {
    return Date.now() - ke;
  }

  function oe() {
    var a = R().m,
      b = 0 <= me ? T() - me : -1,
      c = ne ? T() - le : -1;
    if (947190542 == a) return 100;
    if (79463069 == a) return 200;
    a = [2e3, 4e3];
    var d = [250, 500, 1e3];
    je(637, Error(), 0.001);
    var e = b;
    -1 != c && c < b && (e = c);
    for (b = 0; b < a.length; ++b)
      if (e < a[b]) {
        var f = d[b];
        break;
      }
    void 0 === f && (f = d[a.length]);
    return f;
  }

  function pe(a, b, c) {
    var d = new N(0, 0, 0, 0);
    this.time = a;
    this.volume = null;
    this.i = b;
    this.g = d;
    this.h = c;
  }

  function qe(a, b, c, d, e, f, g) {
    this.l = a;
    this.j = b;
    this.i = c;
    this.h = d;
    this.m = e;
    this.g = f;
    this.o = g;
  }

  function re(a) {
    this.g = a;
    this.defaultValue = !1;
  }
  var se = new re(160),
    te = new re(900),
    ue = new re(382);

  function ve() {
    var a = {};
    this.g = function (b, c) {
      return null != a[b] ? a[b] : c;
    };
    this.i = function (b, c) {
      return null != a[b] ? a[b] : c;
    };
    this.j = function (b, c) {
      return null != a[b] ? a[b] : c;
    };
    this.l = function (b, c) {
      return null != a[b] ? a[b] : c;
    };
    this.h = function () {};
  }

  function we(a) {
    for (var b = 0, c = a, d = 0; a && a != a.parent; )
      (a = a.parent), d++, $c(a) && ((c = a), (b = d));
    return {
      B: c,
      level: b,
    };
  }
  var Pa = {
    Wb: "addEventListener",
    bc: "getMaxSize",
    cc: "getScreenSize",
    dc: "getState",
    ec: "getVersion",
    kc: "removeEventListener",
    hc: "isViewable",
  };

  function xe(a) {
    var b = a !== a.top,
      c = a.top === we(a).B,
      d = -1,
      e = 0;
    if (b && c && a.top.mraid) {
      d = 3;
      var f = a.top.mraid;
    } else d = (f = a.mraid) ? (b ? (c ? 2 : 1) : 0) : -1;
    f &&
      (f.IS_GMA_SDK || (e = 2),
      Oa(function (g) {
        return "function" === typeof f[g];
      }) || (e = 1));
    return {
      I: f,
      ya: e,
      Vb: d,
    };
  }

  function ye(a) {
    return (a = a.document) && "function" === typeof a.elementFromPoint;
  }
  if (C && C.URL) {
    var ze,
      cd = C.URL;
    ze = !!cd && 0 < bd().length;
    de.Wa = !ze;
  }

  function Ae(a, b, c, d) {
    var e = void 0 === e ? !1 : e;
    c = ce(d, c);
    Uc(a, b, c, {
      capture: e,
    });
    return c;
  }

  function Be(a) {
    var b = [];
    Ma(a, function (c, d) {
      d = encodeURIComponent(d);
      "string" === typeof c && (c = encodeURIComponent(c));
      b.push(d + "=" + c);
    });
    b.push("24=" + Date.now());
    return b.join("\n");
  }

  function Ce(a, b, c) {
    try {
      a && (b = b.top);
      var d = void 0;
      var e = b;
      c = void 0 === c ? !1 : c;
      a && null !== e && e != e.top && (e = e.top);
      try {
        if (void 0 === c ? 0 : c)
          var f = new K(e.innerWidth, e.innerHeight).round();
        else {
          var g = (e || window).document,
            h = "CSS1Compat" == g.compatMode ? g.documentElement : g.body;
          f = new K(h.clientWidth, h.clientHeight).round();
        }
        d = f;
      } catch (q) {
        d = new K(-12245933, -12245933);
      }
      a = d;
      var n = Hc(Bc(b.document).g);
      if (-12245933 == a.width) {
        var m = a.width;
        var l = new N(m, m, m, m);
      } else l = new N(n.y, n.x + a.width, n.y + a.height, n.x);
      return l;
    } catch (q) {
      return new N(-12245933, -12245933, -12245933, -12245933);
    }
  }
  var De = 0;

  function Ee(a) {
    var b = Math.pow(10, 2);
    return Math.floor(a * b) / b;
  }

  function Fe(a, b) {
    try {
      De++, b.postMessage(a, "*");
    } catch (c) {}
  }

  function Ge(a, b) {
    b &&
      (a(b),
      b.frames &&
        v(b.frames, function (c) {
          Ge(a, c);
        }));
  }

  function He(a) {
    return new N(a.top, a.right, a.bottom, a.left);
  }

  function Ie() {
    var a = Q().h;
    return 0 === Wc() ? -1 : a.isVisible() ? 0 : 1;
  }

  function Je(a) {
    return [a.top, a.left, a.g, a.h].join("-");
  }

  function Ke(a, b, c) {
    if (b && a)
      if (c && 0 < c.length)
        for (
          c = za(c, function (e) {
            var f = e.parent && e.parent !== e;
            return e === D.top || f;
          }),
            a = ha(c),
            c = a.next();
          !c.done;
          c = a.next()
        )
          Fe(b, c.value);
      else {
        c = [];
        var d = Mc(a);
        d && c.push(d);
        if (0 === c.length)
          try {
            c = Aa(
              Ec(document, "IFRAME".toString().toLowerCase(), void 0, a),
              function (e) {
                return Mc(e);
              }
            );
          } catch (e) {}
        a = ha(c);
        for (c = a.next(); !c.done; c = a.next()) {
          c = c.value;
          try {
            b && Ge(ta(Fe, b), c);
          } catch (e) {}
        }
      }
  }

  function Le(a, b, c) {
    try {
      var d = Be(b);
      Ke(a, d, c);
    } catch (e) {}
  }

  function Me() {
    var a = z;
    return a
      ? Ca(
          "Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;MiBOX".split(
            ";"
          ),
          function (b) {
            return x(a, b);
          }
        ) ||
        (x(a, "OMI/") && !x(a, "XiaoMi/"))
        ? !0
        : x(a, "Presto") &&
          x(a, "Linux") &&
          !x(a, "X11") &&
          !x(a, "Android") &&
          !x(a, "Mobi")
      : !1;
  }

  function Ne() {
    var a = z;
    return (
      x(a, "AppleTV") || x(a, "Apple TV") || x(a, "CFNetwork") || x(a, "tvOS")
    );
  }

  function Oe() {
    var a = z;
    return x(a, "sdk_google_atv_x86") || x(a, "Android TV");
  }

  function Pe() {
    this.i = !$c(D.top);
    this.D = !this.i;
    this.m =
      Yc() ||
      (!Yc() && (A("iPod") || A("iPhone") || A("Android") || A("IEMobile")));
    var a = td();
    0 < a.length &&
      null != a[a.length - 1] &&
      null != a[a.length - 1].url &&
      (a = a[a.length - 1].url.match(Zc)[3] || null) &&
      decodeURI(a);
    this.g = new N(0, 0, 0, 0);
    this.o = new K(0, 0);
    this.l = new K(0, 0);
    this.h = new N(0, 0, 0, 0);
    this.s = new J(0, 0);
    this.C = this.u = !1;
    this.j = !(!D || !xe(D).I);
    Qe(this);
  }

  function Re(a, b) {
    b && b.screen && (a.o = new K(b.screen.width, b.screen.height));
  }

  function Se(a, b) {
    var c = a.g ? new K(dd(a.g), ed(a.g)) : new K(0, 0);
    b = void 0 === b ? D : b;
    null !== b && b != b.top && (b = b.top);
    var d = 0,
      e = 0;
    try {
      var f = b.document,
        g = f.body,
        h = f.documentElement;
      if ("CSS1Compat" == f.compatMode && h.scrollHeight)
        (d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight),
          (e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth);
      else {
        var n = h.scrollHeight,
          m = h.scrollWidth,
          l = h.offsetHeight,
          q = h.offsetWidth;
        h.clientHeight != l &&
          ((n = g.scrollHeight),
          (m = g.scrollWidth),
          (l = g.offsetHeight),
          (q = g.offsetWidth));
        n > c.height
          ? n > l
            ? ((d = n), (e = m))
            : ((d = l), (e = q))
          : n < l
          ? ((d = n), (e = m))
          : ((d = l), (e = q));
      }
      var p = new K(e, d);
    } catch (y) {
      p = new K(-12245933, -12245933);
    }
    a.l = p;
  }

  function Qe(a) {
    D &&
      D.document &&
      ((a.h = Ce(!1, D, a.m)), (a.g = Ce(!0, D, a.m)), Se(a, D), Re(a, D));
  }

  function Te() {
    if (U().C) return !0;
    var a = Q().h.isVisible(),
      b = 0 === Wc();
    return a || b;
  }

  function U() {
    return P(Pe);
  }

  function Ue(a) {
    this.i = a;
    this.h = 0;
    this.g = null;
  }
  Ue.prototype.cancel = function () {
    Q();
    D.clearTimeout(this.g);
    this.g = null;
  };

  function Ve(a) {
    Q();
    a.g = Dd(
      0,
      Id(
        R().j.g,
        he(143, function () {
          a.h++;
          a.i.sample();
        })
      ),
      oe()
    );
  }

  function V(a, b, c) {
    this.B = a;
    this.T = void 0 === c ? "na" : c;
    this.j = [];
    this.u = !1;
    this.i = new pe(-1, !0, this);
    this.g = this;
    this.m = b;
    this.C = this.s = !1;
    this.L = "uk";
    this.J = !1;
    this.o = !0;
  }
  k = V.prototype;
  k.X = function () {
    return !1;
  };
  k.Ra = function () {
    return (this.u = !0);
  };
  k.$ = function () {
    return this.g.L;
  };
  k.ga = function () {
    return this.g.C;
  };

  function We(a, b, c) {
    if (!a.C || (void 0 === c ? 0 : c))
      (a.C = !0), (a.L = b), (a.m = 0), a.g != a || Xe(a);
  }
  k.H = function () {
    return this.g.T;
  };
  k.P = function () {
    return this.g.ob();
  };
  k.ob = function () {
    return {};
  };
  k.R = function () {
    return this.g.m;
  };

  function Ye(a, b) {
    Ga(a.j, b) || (a.j.push(b), b.fa(a.g), b.V(a.i), b.U() && (a.s = !0));
  }
  k.Ea = function () {
    var a = U();
    a.g = Ce(!0, this.B, a.m);
  };
  k.Fa = function () {
    Re(U(), this.B);
  };
  k.$a = function () {
    Se(U(), this.B);
  };
  k.ab = function () {
    var a = U();
    a.h = Ce(!1, this.B, a.m);
  };
  k.Pa = function () {
    return this.i.g;
  };

  function Ze(a) {
    a = a.g;
    a.Fa();
    a.Ea();
    a.ab();
    a.$a();
    a.i.g = a.Pa();
  }
  k.sample = function () {};

  function $e(a) {
    a.s = a.j.length
      ? Ca(a.j, function (b) {
          return b.U();
        })
      : !1;
  }

  function af(a) {
    var b = Ia(a.j);
    v(b, function (c) {
      c.V(a.i);
    });
  }

  function Xe(a) {
    var b = Ia(a.j);
    v(b, function (c) {
      c.fa(a.g);
    });
    a.g != a || af(a);
  }
  k.fa = function (a) {
    var b = this.g;
    this.g = a.R() >= this.m ? a : this;
    b !== this.g
      ? ((this.o = this.g.o), Xe(this))
      : this.o !== this.g.o && ((this.o = this.g.o), Xe(this));
  };
  k.V = function (a) {
    if (a.h === this.g) {
      var b = this.i,
        c = this.s;
      if ((c = a && (void 0 === c || !c || b.volume == a.volume) && b.i == a.i))
        (b = b.g),
          (c = a.g),
          (c =
            b == c
              ? !0
              : b && c
              ? b.top == c.top && b.h == c.h && b.g == c.g && b.left == c.left
              : !1);
      this.i = a;
      !c && af(this);
    }
  };
  k.U = function () {
    return this.s;
  };
  k.F = function () {
    this.J = !0;
  };
  k.ha = function () {
    return this.J;
  };

  function bf(a, b, c, d) {
    this.h = a;
    this.g = new N(0, 0, 0, 0);
    this.o = new N(0, 0, 0, 0);
    this.i = b;
    this.G = c;
    this.J = d;
    this.D = !1;
    this.timestamp = -1;
    this.s = new qe(b.i, this.g, new N(0, 0, 0, 0), 0, 0, T(), 0);
  }
  k = bf.prototype;
  k.ma = function () {
    return !0;
  };
  k.O = function () {};
  k.F = function () {
    if (!this.ha()) {
      var a = this.i,
        b = a.j,
        c = ya(b, this);
      0 <= c && Array.prototype.splice.call(b, c, 1);
      a.s && this.U() && $e(a);
      this.O();
      this.D = !0;
    }
  };
  k.ha = function () {
    return this.D;
  };
  k.P = function () {
    return this.i.P();
  };
  k.R = function () {
    return this.i.R();
  };
  k.$ = function () {
    return this.i.$();
  };
  k.ga = function () {
    return this.i.ga();
  };
  k.fa = function () {};
  k.V = function () {
    this.Y();
  };
  k.U = function () {
    return this.J;
  };

  function cf(a) {
    this.l = !1;
    this.g = a;
    this.j = pa;
  }
  k = cf.prototype;
  k.R = function () {
    return this.g.R();
  };
  k.$ = function () {
    return this.g.$();
  };
  k.ga = function () {
    return this.g.ga();
  };
  k.create = function (a, b, c) {
    var d = null;
    this.g && ((d = this.Na(a, b, c)), Ye(this.g, d));
    return d;
  };
  k.bb = function () {
    return this.na();
  };
  k.na = function () {
    return !1;
  };
  k.sb = function (a) {
    return this.g.Ra() ? (Ye(this.g, this), (this.j = a), !0) : !1;
  };
  k.fa = function (a) {
    0 == a.R() && this.j(a.$(), this);
  };
  k.V = function () {};
  k.U = function () {
    return !1;
  };
  k.F = function () {
    this.l = !0;
  };
  k.ha = function () {
    return this.l;
  };
  k.P = function () {
    return {};
  };

  function df(a, b, c) {
    this.i = void 0 === c ? 0 : c;
    this.h = a;
    this.g = null == b ? "" : b;
  }

  function ef(a) {
    switch (Math.trunc(a.i)) {
      case -16:
        return -16;
      case -8:
        return -8;
      case 0:
        return 0;
      case 8:
        return 8;
      case 16:
        return 16;
      default:
        return 16;
    }
  }

  function ff(a, b) {
    return a.i < b.i
      ? !0
      : a.i > b.i
      ? !1
      : a.h < b.h
      ? !0
      : a.h > b.h
      ? !1
      : typeof a.g < typeof b.g
      ? !0
      : typeof a.g > typeof b.g
      ? !1
      : a.g < b.g;
  }

  function gf() {
    this.i = 0;
    this.g = [];
    this.h = !1;
  }
  gf.prototype.add = function (a, b, c) {
    ++this.i;
    a = new df(a, b, c);
    this.g.push(new df(a.h, a.g, a.i + this.i / 4096));
    this.h = !0;
    return this;
  };

  function hf(a, b) {
    v(b.g, function (c) {
      a.add(c.h, c.g, ef(c));
    });
  }

  function jf(a, b) {
    var c = void 0 === c ? 0 : c;
    var d = void 0 === d ? !0 : d;
    ad(b, function (e, f) {
      (d && void 0 === e) || a.add(f, e, c);
    });
  }

  function kf(a) {
    var b = lf;
    a.h &&
      (Ja(a.g, function (c, d) {
        return ff(d, c) ? 1 : ff(c, d) ? -1 : 0;
      }),
      (a.h = !1));
    return Ba(
      a.g,
      function (c, d) {
        d = b(d);
        return "" + c + ("" != c && "" != d ? "&" : "") + d;
      },
      ""
    );
  }

  function lf(a) {
    var b = a.h;
    a = a.g;
    return "" === a
      ? b
      : "boolean" === typeof a
      ? a
        ? b
        : ""
      : Array.isArray(a)
      ? 0 === a.length
        ? b
        : b + "=" + a.join()
      : b + "=" + (Ga(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a));
  }

  function mf(a) {
    var b = void 0 === b ? !0 : b;
    this.g = new gf();
    void 0 !== a && hf(this.g, a);
    b && this.g.add("v", ec, -16);
  }
  mf.prototype.toString = function () {
    var a = "//pagead2.googlesyndication.com//pagead/gen_204",
      b = kf(this.g);
    0 < b.length && (a += "?" + b);
    return a;
  };

  function nf(a) {
    var b = [],
      c = [];
    Ma(a, function (d, e) {
      if (!(e in Object.prototype) && "undefined" != typeof d)
        switch (
          (Array.isArray(d) && (d = d.join(",")), (d = [e, "=", d].join("")), e)
        ) {
          case "adk":
          case "r":
          case "tt":
          case "error":
          case "mtos":
          case "tos":
          case "p":
          case "bs":
            b.unshift(d);
            break;
          case "req":
          case "url":
          case "referrer":
          case "iframe_loc":
            c.push(d);
            break;
          default:
            b.push(d);
        }
    });
    return b.concat(c);
  }

  function of() {
    if (ec && "unreleased" !== ec) return ec;
  }

  function pf() {
    this.g = 0;
  }

  function qf(a) {
    this.u = a;
    this.s = !1;
  }
  qf.prototype.m = function (a, b) {
    this.g = a;
    this.h = b;
  };

  function rf() {
    qf.call(this, "capability");
  }
  t(rf, qf);
  rf.prototype.o = function () {
    return !0;
  };
  rf.prototype.l = function () {
    var a = {};
    return (a.b_name = this.g.W), (a.v_name = this.h.W), a;
  };

  function sf() {
    qf.call(this, "diff");
  }
  t(sf, qf);
  sf.prototype.o = function () {
    return !(0.02 >= Math.abs(this.h.A - this.g.A));
  };
  sf.prototype.l = function () {
    var a = {};
    return (
      (a.b_name = this.g.W),
      (a.v_name = this.h.W),
      (a.b_vp_off = JSON.stringify(this.g.K)),
      (a.v_vp_off = JSON.stringify(this.h.K)),
      (a.b_vp_sz = JSON.stringify(this.g.Za)),
      (a.v_vp_sz = JSON.stringify(this.h.Za)),
      (a.b_exp = this.g.A),
      (a.v_exp = this.h.A),
      (a.efp_occ = this.g.Hb),
      (a.sbv = this.g.ja),
      a
    );
  };

  function tf() {
    qf.call(this, "capt");
    this.j = [];
    this.i = [];
  }
  t(tf, qf);
  tf.prototype.m = function (a, b) {
    qf.prototype.m.call(this, a, b);
    20 <= this.i.length || (this.j.push(a.A), this.i.push(b.A));
  };
  tf.prototype.o = function () {
    return 20 === this.i.length;
  };
  tf.prototype.l = function () {
    var a = uf(this.j, this.i),
      b = vf(this.j, this.i),
      c = {};
    return (
      (c.b_name = this.g.W),
      (c.v_name = this.h.W),
      (c.b_exp = this.j.join(",")),
      (c.v_exp = this.i.join(",")),
      (c.diff = a),
      (c.diff_buckets = b),
      c
    );
  };

  function uf(a, b) {
    return Da(La(a, b), function (c) {
      return c[0] !== c[1];
    });
  }

  function vf(a, b) {
    function c(d) {
      return 0.25 * Math.floor(d / 0.25);
    }
    return uf(Aa(a, c), Aa(b, c));
  }

  function wf() {
    this.J = this.J;
    this.ua = this.ua;
  }
  wf.prototype.J = !1;
  wf.prototype.ha = function () {
    return this.J;
  };
  wf.prototype.F = function () {
    this.J || ((this.J = !0), this.Z());
  };
  wf.prototype.Z = function () {
    if (this.ua) for (; this.ua.length; ) this.ua.shift()();
  };

  function xf(a, b, c, d, e) {
    e = void 0 === e ? [new rf(), new sf(), new tf()] : e;
    wf.call(this);
    this.g = a.Na(b, c, this.U());
    this.g.ma();
    this.i = e;
    this.h = d;
  }
  t(xf, wf);
  xf.prototype.Z = function () {
    this.g && (this.g.O(), this.g.F());
  };

  function yf(a, b, c) {
    v(a.i, function (d) {
      var e = a.h;
      if (!d.s && (d.m(b, c), d.o())) {
        d.s = !0;
        var f = d.l(),
          g = new gf();
        g.add("id", "av-js");
        g.add("type", "verif");
        g.add("vtype", d.u);
        d = P(pf);
        g.add("i", d.g++);
        g.add("adk", e);
        jf(g, f);
        e = new mf(g);
        var h = void 0 === h ? 4e3 : h;
        e = e.toString();
        /&v=[^&]+/.test(e) ||
          (e = (f = of()) ? e + "&v=" + encodeURIComponent(f) : e);
        e = e.substring(0, h);
        Ed(e);
      }
    });
  }
  xf.prototype.V = function () {};
  xf.prototype.fa = function () {};
  xf.prototype.U = function () {
    return !1;
  };

  function zf() {
    this.g = this.h = this.i = 0;
  }

  function Af(a, b, c, d) {
    b && ((a.i += c), (a.h += c), (a.g = Math.max(a.g, a.h)));
    if (void 0 === d ? !b : d) a.h = 0;
  }
  var Bf = [1, 0.75, 0.5, 0.3, 0];

  function Cf(a) {
    this.g = a = void 0 === a ? Bf : a;
    this.h = Aa(this.g, function () {
      return new zf();
    });
  }

  function Df(a) {
    return Ef(
      a,
      function (b) {
        return b.i;
      },
      !1
    );
  }

  function Ff(a) {
    return Ef(
      a,
      function (b) {
        return b.g;
      },
      !0
    );
  }

  function Gf(a, b, c, d, e, f) {
    var g = void 0 === g ? !0 : g;
    c = f ? Math.min(b, c) : c;
    for (f = 0; f < a.g.length; f++) {
      var h = a.g[f],
        n = 0 < c && c >= h;
      h = !(0 < b && b >= h) || d;
      Af(a.h[f], g && n, e, !g || h);
    }
  }

  function Ef(a, b, c) {
    a = Aa(a.h, function (d) {
      return b(d);
    });
    return c ? a : Hf(a);
  }

  function Hf(a) {
    return Aa(a, function (b, c, d) {
      return 0 < c ? d[c] - d[c - 1] : d[c];
    });
  }

  function If() {
    this.g = new Cf();
    this.i = new zf();
    this.h = -1;
    this.j = new Cf([1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0]);
  }

  function W(a) {
    return 1e3 <= a.i.g;
  }
  var Jf = new N(0, 0, 0, 0);

  function Kf(a, b) {
    b = Lf(b);
    return 0 === b ? 0 : Lf(a) / b;
  }

  function Lf(a) {
    return Math.max(a.g - a.top, 0) * Math.max(a.h - a.left, 0);
  }

  function Mf(a, b) {
    if (!a || !b) return !1;
    for (var c = 0; null !== a && 100 > c++; ) {
      if (a === b) return !0;
      try {
        a: {
          var d = void 0;
          if (
            Ac &&
            !(
              B &&
              Ib("9") &&
              !Ib("10") &&
              u.SVGElement &&
              a instanceof u.SVGElement
            ) &&
            (d = a.parentElement)
          ) {
            var e = d;
            break a;
          }
          d = a.parentNode;
          e = sa(d) && 1 == d.nodeType ? d : null;
        }
        if ((a = e || a)) {
          var f = L(a),
            g = f && Ic(f),
            h = g && g.frameElement;
          h && (a = h);
        }
      } catch (n) {
        break;
      }
    }
    return !1;
  }

  function Nf(a, b, c) {
    if (!a || !b) return !1;
    b = gd(fd(a), -b.left, -b.top);
    a = (b.left + b.h) / 2;
    b = (b.top + b.g) / 2;
    var d = O();
    $c(d.top) && d.top && d.top.document && (d = d.top);
    if (!ye(d)) return !1;
    a = d.document.elementFromPoint(a, b);
    if (!a) return !1;
    b =
      (b = (b = L(c)) && b.defaultView && b.defaultView.frameElement) &&
      Mf(b, a);
    d = a === c;
    a =
      !d &&
      a &&
      Nc(a, function (e) {
        return e === c;
      });
    return !(b || d || a);
  }

  function Of(a, b, c, d) {
    return U().i
      ? !1
      : 0 >= dd(a) || 0 >= ed(a)
      ? !0
      : c && d
      ? ge(208, function () {
          return Nf(a, b, c);
        })
      : !1;
  }
  var Pf = new N(0, 0, 0, 0);

  function Qf(a, b, c) {
    wf.call(this);
    this.position = fd(Pf);
    this.i = new If();
    this.qa = -2;
    this.Jb = -1;
    this.Db = b;
    this.pa = null;
    this.N = !1;
    this.K = null;
    this.L = -1;
    this.va = c;
    this.Kb = this.Ja = pa;
    this.h = new Oc();
    this.h.h = a;
    this.h.g = a;
    this.s = !1;
    this.m = {
      Ca: null,
      Ba: null,
    };
    this.da = !0;
    this.G = null;
    R().s++;
    this.j = new hc();
    this.Ib = this.xa = -1;
    this.Da = 0;
    this.T = -1;
    this.g = null;
    this.Oa = new N(0, 0, 0, 0);
    this.Bb = !1;
    a = this.l = new qc();
    H(a, "od", fc);
    G(H(a, "opac", F));
    G(H(a, "sbeos", F));
    G(H(a, "prf", F));
    G(H(a, "mwt", F));
    H(a, "iogeo", F);
    (a = this.h.h) && a.getAttribute && yc(a, "googleAvInapp") && (U().j = !0);
    1 == this.va ? rc(this.l, "od", 1) : rc(this.l, "od", 0);
  }
  t(Qf, wf);
  k = Qf.prototype;
  k.Z = function () {
    Rf(this);
    this.G && this.G.F();
    this.g && this.g.F();
    delete this.i;
    delete this.Ja;
    delete this.Kb;
    delete this.h.h;
    delete this.h.g;
    delete this.m;
    delete this.G;
    delete this.g;
    delete this.l;
    wf.prototype.Z.call(this);
  };

  function Sf(a) {
    return a.g ? a.g.g : a.position;
  }
  k.Ga = function (a) {
    var b = R();
    "string" === typeof a && 0 != a.length && tc(b.g, a);
  };
  k.cb = function () {
    return !1;
  };
  k.ia = function () {
    this.N = !0;
  };
  k.Aa = function () {
    return this.N;
  };
  k.Va = function () {
    this.j.A = 0;
  };

  function Tf(a, b) {
    if (a.g) {
      if (b.H() === a.g.H()) return;
      a.g.F();
      a.g = null;
    }
    b = b.create(a.h.g, a.l, a.cb());
    if ((b = null != b && b.ma() ? b : null)) a.g = b;
  }

  function Uf(a, b, c) {
    if (a.g) {
      a.g.Y();
      var d = a.g.s,
        e = d.l,
        f = e.g;
      if (null != d.i) {
        var g = d.j;
        a.K = new J(g.left - f.left, g.top - f.top);
        a.Oa = d.i;
      }
      f = a.ja() ? Math.max(d.h, d.m) : d.h;
      g = {};
      null !== e.volume && (g.volume = e.volume);
      a.pa && -1 != a.Db && -1 !== d.g && -1 !== a.pa.g
        ? ((e = d.g - a.pa.g), (e = 1e4 < e ? 0 : e))
        : (e = 0);
      a.pa = d;
      a.Xa(f, b, c, !1, g, e, d.o);
    }
  }

  function Vf(a) {
    if (a.Aa() && a.G) {
      var b = 1 == I(a.l, "od"),
        c = U().g,
        d = a.G,
        e = new K(dd(c), ed(c));
      c = a.ja();
      a = {
        W: a.g ? a.g.H() : "ns",
        K: a.K,
        Za: e,
        ja: c,
        A: a.j.A,
        Hb: b,
      };
      if ((b = d.g)) {
        b.Y();
        e = b.s;
        var f = e.l.g,
          g = null,
          h = null;
        null != e.i &&
          f &&
          ((g = e.j),
          (g = new J(g.left - f.left, g.top - f.top)),
          (h = new K(f.h - f.left, f.g - f.top)));
        c = {
          W: b.H(),
          K: g,
          Za: h,
          ja: c,
          Hb: !1,
          A: c ? Math.max(e.h, e.m) : e.h,
        };
      } else c = null;
      c && yf(d, a, c);
    }
  }
  k.Xa = function (a, b, c, d, e, f, g) {
    this.s ||
      (this.Aa() &&
        ((e = new hc()),
        (e.i = c),
        (e.h = Ie()),
        (e.A = 0 === this.L && 1 === I(this.l, "opac") ? 0 : a),
        (e.g = this.ba()),
        (e.j = g),
        (a = this.i),
        (c = this.j),
        (d = d && this.j.A >= (this.ba() ? 0.3 : 0.5)),
        (a.h = Math.max(a.h, e.A)),
        Gf(a.j, e.j, c.j, e.i, f, d),
        Gf(a.g, e.A, c.A, e.i, f, d),
        (d = d || c.g != e.g ? c.isVisible() && e.isVisible() : c.isVisible()),
        (c = !e.isVisible() || e.i),
        Af(a.i, d, f, c),
        (this.Db = b),
        0 < e.A && (-1 === this.xa && (this.xa = b), (this.Ib = b)),
        -1 == this.Jb && W(this.i) && (this.Jb = b),
        -2 == this.qa && (this.qa = Lf(Sf(this)) ? e.A : -1),
        (this.j = e)),
      this.Ja(this));
  };
  k.ba = function () {
    return !1;
  };
  k.ja = function () {
    return this.Bb || !1;
  };

  function Wf(a) {
    a.h.g &&
      ((a.m.Ca = Ae(
        a.h.g,
        "mouseover",
        function () {
          a.T = T();
        },
        149
      )),
      (a.m.Ba = Ae(
        a.h.g,
        "mouseout",
        function () {
          var b = T();
          -1 == a.T || b < a.T || (a.Da += b - a.T);
          a.T = -1;
        },
        150
      )));
  }

  function Rf(a) {
    a.h.g &&
      (a.m.Ca && (Vc(a.h.g, "mouseover", a.m.Ca), (a.m.Ca = null)),
      a.m.Ba && (Vc(a.h.g, "mouseout", a.m.Ba), (a.m.Ba = null)));
  }
  Za(
    Ya(
      new Ta(
        Ua,
        "https://www.googletagservices.com/activeview/js/current/osd.js"
      )
    )
  );

  function Xf() {
    this.h = this.g = null;
    this.i = !1;
    Yf(this);
  }

  function Yf(a) {
    a.g ||
      "function" !== typeof D.Goog_AdSense_getAdAdapterInstance ||
      (a.g = D.Goog_AdSense_getAdAdapterInstance());
    if (!a.h) {
      var b = u.goog_osd_adp;
      a.h = b && "function" === typeof b.getOseId ? b : null;
    }
    !a.i && Dc() && (a.i = !0);
  }

  function Zf(a, b, c, d) {
    Yf(a);
    var e = U().u;
    a.g && a.g.getNewBlocks(b, e);
    a.h && a.h.getNewBlocks(b, e);
    a.i && !c() && (d(!0), b(Dc(), "", 13, !0));
  }

  function $f(a) {
    Yf(a);
    return (
      (a.g ? a.g.numBlocks() : 0) + (a.h ? a.h.numBlocks() : 0) + (a.i ? 1 : 0)
    );
  }

  function ag(a) {
    Yf(a);
    return a.g ? a.g.getOseId() : a.h ? a.h.getOseId() : 0;
  }

  function bg(a) {
    return eb()
      ? ((a = (a = L(a)) && Ic(a)),
        !!(
          a &&
          a.location &&
          a.location.ancestorOrigins &&
          0 < a.location.ancestorOrigins.length &&
          a.location.origin == a.location.ancestorOrigins[0]
        ))
      : !0;
  }
  var cg =
    "StopIteration" in u
      ? u.StopIteration
      : {
          message: "StopIteration",
          stack: "",
        };

  function dg() {}
  dg.prototype.next = function () {
    return dg.prototype.g.call(this);
  };
  dg.prototype.g = function () {
    throw cg;
  };
  dg.prototype.eb = function () {
    return this;
  };

  function eg(a) {
    if (a instanceof dg) return a;
    if ("function" == typeof a.eb) return a.eb(!1);
    if (qa(a)) {
      var b = 0,
        c = new dg();
      c.g = function () {
        for (;;) {
          if (b >= a.length) throw cg;
          if (b in a) return a[b++];
          b++;
        }
      };
      c.next = c.g.bind(c);
      return c;
    }
    throw Error("Not implemented");
  }

  function fg(a, b) {
    if (qa(a))
      try {
        v(a, b, void 0);
      } catch (c) {
        if (c !== cg) throw c;
      }
    else {
      a = eg(a);
      try {
        for (;;) b.call(void 0, a.g(), void 0, a);
      } catch (c) {
        if (c !== cg) throw c;
      }
    }
  }

  function gg(a, b) {
    var c = 1;
    fg(a, function (d) {
      c = b.call(void 0, c, d);
    });
    return c;
  }

  function hg(a, b) {
    var c = eg(a);
    a = new dg();
    a.g = function () {
      var d = c.g();
      if (b.call(void 0, d, void 0, c)) return d;
      throw cg;
    };
    a.next = a.g.bind(a);
    return a;
  }

  function ig(a) {
    var b = eg(a);
    a = new dg();
    var c = 100;
    a.g = function () {
      if (0 < c--) return b.g();
      throw cg;
    };
    a.next = a.g.bind(a);
    return a;
  }

  function jg(a, b) {
    this.j = b;
    this.i = null == a;
    this.h = a;
  }
  t(jg, dg);
  jg.prototype.g = function () {
    if (this.i) throw cg;
    var a = this.h || null;
    this.i = null == a;
    var b;
    if ((b = a)) {
      b = this.j;
      if (
        sb(a, "parentElement") &&
        null != a.parentElement &&
        a != a.parentElement
      )
        var c = a.parentElement;
      else if (b) {
        var d = void 0 === d ? bg : d;
        if (d(a))
          try {
            var e = L(a),
              f = e && Ic(e),
              g = f && f.frameElement;
            c = null == g ? null : g;
          } catch (h) {
            c = null;
          }
        else c = null;
      } else c = null;
      b = c;
    }
    this.h = b;
    return a;
  };
  jg.prototype.next = function () {
    return jg.prototype.g.call(this);
  };

  function kg(a) {
    var b = 1;
    a = ig(new jg(a, !0));
    a = hg(a, function () {
      return 0 < b;
    });
    return gg(a, function (c, d) {
      var e = 1;
      if (sb(d, "style") && d.style) {
        var f = parseFloat;
        a: {
          var g = L(d);
          if (
            g.defaultView &&
            g.defaultView.getComputedStyle &&
            (g = g.defaultView.getComputedStyle(d, null))
          ) {
            g = g.opacity || g.getPropertyValue("opacity") || "";
            break a;
          }
          g = "";
        }
        if (!g) {
          g = d.style[hb()];
          if ("undefined" !== typeof g) d = g;
          else {
            g = d.style;
            var h = kd.opacity;
            if (!h) {
              var n = hb();
              h = n;
              void 0 === d.style[n] &&
                ((n = (yb ? "Webkit" : xb ? "Moz" : B ? "ms" : null) + jb(n)),
                void 0 !== d.style[n] && (h = n));
              kd.opacity = h;
            }
            d = g[h] || "";
          }
          g = d;
        }
        f = f(g);
        "number" !== typeof f || isNaN(f) || (e = f);
      }
      return (b = c * e);
    });
  }

  function lg(a, b, c, d, e, f, g) {
    g = void 0 === g ? [] : g;
    Qf.call(this, c, d, e);
    this.Ha = b;
    this.Ia = this.u = 0;
    this.xb = null;
    this.wb = this.nb = "";
    this.pb = [];
    this.rb = [];
    this.kb = this.vb = "";
    this.Ab = !1;
    this.C = 4;
    this.Fb = !1;
    this.aa = [];
    this.M = this.o = "";
    this.Cb = this.mb = this.zb = !1;
    this.oa = 0;
    this.ea = this.yb = Ie();
    this.sa = 0;
    this.ca = f;
    this.Gb = !1;
    this.ra = this.La = this.Ma = this.wa = this.D = -1;
    this.ta = g;
    mg(this, this.h.h);
    vc(R().g, this.Ha);
  }
  t(lg, Qf);

  function ng(a, b, c) {
    return (a = String(a[b] || xc(a, c) || "")) ? a.split("|") : [];
  }

  function mg(a, b) {
    if (b) {
      if (0 == a.u)
        if (a.h.h) {
          var c = a.h.h._adk_;
          c ||
            (c =
              (c = xc(a.h.h, "googleAvAdk")) && !/[^0-9]/.test(c)
                ? parseInt(c, 10)
                : 0);
        } else c = 0;
      else c = a.u;
      a.u = c;
      "" == a.nb && (a.nb = String(b._avi_ || ""));
      "" == a.wb &&
        (a.wb = b._avihost_
          ? String(b._avihost_)
          : "pagead2.googlesyndication.com");
      a.pb.length || (a.pb = ng(b, "_avicxn_", "googleAvCxn"));
      a.rb.length || (a.rb = ng(b, "_avieoscxn_", "googleEOSAvCxn"));
      "" == a.vb &&
        (a.vb = String(b._aviextcxn_ || xc(b, "googleAvExtCxn") || ""));
      "" == a.kb && (a.kb = String(b._cid_ || ""));
      a.Ab || (a.Ab = !!b._imm_ || yc(b, "googleAvImmediate"));
      "" == a.M && (a.M = String(b._cvu_ || xc(b, "googleAvCpmav") || ""));
      "" == a.o && (a.o = String(xc(b, "googleAvBtr") || ""));
      a.Ga(String(b._avm_ || xc(b, "googleAvMetadata") || ""));
      xc(b, "googleAvFlags");
      R();
    }
  }
  k = lg.prototype;
  k.Z = function () {
    delete this.aa;
    delete this.ta;
    Qf.prototype.Z.call(this);
  };

  function og(a, b, c) {
    v(a.ta, function (d) {
      return d.g(a, c, b);
    });
  }
  k.Aa = function () {
    return this.N && !(1 == this.sa || 3 == this.sa);
  };
  k.Va = function () {
    Qf.prototype.Va.call(this);
    this.Oa = new N(0, 0, 0, 0);
  };
  k.ia = function () {
    this.N ||
      ((this.Ma = Qd()),
      void 0 !== this.ca && this.ca(!1, this.qa),
      null != this.o && "" != this.o && (id(this.o), (this.o = "")));
    Qf.prototype.ia.call(this);
    pg(this);
  };

  function pg(a) {
    if (a.N && u == u.top) {
      var b = u.pageYOffset;
      null != b && (a.ra = Math.max(b, a.ra));
      og(a, 4, {});
    }
  }

  function qg(a) {
    return new Pc(a.u, a.xb);
  }
  k.Ga = function (a) {
    if ("string" === typeof a && 0 != a.length) {
      var b = new qc(),
        c = R();
      H(b, "omid", F);
      tc(b, a);
      b = I(b, "omid");
      null !== b && (c.g.h.omid = b);
      a = tc(this.l, a);
      c = a.split("&");
      for (b = 0; b < c.length; b++) {
        var d = c[b];
        "ts=0" == d
          ? (this.da = !1)
          : 0 == d.lastIndexOf("la=", 0)
          ? ((d = d.split("=")[1]),
            "0" == d ? (this.oa = 2) : "1" == d && (this.oa = 1))
          : 0 == d.lastIndexOf("cr=", 0)
          ? "1" == d.split("=")[1] && (this.Bb = !0)
          : "adf=1" == d && (this.Gb = !0);
      }
      this.j.g = this.ba();
      Qf.prototype.Ga.call(this, a);
    }
  };
  k.Xa = function (a, b, c, d, e, f, g) {
    var h = W(this.i),
      n = Math.floor(100 * this.j.A);
    this.oa = 242500 <= Lf(Sf(this)) ? 1 : 2;
    Qf.prototype.Xa.call(this, a, b, c, d, e, f, g);
    -1 == this.ea && -1 != this.j.h
      ? (this.ea = this.j.h)
      : 0 == this.ea && 1 == this.j.h && (this.ea = 1);
    a = W(this.i);
    b = Math.floor(100 * this.j.A);
    ((!h && a) || b != n) && void 0 !== this.ca && this.ca(a, b);
    try {
      this.L = kg(this.h.g);
    } catch (m) {}
    pg(this);
  };
  k.ba = function () {
    return zb ? !1 : 1 == this.oa;
  };

  function rg(a, b, c, d) {
    d = void 0 === d ? {} : d;
    var e = {},
      f = U(),
      g = sc(a.l),
      h = f.s,
      n = Sf(a);
    g.p = [n.top + h.y, n.left + h.x, n.g + h.y, n.h + h.x];
    h = a.i;
    g.tos = Df(h.g);
    g.mtos = Ff(h.g);
    g.mcvt = h.i.g;
    g.rs = a.va;
    (n = 5 == a.va) || (g.ht = a.Da);
    0 <= a.xa && ((g.tfs = a.xa), (g.tls = a.Ib));
    g.mc = Ee(h.h);
    g.lte = Ee(a.qa);
    g.bas = a.yb;
    g.bac = a.ea;
    f.i && (g["if"] = a.s ? 0 : 1);
    g.met = a.h.i;
    n && a.Ha && (g.req = encodeURIComponent(a.Ha).substring(0, 100));
    a.Cb && (g.ci = "1");
    a.ba() && (g.la = "1");
    g.avms = a.g ? a.g.H() : "ns";
    a.g && w(g, a.g.P());
    0 != a.sa && (g.md = a.sa);
    g.btr = null != a.o && "" != a.o ? 1 : 0;
    g.cpmav = sg(a) ? 1 : 0;
    g.lm = a.C;
    w(g, tg(a));
    d && w(g, d);
    g.adk = a.u;
    a.Gb && a.Ia && (g.adf = a.Ia);
    d = a.s;
    f = R();
    !c && d && f.h && (c = f.h);
    c && (g.r = c);
    0 === a.L && (g.invis = 1);
    c = nf(g).join("&");
    e[3] = c;
    e[11] = d;
    e[29] = R().i;
    e[0] = b;
    e[7] = a.j.A;
    e[9] = Je(a.Oa);
    e[28] = a.va;
    e[32] = a.g ? a.g.H() : "ns";
    e[5] = W(a.i) && 4 != a.C;
    e[13] = Ff(a.i.g).join(",");
    e[18] = 0 == Lf(Sf(a));
    null != a.K && ((e[20] = a.K.y), (e[21] = a.K.x));
    b = U();
    null != b.h && ((e[22] = dd(b.h)), (e[23] = ed(b.h)));
    null != b.g && ((e[30] = dd(b.g)), (e[31] = ed(b.g)), (e[38] = Je(b.g)));
    c = b.s;
    g = Sf(a);
    e[37] = Je(new N(g.top + c.y, g.h + c.x, g.g + c.y, g.left + c.x));
    b.l && ((b = b.l), (e[39] = b.width + "-" + b.height));
    -1 != a.L && (e[25] = a.L);
    if ((a = qg(a))) a.h && (e[4] = a.h), a.g && (e[12] = a.g);
    return e;
  }

  function tg(a) {
    var b = a.D;
    var c = a.D;
    c = -1 == c || a.wa < c ? -1 : a.wa - c;
    var d = -1 == a.D || a.Ma < a.D ? -1 : a.Ma - a.D,
      e = {};
    return (
      (e.rst = 0 < b ? b : void 0),
      (e.dlt = 0 <= c ? c : void 0),
      (e.rpt = 0 <= d ? d : void 0),
      (e.isd = 0 <= a.La ? a.La : void 0),
      (e.msd = 0 <= a.ra ? a.ra : void 0),
      e
    );
  }

  function sg(a) {
    return (
      null != a.M && null != a.M.match(/\/pagead\/adview\?.*ai=.*&vt=\d+/i)
    );
  }
  k.cb = function () {
    return !1;
  };

  function ug(a, b, c, d) {
    bf.call(this, a, b, c, d);
  }
  t(ug, bf);
  k = ug.prototype;
  k.hb = function () {
    if (this.h) {
      var a = this.h,
        b = this.i.g.B;
      try {
        try {
          var c = He(a.getBoundingClientRect());
        } catch (m) {
          c = new N(0, 0, 0, 0);
        }
        var d = c.h - c.left,
          e = c.g - c.top,
          f = md(a, b),
          g = f.x,
          h = f.y;
        var n = new N(
          Math.round(h),
          Math.round(g + d),
          Math.round(h + e),
          Math.round(g)
        );
      } catch (m) {
        n = fd(Jf);
      }
      this.g = n;
    }
  };
  k.ib = function () {
    this.o = this.i.i.g;
  };
  k.tb = function (a) {
    return Of(a, this.o, this.h, 1 == I(this.G, "od"));
  };
  k.Y = function () {
    this.timestamp = T();
    this.hb();
    if (
      this.h &&
      "number" === typeof this.h.videoWidth &&
      "number" === typeof this.h.videoHeight
    ) {
      var a = this.h;
      var b = new K(a.videoWidth, a.videoHeight);
      a = this.g;
      var c = dd(a),
        d = ed(a),
        e = b.width;
      b = b.height;
      0 >= e ||
        0 >= b ||
        0 >= c ||
        0 >= d ||
        ((e /= b),
        (a = fd(a)),
        e > c / d
          ? ((c /= e),
            (d = (d - c) / 2),
            0 < d &&
              ((d = a.top + d),
              (a.top = Math.round(d)),
              (a.g = Math.round(d + c))))
          : ((d *= e),
            (c = Math.round((c - d) / 2)),
            0 < c &&
              ((c = a.left + c),
              (a.left = Math.round(c)),
              (a.h = Math.round(c + d)))));
      this.g = a;
    }
    this.ib();
    a = this.g;
    c = this.o;
    a =
      a.left <= c.h && c.left <= a.h && a.top <= c.g && c.top <= a.g
        ? new N(
            Math.max(a.top, c.top),
            Math.min(a.h, c.h),
            Math.min(a.g, c.g),
            Math.max(a.left, c.left)
          )
        : new N(0, 0, 0, 0);
    c = a.top >= a.g || a.left >= a.h ? new N(0, 0, 0, 0) : a;
    a = this.i.i;
    b = e = d = 0;
    0 < (this.g.g - this.g.top) * (this.g.h - this.g.left) &&
      (this.tb(c)
        ? (c = new N(0, 0, 0, 0))
        : ((d = U().o),
          (b = new N(0, d.height, d.width, 0)),
          (d = Kf(c, this.g)),
          (e = Kf(c, U().g)),
          (b = Kf(c, b))));
    c =
      c.top >= c.g || c.left >= c.h
        ? new N(0, 0, 0, 0)
        : gd(c, -this.g.left, -this.g.top);
    Te() || (e = d = 0);
    this.s = new qe(a, this.g, c, d, e, this.timestamp, b);
  };
  k.H = function () {
    return this.i.H();
  };

  function vg() {
    this.key = "goog_adspeed";
    this.i = [3, 4];
    this.h = null;
  }
  vg.prototype.g = function (a, b, c) {
    if (!Ga(this.i, c) || !qg(a).i()) return !1;
    c = {};
    c = ((c[0] = this.key), (c[40] = JSON.stringify(tg(a))), c);
    var d;
    if ((d = this.h))
      a: {
        d = this.h;
        for (var e in d)
          if (!(e in c) || d[e] !== c[e]) {
            d = !1;
            break a;
          }
        for (var f in c)
          if (!(f in d)) {
            d = !1;
            break a;
          }
        d = !0;
      }
    if (d) return !1;
    this.h = c;
    e = {};
    w(e, c, b);
    return wg(a, {
      Ya: {},
      Ua: e,
    });
  };

  function xg() {
    this.key = "goog_update_data";
    this.h = 0;
    this.i = !1;
  }
  xg.prototype.g = function (a, b, c) {
    if (c != this.h || !qg(a).i()) return !1;
    c = 1 == a.C;
    var d = W(a.i),
      e = {},
      f = {};
    b = {
      Ua: ((e[0] = this.key), (e[40] = JSON.stringify(tg(a))), e),
      Ya: Object.assign({}, b, ((f.r = b.r), f)),
    };
    if (c) return d && !this.i ? ((this.i = d), wg(a, b)) : !1;
    this.i = d;
    return wg(a, b);
  };

  function yg(a) {
    xg.call(this, a);
    this.key = "goog_image_request";
    this.h = 2;
  }
  t(yg, xg);

  function zg(a) {
    xg.call(this, a);
    this.key = "goog_image_request";
    this.h = 1;
  }
  t(zg, xg);
  zg.prototype.g = function (a, b, c) {
    var d = !a.mb;
    if ((W(a.i) && a.da) || d) {
      if ((b = xg.prototype.g.call(this, a, b, c)))
        if ((W(a.i) || (a.mb = !0), W(a.i) || a.da)) a.da = !1;
      return b;
    }
    return !1;
  };

  function Ag(a) {
    return Ea(X.g, function (b) {
      return a.matches(qg(b));
    });
  }

  function Bg(a) {
    var b = X;
    return a
      ? Ea(b.g, function (c) {
          return c.h.h == a;
        })
      : null;
  }

  function Cg(a) {
    return Ea(a.g, function () {
      return !1;
    });
  }

  function Dg() {
    var a = X;
    return 0 == a.h.length ? a.g : 0 == a.g.length ? a.h : Ha(a.g, a.h);
  }

  function Eg() {
    var a = X;
    a.h = [];
    a.g = [];
  }

  function Fg(a, b) {
    a = a.g;
    var c = Fa(a, function (d) {
      return d == b;
    });
    return -1 != c ? (a.splice(c, 1), b.g && b.g.O(), b.F(), !0) : !1;
  }

  function Gg(a) {
    var b = X;
    if (Fg(b, a)) {
      a = function () {
        return null;
      };
      a = function () {
        return Cg(b);
      };
      for (var c = a(); c; c = a()) Fg(b, c);
    }
  }
  var X = P(function () {
    this.h = [];
    this.g = [];
  });

  function Hg() {
    this.g = this.h = null;
  }

  function Ig(a, b) {
    function c(d, e) {
      b(d, e);
    }
    if (null == a.h) return !1;
    a.g = Ea(a.h, function (d) {
      return null != d && d.bb();
    });
    a.g && (a.g.sb(c) ? Ze(a.g.g) : b(a.g.g.$(), a.g));
    return null != a.g;
  }

  function Jg(a) {
    a = Kg(a);
    cf.call(this, a.length ? a[a.length - 1] : new V(D, 0));
    this.i = a;
    this.h = null;
  }
  t(Jg, cf);
  k = Jg.prototype;
  k.H = function () {
    return (this.h ? this.h : this.g).H();
  };
  k.P = function () {
    return (this.h ? this.h : this.g).P();
  };
  k.R = function () {
    return (this.h ? this.h : this.g).R();
  };
  k.sb = function (a) {
    var b = !1;
    v(this.i, function (c) {
      c.Ra() && (b = !0);
    });
    b && ((this.j = a), Ye(this.g, this));
    return b;
  };
  k.F = function () {
    v(this.i, function (a) {
      a.F();
    });
    cf.prototype.F.call(this);
  };
  k.bb = function () {
    return Ca(this.i, function (a) {
      return a.X();
    });
  };
  k.na = function () {
    return Ca(this.i, function (a) {
      return a.X();
    });
  };
  k.Na = function (a, b, c) {
    return new ug(a, this.g, b, c);
  };
  k.V = function (a) {
    this.h = a.h;
  };

  function Kg(a) {
    if (!a.length) return [];
    a = za(a, function (c) {
      return null != c && c.X();
    });
    for (var b = 1; b < a.length; b++) Ye(a[b - 1], a[b]);
    return a;
  }
  var Lg = {
    threshold: [0, 0.3, 0.5, 0.75, 1],
  };

  function Mg(a, b, c, d) {
    bf.call(this, a, b, c, d);
    this.C = this.u = this.l = this.m = this.j = null;
  }
  t(Mg, ug);
  k = Mg.prototype;
  k.ma = function () {
    var a = this;
    this.C || (this.C = T());
    if (
      ge(298, function () {
        return Ng(a);
      })
    )
      return !0;
    We(this.i, "msf");
    return !1;
  };
  k.O = function () {
    if (this.j && this.h)
      try {
        this.j.unobserve(this.h),
          this.m
            ? (this.m.unobserve(this.h), (this.m = null))
            : this.l && (this.l.disconnect(), (this.l = null));
      } catch (a) {}
  };

  function Og(a) {
    return a.j && a.j.takeRecords ? a.j.takeRecords() : [];
  }

  function Ng(a) {
    if (!a.h) return !1;
    var b = a.h,
      c = a.i.g.B,
      d = R().j.g;
    a.j = new c.IntersectionObserver(
      Id(d, function (e) {
        return Pg(a, e);
      }),
      Lg
    );
    d = Id(d, function () {
      a.j.unobserve(b);
      a.j.observe(b);
      Pg(a, Og(a));
    });
    c.ResizeObserver
      ? ((a.m = new c.ResizeObserver(d)), a.m.observe(b))
      : c.MutationObserver &&
        ((a.l = new u.MutationObserver(d)),
        a.l.observe(b, {
          attributes: !0,
          childList: !0,
          characterData: !0,
          subtree: !0,
        }));
    a.j.observe(b);
    Pg(a, Og(a));
    return !0;
  }

  function Pg(a, b) {
    try {
      if (b.length) {
        a.u || (a.u = T());
        var c = Qg(b),
          d = md(a.h, a.i.g.B),
          e = d.x,
          f = d.y;
        a.g = new N(
          Math.round(f),
          Math.round(e) + c.boundingClientRect.width,
          Math.round(f) + c.boundingClientRect.height,
          Math.round(e)
        );
        var g = He(c.intersectionRect);
        a.o = gd(g, a.g.left - g.left, a.g.top - g.top);
      }
    } catch (h) {
      a.O(), je(299, h);
    }
  }

  function Qg(a) {
    return Ba(
      a,
      function (b, c) {
        return b.time > c.time ? b : c;
      },
      a[0]
    );
  }
  k.Y = function () {
    var a = Og(this);
    0 < a.length && Pg(this, a);
    ug.prototype.Y.call(this);
  };
  k.hb = function () {};
  k.tb = function () {
    return !1;
  };
  k.ib = function () {};
  k.P = function () {
    var a = {};
    return Object.assign(
      this.i.P(),
      ((a.niot_obs = this.C), (a.niot_cbk = this.u), a)
    );
  };
  k.H = function () {
    return "nio";
  };

  function Rg(a) {
    a = void 0 === a ? D : a;
    cf.call(this, new V(a, 2));
  }
  t(Rg, cf);
  Rg.prototype.H = function () {
    return "nio";
  };
  Rg.prototype.na = function () {
    return !U().j && null != this.g.g.B.IntersectionObserver;
  };
  Rg.prototype.Na = function (a, b, c) {
    return new Mg(a, this.g, b, c);
  };

  function Sg() {
    var a = Tg();
    V.call(this, D.top, a, "geo");
  }
  t(Sg, V);
  Sg.prototype.Pa = function () {
    return U().g;
  };
  Sg.prototype.X = function () {
    var a = Tg();
    this.m !== a &&
      (this.g != this && a > this.g.m && ((this.g = this), Xe(this)),
      (this.m = a));
    return 2 == a;
  };

  function Tg() {
    R();
    var a = U();
    return a.i || a.j ? 0 : 2;
  }
  var Ug = {},
    Vg =
      ((Ug[1] = function () {
        return new Rg();
      }),
      (Ug[2] = function () {
        return new Jg([P(Sg)]);
      }),
      Ug);

  function Wg() {
    this.g = null;
    this.h = Vg;
  }

  function Xg() {
    var a = P(Wg);
    a: {
      var b = I(R().g, "mv");
      if (null != b && (b = a.h[b]) && (b = b()) && b.na()) break a;
      b = null;
    }
    a.g = b;
  }

  function Yg() {
    this.done = !1;
    this.g = {
      gb: 0,
      fb: 0,
      rc: 0,
      jb: 0,
      za: -1,
      Ob: 0,
      Nb: 0,
      Pb: 0,
    };
    this.o = null;
    this.l = this.s = !1;
    this.m = "";
    this.i = null;
    this.u = 0;
    this.h = new Ue(this);
  }

  function Zg(a) {
    var b = Y;
    if (!b.s) {
      b.s = !0;
      if (a) {
        a = Dg();
        for (var c, d = 0; d < a.length; ++d) (c = a[d]), c.h.g && Wf(c);
      }
      $g(b, function (e) {
        for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
        return b.j.apply(b, r(f));
      });
      b.j();
    }
  }
  Yg.prototype.sample = function () {
    ah(this, Dg(), !1);
  };

  function bh() {
    var a = P(Wg);
    null != a.g && a.g.g && Ze(a.g.g);
    a = P(Hg);
    null != a.g && a.g.g ? Ze(a.g.g) : Qe(U());
  }

  function ah(a, b, c) {
    if (!a.done)
      if ((a.h.cancel(), 0 == b.length)) a.l = !1;
      else {
        a.i = null;
        try {
          bh();
          var d = T(),
            e = R();
          e.o = d;
          if (null != P(Hg).g) for (e = 0; e < b.length; e++) Uf(b[e], d, c);
          else
            ie(a.m, {
              strategy_not_selected: 1,
              bin: e.i,
            });
          for (d = 0; d < b.length; d++) Vf(b[d]);
          ++a.g.jb;
          ch(a);
        } finally {
          c
            ? v(b, function (f) {
                return f.Va();
              })
            : Ve(a.h);
        }
      }
  }

  function $g(a, b) {
    if (!a.o) {
      b = ce(142, b);
      Q();
      var c;
      C.visibilityState
        ? (c = "visibilitychange")
        : C.mozVisibilityState
        ? (c = "mozvisibilitychange")
        : C.webkitVisibilityState && (c = "webkitvisibilitychange");
      c &&
        Uc(C, c, b, {
          capture: !1,
        }) &&
        (a.o = b);
    }
  }
  Yg.prototype.j = function () {
    var a = Te(),
      b = T();
    a
      ? (ne ||
          ((le = b),
          v(X.h, function (c) {
            return c.i.m(b, !c.o());
          })),
        (ne = !0))
      : ((this.u = dh(this, b)),
        (ne = !1),
        v(X.h, function (c) {
          c.Aa() && c.i.l(b);
        }));
    this.l = !0;
    ah(this, Dg(), !a);
  };

  function eh(a) {
    return !!(
      Date &&
      a &&
      a.screen &&
      a.document &&
      a.document.body &&
      a.document.body.getBoundingClientRect
    );
  }

  function fh(a, b, c) {
    if (!a.i || c) {
      c = b.document;
      var d = 0 <= me ? T() - me : -1,
        e = T();
      -1 == a.g.za && (d = e);
      var f = U(),
        g = R(),
        h = sc(g.g),
        n = Dg();
      try {
        if (0 < n.length) {
          var m = f.g;
          m && (h.bs = [dd(m), ed(m)]);
          var l = f.l;
          l && (h.ps = [l.width, l.height]);
          b.screen && (h.scs = [b.screen.width, b.screen.height]);
        } else
          (h.url = encodeURIComponent(b.location.href.substring(0, 512))),
            c.referrer &&
              (h.referrer = encodeURIComponent(c.referrer.substring(0, 512)));
        h.tt = d;
        h.pt = me;
        h.bin = g.i;
        void 0 !== b.google_osd_load_pub_page_exp &&
          (h.olpp = b.google_osd_load_pub_page_exp);
        h.deb = [
          1,
          a.g.gb,
          a.g.fb,
          a.g.jb,
          a.g.za,
          De,
          a.h.h,
          a.g.Ob,
          a.g.Nb,
          a.g.Pb,
        ].join("-");
        h.tvt = dh(a, e);
        f.j && (h.inapp = 1);
        if (null !== b && b != b.top) {
          0 < n.length &&
            (h.iframe_loc = encodeURIComponent(
              b.location.href.substring(0, 512)
            ));
          var q = f.h;
          h.is = [dd(q), ed(q)];
        }
      } catch (y) {
        h.error = 1;
      }
      a.i = h;
    }
    b = a.i;
    a = {};
    for (var p in b) a[p] = b[p];
    p = R().j;
    if (1 == I(p.i, "prf")) {
      b = new Gd();
      m = p.g;
      l = 0;
      -1 < m.g && (l = m.i.g.g() - m.g);
      b = dc(b, 1, m.j + l);
      m = p.g;
      b = dc(b, 5, -1 < m.g ? m.h + 1 : m.h);
      b = dc(b, 2, p.h.g.j());
      b = dc(b, 3, p.h.g.i());
      m = dc(b, 4, p.h.g.h());
      p = {};
      b = new Pb();
      q = bc(m, 1);
      if (null != q) {
        pb(b.g, 9);
        l = b.g;
        d = q;
        d = (q = 0 > d ? 1 : 0) ? -d : d;
        if (0 === d) (nb = 0 < 1 / d ? 0 : 2147483648), (mb = 0);
        else if (isNaN(d)) (nb = 2147483647), (mb = 4294967295);
        else if (1.7976931348623157e308 < d)
          (nb = ((q << 31) | 2146435072) >>> 0), (mb = 0);
        else if (2.2250738585072014e-308 > d)
          (c = d / Math.pow(2, -1074)),
            (nb = ((q << 31) | (c / 4294967296)) >>> 0),
            (mb = c >>> 0);
        else {
          e = d;
          c = 0;
          if (2 <= e) for (; 2 <= e && 1023 > c; ) c++, (e /= 2);
          else for (; 1 > e && -1022 < c; ) (e *= 2), c--;
          d *= Math.pow(2, -c);
          nb =
            ((q << 31) | ((c + 1023) << 20) | ((1048576 * d) & 1048575)) >>> 0;
          mb = (4503599627370496 * d) >>> 0;
        }
        qb(l, mb);
        qb(l, nb);
      }
      l = bc(m, 2);
      null != l && Rb(b, 2, l);
      l = bc(m, 3);
      null != l && Rb(b, 3, l);
      l = bc(m, 4);
      null != l && Rb(b, 4, l);
      q = bc(m, 5);
      if (null != q && null != q)
        if ((pb(b.g, 40), (l = b.g), 0 <= q)) pb(l, q);
        else {
          for (c = 0; 9 > c; c++) l.push((q & 127) | 128), (q >>= 7);
          l.push(1);
        }
      if ((m = m.l))
        for (Qb(b, b.g.end()), l = 0; l < m.length; l++) Qb(b, m[l]);
      m = b.i + b.g.length();
      if (0 === m) b = new Uint8Array(0);
      else {
        m = new Uint8Array(m);
        q = b.h;
        c = q.length;
        for (d = l = 0; d < c; d++)
          (e = q[d]), 0 !== e.length && (m.set(e, l), (l += e.length));
        q = b.g;
        c = q.h;
        0 !== c && (m.set(q.g.subarray(0, c), l), (q.h = 0));
        b.h = [m];
        b = m;
      }
      p = ((p.pf = Ob(b)), p);
    } else p = {};
    w(a, p);
    return a;
  }

  function gh() {
    v(Dg(), function (a) {
      if (a.h.h) {
        var b = a.u || 0,
          c = P(Wg);
        if ((b = c.g ? new xf(c.g, a.h.g, a.l, b) : null)) a.G = b;
      }
    });
  }

  function hh() {
    var a = P(Hg);
    if (null != a.g) {
      var b = a.g;
      v(Dg(), function (c) {
        return Tf(c, b);
      });
    }
  }

  function ch(a) {
    var b = R(),
      c = 1 === I(b.g, "llp");
    "osd" == a.m &&
      v(X.g, function (d) {
        if (c) {
          if (1 == b.i || W(d.i) || d.s) {
            var e = {};
            og(d, 0, ((e.r = void 0), e));
          }
        } else (e = {}), og(d, 0, ((e.r = void 0), e));
      });
  }

  function dh(a, b) {
    a = a.u;
    ne && (a += b - le);
    return a;
  }

  function ih(a) {
    return (a = a.match(/[&\?;](?:dc_)?adk=([0-9]+)/)) && 2 == a.length
      ? parseInt(a[1], 10)
      : 0;
  }

  function jh(a) {
    return (a = a.match(/[&\?;]adf=([0-9]+)/)) && 2 == a.length
      ? parseInt(a[1], 10)
      : 0;
  }

  function kh() {
    var a = Y;
    var b =
      void 0 === b
        ? function () {
            return {};
          }
        : b;
    de.lb = "av-js";
    Zd.g = 0.01;
    fe([
      function (c) {
        var d = R(),
          e = {};
        w(c, ((e.bin = d.i), (e.type = "error"), e), sc(d.g), fh(a, D), b());
        if ((d = of())) (e = {}), w(c, ((e.v = encodeURIComponent(d)), e));
      },
    ]);
  }

  function lh(a) {
    var b = new mh();
    switch (a) {
      case 0:
      case 5:
        return [];
      default:
        return [new xg(b), new zg(b), new yg(b), new vg()];
    }
  }
  var Y = P(Yg);

  function mh() {}

  function wg(a, b) {
    var c = b || {};
    b = void 0 === c.Ya ? {} : c.Ya;
    c = void 0 === c.Ua ? {} : c.Ua;
    var d = c.r,
      e = b[0],
      f = fh(Y, O(), !1),
      g = {};
    w(g, f, b);
    b = {};
    w(b, rg(a, e, d, g), c);
    Le(a.h.h, b, a.aa);
    return !0;
  }

  function nh() {
    V.call(this, D, 2, "iem");
  }
  t(nh, V);
  k = nh.prototype;
  k.Pa = function () {
    function a(p, y) {
      return !!b.B.document.elementFromPoint(p, y);
    }
    var b = this,
      c = new N(
        0,
        this.B.innerWidth || this.B.width,
        this.B.innerHeight || this.B.height,
        0
      ),
      d = Hc(document),
      e = Math.floor(c.left - d.x),
      f = Math.floor(c.top - d.y),
      g = Math.floor(c.h - d.x),
      h = Math.floor(c.g - d.y);
    c = a(e, f);
    d = a(g, h);
    if (c && d) return new N(f, g, h, e);
    var n = a(g, f),
      m = a(e, h);
    if (c)
      (h = Z(f, h, function (p) {
        return a(e, p);
      })),
        (g = Z(e, g, function (p) {
          return a(p, f);
        }));
    else if (n)
      (h = Z(f, h, function (p) {
        return a(g, p);
      })),
        (e = Z(g, e, function (p) {
          return a(p, f);
        }));
    else if (m)
      (f = Z(h, f, function (p) {
        return a(e, p);
      })),
        (g = Z(e, g, function (p) {
          return a(p, h);
        }));
    else if (d)
      (f = Z(h, f, function (p) {
        return a(g, p);
      })),
        (e = Z(g, e, function (p) {
          return a(p, h);
        }));
    else {
      var l = Math.floor((e + g) / 2),
        q = Math.floor((f + h) / 2);
      if (!a(l, q)) return new N(0, 0, 0, 0);
      f = Z(q, f, function (p) {
        return a(l, p);
      });
      h = Z(q, h, function (p) {
        return a(l, p);
      });
      e = Z(l, e, function (p) {
        return a(p, q);
      });
      g = Z(l, g, function (p) {
        return a(p, q);
      });
    }
    return new N(f, g, h, e);
  };

  function Z(a, b, c) {
    if (c(b)) return b;
    for (var d = 15; d--; ) {
      var e = Math.floor((a + b) / 2);
      if (e == a || e == b) break;
      c(e) ? (a = e) : (b = e);
    }
    return a;
  }
  k.X = function () {
    return U().i && B && Ib(8) && ye(this.B);
  };
  k.Ea = function () {};
  k.Fa = function () {};
  k.$a = function () {};
  k.ab = function () {};

  function oh() {
    V.call(this, D, 2, "mraid");
    this.M = 0;
    this.D = this.G = !1;
    this.l = null;
    this.h = xe(this.B);
    this.i.g = new N(0, 0, 0, 0);
    this.N = !1;
  }
  t(oh, V);
  k = oh.prototype;
  k.X = function () {
    return null != this.h.I;
  };
  k.ob = function () {
    var a = {};
    this.M && (a.mraid = this.M);
    this.G && (a.mlc = 1);
    a.mtop = this.h.Vb;
    this.l && (a.mse = this.l);
    this.N && (a.msc = 1);
    a.mcp = this.h.ya;
    return a;
  };
  k.S = function (a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    try {
      return this.h.I[a].apply(this.h.I, c);
    } catch (e) {
      je(538, e, 0.01, function (f) {
        f.method = a;
      });
    }
  };

  function ph(a, b, c) {
    a.S("addEventListener", b, c);
  }
  k.Ra = function () {
    var a = this;
    if (this.u) return !this.ga();
    this.u = !0;
    if (2 === this.h.ya) return (this.l = "ng"), We(this, "w"), !1;
    if (1 === this.h.ya) return (this.l = "mm"), We(this, "w"), !1;
    U().C = !0;
    this.B.document.readyState && "complete" == this.B.document.readyState
      ? qh(this)
      : Ae(
          this.B,
          "load",
          function () {
            Dd(
              Q(),
              he(292, function () {
                return qh(a);
              }),
              100
            );
          },
          292
        );
    return !0;
  };

  function qh(a) {
    R().l = !!a.S("isViewable");
    ph(a, "viewableChange", rh);
    "loading" === a.S("getState") ? ph(a, "ready", sh) : th(a);
  }

  function th(a) {
    "string" === typeof a.h.I.AFMA_LIDAR
      ? ((a.G = !0), uh(a))
      : ((a.h.ya = 3), (a.l = "nc"), We(a, "w"));
  }

  function uh(a) {
    a.D = !1;
    var b = 1 == I(R().g, "rmmt"),
      c = !!a.S("isViewable");
    (b ? !c : 1) &&
      Dd(
        Q(),
        he(524, function () {
          a.D || (vh(a), je(540, Error()), (a.l = "mt"), We(a, "w"));
        }),
        500
      );
    wh(a);
    ph(a, a.h.I.AFMA_LIDAR, xh);
  }

  function wh(a) {
    var b = 1 == I(R().g, "sneio"),
      c = void 0 !== a.h.I.AFMA_LIDAR_EXP_1,
      d = void 0 !== a.h.I.AFMA_LIDAR_EXP_2;
    (b = b && d) && (a.h.I.AFMA_LIDAR_EXP_2 = !0);
    c && (a.h.I.AFMA_LIDAR_EXP_1 = !b);
  }

  function vh(a) {
    a.S("removeEventListener", a.h.I.AFMA_LIDAR, xh);
    a.G = !1;
  }
  k.Ea = function () {
    var a = U(),
      b = yh(this, "getMaxSize");
    a.g = new N(0, b.width, b.height, 0);
  };
  k.Fa = function () {
    U().o = yh(this, "getScreenSize");
  };

  function yh(a, b) {
    if ("loading" === a.S("getState")) return new K(-1, -1);
    b = a.S(b);
    if (!b) return new K(-1, -1);
    a = parseInt(b.width, 10);
    b = parseInt(b.height, 10);
    return isNaN(a) || isNaN(b) ? new K(-1, -1) : new K(a, b);
  }
  k.F = function () {
    vh(this);
    V.prototype.F.call(this);
  };

  function sh() {
    try {
      var a = P(oh);
      a.S("removeEventListener", "ready", sh);
      th(a);
    } catch (b) {
      je(541, b);
    }
  }

  function xh(a, b) {
    try {
      var c = P(oh);
      c.D = !0;
      var d = a
        ? new N(a.y, a.x + a.width, a.y + a.height, a.x)
        : new N(0, 0, 0, 0);
      var e = T(),
        f = Te();
      var g = new pe(e, f, c);
      g.g = d;
      g.volume = b;
      c.V(g);
    } catch (h) {
      je(542, h);
    }
  }

  function rh(a) {
    var b = R(),
      c = P(oh);
    a && !b.l && ((b.l = !0), (c.N = !0), c.l && We(c, "w", !0));
  }

  function zh(a) {
    return (a = /[&\?#]exk=([^& ]+)/.exec(a)) && 2 == a.length ? a[1] : null;
  }
  var Ah = ["FRAME", "IMG", "IFRAME"],
    Bh = /^[01](px)?$/;

  function Ch(a, b, c) {
    var d = !0,
      e = !1;
    d = void 0 === d ? !0 : d;
    e = void 0 === e ? !1 : e;
    var f = void 0 === f ? !1 : f;
    if ((a = "string" === typeof a ? document.getElementById(a) : a)) {
      c ||
        (c = function (aa, Ab, Bb) {
          aa.addEventListener(Ab, Bb);
        });
      for (
        var g = !1,
          h = function (aa) {
            g || ((g = !0), b(aa));
          },
          n,
          m,
          l = 0;
        l < Ah.length;
        ++l
      )
        if (Ah[l] == a.tagName) {
          m = 3;
          n = [a];
          break;
        }
      n || ((n = a.querySelectorAll(Ah.join(","))), (m = 2));
      var q = 0,
        p = 0,
        y = (a = !1);
      l = {};
      for (
        var Va = 0;
        Va < n.length;
        l = {
          ka: l.ka,
        },
          Va++
      ) {
        var E = n[Va];
        if (
          !("IMG" != E.tagName ||
          !E.complete ||
          (E.naturalWidth && E.naturalHeight)
            ? Bh.test(E.getAttribute("width")) &&
              Bh.test(E.getAttribute("height"))
            : 1)
        ) {
          if ("IMG" == E.tagName)
            var ra = E.naturalWidth && E.naturalHeight ? !0 : !1;
          else
            try {
              ra =
                "complete" ===
                (E.readyState
                  ? E.readyState
                  : E.contentWindow &&
                    E.contentWindow.document &&
                    E.contentWindow.document.readyState)
                  ? !0
                  : !1;
            } catch (aa) {
              ra = void 0 === e ? !1 : e;
            }
          if (ra) a = !0;
          else {
            q++;
            l.ka = "IMG" === E.tagName;
            var Wa = (function (aa) {
              return function () {
                q--;
                q || h(m);
                aa.ka && (p--, !p && y && h(m));
              };
            })(l);
            c(E, "load", Wa);
            l.ka && (p++, c(E, "error", Wa));
          }
        }
      }
      n = null;
      if (0 === q && !a && "complete" === u.document.readyState) m = 5;
      else if (q || !a) {
        c(u, "load", function () {
          f && p ? (y = !0) : h(4);
        });
        return;
      }
      d && h(m);
    }
  }

  function Dh(a) {
    this.methodName = a;
  }
  var Eh = new Dh(15),
    Fh = new Dh(5),
    Gh = new Dh(6),
    Hh = new Dh(7),
    Ih = new Dh(8);

  function Jh(a, b, c) {
    return b[a.methodName] || c || function () {};
  }

  function Kh() {}

  function Lh() {}

  function Mh(a, b) {
    var c = P(ve);
    c.g = function (d, e) {
      return Jh(Fh, a, function () {
        return !1;
      })(d, e, b);
    };
    c.i = function (d, e) {
      return Jh(Gh, a, function () {
        return 0;
      })(d, e, b);
    };
    c.j = function (d, e) {
      return Jh(Hh, a, function () {
        return "";
      })(d, e, b);
    };
    c.l = function (d, e) {
      return Jh(Ih, a, function () {
        return [];
      })(d, e, b);
    };
    c.h = function () {
      Jh(Eh, a)(b);
    };
  }

  function Nh() {
    this.h = null;
    this.j = this.m = this.i = this.l = !1;
    Oh(this);
    kh();
  }

  function Ph() {
    var a = void 0,
      b = 4;
    if (void 0 === a) {
      var c = void 0 === c ? u : c;
      a = c.ggeac || (c.ggeac = {});
    }
    b = void 0 === b ? 0 : b;
    P(Kh);
    Mh(a, b);
    P(Lh);
    P(ve).h();
    b = R();
    P(ve).g(se.g, se.defaultValue) && rc(b.g, "gtx", 1);
  }
  k = Nh.prototype;
  k.Tb = function (a) {
    this.l = a;
  };
  k.qb = function () {
    Qh(this);
    Q();
    D.clearTimeout(this.h);
    this.h = null;
    me = T();
    Rh(this);
  };

  function Qh(a) {
    R().i = 1;
    if (!(0 < me)) {
      try {
        if (!Sh(a)) return;
        bh();
        Th(a);
      } catch (b) {}
      a.h = Dd(
        Q(),
        he(129, function () {
          return Qh(a);
        }),
        250
      );
    }
  }
  k.Ub = function (a, b, c, d, e, f, g, h, n) {
    var m = this;
    f = void 0 === f ? !1 : f;
    h = void 0 === h ? -1 : h;
    n = void 0 === n ? -1 : n;
    if (eh(D)) {
      var l = new lg(D, b, a, -1, c, g);
      l.ta = lh(l.C);
      e = R();
      0 < h && -1 == l.D && (l.D = h);
      0 <= n && (l.La = n);
      l.Ja = function (q) {
        for (var p = [], y = 0; y < arguments.length; ++y) p[y] = arguments[y];
        return m.Qb.apply(m, r(p));
      };
      l.Kb = function (q) {
        for (var p = [], y = 0; y < arguments.length; ++y) p[y] = arguments[y];
        return m.Qa.apply(m, r(p));
      };
      13 != c && ((l.u = ih(b)), (l.xb = zh(b)), (l.Ia = jh(b)));
      f && (l.Cb = !0);
      rc(e.g, "oseid", ag(this.g));
      X.g.push(l);
      ++Y.g.fb;
      e.h
        ? this.Qa(l, e.h)
        : ((b = P(Hg).g) && Tf(l, b),
          Rh(this),
          e.h ||
            (d
              ? (Uh(l), l.ia())
              : a &&
                Ch(
                  a,
                  function () {
                    l.ha() || (Uh(l), l.ia());
                  },
                  function (q, p, y) {
                    Ae(q, p, y, 130);
                  }
                ),
            Y.l || Y.j()));
    }
  };

  function Th(a) {
    Vh(a);
    Zf(
      a.g,
      function (b) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
        return a.Ub.apply(a, r(c));
      },
      function () {
        return a.l;
      },
      function (b) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
        return a.Tb.apply(a, r(c));
      }
    );
  }

  function Wh(a) {
    R();
    var b = P(ve).g(ue.g, ue.defaultValue),
      c = [P(nh)];
    b || c.push(P(oh));
    b = [P(Sg)];
    return [new Jg(c), new Rg(a), new Jg(b)];
  }

  function Rh(a) {
    if (!a.j) {
      a.j = !0;
      try {
        var b = O(),
          c = U();
        R().m = 947190542;
        if (Sh(a)) {
          Y.g.gb = $f(a.g);
          var d = P(Hg);
          if (null == d.h) {
            var e = Wh(b);
            d.h = e;
          }
          if (
            Ig(d, function (g) {
              return Xh(a, g);
            })
          ) {
            if (!Y.done) {
              hh();
              c.u = !0;
              Th(a);
              var f;
              (f =
                U().j ||
                x(z, "CrKey") ||
                x(z, "PlayStation") ||
                x(z, "Roku") ||
                Me() ||
                x(z, "Xbox") ||
                Ne() ||
                Oe()) || (Q(), (f = 0 !== Wc()));
              f ? (Xg(), gh(), Yh(a), od()) : Xh(a, "pv");
            }
          } else Xh(a, "i");
        } else Zh(a, "c");
      } catch (g) {
        throw (Xh(a, "x"), Eg(), g);
      }
    }
  }

  function Yh(a) {
    if (-1 == Y.g.za) {
      O();
      var b = 2 == ag(a.g);
      Zg(b);
      Dd(
        Q(),
        he(131, function () {
          Zh(a, "t");
        }),
        36e5
      );
      Y.g.za = T() - me;
    }
  }

  function Xh(a, b) {
    R().h = b;
    for (var c = ha(X.g), d = c.next(); !d.done; d = c.next()) d.value.s = !0;
    Zh(a, b, !1);
  }

  function Zh(a, b, c) {
    c = void 0 === c ? !0 : c;
    if (!Y.done) {
      Y.h.cancel();
      a.g || (a.g = new Xf());
      if (2 == ag(a.g) || a.i)
        for (
          a = X.g, c && 0 < a.length && ah(Y, a, !0), c = ha(a), a = c.next();
          !a.done;
          a = c.next()
        ) {
          a = a.value;
          var d = {};
          og(a, 1, ((d.r = b), d));
          a.g && a.g.O();
        }
      Y.done = !0;
    }
  }

  function Sh(a) {
    if (!eh(O())) return !1;
    var b = new Xf();
    if (!(b.g || b.h || b.i)) return !1;
    a.g = b;
    return !0;
  }
  k.Qa = function (a, b) {
    a.s = !0;
    var c = {};
    og(a, 2, ((c.r = b), c));
    a.g && a.g.O();
  };
  k.Qb = function (a) {
    a &&
      W(a.i) &&
      (0 >= Lf(Sf(a)) ? 0 : sg(a) && !a.zb) &&
      (id(a.M), (a.zb = !0));
  };

  function $h(a, b) {
    if (b && b.data && b.source) {
      var c = b.data;
      if ("string" !== typeof c) var d = null;
      else {
        d = {};
        c = c.split("\n");
        for (var e = 0; e != c.length; ++e) {
          var f = c[e],
            g = f.indexOf("=");
          if (!(0 >= g)) {
            var h = Number(f.substr(0, g));
            f = f.substr(g + 1);
            switch (h) {
              case 36:
              case 8:
              case 11:
              case 16:
              case 5:
              case 18:
                f = "true" == f;
                break;
              case 4:
              case 33:
              case 6:
              case 25:
              case 28:
              case 29:
              case 24:
              case 31:
              case 30:
              case 23:
              case 22:
              case 7:
              case 21:
              case 20:
                f = Number(f);
                break;
              case 3:
                if ("function" === typeof decodeURIComponent)
                  try {
                    f = decodeURIComponent(f);
                  } catch (n) {
                    throw Error("Error: URI malformed: " + f);
                  }
            }
            d[h] = f;
          }
        }
        d = d[0] ? d : null;
      }
      if ((c = d))
        if (
          ((e = c[0]),
          Ga(
            "goog_creative_loaded goog_dom_content_loaded goog_listener_status goog_maybe_stop_monitoring goog_provide_mode goog_request_monitoring goog_stop_monitoring".split(
              " "
            ),
            e
          ) && (d = Ag(new Pc(c[4], c[12]))))
        )
          if (
            ((h = c[33]),
            0 < h && -1 == d.wa && (d.wa = h),
            "goog_stop_monitoring" === e)
          )
            Gg(d);
          else if ("goog_maybe_stop_monitoring" !== e || void 0 !== d.ca) {
            if (
              (Ga(d.aa, b.source) || d.aa.push(b.source),
              "goog_request_monitoring" === e || !d.Fb)
            )
              if (
                ((d.Fb = !0),
                void 0 !== c[16] && (d.da = !!c[16]),
                void 0 !== c[6])
              ) {
                c = c[6];
                b = ai(c, d.C);
                if (b != d.C) {
                  if (5 == b) {
                    d.s = !0;
                    Gg(d);
                    return;
                  }
                  d.C = b;
                  d.ta = lh(b);
                }
                b = P(ve).g(te.g, te.defaultValue);
                4 != c || b || d.ia();
                c = U();
                e = rg(d, "goog_acknowledge_monitoring");
                e[8] = c.i;
                e[36] = c.D;
                Le(d.h.h, e, d.aa);
                c = R();
                d.s && c.h ? (a.Qa(d, c.h), Gg(d)) : b || (a.i = !0);
              }
          } else Gg(d);
    }
  }

  function Uh(a) {
    if (a && qg(a).i()) {
      var b = rg(a, "goog_get_mode");
      Le(a.h.h, b);
    }
  }

  function Vh(a) {
    if (!a.m) {
      Ae(
        D,
        "message",
        function (c) {
          return $h(a, c);
        },
        132
      );
      var b = bi().contentWindow;
      b &&
        Ae(
          b,
          "message",
          function (c) {
            return $h(a, c);
          },
          132
        );
      a.m = !0;
    }
  }

  function ci(a) {
    Ae(
      O(),
      "unload",
      function () {
        Zh(a, "u");
      },
      133
    );
  }

  function ai(a, b) {
    return (
      Ea([5, 2, 4, 3, 1, 0], function (c) {
        return c === a || c === b;
      }) || 0
    );
  }
  k.Lb = function (a) {
    (a = Bg(a)) && Gg(a);
  };
  k.Mb = function (a, b) {
    a &&
      b &&
      sa(a) &&
      1 == a.nodeType &&
      sa(b) &&
      1 == b.nodeType &&
      (a = Bg(a)) &&
      (O(),
      Rf(a),
      (a.h.g = b),
      Wf(a),
      mg(a, b),
      a.g && ((a = a.g), a.O(), (a.h = b), a.ma(), a.Y()));
  };

  function bi() {
    var a = Jc("IFRAME", {
      id: "google_osd_static_frame_" + Math.floor(1e13 * Math.random()),
      name: "google_osd_static_frame",
    });
    a.style.display = "none";
    a.style.width = "0px";
    a.style.height = "0px";
    D.document.body.appendChild(a);
    return a;
  }

  function Oh(a) {
    ua(
      "Goog_Osd_UnloadAdBlock",
      he(134, function (b) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
        return a.Lb.apply(a, r(c));
      })
    );
    ua(
      "Goog_Osd_UpdateElementToMeasure",
      he(135, function (b) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
        return a.Mb.apply(a, r(c));
      })
    );
  }
  ge(155, function () {
    Ph();
    var a = new Nh();
    Y.m = "osd";
    ci(a);
    pd()
      ? a.qb()
      : (Qh(a),
        Ae(
          O(),
          "load",
          function () {
            Dd(
              Q(),
              he(153, function (b) {
                for (var c = [], d = 0; d < arguments.length; ++d)
                  c[d] = arguments[d];
                return a.qb.apply(a, r(c));
              }),
              100
            );
          },
          154
        ));
  });
}.call(this, this, this.document));
