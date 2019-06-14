import { AUTH_REQUESTED, LOGOUT_REQUESTED, SESSION_RESTORE_REQUESTED } from "../constants/action-types";

export function getData() {
  return { type: "DATA_REQUESTED" };
}

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
