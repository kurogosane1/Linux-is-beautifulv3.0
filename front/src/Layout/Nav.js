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

export default function Nav() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar color="inherit">
          <Typography component={NavLink} to="/">
            LB
          </Typography>
          <Button component={NavLink} to="/" color="inherit">
            DeepinPro
          </Button>
          <Button component={NavLink} to="/" color="inherit">
            DeepinPro
          </Button>
          <Button component={NavLink} to="/" color="inherit">
            DeepinPro
          </Button>
          <Button component={NavLink} to="/" color="inherit">
            DeepinPro
          </Button>
          <IconButton component={NavLink} to="/" color="inherit">
            <PersonIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
