import { IPageContext } from './types.cjs';
import '../visualBuilder/types/collab.types.cjs';

declare global {
    interface Window {
        __CS_PAGE_CONTEXT__?: IPageContext;
    }
}
