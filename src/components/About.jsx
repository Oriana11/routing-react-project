import { Outlet, Link } from "react-router-dom";


function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
      <div className="max-w-2xl mx-auto">
        <p className="text-lg text-gray-600 mb-4">
          This is the about page. We're dedicated to providing the best
          experience for our users.
        </p>
        <p className="text-lg text-gray-600">
          Thank you for visiting our about page! Feel free to explore and learn
          more about what we do.
        </p>
        <div className="mt-8">
          <Link 
            to="team"
            className="inline-block px-6 py-2 bg-custom-blue text-white rounded-md hover:opacity-90 transition duration-300"
          >
            Meet Our Team
          </Link>
        </div>
        <div className="mt-8 w-full max-w-4xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default About;
