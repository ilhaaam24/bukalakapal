/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const LinkGroup = (props) =>{
  const {children,classname, to} = props
  return (
    <Link to={to} className={`${classname}`}>
      {children}
    </Link>
  );
}

export default LinkGroup;