import react from 'react'
import {useState} from 'react'

import './ModalAccount.css'

function ModalAccount(Checked){

    const [status,setStatus] = useState(false)

  return(
    <div className='accountModal'>
        <div className='textAccount'>
            <h1>{status? (<h1>Hola!<br></br> Nombre De usuario</h1>) : (<h1>Iniciar Sesion</h1>)}</h1>
        </div>
        <div className='container-account'>
            {status? (
                <div className='sesion-Block'>
                     <button>Sing Out</button>
                     <a href="">Tu informacion</a>
                  
                </div>
        ) : (
            <div className='sesion-Block'>
                    <button>Login</button>
                        <p>or</p>
                    <a href="">Registrer</a>
            </div>
        )   
            }
        </div>
        <p>Las cuentas estan protegidas por cifrado de datos</p>
    </div>
  )
}

export default ModalAccount;