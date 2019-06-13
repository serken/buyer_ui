import { takeEvery, call, put } from "redux-saga/effects"
import { SIGN_IN_REQUESTED, AUTH_RECEIVED } from "../constants/action-types"

export default function* watcherSaga() {
  yield takeEvery(SIGN_IN_REQUESTED, processSignIn)
}

function* processSignIn(action) {
  const response = yield call(postData, action.payload)
  yield put({ type: AUTH_RECEIVED, response: response })
}

function postData(payload) {
  return fetch("http://localhost:3000/sessions/sign_in", { method: 'POST', params: payload, credentials: 'include' }).then(response =>
    response.json()
  );
}
