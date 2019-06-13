import { AUTH_RECEIVED } from "../constants/action-types";
const initialState = {
  user: null,
  remoteArticles: []
};
function rootReducer(state = initialState, action) {
  if (action.type === AUTH_RECEIVED) {
    return Object.assign({}, state, {
      user: action.payload.user
    });
  }
  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }
  return state;
}
export default rootReducer;
