import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

import ParkInfo from "../pages/ParkInfo";


const SelectActivity = () =>{

    const[usPark, setUsPark] = useState(null);

    const [modalIsOpen, setIsOpen] = React.useState(false);
    
    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    };

    const findActivity = (event)=>{
      let selection = event.target.value;
      fetch ("https://developer.nps.gov/api/v1/parks?api_key=HtGeKfGroTqfT3YbR94d31DmbprYmSpMqBmo6jer&q="
      +selection)
        .then((resp)=>resp.json())
        .then((data)=>setUsPark(data))
    }

    function openModal() {
      setIsOpen(true);
    }

    function closeModal() {
      setIsOpen(false);
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
                  <img id="imgPark" src={s.images[0].url} alt=""/>
                  <div id="text">
                    <h2>{s.fullName+" - "+s.states}</h2>
                    <p>{s.description}</p>
                    <button onClick={openModal}>More information</button>
                    <Modal
                      isOpen={modalIsOpen}
                      onRequestClose={closeModal}
                      style={customStyles}
                      contentLabel="Example Modal"
                    >
                      <Link key={s.id} to={"./"+s.id}></Link>
                      <button onClick={closeModal}>close</button>
                    </Modal>
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