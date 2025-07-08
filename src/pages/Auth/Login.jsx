import SignInForm from "../../Components/organisms/SignInForm";
import AuthLayout from "../../Components/templates/AuthLayouts";

const Login = () => {
  return (
    <AuthLayout>
       <SignInForm />
    </AuthLayout>
  );
};

export default Login;