import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';



function Home () {
    return(
        <div>
            <Menu/>
            <h1>USA Wilderness</h1>
            <div id='state'>
                <Link className="buttonHome" to='/park'>
                        Select a park by State
                </Link>
            </div>
            <div id='activity'>
                <Link className="buttonHome" to='/activity'>
                        Select a park by Activity
                </Link>
            </div>
            
            <Footer/>

        </div>
    )
}

export default Home;