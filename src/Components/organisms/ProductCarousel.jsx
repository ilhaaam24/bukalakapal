import CardProduct2 from "../molecules/CardProduct2";
import Titles from "../molecules/Titles";

const ProductCarousel = () => {
  return (
    <div className="flex flex-col py-12 gap-[42px]">
      <Titles title="New Arrivals" link="More Products ->" />

      {/* Add a horizontal scroll container */}
      <div className="w-full flex overflow-x-auto gap-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <div className="flex flex-col gap-1" key={index}>
            <CardProduct2 />
          </div>
        ))}
      </div>
      <div className="w-1/2 h-1 rounded-xl bg-black"></div>
    </div>
  );
};

export default ProductCarousel;
