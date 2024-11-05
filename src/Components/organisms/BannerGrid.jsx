import CardProduct from "../molecules/CardProduct";

const BannerGrid = () => {
  return (
    <div className="w-full px-40 flex flex-wrap gap-6 h-[664px]">
      <CardProduct />
      <CardProduct />
      <CardProduct />
    </div>
  );
};

export default BannerGrid;
