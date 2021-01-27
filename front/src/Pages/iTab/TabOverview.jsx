import React from "react";
import {
  Grid,
  Container,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

//Import SVG from assets library
import Tab1 from "../../Assets/iTablet1.svg";
import Tab2 from "../../Assets/iTablet2.svg";
import Tab3 from "../../Assets/iTablet3.svg";
import Tab4 from "../../Assets/iTablet4.svg";

//Coloring for React Material UI
const useStyles = makeStyles({
  root: {
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
  },
  mainContainer: {
    // maxHeight: "76vh",
    height: "100%",
  },
  heading: {
    textAlign: "center",
    padding: "1rem",
    fontFamily: "Roboto",
    fontWeight: "500",
    margin: "1rem",
  },
  subHeading: {
    color: "rgb(170, 170, 170)",
    fontWeight: "bold",
    fontFamily: "Roboto",
    textAlign: "center",
  },
  subContainer: {
    padding: "1rem",
  },
  subText: {
    alignItems: "center",
    textAlign: "center",
    padding: "1rem",
  },
});

export default function TabOverview() {
  //Classes for styling
  const classes = useStyles();
  //history to direct
  const history = useHistory();

  return (
    <div className={classes.mainContainer}>
      <Grid
        container
        direction="column"
        spacing={3}
        justify="center"
        alignItems="center">
        <Grid
          container
          direction="row"
          spacing={3}
          justify="center"
          alignItems="center"
          className={classes.root}>
          <Grid item xs={12} sm={12}>
            <Container>
              <Typography variant="h1" className={classes.heading}>
                iTab
              </Typography>
            </Container>
          </Grid>
        </Grid>
        <Grid container spacing={3} justify="space-evenly" alignItems="center">
          <Grid item xs={12} sm={4}>
            <Typography variant="h2" className={classes.subHeading}>
              Your
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h2" className={classes.subHeading}>
              Next
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h2" className={classes.subHeading}>
              Computer
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3} justify="center" alignItems="center">
          <Grid item xs={12} sm={12}>
            <Container className={classes.subContainer}>
              <img src={Tab3} alt="tablet view 3" />
            </Container>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        direction="column"
        container
        spacing={3}
        justify="center"
        alignItems="center">
        <Grid item xs={12} sm={12}>
          <Container>
            <Typography variant="h3" className={classes.subText}>
              New ARM X13 processor that provides <strong>3 times </strong> the
              performance than leading tablets. We call it{" "}
              <strong>Zues1</strong>
            </Typography>
          </Container>
        </Grid>
      </Grid>
      <br></br>
      <Grid
        direction="column"
        container
        spacing={3}
        justify="center"
        alignItems="center">
        <Grid item xs={12} sm={12}>
          <Container>
            <Typography variant="h3" className={classes.subText}>
              Beautiful AMOLED edge-to-edge Dsiplay is not only gorgues and
              immersive, but also features incredibly advance technologies like
              the stunning smooth scroll look and everything feels responsive.
              Quite simply, this combination of features makes it the worlds
              morst advanced mobile display
            </Typography>
          </Container>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={12}>
          <img src={Tab1} alt="tablet view 1" />
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        spacing={3}
        justify="center"
        alignItems="center">
        <Grid item xs={12} sm={12}>
          <Container className={classes.subContainer}>
            <Typography variant="h3" className={classes.subText}>
              Zues1 is so fast it outpaces most advance tablets and even some
              PCs. It makes everything you do fast and fluid, from your everyday
              tasks to graphics-intensive workflows. And the 8-core graphics
              processor means even more performance and realism for the apps and
              games where it matters most
            </Typography>
          </Container>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        spacing={3}
        justify="center"
        alignItems="center">
        <Grid item xs={12} sm={12}>
          <Container className={classes.subContainer}>
            <Typography variant="h3" className={classes.subText}>
              iTablet is incredibly thin and so light you can carry it with you
              everywhere. And it has up to <strong>10 hours</strong> of battery
              life to keep you going all day. Stay connected on the go with fast
              Wi-Fi and up to Gigabit-class LTE. You can even print, project,
              and send files wirelessly
            </Typography>
          </Container>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={12} sm={12}>
          <img src={Tab2} alt="tablet view 2" />
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={12} sm={12}>
          <Container className={classes.subContainer}>
            <Typography variant="h3" className={classes.subText}>
              We believe technology is most powerful when it empowers everyone.
              That's why iTablet comes with accessibility features that support
              vision, hearing, mobility, and learning needs. Including Voice
              Control, which lets you command your iTablet with just your voice,
              and Switch Control , which lets you interact with iTablet without
              touching it
            </Typography>
          </Container>
          <Container className={classes.subContainer}>
            <img src={Tab4} alt="tablet view 4" />
          </Container>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={12} sm={12}>
          <Container className={classes.subContainer}>
            <Typography style={{ textAlign: "center" }} variant="h5">
              So how far can you go with it
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="h5">
              So click below to buy now
            </Typography>
          </Container>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        spacing={3}
        justify="center"
        alignItems="center">
        <Grid item xs={12} sm={12}>
          <Container className={classes.subContainer}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                history.push("/iTab/BuyNow");
              }}>
              Buy Now
            </Button>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}
