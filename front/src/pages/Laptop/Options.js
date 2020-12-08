import React, {useEffect} from "react";
import axios from 'axios';
import { useRouteMatch, useHistory } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";
// import { Grid, Typography, ListItem, ListItemText } from "@material-ui/core";

export default function Options(props) {
  let histroy = useHistory();
  const {url} = useRouteMatch();
  function userHasAuth(){
    axios.get(`${url}`)
  }
  useEffect(()=>{},[])

  return (
    <div>
      <h2>This is the options</h2>
    </div>
  );
}
