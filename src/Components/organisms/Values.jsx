import CardValue from "../molecules/CardValue";

const Values = () => {
  return (
    <div className="flex  gap-6 px-40 py-12">
      <CardValue judul="Free Shipping" deskripsi="Order above $200">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
          <path
            d="M28 38.5391V14.5391M28 38.5391H32M28 38.5391H18M28 14.5391C28 10.1208 24.4183 6.53906 20 6.53906H12C7.58172 6.53906 4 10.1208 4 14.5391V30.5391C4 34.2695 6.55333 37.4036 10.0077 38.289M28 14.5391H34.4182C35.4344 14.5391 36.4126 14.9259 37.154 15.6209L42.7358 20.8538C43.5424 21.61 44 22.6664 44 23.772V34.5391C44 36.7482 42.2091 38.5391 40 38.5391M40 38.5391C40 40.7482 38.2091 42.5391 36 42.5391C33.7909 42.5391 32 40.7482 32 38.5391M40 38.5391C40 36.3299 38.2091 34.5391 36 34.5391C33.7909 34.5391 32 36.3299 32 38.5391M18 38.5391C18 40.7482 16.2091 42.5391 14 42.5391C11.7909 42.5391 10 40.7482 10 38.5391C10 38.4551 10.0026 38.3717 10.0077 38.289M18 38.5391C18 36.3299 16.2091 34.5391 14 34.5391C11.8748 34.5391 10.1368 36.1963 10.0077 38.289"
            stroke="#141718"
            strokeWidth="2.5"
          />
          <path d="M20 16.5391H16" stroke="#141718" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 24.5391H12" stroke="#141718" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </CardValue>
      <CardValue judul="Money Back" deskripsi="30 days guarantee">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
          <rect x="4" y="8.53906" width="40" height="32" rx="4" stroke="#141718" strokeWidth="2.5" />
          <circle cx="4" cy="4" r="4" transform="matrix(1 0 0 -1 20 28.5391)" stroke="#141718" strokeWidth="2.5" />
          <circle cx="2" cy="2" r="2" transform="matrix(1 0 0 -1 34 26.5391)" fill="#141718" />
          <circle cx="2" cy="2" r="2" transform="matrix(1 0 0 -1 10 26.5391)" fill="#141718" />
        </svg>
      </CardValue>
      <CardValue judul="Secure Payment" deskripsi="Secured by Stripe">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="43" viewBox="0 0 36 43" fill="none">
          <path
            d="M26 13.5391H10M26 13.5391C30.4183 13.5391 34 17.1208 34 21.5391V33.5391C34 37.9573 30.4183 41.5391 26 41.5391H10C5.58172 41.5391 2 37.9573 2 33.5391V21.5391C2 17.1208 5.58172 13.5391 10 13.5391M26 13.5391V9.53906C26 5.12078 22.4183 1.53906 18 1.53906C13.5817 1.53906 10 5.12078 10 9.53906V13.5391M18 29.5391V25.5391"
            stroke="#141718"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </CardValue>
      <CardValue judul="24/7 Support" deskripsi="Phone and Email support">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
          <path
            d="M42 38.5391V35.2472C42 33.6116 41.0042 32.1407 39.4856 31.5333L35.4173 29.906C33.4857 29.1334 31.2844 29.9703 30.354 31.831L30 32.5391C30 32.5391 25 31.5391 21 27.5391C17 23.5391 16 18.5391 16 18.5391L16.708 18.185C18.5688 17.2547 19.4057 15.0533 18.6331 13.1218L17.0058 9.0535C16.3983 7.53487 14.9275 6.53906 13.2919 6.53906H10C7.79086 6.53906 6 8.32992 6 10.5391C6 28.2122 20.3269 42.5391 38 42.5391C40.2091 42.5391 42 40.7482 42 38.5391Z"
            stroke="#141718"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </svg>
      </CardValue>
    </div>
  );
};

export default Values;
