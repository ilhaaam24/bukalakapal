import LinkGroup from "../molecules/LinkGroup";

const ShopHeader = () => {
  return (
    <div className="px-40 flex justify-center items-center">
      <img src="/src/assets/images/carousel/banner1.jpg" alt="" className="" />
      <div className="absolute text-white text-center">
        <LinkGroup classname="border-b border-white">Home</LinkGroup>
        <p className="text-[54px] font-medium font-poppins">Shop Page</p>
        <p className="text-xl font-inter text-[#E8ECEF] opacity-75">Performance Starts Here.</p>
      </div>
    </div>
  );
};

export default ShopHeader;
