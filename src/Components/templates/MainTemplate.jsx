// MainTemplate.js

import Footer from "../organisms/Footer";
import Navbar from "../organisms/Navbar";

const MainTemplate = (props) => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      <div className="px-40 w-full">{children}</div>
      <Footer />
    </div>
  );
};

export default MainTemplate;
