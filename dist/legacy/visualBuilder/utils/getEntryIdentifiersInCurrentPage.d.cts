type EntryIdentifier = {
    entryUid: string;
    contentTypeUid: string;
    locale: string;
};
type EntryIdentifiers = {
    entriesInCurrentPage: EntryIdentifier[];
};
/** Distinct entries rendered on the page, one per entry uid, read from `data-cslp`. */
declare function getEntryIdentifiersInCurrentPage(): EntryIdentifiers;
/** Order-independent fingerprint of the entry set, used to notify only on change. */
declare function getEntryIdentifiersSignature(entries: EntryIdentifier[]): string;

export { type EntryIdentifier, type EntryIdentifiers, getEntryIdentifiersInCurrentPage, getEntryIdentifiersSignature };
