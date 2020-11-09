import React, { useState } from "react";
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

const useStyles = makeStyles({});

export default function Laptop() {
  const { path, url } = useRouteMatch();
  const classes = useStyles();
  const [selection, useSelection] = useState("option1");
  return (
    <Container>
      <AppBar position="sticky">
        <Toolbar>
          <Typography>DeepinPro</Typography>
          <Button component={NavLink} to={`${path}`}>
            Overview
          </Button>
          <Button component={NavLink} to={`${path}/BuyNow`}>
            Buy Now
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Switch>
          <Route exact path={`${url}`}>
            <Overview />
          </Route>
          <Route path={`${url}/BuyNow`}>
            <BuyNow func={useSelection} />
          </Route>
          <Route path={`${url}/${selection}`}>
            <Options choice={selection} />
          </Route>
        </Switch>
      </Container>
    </Container>
  );
}
