import React from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  TextField,
  Typography,
  Button,
  makeStyles,
  Link,
} from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    backgroundColor: "#2b2b2b",
    color: "white",
    width: "100%",
    fontSize: "1.4rem",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Login() {
  const classes = useStyles();
  const history = useHistory();

  function handleClick() {
    history.push("/SignUp");
  }
  return (
    <Grid
      container
      spacing={5}
      direction="column"
      justify="center"
      alignItems="center"
      style={{ maxHeight: "100%", marginTop: "1rem" }}
    >
      <Grid item sm={12} xs={12}>
        <Typography
          variant="h3"
          style={{ textAlign: "Center", fontFamily: "Roboto" }}
        >
          Sign In
        </Typography>
      </Grid>
      <br />
      <Grid item sm={12} xs={12}>
        <form>
          <div>
            <TextField
              id="outlined-textarea"
              label="Email"
              placeholder="Placeholder"
              multiline
              type="email"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </div>
          <br />
          <div>
            <TextField
              id="outlined-textarea"
              label="Password"
              type="password"
              placeholder="Placeholder"
              multiline
              variant="outlined"
              style={{ width: "100%" }}
            />
          </div>
          <br />
          <Grid item sm={12} xs={12}>
            <Button
              variant="contained"
              className={classes.button}
              value="11111"
            >
              Login Now
            </Button>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography varient="caption">
          Don't have an account with us? Then click{" "}
          <Link onClick={handleClick} style={{ cursor: "pointer" }}>
            here
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}
