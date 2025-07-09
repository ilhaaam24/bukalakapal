import LinkGroup from "../molecules/LinkGroup";

const ShopHeader = () => {
  return (
    <div className="relative flex justify-center items-center">
      <img src="/assets/images/carousel/banner1.jpg" alt="" className="h-48 sm:h-64 md:h-80 lg:h-[400px] w-full object-cover" />
      <div className="absolute text-white text-center px-4 sm:px-6 md:px-8">
        <LinkGroup classname="border-b border-white text-sm sm:text-base">Home </LinkGroup>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[54px] font-medium font-poppins mt-2 sm:mt-4">Shop Page</p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-inter text-[#E8ECEF] opacity-75 mt-2 sm:mt-4">Performance Starts Here.</p>
      </div>
    </div>
  );
};

export default ShopHeader;
