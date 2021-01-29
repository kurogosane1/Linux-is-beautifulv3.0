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
  mainRoot: {
    minHeight: "100vh",
    height: "90%",
  },
  subNav: {
    borderBottom: "2px black solid",
    borderColor: "black",
    backgroundColor: "rgb(238, 238, 238,0.1) ",
    backdropFilter: `blur(30px)`,
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

  useEffect(() => {}, [users.isLoggedIn]);

  useEffect(() => {
    //When the page loads to get the data
    setIsLoading(true);
    const id = users.id;
    const check = JSON.parse(localStorage.getItem("isL"));
    const _id = check.id;
    if (!id) {
      console.log(_id);
      if (!_id) {
        history.push("/Login");
      }
      //This is to show that data is actually stored in database
      const userInfo = {
        id: _id,
        isLoggedIn: true,
      };
      setUsers({ type: "USER_ALREADY_LOGGED_IN", userInfo });
 
    } else {
      //checking if the user is already logged
      axios
        .get(`/${id}`, { withCredentials: true })
        .then((response) => {
          setUserInfo(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          setUsers({ type: "LOGUSER_OUT" });
          history.push("/Login");
        });
    }
  }, []);

  //This is to clear the user loggin
  const TakeAction = async () => {
    const id = users.id;
    axios
      .post(`/Logout`, { id })
      .then(async (data) => {
        await setUsers({ type: "LOGUSER_OUT" });
        await history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container className={classes.mainRoot}>
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
              // <Profile />
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
