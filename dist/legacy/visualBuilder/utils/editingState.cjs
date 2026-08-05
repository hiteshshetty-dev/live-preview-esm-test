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

// src/visualBuilder/utils/editingState.ts
var editingState_exports = {};
__export(editingState_exports, {
  isVisualEditorEditing: () => isVisualEditorEditing
});
module.exports = __toCommonJS(editingState_exports);
var import_constants = require("./constants.cjs");
var EDITING_SELECTOR = `[${import_constants.VISUAL_BUILDER_FIELD_TYPE_ATTRIBUTE_KEY}]`;
function isVisualEditorEditing(element) {
  if (typeof document === "undefined") return false;
  if (element) {
    return typeof element.matches === "function" && element.matches(EDITING_SELECTOR) || element.querySelector(EDITING_SELECTOR) !== null;
  }
  return document.querySelector(EDITING_SELECTOR) !== null;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  isVisualEditorEditing
});
//# sourceMappingURL=editingState.cjs.map