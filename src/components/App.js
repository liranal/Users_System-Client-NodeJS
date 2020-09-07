import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register, login } from "../actions";
const App = () => {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const registerClick = () => {
    dispatch(
      register({
        username,
        email,
        password,
      })
    );
  };

  const loginClick = () => {
    dispatch(login({ username, password }));
  };
  return (
    <div>
      <div>
        <input
          placeholder="username"
          type="text"
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
          }}
        ></input>
        <input
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          placeholder="Password"
          type="text"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            registerClick();
          }}
        >
          Register
        </button>
      </div>
      <br />
      <br />
      <div>
        <input
          placeholder="username"
          type="text"
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
          }}
        ></input>
        <input
          placeholder="Password"
          type="text"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            loginClick();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default App;
