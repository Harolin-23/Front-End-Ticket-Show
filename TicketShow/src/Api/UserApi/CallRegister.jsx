import axios from 'axios';
import {errorsMesage} from '../../props/ErrorsLogin/ErrosHandler.jsx'

const API_URL = 'http://localhost:3000/api/v1/auth';


export const RegisterAutenticate = async (email, password, username) => {
  try {
      const response = await axios.post(`${API_URL}/register`, { email, password, username });
      return response;
  } catch (error) {
      if (error.response && error.response.data) {
          const errorMessage = error.response.data.message;
          errorsMesage(errorMessage);
      } else {
         
          console.error('Error al registrar:', error.message);
          throw new Error(error.message || 'Error al registrar');
      }
  }
};


