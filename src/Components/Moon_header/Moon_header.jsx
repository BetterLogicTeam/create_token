import React from 'react'
import "./Moon_header.css"
import moonh from "../Assets/moonh.png"
import { Link } from "react-router-dom"

function Moon_header() {
  return (
    <div className='moon_haeder_bg'>
      <div className=" moon_haeder_bg bg-light">
    <div className="container-fluid moon_head">
      <Link to='/'  className="navbar-brand">
      
        <img src={moonh} alt="Moon Deploy" style={{height:'30px'}}/>
      </Link>
     
    </div>
  </div>
      
    </div>
  )
}

export default Moon_header
