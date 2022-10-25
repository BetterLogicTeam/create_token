import React from 'react'
import "./Token_main.css"
import axios from "axios";
function Token_main() {

    const submit = async () => {

        axios.post('http://localhost:3000/process_post', {
            toekn_name: "bnb",
            token_symbol: "$",
            total_supply: 4565656,
            decimals: 15
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div className='py-4'>
            <div className="container">
                <h1 className='token_main_heading text-start'>Create your token</h1>
                <p className="lead text-start mb-3">Simple. No coding required.</p>
            </div>
            <div className="container text-start">
                <p className='p-0 m-0 text-start'>Token type</p>
                <select className='token_select' name="" id="">
                    <option value="Standard">Standard</option>
                    <option value="Safemoon">Safemoon (Deflationary)</option>
                    <option value="Liquidity Generator">Liquidity Generator</option>
                    <option value="Dynamic">Dynamic</option>
                    <option value="marketingtax">Marketing Tax</option>
                    <option value="Smarttax"> Smart Tax</option>
                    <option value="rewardtoken"> Reward Token</option>
                    <option value="promax"> Pro </option>
                    <option value="customizedToken"> Customized Token </option>
                </select>
                <p className='blue'>0.1 BNB</p>
                <div className="d-flex">
                    <span className='badge bg-info me-2'>Popular</span>
                    <span className='badge bg-danger me-2'>🔥Hot</span>
                    <span className='badge bg-success me-2'>New</span>
                    <span className='badge bg-info me-2'>🐣Early Access</span>
                </div>
            </div>

            <div className="container text-start">
                <div className="row mt-5">
                    <div className="col-md-8">
                        <form action="#">
                            <div className='d-flex responsive_made'>
                                <div className="col-md-5">
                                    <div>
                                        <h6 >Token name</h6>
                                    </div>
                                </div>
                                <div className="col-md-6"><div>
                                    <input type="text" className='token_input' />
                                    <p className='input_para'>
                                        Choose a name for your token.</p>
                                </div>
                                </div>
                            </div>
                            <div className='d-flex responsive_made'>
                                <div className="col-md-5">
                                    <div>
                                        <h6 >Token symbol</h6>
                                    </div>
                                </div>
                                <div className="col-md-6"><div>
                                    <input type="text" className='token_input' />
                                    <p className='input_para'>
                                        Choose a symbol for your token (usually 3-5 chars).</p>
                                </div>
                                </div>
                            </div>
                            <div className='d-flex responsive_made'>
                                <div className="col-md-5">
                                    <div>
                                        <h6 >Total supply</h6>
                                    </div>
                                </div>
                                <div className="col-md-7"><div>
                                    <input type="number" className='token_input' placeholder='1000000000000' />
                                    <p className='input_para'>
                                        Insert the initial number of tokens available. Will be put in your account..</p>
                                </div>
                                </div>
                            </div>
                            <div className='d-flex responsive_made'>
                                <div className="col-md-5">
                                    <div>
                                        <h6 >Decimals</h6>
                                    </div>
                                </div>
                                <div className="col-md-7"><div>
                                    <input type="number" className='token_input' placeholder='18' />
                                    <p className='input_para'>
                                        Insert the decimal precision of your token.</p>
                                </div>
                                </div>
                            </div>

                            <input type="checkbox" />
                            <strong className='ms-2'>Can Mint</strong><br />
                            <input type="checkbox" />
                            <strong className='ms-2'>Can Burn</strong>
                            <p className='blue'> <strong>Note:</strong>  If you want more functions, contact us. 👈</p>
                        </form>



                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">

                        <p className='text-center green_para'>0.1 BNB</p>
                    </div>
                </div>
                <p style={{ color: '#212529' }}>GAS fee will be added to final amount</p>
                <div className="text-start">
                    <p className='text-start'>Network</p>
                    <select className='network_select' name="#" id="">
                        <option value="">Ethereum</option>
                        <option value="" selected>Binance Smart Chain</option>
                        <option value="">Matic(Polygon)</option>
                        <option value="">Fantom Opera</option>
                        <option value="">Cronos </option>
                        <option value="">Avalanche </option>
                        <option value="">DogeChain </option>
                    </select>
                    <p className='input_para'>Choose your network</p>
                    <div>
                        <button className='token_btn_select' onClick={submit}>Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Token_main
