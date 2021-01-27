import React from "react";
import { makeStyles, Grid, Paper, Typography } from "@material-ui/core";

import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

const useStyles = makeStyles({
  mainContainer: {
    minHeight: "100vh",
  },
  subContainer: {
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    alignItems: "center",
    padding: "1rem",
  },
  paper: {
    height: "40vh",
    width: "40vw",
    boxShadow: "0px 8px 30px -1px rgba(0,0,0,0.12)",
  },
  icon: {
    fontSize: "10rem",
    margin: "auto",
    color: "red",
  },
});

export default function Failure() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={3}
      className={classes.mainContainer}>
      <Grid item sm={12} xs={12}>
        <Paper elevation={3} className={classes.paper}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{ height: "100%", padding: "1rem" }}>
            <SentimentVeryDissatisfiedIcon className={classes.icon} />

            <Typography variant="h5" style={{ textAlign: "center" }}>
              Your payment failed
            </Typography>

            <ThumbDownIcon className={classes.icon} />
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
