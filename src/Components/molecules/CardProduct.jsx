// src/components/CardProduct.js

const CardProduct = (props) => {
  const {classname ,image, children, position} = props;

  return (
    <div className={`relative bg-[#F3F5F7] border overflow-hidden  ${classname}`}>
      <div className={`absolute inset-0 flex flex-col items-start ${position} p-8 gap-3`}>
        <p className="text-[34px] font-medium">{children}</p>
        <button className="text-sm font-medium  border-b border-black py-1 ">Shop Now →</button>
      </div>
      <img src={image} alt="Racket" className="object-cover h-full w-full " />
    </div>
  );
};

export default CardProduct;
