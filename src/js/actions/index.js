import { AUTH_REQUESTED, LOGOUT_REQUESTED, SESSION_RESTORE_REQUESTED, CREATE_USER_REQUESTED } from "../constants/action-types";

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
