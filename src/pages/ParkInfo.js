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

    const [imageSlider, setImageSlider] = useState([]);
    const [parkInfo, setParkInfo] = useState(null);
    const [bandeau, setBandeau] = useState(null)

    useEffect(()=>{
        fetch("https://developer.nps.gov/api/v1/parks?api_key=DD3tw4VvxXDLncBIh6tC6h995e70p9ZewKZs5EWc&id="+props.id)
            .then((resp)=>resp.json())
            .then((data)=> {
                setParkInfo(data);
                let parkCode=data.data[0].parkCode;
                console.log(parkCode);
                fetch('https://developer.nps.gov/api/v1/alerts?api_key=DD3tw4VvxXDLncBIh6tC6h995e70p9ZewKZs5EWc&limit=2&parkCode='+parkCode)
                    .then((resp)=>resp.json())
                    .then((data)=>setBandeau(data));
            });
        fetch('https://developer.nps.gov/api/v1/parks?DD3tw4VvxXDLncBIh6tC6h995e70p9ZewKZs5EWc&id='+props.id)
            .then((resp)=>resp.json())
            .then((data)=>setImageSlider(data.data[0].images));      
    }, []);

      const settings = {
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
                                        imageSlider != null &&
                                        imageSlider.map((image)=>{
                                        return <div key={image.title}>
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
                                {(bandeau !=null && bandeau.data.length>0) &&
                                    <p className="alert">ALERTS</p>
                                }
                                {
                                    bandeau !=null &&
                                    bandeau.data.map((p)=>{
                                        return <div className="bandeau" key={p.category}>
                                        <div className="bcategory"><p>{p.category}</p></div>
                                        <br></br>
                                        <div className="btitle"><p>{p.title}</p></div>
                                        <br></br>
                                        <div className="bdescription"><p>{p.description}</p></div>
                                        <div className="blaid"><p>{convertDate(p.lastIndexedDate)}</p></div>
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