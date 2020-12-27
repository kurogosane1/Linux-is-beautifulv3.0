import React from "react";
import {
  ListItem,
  ListItemText,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import VS from "../../Assets/DesktopEnv.svg";
import Tablet from "../../Assets/iTablet1.svg";

const useStyles = makeStyles({
  configuration: {
    textAlign: "left",
    zIndex: 10,
  },
  cover: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    justifyItems: "center",
    width: "100%",
  },
  root: {
    display: "flex",
    marginTop: "1.2rem",
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
});

export default function Cart({ info, action }) {
  const classes = useStyles();
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  const Remove = (id) => {
    action({ type: "DELETE_ADD_CART", id });
  };

  return (
    <Grid container spacing={3} align="center" style={{ marginTop: "1rem" }}>
      {info.length === 0 ? (
        <Grid item sm={12} xs={12} style={{ textAlign: "center" }}>
          <Typography variant="h3">Cart is Empty</Typography>
        </Grid>
      ) : (
        <Grid
          item
          sm={6}
          xs={12}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
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
                      Order id: {data.id}
                    </Typography>
                    <Typography variant="h6" className={classes.configuration}>
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
                  <img
                    src={
                      data.Type === "LAPTOP"
                        ? VS
                        : data.Type === "TABLET"
                        ? Tablet
                        : VS
                    }
                  />
                </CardMedia>
              </Card>
            );
          })}
        </Grid>
      )}
    </Grid>
  );
}
