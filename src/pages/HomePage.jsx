import MainTemplate from "../Components/templates/MainTemplate";
import Badges from "../Components/atoms/Badges";
import SliderSection from "../Components/templates/SliderSection";
import BannerGrid from "../Components/organisms/BannerGrid";
import Values from "../Components/organisms/Values";
import ProductCarousel from "../Components/organisms/ProductCarousel";
import Banner from "../Components/organisms/Banner";
import BlogSection from "../Components/organisms/BlogSection";

const HomePage = () => {
  return (
    <div>
      <Badges />
      <MainTemplate>
        <SliderSection />
        <BannerGrid />
        <ProductCarousel />
        <Values />
        <Banner />
        <BlogSection />
      </MainTemplate>
    </div>
  );
};

export default HomePage;
