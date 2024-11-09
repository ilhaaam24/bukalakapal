// MainTemplate.js

import Footer from "../organisms/Footer";
import Navbar from "../organisms/Navbar";


const MainTemplate = (props)=> {
  const { children} = props;
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainTemplate;
