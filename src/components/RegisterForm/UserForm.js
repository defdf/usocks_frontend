import React, { Component } from 'react';
import Form from '@bit/react-bootstrap.react-bootstrap.form';
import Button from '@bit/react-bootstrap.react-bootstrap.button';
import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';
import handleSubmit from "redux-form/es/handleSubmit";
import Axios from 'axios';
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import HomeMainSection from "../Home/HomeMainSection";
import HeaderNav from "../global/HeaderNav";


const axios = require('axios');
var isFinish = false;

class UserForm extends Component {



/*

    constructor(props) {
        super(props)
        this.state = {
            formControls: {
                username: {
                    value: ''
                },
                email: {
                    value: ''
                },
                password: {
                    value: ''
                }
            }
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);




    }

*/

    constructor() {

        super()
        this.state = {
            formControls: {
                username: {
                    value: ''
                },
                email: {
                    value: ''
                },
                password: {
                    value: ''
                }
            }
        }


        this.handleSubmit = this.handleSubmit.bind(this);


    }



    handleSubmit(event) {










       var username = this.state.formControls.username.value;
       var email = this.state.formControls.email.value;
       var password = this.state.formControls.password.value;





        axios.post('http://35.228.53.104:3000/users', {
            username: username,
            email: email,
            password: password
        })
            .then(function (response) {
                console.log(response);
                alert("Response: " +response)
            })
            .catch(function (error) {
                console.log(error);
                alert("Error: " +error)
            });









/*
        fetch('http://35.228.53.104:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        }) */


        isFinish = true;



       // alert("Username: " +username.toString()+ "-----Email: " +email +"-----Password: "+password);





       // alert((this.state.email))
        event.preventDefault();


        this.render();



    }



    changeHandler = event => {

        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            formControls: {
                ...this.state.formControls,
                [name]: {
                    ...this.state.formControls[name],
                    value
                }
            }
        });
    }











    render() {


            return (


              <div id = "registerBox">
                <form onSubmit={this.handleSubmit}>
                    Username
                    <input type="text"
                           name="username"
                           value={this.state.formControls.username.value}
                           onChange={this.changeHandler}
                    />

                    Email

                    <input type="email"
                           name="email"
                           value={this.state.formControls.email.value}
                           onChange={this.changeHandler}
                    />


                    Password
                    <input type="password"
                           name="password"
                           value={this.state.formControls.password.value}
                           onChange={this.changeHandler}
                    />



                    <Button variant="primary" type="submit" id="RegisterButton">
                        Register

                    </Button>

                </form>
              </div>


            );
        }


}

export default UserForm
