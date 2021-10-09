import React from 'react';
import SelectActivity from '../components/SelectActivity';
import Menu from '../components/Menu';
import Footer from '../components/Footer';


function Activity () {
    return(
        <>
        <div className="main">
            <Menu/>
            <h1>Select Park by Activity</h1>
            <SelectActivity/>
            
        </div>
        
        <Footer/>
        </>
    )
}

export default Activity;