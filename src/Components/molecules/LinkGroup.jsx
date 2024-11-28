/* eslint-disable react/prop-types */

const LinkGroup = (props) =>{
  const {children,classname, to} = props
  return (
    <a href={to} className={`${classname}`}>
      {children}
    </a>
  );
}

export default LinkGroup;