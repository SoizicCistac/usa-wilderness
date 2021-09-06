import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const SelectActivity = () =>{

    const[usPark, setUsPark] = useState(null);


    const findActivity = (event)=>{
      let selection = event.target.value;
      fetch ("https://developer.nps.gov/api/v1/parks?api_key=HtGeKfGroTqfT3YbR94d31DmbprYmSpMqBmo6jer&q="
      +selection)
        .then((resp)=>resp.json())
        .then((data)=>setUsPark(data))
    }

    return(
        <div id="activity">
        <select onChange={findActivity}>
          <option value="">Choose an activity</option>
          <option value="biking">Biking</option>
          <option value="camping">Camping</option>
          <option value="caving">Caving</option>
          <option value="climbing">Climbing</option>
          <option value="hiking">Hiking</option>
          <option value="horse">Horse Trekking</option>
          <option value="swimming">Swimming</option>
          <option value="wildlife">Wildlife Watching</option>
        </select>
    
        {
          usPark != null &&
          <div>
            {
              
              usPark.data.map((s)=>{
                return(
                  <div className="parkByState">
                  <img src={s.images[0].url} alt=""/>
                  <div id="text">
                    <h2>
                      <Link id="namePark" to='/:id'>{s.fullName+" - "+s.states}</Link></h2>
                    <p>{s.description}</p>
                  </div>
                </div>
                )
              })
            } 
    
          </div>
        }
      </div>
        )        
    }
        
    
    
    export default SelectActivity;