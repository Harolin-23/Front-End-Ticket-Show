import React, { useState, useEffect } from 'react';
import '../props/ErrorsLogin/errors.css'

import {text} from '../components/header/Header.jsx'
import {roleEject} from '../Api/UserApi/Verified/RoleVerified.jsx'

import '../Login/StylesLogin/Login.css'
import './admin.css'


function Admin(){


    function logout(){
        window.location.href = "/";
        sessionStorage.removeItem("sessionToken");
        sessionStorage.removeItem("EmailPetition");
    }





    const [dataToken, setDataToken] = useState(null);

    const [selectedOption, setSelectedOption] = useState('Get All');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };


    useEffect(() => {
        const token = sessionStorage.getItem('sessionToken');
        setDataToken(token);
    }, []);


    //console.log(selectedOption)


    if (!dataToken) {
        return (
            <div className='erroToAcces'>
                 <a href="/" className='logo LErrR'>{text.Text}<b className="RS-Logo">{text.bold}</b>{text.textlag}</a>
                <h1><br></br><i class="fa-solid fa-xmark"></i><br />
                    <i>No tienes acceso.</i><br></br> 
                    Por favor, inicia sesión.</h1>
        
            </div>
        );
    }else{

        return (
            <>
            <div className='container-Admin'>
                <div className='menues-interact'>



                    <div className='Menu'>
                        <a href="/" className='logo LErrR'>{text.Text}<b className="RS-Logo">{text.bold}</b>{text.textlag}</a>
                        
                        
                        <div className='home-act'>
                            <p>home</p>
                            <div className='btn-icon'>
                            <i class="fa-solid fa-house"></i>
                            </div>
                        </div>
                        <details>
                            <summary>Tickets Options</summary>
                            <ul>
                            <li><h5 onClick={() => handleOptionClick('Get All')}>Get All</h5></li>
                            <li><h5 onClick={() => handleOptionClick('Add New')}>Add New</h5></li>
                            <li><h5 onClick={() => handleOptionClick('Delete')}>Delete</h5></li>
                            <li><h5 onClick={() => handleOptionClick('Update')}>Update</h5></li>
                            </ul>
                        </details>
                        <div className='sep'></div>
                        <div className='ofLow' onClick={logout}>
                        <i class="fa-solid fa-power-off"></i> Logout
                        </div>

                    </div>

                    <div className='contain-opt'>
                    {
                    selectedOption === "Get All" ? (
                        <>
                        <div className='Busqued-and-info'>
                            <form action="">
                            <input type="text" placeholder='Search your event'/>
                            </form>
                           
                        </div>
                        <div className='contain-events-Api'>

                            <div className='section-inf'>
                                <h1>Get All</h1>
                                <div className='info-but'>
                                    <p> powered Search</p>
                                </div>
                                <i class="fa-solid fa-bolt"></i>
                            </div>
                            <div className='data-event  events-info'>
                             



                            <div className='card-ev-admin'>
                                <div className='minture-img'>
                                   <i class="fa-solid fa-ticket"></i>
                                </div>
                                <div className='info-event'>
                                        <h6>Title</h6>
                                        <p>Description</p>
                                </div>
                               <div className='more-inf'>
                                    <h6>Medellin</h6>
                                    <p>2024-05-15 18:00:00.000000</p>
                                    <h4>Categorias</h4>
                               </div>
                               <div className='more-inf-dt'>
                                    <h4>Capacidad: 123</h4>
                               </div>
                            </div>











                            </div>
                        </div>
                        </>
                    ) : selectedOption === "Add New" ? (
                        <>
                        <div className='Busqued-and-info'>
                            <form action="">
                            <input type="text" placeholder='Search your event'/>
                            </form>
                           
                        </div>
                        <div className='contain-events-Api'>

                            <div className='section-inf'>
                                <h1>Save</h1>
                            </div>
                            <div className='data-event'>
                                <form className='save-event'>

                                    <input type="text" placeholder='Title' />
                                    <input type="text" placeholder='Description' />
                                    <div className='info-location'>
                                        <input type="text" placeholder='City' />
                                        <input type="number" placeholder='price'/>
                                    </div>
                                    <input type="url" placeholder='Image Url'/>
                                   
                                    <div className='info-MoreDAte'>
                                        <input type="text" placeholder='Category' />
                                        <input type="number" placeholder='Capacity'/>
                                        <input type="date" placeholder='Date'/>
                                    </div>
                                    <input type="submit" value="Send" className='btn-send'/>

                                </form>
                            </div>
                          
                           
                        </div>


                        </>
                    ) : selectedOption === "Delete" ? (
                        <>
                        <div className='Busqued-and-info'>
                            <form action="">
                            <input type="text" placeholder='Id Event To delete'/>
                            </form>
                           
                        </div>
                        <div className='contain-events-Api'>

                            <div className='section-inf'>
                                <h1>Delete</h1>
                            </div>
                            <div className='data-event  events-info'>
                             




                            <div className='card-ev-admin'>
                                <div className='minture-img'>
                                   <i class="fa-solid fa-ticket"></i>
                                </div>
                                <div className='info-event'>
                                        <h6>Title</h6>
                                        <p>Description</p>
                                </div>
                               <div className='more-inf'>
                                    <h6>Medellin</h6>
                                    <p>2024-05-15 18:00:00.000000</p>
                                    <h4>Categorias</h4>
                               </div>
                               <div className='more-inf-dt'>
                                    <h4>Capacidad: 123</h4>
                               </div>
                            </div>




                            </div>
                        </div>
                        </>





                           
                    ) : selectedOption === "Update" ? (
                        <div>
                           
                            <p>Actualizar un ticket</p>
                        </div>
                    ) : null
                }
                </div>
                

                </div>
                <div className='footer-admin'>

                    <div className='logo-info'>
                        <a href="/" className='logo LErrR'>{text.Text}<b className="RS-Logo">{text.bold}</b>{text.textlag}</a>
                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                    <div className='info-tec'>
                        <h6>Power By</h6>
                            <div className='sep-rect'></div>
                        <div className='logo-img'>
                        <img src="../../public/Assets/React_Logo_SVG 1.png" alt="" />
                    </div>
                    </div>
                </div>
            </div>
            </>

        );
     


    }
    
      
}

export default Admin;