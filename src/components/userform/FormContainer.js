import React, { Component } from "react";

/* Import Components */
import CheckBox from "./Checkbox";
import Input from "./Input";
import TextArea from "./Textarea";
import Select from "./Select";
import Button from "./Button";

class FormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newUser: {
                username: "",
                email: "",
                gender: "",
                password: "",
                about: ""
            },

            genderOptions: ["Male", "Female", "Others"],
            skillOptions: ["Programming", "Development", "Design", "Testing"]
        };
        this.handleTextArea = this.handleTextArea.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    /* This lifecycle hook gets executed when the component mounts */

    handleUsername(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    username: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleEmail(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    email: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    [name]: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleTextArea(e) {
        console.log("Inside handleTextArea");
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    about: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handlePassword(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    password: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let userData = this.state.newUser;

        alert(userData);

        fetch("http://example.com", {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then(response => {
            response.json().then(data => {
                console.log("Successful" + data);
            });
        });
    }

    handleClearForm(e) {
        e.preventDefault();
        this.setState({
            newUser: {
                username: "",
                email: "",
                gender: "",
                password: "",
                about: ""
            }
        });
    }

    render() {
        return (
            <form className="container-fluid" onSubmit={this.handleFormSubmit}>
                <Input
                    inputType={"text"}
                    title={"Username"}
                    name={"name"}
                    value={this.state.newUser.username}
                    placeholder={"Enter your username"}
                    handleChange={this.handleInput}
                />{" "}
                {/* username */}
                <Input
                    inputType={"email"}
                    name={"email"}
                    title={"Email"}
                    value={this.state.newUser.email}
                    placeholder={"Enter your email"}
                    handleChange={this.handleInput()}
                />{" "}
                {/* Age */}
                <Select
                    title={"Gender"}
                    name={"gender"}
                    options={this.state.genderOptions}
                    value={this.state.newUser.gender}
                    placeholder={"Select Gender"}
                    handleChange={this.handleInput}
                />{" "}
                {/* Age Selection */}
                <Input
                    inputType={"password"}
                    name={"password"}
                    title={"Password"}
                    value={this.state.newUser.password}
                    placeholder={"Enter a password"}
                    handleChange={this.handlePassword}
                />{" "}
                {/* Skill */}
                <TextArea
                    title={"About you."}
                    rows={10}
                    value={this.state.newUser.about}
                    name={"currentPetInfo"}
                    handleChange={this.handleTextArea}
                    placeholder={"Describe your past experience and skills"}
                />
                {/* About you */}
                <Button
                    action={this.handleFormSubmit}
                    type={"primary"}
                    title={"Submit"}
                    style={buttonStyle}
                />{" "}
                {/*Submit */}
                <Button
                    action={this.handleClearForm}
                    type={"secondary"}
                    title={"Clear"}
                    style={buttonStyle}
                />{" "}
                {/* Clear the form */}
            </form>
        );
    }
}

const buttonStyle = {
    margin: "10px 10px 10px 10px"
};

export default FormContainer;
