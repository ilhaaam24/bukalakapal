import Content from "../molecules/Content";

const Banner = () => {
  return (
    <div className=" flex ">
      <img src="/assets/images/banner/banner.jpg" alt="banner" className="w-1/2 object-cover" />
      <Content classname="pl-[72px] pr-40 w-1/2 " />
    </div>
  );
};

export default Banner;
