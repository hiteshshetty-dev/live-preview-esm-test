import "../../chunk-5WRI5ZAA.js";

// src/visualBuilder/utils/getWholeFieldElement.ts
function getParentCslp(cslpValue) {
  return cslpValue.split(".").slice(0, -1).join(".");
}
function getWholeFieldElement(instanceElement, parentCslp) {
  return instanceElement.closest(`[data-cslp="${parentCslp}"]`);
}
export {
  getParentCslp,
  getWholeFieldElement
};
//# sourceMappingURL=getWholeFieldElement.js.map