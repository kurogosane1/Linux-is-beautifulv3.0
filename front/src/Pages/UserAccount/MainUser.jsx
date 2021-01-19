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
import OrderDetails from "./OrderDetails";
import { UserContext } from "../../Context/UserContext";
import Loading from "../../Loading";

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(users.isLoggedIn);
  }, [users.isLoggedIn]);

  useEffect(() => {
    //geting the users data when the page loads
    const id = users.id !== null ? users.id : path;
    //Fetching the data to retrieve
    axios
      .get(`/${id}`, { withCredentials: true })
      .then((response) => {
        const status = response.status;
        console.log(response.status);
        if (status == 200) {
          setUserInfo(response.data);
          setIsLoading(false);
        } else {
          history.push("/");
        }
      })
      .catch((err) => history.push("/Login"));
  }, []);

  useEffect(() => {
    const id = users.id === null ? path : users.id;
    axios
      .get(`${id}`, { withCredentials: true })
      .then((response) => {
        setUserInfo(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(true);
        history.push("/Login");
        console.log(err.message);
      });
  }, [users.id]);

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
          <Button component={NavLink} to={`${path}`}>
            Profile
          </Button>
          <Button component={NavLink} to={`${path}/orders`}>
            Orders
          </Button>
          <Button component={NavLink} to={`${path}/others`}>
            Others
          </Button>
          <Button variant="contained" color="secondary" onClick={TakeAction}>
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Switch>
          <Route exact path={`${url}`}>
            {isLoading ? (
              <Loading />
            ) : (
              <Profile info={users} id={userInfo.info} />
            )}
          </Route>
          <Route exact path={`${url}/others`}>
            {isLoading ? <Loading /> : <Others info={users} />}
          </Route>
          <Route exact path={`${url}/orders`}>
            {isLoading ? (
              <Loading />
            ) : (
              <Orders info={users} id={userInfo.Orders} />
            )}
          </Route>
          <Route path={`${url}/orders/:id`}>
            <OrderDetails />
          </Route>
        </Switch>
      </Container>
    </Container>
  );
}
