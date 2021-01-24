import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import dotenv from "dotenv";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import {
  Grid,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  makeStyles,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";
import Card from "./Card";
import OrderDetails from "../UserAccount/OrderDetails";

dotenv.config();

//for Styles
const useStyles = makeStyles({
  roothead: {
    minHeight: "100vh",
  },
  TextField: {
    width: "90%",
    marginTop: "1rem",
  },
});

export default function CheckOut(props) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const stripe = useStripe();
  const element = useElements();

  const [isProcessing, setIsProcessing] = useState(false);
  const [data, useData] = useState([]);
  const [address, useAddress] = useState({
    Name: "",
    StreetAddress: "",
    Apt: "",
    City: "",
    Zipcode: 0,
    State: "",
    Country: "",
    Email: "",
  });

  const [billingAddress, useBillingAddress] = useState({
    Name: "",
    StreetAddress: "",
    Apt: "",
    City: "",
    Zipcode: 0,
    State: "",
    Country: "",
    Email: "",
  });

  const [check, setCheck] = useState(false);
  const key = process.env.Secret_Key;

  //Formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  //Taxrate
  const taxRate = 0.0825;

  //Percetage formatter
  const percentageTax = taxRate.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 2,
  });

  function UpdateData() {
    const Items = location.state;
    console.log(Items);
    useData([...Items]);
  }

  //Change Address
  const Address = async (e) => {
    await useAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  //Select checkbox
  const SelectCheckbox = () => {
    setCheck(!check);
    useBillingAddress(address);
  };

  //Changeing Billing Address
  const ChangeBillingAddress = async (e) => {};

  //Process Payment
  const PaymentProcess = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    const cardElement = element.getElement("card");
    const orderNum = uuidv4();
    const Config = data.map((x) => {
      return { ...x.Config, Order_Number: orderNum };
    });

    const total =
      data
        .map((x) => x.Cost)
        .reduce((accum, currentValue) => {
          return accum + currentValue;
        }, 0) *
      (taxRate + 1);

    const Billing = {
      customer_id: props.id,
      name: billingAddress.Name,
      email: billingAddress.Email,
      Order_Number: orderNum,
      Config: Config,
      amount: (total * 100).toFixed(),
      billing_details: {
        address: {
          city: billingAddress.City,
          country: billingAddress.Country,
          line1: billingAddress.StreetAddress,
          line2: billingAddress.Apt,
          postal_code: billingAddress.Zipcode,
          state: billingAddress.State,
        },
      },
    };

    try {
      //Get Client secret
      const paymentIntent = await axios
        .post("/Payment", Billing)
        .then((res) => {
          console.log("This is coming from the payment Intent");
          console.log(res.data);
          return res.data;
        });

      console.log(paymentIntent);

      //Create PaymentMethod Object
      const paymentMethodObj = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: Billing.billing_details,
      });

      console.log(paymentMethodObj);
      //Confirm Payment Method

      const confirmPayment = await stripe.confirmCardPayment(paymentIntent, {
        payment_method: paymentMethodObj.paymentMethod.id,
      });

      if (confirmPayment.error) {
        console.log(confirmPayment.error.message);
        setIsProcessing(false);
      }
      if (confirmPayment.paymentIntent.status === "succeeded") {
        console.log("this is the success side");
        return history.push("/Success");
      } else {
        setIsProcessing(false);
        return history.push("/Failure");
      }
    } catch (error) {
      console.log(error.message);
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    UpdateData();
  }, []);

  useEffect(() => {
    SelectCheckbox();
  }, [billingAddress]);

  return (
    <Grid container spacing={3} align="center" className={classes.roothead}>
      <Grid item sm={6} xs={12}>
        <TableContainer
          component={Paper}
          style={{
            width: "100%",
            marginTop: "1.2rem",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: "2rem" }} align="left">
                Detail
              </TableCell>
              <TableCell style={{ fontSize: "2rem" }} align="right">
                $USD
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
                  data
                    .map((x) => x.Cost)
                    .reduce((acc, curr) => {
                      return acc + curr;
                    }, 0)
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ fontSize: "1rem" }} align="left">
                Tax Percentage
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
                  data
                    .map((x) => x.Cost)
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
                  data
                    .map((x) => x.Cost)
                    .reduce((accum, currentValue) => {
                      return accum + currentValue;
                    }, 0) *
                    (taxRate + 1)
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </TableContainer>
      </Grid>
      <Grid item sm={6} xs={12}>
        <Paper style={{ marginTop: "1.2rem", padding: "1rem" }}>
          <div>
            <Typography variant="h4" align="left" style={{ padding: "10px" }}>
              Shipping Address
            </Typography>
          </div>

          <form>
            <TextField
              required
              id="outlined-required"
              label="Name"
              type="text"
              variant="outlined"
              margin="normal"
              fullWidth
              name="Name"
              onChange={Address}
            />
            <TextField
              required
              id="outlined-full-width"
              label="Street Address"
              type="text"
              variant="outlined"
              margin="normal"
              fullWidth
              name="StreetAddress"
              onChange={Address}
            />
            <TextField
              id="outlined-full-width"
              label="Apt#"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={Address}
              name="Apt"
            />
            <TextField
              id="outlined-full-width"
              type="text"
              label="City"
              variant="outlined"
              margin="normal"
              fullWidth
              name="City"
              onChange={Address}
            />
            <TextField
              id="outlined-full-width"
              type="number"
              label="Zip Code"
              variant="outlined"
              margin="normal"
              name="Zipcode"
              onChange={Address}
            />
            <TextField
              id="outlined-margin-none"
              type="text"
              label="State"
              variant="outlined"
              margin="normal"
              style={{ width: "15ch", marginLeft: "1rem" }}
              onChange={Address}
              name="State"
            />
            <TextField
              id="outlined-margin-none"
              type="text"
              label="Country"
              placeholder="United States"
              variant="outlined"
              margin="normal"
              style={{ width: "19.8ch", marginLeft: "1rem" }}
              onChange={Address}
              name="Country"
            />
            <TextField
              id="outlined-margin-none"
              type="text"
              label="Email Address"
              placeholder="United States"
              variant="outlined"
              margin="normal"
              fullWidth
              onChange={Address}
              name="Email"
            />
          </form>
        </Paper>
        <form>
          <Paper style={{ marginTop: "1.2rem", padding: "1rem" }}>
            <div>
              <Typography variant="h4" align="left" style={{ padding: "10px" }}>
                Billing Address
              </Typography>
            </div>
            <div>
              <FormControlLabel
                control={<Checkbox name="checkedA" onChange={SelectCheckbox} />}
                label="Same as the Shipping Address"
              />
            </div>

            <TextField
              required
              id="outlined-required"
              label="Name"
              type="text"
              variant="outlined"
              margin="normal"
              fullWidth
              value={!check ? billingAddress.Name : ChangeBillingAddress}
              onChange={ChangeBillingAddress}
            />
            <TextField
              required
              id="outlined-full-width"
              label="Street Address"
              type="text"
              variant="outlined"
              margin="normal"
              fullWidth
              value={
                !check ? billingAddress.StreetAddress : ChangeBillingAddress
              }
              onChange={ChangeBillingAddress}
            />
            <TextField
              id="outlined-full-width"
              label="Apt#"
              variant="outlined"
              fullWidth
              name="Apt"
              margin="normal"
              value={!check ? billingAddress.Apt : ChangeBillingAddress}
              onChange={ChangeBillingAddress}
            />
            <TextField
              id="outlined-margin-none"
              type="text"
              label="City"
              variant="outlined"
              margin="normal"
              fullWidth
              name="City"
              value={!check ? billingAddress.City : ChangeBillingAddress}
              onChange={ChangeBillingAddress}
            />
            <TextField
              id="outlined-full-width"
              type="number"
              label="Zip Code"
              variant="outlined"
              margin="normal"
              name="Zipcode"
              value={!check ? billingAddress.Zipcode : ChangeBillingAddress}
              onChange={ChangeBillingAddress}
            />
            <TextField
              id="outlined-margin-none"
              type="text"
              label="State"
              variant="outlined"
              margin="normal"
              style={{ width: "15ch", marginLeft: "1rem" }}
              name="State"
              value={!check ? billingAddress.State : ChangeBillingAddress}
              onChange={ChangeBillingAddress}
            />
            <TextField
              id="outlined-margin-none"
              type="text"
              label="Country"
              placeholder="United States"
              variant="outlined"
              margin="normal"
              style={{
                width: "19.8ch",
                marginLeft: "1rem",
              }}
              name="Country"
              value={!check ? billingAddress.Country : ChangeBillingAddress}
              onChange={ChangeBillingAddress}
            />
            <TextField
              id="outlined-margin-none"
              type="text"
              label="Email Address"
              placeholder="United States"
              variant="outlined"
              margin="normal"
              name="Email"
              fullWidth
              value={!check ? billingAddress.Email : ChangeBillingAddress}
              onChange={ChangeBillingAddress}
            />
          </Paper>
          <Paper
            style={{
              height: "2rem",
              marginTop: "1rem",
              marginBottom: "1.2rem",

              alignItems: "center",
              justifyItems: "center",
              alignContent: "center",
              justifyContent: "center",
            }}>
            <Card />
          </Paper>

          <Button
            variant="contained"
            type="submit"
            color="primary"
            disabled={isProcessing}
            onClick={PaymentProcess}
            style={{ width: "100%", fontSize: "1.2rem" }}>
            {!isProcessing ? "Pay" : "Processing..."}
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}
