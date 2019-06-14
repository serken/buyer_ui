import { takeEvery, call, put, push } from "redux-saga/effects"
import { AUTH_REQUESTED, AUTH_RECEIVED, LOGOUT_REQUESTED, LOGOUT_RECEIVED } from "../constants/action-types"

export default function* watcherSaga() {
  yield takeEvery(AUTH_REQUESTED, processSignIn)
  yield takeEvery(LOGOUT_REQUESTED, processSignOut)
}

function* processSignIn(action) {
  const response = yield call(signIn, action.payload)
  yield put({ type: AUTH_RECEIVED, response: response })
}

function* processSignOut(action) {
  const response = yield call(signOut, action.payload)
  yield put({ type: LOGOUT_RECEIVED, response: response })
}

function signIn(payload) {
  return fetch("http://localhost:3000/auth",
    {
      method: 'POST',
      body: JSON.stringify(payload),
      credentials: 'include', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
    }).then(response =>
    response.json()
  ).catch((error) => {});
}

function signOut () {
  return fetch('http://localhost:3000/auth', {
    method: 'DELETE',
    credentials: 'include'
  }).then(res => res.json()).catch((error) => {})
}
