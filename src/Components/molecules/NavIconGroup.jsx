import { Link } from "react-router-dom";

const NavIconGroup = () => {
  return (
    <Link to="/account">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
        <path
          d="M17.5588 19.0879C16.5654 16.4308 14.0036 14.5391 11 14.5391C7.99638 14.5391 5.4346 16.4308 4.44117 19.0879M17.5588 19.0879C19.6672 17.2545 21 14.5524 21 11.5391C21 6.01621 16.5228 1.53906 11 1.53906C5.47715 1.53906 1 6.01621 1 11.5391C1 14.5524 2.33285 17.2545 4.44117 19.0879M17.5588 19.0879C15.8031 20.6147 13.5095 21.5391 11 21.5391C8.49052 21.5391 6.19694 20.6147 4.44117 19.0879M14 8.53906C14 10.1959 12.6569 11.5391 11 11.5391C9.34315 11.5391 8 10.1959 8 8.53906C8 6.88221 9.34315 5.53906 11 5.53906C12.6569 5.53906 14 6.88221 14 8.53906Z"
          stroke="#141718"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
} 


export default NavIconGroup;
