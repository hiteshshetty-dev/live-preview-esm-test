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

// src/cslp/cslpdata.ts
var cslpdata_exports = {};
__export(cslpdata_exports, {
  addCslpOutline: () => addCslpOutline,
  extractDetailsFromCslp: () => extractDetailsFromCslp,
  isValidCslp: () => isValidCslp
});
module.exports = __toCommonJS(cslpdata_exports);
var import_lodash_es = require("lodash-es");
var import_configManager = __toESM(require("../configManager/configManager.cjs"), 1);
var import_editButton = require("../livePreview/editButton/editButton.style.cjs");
function areRequiredPartsNonEmpty(parts) {
  if (parts.length < 3) {
    return false;
  }
  return parts[0].length > 0 && parts[1].length > 0 && parts[2].length > 0;
}
function isValidCslp(cslpValue) {
  if (!cslpValue) {
    return false;
  }
  if (cslpValue.startsWith("v2:")) {
    const dataAfterPrefix = cslpValue.substring(3);
    const parts2 = dataAfterPrefix.split(".");
    if (!areRequiredPartsNonEmpty(parts2)) {
      return false;
    }
    const entryUidVariantUid = parts2[1];
    const entryVariantParts = entryUidVariantUid.split("_");
    return entryVariantParts.length >= 2 && entryVariantParts.every((part) => part.length > 0);
  }
  const parts = cslpValue.split(".");
  return areRequiredPartsNonEmpty(parts);
}
function extractDetailsFromCslp(cslpValue) {
  let [cslpVersion, cslpData] = cslpValue.split(":");
  if (cslpVersion.length > 2) {
    cslpData = cslpVersion;
    cslpVersion = "v1";
  }
  const [content_type_uid, entryInfo, locale, ...fieldPath] = cslpData.split(".");
  let entry_uid;
  let variant;
  switch (cslpVersion) {
    case "v2": {
      const [uid, variant_uid] = entryInfo.split("_");
      entry_uid = uid;
      variant = variant_uid;
      break;
    }
    default: {
      entry_uid = entryInfo;
      break;
    }
  }
  const instancePathWithInstance = fieldPath.join(".");
  const calculatedPath = fieldPath.filter((path) => {
    const isEmpty = (0, import_lodash_es.isNil)(path);
    const isNumber = (0, import_lodash_es.isFinite)(+path);
    return !isEmpty && !isNumber || false;
  });
  const multipleFieldMetadata = getMultipleFieldMetadata(
    content_type_uid,
    entry_uid,
    locale,
    fieldPath
  );
  if ((0, import_lodash_es.isFinite)(+fieldPath[fieldPath.length - 1])) {
    fieldPath.pop();
  }
  return {
    entry_uid,
    content_type_uid,
    variant,
    locale,
    cslpValue,
    fieldPath: calculatedPath.join("."),
    fieldPathWithIndex: fieldPath.join("."),
    multipleFieldMetadata,
    instance: {
      fieldPathWithIndex: instancePathWithInstance
    }
  };
}
function getParentPathDetails(content_type_uid, entry_uid, locale, fieldPath) {
  const index = (0, import_lodash_es.findLastIndex)(fieldPath, (path) => (0, import_lodash_es.isFinite)(+path));
  if (index === -1) return null;
  const parentPath = fieldPath.slice(0, index);
  return {
    parentPath: parentPath.join("."),
    parentCslpValue: [
      content_type_uid,
      entry_uid,
      locale,
      ...parentPath
    ].join(".")
  };
}
function getMultipleFieldMetadata(content_type_uid, entry_uid, locale, fieldPath) {
  const parentDetails = getParentPathDetails(
    content_type_uid,
    entry_uid,
    locale,
    fieldPath
  );
  const index = (0, import_lodash_es.findLast)(fieldPath, (path) => (0, import_lodash_es.isFinite)(+path));
  return {
    parentDetails,
    index: (0, import_lodash_es.isNil)(index) ? -1 : +index
  };
}
function highlightCslpElement(element, cslpTag, elements, callback) {
  if (elements.highlightedElement)
    elements.highlightedElement.classList.remove(
      (0, import_editButton.cslpTagStyles)()["cslp-edit-mode"]
    );
  element.classList.add((0, import_editButton.cslpTagStyles)()["cslp-edit-mode"]);
  const updatedElements = elements;
  updatedElements.highlightedElement = element;
  import_configManager.default.set("elements", updatedElements);
  callback == null ? void 0 : callback({ cslpTag, highlightedElement: element });
}
function addCslpOutline(e, callback) {
  var _a;
  const elements = import_configManager.default.get().elements;
  let trigger = true;
  const eventTargets = e.composedPath();
  for (const eventTarget of eventTargets) {
    const element = eventTarget;
    if (element.nodeName === "BODY") break;
    if (typeof (element == null ? void 0 : element.getAttribute) !== "function") continue;
    const cslpTag = element.getAttribute("data-cslp");
    if (trigger && isValidCslp(cslpTag)) {
      highlightCslpElement(element, cslpTag, elements, callback);
      trigger = false;
    } else if (!trigger) {
      element.classList.remove((0, import_editButton.cslpTagStyles)()["cslp-edit-mode"]);
    }
  }
  if (trigger && ((_a = import_configManager.default.get().overlayPropagation) == null ? void 0 : _a.enable)) {
    const pointElements = document.elementsFromPoint(e.clientX, e.clientY);
    for (const el of pointElements) {
      const element = el;
      if (element.nodeName === "BODY") break;
      if (typeof (element == null ? void 0 : element.getAttribute) !== "function") continue;
      const cslpTag = element.getAttribute("data-cslp");
      if (isValidCslp(cslpTag)) {
        highlightCslpElement(element, cslpTag, elements, callback);
        break;
      }
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addCslpOutline,
  extractDetailsFromCslp,
  isValidCslp
});
//# sourceMappingURL=cslpdata.cjs.map