/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Button = (props) => {
  const { children, onClick = () => {}, classname = "bg-black  h-[48px] p-[10px] w-full" } = props;
  return <button className={`${classname} flex justify-center items-center rounded-lg text-white font-inter font-medium text-base leading-7`}>{children}</button>;
};

export default Button;
