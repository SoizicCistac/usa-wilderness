import React from "react";
import { useState } from "react";


const SelectActivity = () =>{
    const[usPark, setUsPark]=useState(null);

    const findActivity = (event)=>{
      let selection = event.target.value;
      fetch ("https://developer.nps.gov/api/v1/activities/parks?api_key=HtGeKfGroTqfT3YbR94d31DmbprYmSpMqBmo6jer&q="
      +selection)
        .then((resp)=>resp.json())
        .then((data)=>setUsPark(data))
    }

    return(
        <div >
        <select onChange={findActivity}>
          <option value="">Choisissez une activité</option>
          <option value="camping">Camping</option>
          <option value="biking">Cyclisme</option>
          <option value="climbing">Escalade</option>
          <option value="swimming">Natation</option>
          <option value="wildlife">Observation de la faune</option>
          <option value="horse">Randonnée à cheval</option>
          <option value="hiking">Randonnée pédestre</option>
          <option value="caving">Spéléologie</option>
        </select>
    
        {
          usPark != null &&
          <div>
            {
              
              usPark.data[0].parks.map((s)=>{
                return(
                  <div>
                    <h1>{s.designation}</h1>
                    <p>{s.states}</p>
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