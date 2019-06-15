import { takeEvery, call, put, push } from "redux-saga/effects"
import * as api from './../api/api.js'
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
  const response = yield call(api.signIn, action.payload)
  yield put({ type: AUTH_RECEIVED, response: response })
}

function* processSignOut(action) {
  const response = yield call(api.signOut, action.payload)
  yield put({ type: LOGOUT_RECEIVED, response: response })
}

function* restoreSession(action) {
  const response = yield call(api.restore)
  yield put({ type: SESSION_RESTORE_RECEIVED, response: response })
}

function* createUser(action) {
  const response = yield call(api.createUserRequest, action.payload)
  yield put({ type: CREATE_USER_RECEIVED, response: response })
}

function* fetchUsers() {
  const response = yield call(api.getUsers)
  yield put({ type: USERS_RECEIVED, response: response })
}
