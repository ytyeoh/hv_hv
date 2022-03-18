"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : void 0, function (C, e) {
  "use strict";

  var t = [],
      E = C.document,
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.concat,
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      v = n.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      y = {},
      m = function m(e) {
    return "function" == typeof e && "number" != typeof e.nodeType;
  },
      x = function x(e) {
    return null != e && e === e.window;
  },
      c = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };

  function b(e, t, n) {
    var r,
        i,
        o = (n = n || E).createElement("script");
    if (o.text = e, t) for (r in c) {
      (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    }
    n.head.appendChild(o).parentNode.removeChild(o);
  }

  function w(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[o.call(e)] || "object" : _typeof(e);
  }

  var f = "3.4.1",
      k = function k(e, t) {
    return new k.fn.init(e, t);
  },
      p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  function d(e) {
    var t = !!e && "length" in e && e.length,
        n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }

  k.fn = k.prototype = {
    jquery: f,
    constructor: k,
    length: 0,
    toArray: function toArray() {
      return s.call(this);
    },
    get: function get(e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = k.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return k.each(this, e);
    },
    map: function map(n) {
      return this.pushStack(k.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, k.extend = k.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        r = e[t], "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }

    return a;
  }, k.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    globalEval: function globalEval(e, t) {
      b(e, {
        nonce: t && t.nonce
      });
    },
    each: function each(e, t) {
      var n,
          r = 0;

      if (d(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }

      return e;
    },
    trim: function trim(e) {
      return null == e ? "" : (e + "").replace(p, "");
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }

      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) {
        !t(e[i], i) !== a && r.push(e[i]);
      }

      return r;
    },
    map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          a = [];
      if (d(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && a.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && a.push(i);
      }
      return g.apply([], a);
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });

  var h = function (n) {
    var e,
        d,
        b,
        o,
        i,
        h,
        f,
        g,
        w,
        u,
        l,
        T,
        C,
        a,
        E,
        v,
        s,
        c,
        y,
        k = "sizzle" + 1 * new Date(),
        m = n.document,
        S = 0,
        r = 0,
        p = ue(),
        x = ue(),
        N = ue(),
        A = ue(),
        D = function D(e, t) {
      return e === t && (l = !0), 0;
    },
        j = {}.hasOwnProperty,
        t = [],
        q = t.pop,
        L = t.push,
        H = t.push,
        O = t.slice,
        P = function P(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
        $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
        F = new RegExp(M + "+", "g"),
        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp($),
        V = new RegExp("^" + I + "$"),
        G = {
      ID: new RegExp("^#(" + I + ")"),
      CLASS: new RegExp("^\\.(" + I + ")"),
      TAG: new RegExp("^(" + I + "|[*])"),
      ATTR: new RegExp("^" + W),
      PSEUDO: new RegExp("^" + $),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + R + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        ne = function ne(e, t, n) {
      var r = "0x" + t - 65536;
      return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
    },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function ie(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        oe = function oe() {
      T();
    },
        ae = be(function (e) {
      return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      H.apply(t = O.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function se(t, e, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;

      if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
        }

        if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && U.test(t)) {
            (s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = k), o = (l = h(t)).length;

            while (o--) {
              l[o] = "#" + s + " " + xe(l[o]);
            }

            c = l.join(","), f = ee.test(t) && ye(e.parentNode) || e;
          }

          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            A(t, !0);
          } finally {
            s === k && e.removeAttribute("id");
          }
        }
      }

      return g(t.replace(B, "$1"), e, n, r);
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }

    function le(e) {
      return e[k] = !0, e;
    }

    function ce(e) {
      var t = C.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function fe(e, t) {
      var n = e.split("|"),
          r = n.length;

      while (r--) {
        b.attrHandle[n[r]] = t;
      }
    }

    function pe(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }

    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }

    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n,
              r = a([], e.length, o),
              i = r.length;

          while (i--) {
            e[n = r[i]] && (e[n] = !(t[n] = e[n]));
          }
        });
      });
    }

    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML");
    }, T = se.setDocument = function (e) {
      var t,
          n,
          r = e ? e.ownerDocument || e : m;
      return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length;
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }

          return [];
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
      }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", $);
      }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, D = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = e;

        while (n = n.parentNode) {
          a.unshift(n);
        }

        n = t;

        while (n = n.parentNode) {
          s.unshift(n);
        }

        while (a[r] === s[r]) {
          r++;
        }

        return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0;
      }), C;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        A(t, !0);
      }
      return 0 < se(t, C, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) !== C && T(e), y(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) !== C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
          r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(re, ie);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          i = 0;

      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
        while (t = e[i++]) {
          t === e[i] && (r = n.push(i));
        }

        while (r--) {
          e.splice(n[r], 1);
        }
      }

      return u = null, e;
    }, o = se.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;

      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += o(e);
          }
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = e[r++]) {
        n += o(t);
      }

      return n;
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = p[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function CHILD(h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l = y !== m ? "nextSibling" : "previousSibling",
                c = e.parentNode,
                f = x && e.nodeName.toLowerCase(),
                p = !n && !x,
                d = !1;

            if (c) {
              if (y) {
                while (l) {
                  a = e;

                  while (a = a[l]) {
                    if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                  }

                  u = l = "only" === h && !u && "nextSibling";
                }

                return !0;
              }

              if (u = [m ? c.firstChild : c.lastChild], m && p) {
                d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s];

                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                  if (1 === a.nodeType && ++d && a === e) {
                    i[h] = [S, s, d];
                    break;
                  }
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a === e)) break;
              }

              return (d -= v) === g || d % g == 0 && 0 <= d / g;
            }
          };
        },
        PSEUDO: function PSEUDO(e, o) {
          var t,
              a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
                r = a(e, o),
                i = r.length;

            while (i--) {
              e[n = P(e, r[i])] = !(t[n] = r[i]);
            }
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
              i = [],
              s = f(e.replace(B, "$1"));
          return s[k] ? le(function (e, t, n, r) {
            var i,
                o = s(e, null, r, []),
                a = e.length;

            while (a--) {
              (i = o[a]) && (e[a] = !(t[a] = i));
            }
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }),
        lang: le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;

            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);

            return !1;
          };
        }),
        target: function target(e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function root(e) {
          return e === a;
        },
        focus: function focus(e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !b.pseudos.empty(e);
        },
        header: function header(e) {
          return J.test(e.nodeName);
        },
        input: function input(e) {
          return Q.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) {
            e.push(r);
          }

          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }

          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      b.pseudos[e] = de(e);
    }

    for (e in {
      submit: !0,
      reset: !0
    }) {
      b.pseudos[e] = he(e);
    }

    function me() {}

    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }

      return r;
    }

    function be(s, e, t) {
      var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) {
          if (1 === e.nodeType || f) return s(e, t, n);
        }

        return !1;
      } : function (e, t, n) {
        var r,
            i,
            o,
            a = [S, p];

        if (n) {
          while (e = e[u]) {
            if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
          }
        } else while (e = e[u]) {
          if (1 === e.nodeType || f) if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
            if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2];
            if ((i[c] = a)[2] = s(e, t, n)) return !0;
          }
        }

        return !1;
      };
    }

    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;

        while (r--) {
          if (!i[r](e, t, n)) return !1;
        }

        return !0;
      } : i[0];
    }

    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }

      return a;
    }

    function Ce(d, h, g, v, y, e) {
      return v && !v[k] && (v = Ce(v)), y && !y[k] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c = e || function (e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) {
            se(e, t[r], n);
          }

          return n;
        }(h || "*", n.nodeType ? [n] : n, []),
            f = !d || !e && h ? c : Te(c, s, d, n, r),
            p = g ? y || (e ? d : l || v) ? [] : t : f;

        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;

          while (o--) {
            (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
        }

        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;

              while (o--) {
                (a = p[o]) && i.push(f[o] = a);
              }

              y(null, p = [], i, r);
            }

            o = p.length;

            while (o--) {
              (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
            }
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
      });
    }

    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
        return e === i;
      }, a, !0), l = be(function (e) {
        return -1 < P(i, e);
      }, a, !0), c = [function (e, t, n) {
        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
        return i = null, r;
      }]; s < r; s++) {
        if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
            for (n = ++s; n < r; n++) {
              if (b.relative[e[n].type]) break;
            }

            return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
          }

          c.push(t);
        }
      }

      return we(c);
    }

    return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;

      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace(B, " ")
        }), a = a.slice(n.length)), b.filter) {
          !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
            value: n,
            type: o,
            matches: r
          }), a = a.slice(n.length));
        }

        if (!n) break;
      }

      return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
    }, f = se.compile = function (e, t) {
      var n,
          v,
          y,
          m,
          x,
          r,
          i = [],
          o = [],
          a = N[e + " "];

      if (!a) {
        t || (t = h(e)), n = t.length;

        while (n--) {
          (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
        }

        (a = N(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function r(e, t, n, _r, i) {
          var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || x && b.find.TAG("*", i),
              h = S += null == p ? 1 : Math.random() || .1,
              g = d.length;

          for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument === C || (T(o), n = !E);

              while (s = v[a++]) {
                if (s(o, t || C, n)) {
                  _r.push(o);

                  break;
                }
              }

              i && (S = h);
            }

            m && ((o = !s && o) && u--, e && c.push(o));
          }

          if (u += l, m && l !== u) {
            a = 0;

            while (s = y[a++]) {
              s(c, f, t, n);
            }

            if (e) {
              if (0 < u) while (l--) {
                c[l] || f[l] || (f[l] = q.call(_r));
              }
              f = Te(f);
            }

            H.apply(_r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(_r);
          }

          return i && (S = h, w = p), c;
        }, m ? le(r) : r))).selector = e;
      }

      return a;
    }, g = se.select = function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          c = !r && h(e = l.selector || e);

      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }

        i = G.needsContext.test(e) ? 0 : o.length;

        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;

          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break;
          }
        }
      }

      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
    }, d.sortStable = k.split("").sort(D).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), se;
  }(C);

  k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape;

  var T = function T(e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && k(e).is(n)) break;
        r.push(e);
      }
    }

    return r;
  },
      S = function S(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      N = k.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function j(e, n, r) {
    return m(n) ? k.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? k.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? k.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : k.filter(n, e, r);
  }

  k.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, k.fn.extend({
    find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(k(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (k.contains(i[t], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) {
        k.find(e, i[t], n);
      }

      return 1 < r ? k.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    },
    is: function is(e) {
      return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length;
    }
  });
  var q,
      L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (k.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;

    if (n = n || q, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (r[1]) {
        if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), D.test(r[1]) && k.isPlainObject(t)) for (r in t) {
          m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        }
        return this;
      }

      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this);
  }).prototype = k.fn, q = k(E);
  var H = /^(?:parents|prev(?:Until|All))/,
      O = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }

    return e;
  }

  k.fn.extend({
    has: function has(e) {
      var t = k(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (k.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && k(e);
      if (!N.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(1 < o.length ? k.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), k.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return T(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return T(e, "parentNode", n);
    },
    next: function next(e) {
      return P(e, "nextSibling");
    },
    prev: function prev(e) {
      return P(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return T(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return T(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return T(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return T(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return S((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return S(e.firstChild);
    },
    contents: function contents(e) {
      return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), k.merge([], e.childNodes));
    }
  }, function (r, i) {
    k.fn[r] = function (e, t) {
      var n = k.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var R = /[^\x20\t\r\n\f]+/g;

  function M(e) {
    return e;
  }

  function I(e) {
    throw e;
  }

  function W(e, t, n, r) {
    var i;

    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  k.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(R) || [], function (e, t) {
      n[t] = !0;
    }), n) : k.extend({}, r);

    var i,
        t,
        o,
        a,
        s = [],
        u = [],
        l = -1,
        c = function c() {
      for (a = a || r.once, o = i = !0; u.length; l = -1) {
        t = u.shift();

        while (++l < s.length) {
          !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
        }
      }

      r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
    },
        f = {
      add: function add() {
        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
          k.each(e, function (e, t) {
            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
          });
        }(arguments), t && !i && c()), this;
      },
      remove: function remove() {
        return k.each(arguments, function (e, t) {
          var n;

          while (-1 < (n = k.inArray(t, s, n))) {
            s.splice(n, 1), n <= l && l--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? -1 < k.inArray(e, s) : 0 < s.length;
      },
      empty: function empty() {
        return s && (s = []), this;
      },
      disable: function disable() {
        return a = u = [], s = t = "", this;
      },
      disabled: function disabled() {
        return !s;
      },
      lock: function lock() {
        return a = u = [], t || i || (s = t = ""), this;
      },
      locked: function locked() {
        return !!a;
      },
      fireWith: function fireWith(e, t) {
        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
      },
      fire: function fire() {
        return f.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!o;
      }
    };

    return f;
  }, k.extend({
    Deferred: function Deferred(e) {
      var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          a = {
        state: function state() {
          return i;
        },
        always: function always() {
          return s.done(arguments).fail(arguments), this;
        },
        "catch": function _catch(e) {
          return a.then(null, e);
        },
        pipe: function pipe() {
          var i = arguments;
          return k.Deferred(function (r) {
            k.each(o, function (e, t) {
              var n = m(i[t[4]]) && i[t[4]];
              s[t[1]](function () {
                var e = n && n.apply(this, arguments);
                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
              });
            }), i = null;
          }).promise();
        },
        then: function then(t, n, r) {
          var u = 0;

          function l(i, o, a, s) {
            return function () {
              var n = this,
                  r = arguments,
                  e = function e() {
                var e, t;

                if (!(i < u)) {
                  if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                  t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++, t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                }
              },
                  t = s ? e : function () {
                try {
                  e();
                } catch (e) {
                  k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== I && (n = void 0, r = [e]), o.rejectWith(n, r));
                }
              };

              i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t));
            };
          }

          return k.Deferred(function (e) {
            o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : M)), o[2][3].add(l(0, e, m(n) ? n : I));
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? k.extend(e, a) : a;
        }
      },
          s = {};
      return k.each(o, function (e, t) {
        var n = t[2],
            r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function when(e) {
      var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = k.Deferred(),
          a = function a(t) {
        return function (e) {
          r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
        };
      };

      if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();

      while (t--) {
        W(i[t], a(t), o.reject);
      }

      return o.promise();
    }
  });
  var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  k.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, k.readyException = function (e) {
    C.setTimeout(function () {
      throw e;
    });
  };
  var F = k.Deferred();

  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready();
  }

  k.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      k.readyException(e);
    }), this;
  }, k.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k]);
    }
  }), k.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));

  var _ = function _(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;
    if ("object" === w(n)) for (s in i = !0, n) {
      _(e, t, s, n[s], !0, o, a);
    } else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(k(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      z = /^-ms-/,
      U = /-([a-z])/g;

  function X(e, t) {
    return t.toUpperCase();
  }

  function V(e) {
    return e.replace(z, "ms-").replace(U, X);
  }

  var G = function G(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function Y() {
    this.expando = k.expando + Y.uid++;
  }

  Y.uid = 1, Y.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[V(t)] = n;else for (r in t) {
        i[V(r)] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;

          while (n--) {
            delete r[t[n]];
          }
        }

        (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !k.isEmptyObject(t);
    }
  };
  var Q = new Y(),
      J = new Y(),
      K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Z = /[A-Z]/g;

  function ee(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i);
      } catch (e) {}

      J.set(e, t, n);
    } else n = void 0;
    return n;
  }

  k.extend({
    hasData: function hasData(e) {
      return J.hasData(e) || Q.hasData(e);
    },
    data: function data(e, t, n) {
      return J.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      J.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return Q.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      Q.remove(e, t);
    }
  }), k.fn.extend({
    data: function data(n, e) {
      var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === n) {
        if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
          t = a.length;

          while (t--) {
            a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));
          }

          Q.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == _typeof(n) ? this.each(function () {
        J.set(this, n);
      }) : _(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
        this.each(function () {
          J.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        J.remove(this, e);
      });
    }
  }), k.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = k.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = k._queueHooks(e, t);

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        k.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return Q.get(e, n) || Q.access(e, n, {
        empty: k.Callbacks("once memory").add(function () {
          Q.remove(e, [t + "queue", n]);
        })
      });
    }
  }), k.fn.extend({
    queue: function queue(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = k.queue(this, t, n);
        k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        k.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = k.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) {
        (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }

      return s(), i.promise(t);
    }
  });

  var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
      re = ["Top", "Right", "Bottom", "Left"],
      ie = E.documentElement,
      oe = function oe(e) {
    return k.contains(e.ownerDocument, e);
  },
      ae = {
    composed: !0
  };

  ie.getRootNode && (oe = function oe(e) {
    return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument;
  });

  var se = function se(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display");
  },
      ue = function ue(e, t, n, r) {
    var i,
        o,
        a = {};

    for (o in t) {
      a[o] = e.style[o], e.style[o] = t[o];
    }

    for (o in i = n.apply(e, r || []), t) {
      e.style[o] = a[o];
    }

    return i;
  };

  function le(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return k.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) {
        k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }

      c *= 2, k.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var ce = {};

  function fe(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) {
      (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Q.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = k.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ce[s] = u)))) : "none" !== n && (l[c] = "none", Q.set(r, "display", n)));
    }

    for (c = 0; c < f; c++) {
      null != l[c] && (e[c].style.display = l[c]);
    }

    return e;
  }

  k.fn.extend({
    show: function show() {
      return fe(this, !0);
    },
    hide: function hide() {
      return fe(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        se(this) ? k(this).show() : k(this).hide();
      });
    }
  });
  var pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      ge = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? k.merge([e], n) : n;
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
    }
  }

  ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
  var me,
      xe,
      be = /<|&#?\w+;/;

  function we(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);else if (be.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0];

        while (c--) {
          a = a.lastChild;
        }

        k.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }

    f.textContent = "", d = 0;

    while (o = p[d++]) {
      if (r && -1 < k.inArray(o, r)) i && i.push(o);else if (l = oe(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
        c = 0;

        while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }

    return f;
  }

  me = E.createDocumentFragment().appendChild(E.createElement("div")), (xe = E.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), me.appendChild(xe), y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
  var Te = /^key/,
      Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ee = /^([^.]*)(?:\.(.+)|)/;

  function ke() {
    return !0;
  }

  function Se() {
    return !1;
  }

  function Ne(e, t) {
    return e === function () {
      try {
        return E.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }

  function Ae(e, t, n, r, i, o) {
    var a, s;

    if ("object" == _typeof(t)) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) {
        Ae(e, s, n, r, t[s], o);
      }

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return k().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = k.guid++)), e.each(function () {
      k.event.add(this, t, i, r, n);
    });
  }

  function De(e, i, o) {
    o ? (Q.set(e, i, !1), k.event.add(e, i, {
      namespace: !1,
      handler: function handler(e) {
        var t,
            n,
            r = Q.get(this, i);

        if (1 & e.isTrigger && this[i]) {
          if (r.length) (k.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
        } else r.length && (Q.set(this, i, {
          value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke);
  }

  k.event = {
    global: {},
    add: function add(t, e, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Q.get(t);

      if (v) {
        n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ie, i), n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(R) || [""]).length;

        while (l--) {
          d = g = (s = Ee.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && k.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0);
        }
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Q.hasData(e) && Q.get(e);

      if (v && (u = v.events)) {
        l = (t = (t || "").match(R) || [""]).length;

        while (l--) {
          if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
            f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }

            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d]);
          } else for (d in u) {
            k.event.remove(e, d + t[l], n, r, !0);
          }
        }

        k.isEmptyObject(u) && Q.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s = k.event.fix(e),
          u = new Array(arguments.length),
          l = (Q.get(this, "events") || {})[s.type] || [],
          c = k.event.special[s.type] || {};

      for (u[0] = s, t = 1; t < arguments.length; t++) {
        u[t] = arguments[t];
      }

      if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
        a = k.event.handlers.call(this, s, l), t = 0;

        while ((i = a[t++]) && !s.isPropagationStopped()) {
          s.currentTarget = i.elem, n = 0;

          while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped()) {
            s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), a[i] && o.push(r);
          }

          o.length && s.push({
            elem: l,
            handlers: o
          });
        }
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(t, e) {
      Object.defineProperty(k.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function set(e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function fix(e) {
      return e[k.expando] ? e : new k.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function setup(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke), !1;
        },
        trigger: function trigger(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0;
        },
        _default: function _default(e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, k.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, k.Event = function (e, t) {
    if (!(this instanceof k.Event)) return new k.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0;
  }, k.Event.prototype = {
    constructor: k.Event,
    isDefaultPrevented: Se,
    isPropagationStopped: Se,
    isImmediatePropagationStopped: Se,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, k.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function which(e) {
      var t = e.button;
      return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, k.event.addProp), k.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    k.event.special[e] = {
      setup: function setup() {
        return De(this, e, Ne), !1;
      },
      trigger: function trigger() {
        return De(this, e), !0;
      },
      delegateType: t
    };
  }), k.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    k.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function handle(e) {
        var t,
            n = e.relatedTarget,
            r = e.handleObj;
        return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), k.fn.extend({
    on: function on(e, t, n, r) {
      return Ae(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return Ae(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function () {
        k.event.remove(this, e, n, t);
      });
    }
  });
  var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      qe = /<script|<style|<link/i,
      Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
      He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Oe(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e;
  }

  function Pe(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function Re(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Me(e, t) {
    var n, r, i, o, a, s, u, l;

    if (1 === t.nodeType) {
      if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events)) for (i in delete a.handle, a.events = {}, l) {
        for (n = 0, r = l[i].length; n < r; n++) {
          k.event.add(t, i, l[i][n]);
        }
      }
      J.hasData(e) && (s = J.access(e), u = k.extend({}, s), J.set(t, u));
    }
  }

  function Ie(n, r, i, o) {
    r = g.apply([], r);
    var e,
        t,
        a,
        s,
        u,
        l,
        c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o);
    });

    if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++) {
        u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ve(u, "script"))), i.call(n[c], u, c);
      }

      if (s) for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++) {
        u = a[c], he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {
          nonce: u.nonce || u.getAttribute("nonce")
        }) : b(u.textContent.replace(He, ""), u, l));
      }
    }

    return n;
  }

  function We(e, t, n) {
    for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || k.cleanData(ve(r)), r.parentNode && (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    }

    return e;
  }

  k.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(je, "<$1></$2>");
    },
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = e.cloneNode(!0),
          f = oe(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) {
        s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      }
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) {
        Me(o[r], a[r]);
      } else Me(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (G(n)) {
          if (t = n[Q.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
            }
            n[Q.expando] = void 0;
          }

          n[J.expando] && (n[J.expando] = void 0);
        }
      }
    }
  }), k.fn.extend({
    detach: function detach(e) {
      return We(this, e, !0);
    },
    remove: function remove(e) {
      return We(this, e);
    },
    text: function text(e) {
      return _(this, function (e) {
        return void 0 === e ? k.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return Ie(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return Ie(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Oe(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return Ie(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return Ie(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (k.cleanData(ve(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return k.clone(this, e, t);
      });
    },
    html: function html(e) {
      return _(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = k.htmlPrefilter(e);

          try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return Ie(this, arguments, function (e) {
        var t = this.parentNode;
        k.inArray(this, n) < 0 && (k.cleanData(ve(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), k.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    k.fn[e] = function (e) {
      for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) {
        t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get());
      }

      return this.pushStack(n);
    };
  });

  var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
      Fe = function Fe(e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e);
  },
      Be = new RegExp(re.join("|"), "i");

  function _e(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)), !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function ze(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  !function () {
    function e() {
      if (u) {
        s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(s).appendChild(u);
        var e = C.getComputedStyle(u);
        n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(s), u = null;
      }
    }

    function t(e) {
      return Math.round(parseFloat(e));
    }

    var n,
        r,
        i,
        o,
        a,
        s = E.createElement("div"),
        u = E.createElement("div");
    u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(y, {
      boxSizingReliable: function boxSizingReliable() {
        return e(), r;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return e(), o;
      },
      pixelPosition: function pixelPosition() {
        return e(), n;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return e(), a;
      },
      scrollboxSize: function scrollboxSize() {
        return e(), i;
      }
    }));
  }();
  var Ue = ["Webkit", "Moz", "ms"],
      Xe = E.createElement("div").style,
      Ve = {};

  function Ge(e) {
    var t = k.cssProps[e] || Ve[e];
    return t || (e in Xe ? e : Ve[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
          n = Ue.length;

      while (n--) {
        if ((e = Ue[n] + t) in Xe) return e;
      }
    }(e) || e);
  }

  var Ye = /^(none|table(?!-c[ea]).+)/,
      Qe = /^--/,
      Je = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Ke = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function Ze(e, t, n) {
    var r = ne.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function et(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) {
      "margin" === n && (u += k.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
    }

    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
  }

  function tt(e, t, n) {
    var r = Fe(e),
        i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r),
        o = i,
        a = _e(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);

    if ($e.test(a)) {
      if (!n) return a;
      a = "auto";
    }

    return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }

  function nt(e, t, n, r, i) {
    return new nt.prototype.init(e, t, n, r, i);
  }

  k.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = _e(e, "opacity");

            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = V(t),
            u = Qe.test(t),
            l = e.style;
        if (u || (t = Ge(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = _typeof(n)) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = V(t);
      return Qe.test(t) || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), k.each(["height", "width"], function (e, u) {
    k.cssHooks[u] = {
      get: function get(e, t, n) {
        if (t) return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function () {
          return tt(e, u, n);
        });
      },
      set: function set(e, t, n) {
        var r,
            i = Fe(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
            s = n ? et(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = k.css(e, u)), Ze(0, t, s);
      }
    };
  }), k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), k.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    k.cssHooks[i + o] = {
      expand: function expand(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) {
          n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
        }

        return n;
      }
    }, "margin" !== i && (k.cssHooks[i + o].set = Ze);
  }), k.fn.extend({
    css: function css(e, t) {
      return _(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = Fe(e), i = t.length; a < i; a++) {
            o[t[a]] = k.css(e, t[a], !1, r);
          }

          return o;
        }

        return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((k.Tween = nt).prototype = {
    constructor: nt,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = nt.propHooks[this.prop];
      return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = nt.propHooks[this.prop];
      return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this;
    }
  }).init.prototype = nt.prototype, (nt.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = nt.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, k.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, k.fx = nt.prototype.init, k.fx.step = {};
  var rt,
      it,
      ot,
      at,
      st = /^(?:toggle|show|hide)$/,
      ut = /queueHooks$/;

  function lt() {
    it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval), k.fx.tick());
  }

  function ct() {
    return C.setTimeout(function () {
      rt = void 0;
    }), rt = Date.now();
  }

  function ft(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = re[r])] = i["padding" + n] = e;
    }

    return t && (i.opacity = i.width = e), i;
  }

  function pt(e, t, n) {
    for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function dt(o, e, t) {
    var n,
        a,
        r = 0,
        i = dt.prefilters.length,
        s = k.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (a) return !1;

      for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) {
        l.tweens[r].run(n);
      }

      return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
    },
        l = s.promise({
      elem: o,
      props: k.extend({}, e),
      opts: k.extend(!0, {
        specialEasing: {},
        easing: k.easing._default
      }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: rt || ct(),
      duration: t.duration,
      tweens: [],
      createTween: function createTween(e, t) {
        var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n), n;
      },
      stop: function stop(e) {
        var t = 0,
            n = e ? l.tweens.length : 0;
        if (a) return this;

        for (a = !0; t < n; t++) {
          l.tweens[t].run(1);
        }

        return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
      }
    }),
        c = l.props;

    for (!function (e, t) {
      var n, r, i, o, a;

      for (n in e) {
        if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) {
          (n in e) || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
      }
    }(c, l.opts.specialEasing); r < i; r++) {
      if (n = dt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    }

    return k.map(c, pt, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  k.Animation = k.extend(dt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return le(n.elem, e, ne.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(R);

      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t);
      }
    },
    prefilters: [function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && se(e),
          v = Q.get(e, "fxshow");

      for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
        });
      })), t) {
        if (i = t[r], st.test(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
            if ("show" !== i || !v || void 0 === v[r]) continue;
            g = !0;
          }

          d[r] = v && v[r] || k.style(e, r);
        }
      }

      if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = k.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) {
        u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", {
          display: l
        }), o && (v.hidden = !g), g && fe([e], !0), p.done(function () {
          for (r in g || fe([e]), Q.remove(e, "fxshow"), d) {
            k.style(e, r, d[r]);
          }
        })), u = pt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }],
    prefilter: function prefilter(e, t) {
      t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
    }
  }), k.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? k.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
    }, r;
  }, k.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(se).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(t, e, n, r) {
      var i = k.isEmptyObject(t),
          o = k.speed(e, n, r),
          a = function a() {
        var e = dt(this, k.extend({}, t), o);
        (i || Q.get(this, "finish")) && e.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(i, e, o) {
      var a = function a(e) {
        var t = e.stop;
        delete e.stop, t(o);
      };

      return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
            t = null != i && i + "queueHooks",
            n = k.timers,
            r = Q.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) {
          r[t] && r[t].stop && ut.test(t) && a(r[t]);
        }

        for (t = n.length; t--;) {
          n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        }

        !e && o || k.dequeue(this, i);
      });
    },
    finish: function finish(a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
            t = Q.get(this),
            n = t[a + "queue"],
            r = t[a + "queueHooks"],
            i = k.timers,
            o = n ? n.length : 0;

        for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) {
          i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        }

        for (e = 0; e < o; e++) {
          n[e] && n[e].finish && n[e].finish.call(this);
        }

        delete t.finish;
      });
    }
  }), k.each(["toggle", "show", "hide"], function (e, r) {
    var i = k.fn[r];

    k.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n);
    };
  }), k.each({
    slideDown: ft("show"),
    slideUp: ft("hide"),
    slideToggle: ft("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    k.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), k.timers = [], k.fx.tick = function () {
    var e,
        t = 0,
        n = k.timers;

    for (rt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || k.fx.stop(), rt = void 0;
  }, k.fx.timer = function (e) {
    k.timers.push(e), k.fx.start();
  }, k.fx.interval = 13, k.fx.start = function () {
    it || (it = !0, lt());
  }, k.fx.stop = function () {
    it = null;
  }, k.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, k.fn.delay = function (r, e) {
    return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);

      t.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, ot = E.createElement("input"), at = E.createElement("select").appendChild(E.createElement("option")), ot.type = "checkbox", y.checkOn = "" !== ot.value, y.optSelected = at.selected, (ot = E.createElement("input")).value = "t", ot.type = "radio", y.radioValue = "t" === ot.value;
  var ht,
      gt = k.expr.attrHandle;
  k.fn.extend({
    attr: function attr(e, t) {
      return _(this, k.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        k.removeAttr(this, e);
      });
    }
  }), k.extend({
    attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(R);
      if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    }
  }), ht = {
    set: function set(e, t, n) {
      return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = gt[t] || k.find.attr;

    gt[t] = function (e, t, n) {
      var r,
          i,
          o = t.toLowerCase();
      return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i), r;
    };
  });
  var vt = /^(?:input|select|textarea|button)$/i,
      yt = /^(?:a|area)$/i;

  function mt(e) {
    return (e.match(R) || []).join(" ");
  }

  function xt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function bt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || [];
  }

  k.fn.extend({
    prop: function prop(e, t) {
      return _(this, k.prop, e, t, 1 < arguments.length);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[k.propFix[e] || e];
      });
    }
  }), k.extend({
    prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = k.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), y.optSelected || (k.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    k.propFix[this.toLowerCase()] = this;
  }), k.fn.extend({
    addClass: function addClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        k(this).addClass(t.call(this, e, xt(this)));
      });
      if ((e = bt(t)).length) while (n = this[u++]) {
        if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }

          i !== (s = mt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        k(this).removeClass(t.call(this, e, xt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = bt(t)).length) while (n = this[u++]) {
        if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            while (-1 < r.indexOf(" " + o + " ")) {
              r = r.replace(" " + o + " ", " ");
            }
          }

          i !== (s = mt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(i, t) {
      var o = _typeof(i),
          a = "string" === o || Array.isArray(i);

      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        k(this).toggleClass(i.call(this, e, xt(this), t), t);
      }) : this.each(function () {
        var e, t, n, r;

        if (a) {
          t = 0, n = k(this), r = bt(i);

          while (e = r[t++]) {
            n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
          }
        } else void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) {
        if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t)) return !0;
      }

      return !1;
    }
  });
  var wt = /\r/g;
  k.fn.extend({
    val: function val(n) {
      var r,
          e,
          i,
          t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0;
    }
  }), k.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = k.find.attr(e, "value");
          return null != t ? t : mt(k.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
              if (t = k(n).val(), a) return t;
              s.push(t);
            }
          }

          return s;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = k.makeArray(t),
              a = i.length;

          while (a--) {
            ((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), k.each(["radio", "checkbox"], function () {
    k.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t);
      }
    }, y.checkOn || (k.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), y.focusin = "onfocusin" in C;

  var Tt = /^(?:focusinfocus|focusoutblur)$/,
      Ct = function Ct(e) {
    e.stopPropagation();
  };

  k.extend(k.event, {
    trigger: function trigger(e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p = [n || E],
          d = v.call(e, "type") ? e.type : e,
          h = v.call(e, "namespace") ? e.namespace.split(".") : [];

      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) {
            p.push(o), a = o;
          }

          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }

        i = 0;

        while ((o = p[i++]) && !e.isPropagationStopped()) {
          f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        }

        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Ct), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ct), k.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = k.extend(new k.Event(), n, {
        type: e,
        isSimulated: !0
      });
      k.event.trigger(r, null, t);
    }
  }), k.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        k.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return k.event.trigger(e, t, n, !0);
    }
  }), y.focusin || k.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function i(e) {
      k.event.simulate(r, e.target, k.event.fix(e));
    };

    k.event.special[r] = {
      setup: function setup() {
        var e = this.ownerDocument || this,
            t = Q.access(e, r);
        t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1);
      },
      teardown: function teardown() {
        var e = this.ownerDocument || this,
            t = Q.access(e, r) - 1;
        t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r));
      }
    };
  });
  var Et = C.location,
      kt = Date.now(),
      St = /\?/;

  k.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;

    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }

    return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t;
  };

  var Nt = /\[\]$/,
      At = /\r?\n/g,
      Dt = /^(?:submit|button|image|reset|file)$/i,
      jt = /^(?:input|select|textarea|keygen)/i;

  function qt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) k.each(e, function (e, t) {
      r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== w(e)) i(n, e);else for (t in e) {
      qt(n + "[" + t + "]", e[t], r, i);
    }
  }

  k.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = m(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      qt(n, e[n], t, i);
    }
    return r.join("&");
  }, k.fn.extend({
    serialize: function serialize() {
      return k.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = k.prop(this, "elements");
        return e ? k.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = k(this).val();
        return null == n ? null : Array.isArray(n) ? k.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(At, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(At, "\r\n")
        };
      }).get();
    }
  });
  var Lt = /%20/g,
      Ht = /#.*$/,
      Ot = /([?&])_=[^&]*/,
      Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Rt = /^(?:GET|HEAD)$/,
      Mt = /^\/\//,
      It = {},
      Wt = {},
      $t = "*/".concat("*"),
      Ft = E.createElement("a");

  function Bt(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
          r = 0,
          i = e.toLowerCase().match(R) || [];
      if (m(t)) while (n = i[r++]) {
        "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
      }
    };
  }

  function _t(t, i, o, a) {
    var s = {},
        u = t === Wt;

    function l(e) {
      var r;
      return s[e] = !0, k.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }

    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }

  function zt(e, t) {
    var n,
        r,
        i = k.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }

    return r && k.extend(!0, e, r), e;
  }

  Ft.href = Et.href, k.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Et.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": $t,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": k.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e);
    },
    ajaxPrefilter: Bt(It),
    ajaxTransport: Bt(Wt),
    ajax: function ajax(e, t) {
      "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
      var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = k.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
          x = k.Deferred(),
          b = k.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (h) {
            if (!n) {
              n = {};

              while (t = Pt.exec(p)) {
                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
            }

            t = n[e.toLowerCase() + " "];
          }

          return null == t ? null : t.join(", ");
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return h ? p : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return null == h && (v.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (h) T.always(e[T.status]);else for (t in e) {
            w[t] = [w[t], e[t]];
          }
          return this;
        },
        abort: function abort(e) {
          var t = e || u;
          return c && c.abort(t), l(0, t), this;
        }
      };

      if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""], null == v.crossDomain) {
        r = E.createElement("a");

        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }

      if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)), _t(It, v, t, T), h) return T;

      for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), f = v.url.replace(Ht, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Ot, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o), v.url = f + o), v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers) {
        T.setRequestHeader(i, v.headers[i]);
      }

      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();

      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = _t(Wt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));

        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");

      function l(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
              i,
              o,
              a,
              s = e.contents,
              u = e.dataTypes;

          while ("*" === u[0]) {
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          }

          if (r) for (i in s) {
            if (s[i] && s[i].test(r)) {
              u.unshift(i);
              break;
            }
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }

              a || (a = i);
            }

            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), s = function (e, t, n, r) {
          var i,
              o,
              a,
              s,
              u,
              l = {},
              c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) {
            l[a.toLowerCase()] = e.converters[a];
          }
          o = c.shift();

          while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
              if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                  break;
                }
              }
              if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o
                };
              }
            }
          }

          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --k.active || k.event.trigger("ajaxStop")));
      }

      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return k.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return k.get(e, void 0, t, "script");
    }
  }), k.each(["get", "post"], function (e, i) {
    k[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, k.isPlainObject(e) && e));
    };
  }), k._evalUrl = function (e, t) {
    return k.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(e) {
        k.globalEval(e, t);
      }
    });
  }, k.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(n) {
      return m(n) ? this.each(function (e) {
        k(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = k(this),
            t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function wrap(t) {
      var n = m(t);
      return this.each(function (e) {
        k(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        k(this).replaceWith(this.childNodes);
      }), this;
    }
  }), k.expr.pseudos.hidden = function (e) {
    return !k.expr.pseudos.visible(e);
  }, k.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, k.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  };
  var Ut = {
    0: 200,
    1223: 204
  },
      Xt = k.ajaxSettings.xhr();
  y.cors = !!Xt && "withCredentials" in Xt, y.ajax = Xt = !!Xt, k.ajaxTransport(function (i) {
    var _o, a;

    if (y.cors || Xt && !i.crossDomain) return {
      send: function send(e, t) {
        var n,
            r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) {
          r[n] = i.xhrFields[n];
        }

        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) {
          r.setRequestHeader(n, e[n]);
        }

        _o = function o(e) {
          return function () {
            _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = _o(), a = r.onerror = r.ontimeout = _o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            _o && a();
          });
        }, _o = _o("abort");

        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (_o) throw e;
        }
      },
      abort: function abort() {
        _o && _o();
      }
    };
  }), k.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), k.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return k.globalEval(e), e;
      }
    }
  }), k.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), k.ajaxTransport("script", function (n) {
    var r, _i;

    if (n.crossDomain || n.scriptAttrs) return {
      send: function send(e, t) {
        r = k("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", _i = function i(e) {
          r.remove(), _i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), E.head.appendChild(r[0]);
      },
      abort: function abort() {
        _i && _i();
      }
    };
  });
  var Vt,
      Gt = [],
      Yt = /(=)\?(?=&|$)|\?\?/;
  k.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Gt.pop() || k.expando + "_" + kt++;
      return this[e] = !0, e;
    }
  }), k.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
        i,
        o,
        a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || k.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), k.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes)));
    var r, i, o;
  }, k.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return -1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), 0 < a.length && k.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    k.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), k.expr.pseudos.animated = function (t) {
    return k.grep(k.timers, function (e) {
      return t === e.elem;
    }).length;
  }, k.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l = k.css(e, "position"),
          c = k(e),
          f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
    }
  }, k.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        k.offset.setOffset(this, t, e);
      });
      var e,
          n,
          r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position")) {
            e = e.parentNode;
          }

          e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - k.css(r, "marginTop", !0),
          left: t.left - i.left - k.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === k.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || ie;
      });
    }
  }), k.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;

    k.fn[t] = function (e) {
      return _(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), k.each(["top", "left"], function (e, n) {
    k.cssHooks[n] = ze(y.pixelPosition, function (e, t) {
      if (t) return t = _e(e, n), $e.test(t) ? k(e).position()[n] + "px" : t;
    });
  }), k.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    k.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      k.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
        return _(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    k.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  }), k.fn.extend({
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), k.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    }
  }), k.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function i() {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || k.guid++, i;
  }, k.holdReady = function (e) {
    e ? k.readyWait++ : k.ready(!0);
  }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = m, k.isWindow = x, k.camelCase = V, k.type = w, k.now = Date.now, k.isNumeric = function (e) {
    var t = k.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return k;
  });
  var Qt = C.jQuery,
      Jt = C.$;
  return k.noConflict = function (e) {
    return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k;
  }, e || (C.jQuery = C.$ = k), k;
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = t || self).bootstrap = {}, t.jQuery, t.Popper);
}(void 0, function (t, g, u) {
  "use strict";

  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }

  function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }

  function e(e, t) {
    var n = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t && (i = i.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, i);
    }

    return n;
  }

  function l(o) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? e(Object(r), !0).forEach(function (t) {
        var e, n, i;
        e = o, i = r[n = t], n in e ? Object.defineProperty(e, n, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[n] = i;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : e(Object(r)).forEach(function (t) {
        Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }

    return o;
  }

  g = g && g.hasOwnProperty("default") ? g["default"] : g, u = u && u.hasOwnProperty("default") ? u["default"] : u;
  var n = "transitionend";

  function o(t) {
    var e = this,
        n = !1;
    return g(this).one(_.TRANSITION_END, function () {
      n = !0;
    }), setTimeout(function () {
      n || _.triggerTransitionEnd(e);
    }, t), this;
  }

  var _ = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function getUID(t) {
      for (; t += ~~(1e6 * Math.random()), document.getElementById(t);) {
        ;
      }

      return t;
    },
    getSelectorFromElement: function getSelectorFromElement(t) {
      var e = t.getAttribute("data-target");

      if (!e || "#" === e) {
        var n = t.getAttribute("href");
        e = n && "#" !== n ? n.trim() : "";
      }

      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(t) {
      if (!t) return 0;
      var e = g(t).css("transition-duration"),
          n = g(t).css("transition-delay"),
          i = parseFloat(e),
          o = parseFloat(n);
      return i || o ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0;
    },
    reflow: function reflow(t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(t) {
      g(t).trigger(n);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(n);
    },
    isElement: function isElement(t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(t, e, n) {
      for (var i in n) {
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
              r = e[i],
              s = r && _.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
          if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".');
        }
      }

      var a;
    },
    findShadowRoot: function findShadowRoot(t) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null;
      var e = t.getRootNode();
      return e instanceof ShadowRoot ? e : null;
    },
    jQueryDetection: function jQueryDetection() {
      if ("undefined" == typeof g) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
      var t = g.fn.jquery.split(" ")[0].split(".");
      if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    }
  };
  _.jQueryDetection(), g.fn.emulateTransitionEnd = o, g.event.special[_.TRANSITION_END] = {
    bindType: n,
    delegateType: n,
    handle: function handle(t) {
      if (g(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
    }
  };

  var r = "alert",
      a = "bs.alert",
      c = "." + a,
      h = g.fn[r],
      f = {
    CLOSE: "close" + c,
    CLOSED: "closed" + c,
    CLICK_DATA_API: "click" + c + ".data-api"
  },
      d = "alert",
      m = "fade",
      p = "show",
      v = function () {
    function i(t) {
      this._element = t;
    }

    var t = i.prototype;
    return t.close = function (t) {
      var e = this._element;
      t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
    }, t.dispose = function () {
      g.removeData(this._element, a), this._element = null;
    }, t._getRootElement = function (t) {
      var e = _.getSelectorFromElement(t),
          n = !1;

      return e && (n = document.querySelector(e)), n = n || g(t).closest("." + d)[0];
    }, t._triggerCloseEvent = function (t) {
      var e = g.Event(f.CLOSE);
      return g(t).trigger(e), e;
    }, t._removeElement = function (e) {
      var n = this;

      if (g(e).removeClass(p), g(e).hasClass(m)) {
        var t = _.getTransitionDurationFromElement(e);

        g(e).one(_.TRANSITION_END, function (t) {
          return n._destroyElement(e, t);
        }).emulateTransitionEnd(t);
      } else this._destroyElement(e);
    }, t._destroyElement = function (t) {
      g(t).detach().trigger(f.CLOSED).remove();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this),
            e = t.data(a);
        e || (e = new i(this), t.data(a, e)), "close" === n && e[n](this);
      });
    }, i._handleDismiss = function (e) {
      return function (t) {
        t && t.preventDefault(), e.close(this);
      };
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }]), i;
  }();

  g(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', v._handleDismiss(new v())), g.fn[r] = v._jQueryInterface, g.fn[r].Constructor = v, g.fn[r].noConflict = function () {
    return g.fn[r] = h, v._jQueryInterface;
  };

  var y = "button",
      E = "bs.button",
      C = "." + E,
      T = ".data-api",
      b = g.fn[y],
      S = "active",
      D = "btn",
      I = "focus",
      w = '[data-toggle^="button"]',
      A = '[data-toggle="buttons"]',
      N = '[data-toggle="button"]',
      O = '[data-toggle="buttons"] .btn',
      k = 'input:not([type="hidden"])',
      P = ".active",
      L = ".btn",
      j = {
    CLICK_DATA_API: "click" + C + T,
    FOCUS_BLUR_DATA_API: "focus" + C + T + " blur" + C + T,
    LOAD_DATA_API: "load" + C + T
  },
      H = function () {
    function n(t) {
      this._element = t;
    }

    var t = n.prototype;
    return t.toggle = function () {
      var t = !0,
          e = !0,
          n = g(this._element).closest(A)[0];

      if (n) {
        var i = this._element.querySelector(k);

        if (i) {
          if ("radio" === i.type) {
            if (i.checked && this._element.classList.contains(S)) t = !1;else {
              var o = n.querySelector(P);
              o && g(o).removeClass(S);
            }
          } else "checkbox" === i.type ? "LABEL" === this._element.tagName && i.checked === this._element.classList.contains(S) && (t = !1) : t = !1;
          t && (i.checked = !this._element.classList.contains(S), g(i).trigger("change")), i.focus(), e = !1;
        }
      }

      this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)), t && g(this._element).toggleClass(S));
    }, t.dispose = function () {
      g.removeData(this._element, E), this._element = null;
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = g(this).data(E);
        t || (t = new n(this), g(this).data(E, t)), "toggle" === e && t[e]();
      });
    }, s(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }]), n;
  }();

  g(document).on(j.CLICK_DATA_API, w, function (t) {
    var e = t.target;
    if (g(e).hasClass(D) || (e = g(e).closest(L)[0]), !e || e.hasAttribute("disabled") || e.classList.contains("disabled")) t.preventDefault();else {
      var n = e.querySelector(k);
      if (n && (n.hasAttribute("disabled") || n.classList.contains("disabled"))) return void t.preventDefault();

      H._jQueryInterface.call(g(e), "toggle");
    }
  }).on(j.FOCUS_BLUR_DATA_API, w, function (t) {
    var e = g(t.target).closest(L)[0];
    g(e).toggleClass(I, /^focus(in)?$/.test(t.type));
  }), g(window).on(j.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(O)), e = 0, n = t.length; e < n; e++) {
      var i = t[e],
          o = i.querySelector(k);
      o.checked || o.hasAttribute("checked") ? i.classList.add(S) : i.classList.remove(S);
    }

    for (var r = 0, s = (t = [].slice.call(document.querySelectorAll(N))).length; r < s; r++) {
      var a = t[r];
      "true" === a.getAttribute("aria-pressed") ? a.classList.add(S) : a.classList.remove(S);
    }
  }), g.fn[y] = H._jQueryInterface, g.fn[y].Constructor = H, g.fn[y].noConflict = function () {
    return g.fn[y] = b, H._jQueryInterface;
  };

  var R = "carousel",
      x = "bs.carousel",
      F = "." + x,
      U = ".data-api",
      W = g.fn[R],
      q = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  },
      M = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      K = "next",
      Q = "prev",
      B = "left",
      V = "right",
      Y = {
    SLIDE: "slide" + F,
    SLID: "slid" + F,
    KEYDOWN: "keydown" + F,
    MOUSEENTER: "mouseenter" + F,
    MOUSELEAVE: "mouseleave" + F,
    TOUCHSTART: "touchstart" + F,
    TOUCHMOVE: "touchmove" + F,
    TOUCHEND: "touchend" + F,
    POINTERDOWN: "pointerdown" + F,
    POINTERUP: "pointerup" + F,
    DRAG_START: "dragstart" + F,
    LOAD_DATA_API: "load" + F + U,
    CLICK_DATA_API: "click" + F + U
  },
      z = "carousel",
      X = "active",
      $ = "slide",
      G = "carousel-item-right",
      J = "carousel-item-left",
      Z = "carousel-item-next",
      tt = "carousel-item-prev",
      et = "pointer-event",
      nt = ".active",
      it = ".active.carousel-item",
      ot = ".carousel-item",
      rt = ".carousel-item img",
      st = ".carousel-item-next, .carousel-item-prev",
      at = ".carousel-indicators",
      lt = "[data-slide], [data-slide-to]",
      ct = '[data-ride="carousel"]',
      ht = {
    TOUCH: "touch",
    PEN: "pen"
  },
      ut = function () {
    function r(t, e) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(at), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
    }

    var t = r.prototype;
    return t.next = function () {
      this._isSliding || this._slide(K);
    }, t.nextWhenVisible = function () {
      !document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next();
    }, t.prev = function () {
      this._isSliding || this._slide(Q);
    }, t.pause = function (t) {
      t || (this._isPaused = !0), this._element.querySelector(st) && (_.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, t.cycle = function (t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, t.to = function (t) {
      var e = this;
      this._activeElement = this._element.querySelector(it);

      var n = this._getItemIndex(this._activeElement);

      if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) g(this._element).one(Y.SLID, function () {
        return e.to(t);
      });else {
        if (n === t) return this.pause(), void this.cycle();
        var i = n < t ? K : Q;

        this._slide(i, this._items[t]);
      }
    }, t.dispose = function () {
      g(this._element).off(F), g.removeData(this._element, x), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, t._getConfig = function (t) {
      return t = l({}, q, {}, t), _.typeCheckConfig(R, t, M), t;
    }, t._handleSwipe = function () {
      var t = Math.abs(this.touchDeltaX);

      if (!(t <= 40)) {
        var e = t / this.touchDeltaX;
        (this.touchDeltaX = 0) < e && this.prev(), e < 0 && this.next();
      }
    }, t._addEventListeners = function () {
      var e = this;
      this._config.keyboard && g(this._element).on(Y.KEYDOWN, function (t) {
        return e._keydown(t);
      }), "hover" === this._config.pause && g(this._element).on(Y.MOUSEENTER, function (t) {
        return e.pause(t);
      }).on(Y.MOUSELEAVE, function (t) {
        return e.cycle(t);
      }), this._config.touch && this._addTouchEventListeners();
    }, t._addTouchEventListeners = function () {
      var e = this;

      if (this._touchSupported) {
        var n = function n(t) {
          e._pointerEvent && ht[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX);
        },
            i = function i(t) {
          e._pointerEvent && ht[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
            return e.cycle(t);
          }, 500 + e._config.interval));
        };

        g(this._element.querySelectorAll(rt)).on(Y.DRAG_START, function (t) {
          return t.preventDefault();
        }), this._pointerEvent ? (g(this._element).on(Y.POINTERDOWN, function (t) {
          return n(t);
        }), g(this._element).on(Y.POINTERUP, function (t) {
          return i(t);
        }), this._element.classList.add(et)) : (g(this._element).on(Y.TOUCHSTART, function (t) {
          return n(t);
        }), g(this._element).on(Y.TOUCHMOVE, function (t) {
          return function (t) {
            t.originalEvent.touches && 1 < t.originalEvent.touches.length ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX;
          }(t);
        }), g(this._element).on(Y.TOUCHEND, function (t) {
          return i(t);
        }));
      }
    }, t._keydown = function (t) {
      if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
        case 37:
          t.preventDefault(), this.prev();
          break;

        case 39:
          t.preventDefault(), this.next();
      }
    }, t._getItemIndex = function (t) {
      return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(ot)) : [], this._items.indexOf(t);
    }, t._getItemByDirection = function (t, e) {
      var n = t === K,
          i = t === Q,
          o = this._getItemIndex(e),
          r = this._items.length - 1;

      if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
      var s = (o + (t === Q ? -1 : 1)) % this._items.length;
      return -1 == s ? this._items[this._items.length - 1] : this._items[s];
    }, t._triggerSlideEvent = function (t, e) {
      var n = this._getItemIndex(t),
          i = this._getItemIndex(this._element.querySelector(it)),
          o = g.Event(Y.SLIDE, {
        relatedTarget: t,
        direction: e,
        from: i,
        to: n
      });

      return g(this._element).trigger(o), o;
    }, t._setActiveIndicatorElement = function (t) {
      if (this._indicatorsElement) {
        var e = [].slice.call(this._indicatorsElement.querySelectorAll(nt));
        g(e).removeClass(X);

        var n = this._indicatorsElement.children[this._getItemIndex(t)];

        n && g(n).addClass(X);
      }
    }, t._slide = function (t, e) {
      var n,
          i,
          o,
          r = this,
          s = this._element.querySelector(it),
          a = this._getItemIndex(s),
          l = e || s && this._getItemByDirection(t, s),
          c = this._getItemIndex(l),
          h = Boolean(this._interval);

      if (o = t === K ? (n = J, i = Z, B) : (n = G, i = tt, V), l && g(l).hasClass(X)) this._isSliding = !1;else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
        this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
        var u = g.Event(Y.SLID, {
          relatedTarget: l,
          direction: o,
          from: a,
          to: c
        });

        if (g(this._element).hasClass($)) {
          g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n);
          var f = parseInt(l.getAttribute("data-interval"), 10);
          f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = f) : this._config.interval = this._config.defaultInterval || this._config.interval;

          var d = _.getTransitionDurationFromElement(s);

          g(s).one(_.TRANSITION_END, function () {
            g(l).removeClass(n + " " + i).addClass(X), g(s).removeClass(X + " " + i + " " + n), r._isSliding = !1, setTimeout(function () {
              return g(r._element).trigger(u);
            }, 0);
          }).emulateTransitionEnd(d);
        } else g(s).removeClass(X), g(l).addClass(X), this._isSliding = !1, g(this._element).trigger(u);

        h && this.cycle();
      }
    }, r._jQueryInterface = function (i) {
      return this.each(function () {
        var t = g(this).data(x),
            e = l({}, q, {}, g(this).data());
        "object" == _typeof(i) && (e = l({}, e, {}, i));
        var n = "string" == typeof i ? i : e.slide;
        if (t || (t = new r(this, e), g(this).data(x, t)), "number" == typeof i) t.to(i);else if ("string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        } else e.interval && e.ride && (t.pause(), t.cycle());
      });
    }, r._dataApiClickHandler = function (t) {
      var e = _.getSelectorFromElement(this);

      if (e) {
        var n = g(e)[0];

        if (n && g(n).hasClass(z)) {
          var i = l({}, g(n).data(), {}, g(this).data()),
              o = this.getAttribute("data-slide-to");
          o && (i.interval = !1), r._jQueryInterface.call(g(n), i), o && g(n).data(x).to(o), t.preventDefault();
        }
      }
    }, s(r, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return q;
      }
    }]), r;
  }();

  g(document).on(Y.CLICK_DATA_API, lt, ut._dataApiClickHandler), g(window).on(Y.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(ct)), e = 0, n = t.length; e < n; e++) {
      var i = g(t[e]);

      ut._jQueryInterface.call(i, i.data());
    }
  }), g.fn[R] = ut._jQueryInterface, g.fn[R].Constructor = ut, g.fn[R].noConflict = function () {
    return g.fn[R] = W, ut._jQueryInterface;
  };

  var ft = "collapse",
      dt = "bs.collapse",
      gt = "." + dt,
      _t = g.fn[ft],
      mt = {
    toggle: !0,
    parent: ""
  },
      pt = {
    toggle: "boolean",
    parent: "(string|element)"
  },
      vt = {
    SHOW: "show" + gt,
    SHOWN: "shown" + gt,
    HIDE: "hide" + gt,
    HIDDEN: "hidden" + gt,
    CLICK_DATA_API: "click" + gt + ".data-api"
  },
      yt = "show",
      Et = "collapse",
      Ct = "collapsing",
      Tt = "collapsed",
      bt = "width",
      St = "height",
      Dt = ".show, .collapsing",
      It = '[data-toggle="collapse"]',
      wt = function () {
    function a(e, t) {
      this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));

      for (var n = [].slice.call(document.querySelectorAll(It)), i = 0, o = n.length; i < o; i++) {
        var r = n[i],
            s = _.getSelectorFromElement(r),
            a = [].slice.call(document.querySelectorAll(s)).filter(function (t) {
          return t === e;
        });

        null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r));
      }

      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }

    var t = a.prototype;
    return t.toggle = function () {
      g(this._element).hasClass(yt) ? this.hide() : this.show();
    }, t.show = function () {
      var t,
          e,
          n = this;

      if (!this._isTransitioning && !g(this._element).hasClass(yt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Dt)).filter(function (t) {
        return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(Et);
      })).length && (t = null), !(t && (e = g(t).not(this._selector).data(dt)) && e._isTransitioning))) {
        var i = g.Event(vt.SHOW);

        if (g(this._element).trigger(i), !i.isDefaultPrevented()) {
          t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"), e || g(t).data(dt, null));

          var o = this._getDimension();

          g(this._element).removeClass(Et).addClass(Ct), this._element.style[o] = 0, this._triggerArray.length && g(this._triggerArray).removeClass(Tt).attr("aria-expanded", !0), this.setTransitioning(!0);

          var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
              s = _.getTransitionDurationFromElement(this._element);

          g(this._element).one(_.TRANSITION_END, function () {
            g(n._element).removeClass(Ct).addClass(Et).addClass(yt), n._element.style[o] = "", n.setTransitioning(!1), g(n._element).trigger(vt.SHOWN);
          }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px";
        }
      }
    }, t.hide = function () {
      var t = this;

      if (!this._isTransitioning && g(this._element).hasClass(yt)) {
        var e = g.Event(vt.HIDE);

        if (g(this._element).trigger(e), !e.isDefaultPrevented()) {
          var n = this._getDimension();

          this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", _.reflow(this._element), g(this._element).addClass(Ct).removeClass(Et).removeClass(yt);
          var i = this._triggerArray.length;
          if (0 < i) for (var o = 0; o < i; o++) {
            var r = this._triggerArray[o],
                s = _.getSelectorFromElement(r);

            if (null !== s) g([].slice.call(document.querySelectorAll(s))).hasClass(yt) || g(r).addClass(Tt).attr("aria-expanded", !1);
          }
          this.setTransitioning(!0);
          this._element.style[n] = "";

          var a = _.getTransitionDurationFromElement(this._element);

          g(this._element).one(_.TRANSITION_END, function () {
            t.setTransitioning(!1), g(t._element).removeClass(Ct).addClass(Et).trigger(vt.HIDDEN);
          }).emulateTransitionEnd(a);
        }
      }
    }, t.setTransitioning = function (t) {
      this._isTransitioning = t;
    }, t.dispose = function () {
      g.removeData(this._element, dt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, t._getConfig = function (t) {
      return (t = l({}, mt, {}, t)).toggle = Boolean(t.toggle), _.typeCheckConfig(ft, t, pt), t;
    }, t._getDimension = function () {
      return g(this._element).hasClass(bt) ? bt : St;
    }, t._getParent = function () {
      var t,
          n = this;
      _.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
      var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
          i = [].slice.call(t.querySelectorAll(e));
      return g(i).each(function (t, e) {
        n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
      }), t;
    }, t._addAriaAndCollapsedClass = function (t, e) {
      var n = g(t).hasClass(yt);
      e.length && g(e).toggleClass(Tt, !n).attr("aria-expanded", n);
    }, a._getTargetFromElement = function (t) {
      var e = _.getSelectorFromElement(t);

      return e ? document.querySelector(e) : null;
    }, a._jQueryInterface = function (i) {
      return this.each(function () {
        var t = g(this),
            e = t.data(dt),
            n = l({}, mt, {}, t.data(), {}, "object" == _typeof(i) && i ? i : {});

        if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(dt, e)), "string" == typeof i) {
          if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
          e[i]();
        }
      });
    }, s(a, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return mt;
      }
    }]), a;
  }();

  g(document).on(vt.CLICK_DATA_API, It, function (t) {
    "A" === t.currentTarget.tagName && t.preventDefault();

    var n = g(this),
        e = _.getSelectorFromElement(this),
        i = [].slice.call(document.querySelectorAll(e));

    g(i).each(function () {
      var t = g(this),
          e = t.data(dt) ? "toggle" : n.data();

      wt._jQueryInterface.call(t, e);
    });
  }), g.fn[ft] = wt._jQueryInterface, g.fn[ft].Constructor = wt, g.fn[ft].noConflict = function () {
    return g.fn[ft] = _t, wt._jQueryInterface;
  };

  var At = "dropdown",
      Nt = "bs.dropdown",
      Ot = "." + Nt,
      kt = ".data-api",
      Pt = g.fn[At],
      Lt = new RegExp("38|40|27"),
      jt = {
    HIDE: "hide" + Ot,
    HIDDEN: "hidden" + Ot,
    SHOW: "show" + Ot,
    SHOWN: "shown" + Ot,
    CLICK: "click" + Ot,
    CLICK_DATA_API: "click" + Ot + kt,
    KEYDOWN_DATA_API: "keydown" + Ot + kt,
    KEYUP_DATA_API: "keyup" + Ot + kt
  },
      Ht = "disabled",
      Rt = "show",
      xt = "dropup",
      Ft = "dropright",
      Ut = "dropleft",
      Wt = "dropdown-menu-right",
      qt = "position-static",
      Mt = '[data-toggle="dropdown"]',
      Kt = ".dropdown form",
      Qt = ".dropdown-menu",
      Bt = ".navbar-nav",
      Vt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
      Yt = "top-start",
      zt = "top-end",
      Xt = "bottom-start",
      $t = "bottom-end",
      Gt = "right-start",
      Jt = "left-start",
      Zt = {
    offset: 0,
    flip: !0,
    boundary: "scrollParent",
    reference: "toggle",
    display: "dynamic",
    popperConfig: null
  },
      te = {
    offset: "(number|string|function)",
    flip: "boolean",
    boundary: "(string|element)",
    reference: "(string|element)",
    display: "string",
    popperConfig: "(null|object)"
  },
      ee = function () {
    function c(t, e) {
      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }

    var t = c.prototype;
    return t.toggle = function () {
      if (!this._element.disabled && !g(this._element).hasClass(Ht)) {
        var t = g(this._menu).hasClass(Rt);
        c._clearMenus(), t || this.show(!0);
      }
    }, t.show = function (t) {
      if (void 0 === t && (t = !1), !(this._element.disabled || g(this._element).hasClass(Ht) || g(this._menu).hasClass(Rt))) {
        var e = {
          relatedTarget: this._element
        },
            n = g.Event(jt.SHOW, e),
            i = c._getParentFromElement(this._element);

        if (g(i).trigger(n), !n.isDefaultPrevented()) {
          if (!this._inNavbar && t) {
            if ("undefined" == typeof u) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
            var o = this._element;
            "parent" === this._config.reference ? o = i : _.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && g(i).addClass(qt), this._popper = new u(o, this._menu, this._getPopperConfig());
          }

          "ontouchstart" in document.documentElement && 0 === g(i).closest(Bt).length && g(document.body).children().on("mouseover", null, g.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), g(this._menu).toggleClass(Rt), g(i).toggleClass(Rt).trigger(g.Event(jt.SHOWN, e));
        }
      }
    }, t.hide = function () {
      if (!this._element.disabled && !g(this._element).hasClass(Ht) && g(this._menu).hasClass(Rt)) {
        var t = {
          relatedTarget: this._element
        },
            e = g.Event(jt.HIDE, t),
            n = c._getParentFromElement(this._element);

        g(n).trigger(e), e.isDefaultPrevented() || (this._popper && this._popper.destroy(), g(this._menu).toggleClass(Rt), g(n).toggleClass(Rt).trigger(g.Event(jt.HIDDEN, t)));
      }
    }, t.dispose = function () {
      g.removeData(this._element, Nt), g(this._element).off(Ot), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
    }, t.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, t._addEventListeners = function () {
      var e = this;
      g(this._element).on(jt.CLICK, function (t) {
        t.preventDefault(), t.stopPropagation(), e.toggle();
      });
    }, t._getConfig = function (t) {
      return t = l({}, this.constructor.Default, {}, g(this._element).data(), {}, t), _.typeCheckConfig(At, t, this.constructor.DefaultType), t;
    }, t._getMenuElement = function () {
      if (!this._menu) {
        var t = c._getParentFromElement(this._element);

        t && (this._menu = t.querySelector(Qt));
      }

      return this._menu;
    }, t._getPlacement = function () {
      var t = g(this._element.parentNode),
          e = Xt;
      return t.hasClass(xt) ? (e = Yt, g(this._menu).hasClass(Wt) && (e = zt)) : t.hasClass(Ft) ? e = Gt : t.hasClass(Ut) ? e = Jt : g(this._menu).hasClass(Wt) && (e = $t), e;
    }, t._detectNavbar = function () {
      return 0 < g(this._element).closest(".navbar").length;
    }, t._getOffset = function () {
      var e = this,
          t = {};
      return "function" == typeof this._config.offset ? t.fn = function (t) {
        return t.offsets = l({}, t.offsets, {}, e._config.offset(t.offsets, e._element) || {}), t;
      } : t.offset = this._config.offset, t;
    }, t._getPopperConfig = function () {
      var t = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      };
      return "static" === this._config.display && (t.modifiers.applyStyle = {
        enabled: !1
      }), l({}, t, {}, this._config.popperConfig);
    }, c._jQueryInterface = function (e) {
      return this.each(function () {
        var t = g(this).data(Nt);

        if (t || (t = new c(this, "object" == _typeof(e) ? e : null), g(this).data(Nt, t)), "string" == typeof e) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
          t[e]();
        }
      });
    }, c._clearMenus = function (t) {
      if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = [].slice.call(document.querySelectorAll(Mt)), n = 0, i = e.length; n < i; n++) {
        var o = c._getParentFromElement(e[n]),
            r = g(e[n]).data(Nt),
            s = {
          relatedTarget: e[n]
        };

        if (t && "click" === t.type && (s.clickEvent = t), r) {
          var a = r._menu;

          if (g(o).hasClass(Rt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && g.contains(o, t.target))) {
            var l = g.Event(jt.HIDE, s);
            g(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), e[n].setAttribute("aria-expanded", "false"), r._popper && r._popper.destroy(), g(a).removeClass(Rt), g(o).removeClass(Rt).trigger(g.Event(jt.HIDDEN, s)));
          }
        }
      }
    }, c._getParentFromElement = function (t) {
      var e,
          n = _.getSelectorFromElement(t);

      return n && (e = document.querySelector(n)), e || t.parentNode;
    }, c._dataApiKeydownHandler = function (t) {
      if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || g(t.target).closest(Qt).length)) : Lt.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !g(this).hasClass(Ht))) {
        var e = c._getParentFromElement(this),
            n = g(e).hasClass(Rt);

        if (n || 27 !== t.which) if (n && (!n || 27 !== t.which && 32 !== t.which)) {
          var i = [].slice.call(e.querySelectorAll(Vt)).filter(function (t) {
            return g(t).is(":visible");
          });

          if (0 !== i.length) {
            var o = i.indexOf(t.target);
            38 === t.which && 0 < o && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus();
          }
        } else {
          if (27 === t.which) {
            var r = e.querySelector(Mt);
            g(r).trigger("focus");
          }

          g(this).trigger("click");
        }
      }
    }, s(c, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return Zt;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return te;
      }
    }]), c;
  }();

  g(document).on(jt.KEYDOWN_DATA_API, Mt, ee._dataApiKeydownHandler).on(jt.KEYDOWN_DATA_API, Qt, ee._dataApiKeydownHandler).on(jt.CLICK_DATA_API + " " + jt.KEYUP_DATA_API, ee._clearMenus).on(jt.CLICK_DATA_API, Mt, function (t) {
    t.preventDefault(), t.stopPropagation(), ee._jQueryInterface.call(g(this), "toggle");
  }).on(jt.CLICK_DATA_API, Kt, function (t) {
    t.stopPropagation();
  }), g.fn[At] = ee._jQueryInterface, g.fn[At].Constructor = ee, g.fn[At].noConflict = function () {
    return g.fn[At] = Pt, ee._jQueryInterface;
  };

  var ne = "modal",
      ie = "bs.modal",
      oe = "." + ie,
      re = g.fn[ne],
      se = {
    backdrop: !0,
    keyboard: !0,
    focus: !0,
    show: !0
  },
      ae = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean",
    show: "boolean"
  },
      le = {
    HIDE: "hide" + oe,
    HIDE_PREVENTED: "hidePrevented" + oe,
    HIDDEN: "hidden" + oe,
    SHOW: "show" + oe,
    SHOWN: "shown" + oe,
    FOCUSIN: "focusin" + oe,
    RESIZE: "resize" + oe,
    CLICK_DISMISS: "click.dismiss" + oe,
    KEYDOWN_DISMISS: "keydown.dismiss" + oe,
    MOUSEUP_DISMISS: "mouseup.dismiss" + oe,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + oe,
    CLICK_DATA_API: "click" + oe + ".data-api"
  },
      ce = "modal-dialog-scrollable",
      he = "modal-scrollbar-measure",
      ue = "modal-backdrop",
      fe = "modal-open",
      de = "fade",
      ge = "show",
      _e = "modal-static",
      me = ".modal-dialog",
      pe = ".modal-body",
      ve = '[data-toggle="modal"]',
      ye = '[data-dismiss="modal"]',
      Ee = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      Ce = ".sticky-top",
      Te = function () {
    function o(t, e) {
      this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(me), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
    }

    var t = o.prototype;
    return t.toggle = function (t) {
      return this._isShown ? this.hide() : this.show(t);
    }, t.show = function (t) {
      var e = this;

      if (!this._isShown && !this._isTransitioning) {
        g(this._element).hasClass(de) && (this._isTransitioning = !0);
        var n = g.Event(le.SHOW, {
          relatedTarget: t
        });
        g(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), g(this._element).on(le.CLICK_DISMISS, ye, function (t) {
          return e.hide(t);
        }), g(this._dialog).on(le.MOUSEDOWN_DISMISS, function () {
          g(e._element).one(le.MOUSEUP_DISMISS, function (t) {
            g(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return e._showElement(t);
        }));
      }
    }, t.hide = function (t) {
      var e = this;

      if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
        var n = g.Event(le.HIDE);

        if (g(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
          this._isShown = !1;
          var i = g(this._element).hasClass(de);

          if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), g(document).off(le.FOCUSIN), g(this._element).removeClass(ge), g(this._element).off(le.CLICK_DISMISS), g(this._dialog).off(le.MOUSEDOWN_DISMISS), i) {
            var o = _.getTransitionDurationFromElement(this._element);

            g(this._element).one(_.TRANSITION_END, function (t) {
              return e._hideModal(t);
            }).emulateTransitionEnd(o);
          } else this._hideModal();
        }
      }
    }, t.dispose = function () {
      [window, this._element, this._dialog].forEach(function (t) {
        return g(t).off(oe);
      }), g(document).off(le.FOCUSIN), g.removeData(this._element, ie), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
    }, t.handleUpdate = function () {
      this._adjustDialog();
    }, t._getConfig = function (t) {
      return t = l({}, se, {}, t), _.typeCheckConfig(ne, t, ae), t;
    }, t._triggerBackdropTransition = function () {
      var t = this;

      if ("static" === this._config.backdrop) {
        var e = g.Event(le.HIDE_PREVENTED);
        if (g(this._element).trigger(e), e.defaultPrevented) return;

        this._element.classList.add(_e);

        var n = _.getTransitionDurationFromElement(this._element);

        g(this._element).one(_.TRANSITION_END, function () {
          t._element.classList.remove(_e);
        }).emulateTransitionEnd(n), this._element.focus();
      } else this.hide();
    }, t._showElement = function (t) {
      var e = this,
          n = g(this._element).hasClass(de),
          i = this._dialog ? this._dialog.querySelector(pe) : null;
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), g(this._dialog).hasClass(ce) && i ? i.scrollTop = 0 : this._element.scrollTop = 0, n && _.reflow(this._element), g(this._element).addClass(ge), this._config.focus && this._enforceFocus();

      function o() {
        e._config.focus && e._element.focus(), e._isTransitioning = !1, g(e._element).trigger(r);
      }

      var r = g.Event(le.SHOWN, {
        relatedTarget: t
      });

      if (n) {
        var s = _.getTransitionDurationFromElement(this._dialog);

        g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(s);
      } else o();
    }, t._enforceFocus = function () {
      var e = this;
      g(document).off(le.FOCUSIN).on(le.FOCUSIN, function (t) {
        document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus();
      });
    }, t._setEscapeEvent = function () {
      var e = this;
      this._isShown && this._config.keyboard ? g(this._element).on(le.KEYDOWN_DISMISS, function (t) {
        27 === t.which && e._triggerBackdropTransition();
      }) : this._isShown || g(this._element).off(le.KEYDOWN_DISMISS);
    }, t._setResizeEvent = function () {
      var e = this;
      this._isShown ? g(window).on(le.RESIZE, function (t) {
        return e.handleUpdate(t);
      }) : g(window).off(le.RESIZE);
    }, t._hideModal = function () {
      var t = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () {
        g(document.body).removeClass(fe), t._resetAdjustments(), t._resetScrollbar(), g(t._element).trigger(le.HIDDEN);
      });
    }, t._removeBackdrop = function () {
      this._backdrop && (g(this._backdrop).remove(), this._backdrop = null);
    }, t._showBackdrop = function (t) {
      var e = this,
          n = g(this._element).hasClass(de) ? de : "";

      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = ue, n && this._backdrop.classList.add(n), g(this._backdrop).appendTo(document.body), g(this._element).on(le.CLICK_DISMISS, function (t) {
          e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && e._triggerBackdropTransition();
        }), n && _.reflow(this._backdrop), g(this._backdrop).addClass(ge), !t) return;
        if (!n) return void t();

        var i = _.getTransitionDurationFromElement(this._backdrop);

        g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i);
      } else if (!this._isShown && this._backdrop) {
        g(this._backdrop).removeClass(ge);

        var o = function o() {
          e._removeBackdrop(), t && t();
        };

        if (g(this._element).hasClass(de)) {
          var r = _.getTransitionDurationFromElement(this._backdrop);

          g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
        } else o();
      } else t && t();
    }, t._adjustDialog = function () {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, t._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, t._checkScrollbar = function () {
      var t = document.body.getBoundingClientRect();
      this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, t._setScrollbar = function () {
      var o = this;

      if (this._isBodyOverflowing) {
        var t = [].slice.call(document.querySelectorAll(Ee)),
            e = [].slice.call(document.querySelectorAll(Ce));
        g(t).each(function (t, e) {
          var n = e.style.paddingRight,
              i = g(e).css("padding-right");
          g(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px");
        }), g(e).each(function (t, e) {
          var n = e.style.marginRight,
              i = g(e).css("margin-right");
          g(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px");
        });
        var n = document.body.style.paddingRight,
            i = g(document.body).css("padding-right");
        g(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
      }

      g(document.body).addClass(fe);
    }, t._resetScrollbar = function () {
      var t = [].slice.call(document.querySelectorAll(Ee));
      g(t).each(function (t, e) {
        var n = g(e).data("padding-right");
        g(e).removeData("padding-right"), e.style.paddingRight = n || "";
      });
      var e = [].slice.call(document.querySelectorAll("" + Ce));
      g(e).each(function (t, e) {
        var n = g(e).data("margin-right");
        "undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right");
      });
      var n = g(document.body).data("padding-right");
      g(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "";
    }, t._getScrollbarWidth = function () {
      var t = document.createElement("div");
      t.className = he, document.body.appendChild(t);
      var e = t.getBoundingClientRect().width - t.clientWidth;
      return document.body.removeChild(t), e;
    }, o._jQueryInterface = function (n, i) {
      return this.each(function () {
        var t = g(this).data(ie),
            e = l({}, se, {}, g(this).data(), {}, "object" == _typeof(n) && n ? n : {});

        if (t || (t = new o(this, e), g(this).data(ie, t)), "string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n](i);
        } else e.show && t.show(i);
      });
    }, s(o, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return se;
      }
    }]), o;
  }();

  g(document).on(le.CLICK_DATA_API, ve, function (t) {
    var e,
        n = this,
        i = _.getSelectorFromElement(this);

    i && (e = document.querySelector(i));
    var o = g(e).data(ie) ? "toggle" : l({}, g(e).data(), {}, g(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
    var r = g(e).one(le.SHOW, function (t) {
      t.isDefaultPrevented() || r.one(le.HIDDEN, function () {
        g(n).is(":visible") && n.focus();
      });
    });

    Te._jQueryInterface.call(g(e), o, this);
  }), g.fn[ne] = Te._jQueryInterface, g.fn[ne].Constructor = Te, g.fn[ne].noConflict = function () {
    return g.fn[ne] = re, Te._jQueryInterface;
  };
  var be = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
      Se = {
    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  },
      De = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      Ie = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

  function we(t, r, e) {
    if (0 === t.length) return t;
    if (e && "function" == typeof e) return e(t);

    for (var n = new window.DOMParser().parseFromString(t, "text/html"), s = Object.keys(r), a = [].slice.call(n.body.querySelectorAll("*")), i = function i(t) {
      var e = a[t],
          n = e.nodeName.toLowerCase();
      if (-1 === s.indexOf(e.nodeName.toLowerCase())) return e.parentNode.removeChild(e), "continue";
      var i = [].slice.call(e.attributes),
          o = [].concat(r["*"] || [], r[n] || []);
      i.forEach(function (t) {
        !function (t, e) {
          var n = t.nodeName.toLowerCase();
          if (-1 !== e.indexOf(n)) return -1 === be.indexOf(n) || Boolean(t.nodeValue.match(De) || t.nodeValue.match(Ie));

          for (var i = e.filter(function (t) {
            return t instanceof RegExp;
          }), o = 0, r = i.length; o < r; o++) {
            if (n.match(i[o])) return !0;
          }

          return !1;
        }(t, o) && e.removeAttribute(t.nodeName);
      });
    }, o = 0, l = a.length; o < l; o++) {
      i(o);
    }

    return n.body.innerHTML;
  }

  var Ae = "tooltip",
      Ne = "bs.tooltip",
      Oe = "." + Ne,
      ke = g.fn[Ae],
      Pe = "bs-tooltip",
      Le = new RegExp("(^|\\s)" + Pe + "\\S+", "g"),
      je = ["sanitize", "whiteList", "sanitizeFn"],
      He = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(number|string|function)",
    container: "(string|element|boolean)",
    fallbackPlacement: "(string|array)",
    boundary: "(string|element)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    whiteList: "object",
    popperConfig: "(null|object)"
  },
      Re = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: "right",
    BOTTOM: "bottom",
    LEFT: "left"
  },
      xe = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: 0,
    container: !1,
    fallbackPlacement: "flip",
    boundary: "scrollParent",
    sanitize: !0,
    sanitizeFn: null,
    whiteList: Se,
    popperConfig: null
  },
      Fe = "show",
      Ue = "out",
      We = {
    HIDE: "hide" + Oe,
    HIDDEN: "hidden" + Oe,
    SHOW: "show" + Oe,
    SHOWN: "shown" + Oe,
    INSERTED: "inserted" + Oe,
    CLICK: "click" + Oe,
    FOCUSIN: "focusin" + Oe,
    FOCUSOUT: "focusout" + Oe,
    MOUSEENTER: "mouseenter" + Oe,
    MOUSELEAVE: "mouseleave" + Oe
  },
      qe = "fade",
      Me = "show",
      Ke = ".tooltip-inner",
      Qe = ".arrow",
      Be = "hover",
      Ve = "focus",
      Ye = "click",
      ze = "manual",
      Xe = function () {
    function i(t, e) {
      if ("undefined" == typeof u) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
      this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
    }

    var t = i.prototype;
    return t.enable = function () {
      this._isEnabled = !0;
    }, t.disable = function () {
      this._isEnabled = !1;
    }, t.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, t.toggle = function (t) {
      if (this._isEnabled) if (t) {
        var e = this.constructor.DATA_KEY,
            n = g(t.currentTarget).data(e);
        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (g(this.getTipElement()).hasClass(Me)) return void this._leave(null, this);

        this._enter(null, this);
      }
    }, t.dispose = function () {
      clearTimeout(this._timeout), g.removeData(this.element, this.constructor.DATA_KEY), g(this.element).off(this.constructor.EVENT_KEY), g(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && g(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, t.show = function () {
      var e = this;
      if ("none" === g(this.element).css("display")) throw new Error("Please use show on visible elements");
      var t = g.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        g(this.element).trigger(t);

        var n = _.findShadowRoot(this.element),
            i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);

        if (t.isDefaultPrevented() || !i) return;

        var o = this.getTipElement(),
            r = _.getUID(this.constructor.NAME);

        o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && g(o).addClass(qe);

        var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
            a = this._getAttachment(s);

        this.addAttachmentClass(a);

        var l = this._getContainer();

        g(o).data(this.constructor.DATA_KEY, this), g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l), g(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new u(this.element, o, this._getPopperConfig(a)), g(o).addClass(Me), "ontouchstart" in document.documentElement && g(document.body).children().on("mouseover", null, g.noop);

        var c = function c() {
          e.config.animation && e._fixTransition();
          var t = e._hoverState;
          e._hoverState = null, g(e.element).trigger(e.constructor.Event.SHOWN), t === Ue && e._leave(null, e);
        };

        if (g(this.tip).hasClass(qe)) {
          var h = _.getTransitionDurationFromElement(this.tip);

          g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h);
        } else c();
      }
    }, t.hide = function (t) {
      function e() {
        n._hoverState !== Fe && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), g(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t();
      }

      var n = this,
          i = this.getTipElement(),
          o = g.Event(this.constructor.Event.HIDE);

      if (g(this.element).trigger(o), !o.isDefaultPrevented()) {
        if (g(i).removeClass(Me), "ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), this._activeTrigger[Ye] = !1, this._activeTrigger[Ve] = !1, this._activeTrigger[Be] = !1, g(this.tip).hasClass(qe)) {
          var r = _.getTransitionDurationFromElement(i);

          g(i).one(_.TRANSITION_END, e).emulateTransitionEnd(r);
        } else e();

        this._hoverState = "";
      }
    }, t.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, t.isWithContent = function () {
      return Boolean(this.getTitle());
    }, t.addAttachmentClass = function (t) {
      g(this.getTipElement()).addClass(Pe + "-" + t);
    }, t.getTipElement = function () {
      return this.tip = this.tip || g(this.config.template)[0], this.tip;
    }, t.setContent = function () {
      var t = this.getTipElement();
      this.setElementContent(g(t.querySelectorAll(Ke)), this.getTitle()), g(t).removeClass(qe + " " + Me);
    }, t.setElementContent = function (t, e) {
      "object" != _typeof(e) || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = we(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text());
    }, t.getTitle = function () {
      var t = this.element.getAttribute("data-original-title");
      return t = t || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title);
    }, t._getPopperConfig = function (t) {
      var e = this;
      return l({}, {
        placement: t,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: Qe
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(t) {
          t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
        },
        onUpdate: function onUpdate(t) {
          return e._handlePopperPlacementChange(t);
        }
      }, {}, this.config.popperConfig);
    }, t._getOffset = function () {
      var e = this,
          t = {};
      return "function" == typeof this.config.offset ? t.fn = function (t) {
        return t.offsets = l({}, t.offsets, {}, e.config.offset(t.offsets, e.element) || {}), t;
      } : t.offset = this.config.offset, t;
    }, t._getContainer = function () {
      return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container);
    }, t._getAttachment = function (t) {
      return Re[t.toUpperCase()];
    }, t._setListeners = function () {
      var i = this;
      this.config.trigger.split(" ").forEach(function (t) {
        if ("click" === t) g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
          return i.toggle(t);
        });else if (t !== ze) {
          var e = t === Be ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
              n = t === Be ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
          g(i.element).on(e, i.config.selector, function (t) {
            return i._enter(t);
          }).on(n, i.config.selector, function (t) {
            return i._leave(t);
          });
        }
      }), this._hideModalHandler = function () {
        i.element && i.hide();
      }, g(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = l({}, this.config, {
        trigger: "manual",
        selector: ""
      }) : this._fixTitle();
    }, t._fixTitle = function () {
      var t = _typeof(this.element.getAttribute("data-original-title"));

      !this.element.getAttribute("title") && "string" == t || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, t._enter = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Ve : Be] = !0), g(e.getTipElement()).hasClass(Me) || e._hoverState === Fe ? e._hoverState = Fe : (clearTimeout(e._timeout), e._hoverState = Fe, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
        e._hoverState === Fe && e.show();
      }, e.config.delay.show) : e.show());
    }, t._leave = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Ve : Be] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = Ue, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
        e._hoverState === Ue && e.hide();
      }, e.config.delay.hide) : e.hide());
    }, t._isWithActiveTrigger = function () {
      for (var t in this._activeTrigger) {
        if (this._activeTrigger[t]) return !0;
      }

      return !1;
    }, t._getConfig = function (t) {
      var e = g(this.element).data();
      return Object.keys(e).forEach(function (t) {
        -1 !== je.indexOf(t) && delete e[t];
      }), "number" == typeof (t = l({}, this.constructor.Default, {}, e, {}, "object" == _typeof(t) && t ? t : {})).delay && (t.delay = {
        show: t.delay,
        hide: t.delay
      }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), _.typeCheckConfig(Ae, t, this.constructor.DefaultType), t.sanitize && (t.template = we(t.template, t.whiteList, t.sanitizeFn)), t;
    }, t._getDelegateConfig = function () {
      var t = {};
      if (this.config) for (var e in this.config) {
        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
      }
      return t;
    }, t._cleanTipClass = function () {
      var t = g(this.getTipElement()),
          e = t.attr("class").match(Le);
      null !== e && e.length && t.removeClass(e.join(""));
    }, t._handlePopperPlacementChange = function (t) {
      var e = t.instance;
      this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
    }, t._fixTransition = function () {
      var t = this.getTipElement(),
          e = this.config.animation;
      null === t.getAttribute("x-placement") && (g(t).removeClass(qe), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e);
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this).data(Ne),
            e = "object" == _typeof(n) && n;

        if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ne, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return xe;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Ae;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return Ne;
      }
    }, {
      key: "Event",
      get: function get() {
        return We;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return Oe;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return He;
      }
    }]), i;
  }();

  g.fn[Ae] = Xe._jQueryInterface, g.fn[Ae].Constructor = Xe, g.fn[Ae].noConflict = function () {
    return g.fn[Ae] = ke, Xe._jQueryInterface;
  };

  var $e = "popover",
      Ge = "bs.popover",
      Je = "." + Ge,
      Ze = g.fn[$e],
      tn = "bs-popover",
      en = new RegExp("(^|\\s)" + tn + "\\S+", "g"),
      nn = l({}, Xe.Default, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      on = l({}, Xe.DefaultType, {
    content: "(string|element|function)"
  }),
      rn = "fade",
      sn = "show",
      an = ".popover-header",
      ln = ".popover-body",
      cn = {
    HIDE: "hide" + Je,
    HIDDEN: "hidden" + Je,
    SHOW: "show" + Je,
    SHOWN: "shown" + Je,
    INSERTED: "inserted" + Je,
    CLICK: "click" + Je,
    FOCUSIN: "focusin" + Je,
    FOCUSOUT: "focusout" + Je,
    MOUSEENTER: "mouseenter" + Je,
    MOUSELEAVE: "mouseleave" + Je
  },
      hn = function (t) {
    function i() {
      return t.apply(this, arguments) || this;
    }

    !function (t, e) {
      t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e;
    }(i, t);
    var e = i.prototype;
    return e.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, e.addAttachmentClass = function (t) {
      g(this.getTipElement()).addClass(tn + "-" + t);
    }, e.getTipElement = function () {
      return this.tip = this.tip || g(this.config.template)[0], this.tip;
    }, e.setContent = function () {
      var t = g(this.getTipElement());
      this.setElementContent(t.find(an), this.getTitle());

      var e = this._getContent();

      "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(ln), e), t.removeClass(rn + " " + sn);
    }, e._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, e._cleanTipClass = function () {
      var t = g(this.getTipElement()),
          e = t.attr("class").match(en);
      null !== e && 0 < e.length && t.removeClass(e.join(""));
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this).data(Ge),
            e = "object" == _typeof(n) ? n : null;

        if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ge, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return nn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return $e;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return Ge;
      }
    }, {
      key: "Event",
      get: function get() {
        return cn;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return Je;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return on;
      }
    }]), i;
  }(Xe);

  g.fn[$e] = hn._jQueryInterface, g.fn[$e].Constructor = hn, g.fn[$e].noConflict = function () {
    return g.fn[$e] = Ze, hn._jQueryInterface;
  };

  var un = "scrollspy",
      fn = "bs.scrollspy",
      dn = "." + fn,
      gn = g.fn[un],
      _n = {
    offset: 10,
    method: "auto",
    target: ""
  },
      mn = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  },
      pn = {
    ACTIVATE: "activate" + dn,
    SCROLL: "scroll" + dn,
    LOAD_DATA_API: "load" + dn + ".data-api"
  },
      vn = "dropdown-item",
      yn = "active",
      En = '[data-spy="scroll"]',
      Cn = ".nav, .list-group",
      Tn = ".nav-link",
      bn = ".nav-item",
      Sn = ".list-group-item",
      Dn = ".dropdown",
      In = ".dropdown-item",
      wn = ".dropdown-toggle",
      An = "offset",
      Nn = "position",
      On = function () {
    function n(t, e) {
      var n = this;
      this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + Tn + "," + this._config.target + " " + Sn + "," + this._config.target + " " + In, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, g(this._scrollElement).on(pn.SCROLL, function (t) {
        return n._process(t);
      }), this.refresh(), this._process();
    }

    var t = n.prototype;
    return t.refresh = function () {
      var e = this,
          t = this._scrollElement === this._scrollElement.window ? An : Nn,
          o = "auto" === this._config.method ? t : this._config.method,
          r = o === Nn ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
        var e,
            n = _.getSelectorFromElement(t);

        if (n && (e = document.querySelector(n)), e) {
          var i = e.getBoundingClientRect();
          if (i.width || i.height) return [g(e)[o]().top + r, n];
        }

        return null;
      }).filter(function (t) {
        return t;
      }).sort(function (t, e) {
        return t[0] - e[0];
      }).forEach(function (t) {
        e._offsets.push(t[0]), e._targets.push(t[1]);
      });
    }, t.dispose = function () {
      g.removeData(this._element, fn), g(this._scrollElement).off(dn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, t._getConfig = function (t) {
      if ("string" != typeof (t = l({}, _n, {}, "object" == _typeof(t) && t ? t : {})).target) {
        var e = g(t.target).attr("id");
        e || (e = _.getUID(un), g(t.target).attr("id", e)), t.target = "#" + e;
      }

      return _.typeCheckConfig(un, t, mn), t;
    }, t._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, t._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, t._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, t._process = function () {
      var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();

      if (this._scrollHeight !== e && this.refresh(), n <= t) {
        var i = this._targets[this._targets.length - 1];
        this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();

        for (var o = this._offsets.length; o--;) {
          this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
        }
      }
    }, t._activate = function (e) {
      this._activeTarget = e, this._clear();

      var t = this._selector.split(",").map(function (t) {
        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
      }),
          n = g([].slice.call(document.querySelectorAll(t.join(","))));

      n.hasClass(vn) ? (n.closest(Dn).find(wn).addClass(yn), n.addClass(yn)) : (n.addClass(yn), n.parents(Cn).prev(Tn + ", " + Sn).addClass(yn), n.parents(Cn).prev(bn).children(Tn).addClass(yn)), g(this._scrollElement).trigger(pn.ACTIVATE, {
        relatedTarget: e
      });
    }, t._clear = function () {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (t) {
        return t.classList.contains(yn);
      }).forEach(function (t) {
        return t.classList.remove(yn);
      });
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = g(this).data(fn);

        if (t || (t = new n(this, "object" == _typeof(e) && e), g(this).data(fn, t)), "string" == typeof e) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
          t[e]();
        }
      });
    }, s(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return _n;
      }
    }]), n;
  }();

  g(window).on(pn.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(En)), e = t.length; e--;) {
      var n = g(t[e]);

      On._jQueryInterface.call(n, n.data());
    }
  }), g.fn[un] = On._jQueryInterface, g.fn[un].Constructor = On, g.fn[un].noConflict = function () {
    return g.fn[un] = gn, On._jQueryInterface;
  };

  var kn = "bs.tab",
      Pn = "." + kn,
      Ln = g.fn.tab,
      jn = {
    HIDE: "hide" + Pn,
    HIDDEN: "hidden" + Pn,
    SHOW: "show" + Pn,
    SHOWN: "shown" + Pn,
    CLICK_DATA_API: "click" + Pn + ".data-api"
  },
      Hn = "dropdown-menu",
      Rn = "active",
      xn = "disabled",
      Fn = "fade",
      Un = "show",
      Wn = ".dropdown",
      qn = ".nav, .list-group",
      Mn = ".active",
      Kn = "> li > .active",
      Qn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      Bn = ".dropdown-toggle",
      Vn = "> .dropdown-menu .active",
      Yn = function () {
    function i(t) {
      this._element = t;
    }

    var t = i.prototype;
    return t.show = function () {
      var n = this;

      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Rn) || g(this._element).hasClass(xn))) {
        var t,
            i,
            e = g(this._element).closest(qn)[0],
            o = _.getSelectorFromElement(this._element);

        if (e) {
          var r = "UL" === e.nodeName || "OL" === e.nodeName ? Kn : Mn;
          i = (i = g.makeArray(g(e).find(r)))[i.length - 1];
        }

        var s = g.Event(jn.HIDE, {
          relatedTarget: this._element
        }),
            a = g.Event(jn.SHOW, {
          relatedTarget: i
        });

        if (i && g(i).trigger(s), g(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
          o && (t = document.querySelector(o)), this._activate(this._element, e);

          var l = function l() {
            var t = g.Event(jn.HIDDEN, {
              relatedTarget: n._element
            }),
                e = g.Event(jn.SHOWN, {
              relatedTarget: i
            });
            g(i).trigger(t), g(n._element).trigger(e);
          };

          t ? this._activate(t, t.parentNode, l) : l();
        }
      }
    }, t.dispose = function () {
      g.removeData(this._element, kn), this._element = null;
    }, t._activate = function (t, e, n) {
      function i() {
        return o._transitionComplete(t, r, n);
      }

      var o = this,
          r = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e).children(Mn) : g(e).find(Kn))[0],
          s = n && r && g(r).hasClass(Fn);

      if (r && s) {
        var a = _.getTransitionDurationFromElement(r);

        g(r).removeClass(Un).one(_.TRANSITION_END, i).emulateTransitionEnd(a);
      } else i();
    }, t._transitionComplete = function (t, e, n) {
      if (e) {
        g(e).removeClass(Rn);
        var i = g(e.parentNode).find(Vn)[0];
        i && g(i).removeClass(Rn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
      }

      if (g(t).addClass(Rn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), _.reflow(t), t.classList.contains(Fn) && t.classList.add(Un), t.parentNode && g(t.parentNode).hasClass(Hn)) {
        var o = g(t).closest(Wn)[0];

        if (o) {
          var r = [].slice.call(o.querySelectorAll(Bn));
          g(r).addClass(Rn);
        }

        t.setAttribute("aria-expanded", !0);
      }

      n && n();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this),
            e = t.data(kn);

        if (e || (e = new i(this), t.data(kn, e)), "string" == typeof n) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }]), i;
  }();

  g(document).on(jn.CLICK_DATA_API, Qn, function (t) {
    t.preventDefault(), Yn._jQueryInterface.call(g(this), "show");
  }), g.fn.tab = Yn._jQueryInterface, g.fn.tab.Constructor = Yn, g.fn.tab.noConflict = function () {
    return g.fn.tab = Ln, Yn._jQueryInterface;
  };

  var zn = "toast",
      Xn = "bs.toast",
      $n = "." + Xn,
      Gn = g.fn[zn],
      Jn = {
    CLICK_DISMISS: "click.dismiss" + $n,
    HIDE: "hide" + $n,
    HIDDEN: "hidden" + $n,
    SHOW: "show" + $n,
    SHOWN: "shown" + $n
  },
      Zn = "fade",
      ti = "hide",
      ei = "show",
      ni = "showing",
      ii = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      oi = {
    animation: !0,
    autohide: !0,
    delay: 500
  },
      ri = '[data-dismiss="toast"]',
      si = function () {
    function i(t, e) {
      this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners();
    }

    var t = i.prototype;
    return t.show = function () {
      var t = this,
          e = g.Event(Jn.SHOW);

      if (g(this._element).trigger(e), !e.isDefaultPrevented()) {
        this._config.animation && this._element.classList.add(Zn);

        var n = function n() {
          t._element.classList.remove(ni), t._element.classList.add(ei), g(t._element).trigger(Jn.SHOWN), t._config.autohide && (t._timeout = setTimeout(function () {
            t.hide();
          }, t._config.delay));
        };

        if (this._element.classList.remove(ti), _.reflow(this._element), this._element.classList.add(ni), this._config.animation) {
          var i = _.getTransitionDurationFromElement(this._element);

          g(this._element).one(_.TRANSITION_END, n).emulateTransitionEnd(i);
        } else n();
      }
    }, t.hide = function () {
      if (this._element.classList.contains(ei)) {
        var t = g.Event(Jn.HIDE);
        g(this._element).trigger(t), t.isDefaultPrevented() || this._close();
      }
    }, t.dispose = function () {
      clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(ei) && this._element.classList.remove(ei), g(this._element).off(Jn.CLICK_DISMISS), g.removeData(this._element, Xn), this._element = null, this._config = null;
    }, t._getConfig = function (t) {
      return t = l({}, oi, {}, g(this._element).data(), {}, "object" == _typeof(t) && t ? t : {}), _.typeCheckConfig(zn, t, this.constructor.DefaultType), t;
    }, t._setListeners = function () {
      var t = this;
      g(this._element).on(Jn.CLICK_DISMISS, ri, function () {
        return t.hide();
      });
    }, t._close = function () {
      function t() {
        e._element.classList.add(ti), g(e._element).trigger(Jn.HIDDEN);
      }

      var e = this;

      if (this._element.classList.remove(ei), this._config.animation) {
        var n = _.getTransitionDurationFromElement(this._element);

        g(this._element).one(_.TRANSITION_END, t).emulateTransitionEnd(n);
      } else t();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = g(this),
            e = t.data(Xn);

        if (e || (e = new i(this, "object" == _typeof(n) && n), t.data(Xn, e)), "string" == typeof n) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n](this);
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.4.1";
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ii;
      }
    }, {
      key: "Default",
      get: function get() {
        return oi;
      }
    }]), i;
  }();

  g.fn[zn] = si._jQueryInterface, g.fn[zn].Constructor = si, g.fn[zn].noConflict = function () {
    return g.fn[zn] = Gn, si._jQueryInterface;
  }, t.Alert = v, t.Button = H, t.Carousel = ut, t.Collapse = wt, t.Dropdown = ee, t.Modal = Te, t.Popover = hn, t.Scrollspy = On, t.Tab = Yn, t.Toast = si, t.Tooltip = Xe, t.Util = _, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! VelocityJS.org (1.5.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */

/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function (a) {
  "use strict";

  function b(a) {
    var b = a.length,
        d = c.type(a);
    return "function" !== d && !c.isWindow(a) && (!(1 !== a.nodeType || !b) || "array" === d || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
  }

  if (!a.jQuery) {
    var c = function c(a, b) {
      return new c.fn.init(a, b);
    };

    c.isWindow = function (a) {
      return a && a === a.window;
    }, c.type = function (a) {
      return a ? "object" == _typeof(a) || "function" == typeof a ? e[g.call(a)] || "object" : _typeof(a) : a + "";
    }, c.isArray = Array.isArray || function (a) {
      return "array" === c.type(a);
    }, c.isPlainObject = function (a) {
      var b;
      if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a)) return !1;

      try {
        if (a.constructor && !f.call(a, "constructor") && !f.call(a.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (d) {
        return !1;
      }

      for (b in a) {
        ;
      }

      return b === undefined || f.call(a, b);
    }, c.each = function (a, c, d) {
      var e = 0,
          f = a.length,
          g = b(a);

      if (d) {
        if (g) for (; e < f && !1 !== c.apply(a[e], d); e++) {
          ;
        } else for (e in a) {
          if (a.hasOwnProperty(e) && !1 === c.apply(a[e], d)) break;
        }
      } else if (g) for (; e < f && !1 !== c.call(a[e], e, a[e]); e++) {
        ;
      } else for (e in a) {
        if (a.hasOwnProperty(e) && !1 === c.call(a[e], e, a[e])) break;
      }

      return a;
    }, c.data = function (a, b, e) {
      if (e === undefined) {
        var f = a[c.expando],
            g = f && d[f];
        if (b === undefined) return g;
        if (g && b in g) return g[b];
      } else if (b !== undefined) {
        var h = a[c.expando] || (a[c.expando] = ++c.uuid);
        return d[h] = d[h] || {}, d[h][b] = e, e;
      }
    }, c.removeData = function (a, b) {
      var e = a[c.expando],
          f = e && d[e];
      f && (b ? c.each(b, function (a, b) {
        delete f[b];
      }) : delete d[e]);
    }, c.extend = function () {
      var a,
          b,
          d,
          e,
          f,
          g,
          h = arguments[0] || {},
          i = 1,
          j = arguments.length,
          k = !1;

      for ("boolean" == typeof h && (k = h, h = arguments[i] || {}, i++), "object" != _typeof(h) && "function" !== c.type(h) && (h = {}), i === j && (h = this, i--); i < j; i++) {
        if (f = arguments[i]) for (e in f) {
          f.hasOwnProperty(e) && (a = h[e], d = f[e], h !== d && (k && d && (c.isPlainObject(d) || (b = c.isArray(d))) ? (b ? (b = !1, g = a && c.isArray(a) ? a : []) : g = a && c.isPlainObject(a) ? a : {}, h[e] = c.extend(k, g, d)) : d !== undefined && (h[e] = d)));
        }
      }

      return h;
    }, c.queue = function (a, d, e) {
      if (a) {
        d = (d || "fx") + "queue";
        var f = c.data(a, d);
        return e ? (!f || c.isArray(e) ? f = c.data(a, d, function (a, c) {
          var d = c || [];
          return a && (b(Object(a)) ? function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c;) {
              a[e++] = b[d++];
            }

            if (c !== c) for (; b[d] !== undefined;) {
              a[e++] = b[d++];
            }
            a.length = e;
          }(d, "string" == typeof a ? [a] : a) : [].push.call(d, a)), d;
        }(e)) : f.push(e), f) : f || [];
      }
    }, c.dequeue = function (a, b) {
      c.each(a.nodeType ? [a] : a, function (a, d) {
        b = b || "fx";
        var e = c.queue(d, b),
            f = e.shift();
        "inprogress" === f && (f = e.shift()), f && ("fx" === b && e.unshift("inprogress"), f.call(d, function () {
          c.dequeue(d, b);
        }));
      });
    }, c.fn = c.prototype = {
      init: function init(a) {
        if (a.nodeType) return this[0] = a, this;
        throw new Error("Not a DOM node.");
      },
      offset: function offset() {
        var b = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
          top: 0,
          left: 0
        };
        return {
          top: b.top + (a.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
          left: b.left + (a.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
        };
      },
      position: function position() {
        var a = this[0],
            b = function (a) {
          for (var b = a.offsetParent; b && "html" !== b.nodeName.toLowerCase() && b.style && "static" === b.style.position.toLowerCase();) {
            b = b.offsetParent;
          }

          return b || document;
        }(a),
            d = this.offset(),
            e = /^(?:body|html)$/i.test(b.nodeName) ? {
          top: 0,
          left: 0
        } : c(b).offset();

        return d.top -= parseFloat(a.style.marginTop) || 0, d.left -= parseFloat(a.style.marginLeft) || 0, b.style && (e.top += parseFloat(b.style.borderTopWidth) || 0, e.left += parseFloat(b.style.borderLeftWidth) || 0), {
          top: d.top - e.top,
          left: d.left - e.left
        };
      }
    };
    var d = {};
    c.expando = "velocity" + new Date().getTime(), c.uuid = 0;

    for (var e = {}, f = e.hasOwnProperty, g = e.toString, h = "Boolean Number String Function Array Date RegExp Object Error".split(" "), i = 0; i < h.length; i++) {
      e["[object " + h[i] + "]"] = h[i].toLowerCase();
    }

    c.fn.init.prototype = c.fn, a.Velocity = {
      Utilities: c
    };
  }
}(window), function (a) {
  "use strict";

  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : a();
}(function () {
  "use strict";

  return function (a, b, c, d) {
    function e(a) {
      for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
        var e = a[b];
        e && d.push(e);
      }

      return d;
    }

    function f(a) {
      return u.isWrapped(a) ? a = s.call(a) : u.isNode(a) && (a = [a]), a;
    }

    function g(a) {
      var b = o.data(a, "velocity");
      return null === b ? d : b;
    }

    function h(a, b) {
      var c = g(a);
      c && c.delayTimer && !c.delayPaused && (c.delayRemaining = c.delay - b + c.delayBegin, c.delayPaused = !0, clearTimeout(c.delayTimer.setTimeout));
    }

    function i(a, b) {
      var c = g(a);
      c && c.delayTimer && c.delayPaused && (c.delayPaused = !1, c.delayTimer.setTimeout = setTimeout(c.delayTimer.next, c.delayRemaining));
    }

    function j(a) {
      return function (b) {
        return Math.round(b * a) * (1 / a);
      };
    }

    function k(a, c, d, e) {
      function f(a, b) {
        return 1 - 3 * b + 3 * a;
      }

      function g(a, b) {
        return 3 * b - 6 * a;
      }

      function h(a) {
        return 3 * a;
      }

      function i(a, b, c) {
        return ((f(b, c) * a + g(b, c)) * a + h(b)) * a;
      }

      function j(a, b, c) {
        return 3 * f(b, c) * a * a + 2 * g(b, c) * a + h(b);
      }

      function k(b, c) {
        for (var e = 0; e < p; ++e) {
          var f = j(c, a, d);
          if (0 === f) return c;
          c -= (i(c, a, d) - b) / f;
        }

        return c;
      }

      function l() {
        for (var b = 0; b < t; ++b) {
          x[b] = i(b * u, a, d);
        }
      }

      function m(b, c, e) {
        var f,
            g,
            h = 0;

        do {
          g = c + (e - c) / 2, f = i(g, a, d) - b, f > 0 ? e = g : c = g;
        } while (Math.abs(f) > r && ++h < s);

        return g;
      }

      function n(b) {
        for (var c = 0, e = 1, f = t - 1; e !== f && x[e] <= b; ++e) {
          c += u;
        }

        --e;
        var g = (b - x[e]) / (x[e + 1] - x[e]),
            h = c + g * u,
            i = j(h, a, d);
        return i >= q ? k(b, h) : 0 === i ? h : m(b, c, c + u);
      }

      function o() {
        y = !0, a === c && d === e || l();
      }

      var p = 4,
          q = .001,
          r = 1e-7,
          s = 10,
          t = 11,
          u = 1 / (t - 1),
          v = "Float32Array" in b;
      if (4 !== arguments.length) return !1;

      for (var w = 0; w < 4; ++w) {
        if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
      }

      a = Math.min(a, 1), d = Math.min(d, 1), a = Math.max(a, 0), d = Math.max(d, 0);

      var x = v ? new Float32Array(t) : new Array(t),
          y = !1,
          z = function z(b) {
        return y || o(), a === c && d === e ? b : 0 === b ? 0 : 1 === b ? 1 : i(n(b), c, e);
      };

      z.getControlPoints = function () {
        return [{
          x: a,
          y: c
        }, {
          x: d,
          y: e
        }];
      };

      var A = "generateBezier(" + [a, c, d, e] + ")";
      return z.toString = function () {
        return A;
      }, z;
    }

    function l(a, b) {
      var c = a;
      return u.isString(a) ? y.Easings[a] || (c = !1) : c = u.isArray(a) && 1 === a.length ? j.apply(null, a) : u.isArray(a) && 2 === a.length ? z.apply(null, a.concat([b])) : !(!u.isArray(a) || 4 !== a.length) && k.apply(null, a), !1 === c && (c = y.Easings[y.defaults.easing] ? y.defaults.easing : x), c;
    }

    function m(a) {
      if (a) {
        var b = y.timestamp && !0 !== a ? a : r.now(),
            c = y.State.calls.length;
        c > 1e4 && (y.State.calls = e(y.State.calls), c = y.State.calls.length);

        for (var f = 0; f < c; f++) {
          if (y.State.calls[f]) {
            var h = y.State.calls[f],
                i = h[0],
                j = h[2],
                k = h[3],
                l = !k,
                q = null,
                s = h[5],
                t = h[6];

            if (k || (k = y.State.calls[f][3] = b - 16), s) {
              if (!0 !== s.resume) continue;
              k = h[3] = Math.round(b - t - 16), h[5] = null;
            }

            t = h[6] = b - k;

            for (var v = Math.min(t / j.duration, 1), w = 0, x = i.length; w < x; w++) {
              var z = i[w],
                  B = z.element;

              if (g(B)) {
                var D = !1;

                if (j.display !== d && null !== j.display && "none" !== j.display) {
                  if ("flex" === j.display) {
                    var E = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                    o.each(E, function (a, b) {
                      A.setPropertyValue(B, "display", b);
                    });
                  }

                  A.setPropertyValue(B, "display", j.display);
                }

                j.visibility !== d && "hidden" !== j.visibility && A.setPropertyValue(B, "visibility", j.visibility);

                for (var F in z) {
                  if (z.hasOwnProperty(F) && "element" !== F) {
                    var G,
                        H = z[F],
                        I = u.isString(H.easing) ? y.Easings[H.easing] : H.easing;

                    if (u.isString(H.pattern)) {
                      var J = 1 === v ? function (a, b, c) {
                        var d = H.endValue[b];
                        return c ? Math.round(d) : d;
                      } : function (a, b, c) {
                        var d = H.startValue[b],
                            e = H.endValue[b] - d,
                            f = d + e * I(v, j, e);
                        return c ? Math.round(f) : f;
                      };
                      G = H.pattern.replace(/{(\d+)(!)?}/g, J);
                    } else if (1 === v) G = H.endValue;else {
                      var K = H.endValue - H.startValue;
                      G = H.startValue + K * I(v, j, K);
                    }

                    if (!l && G === H.currentValue) continue;
                    if (H.currentValue = G, "tween" === F) q = G;else {
                      var L;

                      if (A.Hooks.registered[F]) {
                        L = A.Hooks.getRoot(F);
                        var M = g(B).rootPropertyValueCache[L];
                        M && (H.rootPropertyValue = M);
                      }

                      var N = A.setPropertyValue(B, F, H.currentValue + (p < 9 && 0 === parseFloat(G) ? "" : H.unitType), H.rootPropertyValue, H.scrollData);
                      A.Hooks.registered[F] && (A.Normalizations.registered[L] ? g(B).rootPropertyValueCache[L] = A.Normalizations.registered[L]("extract", null, N[1]) : g(B).rootPropertyValueCache[L] = N[1]), "transform" === N[0] && (D = !0);
                    }
                  }
                }

                j.mobileHA && g(B).transformCache.translate3d === d && (g(B).transformCache.translate3d = "(0px, 0px, 0px)", D = !0), D && A.flushTransformCache(B);
              }
            }

            j.display !== d && "none" !== j.display && (y.State.calls[f][2].display = !1), j.visibility !== d && "hidden" !== j.visibility && (y.State.calls[f][2].visibility = !1), j.progress && j.progress.call(h[1], h[1], v, Math.max(0, k + j.duration - b), k, q), 1 === v && n(f);
          }
        }
      }

      y.State.isTicking && C(m);
    }

    function n(a, b) {
      if (!y.State.calls[a]) return !1;

      for (var c = y.State.calls[a][0], e = y.State.calls[a][1], f = y.State.calls[a][2], h = y.State.calls[a][4], i = !1, j = 0, k = c.length; j < k; j++) {
        var l = c[j].element;
        b || f.loop || ("none" === f.display && A.setPropertyValue(l, "display", f.display), "hidden" === f.visibility && A.setPropertyValue(l, "visibility", f.visibility));
        var m = g(l);

        if (!0 !== f.loop && (o.queue(l)[1] === d || !/\.velocityQueueEntryFlag/i.test(o.queue(l)[1])) && m) {
          m.isAnimating = !1, m.rootPropertyValueCache = {};
          var n = !1;
          o.each(A.Lists.transforms3D, function (a, b) {
            var c = /^scale/.test(b) ? 1 : 0,
                e = m.transformCache[b];
            m.transformCache[b] !== d && new RegExp("^\\(" + c + "[^.]").test(e) && (n = !0, delete m.transformCache[b]);
          }), f.mobileHA && (n = !0, delete m.transformCache.translate3d), n && A.flushTransformCache(l), A.Values.removeClass(l, "velocity-animating");
        }

        if (!b && f.complete && !f.loop && j === k - 1) try {
          f.complete.call(e, e);
        } catch (r) {
          setTimeout(function () {
            throw r;
          }, 1);
        }
        h && !0 !== f.loop && h(e), m && !0 === f.loop && !b && (o.each(m.tweensContainer, function (a, b) {
          if (/^rotate/.test(a) && (parseFloat(b.startValue) - parseFloat(b.endValue)) % 360 == 0) {
            var c = b.startValue;
            b.startValue = b.endValue, b.endValue = c;
          }

          /^backgroundPosition/.test(a) && 100 === parseFloat(b.endValue) && "%" === b.unitType && (b.endValue = 0, b.startValue = 100);
        }), y(l, "reverse", {
          loop: !0,
          delay: f.delay
        })), !1 !== f.queue && o.dequeue(l, f.queue);
      }

      y.State.calls[a] = !1;

      for (var p = 0, q = y.State.calls.length; p < q; p++) {
        if (!1 !== y.State.calls[p]) {
          i = !0;
          break;
        }
      }

      !1 === i && (y.State.isTicking = !1, delete y.State.calls, y.State.calls = []);
    }

    var o,
        p = function () {
      if (c.documentMode) return c.documentMode;

      for (var a = 7; a > 4; a--) {
        var b = c.createElement("div");
        if (b.innerHTML = "\x3c!--[if IE " + a + "]><span></span><![endif]--\x3e", b.getElementsByTagName("span").length) return b = null, a;
      }

      return d;
    }(),
        q = function () {
      var a = 0;
      return b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || function (b) {
        var c,
            d = new Date().getTime();
        return c = Math.max(0, 16 - (d - a)), a = d + c, setTimeout(function () {
          b(d + c);
        }, c);
      };
    }(),
        r = function () {
      var a = b.performance || {};

      if ("function" != typeof a.now) {
        var c = a.timing && a.timing.navigationStart ? a.timing.navigationStart : new Date().getTime();

        a.now = function () {
          return new Date().getTime() - c;
        };
      }

      return a;
    }(),
        s = function () {
      var a = Array.prototype.slice;

      try {
        return a.call(c.documentElement), a;
      } catch (b) {
        return function (b, c) {
          var d = this.length;
          if ("number" != typeof b && (b = 0), "number" != typeof c && (c = d), this.slice) return a.call(this, b, c);
          var e,
              f = [],
              g = b >= 0 ? b : Math.max(0, d + b),
              h = c < 0 ? d + c : Math.min(c, d),
              i = h - g;
          if (i > 0) if (f = new Array(i), this.charAt) for (e = 0; e < i; e++) {
            f[e] = this.charAt(g + e);
          } else for (e = 0; e < i; e++) {
            f[e] = this[g + e];
          }
          return f;
        };
      }
    }(),
        t = function t() {
      return Array.prototype.includes ? function (a, b) {
        return a.includes(b);
      } : Array.prototype.indexOf ? function (a, b) {
        return a.indexOf(b) >= 0;
      } : function (a, b) {
        for (var c = 0; c < a.length; c++) {
          if (a[c] === b) return !0;
        }

        return !1;
      };
    },
        u = {
      isNumber: function isNumber(a) {
        return "number" == typeof a;
      },
      isString: function isString(a) {
        return "string" == typeof a;
      },
      isArray: Array.isArray || function (a) {
        return "[object Array]" === Object.prototype.toString.call(a);
      },
      isFunction: function isFunction(a) {
        return "[object Function]" === Object.prototype.toString.call(a);
      },
      isNode: function isNode(a) {
        return a && a.nodeType;
      },
      isWrapped: function isWrapped(a) {
        return a && a !== b && u.isNumber(a.length) && !u.isString(a) && !u.isFunction(a) && !u.isNode(a) && (0 === a.length || u.isNode(a[0]));
      },
      isSVG: function isSVG(a) {
        return b.SVGElement && a instanceof b.SVGElement;
      },
      isEmptyObject: function isEmptyObject(a) {
        for (var b in a) {
          if (a.hasOwnProperty(b)) return !1;
        }

        return !0;
      }
    },
        v = !1;

    if (a.fn && a.fn.jquery ? (o = a, v = !0) : o = b.Velocity.Utilities, p <= 8 && !v) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
    if (p <= 7) return void (jQuery.fn.velocity = jQuery.fn.animate);
    var w = 400,
        x = "swing",
        y = {
      State: {
        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(b.navigator.userAgent),
        isAndroid: /Android/i.test(b.navigator.userAgent),
        isGingerbread: /Android 2\.3\.[3-7]/i.test(b.navigator.userAgent),
        isChrome: b.chrome,
        isFirefox: /Firefox/i.test(b.navigator.userAgent),
        prefixElement: c.createElement("div"),
        prefixMatches: {},
        scrollAnchor: null,
        scrollPropertyLeft: null,
        scrollPropertyTop: null,
        isTicking: !1,
        calls: [],
        delayedElements: {
          count: 0
        }
      },
      CSS: {},
      Utilities: o,
      Redirects: {},
      Easings: {},
      Promise: b.Promise,
      defaults: {
        queue: "",
        duration: w,
        easing: x,
        begin: d,
        complete: d,
        progress: d,
        display: d,
        visibility: d,
        loop: !1,
        delay: !1,
        mobileHA: !0,
        _cacheValues: !0,
        promiseRejectEmpty: !0
      },
      init: function init(a) {
        o.data(a, "velocity", {
          isSVG: u.isSVG(a),
          isAnimating: !1,
          computedStyle: null,
          tweensContainer: null,
          rootPropertyValueCache: {},
          transformCache: {}
        });
      },
      hook: null,
      mock: !1,
      version: {
        major: 1,
        minor: 5,
        patch: 2
      },
      debug: !1,
      timestamp: !0,
      pauseAll: function pauseAll(a) {
        var b = new Date().getTime();
        o.each(y.State.calls, function (b, c) {
          if (c) {
            if (a !== d && (c[2].queue !== a || !1 === c[2].queue)) return !0;
            c[5] = {
              resume: !1
            };
          }
        }), o.each(y.State.delayedElements, function (a, c) {
          c && h(c, b);
        });
      },
      resumeAll: function resumeAll(a) {
        var b = new Date().getTime();
        o.each(y.State.calls, function (b, c) {
          if (c) {
            if (a !== d && (c[2].queue !== a || !1 === c[2].queue)) return !0;
            c[5] && (c[5].resume = !0);
          }
        }), o.each(y.State.delayedElements, function (a, c) {
          c && i(c, b);
        });
      }
    };
    b.pageYOffset !== d ? (y.State.scrollAnchor = b, y.State.scrollPropertyLeft = "pageXOffset", y.State.scrollPropertyTop = "pageYOffset") : (y.State.scrollAnchor = c.documentElement || c.body.parentNode || c.body, y.State.scrollPropertyLeft = "scrollLeft", y.State.scrollPropertyTop = "scrollTop");

    var z = function () {
      function a(a) {
        return -a.tension * a.x - a.friction * a.v;
      }

      function b(b, c, d) {
        var e = {
          x: b.x + d.dx * c,
          v: b.v + d.dv * c,
          tension: b.tension,
          friction: b.friction
        };
        return {
          dx: e.v,
          dv: a(e)
        };
      }

      function c(c, d) {
        var e = {
          dx: c.v,
          dv: a(c)
        },
            f = b(c, .5 * d, e),
            g = b(c, .5 * d, f),
            h = b(c, d, g),
            i = 1 / 6 * (e.dx + 2 * (f.dx + g.dx) + h.dx),
            j = 1 / 6 * (e.dv + 2 * (f.dv + g.dv) + h.dv);
        return c.x = c.x + i * d, c.v = c.v + j * d, c;
      }

      return function d(a, b, e) {
        var f,
            g,
            h,
            i = {
          x: -1,
          v: 0,
          tension: null,
          friction: null
        },
            j = [0],
            k = 0;

        for (a = parseFloat(a) || 500, b = parseFloat(b) || 20, e = e || null, i.tension = a, i.friction = b, f = null !== e, f ? (k = d(a, b), g = k / e * .016) : g = .016;;) {
          if (h = c(h || i, g), j.push(1 + h.x), k += 16, !(Math.abs(h.x) > 1e-4 && Math.abs(h.v) > 1e-4)) break;
        }

        return f ? function (a) {
          return j[a * (j.length - 1) | 0];
        } : k;
      };
    }();

    y.Easings = {
      linear: function linear(a) {
        return a;
      },
      swing: function swing(a) {
        return .5 - Math.cos(a * Math.PI) / 2;
      },
      spring: function spring(a) {
        return 1 - Math.cos(4.5 * a * Math.PI) * Math.exp(6 * -a);
      }
    }, o.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (a, b) {
      y.Easings[b[0]] = k.apply(null, b[1]);
    });
    var A = y.CSS = {
      RegEx: {
        isHex: /^#([A-f\d]{3}){1,2}$/i,
        valueUnwrap: /^[A-z]+\((.*)\)$/i,
        wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
        valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
      },
      Lists: {
        colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
        transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
        transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
        units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
        colorNames: {
          aliceblue: "240,248,255",
          antiquewhite: "250,235,215",
          aquamarine: "127,255,212",
          aqua: "0,255,255",
          azure: "240,255,255",
          beige: "245,245,220",
          bisque: "255,228,196",
          black: "0,0,0",
          blanchedalmond: "255,235,205",
          blueviolet: "138,43,226",
          blue: "0,0,255",
          brown: "165,42,42",
          burlywood: "222,184,135",
          cadetblue: "95,158,160",
          chartreuse: "127,255,0",
          chocolate: "210,105,30",
          coral: "255,127,80",
          cornflowerblue: "100,149,237",
          cornsilk: "255,248,220",
          crimson: "220,20,60",
          cyan: "0,255,255",
          darkblue: "0,0,139",
          darkcyan: "0,139,139",
          darkgoldenrod: "184,134,11",
          darkgray: "169,169,169",
          darkgrey: "169,169,169",
          darkgreen: "0,100,0",
          darkkhaki: "189,183,107",
          darkmagenta: "139,0,139",
          darkolivegreen: "85,107,47",
          darkorange: "255,140,0",
          darkorchid: "153,50,204",
          darkred: "139,0,0",
          darksalmon: "233,150,122",
          darkseagreen: "143,188,143",
          darkslateblue: "72,61,139",
          darkslategray: "47,79,79",
          darkturquoise: "0,206,209",
          darkviolet: "148,0,211",
          deeppink: "255,20,147",
          deepskyblue: "0,191,255",
          dimgray: "105,105,105",
          dimgrey: "105,105,105",
          dodgerblue: "30,144,255",
          firebrick: "178,34,34",
          floralwhite: "255,250,240",
          forestgreen: "34,139,34",
          fuchsia: "255,0,255",
          gainsboro: "220,220,220",
          ghostwhite: "248,248,255",
          gold: "255,215,0",
          goldenrod: "218,165,32",
          gray: "128,128,128",
          grey: "128,128,128",
          greenyellow: "173,255,47",
          green: "0,128,0",
          honeydew: "240,255,240",
          hotpink: "255,105,180",
          indianred: "205,92,92",
          indigo: "75,0,130",
          ivory: "255,255,240",
          khaki: "240,230,140",
          lavenderblush: "255,240,245",
          lavender: "230,230,250",
          lawngreen: "124,252,0",
          lemonchiffon: "255,250,205",
          lightblue: "173,216,230",
          lightcoral: "240,128,128",
          lightcyan: "224,255,255",
          lightgoldenrodyellow: "250,250,210",
          lightgray: "211,211,211",
          lightgrey: "211,211,211",
          lightgreen: "144,238,144",
          lightpink: "255,182,193",
          lightsalmon: "255,160,122",
          lightseagreen: "32,178,170",
          lightskyblue: "135,206,250",
          lightslategray: "119,136,153",
          lightsteelblue: "176,196,222",
          lightyellow: "255,255,224",
          limegreen: "50,205,50",
          lime: "0,255,0",
          linen: "250,240,230",
          magenta: "255,0,255",
          maroon: "128,0,0",
          mediumaquamarine: "102,205,170",
          mediumblue: "0,0,205",
          mediumorchid: "186,85,211",
          mediumpurple: "147,112,219",
          mediumseagreen: "60,179,113",
          mediumslateblue: "123,104,238",
          mediumspringgreen: "0,250,154",
          mediumturquoise: "72,209,204",
          mediumvioletred: "199,21,133",
          midnightblue: "25,25,112",
          mintcream: "245,255,250",
          mistyrose: "255,228,225",
          moccasin: "255,228,181",
          navajowhite: "255,222,173",
          navy: "0,0,128",
          oldlace: "253,245,230",
          olivedrab: "107,142,35",
          olive: "128,128,0",
          orangered: "255,69,0",
          orange: "255,165,0",
          orchid: "218,112,214",
          palegoldenrod: "238,232,170",
          palegreen: "152,251,152",
          paleturquoise: "175,238,238",
          palevioletred: "219,112,147",
          papayawhip: "255,239,213",
          peachpuff: "255,218,185",
          peru: "205,133,63",
          pink: "255,192,203",
          plum: "221,160,221",
          powderblue: "176,224,230",
          purple: "128,0,128",
          red: "255,0,0",
          rosybrown: "188,143,143",
          royalblue: "65,105,225",
          saddlebrown: "139,69,19",
          salmon: "250,128,114",
          sandybrown: "244,164,96",
          seagreen: "46,139,87",
          seashell: "255,245,238",
          sienna: "160,82,45",
          silver: "192,192,192",
          skyblue: "135,206,235",
          slateblue: "106,90,205",
          slategray: "112,128,144",
          snow: "255,250,250",
          springgreen: "0,255,127",
          steelblue: "70,130,180",
          tan: "210,180,140",
          teal: "0,128,128",
          thistle: "216,191,216",
          tomato: "255,99,71",
          turquoise: "64,224,208",
          violet: "238,130,238",
          wheat: "245,222,179",
          whitesmoke: "245,245,245",
          white: "255,255,255",
          yellowgreen: "154,205,50",
          yellow: "255,255,0"
        }
      },
      Hooks: {
        templates: {
          textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
          boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
          clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
          backgroundPosition: ["X Y", "0% 0%"],
          transformOrigin: ["X Y Z", "50% 50% 0px"],
          perspectiveOrigin: ["X Y", "50% 50%"]
        },
        registered: {},
        register: function register() {
          for (var a = 0; a < A.Lists.colors.length; a++) {
            var b = "color" === A.Lists.colors[a] ? "0 0 0 1" : "255 255 255 1";
            A.Hooks.templates[A.Lists.colors[a]] = ["Red Green Blue Alpha", b];
          }

          var c, d, e;
          if (p) for (c in A.Hooks.templates) {
            if (A.Hooks.templates.hasOwnProperty(c)) {
              d = A.Hooks.templates[c], e = d[0].split(" ");
              var f = d[1].match(A.RegEx.valueSplit);
              "Color" === e[0] && (e.push(e.shift()), f.push(f.shift()), A.Hooks.templates[c] = [e.join(" "), f.join(" ")]);
            }
          }

          for (c in A.Hooks.templates) {
            if (A.Hooks.templates.hasOwnProperty(c)) {
              d = A.Hooks.templates[c], e = d[0].split(" ");

              for (var g in e) {
                if (e.hasOwnProperty(g)) {
                  var h = c + e[g],
                      i = g;
                  A.Hooks.registered[h] = [c, i];
                }
              }
            }
          }
        },
        getRoot: function getRoot(a) {
          var b = A.Hooks.registered[a];
          return b ? b[0] : a;
        },
        getUnit: function getUnit(a, b) {
          var c = (a.substr(b || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
          return c && t(A.Lists.units, c) ? c : "";
        },
        fixColors: function fixColors(a) {
          return a.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function (a, b, c) {
            return A.Lists.colorNames.hasOwnProperty(c) ? (b || "rgba(") + A.Lists.colorNames[c] + (b ? "" : ",1)") : b + c;
          });
        },
        cleanRootPropertyValue: function cleanRootPropertyValue(a, b) {
          return A.RegEx.valueUnwrap.test(b) && (b = b.match(A.RegEx.valueUnwrap)[1]), A.Values.isCSSNullValue(b) && (b = A.Hooks.templates[a][1]), b;
        },
        extractValue: function extractValue(a, b) {
          var c = A.Hooks.registered[a];

          if (c) {
            var d = c[0],
                e = c[1];
            return b = A.Hooks.cleanRootPropertyValue(d, b), b.toString().match(A.RegEx.valueSplit)[e];
          }

          return b;
        },
        injectValue: function injectValue(a, b, c) {
          var d = A.Hooks.registered[a];

          if (d) {
            var e,
                f = d[0],
                g = d[1];
            return c = A.Hooks.cleanRootPropertyValue(f, c), e = c.toString().match(A.RegEx.valueSplit), e[g] = b, e.join(" ");
          }

          return c;
        }
      },
      Normalizations: {
        registered: {
          clip: function clip(a, b, c) {
            switch (a) {
              case "name":
                return "clip";

              case "extract":
                var d;
                return A.RegEx.wrappedValueAlreadyExtracted.test(c) ? d = c : (d = c.toString().match(A.RegEx.valueUnwrap), d = d ? d[1].replace(/,(\s+)?/g, " ") : c), d;

              case "inject":
                return "rect(" + c + ")";
            }
          },
          blur: function blur(a, b, c) {
            switch (a) {
              case "name":
                return y.State.isFirefox ? "filter" : "-webkit-filter";

              case "extract":
                var d = parseFloat(c);

                if (!d && 0 !== d) {
                  var e = c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                  d = e ? e[1] : 0;
                }

                return d;

              case "inject":
                return parseFloat(c) ? "blur(" + c + ")" : "none";
            }
          },
          opacity: function opacity(a, b, c) {
            if (p <= 8) switch (a) {
              case "name":
                return "filter";

              case "extract":
                var d = c.toString().match(/alpha\(opacity=(.*)\)/i);
                return c = d ? d[1] / 100 : 1;

              case "inject":
                return b.style.zoom = 1, parseFloat(c) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(c), 10) + ")";
            } else switch (a) {
              case "name":
                return "opacity";

              case "extract":
              case "inject":
                return c;
            }
          }
        },
        register: function register() {
          function a(a, b, c) {
            if ("border-box" === A.getPropertyValue(b, "boxSizing").toString().toLowerCase() === (c || !1)) {
              var d,
                  e,
                  f = 0,
                  g = "width" === a ? ["Left", "Right"] : ["Top", "Bottom"],
                  h = ["padding" + g[0], "padding" + g[1], "border" + g[0] + "Width", "border" + g[1] + "Width"];

              for (d = 0; d < h.length; d++) {
                e = parseFloat(A.getPropertyValue(b, h[d])), isNaN(e) || (f += e);
              }

              return c ? -f : f;
            }

            return 0;
          }

          function b(b, c) {
            return function (d, e, f) {
              switch (d) {
                case "name":
                  return b;

                case "extract":
                  return parseFloat(f) + a(b, e, c);

                case "inject":
                  return parseFloat(f) - a(b, e, c) + "px";
              }
            };
          }

          p && !(p > 9) || y.State.isGingerbread || (A.Lists.transformsBase = A.Lists.transformsBase.concat(A.Lists.transforms3D));

          for (var c = 0; c < A.Lists.transformsBase.length; c++) {
            !function () {
              var a = A.Lists.transformsBase[c];

              A.Normalizations.registered[a] = function (b, c, e) {
                switch (b) {
                  case "name":
                    return "transform";

                  case "extract":
                    return g(c) === d || g(c).transformCache[a] === d ? /^scale/i.test(a) ? 1 : 0 : g(c).transformCache[a].replace(/[()]/g, "");

                  case "inject":
                    var f = !1;

                    switch (a.substr(0, a.length - 1)) {
                      case "translate":
                        f = !/(%|px|em|rem|vw|vh|\d)$/i.test(e);
                        break;

                      case "scal":
                      case "scale":
                        y.State.isAndroid && g(c).transformCache[a] === d && e < 1 && (e = 1), f = !/(\d)$/i.test(e);
                        break;

                      case "skew":
                      case "rotate":
                        f = !/(deg|\d)$/i.test(e);
                    }

                    return f || (g(c).transformCache[a] = "(" + e + ")"), g(c).transformCache[a];
                }
              };
            }();
          }

          for (var e = 0; e < A.Lists.colors.length; e++) {
            !function () {
              var a = A.Lists.colors[e];

              A.Normalizations.registered[a] = function (b, c, e) {
                switch (b) {
                  case "name":
                    return a;

                  case "extract":
                    var f;
                    if (A.RegEx.wrappedValueAlreadyExtracted.test(e)) f = e;else {
                      var g,
                          h = {
                        black: "rgb(0, 0, 0)",
                        blue: "rgb(0, 0, 255)",
                        gray: "rgb(128, 128, 128)",
                        green: "rgb(0, 128, 0)",
                        red: "rgb(255, 0, 0)",
                        white: "rgb(255, 255, 255)"
                      };
                      /^[A-z]+$/i.test(e) ? g = h[e] !== d ? h[e] : h.black : A.RegEx.isHex.test(e) ? g = "rgb(" + A.Values.hexToRgb(e).join(" ") + ")" : /^rgba?\(/i.test(e) || (g = h.black), f = (g || e).toString().match(A.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
                    }
                    return (!p || p > 8) && 3 === f.split(" ").length && (f += " 1"), f;

                  case "inject":
                    return /^rgb/.test(e) ? e : (p <= 8 ? 4 === e.split(" ").length && (e = e.split(/\s+/).slice(0, 3).join(" ")) : 3 === e.split(" ").length && (e += " 1"), (p <= 8 ? "rgb" : "rgba") + "(" + e.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")");
                }
              };
            }();
          }

          A.Normalizations.registered.innerWidth = b("width", !0), A.Normalizations.registered.innerHeight = b("height", !0), A.Normalizations.registered.outerWidth = b("width"), A.Normalizations.registered.outerHeight = b("height");
        }
      },
      Names: {
        camelCase: function camelCase(a) {
          return a.replace(/-(\w)/g, function (a, b) {
            return b.toUpperCase();
          });
        },
        SVGAttribute: function SVGAttribute(a) {
          var b = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
          return (p || y.State.isAndroid && !y.State.isChrome) && (b += "|transform"), new RegExp("^(" + b + ")$", "i").test(a);
        },
        prefixCheck: function prefixCheck(a) {
          if (y.State.prefixMatches[a]) return [y.State.prefixMatches[a], !0];

          for (var b = ["", "Webkit", "Moz", "ms", "O"], c = 0, d = b.length; c < d; c++) {
            var e;
            if (e = 0 === c ? a : b[c] + a.replace(/^\w/, function (a) {
              return a.toUpperCase();
            }), u.isString(y.State.prefixElement.style[e])) return y.State.prefixMatches[a] = e, [e, !0];
          }

          return [a, !1];
        }
      },
      Values: {
        hexToRgb: function hexToRgb(a) {
          var b,
              c = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
              d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
          return a = a.replace(c, function (a, b, c, d) {
            return b + b + c + c + d + d;
          }), b = d.exec(a), b ? [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)] : [0, 0, 0];
        },
        isCSSNullValue: function isCSSNullValue(a) {
          return !a || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a);
        },
        getUnitType: function getUnitType(a) {
          return /^(rotate|skew)/i.test(a) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a) ? "" : "px";
        },
        getDisplayType: function getDisplayType(a) {
          var b = a && a.tagName.toString().toLowerCase();
          return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b) ? "inline" : /^(li)$/i.test(b) ? "list-item" : /^(tr)$/i.test(b) ? "table-row" : /^(table)$/i.test(b) ? "table" : /^(tbody)$/i.test(b) ? "table-row-group" : "block";
        },
        addClass: function addClass(a, b) {
          if (a) if (a.classList) a.classList.add(b);else if (u.isString(a.className)) a.className += (a.className.length ? " " : "") + b;else {
            var c = a.getAttribute(p <= 7 ? "className" : "class") || "";
            a.setAttribute("class", c + (c ? " " : "") + b);
          }
        },
        removeClass: function removeClass(a, b) {
          if (a) if (a.classList) a.classList.remove(b);else if (u.isString(a.className)) a.className = a.className.toString().replace(new RegExp("(^|\\s)" + b.split(" ").join("|") + "(\\s|$)", "gi"), " ");else {
            var c = a.getAttribute(p <= 7 ? "className" : "class") || "";
            a.setAttribute("class", c.replace(new RegExp("(^|s)" + b.split(" ").join("|") + "(s|$)", "gi"), " "));
          }
        }
      },
      getPropertyValue: function getPropertyValue(a, c, e, f) {
        function h(a, c) {
          var e = 0;
          if (p <= 8) e = o.css(a, c);else {
            var i = !1;
            /^(width|height)$/.test(c) && 0 === A.getPropertyValue(a, "display") && (i = !0, A.setPropertyValue(a, "display", A.Values.getDisplayType(a)));

            var j = function j() {
              i && A.setPropertyValue(a, "display", "none");
            };

            if (!f) {
              if ("height" === c && "border-box" !== A.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                var k = a.offsetHeight - (parseFloat(A.getPropertyValue(a, "borderTopWidth")) || 0) - (parseFloat(A.getPropertyValue(a, "borderBottomWidth")) || 0) - (parseFloat(A.getPropertyValue(a, "paddingTop")) || 0) - (parseFloat(A.getPropertyValue(a, "paddingBottom")) || 0);
                return j(), k;
              }

              if ("width" === c && "border-box" !== A.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                var l = a.offsetWidth - (parseFloat(A.getPropertyValue(a, "borderLeftWidth")) || 0) - (parseFloat(A.getPropertyValue(a, "borderRightWidth")) || 0) - (parseFloat(A.getPropertyValue(a, "paddingLeft")) || 0) - (parseFloat(A.getPropertyValue(a, "paddingRight")) || 0);
                return j(), l;
              }
            }

            var m;
            m = g(a) === d ? b.getComputedStyle(a, null) : g(a).computedStyle ? g(a).computedStyle : g(a).computedStyle = b.getComputedStyle(a, null), "borderColor" === c && (c = "borderTopColor"), e = 9 === p && "filter" === c ? m.getPropertyValue(c) : m[c], "" !== e && null !== e || (e = a.style[c]), j();
          }

          if ("auto" === e && /^(top|right|bottom|left)$/i.test(c)) {
            var n = h(a, "position");
            ("fixed" === n || "absolute" === n && /top|left/i.test(c)) && (e = o(a).position()[c] + "px");
          }

          return e;
        }

        var i;

        if (A.Hooks.registered[c]) {
          var j = c,
              k = A.Hooks.getRoot(j);
          e === d && (e = A.getPropertyValue(a, A.Names.prefixCheck(k)[0])), A.Normalizations.registered[k] && (e = A.Normalizations.registered[k]("extract", a, e)), i = A.Hooks.extractValue(j, e);
        } else if (A.Normalizations.registered[c]) {
          var l, m;
          l = A.Normalizations.registered[c]("name", a), "transform" !== l && (m = h(a, A.Names.prefixCheck(l)[0]), A.Values.isCSSNullValue(m) && A.Hooks.templates[c] && (m = A.Hooks.templates[c][1])), i = A.Normalizations.registered[c]("extract", a, m);
        }

        if (!/^[\d-]/.test(i)) {
          var n = g(a);
          if (n && n.isSVG && A.Names.SVGAttribute(c)) {
            if (/^(height|width)$/i.test(c)) try {
              i = a.getBBox()[c];
            } catch (q) {
              i = 0;
            } else i = a.getAttribute(c);
          } else i = h(a, A.Names.prefixCheck(c)[0]);
        }

        return A.Values.isCSSNullValue(i) && (i = 0), y.debug >= 2 && console.log("Get " + c + ": " + i), i;
      },
      setPropertyValue: function setPropertyValue(a, c, d, e, f) {
        var h = c;
        if ("scroll" === c) f.container ? f.container["scroll" + f.direction] = d : "Left" === f.direction ? b.scrollTo(d, f.alternateValue) : b.scrollTo(f.alternateValue, d);else if (A.Normalizations.registered[c] && "transform" === A.Normalizations.registered[c]("name", a)) A.Normalizations.registered[c]("inject", a, d), h = "transform", d = g(a).transformCache[c];else {
          if (A.Hooks.registered[c]) {
            var i = c,
                j = A.Hooks.getRoot(c);
            e = e || A.getPropertyValue(a, j), d = A.Hooks.injectValue(i, d, e), c = j;
          }

          if (A.Normalizations.registered[c] && (d = A.Normalizations.registered[c]("inject", a, d), c = A.Normalizations.registered[c]("name", a)), h = A.Names.prefixCheck(c)[0], p <= 8) try {
            a.style[h] = d;
          } catch (l) {
            y.debug && console.log("Browser does not support [" + d + "] for [" + h + "]");
          } else {
            var k = g(a);
            k && k.isSVG && A.Names.SVGAttribute(c) ? a.setAttribute(c, d) : a.style[h] = d;
          }
          y.debug >= 2 && console.log("Set " + c + " (" + h + "): " + d);
        }
        return [h, d];
      },
      flushTransformCache: function flushTransformCache(a) {
        var b = "",
            c = g(a);

        if ((p || y.State.isAndroid && !y.State.isChrome) && c && c.isSVG) {
          var d = function d(b) {
            return parseFloat(A.getPropertyValue(a, b));
          },
              e = {
            translate: [d("translateX"), d("translateY")],
            skewX: [d("skewX")],
            skewY: [d("skewY")],
            scale: 1 !== d("scale") ? [d("scale"), d("scale")] : [d("scaleX"), d("scaleY")],
            rotate: [d("rotateZ"), 0, 0]
          };

          o.each(g(a).transformCache, function (a) {
            /^translate/i.test(a) ? a = "translate" : /^scale/i.test(a) ? a = "scale" : /^rotate/i.test(a) && (a = "rotate"), e[a] && (b += a + "(" + e[a].join(" ") + ") ", delete e[a]);
          });
        } else {
          var f, h;
          o.each(g(a).transformCache, function (c) {
            if (f = g(a).transformCache[c], "transformPerspective" === c) return h = f, !0;
            9 === p && "rotateZ" === c && (c = "rotate"), b += c + f + " ";
          }), h && (b = "perspective" + h + " " + b);
        }

        A.setPropertyValue(a, "transform", b);
      }
    };
    A.Hooks.register(), A.Normalizations.register(), y.hook = function (a, b, c) {
      var e;
      return a = f(a), o.each(a, function (a, f) {
        if (g(f) === d && y.init(f), c === d) e === d && (e = A.getPropertyValue(f, b));else {
          var h = A.setPropertyValue(f, b, c);
          "transform" === h[0] && y.CSS.flushTransformCache(f), e = h;
        }
      }), e;
    };

    var B = function B() {
      function a() {
        return k ? z.promise || null : p;
      }

      function e(a, e) {
        function f(f) {
          var k, n;
          if (i.begin && 0 === D) try {
            i.begin.call(r, r);
          } catch (V) {
            setTimeout(function () {
              throw V;
            }, 1);
          }

          if ("scroll" === G) {
            var p,
                q,
                w,
                x = /^x$/i.test(i.axis) ? "Left" : "Top",
                B = parseFloat(i.offset) || 0;
            i.container ? u.isWrapped(i.container) || u.isNode(i.container) ? (i.container = i.container[0] || i.container, p = i.container["scroll" + x], w = p + o(a).position()[x.toLowerCase()] + B) : i.container = null : (p = y.State.scrollAnchor[y.State["scrollProperty" + x]], q = y.State.scrollAnchor[y.State["scrollProperty" + ("Left" === x ? "Top" : "Left")]], w = o(a).offset()[x.toLowerCase()] + B), j = {
              scroll: {
                rootPropertyValue: !1,
                startValue: p,
                currentValue: p,
                endValue: w,
                unitType: "",
                easing: i.easing,
                scrollData: {
                  container: i.container,
                  direction: x,
                  alternateValue: q
                }
              },
              element: a
            }, y.debug && console.log("tweensContainer (scroll): ", j.scroll, a);
          } else if ("reverse" === G) {
            if (!(k = g(a))) return;
            if (!k.tweensContainer) return void o.dequeue(a, i.queue);
            "none" === k.opts.display && (k.opts.display = "auto"), "hidden" === k.opts.visibility && (k.opts.visibility = "visible"), k.opts.loop = !1, k.opts.begin = null, k.opts.complete = null, v.easing || delete i.easing, v.duration || delete i.duration, i = o.extend({}, k.opts, i), n = o.extend(!0, {}, k ? k.tweensContainer : null);

            for (var E in n) {
              if (n.hasOwnProperty(E) && "element" !== E) {
                var F = n[E].startValue;
                n[E].startValue = n[E].currentValue = n[E].endValue, n[E].endValue = F, u.isEmptyObject(v) || (n[E].easing = i.easing), y.debug && console.log("reverse tweensContainer (" + E + "): " + JSON.stringify(n[E]), a);
              }
            }

            j = n;
          } else if ("start" === G) {
            k = g(a), k && k.tweensContainer && !0 === k.isAnimating && (n = k.tweensContainer);

            var H = function H(e, f) {
              var g,
                  l = A.Hooks.getRoot(e),
                  m = !1,
                  p = f[0],
                  q = f[1],
                  r = f[2];
              if (!(k && k.isSVG || "tween" === l || !1 !== A.Names.prefixCheck(l)[1] || A.Normalizations.registered[l] !== d)) return void (y.debug && console.log("Skipping [" + l + "] due to a lack of browser support."));
              (i.display !== d && null !== i.display && "none" !== i.display || i.visibility !== d && "hidden" !== i.visibility) && /opacity|filter/.test(e) && !r && 0 !== p && (r = 0), i._cacheValues && n && n[e] ? (r === d && (r = n[e].endValue + n[e].unitType), m = k.rootPropertyValueCache[l]) : A.Hooks.registered[e] ? r === d ? (m = A.getPropertyValue(a, l), r = A.getPropertyValue(a, e, m)) : m = A.Hooks.templates[l][1] : r === d && (r = A.getPropertyValue(a, e));

              var s,
                  t,
                  v,
                  w = !1,
                  x = function x(a, b) {
                var c, d;
                return d = (b || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (a) {
                  return c = a, "";
                }), c || (c = A.Values.getUnitType(a)), [d, c];
              };

              if (r !== p && u.isString(r) && u.isString(p)) {
                g = "";
                var z = 0,
                    B = 0,
                    C = [],
                    D = [],
                    E = 0,
                    F = 0,
                    G = 0;

                for (r = A.Hooks.fixColors(r), p = A.Hooks.fixColors(p); z < r.length && B < p.length;) {
                  var H = r[z],
                      I = p[B];

                  if (/[\d\.-]/.test(H) && /[\d\.-]/.test(I)) {
                    for (var J = H, K = I, L = ".", N = "."; ++z < r.length;) {
                      if ((H = r[z]) === L) L = "..";else if (!/\d/.test(H)) break;
                      J += H;
                    }

                    for (; ++B < p.length;) {
                      if ((I = p[B]) === N) N = "..";else if (!/\d/.test(I)) break;
                      K += I;
                    }

                    var O = A.Hooks.getUnit(r, z),
                        P = A.Hooks.getUnit(p, B);
                    if (z += O.length, B += P.length, O === P) J === K ? g += J + O : (g += "{" + C.length + (F ? "!" : "") + "}" + O, C.push(parseFloat(J)), D.push(parseFloat(K)));else {
                      var Q = parseFloat(J),
                          R = parseFloat(K);
                      g += (E < 5 ? "calc" : "") + "(" + (Q ? "{" + C.length + (F ? "!" : "") + "}" : "0") + O + " + " + (R ? "{" + (C.length + (Q ? 1 : 0)) + (F ? "!" : "") + "}" : "0") + P + ")", Q && (C.push(Q), D.push(0)), R && (C.push(0), D.push(R));
                    }
                  } else {
                    if (H !== I) {
                      E = 0;
                      break;
                    }

                    g += H, z++, B++, 0 === E && "c" === H || 1 === E && "a" === H || 2 === E && "l" === H || 3 === E && "c" === H || E >= 4 && "(" === H ? E++ : (E && E < 5 || E >= 4 && ")" === H && --E < 5) && (E = 0), 0 === F && "r" === H || 1 === F && "g" === H || 2 === F && "b" === H || 3 === F && "a" === H || F >= 3 && "(" === H ? (3 === F && "a" === H && (G = 1), F++) : G && "," === H ? ++G > 3 && (F = G = 0) : (G && F < (G ? 5 : 4) || F >= (G ? 4 : 3) && ")" === H && --F < (G ? 5 : 4)) && (F = G = 0);
                  }
                }

                z === r.length && B === p.length || (y.debug && console.error('Trying to pattern match mis-matched strings ["' + p + '", "' + r + '"]'), g = d), g && (C.length ? (y.debug && console.log('Pattern found "' + g + '" -> ', C, D, "[" + r + "," + p + "]"), r = C, p = D, t = v = "") : g = d);
              }

              g || (s = x(e, r), r = s[0], v = s[1], s = x(e, p), p = s[0].replace(/^([+-\/*])=/, function (a, b) {
                return w = b, "";
              }), t = s[1], r = parseFloat(r) || 0, p = parseFloat(p) || 0, "%" === t && (/^(fontSize|lineHeight)$/.test(e) ? (p /= 100, t = "em") : /^scale/.test(e) ? (p /= 100, t = "") : /(Red|Green|Blue)$/i.test(e) && (p = p / 100 * 255, t = "")));
              if (/[\/*]/.test(w)) t = v;else if (v !== t && 0 !== r) if (0 === p) t = v;else {
                h = h || function () {
                  var d = {
                    myParent: a.parentNode || c.body,
                    position: A.getPropertyValue(a, "position"),
                    fontSize: A.getPropertyValue(a, "fontSize")
                  },
                      e = d.position === M.lastPosition && d.myParent === M.lastParent,
                      f = d.fontSize === M.lastFontSize;
                  M.lastParent = d.myParent, M.lastPosition = d.position, M.lastFontSize = d.fontSize;
                  var g = {};
                  if (f && e) g.emToPx = M.lastEmToPx, g.percentToPxWidth = M.lastPercentToPxWidth, g.percentToPxHeight = M.lastPercentToPxHeight;else {
                    var h = k && k.isSVG ? c.createElementNS("http://www.w3.org/2000/svg", "rect") : c.createElement("div");
                    y.init(h), d.myParent.appendChild(h), o.each(["overflow", "overflowX", "overflowY"], function (a, b) {
                      y.CSS.setPropertyValue(h, b, "hidden");
                    }), y.CSS.setPropertyValue(h, "position", d.position), y.CSS.setPropertyValue(h, "fontSize", d.fontSize), y.CSS.setPropertyValue(h, "boxSizing", "content-box"), o.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (a, b) {
                      y.CSS.setPropertyValue(h, b, "100%");
                    }), y.CSS.setPropertyValue(h, "paddingLeft", "100em"), g.percentToPxWidth = M.lastPercentToPxWidth = (parseFloat(A.getPropertyValue(h, "width", null, !0)) || 1) / 100, g.percentToPxHeight = M.lastPercentToPxHeight = (parseFloat(A.getPropertyValue(h, "height", null, !0)) || 1) / 100, g.emToPx = M.lastEmToPx = (parseFloat(A.getPropertyValue(h, "paddingLeft")) || 1) / 100, d.myParent.removeChild(h);
                  }
                  return null === M.remToPx && (M.remToPx = parseFloat(A.getPropertyValue(c.body, "fontSize")) || 16), null === M.vwToPx && (M.vwToPx = parseFloat(b.innerWidth) / 100, M.vhToPx = parseFloat(b.innerHeight) / 100), g.remToPx = M.remToPx, g.vwToPx = M.vwToPx, g.vhToPx = M.vhToPx, y.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(g), a), g;
                }();

                var S = /margin|padding|left|right|width|text|word|letter/i.test(e) || /X$/.test(e) || "x" === e ? "x" : "y";

                switch (v) {
                  case "%":
                    r *= "x" === S ? h.percentToPxWidth : h.percentToPxHeight;
                    break;

                  case "px":
                    break;

                  default:
                    r *= h[v + "ToPx"];
                }

                switch (t) {
                  case "%":
                    r *= 1 / ("x" === S ? h.percentToPxWidth : h.percentToPxHeight);
                    break;

                  case "px":
                    break;

                  default:
                    r *= 1 / h[t + "ToPx"];
                }
              }

              switch (w) {
                case "+":
                  p = r + p;
                  break;

                case "-":
                  p = r - p;
                  break;

                case "*":
                  p *= r;
                  break;

                case "/":
                  p = r / p;
              }

              j[e] = {
                rootPropertyValue: m,
                startValue: r,
                currentValue: r,
                endValue: p,
                unitType: t,
                easing: q
              }, g && (j[e].pattern = g), y.debug && console.log("tweensContainer (" + e + "): " + JSON.stringify(j[e]), a);
            };

            for (var I in s) {
              if (s.hasOwnProperty(I)) {
                var J = A.Names.camelCase(I),
                    K = function (b, c) {
                  var d, f, g;
                  return u.isFunction(b) && (b = b.call(a, e, C)), u.isArray(b) ? (d = b[0], !u.isArray(b[1]) && /^[\d-]/.test(b[1]) || u.isFunction(b[1]) || A.RegEx.isHex.test(b[1]) ? g = b[1] : u.isString(b[1]) && !A.RegEx.isHex.test(b[1]) && y.Easings[b[1]] || u.isArray(b[1]) ? (f = c ? b[1] : l(b[1], i.duration), g = b[2]) : g = b[1] || b[2]) : d = b, c || (f = f || i.easing), u.isFunction(d) && (d = d.call(a, e, C)), u.isFunction(g) && (g = g.call(a, e, C)), [d || 0, f, g];
                }(s[I]);

                if (t(A.Lists.colors, J)) {
                  var L = K[0],
                      O = K[1],
                      P = K[2];

                  if (A.RegEx.isHex.test(L)) {
                    for (var Q = ["Red", "Green", "Blue"], R = A.Values.hexToRgb(L), S = P ? A.Values.hexToRgb(P) : d, T = 0; T < Q.length; T++) {
                      var U = [R[T]];
                      O && U.push(O), S !== d && U.push(S[T]), H(J + Q[T], U);
                    }

                    continue;
                  }
                }

                H(J, K);
              }
            }

            j.element = a;
          }

          j.element && (A.Values.addClass(a, "velocity-animating"), N.push(j), k = g(a), k && ("" === i.queue && (k.tweensContainer = j, k.opts = i), k.isAnimating = !0), D === C - 1 ? (y.State.calls.push([N, r, i, null, z.resolver, null, 0]), !1 === y.State.isTicking && (y.State.isTicking = !0, m())) : D++);
        }

        var h,
            i = o.extend({}, y.defaults, v),
            j = {};

        switch (g(a) === d && y.init(a), parseFloat(i.delay) && !1 !== i.queue && o.queue(a, i.queue, function (b, c) {
          if (!0 === c) return !0;
          y.velocityQueueEntryFlag = !0;
          var d = y.State.delayedElements.count++;
          y.State.delayedElements[d] = a;

          var e = function (a) {
            return function () {
              y.State.delayedElements[a] = !1, b();
            };
          }(d);

          g(a).delayBegin = new Date().getTime(), g(a).delay = parseFloat(i.delay), g(a).delayTimer = {
            setTimeout: setTimeout(b, parseFloat(i.delay)),
            next: e
          };
        }), i.duration.toString().toLowerCase()) {
          case "fast":
            i.duration = 200;
            break;

          case "normal":
            i.duration = w;
            break;

          case "slow":
            i.duration = 600;
            break;

          default:
            i.duration = parseFloat(i.duration) || 1;
        }

        if (!1 !== y.mock && (!0 === y.mock ? i.duration = i.delay = 1 : (i.duration *= parseFloat(y.mock) || 1, i.delay *= parseFloat(y.mock) || 1)), i.easing = l(i.easing, i.duration), i.begin && !u.isFunction(i.begin) && (i.begin = null), i.progress && !u.isFunction(i.progress) && (i.progress = null), i.complete && !u.isFunction(i.complete) && (i.complete = null), i.display !== d && null !== i.display && (i.display = i.display.toString().toLowerCase(), "auto" === i.display && (i.display = y.CSS.Values.getDisplayType(a))), i.visibility !== d && null !== i.visibility && (i.visibility = i.visibility.toString().toLowerCase()), i.mobileHA = i.mobileHA && y.State.isMobile && !y.State.isGingerbread, !1 === i.queue) {
          if (i.delay) {
            var k = y.State.delayedElements.count++;
            y.State.delayedElements[k] = a;

            var n = function (a) {
              return function () {
                y.State.delayedElements[a] = !1, f();
              };
            }(k);

            g(a).delayBegin = new Date().getTime(), g(a).delay = parseFloat(i.delay), g(a).delayTimer = {
              setTimeout: setTimeout(f, parseFloat(i.delay)),
              next: n
            };
          } else f();
        } else o.queue(a, i.queue, function (a, b) {
          if (!0 === b) return z.promise && z.resolver(r), !0;
          y.velocityQueueEntryFlag = !0, f(a);
        });
        "" !== i.queue && "fx" !== i.queue || "inprogress" === o.queue(a)[0] || o.dequeue(a);
      }

      var j,
          k,
          p,
          q,
          r,
          s,
          v,
          x = arguments[0] && (arguments[0].p || o.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || u.isString(arguments[0].properties));
      u.isWrapped(this) ? (k = !1, q = 0, r = this, p = this) : (k = !0, q = 1, r = x ? arguments[0].elements || arguments[0].e : arguments[0]);
      var z = {
        promise: null,
        resolver: null,
        rejecter: null
      };
      if (k && y.Promise && (z.promise = new y.Promise(function (a, b) {
        z.resolver = a, z.rejecter = b;
      })), x ? (s = arguments[0].properties || arguments[0].p, v = arguments[0].options || arguments[0].o) : (s = arguments[q], v = arguments[q + 1]), !(r = f(r))) return void (z.promise && (s && v && !1 === v.promiseRejectEmpty ? z.resolver() : z.rejecter()));
      var C = r.length,
          D = 0;

      if (!/^(stop|finish|finishAll|pause|resume)$/i.test(s) && !o.isPlainObject(v)) {
        var E = q + 1;
        v = {};

        for (var F = E; F < arguments.length; F++) {
          u.isArray(arguments[F]) || !/^(fast|normal|slow)$/i.test(arguments[F]) && !/^\d/.test(arguments[F]) ? u.isString(arguments[F]) || u.isArray(arguments[F]) ? v.easing = arguments[F] : u.isFunction(arguments[F]) && (v.complete = arguments[F]) : v.duration = arguments[F];
        }
      }

      var G;

      switch (s) {
        case "scroll":
          G = "scroll";
          break;

        case "reverse":
          G = "reverse";
          break;

        case "pause":
          var H = new Date().getTime();
          return o.each(r, function (a, b) {
            h(b, H);
          }), o.each(y.State.calls, function (a, b) {
            var c = !1;
            b && o.each(b[1], function (a, e) {
              var f = v === d ? "" : v;
              return !0 !== f && b[2].queue !== f && (v !== d || !1 !== b[2].queue) || (o.each(r, function (a, d) {
                if (d === e) return b[5] = {
                  resume: !1
                }, c = !0, !1;
              }), !c && void 0);
            });
          }), a();

        case "resume":
          return o.each(r, function (a, b) {
            i(b, H);
          }), o.each(y.State.calls, function (a, b) {
            var c = !1;
            b && o.each(b[1], function (a, e) {
              var f = v === d ? "" : v;
              return !0 !== f && b[2].queue !== f && (v !== d || !1 !== b[2].queue) || !b[5] || (o.each(r, function (a, d) {
                if (d === e) return b[5].resume = !0, c = !0, !1;
              }), !c && void 0);
            });
          }), a();

        case "finish":
        case "finishAll":
        case "stop":
          o.each(r, function (a, b) {
            g(b) && g(b).delayTimer && (clearTimeout(g(b).delayTimer.setTimeout), g(b).delayTimer.next && g(b).delayTimer.next(), delete g(b).delayTimer), "finishAll" !== s || !0 !== v && !u.isString(v) || (o.each(o.queue(b, u.isString(v) ? v : ""), function (a, b) {
              u.isFunction(b) && b();
            }), o.queue(b, u.isString(v) ? v : "", []));
          });
          var I = [];
          return o.each(y.State.calls, function (a, b) {
            b && o.each(b[1], function (c, e) {
              var f = v === d ? "" : v;
              if (!0 !== f && b[2].queue !== f && (v !== d || !1 !== b[2].queue)) return !0;
              o.each(r, function (c, d) {
                if (d === e) if ((!0 === v || u.isString(v)) && (o.each(o.queue(d, u.isString(v) ? v : ""), function (a, b) {
                  u.isFunction(b) && b(null, !0);
                }), o.queue(d, u.isString(v) ? v : "", [])), "stop" === s) {
                  var h = g(d);
                  h && h.tweensContainer && (!0 === f || "" === f) && o.each(h.tweensContainer, function (a, b) {
                    b.endValue = b.currentValue;
                  }), I.push(a);
                } else "finish" !== s && "finishAll" !== s || (b[2].duration = 1);
              });
            });
          }), "stop" === s && (o.each(I, function (a, b) {
            n(b, !0);
          }), z.promise && z.resolver(r)), a();

        default:
          if (!o.isPlainObject(s) || u.isEmptyObject(s)) {
            if (u.isString(s) && y.Redirects[s]) {
              j = o.extend({}, v);
              var J = j.duration,
                  K = j.delay || 0;
              return !0 === j.backwards && (r = o.extend(!0, [], r).reverse()), o.each(r, function (a, b) {
                parseFloat(j.stagger) ? j.delay = K + parseFloat(j.stagger) * a : u.isFunction(j.stagger) && (j.delay = K + j.stagger.call(b, a, C)), j.drag && (j.duration = parseFloat(J) || (/^(callout|transition)/.test(s) ? 1e3 : w), j.duration = Math.max(j.duration * (j.backwards ? 1 - a / C : (a + 1) / C), .75 * j.duration, 200)), y.Redirects[s].call(b, b, j || {}, a, C, r, z.promise ? z : d);
              }), a();
            }

            var L = "Velocity: First argument (" + s + ") was not a property map, a known action, or a registered redirect. Aborting.";
            return z.promise ? z.rejecter(new Error(L)) : b.console && console.log(L), a();
          }

          G = "start";
      }

      var M = {
        lastParent: null,
        lastPosition: null,
        lastFontSize: null,
        lastPercentToPxWidth: null,
        lastPercentToPxHeight: null,
        lastEmToPx: null,
        remToPx: null,
        vwToPx: null,
        vhToPx: null
      },
          N = [];
      o.each(r, function (a, b) {
        u.isNode(b) && e(b, a);
      }), j = o.extend({}, y.defaults, v), j.loop = parseInt(j.loop, 10);
      var O = 2 * j.loop - 1;
      if (j.loop) for (var P = 0; P < O; P++) {
        var Q = {
          delay: j.delay,
          progress: j.progress
        };
        P === O - 1 && (Q.display = j.display, Q.visibility = j.visibility, Q.complete = j.complete), B(r, "reverse", Q);
      }
      return a();
    };

    y = o.extend(B, y), y.animate = B;
    var C = b.requestAnimationFrame || q;

    if (!y.State.isMobile && c.hidden !== d) {
      var D = function D() {
        c.hidden ? (C = function C(a) {
          return setTimeout(function () {
            a(!0);
          }, 16);
        }, m()) : C = b.requestAnimationFrame || q;
      };

      D(), c.addEventListener("visibilitychange", D);
    }

    return a.Velocity = y, a !== b && (a.fn.velocity = B, a.fn.velocity.defaults = y.defaults), o.each(["Down", "Up"], function (a, b) {
      y.Redirects["slide" + b] = function (a, c, e, f, g, h) {
        var i = o.extend({}, c),
            j = i.begin,
            k = i.complete,
            l = {},
            m = {
          height: "",
          marginTop: "",
          marginBottom: "",
          paddingTop: "",
          paddingBottom: ""
        };
        i.display === d && (i.display = "Down" === b ? "inline" === y.CSS.Values.getDisplayType(a) ? "inline-block" : "block" : "none"), i.begin = function () {
          0 === e && j && j.call(g, g);

          for (var c in m) {
            if (m.hasOwnProperty(c)) {
              l[c] = a.style[c];
              var d = A.getPropertyValue(a, c);
              m[c] = "Down" === b ? [d, 0] : [0, d];
            }
          }

          l.overflow = a.style.overflow, a.style.overflow = "hidden";
        }, i.complete = function () {
          for (var b in l) {
            l.hasOwnProperty(b) && (a.style[b] = l[b]);
          }

          e === f - 1 && (k && k.call(g, g), h && h.resolver(g));
        }, y(a, m, i);
      };
    }), o.each(["In", "Out"], function (a, b) {
      y.Redirects["fade" + b] = function (a, c, e, f, g, h) {
        var i = o.extend({}, c),
            j = i.complete,
            k = {
          opacity: "In" === b ? 1 : 0
        };
        0 !== e && (i.begin = null), i.complete = e !== f - 1 ? null : function () {
          j && j.call(g, g), h && h.resolver(g);
        }, i.display === d && (i.display = "In" === b ? "auto" : "none"), y(this, k, i);
      };
    }), y;
  }(window.jQuery || window.Zepto || window, window, window ? window.document : undefined);
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (a) {
  "use strict";

  "function" == typeof require && "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = a() : "function" == typeof define && define.amd ? define(["velocity"], a) : a();
}(function () {
  "use strict";

  return function (a, b, c, d) {
    var e = a.Velocity;
    if (!e || !e.Utilities) return void (b.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));
    var f = e.Utilities,
        g = e.version,
        h = {
      major: 1,
      minor: 1,
      patch: 0
    };

    if (function (a, b) {
      var c = [];
      return !(!a || !b) && (f.each([a, b], function (a, b) {
        var d = [];
        f.each(b, function (a, b) {
          for (; b.toString().length < 5;) {
            b = "0" + b;
          }

          d.push(b);
        }), c.push(d.join(""));
      }), parseFloat(c[0]) > parseFloat(c[1]));
    }(h, g)) {
      var i = "Velocity UI Pack: You need to update Velocity (velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
      throw alert(i), new Error(i);
    }

    e.RegisterEffect = e.RegisterUI = function (a, b) {
      function c(a, b, c, d) {
        var g,
            h = 0;
        f.each(a.nodeType ? [a] : a, function (a, b) {
          d && (c += a * d), g = b.parentNode;
          var i = ["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"];
          "border-box" === e.CSS.getPropertyValue(b, "boxSizing").toString().toLowerCase() && (i = ["height"]), f.each(i, function (a, c) {
            h += parseFloat(e.CSS.getPropertyValue(b, c));
          });
        }), e.animate(g, {
          height: ("In" === b ? "+" : "-") + "=" + h
        }, {
          queue: !1,
          easing: "ease-in-out",
          duration: c * ("In" === b ? .6 : 1)
        });
      }

      return e.Redirects[a] = function (d, g, h, i, j, k, l) {
        var m = h === i - 1,
            n = 0;
        l = l || b.loop, "function" == typeof b.defaultDuration ? b.defaultDuration = b.defaultDuration.call(j, j) : b.defaultDuration = parseFloat(b.defaultDuration);

        for (var o = 0; o < b.calls.length; o++) {
          "number" == typeof (t = b.calls[o][1]) && (n += t);
        }

        var p = n >= 1 ? 0 : b.calls.length ? (1 - n) / b.calls.length : 1;

        for (o = 0; o < b.calls.length; o++) {
          var q = b.calls[o],
              r = q[0],
              s = 1e3,
              t = q[1],
              u = q[2] || {},
              v = {};

          if (void 0 !== g.duration ? s = g.duration : void 0 !== b.defaultDuration && (s = b.defaultDuration), v.duration = s * ("number" == typeof t ? t : p), v.queue = g.queue || "", v.easing = u.easing || "ease", v.delay = parseFloat(u.delay) || 0, v.loop = !b.loop && u.loop, v._cacheValues = u._cacheValues || !0, 0 === o) {
            if (v.delay += parseFloat(g.delay) || 0, 0 === h && (v.begin = function () {
              g.begin && g.begin.call(j, j);
              var b = a.match(/(In|Out)$/);
              b && "In" === b[0] && void 0 !== r.opacity && f.each(j.nodeType ? [j] : j, function (a, b) {
                e.CSS.setPropertyValue(b, "opacity", 0);
              }), g.animateParentHeight && b && c(j, b[0], s + v.delay, g.stagger);
            }), null !== g.display) if (void 0 !== g.display && "none" !== g.display) v.display = g.display;else if (/In$/.test(a)) {
              var w = e.CSS.Values.getDisplayType(d);
              v.display = "inline" === w ? "inline-block" : w;
            }
            g.visibility && "hidden" !== g.visibility && (v.visibility = g.visibility);
          }

          if (o === b.calls.length - 1) {
            var x = function x() {
              void 0 !== g.display && "none" !== g.display || !/Out$/.test(a) || f.each(j.nodeType ? [j] : j, function (a, b) {
                e.CSS.setPropertyValue(b, "display", "none");
              }), g.complete && g.complete.call(j, j), k && k.resolver(j || d);
            };

            v.complete = function () {
              if (l && e.Redirects[a](d, g, h, i, j, k, !0 === l || Math.max(0, l - 1)), b.reset) {
                for (var c in b.reset) {
                  if (b.reset.hasOwnProperty(c)) {
                    var f = b.reset[c];
                    void 0 !== e.CSS.Hooks.registered[c] || "string" != typeof f && "number" != typeof f || (b.reset[c] = [b.reset[c], b.reset[c]]);
                  }
                }

                var n = {
                  duration: 0,
                  queue: !1
                };
                m && (n.complete = x), e.animate(d, b.reset, n);
              } else m && x();
            }, "hidden" === g.visibility && (v.visibility = g.visibility);
          }

          e.animate(d, r, v);
        }
      }, e;
    }, e.RegisterEffect.packagedEffects = {
      "callout.bounce": {
        defaultDuration: 550,
        calls: [[{
          translateY: -30
        }, .25], [{
          translateY: 0
        }, .125], [{
          translateY: -15
        }, .125], [{
          translateY: 0
        }, .25]]
      },
      "callout.shake": {
        defaultDuration: 800,
        calls: [[{
          translateX: -11
        }], [{
          translateX: 11
        }], [{
          translateX: -11
        }], [{
          translateX: 11
        }], [{
          translateX: -11
        }], [{
          translateX: 11
        }], [{
          translateX: -11
        }], [{
          translateX: 0
        }]]
      },
      "callout.flash": {
        defaultDuration: 1100,
        calls: [[{
          opacity: [0, "easeInOutQuad", 1]
        }], [{
          opacity: [1, "easeInOutQuad"]
        }], [{
          opacity: [0, "easeInOutQuad"]
        }], [{
          opacity: [1, "easeInOutQuad"]
        }]]
      },
      "callout.pulse": {
        defaultDuration: 825,
        calls: [[{
          scaleX: 1.1,
          scaleY: 1.1
        }, .5, {
          easing: "easeInExpo"
        }], [{
          scaleX: 1,
          scaleY: 1
        }, .5]]
      },
      "callout.swing": {
        defaultDuration: 950,
        calls: [[{
          rotateZ: 15
        }], [{
          rotateZ: -10
        }], [{
          rotateZ: 5
        }], [{
          rotateZ: -5
        }], [{
          rotateZ: 0
        }]]
      },
      "callout.tada": {
        defaultDuration: 1e3,
        calls: [[{
          scaleX: .9,
          scaleY: .9,
          rotateZ: -3
        }, .1], [{
          scaleX: 1.1,
          scaleY: 1.1,
          rotateZ: 3
        }, .1], [{
          scaleX: 1.1,
          scaleY: 1.1,
          rotateZ: -3
        }, .1], ["reverse", .125], ["reverse", .125], ["reverse", .125], ["reverse", .125], ["reverse", .125], [{
          scaleX: 1,
          scaleY: 1,
          rotateZ: 0
        }, .2]]
      },
      "transition.fadeIn": {
        defaultDuration: 500,
        calls: [[{
          opacity: [1, 0]
        }]]
      },
      "transition.fadeOut": {
        defaultDuration: 500,
        calls: [[{
          opacity: [0, 1]
        }]]
      },
      "transition.flipXIn": {
        defaultDuration: 700,
        calls: [[{
          opacity: [1, 0],
          transformPerspective: [800, 800],
          rotateY: [0, -55]
        }]],
        reset: {
          transformPerspective: 0
        }
      },
      "transition.flipXOut": {
        defaultDuration: 700,
        calls: [[{
          opacity: [0, 1],
          transformPerspective: [800, 800],
          rotateY: 55
        }]],
        reset: {
          transformPerspective: 0,
          rotateY: 0
        }
      },
      "transition.flipYIn": {
        defaultDuration: 800,
        calls: [[{
          opacity: [1, 0],
          transformPerspective: [800, 800],
          rotateX: [0, -45]
        }]],
        reset: {
          transformPerspective: 0
        }
      },
      "transition.flipYOut": {
        defaultDuration: 800,
        calls: [[{
          opacity: [0, 1],
          transformPerspective: [800, 800],
          rotateX: 25
        }]],
        reset: {
          transformPerspective: 0,
          rotateX: 0
        }
      },
      "transition.flipBounceXIn": {
        defaultDuration: 900,
        calls: [[{
          opacity: [.725, 0],
          transformPerspective: [400, 400],
          rotateY: [-10, 90]
        }, .5], [{
          opacity: .8,
          rotateY: 10
        }, .25], [{
          opacity: 1,
          rotateY: 0
        }, .25]],
        reset: {
          transformPerspective: 0
        }
      },
      "transition.flipBounceXOut": {
        defaultDuration: 800,
        calls: [[{
          opacity: [.9, 1],
          transformPerspective: [400, 400],
          rotateY: -10
        }], [{
          opacity: 0,
          rotateY: 90
        }]],
        reset: {
          transformPerspective: 0,
          rotateY: 0
        }
      },
      "transition.flipBounceYIn": {
        defaultDuration: 850,
        calls: [[{
          opacity: [.725, 0],
          transformPerspective: [400, 400],
          rotateX: [-10, 90]
        }, .5], [{
          opacity: .8,
          rotateX: 10
        }, .25], [{
          opacity: 1,
          rotateX: 0
        }, .25]],
        reset: {
          transformPerspective: 0
        }
      },
      "transition.flipBounceYOut": {
        defaultDuration: 800,
        calls: [[{
          opacity: [.9, 1],
          transformPerspective: [400, 400],
          rotateX: -15
        }], [{
          opacity: 0,
          rotateX: 90
        }]],
        reset: {
          transformPerspective: 0,
          rotateX: 0
        }
      },
      "transition.swoopIn": {
        defaultDuration: 850,
        calls: [[{
          opacity: [1, 0],
          transformOriginX: ["100%", "50%"],
          transformOriginY: ["100%", "100%"],
          scaleX: [1, 0],
          scaleY: [1, 0],
          translateX: [0, -700],
          translateZ: 0
        }]],
        reset: {
          transformOriginX: "50%",
          transformOriginY: "50%"
        }
      },
      "transition.swoopOut": {
        defaultDuration: 850,
        calls: [[{
          opacity: [0, 1],
          transformOriginX: ["50%", "100%"],
          transformOriginY: ["100%", "100%"],
          scaleX: 0,
          scaleY: 0,
          translateX: -700,
          translateZ: 0
        }]],
        reset: {
          transformOriginX: "50%",
          transformOriginY: "50%",
          scaleX: 1,
          scaleY: 1,
          translateX: 0
        }
      },
      "transition.whirlIn": {
        defaultDuration: 850,
        calls: [[{
          opacity: [1, 0],
          transformOriginX: ["50%", "50%"],
          transformOriginY: ["50%", "50%"],
          scaleX: [1, 0],
          scaleY: [1, 0],
          rotateY: [0, 160]
        }, 1, {
          easing: "easeInOutSine"
        }]]
      },
      "transition.whirlOut": {
        defaultDuration: 750,
        calls: [[{
          opacity: [0, "easeInOutQuint", 1],
          transformOriginX: ["50%", "50%"],
          transformOriginY: ["50%", "50%"],
          scaleX: 0,
          scaleY: 0,
          rotateY: 160
        }, 1, {
          easing: "swing"
        }]],
        reset: {
          scaleX: 1,
          scaleY: 1,
          rotateY: 0
        }
      },
      "transition.shrinkIn": {
        defaultDuration: 750,
        calls: [[{
          opacity: [1, 0],
          transformOriginX: ["50%", "50%"],
          transformOriginY: ["50%", "50%"],
          scaleX: [1, 1.5],
          scaleY: [1, 1.5],
          translateZ: 0
        }]]
      },
      "transition.shrinkOut": {
        defaultDuration: 600,
        calls: [[{
          opacity: [0, 1],
          transformOriginX: ["50%", "50%"],
          transformOriginY: ["50%", "50%"],
          scaleX: 1.3,
          scaleY: 1.3,
          translateZ: 0
        }]],
        reset: {
          scaleX: 1,
          scaleY: 1
        }
      },
      "transition.expandIn": {
        defaultDuration: 700,
        calls: [[{
          opacity: [1, 0],
          transformOriginX: ["50%", "50%"],
          transformOriginY: ["50%", "50%"],
          scaleX: [1, .625],
          scaleY: [1, .625],
          translateZ: 0
        }]]
      },
      "transition.expandOut": {
        defaultDuration: 700,
        calls: [[{
          opacity: [0, 1],
          transformOriginX: ["50%", "50%"],
          transformOriginY: ["50%", "50%"],
          scaleX: .5,
          scaleY: .5,
          translateZ: 0
        }]],
        reset: {
          scaleX: 1,
          scaleY: 1
        }
      },
      "transition.bounceIn": {
        defaultDuration: 800,
        calls: [[{
          opacity: [1, 0],
          scaleX: [1.05, .3],
          scaleY: [1.05, .3]
        }, .35], [{
          scaleX: .9,
          scaleY: .9,
          translateZ: 0
        }, .2], [{
          scaleX: 1,
          scaleY: 1
        }, .45]]
      },
      "transition.bounceOut": {
        defaultDuration: 800,
        calls: [[{
          scaleX: .95,
          scaleY: .95
        }, .35], [{
          scaleX: 1.1,
          scaleY: 1.1,
          translateZ: 0
        }, .35], [{
          opacity: [0, 1],
          scaleX: .3,
          scaleY: .3
        }, .3]],
        reset: {
          scaleX: 1,
          scaleY: 1
        }
      },
      "transition.bounceUpIn": {
        defaultDuration: 800,
        calls: [[{
          opacity: [1, 0],
          translateY: [-30, 1e3]
        }, .6, {
          easing: "easeOutCirc"
        }], [{
          translateY: 10
        }, .2], [{
          translateY: 0
        }, .2]]
      },
      "transition.bounceUpOut": {
        defaultDuration: 1e3,
        calls: [[{
          translateY: 20
        }, .2], [{
          opacity: [0, "easeInCirc", 1],
          translateY: -1e3
        }, .8]],
        reset: {
          translateY: 0
        }
      },
      "transition.bounceDownIn": {
        defaultDuration: 800,
        calls: [[{
          opacity: [1, 0],
          translateY: [30, -1e3]
        }, .6, {
          easing: "easeOutCirc"
        }], [{
          translateY: -10
        }, .2], [{
          translateY: 0
        }, .2]]
      },
      "transition.bounceDownOut": {
        defaultDuration: 1e3,
        calls: [[{
          translateY: -20
        }, .2], [{
          opacity: [0, "easeInCirc", 1],
          translateY: 1e3
        }, .8]],
        reset: {
          translateY: 0
        }
      },
      "transition.bounceLeftIn": {
        defaultDuration: 750,
        calls: [[{
          opacity: [1, 0],
          translateX: [30, -1250]
        }, .6, {
          easing: "easeOutCirc"
        }], [{
          translateX: -10
        }, .2], [{
          translateX: 0
        }, .2]]
      },
      "transition.bounceLeftOut": {
        defaultDuration: 750,
        calls: [[{
          translateX: 30
        }, .2], [{
          opacity: [0, "easeInCirc", 1],
          translateX: -1250
        }, .8]],
        reset: {
          translateX: 0
        }
      },
      "transition.bounceRightIn": {
        defaultDuration: 750,
        calls: [[{
          opacity: [1, 0],
          translateX: [-30, 1250]
        }, .6, {
          easing: "easeOutCirc"
        }], [{
          translateX: 10
        }, .2], [{
          translateX: 0
        }, .2]]
      },
      "transition.bounceRightOut": {
        defaultDuration: 750,
        calls: [[{
          translateX: -30
        }, .2], [{
          opacity: [0, "easeInCirc", 1],
          translateX: 1250
        }, .8]],
        reset: {
          translateX: 0
        }
      },
      "transition.slideUpIn": {
        defaultDuration: 900,
        calls: [[{
          opacity: [1, 0],
          translateY: [0, 20],
          translateZ: 0
        }]]
      },
      "transition.slideUpOut": {
        defaultDuration: 900,
        calls: [[{
          opacity: [0, 1],
          translateY: -20,
          translateZ: 0
        }]],
        reset: {
          translateY: 0
        }
      },
      "transition.slideDownIn": {
        defaultDuration: 900,
        calls: [[{
          opacity: [1, 0],
          translateY: [0, -20],
          translateZ: 0
        }]]
      },
      "transition.slideDownOut": {
        defaultDuration: 900,
        calls: [[{
          opacity: [0, 1],
          translateY: 20,
          translateZ: 0
        }]],
        reset: {
          translateY: 0
        }
      },
      "transition.slideLeftIn": {
        defaultDuration: 1e3,
        calls: [[{
          opacity: [1, 0],
          translateX: [0, -20],
          translateZ: 0
        }]]
      },
      "transition.slideLeftOut": {
        defaultDuration: 1050,
        calls: [[{
          opacity: [0, 1],
          translateX: -20,
          translateZ: 0
        }]],
        reset: {
          translateX: 0
        }
      },
      "transition.slideRightIn": {
        defaultDuration: 1e3,
        calls: [[{
          opacity: [1, 0],
          translateX: [0, 20],
          translateZ: 0
        }]]
      },
      "transition.slideRightOut": {
        defaultDuration: 1050,
        calls: [[{
          opacity: [0, 1],
          translateX: 20,
          translateZ: 0
        }]],
        reset: {
          translateX: 0
        }
      },
      "transition.slideUpBigIn": {
        defaultDuration: 850,
        calls: [[{
          opacity: [1, 0],
          translateY: [0, 75],
          translateZ: 0
        }]]
      },
      "transition.slideUpBigOut": {
        defaultDuration: 800,
        calls: [[{
          opacity: [0, 1],
          translateY: -75,
          translateZ: 0
        }]],
        reset: {
          translateY: 0
        }
      },
      "transition.slideDownBigIn": {
        defaultDuration: 850,
        calls: [[{
          opacity: [1, 0],
          translateY: [0, -75],
          translateZ: 0
        }]]
      },
      "transition.slideDownBigOut": {
        defaultDuration: 800,
        calls: [[{
          opacity: [0, 1],
          translateY: 75,
          translateZ: 0
        }]],
        reset: {
          translateY: 0
        }
      },
      "transition.slideLeftBigIn": {
        defaultDuration: 800,
        calls: [[{
          opacity: [1, 0],
          translateX: [0, -75],
          translateZ: 0
        }]]
      },
      "transition.slideLeftBigOut": {
        defaultDuration: 750,
        calls: [[{
          opacity: [0, 1],
          translateX: -75,
          translateZ: 0
        }]],
        reset: {
          translateX: 0
        }
      },
      "transition.slideRightBigIn": {
        defaultDuration: 800,
        calls: [[{
          opacity: [1, 0],
          translateX: [0, 75],
          translateZ: 0
        }]]
      },
      "transition.slideRightBigOut": {
        defaultDuration: 750,
        calls: [[{
          opacity: [0, 1],
          translateX: 75,
          translateZ: 0
        }]],
        reset: {
          translateX: 0
        }
      },
      "transition.perspectiveUpIn": {
        defaultDuration: 800,
        calls: [[{
          opacity: [1, 0],
          transformPerspective: [800, 800],
          transformOriginX: [0, 0],
          transformOriginY: ["100%", "100%"],
          rotateX: [0, -180]
        }]],
        reset: {
          transformPerspective: 0,
          transformOriginX: "50%",
          transformOriginY: "50%"
        }
      },
      "transition.perspectiveUpOut": {
        defaultDuration: 850,
        calls: [[{
          opacity: [0, 1],
          transformPerspective: [800, 800],
          transformOriginX: [0, 0],
          transformOriginY: ["100%", "100%"],
          rotateX: -180
        }]],
        reset: {
          transformPerspective: 0,
          transformOriginX: "50%",
          transformOriginY: "50%",
          rotateX: 0
        }
      },
      "transition.perspectiveDownIn": {
        defaultDuration: 800,
        calls: [[{
          opacity: [1, 0],
          transformPerspective: [800, 800],
          transformOriginX: [0, 0],
          transformOriginY: [0, 0],
          rotateX: [0, 180]
        }]],
        reset: {
          transformPerspective: 0,
          transformOriginX: "50%",
          transformOriginY: "50%"
        }
      },
      "transition.perspectiveDownOut": {
        defaultDuration: 850,
        calls: [[{
          opacity: [0, 1],
          transformPerspective: [800, 800],
          transformOriginX: [0, 0],
          transformOriginY: [0, 0],
          rotateX: 180
        }]],
        reset: {
          transformPerspective: 0,
          transformOriginX: "50%",
          transformOriginY: "50%",
          rotateX: 0
        }
      },
      "transition.perspectiveLeftIn": {
        defaultDuration: 950,
        calls: [[{
          opacity: [1, 0],
          transformPerspective: [2e3, 2e3],
          transformOriginX: [0, 0],
          transformOriginY: [0, 0],
          rotateY: [0, -180]
        }]],
        reset: {
          transformPerspective: 0,
          transformOriginX: "50%",
          transformOriginY: "50%"
        }
      },
      "transition.perspectiveLeftOut": {
        defaultDuration: 950,
        calls: [[{
          opacity: [0, 1],
          transformPerspective: [2e3, 2e3],
          transformOriginX: [0, 0],
          transformOriginY: [0, 0],
          rotateY: -180
        }]],
        reset: {
          transformPerspective: 0,
          transformOriginX: "50%",
          transformOriginY: "50%",
          rotateY: 0
        }
      },
      "transition.perspectiveRightIn": {
        defaultDuration: 950,
        calls: [[{
          opacity: [1, 0],
          transformPerspective: [2e3, 2e3],
          transformOriginX: ["100%", "100%"],
          transformOriginY: [0, 0],
          rotateY: [0, 180]
        }]],
        reset: {
          transformPerspective: 0,
          transformOriginX: "50%",
          transformOriginY: "50%"
        }
      },
      "transition.perspectiveRightOut": {
        defaultDuration: 950,
        calls: [[{
          opacity: [0, 1],
          transformPerspective: [2e3, 2e3],
          transformOriginX: ["100%", "100%"],
          transformOriginY: [0, 0],
          rotateY: 180
        }]],
        reset: {
          transformPerspective: 0,
          transformOriginX: "50%",
          transformOriginY: "50%",
          rotateY: 0
        }
      }
    };

    for (var j in e.RegisterEffect.packagedEffects) {
      e.RegisterEffect.packagedEffects.hasOwnProperty(j) && e.RegisterEffect(j, e.RegisterEffect.packagedEffects[j]);
    }

    e.RunSequence = function (a) {
      var b = f.extend(!0, [], a);
      b.length > 1 && (f.each(b.reverse(), function (a, c) {
        var d = b[a + 1];

        if (d) {
          var g = c.o || c.options,
              h = d.o || d.options,
              i = g && !1 === g.sequenceQueue ? "begin" : "complete",
              j = h && h[i],
              k = {};
          k[i] = function () {
            var a = d.e || d.elements,
                b = a.nodeType ? [a] : a;
            j && j.call(b, b), e(c);
          }, d.o ? d.o = f.extend({}, h, k) : d.options = f.extend({}, h, k);
        }
      }), b.reverse()), e(b[0]);
    };
  }(window.jQuery || window.Zepto || window, window, window ? window.document : undefined);
});
"use strict";

!function (u) {
  var a = {
    treshold: 4,
    maximumItems: 5,
    highlightTyped: !0,
    highlightClass: "text-primary"
  };

  function p(e, t, o) {
    var a;

    if (o.highlightTyped) {
      var l = t.label.toLowerCase().indexOf(e.toLowerCase());
      a = t.label.substring(0, l) + '<span class="' + o.highlightClass + '">' + t.label.substring(l, l + e.length) + "</span>" + t.label.substring(l + e.length, t.label.length);
    } else a = t.label;

    return '<button type="button" class="dropdown-item" data-value="' + t.value + '">' + a + "</button>";
  }

  function l(e, t) {
    var o = e.val();
    if (o.length < t.treshold) return e.dropdown("hide"), 0;
    var a = e.next();
    a.html("");

    for (var l = 0, n = Object.keys(t.source), r = 0; r < n.length; r++) {
      var d = n[r],
          i = t.source[d],
          s = {
        label: t.label ? i[t.label] : d,
        value: t.value ? i[t.value] : i
      };
      if (0 <= s.label.toLowerCase().indexOf(o.toLowerCase()) && (a.append(p(o, s, t)), ++l >= t.maximumItems)) break;
    }

    return e.next().find(".dropdown-item").click(function () {
      e.val(u(this).text()), t.onSelectItem && t.onSelectItem({
        value: u(this).data("value"),
        label: u(this).text()
      }, e[0]);
    }), a.children().length;
  }

  u.fn.autocomplete = function (e) {
    var t = {};
    u.extend(t, a, e);
    var o = u(this);
    return o.parent().removeClass("dropdown"), o.removeAttr("data-toggle"), o.removeClass("dropdown-toggle"), o.parent().find(".dropdown-menu").remove(), o.dropdown("dispose"), o.parent().addClass("dropdown"), o.attr("data-toggle", "dropdown"), o.addClass("dropdown-toggle"), o.after('<div class="dropdown-menu"></div>'), o.dropdown(t.dropdownOptions), this.off("click.autocomplete").click("click.autocomplete", function (e) {
      0 == l(o, t) && (e.stopPropagation(), o.dropdown("hide"));
    }), this.off("keyup.autocomplete").keyup("keyup.autocomplete", function () {
      0 < l(o, t) ? o.dropdown("show") : o.click();
    }), this;
  };
}(jQuery);
"use strict";

(function ($, undefined) {
  'use strict';

  var defaults = {
    item: 3,
    autoWidth: false,
    slideMove: 1,
    slideMargin: 10,
    addClass: '',
    mode: 'fade',
    useCSS: true,
    cssEasing: 'ease',
    //'cubic-bezier(0.25, 0, 0.25, 1)',
    easing: 'linear',
    //'for jquery animation',//
    speed: 500,
    //ms'
    auto: true,
    pauseOnHover: false,
    loop: true,
    slideEndAnimation: true,
    pause: 2000,
    keyPress: true,
    controls: true,
    prevHtml: '',
    nextHtml: '',
    rtl: false,
    adaptiveHeight: false,
    vertical: false,
    verticalHeight: 500,
    vThumbWidth: 100,
    thumbItem: 6,
    pager: true,
    gallery: true,
    galleryMargin: 5,
    thumbMargin: 30,
    currentPagerPosition: 'middle',
    enableTouch: true,
    enableDrag: true,
    freeMove: false,
    swipeThreshold: 40,
    responsive: [],

    /* jshint ignore:start */
    onBeforeStart: function onBeforeStart($el) {},
    onSliderLoad: function onSliderLoad($el) {},
    onBeforeSlide: function onBeforeSlide($el, scene) {},
    onAfterSlide: function onAfterSlide($el, scene) {},
    onBeforeNextSlide: function onBeforeNextSlide($el, scene) {},
    onBeforePrevSlide: function onBeforePrevSlide($el, scene) {}
    /* jshint ignore:end */

  };

  $.fn.lightSlider = function (options) {
    if (this.length === 0) {
      return this;
    }

    if (this.length > 1) {
      this.each(function () {
        $(this).lightSlider(options);
      });
      return this;
    }

    var plugin = {},
        settings = $.extend(true, {}, defaults, options),
        settingsTemp = {},
        $el = this;
    plugin.$el = this;

    if (settings.mode === 'fade') {
      settings.vertical = false;
    }

    var $children = $el.children(),
        windowW = $(window).width(),
        breakpoint = null,
        resposiveObj = null,
        length = 0,
        w = 0,
        on = false,
        elSize = 0,
        $slide = '',
        scene = 0,
        property = settings.vertical === true ? 'height' : 'width',
        gutter = settings.vertical === true ? 'margin-bottom' : 'margin-right',
        slideValue = 0,
        pagerWidth = 0,
        slideWidth = 0,
        thumbWidth = 0,
        interval = null,
        isTouch = 'ontouchstart' in document.documentElement;
    var refresh = {};

    refresh.chbreakpoint = function () {
      windowW = $(window).width();

      if (settings.responsive.length) {
        var item;

        if (settings.autoWidth === false) {
          item = settings.item;
        }

        if (windowW < settings.responsive[0].breakpoint) {
          for (var i = 0; i < settings.responsive.length; i++) {
            if (windowW < settings.responsive[i].breakpoint) {
              breakpoint = settings.responsive[i].breakpoint;
              resposiveObj = settings.responsive[i];
            }
          }
        }

        if (typeof resposiveObj !== 'undefined' && resposiveObj !== null) {
          for (var j in resposiveObj.settings) {
            if (resposiveObj.settings.hasOwnProperty(j)) {
              if (typeof settingsTemp[j] === 'undefined' || settingsTemp[j] === null) {
                settingsTemp[j] = settings[j];
              }

              settings[j] = resposiveObj.settings[j];
            }
          }
        }

        if (!$.isEmptyObject(settingsTemp) && windowW > settings.responsive[0].breakpoint) {
          for (var k in settingsTemp) {
            if (settingsTemp.hasOwnProperty(k)) {
              settings[k] = settingsTemp[k];
            }
          }
        }

        if (settings.autoWidth === false) {
          if (slideValue > 0 && slideWidth > 0) {
            if (item !== settings.item) {
              scene = Math.round(slideValue / ((slideWidth + settings.slideMargin) * settings.slideMove));
            }
          }
        }
      }
    };

    refresh.calSW = function () {
      if (settings.autoWidth === false) {
        slideWidth = (elSize - (settings.item * settings.slideMargin - settings.slideMargin)) / settings.item;
      }
    };

    refresh.calWidth = function (cln) {
      var ln = cln === true ? $slide.find('.lslide').length : $children.length;

      if (settings.autoWidth === false) {
        w = ln * (slideWidth + settings.slideMargin);
      } else {
        w = 0;

        for (var i = 0; i < ln; i++) {
          w += parseInt($children.eq(i).width()) + settings.slideMargin;
        }
      }

      return w;
    };

    plugin = {
      doCss: function doCss() {
        var support = function support() {
          var transition = ['transition', 'MozTransition', 'WebkitTransition', 'OTransition', 'msTransition', 'KhtmlTransition'];
          var root = document.documentElement;

          for (var i = 0; i < transition.length; i++) {
            if (transition[i] in root.style) {
              return true;
            }
          }
        };

        if (settings.useCSS && support()) {
          return true;
        }

        return false;
      },
      keyPress: function keyPress() {
        if (settings.keyPress) {
          $(document).on('keyup.lightslider', function (e) {
            if (!$(':focus').is('input, textarea')) {
              if (e.preventDefault) {
                e.preventDefault();
              } else {
                e.returnValue = false;
              }

              if (e.keyCode === 37) {
                $el.goToPrevSlide();
              } else if (e.keyCode === 39) {
                $el.goToNextSlide();
              }
            }
          });
        }
      },
      controls: function controls() {
        if (settings.controls) {
          $el.after('<div class="lSAction"><a class="lSPrev">' + settings.prevHtml + '</a><a class="lSNext">' + settings.nextHtml + '</a></div>');

          if (!settings.autoWidth) {
            if (length <= settings.item) {
              $slide.find('.lSAction').hide();
            }
          } else {
            if (refresh.calWidth(false) < elSize) {
              $slide.find('.lSAction').hide();
            }
          }

          $slide.find('.lSAction a').on('click', function (e) {
            if (e.preventDefault) {
              e.preventDefault();
            } else {
              e.returnValue = false;
            }

            if ($(this).attr('class') === 'lSPrev') {
              $el.goToPrevSlide();
            } else {
              $el.goToNextSlide();
            }

            return false;
          });
        }
      },
      initialStyle: function initialStyle() {
        var $this = this;

        if (settings.mode === 'fade') {
          settings.autoWidth = false;
          settings.slideEndAnimation = false;
        }

        if (settings.auto) {
          settings.slideEndAnimation = false;
        }

        if (settings.autoWidth) {
          settings.slideMove = 1;
          settings.item = 1;
        }

        if (settings.loop) {
          settings.slideMove = 1;
          settings.freeMove = false;
        }

        settings.onBeforeStart.call(this, $el);
        refresh.chbreakpoint();
        $el.addClass('lightSlider').wrap('<div class="lSSlideOuter ' + settings.addClass + '"><div class="lSSlideWrapper"></div></div>');
        $slide = $el.parent('.lSSlideWrapper');

        if (settings.rtl === true) {
          $slide.parent().addClass('lSrtl');
        }

        if (settings.vertical) {
          $slide.parent().addClass('vertical');
          elSize = settings.verticalHeight;
          $slide.css('height', elSize + 'px');
        } else {
          elSize = $el.outerWidth();
        }

        $children.addClass('lslide');

        if (settings.loop === true && settings.mode === 'slide') {
          refresh.calSW();

          refresh.clone = function () {
            if (refresh.calWidth(true) > elSize) {
              /**/
              var tWr = 0,
                  tI = 0;

              for (var k = 0; k < $children.length; k++) {
                tWr += parseInt($el.find('.lslide').eq(k).width()) + settings.slideMargin;
                tI++;

                if (tWr >= elSize + settings.slideMargin) {
                  break;
                }
              }

              var tItem = settings.autoWidth === true ? tI : settings.item;
              /**/

              if (tItem < $el.find('.clone.left').length) {
                for (var i = 0; i < $el.find('.clone.left').length - tItem; i++) {
                  $children.eq(i).remove();
                }
              }

              if (tItem < $el.find('.clone.right').length) {
                for (var j = $children.length - 1; j > $children.length - 1 - $el.find('.clone.right').length; j--) {
                  scene--;
                  $children.eq(j).remove();
                }
              }
              /**/


              for (var n = $el.find('.clone.right').length; n < tItem; n++) {
                $el.find('.lslide').eq(n).clone().removeClass('lslide').addClass('clone right').appendTo($el);
                scene++;
              }

              for (var m = $el.find('.lslide').length - $el.find('.clone.left').length; m > $el.find('.lslide').length - tItem; m--) {
                $el.find('.lslide').eq(m - 1).clone().removeClass('lslide').addClass('clone left').prependTo($el);
              }

              $children = $el.children();
            } else {
              if ($children.hasClass('clone')) {
                $el.find('.clone').remove();
                $this.move($el, 0);
              }
            }
          };

          refresh.clone();
        }

        refresh.sSW = function () {
          length = $children.length;

          if (settings.rtl === true && settings.vertical === false) {
            gutter = 'margin-left';
          }

          if (settings.autoWidth === false) {
            $children.css(property, slideWidth + 'px');
          }

          $children.css(gutter, settings.slideMargin + 'px');
          w = refresh.calWidth(false);
          $el.css(property, w + 'px');

          if (settings.loop === true && settings.mode === 'slide') {
            if (on === false) {
              scene = $el.find('.clone.left').length;
            }
          }
        };

        refresh.calL = function () {
          $children = $el.children();
          length = $children.length;
        };

        if (this.doCss()) {
          $slide.addClass('usingCss');
        }

        refresh.calL();

        if (settings.mode === 'slide') {
          refresh.calSW();
          refresh.sSW();

          if (settings.loop === true) {
            slideValue = $this.slideValue();
            this.move($el, slideValue);
          }

          if (settings.vertical === false) {
            this.setHeight($el, false);
          }
        } else {
          this.setHeight($el, true);
          $el.addClass('lSFade');

          if (!this.doCss()) {
            $children.fadeOut(0);
            $children.eq(scene).fadeIn(0);
          }
        }

        if (settings.loop === true && settings.mode === 'slide') {
          $children.eq(scene).addClass('active');
        } else {
          $children.first().addClass('active');
        }
      },
      pager: function pager() {
        var $this = this;

        refresh.createPager = function () {
          thumbWidth = (elSize - (settings.thumbItem * settings.thumbMargin - settings.thumbMargin)) / settings.thumbItem;
          var $children = $slide.find('.lslide');
          var length = $slide.find('.lslide').length;
          var i = 0,
              pagers = '',
              v = 0;

          for (i = 0; i < length; i++) {
            if (settings.mode === 'slide') {
              // calculate scene * slide value
              if (!settings.autoWidth) {
                v = i * ((slideWidth + settings.slideMargin) * settings.slideMove);
              } else {
                v += (parseInt($children.eq(i).width()) + settings.slideMargin) * settings.slideMove;
              }
            }

            var thumb = $children.eq(i * settings.slideMove).attr('data-thumb');

            if (settings.gallery === true) {
              pagers += '<li style="width:100%;' + property + ':' + thumbWidth + 'px;' + gutter + ':' + settings.thumbMargin + 'px"><a href="#"><img src="' + thumb + '" /></a></li>';
            } else {
              pagers += '<li><a href="#">' + (i + 1) + '</a></li>';
            }

            if (settings.mode === 'slide') {
              if (v >= w - elSize - settings.slideMargin) {
                i = i + 1;
                var minPgr = 2;

                if (settings.autoWidth) {
                  pagers += '<li><a href="#">' + (i + 1) + '</a></li>';
                  minPgr = 1;
                }

                if (i < minPgr) {
                  pagers = null;
                  $slide.parent().addClass('noPager');
                } else {
                  $slide.parent().removeClass('noPager');
                }

                break;
              }
            }
          }

          var $cSouter = $slide.parent();
          $cSouter.find('.lSPager').html(pagers);

          if (settings.gallery === true) {
            if (settings.vertical === true) {
              // set Gallery thumbnail width
              $cSouter.find('.lSPager').css('width', settings.vThumbWidth + 'px');
            }

            pagerWidth = i * (settings.thumbMargin + thumbWidth) + 0.5;
            $cSouter.find('.lSPager').css({
              property: pagerWidth + 'px',
              'transition-duration': settings.speed + 'ms'
            });

            if (settings.vertical === true) {
              $slide.parent().css('padding-right', settings.vThumbWidth + settings.galleryMargin + 'px');
            }

            $cSouter.find('.lSPager').css(property, pagerWidth + 'px');
          }

          var $pager = $cSouter.find('.lSPager').find('li');
          $pager.first().addClass('active');
          $pager.on('click', function () {
            if (settings.loop === true && settings.mode === 'slide') {
              scene = scene + ($pager.index(this) - $cSouter.find('.lSPager').find('li.active').index());
            } else {
              scene = $pager.index(this);
            }

            $el.mode(false);

            if (settings.gallery === true) {
              $this.slideThumb();
            }

            return false;
          });
        };

        if (settings.pager) {
          var cl = 'lSpg';

          if (settings.gallery) {
            cl = 'lSGallery';
          }

          $slide.after('<div class="thumbnailpage"><ul class="lSPager ' + cl + '"></ul></div>');
          var gMargin = settings.vertical ? 'margin-left' : 'margin-top';
          $slide.parent().find('.lSPager').css(gMargin, settings.galleryMargin + 'px');
          refresh.createPager();
        }

        setTimeout(function () {
          refresh.init();
        }, 0);
      },
      setHeight: function setHeight(ob, fade) {
        var obj = null,
            $this = this;

        if (settings.loop) {
          obj = ob.children('.lslide ').first();
        } else {
          obj = ob.children().first();
        }

        var setCss = function setCss() {
          var tH = obj.outerHeight(),
              tP = 0,
              tHT = tH;

          if (fade) {
            tH = 0;
            tP = tHT * 100 / elSize;
          }

          ob.css({
            'height': tH + 'px',
            'padding-bottom': tP + '%'
          });
        };

        setCss();

        if (obj.find('img').length) {
          if (obj.find('img')[0].complete) {
            setCss();

            if (!interval) {
              $this.auto();
            }
          } else {
            obj.find('img').load(function () {
              setTimeout(function () {
                setCss();

                if (!interval) {
                  $this.auto();
                }
              }, 100);
            });
          }
        } else {
          if (!interval) {
            $this.auto();
          }
        }
      },
      active: function active(ob, t) {
        if (this.doCss() && settings.mode === 'fade') {
          $slide.addClass('on');
        }

        var sc = 0;

        if (scene * settings.slideMove < length) {
          ob.removeClass('active');

          if (!this.doCss() && settings.mode === 'fade' && t === false) {
            ob.fadeOut(settings.speed);
          }

          if (t === true) {
            sc = scene;
          } else {
            sc = scene * settings.slideMove;
          } //t === true ? sc = scene : sc = scene * settings.slideMove;


          var l, nl;

          if (t === true) {
            l = ob.length;
            nl = l - 1;

            if (sc + 1 >= l) {
              sc = nl;
            }
          }

          if (settings.loop === true && settings.mode === 'slide') {
            //t === true ? sc = scene - $el.find('.clone.left').length : sc = scene * settings.slideMove;
            if (t === true) {
              sc = scene - $el.find('.clone.left').length;
            } else {
              sc = scene * settings.slideMove;
            }

            if (t === true) {
              l = ob.length;
              nl = l - 1;

              if (sc + 1 === l) {
                sc = nl;
              } else if (sc + 1 > l) {
                sc = 0;
              }
            }
          }

          if (!this.doCss() && settings.mode === 'fade' && t === false) {
            ob.eq(sc).fadeIn(settings.speed);
          }

          ob.eq(sc).addClass('active');
        } else {
          ob.removeClass('active');
          ob.eq(ob.length - 1).addClass('active');

          if (!this.doCss() && settings.mode === 'fade' && t === false) {
            ob.fadeOut(settings.speed);
            ob.eq(sc).fadeIn(settings.speed);
          }
        }
      },
      move: function move(ob, v) {
        if (settings.rtl === true) {
          v = -v;
        }

        if (this.doCss()) {
          if (settings.vertical === true) {
            ob.css({
              'transform': 'translate3d(0px, ' + -v + 'px, 0px)',
              '-webkit-transform': 'translate3d(0px, ' + -v + 'px, 0px)'
            });
          } else {
            ob.css({
              'transform': 'translate3d(' + -v + 'px, 0px, 0px)',
              '-webkit-transform': 'translate3d(' + -v + 'px, 0px, 0px)'
            });
          }
        } else {
          if (settings.vertical === true) {
            ob.css('position', 'relative').animate({
              top: -v + 'px'
            }, settings.speed, settings.easing);
          } else {
            ob.css('position', 'relative').animate({
              left: -v + 'px'
            }, settings.speed, settings.easing);
          }
        }

        var $thumb = $slide.parent().find('.lSPager').find('li');
        this.active($thumb, true);
      },
      fade: function fade() {
        this.active($children, false);
        var $thumb = $slide.parent().find('.lSPager').find('li');
        this.active($thumb, true);
      },
      slide: function slide() {
        var $this = this;

        refresh.calSlide = function () {
          if (w > elSize) {
            slideValue = $this.slideValue();
            $this.active($children, false);

            if (slideValue > w - elSize - settings.slideMargin) {
              slideValue = w - elSize - settings.slideMargin;
            } else if (slideValue < 0) {
              slideValue = 0;
            }

            $this.move($el, slideValue);

            if (settings.loop === true && settings.mode === 'slide') {
              if (scene >= length - $el.find('.clone.left').length / settings.slideMove) {
                $this.resetSlide($el.find('.clone.left').length);
              }

              if (scene === 0) {
                $this.resetSlide($slide.find('.lslide').length);
              }
            }
          }
        };

        refresh.calSlide();
      },
      resetSlide: function resetSlide(s) {
        var $this = this;
        $slide.find('.lSAction a').addClass('disabled');
        setTimeout(function () {
          scene = s;
          $slide.css('transition-duration', '0ms');
          slideValue = $this.slideValue();
          $this.active($children, false);
          plugin.move($el, slideValue);
          setTimeout(function () {
            $slide.css('transition-duration', settings.speed + 'ms');
            $slide.find('.lSAction a').removeClass('disabled');
          }, 50);
        }, settings.speed + 100);
      },
      slideValue: function slideValue() {
        var _sV = 0;

        if (settings.autoWidth === false) {
          _sV = scene * ((slideWidth + settings.slideMargin) * settings.slideMove);
        } else {
          _sV = 0;

          for (var i = 0; i < scene; i++) {
            _sV += parseInt($children.eq(i).width()) + settings.slideMargin;
          }
        }

        return _sV;
      },
      slideThumb: function slideThumb() {
        var position;

        switch (settings.currentPagerPosition) {
          case 'left':
            position = 0;
            break;

          case 'middle':
            position = elSize / 2 - thumbWidth / 2;
            break;

          case 'right':
            position = elSize - thumbWidth;
        }

        var sc = scene - $el.find('.clone.left').length;
        var $pager = $slide.parent().find('.lSPager');

        if (settings.mode === 'slide' && settings.loop === true) {
          if (sc >= $pager.children().length) {
            sc = 0;
          } else if (sc < 0) {
            sc = $pager.children().length;
          }
        }

        var thumbSlide = sc * (thumbWidth + settings.thumbMargin) - position;

        if (thumbSlide + elSize > pagerWidth) {
          thumbSlide = pagerWidth - elSize - settings.thumbMargin;
        }

        if (thumbSlide < 0) {
          thumbSlide = 0;
        }

        this.move($pager, thumbSlide);
      },
      auto: function auto() {
        if (settings.auto) {
          clearInterval(interval);
          interval = setInterval(function () {
            $el.goToNextSlide();
          }, settings.pause);
        }
      },
      pauseOnHover: function pauseOnHover() {
        var $this = this;

        if (settings.auto && settings.pauseOnHover) {
          $slide.on('mouseenter', function () {
            $(this).addClass('ls-hover');
            $el.pause();
            settings.auto = true;
          });
          $slide.on('mouseleave', function () {
            $(this).removeClass('ls-hover');

            if (!$slide.find('.lightSlider').hasClass('lsGrabbing')) {
              $this.auto();
            }
          });
        }
      },
      touchMove: function touchMove(endCoords, startCoords) {
        $slide.css('transition-duration', '0ms');

        if (settings.mode === 'slide') {
          var distance = endCoords - startCoords;
          var swipeVal = slideValue - distance;

          if (swipeVal >= w - elSize - settings.slideMargin) {
            if (settings.freeMove === false) {
              swipeVal = w - elSize - settings.slideMargin;
            } else {
              var swipeValT = w - elSize - settings.slideMargin;
              swipeVal = swipeValT + (swipeVal - swipeValT) / 5;
            }
          } else if (swipeVal < 0) {
            if (settings.freeMove === false) {
              swipeVal = 0;
            } else {
              swipeVal = swipeVal / 5;
            }
          }

          this.move($el, swipeVal);
        }
      },
      touchEnd: function touchEnd(distance) {
        $slide.css('transition-duration', settings.speed + 'ms');

        if (settings.mode === 'slide') {
          var mxVal = false;
          var _next = true;
          slideValue = slideValue - distance;

          if (slideValue > w - elSize - settings.slideMargin) {
            slideValue = w - elSize - settings.slideMargin;

            if (settings.autoWidth === false) {
              mxVal = true;
            }
          } else if (slideValue < 0) {
            slideValue = 0;
          }

          var gC = function gC(next) {
            var ad = 0;

            if (!mxVal) {
              if (next) {
                ad = 1;
              }
            }

            if (!settings.autoWidth) {
              var num = slideValue / ((slideWidth + settings.slideMargin) * settings.slideMove);
              scene = parseInt(num) + ad;

              if (slideValue >= w - elSize - settings.slideMargin) {
                if (num % 1 !== 0) {
                  scene++;
                }
              }
            } else {
              var tW = 0;

              for (var i = 0; i < $children.length; i++) {
                tW += parseInt($children.eq(i).width()) + settings.slideMargin;
                scene = i + ad;

                if (tW >= slideValue) {
                  break;
                }
              }
            }
          };

          if (distance >= settings.swipeThreshold) {
            gC(false);
            _next = false;
          } else if (distance <= -settings.swipeThreshold) {
            gC(true);
            _next = false;
          }

          $el.mode(_next);
          this.slideThumb();
        } else {
          if (distance >= settings.swipeThreshold) {
            $el.goToPrevSlide();
          } else if (distance <= -settings.swipeThreshold) {
            $el.goToNextSlide();
          }
        }
      },
      enableDrag: function enableDrag() {
        var $this = this;

        if (!isTouch) {
          var startCoords = 0,
              endCoords = 0,
              isDraging = false;
          $slide.find('.lightSlider').addClass('lsGrab');
          $slide.on('mousedown', function (e) {
            if (w < elSize) {
              if (w !== 0) {
                return false;
              }
            }

            if ($(e.target).attr('class') !== 'lSPrev' && $(e.target).attr('class') !== 'lSNext') {
              startCoords = settings.vertical === true ? e.pageY : e.pageX;
              isDraging = true;

              if (e.preventDefault) {
                e.preventDefault();
              } else {
                e.returnValue = false;
              } // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723


              $slide.scrollLeft += 1;
              $slide.scrollLeft -= 1; // *

              $slide.find('.lightSlider').removeClass('lsGrab').addClass('lsGrabbing');
              clearInterval(interval);
            }
          });
          $(window).on('mousemove', function (e) {
            if (isDraging) {
              endCoords = settings.vertical === true ? e.pageY : e.pageX;
              $this.touchMove(endCoords, startCoords);
            }
          });
          $(window).on('mouseup', function (e) {
            if (isDraging) {
              $slide.find('.lightSlider').removeClass('lsGrabbing').addClass('lsGrab');
              isDraging = false;
              endCoords = settings.vertical === true ? e.pageY : e.pageX;
              var distance = endCoords - startCoords;

              if (Math.abs(distance) >= settings.swipeThreshold) {
                $(window).on('click.ls', function (e) {
                  if (e.preventDefault) {
                    e.preventDefault();
                  } else {
                    e.returnValue = false;
                  }

                  e.stopImmediatePropagation();
                  e.stopPropagation();
                  $(window).off('click.ls');
                });
              }

              $this.touchEnd(distance);
            }
          });
        }
      },
      enableTouch: function enableTouch() {
        var $this = this;

        if (isTouch) {
          var startCoords = {},
              endCoords = {};
          $slide.on('touchstart', function (e) {
            endCoords = e.originalEvent.targetTouches[0];
            startCoords.pageX = e.originalEvent.targetTouches[0].pageX;
            startCoords.pageY = e.originalEvent.targetTouches[0].pageY;
            clearInterval(interval);
          });
          $slide.on('touchmove', function (e) {
            if (w < elSize) {
              if (w !== 0) {
                return false;
              }
            }

            var orig = e.originalEvent;
            endCoords = orig.targetTouches[0];
            var xMovement = Math.abs(endCoords.pageX - startCoords.pageX);
            var yMovement = Math.abs(endCoords.pageY - startCoords.pageY);

            if (settings.vertical === true) {
              if (yMovement * 3 > xMovement) {
                e.preventDefault();
              }

              $this.touchMove(endCoords.pageY, startCoords.pageY);
            } else {
              if (xMovement * 3 > yMovement) {
                e.preventDefault();
              }

              $this.touchMove(endCoords.pageX, startCoords.pageX);
            }
          });
          $slide.on('touchend', function () {
            if (w < elSize) {
              if (w !== 0) {
                return false;
              }
            }

            var distance;

            if (settings.vertical === true) {
              distance = endCoords.pageY - startCoords.pageY;
            } else {
              distance = endCoords.pageX - startCoords.pageX;
            }

            $this.touchEnd(distance);
          });
        }
      },
      build: function build() {
        var $this = this;
        $this.initialStyle();

        if (this.doCss()) {
          if (settings.enableTouch === true) {
            $this.enableTouch();
          }

          if (settings.enableDrag === true) {
            $this.enableDrag();
          }
        }

        $(window).on('focus', function () {
          $this.auto();
        });
        $(window).on('blur', function () {
          clearInterval(interval);
        });
        $this.pager();
        $this.pauseOnHover();
        $this.controls();
        $this.keyPress();
      }
    };
    plugin.build();

    refresh.init = function () {
      refresh.chbreakpoint();

      if (settings.vertical === true) {
        if (settings.item > 1) {
          elSize = settings.verticalHeight;
        } else {
          elSize = $children.outerHeight();
        }

        $slide.css('height', elSize + 'px');
      } else {
        elSize = $slide.outerWidth();
      }

      if (settings.loop === true && settings.mode === 'slide') {
        refresh.clone();
      }

      refresh.calL();

      if (settings.mode === 'slide') {
        $el.removeClass('lSSlide');
      }

      if (settings.mode === 'slide') {
        refresh.calSW();
        refresh.sSW();
      }

      setTimeout(function () {
        if (settings.mode === 'slide') {
          $el.addClass('lSSlide');
        }
      }, 1000);

      if (settings.pager) {
        refresh.createPager();
      }

      if (settings.adaptiveHeight === true && settings.vertical === false) {
        $el.css('height', $children.eq(scene).outerHeight(true));
      }

      if (settings.adaptiveHeight === false) {
        if (settings.mode === 'slide') {
          if (settings.vertical === false) {
            plugin.setHeight($el, false);
          } else {
            plugin.auto();
          }
        } else {
          plugin.setHeight($el, true);
        }
      }

      if (settings.gallery === true) {
        plugin.slideThumb();
      }

      if (settings.mode === 'slide') {
        plugin.slide();
      }

      if (settings.autoWidth === false) {
        if ($children.length <= settings.item) {
          $slide.find('.lSAction').hide();
        } else {
          $slide.find('.lSAction').show();
        }
      } else {
        if (refresh.calWidth(false) < elSize && w !== 0) {
          $slide.find('.lSAction').hide();
        } else {
          $slide.find('.lSAction').show();
        }
      }
    };

    $el.goToPrevSlide = function () {
      if (scene > 0) {
        settings.onBeforePrevSlide.call(this, $el, scene);
        scene--;
        $el.mode(false);

        if (settings.gallery === true) {
          plugin.slideThumb();
        }
      } else {
        if (settings.loop === true) {
          settings.onBeforePrevSlide.call(this, $el, scene);

          if (settings.mode === 'fade') {
            var l = length - 1;
            scene = parseInt(l / settings.slideMove);
          }

          $el.mode(false);

          if (settings.gallery === true) {
            plugin.slideThumb();
          }
        } else if (settings.slideEndAnimation === true) {
          $el.addClass('leftEnd');
          setTimeout(function () {
            $el.removeClass('leftEnd');
          }, 400);
        }
      }
    };

    $el.goToNextSlide = function () {
      var nextI = true;

      if (settings.mode === 'slide') {
        var _slideValue = plugin.slideValue();

        nextI = _slideValue < w - elSize - settings.slideMargin;
      }

      if (scene * settings.slideMove < length - settings.slideMove && nextI) {
        settings.onBeforeNextSlide.call(this, $el, scene);
        scene++;
        $el.mode(false);

        if (settings.gallery === true) {
          plugin.slideThumb();
        }
      } else {
        if (settings.loop === true) {
          settings.onBeforeNextSlide.call(this, $el, scene);
          scene = 0;
          $el.mode(false);

          if (settings.gallery === true) {
            plugin.slideThumb();
          }
        } else if (settings.slideEndAnimation === true) {
          $el.addClass('rightEnd');
          setTimeout(function () {
            $el.removeClass('rightEnd');
          }, 400);
        }
      }
    };

    $el.mode = function (_touch) {
      if (settings.adaptiveHeight === true && settings.vertical === false) {
        $el.css('height', $children.eq(scene).outerHeight(true));
      }

      if (on === false) {
        if (settings.mode === 'slide') {
          if (plugin.doCss()) {
            $el.addClass('lSSlide');

            if (settings.speed !== '') {
              $slide.css('transition-duration', settings.speed + 'ms');
            }

            if (settings.cssEasing !== '') {
              $slide.css('transition-timing-function', settings.cssEasing);
            }
          }
        } else {
          if (plugin.doCss()) {
            if (settings.speed !== '') {
              $el.css('transition-duration', settings.speed + 'ms');
            }

            if (settings.cssEasing !== '') {
              $el.css('transition-timing-function', settings.cssEasing);
            }
          }
        }
      }

      if (!_touch) {
        settings.onBeforeSlide.call(this, $el, scene);
      }

      if (settings.mode === 'slide') {
        plugin.slide();
      } else {
        plugin.fade();
      }

      if (!$slide.hasClass('ls-hover')) {
        plugin.auto();
      }

      setTimeout(function () {
        if (!_touch) {
          settings.onAfterSlide.call(this, $el, scene);
        }
      }, settings.speed);
      on = true;
    };

    $el.play = function () {
      $el.goToNextSlide();
      settings.auto = true;
      plugin.auto();
    };

    $el.pause = function () {
      settings.auto = false;
      clearInterval(interval);
    };

    $el.refresh = function () {
      refresh.init();
    };

    $el.getCurrentSlideCount = function () {
      var sc = scene;

      if (settings.loop) {
        var ln = $slide.find('.lslide').length,
            cl = $el.find('.clone.left').length;

        if (scene <= cl - 1) {
          sc = ln + (scene - cl);
        } else if (scene >= ln + cl) {
          sc = scene - ln - cl;
        } else {
          sc = scene - cl;
        }
      }

      return sc + 1;
    };

    $el.getTotalSlideCount = function () {
      return $slide.find('.lslide').length;
    };

    $el.goToSlide = function (s) {
      if (settings.loop) {
        scene = s + $el.find('.clone.left').length - 1;
      } else {
        scene = s;
      }

      $el.mode(false);

      if (settings.gallery === true) {
        plugin.slideThumb();
      }
    };

    $el.destroy = function () {
      if ($el.lightSlider) {
        $el.goToPrevSlide = function () {};

        $el.goToNextSlide = function () {};

        $el.mode = function () {};

        $el.play = function () {};

        $el.pause = function () {};

        $el.refresh = function () {};

        $el.getCurrentSlideCount = function () {};

        $el.getTotalSlideCount = function () {};

        $el.goToSlide = function () {};

        $el.lightSlider = null;
        refresh = {
          init: function init() {}
        };
        $el.parent().parent().find('.lSAction, .lSPager').remove();
        $el.removeClass('lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right').removeAttr('style').unwrap().unwrap();
        $el.children().removeAttr('style');
        $children.removeClass('lslide active');
        $el.find('.clone').remove();
        $children = null;
        interval = null;
        on = false;
        scene = 0;
      }
    };

    setTimeout(function () {
      settings.onSliderLoad.call(this, $el);
    }, 10);
    $(window).on('resize orientationchange', function (e) {
      setTimeout(function () {
        if (e.preventDefault) {
          e.preventDefault();
        } else {
          e.returnValue = false;
        }

        refresh.init();
      }, 200);
    });
    return this;
  };
})(jQuery);
"use strict";

// This is our custom scripts
$(document).ready(function () {
  // Disable Right Click
  document.addEventListener("contextmenu", function (event) {
    return event.preventDefault();
  });
  $("#headerNavbarButton").click(function () {
    $(".navlist-ul").toggle();
    $(this).toggleClass("toggleclick");

    if ($(this).hasClass("toggleclick")) {
      $(".main-content").addClass("fadeanimation");
      $(".navlist-ul li").addClass("navanimation");
      $(".main-content").removeClass("fadeinanimation");
    } else {
      $(".main-content").removeClass("fadeanimation");
      $(".navlist-ul li").removeClass("navanimation");
      $(".main-content").addClass("fadeinanimation");
    }
  });
  $(".carousel").carousel({
    interval: 2000,
    pause: "false"
  });
  $("#playButton").click(function () {
    $(".carousel").carousel("cycle");
    $(this).hide();
    $("#pauseButton").show();
  });
  $("#pauseButton").click(function () {
    $(".carousel").carousel("pause");
    $(this).hide();
    $("#playButton").show();
  });
}); // Auto Reload After 11min Inactive

var refresh_rate = 660; //<-- In seconds, change to your needs

var last_user_action = 0;
var lost_focus = true;
var focus_margin = 10; // If we lose focus more then the margin we want to refresh

var allow_refresh = true; // on off sort of switch

function keydown(evt) {
  if (!evt) evt = event;

  if (evt.keyCode == 192) {
    // Shift+TAB
    toggle_on_off();
  }
} // function keydown(evt)


function toggle_on_off() {
  if (can_i_refresh) {
    allow_refresh = false;
    console.log("Auto Refresh Off");
  } else {
    allow_refresh = true;
    console.log("Auto Refresh On");
  }
}

function reset() {
  last_user_action = 0;
  console.log("Reset");
}

function windowHasFocus() {
  lost_focus = false;
  console.log(" <~ Has Focus");
}

function windowLostFocus() {
  lost_focus = true;
  console.log(" <~ Lost Focus");
}

setInterval(function () {
  last_user_action++;
  refreshCheck();
}, 1000);

function can_i_refresh() {
  if (last_user_action >= refresh_rate && lost_focus && allow_refresh) {
    return true;
  }

  return false;
}

function refreshCheck() {
  var focus = window.onfocus;

  if (can_i_refresh()) {
    //window.location.reload(); // If this is called no reset is needed
    if (window.location.href.indexOf("other-projects") > -1 || window.location.href.indexOf("unit") > -1) {
      window.location.href = "../index.html";
    } else {
      window.location.href = "index.html";
    }

    reset(); // We want to reset just to make sure the location reload is not called.
  } else {
    console.log("Timer");
  }
}

window.addEventListener("focus", windowHasFocus, false);
window.addEventListener("blur", windowLostFocus, false);
window.addEventListener("click", reset, false);
window.addEventListener("mousemove", reset, false);
window.addEventListener("keypress", reset, false);
window.onkeyup = keydown;
//# sourceMappingURL=bundle.js.map
