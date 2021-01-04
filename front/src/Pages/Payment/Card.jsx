import React, { useEffect } from "react";
import { Elements, CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const dotenv = require("dotenv").config();
import { Button } from "@material-ui/core";

//Make sure to call `loadStripe` outside of a component's renter to avoid
// recreating the `Stripe` object on every render
const key = process.env.Secret_Key;
// const stripePromise = loadStripe(key.toString());

export default function Card() {
  return (
    <div>
      <Button variant="contained" color="primary">
        Pay Now
      </Button>
    </div>
  );
}
