import BASE_URL from "../config";
import axios from "axios";
export const toogleThemeApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/theme/themetoggle`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
