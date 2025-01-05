// OrdersTable.js

import TableHeader from "../atoms/TableHeader";
import TableRow from "../molecules/TableRow";

const AccountOrders = () => {
  
  const orders = [
    { id: "#3456_768", date: "October 19, 2024", status: "Delivered", price: "$1234.00" },
    { id: "#3456_980", date: "October 19, 2024", status: "Delivered", price: "$345.00" },
    { id: "#3456_120", date: "October 19, 2024", status: "Delivered", price: "$2345.00" },
    { id: "#3456_030", date: "October 19, 2024", status: "Delivered", price: "$845.00" },
  ];
  
  
  return(
  <table className="w-full border-collapse">
    <thead>
      <tr className="border-b border-gray-300">
        <TableHeader>Number ID</TableHeader>
        <TableHeader>Dates</TableHeader>
        <TableHeader>Status</TableHeader>
        <TableHeader>Price</TableHeader>
      </tr>
    </thead>
    <tbody>
      {orders.map((order, index) => (
        <TableRow key={index} id={order.id} date={order.date} status={order.status} price={order.price} type={"orderHistory"} />
      ))}
    </tbody>
  </table>
);
}

export default AccountOrders;
