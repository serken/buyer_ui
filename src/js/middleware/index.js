import { AUTH_RECEIVED } from "../constants/action-types"

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      if (action.type === AUTH_RECEIVED) {
      }
      return next(action);
    };
  };
}
