import { VisualBuilderPostMessageEvents } from './types/postMessage.types.cjs';

/**
 * Rejection handler for sends whose receiver is only mounted some of the time.
 *
 * Only the missing-listener reply carries a `code`; the library's other
 * rejections are an uncoded `Error` (closed window) or a bare string (no ack),
 * so they fall through to the warning. That is deliberate: a receiver that
 * never acks is not the same as one that answered "nobody is listening".
 */
declare function ignoreMissingListener(event: VisualBuilderPostMessageEvents): (error: unknown) => void;

export { ignoreMissingListener };
