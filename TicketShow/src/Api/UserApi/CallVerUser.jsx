import axios from "axios";
import { errorParam } from "../../props/ErrorsLogin/ErrorsHandler.jsx";

const API_URL = "http://localhost:3000/api/v1/auth";

export const loginAutenticate = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response;
  } catch (error) {
    if (error.response && error.response.data) {
      const errorMessage = error.response.data.message;
      errorParam(errorMessage);
    } else {
      throw new Error(error.message || "Error registering.");
    }
  }
};

