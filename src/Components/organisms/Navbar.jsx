import { useState } from "react";
import Logo from "../atoms/Logo";
import NavCart from "../molecules/NavCart";
import NavIconGroup from "../molecules/NavIconGroup";
import NavLinkGroup from "../molecules/NavLinkGroup";
import NavSearch from "../molecules/NavSearch";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-40 py-4">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          <NavLinkGroup />
        </div>

        {/* Desktop Right Section */}
        <div className="hidden lg:flex gap-4 justify-center items-center">
          <NavSearch />
          <NavIconGroup />
          <NavCart />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <NavSearch />
          <NavCart />
          <button onClick={toggleMenu} className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-4 sm:px-6 py-4 space-y-4">
            <NavLinkGroup />
            <div className="pt-4 border-t border-gray-200">
              <NavIconGroup />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
