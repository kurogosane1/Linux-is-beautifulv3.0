import React, { useState } from "react";
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

export default function Signup() {
  const history = useHistory();
  const classes = useStyles();
  const [Entry, useEntry] = useState({
    FirstName: "",
    Lastname: "",
    StreetAddress: "",
    City: "",
    State: "",
    Zipcode: "",
    cellphone: "",
    password: "",
    password2: "",
  });

  const [match, setMatch] = useState(false);

  function moveTo() {
    history.push("/Login");
  }

  function OnChange(e) {
    useEntry({
      ...Entry,
      [e.target.name]: e.target.value,
    });
    if (Entry.password === Entry.password2 && Entry.password2 != "") {
      setMatch(true);
    } else {
      setMatch(false);
    }
  }

  return (
    <Grid
      container
      direction="column"
      xs={12}
      sm={12}
      alignItems="center"
      justify="center"
      spacing={3}
      style={{
        maxHeight: "100%",
        marginTop: "1rem",
        textAlign: "center",
      }}
    >
      <Grid item xs={12} sm={12}>
        <Typography variant="h3">Sign Up</Typography>
      </Grid>
      <form>
        <Grid
          container
          direction="row"
          spacing={3}
          alignItems="center"
          justify="center"
          style={{
            maxHeight: "100%",
            marginTop: "1rem",
          }}
        >
          <Grid item xs={12} sm={6}>
            <div>
              <TextField
                style={{ width: "100%" }}
                id="outlined-textarea"
                label="First Name"
                placeholder="Your First Name"
                multiline
                type="text"
                variant="outlined"
                onChange={OnChange}
                name="FirstName"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div>
              <TextField
                style={{ width: "100%" }}
                id="outlined-textarea"
                label="Last Name"
                placeholder="Your Last Name"
                multiline
                type="text"
                variant="outlined"
                onChange={OnChange}
                name="LastName"
              />
            </div>
          </Grid>
        </Grid>
        <br />
        <Grid
          container
          direction="row"
          spacing={3}
          alignItems="center"
          justify="center"
        >
          <br />
          <Grid item xs={12} sm={12}>
            <div>
              <TextField
                style={{ width: "100%" }}
                id="outlined-textarea"
                label="Street Address"
                placeholder="XXXX Some Street"
                multiline
                type="text"
                variant="outlined"
                onChange={OnChange}
                name="StreetAddress"
              />
            </div>
          </Grid>
          <br />
          <Grid item xs={12} sm={6}>
            <div>
              <TextField
                style={{ width: "100%" }}
                id="outlined-textarea"
                label="City"
                placeholder="example Houston"
                multiline
                type="text"
                variant="outlined"
                onChange={OnChange}
                name="City"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div>
              <TextField
                style={{ width: "100%" }}
                id="outlined-textarea"
                label="State"
                placeholder="example TX"
                multiline
                type="text"
                variant="outlined"
                onChange={OnChange}
                name="State"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div>
              <TextField
                style={{ width: "100%" }}
                id="outlined-textarea"
                label="Zip Code"
                placeholder="example 77000"
                multiline
                type="text"
                variant="outlined"
                onChange={OnChange}
                name="Zipcode"
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={6}>
            <div>
              <TextField
                style={{ width: "100%" }}
                id="outlined-textarea"
                label="Cell Phone Number"
                placeholder="example XXX-XXX-XXXX"
                multiline
                type="text"
                variant="outlined"
                onChange={OnChange}
                name="cellphone"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div>
              <TextField
                style={{ width: "100%" }}
                id="outlined-textarea"
                label="Email Address"
                placeholder="email@something.com"
                type="email"
                onChange={OnChange}
                name="email"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div>
              <TextField
                style={{ width: "100%" }}
                id="outlined-password-input"
                label="Password"
                placeholder="Re-type your Password"
                autoComplete="current-password"
                type="password"
                onChange={OnChange}
                name="password"
                variant="outlined"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div>
              <TextField
                style={{ width: "100%" }}
                id="outlined-password-input"
                label="Confirm Password"
                placeholder="Re-type Password Again"
                type="password"
                autoComplete="current-password"
                onChange={OnChange}
                name="password2"
                variant="outlined"
              />
            </div>
          </Grid>
          <Grid item sm={12} xs={12}>
            <Button
              variant="contained"
              className={classes.button}
              value="11111"
            >
              Login Now
            </Button>
          </Grid>
        </Grid>
      </form>
      <Grid item xs={12} sm={12}>
        <Typography varient="caption">
          Already Registerd? Then click{" "}
          <Link onClick={moveTo} style={{ cursor: "pointer" }}>
            here
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}
