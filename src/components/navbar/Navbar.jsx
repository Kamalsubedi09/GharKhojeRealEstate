import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>GharKhoje</span>
        </a>
        <Link to="/homepage">Home Page</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/agents">Agents</Link>

      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <a href="/register" className="">
            <img
              src="https://th.bing.com/th/id/OIP.XGkWC1GA1yp6oMcc4EpR-gHaJ4?w=121&h=180&c=7&r=0&o=5&pid=1.7"
              alt=""
            />
            </a>
            
          <a href="/profilePage" className="">
              <span>Kamal subedi</span>
          </a>
            
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign in</a>
            <a href="/" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
