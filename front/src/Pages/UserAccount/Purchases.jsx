import React, { useEffect } from "react";
import axios from "axios";
import { useRouteMatch, useHistory } from "react-router-dom";

export default function Purchases({ info }) {
  const { url } = useRouteMatch();
  let history = useHistory();

  function verifyUserIsValid() {
    const id = info.id;
    axios.get(`${url}`, { withCredentials: true }).then((res) => {
      console.log(res);
      if (res.data.status !== 200) {
        history.push("/Login");
      }
    });
  }

  useEffect(() => {
    verifyUserIsValid();
  }, [url]);

  return (
    <div>
      <h2>Purchases</h2>
    </div>
  );
}
