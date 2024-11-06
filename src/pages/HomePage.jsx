import Badges from "../Components/atoms/Badges";
import Navbar from "../Components/organisms/Navbar";
import SliderSection from "../Components/templates/SliderSection";
import BannerGrid from "../Components/organisms/BannerGrid";
import Values from "../Components/organisms/Values";
import ProductCarousel from "../Components/organisms/ProductCarousel";

const HomePage = () => {
  return (
    <div className="h-[300vh]">
      <Badges/>
      <Navbar/>
      <SliderSection/>
      <BannerGrid/>
      <ProductCarousel/>
      <Values/>
    </div>
  )
}

export default HomePage;