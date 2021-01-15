import React from "react";
import { Container, Grid, CircularProgress } from "@material-ui/core";

export default function Loading() {
  return (
    <Grid
      style={{ marginTop: "1rem", maxHeight: "100vh" }}
      container
      direction="column"
      justify="center"
      alignItems="center">
      <Grid item sm={12} xs={12}>
        <Container style={{ padding: "1rem" }}>
          <CircularProgress />
        </Container>
      </Grid>
    </Grid>
  );
}
