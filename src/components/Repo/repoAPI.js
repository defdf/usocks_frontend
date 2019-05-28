const BASE_URL = "http://35.228.53.104:3000";
const axios = require("axios");


// get token and token time from Local storage. ( If token is non existing or if the time has expired user is not auth)
export function isAuthenticated() {
  return localStorage.getItem("MyToken") && localStorage.getItem("MyTokenTime") > Date.now();
}

export function logout() {


  localStorage.removeItem("MyToken");
  localStorage.removeItem("currUser");

}


export function login(username, password) {

  axios.post(`${BASE_URL}/user/login`,
    { usernameOrEmail: username, password: password })
    .then(response => {
      localStorage.setItem("MyToken", response.data.token);
      localStorage.setItem("MyTokenTime",
        Date.now() + 2 * 60 * 60 * 1000);
      localStorage.setItem("currUser", username);
      window.location = "/welcome";
      return response.data;
    })
    .catch(err => Promise.reject("Authentication Failed!"));

}

export function registerUser(username, email, firstName, lastName, password) {

  axios.post(`${BASE_URL}/user`,
    {

      username: username,
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password
    })
    .then(function(response) {
      console.log(response);
      alert("Response: " + response);
    })
    .catch(function(error) {
      console.log(error);
      alert("Error: " + error);
    });


}

// Product calls

export function getProducts() {
  return axios.get(`${BASE_URL}/sock`)
    .then(response => response.data);
}

export function getProducts_WOMEN() {
  return axios.get(`${BASE_URL}/sock/category/women`)
    .then(response => response.data);
}

export function getProducts_MEN() {
  return axios.get(`${BASE_URL}/sock/category/men`)
    .then(response => response.data);
}

export function getProducts_KID() {
  return axios.get(`${BASE_URL}/sock/category/kids`)
    .then(response => response.data);
}

export function getProducts_GIFT() {
  return axios.get(`${BASE_URL}/sock/category/gifts`)
    .then(response => response.data);
}

// Search function

export function searchItem(value) {


  return axios.get(`${BASE_URL}/sock/search/`+value)
    .then(response => response.data);

}


