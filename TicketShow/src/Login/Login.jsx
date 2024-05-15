import {text} from '../components/header/Header.jsx'
import {useState} from 'react'
import React from 'react';

import './StylesLogin/Login.css'
import '../Css-Gen/global.css'
import {FooterApp} from '../components/footer/Footer.jsx'


//iMPORTANTE esta es la importacion de la funcion que hace fech a la api para loguear
import { loginAutenticate} from '../Api/UserApi/CallVerUser.jsx'



function LoginPage(){

    const [Password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    

        if (setPassword === '' || email === '') {
          alert('Datos vacios(Modal)');
          return;
        }
        loginAutenticate(email, Password)
    }

    return(
        <>
        <div className='titule-Login'>
            <a href="/" className='logo'>{text.Text}<b className="RS-Logo">{text.bold}</b>{text.textlag}</a>

            
        </div>
        <div className='ContainerSesion'>
            <div className='formulario-container'>
                <div className='text-section-loging'>
                    <h3>Login</h3>
                </div>
                <div className='information-sec'>
                    <p><i class="fa-solid fa-lock"></i>Cifrado de Datos </p>
                </div>
                <form onSubmit={handleSubmit}>
                    
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Correo Electronico'/>
                <input type="password" value={Password} onChange={(event) => setPassword(event.target.value)} placeholder='Contraseña'/>
                    
                    <div className='met-Links'>
                    <p>Dont't have a account?</p>
                    <a href="/Registrer">Registrer</a>

                    <button type='submit'>Ingresar</button>

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