import React from "react";
import { useSelector } from "react-redux";

import "./App.scss";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import PrivateRoute from "../route/PrivateRoute";
import PublicRoute from "../route/PublicRoute";
const App = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);

  return (
    <div>
      <Router>
        <Switch>
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
        </Switch>
      </Router>
    </div>
  );
};

export default App;
