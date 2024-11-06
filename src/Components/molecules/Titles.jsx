import LinkGroup from "./LinkGroup";

const Title = (props) => {
  return (
    <div className="flex justify-between items-end">
      <h1 className="font-poppins font-medium text-[40px] w-[149px] leading-[49px] ">New Arrivals</h1>
      <LinkGroup classname=" font-inter font-medium text-base border-b border-black h-7">More Products</LinkGroup>
    </div>
  );
};

export default Title;
