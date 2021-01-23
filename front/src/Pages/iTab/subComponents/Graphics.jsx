import React from "react";
import { Paper, Container, Typography, Button } from "@material-ui/core";

export default function Graphics({
  Graphics,
  Selection,
  classes,
  setSelection,
}) {
  return (
    <Paper elevation={3} className={classes.paper}>
      <Container className={classes.innerContainer}>
        <Typography variant="h5">Graphics</Typography>
      </Container>
      <Container>
        <Typography variant="subtitle1">
          Most Powerful graphics found in its class
        </Typography>
      </Container>
      <Container>
        {Graphics.map((data, index) => {
          return (
            <Button
              valu="list"
              key={index}
              color={Selection.GPU === data.name ? "primary" : "default"}
              variant={Selection.GPU === data.name ? "contained" : "default"}
              style={{
                width: "100%",
                lineHeight: "auto",
                fontSize: "1rem",
                border: "0.15rem solid",
                marginBottom: "0.10rem",
                marginTop: "1rem",
              }}
              onClick={() => setSelection({ ...Selection, GPU: data.name })}>
              {`${data.name}`}{" "}
              {Selection.GPU !== data.name
                ? index < 0
                  ? `${
                      Graphics[Graphics.length - 1].cost - Graphics[index].cost
                    }`
                  : Graphics[0].cost
                : "Included"}
            </Button>
          );
        })}
      </Container>
    </Paper>
  );
}
