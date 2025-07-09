import Address from "../molecules/Address";

const AccountAddress = () => {
  return (
    <div className="lg:px-[72px] flex flex-col gap-5">
      <h2 className="font-semibold font-inter text-xl">Address</h2>
      <div className="flex gap-6 w-full ">
        <Address />
        <Address />
      </div>
    </div>
  );
};

export default AccountAddress;
