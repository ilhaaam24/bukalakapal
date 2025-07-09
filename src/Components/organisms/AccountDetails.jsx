import Button from "../atoms/Button/Index";
import Input from "../atoms/Input";
import Label from "../atoms/Label";

const AccountDetails = () =>{
  return (
    <div className="lg:px-[72px]  flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <h2 className="font-semibold font-inter text-xl">Account Details</h2>
        <div className="flex flex-col gap-3">
          <Label classname="font-bold font-inter text-xs leading-3 text-[#6C7275]">First Name *</Label>
          <Input placeholder="First name" type="text" classname="border rounded-md w-full px-4 text-base font-inter" />
        </div>
        <div className="flex flex-col gap-3">
          <Label classname="font-bold font-inter text-xs leading-3 text-[#6C7275]">Last Name *</Label>
          <Input placeholder="Last name" type="text" classname="border rounded-md w-full px-4 text-base font-inter" />
        </div>
        <div className="flex flex-col gap-3">
          <Label classname="font-bold font-inter text-xs leading-3 text-[#6C7275]">Display Name *</Label>
          <Input placeholder="Display name" type="text" classname="border rounded-md w-full px-4 text-base font-inter" />
        </div>
        <div className="flex flex-col gap-3">
          <Label classname="font-bold font-inter text-xs leading-3 text-[#6C7275]">Email *</Label>
          <Input placeholder="Email" type="email" classname="border rounded-md w-full px-4 text-base font-inter" />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="font-semibold font-inter text-xl">Password</h2>
        <div className="flex flex-col gap-3">
          <Label classname="font-bold font-inter text-xs leading-3 text-[#6C7275]">Old Password *</Label>
          <Input placeholder="Old Password" type="password" classname="border rounded-md w-full px-4 text-base font-inter" />
        </div>
        <div className="flex flex-col gap-3">
          <Label classname="font-bold font-inter text-xs leading-3 text-[#6C7275]">New Password *</Label>
          <Input placeholder="New Password" type="password" classname="border rounded-md w-full px-4 text-base font-inter" />
        </div>
        <div className="flex flex-col gap-3">
          <Label classname="font-bold font-inter text-xs leading-3 text-[#6C7275]">Confirm Password *</Label>
          <Input placeholder="Confirm Password" type="password" classname="border rounded-md w-full px-4 text-base font-inter" />
        </div>

        <Button classname="bg-black text-white w-fit px-10 py-3">Save changes</Button>
      </div>
    </div>
  );
}
export default AccountDetails;