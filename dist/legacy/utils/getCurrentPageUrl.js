import "../chunk-5WRI5ZAA.js";

// src/utils/getCurrentPageUrl.ts
import { PublicLogger } from "../logger/logger.js";
import { LIVE_PREVIEW_QUERY_PARAMS } from "./livePreviewQueryParams.constant.js";
var PARAMS_TO_DROP = [...LIVE_PREVIEW_QUERY_PARAMS, "cslp-buttons"];
function getCurrentPageUrl() {
  var _a;
  try {
    if (typeof window === "undefined" || !((_a = window.location) == null ? void 0 : _a.href)) return "";
    const url = new URL(window.location.href);
    PARAMS_TO_DROP.forEach((param) => url.searchParams.delete(param));
    return url.href;
  } catch (error) {
    PublicLogger.error("Error while reading the current page URL");
    return "";
  }
}
export {
  getCurrentPageUrl
};
//# sourceMappingURL=getCurrentPageUrl.js.map