import Card from "../molecules/Card";
import Title from "../molecules/Titles";

const BlogSection = () => {
  return (
    <div className="px-40 py-20 flex  flex-col gap-10">
      <Title title="Articles" to="/home/blog" link="More Articles ->" />
      <div className="flex  gap-7 ">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default BlogSection;
