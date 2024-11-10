import Checkbox from "../atoms/Checkbox";
import Label from "../atoms/Label";

const PriceFilter = ({children}) => {
  return (
    <div className="flex justify-between items-center">
      <Label>{children}</Label>
      <Checkbox/>
    </div>
  );
};

export default PriceFilter;
