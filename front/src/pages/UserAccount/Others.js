import React, { useEffect } from "react";
import axios from "axios";
import { useRouteMatch, useHistory } from "react-router-dom";


export default function Others() {
  const { url } = useRouteMatch();
  let history = useHistory();

  useEffect(() => {   
    axios
      .get(`${url}`,{withCredentials:true})
      .then((res)=>{
        if(res.data.status !== 200){
          history.push('/Login')
        }
      })
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <h2>More coming soon ....</h2>
    </div>
  );
}
