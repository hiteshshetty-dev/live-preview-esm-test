import "../../chunk-5WRI5ZAA.js";

// src/visualBuilder/utils/isCustomFieldMultipleInstance.ts
import { FieldDataType } from "./types/index.types.js";
import { getFieldType } from "./getFieldType.js";
import { isFieldMultiple } from "./isFieldMultiple.js";
function isCustomFieldMultipleInstance(fieldSchema, fieldMetadata) {
  if (!fieldSchema || !fieldMetadata) return false;
  return getFieldType(fieldSchema) === FieldDataType.CUSTOM_FIELD && isFieldMultiple(fieldSchema) && fieldMetadata.fieldPathWithIndex !== fieldMetadata.instance?.fieldPathWithIndex && (fieldMetadata.multipleFieldMetadata?.index ?? -1) !== -1;
}
export {
  isCustomFieldMultipleInstance
};
//# sourceMappingURL=isCustomFieldMultipleInstance.js.map