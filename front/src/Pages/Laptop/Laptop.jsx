import React, { useState, useEffect } from "react";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  makeStyles,
  Button,
} from "@material-ui/core";
import Overview from "./Overview";
import Options from "./Options";
import BuyNow from "./BuyNow";

const useStyles = makeStyles({
  mainRoot: {
    minHeight: "100vh",
    marginBottom: "2rem",
  },
  subNav: {
    borderBottom: "2px black solid",
    borderColor: "black",
    backgroundColor: "rgb(238, 238, 238,0.5) ",
    backdropFilter: `blur(30px)`,

    // filter: "blur(1px)",

    boxShadow: "none",
  },
  subNavhead: {
    color: "#2b2b2b",
    fontWeight: "bold",
    fontSize: "2rem",
    flexGrow: "1",
  },
});

export default function Laptop() {
  const { path, url } = useRouteMatch();

  const classes = useStyles();
  const [selection, useSelection] = useState("11111");

  useEffect(() => {}, [selection]);

  return (
    <Container>
      <AppBar position="sticky" className={classes.subNav}>
        <Toolbar>
          <Typography className={classes.subNavhead}>DeepinPro</Typography>
          <Button component={NavLink} to={`${path}`}>
            Overview
          </Button>
          <Button
            variant="contained"
            color="secondary"
            component={NavLink}
            to={`${path}/BuyNow`}>
            Buy Now
          </Button>
        </Toolbar>
      </AppBar>
      <Container className={classes.mainRoot}>
        <Switch>
          <Route exact path={`${url}`}>
            <Overview />
          </Route>
          <Route exact path={`${url}/BuyNow`}>
            <BuyNow func={useSelection} />
          </Route>
          <Route exact path={`${url}/BuyNow/${selection}`}>
            <Options something={selection} />
          </Route>
        </Switch>
      </Container>
    </Container>
  );
}
