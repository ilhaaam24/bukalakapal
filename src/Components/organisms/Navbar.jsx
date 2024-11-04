import Logo from "../atoms/Logo";
import NavCart from "../molecules/NavCart";
import NavIconGroup from "../molecules/NavIconGroup";
import NavLinkGroup from "../molecules/NavLinkGroup";
import NavSearch from "../molecules/NavSearch";

const Navbar = () => {
  return (
    <div className="w-screen flex justify-between items-center px-40 py-4">
      <Logo />
      <NavLinkGroup />
      <div className="flex gap-4 justify-center items-center">
        <NavSearch />
        <NavIconGroup />
        <NavCart/>
      </div>
    </div>
  );
};

export default Navbar;
