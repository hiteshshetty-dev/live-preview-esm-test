declare function getWorkflowStageDetails({ entryUid, contentTypeUid, locale, variantUid, }: {
    entryUid: string;
    contentTypeUid: string;
    locale: string;
    variantUid?: string | undefined;
}): Promise<WorkflowStageDetails>;
/** Mirrors visual-editor GET_WORKFLOW_STAGE_DETAILS payload (QuickForm / canvas alignment). */
interface WorkflowStageRequestEditAccess {
    canRequest: boolean;
    hasPending: boolean;
}
interface WorkflowStageDetails {
    stage: {
        name: string;
    } | undefined;
    permissions: {
        entry: {
            update: boolean;
        };
    };
    /** Present when returned by visual-editor; omitted in legacy SDK-only fallbacks. */
    requestEditAccess?: WorkflowStageRequestEditAccess;
}

export { type WorkflowStageDetails, type WorkflowStageRequestEditAccess, getWorkflowStageDetails };
