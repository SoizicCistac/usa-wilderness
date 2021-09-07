import React, {useEffect, useState} from 'react';
<<<<<<< HEAD
import Menu from '../components/Menu'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import '../App.css';
=======
import Menu from '../components/Menu';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../App.css';
import 'leaflet/dist/leaflet.css';
>>>>>>> f736fddbcf34ba33bf740949a29bf781d2f62eef

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
<<<<<<< HEAD
                            <div className="containerPark">
                                <h2>{park.fullName}</h2>
                                <img id="imgParkInfo" src={park.images[0].url} alt={park.images[0].altText}/>
                                <h3>How to go there?</h3>
                                <p>{park.directionsInfo}</p>
                                <MapContainer center={[parseFloat(park.latitude), parseFloat(park.longitude)]} zoom={13} scrollWheelZoom={false}>
=======
                            <div className="infoDiv">
                                  <h2>{park.fullName}</h2>
                                  <img id="imgPark" src={park.images[0].url} alt={park.images[0].altText}/>
                                  <p>{park.directionsInfo}</p>
                               <div>
                                  <MapContainer center={[parseFloat(park.latitude), parseFloat(park.longitude)]} zoom={13} scrollWheelZoom={false}>
>>>>>>> f736fddbcf34ba33bf740949a29bf781d2f62eef
                                    <TileLayer
                                         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={[parseFloat(park.latitude), parseFloat(park.longitude)]}>
                                      <Popup>
                                          A pretty CSS3 popup. <br /> Easily customizable.
                                      </Popup>
                                    </Marker>
                                  </MapContainer>
                               </div>
                            </div>
                                                
                        );
                    })
            }
        </div>
    )
}

export default ParkInfo;