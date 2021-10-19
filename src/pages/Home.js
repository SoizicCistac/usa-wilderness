import React from 'react'
import logo from "../components/img/logo.png"
import {Link} from 'react-router-dom';


function Home() {
    return (
        <div className="container-home">
          <h1>USA Wilderness</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <button className="btnEnter">
              <Link className='enter' to='/select'>
            Enter
                </Link>
            </button>
        </div>
    )
}

export default Home

