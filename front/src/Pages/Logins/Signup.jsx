import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  Grid,
  TextField,
  Typography,
  Button,
  makeStyles,
  Link,
  Container,
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
  const [check, setCheck] = useState();
  const [Entry, useEntry] = useState({
    FirstName: "",
    LastName: "",
    StreetAddress: "",
    City: "",
    State: "",
    Zipcode: "",
    email: "",
    cellphone: "",
    password: "",
    password2: "",
  });

  const [match, setMatch] = useState();
  const [result, setResult] = useState();

  const checkpassword = async () => {
    if (Entry.password === "" && Entry.password2 === "") {
      setMatch(null);
      setResult(<Typography></Typography>);
    } else if (Entry.password === Entry.password2) {
      setMatch(true);
      setResult(
        <Typography variant="caption" style={{ color: "green" }}>
          Password match
        </Typography>
      );
    } else if (Entry.password !== Entry.password2) {
      setMatch(false);
      setResult(
        <Typography variant="caption" style={{ color: "red" }}>
          Password does not match
        </Typography>
      );
    }
  };

  useEffect(() => {
    if (Entry.password === "" && Entry.password2 === "") {
      setMatch(null);
      setResult(<Typography></Typography>);
    } else if (Entry.password === Entry.password2) {
      setMatch(true);
      setResult(
        <Typography variant="caption" style={{ color: "green" }}>
          Password match
        </Typography>
      );
    } else if (Entry.password !== Entry.password2) {
      setMatch(false);
      setResult(
        <Typography variant="caption" style={{ color: "red" }}>
          Password does not match
        </Typography>
      );
    }
  }, [Entry]);
  useEffect(() => {}, [check]);
  function moveTo() {
    history.push("/Login");
  }

  async function OnChange(e) {
    await useEntry({
      ...Entry,
      [e.target.name]: e.target.value,
    });
    checkpassword();
  }

  const FormSubmit = async (e) => {
    e.preventDefault();
    setCheck();
    axios
      .post("/SignUp", {
        firstname: Entry.FirstName,
        lastname: Entry.LastName,
        streetaddress: Entry.StreetAddress,
        City: Entry.City,
        state: Entry.State,
        zipcode: Entry.Zipcode,
        email: Entry.email,
        cellphone: Entry.cellphone,
        password: Entry.password,
      })
      .then((res) => {
        let id = res.data.id;
        setCheck(res.status);
        history.push(`/${id}`);
      })
      .catch((err) => {
        console.log(`this is from front error ${err}`);
        setCheck(400);
      });
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        minHeight: "90vh",
        height: "90%",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Grid container direction="row" style={{ marginTop: "1rem" }}>
        <Grid item xs={12} sm={12}>
          <Typography
            variant="h3"
            style={{ textAlign: "center", marginTop: "1rem" }}>
            Sign Up
          </Typography>
        </Grid>
      </Grid>
      <form onSubmit={FormSubmit}>
        <Grid
          container
          direction="row"
          alignItems="center"
          judtify="center"
          spacing={3}
          style={{ marginTop: "1rem" }}>
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
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}>
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
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}>
          <Grid item xs={12} sm={4}>
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
          <Grid item xs={12} sm={4}>
            <div>
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
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
          <Grid item xs={12} sm={4}>
            <div>
              <TextField
                style={{ width: "100%" }}
                id="outlined-textarea"
                label="Zip Code"
                placeholder="example 77000"
                type="text"
                variant="outlined"
                onChange={OnChange}
                name="Zipcode"
                value={Entry.Zipcode}
              />
            </div>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" spacing={3}>
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
          <Grid item xs={12} sm={6}>
            <div>
              <TextField
                style={{ width: "100%" }}
                id="outlined-textarea"
                label="Email Address"
                placeholder="email@something.com"
                type="email"
                onChange={OnChange}
                name="email"
                variant="outlined"
              />
            </div>
          </Grid>
        </Grid>

        <Grid container direction="row" justify="center" spacing={3}>
          <Grid item xs={12} sm={12}>
            <div>
              <TextField
                style={{ width: "100%" }}
                id="outlined-textarea"
                label="Password"
                placeholder="Please enter Password"
                type="password"
                onChange={OnChange}
                onKeyDown={checkpassword}
                name="password"
                variant="outlined"
              />
            </div>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" spacing={3}>
          <Grid item xs={12} sm={12}>
            <div>
              <TextField
                style={{ width: "100%" }}
                id="outlined-textarea"
                label="Confirm Password"
                placeholder="Re-Enter Password"
                type="password"
                onChange={OnChange}
                onKeyDown={checkpassword}
                name="password2"
                variant="outlined"
              />
              {Entry.password !== "" ? result : ""}
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          spacing={3}
          justify="center"
          align="center">
          <Grid item sm={12} xs={12}>
            <Button
              variant="contained"
              className={classes.button}
              value="11111"
              disabled={match === false || match === null ? true : false}
              type="submit">
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
      <Grid
        container
        direction="row"
        justify="center"
        align="center"
        spacing={3}>
        <Grid item xs={12} sm={12}>
          <Typography varient="caption">
            Have an Account with us Already. Then Click{" "}
            <Link onClick={moveTo} style={{ cursor: "pointer" }}>
              here
            </Link>
          </Typography>
        </Grid>
        {check === 400 ? (
          <Typography variant="h5" style={{ color: "red" }}>
            User email address is already registered. Please try Signing In
          </Typography>
        ) : (
          ""
        )}
      </Grid>
    </Container>
  );
}
