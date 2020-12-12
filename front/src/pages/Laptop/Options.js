import React, { useEffect, useState } from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import axios from "axios";
import { useRouteMatch, useHistory } from "react-router-dom";
import VS from "../../Assets/DesktopEnv.svg";
// import { v4 as uuidv4 } from "uuid";
// import { Grid, Typography, ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles({
  heading: {
    fontFamily: "Roboto",
    textAlign: "center",
  },
  subHeading: {
    color: "rgb(170, 170, 170)",
    fontSize: "2.5rem",
    fontWeight: "bold",
    fontFamily: "Roboto",
    textAlign: "center",
  },
});

export default function Options() {
  const classes = useStyles();
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

  function userHasAuth() {
    axios
      .get(`${url}`)
      .then(async (res) => {
        console.log(res.data);
        let { processors, graphics, storage, ram } = res.data;

        await setProcessors([...processors]);
        await setGraphics([...graphics]);
        await setStorage([...storage]);
        await setRAM([...ram]);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    userHasAuth();
  }, []);

  const [Selection, setSelection] = useState({
    Processor: Processor[1],
    RAM: RAM[0].name,
    GPU: Graphics[0].name,
    Storage: Storage[0].name,
    Type: "LAPTOP",
  });

  useEffect(() => {
    console.log(Selection);
  }, [Selection]);

  return (
    <div
      style={{
        marginTop: "1rem",
      }}>
      <Typography variant="h6" className={classes.heading}>
        Customize your DeepinPro
      </Typography>

      <Grid
        container
        spacing={3}
        align="center"
        style={{
          marginTop: "1rem",
        }}>
        <Grid item sm={6} xs={12}>
          <Grid item>
            <img src={VS} />
          </Grid>
          <Grid item>
            <span>{Selection.Processor}</span>
            <span>{Selection.RAM}</span>
            <span>{Selection.GPU}</span>
            <span>{Selection.Storage}</span>
            <span>{console.log(Processor)}</span>
          </Grid>
        </Grid>
        <Grid item sm={6} xs={12}>
          <ul>
            {Processor.map((data) => {
              return <h2 key={data.id}>{data.name}</h2>;
            })}
          </ul>
        </Grid>
      </Grid>
    </div>
  );
}

// <div>
//   <h2>This is the options section</h2>
//   <h2>{<span key={Processor.id}>{Processor.name}</span>}</h2>
//   <h2>{<span key={Storage.id}>{Storage.name}</span>}</h2>
//   <h2>{<span key={RAM.id}>{RAM.name}</span>}</h2>
//   <h2>{<span key={Graphics.id}>{Graphics.name}</span>}</h2>
//   <ul>
//     {Processor.filter((index) => index >= 0).map((data) => {
//       return <h2 key={data.id}>{data.name}</h2>;
//     })}
//   </ul>
// </div>
