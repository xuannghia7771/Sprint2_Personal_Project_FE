import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/auth/";

const register = (userName, email, password) => {
  return axios.post(API_URL + "signup", {
    userName,
    email,
    password,
  });
};

const login = (userName, password) => {
  return axios
      .post(API_URL + "signin", {
        userName,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;