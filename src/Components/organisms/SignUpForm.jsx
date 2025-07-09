import Button from "../atoms/Button/Index";
import Input from "../atoms/Input";
import CheckboxWithLabel from "../molecules/CheckboxWithLabel";
import LinkGroup from "../molecules/LinkGroup";

const SignUpForm = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full max-w-md mx-auto px-4 sm:px-6 md:px-0">
      <h1 className="text-2xl sm:text-3xl md:text-[40px] font-inter font-medium text-center sm:text-left">Sign Up</h1>
      <div className="flex flex-col sm:flex-row gap-2 text-center sm:text-left">
        <p className="text-[#6C7275] text-sm sm:text-base">Already have an account?</p>
        <LinkGroup to="/login" classname="text-green-500 text-sm sm:text-base">
          Sign In
        </LinkGroup>
      </div>
      <Input placeholder="Your name" type="text" classname="border-b w-full" />
      <Input placeholder="Your username" type="text" classname="border-b w-full" />
      <Input placeholder="Email address" type="email" classname="border-b w-full" />
      <Input placeholder="Password" type="password" classname="border-b w-full" />
      <div className="flex justify-start">
        <CheckboxWithLabel classname="text-sm sm:text-base">I agree with Privacy Policy and Terms of Use</CheckboxWithLabel>
      </div>
      <Button >Sign Up</Button>
    </div>
  );
};

export default SignUpForm;
