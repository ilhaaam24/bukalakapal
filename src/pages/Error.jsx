import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center gap-2 flex-col h-screen items-center ">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="text-8xl font-bold">404</p>
      <p>{error?.message || error?.statusText || "Page not found"}</p>
      <Link
        to="/" className="text-white bg-black px-4 py-2 rounded-lg flex justify-center items-center">Back to home</Link>
    </div>
  );
};

export default ErrorPage;
