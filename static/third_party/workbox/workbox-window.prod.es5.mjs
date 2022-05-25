try {
  self["workbox:window:5.1.4"] && _()
} catch (n) {
}

function n(n, t) {
  return new Promise((function (r) {
    var e = new MessageChannel;
    e.port1.onmessage = function (n) {
      r(n.data)
    }, n.postMessage(t, [e.port2])
  }))
}

function t(n, t) {
  for (var r = 0; r < t.length; r++) {
    var e = t[r];
    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, e.key, e)
  }
}

function r(n, t) {
  (null == t || t > n.length) && (t = n.length);
  for (var r = 0, e = new Array(t); r < t; r++) e[r] = n[r];
  return e
}

function e(n, t) {
  var e;
  if ("undefined" == typeof Symbol || null == n[Symbol.iterator]) {
    if (Array.isArray(n) || (e = function (n, t) {
      if (n) {
        if ("string" == typeof n) return r(n, t);
        var e = Object.prototype.toString.call(n).slice(8, -1);
        return "Object" === e && n.constructor && (e = n.constructor.name), "Map" === e || "Set" === e ? Array.from(n) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? r(n, t) : void 0
      }
    }(n)) || t && n && "number" == typeof n.length) {
      e && (n = e);
      var i = 0;
      return function () {
        return i >= n.length ? {done: !0} : {done: !1, value: n[i++]}
      }
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }
  return (e = n[Symbol.iterator]()).next.bind(e)
}

try {
  self["workbox:core:5.1.4"] && _()
} catch (n) {
}
var i = function () {
  var n = this;
  this.promise = new Promise((function (t, r) {
    n.resolve = t, n.reject = r
  }))
};

function o(n, t) {
  var r = location.href;
  return new URL(n, r).href === new URL(t, r).href
}

var u = function (n, t) {
  this.type = n, Object.assign(this, t)
};

function a(n, t, r) {
  return r ? t ? t(n) : n : (n && n.then || (n = Promise.resolve(n)), t ? n.then(t) : n)
}

function c() {
}

var f = function (r) {
  var e, c;

  function f(n, t) {
    var e, c;
    return void 0 === t && (t = {}), (e = r.call(this) || this).t = {}, e.i = 0, e.o = new i, e.u = new i, e.s = new i, e.v = 0, e.h = new Set, e.l = function () {
      var n = e.m, t = n.installing;
      e.i > 0 || !o(t.scriptURL, e.g) || performance.now() > e.v + 6e4 ? (e.p = t, n.removeEventListener("updatefound", e.l)) : (e.P = t, e.h.add(t), e.o.resolve(t)), ++e.i, t.addEventListener("statechange", e.S)
    }, e.S = function (n) {
      var t = e.m, r = n.target, i = r.state, o = r === e.p, a = o ? "external" : "", c = {sw: r, originalEvent: n};
      !o && e.j && (c.isUpdate = !0), e.dispatchEvent(new u(a + i, c)), "installed" === i ? e.A = self.setTimeout((function () {
        "installed" === i && t.waiting === r && e.dispatchEvent(new u(a + "waiting", c))
      }), 200) : "activating" === i && (clearTimeout(e.A), o || e.u.resolve(r))
    }, e.O = function (n) {
      var t = e.P;
      t === navigator.serviceWorker.controller && (e.dispatchEvent(new u("controlling", {
        sw: t,
        originalEvent: n,
        isUpdate: e.j
      })), e.s.resolve(t))
    }, e.U = (c = function (n) {
      var t = n.data, r = n.source;
      return a(e.getSW(), (function () {
        e.h.has(r) && e.dispatchEvent(new u("message", {data: t, sw: r, originalEvent: n}))
      }))
    }, function () {
      for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
      try {
        return Promise.resolve(c.apply(this, n))
      } catch (n) {
        return Promise.reject(n)
      }
    }), e.g = n, e.t = t, navigator.serviceWorker.addEventListener("message", e.U), e
  }

  c = r, (e = f).prototype = Object.create(c.prototype), e.prototype.constructor = e, e.__proto__ = c;
  var v, h, l, m = f.prototype;
  return m.register = function (n) {
    var t = (void 0 === n ? {} : n).immediate, r = void 0 !== t && t;
    try {
      var e = this;
      return function (n, t) {
        var r = n();
        if (r && r.then) return r.then(t);
        return t(r)
      }((function () {
        if (!r && "complete" !== document.readyState) return s(new Promise((function (n) {
          return window.addEventListener("load", n)
        })))
      }), (function () {
        return e.j = Boolean(navigator.serviceWorker.controller), e.I = e.M(), a(e.R(), (function (n) {
          e.m = n, e.I && (e.P = e.I, e.u.resolve(e.I), e.s.resolve(e.I), e.I.addEventListener("statechange", e.S, {once: !0}));
          var t = e.m.waiting;
          return t && o(t.scriptURL, e.g) && (e.P = t, Promise.resolve().then((function () {
            e.dispatchEvent(new u("waiting", {sw: t, wasWaitingBeforeRegister: !0}))
          })).then((function () {
          }))), e.P && (e.o.resolve(e.P), e.h.add(e.P)), e.m.addEventListener("updatefound", e.l), navigator.serviceWorker.addEventListener("controllerchange", e.O, {once: !0}), e.m
        }))
      }))
    } catch (n) {
      return Promise.reject(n)
    }
  }, m.update = function () {
    try {
      return this.m ? s(this.m.update()) : void 0
    } catch (n) {
      return Promise.reject(n)
    }
  }, m.getSW = function () {
    try {
      return void 0 !== this.P ? this.P : this.o.promise
    } catch (n) {
      return Promise.reject(n)
    }
  }, m.messageSW = function (t) {
    try {
      return a(this.getSW(), (function (r) {
        return n(r, t)
      }))
    } catch (n) {
      return Promise.reject(n)
    }
  }, m.M = function () {
    var n = navigator.serviceWorker.controller;
    return n && o(n.scriptURL, this.g) ? n : void 0
  }, m.R = function () {
    try {
      var n = this;
      return function (n, t) {
        try {
          var r = n()
        } catch (n) {
          return t(n)
        }
        if (r && r.then) return r.then(void 0, t);
        return r
      }((function () {
        return a(navigator.serviceWorker.register(n.g, n.t), (function (t) {
          return n.v = performance.now(), t
        }))
      }), (function (n) {
        throw n
      }))
    } catch (n) {
      return Promise.reject(n)
    }
  }, v = f, (h = [{
    key: "active", get: function () {
      return this.u.promise
    }
  }, {
    key: "controlling", get: function () {
      return this.s.promise
    }
  }]) && t(v.prototype, h), l && t(v, l), f
}(function () {
  function n() {
    this.k = new Map
  }

  var t = n.prototype;
  return t.addEventListener = function (n, t) {
    this.B(n).add(t)
  }, t.removeEventListener = function (n, t) {
    this.B(n).delete(t)
  }, t.dispatchEvent = function (n) {
    n.target = this;
    for (var t, r = e(this.B(n.type)); !(t = r()).done;) {
      (0, t.value)(n)
    }
  }, t.B = function (n) {
    return this.k.has(n) || this.k.set(n, new Set), this.k.get(n)
  }, n
}());

function s(n, t) {
  if (!t) return n && n.then ? n.then(c) : Promise.resolve()
}

export {f as Workbox, n as messageSW};

