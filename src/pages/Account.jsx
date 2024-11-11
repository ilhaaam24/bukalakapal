import AccountMenus from "../Components/organisms/AccountMenu";
import MainTemplate from "../Components/templates/MainTemplate";
import Address from "../Components/organisms/Address";

const Account = () => {
  return (
    <MainTemplate>
      <div className="px-40 pb-20 ">
        <h1 className="py-20 text-[40px] font-medium font-poppins text-center">My Account</h1>
        <div className="flex gap-2 w-full">
          <AccountMenus />
          <Address />
        </div>
      </div>
    </MainTemplate>
  );
};

export default Account;
