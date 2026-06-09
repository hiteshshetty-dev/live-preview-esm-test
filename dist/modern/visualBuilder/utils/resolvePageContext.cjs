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
  const configCtx = import_configManager.default.get().pageContext;
  return {
    entryUid: configCtx?.entryUid ?? window.__CS_PAGE_CONTEXT__?.entryUid ?? document.querySelector('meta[name="contentstack:entry-uid"]')?.getAttribute("content") ?? void 0,
    contentTypeUid: configCtx?.contentTypeUid ?? window.__CS_PAGE_CONTEXT__?.contentTypeUid ?? document.querySelector('meta[name="contentstack:content-type-uid"]')?.getAttribute("content") ?? void 0
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  resolvePageContext
});
//# sourceMappingURL=resolvePageContext.cjs.map