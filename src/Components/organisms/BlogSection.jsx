import Card from "../molecules/Card";
import Title from "../molecules/Titles";

const BlogSection = () => {
  return (
    <div className=" py-20 flex  flex-col gap-10">
      <Title title="Articles" to="/home/blog" link="More Articles ->" />
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
        <Card blog="/blog/1" />
        <Card blog="/blog/1" />
        <Card blog="/blog/1" />
      </div>
    </div>
  );
};

export default BlogSection;
