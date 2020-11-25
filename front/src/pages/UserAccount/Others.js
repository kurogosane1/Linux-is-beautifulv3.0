import React, { useEffect } from "react";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";

export default function Others() {
  const { path } = useRouteMatch();

  useEffect(() => {
    axios
      .get(`/${path}`)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <h2>More coming soon ....</h2>
    </div>
  );
}
