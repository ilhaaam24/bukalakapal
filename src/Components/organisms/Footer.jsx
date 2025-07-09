import Copyright from "../atoms/Copyright";
import Logo from "../atoms/Logo";
import NavLinkGroup from "../molecules/NavLinkGroup";
import SocialIcon from "../molecules/SocialIcon";

const Footer = () => {
  return (
    <div className="bg-black w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-40 pt-10 sm:pt-16 md:pt-20 pb-6 sm:pb-8 flex flex-col gap-8 sm:gap-10 md:gap-12">
      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-0">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 text-white items-start sm:items-center">
          <Logo classname="text-white" />
          <div className="hidden sm:block w-[1px] h-5 bg-white"></div>
          <p className="text-xs sm:text-sm font-inter">Sport Gear & Equipment Store</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8">
          <NavLinkGroup textColor="text-white" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 justify-between items-start sm:items-center py-4 border-t border-gray-800">
        <Copyright />
        <SocialIcon />
      </div>
    </div>
  );
};
export default Footer;
