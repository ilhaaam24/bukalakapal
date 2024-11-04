import Button from "../atoms/Button/Index";
import Input from "../atoms/Input";
import CheckboxWithLabel from "../molecules/CheckboxWithLabel";
import LinkGroup from "../molecules/LinkGroup";

const SignUpFrom = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-[40px] font-inter font-medium">Sign Up</h1>
      <div className="flex gap-2">
        <p className="text-[#6C7275] text-base">Already have an account?</p>
        <LinkGroup to="/login" classname="text-green-500">Sign In</LinkGroup>
      </div>
      <Input placeholder="Your name" type="text" classname="border-b" />
      <Input placeholder="Your username" type="text" classname="border-b" />
      <Input placeholder="Email address" type="email" classname="border-b" />
      <Input placeholder="Password" type="password" classname="border-b" />
      <div className="flex justify-between">
        <CheckboxWithLabel>I agree with Privacy Policy and Terms of Use</CheckboxWithLabel>
      </div>
      <Button>Sign Up</Button>
    </div>
  );
};

export default SignUpFrom;
