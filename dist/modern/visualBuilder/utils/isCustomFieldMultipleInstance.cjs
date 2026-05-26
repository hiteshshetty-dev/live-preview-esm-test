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

// src/visualBuilder/utils/isCustomFieldMultipleInstance.ts
var isCustomFieldMultipleInstance_exports = {};
__export(isCustomFieldMultipleInstance_exports, {
  isCustomFieldMultipleInstance: () => isCustomFieldMultipleInstance
});
module.exports = __toCommonJS(isCustomFieldMultipleInstance_exports);
var import_types = require("./types/index.types.cjs");
var import_getFieldType = require("./getFieldType.cjs");
var import_isFieldMultiple = require("./isFieldMultiple.cjs");
function isCustomFieldMultipleInstance(fieldSchema, fieldMetadata) {
  if (!fieldSchema || !fieldMetadata) return false;
  return (0, import_getFieldType.getFieldType)(fieldSchema) === import_types.FieldDataType.CUSTOM_FIELD && (0, import_isFieldMultiple.isFieldMultiple)(fieldSchema) && fieldMetadata.fieldPathWithIndex !== fieldMetadata.instance?.fieldPathWithIndex && (fieldMetadata.multipleFieldMetadata?.index ?? -1) !== -1;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  isCustomFieldMultipleInstance
});
//# sourceMappingURL=isCustomFieldMultipleInstance.cjs.map