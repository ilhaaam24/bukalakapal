/* eslint-disable react/prop-types */
const AuthLayout = (props) => {
  const { children } = props

  return(
    <div className="min-h-screen flex justify-center items-center">
      {children}
    </div>
  )
}

export default AuthLayout;