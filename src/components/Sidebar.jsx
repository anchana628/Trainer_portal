import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { FaHome, FaClipboardList, FaBox, FaCommentDots, FaBell, FaCertificate, FaBook, FaUserClock,  FaFileAlt } from "react-icons/fa";

const SidebarContainer = styled.div`
  width: 280px;
  background: ${colors.primary};
  color: white;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 20px; 
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  z-index: 10;
`;

const SidebarTitle = styled.h2`
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 18px 25px;
  text-decoration: none;
  color: white;
  font-size: 20px; /* Enlarged Text */
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  border-left: 5px solid transparent;

  &:hover {
    background: ${colors.secondary};
    border-left: 5px solid white;
    transform: scale(1.02);
  }

  &.active {
    background: ${colors.secondary}; 
    font-weight: bold; 
  }

  svg {
    font-size: 22px;
  }
`;

const Sidebar = () => {
  const location = useLocation();
  const [unreadNotifications, setUnreadNotifications] = useState(0);

  useEffect(() => {
    const storedNotifications = JSON.parse(localStorage.getItem("notifications")) || [];
    const unreadCount = storedNotifications.filter((notif) => !notif.read).length;
    setUnreadNotifications(unreadCount);
  }, []);

  return (
    <SidebarContainer>
      <SidebarTitle>Teaching Hub</SidebarTitle>

      <MenuItem to="/dashboard" className={location.pathname === "/dashboard" ? "active" : ""}>
        <FaHome /> Dashboard
      </MenuItem>

      <MenuItem to="/attendance" className={location.pathname === "/attendance" ? "active" : ""}>
        <FaClipboardList /> Attendance
      </MenuItem>

      <MenuItem to="/coursetracking" className={location.pathname === "/coursetracking" ? "active" : ""}>
        <FaBook /> Course Tracking
      </MenuItem>

      <MenuItem to="/reports" className={location.pathname === "/reports" ? "active" : ""}>
        <FaFileAlt /> Reports
      </MenuItem>

      <MenuItem to="/resources" className={location.pathname === "/resources" ? "active" : ""}>
        <FaBox /> Resource Requests
      </MenuItem>

      <MenuItem to="/certificates" className={location.pathname === "/certificates" ? "active" : ""}>
        <FaCertificate /> Certificates
      </MenuItem>

      <MenuItem to="/feedback" className={location.pathname === "/feedback" ? "active" : ""}>
        <FaCommentDots /> Trainer Feedback
      </MenuItem>

      <MenuItem to="/substitutes" className={location.pathname === "/substitutes" ? "active" : ""}>
        <FaUserClock /> Substitute Trainers
      </MenuItem>

      <MenuItem to="/notifications" className={location.pathname === "/notifications" ? "active" : ""}>
        <FaBell /> Notifications
        {unreadNotifications > 0 && <span style={{ background: "red", padding: "5px 10px", borderRadius: "50%" }}>{unreadNotifications}</span>}
      </MenuItem>
    </SidebarContainer>
  );
};

export default Sidebar;
