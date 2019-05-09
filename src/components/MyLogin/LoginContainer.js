import React from "react";

import Loginform from "./Loginform";

import HeaderNav from "../global/HeaderNav";



export default class LoginContainer extends React.Component {
  render() {

    return (
      <div>
        <HeaderNav/>


        <Loginform/>

      </div>
    );


  }
}

