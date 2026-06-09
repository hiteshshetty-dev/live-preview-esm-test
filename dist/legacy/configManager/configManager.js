import "../chunk-5WRI5ZAA.js";

// src/configManager/configManager.ts
import { deepSignal } from "deepsignal";
import { getDefaultConfig, getUserInitData } from "./config.default.js";
import { handleInitData } from "./handleUserConfig.js";
import { has as lodashHas, set as lodashSet } from "lodash-es";
var Config = class {
  static replace(userInput = getUserInitData()) {
    handleInitData(userInput);
  }
  static set(key, value) {
    if (!lodashHas(this.config.state, key)) {
      throw new Error(`Invalid key: ${key}`);
    }
    lodashSet(this.config.state, key, value);
  }
  static get() {
    return this.config.state;
  }
  static reset() {
    lodashSet(this.config, "state", getDefaultConfig());
  }
};
Config.config = {
  state: deepSignal(getDefaultConfig())
};
var configManager_default = Config;
function updateConfigFromUrl() {
  const searchParams = new URLSearchParams(window.location.search);
  setConfigFromParams(searchParams.toString());
}
function setConfigFromParams(params = {}) {
  const urlParams = new URLSearchParams(params);
  const live_preview = urlParams.get("live_preview");
  const content_type_uid = urlParams.get("content_type_uid");
  const entry_uid = urlParams.get("entry_uid");
  if (live_preview) {
    Config.set("hash", live_preview);
  }
  if (content_type_uid) {
    Config.set("stackDetails.contentTypeUid", content_type_uid);
  }
  if (entry_uid) {
    Config.set("stackDetails.entryUid", entry_uid);
  }
  syncToStackSdk({
    hash: live_preview,
    contentTypeUid: content_type_uid,
    entryUid: entry_uid
  });
}
function syncToStackSdk({
  hash,
  contentTypeUid,
  entryUid
}) {
  const stackSdkLivePreview = Config.get().stackSdk.live_preview;
  if (hash) {
    stackSdkLivePreview.hash = hash;
    stackSdkLivePreview.live_preview = hash;
  }
  if (contentTypeUid) {
    stackSdkLivePreview.content_type_uid = contentTypeUid;
  }
  if (entryUid) {
    stackSdkLivePreview.entry_uid = entryUid;
  }
  Config.set("stackSdk.live_preview", stackSdkLivePreview);
}
export {
  configManager_default as default,
  setConfigFromParams,
  syncToStackSdk,
  updateConfigFromUrl
};
//# sourceMappingURL=configManager.js.map