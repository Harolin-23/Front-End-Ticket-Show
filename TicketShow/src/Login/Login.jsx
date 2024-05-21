import {text} from '../components/header/Header.jsx'
import {useState} from 'react'
import React from 'react';

import './StylesLogin/Login.css'
import '../Css-Gen/global.css'
import '../props/ErrorsLogin/errors.css';
import {FooterApp} from '../components/footer/Footer.jsx'

import { Modal } from '../components/Modal/modalErrors.jsx';
//iMPORTANTE esta es la importacion de la funcion que hace fech a la api para loguear
import { loginAutenticate} from '../Api/UserApi/CallVerUser.jsx'
import {authenticationRole} from '../Api/UserApi/Verified/RoleVerified.jsx'
import {errorParam} from '../props/ErrorsLogin/ErrorsHandler.jsx'

export const redirectRole = async(rol)=>{
    if(rol =='admin'){
        window.location.href = "/ADMIN"
    }else{
        window.location.href = "/"
    }
}


function LoginPage(){

    const [ErrAlert, setErrAlert] = useState('');
    const [showLoader, setShowLoader] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const [Password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
    

        if (setPassword === '' || email === '') {
            activeModal("help send to data");
          return;
        }else if(Password.length < 8){
            activeModal("Only 8 digits are accepted");
        }

        await loginAutenticate(email, Password);
        try{
            const response = await loginAutenticate(email, Password);

            const token = response.data.data.token;   
            const emailPetition =  response.data.data.email;
                     sessionStorage.setItem('sessionToken', token);
                     sessionStorage.setItem('EmailPetition', emailPetition);
                     authenticationRole();
        }catch(e){
            setTimeout(() => {
                const errValue = localStorage.getItem("error");
                if (errValue) {
                    setErrAlert(errValue);
                    activeModal(errValue);
                } else {
                    setErrAlert('');
                }
                localStorage.removeItem("error");
            }, 500);
        };

        }


    const chargeEventLoader = () => {
        setShowLoader(true);
        setTimeout(() => {
            setShowLoader(false);
        }, 1500);
    };

    const showMessage = (message) => {
        setModalMessage(message);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalMessage('');
    };

    const activeModal = (message) => {
        showMessage(message);
        setTimeout(() => {
            closeModal();
        }, 3000); 
    };
    return(
        <>
        <div className='titule-Login'>
            <a href="/" className='logo desclog'>{text.Text}<b className="RS-Logo">{text.bold}</b>{text.textlag}</a>
        </div>
        <Modal show={showModal} message={modalMessage} onClose={closeModal} />
        <div className='ContainerSesion'>
            <div className='formulario-container'>
                <div className='text-section-loging'>
                    <h3>Login</h3>
                </div>
                <div className='information-sec'>
                    <p><i class="fa-solid fa-lock"></i>Data Encryption</p>
                </div>
                <form onSubmit={handleSubmit}>
                    
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Correo Electronico'/>
                <input type="password" value={Password} onChange={(event) => setPassword(event.target.value)} placeholder='Contraseña'/>
                    
                    <div className='met-Links'>
                    <p>Dont't have a account?</p>
                    <a href="/Registrer">Registrer</a>

                    <button type='submit' onClick={chargeEventLoader}>Log In</button>
                    {showLoader && <div className='authMesage'><i className="fa-solid fa-network-wired"></i></div>}
                    </div>
                </form>
            </div>
            <div className='Deco-section'>

                <div className='cont-dec'>
                    <div className='image'>
                        <img src="../../public/Assets/andres.png" alt="" />
                    </div>
                </div>
                <div className='dec-line'></div>

            </div>
        </div>
        <div className='sep'></div>

        <FooterApp />
        </>
    )
}

export default LoginPage;