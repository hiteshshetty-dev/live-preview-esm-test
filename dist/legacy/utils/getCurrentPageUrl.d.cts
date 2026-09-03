/**
 * The URL of the page the visitor is on, without live preview's own query
 * parameters.
 *
 * The CMS uses this to keep the preview on the page the editor clicked Edit
 * from. It cannot derive that from the entry: a referenced entry can appear on
 * several pages, and a nested one (page -> hero -> image) has no page among its
 * direct references at all.
 *
 * Returns an empty string outside a browser or if the URL cannot be parsed, so
 * callers can simply omit the parameter.
 */
declare function getCurrentPageUrl(): string;

export { getCurrentPageUrl };
