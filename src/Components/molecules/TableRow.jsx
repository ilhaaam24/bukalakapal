// src/components/molecules/TableRow.js

import Button from "../atoms/Button/Index";
import Image from "../atoms/Image";
import TableCell from "../atoms/TableCell";

const TableRow = ({ id, date, status, price, type }) => {
  return (
    <tr className="border-b border-gray-300 text-center">
      {/* Kondisi untuk tampilan berdasarkan tipe */}
      {type === "orderHistory" && (
        <>
          <TableCell className="w-1/4 text-center py-4">{id}</TableCell>
          {date && <TableCell className="w-1/4 text-center py-4">{date}</TableCell>}
          {status && <TableCell className="w-1/4 text-center py-4">{status}</TableCell>}
          <TableCell className="w-1/4 text-center py-4">{price}</TableCell>
        </>
      )}

      {type === "wishlist" && (
        <>
          <TableCell classname="flex gap-4 items-center  py-5">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.292893 0.831956C0.683417 0.441432 1.31658 0.441432 1.70711 0.831956L7 6.12485L12.2929 0.831956C12.6834 0.441431 13.3166 0.441431 13.7071 0.831956C14.0976 1.22248 14.0976 1.85565 13.7071 2.24617L8.41421 7.53906L13.7071 12.832C14.0976 13.2225 14.0976 13.8556 13.7071 14.2462C13.3166 14.6367 12.6834 14.6367 12.2929 14.2462L7 8.95328L1.70711 14.2462C1.31658 14.6367 0.683418 14.6367 0.292893 14.2462C-0.0976309 13.8556 -0.0976309 13.2225 0.292893 12.832L5.58579 7.53906L0.292893 2.24617C-0.0976311 1.85565 -0.0976311 1.22248 0.292893 0.831956Z"
                    fill="#6C7275"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-4">
                <Image image="/src/assets/images/blogs/blog1.jpg" classname="w-16 h-20 object-cover" />
                <div>
                  <h2 className="font-semibold font-inter text-base">Racket Lining</h2>
                  <p>$ 1,000</p>
                </div>
              </div>
          </TableCell>
          <TableCell classname="text-center">{price}</TableCell>
          <TableCell classname={"flex justify-center items-center "} >
            <button className="bg-black px-6 py-1 flex justify-center items-center rounded-lg text-white font-inter font-medium text-base leading-7">Add to Cart</button>
          </TableCell>
        </>
      )}
    </tr>
  );
};

export default TableRow;
