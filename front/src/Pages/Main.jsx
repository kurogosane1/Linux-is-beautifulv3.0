import React from "react";
import {
  makeStyles,
  Grid,
  Paper,
  Typography,
  Container,
  Button,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

//Importing svg from asset
import VS from "../Assets/DesktopEnv.svg";
import Tab1 from "../Assets/iTablet3.svg";

//Styling
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: "100vh",
    marginTop: "1rem",
    marginRight: "0",
  },
  subContainer: {
    background: "rgba( 255, 255, 255, 0.55 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 7.5px )",
    borderRadius: "10px",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  subSubContainer: {
    padding: "1rem",
  },
  subImage: {
    transform: "translate(-50%,0)",
    zIndex: "-10",
    overflow: "hidden",
    [theme.breakpoints.down("xs")]: {
      transform: "translate(0)",
      zIndex: "0",
      overflow: "none",
    },
  },
  GridItemFirst: {
    width: "100%",
  },
  GridTypoGrophy: {
    // padding: "0.5rem",
    transform: "translate(-50%,0)",
    [theme.breakpoints.down("xs")]: {
      transform: "translate(0)",
    },
  },
  GridActualTypogrophy: {
    textAlign: "center",
    padding: "1rem",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      padding: "1rem",
    },
  },
  GridActualTypogrophy1: {
    textAlign: "center",
    padding: "1rem",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      padding: "0",
      fontSize: "3.2rem",
    },
  },
  GridButton1: {
    fontSize: "1rem",
    width: "100%",
    transform: "translate(-60%)",
    [theme.breakpoints.down("xs")]: {
      transform: "translate(0)",
    },
  },
  GridImage2: {
    transform: "translate(40%,0)",
    zIndex: "-10",
    overflow: "hidden",
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      transform: "translate(0)",
    },
  },
}));

export default function Main() {
  const classes = useStyles();

  const history = useHistory();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={5}
      className={classes.mainContainer}>
      <Grid item sm={12} xs={12} className={classes.GridItemFirst}>
        <Paper elevation={3} className={classes.subContainer}>
          <Grid
            container
            justify="center"
            alignItems="center"
            style={{ padding: "0rem" }}>
            <Grid item sm={12} xs={12} className={classes.subSubContainer}>
              <Grid
                container
                justify="center"
                alignItems="center"
                spacing={1}
                style={{ padding: "1rem" }}>
                <Grid item sm={8} xs={12}>
                  <img src={VS} alt="something" className={classes.subImage} />
                </Grid>
                <Grid item sm={4} xs={12}>
                  <Container className={classes.GridTypoGrophy}>
                    <Typography
                      variant="h1"
                      className={classes.GridActualTypogrophy1}>
                      Deepin Pro
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      className={classes.GridActualTypogrophy}>
                      More Performance
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      className={classes.GridActualTypogrophy}>
                      More Power
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      className={classes.GridActualTypogrophy}>
                      More Pro
                    </Typography>
                  </Container>
                  <Container>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.GridButton1}
                      onClick={() => {
                        history.push("/DeepinPro");
                      }}>
                      Click Here
                    </Button>
                  </Container>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      {/* this is for the second options to sell  */}
      <Grid item sm={12} xs={12} style={{ width: "100%" }}>
        <Paper elevation={3} className={classes.subContainer}>
          <Grid
            container
            justify="center"
            alignItems="center"
            style={{ padding: "1rem" }}>
            <Grid item sm={12} xs={12} className={classes.subSubContainer}>
              <Grid
                container
                justify="center"
                alignItems="center"
                spacing={1}
                style={{ padding: "2rem" }}>
                <Grid item sm={4} xs={12}>
                  <Container
                    style={{
                      padding: "0.5rem",
                      transform: "translate(0%,0)",
                    }}>
                    <Typography
                      variant={matches ? "h2" : "h1"}
                      style={{ textAlign: "center", padding: "1rem" }}>
                      iTab
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{ textAlign: "center", padding: "1rem" }}>
                      More Performance
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{ textAlign: "center", padding: "1rem" }}>
                      More Power
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{ textAlign: "center", padding: "1rem" }}>
                      More Pro
                    </Typography>
                  </Container>
                  <Container>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        fontSize: "1rem",
                        width: "100%",
                        transform: "translate(0%)",
                      }}
                      onClick={() => {
                        history.push("/iTab");
                      }}>
                      Click NowHere
                    </Button>
                  </Container>
                </Grid>
                <Grid item sm={8} xs={12}>
                  <img
                    src={Tab1}
                    alt="something"
                    className={classes.GridImage2}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
