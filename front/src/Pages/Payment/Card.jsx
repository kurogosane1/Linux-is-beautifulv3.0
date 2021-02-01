import React, { useEffect } from "react";
import { CardElement } from "@stripe/react-stripe-js";

export default function Card() {
  return (
    <div>
      <div>
        <p>Please use 4242 4242 4242 4242 for card number</p>
        <p>security as 222 and expiry date as 02/22</p>
        <p>No Charge will be placed to you</p>
      </div>
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
