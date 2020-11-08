import React from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Typography,
  Button,
  Toolbar,
  Container,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#2b2b2b",
  },
  font: {
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#d3d3d3",
    flexGrow: 1,
  },
});

export default function Nav() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.header}>
      <Container>
        <Toolbar color="inherit">
          <Typography component={NavLink} to="/" className={classes.font}>
            LB
          </Typography>
          <Button component={NavLink} to="/DeepinPro" color="inherit">
            DeepinPro
          </Button>
          <Button component={NavLink} to="/iTab" color="inherit">
            iTab
          </Button>
          <Button component={NavLink} to="/iDeep" color="inherit">
            iDeep
          </Button>
          <IconButton component={NavLink} to="/Login" color="inherit">
            <PersonIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
