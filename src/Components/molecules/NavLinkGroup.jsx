import LinkGroup from "./LinkGroup";

const NavLinkGroup = () => {
  return (
    <div className="flex gap-10 text-[#6C7275]">
      <LinkGroup>Home</LinkGroup>
      <LinkGroup>Shop</LinkGroup>
      <LinkGroup>Contact Us</LinkGroup>
    </div>
  );
};

export default NavLinkGroup;
