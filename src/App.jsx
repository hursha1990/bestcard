// import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home"
import WhatIsBestCard from "./components/pages/WhatIsBestCard";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import LandingPageA from "./components/pages/LandingPageA";
import LandingPageB from "./components/pages/LandingPageB";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";

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

