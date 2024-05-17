import axios from 'axios';




const URL = 'http://localhost:8080/api/v1';
export function authenticationRole(){
    console.log("Autenticando");

    dataToken = sessionStorage.getItem('sessionToken');
    if (!dataToken) {
        return;
    };
    EmailGetSolicitued = sessionStorage.getItem('EmailPetition');
    sendToken(dataToken);


}

const sendToken = async (token)=>{

    const TokenDescriptUrl = `path=${token}`;

    try{
        const response = await axios.post(`${URL + TokenDescriptUrl}/tokenVeried`, {token});
        const data = await response.json();
        roleEject(data);
    }catch(error){
        sessionStorage.removeItem('sessionToken')
        throw new Error(error.message || 'Token invalid');
    }
   
}


export function roleEject(role){
    return role;
}



