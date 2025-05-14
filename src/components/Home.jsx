import { use } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="fixed top-32 inset-x-0 bottom-0 z-0">
      {/* Hero image section */}
      <div className="absolute inset-0">
        <img
          src="/images/main-image.png"
          alt="Hero background"
          className="w-full h-full object-cover object-left"
        />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to the Home Page
        </h1>
        <p className="text-lg text-white max-w-2xl">
          This is the home page of our application.
        </p>

        <button
          onClick={handleLogin}
          className="text-lg max-w-2xl bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 mt-8"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Home;
