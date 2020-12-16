import React, { useEffect, useState, useContext } from "react";
import {
  Grid,
  Typography,
  makeStyles,
  ListItem,
  ListItemText,
  Button,
} from "@material-ui/core";
import { useRouteMatch } from "react-router-dom";
import VS from "../../Assets/DesktopEnv.svg";
import { OptionContext } from "../../Context/ProductOptionsContext";

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
  const { getData, Processor, RAM, Graphics, Storage } = useContext(
    OptionContext
  );

  const [Selection, setSelection] = useState({
    Processor: "",
    RAM: "",
    GPU: "",
    Storage: "",
    Type: "LAPTOP",
  });

  useEffect(() => {}, [Processor]);
  useEffect(() => {}, [RAM]);
  useEffect(() => {}, [Graphics]);
  useEffect(() => {}, [Storage]);
  useEffect(() => {}, [Selection]);

  useEffect(() => {
    getData(url);
  }, []);

  useEffect(() => {
    setSelection({
      Processor: Processor[0].name,
      RAM: RAM[0].name,
      GPU: Graphics[0].name,
      Storage: Storage[0].name,
      Type: "LAPTOP",
    });
  }, [Processor, RAM, Graphics, Storage]);

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
          <Grid item position="sticky">
            <img src={VS} alt="something" />
          </Grid>
          <Grid item>
            <ListItem>
              <ListItemText primary={Selection.Processor} />
            </ListItem>
            <ListItem>
              <ListItemText primary={Selection.RAM} />
            </ListItem>
            <ListItem>
              <ListItemText primary={Selection.GPU} />
            </ListItem>
            <ListItem>
              <ListItemText primary={Selection.Storage} />
            </ListItem>
          </Grid>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Grid item>
            <Typography variant="h5" style={{ textAlign: "left" }}>
              Processor
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" style={{ textAlign: "left" }}>
              Which processor is right for you
            </Typography>
          </Grid>
          <Grid item style={{ marginBottom: "1rem" }}>
            {Processor.map((data, index) => {
              return (
                <Button
                  value="list"
                  key={index}
                  color={
                    Selection.Processor === data.name ? "primary" : "default"
                  }
                  onClick={() =>
                    setSelection({ ...Selection, Processor: data.name })
                  }
                  style={{
                    width: "100%",
                    lineHeight: "auto",
                    fontSize: "1rem",
                    border: "0.15rem solid",
                    marginBottom: "0.10rem",
                    marginTop: "1rem",
                  }}>
                  {`${data.name}`}{" "}
                  {Selection.Processor !== data.name
                    ? index < 0
                      ? `${
                          Processor[Processor.length - 1].cost -
                          Processor[index].cost
                        }`
                      : Processor[0].cost
                    : "Included"}
                </Button>
              );
            })}
          </Grid>
          <Grid item>
            <Typography variant="h5" style={{ textAlign: "left" }}>
              Memory
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" style={{ textAlign: "left" }}>
              Choose the Proper Memory for you
            </Typography>
          </Grid>
          <Grid item>
            {RAM.map((data, index) => {
              return (
                <Button
                  value="list"
                  key={index}
                  color={Selection.RAM === data.name ? "primary" : "default"}
                  onClick={() => setSelection({ ...Selection, RAM: data.name })}
                  style={{
                    width: "100%",
                    lineHeight: "auto",
                    fontSize: "1rem",
                    border: "0.15rem solid",
                    marginBottom: "0.10rem",
                    marginTop: "1rem",
                  }}>
                  {`${data.name}              $${data.cost}`}
                </Button>
              );
            })}
          </Grid>
          <Grid item>
            <Typography variant="h5" style={{ textAlign: "left" }}>
              Storage
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" style={{ textAlign: "left" }}>
              Choose the Correct amount of storage you require
            </Typography>
          </Grid>
          <Grid item>
            {Storage.map((data, index) => {
              return (
                <Button
                  variant="outlined"
                  color={
                    Selection.Storage === data.name ? "primary" : "default"
                  }
                  onClick={() =>
                    setSelection({ ...Selection, Storage: data.name })
                  }
                  key={index}
                  style={{
                    width: "100%",
                    lineHeight: "auto",
                    fontSize: "1rem",
                    border: "0.15rem solid",
                    marginBottom: "0.10rem",
                    marginTop: "1rem",
                  }}>
                  {`${data.name}                $${data.cost}`}
                </Button>
              );
            })}
          </Grid>
          <Grid item>
            <Typography variant="h5" style={{ textAlign: "left" }}>
              GPU
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" style={{ textAlign: "left" }}>
              Select the require Graphical Power that you may need
            </Typography>
          </Grid>
          <Grid item>
            {Graphics.map((data, index) => {
              return (
                <Button
                  value="list"
                  key={index}
                  color={Selection.GPU === data.name ? "primary" : "default"}
                  onClick={() => setSelection({ ...Selection, GPU: data.name })}
                  style={{
                    width: "100%",
                    lineHeight: "auto",
                    fontSize: "1rem",
                    border: "0.15rem solid",
                    marginBottom: "0.10rem",
                    marginTop: "1rem",
                  }}>
                  {`${data.name}`}
                  {``}
                  {``}
                  {`${data.cost}`}
                </Button>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
