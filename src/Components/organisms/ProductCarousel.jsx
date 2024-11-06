import CardProduct from "../molecules/CardProduct";
import Titles from "../molecules/Titles";

const ProductCarousel = () => {
  return (
    <div className="   flex flex-col px-40 py-12 gap-[42px]">
      <Titles />
      <div className=" w-full flex gap-6 border">
        <div className="flex flex-col gap-1">
          <CardProduct width="w-[262px]" height="h-[349px]" />
          <div>

          </div>
        </div>
      </div>
      <div>Pagination</div>
    </div>
  );
};

export default ProductCarousel;
