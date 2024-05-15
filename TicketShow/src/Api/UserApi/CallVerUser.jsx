import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/auth';

export const loginAutenticate = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response
  } catch (error) {
    throw new Error(error.message || 'Login error');
  }
};