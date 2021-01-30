import React from "react";
import {
  Grid,
  Container,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    minHeight: "100vh",
    height: "100%",
  },
  subContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  innerTypography: {
    textAlign: "center",
    fontFamily: "Roboto",
  },
  subsubContainers: {
    paddingBottom: "4rem",
  },
});

export default function EmptyCart() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid
      direction="column"
      container
      justify="center"
      align="center"
      className={classes.container}>
      <Grid items sm={12} xs={12} className={classes.subContainer}>
        <Container className={classes.subsubContainers}>
          <Typography variant="h3" className={classes.innerTypography}>
            Cart is Empty
          </Typography>
        </Container>
        <Container className={classes.subsubContainers}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/")}>
            Go Back Home
          </Button>
        </Container>
      </Grid>
    </Grid>
  );
}
