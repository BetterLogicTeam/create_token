import React, { useEffect, useState } from 'react'
import "./Token_main.css"
import axios from "axios";
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Token_main({ address }) {

    const [tokenName, setTokenName] = useState('');
    const [tokenSymbol, setTokenSymbol] = useState('');
    const [totalSupply, setTotalSupply] = useState(0);
    const [decimals, setDecimals] = useState(0);
    const [selectedItem, setSelectedItem] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [getToken, setgetToken] = useState([]);
    const [getindex, setgetindex] = useState("");

    const [modalShow, setModalShow] = React.useState(false);



    // console.log("address", typeof address)
    // alert('what is address' + address)

    const [checkedOne, setCheckedOne] = useState(false);
    const updateOne = async (e) => {
        // console.log(e.target.checked)
        // console.log(e.target.name)

        setCheckedOne((prev) => !prev)
    };
    const [checkedTwo, setCheckedTwo] = useState(false);
    const updateTwo = (e) => {
        // console.log(e.target.checked)
        // console.log(e.target.name)
        setCheckedTwo((prev) => !prev)
    };

    function handleSelectChange(event) {

        // console.log('selected item', event.target.value)
        setSelectedItem(event.target.value);

    }
    const submit = async () => {
        if (address == "No Wallet" || address == "") {
            toast.error("No Wallet Connected")
        }
        else if (address == "Wrong Network" || address == "") {
            toast.error("Wrong Newtwork please connect to Binance smart chain network")

        } else {

            axios.post('http://localhost:3300/students', {
                network_name: selectedItem,
                tokenname: tokenName,
                token_symbol: tokenSymbol,
                total_supply: totalSupply,
                decimals: decimals,
                isMint: checkedOne.toString(),
                isBurn: checkedTwo.toString(),
                tokenType: selectedItem,
                address: address,
                email: emailAddress
            })
                .then(function ({ data }) {
                    console.log("data", data);
                    let { msg, success } = data;
                    success ? toast.success(msg) : toast.error(msg)
                    // toast.success(data.msg)
                })
                .catch(function (error) {
                    console.log(error.message);
                });
        }
    }

    const get_Token_list = async () => {

        if (address == "No Wallet" || address == "") {
            toast.error("No Wallet Connected")
        }
        else if (address == "Wrong Network" || address == "") {
            toast.error("Wrong Newtwork please connect to Binance smart chain network")

        } else {
            try {
                console.log("address", address);
                let res = await axios.get(`http://localhost:3300/students?address=${address}`)
                console.log("RES", res.data);
                setgetToken(res.data)

            } catch (e) {
                console.log("Error While Call Get API", e);
            }
        }
    }





    // console.log('what is token name', typeof tokenName, typeof tokenSymbol, typeof parseInt(totalSupply), typeof decimals, typeof checkedOne, typeof checkedTwo)
    useEffect(() => {
        get_Token_list()
        let id = setInterval(() => {

        }, 1000);
        return () => {
            clearInterval(id)
        }
    }, [address]);

    return (
        <div className='py-4'>
            <div className="container">
                <h1 className='token_main_heading text-start'>Create your token</h1>
                <p className="lead text-start mb-3">Simple. No coding required.</p>
            </div>

            {/* {

                modalShow == true ?
                    <>
                        <Modal
                            // {...props}
                            show={modalShow}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                    Token Deatils
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="token_list">
                                    <div className="inner_list_tag">
                                        <h6> Network :</h6>
                                        <h6>{getToken[getindex].network_name}</h6>
                                    </div>
                                    <div className="inner_list_tag">
                                        <h6> Token name :</h6>
                                        <h6>{getToken[getindex].tokenname}</h6>
                                    </div>
                                    <div className="inner_list_tag">
                                        <h6>  Metamask :</h6>
                                        <h6>{getToken[getindex].address}</h6>
                                    </div>
                                    <div className="inner_list_tag">
                                        <h6>   Token symbol :</h6>
                                        <h6>{getToken[getindex].token_symbol}</h6>
                                    </div>
                                    <div className="inner_list_tag">
                                        <h6>Total supply :</h6>
                                        <h6>{getToken[getindex].total_supply}</h6>

                                    </div>
                                    <div className="inner_list_tag">
                                        <h6>Decimals :</h6>
                                        <h6>{getToken[getindex].decimals}</h6>

                                    </div>
                                    <div className="inner_list_tag">
                                        <h6>Email Address :</h6>
                                        <h6>{getToken[getindex].email}</h6>

                                    </div>
                                    <div className="inner_list_tag">
                                        <h6>Can Mint :</h6>
                                        <h6>{getToken[getindex].isMint}</h6>

                                    </div>
                                    <div className="inner_list_tag">
                                        <h6> Can Burn :</h6>
                                        <h6>{getToken[getindex].isBurn}</h6>

                                    </div>


                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={() => setModalShow(false)} >Close</Button>
                            </Modal.Footer>
                        </Modal>


                    </>
                    :
                    <>
                    </>



            } */}
            {/* <div className="container text-start">
                <p className='p-0 m-0 text-start'>Token type</p>
                <select className='token_select'  >
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
            </div> */}

            <div className="container text-start">
                <div className="row mt-5">
                    <div className="text-start">
                        <p className='text-start'>Network</p>
                        <select className='network_select' value={selectedItem} onChange={handleSelectChange}>
                            <option value="Ethereum">Ethereum</option>
                            <option value="Binance Smart Chain" >Binance Smart Chain</option>
                            <option value="Polygon">Matic(Polygon)</option>
                            <option value="Fantom Opera">Fantom Opera</option>
                            <option value="Cronos ">Cronos </option>
                            <option value="Avalanche">Avalanche </option>
                            <option value="DogeChain">DogeChain </option>
                        </select>
                        <p className='input_para'>Choose your network</p>

                    </div>
                    <div className="col-md-8">
                        <form action="#">
                            <div className='d-flex responsive_made'>
                                <div className="col-md-5">
                                    <div>
                                        <h6 >Token name</h6>
                                    </div>
                                </div>
                                <div className="col-md-6"><div>
                                    <input type="text" onChange={(e) => { setTokenName(e.target.value) }} className='token_input' />
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
                                    <input type="text" onChange={(e) => { setTokenSymbol(e.target.value) }} className='token_input' />
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
                                    <input type="number" onChange={(e) => { setTotalSupply(e.target.value) }} className='token_input' placeholder='1000000000000' />
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
                                    <input type="number" onChange={(e) => { setDecimals(e.target.value) }} className='token_input' placeholder='18' />
                                    <p className='input_para'>
                                        Insert the decimal precision of your token.</p>
                                </div>
                                </div>
                            </div>
                            <div className='d-flex responsive_made'>
                                <div className="col-md-5">
                                    <div>
                                        <h6 >Email Address</h6>
                                    </div>
                                </div>
                                <div className="col-md-7"><div>
                                    <input type="email" onChange={(e) => { setEmailAddress(e.target.value) }} className='token_input' placeholder='email' />
                                    <p className='input_para'>
                                        Enter your emailaddress</p>
                                </div>
                                </div>
                            </div>

                            <input type="checkbox" name={checkedOne ? null : 'Can Mint'} checked={checkedOne} onChange={updateOne} />
                            <strong className='ms-2'>Can Mint</strong><br />
                            <input type="checkbox" name={checkedTwo ? null : "Can Burn"} checked={checkedTwo} onChange={updateTwo} />
                            <strong className='ms-2'>Can Burn</strong>
                            <p className='blue'> <strong>Note:</strong>  If you want more functions, contact us. 👈</p>
                        </form>



                    </div>
                </div>
            </div>
            <div className="container">
                <div>
                    <button className='token_btn_select' onClick={submit}>Create</button>
                </div>

                <p style={{ color: '#212529' }}>GAS fee will be added to final amount</p>

            </div>

            <div className="container">

                <div className="list_token">

                    <h1 className='token_main_heading text-start'>Your token List</h1>

                    <div className="inner_list">
                        <div className="main_div_list">
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Address</th>
                                            <th scope="col">Network</th>
                                            <th scope="col">Token name</th>
                                            <th scope="col">Token symbol</th>
                                            <th scope="col">Total supply</th>

                                            <th scope="col">Decimals</th>

                                            <th scope="col">Email Address</th>

                                            <th scope="col">Can Mint</th>

                                            <th scope="col">Can Burn</th>
                                            <th scope="col">Status</th>



                                        </tr>
                                    </thead>
                                    <tbody>

                                        {

                                            getToken.map((items, index) => {
                                                console.log("Addres", items.address)
                                                return (
                                                    <>

                                                        <tr>
                                                            <td >{items.address?.substring(0, 8) + "..." + items.address?.substring(items.address?.length - 8)}</td>
                                                            <td>{items?.network_name}</td>
                                                            <td>{items?.tokenname}</td>
                                                            <td>{items?.token_symbol}</td>
                                                            <td>{items?.total_supply}</td>
                                                            <td>{items?.decimals}</td>
                                                            <td>{items?.email}</td>
                                                            <td>{items?.isMint}</td>
                                                            <td>{items?.isBurn}</td>
                                                            <td>{items?.isDeploy == false ? <>Padding</> : <> Deploy</>}</td>




                                                        </tr>



                                                    </>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>





                        </div>



                    </div>


                </div>
            </div>




        </div>
    )
}

export default Token_main
