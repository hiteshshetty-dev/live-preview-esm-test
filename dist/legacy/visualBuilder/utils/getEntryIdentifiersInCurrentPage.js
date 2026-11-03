import "../../chunk-5WRI5ZAA.js";

// src/visualBuilder/utils/getEntryIdentifiersInCurrentPage.ts
import { extractDetailsFromCslp, isValidCslp } from "../../cslp/cslpdata.js";
function getEntryIdentifiersInCurrentPage() {
  const uniqueEntriesMap = /* @__PURE__ */ new Map();
  document.querySelectorAll("[data-cslp]").forEach((element) => {
    const cslpValue = element.getAttribute("data-cslp");
    if (!isValidCslp(cslpValue)) return;
    const cslpData = extractDetailsFromCslp(cslpValue);
    uniqueEntriesMap.set(cslpData.entry_uid, {
      entryUid: cslpData.entry_uid,
      contentTypeUid: cslpData.content_type_uid,
      locale: cslpData.locale
    });
  });
  return { entriesInCurrentPage: Array.from(uniqueEntriesMap.values()) };
}
function getEntryIdentifiersSignature(entries) {
  return entries.map((entry) => `${entry.entryUid}.${entry.locale}`).sort().join("|");
}
export {
  getEntryIdentifiersInCurrentPage,
  getEntryIdentifiersSignature
};
//# sourceMappingURL=getEntryIdentifiersInCurrentPage.js.map