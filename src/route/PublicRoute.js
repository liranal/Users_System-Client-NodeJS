import React, { useEffect, useState } from "react";
import { Route, Redirect, useHistory, useLocation } from "react-router-dom";
const PublicRoute = ({ isSignedIn, component: Component, ...rest }) => {
  const history = useHistory();
  const location = useLocation();
  console.log(history);
  console.log(location);
  console.log("Public");

  return (
    <Route
      {...rest}
      render={(props) =>
        isSignedIn ? <Redirect to="/Home" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
