import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import dotenv from "dotenv";

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
} from "@material-ui/core";
import Card from "./Card";

//for Styles
const useStyles = makeStyles({
  roothead: {
    marginTop: "1rem",
  },
  TextField: {
    width: "90%",
    marginTop: "1rem",
  },
});

dotenv.config();

export default function Payment() {
  const classes = useStyles();
  const location = useLocation();

  const [data, useData] = useState([]);
  const [address, useAddress] = useState({
    Name: "",
    StreetAddress: "",
    Apt: "",
    Zipcode: 0,
    State: "",
    Country: "",
  });

  const [billingAddress, useBillingAddress] = useState({
    Name: "",
    StreetAddress: "",
    Apt: "",
    Zipcode: 0,
    State: "",
    Country: "",
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
    useData(Items);
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

  useEffect(() => {
    UpdateData();
  }, [data]);

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
          </form>
        </Paper>
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

          <form>
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
              style={{ width: "19.8ch", marginLeft: "1rem" }}
              name="Country"
              value={!check ? billingAddress.Country : ChangeBillingAddress}
              onChange={ChangeBillingAddress}
            />
          </form>
        </Paper>
        <Paper>
          <Card />
        </Paper>
      </Grid>
    </Grid>
  );
}
