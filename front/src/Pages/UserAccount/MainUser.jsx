import React, { useContext, useEffect, useState } from "react";
import {
  NavLink,
  Switch,
  Route,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  makeStyles,
  Button,
} from "@material-ui/core";
import axios from "axios";
import Orders from "./Purchases";
import Profile from "./Profile";
import Others from "./Others";
import { UserContext } from "../../Context/UserContext";

const useStyles = makeStyles({
  subNav: {
    borderBottom: "2px black solid",
    borderColor: "black",
    backgroundColor: "transparent",
    boxShadow: "none",
    justifyContent: "spaceBetween",
    alignItems: "center",
    // alignContent: "Space-between",
  },
  subNavhead: {
    color: "#2b2b2b",
    fontWeight: "bold",
    fontSize: "2rem",
    flexGrow: "1",
  },
});

export default function MainUser() {
  const { path, url } = useRouteMatch();
  const history = useHistory();
  const classes = useStyles();
  const { users, setUsers } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    console.log(users.isLoggedIn);
  }, [users.isLoggedIn]);

  useEffect(() => {
    //geting the users data when the page loads
    const id = users.id;
    //Fetching the data to retrieve
    axios.get(`/${id}`).then((response) => {
      setUserInfo(response.data);
    });
  }, []);

  //This is to clear the user loggin
  const TakeAction = async () => {
    const id = users.id;

    axios
      .post(`/Logout`, { id })
      .then(async (data) => {
        console.log(data);
        console.log("This is from TakeAction");
        await setUsers({ type: "LOGUSER_OUT" });
        await history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <AppBar position="sticky" className={classes.subNav}>
        <Toolbar>
          <Typography variant="h3">User</Typography>
          <Button component={NavLink} to={`${path}`}>
            Profile
          </Button>
          <Button component={NavLink} to={`${path}/orders`}>
            Orders
          </Button>
          <Button component={NavLink} to={`${path}/others`}>
            Others
          </Button>
          <Button onClick={TakeAction}>Log Out</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Switch>
          <Route path={`${url}`}>
            <Profile info={users} id={userInfo} />
          </Route>
          <Route path={`${url}/others`}>
            <Others info={users} />
          </Route>
          <Route path={`${url}/orders`}>
            <Orders info={users} />
          </Route>
        </Switch>
      </Container>
    </Container>
  );
}
