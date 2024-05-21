import axios from 'axios';

import{redirectRole} from '../../../Login/Login'


const URL = 'http://localhost:8080/api/v1';

export function authenticationRole(){
    console.log("ejecundo")

    let dataToken = sessionStorage.getItem('sessionToken');

    console.log(dataToken)

    fetchPayload(dataToken);
 
    //EmailGetSolicitued = sessionStorage.getItem('EmailPetition');
    console.log("enviando")
    


}


export const fetchPayload = async (token) => {



    console.log("enviando el token")
    const urlSend = 'http://localhost:8080/api/v1/auth/payload';
  
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
        'Authorization': `Bearer ${token}`
      }
    };
  
    try {
      const response = await fetch(urlSend, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json(); 
      localStorage.setItem("status", data.email)
      console.log(data.role)
      redirectRole(data.role)
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };
























// export const RegisterAutenticate = async (email, password, username) => {
//     try {
//       const response = await axios.post.(`${API_URL}/register`, {
//         email,
//         password,
//         username,
//       });
  
  
//       return response;
//     } catch (error) {
//       if (error.response && error.response.data) {
//         const errorMessage = error.response.data.message;
//         errorParam(errorMessage);
//       } else {
//         throw new Error(error.message || "Error al registrar");
//       }
//     }
//   };





// /admin/payload:        method: 'POST',
// headers: {
//     'Content-Type': 'text/plain',
//     'Authorization': Bearer ${token}
//         },



export function roleEject(role){
    return role;
}