import React from "react";
import { isAuthenticated } from "../../Repo/repoAPI";
import WelcomeHeader from "../Promotions/PromotionsContainer";
import LoginContainer from "../../MyLogin/LoginContainer";

export default class AccountContainer extends React.Component {


  render() {

    const auth = isAuthenticated();
    if (auth) {
      return (
        <div>

          <WelcomeHeader/>




        </div>
      );
    } else {
      return (
        <div>
          <LoginContainer/>
        </div>
      );
    }
  }


}