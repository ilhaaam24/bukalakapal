// src/Components/organisms/Carousel/Carousel.jsx

import{ useState } from "react";
import CarouselSlide from "./CarouselSlide";
import CarouselControls from "./CarouselConstrols";
import slidesData from "../../../data/slides.Data";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slidesData.length) % slidesData.length);
  };

  return (
    <div className="relative px-40">
      <CarouselSlide image={slidesData[currentIndex].image} />
      <CarouselControls next={nextSlide} prev={prevSlide} />
    </div>
  );
};

export default Carousel;
