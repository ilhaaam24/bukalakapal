import AccountMenus from "../Components/organisms/AccountMenu";
import MainTemplate from "../Components/templates/MainTemplate";
import PropTypes from "prop-types";

const Account = (props) => {
  const { children } = props;
  return (
    <MainTemplate>
      <div className="pb-10 sm:pb-16 md:pb-20">
        <h1 className="py-10 sm:py-16 md:py-20 text-2xl sm:text-3xl md:text-[40px] font-medium font-poppins text-center">My Account</h1>
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <div className="w-full lg:w-2/6">
            <AccountMenus />
          </div>
          <div className="w-full lg:w-4/6">{children}</div>
        </div>
      </div>
    </MainTemplate>
  );
};

Account.propTypes = {
  children: PropTypes.node,
};

export default Account;
