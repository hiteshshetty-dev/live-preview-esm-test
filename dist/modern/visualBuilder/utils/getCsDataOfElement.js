import "../../chunk-5WRI5ZAA.js";

// src/visualBuilder/utils/getCsDataOfElement.ts
import { extractDetailsFromCslp, isValidCslp } from "../../cslp/cslpdata.js";
import { DATA_CSLP_ATTR_SELECTOR } from "./constants.js";
import Config from "../../configManager/configManager.js";
function getCsDataOfElement(event) {
  const targetElement = event.target;
  if (!targetElement) {
    return;
  }
  let editableElement = targetElement.closest("[data-cslp]");
  if (!editableElement && Config.get().overlayPropagation.enable && !targetElement.closest(".visual-builder__container")) {
    const stack = document.elementsFromPoint(
      event.clientX,
      event.clientY
    );
    editableElement = stack.find((el) => el.hasAttribute("data-cslp")) ?? null;
  }
  if (!editableElement) {
    return;
  }
  const cslpData = editableElement.getAttribute("data-cslp");
  if (!isValidCslp(cslpData)) {
    return;
  }
  const fieldMetadata = extractDetailsFromCslp(cslpData);
  return {
    editableElement,
    cslpData,
    fieldMetadata
  };
}
function getPrefix(cslp) {
  let prefix;
  if (cslp.startsWith("v2:")) {
    const variantPrefix = cslp.split(":")[1];
    const content_type_uid = variantPrefix.split(".")[0];
    const euid = variantPrefix.split(".")[1].split("_")[0];
    const locale = variantPrefix.split(".")[2];
    prefix = `${content_type_uid}.${euid}.${locale}`;
  } else {
    prefix = cslp;
  }
  return prefix.split(".").slice(0, 3).join(".");
}
function getDOMEditStack(ele) {
  const cslpSet = [];
  let curr = ele.closest(`[${DATA_CSLP_ATTR_SELECTOR}]`);
  while (curr) {
    const cslp = curr.getAttribute(DATA_CSLP_ATTR_SELECTOR);
    if (!isValidCslp(cslp)) {
      curr = curr.parentElement?.closest(`[${DATA_CSLP_ATTR_SELECTOR}]`);
      continue;
    }
    const entryPrefix = getPrefix(cslp);
    const hasSamePrevPrefix = getPrefix(cslpSet.at(0) || "").startsWith(
      entryPrefix
    );
    if (!hasSamePrevPrefix) {
      cslpSet.unshift(cslp);
    }
    curr = curr.parentElement?.closest(`[${DATA_CSLP_ATTR_SELECTOR}]`);
  }
  return cslpSet.filter(isValidCslp).map((cslp) => extractDetailsFromCslp(cslp));
}
export {
  getCsDataOfElement,
  getDOMEditStack
};
//# sourceMappingURL=getCsDataOfElement.js.map