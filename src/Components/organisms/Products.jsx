import { useState } from "react";
import CardProduct2 from "../molecules/CardProduct2";
import FilterIcon from "../molecules/FilterIcon";
import LinkGroup from "../molecules/LinkGroup";
import PriceFilter from "../molecules/PriceFilter";

const CategoryFilter = () => (
  <div className="flex flex-col gap-3 sm:gap-4">
    <h2 className="font-semibold font-inter text-sm sm:text-base">CATEGORIES</h2>
    <div className="flex flex-col gap-2 sm:gap-3 font-semibold text-xs sm:text-sm text-[#6C7275]">
      {["Rackets", "Shoes", "Bags", "Apparel", "Accessories", "Clubs", "Tennis"].map((category) => (
        <LinkGroup key={category}>{category}</LinkGroup>
      ))}
    </div>
  </div>
);

const PriceFilterSection = () => (
  <div className="flex flex-col gap-3 sm:gap-4">
    <h2 className="font-semibold font-inter text-sm sm:text-base">PRICE</h2>
    <div className="flex flex-col gap-2 font-semibold text-xs sm:text-sm text-[#6C7275]">
      {["All Prices", "$0.00 - 99.99", "$100.00 - 199.99", "$200.00 - 299.99", "$300.00 - 399.99", "$400.00+"].map((price) => (
        <PriceFilter key={price}>{price}</PriceFilter>
      ))}
    </div>
  </div>
);

const Products = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="pt-6 sm:pt-8 md:pt-[60px] pb-12 sm:pb-16 md:pb-24 flex flex-col lg:flex-row gap-4 sm:gap-6">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-2">
          <FilterIcon />
          <h1 className="font-semibold font-inter text-lg">Filter</h1>
        </div>
        <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isFilterOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Filter Sidebar */}
      <div className={`lg:block ${isFilterOpen ? "block" : "hidden"} w-full lg:w-1/4 flex flex-col gap-6 sm:gap-8 bg-gray-50 lg:bg-transparent p-4 lg:p-0 rounded-lg lg:rounded-none`}>
        <div className="hidden lg:flex items-center gap-2">
          <FilterIcon />
          <h1 className="font-semibold font-inter text-lg sm:text-xl">Filter</h1>
        </div>
        <CategoryFilter />
        <PriceFilterSection />
      </div>

      {/* Products and Sorting */}
      <div className="flex-grow grid gap-6 sm:gap-8 md:gap-10">
        <div className="flex flex-col sm:flex-row justify-between gap-4 px-2 sm:px-4">
          <h1 className="font-inter font-semibold text-lg sm:text-xl">Rackets</h1>
          <div className="flex gap-4 sm:gap-8">
            <h1 className="text-sm sm:text-base">Sort by</h1>
          </div>
        </div>
        {/* Product Grid */}
        <div className="flex flex-col items-center gap-12 sm:gap-16 md:gap-20 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center w-full gap-6 sm:gap-8 md:gap-10">
            {Array.from({ length: 9 }).map((_, index) => (
              <CardProduct2 key={index} />
            ))}
          </div>
          <div className="text-center py-2 px-6 sm:px-10 border-2 border-black w-fit mx-auto rounded-full cursor-pointer">
            <LinkGroup classname="text-sm sm:text-base font-medium underline leading-7">Show more </LinkGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
