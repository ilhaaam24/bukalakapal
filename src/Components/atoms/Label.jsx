/* eslint-disable react/prop-types */
const Label = (props)=>{
  const { children } = props
  return(
    <label htmlFor="">{children}</label>
  )
}


export default Label;