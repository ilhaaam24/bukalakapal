import LinkGroup from "../molecules/LinkGroup";

const Products = () => {
  return (
    <div className="px-40 pt-[60px] pb-24 flex gap-6">
      <div className=" w-1/4 flex flex-col gap-8">
        <h1 className="font-semibold font-inter text-xl">Filter</h1>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold font-inter text-base">CATEGORIES</h1>
          <div className="flex flex-col gap-3 font-semibold text-sm">
            <LinkGroup>Rackets</LinkGroup>
            <LinkGroup>Shoes</LinkGroup>
            <LinkGroup>Bags</LinkGroup>
            <LinkGroup>Apparel</LinkGroup>
            <LinkGroup>Accessories</LinkGroup>
            <LinkGroup>Clubs</LinkGroup>
            <LinkGroup>Tennis</LinkGroup>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold font-inter text-base">PRICE</h1>
          <div>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
      <div className=" flex-grow">grids</div>
    </div>
  );
};

export default Products;
