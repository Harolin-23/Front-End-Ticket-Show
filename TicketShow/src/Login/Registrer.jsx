import { text } from '../components/header/Header.jsx';
import { useState, useEffect } from 'react';
import React from 'react';
import './StylesLogin/Login.css';
import '../Css-Gen/global.css';
import { FooterApp } from '../components/footer/Footer.jsx';
import { RegisterAutenticate } from '../Api/UserApi/CallRegister.jsx';
import '../props/ErrorsLogin/errors.css';
import { Modal } from '../components/Modal/modalErrors.jsx';

export function RegisterPage() {




    const [ErrAlert, setErrAlert] = useState('');
    const [Password, setPassword] = useState('');
    const [PasswordConf, setPasswordConf] = useState('');
    const [email, setEmail] = useState('');
    const [UserName, setUsername] = useState('');
    const [showLoader, setShowLoader] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleRegister = async (event) => {
        event.preventDefault();

        if (Password === '' || email === '' || UserName === '') {
            activeModal("Please enter the data");
            return;
        } else if (PasswordConf !== Password) {
            activeModal('The passwords do not match');
            return;
        }

        //En esta parte de manejo de error me quede trabado por todo un dia y con dolor de cabeza
        //estuvo dificil que el mensaje no llegara atrasado del local storage pero se pudo

        await RegisterAutenticate(email, Password, UserName);

        setTimeout(() => {
            const errValue = localStorage.getItem("error");
            if (errValue) {
                setErrAlert(errValue);
                activeModal(errValue);
            } else {
                setErrAlert('');
                window.location.href = '/Login';
            }
            localStorage.removeItem("error");
        }, 500);
    };



    
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

    return (
        <>
            <div className='titule-Login'>
                <a href="/" className='logo'>{text.Text}<b className="RS-Logo">{text.bold}</b>{text.textlag}</a>
            </div>

            <Modal show={showModal} message={modalMessage} onClose={closeModal} />

            <div className='ContainerSesion'>
                <div className='formulario-container'>
                    <div className='text-section-loging registerSection-text'>
                        <h3>Register</h3>
                    </div>
                    <div className='information-sec registerInfo-sec'>
                        <p><i className="fa-solid fa-lock"></i>Data Encryption.</p>
                    </div>
                    <form onSubmit={handleRegister} className='formRegister'>
                        <input type="text" value={UserName} onChange={(event) => setUsername(event.target.value)} placeholder='User Name' />
                        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Correo Electronico' />
                        <input type="password" value={Password} onChange={(event) => setPassword(event.target.value)} placeholder='Contraseña' />
                        <input type="password" value={PasswordConf} onChange={(event) => setPasswordConf(event.target.value)} placeholder='Confirm Password' />


                        <div className='met-Links'>
                            <p>You have a account?</p>
                            <a href="/Login">Login</a>

                            <button type='submit' className='btn-Register' onClick={chargeEventLoader}>Register</button>
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
                    <div className='dec-line '></div>
                </div>
            </div>
            <div className='sep registerLine'></div>
            <FooterApp />
        </>
    );
}

export default RegisterPage;
