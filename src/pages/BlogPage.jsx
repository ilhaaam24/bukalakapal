import Image from "../Components/atoms/Image";
import Card from "../Components/molecules/Card";
import LinkGroup from "../Components/molecules/LinkGroup";
import ShopHeader from "../Components/organisms/ShopHeader";
import MainTemplate from "../Components/templates/MainTemplate";

const BlogPage = () => {
  return (
    <MainTemplate>
      <ShopHeader />
      <div className="px-40 pt-6">
        <div className="flex justify-between items-center">
          <h2 className="font-inter  font-semibold text-sm border-b-2 border-black ">All Blog</h2>
          <div className="flex gap-8 items-center">
            <div>
              <h2>Sort by</h2>
            </div>
            <div className="flex items-center">
              <div className="p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <path
                    d="M2 3.53906C2 3.14124 2.15804 2.75971 2.43934 2.4784C2.72064 2.1971 3.10218 2.03906 3.5 2.03906H6.5C6.89782 2.03906 7.27936 2.1971 7.56066 2.4784C7.84196 2.75971 8 3.14124 8 3.53906V6.53906C8 6.93689 7.84196 7.31842 7.56066 7.59972C7.27936 7.88103 6.89782 8.03906 6.5 8.03906H3.5C3.10218 8.03906 2.72064 7.88103 2.43934 7.59972C2.15804 7.31842 2 6.93689 2 6.53906V3.53906ZM9.5 3.53906C9.5 3.14124 9.65804 2.75971 9.93934 2.4784C10.2206 2.1971 10.6022 2.03906 11 2.03906H14C14.3978 2.03906 14.7794 2.1971 15.0607 2.4784C15.342 2.75971 15.5 3.14124 15.5 3.53906V6.53906C15.5 6.93689 15.342 7.31842 15.0607 7.59972C14.7794 7.88103 14.3978 8.03906 14 8.03906H11C10.6022 8.03906 10.2206 7.88103 9.93934 7.59972C9.65804 7.31842 9.5 6.93689 9.5 6.53906V3.53906ZM17 3.53906C17 3.14124 17.158 2.75971 17.4393 2.4784C17.7206 2.1971 18.1022 2.03906 18.5 2.03906H21.5C21.8978 2.03906 22.2794 2.1971 22.5607 2.4784C22.842 2.75971 23 3.14124 23 3.53906V6.53906C23 6.93689 22.842 7.31842 22.5607 7.59972C22.2794 7.88103 21.8978 8.03906 21.5 8.03906H18.5C18.1022 8.03906 17.7206 7.88103 17.4393 7.59972C17.158 7.31842 17 6.93689 17 6.53906V3.53906ZM2 11.0391C2 10.6412 2.15804 10.2597 2.43934 9.9784C2.72064 9.6971 3.10218 9.53906 3.5 9.53906H6.5C6.89782 9.53906 7.27936 9.6971 7.56066 9.9784C7.84196 10.2597 8 10.6412 8 11.0391V14.0391C8 14.4369 7.84196 14.8184 7.56066 15.0997C7.27936 15.381 6.89782 15.5391 6.5 15.5391H3.5C3.10218 15.5391 2.72064 15.381 2.43934 15.0997C2.15804 14.8184 2 14.4369 2 14.0391V11.0391ZM9.5 11.0391C9.5 10.6412 9.65804 10.2597 9.93934 9.9784C10.2206 9.6971 10.6022 9.53906 11 9.53906H14C14.3978 9.53906 14.7794 9.6971 15.0607 9.9784C15.342 10.2597 15.5 10.6412 15.5 11.0391V14.0391C15.5 14.4369 15.342 14.8184 15.0607 15.0997C14.7794 15.381 14.3978 15.5391 14 15.5391H11C10.6022 15.5391 10.2206 15.381 9.93934 15.0997C9.65804 14.8184 9.5 14.4369 9.5 14.0391V11.0391ZM17 11.0391C17 10.6412 17.158 10.2597 17.4393 9.9784C17.7206 9.6971 18.1022 9.53906 18.5 9.53906H21.5C21.8978 9.53906 22.2794 9.6971 22.5607 9.9784C22.842 10.2597 23 10.6412 23 11.0391V14.0391C23 14.4369 22.842 14.8184 22.5607 15.0997C22.2794 15.381 21.8978 15.5391 21.5 15.5391H18.5C18.1022 15.5391 17.7206 15.381 17.4393 15.0997C17.158 14.8184 17 14.4369 17 14.0391V11.0391ZM2 18.5391C2 18.1412 2.15804 17.7597 2.43934 17.4784C2.72064 17.1971 3.10218 17.0391 3.5 17.0391H6.5C6.89782 17.0391 7.27936 17.1971 7.56066 17.4784C7.84196 17.7597 8 18.1412 8 18.5391V21.5391C8 21.9369 7.84196 22.3184 7.56066 22.5997C7.27936 22.881 6.89782 23.0391 6.5 23.0391H3.5C3.10218 23.0391 2.72064 22.881 2.43934 22.5997C2.15804 22.3184 2 21.9369 2 21.5391V18.5391ZM9.5 18.5391C9.5 18.1412 9.65804 17.7597 9.93934 17.4784C10.2206 17.1971 10.6022 17.0391 11 17.0391H14C14.3978 17.0391 14.7794 17.1971 15.0607 17.4784C15.342 17.7597 15.5 18.1412 15.5 18.5391V21.5391C15.5 21.9369 15.342 22.3184 15.0607 22.5997C14.7794 22.881 14.3978 23.0391 14 23.0391H11C10.6022 23.0391 10.2206 22.881 9.93934 22.5997C9.65804 22.3184 9.5 21.9369 9.5 21.5391V18.5391ZM17 18.5391C17 18.1412 17.158 17.7597 17.4393 17.4784C17.7206 17.1971 18.1022 17.0391 18.5 17.0391H21.5C21.8978 17.0391 22.2794 17.1971 22.5607 17.4784C22.842 17.7597 23 18.1412 23 18.5391V21.5391C23 21.9369 22.842 22.3184 22.5607 22.5997C22.2794 22.881 21.8978 23.0391 21.5 23.0391H18.5C18.1022 23.0391 17.7206 22.881 17.4393 22.5997C17.158 22.3184 17 21.9369 17 21.5391V18.5391Z"
                    fill="#141718"
                  />
                </svg>
              </div>
              <div className="p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                  <path
                    d="M6.25 10.0391C6.84674 10.0391 7.41903 10.2761 7.84099 10.6981C8.26295 11.12 8.5 11.6923 8.5 12.2891V15.7891C8.5 16.3858 8.26295 16.9581 7.84099 17.3801C7.41903 17.802 6.84674 18.0391 6.25 18.0391H2.75C2.15326 18.0391 1.58097 17.802 1.15901 17.3801C0.737053 16.9581 0.5 16.3858 0.5 15.7891V12.2891C0.5 11.6923 0.737053 11.12 1.15901 10.6981C1.58097 10.2761 2.15326 10.0391 2.75 10.0391H6.25ZM16.25 10.0391C16.8467 10.0391 17.419 10.2761 17.841 10.6981C18.2629 11.12 18.5 11.6923 18.5 12.2891V15.7891C18.5 16.3858 18.2629 16.9581 17.841 17.3801C17.419 17.802 16.8467 18.0391 16.25 18.0391H12.75C12.1533 18.0391 11.581 17.802 11.159 17.3801C10.7371 16.9581 10.5 16.3858 10.5 15.7891V12.2891C10.5 11.6923 10.7371 11.12 11.159 10.6981C11.581 10.2761 12.1533 10.0391 12.75 10.0391H16.25ZM6.25 0.0390625C6.84674 0.0390625 7.41903 0.276115 7.84099 0.698072C8.26295 1.12003 8.5 1.69233 8.5 2.28906V5.78906C8.5 6.3858 8.26295 6.9581 7.84099 7.38005C7.41903 7.80201 6.84674 8.03906 6.25 8.03906H2.75C2.15326 8.03906 1.58097 7.80201 1.15901 7.38005C0.737053 6.9581 0.5 6.3858 0.5 5.78906V2.28906C0.5 1.69233 0.737053 1.12003 1.15901 0.698072C1.58097 0.276115 2.15326 0.0390625 2.75 0.0390625H6.25ZM16.25 0.0390625C16.8467 0.0390625 17.419 0.276115 17.841 0.698072C18.2629 1.12003 18.5 1.69233 18.5 2.28906V5.78906C18.5 6.3858 18.2629 6.9581 17.841 7.38005C17.419 7.80201 16.8467 8.03906 16.25 8.03906H12.75C12.1533 8.03906 11.581 7.80201 11.159 7.38005C10.7371 6.9581 10.5 6.3858 10.5 5.78906V2.28906C10.5 1.69233 10.7371 1.12003 11.159 0.698072C11.581 0.276115 12.1533 0.0390625 12.75 0.0390625H16.25Z"
                    fill="#6C7275"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-20 pt-10 pb-20">
          <div className="grid grid-cols-3 gap-7 ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="text-center py-2 px-10 border-2 border-black w-fit mx-auto rounded-full cursor-pointer">
            <LinkGroup classname="text-base font-medium underline leading-7">Show more </LinkGroup>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};

export default BlogPage;
