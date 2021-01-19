import React, { useEffect } from "react";
import axios from "axios";
import { useRouteMatch, useHistory, NavLink } from "react-router-dom";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import OrderDetails from "./OrderDetails";

export default function Purchases({ info, id }) {
  const { url } = useRouteMatch();
  let history = useHistory();

  function verifyUserIsValid() {
    const id = info.id;
    axios.get(`${url}`, { withCredentials: true }).then((res) => {
      console.log(res);
      if (res.data.status !== 200) {
        history.push("/Login");
      }
    });
  }

  useEffect(() => {
    console.log(id);
    console.log(id.length);
    verifyUserIsValid();
  }, [url]);

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid items sm={12} xs={12}>
        {id.length === 0 ? (
          <Typography variant="h4">No orders</Typography>
        ) : (
          id.map((information) => {
            console.log(typeof information.createdAt);
            return (
              <NavLink to={`${url}/${information.Order_Number}`}>
                <Paper elevation={3} style={{ marginTop: "1rem" }}>
                  <Container
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                    }}>
                    <Typography variant="h6">Order Number :</Typography>
                    <Typography variant="subtitle1">
                      {information.Order_Number}
                    </Typography>
                    <Typography variant="subtitle1">
                      ${information.Total}
                    </Typography>
                  </Container>
                </Paper>
              </NavLink>
            );
          })
        )}
      </Grid>
    </Grid>
  );
}
