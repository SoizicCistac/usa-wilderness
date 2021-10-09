import React, { useEffect, useState } from "react";

const Alerts = (props) =>{

    const [bandeau,setBandeau] = useState([]);

    useEffect (()=>{
        fetch('https://developer.nps.gov/api/v1/alerts?api_key=HsUV7WE7sPBToPWUjgP0dAnZbTGepLcxiX9NtHFt&parkCode='+props.parkCode)
        .then((resp)=>resp.json())
        .then((data)=>setBandeau(data.data[0]));
    }, []);
    console.log(bandeau)
    return(
        <div className="alert">
            
        </div>
    )
}

export default Alerts;