const NavCart = () => {
  return (
    <div className="flex justify-center items-center  gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 25" fill="none">
        <path d="M9 6.53906L9 7.53906C9 9.19592 10.3431 10.5391 12 10.5391C13.6569 10.5391 15 9.19592 15 7.53906V6.53906" stroke="#141718" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M15.6115 3.53906H8.38851C6.43316 3.53906 4.7644 4.95271 4.44294 6.88147L2.77627 16.8815C2.36992 19.3196 4.25009 21.5391 6.72185 21.5391H17.2782C19.7499 21.5391 21.6301 19.3196 21.2237 16.8815L19.5571 6.88147C19.2356 4.95271 17.5669 3.53906 15.6115 3.53906Z"
          stroke="#141718"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      <div className="h-[20px] w-[20px] bg-black rounded-full flex justify-center items-center text-white text-xs font-bold font-inter">2</div>
    </div>
  );
};

export default NavCart;
