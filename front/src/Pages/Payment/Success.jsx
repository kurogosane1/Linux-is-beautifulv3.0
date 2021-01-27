import React, { useEffect } from "react";
import {
  makeStyles,
  Grid,
  Paper,
  Container,
  Typography,
} from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

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
    color: "green",
  },
});


export default function Success({ action }) {

  const classes = useStyles();
  useEffect(() => {
    action({ type: "EMPTY_CART" });
  }, []);
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
            <CheckCircleOutlineIcon className={classes.icon} />

            <Typography variant="h5" style={{ textAlign: "center" }}>
              Your payment has been processed successfully
            </Typography>

            <ThumbUpAltIcon className={classes.icon} />
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
