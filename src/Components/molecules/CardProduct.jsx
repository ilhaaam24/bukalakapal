// src/components/CardProduct.js
import productsData from "../../data/products.Data";

const CardProduct = () => {
  const racket = productsData.rackets[0]; // Mengambil objek racket pertama

  return (
    <div className="relative bg-[#F3F5F7] border overflow-hidden w-[548px] h-[664px]">
      <div className="absolute inset-0 flex flex-col justify-start items-start p-4">
        <p className="text-[34px] font-medium">Rackets</p>
        <button className="text-sm font-medium text-blue-600 border-b border-blue-600">Shop Now →</button>
      </div>
      <img src={racket.image} alt="Racket" className="object-cover h-full w-full " />
    </div>
  );
};

export default CardProduct;
