import { Link } from "react-router-dom";

const LinkGroup = (props) =>{
  const {children,classname, to} = props
  return (
    <Link to={to} className={` text-base font-semibold font-inter ${classname}`}>
      {children}
    </Link>
  );
}

export default LinkGroup;