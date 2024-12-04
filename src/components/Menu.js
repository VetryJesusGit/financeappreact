import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

import {
  FaTachometerAlt,
  FaSearch,
  FaFileInvoice,
  FaRegListAlt,
  FaChartBar,
  FaUsers,
  FaCog,
  FaBook,
} from "react-icons/fa";

const Menu = ({ isOpen, toggleMenu }) => {
  const menuItems = [
   /* { name: "Dashboard", path: "/", icon: <FaTachometerAlt /> }, */
    { name: "Search", path: "/search", icon: <FaSearch /> },
    { name: "Quick Bill", path: "/quick-bill", icon: <FaFileInvoice /> },
    { name: "Entry", path: "/entry", icon: <FaRegListAlt /> },
    { name: "Pending List", path: "/pending-list", icon: <FaBook /> },
    { name: "Reports", path: "/reports", icon: <FaChartBar /> },
    { name: "Accounts", path: "/accounts", icon: <FaUsers /> },
    { name: "Options", path: "/options", icon: <FaCog /> },
  ];
  
  const [expandedMenu, setExpandedMenu] = useState(null); // Tracks which menu is expanded

  const handleExpandCollapse = (menu) => {
    if (expandedMenu === menu) {
      setExpandedMenu(null); // Collapse if already expanded
    } else {
      setExpandedMenu(menu); // Expand the clicked menu
    }
  };

  return (
    <div className={`menu-container ${isOpen ? "" : "closed"}`}>
      <button className="menu-toggle" onClick={toggleMenu}>
      &#9776;
      </button>
      <ul className="menu">
        {/* Dashboard */}
        <li>
          <Link to="/">
          <span className="menu-icon"><FaTachometerAlt />  </span>
          {isOpen && <span className="menu-text">Dashboard</span>}
          </Link>
        </li>

        {/* Master with Subitems */}
        <li>
          <div className="menu-item" onClick={() => handleExpandCollapse("master")}>
            Master {expandedMenu === "master" ? "▲" : "▼"}
          </div>
          {expandedMenu === "master" && (
            <ul className="submenu">
              <li>
                <Link to="/master/group"><span className="menu-icon"><FaUsers />  </span>
                {isOpen && <span className="menu-text">Group</span>}
                </Link>
               
              </li>
              <li>
                <Link to="/master/scheme">Scheme</Link>
              </li>
              <li>
                <Link to="/master/customer">Customer</Link>
              </li>
              <li>
                <Link to="/master/view-customer">View Customer</Link>
              </li>
            </ul>
          )}
        </li>

        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <Link to={item.path}>
              <span className="menu-icon">{item.icon}  </span>
              {isOpen && <span className="menu-text"> {item.name}</span>}
            </Link>
          </li>
        ))}

       
      </ul>
    </div>
  );
};



export default Menu;