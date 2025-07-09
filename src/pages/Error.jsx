import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center gap-2 sm:gap-4 flex-col h-screen items-center px-4 sm:px-6 md:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Oops!</h1>
      <p className="text-6xl sm:text-7xl md:text-8xl font-bold">404</p>
      <p className="text-sm sm:text-base md:text-lg text-center max-w-md">{error?.message || error?.statusText || "Page not found"}</p>
      <Link to="/" className="text-white bg-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex justify-center items-center text-sm sm:text-base hover:bg-gray-800 transition-colors">
        Back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
