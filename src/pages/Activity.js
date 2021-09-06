import React from 'react';
import SelectActivity from '../components/SelectActivity';
import Menu from '../components/Menu'


function Activity () {
    return(
        <div>
            <Menu/>
            <h2>Select Park by Activity</h2>
            <SelectActivity/>
        </div>
    )
}

export default Activity;