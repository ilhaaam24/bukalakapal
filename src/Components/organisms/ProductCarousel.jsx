import Price from "../atoms/Price";
import Rating from "../atoms/Rating";
import TitleProduct from "../atoms/TitleProduct";
import CardData from "../molecules/CardData";
import CardProduct2 from "../molecules/CardProduct2";
import Titles from "../molecules/Titles";

const ProductCarousel = () => {
  return (
    <div className="   flex flex-col px-40 py-12 gap-[42px]">
      <Titles title="New Arrivals" link="More Products ->" />

      <div className=" w-full flex gap-6 ">
        {Array.from({ length: 5 }).map((_, index) => (
          <div className="flex flex-col gap-1" key={index}>
            <CardProduct2 />
            <CardData />
          </div>
        ))}
      </div>
      <div className="w-1/2 h-1 rounded-xl bg-black"></div>
    </div>
  );
};

export default ProductCarousel;
