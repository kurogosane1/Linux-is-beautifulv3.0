import React from "react";
import UserNav from "./UserNav";
import Purchases from "./Purchases";
import User from "./User";
import Profile from "./Profile";
import { Container } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
export default function MainUser() {
  return (
    <div>
      <UserNav />
      <Container maxWidth="lg">
      <Switch>
        <Route exact path="/user/Purchases">
          <Purchases />
        </Route>
        <Route exact path="/user/Profile">
          <Profile />
        </Route>
        {/* <Route path="/user">
          <User />
        </Route> */}
      </Switch>
      </Container>
    </div>
  );
}
