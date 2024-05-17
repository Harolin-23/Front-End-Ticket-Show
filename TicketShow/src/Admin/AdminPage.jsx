import React, { useState, useEffect } from 'react';
import '../props/ErrorsLogin/errors.css'

import {text} from '../components/header/Header.jsx'
import {roleEject} from '../Api/UserApi/Verified/RoleVerified.jsx'

function Admin(){
    const [dataToken, setDataToken] = useState(null);

    useEffect(() => {
        const token = sessionStorage.getItem('sessionToken');
        setDataToken(token);
    }, []);


    







    if (!dataToken) {
             setTimeout(() => {
                window.location.href = "/"
                }, 2000);
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
            <div>
                <h1>Admin</h1>
            </div>
        );
     


    }
    
      
}

export default Admin;