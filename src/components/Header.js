import React from "react";
import "./Header.css";

const Header = ({ username, onLogout }) => {
  return (
    <div className="header">
      <div className="header-title">COIMBATORE</div>
      <div className="header-user">
        <span className="username">Hello, {username}</span>
        <div className="dropdown">
          <button className="dropdown-button">Profile</button>
          <button className="dropdown-button" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
