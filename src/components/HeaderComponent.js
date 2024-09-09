import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSignOutAlt,
  faCaretDown,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import "./HeaderComponent.css";
import CleverQLogo from "../images/cleverq logo.png";
import CleverQLogo2 from "../images/cleverq logo2.png";

const HeaderComponent = () => {
  return (
    <header className="header-container">
      {/* Logo (Left) */}
      <div className="logo">
        <img src={CleverQLogo2} alt="CleverQ Logo2" />
      </div>

      {/* Header Title */}
      <div className="header-title">
        <p>Alle Dienste</p>
      </div>

      {/* Dropdown Menu */}
      <div className="dropdown">
        <button className="dropdown-button">
          <FontAwesomeIcon icon={faTv} /> Display Options{" "}
          <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: "10px" }} />
        </button>
        <div className="dropdown-content">
          <a href="#">Display: Monitor</a>
          <a href="#">Display: Monitor Raum-Status</a>
          <a href="#">Display: Monitor mit Slideshow</a>
          <a href="#">Display: Digital Signage 1</a>
          <a href="#">Display: Digital Signage 2</a>
          <a href="#">Display: Testmonitor Heidenheim</a>
          <a href="#">Service-Terminal: Touchscreen</a>
          <a href="#">Service-Terminal: Samsung-Terminal</a>
          <a href="#">Web appointments page</a>
        </div>
      </div>

      {/* Log Out (Right) */}
      <div className="dropdown">
        <button
          className="dropdown-button"
          style={{ width: "50%", minWidth: " 130px" }}
        >
          <FontAwesomeIcon icon={faUser} /> {/* User Icon */}
          <FontAwesomeIcon
            icon={faCaretDown}
            style={{ marginLeft: "10px" }}
          />{" "}
          {/* Dropdown Indicator */}
        </button>
        <div className="dropdown-content" style={{ minWidth: " 130px" }}>
          <a href="#">
            {" "}
            <b>Agency</b> User
          </a>
          <a href="#">Edit Profile</a>
          <a
            href="#"
            onMouseEnter={(e) => (e.target.style.color = "red")}
            onMouseLeave={(e) => (e.target.style.color = "black")}
          >
            LogOut
          </a>
        </div>
      </div>

      {/* Second Logo (Right) */}
      <div className="logoBIC">
        <img src={CleverQLogo} alt="CleverQ Logo" />
      </div>
    </header>
  );
};

export default HeaderComponent;
