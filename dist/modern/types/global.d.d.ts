import { IPageContext } from './types.js';
import '../visualBuilder/types/collab.types.js';

declare global {
    interface Window {
        __CS_PAGE_CONTEXT__?: IPageContext;
    }
}
