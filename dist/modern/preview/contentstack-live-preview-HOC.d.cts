import { OnEntryChangeCallback, OnEntryChangeConfig, OnEntryChangeCallbackUID, OnEntryChangeUnsubscribeParameters } from '../livePreview/types/onEntryChangeCallback.type.cjs';
import { IInitData, IExportedConfig } from '../types/types.cjs';
import '../visualBuilder/types/collab.types.cjs';

declare class ContentstackLivePreview {
    private static previewConstructors;
    /**
     * The subscribers for the onEntryChange event. We store them here when the SDK is not initialized.
     */
    private static onEntryChangeCallbacks;
    /**
     * Initializes the Live Preview SDK with the provided user configuration.
     * If the SDK is already initialized, subsequent calls to this method will return the existing SDK instance.
     * @param userConfig - The user configuration to initialize the SDK with. See {@link https://github.com/contentstack/live-preview-sdk/blob/main/docs/live-preview-configs.md#initconfig-iconfig|Live preview User config} for more details.
     * @returns A promise that resolves to the constructors of the Live Preview SDK.
     */
    static init(userConfig?: Partial<IInitData>): Promise<typeof ContentstackLivePreview.previewConstructors>;
    /**
     * It is the live preview hash.
     * This hash could be used when data is fetched manually.
     */
    static get hash(): string;
    static get config(): IExportedConfig;
    private static isInitialized;
    private static initializePreview;
    /**
     * Registers a callback function to be called when an entry changes.
     * @param onChangeCallback The callback function to be called when an entry changes.
     * @param config Optional configuration for the callback.
     * @param config.skipInitialRender If true, the callback will not be called when it is first registered.
     * @returns A unique identifier for the registered callback.
     *
     * @example
     * ```js
     * const callbackUid = ContentstackLivePreview.onEntryChange(() => {
     *    console.log("Entry changed");
     * });
     *
     * // Unsubscribe the callback
     * ContentstackLivePreview.unsubscribeOnEntryChange(callbackUid);
     * ```
     */
    static onEntryChange(onChangeCallback: OnEntryChangeCallback, config?: OnEntryChangeConfig): OnEntryChangeCallbackUID;
    /**
     * Registers a callback function to be called when there is a change in the entry being edited in live preview mode. The difference between this and `onEntryChange` is that this callback will not be called when it is first registered.
     * @param onChangeCallback The callback function to be called when there is a change in the entry.
     * @returns A unique identifier for the registered callback.
     *
     * @example
     * ```js
     * const callbackUid = ContentstackLivePreview.onLiveEdit(() => {
     *   console.log("Entry changed");
     * });
     *
     * // Unsubscribe the callback
     * ContentstackLivePreview.unsubscribeOnEntryChange(callbackUid);
     * ```
     *
     */
    static onLiveEdit(onChangeCallback: OnEntryChangeCallback): OnEntryChangeCallbackUID;
    /**
     * Unsubscribes from the entry change event.
     * @param callback - The callback function to be unsubscribed.
     *
     * @example
     * ```js
     * // unsubscribing using the Callback UID
     * const callbackUid = ContentstackLivePreview.onEntryChange(() => {
     *  console.log("Entry changed");
     * });
     *
     * // Unsubscribe the callback
     * ContentstackLivePreview.unsubscribeOnEntryChange(callbackUid);
     * ```
     *
     * @example
     * ```js
     * // unsubscribing using the callback function
     * const callback = () => {console.log("Entry changed")};
     * ContentstackLivePreview.onEntryChange(callback);
     *
     * // Unsubscribe the callback
     * ContentstackLivePreview.unsubscribeOnEntryChange(callback);
     * ```
     *
     * @example
     * ```js
     * // The same is applicable to onLiveEdit
     * const callbackUid = ContentstackLivePreview.onLiveEdit(() => {
     * console.log("Entry changed");
     * });
     *
     * // Unsubscribe the callback
     * ContentstackLivePreview.unsubscribeOnEntryChange(callbackUid);
     * ```
     *
     *
     */
    static unsubscribeOnEntryChange(callback: OnEntryChangeUnsubscribeParameters): void;
    /**
     * Sets the page-level entry context for the current page.
     * Used by the Visual Builder "Start Editing" button to know which entry
     * the current page is rendering, enabling accurate VB navigation.
     *
     * Place this call alongside your existing `addEditableTags` call — both
     * reference the same `entry` object so there is no extra lookup.
     *
     * @example
     * ```js
     * // In your page component / useEffect
     * Utils.addEditableTags(entry, "blog_post", true, "en-us");
     * ContentstackLivePreview.setPageContext({ entryUid: entry.uid, contentTypeUid: "blog_post" });
     * ```
     */
    static setPageContext(context: {
        entryUid: string;
        contentTypeUid: string;
    }): void;
    /**
     * Retrieves the version of the SDK.
     * @returns The version of the SDK as a string.
     */
    static getSdkVersion(): string;
}

export { ContentstackLivePreview as default };
