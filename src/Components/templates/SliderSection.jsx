import Carousel from "../organisms/Carousel/Carousel";

const SliderSection = () => {
  return (
    <div className="flex flex-col gap-8">
      <Carousel />
      <div className="px-40 flex gap-6">
        <div className="w-[643px]">
          <p className="font-medium text-[40px] font-poppins">
            Unleash Your Potential/ <br /> Gear Up for Success.
          </p>
        </div>
        <div className="flex justify-center items-center w-[453px]">
          <p className="font-inter text-base text-[#6C7275] ">
            <span className="font-inter font-semibold text-base text-black">Bukalakapal</span> is a Sport Gear & Equipment Store store based in Jember, Indonesia. Est since 2024.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
