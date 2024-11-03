/* eslint-disable react/prop-types */
const Input = (props)=>{

  const { placeholder , type} = props;
  return(
    <input placeholder={placeholder} type={type} className=" border-b  text-gray-900 bg-white text-sm focus:outline-none  h-[40px] w-[456px] px-2" />
  )
}

export default Input; 