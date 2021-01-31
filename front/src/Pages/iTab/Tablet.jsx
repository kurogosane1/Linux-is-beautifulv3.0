import React from "react";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  makeStyles,
  Button,
  Grid,
} from "@material-ui/core";
import TabOverview from "./TabOverview";
import TabBuyNow from "./TabBuyNow";

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
    boxShadow: "none",
  },
  subNavhead: {
    color: "#2b2b2b",
    fontWeight: "bold",
    fontSize: "2rem",
    flexGrow: "1",
  },
});

export default function Tablet() {
  const { path, url } = useRouteMatch();
  const classes = useStyles();

  return (
    <Container className={classes.mainRoot}>
      <AppBar position="sticky" className={classes.subNav}>
        <Toolbar>
          <Typography className={classes.subNavhead}>iTab</Typography>
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
      <Grid container>
        <Container>
          <Switch>
            <Route exact path={`${url}`}>
              <TabOverview />
            </Route>
            <Route path={`${url}/BuyNow`}>
              <TabBuyNow />
            </Route>
          </Switch>
        </Container>
      </Grid>
    </Container>
  );
}
