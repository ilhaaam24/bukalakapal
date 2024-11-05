/* eslint-disable react/prop-types */
// src/Components/organisms/Carousel/CarouselControls.jsx


const CarouselControls = ({ next, prev }) => {
  return (
    <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
      <button onClick={prev} className="bg-gray-800 text-white rounded-full p-2 opacity-75 hover:opacity-100 focus:outline-none" aria-label="Previous Slide">
        ❮
      </button>
      <button onClick={next} className="bg-gray-800 text-white rounded-full p-2 opacity-75 hover:opacity-100 focus:outline-none" aria-label="Next Slide">
        ❯
      </button>
    </div>
  );
};

export default CarouselControls;
