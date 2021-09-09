import React, {useEffect, useState} from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import '../App.css';
import 'leaflet/dist/leaflet.css';

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
                        return(
                            <div className="infoDiv">
                                  <h2>{park.fullName}</h2>
                                  <img id="imgPark" src={park.images[0].url} alt={park.images[0].altText}/>
                                  <div className="mapAndDirection">
                                    <MapContainer className="card" center={[parseFloat(park.latitude), parseFloat(park.longitude)]} zoom={13} scrollWheelZoom={false}>
                                        <TileLayer
                                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        />
                                        <Marker position={[parseFloat(park.latitude), parseFloat(park.longitude)]}>
                                        <Popup>
                                            {park.fullName}
                                        </Popup>
                                        </Marker>
                                    </MapContainer>
                                    <div className="textDirection">
                                        <h3>How to go there?</h3>
                                        <p>{park.directionsInfo}</p>
                                    </div>  
                                  </div>
                            </div>
                                                
                        );
                    })
            }
            <Footer/>
        </div>
    )
}

export default ParkInfo;