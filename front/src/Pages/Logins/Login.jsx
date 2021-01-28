import React, { useState, useEffect, useContext } from "react";
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
import { UserContext } from "../../Context/UserContext";

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
  const { setUsers, users } = useContext(UserContext);
  //States to manage
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [wpassword, setPassword] = useState("");
  const [wrongemail, setEmail] = useState("");

  //Check changes that are to happen
  useEffect(() => {}, [wpassword]);
  useEffect(() => {}, [wrongemail]);

  //To move to signup page if the user is not aready registered
  function handleClick() {
    history.push("/SignUp");
  }

  //Handling changes that are happening in the text section
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
    // First getting the data when the user is logged in
    axios
      .post("/Login", user)
      .then(async (data) => {
        console.log(data.data);
        //Checking if there is an error message
        let message = await data.data.message;
        //If we have no message then we get the user id
        if (!message) {
          let id = await data.data.id;
          console.log(id);
          //Since we got the user id, then we save it to the
          const userInfo = await {
            id,
            isLoggedIn: true,
          };
          //change the status of the user in the page
          await setUsers({ type: "SET_USER_ID", userInfo });
          await history.push(`/${id}`);
        } else {
          if (message === "Email is not registered") {
            setEmail(message);
          } else if (message === "Password is not correct") {
            setPassword(message);
          }
        }
      })
      .catch((err) => err.message);
  }

  return (
    <Grid
      container
      spacing={5}
      direction="column"
      justify="center"
      alignItems="center"
      style={{
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Grid item sm={12} xs={12}>
        <Typography
          variant="h3"
          style={{ textAlign: "Center", fontFamily: "Roboto" }}>
          Sign In
        </Typography>
      </Grid>
      <br />
      <Grid item sm={12} xs={12}>
        <form onSubmit={handleSubmit}>
          <Container style={{ padding: "1rem", width: "50%" }}>
            <div>
              <TextField
                id="outlined-basic"
                label="Email"
                placeholder="Placeholder"
                type="email"
                variant="outlined"
                fullWidth
                name="email"
                onChange={onChange}
              />
              {wrongemail === "Email is not registered" ? (
                <Typography
                  variant="subtitle1"
                  style={{ color: "red", textAlign: "center" }}>
                  Email address is not registered
                </Typography>
              ) : (
                ""
              )}
            </div>
            <br />
            <div>
              <TextField
                id="outlined-basic"
                label="Password"
                placeholder="Password"
                type="password"
                variant="outlined"
                fullWidth
                name="password"
                onChange={onChange}
              />
              {wpassword === "Password is not correct" ? (
                <Typography
                  variant="subtitle1"
                  style={{ color: "red", textAlign: "center" }}>
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
                type="submit">
                Login
              </Button>
            </Grid>
          </Container>
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
