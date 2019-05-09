const BASE_URL = 'http://35.228.53.104:3000';
const axios = require('axios');

export function isAuthenticated(){
  return localStorage.getItem('MyToken') && localStorage.getItem('MyTokenTime') > Date.now()
}

export function logout(){


    localStorage.removeItem('MyToken');
  localStorage.removeItem('currUser');

}

export function login(username,password){

  axios.post(`${BASE_URL}/users/login`,
    { usernameOrPassword: username, password: password })
    .then(response => {
      localStorage.setItem('MyToken',response.data.token);
      localStorage.setItem('MyTokenTime',
        Date.now() + 2 * 60 * 60 * 1000);
      localStorage.setItem('currUser',username);
      window.location = '/welcome';
      return response.data})
    .catch(err => Promise.reject('Authentication Failed!'));

}