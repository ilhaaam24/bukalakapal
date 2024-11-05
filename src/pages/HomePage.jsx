import Badges from "../Components/atoms/Badges";
import Navbar from "../Components/organisms/Navbar";
import SliderSection from "../Components/templates/SliderSection";
import BannerGrid from "../Components/organisms/BannerGrid";

const HomePage = () => {
  return (
    <div className="h-[300vh]">
      <Badges/>
      <Navbar/>
      <SliderSection/>
      <BannerGrid/>
    </div>
  )
}

export default HomePage;