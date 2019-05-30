import React from "react";
import { TablePlain } from "@dccs/react-table-plain";
import { getAllOrders } from "../../Repo/repoAPI";

export default class OrderList extends React.Component{


  componentWillMount() {



    getAllOrders(localStorage.getItem('currUser')).then((orders) => {







      for (var i = 0; i < orders.length; i++) {



      



      }



    });


  }




  render() {
  return (
    <TablePlain
      data={[
        { id: 1, date: "24/3 2019" ,sum:"40€",status: "Delivered" },
        { id: 2, date: "26/4 2019",sum:"80€",status: "Delivered" },
        { id: 3, date: "3/5 2019" ,sum:"90€",status: "Sent from store"}
      ]}
      colDef={[
        {
          prop: "id",
          header: "Order_ID"
        },
        {
          prop: "date",
          header: "Order_Date",
          sortable: true
        },
        {
          prop: "sum",
          header: "Price"
        },
        {
          prop: "status",
          header: "Order_Status"
        }
      ]}
    />
  );
}}