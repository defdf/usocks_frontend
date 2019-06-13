import axios from "axios";

const BASE_URL = "http://35.228.53.104:3000";

var config = {
  headers: { "Authorization": "bearer " + localStorage.getItem("MyToken") }
};

var token = "Bearer " + localStorage.getItem("MyToken");


// User releated functions


// get token and token time from Local storage. ( If token is non existing or if the time has expired user is not auth)
export function isAuthenticated() {
  return localStorage.getItem("MyToken") && localStorage.getItem("MyTokenTime") > Date.now();
}

export function logout() {


  localStorage.removeItem("MyToken");
  localStorage.removeItem("currUser");
  localStorage.removeItem("orderHistory");

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

export function createOrder(totalPrice, cart, items) {


  alert("in create order");
  alert(cart);


  for (var i = 0; i < items.length; i++) {
    alert("Price (items)" + i + ": " + items[i].unitPrice);
    alert("Quantity(items)" + i + ": " + items[i].qty);
    alert("ID(items)" + i + ": " + items[i].id);
    //Do something
  }


  let data = {
    dateTime: Date.now(),
    totalPrice: totalPrice,
    items: items
  };

  alert("totalPrice: " + totalPrice);
  let username = localStorage.getItem("currUser");


  /*
  let items=[];
  let cartSocksIds = Object.keys(cart);
  for(let i=0; i<cartSocksIds.length; i++){
    let sockId = cartSocksIds[i];
    let quantity = cart[sockId];

    alert(sockId);
    let item = {
      id: sockId,
      qty: quantity,
      unitPrice: 50
    };

    items.push(item);
  }
*/


  axios.post(`${BASE_URL}/user/` + username + "/order/",
    (data), config)
    .then(function(response) {
      console.log(response);
      alert("Response: " + response);
      window.location = "/myCheckout";
    })
    .catch(function(error) {
      console.log(error);
      alert("Something went wrong: " + error);
    });


}

export function getAllOrders(username) {

  return axios.get(`${BASE_URL}/user/` + username + `/order`, { headers: { "Authorization": token } })
    .then(response => response.data
    ).then(function(response) {
      localStorage.setItem("orderHistory", JSON.stringify(response));
    });


}

export function getOneOrder(username, orderId) {

  return axios.get(`${BASE_URL}/user/` + username + `/order/` + orderId, { headers: { "Authorization": token } })
    .then(response => response.data
    ).then(function(response) {
      localStorage.setItem("orderDetails", JSON.stringify(response));
    });
}


// Cart functions

export function getCartProducts(cart) {


  //alert(cart);


  return axios.post(`${BASE_URL}/sock/getWithPost/`, { cart })
    .then(response => response.data);


}




