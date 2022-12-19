import axios from "axios";

const API_URL = "/api/users/";

//register user
const register = async (userData) => {
  const res = await axios.post(API_URL, userData);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }

  return res.data;
};

//logging out user & destoying token
const logout = () => {
  localStorage.removeItem("user");
};

export const authService = {
  register,
  logout,
};

export default authService;
