
import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-md bg-white fixed-top shadow-sm px-4">
        <div className="container-fluid">
          <h1 className="navbar-brand fw-bold m-0">Trendify</h1>

          {/* Toggle button for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible menu */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarMenu">
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home <div className="loader"></div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products <div className="loader"></div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About <div className="loader"></div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact <div className="loader"></div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
