import { CslpData } from '../../cslp/types/cslp.types.js';
import { VisualBuilderCslpEventDetails } from '../types/visualBuilder.types.js';

/**
 * Returns the CSLP data of the closest ancestor element with a `data-cslp` attribute
 * to the target element of a mouse event.
 *
 * When `overlayPropagation.enable` is `true` and the target element has no
 * `data-cslp` ancestor, falls back to `document.elementsFromPoint()` so the
 * lookup can pierce sibling elements (e.g. empty CSS-grid spacer cells) that
 * visually overlap a `data-cslp` field but would otherwise intercept the
 * mouse event.
 *
 * @param event - The mouse event.
 * @returns The CSLP data of the resolved element with a `data-cslp` attribute,
 * along with metadata and schema information for the corresponding field.
 */
declare function getCsDataOfElement(event: MouseEvent): VisualBuilderCslpEventDetails | undefined;
declare function getDOMEditStack(ele: Element): CslpData[];

export { getCsDataOfElement, getDOMEditStack };
