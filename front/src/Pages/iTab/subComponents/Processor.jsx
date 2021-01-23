import React from "react";
import { Paper, Container, Typography, Button } from "@material-ui/core";

export default function Processor({ Processor, Selection, classes, setSelection }) {
  return (
    <Paper elevation={3} className={classes.paper}>
      <Container className={classes.innerContainer}>
        <Typography variant="h5">Processor</Typography>
      </Container>
      <Container>
        <Typography variant="subtitle1">
          Already the most powerful processor we have ever made
        </Typography>
      </Container>
      <Container>
        {Processor.map((data, index) => {
          return (
            <Button
              value="list"
              key={index}
              color={Selection.Processor === data.name ? "primary" : "default"}
              variant={
                Selection.Processor === data.name ? "contained" : "default"
              }
              style={{
                width: "100%",
                lineHeight: "auto",
                fontSize: "1rem",
                border: "0.15rem solid",
                marginBottom: "0.10rem",
                marginTop: "1rem",
              }}
              onClick={() =>
                setSelection({ ...Selection, Processor: data.name })
              }>
              {`${data.name}`}{" "}
              {Selection.Processor !== data.name
                ? index < 0
                  ? `${
                      Processor[Processor.length - 1].cost -
                      Processor[index].cost
                    }`
                  : Processor[0].cost
                : "Included"}
            </Button>
          );
        })}
      </Container>
    </Paper>
  );
}
