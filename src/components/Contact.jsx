function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <p className="text-lg text-gray-600 mb-8">
          If you have any questions, feel free to reach out!
        </p>
        <form className="space-y-6">
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:text-gray-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:text-gray-600"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:text-gray-600"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-custom-blue text-white py-3 px-6 rounded-md hover:opacity-90 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;