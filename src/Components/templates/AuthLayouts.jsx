/* eslint-disable react/prop-types */
const AuthLayout = (props) => {
  const { children } = props;

  return (
    <div className="min-h-screen flex justify-center items-center px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
};

export default AuthLayout;
