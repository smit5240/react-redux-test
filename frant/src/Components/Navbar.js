import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Online-Shoping
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li
              className={`nav-item ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/add" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/add">
                AddProduct
              </Link>
            </li>
            {/* <li
              className={`nav-item ${
                location.pathname === "/select" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/select">
                SelectProduct
              </Link>
            </li> */}
            <li
              className={`nav-item ${
                location.pathname === "/all" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/all">
                Showall
              </Link>
            </li>
          </ul>
          <div></div>
        </div>
      </nav>
    </div>
  );
}
