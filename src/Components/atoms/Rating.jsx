const Rating = () => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none" key={index}>
          <path
            d="M7.53834 1.64903C7.70914 1.23838 8.29086 1.23838 8.46166 1.64903L9.99874 5.34462C10.0707 5.51774 10.2336 5.63602 10.4204 5.65101L14.4102 5.97086C14.8535 6.0064 15.0332 6.55965 14.6955 6.84899L11.6557 9.45284C11.5133 9.57482 11.4512 9.76621 11.4947 9.94859L12.4234 13.8419C12.5265 14.2745 12.0559 14.6164 11.6764 14.3846L8.26063 12.2983C8.10062 12.2005 7.89938 12.2005 7.73937 12.2983L4.32363 14.3846C3.94408 14.6164 3.47345 14.2745 3.57665 13.8419L4.50534 9.94859C4.54884 9.76621 4.48665 9.57482 4.34426 9.45284L1.30453 6.84899C0.966758 6.55966 1.14652 6.0064 1.58985 5.97086L5.57955 5.65101C5.76645 5.63602 5.92925 5.51774 6.00126 5.34462L7.53834 1.64903Z"
            fill="#343839"
          />
        </svg>
      ))}
    </div>
  );
};
export default Rating;
