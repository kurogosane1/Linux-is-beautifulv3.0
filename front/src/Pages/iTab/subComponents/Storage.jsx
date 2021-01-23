import React from 'react';
import { Paper, Container, Typography, Button } from "@material-ui/core";

export default function Storage({ Storage, Selection, classes, setSelection }) {
  return (
    <Paper elevation={3} className={classes.paper}>
      <Container className={classes.innerContainer}>
        <Typography variant="h5">Storage</Typography>
      </Container>
      <Container>
        <Typography variant="subtitle1">
          Choose the correct amount of storage you require
        </Typography>
      </Container>
      <Container>
        {Storage.map((data, index) => {
          return (
            <Button
              value="list"
              key={index}
              color={Selection.Storage === data.name ? "primary" : "default"}
              variant={
                Selection.Storage === data.name ? "contained" : "default"
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
                setSelection({ ...Selection, Storage: data.name })
              }>
              {`${data.name}`}{" "}
              {Selection.Storage !== data.name
                ? index < 0
                  ? `${Storage[Storage.length - 1].cost - Storage[index].cost}`
                  : Storage[0].cost
                : "Included"}
            </Button>
          );
        })}
      </Container>
    </Paper>
  );
}
