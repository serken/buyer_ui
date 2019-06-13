import { SIGN_IN_REQUESTED } from "../constants/action-types";

export function getData() {
  return { type: "DATA_REQUESTED" };
}

export function requestSignIn(payload) {
  return {
    type: SIGN_IN_REQUESTED,
    payload
  }
}
