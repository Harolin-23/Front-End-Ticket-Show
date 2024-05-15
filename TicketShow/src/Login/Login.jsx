import {text} from '../components/header/Header.jsx'

import './StylesLogin/Login.css'


function LoginPage(){

    return(
        <div className='titule-Login'>
            <a href="/" className='logo'>{text.Text}<b className="RS-Logo">{text.bold}</b>{text.textlag}</a>
        </div>

    )
}

export default LoginPage;