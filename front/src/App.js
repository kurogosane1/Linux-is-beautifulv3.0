import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./Layout/Nav";
import { Container } from "@material-ui/core";
import MainUser from "./Pages/UserAccount/MainUser";
import Laptop from "./Pages/Laptop/Laptop";
import Tablet from "./Pages/iTab/Tablet";
import Login from "./Pages/Logins/Login";
import Signup from "./Pages/Logins/Signup";
import { UserContext } from "./Context/UserContext";
import Main from "./Pages/Main";


function App() {
  const { users } = useContext(UserContext);
  useEffect(() => {}, [users]);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Container maxWidth="lg">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/DeepinPro">
              <Laptop />
            </Route>
            <Route path="/iTab">
              <Tablet />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/SignUp">
              <Signup />
            </Route>
            <Route path={`/${users.id}`}>
              <MainUser />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
