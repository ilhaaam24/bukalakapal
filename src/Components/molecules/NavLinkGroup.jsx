import LinkGroup from "./LinkGroup";

const NavLinkGroup = ({ textColor = "text-[#6C7275]" }) => {
  return (
    <div className={`flex gap-10 font-inter text-sm ${textColor}`}>
      <LinkGroup to="/home">Home</LinkGroup>
      <LinkGroup to="/shop">Shop</LinkGroup>
      <LinkGroup to="/contact">Contact Us</LinkGroup>
    </div>
  );
};

export default NavLinkGroup;
