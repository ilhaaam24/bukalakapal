const Button = (props) =>{
  const {chhildren, type, onClick = () => {}, classname} = props;
  return(
    <button className="w-[456px] h-[40px] bg-black rounded-lg text-white font-inter font-medium text-base leading-7">Halooo</button>
  )
}


export default Button;