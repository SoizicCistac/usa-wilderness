import React from 'react';
import Menu from '../components/Menu'
import {Link} from 'react-router-dom';


function Home () {
    return(
        <div>
            <Menu/>

            <h1>USA Wilderness</h1>
            <div id='state'>
                <Link id="buttonState" to='/park'>
                        Select a park by State
                </Link>
            </div>
            <div id='activity'>
                <Link id="buttonActivity" to='/activity'>
                        Select a park by Activity
                </Link>
            </div>
            


        </div>
    )
}

export default Home;