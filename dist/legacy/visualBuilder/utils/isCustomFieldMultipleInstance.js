import "../../chunk-5WRI5ZAA.js";

// src/visualBuilder/utils/isCustomFieldMultipleInstance.ts
import { FieldDataType } from "./types/index.types.js";
import { getFieldType } from "./getFieldType.js";
import { isFieldMultiple } from "./isFieldMultiple.js";
function isCustomFieldMultipleInstance(fieldSchema, fieldMetadata) {
  var _a, _b;
  if (!fieldSchema || !fieldMetadata) return false;
  return getFieldType(fieldSchema) === FieldDataType.CUSTOM_FIELD && isFieldMultiple(fieldSchema) && fieldMetadata.fieldPathWithIndex !== ((_a = fieldMetadata.instance) == null ? void 0 : _a.fieldPathWithIndex) && (((_b = fieldMetadata.multipleFieldMetadata) == null ? void 0 : _b.index) ?? -1) !== -1;
}
export {
  isCustomFieldMultipleInstance
};
//# sourceMappingURL=isCustomFieldMultipleInstance.js.map