import Card from "../molecules/Card";
import Title from "../molecules/Titles";

const BlogSection = () => {
  return (
    <div className=" py-20 flex  flex-col gap-10">
      <Title title="Articles" to="/home/blog" link="More Articles ->" />
      <div className="flex  gap-7 ">
        <Card blog="/home/blog/1" />
        <Card blog="/home/blog/1" />
        <Card blog="/home/blog/1" />
      </div>
    </div>
  );
};

export default BlogSection;
