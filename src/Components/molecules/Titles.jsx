import LinkGroup from "./LinkGroup";

const Title = (props) => {
  const {title, link }= props;
  return (
    <div className="flex justify-between items-end">
      <h1 className="font-poppins font-medium text-[40px] w-[149px] leading-[49px] ">{title}</h1>
      <LinkGroup classname=" font-inter font-medium text-base border-b border-black h-7">{link}</LinkGroup>
    </div>
  );
};

export default Title;
