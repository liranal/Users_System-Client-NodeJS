import React from "react";
import AuthenticationForm from "./Authentication/AuthenticationForm";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../actions";
const App = () => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);

  const registerClick = (username, email, password) => {
    dispatch(register({ username, email, password }));
  };

  const loginClick = (username, password) => {
    dispatch(login({ username, password }));
  };

  if (!isSignedIn) {
    return (
      <div>
        <AuthenticationForm
          loginFunc={loginClick}
          registerFunc={registerClick}
        />
      </div>
    );
  } else {
    return <div>Hello {}</div>;
  }
};

export default App;
