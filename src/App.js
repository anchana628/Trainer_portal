// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import AttendancePage from "./pages/AttendancePage";
// import ReportsPage from "./pages/ReportsPage";
// import ResourcesPage from "./pages/ResourcesPage";
// import FeedbackPage from "./pages/FeedbackPage"; 
// import NotificationsPage from "./pages/NotificationsPage";
// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";
// import './styles/global.css';

// function App() {
//   const [pageTitle, setPageTitle] = useState("Dashboard");

//   return (
//     <Router>
//       <PageTracker setPageTitle={setPageTitle} />
//       <Navbar title={pageTitle} /> 
//       <Sidebar setPageTitle={setPageTitle} />
//       <div className="content">
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/attendance" element={<AttendancePage />} />
//           <Route path="/reports" element={<ReportsPage />} />
//           <Route path="/resources" element={<ResourcesPage />} />
//           <Route path="/feedback" element={<FeedbackPage />} /> 
//           <Route path="/notifications" element={<NotificationsPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// // Component to Track Page Changes
// const PageTracker = ({ setPageTitle }) => {
//   const location = useLocation();

//   useEffect(() => {
//     const pageTitles = {
//       "/": "Dashboard",
//       "/dashboard": "Dashboard",
//       "/attendance": "Attendance",
//       "/reports": "Reports",
//       "/resources": "Resources",
//       "/feedback": "Feedback",
//       "/notifications": "Notifications",
//     };
//     setPageTitle(pageTitles[location.pathname] || "Trainer Portal");
//   }, [location, setPageTitle]);

//   return null; 
// };

// export default App;
import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AttendancePage from "./pages/AttendancePage";
import ReportsPage from "./pages/ReportsPage";
import ResourcesPage from "./pages/ResourcesPage";
import CourseTracking from "./pages/CourseTracking";
import SubstituteTrainers from "./pages/SubstituteTrainers";
import Certificates from "./pages/Certificates";
import FeedbackPage from "./pages/FeedbackPage"; 
import NotificationsPage from "./pages/NotificationsPage";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import './styles/global.css';

function App() {
  const [pageTitle, setPageTitle] = useState("Dashboard");

  return (
    <Router>
      <PageTracker setPageTitle={setPageTitle} />
      <Navbar title={pageTitle} /> 
      <Sidebar setPageTitle={setPageTitle} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/coursetracking" element={<CourseTracking />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/substitutes" element={<SubstituteTrainers />} />
          <Route path="/feedback" element={<FeedbackPage />} /> 
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

// ✅ Fixed PageTracker Component
const PageTracker = ({ setPageTitle }) => {
  const location = useLocation();

  useEffect(() => {
    const pageTitles = {
      "/": "Dashboard",
      "/dashboard": "Dashboard",
      "/attendance": "Attendance",
      "/reports": "Reports",
      "/resources": "Resources",
      "/coursetracking":"CourseTracking",
      "/substitutes":"SubstituteTrainers",
      "/feedback": "Feedback",
      "/notifications": "Notifications",
    };
    setPageTitle(pageTitles[location.pathname] || "Trainer Portal");
  }, [location.pathname, setPageTitle]); // ✅ Now includes 'setPageTitle'

  return null; 
};

export default App;
