import { SIGN_IN, SIGN_OUT, GET_USER_INFO } from "./types";
import axios from "axios";
import { history } from "../route/history";
export const logout = (dataForLogout) => {
  return { type: SIGN_OUT, payload: { isSignedIn: false, userId: null } };
};
export const register = (dataForRegister) => async (dispatch) => {
  const response = await axios.post(
    "http://localhost:40040/api/auth/register",
    dataForRegister
  );
  console.log(response);
  dispatch({ type: "REGISTER", payload: response.data });
};

export const login = (dataForLogin) => async (dispatch) => {
  const LoginResponse = await axios.post(
    "http://localhost:40040/api/auth/login",
    dataForLogin
  );
  console.log(LoginResponse.data.auth);
  if (LoginResponse.data.auth) {
    dispatch({ type: SIGN_IN, payload: LoginResponse.data });

    const UserInfoResponse = await axios.get(
      `http://localhost:40040/api/users/${LoginResponse.data.userId}`,
      {
        headers: {
          "x-access-token": LoginResponse.data.token,
        },
      }
    );

    dispatch({ type: GET_USER_INFO, payload: UserInfoResponse.data });
    history.push("/Home");
  }
};
