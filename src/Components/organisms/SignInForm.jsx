import Button from "../atoms/Button/Index";
import Input from "../atoms/Input";
import CheckboxWithLabel from "../molecules/CheckboxWithLabel";
import LinkGroup from "../molecules/LinkGroup";

const SignInFrom = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-[40px] font-inter font-medium">Sign In</h1>
      <div className="flex gap-2">
        <p className="text-[#6C7275] text-base">Don’t have an account yet?</p>
        <LinkGroup to="/register" classname="text-green-500">Sign Up</LinkGroup>
      </div>
      <Input placeholder="Your username or email address" type="text" classname="border-b" />
      <Input placeholder="Password" type="password" classname="border-b" />
      <div className="flex justify-between">
        <CheckboxWithLabel >Remember me</CheckboxWithLabel>
        <LinkGroup>Forgot password?</LinkGroup>
      </div>
      <Button>Sign In</Button>
    </div>
  );
};

export default SignInFrom;
