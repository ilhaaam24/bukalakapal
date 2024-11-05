import { Fragment } from "react";
import Badges from "../Components/atoms/Badges";
import Navbar from "../Components/organisms/Navbar";
import SliderSection from "../Components/templates/SliderSection";

const HomePage = () => {
  return (
    <Fragment>
      <Badges/>
      <Navbar/>
      <SliderSection/>
    </Fragment>
  )
}

export default HomePage;