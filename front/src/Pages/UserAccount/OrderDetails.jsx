import axios from "axios";
import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

export default function OrderDetails() {
  const match = useRouteMatch();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const id = match.params.id;
    const url = match.url;
    axios
      .get(`${url}`, { withCredentials: true })
      .then((info) => console.log(info))
      .catch((err) => err.message);
  };

  return (
    <div>
      <h2>This is inside order details</h2>
    </div>
  );
}
