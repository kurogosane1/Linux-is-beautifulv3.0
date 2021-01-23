import React, { useEffect, useContext, useState } from "react";
import { ProductDataContext } from "../../Context/ProductData";
import { CartContext } from "../../Context/CartContext";
import { useRouteMatch, useHistory } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Paper,
  ListItem,
  ListItemText,
  Button,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import Tab1 from "../../Assets/iTablet3.svg";
import Loading from "../../Loading";

const useStyles = makeStyles({
  heading: {
    fontFamily: "Roboto",
    textAlign: "center",
  },
  container: {
    padding: "1rem",
  },
  innerContainer: {
    padding: "1rem",
  },
  paper: {
    marginTop: "1rem",
    padding: "1rem",
    background: "rgb(238, 238, 238);",
  },
});

export default function TabBuyNow() {
  let history = useHistory();
  const { url } = useRouteMatch();
  let classes = useStyles();

  //This is to convert and present in a beautifyl format
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  //This is to get the information to the Context API
  const {
    getInformation,
    RAM,
    Processor,
    Category,
    Storage,
    Graphics,
  } = useContext(ProductDataContext);
  //This is to add it to the Cart
  const { dispatch } = useContext(CartContext);

  //This is the to set the default selection
  const [Selection, setSelection] = useState({
    Processor: "",
    RAM: "",
    GPU: "",
    Storage: "",
    Type: "Tablet",
  });

  //This is to get the cost
  const [cost, setCollection] = useState({
    processorCost: 0,
    ramCost: 0,
    gpuCost: 0,
    storageCost: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {}, [Processor]);
  useEffect(() => {}, [RAM]);
  useEffect(() => {}, [Graphics]);
  useEffect(() => {}, [Storage]);
  useEffect(() => {}, [Selection]);
  useEffect(() => {}, [Category]);

  //This is to fetch the information regarding the product
  useEffect(() => {
    //This is to send it to the Context Side
    const data = {
      ProductName: "iTab",
      ProductCategory: "Tablet",
    };
    getInformation(url, data);
  }, []);

  //set the default selection
  useEffect(() => {
    setSelection({
      Processor: Processor[0].name,
      RAM: RAM[0].name,
      GPU: Graphics[0].name,
      Storage: Storage[0].name,
      Type: "Tablet",
    });
  }, [Processor, RAM, Graphics, Storage]);

  //This is for setting the cost
  useEffect(() => {
    setCollection({
      processorCost: parseInt(
        Processor.filter(
          (information) => Selection.Processor === information.name
        ).map((data) => data.cost)
      ),
      ramCost: parseInt(
        RAM.filter((information) => Selection.RAM === information.name).map(
          (data) => data.cost
        )
      ),
      gpuCost: parseInt(
        Graphics.filter(
          (information) => Selection.GPU === information.name
        ).map((data) => data.cost)
      ),
      storageCost: parseInt(
        Storage.filter(
          (information) => Selection.Storage === information.name
        ).map((data) => data.cost)
      ),
    });
  }, [Selection]);

  //This is to add to cart
  const AddToCart = async () => {
    const { processorCost, gpuCost, ramCost, storageCost } = cost;
    const Total = processorCost + gpuCost + ramCost + storageCost;
    const Cart = {
      id: uuidv4(),
      PurchaseType: "Tablet",
      Config: Selection,
      Cost: Total,
    };

    await dispatch({ type: "ADD_CART", payload: Cart });
    await history.push("/Cart");
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.container}
      spacing={3}>
      <Grid item sm={12} xs={12}>
        <Container>
          <Typography variant="h2" className={classes.heading}>
            Pick Your iTab
          </Typography>
        </Container>
      </Grid>
      <Grid item sm={6} xs={12} style={{ marginTop: "-5rem" }}>
        <Container position="sticky" className={classes.innerContainer}>
          <img src={Tab1} />
        </Container>
        <Container position="stickey" className={classes.innerContainer}>
          <ListItem>
            <ListItemText
              disableTypography
              style={{ fontSize: "20px", fontFamily: "Roboto" }}
              primary={Selection.Processor}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              disableTypography
              style={{ fontSize: "20px", fontFamily: "Roboto" }}
              primary={Selection.RAM}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              disableTypography
              style={{ fontSize: "20px", fontFamily: "Roboto" }}
              primary={Selection.GPU}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              disableTypography
              style={{ fontSize: "20px", fontFamily: "Roboto" }}
              primary={Selection.Storage}
            />
          </ListItem>
        </Container>

        <Container>
          <Typography
            variant="h3"
            style={{ textAlign: "center", padding: "1rem" }}>
            {formatter.format(
              cost.processorCost +
                cost.gpuCost +
                cost.ramCost +
                cost.storageCost
            )}
          </Typography>
        </Container>
        <Container className={classes.innerContainer}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#2b2b2b",
              color: "white",
              width: "100%",
              fontSize: "1.2rem",
            }}
            onClick={AddToCart}>
            Buy Now
          </Button>
        </Container>
      </Grid>
      <Grid item sm={6} xs={12} className={classes.container}>
        <Paper elevation={3} className={classes.paper}>
          <Container className={classes.innerContainer}>
            <Typography variant="h5">Processor</Typography>
          </Container>
          <Container>
            <Typography variant="subtitle1">
              Already the most powerful processor we have ever made
            </Typography>
          </Container>
          <Container>
            {Processor.map((data, index) => {
              return (
                <Button
                  value="list"
                  key={index}
                  color={
                    Selection.Processor === data.name ? "primary" : "default"
                  }
                  variant={
                    Selection.Processor === data.name ? "contained" : "default"
                  }
                  style={{
                    width: "100%",
                    lineHeight: "auto",
                    fontSize: "1rem",
                    border: "0.15rem solid",
                    marginBottom: "0.10rem",
                    marginTop: "1rem",
                  }}
                  onClick={() =>
                    setSelection({ ...Selection, Processor: data.name })
                  }>
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
          </Container>
        </Paper>
        <Paper elevation={3} className={classes.paper}>
          <Container className={classes.innerContainer}>
            <Typography variant="h5">RAM</Typography>
          </Container>
          <Container>
            <Typography variant="subtitle1">
              Already the best memory we have ever made
            </Typography>
          </Container>
          <Container>
            {RAM.map((data, index) => {
              return (
                <Button
                  value="list"
                  key={index}
                  color={Selection.RAM === data.name ? "primary" : "default"}
                  variant={
                    Selection.RAM === data.name ? "contained" : "default"
                  }
                  style={{
                    width: "100%",
                    lineHeight: "auto",
                    fontSize: "1rem",
                    border: "0.15rem solid",
                    marginBottom: "0.10rem",
                    marginTop: "1rem",
                  }}
                  onClick={() =>
                    setSelection({ ...Selection, RAM: data.name })
                  }>
                  {`${data.name}`}{" "}
                  {Selection.Processor !== data.name
                    ? index < 0
                      ? `${RAM[RAM.length - 1].cost - RAM[index].cost}`
                      : RAM[0].cost
                    : "Included"}
                </Button>
              );
            })}
          </Container>
        </Paper>

        <Paper elevation={3} className={classes.paper}>
          <Container className={classes.innerContainer}>
            <Typography variant="h5">Storage</Typography>
          </Container>
          <Container>
            <Typography variant="subtitle1">
              Choose the correct amount of storage you require
            </Typography>
          </Container>
          <Container>
            {Storage.map((data, index) => {
              return (
                <Button
                  value="list"
                  key={index}
                  color={
                    Selection.Storage === data.name ? "primary" : "default"
                  }
                  variant={
                    Selection.Storage === data.name ? "contained" : "default"
                  }
                  style={{
                    width: "100%",
                    lineHeight: "auto",
                    fontSize: "1rem",
                    border: "0.15rem solid",
                    marginBottom: "0.10rem",
                    marginTop: "1rem",
                  }}
                  onClick={() =>
                    setSelection({ ...Selection, Storage: data.name })
                  }>
                  {`${data.name}`}{" "}
                  {Selection.Storage !== data.name
                    ? index < 0
                      ? `${
                          Storage[Storage.length - 1].cost - Storage[index].cost
                        }`
                      : Storage[0].cost
                    : "Included"}
                </Button>
              );
            })}
          </Container>
        </Paper>
        <Paper elevation={3} className={classes.paper}>
          <Container className={classes.innerContainer}>
            <Typography variant="h5">Graphics</Typography>
          </Container>
          <Container>
            <Typography variant="subtitle1">
              Most Powerful graphics found in its class
            </Typography>
          </Container>
          <Container>
            {Graphics.map((data, index) => {
              return (
                <Button
                  valu="list"
                  key={index}
                  color={Selection.GPU === data.name ? "primary" : "default"}
                  variant={
                    Selection.GPU === data.name ? "contained" : "default"
                  }
                  style={{
                    width: "100%",
                    lineHeight: "auto",
                    fontSize: "1rem",
                    border: "0.15rem solid",
                    marginBottom: "0.10rem",
                    marginTop: "1rem",
                  }}
                  onClick={() =>
                    setSelection({ ...Selection, GPU: data.name })
                  }>
                  {`${data.name}`}{" "}
                  {Selection.GPU !== data.name
                    ? index < 0
                      ? `${
                          Graphics[Graphics.length - 1].cost -
                          Graphics[index].cost
                        }`
                      : Graphics[0].cost
                    : "Included"}
                </Button>
              );
            })}
          </Container>
        </Paper>
      </Grid>
    </Grid>
  );
}
