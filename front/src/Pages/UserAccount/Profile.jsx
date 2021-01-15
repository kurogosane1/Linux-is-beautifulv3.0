import React, { useEffect, useState } from "react";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import axios from "axios";
import { useRouteMatch, useHistory } from "react-router-dom";

export default function Profile({ info, id }) {
  useEffect(() => {
    console.log(id);
  }, [id]);

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ marginTop: "1rem", maxHeight: "100vh", height: "100%" }}>
      <Grid items sm={12} xs={12}>
        <Paper elevation={3} style={{ display: "flex" }}>
          <Container style={{ padding: "1rem" }}>
            <div>
              <Typography variant="h5">First Name :</Typography>

              <Typography variant="subtitle1">{id.firstname}</Typography>
            </div>
            <div>
              <Typography variant="h5">Last Name :</Typography>
              <Typography variant="subtitle1">{id.lastname}</Typography>
            </div>
            <div>
              <Typography variant="h5">Email :</Typography>
              <Typography variant="subtitle1">{id.lastname}</Typography>
            </div>
            <div>
              <Typography variant="h5">Street Address :</Typography>
              <Typography variant="subtitle1">{id.streetaddress}</Typography>
            </div>
            <div>
              <Typography variant="h5">State :</Typography>
              <Typography variant="subtitle1">{id.state}</Typography>
            </div>
            <div>
              <Typography variant="h5">Zipcode :</Typography>
              <Typography variant="subtitle1">{id.zipcode}</Typography>
            </div>
            <div>
              <Typography variant="h5">Contact Number :</Typography>
              <Typography variant="subtitle1">{id.cellphone}</Typography>
            </div>
          </Container>
        </Paper>
      </Grid>
    </Grid>
  );
}
