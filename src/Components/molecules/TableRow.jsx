// TableRow.js

import TableCell from "../atoms/TableCell";

const TableRow = ({ id, date, status, price }) => (
  <tr className="border-b border-gray-300">
    <TableCell>{id}</TableCell>
    <TableCell>{date}</TableCell>
    <TableCell>{status}</TableCell>
    <TableCell>{price}</TableCell>
  </tr>
);

export default TableRow;
