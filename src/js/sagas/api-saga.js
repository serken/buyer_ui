import { takeEvery, call, put, push } from "redux-saga/effects"
import { AUTH_REQUESTED, AUTH_RECEIVED } from "../constants/action-types"

export default function* watcherSaga() {
  yield takeEvery(AUTH_REQUESTED, processSignIn)
}

function* processSignIn(action) {
  const response = yield call(postData, action.payload)
  yield put({ type: AUTH_RECEIVED, response: response })
}

function postData(payload) {
  return fetch("http://localhost:3000/sign_in",
    {
      method: 'POST',
      body: JSON.stringify(payload),
      credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
        }
    }).then(response =>
    response.json()
  );
}
