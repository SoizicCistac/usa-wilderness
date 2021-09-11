import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import ParkInfo from "../pages/ParkInfo";


const SelectActivity = () =>{

    const[usPark, setUsPark] = useState(null);

    const [modalIsOpen, setIsOpen] = React.useState(false);
    
    const [parkSelect, setParkSelect] = useState(null);

    const customStyles = {
      content: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
    };

    Modal.setAppElement('#root');

    const findActivity = (event)=>{
      let selection = event.target.value;
      fetch ("https://developer.nps.gov/api/v1/parks?api_key=rZhcCrv2n16zgelgmIc2adI61HkaEArFIMeHhH6E&q="+selection)
        .then((resp)=>resp.json())
        .then((data)=>setUsPark(data));
    };

    function openModal(id) {
      setIsOpen(true);
      setParkSelect(id);
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
                  <div className="textPark">
                    <h2>{s.fullName+" - "+s.states}</h2>
                    <p>{s.description}</p>
                    <button onClick={()=>openModal(s.id)}>More information</button>
                    <Modal
                      isOpen={modalIsOpen}
                      onRequestClose={closeModal}
                      style={customStyles}
                      contentLabel="Example Modal"
                    >
                      <ParkInfo/>
                      <button id='modalBtn' onClick={closeModal}>close</button>
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