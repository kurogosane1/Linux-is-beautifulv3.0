import React, { useEffect } from "react";
import { CardElement } from "@stripe/react-stripe-js";

//Make sure to call `loadStripe` outside of a component's renter to avoid
// recreating the `Stripe` object on every render

// const stripePromise = loadStripe(key.toString());

export default function Card() {
  return (
    <div>
      <CardElement
        options={{
          hidePostalCode: true,
          style: {
            base: { fontSize: "23px" },
          },
        }}
      />
    </div>
  );
}
