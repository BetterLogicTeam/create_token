import React from 'react'
import "./MoonFaq.css"
import { FaRibbon } from "react-icons/fa"
import { FaPuzzlePiece } from "react-icons/fa"
import { FaLaptopCode } from "react-icons/fa"
import { FaUserPlus } from "react-icons/fa"
import { BiCodeAlt } from "react-icons/bi"

function MoonFaq() {
    return (
        <div className='py-4'>
            <div className="container">
                <div className='Faq_heading'>
                    <h1 className='main_heading'>The most frequently asked questions when using MoonDeploy</h1>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="">

                            <h4 className='faq_sub_heading text-start'> <FaRibbon className='faq_icons'></FaRibbon>How do I generate BEP20 <br /> token?</h4>
                        </div>
                        <p className='text-start'>In order to create BEP20 token, open our <a className='faq_links' href="#"> BEP20 token generator </a> and follow instructions.</p>

                    </div>
                    <div className="col-md-4">
                        <div className="">

                            <h4 className='faq_sub_heading text-start'> <FaPuzzlePiece className='faq_icons'></FaPuzzlePiece>Can I add more functions to smart contract? <br /> token?</h4>
                        </div>
                        <p className='text-start'>Of course! Contact us to discuss your project.

                        </p>

                    </div>
                    <div className="col-md-4">
                        <div className="">

                            <h4 className='faq_sub_heading text-start'> <FaLaptopCode className='faq_icons'></FaLaptopCode> Can you make other tokens or develop smart contracts ?</h4>
                        </div>
                        <p className='text-start'>Sure, we can make different types of tokens and develop smart contracts to suit your needs.



                        </p>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="">

                            <h4 className='faq_sub_heading text-start'> <BiCodeAlt className='faq_icons'></BiCodeAlt> Can I have source code of contract ?
</h4>
                        </div>
                        <p className='text-start'>Yes, it will be available on BscScan, EtherScan or others after deployment.</p>

                    </div>
                    <div className="col-md-4">
                        <div className="">

                            <h4 className='faq_sub_heading text-start'> <FaUserPlus className='faq_icons'></FaUserPlus> Can I add more wallets ?</h4>
                        </div>
                        <p className='text-start'>Absolutely. For this you need to contact us.

                        </p>

                    </div>
                    {/* <div className="col-md-4">
                        <div className="">

                            <h4 className='faq_sub_heading text-start'> <FaLaptopCode></FaLaptopCode> Can you make other tokens or develop smart contracts ?</h4>
                        </div>
                        <p className='text-start'>Sure, we can make different types of tokens and develop smart contracts to suit your needs.



                        </p>

                    </div> */}
                </div>
            </div>

        </div>
    )
}

export default MoonFaq
