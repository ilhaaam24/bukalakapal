import Button from "../atoms/Button/Index";
import Input from "../atoms/Input";
import CheckboxWithLabel from "../molecules/CheckboxWithLabel";
import LinkGroup from "../molecules/LinkGroup";

const SignInForm = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full max-w-md mx-auto px-4 sm:px-6 md:px-0">
      <h1 className="text-4xl sm:text-3xl md:text-[40px] font-inter font-medium text-center sm:text-left">Sign In</h1>
      <div className="flex flex-col sm:flex-row gap-2 text-center sm:text-left">
        <p className="text-[#6C7275] text-sm sm:text-base">Don&apos;t have an account yet?</p>
        <LinkGroup to="/register" classname="text-green-500 text-sm sm:text-base">
          Sign Up
        </LinkGroup>
      </div>
      <Input placeholder="Your username or email address" type="text" classname="border-b w-full" />
      <Input placeholder="Password" type="password" classname="border-b w-full" />
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
        <CheckboxWithLabel classname="text-sm sm:text-base">Remember me</CheckboxWithLabel>
        <LinkGroup classname="text-sm sm:text-base">Forgot password?</LinkGroup>
      </div>
      <Button >Sign In</Button>
    </div>
  );
};

export default SignInForm;
