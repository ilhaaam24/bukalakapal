import Copyright from "../atoms/Copyright";
import Logo from "../atoms/Logo";
import NavLinkGroup from "../molecules/NavLinkGroup";
import SocialIcon from "../molecules/SocialIcon";

const Footer = () => {
  return (
    <div className="bg-black w-full px-40 pt-20 pb-8 flex flex-col gap-12">
      <div className="flex justify-between">
        <div className="flex gap-8 text-white items-center">
          <Logo classname="text-white" />
          <div className="w-[1px] h-5 bg-white"></div>
          <p className="text-sm font-inter">Sport Gear & Equipment Store</p>
        </div>
        <NavLinkGroup textColor="text-white"  />
      </div>
      <div className="flex gap-7 justify-between items-center py-4">
        <Copyright /> 
        <SocialIcon/>
      </div>
    </div>
  );
};
export default Footer;
