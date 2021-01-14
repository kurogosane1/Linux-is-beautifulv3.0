import React, { useEffect } from "react";

export default function Success({ action }) {
  useEffect(() => {
    action({ type: "EMPTY_CART" });
  }, []);
  return (
    <div>
      <h2>This is success</h2>
    </div>
  );
}
