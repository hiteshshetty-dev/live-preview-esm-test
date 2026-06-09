import "../../chunk-5WRI5ZAA.js";

// src/visualBuilder/utils/resolvePageContext.ts
import Config from "../../configManager/configManager.js";
function resolvePageContext() {
  const configCtx = Config.get().pageContext;
  return {
    entryUid: configCtx?.entryUid ?? window.__CS_PAGE_CONTEXT__?.entryUid ?? document.querySelector('meta[name="contentstack:entry-uid"]')?.getAttribute("content") ?? void 0,
    contentTypeUid: configCtx?.contentTypeUid ?? window.__CS_PAGE_CONTEXT__?.contentTypeUid ?? document.querySelector('meta[name="contentstack:content-type-uid"]')?.getAttribute("content") ?? void 0
  };
}
export {
  resolvePageContext
};
//# sourceMappingURL=resolvePageContext.js.map