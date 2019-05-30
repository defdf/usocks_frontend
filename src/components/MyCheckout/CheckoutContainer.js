import { isAuthenticated } from "../Repo/repoAPI";

import HeaderNav from "../global/HeaderNav";
import React from 'react';
import WelcomeHeader from "../Member/WelcomeHeader";
export default class CheckoutContainer extends React.Component {


  render() {

    const auth = isAuthenticated();
    if (auth) {

      return (

        <div>

          <WelcomeHeader/>

          <h5>Thank you for your order, {localStorage.getItem("currUser")}<br/>A confirmation email has been sent to your email</h5>


        </div>










    )



    } else {
      return (
        <div>

        </div>
      );
    }
  }


}