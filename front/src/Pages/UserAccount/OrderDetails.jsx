import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  makeStyles,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Container,
  Divider,
  Button,
} from "@material-ui/core";
import VS from "../../Assets/DesktopEnv.svg";
import Tablet from "../../Assets/iTablet3.svg";
import { useRouteMatch, useHistory } from "react-router-dom";
import Loading from "../../Loading";
// import { set } from "../../../../controller/Connection";

//Styling
const useStyles = makeStyles({
  mainContainer: {
    minHeight: "100vh",
    height: "100%",
    width: "100%",
  },
  subContainer: {
    padding: "1rem",
    width: "100%",
    height: "100%",
    display: "flex",
    marginLeft: "1px",
    marginRight: "1px",
  },
  subSubContainer: {
    padding: "1rem",
    height: "100%",
    overflow: "none",
  },
});

export default function OrderDetails() {
  //Getting the userStyles
  const classes = useStyles();

  //Getting the history
  const history = useHistory();

  //Setting a simple storage place for the data to be placed
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  //This will be to use Functions to change the data
  const imageChange = (data) => {
    //This will save us time in changing the picture
    switch (data) {
      case "Laptop":
        return VS;
      case "Tablet":
        return Tablet;
      default:
        return VS;
    }
  };

  const match = useRouteMatch();
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(cart);
    console.log(order);
  }, [cart, order]);

  const fetchData = () => {
    console.log(history);
    setIsLoading(true);

    const id = match.params.id;
    const url = match.url;
    axios
      .get(`${url}`, { withCredentials: true })
      .then((datas) => {
        const information = datas.data;
        console.log(information);
        setCart([...information.Cart]);
        setOrder([...information.Order]);
        console.log(cart, order);
        setIsLoading(false);
      })
      .catch((err) => err.message);
  };

  //This is to make the currency look good
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={3}
      className={classes.mainContainer}>
      <Grid item sm={12} xs={12}>
        <Grid item sm={12} xs={12}>
          <Button variant="contained" onClick={() => history.goBack()}>
            Go back
          </Button>
        </Grid>
        <Paper elevation={3} className={classes.subContainer}>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <Grid
                container
                justify="center"
                alignItems="center"
                spacing={3}
                style={{ padding: "1rem" }}
                wrap="nowrap">
                <Grid
                  item
                  sm={2}
                  xs={12}
                  className={classes.subSubContainer}
                  zeroMinWidth>
                  <Container>
                    <List>
                      <ListItem>
                        <ListItemText
                          primary="Order Number"
                          secondary={
                            cart.length === 0 ? "empty" : cart[0].Order_Number
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Config Number"
                          secondary={
                            cart.length === 0 ? "empty" : cart[0].Cart_id
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Payment Confirmation Number"
                          secondary={
                            cart.length === 0 ? "empty" : cart[0].Payment_id
                          }
                          style={{ overflowWrap: "break-word" }}
                        />
                      </ListItem>
                    </List>
                  </Container>
                </Grid>

                <Grid item sm={7} xs={12} className={classes.subSubContainer}>
                  <Grid
                    container
                    justify="center"
                    alignItems="center"
                    spacing={3}
                    style={{ padding: "1rem" }}>
                    {order.map((data) => {
                      console.log(data);
                      return (
                        <>
                          <Grid item sm={5} xs={12}>
                            <Container>
                              <img
                                src={imageChange(data.Type)}
                                alt="something"
                              />
                            </Container>
                          </Grid>
                          <Grid item sm={5} xs={12}>
                            <Container>
                              <Typography variant="h5">
                                Configuration Number
                              </Typography>
                              <Typography variant="subtitle1">
                                <strong>{data.id}</strong>
                              </Typography>
                              <Typography variant="subtitle1">
                                {data.Processor}
                              </Typography>
                              <Typography variant="subtitle1">
                                {data.RAM}
                              </Typography>
                              <Typography variant="subtitle1">
                                {data.GPU}
                              </Typography>
                              <Typography variant="subtitle1">
                                {data.Storage}
                              </Typography>
                            </Container>
                            <Container>
                              <Typography variant="subtitle1">Cost</Typography>
                            </Container>
                            {data.length === 0 ? "" : <Divider variant="middle"/>}
                          </Grid>
                        </>
                      );
                    })}
                  </Grid>
                </Grid>

                <Grid item sm={3} xs={12} className={classes.subSubContainer}>
                  <TableContainer style={{ margin: "auto" }}>
                    <TableHead>
                      <TableRow>
                        <TableCell align="left">Detail</TableCell>
                        <TableCell aligh="right">$</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell align="left">Total Before Tax</TableCell>
                        <TableCell align="right">
                          {cart.length === 0
                            ? 0
                            : formatter.format(cart[0].Total / 1.0825)}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="left">Tax</TableCell>
                        <TableCell align="right">
                          {cart.length === 0
                            ? 0
                            : formatter.format(
                                (cart[0].Total / 1.0825) * 0.0825
                              )}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="left">Total after Tax</TableCell>
                        <TableCell align="right">
                          {cart.length === 0
                            ? 0
                            : formatter.format(cart[0].Total)}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </TableContainer>
                </Grid>
              </Grid>
            </>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}
