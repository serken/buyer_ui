import { AUTH_RECEIVED, SESSION_RESTORE_RECEIVED, LOGOUT_RECEIVED } from "../constants/action-types";

const initialState = {
  user: null,
  remoteArticles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === AUTH_RECEIVED || action.type === SESSION_RESTORE_RECEIVED) {
    if(action.response.error) {
      return Object.assign({}, state, {
        user: null
      });
    }
    return Object.assign({}, state, {
      user: action.response
    });
  }
  if (action.type === LOGOUT_RECEIVED) {
    return Object.assign({}, state, {
      user: null
    });
  }
  return state;
}
export default rootReducer;
