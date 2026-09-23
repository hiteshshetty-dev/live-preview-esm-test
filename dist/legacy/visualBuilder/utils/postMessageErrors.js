import "../../chunk-5WRI5ZAA.js";

// src/visualBuilder/utils/postMessageErrors.ts
import { PublicLogger } from "../../logger/logger.js";
var NO_REQUEST_LISTENER_FOUND = "NO_REQUEST_LISTENER_FOUND";
function ignoreMissingListener(event) {
  return (error) => {
    if ((error == null ? void 0 : error.code) === NO_REQUEST_LISTENER_FOUND) {
      return;
    }
    PublicLogger.warn(
      `Failed to send "${event}" to the visual builder`,
      error
    );
  };
}
export {
  ignoreMissingListener
};
//# sourceMappingURL=postMessageErrors.js.map