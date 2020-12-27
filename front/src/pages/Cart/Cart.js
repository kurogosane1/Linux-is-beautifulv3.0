import React, { useEffect } from "react";
import { ListItem, ListItemText, Typography, Button } from "@material-ui/core";

export default function Cart({ info, action }) {
  useEffect(() => {
    console.log(info.length);
    console.log(action);
    // console.log(info[0].Config.Processor);
  }, [info]);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  const Remove = (id) => {
    console.log(id);
    action({ type: "DELETE_ADD_CART", id });
  };

  return (
    <div>
      {info.length === 0 ? (
        <Typography variant="h3">Cart is Empty</Typography>
      ) : (
        info.map((data, index) => {
          console.log(data.Config);
          const check = data.Config;
          console.log(check);
          const total = formatter.format(data.Cost);
          return (
            <div key={index}>
              <ListItem>
                <ListItemText>Order id: {data.id}</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Configuration</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>{check.Processor}</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>{check.RAM}</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>{check.GPU}</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>{check.Storage}</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>{total}</ListItemText>
              </ListItem>
              <Button
                color="primary"
                onClick={() => {
                  Remove(data.id);
                }}>
                Delete
              </Button>
            </div>
          );
        })
      )}
    </div>
  );
}
