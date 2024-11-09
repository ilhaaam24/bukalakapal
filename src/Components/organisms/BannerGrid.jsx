import CardProduct from "../molecules/CardProduct";
import productsData from "../../data/products.Data";

const BannerGrid = () => {
  const { rackets, shoes, bags } = productsData;

  return (
    <div className="w-full px-40  flex  gap-6 h-[664px] ">
      <CardProduct image={rackets[0].image}>Rackets</CardProduct>
      <div className="flex flex-col gap-6">
        <CardProduct  position="justify-start" image={shoes[0].image}>
          Shoes
        </CardProduct>
        <CardProduct  position="justify-start" image={bags[0].image}>
          Bags
        </CardProduct>
      </div>
    </div>
  );
};

export default BannerGrid;
