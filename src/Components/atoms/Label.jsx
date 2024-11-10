/* eslint-disable react/prop-types */
const Label = (props)=>{
  const { children , classname} = props
  return(
    <label htmlFor="" className={classname}>{children}</label>
  )
}


export default Label;