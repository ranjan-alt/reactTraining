import { LOGIN, LOGOUT } from "./constants";

export function login(userData) {
  return {
    type: LOGIN,
    payload: userData,
  };
}
