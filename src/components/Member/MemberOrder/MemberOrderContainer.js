import React from "react";
import { isAuthenticated } from "../../Repo/repoAPI";
import { getOneOrder } from "../../Repo/repoAPI";
import WelcomeHeader from "../Promotions/PromotionsContainer";
import LoginContainer from "../../MyLogin/LoginContainer";
import OrderList from "./OrderList";
import NumericInput from "react-numeric-input";
export default class MemberOrderContainer extends React.Component {


  // The Design of "view detailed order" (single order with items) is temporary and will be improved before the presentation.
  constructor(props) {
    super(props);

    this.state = { value: 0 }; // Will probably store value in state later when the design has been improved

  }



  render() {

    const auth = isAuthenticated();
    if (auth) {
      return (
        <div>

          <WelcomeHeader/>

          <OrderList/>
          <br/>
          <NumericInput totalWidth={20}
                        totalHeight={50}
                        iconSize={25}
                        step={1}
                        onChange={value => getOneOrder(localStorage.getItem("currUser"), value)}

          />

          <div>
            <br/>


            <h10>{localStorage.getItem("orderDetails")}</h10>

          </div>
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