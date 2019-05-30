
import axios from 'axios';
const BASE_URL = "http://35.228.53.104:3000";

var config = {
  headers: {'Authorization': "bearer " + localStorage.getItem('MyToken')}
};


// User releated functions


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


  return axios.get(`${BASE_URL}/sock/search/` + value)
    .then(response => response.data);

}

// Order calls

export function createOrder(totalPrice, cart) {

alert('in create order');





  let username = localStorage.getItem('currUser');

  let items=[];
  let cartSocksIds = Object.keys(cart);
  for(let i=0; i<cartSocksIds.length; i++){
    let sockId = cartSocksIds[i];
    let quantity = cart[sockId];
    let item = {
      id: sockId,
      qty: quantity,
      unitPrice: 50
    };

    items.push(item);
  }




  axios.post(`${BASE_URL}/user/` + username + "/order/",
    {

      dateTime:  Date.now(),

      totalPrice: totalPrice,
       items
    },config)
    .then(function(response) {
      console.log(response);
      //alert("Response: " + response);
      window.location = "/myCheckout";
    })
    .catch(function(error) {
      console.log(error);
      alert("Something went wrong: " + error);
    });


}

export function getAllOrders(username) {

  return axios.get(`${BASE_URL}/user/` + username + `/order`)
    .then(response => response.data);
}

export function getOneOrder(username, orderId) {

  return axios.get(`${BASE_URL}/user/` + username + `/order/` + orderId)
    .then(response => response.data);
}


// Cart functions

export function getCartProducts(cart) {


  //alert(cart);


  return axios.post(`${BASE_URL}/sock/getWithPost/`, {cart})
    .then(response => response.data);


}




