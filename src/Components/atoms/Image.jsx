const Image = (props) => {
  const { image, classname } = props;
  return <img src={image} alt="" className={classname} />;
};

export default Image;
