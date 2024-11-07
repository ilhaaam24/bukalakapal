import Content from "../molecules/Content";

const Banner = () => {
  return (
    <div className="px-40 flex h-[532px]">
      <img src="/src/assets/images/banner/banner.jpg" alt="banner" />
      <Content classname="pl-[72px] pr-40" />
    </div>
  );
};

export default Banner;
