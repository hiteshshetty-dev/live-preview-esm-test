import "../../chunk-5WRI5ZAA.js";

// src/visualBuilder/utils/resolvePageContext.ts
import Config from "../../configManager/configManager.js";
function resolvePageContext() {
  var _a, _b, _c, _d;
  const configCtx = Config.get().pageContext;
  return {
    entryUid: (configCtx == null ? void 0 : configCtx.entryUid) ?? ((_a = window.__CS_PAGE_CONTEXT__) == null ? void 0 : _a.entryUid) ?? ((_b = document.querySelector('meta[name="contentstack:entry-uid"]')) == null ? void 0 : _b.getAttribute("content")) ?? void 0,
    contentTypeUid: (configCtx == null ? void 0 : configCtx.contentTypeUid) ?? ((_c = window.__CS_PAGE_CONTEXT__) == null ? void 0 : _c.contentTypeUid) ?? ((_d = document.querySelector('meta[name="contentstack:content-type-uid"]')) == null ? void 0 : _d.getAttribute("content")) ?? void 0
  };
}
export {
  resolvePageContext
};
//# sourceMappingURL=resolvePageContext.js.map