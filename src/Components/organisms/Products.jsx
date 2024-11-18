import CardProduct2 from "../molecules/CardProduct2";
import FilterIcon from "../molecules/FilterIcon";
import LinkGroup from "../molecules/LinkGroup";
import PriceFilter from "../molecules/PriceFilter";
import SortIcon from "../molecules/SortICon";

const CategoryFilter = () => (
  <div className="flex flex-col gap-4">
    <h2 className="font-semibold font-inter text-base">CATEGORIES</h2>
    <div className="flex flex-col gap-3 font-semibold text-sm text-[#6C7275]">
      {["Rackets", "Shoes", "Bags", "Apparel", "Accessories", "Clubs", "Tennis"].map((category) => (
        <LinkGroup key={category}>{category}</LinkGroup>
      ))}
    </div>
  </div>
);

const PriceFilterSection = () => (
  <div className="flex flex-col gap-4">
    <h2 className="font-semibold font-inter text-base">PRICE</h2>
    <div className="flex flex-col gap-2 font-semibold text-sm text-[#6C7275]">
      {["All Prices", "$0.00 - 99.99", "$100.00 - 199.99", "$200.00 - 299.99", "$300.00 - 399.99", "$400.00+"].map((price) => (
        <PriceFilter key={price}>{price}</PriceFilter>
      ))}
    </div>
  </div>
);

const Products = () => {
  return (
    <div className="px-40 pt-[60px] pb-24 flex gap-6">
      {/* Filter Sidebar */}
      <div className="w-1/4 flex flex-col gap-8">
        <div className="flex items-center gap-2">
          <FilterIcon />
          <h1 className="font-semibold font-inter text-xl">Filter</h1>
        </div>
        <CategoryFilter />
        <PriceFilterSection />
      </div>

      {/* Products and Sorting */}
      <div className="flex-grow grid  gap-10 ">
        <div className="flex justify-between px-4">
          <h1 className="font-inter font-semibold text-xl">Rackets</h1>
          <div className="flex gap-8">
            <h1>Sort by</h1>
            <SortIcon />
          </div>
        </div>
        {/* Product Grid */}
        <div className="flex flex-col gap-20">
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, index) => (
              <CardProduct2 key={index} />
            ))}
          </div>
          <div className="text-center py-2 px-10 border-2 border-black w-fit mx-auto rounded-full cursor-pointer">
            <LinkGroup classname="text-base font-medium underline leading-7">Show more </LinkGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
