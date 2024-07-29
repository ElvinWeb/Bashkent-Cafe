import React from "react";
import logo_img from "../../bashkent-image/logo/logo.png";
import { NavLinksData } from "../../Data/NavLinksData";
import { Link, NavLink } from "react-router-dom";

const Navigation = ({ onScroll, onToggle, open }) => {
  return (
    <nav className={`bottom-nav ${onScroll ? "fixed-top" : ""}`}>
      <div className="container nav-container">
        <div className="inner">
          <Link to="/" className={`logo ${onScroll ? "" : "d-none"}`}>
            <img src={logo_img} alt="logo" />
          </Link>
          <div
            className={`black-overlay ${open ? "open-bg" : "d-none"}`}
            onClick={onToggle}
          ></div>
          <div className={`nav-links ${open ? "open" : ""}`}>
            <div className="container">
              <div className="nl-header d-xl-none ">
                <Link
                  to="/"
                  className={`side-logo ${
                    onScroll ? "d-xl-block" : "d-xl-none"
                  }`}
                >
                  <img src={logo_img} alt="logo" />
                </Link>
                <button className="close-btn d-xl-none" onClick={onToggle}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
              <div className="nl-body">
                <div className="links">
                  {NavLinksData.map((link) => (
                    <NavLink
                      key={link.id}
                      to={link.href}
                      className={({ isActive }) =>
                        isActive ? "link link-active" : "link"
                      }
                    >
                      {link.link}
                    </NavLink>
                  ))}
                  <Link to="/" className="btn-reserv border d-xl-none link">
                    Rezervasiya
                  </Link>
                </div>
                <div className="social-icons d-xl-none">
                  <a href="/#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="/#">
                    <i className="fa-brands fa-tiktok"></i>
                  </a>
                  <a href="/#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="/#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a href="/#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
