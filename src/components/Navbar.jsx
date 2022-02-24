import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
const Navbar = () => {
  return (
    <>
      <div class="container-fluid px-0">
        <header>
          <div className="shape"></div>
          <nav className="navbar fixed-top navbar-expand-lg bg-black ">
            {/* <img
              src={logo}
              alt="logo-img"
              style={{ height: "70px", width: "120px" }}
            /> */}
            <h1 style={{ height: "70px", width: "120px" }}>SRJ</h1>
            <button
              className="navbar-toggler  bg-light"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fas fa-bars"></span>{" "}
            </button>
            <div
              className="collapse navbar-collapse mt-4"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto ">
                <li className="nav-item pt-3">
                  <Link to="/" className="nav_link">
                    Home{" "}
                  </Link>
                </li>

                <li className="nav-item pt-3">
                  <Link to="/about" className="nav_link">
                    About Me{" "}
                  </Link>
                </li>

                <li className="nav-item  pt-3">
                  <Link to="/services" className="nav_link">
                    Services
                  </Link>
                </li>

                <li className="nav-item  pt-3">
                  <Link to="/skill" className="nav_link">
                    Skills{" "}
                  </Link>
                </li>

                <li className="nav-item  pt-3">
                  <Link to="/teams" className="nav_link">
                    Teams{" "}
                  </Link>
                </li>

                <li className="nav-item  pt-3 ">
                  <Link to="/contact" className="nav_link">
                    Contact{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
