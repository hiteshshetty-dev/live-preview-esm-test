import "../../chunk-5WRI5ZAA.js";

// src/visualBuilder/utils/editingState.ts
import { VISUAL_BUILDER_FIELD_TYPE_ATTRIBUTE_KEY } from "./constants.js";
var EDITING_SELECTOR = `[${VISUAL_BUILDER_FIELD_TYPE_ATTRIBUTE_KEY}]`;
function isVisualEditorEditing(element) {
  if (typeof document === "undefined") return false;
  if (element) {
    return typeof element.matches === "function" && element.matches(EDITING_SELECTOR) || element.querySelector(EDITING_SELECTOR) !== null;
  }
  return document.querySelector(EDITING_SELECTOR) !== null;
}
export {
  isVisualEditorEditing
};
//# sourceMappingURL=editingState.js.map