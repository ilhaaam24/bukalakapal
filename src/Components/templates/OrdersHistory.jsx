// OrdersHistory.js

import OrdersTable from "../organisms/OrdersTable";

const OrdersHistory = () => {
  const orders = [
    { id: "#3456_768", date: "October 19, 2024", status: "Delivered", price: "$1234.00" },
    { id: "#3456_980", date: "October 19, 2024", status: "Delivered", price: "$345.00" },
    { id: "#3456_120", date: "October 19, 2024", status: "Delivered", price: "$2345.00" },
    { id: "#3456_030", date: "October 19, 2024", status: "Delivered", price: "$845.00" },
  ];

  return (
    <div className="px-[72px] w-3/4 flex flex-col gap-10">
      <h2 className="font-semibold font-inter text-xl">Orders History</h2>
      <OrdersTable orders={orders} />
    </div>
  );
};

export default OrdersHistory;
