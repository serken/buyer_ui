import { AUTH_RECEIVED } from "../constants/action-types";

const initialState = {
  user: null,
  remoteArticles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === AUTH_RECEIVED) {
    if(action.response.error) {
      return Object.assign({}, state, {
        user: null
      });
    }
    return Object.assign({}, state, {
      user: action.response
    });
  }
  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.response)
    });
  }
  return state;
}
export default rootReducer;
