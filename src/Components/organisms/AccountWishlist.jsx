// src/components/pages/Wishlist.js

import TableHeader from "../atoms/TableHeader";
import TableRow from "../molecules/TableRow";

const AccountWishlist = () => {
  const orders = [
    { id: "#3456_768",name: "SAGA II SE", date: "October 19, 2024", status: "Delivered", price: "$1234.00" },
    { id: "#3456_980", name: "SAGA II SE", date: "October 19, 2024", status: "Delivered", price: "$345.00" },
    { id: "#3456_120", name: "SAGA II SE", date: "October 19, 2024", status: "Delivered", price: "$2345.00" },
    { id: "#3456_030", name: "SAGA II SE", date: "October 19, 2024", status: "Delivered", price: "$845.00" },
  ];

  return (
    <div className="px-[72px]  flex flex-col gap-10 ">
      <table className="w-full table-auto  border-collapse ">
        <thead>
          <tr className="border-b  border-gray-300">
            <TableHeader>Product</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Action</TableHeader>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <TableRow
              key={index}
              id={order.id}
              price={order.price}
              isWishlist={true} // Passing true to show the button
              type="wishlist"
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountWishlist;
