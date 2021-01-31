import React from "react";

import { useRouteMatch, useHistory, NavLink } from "react-router-dom";
import { Grid, ListItemText, List, Paper, Typography } from "@material-ui/core";
import OrderDetails from "./OrderDetails";

export default function Purchases({ info, id }) {
  const { url } = useRouteMatch();
  let history = useHistory();

  //This is to make the currency look good
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid items sm={12} xs={12}>
        {id.length === 0 ? (
          <Typography variant="h4">No orders</Typography>
        ) : (
          id.map((information) => {
            return (
              <NavLink to={`${url}/${information.Order_Number}`}>
                <Paper elevation={3} style={{ marginTop: "1rem" }}>
                  <Grid
                    container
                    justify="center"
                    alignItems="center"
                    style={{ padding: "2rem" }}>
                    <Grid item sm={6} xs={12}>
                      <List>
                        <ListItemText
                          primary="Order Number"
                          secondary={information.Order_Number}
                        />
                      </List>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <ListItemText
                        style={{ textAlign: "center" }}
                        primary={formatter.format(information.Total)}
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </NavLink>
            );
          })
        )}
      </Grid>
    </Grid>
  );
}
