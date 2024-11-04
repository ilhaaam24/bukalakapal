import Checkbox from "../atoms/Checkbox"
import Label from "../atoms/Label"

const CheckboxWithLabel = (props) =>{
  const { children } = props;
  return (
    <div className="flex gap-2 text-base font-inter text-[#6C7275]">
      <Checkbox />
      <Label>{children}</Label>
    </div>
  );
}

export default CheckboxWithLabel;