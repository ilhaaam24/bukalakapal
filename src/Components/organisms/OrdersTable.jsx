// OrdersTable.js

import TableHeader from "../atoms/TableHeader";
import TableRow from "../molecules/TableRow";

const OrdersTable = ({ orders }) => (
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
        <TableRow key={index} id={order.id} date={order.date} status={order.status} price={order.price} />
      ))}
    </tbody>
  </table>
);

export default OrdersTable;
