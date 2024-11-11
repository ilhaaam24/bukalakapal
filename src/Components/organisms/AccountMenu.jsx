import LinkGroup from "../molecules/LinkGroup";

const AccountMenus = () => {
  return (
    <div className="px-4  w-1/4 py-10 h-fit bg-[#F3F5F7] flex flex-col gap-10 ">
      <div className="w-full flex flex-col items-center gap-2 relative">
        <div className="relative flex justify-center ">
          <img src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg?crop=1xw:1.0xh;center,top&resize=1200:*" alt="" className="w-1/2 h-1/2  rounded-full " />
          <div className="absolute bottom-2 right-16  border-2 bg-[#141718] p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 14" fill="none">
              <path
                d="M4.25065 2.26171C4.09748 2.49148 4.15956 2.80191 4.38933 2.95509C4.61909 3.10826 4.92953 3.04618 5.0827 2.81641L4.25065 2.26171ZM5.60419 1.1328L6.02021 1.41015V1.41015L5.60419 1.1328ZM10.3958 1.1328L10.8119 0.855445L10.3958 1.1328ZM10.9173 2.81641C11.0705 3.04618 11.3809 3.10826 11.6107 2.95509C11.8405 2.80191 11.9025 2.49148 11.7494 2.26171L10.9173 2.81641ZM9.50001 7.53906C9.50001 8.36749 8.82844 9.03906 8.00001 9.03906V10.0391C9.38072 10.0391 10.5 8.91978 10.5 7.53906H9.50001ZM8.00001 9.03906C7.17158 9.03906 6.50001 8.36749 6.50001 7.53906H5.50001C5.50001 8.91978 6.6193 10.0391 8.00001 10.0391V9.03906ZM6.50001 7.53906C6.50001 6.71064 7.17158 6.03906 8.00001 6.03906V5.03906C6.6193 5.03906 5.50001 6.15835 5.50001 7.53906H6.50001ZM8.00001 6.03906C8.82844 6.03906 9.50001 6.71064 9.50001 7.53906H10.5C10.5 6.15835 9.38072 5.03906 8.00001 5.03906V6.03906ZM5.0827 2.81641L6.02021 1.41015L5.18816 0.855445L4.25065 2.26171L5.0827 2.81641ZM6.71359 1.03906H9.28643V0.0390625H6.71359V1.03906ZM9.97981 1.41015L10.9173 2.81641L11.7494 2.26171L10.8119 0.855445L9.97981 1.41015ZM9.28643 1.03906C9.56506 1.03906 9.82525 1.17831 9.97981 1.41015L10.8119 0.855445C10.4718 0.345415 9.89941 0.0390625 9.28643 0.0390625V1.03906ZM6.02021 1.41015C6.17477 1.17831 6.43496 1.03906 6.71359 1.03906V0.0390625C6.10061 0.0390625 5.52818 0.345414 5.18816 0.855445L6.02021 1.41015ZM4.00001 3.03906H12V2.03906H4.00001V3.03906ZM14.1667 5.20573V9.8724H15.1667V5.20573H14.1667ZM12 12.0391H4.00001V13.0391H12V12.0391ZM1.83334 9.8724V5.20573H0.833344V9.8724H1.83334ZM4.00001 12.0391C2.80339 12.0391 1.83334 11.069 1.83334 9.8724H0.833344C0.833344 11.6213 2.25111 13.0391 4.00001 13.0391V12.0391ZM14.1667 9.8724C14.1667 11.069 13.1966 12.0391 12 12.0391V13.0391C13.7489 13.0391 15.1667 11.6213 15.1667 9.8724H14.1667ZM12 3.03906C13.1966 3.03906 14.1667 4.00911 14.1667 5.20573H15.1667C15.1667 3.45683 13.7489 2.03906 12 2.03906V3.03906ZM4.00001 2.03906C2.25111 2.03906 0.833344 3.45683 0.833344 5.20573H1.83334C1.83334 4.00911 2.80339 3.03906 4.00001 3.03906V2.03906Z"
                fill="#FEFEFE"
              />
            </svg>
          </div>
        </div>
        <h2 className="font-semibold font-inter text-xl">Elon Musk</h2>
      </div>
      <div className="flex flex-col gap-3">
        <LinkGroup classname="py-2 font-semibold font-inter text-base border-b-2 border-black">Account</LinkGroup>
        <LinkGroup classname="py-2 font-semibold font-inter text-base">Address</LinkGroup>
        <LinkGroup classname="py-2 font-semibold font-inter text-base">Orders</LinkGroup>
        <LinkGroup classname="py-2 font-semibold font-inter text-base">Wishlist</LinkGroup>
        <LinkGroup classname="py-2 font-semibold font-inter text-base">Log Out</LinkGroup>
      </div>
    </div>
  );
};
export default AccountMenus;
