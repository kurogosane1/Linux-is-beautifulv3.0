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
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [wpassword, setPassword] = useState("");
  const [wrongemail, setEmail] = useState("");
  useEffect(() => {}, [wpassword]);
  useEffect(() => {}, [wrongemail]);

  function handleClick() {
    history.push("/SignUp");
  }
  function onChange(e) {
    setEmail("");
    setPassword("");
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
  //Handling submit request
  function handleSubmit(e) {
    e.preventDefault();
    setEmail("");
    setPassword("");

    console.log(user);
    axios
      .post("/Login", user)
      .then((data) => {
        let id = data.data.id;
        let message = data.data.message;
        let status = data.status;
        switch (status) {
          case status === 200:
            history.push(`/${id}`);

          case status === 201:
            setEmail("Email is not registered");

          case status === 202:
            setPassword("Password is not correct");
            break;
          default:
            message = "";
            status = "";
        }
      })
      .catch((err) => console.log(err));
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
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              id="outlined-textarea"
              label="Email"
              placeholder="Placeholder"
              multiline
              type="email"
              variant="outlined"
              style={{ width: "100%" }}
              name="email"
              onChange={onChange}
            />
            {wrongemail === "Email is not registered" ? (
              <Typography
                variant="caption"
                style={{ color: "red", textAlign: "center" }}
              >
                Email address is not registered
              </Typography>
            ) : (
              ""
            )}
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
              name="password"
              onChange={onChange}
            />
            {wpassword === "Password is not correct" ? (
              <Typography
                variant="caption"
                style={{ color: "red", textAlign: "center" }}
              >
                Password is not correct
              </Typography>
            ) : (
              ""
            )}
          </div>
          <br />
          <Grid item sm={12} xs={12}>
            <Button
              variant="contained"
              className={classes.button}
              value="11111"
              type="submit"
            >
              Login
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
