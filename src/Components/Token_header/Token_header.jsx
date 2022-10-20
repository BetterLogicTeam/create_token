import React from 'react'
import "./Token_header.css"
import moonh from "../Assets/moonh.png"
import t2 from "../Assets/t2.png"
import {Link} from"react-router-dom"

function Token_header() {
  return (
    <div className='token_main'>
        <div className="container-fluid p-0">
            <div className="d-flex token_bg  justify-content-between">
                <div>
                <Link to='/'  className="navbar-brand">
      
      <img src={moonh} alt="Moon Deploy" style={{height:'30px'}}/>
    </Link>
                </div>
                <div className='d-flex res_btn'>
                    <button className='token_header_btn'> <img src={t2} style={{width:'12px'}} alt="" /> <span className='btn_text'>BNB Smart Chain</span></button>
                    <button className='connect_btn'>Connect Wallet</button>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Token_header
