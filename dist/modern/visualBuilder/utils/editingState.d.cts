/**
 * Returns whether a field inside `element` is being edited in Visual Editor.
 * Pass the element wrapping your self-updating content to pause it while true.
 * Omit `element` to check the whole document. Returns `false` during SSR.
 */
declare function isVisualEditorEditing(element?: HTMLElement | null): boolean;

export { isVisualEditorEditing };
