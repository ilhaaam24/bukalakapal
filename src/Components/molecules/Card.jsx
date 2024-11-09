import LinkGroup from "./LinkGroup";

const Card = () => {
  return (
    <div className=" w-full flex flex-col gap-6">
      <img src="/src/assets/images/blogs/blog1.jpg" alt="" className="w-full" />
      <div className="flex flex-col gap-2 text-xl font-medium font-poppins">
        <p>Bad Performance in Europe, Anthony Ginting Will Self-Evaluate</p>
        <LinkGroup classname="border-b border-black w-fit font-medium font-inter text-base">Read More</LinkGroup>
      </div>
    </div>
  );
};

export default Card;
