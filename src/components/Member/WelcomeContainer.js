import MobileNav from "../MyCategories/men/MenContainer";
import React from "react";
import { isAuthenticated } from "../Repo/repoAPI";
import LoginContainer from "../MyLogin/LoginContainer";
import HeaderNav from "../global/HeaderNav";
import WelcomeHeader from "./WelcomeHeader";

export default class WelcomeContainer extends React.Component {


  render() {

    const auth = isAuthenticated();
    if (auth) {
      return (
        <div>

          <WelcomeHeader/>
          <h2>Welcome, {localStorage.getItem("currUser")}</h2>


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