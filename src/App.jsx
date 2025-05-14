import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Team from "./components/Team";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CurrentLocation from "./components/CurrentLocation";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-custom-blue p-8">
          <ul className="flex justify-center space-x-6">
            <li>
              <Link
                className="text-white hover:text-emerald-400 font-medium transition duration-300"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-white hover:text-emerald-400 font-medium transition duration-300"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-white hover:text-emerald-400 font-medium transition duration-300"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <CurrentLocation />

        <div className="container mx-auto p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}>
              <Route path="team" element={<Team />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
