"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/visualBuilder/utils/postMessageErrors.ts
var postMessageErrors_exports = {};
__export(postMessageErrors_exports, {
  ignoreMissingListener: () => ignoreMissingListener
});
module.exports = __toCommonJS(postMessageErrors_exports);
var import_logger = require("../../logger/logger.cjs");
var NO_REQUEST_LISTENER_FOUND = "NO_REQUEST_LISTENER_FOUND";
function ignoreMissingListener(event) {
  return (error) => {
    if (error?.code === NO_REQUEST_LISTENER_FOUND) {
      return;
    }
    import_logger.PublicLogger.warn(
      `Failed to send "${event}" to the visual builder`,
      error
    );
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ignoreMissingListener
});
//# sourceMappingURL=postMessageErrors.cjs.map