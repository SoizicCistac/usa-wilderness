import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import ParkInfo from '../pages/ParkInfo';

const SelectActivity = () =>{

    const[usPark, setUsPark] = useState(null);

    const [modalIsOpen, setIsOpen] = React.useState(false);
    
    const [parkSelect, setParkSelect] = useState(null);

    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '90%',
      },
    };

    Modal.setAppElement('#root');

    const findActivity = (event)=>{
      let selection = event.target.value;
      fetch ("https://developer.nps.gov/api/v1/parks?api_key=HtGeKfGroTqfT3YbR94d31DmbprYmSpMqBmo6jer&q="+selection)
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
                    <h3>{s.fullName+" - "+s.states}</h3>
                    <p>{s.description}</p>
                    <button onClick={()=>openModal(s.id)}>More information</button>
                    <Modal
                      isOpen={modalIsOpen}
                      onRequestClose={closeModal}
                      style={customStyles}
                      contentLabel="Example Modal"
                    >
                      <ParkInfo id={parkSelect}/>
                      <button id='modalBtnClose' onClick={closeModal}>close</button>
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
