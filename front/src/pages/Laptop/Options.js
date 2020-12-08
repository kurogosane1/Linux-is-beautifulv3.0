import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouteMatch, useHistory } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";
// import { Grid, Typography, ListItem, ListItemText } from "@material-ui/core";

export default function Options() {
  let history = useHistory();
  const { url } = useRouteMatch();
  const [processors, setProcessors] = useState({});
  const [ram, setRAM] = useState([]);
  const [storage, setStorage] = useState([]);
  const [graphics, setGraphics] = useState([]);
  function userHasAuth() {
    axios
      .get(`${url}`)
      .then((res) => {
        console.log(JSON.stringify(res.data.processors));
        setProcessors({
          ...processors,
          processors: res.data.processors.map((data) => data),
        });
        setGraphics({ ...graphics, graphics: res.data.graphics });
        setStorage({ storage: res.data.storage.map((data) => data) });
        setRAM({ ram: res.data.ram });
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    console.log(url);
    userHasAuth();
    console.log(processors);
    console.log(ram);
    console.log(storage);
  }, []);

  return (
    <div>
      <h2>This is the options section</h2>
    </div>
  );
}
