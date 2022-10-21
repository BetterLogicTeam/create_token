import React, { useState } from 'react'
import "./Token_header.css"
import moonh from "../Assets/moonh.png"
import t2 from "../Assets/t2.png"
import { Link } from "react-router-dom"
import moonh2 from "../Assets/moonh2.png"
import { loadWeb3 } from '../../apis/api';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Token_header() {
  const [show, setShow] = useState(false);
  const [getAccount, setGetAccount] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let [btnTxt, setBtTxt] = useState("Connect")
  let [showwalleticon, setshowwalleticon] = useState(true)



  const getaccount = async () => {

    let acc = await loadWeb3();
    if (acc == "No Wallet") {
      toast.error('please install metamask')
    }
    else if (acc == "Wrong Network") {
      toast.error('Wrong Network')
    } else {
      setGetAccount(true)
      let myAcc = acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);
      setshowwalleticon(false)
      setBtTxt(myAcc);

    }


  }

  return (
    <div className='token_main'>
      <div className="container-fluid p-0">
        <div className="d-flex token_bg  justify-content-between">
          <div>
            <Link to='/' className="navbar-brand">

              <img src={moonh2} alt="Moon Deploy" style={{ height: '59px' }} />
            </Link>
          </div>
          <div className='d-flex res_btn'>
            <button className='token_header_btn'> <img src={t2} style={{ width: '12px' }} alt="" /> <span className='btn_text'>BNB Smart Chain</span></button>
            <button className='connect_btn' onClick={getaccount}>{btnTxt}</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Token_header
