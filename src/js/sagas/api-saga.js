import { takeEvery, call, put, push } from "redux-saga/effects"
import { AUTH_REQUESTED,
  AUTH_RECEIVED,
  LOGOUT_REQUESTED,
  LOGOUT_RECEIVED,
  SESSION_RESTORE_REQUESTED,
  SESSION_RESTORE_RECEIVED,
  CREATE_USER_REQUESTED,
  CREATE_USER_RECEIVED,
  USERS_REQUESTED,
  USERS_RECEIVED
} from "../constants/action-types"

export default function* watcherSaga() {
  yield takeEvery(AUTH_REQUESTED, processSignIn)
  yield takeEvery(LOGOUT_REQUESTED, processSignOut)
  yield takeEvery(SESSION_RESTORE_REQUESTED, restoreSession)
  yield takeEvery(CREATE_USER_REQUESTED, createUser)
  yield takeEvery(USERS_REQUESTED, fetchUsers)
}

function* processSignIn(action) {
  const response = yield call(signIn, action.payload)
  yield put({ type: AUTH_RECEIVED, response: response })
}

function* processSignOut(action) {
  const response = yield call(signOut, action.payload)
  yield put({ type: LOGOUT_RECEIVED, response: response })
}

function* restoreSession(action) {
  const response = yield call(restore)
  yield put({ type: SESSION_RESTORE_RECEIVED, response: response })
}

function* createUser(action) {
  const response = yield call(createUserRequest, action.payload)
  yield put({ type: CREATE_USER_RECEIVED, response: response })
}

function* fetchUsers() {
  const response = yield call(getUsers)
  yield put({ type: USERS_RECEIVED, response: response })
}

function getUsers() {
  return fetch("http://localhost:3000/users",
    {
      method: 'GET',
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

function restore(payload) {
  return fetch("http://localhost:3000/auth",
    {
      method: 'GET',
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

function createUserRequest(payload) {
  return fetch("http://localhost:3000/users",
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
