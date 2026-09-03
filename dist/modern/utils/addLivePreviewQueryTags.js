import "../chunk-5WRI5ZAA.js";

// src/utils/addLivePreviewQueryTags.ts
import { PublicLogger } from "../logger/logger.js";
import { LIVE_PREVIEW_QUERY_PARAMS } from "./livePreviewQueryParams.constant.js";
function addLivePreviewQueryTags(link) {
  try {
    const docUrl = new URL(document.location.href);
    const newUrl = new URL(link);
    LIVE_PREVIEW_QUERY_PARAMS.forEach((param) => {
      const value = docUrl.searchParams.get(param);
      if (value) {
        newUrl.searchParams.set(param, value);
      }
    });
    return newUrl.href;
  } catch (error) {
    PublicLogger.error("Error while adding live preview to URL");
    return link;
  }
}
export {
  addLivePreviewQueryTags
};
//# sourceMappingURL=addLivePreviewQueryTags.js.map