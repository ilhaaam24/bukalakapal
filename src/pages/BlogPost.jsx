import MainTemplate from "../Components/templates/MainTemplate";

const BlogPost = () => {
  return (
    <MainTemplate>
      <div className="px-40 flex flex-col gap-10">
        <div className="flex flex-col gap-14">
          <h1>Blog Post</h1>
          <div className="flex flex-col gap-6">
            <p className="font-bold font-inter text-xs">ARTICLE</p>
            <h1 className="font-medium font-poppins text-[54px] leading-[58px] w-3/4">Bad Performance in Europe, Anthony Ginting Will Self-Evaluate</h1>
            <div className="flex  gap-12">
              <div className="flex gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                  <path
                    d="M18.0588 19.0879C17.0654 16.4308 14.5036 14.5391 11.5 14.5391C8.49638 14.5391 5.9346 16.4308 4.94117 19.0879M18.0588 19.0879C20.1672 17.2545 21.5 14.5524 21.5 11.5391C21.5 6.01621 17.0228 1.53906 11.5 1.53906C5.97715 1.53906 1.5 6.01621 1.5 11.5391C1.5 14.5524 2.83285 17.2545 4.94117 19.0879M18.0588 19.0879C16.3031 20.6147 14.0095 21.5391 11.5 21.5391C8.99052 21.5391 6.69694 20.6147 4.94117 19.0879M14.5 8.53906C14.5 10.1959 13.1569 11.5391 11.5 11.5391C9.84315 11.5391 8.5 10.1959 8.5 8.53906C8.5 6.88221 9.84315 5.53906 11.5 5.53906C13.1569 5.53906 14.5 6.88221 14.5 8.53906Z"
                    stroke="#6C7275"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>Henrik Jonson</p>
              </div>
              <div className="flex gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <path d="M16.5 2.53906V5.53906" stroke="#6C7275" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M8.5 2.53906V5.53906" stroke="#6C7275" strokeWidth="1.5" strokeLinecap="round" />
                  <path
                    d="M3.5 8.03906C3.5 5.82992 5.29086 4.03906 7.5 4.03906H17.5C19.7091 4.03906 21.5 5.82992 21.5 8.03906V18.5391C21.5 20.7482 19.7091 22.5391 17.5 22.5391H7.5C5.29086 22.5391 3.5 20.7482 3.5 18.5391V8.03906Z"
                    stroke="#6C7275"
                    strokeWidth="1.5"
                  />
                  <path d="M3.5 9.53906H21.5" stroke="#6C7275" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <p>October 18, 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="/src/assets/images/blogs/blog1.jpg" alt="" className="w-full h-[600px] object-cover top-0"/>
        </div>
      </div>
    </MainTemplate>
  );
};
export default BlogPost;
