import React from 'react';
import SelectState from '../components/SelectState';
import Menu from '../components/Menu'


function Park () {
    return(
        <div>
            <Menu/>
            <h2>Select Park by State</h2>
            <SelectState/>
        </div>
    )
}

export default Park;