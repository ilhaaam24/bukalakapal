/* eslint-disable react/prop-types */
// src/Components/organisms/Carousel/CarouselSlide.jsx


const CarouselSlide = (props) => {
  const { image} = props;
  return (
    <div className="w-full h-96 md:h-[500px] flex justify-center items-center bg-gray-100">
      <img src={image} alt="Slide" className="w-full h-full object-cover" />
    </div>
  );
};

export default CarouselSlide;
