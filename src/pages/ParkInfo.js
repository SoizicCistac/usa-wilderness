import React, {useEffect, useState} from 'react';
import Menu from '../components/Menu'

function ParkInfo(props){

    const [parkInfo, setParkInfo] = useState(null);

    useEffect(()=>{
        fetch("https://developer.nps.gov/api/v1/parks?api_key=HtGeKfGroTqfT3YbR94d31DmbprYmSpMqBmo6jer&id="+props.match.params.id)
            .then((resp)=>resp.json())
            .then((data)=> setParkInfo(data))
    }, []);

    return(
        <div>
            <Menu/>
            {
                parkInfo != null &&
                    parkInfo.data.map((park)=>{
                        return(<div>
                            <h2>{park.fullName}</h2>
                            <img src={park.images[0].url}/>
                        </div>)
                    })
            }
        </div>
    )
}

export default ParkInfo;