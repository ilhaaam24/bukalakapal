import Input from "../Components/atoms/Input";
import Label from "../Components/atoms/Label";
import MainTemplate from "../Components/templates/MainTemplate";

const Account = () => {
  return (
    <MainTemplate>
      <div className="px-40 pb-20 ">
        <h1 className="py-20 text-[40px] font-medium font-poppins text-center">My Account</h1>
        <div className="flex gap-2 w-full">
          <div className="px-4 border w-1/4 py-10 h-fit bg-[#F3F5F7] flex flex-col gap-10 ">
            <div>
              <img src="" alt="" />
              <h2>Elon Musk</h2>
            </div>
            <div>
              <p>Account</p>
              <p>Account</p>
              <p>Account</p>
              <p>Account</p>
            </div>
          </div>
          <div className="px-[72px] w-3/4  flex flex-col gap-10">
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
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};

export default Account;
