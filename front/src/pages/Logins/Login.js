import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <div className="input-heading">
        <h1>Sign In</h1>
      </div>
      <form action="" className="form">
        <div className="input">
          <label>Username</label>
          <input type="text" name="email" id="user-input" />
        </div>
        <div className="nothing">Wrong email Address</div>
        <div className="input">
          <label>Password</label>
          <input type="password" name="password" id="user-password" />
        </div>
        <div className="input-button">
          <input type="submit" value="Sign In" className="final-click" />
        </div>
      </form>
      <div className="input-sign-up">
        <label>Forgot your username and password? Then click here</label>
        <br />
        <br />
        <label>If you are new user, then please click <Link to="/SignUp">Here</Link></label>
      </div>
    </div>
  );
}
