import {
  __commonJS
} from "./chunk-5WRI5ZAA.js";

// node_modules/@contentstack/advanced-post-message/dist/index.js
var require_dist = __commonJS({
  "node_modules/@contentstack/advanced-post-message/dist/index.js"(exports, module) {
    "use strict";
    !(function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.ContentstackAdvPostMessage = t() : e.ContentstackAdvPostMessage = t();
    })(exports, () => {
      return e = { 706(e2, t2, r) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Config = void 0;
        var n = r(450), o = r(666), i = r(628), s = r(399), a = (function() {
          function e3() {
            this.config = (0, o.getDefaultConfig)();
          }
          return e3.prototype.replace = function(e4) {
            !(function(e5, t3) {
              var r2, o2, a2, c;
              if (t3.debug = null !== (r2 = e5.debug) && void 0 !== r2 ? r2 : t3.debug, "" === e5.channelId) throw new Error((0, i.getErrorMessage)(n.ERROR_MESSAGES.common.channelIdRequired));
              t3.channelId = null !== (o2 = e5.channelId) && void 0 !== o2 ? o2 : t3.channelId, t3.suppressErrors = null !== (a2 = e5.suppressErrors) && void 0 !== a2 ? a2 : t3.suppressErrors, t3.targetOrigin = null !== (c = e5.targetOrigin) && void 0 !== c ? c : t3.targetOrigin;
              var u = (0, s.getWindow)();
              e5.target ? t3.targetWindow = e5.target : t3.targetWindow = u || { postMessage: function() {
              } };
            })(e4, this.config);
          }, e3.prototype.set = function(e4, t3) {
            this.config[e4] = t3;
          }, e3.prototype.get = function(e4) {
            return this.config[e4];
          }, e3.prototype.getAll = function() {
            return this.config;
          }, e3.prototype.reset = function() {
            this.config = (0, o.getDefaultConfig)();
          }, e3;
        })();
        t2.Config = a;
      }, 851(e2, t2) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.ERROR_CODES = t2.ERROR_MESSAGES = void 0, t2.ERROR_MESSAGES = { common: { windowClosed: "The window closed before the response was received", windowNotFound: "The window was not found.", channelIdRequired: "The channelId is required" }, sendEvent: { receiverReturnedError: "The receiver returned an error", eventCancelled: "The event was cancelled", noAckReceived: "The ACK was not received" }, receiveEvent: { noRequestListenerFound: function(e3) {
          return 'No request listener found for event "'.concat(e3, '"');
        }, codeReturnedError: "The code returned an error", noResponseListenerFound: function(e3) {
          return 'No response listener found for hash "'.concat(e3, '"');
        }, noAckListenerFound: function(e3) {
          return 'No ack listener found for hash "'.concat(e3, '"');
        }, unknownNature: function(e3) {
          return 'The nature "'.concat(e3, '" is unknown');
        } }, registerEvent: { eventAlreadyRegistered: function(e3) {
          return 'The event "'.concat(e3, '" is already registered');
        } }, unregisterEvent: { eventDoesNotExist: function(e3) {
          return 'The event "'.concat(e3, '" does not exist');
        } } }, t2.ERROR_CODES = { common: { windowClosed: "WINDOW_CLOSED", windowNotFound: "WINDOW_NOT_FOUND" }, sendEvent: { receiverReturnedError: "RECEIVER_RETURNED_ERROR", eventCancelled: "EVENT_CANCELLED", noAckReceived: "NO_ACK_RECEIVED" }, receiveEvent: { noRequestListenerFound: "NO_REQUEST_LISTENER_FOUND", codeReturnedError: "CODE_RETURNED_ERROR", noResponseListenerFound: "NO_RESPONSE_LISTENER_FOUND", noAckListenerFound: "NO_ACK_LISTENER_FOUND", unknownNature: "UNKNOWN_NATURE" }, registerEvent: { eventAlreadyRegistered: "EVENT_ALREADY_REGISTERED" }, unregisterEvent: { eventDoesNotExist: "EVENT_DOES_NOT_EXIST" } };
      }, 450(e2, t2, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e3, t3, r2, n2) {
          void 0 === n2 && (n2 = r2);
          var o2 = Object.getOwnPropertyDescriptor(t3, r2);
          o2 && !("get" in o2 ? !t3.__esModule : o2.writable || o2.configurable) || (o2 = { enumerable: true, get: function() {
            return t3[r2];
          } }), Object.defineProperty(e3, n2, o2);
        } : function(e3, t3, r2, n2) {
          void 0 === n2 && (n2 = r2), e3[n2] = t3[r2];
        }), o = this && this.__exportStar || function(e3, t3) {
          for (var r2 in e3) "default" === r2 || Object.prototype.hasOwnProperty.call(t3, r2) || n(t3, e3, r2);
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.EVENT_MANAGER_NAME = t2.ANY_ORIGIN = t2.RESPONSE_CYCLE = void 0, t2.RESPONSE_CYCLE = 500, t2.ANY_ORIGIN = "*", t2.EVENT_MANAGER_NAME = "contentstack-adv-post-message", o(r(851), t2);
      }, 666(e2, t2, r) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.getDefaultConfig = void 0;
        var n = r(450);
        t2.getDefaultConfig = function() {
          return { targetOrigin: n.ANY_ORIGIN, targetWindow: { postMessage: function() {
          } }, debug: false, channelId: "", suppressErrors: false };
        };
      }, 156(e2, t2, r) {
        "use strict";
        var n = this && this.__assign || function() {
          return n = Object.assign || function(e3) {
            for (var t3, r2 = 1, n2 = arguments.length; r2 < n2; r2++) for (var o2 in t3 = arguments[r2]) Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
            return e3;
          }, n.apply(this, arguments);
        }, o = this && this.__createBinding || (Object.create ? function(e3, t3, r2, n2) {
          void 0 === n2 && (n2 = r2);
          var o2 = Object.getOwnPropertyDescriptor(t3, r2);
          o2 && !("get" in o2 ? !t3.__esModule : o2.writable || o2.configurable) || (o2 = { enumerable: true, get: function() {
            return t3[r2];
          } }), Object.defineProperty(e3, n2, o2);
        } : function(e3, t3, r2, n2) {
          void 0 === n2 && (n2 = r2), e3[n2] = t3[r2];
        }), i = this && this.__exportStar || function(e3, t3) {
          for (var r2 in e3) "default" === r2 || Object.prototype.hasOwnProperty.call(t3, r2) || o(t3, e3, r2);
        }, s = this && this.__awaiter || function(e3, t3, r2, n2) {
          return new (r2 || (r2 = Promise))(function(o2, i2) {
            function s2(e4) {
              try {
                c2(n2.next(e4));
              } catch (e5) {
                i2(e5);
              }
            }
            function a2(e4) {
              try {
                c2(n2.throw(e4));
              } catch (e5) {
                i2(e5);
              }
            }
            function c2(e4) {
              var t4;
              e4.done ? o2(e4.value) : (t4 = e4.value, t4 instanceof r2 ? t4 : new r2(function(e5) {
                e5(t4);
              })).then(s2, a2);
            }
            c2((n2 = n2.apply(e3, t3 || [])).next());
          });
        }, a = this && this.__generator || function(e3, t3) {
          var r2, n2, o2, i2, s2 = { label: 0, sent: function() {
            if (1 & o2[0]) throw o2[1];
            return o2[1];
          }, trys: [], ops: [] };
          return i2 = { next: a2(0), throw: a2(1), return: a2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
            return this;
          }), i2;
          function a2(a3) {
            return function(c2) {
              return (function(a4) {
                if (r2) throw new TypeError("Generator is already executing.");
                for (; i2 && (i2 = 0, a4[0] && (s2 = 0)), s2; ) try {
                  if (r2 = 1, n2 && (o2 = 2 & a4[0] ? n2.return : a4[0] ? n2.throw || ((o2 = n2.return) && o2.call(n2), 0) : n2.next) && !(o2 = o2.call(n2, a4[1])).done) return o2;
                  switch (n2 = 0, o2 && (a4 = [2 & a4[0], o2.value]), a4[0]) {
                    case 0:
                    case 1:
                      o2 = a4;
                      break;
                    case 4:
                      return s2.label++, { value: a4[1], done: false };
                    case 5:
                      s2.label++, n2 = a4[1], a4 = [0];
                      continue;
                    case 7:
                      a4 = s2.ops.pop(), s2.trys.pop();
                      continue;
                    default:
                      if (!((o2 = (o2 = s2.trys).length > 0 && o2[o2.length - 1]) || 6 !== a4[0] && 2 !== a4[0])) {
                        s2 = 0;
                        continue;
                      }
                      if (3 === a4[0] && (!o2 || a4[1] > o2[0] && a4[1] < o2[3])) {
                        s2.label = a4[1];
                        break;
                      }
                      if (6 === a4[0] && s2.label < o2[1]) {
                        s2.label = o2[1], o2 = a4;
                        break;
                      }
                      if (o2 && s2.label < o2[2]) {
                        s2.label = o2[2], s2.ops.push(a4);
                        break;
                      }
                      o2[2] && s2.ops.pop(), s2.trys.pop();
                      continue;
                  }
                  a4 = t3.call(e3, s2);
                } catch (e4) {
                  a4 = [6, e4], n2 = 0;
                } finally {
                  r2 = o2 = 0;
                }
                if (5 & a4[0]) throw a4[1];
                return { value: a4[0] ? a4[1] : void 0, done: true };
              })([a3, c2]);
            };
          }
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.EventManager = void 0;
        var c = r(834), u = r(706), d = r(450), f = r(897), l = r(628), h = r(768), g = r(610), p = r(399), v = r(574), E = (function() {
          function e3(e4, t3) {
            if (void 0 === t3 && (t3 = {}), this.requestMessageHandlers = /* @__PURE__ */ new Map(), this.responseMessageHandlers = /* @__PURE__ */ new Map(), !e4) throw new Error((0, l.getErrorMessage)(d.ERROR_MESSAGES.common.channelIdRequired));
            this.config = new u.Config(), this.config.replace(n(n({}, t3), { channelId: e4 })), this.logger = new l.Logger(this.config), this.postMessage = new f.PostMessage(this.logger, this.config), this.handleIncomingMessage = this.handleIncomingMessage.bind(this), this.send = this.send.bind(this), this.on = this.on.bind(this), this.unregisterEvent = this.unregisterEvent.bind(this);
            var r2 = (0, p.getWindow)();
            r2 ? r2.addEventListener("message", this.handleIncomingMessage) : this.logger.debug((0, l.getErrorMessage)(d.ERROR_MESSAGES.common.windowNotFound));
          }
          return e3.prototype.handleIncomingMessage = function(e4) {
            return s(this, void 0, void 0, function() {
              var t3, r2, n2, o2, i2, s2, u2, f2, h2, g2, p2, E2, y = this;
              return a(this, function(a2) {
                if (t3 = e4.data, r2 = t3.type, n2 = t3.channel, o2 = t3.payload, i2 = t3.eventManager, s2 = t3.metadata, u2 = t3.error, i2 !== d.EVENT_MANAGER_NAME || n2 !== this.config.get("channelId")) return [2];
                switch (f2 = s2.hash, h2 = s2.nature) {
                  case v.EditorPostMessageNature.REQUEST:
                    return this.logger.debug("REQUEST received", e4.data), this.config.get("targetWindow").closed && this.logger.error((0, l.getErrorMessage)(d.ERROR_MESSAGES.common.windowClosed)), this.postMessage.sendAck({ type: r2, hash: f2 }), this.requestMessageHandlers.has(r2) ? (g2 = this.requestMessageHandlers.get(r2).handler, p2 = { data: o2 }, [2, c.ZalgoPromise.all([c.ZalgoPromise.try(function() {
                      return g2(p2);
                    }).then(function(e5) {
                      y.postMessage.sendResponse({ type: r2, hash: f2, payload: e5, error: void 0 });
                    }).catch(function(e5) {
                      y.logger.error((0, l.getErrorMessage)(d.ERROR_MESSAGES.receiveEvent.codeReturnedError), e5);
                    })])]) : (this.logger.debug((0, l.getErrorMessage)(d.ERROR_MESSAGES.receiveEvent.noRequestListenerFound(r2))), this.postMessage.sendResponse({ type: r2, hash: f2, payload: void 0, error: { code: d.ERROR_CODES.receiveEvent.noRequestListenerFound, message: (0, l.getErrorMessage)(d.ERROR_MESSAGES.receiveEvent.noRequestListenerFound(r2)) } }), [2]);
                  case v.EditorPostMessageNature.RESPONSE:
                    if (this.logger.debug("RESPONSE received", e4.data), !this.responseMessageHandlers.has(f2)) return this.logger.error((0, l.getErrorMessage)(d.ERROR_MESSAGES.receiveEvent.noResponseListenerFound(f2))), [2];
                    E2 = this.responseMessageHandlers.get(f2), u2 ? E2.promise.reject(u2) : E2.promise.resolve(o2);
                    break;
                  case v.EditorPostMessageNature.ACK:
                    if (this.logger.debug("ACK received", e4.data), !this.responseMessageHandlers.has(f2)) return this.logger.error((0, l.getErrorMessage)(d.ERROR_MESSAGES.receiveEvent.noAckListenerFound(f2))), [2];
                    (E2 = this.responseMessageHandlers.get(f2)).hasReceivedAck = true;
                    break;
                  default:
                    this.logger.error((0, l.getErrorMessage)(d.ERROR_MESSAGES.receiveEvent.unknownNature(h2)), e4.data);
                }
                return [2];
              });
            });
          }, e3.prototype.send = function(e4, t3) {
            return s(this, void 0, void 0, function() {
              var r2, n2, o2, i2, s2, u2 = this;
              return a(this, function(a2) {
                return r2 = new c.ZalgoPromise(), n2 = (0, g.uniqueId)(e4), o2 = { type: e4, promise: r2, hasCancelled: false, hasReceivedAck: false }, this.responseMessageHandlers.set(n2, o2), i2 = 1e3, s2 = (0, h.safeInterval)(function() {
                  return u2.config.get("targetWindow").closed ? r2.reject(new Error((0, l.getErrorMessage)(d.ERROR_MESSAGES.common.windowClosed))) : (i2 = Math.max(i2 - d.RESPONSE_CYCLE, 0), !o2.hasReceivedAck && i2 <= 0 ? r2.reject((0, l.getErrorMessage)(d.ERROR_MESSAGES.sendEvent.noAckReceived)) : void 0);
                }, d.RESPONSE_CYCLE), r2.finally(function() {
                  u2.responseMessageHandlers.delete(n2), s2.cancel();
                }).catch(function(e5) {
                  u2.logger.debug((0, l.getErrorMessage)(d.ERROR_MESSAGES.sendEvent.receiverReturnedError), e5);
                }), this.postMessage.sendRequest({ type: e4, hash: n2, error: void 0, payload: t3 }), [2, r2];
              });
            });
          }, e3.prototype.on = function(e4, t3) {
            var r2 = this;
            this.requestMessageHandlers.has(e4) && this.logger.error((0, l.getErrorMessage)(d.ERROR_MESSAGES.registerEvent.eventAlreadyRegistered(e4)));
            var n2 = { handler: t3 };
            return this.requestMessageHandlers.set(e4, n2), { unregister: function() {
              r2.unregisterEvent(e4);
            } };
          }, e3.prototype.unregisterEvent = function(e4) {
            this.requestMessageHandlers.has(e4) ? (this.logger.debug("Unregistering event", e4), this.requestMessageHandlers.delete(e4)) : this.logger.error((0, l.getErrorMessage)(d.ERROR_MESSAGES.unregisterEvent.eventDoesNotExist(e4)));
          }, e3.prototype.updateConfig = function(e4) {
            this.config.replace(e4);
          }, e3.prototype.destroy = function(e4) {
            var t3;
            this.requestMessageHandlers.clear(), this.responseMessageHandlers.clear(), (null == e4 ? void 0 : e4.soft) || null === (t3 = (0, p.getWindow)()) || void 0 === t3 || t3.removeEventListener("message", this.handleIncomingMessage);
          }, e3;
        })();
        t2.EventManager = E, i(r(574), t2);
      }, 897(e2, t2, r) {
        "use strict";
        var n = this && this.__assign || function() {
          return n = Object.assign || function(e3) {
            for (var t3, r2 = 1, n2 = arguments.length; r2 < n2; r2++) for (var o2 in t3 = arguments[r2]) Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
            return e3;
          }, n.apply(this, arguments);
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.PostMessage = void 0;
        var o = r(574), i = (function() {
          function e3(e4, t3) {
            this.logger = e4, this.sendResponse = this.sendResponse.bind(this), this.sendRequest = this.sendRequest.bind(this), this.sendAck = this.sendAck.bind(this), this.getMessage = this.getMessage.bind(this), this.config = t3.getAll();
          }
          return e3.prototype.sendRequest = function(e4) {
            var t3 = n(n({}, e4), { nature: o.EditorPostMessageNature.REQUEST });
            this.logger.debug("Sending REQUEST", t3);
            var r2 = this.getMessage(t3);
            this.config.targetWindow.postMessage(r2, this.config.targetOrigin);
          }, e3.prototype.sendResponse = function(e4) {
            var t3 = n(n({}, e4), { nature: o.EditorPostMessageNature.RESPONSE });
            this.logger.debug("Sending RESPONSE", t3);
            var r2 = this.getMessage(t3);
            this.config.targetWindow.postMessage(r2, this.config.targetOrigin);
          }, e3.prototype.sendAck = function(e4) {
            var t3 = n(n({}, e4), { payload: void 0, error: void 0, nature: o.EditorPostMessageNature.ACK });
            this.logger.debug("Sending ACK", t3);
            var r2 = this.getMessage(t3);
            this.config.targetWindow.postMessage(r2, this.config.targetOrigin);
          }, e3.prototype.getMessage = function(e4) {
            var t3 = e4.nature, r2 = e4.hash, n2 = e4.payload, o2 = e4.type, i2 = e4.error;
            return { eventManager: "contentstack-adv-post-message", metadata: { hash: r2, nature: t3 }, channel: this.config.channelId, error: i2, payload: n2, type: o2 };
          }, e3;
        })();
        t2.PostMessage = i;
      }, 255(e2, t2) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true });
      }, 884(e2, t2) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true });
      }, 574(e2, t2, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e3, t3, r2, n2) {
          void 0 === n2 && (n2 = r2);
          var o2 = Object.getOwnPropertyDescriptor(t3, r2);
          o2 && !("get" in o2 ? !t3.__esModule : o2.writable || o2.configurable) || (o2 = { enumerable: true, get: function() {
            return t3[r2];
          } }), Object.defineProperty(e3, n2, o2);
        } : function(e3, t3, r2, n2) {
          void 0 === n2 && (n2 = r2), e3[n2] = t3[r2];
        }), o = this && this.__exportStar || function(e3, t3) {
          for (var r2 in e3) "default" === r2 || Object.prototype.hasOwnProperty.call(t3, r2) || n(t3, e3, r2);
        };
        Object.defineProperty(t2, "__esModule", { value: true }), o(r(884), t2), o(r(145), t2), o(r(255), t2);
      }, 145(e2, t2) {
        "use strict";
        var r;
        Object.defineProperty(t2, "__esModule", { value: true }), t2.EditorPostMessageNature = void 0, (function(e3) {
          e3.ACK = "ACK", e3.RESPONSE = "RESPONSE", e3.REQUEST = "REQUEST";
        })(r || (t2.EditorPostMessageNature = r = {}));
      }, 628(e2, t2, r) {
        "use strict";
        var n = this && this.__spreadArray || function(e3, t3, r2) {
          if (r2 || 2 === arguments.length) for (var n2, o2 = 0, i2 = t3.length; o2 < i2; o2++) !n2 && o2 in t3 || (n2 || (n2 = Array.prototype.slice.call(t3, 0, o2)), n2[o2] = t3[o2]);
          return e3.concat(n2 || Array.prototype.slice.call(t3));
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.getErrorMessage = t2.Logger = void 0;
        var o = r(450), i = (function() {
          function e3(e4) {
            this.config = e4, this.prefix = o.EVENT_MANAGER_NAME, this.log = this.log.bind(this), this.info = this.info.bind(this), this.debug = this.debug.bind(this), this.error = this.error.bind(this);
          }
          return e3.prototype.log = function() {
            for (var e4 = [], t3 = 0; t3 < arguments.length; t3++) e4[t3] = arguments[t3];
            console.log.apply(console, n([this.prefix], e4, false));
          }, e3.prototype.info = function() {
            for (var e4 = [], t3 = 0; t3 < arguments.length; t3++) e4[t3] = arguments[t3];
            console.info.apply(console, n([this.prefix], e4, false));
          }, e3.prototype.debug = function() {
            for (var e4 = [], t3 = 0; t3 < arguments.length; t3++) e4[t3] = arguments[t3];
            this.config.get("debug") && console.debug.apply(console, n(n([this.prefix, "DEBUG:"], e4, false), [this.getDebugOptions()], false));
          }, e3.prototype.error = function() {
            for (var e4 = [], t3 = 0; t3 < arguments.length; t3++) e4[t3] = arguments[t3];
            this.config.get("suppressErrors") || console.error.apply(console, n([this.prefix], e4, false));
          }, e3.prototype.getDebugOptions = function() {
            return { targetOrigin: this.config.get("targetOrigin"), targetWindow: this.config.get("targetWindow") };
          }, e3;
        })();
        t2.Logger = i, t2.getErrorMessage = function(e3) {
          return o.EVENT_MANAGER_NAME + ": " + e3;
        };
      }, 768(e2, t2) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.safeInterval = void 0, t2.safeInterval = function(e3, t3) {
          var r;
          return (function n() {
            r = setTimeout(function() {
              e3(), n();
            }, t3);
          })(), { cancel: function() {
            clearTimeout(r);
          } };
        };
      }, 610(e2, t2) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.uniqueId = void 0, t2.uniqueId = function(e3) {
          var t3 = ("undefined" != typeof crypto && "function" == typeof crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e4) {
            var t4 = 16 * Math.random() | 0;
            return ("x" === e4 ? t4 : 3 & t4 | 8).toString(16);
          })).split("-")[0];
          return e3 ? "".concat(e3, "-").concat(t3) : t3;
        };
      }, 399(e2, t2) {
        "use strict";
        Object.defineProperty(t2, "__esModule", { value: true }), t2.getWindow = void 0, t2.getWindow = function() {
          return "undefined" != typeof window ? window : null;
        };
      }, 994(e2) {
        "undefined" != typeof self && self, e2.exports = (function(e3) {
          var t2 = {};
          function r(n) {
            if (t2[n]) return t2[n].exports;
            var o = t2[n] = { i: n, l: false, exports: {} };
            return e3[n].call(o.exports, o, o.exports, r), o.l = true, o.exports;
          }
          return r.m = e3, r.c = t2, r.d = function(e4, t3, n) {
            r.o(e4, t3) || Object.defineProperty(e4, t3, { enumerable: true, get: n });
          }, r.r = function(e4) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e4, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e4, "__esModule", { value: true });
          }, r.t = function(e4, t3) {
            if (1 & t3 && (e4 = r(e4)), 8 & t3) return e4;
            if (4 & t3 && "object" == typeof e4 && e4 && e4.__esModule) return e4;
            var n = /* @__PURE__ */ Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", { enumerable: true, value: e4 }), 2 & t3 && "string" != typeof e4) for (var o in e4) r.d(n, o, (function(t4) {
              return e4[t4];
            }).bind(null, o));
            return n;
          }, r.n = function(e4) {
            var t3 = e4 && e4.__esModule ? function() {
              return e4.default;
            } : function() {
              return e4;
            };
            return r.d(t3, "a", t3), t3;
          }, r.o = function(e4, t3) {
            return {}.hasOwnProperty.call(e4, t3);
          }, r.p = "", r(r.s = 0);
        })([function(e3, t2, r) {
          "use strict";
          function n(e4) {
            try {
              if (!e4) return false;
              if ("undefined" != typeof Promise && e4 instanceof Promise) return true;
              if ("undefined" != typeof window && "function" == typeof window.Window && e4 instanceof window.Window) return false;
              if ("undefined" != typeof window && "function" == typeof window.constructor && e4 instanceof window.constructor) return false;
              var t3 = {}.toString;
              if (t3) {
                var r2 = t3.call(e4);
                if ("[object Window]" === r2 || "[object global]" === r2 || "[object DOMWindow]" === r2) return false;
              }
              if ("function" == typeof e4.then) return true;
            } catch (e5) {
              return false;
            }
            return false;
          }
          r.r(t2), r.d(t2, "ZalgoPromise", function() {
            return f;
          });
          var o, i = [], s = [], a = 0;
          function c() {
            if (!a && o) {
              var e4 = o;
              o = null, e4.resolve();
            }
          }
          function u() {
            a += 1;
          }
          function d() {
            a -= 1, c();
          }
          var f = (function() {
            function e4(e5) {
              var t4 = this;
              if (this.resolved = void 0, this.rejected = void 0, this.errorHandled = void 0, this.value = void 0, this.error = void 0, this.handlers = void 0, this.dispatching = void 0, this.stack = void 0, this.resolved = false, this.rejected = false, this.errorHandled = false, this.handlers = [], e5) {
                var r2, n2, o2 = false, i2 = false, s2 = false;
                u();
                try {
                  e5(function(e6) {
                    s2 ? t4.resolve(e6) : (o2 = true, r2 = e6);
                  }, function(e6) {
                    s2 ? t4.reject(e6) : (i2 = true, n2 = e6);
                  });
                } catch (e6) {
                  return d(), void this.reject(e6);
                }
                d(), s2 = true, o2 ? this.resolve(r2) : i2 && this.reject(n2);
              }
            }
            var t3 = e4.prototype;
            return t3.resolve = function(e5) {
              if (this.resolved || this.rejected) return this;
              if (n(e5)) throw new Error("Can not resolve promise with another promise");
              return this.resolved = true, this.value = e5, this.dispatch(), this;
            }, t3.reject = function(e5) {
              var t4 = this;
              if (this.resolved || this.rejected) return this;
              if (n(e5)) throw new Error("Can not reject promise with another promise");
              if (!e5) {
                var r2 = e5 && "function" == typeof e5.toString ? e5.toString() : {}.toString.call(e5);
                e5 = new Error("Expected reject to be called with Error, got " + r2);
              }
              return this.rejected = true, this.error = e5, this.errorHandled || setTimeout(function() {
                t4.errorHandled || (function(e6, t5) {
                  if (-1 === i.indexOf(e6)) {
                    i.push(e6), setTimeout(function() {
                      throw e6;
                    }, 1);
                    for (var r3 = 0; r3 < s.length; r3++) s[r3](e6, t5);
                  }
                })(e5, t4);
              }, 1), this.dispatch(), this;
            }, t3.asyncReject = function(e5) {
              return this.errorHandled = true, this.reject(e5), this;
            }, t3.dispatch = function() {
              var t4 = this.resolved, r2 = this.rejected, o2 = this.handlers;
              if (!this.dispatching && (t4 || r2)) {
                this.dispatching = true, u();
                for (var i2 = function(e5, t5) {
                  return e5.then(function(e6) {
                    t5.resolve(e6);
                  }, function(e6) {
                    t5.reject(e6);
                  });
                }, s2 = 0; s2 < o2.length; s2++) {
                  var a2 = o2[s2], c2 = a2.onSuccess, f2 = a2.onError, l = a2.promise, h = void 0;
                  if (t4) try {
                    h = c2 ? c2(this.value) : this.value;
                  } catch (e5) {
                    l.reject(e5);
                    continue;
                  }
                  else if (r2) {
                    if (!f2) {
                      l.reject(this.error);
                      continue;
                    }
                    try {
                      h = f2(this.error);
                    } catch (e5) {
                      l.reject(e5);
                      continue;
                    }
                  }
                  if (h instanceof e4 && (h.resolved || h.rejected)) {
                    var g = h;
                    g.resolved ? l.resolve(g.value) : l.reject(g.error), g.errorHandled = true;
                  } else n(h) ? h instanceof e4 && (h.resolved || h.rejected) ? h.resolved ? l.resolve(h.value) : l.reject(h.error) : i2(h, l) : l.resolve(h);
                }
                o2.length = 0, this.dispatching = false, d();
              }
            }, t3.then = function(t4, r2) {
              if (t4 && "function" != typeof t4 && !t4.call) throw new Error("Promise.then expected a function for success handler");
              if (r2 && "function" != typeof r2 && !r2.call) throw new Error("Promise.then expected a function for error handler");
              var n2 = new e4();
              return this.handlers.push({ promise: n2, onSuccess: t4, onError: r2 }), this.errorHandled = true, this.dispatch(), n2;
            }, t3.catch = function(e5) {
              return this.then(void 0, e5);
            }, t3.finally = function(t4) {
              if (t4 && "function" != typeof t4 && !t4.call) throw new Error("Promise.finally expected a function");
              return this.then(function(r2) {
                return e4.try(t4).then(function() {
                  return r2;
                });
              }, function(r2) {
                return e4.try(t4).then(function() {
                  throw r2;
                });
              });
            }, t3.timeout = function(e5, t4) {
              var r2 = this;
              if (this.resolved || this.rejected) return this;
              var n2 = setTimeout(function() {
                r2.resolved || r2.rejected || r2.reject(t4 || new Error("Promise timed out after " + e5 + "ms"));
              }, e5);
              return this.then(function(e6) {
                return clearTimeout(n2), e6;
              });
            }, t3.toPromise = function() {
              if ("undefined" == typeof Promise) throw new TypeError("Could not find Promise");
              return Promise.resolve(this);
            }, t3.lazy = function() {
              return this.errorHandled = true, this;
            }, e4.resolve = function(t4) {
              return t4 instanceof e4 ? t4 : n(t4) ? new e4(function(e5, r2) {
                return t4.then(e5, r2);
              }) : new e4().resolve(t4);
            }, e4.reject = function(t4) {
              return new e4().reject(t4);
            }, e4.asyncReject = function(t4) {
              return new e4().asyncReject(t4);
            }, e4.all = function(t4) {
              var r2 = new e4(), o2 = t4.length, i2 = [].slice();
              if (!o2) return r2.resolve(i2), r2;
              for (var s2 = function(e5, t5, n2) {
                return t5.then(function(t6) {
                  i2[e5] = t6, 0 == (o2 -= 1) && r2.resolve(i2);
                }, function(e6) {
                  n2.reject(e6);
                });
              }, a2 = 0; a2 < t4.length; a2++) {
                var c2 = t4[a2];
                if (c2 instanceof e4) {
                  if (c2.resolved) {
                    i2[a2] = c2.value, o2 -= 1;
                    continue;
                  }
                } else if (!n(c2)) {
                  i2[a2] = c2, o2 -= 1;
                  continue;
                }
                s2(a2, e4.resolve(c2), r2);
              }
              return 0 === o2 && r2.resolve(i2), r2;
            }, e4.hash = function(t4) {
              var r2 = {}, o2 = [], i2 = function(e5) {
                if (t4.hasOwnProperty(e5)) {
                  var i3 = t4[e5];
                  n(i3) ? o2.push(i3.then(function(t5) {
                    r2[e5] = t5;
                  })) : r2[e5] = i3;
                }
              };
              for (var s2 in t4) i2(s2);
              return e4.all(o2).then(function() {
                return r2;
              });
            }, e4.map = function(t4, r2) {
              return e4.all(t4.map(r2));
            }, e4.onPossiblyUnhandledException = function(e5) {
              return (function(e6) {
                return s.push(e6), { cancel: function() {
                  s.splice(s.indexOf(e6), 1);
                } };
              })(e5);
            }, e4.try = function(t4, r2, n2) {
              if (t4 && "function" != typeof t4 && !t4.call) throw new Error("Promise.try expected a function");
              var o2;
              u();
              try {
                o2 = t4.apply(r2, n2 || []);
              } catch (t5) {
                return d(), e4.reject(t5);
              }
              return d(), e4.resolve(o2);
            }, e4.delay = function(t4) {
              return new e4(function(e5) {
                setTimeout(e5, t4);
              });
            }, e4.isPromise = function(t4) {
              return !!(t4 && t4 instanceof e4) || n(t4);
            }, e4.flush = function() {
              return t4 = o = o || new e4(), c(), t4;
              var t4;
            }, e4;
          })();
        }]);
      }, 834(e2, t2, r) {
        e2.exports = r(994);
      } }, t = {}, (function r(n) {
        var o = t[n];
        if (void 0 !== o) return o.exports;
        var i = t[n] = { exports: {} };
        return e[n].call(i.exports, i, i.exports, r), i.exports;
      })(156);
      var e, t;
    });
  }
});

export {
  require_dist
};
//# sourceMappingURL=chunk-4RUJZCI2.js.map