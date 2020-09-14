import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./containers/LoginPage";
import HomePage from "./containers/HomePage";
import PrivateRoute from "../route/PrivateRoute";
import PublicRoute from "../route/PublicRoute";
import { animated, useTransition } from "react-spring";
import { __RouterContext, withRouter } from "react-router";
import Header from "../Header";
import AnimationPage from "./containers/AnimationPage";
import { logout } from "../actions";

const App = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const { location } = useContext(__RouterContext);
  const dispatch = useDispatch();
  const trans = useTransition(location, location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const logOutEvent = () => {
    dispatch(logout());
  };

  return (
    <div>
      <main className="container-fluid">
        <Header isSignedIn={isSignedIn} logoutEvent={logOutEvent} />
        {trans.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <PublicRoute
                path="/"
                component={LoginPage}
                exact={true}
                isSignedIn={isSignedIn}
              />
              <PrivateRoute
                path="/Home"
                component={HomePage}
                exact={true}
                isSignedIn={isSignedIn}
              />
              <Route
                path="/Animations"
                exact={true}
                component={AnimationPage}
              />
            </Switch>
          </animated.div>
        ))}
      </main>
    </div>
  );
};

export default withRouter(App);
