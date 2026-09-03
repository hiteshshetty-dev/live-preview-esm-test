"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/utils/getCurrentPageUrl.ts
var getCurrentPageUrl_exports = {};
__export(getCurrentPageUrl_exports, {
  getCurrentPageUrl: () => getCurrentPageUrl
});
module.exports = __toCommonJS(getCurrentPageUrl_exports);
var import_logger = require("../logger/logger.cjs");
var import_livePreviewQueryParams = require("./livePreviewQueryParams.constant.cjs");
var PARAMS_TO_DROP = [...import_livePreviewQueryParams.LIVE_PREVIEW_QUERY_PARAMS, "cslp-buttons"];
function getCurrentPageUrl() {
  try {
    if (typeof window === "undefined" || !window.location?.href) return "";
    const url = new URL(window.location.href);
    PARAMS_TO_DROP.forEach((param) => url.searchParams.delete(param));
    return url.href;
  } catch (error) {
    import_logger.PublicLogger.error("Error while reading the current page URL");
    return "";
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getCurrentPageUrl
});
//# sourceMappingURL=getCurrentPageUrl.cjs.map