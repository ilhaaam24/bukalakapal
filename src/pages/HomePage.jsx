import Badges from "../Components/atoms/Badges";
import Navbar from "../Components/organisms/Navbar";
import SliderSection from "../Components/templates/SliderSection";
import BannerGrid from "../Components/organisms/BannerGrid";
import Values from "../Components/organisms/Values";
import ProductCarousel from "../Components/organisms/ProductCarousel";
import Banner from "../Components/organisms/Banner";
import BlogSection from "../Components/organisms/BlogSection";
import Footer from "../Components/organisms/Footer";

const HomePage = () => {
  return (
    <div className="">
      <Badges/>
      <Navbar/>
      <SliderSection/>
      <BannerGrid/>
      <ProductCarousel/>
      <Values/>
      <Banner/>
      <BlogSection/>
      <Footer/>
    </div>
  )
}

export default HomePage;