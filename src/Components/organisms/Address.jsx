import Input from "../atoms/Input";

const Address = () =>{
  return (
    <div>
      <h2 className="font-semibold font-inter text-xl">Address</h2>
      <div>
        <Input type="text" value="" />
      </div>
    </div>
  );
}

export default Address;