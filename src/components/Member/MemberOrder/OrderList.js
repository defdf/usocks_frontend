import React from "react";
import { TablePlain } from "@dccs/react-table-plain";
import { getAllOrders } from "../../Repo/repoAPI";


var orderData;

export default class OrderList extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      orders: []
    }
  }


  componentDidMount() {
   getAllOrders(localStorage.getItem('currUser')).then((orders) =>this.setState({ orders: [] }));

    orderData = JSON.parse(localStorage.getItem("orderHistory"));


  }




  



  render() {



    return (




      <TablePlain
        data={orderData}
        colDef={[
          {
            prop: "id",
            header: "Order_ID"
          },
          {
            prop: "dateTime",
            header: "Order_Date",
            sortable: true
          },
          {
            prop: "totalPrice",
            header: "Total Price"
          },
          {
            prop: "user_username",
            header: "Order_Status"
          }
        ]}


      />



    );
  }}













