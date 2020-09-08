import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register, login } from "../actions";
import { Login, Register } from "./login";
import "./App.scss";
const App = () => {
  const dispatch = useDispatch();
  //const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const [isLogginActive, setisLogginActive] = useState(true);
  const [container, setcontainer] = useState();
  const [current, setcurrent] = useState();
  const [rightSide, setrightSide] = useState();

  const registerClick = () => {
    dispatch(register({}));
  };

  const loginClick = () => {
    dispatch(login({}));
  };

  const getCurrent = () => {
    return isLogginActive ? "Register" : "Login";
  };

  const getCurrentActive = () => {
    return isLogginActive ? "login" : "register";
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
          {isLogginActive && <Login containerRef={(ref) => setcurrent(ref)} />}
          {!isLogginActive && (
            <Register containerRef={(ref) => setcurrent(ref)} />
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
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default App;
