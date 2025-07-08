// MainTemplate.js

import PropTypes from "prop-types";
import Footer from "../organisms/Footer";
import Navbar from "../organisms/Navbar";

const MainTemplate = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="px-40 w-full">{children}</div>
      <Footer />
    </div>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node,
};

export default MainTemplate;
