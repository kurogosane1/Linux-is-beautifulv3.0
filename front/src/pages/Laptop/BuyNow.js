import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  ListItem,
  ListItemText,
  Button,
} from "@material-ui/core";
import VS from "../../Assets/DesktopEnv.svg";
import { useHistory, useRouteMatch } from "react-router-dom";

const useStyles = makeStyles({
  heading: {
    fontFamily: "Roboto",
    textAlign: "center",
  },
  subHeading: {
    color: "rgb(170, 170, 170)",
    fontSize: "2.5rem",
    fontWeight: "bold",
    fontFamily: "Roboto",
    textAlign: "center",
    margin: "Auto",
  },
  button: {
    backgroundColor: "#2b2b2b",
    color: "white",
    width: "100%",
    fontSize: "1.2rem",
  },
});
export default function BuyNow(props) {
  const Selection = props.func;
  const classes = useStyles();
  const { url } = useRouteMatch();
  const history = useHistory();

  const nextAction = (e, number) => {
    //To let the main address change
    Selection(number);
    //To move to the next page
    history.push(`${url}/${number}`, { selection: number });
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item style={{ textAlign: "center" }} xs={12} sm={12}>
          <Typography className={classes.subHeading} variant="h3">
            15.6 DeepinPro
          </Typography>
          <Typography className={classes.subHeading} variant="h6">
            We're here to help. Feel free to contact us
          </Typography>
        </Grid>
      </Grid>
      <br />
      <Grid container direction="column">
        <Grid
          container
          spacing={5}
          direction="row"
          style={{ marginTop: "2rem" }}
          justify="center">
          <Grid item xs={12} sm={6}>
            <img src={VS} alt="" />
            <ListItem>
              <ListItemText primary="2.5GHz 12-Core Processor" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Turbo Boost up to 5Ghz" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Nvidia RTX 3050 with 8GB of GDDR8 memory" />
            </ListItem>
            <ListItem>
              <ListItemText primary="16GB of 2666MHz DDR6 memory" />
            </ListItem>
            <ListItem>
              <ListItemText primary="256GB of Storage" />
            </ListItem>
            <ListItem>
              <ListItemText primary="15.6-inch Art Display with Thin bezels and blue light filter" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Facial Recognition and Finger print sensor" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Four Thunderbolt 4 ports" />
            </ListItem>

            <Button
              variant="contained"
              className={classes.button}
              value="11111"
              onClick={(e) => nextAction(e, "11111")}>
              Buy Now
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={VS} alt="" />
            <ListItem>
              <ListItemText primary="3.2GHz 10-Core Processor" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Turbo Boost up to 5Ghz" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Nvidia RTX 3060 Super with 8GB of GDDR8 memory" />
            </ListItem>
            <ListItem>
              <ListItemText primary="32GB of 2333MHz DDR6 memory" />
            </ListItem>
            <ListItem>
              <ListItemText primary="1TB of Storage" />
            </ListItem>
            <ListItem>
              <ListItemText primary="15.6-inch Art Display with Thin bezels and blue light filter" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Facial Recognition and Finger print sensor" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Four Thunderbolt 4 ports" />
            </ListItem>

            <Button
              variant="contained"
              className={classes.button}
              value="12222"
              onClick={(e) => nextAction(e, "12222")}>
              Buy Now
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
