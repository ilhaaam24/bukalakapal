import { useState } from "react";
import LinkGroup from "../molecules/LinkGroup";

const AccountMenus = () => {
  const [activeMenu, setActiveMenu] = useState("Account");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="px-4  py-10 h-fit bg-[#F3F5F7] flex flex-col gap-10">
      <div className="w-full flex flex-col items-center gap-2 relative">
        <div className="relative flex justify-center">
          <img src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg?crop=1xw:1.0xh;center,top&resize=1200:*" alt="" className="w-1/2 h-1/2 rounded-full" />
          <div className="absolute bottom-2 right-16 border-2 bg-[#141718] p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 14" fill="none">
              <path d="..." fill="#FEFEFE" />
            </svg>
          </div>
        </div>
        <h2 className="font-semibold font-inter text-xl">Elon Musk</h2>
      </div>
      <div className="flex flex-col gap-3">
        {[
          { name: "Account", to: "/account" },
          { name: "Address", to: "/account/addresses" },
          { name: "Orders", to: "/account/orders" },
          { name: "Wishlist", to: "/account/wishlist" },
          { name: "Log Out", to: "/logout" },
        ].map((menu) => (
          <LinkGroup
            key={menu.name}
            to={menu.to}
            classname={`py-2 font-inter text-base  ${activeMenu === menu.name ? "border-black font-bold text-black border-b-2" : "font-semibold text-[#6C7275] "}`}
            onClick={() => handleMenuClick(menu.name)}>
            {menu.name}
          </LinkGroup>
        ))}
      </div>
    </div>
  );
};

export default AccountMenus;
