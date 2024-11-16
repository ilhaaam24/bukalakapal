import Image from "../atoms/Image";

const CardImage = () => {
  return (
    <div className="w-[262px] h-[349px] bg-[#F3F5F7] flex flex-col justify-center items-center relative overflow-hidden group">
      <div>
        <Image image="/src/assets/images/products/rackets/racket1png.png" />
        <div className="absolute top-4 px-4 w-full flex justify-between">
          <div className="flex flex-col gap-2">
            <p className="px-[14px] bg-white rounded font-inter font-bold text-base text-center">NEW</p>
            <p className="px-[14px] bg-blue-500 rounded font-inter font-bold text-base text-white text-center">- 50%</p>
          </div>
          <div className="bg-white rounded-full h-fit p-1 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.577 6.30328C10.2546 6.61271 9.74548 6.61271 9.42304 6.30328L8.84604 5.74956C8.17068 5.10146 7.25832 4.70573 6.25004 4.70573C4.17897 4.70573 2.50004 6.38466 2.50004 8.45573C2.50004 10.4413 3.57486 12.0808 5.1265 13.4279C6.67947 14.7761 8.53621 15.6703 9.64558 16.1266C9.87754 16.222 10.1225 16.222 10.3545 16.1266C11.4639 15.6703 13.3206 14.7761 14.8736 13.4279C16.4252 12.0808 17.5 10.4412 17.5 8.45573C17.5 6.38466 15.8211 4.70573 13.75 4.70573C12.7418 4.70573 11.8294 5.10146 11.154 5.74956L10.577 6.30328ZM10 4.54704C9.0268 3.61307 7.70545 3.03906 6.25004 3.03906C3.2585 3.03906 0.833374 5.46419 0.833374 8.45573C0.833374 13.7626 6.64199 16.6932 9.01153 17.668C9.64968 17.9305 10.3504 17.9305 10.9885 17.668C13.3581 16.6932 19.1667 13.7626 19.1667 8.45573C19.1667 5.46419 16.7416 3.03906 13.75 3.03906C12.2946 3.03906 10.9733 3.61307 10 4.54704Z"
                fill="#6C7275"
              />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[-50px] bg-black text-white px-6 rounded-lg py-2 font-inter font-medium text-base left-4 right-4 text-center transition-all duration-700 ease-in-out group-hover:bottom-4">Add to cart</div>
      </div>
    </div>
  );
};

export default CardImage;
