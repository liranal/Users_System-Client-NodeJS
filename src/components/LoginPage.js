import React from "react";
import AuthenticationForm from "./Authentication/AuthenticationForm";
import { useDispatch } from "react-redux";
import { register, login } from "../actions";
import "./App.scss";

const LoginPage = () => {
  console.log("LOGGGIINN");
  const dispatch = useDispatch();

  const registerClick = (username, email, password) => {
    dispatch(register({ username, email, password }));
  };

  const loginClick = (username, password) => {
    dispatch(login({ username, password }));
  };

  return (
    <div className="AuthForm">
      <AuthenticationForm loginFunc={loginClick} registerFunc={registerClick} />
    </div>
  );
};
export default LoginPage;
