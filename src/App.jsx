import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"
import WhatIsBestCard from "./pages/WhatIsBestCard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LandingPageA from "./pages/LandingPageA";
import LandingPageB from "./pages/LandingPageB";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/what-is-bestcard">What Is BestCard</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>|{" "}
        <Link to="/signup">Sign Up</Link> |{" "}
        <Link to="/login">Login</Link> 

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/what-is-bestcard" element={<WhatIsBestCard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/landingA" element={<LandingPageA />} />
        <Route path="/landingB" element={<LandingPageB />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  
  );
}

