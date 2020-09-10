import React from "react";
import { useSelector } from "react-redux";

import "./App.scss";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import PrivateRoute from "../route/PrivateRoute";
import PublicRoute from "../route/PublicRoute";
const App = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const token = useSelector((state) => state.auth.token);

  return (
    <div>
      <Router>
        <Switch>
          <PublicRoute path="/" component={LoginPage} exact={true} />
          <PrivateRoute
            path="/Home"
            component={HomePage}
            exact={true}
            isSignedIn={isSignedIn}
          />
          {/*
          <Route path="/" exact={true}>
            <LoginPage />
          </Route>
          <Route path="/Home" exact={true}>
            <HomePage />
          </Route>*/}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
