import axios from "axios";
import BASE_URL from "../config";

export const registerUser = (email, name, password) => {
  try {
    const response = axios.post(`${BASE_URL}/register`, {
      email,
      name,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message);
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Login failed");
  }
};
