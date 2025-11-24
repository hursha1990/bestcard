import { useState } from "react";
import { Link } from "react-router-dom";
import "./layout.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">BestCard</h1>

      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <div>
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>

          <Link to="/what-is-bestcard" onClick={() => setOpen(false)}>What Is BestCard</Link>

          <Link to="/about" onClick={() => setOpen(false)}>About</Link>

          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          
          <Link to="/signup">Sign Up</Link> {" "}
          <Link to="/login">Login</Link> 

        </ul>
      </div>

      {/* <div className="navbar">
        <Link to="/">Home</Link> {" "}
        <Link to="/what-is-bestcard">What Is BestCard</Link> {" "}
        <Link to="/about">About</Link> {" "}
        <Link to="/contact">Contact</Link>{" "}
        <Link to="/signup">Sign Up</Link> {" "}
        <Link to="/login">Login</Link>      
        </div> */}
    </nav>
  );
};

export default NavBar;
 