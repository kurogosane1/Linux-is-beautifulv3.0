import React, { useEffect } from "react";
import { CardElement } from "@stripe/react-stripe-js";

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
