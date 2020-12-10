import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouteMatch, useHistory } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";
// import { Grid, Typography, ListItem, ListItemText } from "@material-ui/core";

export default function Options() {
  // let history = useHistory();
  const { url } = useRouteMatch();
  const [Processor, setProcessors] = useState([
    {
      id: "",
      name: "",
      cost: 0,
    },
  ]);
  const [RAM, setRAM] = useState([{}]);
  const [Storage, setStorage] = useState([{}]);
  const [Graphics, setGraphics] = useState([{}]);
  const [Selection, setSelection] = useState({
    Processor: Processor[0].name,
    RAM: RAM[0].name,
    GPU: Graphics[0].name,
    Storage: Storage[0].name,
    Type: "LAPTOP",
  });

  async function userHasAuth() {
    axios
      .get(`${url}`)
      .then((res) => {
        let { processors, graphics, storage, ram } = res.data;
        setProcessors([...processors]);
        setGraphics([...graphics]);
        setStorage([...storage]);
        setRAM([...ram]);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    userHasAuth();
  }, []);

  return (
    <div>
      <h2>This is the options section</h2>
      <h2>{<span key={Processor.id}>{Processor.name}</span>}</h2>
      <h2>{<span key={Storage.id}>{Storage.name}</span>}</h2>
      <h2>{<span key={RAM.id}>{RAM.name}</span>}</h2>
      <h2>{<span key={Graphics.id}>{Graphics.name}</span>}</h2>
      <ul>
        {Processor.filter((index) => index >= 0).map((data) => {
          return <h2 key={data.id}>{data.name}</h2>;
        })}
      </ul>
    </div>
  );
}
