// src/components/molecules/TableRow.js

import Button from "../atoms/Button/Index";
import TableCell from "../atoms/TableCell";

const TableRow = ({ id, date, status, price, isWishlist }) => {
  return (
    <tr className="border-b border-gray-300">
      <TableCell className="w-1/4 text-center py-4">{id}</TableCell>
      {date && <TableCell className="w-1/4 text-center py-4">{date}</TableCell>}
      {status && <TableCell className="w-1/4 text-center py-4">{status}</TableCell>}
      <TableCell className="w-1/4 text-center py-4">{price}</TableCell>
      {isWishlist && (
        <TableCell className="w-6 text-left py-4">
          <button className="bg-black  h-[48px] px-6 py-2 flex justify-center items-center rounded-lg text-white font-inter font-medium text-base leading-7">Add to Cart</button>
        </TableCell>
      )}
    </tr>
  );
};

export default TableRow;
