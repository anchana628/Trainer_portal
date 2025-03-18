// const Profile = () => {
//     return <h1>Profile Page</h1>;
//   };
  
//   export default Profile;
import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";  

const ProfileContainer = styled.div`
  max-width: 600px;
  margin: 80px auto; 
  padding: 20px;
  background: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid ${colors.primary};
`;

const ProfileName = styled.h2`
  margin: 10px 0;
  color: ${colors.primary};
`;

const ProfileInfo = styled.p`
  font-size: 16px;
  color: ${colors.text};
`;

const Profile = () => {
  const user = {
    name: "Anchana A.S",
    email: "anchana@gmail.com",
    phone: "+91 88888888888",
    image: "/images/profile.jpg",
  };

  return (
    <ProfileContainer>
      <ProfileImage src={user.image} alt="Profile" />
      <ProfileName>{user.name}</ProfileName>
      <ProfileInfo>Email: {user.email}</ProfileInfo>
      <ProfileInfo>Phone: {user.phone}</ProfileInfo>
    </ProfileContainer>
  );
};

export default Profile;
