import axios from "axios";
import { baseUrl, baseUrlOne } from "./actionHelper";

const token = localStorage.getItem("authToken")

export const instance = axios.create({
    baseURL: baseUrl,
    timeout: 1000,
    // headers: {'Authorization': 'Bearer '+ token}
  });
  

  instance.interceptors.request.use(
    config => {
      // Do something before request is sent
  
      if(token){
        config.headers["Authorization"] = "bearer " + token;
      }
      if (!token) {
        if (!window.location.href.includes('login')) {
            window.location.href = baseUrlOne;
        }
    }
      return config;
    },
    error => {
      Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
);

const errorHandler = (error) => {
  if (error.response.status === 401 || error.response.status, error.response.data.message === 'Token Hase Been Expired') {
      localStorage.removeItem('authToken');
      localStorage.removeItem("userInfo");
      window.location.href = baseUrlOne + 'login';
  } else {
      return Promise.reject({ ...error })
  }
};
const successHandler = (response) => {
  return response;
};