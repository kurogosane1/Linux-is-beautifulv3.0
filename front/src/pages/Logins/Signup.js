import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  function handleChange() {}
  function youtest() {}

  return (
    <div className="Login-Container new-user-form">
      <div className="newuser">
        <div className="new-user-heading">
          <h2>Create a new User</h2>
        </div>

        <div className="new-user-firstname">
          <input
            onChange={handleChange}
            type="text"
            name="firstname"
            placeholder="First Name"
          />
        </div>
        <div className="new-user-lastname">
          <input
            onChange={handleChange}
            type="text"
            name="lastname"
            placeholder="Last Name"
          />
        </div>
        <div className="new-user-address">
          <input
            type="text"
            name="streetaddress"
            placeholder="Street Address"
            onChange={handleChange}
          />
        </div>
        <div className="new-user-state">
          <input
            onChange={handleChange}
            type="text"
            name="state"
            placeholder="State"
          />
        </div>
        <div className="new-user-zipcode">
          <input
            onChange={handleChange}
            type="text"
            name="zipcode"
            placeholder="Zipcode"
          />
        </div>
        <div className="new-user-email">
          <input
            onChange={handleChange}
            type="text"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="new-user-password">
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="new-user-checkpassword">
          <input
            onChange={handleChange}
            type="password"
            name="confirmpassword"
            placeholder="Confirm Password"
          />
        </div>
        <div className="new-user-submit">
          <input type="button" value="Signup" onClick={youtest} />
        </div>

        <div className="new-user-redirect">
          <label>
            If your already registered then click <Link to="/login">Here</Link>
          </label>
        </div>
      </div>
    </div>
  );
}
