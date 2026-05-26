import { CslpData } from '../../cslp/types/cslp.types.cjs';
import { ISchemaFieldMap } from './types/index.types.cjs';
import '../../cms/types/contentTypeSchema.types.cjs';

declare function isCustomFieldMultipleInstance(fieldSchema: ISchemaFieldMap | null | undefined, fieldMetadata: CslpData | null | undefined): boolean;

export { isCustomFieldMultipleInstance };
