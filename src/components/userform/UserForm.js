import React, { Component } from 'react';
import Form from '@bit/react-bootstrap.react-bootstrap.form';
import Button from '@bit/react-bootstrap.react-bootstrap.button';
import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';
import handleSubmit from "redux-form/es/handleSubmit";
import Axios from 'axios';


const axios = require('axios');

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


       // alert("Username: " +username.toString()+ "-----Email: " +email +"-----Password: "+password);





       // alert((this.state.email))
        event.preventDefault();




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

        /*
            handleSuccess(event){

                var username = this.state.username;
                var email = this.state.email;
                var password = this.state.password;


                alert("Username: " +username.toString()+ "-----Email: " +email +"-----Password: "+password);
            }

            */

        /*





         */ /*







    render() {
        return (
            <Form  onSubmit={this.handleSubmit} onChange={this.changeHandler}>



                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" value={this.state.formControls.username.value}    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Email" value={this.state.formControls.email.value}  />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={this.state.formControls.password.value} />
                </Form.Group>






                <Button variant="primary" type="submit">
                    Submit

                </Button>
            </Form>
        )
    }
}*/

    render() {
        return (
            <form  onSubmit={this.handleSubmit}>
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


                <Button variant="primary" type="submit">
                    Submit

                </Button>

            </form>
        );
    }

}

export default () => (<div><ReactBootstrapStyle /><UserForm /></div>)
