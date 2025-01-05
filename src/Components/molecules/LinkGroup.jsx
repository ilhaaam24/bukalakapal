/* eslint-disable react/prop-types */


import { Link } from "react-router-dom";

const LinkGroup = (props) =>{
  const {children,classname, to, onClick} = props
  return (
    <Link to={to} className={`${classname}`} onClick={onClick}>
      {children}
    </Link>
  );
}

export default LinkGroup;