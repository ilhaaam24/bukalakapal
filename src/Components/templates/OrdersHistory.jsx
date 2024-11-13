// src/components/pages/OrdersHistory.js

import TableHeader from "../atoms/TableHeader";
import TableRow from "../molecules/TableRow";

const OrdersHistory = () => {
  const orders = [
    { id: "#3456_768", date: "October 19, 2024", status: "Delivered", price: "$1234.00" },
    { id: "#3456_980", date: "October 19, 2024", status: "Delivered", price: "$345.00" },
    { id: "#3456_120", date: "October 19, 2024", status: "Delivered", price: "$2345.00" },
    { id: "#3456_030", date: "October 19, 2024", status: "Delivered", price: "$845.00" },
  ];

  return (
    <div className="px-[72px] w-3/4 flex flex-col gap-10">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-300">
            <TableHeader>Product</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Price</TableHeader>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <TableRow
              key={index}
              id={order.id}
              date={order.date}
              status={order.status}
              price={order.price}
              isWishlist={false} // No button in OrdersHistory
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersHistory;
