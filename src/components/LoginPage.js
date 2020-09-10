import React, { useEffect } from "react";
import AuthenticationForm from "./Authentication/AuthenticationForm";
import { useDispatch, useSelector } from "react-redux";
import { register, login } from "../actions";
import "./App.scss";
import { useHistory, useLocation } from "react-router";

const LoginPage = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const registerClick = (username, email, password) => {
    dispatch(register({ username, email, password }));
  };

  const loginClick = (username, password) => {
    dispatch(login({ username, password, history }));
  };

  return (
    <div className="page">
      <div className="AuthForm">
        <AuthenticationForm
          loginFunc={loginClick}
          registerFunc={registerClick}
        />
      </div>
    </div>
  );
};
export default LoginPage;
