import React from "react";
import { Route, Redirect, useHistory, useLocation } from "react-router-dom";
const PrivateRoute = ({ isSignedIn, component: Component, ...rest }) => {
  const history = useHistory();
  const location = useLocation();
  console.log(history);
  console.log(location);
  return (
    <Route
      {...rest}
      render={(props) => {
        return isSignedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" push={true} />
        );
      }}
    />
  );
};

export default PrivateRoute;
