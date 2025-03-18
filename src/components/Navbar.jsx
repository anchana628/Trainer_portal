// import React, { useState } from "react";
// import styled from "styled-components";
// import { colors } from "../styles/colors";
// import { Link } from "react-router-dom"; 
// import "../styles/global.css";

// const Nav = styled.nav`
//   background: ${colors.primary};
//   color: white;
//   padding: 15px 20px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: fixed;
//   top: 0;
//   width: 100%;
//   z-index: 1000;
// `;

// const LeftContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;

// const RightContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 15px;
//   margin-right: 20px;
//   position: relative;
// `;

// const MenuButton = styled.button`
//   background: none;
//   border: none;
//   color: white;
//   font-size: 18px;
//   cursor: pointer;
// `;

// const HomeText = styled.h2`
//   flex-grow: 1;
//   text-align: center;
//   font-size: 20px;
//   margin: 0;
//   font-weight: bold;
// `;

// const ProfileInfo = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   cursor: pointer;
// `;

// const ProfileName = styled.span`
//   font-size: 16px;
//   font-weight: bold;
//   color: white;
// `;

// const ProfileImage = styled.img`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   border: 2px solid white;
//   cursor: pointer;
// `;

// const ProfileMenu = styled.div`
//   position: absolute;
//   top: 50px;
//   right: 0;
//   background: white;
//   color: black;
//   width: 180px;
//   border-radius: 8px;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
//   display: ${({ isOpen }) => (isOpen ? "block" : "none")};
// `;

// const ProfileOption = styled(Link)`
//   display: block;
//   padding: 10px;
//   text-decoration: none;
//   color: black;
//   &:hover {
//     background: ${colors.secondary};
//     color: white;
//   }
// `;

// const Navbar = ({ title }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Dummy user details (Replace with API/user context if needed)
//   const user = {
//     name: "Anchana A.S",
//     image: "/images/profile.jpg",
//   };

//   return (
//     <Nav>
//       <LeftContainer>
//         <MenuButton>☰ Menu</MenuButton>
//       </LeftContainer>
//       <HomeText>{title}</HomeText>
//       <RightContainer>
//         <ProfileInfo onClick={() => setIsOpen(!isOpen)}>
//           <ProfileName>{user.name}</ProfileName>
//           <ProfileImage src={user.image} alt="Profile" />
//         </ProfileInfo>
//         <ProfileMenu isOpen={isOpen}>
//           <ProfileOption to="/profile">View Profile</ProfileOption>
//           <ProfileOption to="/">Logout</ProfileOption>
//         </ProfileMenu>
//       </RightContainer>
//     </Nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { Link } from "react-router-dom"; 
import "../styles/global.css";

const Nav = styled.nav`
  background: ${colors.primary};
  color: white;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 25px;
  position: relative;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 25px; /* Increased size */
  cursor: pointer;
`;

const HomeText = styled.h2`
  flex-grow: 1;
  text-align: center;
  font-size: 25px; /* Increased size */
  margin: 0;
  font-weight: bold;
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

const ProfileName = styled.span`
  font-size: 22px; /* Increased size */
  font-weight: bold;
  color: white;
`;

const ProfileImage = styled.img`
  width: 45px; /* Slightly larger */
  height: 45px;
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
`;

const ProfileMenu = styled.div`
  position: absolute;
  top: 55px;
  right: 0;
  background: white;
  color: black;
  width: 190px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const ProfileOption = styled(Link)`
  display: block;
  padding: 12px;
  font-size: 16px; /* Increased size */
  text-decoration: none;
  color: black;
  &:hover {
    background: ${colors.secondary};
    color: white;
  }
`;

const Navbar = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Dummy user details (Replace with API/user context if needed)
  const user = {
    name: "Anchana A.S",
    image: "/images/profile.jpg",
  };

  return (
    <Nav>
      <LeftContainer>
        <MenuButton>☰ Menu</MenuButton>
      </LeftContainer>
      <HomeText>{title}</HomeText>
      <RightContainer>
        <ProfileInfo onClick={() => setIsOpen(!isOpen)}>
          <ProfileName>{user.name}</ProfileName>
          <ProfileImage src={user.image} alt="Profile" />
        </ProfileInfo>
        <ProfileMenu isOpen={isOpen}>
          <ProfileOption to="/profile">View Profile</ProfileOption>
          <ProfileOption to="/">Logout</ProfileOption>
        </ProfileMenu>
      </RightContainer>
    </Nav>
  );
};

export default Navbar;
