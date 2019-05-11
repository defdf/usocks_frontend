import React from "react";
import { isAuthenticated } from "../../Repo/repoAPI";
import WelcomeHeader from "../WelcomeContainer";
import LoginContainer from "../../MyLogin/LoginContainer";


export default class PromotionsContainer extends React.Component {


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