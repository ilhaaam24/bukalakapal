import LinkGroup from "./LinkGroup";

const Content = (props) => {
  const { classname } = props;
  return (
    <div className={` flex flex-col gap-6 justify-center items-start  ${classname}`}>
      <div className="w-[452px] flex flex-col gap-4">
        <p className="font-bold font-inter text-base text-[#377DFF]">SALE UP TO 50% OFF</p>
        <h1 className="text-[40px] font-poppins font-medium leading-10 tracking-tighter">
          HUNDREDS of <br /> New lower prices!
        </h1>
        <p>Upgrade Your Sports Gear: Transform your athletic experience affordably with our stylish and high-quality sports products. Elevate your game without breaking the bank!</p>
      </div>
      <LinkGroup classname="border-b border-black">Shop Now</LinkGroup>
    </div>
  );
};

export default Content;
