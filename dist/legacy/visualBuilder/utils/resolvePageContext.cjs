"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/visualBuilder/utils/resolvePageContext.ts
var resolvePageContext_exports = {};
__export(resolvePageContext_exports, {
  resolvePageContext: () => resolvePageContext
});
module.exports = __toCommonJS(resolvePageContext_exports);
var import_configManager = __toESM(require("../../configManager/configManager.cjs"), 1);
function resolvePageContext() {
  var _a, _b, _c, _d;
  const configCtx = import_configManager.default.get().pageContext;
  return {
    entryUid: (configCtx == null ? void 0 : configCtx.entryUid) ?? ((_a = window.__CS_PAGE_CONTEXT__) == null ? void 0 : _a.entryUid) ?? ((_b = document.querySelector('meta[name="contentstack:entry-uid"]')) == null ? void 0 : _b.getAttribute("content")) ?? void 0,
    contentTypeUid: (configCtx == null ? void 0 : configCtx.contentTypeUid) ?? ((_c = window.__CS_PAGE_CONTEXT__) == null ? void 0 : _c.contentTypeUid) ?? ((_d = document.querySelector('meta[name="contentstack:content-type-uid"]')) == null ? void 0 : _d.getAttribute("content")) ?? void 0
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  resolvePageContext
});
//# sourceMappingURL=resolvePageContext.cjs.map