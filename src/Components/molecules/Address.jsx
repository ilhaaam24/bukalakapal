const Address =  () =>{
  return (
    <div className="border w-1/2 p-4 rounded-lg grid grid-rows-1 gap-2">
      <div className="flex justify-between">
        <h2 className="font-inter font-semibold text-base">Shipping Address</h2>
        <div className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
            <path
              d="M2 14.5391H14M9.18961 4.0802C9.18961 4.0802 9.18961 5.16995 10.2794 6.2597C11.3691 7.34945 12.4589 7.34946 12.4589 7.34946M4.87975 12.5311L7.16823 12.2042C7.49833 12.157 7.80424 12.0041 8.04003 11.7683L13.5486 6.2597C14.1505 5.65785 14.1505 4.68205 13.5486 4.0802L12.4589 2.99045C11.857 2.3886 10.8812 2.3886 10.2794 2.99045L4.77078 8.49904C4.53499 8.73483 4.38203 9.04073 4.33488 9.37084L4.00795 11.6593C3.9353 12.1679 4.3712 12.6038 4.87975 12.5311Z"
              stroke="#6C7275"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <h2 className="font-inter font-semibold text-base">Edit</h2>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-inter text-sm">Sofia Havertz</p>
        <p className="font-inter text-sm">(+1) 234 567 890</p>
        <p className="font-inter text-sm">345 Long Island, NewYork, United States</p>
      </div>
    </div>
  );

}

export default Address;