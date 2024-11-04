/* eslint-disable react/prop-types */
const Input = (props)=>{

  const { placeholder , type, classname} = props;
  return(
    <input placeholder={placeholder} type={type} className={`border-b  text-gray-900  text-sm focus:outline-none focus:bg-white  h-[40px] w-[456px] px-2 ${classname}`} />
  )
}

export default Input; 