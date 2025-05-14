import { Outlet, Link } from "react-router-dom";


function NotFound() {
  return (
  <div>
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">404 Not Found</h1>
      <p className="text-lg text-gray-600 mb-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-2 bg-custom-blue text-white rounded-md hover:opacity-90 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  </div>
  );
}

export default NotFound;
