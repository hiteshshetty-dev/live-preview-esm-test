/**
 * Query parameters live preview adds to the page URL. They describe the preview
 * session, not the page.
 *
 * Single source for the two inverse operations on them: `addLivePreviewQueryTags`
 * carries them onto internal links, `getCurrentPageUrl` drops them before the URL
 * goes back to the CMS. Add a parameter here and both sides pick it up.
 */
declare const LIVE_PREVIEW_QUERY_PARAMS: string[];

export { LIVE_PREVIEW_QUERY_PARAMS };
