import { LOGIN, LOGOUT } from "./constants";

export function login(userData) {
  console.log(userData, "actions");
  return {
    type: LOGIN,
    payload: userData,
  };
}
