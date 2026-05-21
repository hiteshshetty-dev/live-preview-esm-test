import "../../chunk-5WRI5ZAA.js";

// src/visualBuilder/utils/getVisualBuilderRedirectionUrl.ts
import Config from "../../configManager/configManager.js";
import { extractDetailsFromCslp, isValidCslp } from "../../cslp/index.js";
function getVisualBuilderRedirectionUrl() {
  const { stackDetails, clientUrlParams } = Config.get();
  const { branch, apiKey, environment, locale } = stackDetails;
  const { url: appUrl } = clientUrlParams;
  const searchParams = new URLSearchParams();
  if (branch) {
    searchParams.set("branch", branch);
  }
  if (environment) {
    searchParams.set("environment", environment);
  }
  searchParams.set("target-url", window.location.href);
  const elementWithDataCslp = document.querySelector(`[data-cslp]`);
  let localeToUse = locale;
  if (elementWithDataCslp) {
    const cslpData = elementWithDataCslp.getAttribute("data-cslp");
    if (isValidCslp(cslpData)) {
      const { locale: cslpLocale } = extractDetailsFromCslp(cslpData);
      localeToUse = cslpLocale;
    }
  }
  if (localeToUse) {
    searchParams.set("locale", localeToUse);
  }
  const pageContext = Config.get().pageContext;
  const windowContext = window.__CS_PAGE_CONTEXT__;
  const entryUid = pageContext?.entryUid ?? windowContext?.entryUid ?? document.querySelector('meta[name="contentstack:entry-uid"]')?.getAttribute("content");
  const contentTypeUid = pageContext?.contentTypeUid ?? windowContext?.contentTypeUid ?? document.querySelector('meta[name="contentstack:content-type-uid"]')?.getAttribute("content");
  if (entryUid) {
    searchParams.set("entry_uid", entryUid);
  }
  if (contentTypeUid) {
    searchParams.set("content_type_uid", contentTypeUid);
  }
  const completeURL = new URL(
    `/#!/stack/${apiKey}/visual-editor?${searchParams.toString()}`,
    appUrl
  );
  return completeURL;
}
export {
  getVisualBuilderRedirectionUrl as default
};
//# sourceMappingURL=getVisualBuilderRedirectionUrl.js.map