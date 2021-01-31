import React from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  information: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    lineHeight: "2rem",
    padding: "1rem",
  },
});

export default function Profile({ info, id }) {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{
        marginTop: "5rem",
        maxHeight: "100vh",
        height: "100%",
        maxWidth: "100vw",
        width: "100%",
        justifyContent: "center",
      }}>
      <Grid items sm={12} xs={12} style={{ width: "100%" }}>
        {/* <h2>This is profile</h2> */}
        <Paper
          elevation={3}
          style={{ display: "flex", flex: "1", width: "100%" }}>
          <Container style={{ padding: "1rem" }}>
            <div className={classes.information}>
              <Typography className={classes.text} variant="h5">
                First Name :
              </Typography>

              <Typography className={classes.text} variant="subtitle1">
                {id.firstname}
              </Typography>
            </div>
            <div className={classes.information}>
              <Typography className={classes.text} variant="h5">
                Last Name :
              </Typography>
              <Typography className={classes.text} variant="subtitle1">
                {id.lastname}
              </Typography>
            </div>
            <div className={classes.information}>
              <Typography className={classes.text} variant="h5">
                Email :
              </Typography>
              <Typography className={classes.text} variant="subtitle1">
                {id.lastname}
              </Typography>
            </div>
            <div className={classes.information}>
              <Typography className={classes.text} variant="h5">
                Street Address :
              </Typography>
              <Typography className={classes.text} variant="subtitle1">
                {id.streetaddress}
              </Typography>
            </div>
            <div className={classes.information}>
              <Typography className={classes.text} variant="h5">
                State :
              </Typography>
              <Typography className={classes.text} variant="subtitle1">
                {id.state}
              </Typography>
            </div>
            <div className={classes.information}>
              <Typography className={classes.text} variant="h5">
                Zipcode :
              </Typography>
              <Typography className={classes.text} variant="subtitle1">
                {id.zipcode}
              </Typography>
            </div>
            <div className={classes.information}>
              <Typography className={classes.text} variant="h5">
                Contact Number :
              </Typography>
              <Typography className={classes.text} variant="subtitle1">
                {id.cellphone}
              </Typography>
            </div>
          </Container>
        </Paper>
      </Grid>
    </Grid>
  );
}
