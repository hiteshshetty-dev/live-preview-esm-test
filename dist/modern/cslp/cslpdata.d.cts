import { CslpData } from './types/cslp.types.cjs';

/**
 * Validates if a CSLP value string is valid.
 *
 * Supports two formats:
 * - **v1 format**: `content_type_uid.entry_uid.locale[.field_path]` (requires at least 3 parts)
 * - **v2 format**: `v2:content_type_uid.entry_uid_variant_uid.locale[.field_path]`
 *   (requires at least 3 parts, entry_uid_variant_uid must contain underscore separating entry_uid and variant_uid)
 *
 * @param cslpValue The CSLP value string to validate (can be null or undefined).
 * @returns Type predicate: `true` if the CSLP value is valid (narrows type to `string`), `false` otherwise.
 *
 * @example
 * Valid v1 format
 * isValidCslp("page.entry123.en-us") -> true
 * isValidCslp("page.entry123.en-us.title") -> true
 *
 * Valid v2 format
 * isValidCslp("v2:page.entry123_variant456.en-us") -> true
 * isValidCslp("v2:page.entry123_variant456.en-us.title") -> true
 *
 * Invalid cases
 * isValidCslp(null) -> false
 * isValidCslp("invalid") -> false (less than 3 parts)
 * isValidCslp("v2:page.entry123.en-us") -> false (missing underscore in entry_uid_variant_uid)
 */
declare function isValidCslp(cslpValue: string | null | undefined): cslpValue is string;
/**
 * Extracts details from a CSLP value string.
 * @param cslpValue The CSLP value string to extract details from.
 * @returns An object containing the extracted details.
 */
declare function extractDetailsFromCslp(cslpValue: string): CslpData;
declare function addCslpOutline(e: MouseEvent, callback?: (args: {
    cslpTag: string;
    highlightedElement: HTMLElement;
}) => void): void;

export { addCslpOutline, extractDetailsFromCslp, isValidCslp };
