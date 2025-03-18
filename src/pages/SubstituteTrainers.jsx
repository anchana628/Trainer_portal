// import React, { useState } from "react";
// import styled from "styled-components";
// import { colors } from "../styles/colors";
// const Container = styled.div`
//     padding: 80px 40px 40px;
//     background: ${colors.background};
//     min-height: 100vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     width: calc(100% - 250px); /* Ensure content does not overlap sidebar */
//     margin-left: 250px; /* Push content to the right */
//     box-sizing: border-box;
//     max-width: 100%;
// `;
// const Heading = styled.h1`
//    color: #002147;
//   font-size: 32px;
//   font-weight: bold;
//   margin-bottom: 25px;
//   text-transform: uppercase;
//   letter-spacing: 1px;
// `;

// const FormContainer = styled.div`
//   background: white;
//   padding: 30px; /* Increase padding */
//   border-radius: 10px;
//   box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Deeper shadow */
//   max-width: 900px; /* Increase width */
//   width: 90%; /* Ensure responsiveness */
//   margin: 0 auto;
//   margin-bottom: 30px; /* Add spacing */
//     `;

// const Input = styled.input`
//     width: 100%;
//   padding: 12px;
//   margin-bottom: 15px;
//   border: 2px solid #ccc;
//   border-radius: 6px;
//   font-size: 16px;
// `;

// const SubmitButton = styled.button`
//   background: ${colors.primary};
//   color: white;
//   border: none;
//   padding: 15px; /* Larger button */
//   font-size: 18px;
//   font-weight: bold;
//   border-radius: 6px;
//   cursor: pointer;
//   width: 100%;
//   text-align: center;
//   transition: all 0.3s ease;

//   &:hover {
//     background: ${colors.secondary};
//   }
// `;

// const RequestList = styled.div`
//   margin-top: 30px;
//   width: 100%;
//   max-width: 700px;
// `;
// const RequestItem = styled.div`
//   background: white;
//   padding: 20px; /* More padding */
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* Stronger shadow */
//   margin-bottom: 15px;
// `;

// // const RequestItem = styled.div`
// //   background: white;
// //   padding: 15px;
// //   border-radius: 8px;
// //   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// //   margin-bottom: 10px;
// // `;

// const RequestTitle = styled.h3`
//   color: ${colors.primary};
//   margin-bottom: 5px;
// `;

// const RequestDetails = styled.p`
//   color: ${colors.text};
//   font-size: 14px;
// `;

// const SubstituteTrainers = () => {
//   const [formData, setFormData] = useState({
//     trainerName: "",
//     substituteName: "",
//     date: "",
//     time: "",
//     reason: "",
//   });

//   const [requests, setRequests] = useState([]); // Store submitted requests

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Add the new request to the list
//     setRequests([...requests, formData]);

//     // Clear the form fields
//     setFormData({
//       trainerName: "",
//       substituteName: "",
//       date: "",
//       time: "",
//       reason: "",
//     });

//     alert("Substitution request submitted successfully!");
//   };

//   return (
//     <Container>
//       <Heading>Substitute Trainer Management</Heading>
//       <FormContainer>
//         <form onSubmit={handleSubmit}>
//           <Input type="text" name="trainerName" placeholder="Trainer Name" value={formData.trainerName} onChange={handleChange} required />
//           <Input type="text" name="substituteName" placeholder="Substitute Trainer Name" value={formData.substituteName} onChange={handleChange} required />
//           <Input type="date" name="date" value={formData.date} onChange={handleChange} required />
//           <Input type="time" name="time" value={formData.time} onChange={handleChange} required />
//           <Input type="text" name="reason" placeholder="Reason for substitution" value={formData.reason} onChange={handleChange} required />
//           <SubmitButton type="submit">Submit Request</SubmitButton>
//         </form>
//       </FormContainer>

//       {/* Display Submitted Requests */}
//       <RequestList>
//         <Heading>Submitted Requests</Heading>
//         {requests.length === 0 ? (
//           <p>No requests submitted yet.</p>
//         ) : (
//           requests.map((req, index) => (
//             <RequestItem key={index}>
//               <RequestTitle>{req.trainerName} → {req.substituteName}</RequestTitle>
//               <RequestDetails>Date: {req.date} | Time: {req.time}</RequestDetails>
//               <RequestDetails>Reason: {req.reason}</RequestDetails>
//             </RequestItem>
//           ))
//         )}
//       </RequestList>
//     </Container>
//   );
// };

// export default SubstituteTrainers;

import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

const PageContainer = styled.div`
  padding: 80px 40px 40px;
  background: ${colors.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 270px);
  margin-left: 270px;
  box-sizing: border-box;
  max-width: 100%;
`;

const Heading = styled.h1`
  color: #002147;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 25px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
`;

const FormWrapper = styled.div`
  background: white;
  padding: 50px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 1100px;
  margin-bottom: 40px;
`;

const Input = styled.input`
  width: 100%;
  padding: 16px;
  margin-bottom: 20px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  background: ${colors.primary};
  color: white;
  border: none;
  padding: 18px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.secondary};
  }
`;

const RequestList = styled.div`
  width: 100%;
  max-width: 1100px;
`;

const RequestCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  border-left: 6px solid ${colors.primary};
`;

const RequestTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #002147;
  font-weight: bold;
`;

const RequestText = styled.p`
  margin: 5px 0;
  font-size: 16px;
  color: #333;
`;

const SubstituteTrainers = () => {
  const [formData, setFormData] = useState({
    trainerName: "",
    substituteName: "",
    date: "",
    time: "",
    reason: "",
  });

  const [submittedRequests, setSubmittedRequests] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedRequests([...submittedRequests, formData]);
    setFormData({
      trainerName: "",
      substituteName: "",
      date: "",
      time: "",
      reason: "",
    });
  };

  return (
    <PageContainer>
      <Heading>Substitute Trainer Management</Heading>
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <Input type="text" name="trainerName" placeholder="Trainer Name" value={formData.trainerName} onChange={handleChange} required />
          <Input type="text" name="substituteName" placeholder="Substitute Trainer Name" value={formData.substituteName} onChange={handleChange} required />
          <Input type="date" name="date" value={formData.date} onChange={handleChange} required />
          <Input type="time" name="time" value={formData.time} onChange={handleChange} required />
          <Input type="text" name="reason" placeholder="Reason for substitution" value={formData.reason} onChange={handleChange} required />
          <SubmitButton type="submit">Submit Request</SubmitButton>
        </form>
      </FormWrapper>

      {/* Display submitted requests */}
      <RequestList>
        {submittedRequests.length > 0 && <Heading>Submitted Requests</Heading>}
        {submittedRequests.map((request, index) => (
          <RequestCard key={index}>
            <RequestTitle>Trainer: {request.trainerName}</RequestTitle>
            <RequestText><strong>Substitute:</strong> {request.substituteName}</RequestText>
            <RequestText><strong>Date:</strong> {request.date}</RequestText>
            <RequestText><strong>Time:</strong> {request.time}</RequestText>
            <RequestText><strong>Reason:</strong> {request.reason}</RequestText>
          </RequestCard>
        ))}
      </RequestList>
    </PageContainer>
  );
};

export default SubstituteTrainers;
