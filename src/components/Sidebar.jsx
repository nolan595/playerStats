import React from "react";
import {
  FaGamepad,
  FaList,
  FaCalendarAlt,
  FaTrophy,
  FaUserCog,
  FaBook,
  FaCog,
  FaUsers,
} from "react-icons/fa";
import "./styles.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/whiteLogo.svg" alt="Hunch Logo" className="logo-image" />
      </div>
      <ul className="nav-list">
        <li className="inactive">
          <FaGamepad /> Dashboard
        </li>
        <li className="inactive">
          <FaList /> Games
        </li>
        <Link to='/sport-events'>
        <li className="inactive">
          <FaCalendarAlt /> External Sport Events
        </li>
        </Link>
        <Link to="/teams">
        <li className="inactive">
          <FaUsers /> Teams
        </li>
        </Link>

        <li className="inactive">
          <FaTrophy /> Custom Leaderboards
        </li>
        <li className="inactive">
          <FaUserCog /> CRM
        </li>
        <li className="inactive">
          <FaBook /> CMS
        </li>
        <li className="inactive">
          <FaCog /> Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
