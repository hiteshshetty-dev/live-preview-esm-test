import "../../chunk-5WRI5ZAA.js";

// src/visualBuilder/utils/isFieldDisabled.ts
import Config from "../../configManager/configManager.js";
import { VisualBuilder } from "../index.js";
var DisableReason = {
  ReadOnly: "You have only read access to this field",
  LocalizedEntry: "Editing this field is restricted in localized entries",
  ResolvedVariantPermissions: "This field does not exist in the selected variant",
  UnlinkedVariant: "This field is not editable as it is not linked to the selected variant.",
  CanLinkVariant: "Click here to link a variant",
  UnderlinedAndClickableWord: "here",
  CannotLinkVariant: "Contact your stack admin or owner to link it.",
  AudienceMode: "To edit an experience, open the Audience widget and click the Edit icon.",
  DisabledVariant: "This field is not editable as it doesn't match the selected variant",
  UnlocalizedVariant: "This field is not editable as it is not localized",
  None: "",
  EntryUpdateRestricted: "You do not have permission to edit this entry",
  WorkflowStagePermission: ({ stageName }) => `You do not have Edit access to this entry on the '${stageName}' workflow stage`,
  EntryUpdateRestrictedRoleAndWorkflowStage: ({
    stageName
  }) => `Editing is restricted for your role or by the rules for the '${stageName}' stage. Contact your admin for edit access.`,
  WorkflowStageRequestEdit: ({ stageName }) => `You do not have the edit access to this entry on the '${stageName}' workflow stage.`,
  WorkflowStageRequestPending: ({ stageName }) => `You do not have the edit access to this entry on the '${stageName}' workflow stage. Your request has been sent and is awaiting approval.`
};
var getDisableReason = (flags, params) => {
  var _a;
  if (flags.updateRestrictDueToRole) return DisableReason.ReadOnly;
  if (flags.updateRestrictDueToNonLocalizableFields)
    return DisableReason.LocalizedEntry;
  if (flags.updateRestrictDueToUnlocalizedVariant)
    return DisableReason.UnlocalizedVariant;
  if (flags.updateRestrictDueToUnlinkVariant) {
    return flags.canLinkVariant ? `${DisableReason.UnlinkedVariant} ${DisableReason.CanLinkVariant} ` : `${DisableReason.UnlinkedVariant} ${DisableReason.CannotLinkVariant}`;
  }
  if (flags.updateRestrictDueToAudienceMode)
    return DisableReason.AudienceMode;
  if (flags.updateRestrictDueToDisabledVariant)
    return DisableReason.DisabledVariant;
  if (flags.updateRestrictDueToEntryUpdateRestriction && flags.updateRestrictDueToWorkflowStagePermission) {
    return DisableReason.EntryUpdateRestrictedRoleAndWorkflowStage({
      stageName: (params == null ? void 0 : params.stageName) ? params.stageName : "Unknown"
    });
  }
  if (flags.updateRestrictDueToEntryUpdateRestriction) {
    return DisableReason.EntryUpdateRestricted;
  }
  if (flags.updateRestrictDueToWorkflowStagePermission) {
    const stageName = (params == null ? void 0 : params.stageName) ? params.stageName : "Unknown";
    const req = (_a = params == null ? void 0 : params.entryWorkflowStageDetails) == null ? void 0 : _a.requestEditAccess;
    const entryAllowsUpdate = (params == null ? void 0 : params.entryPermissions) == null || params.entryPermissions.update === true;
    if (entryAllowsUpdate && !flags.updateRestrictDueToEntryUpdateRestriction && req) {
      if (req.hasPending) {
        return DisableReason.WorkflowStageRequestPending({
          stageName
        });
      }
      if (req.canRequest) {
        return DisableReason.WorkflowStageRequestEdit({
          stageName
        });
      }
    }
    return DisableReason.WorkflowStagePermission({
      stageName
    });
  }
  if (flags.updateRestrictDueToResolvedVariantPermissions) {
    return DisableReason.ResolvedVariantPermissions;
  }
  return DisableReason.None;
};
var isFieldDisabled = (fieldSchemaMap, eventFieldDetails, resolvedVariantPermissions, entryPermissions, entryWorkflowStageDetails) => {
  var _a, _b, _c, _d;
  const { editableElement, fieldMetadata } = eventFieldDetails;
  const masterLocale = Config.get().stackDetails.masterLocale || "en-us";
  const { locale: cmsLocale, variant } = VisualBuilder.VisualBuilderGlobalState.value;
  const flags = {
    updateRestrictDueToRole: Boolean(
      (_a = fieldSchemaMap == null ? void 0 : fieldSchemaMap.field_metadata) == null ? void 0 : _a.updateRestrict
    ),
    updateRestrictDueToUnlinkVariant: Boolean(
      (_b = fieldSchemaMap == null ? void 0 : fieldSchemaMap.field_metadata) == null ? void 0 : _b.isUnlinkedVariant
    ),
    canLinkVariant: Boolean((_c = fieldSchemaMap == null ? void 0 : fieldSchemaMap.field_metadata) == null ? void 0 : _c.canLinkVariant),
    updateRestrictDueToUnlocalizedVariant: Boolean(
      variant && fieldMetadata.locale !== cmsLocale
    ),
    updateRestrictDueToNonLocalizableFields: Boolean(
      (fieldSchemaMap == null ? void 0 : fieldSchemaMap.non_localizable) && masterLocale !== fieldMetadata.locale
    ),
    updateRestrictDueToResolvedVariantPermissions: resolvedVariantPermissions ? Boolean(
      !resolvedVariantPermissions.update
    ) : false,
    updateRestrictDueToAudienceMode: false,
    updateRestrictDueToDisabledVariant: false
  };
  if (entryPermissions && !entryPermissions.update) {
    flags.updateRestrictDueToEntryUpdateRestriction = true;
  }
  if (entryWorkflowStageDetails && !entryWorkflowStageDetails.permissions.entry.update) {
    flags.updateRestrictDueToWorkflowStagePermission = true;
  }
  if (VisualBuilder.VisualBuilderGlobalState.value.audienceMode && editableElement.classList.contains("visual-builder__lower-order-variant-field")) {
    flags.updateRestrictDueToDisabledVariant = resolvedVariantPermissions ? !!resolvedVariantPermissions.error : false;
  }
  if (VisualBuilder.VisualBuilderGlobalState.value.audienceMode && !editableElement.classList.contains("visual-builder__variant-field") && !editableElement.classList.contains("visual-builder__base-field")) {
    if (editableElement.classList.contains(
      "visual-builder__disabled-variant-field"
    )) {
      flags.updateRestrictDueToDisabledVariant = true;
    } else {
      flags.updateRestrictDueToAudienceMode = true;
    }
  }
  const isDisabled = Object.values(flags).some(Boolean);
  const getDisableReasonParams = {};
  if (((_d = entryWorkflowStageDetails == null ? void 0 : entryWorkflowStageDetails.stage) == null ? void 0 : _d.name) !== void 0) {
    getDisableReasonParams.stageName = entryWorkflowStageDetails.stage.name;
  }
  if (entryWorkflowStageDetails !== void 0) {
    getDisableReasonParams.entryWorkflowStageDetails = entryWorkflowStageDetails;
  }
  if (entryPermissions !== void 0) {
    getDisableReasonParams.entryPermissions = entryPermissions;
  }
  const reason = getDisableReason(flags, getDisableReasonParams);
  let workflowRequestUi;
  if (flags.updateRestrictDueToWorkflowStagePermission && !flags.updateRestrictDueToEntryUpdateRestriction && (entryPermissions == null || entryPermissions.update === true) && (entryWorkflowStageDetails == null ? void 0 : entryWorkflowStageDetails.requestEditAccess)) {
    const req = entryWorkflowStageDetails.requestEditAccess;
    if (req.hasPending) {
      workflowRequestUi = "pending";
    } else if (req.canRequest) {
      workflowRequestUi = "request";
    }
  }
  return workflowRequestUi !== void 0 ? { isDisabled, reason, workflowRequestUi } : { isDisabled, reason };
};
export {
  DisableReason,
  isFieldDisabled
};
//# sourceMappingURL=isFieldDisabled.js.map