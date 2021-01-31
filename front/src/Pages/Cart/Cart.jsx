import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import VS from "../../Assets/DesktopEnv.svg";
import Tablet from "../../Assets/iTablet1.svg";
import { UserContext } from "../../Context/UserContext";
import EmptyCart from "./EmptyCart";

const useStyles = makeStyles({
  configuration: {
    textAlign: "left",
    width: "100%",
  },
  cover: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    justifyItems: "center",
    width: "100%",
    margin: "2rem",
  },
  root: {
    display: "flex",
    marginTop: "1.2rem",
    width: "100%",
    height: "370px",
    zIndex: 10,
    border: "none",
  },
  detail: {
    display: "flex",
    flexDirection: "column",
  },
  actionButton: {
    alignContent: "start",
    marginRight: "6rem",
    marginTop: "0.5rem",
  },
  total: {
    width: "100%",
  },
});

export default function Cart({ info, action }) {
  const classes = useStyles();
  const history = useHistory();

  const { users } = useContext(UserContext);

  //Formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  const Remove = (id) => {
    action({ type: "DELETE_ADD_CART", id });
  };

  const taxRate = 0.0825;

  const percentageTax = taxRate.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 2,
  });

  // To make payment
  const proceed = () => {
    const { isLoggedIn } = users;

    if (isLoggedIn === false) {
      history.push("/Login");
    } else {
      history.push("/Payment", info);
    }
  };

  //To empty all the carts
  const empty = () => {
    action({ type: "EMPTY_CART" });
  };

  const imageChange = (data) => {
    switch (data) {
      case "Laptop":
        return VS;
      case "Tablet":
        return Tablet;
      default:
        return VS;
    }
  };

  return (
    <Grid
      container
      spacing={3}
      align="center"
      style={{
        minHeight: "100vh",
        height: "90%",
      }}>
      {info.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <Grid
            item
            sm={6}
            xs={12}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              alignContent: "center",
              zIndex: "10",
            }}>
            {info.map((data, index) => {
              const total = formatter.format(data.Cost);
              return (
                <Card
                  className={classes.root}
                  key={index}
                  justify="space-between">
                  <div className={classes.detail}>
                    <CardContent>
                      <Typography
                        variant="subtitle1"
                        className={classes.configuration}>
                        Config Id: {data.id}
                      </Typography>
                      <Typography
                        variant="h6"
                        className={classes.configuration}>
                        Configuration
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        className={classes.configuration}>
                        {data.Config.Processor}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        className={classes.configuration}>
                        {data.Config.RAM}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        className={classes.configuration}>
                        {data.Config.GPU}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        className={classes.configuration}>
                        {data.Config.Storage}
                      </Typography>
                      <Typography
                        variant="h6"
                        className={classes.configuration}>
                        {total}
                      </Typography>
                      <Button
                        className={classes.actionButton}
                        onClick={() => {
                          Remove(data.id);
                        }}
                        variant="contained"
                        color="secondary"
                        startIcon={<DeleteIcon />}>
                        DELETE
                      </Button>
                    </CardContent>
                  </div>
                  <CardMedia className={classes.cover}>
                    <img src={imageChange(data.PurchaseType)} alt="some" />
                  </CardMedia>
                </Card>
              );
            })}
          </Grid>
          <Grid item sm={6} xs={12}>
            <TableContainer
              component={Paper}
              style={{ width: "100%", marginTop: "1.2rem" }}>
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontSize: "2rem" }} align="left">
                    Details
                  </TableCell>
                  <TableCell style={{ fontSize: "2rem" }} align="right">
                    $
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell style={{ fontSize: "1rem" }} align="left">
                    Total Before Tax
                  </TableCell>
                  <TableCell
                    style={{ fontSize: "1rem", fontWeight: "100" }}
                    align="right">
                    {formatter.format(
                      info
                        .map((data) => data.Cost)
                        .reduce((accum, currentValue) => {
                          return accum + currentValue;
                        }, 0)
                    )}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontSize: "1rem" }} align="left">
                    Tax percentage
                  </TableCell>
                  <TableCell
                    style={{ fontSize: "1rem", fontWeight: "100" }}
                    align="right">
                    {percentageTax}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontSize: "1rem" }} align="left">
                    Tax
                  </TableCell>
                  <TableCell
                    style={{ fontSize: "1rem", fontWeight: "100" }}
                    align="right">
                    {" "}
                    {formatter.format(
                      info
                        .map((data) => data.Cost)
                        .reduce((accum, currentValue) => {
                          return accum + currentValue;
                        }, 0) * taxRate
                    )}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontSize: "2rem" }} align="left">
                    Total
                  </TableCell>
                  <TableCell style={{ fontSize: "2rem" }} align="right">
                    {formatter.format(
                      info
                        .map((data) => data.Cost)
                        .reduce((accum, currentValue) => {
                          return accum + currentValue;
                        }, 0) *
                        (taxRate + 1)
                    )}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={<DeleteIcon />}
                      onClick={empty}>
                      Empty Cart
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={proceed}>
                      Proceed to payment
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </TableContainer>
          </Grid>
        </>
      )}
    </Grid>
  );
}
