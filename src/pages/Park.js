import React from 'react';
import SelectState from '../components/SelectState';
import Menu from '../components/Menu';
import Footer from '../components/Footer';


function Park () {
    return(
        <div className="main">
            <Menu/>
            <h2>Select Park by State</h2>
            <SelectState/>
            <Footer/>
        </div>
    )
}

export default Park;