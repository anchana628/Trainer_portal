// import React, { useState } from "react";
// import styled from "styled-components";
// import { colors } from "../styles/colors";
// import { FaBell, FaExclamationTriangle } from "react-icons/fa";

// const NotificationsContainer = styled.div`
//    padding: 80px 40px 40px;
//     background: ${colors.background};
//     min-height: 100vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     width: calc(100% - 250px); /* Ensure content does not overlap sidebar */
//     margin-left: 250px; /* Push content to the right */
//     box-sizing: border-box;
// `;

// const Heading = styled.h1`
//  color: #002147;
//   font-size: 32px;
//   font-weight: bold;
//   margin-bottom: 25px;
//   text-transform: uppercase;
//   letter-spacing: 1px;
// `;


// const NotificationList = styled.div`
//   width: 90%;
//   max-width: 750px;
//   display: flex;
//   flex-direction: column;
//   gap: 15px;
// `;

// const NotificationItem = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   background: white;
//   padding: 28px; /* Increased padding for bigger height */
//   border-radius: 14px;
//   box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
//   border-left: 12px solid ${props => (props.type === "alert" ? "#d9534f" : colors.secondary)};
//   width: 95%; /* Increased width */
//   max-width: 1000px; /* Wider boxes */
// `;



// const NotificationDetails = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 14px;
// `;

// const NotificationText = styled.p`
//   font-size: 16px;
//   color: ${colors.primary};
//   margin: 0;
//   max-width: 75%;
//   line-height: 1.4;
// `;

// const IconWrapper = styled.div`
//   font-size: 20px;
//   color: ${(props) => (props.type === "alert" ? "#d9534f" : colors.secondary)};
// `;

// const DismissButton = styled.button`
//   background: ${colors.primary};
//   color: white;
//   border: none;
//   padding: 8px 12px;
//   border-radius: 6px;
//   font-size: 14px;
//   cursor: pointer;
//   transition: background 0.3s;

//   &:hover {
//     background: #001a33;
//   }
// `;

// const NoNotifications = styled.p`
//   text-align: center;
//   color: ${colors.primary};
//   font-size: 16px;
//   padding: 15px;
//   font-weight: 500;
// `;

// const NotificationsPage = () => {
//   const [notifications, setNotifications] = useState([
//     { id: 1, message: "🚨 JavaScript class rescheduled to 3:00 PM", type: "alert" },
//     { id: 2, message: "📅 Reminder: Attendance submission due today", type: "info" },
//     { id: 3, message: "📄 New Report Available for Batch B", type: "info" },
//   ]);

//   const dismissNotification = (id) => {
//     // Animate before removing
//     const updatedNotifications = notifications.map((notification) =>
//       notification.id === id ? { ...notification, dismissed: true } : notification
//     );

//     setNotifications(updatedNotifications);

//     setTimeout(() => {
//       setNotifications(notifications.filter((notification) => notification.id !== id));
//     }, 300); // Wait for animation to complete
//   };

//   return (
//     <NotificationsContainer>
//       <Heading>📢 Notifications</Heading>

//       <NotificationList>
//         {notifications.length > 0 ? (
//           notifications.map((notification) => (
//             <NotificationItem key={notification.id} type={notification.type} className={notification.dismissed ? "dismissed" : ""}>
//               <NotificationDetails>
//                 <IconWrapper type={notification.type}>
//                   {notification.type === "alert" ? <FaExclamationTriangle /> : <FaBell />}
//                 </IconWrapper>
//                 <NotificationText>{notification.message}</NotificationText>
//               </NotificationDetails>
//               <DismissButton onClick={() => dismissNotification(notification.id)}>Dismiss</DismissButton>
//             </NotificationItem>
//           ))
//         ) : (
//           <NoNotifications>✅ No new notifications!</NoNotifications>
//         )}
//       </NotificationList>
//     </NotificationsContainer>
//   );
// };

// export default NotificationsPage;


import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { FaBell, FaExclamationTriangle } from "react-icons/fa";

const NotificationsContainer = styled.div`
  padding: 100px 60px; /* More padding for spacing */
  background: ${colors.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 250px);
  margin-left: 250px;
  box-sizing: border-box;
`;

const Heading = styled.h1`
  color: #002147;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 25px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const NotificationList = styled.div`
  width: 100%;
  max-width: 1200px; /* Increased max width */
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const NotificationItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 35px; /* More padding */
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  border-left: 14px solid ${(props) => (props.type === "alert" ? "#d9534f" : colors.secondary)};
  width: 100%;
  max-width: 1100px; /* Wider boxes */
`;

const NotificationDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 20px; /* More spacing between icon and text */
`;

const NotificationText = styled.p`
  font-size: 20px; /* Larger text */
  color: ${colors.primary};
  margin: 0;
  max-width: 80%;
  line-height: 1.6;
`;

const IconWrapper = styled.div`
  font-size: 26px; /* Bigger icons */
  color: ${(props) => (props.type === "alert" ? "#d9534f" : colors.secondary)};
`;

const DismissButton = styled.button`
  background: ${colors.primary};
  color: white;
  border: none;
  padding: 14px 18px; /* Larger buttons */
  border-radius: 8px;
  font-size: 18px; /* Bigger text */
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #001a33;
  }
`;

const NoNotifications = styled.p`
  text-align: center;
  color: ${colors.primary};
  font-size: 20px;
  padding: 20px;
  font-weight: bold;
`;

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "🚨 JavaScript class rescheduled to 3:00 PM", type: "alert" },
    { id: 2, message: "📅 Reminder: Attendance submission due today", type: "info" },
    { id: 3, message: "📄 New Report Available for Batch B", type: "info" },
  ]);

  const dismissNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  return (
    <NotificationsContainer>
      <Heading>📢 Notifications</Heading>

      <NotificationList>
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <NotificationItem key={notification.id} type={notification.type}>
              <NotificationDetails>
                <IconWrapper type={notification.type}>
                  {notification.type === "alert" ? <FaExclamationTriangle /> : <FaBell />}
                </IconWrapper>
                <NotificationText>{notification.message}</NotificationText>
              </NotificationDetails>
              <DismissButton onClick={() => dismissNotification(notification.id)}>Dismiss</DismissButton>
            </NotificationItem>
          ))
        ) : (
          <NoNotifications>✅ No new notifications!</NoNotifications>
        )}
      </NotificationList>
    </NotificationsContainer>
  );
};

export default NotificationsPage;
