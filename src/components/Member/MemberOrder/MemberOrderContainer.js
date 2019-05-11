import React from "react";
import { isAuthenticated } from "../../Repo/repoAPI";
import WelcomeHeader from "../Promotions/PromotionsContainer";
import LoginContainer from "../../MyLogin/LoginContainer";
import OrderList from "./OrderList";

export default class MemberOrderContainer extends React.Component {


  render() {

    const auth = isAuthenticated();
    if (auth) {
      return (
        <div>

          <WelcomeHeader/>

          <OrderList/>



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