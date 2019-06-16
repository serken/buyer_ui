import { takeEvery, call, put, push } from "redux-saga/effects"
import * as api from './../api/api.js'

import { tendersRequest } from "./../actions/index"

import { AUTH_REQUESTED,
  AUTH_RECEIVED,
  LOGOUT_REQUESTED,
  LOGOUT_RECEIVED,
  SESSION_RESTORE_REQUESTED,
  SESSION_RESTORE_RECEIVED,
  CREATE_USER_REQUESTED,
  CREATE_USER_RECEIVED,
  USERS_REQUESTED,
  USERS_RECEIVED,
  CATEGORIES_REQUESTED,
  CATEGORIES_RECEIVED,
  TENDERS_RECEIVED,
  TENDERS_REQUESTED,
  CREATE_TENDER_REQUESTED,
  CREATE_TENDER_RECEIVED
} from "../constants/action-types"

export default function* watcherSaga() {
  yield takeEvery(AUTH_REQUESTED, processSignIn)
  yield takeEvery(LOGOUT_REQUESTED, processSignOut)
  yield takeEvery(SESSION_RESTORE_REQUESTED, restoreSession)
  yield takeEvery(CREATE_USER_REQUESTED, createUser)
  yield takeEvery(USERS_REQUESTED, fetchUsers)
  yield takeEvery(CATEGORIES_REQUESTED, fetchCategories)
  yield takeEvery(TENDERS_REQUESTED, fetchTenders)
  yield takeEvery(CREATE_TENDER_REQUESTED, createTender)
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
  const response = yield call(api.createUser, action.payload)
  yield put({ type: CREATE_USER_RECEIVED, response: response })
}

function* fetchUsers() {
  const response = yield call(api.getUsers)
  yield put({ type: USERS_RECEIVED, response: response })
}

function* fetchCategories() {
  const response = yield call(api.getCategories)
  yield put({ type: CATEGORIES_RECEIVED, response: response })
}

function* fetchTenders() {
  const response = yield call(api.getTenders)
  yield put({ type: TENDERS_RECEIVED, response: response })
}

function* createTender(action) {
  const response = yield call(api.createTender, action.payload)
  yield put({ type: CREATE_TENDER_RECEIVED, response: response })
  yield put(tendersRequest())
}

