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

//Importing subcomponents
import Option1 from "./subComponents/Processor";
import Option2 from "./subComponents/RAM";
import Option3 from "./subComponents/Storage";
import Option4 from "./subComponents/Graphics";

import { v4 as uuidv4 } from "uuid";
import Tab1 from "../../Assets/iTablet3.svg";
import Loading from "../../Loading";

const useStyles = makeStyles({
  heading: {
    fontFamily: "Roboto",
    textAlign: "center",
    marginBottom: "1rem",
  },
  container: {
    padding: "1rem",
  },
  innerContainer: {
    padding: "1rem",
    marginTop: "2rem",
  },
  paper: {
    marginTop: "1rem",
    padding: "1rem",
    background: "rgb(238, 238, 238);",
    boxShadow: "0px 8px 30px -1px rgba(0,0,0,0.12)",
    borderRadius: "5px",
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
    setIsLoading(true);
    //This is to send it to the Context Side
    const data = {
      ProductName: "iTab",
      ProductCategory: "Tablet",
    };
    getInformation(url, data);
    setIsLoading(false);
  }, []);

  //set the default selection
  useEffect(() => {
    setIsLoading(true);
    setSelection({
      Processor: Processor[0].name,
      RAM: RAM[0].name,
      GPU: Graphics[0].name,
      Storage: Storage[0].name,
      Type: "Tablet",
    });
    setIsLoading(false);
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
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
                Add to Cart
              </Button>
            </Container>
          </Grid>
          <Grid item sm={6} xs={12} className={classes.container}>
            {/* This is where the processor component goes */}
            <Option1
              Processor={Processor}
              Selection={Selection}
              classes={classes}
              setSelection={setSelection}
            />
            {/* This is where the RAM option goes  */}
            <Option2
              RAM={RAM}
              Selection={Selection}
              classes={classes}
              setSelection={setSelection}
            />

            {/* This is where the storage option would be selected */}
            <Option3
              Storage={Storage}
              Selection={Selection}
              classes={classes}
              setSelection={setSelection}
            />

            {/* This is where we selection the graphics */}
            <Option4
              Graphics={Graphics}
              Selection={Selection}
              classes={classes}
              setSelection={setSelection}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
}
