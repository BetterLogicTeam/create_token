import axios from 'axios';
// import { Button, Modal } from 'bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { toast } from 'react-toastify';
import { loadWeb3 } from '../../apis/api';
import Token_main from '../Token_main/Token_main';
import Token_steps from '../Token_steps/Token_steps';

import Token_ut from '../Token_ut/Token_ut';

function AdminPanel({ address }) {
    const [key, setKey] = useState('Pending');
    const [getToken, setgetToken] = useState([]);
    const [deploy, setDeploy] = useState([]);

    const [getindex, setgetindex] = useState("");
    // const [getindex2, setgetindex2] = useState("");

    const [modalShow, setModalShow] = React.useState(false);
    const [afterdeploy, setafterdeploy] = React.useState(false);
    const [ischecked, setisChecked] = useState(false);
    const [url, setUrl] = useState('');



    const updateOne = async (e) => {
        // console.log(e.target.checked)
        // console.log(e.target.name)

        setisChecked((prev) => !prev)
    };
    const submit = async () => {
        let userName = getToken[getindex].tokenname
        setafterdeploy(false)
        try {
            await axios
                .patch(`https://coin-creators.herokuapp.com/students/${userName}`, {
                    isDeploy: ischecked,
                    url: url
                }).then(function ({ data }) {
                    console.log("data", data);
                    let { msg, success } = data;
                    success ? toast.success(msg) : toast.error(msg)
                    // toast.success(data.msg)
                })
                .catch(function (error) {
                    toast.error(error.message)

                    // console.log(error.message);
                });
        } catch (error) {
            toast.error(error.message)
        }


    }

    const get_Token_list = async () => {
        // let id = localStorage.getItem("NETWORKID");

        // console.log('what is first result', id)
        // let address = await loadWeb3(id);
        if (address == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (address == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to Binance smart chain network")

        } else {
            try {
                let res = await axios.get(`https://coin-creators.herokuapp.com/deploy?id=2`).then((res) => {
                    // console.log("Responce", res.data[1]);
                    setgetToken(res.data)
                }
                )

                let deploy = await axios.get(`https://coin-creators.herokuapp.com/deploy?id=1`).then((res) => {
                    setDeploy(res.data)

                }
                )



            } catch (e) {
                console.log("Error While Call Get API", e);
            }
        }
    }

    useEffect(() => {
        get_Token_list()
        let id = setInterval(() => {

        }, 1000);
        return () => {
            clearInterval(id)
        }
    }, []);
    console.log('urllenght', url.length)
    return (<>
        <div className=''> Welcome to Admin Panel</div>
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
            defaultActiveKey="Pending"
        >
            <Tab eventKey="Pending" title="Pending">
                <div className="container">

                    <div className="list_token">

                        <h1 className='token_main_heading text-start'>Your pending token List</h1>

                        <div className="inner_list">
                            <div className="main_div_list">
                                <div class="table-responsive">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Address</th>
                                                <th scope="col">Token name</th>
                                                <th scope="col">Read More</th>
                                                <th scope="col">Email Address</th>
                                                <th scope='col'>AfterDeploy</th>
                                                <th scope="col">Status</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {

                                                getToken.map((items, index) => {
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td >{items.address?.substring(0, 8) + "..." + items.address?.substring(items.address?.length - 8)}</td>
                                                                <td>{items?.tokenname}</td>
                                                                <td><a className='text-decoration-none' onClick={() => (setModalShow(true), setgetindex(index))} style={{ cursor: 'pointer' }}>View Detail</a></td>
                                                                <td>{items?.email}</td>

                                                                <td onClick={() => {
                                                                    setafterdeploy(true);
                                                                    setgetindex(index)
                                                                }} >
                                                                    <a className='text-decoration-none' style={{ cursor: 'pointer' }}>After Deploy</a></td>

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
                {

                    modalShow == true ?
                        <>
                            <Modal
                                // {...props}
                                show={modalShow}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                            >
                                <Modal.Header closeButton onClick={() => setModalShow(false)}>
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



                }


                {

                    afterdeploy == true ?
                        <>
                            <Modal
                                // {...props}
                                show={afterdeploy}
                                size="md"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                            >
                                <Modal.Header closeButton onClick={() => setafterdeploy(false)}>
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        After Deploy
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="token_list">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Enter Url</label>
                                            <input type="text" value={url} class="form-control" placeholder="Enter url Here" onChange={(e) => { setUrl(e.target.value) }} />
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name={ischecked} checked={ischecked} onChange={updateOne} />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Is Deploy
                                            </label>

                                        </div>

                                        {/* <input type="checkbox" name={ischecked} checked={ischecked} onChange={updateOne} /> */}
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={() => { submit() }} disabled={(ischecked == false) || (url.toString().length == 0)} >submit</Button>

                                    <Button onClick={() => setafterdeploy(false)} >Close</Button>
                                </Modal.Footer>
                            </Modal>


                        </>
                        :
                        <>
                        </>



                }

            </Tab>
            <Tab eventKey="Deploy" title="Deploy">
                <div className="container">

                    <div className="list_token">

                        <h1 className='token_main_heading text-start'>Your Deploy token List</h1>

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

                                                deploy.map((items, index) => {
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
            </Tab>


        </Tabs>
    </>

    );
}

export default AdminPanel;