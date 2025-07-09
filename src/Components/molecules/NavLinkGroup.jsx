import { useEffect, useState } from "react";
import LinkGroup from "./LinkGroup";
import { use } from "react";

const NavLinkGroup = ({ textColor = "text-[#6C7275]" }) => {
  const [isActive, setIsActive] = useState("Home"); // Default aktif di 'Home'

  useEffect(() => {
    if (window.location.pathname === "/") {
      setIsActive("Home");
    } else if (window.location.pathname === "/home/shop") {
      setIsActive("Shop");
    } else if (window.location.pathname === "/home/contact") {
      setIsActive("Contact Us");
    }
  }, []);

  return (
    <div className={`flex gap-10 font-inter text-sm ${textColor}`}>
      {[
        {
          name: "Home",
          to: "/",
        },
        {
          name: "Shop",
          to: "/shop",
        },
        {
          name: "Contact Us",
          to: "/contact",
        },
      ].map((menu) => (
        <LinkGroup
          key={menu.name}
          name={menu.name}
          to={menu.to}
          classname={
            isActive === menu.name
              ? "font-semibold text-black" // Jika aktif, bold dan hitam
              : "text-[#6C7275]" // Jika tidak aktif, abu-abu
          }
          // Memperbarui status aktif
        >
          {menu.name}
        </LinkGroup>
      ))}
    </div>
  );
};

export default NavLinkGroup;
