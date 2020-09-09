import React from "react";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ isSignedIn, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => {
        return isSignedIn ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};

export default PrivateRoute;
