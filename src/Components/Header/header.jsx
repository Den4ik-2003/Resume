import "./header.css";
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const [db, setDb] = useState("db-none");
  const [overlay, setOverlay] = useState("overlay-none");
  const [burgerOpen, setBurgerOpen] = useState(false);
  const location = useLocation();

  const getClassName = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const dbClick = () => {
    setDb(db === "db-none" ? "db-block" : "db-none");
    setOverlay(overlay === "overlay-none" ? "overlay-block" : "overlay-none");
    setBurgerOpen(!burgerOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 950) {
        setDb("db-none");
        setOverlay("overlay-none");
        setBurgerOpen(false);
      }
    };

    const close = () => {
      if (window.innerWidth >= 950) {
        setDb("db-none");
        setOverlay("overlay-none");
        setBurgerOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    close();
    window.addEventListener("resize", close);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", close);
    };
  }, []);

  return (
    <div className="header">
      <div className={`overlay ${overlay}`} onClick={dbClick}></div>
      <ul className="flex alignCenter justifyBetween">
        <li>
          <a href="#" className="logo">
            Denys <span className="orange">.</span>
          </a>
        </li>
        <li onClick={close}>
          <div className={`navigation ${db}`}>
            <ul className="flex alignCenter">
              <li>
                <NavLink
                  className={`list ${getClassName("/home")}`}
                  to="/home"
                  onClick={dbClick}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`list ${getClassName("/services")}`}
                  to="/services"
                  onClick={dbClick}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`list ${getClassName("/resume")}`}
                  to="/resume"
                  onClick={dbClick}
                >
                  Resume
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`list ${getClassName("/work")}`}
                  to="/work"
                  onClick={dbClick}
                >
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`list ${getClassName("/contact")}`}
                  to="/contact"
                  onClick={dbClick}
                >
                  Contact
                </NavLink>
              </li>
              <li className="btnHire">
                <NavLink to="/contact">
                  <input
                    type="button"
                    className="btn"
                    value="Hire me"
                    onClick={dbClick}
                  />
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li className="burgerContainer">
          <img
            className="burger"
            src={burgerOpen ? "./icons/close.svg" : "./icons/burger.png"}
            alt="Burger"
            onClick={dbClick}
          />
        </li>
      </ul>
    </div>
  );
}
