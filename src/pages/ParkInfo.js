import React, {useEffect, useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import '../App.css';
import 'leaflet/dist/leaflet.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

function ParkInfo(props){

    //const [imageSlider, setImageSlider] = useState([]);
    const [parkInfo, setParkInfo] = useState(null);
    const [bandeau, setBandeau] = useState(null)

    useEffect(()=>{ // get data from API
        fetch(`https://developer.nps.gov/api/v1/parks?api_key=HsUV7WE7sPBToPWUjgP0dAnZbTGepLcxiX9NtHFt&id=${props.id}`)
            .then((resp)=>resp.json())
            .then((data)=> {
                setParkInfo(data);
                let parkCode=data.data[0].parkCode;
                console.log(parkCode);
                fetch(`https://developer.nps.gov/api/v1/alerts?api_key=HsUV7WE7sPBToPWUjgP0dAnZbTGepLcxiX9NtHFt&limit=2&parkCode=${parkCode}`)
                    .then((resp)=>resp.json())
                    .then((data)=>setBandeau(data));
            });    
    }, []);

      const settings = { //settings for slider
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
    function convertDate(dateText){
        let date=new Date(dateText);
        return(date.getFullYear()+"-"
                + date.getMonth()+"-"
                + date.getDay()+" "
                + date.getUTCHours()+":"
                + ("0"+date.getMinutes()).substr(-2))
    }
    
    let now= new Date();
    let currentFullYear=now.getFullYear();


    return(
        <div>
            {
                parkInfo != null &&
                    parkInfo.data.map((park)=>{
                        return(
                            <div className="infoDiv">
                                <h2>{park.fullName}</h2>
                                <div className='divContainer'>
                                <Slider className='slider' {...settings}>
                                    {
                                        parkInfo != null &&
                                        parkInfo.data[0].images.map((image)=>{
                                        return <div key={image.title}>
                                            <p>Swipe to see more pictures</p>
                                            <img src={image.url} alt={image.altText} className='imageSlider'/>
                                            <p>{image.caption}</p>
                                            </div>
                                        })
                                    }
                                </Slider>
                                </div>                                
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
                                {   
                                    (bandeau !=null && bandeau.data.length>0) &&
                                        bandeau.data.filter((p)=>{
                                        return  p.lastIndexedDate.slice(0,4)===currentFullYear
                                        })
                                        .map((filteredAlert)=>{
                                            return <div className="bandeau"> 
                                            <p className="alert">Alert</p> 
                                            <div className="bcategory"><p>{filteredAlert.category}</p></div>
                                            <br></br>
                                            <div className="btitle"><p>{filteredAlert.title}</p></div>
                                            <br></br>
                                            <div className="bdescription"><p>{filteredAlert.description}</p></div>
                                            <div className="blaid"><p>{convertDate(filteredAlert.lastIndexedDate)}</p></div>
                                            <hr></hr>
                                            </div>
                                    })
                                }                                  
                            </div>                        
                        );
                    })
            }
        </div>
    )
}

export default ParkInfo;