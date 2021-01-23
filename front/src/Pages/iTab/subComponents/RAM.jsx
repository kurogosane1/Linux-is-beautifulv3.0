import React from "react";
import { Paper, Container, Typography, Button } from "@material-ui/core";

export default function RAM({ RAM, Selection, classes, setSelection }) {
  return (
    <Paper elevation={3} className={classes.paper}>
      <Container className={classes.innerContainer}>
        <Typography variant="h5">RAM</Typography>
      </Container>
      <Container>
        <Typography variant="subtitle1">
          Already the best memory we have ever made
        </Typography>
      </Container>
      <Container>
        {RAM.map((data, index) => {
          return (
            <Button
              value="list"
              key={index}
              color={Selection.RAM === data.name ? "primary" : "default"}
              variant={Selection.RAM === data.name ? "contained" : "default"}
              style={{
                width: "100%",
                lineHeight: "auto",
                fontSize: "1rem",
                border: "0.15rem solid",
                marginBottom: "0.10rem",
                marginTop: "1rem",
              }}
              onClick={() => setSelection({ ...Selection, RAM: data.name })}>
              {`${data.name}`}{" "}
              {Selection.Processor !== data.name
                ? index < 0
                  ? `${RAM[RAM.length - 1].cost - RAM[index].cost}`
                  : RAM[0].cost
                : "Included"}
            </Button>
          );
        })}
      </Container>
    </Paper>
  );
}
