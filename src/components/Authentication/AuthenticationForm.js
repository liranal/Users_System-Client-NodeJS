import React, { useState } from "react";
import { Login, Register } from "./Forms";
import "./AuthForm.scss";
const AuthenticationForm = ({ loginFunc, registerFunc }) => {
  const [isLogginActive, setisLogginActive] = useState(true);
  const [container, setcontainer] = useState();
  const [current, setcurrent] = useState();
  const [rightSide, setrightSide] = useState();

  const getCurrent = () => {
    return isLogginActive ? "Register" : "Login";
  };

  const changeState = () => {
    if (isLogginActive) {
      rightSide.classList.remove("right");
      rightSide.classList.add("left");
    } else {
      rightSide.classList.remove("left");
      rightSide.classList.add("right");
    }
    setisLogginActive(!isLogginActive);
  };

  return (
    <div className="App">
      <div className="login">
        <div className="container" ref={(ref) => setcontainer(ref)}>
          {isLogginActive && (
            <Login
              containerRef={(ref) => setcurrent(ref)}
              loginFunc={loginFunc}
            />
          )}
          {!isLogginActive && (
            <Register
              containerRef={(ref) => setcurrent(ref)}
              registerFunc={registerFunc}
            />
          )}
        </div>
        <RightSide
          current={getCurrent()}
          containerRef={(ref) => setrightSide(ref)}
          onClick={changeState.bind(current)}
        />
      </div>
    </div>
  );
};

const RightSide = (props) => {
  return (
    <div
      className="right-side right"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default AuthenticationForm;