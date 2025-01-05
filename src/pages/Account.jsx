import AccountMenus from "../Components/organisms/AccountMenu";
import MainTemplate from "../Components/templates/MainTemplate";

const Account = (props) => {
  const { children } = props;
  return (
    <MainTemplate>
      <div className="pb-20">
        <h1 className="py-20 text-[40px] font-medium font-poppins text-center">My Account</h1>
        <div className="flex gap-4 w-full ">
          <div className="flex-grow w-2/6 ">
            <AccountMenus />
          </div>
          <div className="flex-grow w-full ">{children}</div>
        </div>
      </div>
    </MainTemplate>
  );
};

export default Account;
