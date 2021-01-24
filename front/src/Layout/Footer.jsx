import React from "react";
import {
  Grid,
  Container,
  Typography,
  makeStyles,
  ListItemIcon,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import LaptopIcon from "@material-ui/icons/Laptop";
import TabletIcon from "@material-ui/icons/Tablet";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import CopyrightIcon from "@material-ui/icons/Copyright";

const useStyles = makeStyles({
  roots: {
    flexGrow: "1",
    height: "10rem",
    background: "rgb(43, 43, 43)",
    marginTop: "calc(10% + 60px)",
    bottom: "0",
  },
  textColor: {
    color: "rgb(211, 211, 211)",
    textAlign: "center",
  },
});

export default function Footer() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <Grid
        container
        spacing={24}
        alignItems="center"
        justify="space-evenly"
        className={classes.roots}>
        <Grid item sm={3} xs={12}>
          <Container>
            <Typography className={classes.textColor}>Made by Syed</Typography>
          </Container>
        </Grid>
        <Grid item sm={3} xs={12}>
          <Container>
            <Typography className={classes.textColor}>
              This is simply a personal project
            </Typography>
          </Container>
        </Grid>
        <Grid item sm={3} xs={12}>
          <ListItem
            button
            onClick={() => {
              history.push("/DeepinPro");
            }}>
            <ListItemIcon>
              <LaptopIcon style={{ color: "rgb(211, 211, 211)" }} />
            </ListItemIcon>
            <ListItemText
              primary="DeepinPro"
              style={{ color: "rgb(211, 211, 211)" }}
            />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              history.push("/iTab");
            }}>
            <ListItemIcon>
              <TabletIcon style={{ color: "rgb(211, 211, 211)" }} />
            </ListItemIcon>
            <ListItemText
              primary="iTab"
              style={{ color: "rgb(211, 211, 211)" }}
            />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              history.push("/Login");
            }}>
            <ListItemIcon>
              <PersonOutlineIcon style={{ color: "rgb(211, 211, 211)" }} />
            </ListItemIcon>
            <ListItemText
              primary="Login"
              style={{ color: "rgb(211, 211, 211)" }}
            />
          </ListItem>
        </Grid>
        <Grid item sm={3} xs={12}>
          <Container>
            <ListItem>
              <ListItemIcon>
                <CopyrightIcon style={{ color: "rgb(211, 211, 211)" }} />
              </ListItemIcon>
              <ListItemText
                primary="Copyright 2021"
                style={{ color: "rgb(211, 211, 211)" }}
              />
            </ListItem>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
