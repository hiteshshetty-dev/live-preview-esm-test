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

// src/utils/addLivePreviewQueryTags.ts
var addLivePreviewQueryTags_exports = {};
__export(addLivePreviewQueryTags_exports, {
  addLivePreviewQueryTags: () => addLivePreviewQueryTags
});
module.exports = __toCommonJS(addLivePreviewQueryTags_exports);
var import_logger = require("../logger/logger.cjs");
var import_livePreviewQueryParams = require("./livePreviewQueryParams.constant.cjs");
function addLivePreviewQueryTags(link) {
  try {
    const docUrl = new URL(document.location.href);
    const newUrl = new URL(link);
    import_livePreviewQueryParams.LIVE_PREVIEW_QUERY_PARAMS.forEach((param) => {
      const value = docUrl.searchParams.get(param);
      if (value) {
        newUrl.searchParams.set(param, value);
      }
    });
    return newUrl.href;
  } catch (error) {
    import_logger.PublicLogger.error("Error while adding live preview to URL");
    return link;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addLivePreviewQueryTags
});
//# sourceMappingURL=addLivePreviewQueryTags.cjs.map