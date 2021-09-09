import React from 'react';
import SelectActivity from '../components/SelectActivity';
import Menu from '../components/Menu';
import Footer from '../components/Footer';


function Activity () {
    return(
        <>
        <div className="main">
            <Menu/>
            <h2>Select Park by Activity</h2>
            <SelectActivity/>
            
        </div>
        
        <Footer/>
        </>
    )
}

export default Activity;