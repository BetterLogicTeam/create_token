import React from 'react'
import "./Moon_u_footer.css"
import {BsTelegram} from "react-icons/bs"
import {FaRegGem} from "react-icons/fa"

function Moon_u_footer() {
  return (
    <div className='py-3 main_bg'>
        <div className="container-fluid upper_content ">
            <div className="d-flex justify-content-between py-3 px-3">
                <p className='m-0'>Get connected with us:</p>
                <BsTelegram className='footer_icon'></BsTelegram>

            </div>

        </div>
        <div className="container">
            <div className="row mt-4 justify-content-center">
                <div className="col-md-3">
                    <h6 className='text-start mb-4'><FaRegGem></FaRegGem> MOON DEPLOY</h6>
                    <p className='text-start'>Our mission is to make token creation easy and accessible for everyone.</p>
                </div>
                <div className="col-md-2">
                    <h6 className='text-start mb-4'> CREATE TOKENS</h6>
                   <p className='text-start'><a className='upper_footer_links' href="#"> Create Token on Ethereum</a></p>
                   <p className='text-start'><a className='upper_footer_links' href="#"> Create Token on Ethereum</a></p>
                   <p className='text-start'><a className='upper_footer_links' href="#"> Create Token on Ethereum</a></p>
                   <p className='text-start'><a className='upper_footer_links' href="#"> Create Token on Ethereum</a></p>
                   <p className='text-start'><a className='upper_footer_links' href="#"> Create Token on Ethereum</a></p>
                </div>
                <div className="col-md-2">
                    <h6 className='text-start mb-4'> Tools</h6>
                   <p className='text-start'><a className='upper_footer_links' href="#"> Create Token on Ethereum</a></p>
                   <p className='text-start'><a className='upper_footer_links' href="#"> Create Token on Ethereum</a></p>
                   <p className='text-start'><a className='upper_footer_links' href="#"> Create Token on Ethereum</a></p>
                   <p className='text-start'><a className='upper_footer_links' href="#"> Create Token on Ethereum</a></p>
                </div>
                <div className="col-md-2">
                    <h6 className='text-start mb-4'> LEGACY</h6>
                   <p className='text-start'><a className='upper_footer_links' href="#"> Create Token on Ethereum</a></p>
                   {/* <p className='text-start'><a className='upper_footer_links' href="#"> Create Token on Ethereum</a></p> */}
                   {/* <p className='text-start'><a className='upper_footer_links' href="#"> Create Token on Ethereum</a></p> */}
                   {/* <p className='text-start'><a className='upper_footer_links' href="#"> Create Token on Ethereum</a></p> */}
                </div>
                <div className="col-md-3">
                    <h6 className='text-start mb-4'> LINKS AND SERVICES</h6>
                   <p className='text-start'><a className='upper_footer_links' href="#"> Telegram</a></p>
                   <p className='text-start'><a className='upper_footer_links' href="#"> Feedback</a></p>
                   <p className='text-start'><a className='upper_footer_links' href="#"> Help</a></p>
                   {/* <p className='text-start'><a className='upper_footer_links' href="#"> Create Token on Ethereum</a></p> */}
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Moon_u_footer
