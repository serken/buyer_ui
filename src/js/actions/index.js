import {
  AUTH_REQUESTED,
  LOGOUT_REQUESTED,
  SESSION_RESTORE_REQUESTED,
  CREATE_USER_REQUESTED,
  USERS_REQUESTED,
  CATEGORIES_REQUESTED,
  TENDERS_REQUESTED
} from "../constants/action-types";

export function requestSignIn(payload) {
  return {
    type: AUTH_REQUESTED,
    payload
  }
}

export function requestSignOut() {
  return {
    type: LOGOUT_REQUESTED
  }
}

export function requestSessionRestore() {
  return {
    type: SESSION_RESTORE_REQUESTED
  }
}

export function createUserRequest(payload) {
  return {
    type: CREATE_USER_REQUESTED,
    payload
  }
}

export function usersRequest() {
  return {
    type: USERS_REQUESTED
  }
}

export function fetchCategories() {
  return {
    type: CATEGORIES_REQUESTED
  }
}

export function tendersRequest() {
  return {
    type: TENDERS_REQUESTED
  }
}
