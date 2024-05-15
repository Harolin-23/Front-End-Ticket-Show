import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/auth';

export const RegisterAutenticate = async (email, password, username) => {
    try {
      const response = await axios.post(`${API_URL}/register`, { email, password, username });
      return response;
    } catch (error) {
      throw new Error(error.message || 'Registration error');
    }
  };