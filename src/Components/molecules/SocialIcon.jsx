import IconValue from "../atoms/IconValue";

const SocialIcon = () => {
  return (
    <div className="flex gap-6 items-center">
      <IconValue>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
          <rect x="2" y="2.53906" width="20" height="20" rx="4" stroke="#FEFEFE" strokeWidth="1.5" />
          <circle cx="18" cy="6.53906" r="1" fill="#FEFEFE" />
          <circle cx="12" cy="12.5391" r="5" stroke="#FEFEFE" strokeWidth="1.5" />
        </svg>
      </IconValue>
      <IconValue>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="21" viewBox="0 0 14 21" fill="none">
          <path
            d="M13 1.53906H10C7.23858 1.53906 5 3.77764 5 6.53906V8.53906H1V12.5391H5V19.5391H9V12.5391H13V8.53906H9V6.53906C9 5.98678 9.44771 5.53906 10 5.53906H13V1.53906Z"
            stroke="#FEFEFE"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </IconValue>
      <IconValue>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
          <rect x="2" y="3.53906" width="20" height="18" rx="4" stroke="#FEFEFE" strokeWidth="1.5" />
          <path
            d="M10.4472 9.26267L15.2111 11.6446C15.9482 12.0132 15.9482 13.065 15.2111 13.4335L10.4472 15.8155C9.78231 16.1479 9 15.6644 9 14.921V10.1571C9 9.41371 9.78231 8.93022 10.4472 9.26267Z"
            stroke="#FEFEFE"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </IconValue>
    </div>
  );
};

export default SocialIcon;
