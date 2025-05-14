function Team() {
  return (    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
        Meet Our Team
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
          <img
            src="/images/team2.jpg"
            alt="Becca Doe"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover bg-gray-100"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
            Becca Doe
          </h3>
          <p className="text-gray-600 text-center">CEO</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
          <img
            src="/images/team4.jpg"
            alt="John Smith"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover bg-gray-100"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
            John Smith
          </h3>
          <p className="text-gray-600 text-center">CTO</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
          <img
            src="/images/team5.jpg"
            alt="Jane Johnson"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover bg-gray-100"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
            Jane Johnson
          </h3>
          <p className="text-gray-600 text-center">Lead Developer</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
          <img
            src="/images/team3.jpg"
            alt="Martina Williams"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover bg-gray-100"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
            Martina Williams
          </h3>
          <p className="text-gray-600 text-center">Product Manager</p>
        </div>
      </div>
    </div>
  );
}

export default Team;