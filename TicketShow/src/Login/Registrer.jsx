import {text} from '../components/header/Header.jsx'
import {useState} from 'react'
import React from 'react';

import './StylesLogin/Login.css'
import '../Css-Gen/global.css'
import {FooterApp} from '../components/footer/Footer.jsx'

import { RegisterAutenticate} from '../Api/UserApi/CallRegister.jsx'
import '../props/ErrorsLogin/errors.css'



function RegistrerPage(){
    const [Password, setPassword] = useState('');
    const [PasswordConf,setPasswordConf] = useState('');
    const [email, setEmail] = useState('');
    const [UserName,setUsername] = useState('');

    const [showMessage, setShowMessage] = useState(false);




    const handleRegister = (event) => {
        event.preventDefault();
    

        if (Password === '' || email === '' || UserName === '') {
          alert('Datos vacios(Modal)');
          return;
        }
        if(PasswordConf != Password){
            alert('las contraseñas no coinciden');
            return;
        }
        RegisterAutenticate(email, Password,UserName);
    }

    const chargeEvent = () => {
      
        setShowMessage(true);


        setTimeout(() => {
            setShowMessage(false);
        }, 3000);
    };

   



    return(
        <>
        <div className='titule-Login'>
            <a href="/" className='logo'>{text.Text}<b className="RS-Logo">{text.bold}</b>{text.textlag}</a>

            
        </div>
        <div className='ContainerSesion'>
            <div className='formulario-container'>
                <div className='text-section-loging registerSection-text'>
                    <h3>Register</h3>
                </div>
                <div className='information-sec registerInfo-sec'>
                    <p><i class="fa-solid fa-lock"></i>Cifrado de Datos </p>
                </div>
                <form onSubmit={handleRegister} className='formRegister'>
                    
                <input type="text" value={UserName} onChange={(event) => setUsername(event.target.value)} placeholder='User Name'/>
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Correo Electronico'/>
                <input type="password" value={Password} onChange={(event) => setPassword(event.target.value)} placeholder='Contraseña'/>
                <input type="password" value={PasswordConf} onChange={(event) => setPasswordConf(event.target.value)} placeholder='Confirm Password'/>

                    <div className='met-Links'>
                    <p>you have a account?</p>
                    <a href="/Login">Login</a>

                    <button type='submit' className='btn-Register' onClick={chargeEvent}>Registrar</button>
                    {showMessage  && <div className='authMesage'><i class="fa-solid fa-network-wired"></i></div>}

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
    )
    
}

export default RegistrerPage;