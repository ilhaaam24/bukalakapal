import Price from "../atoms/Price";
import Rating from "../atoms/Rating";
import TitleProduct from "../atoms/TitleProduct";

const CardData = (props) => {
  return (
    <div className="mt-2">
      <Rating/>
      <TitleProduct>SAGA II SE</TitleProduct>
      <Price>$100</Price>
    </div>
  );
};

export default CardData;
