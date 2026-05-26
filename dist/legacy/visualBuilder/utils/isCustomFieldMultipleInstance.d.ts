import { CslpData } from '../../cslp/types/cslp.types.js';
import { ISchemaFieldMap } from './types/index.types.js';
import '../../cms/types/contentTypeSchema.types.js';

declare function isCustomFieldMultipleInstance(fieldSchema: ISchemaFieldMap | null | undefined, fieldMetadata: CslpData | null | undefined): boolean;

export { isCustomFieldMultipleInstance };
