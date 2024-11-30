/* eslint-disable react/prop-types */
// src/Components/organisms/Carousel/CarouselControls.jsx

const CarouselControls = ({ next, prev }) => {
  return (
    <div className="absolute inset-2 flex justify-between items-center px-4">
      <button onClick={prev} className="flex items-center justify-center bg-white text-black rounded-full h-[52px] w-[52px] opacity-75 hover:opacity-100 focus:outline-none" aria-label="Previous Slide">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" className="transform rotate-180">
          <path d="M6.66666 16.5391H25.3333" stroke="#141718" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17.3333 24.5391L25.3333 16.5391" stroke="#141718" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17.3333 8.53906L25.3333 16.5391" stroke="#141718" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button onClick={next} className="flex justify-center items-center bg-white text-black rounded-full h-[52px] w-[52px]  opacity-75 hover:opacity-100 focus:outline-none" aria-label="Next Slide">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
          <path d="M6.66666 16.5391H25.3333" stroke="#141718" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17.3333 24.5391L25.3333 16.5391" stroke="#141718" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17.3333 8.53906L25.3333 16.5391" stroke="#141718" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

export default CarouselControls;
