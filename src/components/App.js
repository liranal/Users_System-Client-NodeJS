import React from "react";
import { useSelector } from "react-redux";

import "./App.scss";
import PrivateRoute from "../route/PrivateRoute";
import PublicRoute from "../route/PublicRoute";
import { Router, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import { history } from "../route/history";
const App = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);

  return (
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute
          path="/Home"
          component={HomePage}
          exact={true}
          isSignedIn={isSignedIn}
        />
      </Switch>
    </div>
  );
};

export default App;
