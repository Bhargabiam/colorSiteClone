import "hamburgers/dist/hamburgers.css";
import "../asset/css/styles.css";
import { useState } from "react";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <nav>
        <div className="container">
          <div className="nav-body">
            <div className="logo">
              <h2>Logo</h2>
            </div>
            <div className="nav-btn">
              <button
                className={`hamburger hamburger--collapse ${
                  isActive ? "is-active" : ""
                }`}
                type="button"
                onClick={toggleMenu}
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className={`nav-item ${isActive ? "show" : "hide"}`}>
          <div className="menus">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#home">About</a>
              </li>
              <li>
                <a href="#home">Service</a>
              </li>
              <li>
                <a href="#home">Profile</a>
              </li>
              <li>
                <a href="#home">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
