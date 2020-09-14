import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import { IconButton, makeStyles, Button } from "@material-ui/core";
import { Home } from "@material-ui/icons";

const useStyles = makeStyles({
  header: {
    backgroundColor: "transparent",
    color: "black",
    marginBottom: "1em",
  },
});
const Header = ({ isSignedIn, logoutEvent }) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="sticky" className={classes.header}>
        <Toolbar>
          <IconButton>
            <Link to="/Home">
              <Home />
            </Link>
          </IconButton>
          <Link to="/Animations"> Animations</Link>
          <div>
            {isSignedIn ? (
              <Button onClick={() => logoutEvent()}>Log out</Button>
            ) : (
              <Button>
                <Link to="/">Log In</Link>
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
