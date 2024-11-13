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
      <div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="py-2  text-left font-inter text-gray-600 text-sm font-normal">Number ID</th>
              <th className="py-2  text-left font-inter text-gray-600 text-sm font-normal">Dates</th>
              <th className="py-2  text-left font-inter text-gray-600 text-sm font-normal">Status</th>
              <th className="py-2  text-left font-inter text-gray-600 text-sm font-normal">Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-b border-gray-300 ">
                <td className="py-6  text-gray-800 font-inter text-base">{order.id}</td>
                <td className="py-6  text-gray-800 font-inter text-base">{order.date}</td>
                <td className="py-6  text-gray-800 font-inter text-base">{order.status}</td>
                <td className="py-6  text-gray-800 font-inter text-base">{order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersHistory;
