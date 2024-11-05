import { useState } from "react";
import LinkGroup from "../molecules/LinkGroup";
const Badges = () => {
  const [badges, setBadges] = useState(true);

  function handleBadges() {
    setBadges(!badges);
  }
  return (
    <>
      {badges && (
        <div className=" w-screen h-10 bg-[#F3F5F7] flex justify-center items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
            <path
              d="M20.0181 13.3747L19.7727 14.0834L19.7727 14.0834L20.0181 13.3747ZM20.0181 7.70343L20.2635 8.41216L20.2635 8.41216L20.0181 7.70343ZM1.98189 13.3747L2.22727 14.0834L2.22727 14.0834L1.98189 13.3747ZM1.98189 7.70343L1.73652 8.41216L1.73652 8.41216L1.98189 7.70343ZM14.5303 8.06939C14.8232 7.7765 14.8232 7.30163 14.5303 7.00873C14.2374 6.71584 13.7626 6.71584 13.4697 7.00873L14.5303 8.06939ZM7.46967 13.0087C7.17678 13.3016 7.17678 13.7765 7.46967 14.0694C7.76256 14.3623 8.23744 14.3623 8.53033 14.0694L7.46967 13.0087ZM5 18.7891C3.20507 18.7891 1.75 17.334 1.75 15.5391H0.25C0.25 18.1624 2.37665 20.2891 5 20.2891V18.7891ZM20.25 15.5391C20.25 17.334 18.7949 18.7891 17 18.7891V20.2891C19.6234 20.2891 21.75 18.1624 21.75 15.5391H20.25ZM17 2.28906C18.7949 2.28906 20.25 3.74414 20.25 5.53906H21.75C21.75 2.91571 19.6234 0.789062 17 0.789062V2.28906ZM5 0.789062C2.37665 0.789062 0.25 2.91571 0.25 5.53906H1.75C1.75 3.74414 3.20507 2.28906 5 2.28906V0.789062ZM20.2635 12.666C19.3815 12.3606 18.75 11.5226 18.75 10.5391H17.25C17.25 12.1814 18.3054 13.5754 19.7727 14.0834L20.2635 12.666ZM18.75 10.5391C18.75 9.5555 19.3815 8.7175 20.2635 8.41216L19.7727 6.99471C18.3054 7.50273 17.25 8.89668 17.25 10.5391H18.75ZM3.25 10.5391C3.25 11.5226 2.61845 12.3606 1.73652 12.666L2.22727 14.0834C3.69461 13.5754 4.75 12.1814 4.75 10.5391H3.25ZM1.73652 8.41216C2.61845 8.7175 3.25 9.5555 3.25 10.5391H4.75C4.75 8.89668 3.69462 7.50273 2.22727 6.99471L1.73652 8.41216ZM21.75 6.53906V5.53906H20.25V6.53906H21.75ZM20.25 14.5391V15.5391H21.75V14.5391H20.25ZM0.25 14.5391V15.5391H1.75V14.5391H0.25ZM1.75 6.53906V5.53906H0.25V6.53906H1.75ZM17 18.7891H5V20.2891H17V18.7891ZM17 0.789062H5V2.28906H17V0.789062ZM1.73652 12.666C1.05785 12.9009 0.25 13.5366 0.25 14.5391H1.75C1.75 14.4832 1.77081 14.4099 1.85172 14.3203C1.9366 14.2264 2.06974 14.138 2.22727 14.0834L1.73652 12.666ZM20.2635 8.41216C20.9422 8.17719 21.75 7.54152 21.75 6.53906H20.25C20.25 6.59493 20.2292 6.66823 20.1483 6.75778C20.0634 6.85172 19.9303 6.94017 19.7727 6.99471L20.2635 8.41216ZM2.22727 6.99471C2.06974 6.94017 1.9366 6.85172 1.85172 6.75778C1.77081 6.66823 1.75 6.59493 1.75 6.53906H0.25C0.25 7.54152 1.05785 8.17719 1.73652 8.41216L2.22727 6.99471ZM19.7727 14.0834C19.9303 14.138 20.0634 14.2264 20.1483 14.3203C20.2292 14.4099 20.25 14.4832 20.25 14.5391H21.75C21.75 13.5366 20.9422 12.9009 20.2635 12.666L19.7727 14.0834ZM8.25 7.53906C8.25 7.67713 8.13807 7.78906 8 7.78906V9.28906C8.9665 9.28906 9.75 8.50556 9.75 7.53906H8.25ZM8 7.78906C7.86193 7.78906 7.75 7.67713 7.75 7.53906H6.25C6.25 8.50556 7.0335 9.28906 8 9.28906V7.78906ZM7.75 7.53906C7.75 7.40099 7.86193 7.28906 8 7.28906V5.78906C7.0335 5.78906 6.25 6.57256 6.25 7.53906H7.75ZM8 7.28906C8.13807 7.28906 8.25 7.40099 8.25 7.53906H9.75C9.75 6.57256 8.9665 5.78906 8 5.78906V7.28906ZM14.25 13.5391C14.25 13.6771 14.1381 13.7891 14 13.7891V15.2891C14.9665 15.2891 15.75 14.5056 15.75 13.5391H14.25ZM14 13.7891C13.8619 13.7891 13.75 13.6771 13.75 13.5391H12.25C12.25 14.5056 13.0335 15.2891 14 15.2891V13.7891ZM13.75 13.5391C13.75 13.401 13.8619 13.2891 14 13.2891V11.7891C13.0335 11.7891 12.25 12.5726 12.25 13.5391H13.75ZM14 13.2891C14.1381 13.2891 14.25 13.401 14.25 13.5391H15.75C15.75 12.5726 14.9665 11.7891 14 11.7891V13.2891ZM13.4697 7.00873L7.46967 13.0087L8.53033 14.0694L14.5303 8.06939L13.4697 7.00873Z"
              fill="#141718"
            />
          </svg>
          <p className="font-semibold text-sm font-inter">30% off storewide — Limited time! </p>
          <div className=" flex gap-[2px] items-center border-b text-[#377DFF] h-6 border-[#377DFF]">
            <LinkGroup classname="font-medium text-sm ">Shop Now</LinkGroup>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
              <path d="M3.75 9.53906H14.25" stroke="#377DFF" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.75 14.0391L14.25 9.53906" stroke="#377DFF" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.75 5.03906L14.25 9.53906" stroke="#377DFF" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="absolute top-4 right-4 cursor-pointer" onClick={() => handleBadges()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.4419 1.981C11.686 1.73693 11.686 1.3412 11.4419 1.09712C11.1979 0.853043 10.8021 0.853043 10.5581 1.09712L6 5.65518L1.44194 1.09712C1.19786 0.853043 0.802136 0.853043 0.558058 1.09712C0.313981 1.3412 0.313981 1.73693 0.558058 1.981L5.11612 6.53906L0.558058 11.0971C0.313981 11.3412 0.313981 11.7369 0.558058 11.981C0.802136 12.2251 1.19786 12.2251 1.44194 11.981L6 7.42294L10.5581 11.981C10.8021 12.2251 11.1979 12.2251 11.4419 11.981C11.686 11.7369 11.686 11.3412 11.4419 11.0971L6.88388 6.53906L11.4419 1.981Z"
                fill="#343839"
              />
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default Badges;
