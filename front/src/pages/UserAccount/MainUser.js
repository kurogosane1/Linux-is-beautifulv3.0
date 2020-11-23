import React from "react";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  makeStyles,
  Button,
} from "@material-ui/core";

import Orders from "./Purchases";
import Profile from "./Profile";
import Others from "./Others";

const useStyles = makeStyles({
  subNav: {
    borderBottom: "2px black solid",
    borderColor: "black",
    backgroundColor: "transparent",
    boxShadow: "none",
    justifyContent: "spaceBetween",
    alignItems: "center",
    // alignContent: "Space-between",
  },
  subNavhead: {
    color: "#2b2b2b",
    fontWeight: "bold",
    fontSize: "2rem",
    flexGrow: "1",
  },
});

export default function MainUser() {
  const { path, url } = useRouteMatch();
  const classes = useStyles();
  return (
    <Container>
      <AppBar position="sticky" className={classes.subNav}>
        <Toolbar>
          <Typography variant="h3">User</Typography>
          <Button component={NavLink} to={`${path}`}>
            Profile
          </Button>
          <Button component={NavLink} to={`${path}/orders`}>
            Orders
          </Button>
          <Button component={NavLink} to={`${path}/others`}>
            Others
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Switch>
          <Route exact path={`${url}`}>
            <Profile />
          </Route>
          <Route path={`${url}/others`}>
            <Others />
          </Route>
          <Route path={`${url}/orders`}>
            <Orders />
          </Route>
        </Switch>
      </Container>
    </Container>
  );
}
