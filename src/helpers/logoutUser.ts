import { USERNAME } from "@^/constants/localStorageKeys";
import { removeFromLocalStorage } from "./localStorage";

function logoutUser() {
  removeFromLocalStorage(USERNAME);
  window.location.href = "/";
}

export default logoutUser;
