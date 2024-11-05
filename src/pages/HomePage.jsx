import { Fragment } from "react";
import Badges from "../Components/atoms/Badges";
import Navbar from "../Components/organisms/Navbar";
import Carousel from "../Components/organisms/Carousel/Carousel";

const HomePage = () => {
  return (
    <Fragment>
      <Badges/>
      <Navbar/>
      <Carousel/>
    </Fragment>
  )
}

export default HomePage;