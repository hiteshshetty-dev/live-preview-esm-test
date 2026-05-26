"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/visualBuilder/utils/getCsDataOfElement.ts
var getCsDataOfElement_exports = {};
__export(getCsDataOfElement_exports, {
  getCsDataOfElement: () => getCsDataOfElement,
  getDOMEditStack: () => getDOMEditStack
});
module.exports = __toCommonJS(getCsDataOfElement_exports);
var import_cslpdata = require("../../cslp/cslpdata.cjs");
var import_constants = require("./constants.cjs");
var import_configManager = __toESM(require("../../configManager/configManager.cjs"), 1);
function getCsDataOfElement(event) {
  const targetElement = event.target;
  if (!targetElement) {
    return;
  }
  let editableElement = targetElement.closest("[data-cslp]");
  if (!editableElement && import_configManager.default.get().overlayPropagation.enable) {
    const stack = document.elementsFromPoint(
      event.clientX,
      event.clientY
    );
    editableElement = stack.find((el) => el.hasAttribute("data-cslp")) ?? null;
  }
  if (!editableElement) {
    return;
  }
  const cslpData = editableElement.getAttribute("data-cslp");
  if (!(0, import_cslpdata.isValidCslp)(cslpData)) {
    return;
  }
  const fieldMetadata = (0, import_cslpdata.extractDetailsFromCslp)(cslpData);
  return {
    editableElement,
    cslpData,
    fieldMetadata
  };
}
function getPrefix(cslp) {
  let prefix;
  if (cslp.startsWith("v2:")) {
    const variantPrefix = cslp.split(":")[1];
    const content_type_uid = variantPrefix.split(".")[0];
    const euid = variantPrefix.split(".")[1].split("_")[0];
    const locale = variantPrefix.split(".")[2];
    prefix = `${content_type_uid}.${euid}.${locale}`;
  } else {
    prefix = cslp;
  }
  return prefix.split(".").slice(0, 3).join(".");
}
function getDOMEditStack(ele) {
  const cslpSet = [];
  let curr = ele.closest(`[${import_constants.DATA_CSLP_ATTR_SELECTOR}]`);
  while (curr) {
    const cslp = curr.getAttribute(import_constants.DATA_CSLP_ATTR_SELECTOR);
    if (!(0, import_cslpdata.isValidCslp)(cslp)) {
      curr = curr.parentElement?.closest(`[${import_constants.DATA_CSLP_ATTR_SELECTOR}]`);
      continue;
    }
    const entryPrefix = getPrefix(cslp);
    const hasSamePrevPrefix = getPrefix(cslpSet.at(0) || "").startsWith(
      entryPrefix
    );
    if (!hasSamePrevPrefix) {
      cslpSet.unshift(cslp);
    }
    curr = curr.parentElement?.closest(`[${import_constants.DATA_CSLP_ATTR_SELECTOR}]`);
  }
  return cslpSet.filter(import_cslpdata.isValidCslp).map((cslp) => (0, import_cslpdata.extractDetailsFromCslp)(cslp));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getCsDataOfElement,
  getDOMEditStack
});
//# sourceMappingURL=getCsDataOfElement.cjs.map