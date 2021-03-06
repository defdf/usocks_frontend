import React, { Component } from 'react';
import Form from '@bit/react-bootstrap.react-bootstrap.form';
import Button from '@bit/react-bootstrap.react-bootstrap.button';
import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';
import Home from "../Home/Home";
import HomeMainSection from "../Home/HomeMainSection"
import HomeHeader from "../Home/HomeHeader";
import repoAPI, { login } from "../Repo/repoAPI";


const axios = require('axios');
var isFinish = false;

class Loginform extends Component {





    constructor() {

        super()
        this.state = {
            LoginControls: {
                username: {
                    value: ''
                },

                password: {
                    value: ''
                }
            }
        }


        this.handleSubmit = this.handleSubmit.bind(this);
        isFinish = false;


    }



    handleSubmit(event) {


        event.preventDefault();







        var username = this.state.LoginControls.username.value;

        var password = this.state.LoginControls.password.value;







        login(username,password);











        isFinish = true;

/*
        axios.post(`http://35.228.53.104:3000/users/login`,
          { usernameOrPassword: username, password: password })
          .then(response => {
              localStorage.setItem('MyToken',response.data.token);
              localStorage.setItem('MyTokenTime',
                Date.now() + 2 * 60 * 60 * 1000);
              localStorage.setItem('currUser',username);
              window.location = '/';
              return response.data})
          .catch(err => Promise.reject('Authentication Failed!')); */

        //alert("Username: " +username.toString() +"-----Password: "+password);


        /*
        axios.get('http://35.228.53.104:3000/users/user1', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('MyToken')
            }
        })




*/






    }



    changeHandler = event => {

        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            LoginControls: {
                ...this.state.LoginControls,
                [name]: {
                    ...this.state.LoginControls[name],
                    value
                }
            }
        });
    }











    render() {



        if (!isFinish) {
            return (
              <div id = "loginBox">
                <form onSubmit={this.handleSubmit}>
                    Username
                    <input type="text"
                           name="username"
                           value={this.state.LoginControls.username.value}
                           onChange={this.changeHandler}
                    />

                    Password
                    <input type="password"
                           name="password"
                           value={this.state.LoginControls.password.value}
                           onChange={this.changeHandler}
                    />



                    <Button variant="primary" type="submit" id="loginButton">
                        Login

                    </Button>

                </form>
              </div>

            );
        }

    }


}

export default Loginform
