import React, { useEffect, useContext, useState } from "react";
import { ProductDataContext } from "../../Context/ProductData";
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

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.container}>
      <Grid item sm={12} xs={12}>
        <Container>
          <Typography variant="h2" className={classes.heading}>
            Pick Your iTab
          </Typography>
        </Container>
      </Grid>
      <Grid item sm={6} xs={12} className={classes.container}>
        <Container position="sticky" className={classes.innerContainer}>
          <img src={Tab1} />
        </Container>
        <Container position="stickey" className={classes.innerContainer}>
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
            }}>
            Buy Now
          </Button>
        </Container>
      </Grid>
      <Grid item sm={6} xs={12} className={classes.container}>
        <Paper elevation={3}>
          <Container className={classes.innerContainer}>
            <Typography variant="h5">Processor</Typography>
          </Container>
          <Container>
            {Processor.map((data, index)=>{
              return (
                <Button value="list" key={index} 
                color={Selection.Processor === data.name ? 'primary':"default"} 
                variant={Selection.Processor === data.name? 'contained':'default'}  
                style={{
                          width: "100%",
                          lineHeight: "auto",
                          fontSize: "1rem",
                          border: "0.15rem solid",
                          marginBottom: "0.10rem",
                          marginTop: "1rem",
                        }} 
                 onClick={()=>setSelection({...Selection,Processor:data.name})}> 
                 {`${data.name}`}{" "}
                        {Selection.Processor !== data.name
                          ? index < 0
                            ? `${
                                Processor[Processor.length - 1].cost -
                                Processor[index].cost
                              }`
                            : Processor[0].cost
                          : "Included"}</Button>
              )
            })}
          </Container>
        </Paper>
        <Paper elevation={3}>
          <Container className={classes.innerContainer}>
            <Typography variant="h5">RAM</Typography>
          </Container>
          <Container>
            {RAM.map((data, index)=>{
              return (
                <Button value="list" key={index} 
                color={Selection.RAM === data.name ? 'primary':"default"} 
                variant={Selection.RAM === data.name? 'contained':'default'}  
                style={{
                          width: "100%",
                          lineHeight: "auto",
                          fontSize: "1rem",
                          border: "0.15rem solid",
                          marginBottom: "0.10rem",
                          marginTop: "1rem",
                        }} 
                 onClick={()=>setSelection({...Selection,RAM:data.name})}> 
                 {`${data.name}`}{" "}
                        {Selection.Processor !== data.name
                          ? index < 0
                            ? `${
                                RAM[RAM.length - 1].cost -
                                RAM[index].cost
                              }`
                            : RAM[0].cost
                          : "Included"}</Button>
              )
            })}
          </Container>
        </Paper>
       
        <Paper elevation={3}>
          <Container className={classes.innerContainer}>
            <Typography variant="h5">RAM</Typography>
          </Container>
          <Container>
            {Storage.map((data, index)=>{
              return (
                <Button value="list" key={index} 
                color={Selection.Storage === data.name ? 'primary':"default"} 
                variant={Selection.Storage === data.name? 'contained':'default'}  
                style={{
                          width: "100%",
                          lineHeight: "auto",
                          fontSize: "1rem",
                          border: "0.15rem solid",
                          marginBottom: "0.10rem",
                          marginTop: "1rem",
                        }} 
                 onClick={()=>setSelection({...Selection,Storage:data.name})}> 
                 {`${data.name}`}{" "}
                        {Selection.Storage !== data.name
                          ? index < 0
                            ? `${
                                Storage[Storage.length - 1].cost -
                                Storage[index].cost
                              }`
                            : Storage[0].cost
                          : "Included"}
                          </Button>
              )
            })}
          </Container>
        </Paper>
      </Grid>
    </Grid>
  );
}
