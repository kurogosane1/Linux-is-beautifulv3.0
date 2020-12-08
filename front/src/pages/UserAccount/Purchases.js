import React, {useEffect} from 'react';
import axios from "axios";
import { useRouteMatch, useHistory } from "react-router-dom";

export default function Purchases() {
    const { url } = useRouteMatch();
    let history = useHistory();

    function verifyUserIsValid(){
        axios.get(`${url}`,{withCredentials:true}).then(res=>{
            if(res.data.status !== 200){
                history.push("/Login")
            }
        });

    }

    useEffect(() => {
      verifyUserIsValid()
    },[verifyUserIsValid]);

    
    return (
        <div>
            <h2>Purchases</h2>
        </div>
    )
}
