import { SIGN_IN, SIGN_OUT } from "./types";
import axios from "axios";
export const register = (dataForRegister) => async (dispatch) => {
  const response = await axios.post(
    "http://localhost:40040/api/auth/register",
    dataForRegister
  );
  console.log(response);
  dispatch({ type: "REGISTER", payload: response.data });
};

export const login = (dataForLogin) => async (dispatch) => {
  const response = await axios.post(
    "http://localhost:40040/api/auth/login",
    dataForLogin
  );
  console.log(response.data);
  dispatch({ type: SIGN_IN, payload: response.data });
};
