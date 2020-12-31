import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
} from "@material-ui/core";

//for Styles
const useStyles = makeStyles({
  roothead: {
    marginTop: "1rem",
  },
});

export default function Payment(props) {
  const classes = useStyles();
  const location = useLocation();

  const [data, useData] = useState([]);

  function UpdateData() {
    const Items = [...data, ...location.state];
    useData(Items);
  }

  useEffect(() => {
    UpdateData();
  }, [data]);

  return (
    <Grid container spacing={3} align="center" className={classes.roothead}>
      <Grid item sm={6} xs={12}>
        <TableContainer component={Paper}>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </TableContainer>
      </Grid>
      <Grid item sm={6} xs={12}>
        <Typography>Hello</Typography>
      </Grid>
    </Grid>
  );
}
