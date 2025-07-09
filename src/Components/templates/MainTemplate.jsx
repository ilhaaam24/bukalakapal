// MainTemplate.js

import PropTypes from "prop-types";
import Footer from "../organisms/Footer";
import Navbar from "../organisms/Navbar";

const MainTemplate = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="px-4 sm:px-6 md:px-8 lg:px-40 w-full mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node,
};

export default MainTemplate;
