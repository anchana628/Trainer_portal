import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

const Container = styled.div`
    padding: 80px 40px 40px;
    background: ${colors.background};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% - 250px); /* Adjust width to avoid sidebar overlap */
    margin-left: 250px; /* Push content to the right */
`;

const Section = styled.div`
    width: 90%;
    max-width: 1400px;
    background: white;
    padding: 30px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    min-height: 500px; /* Increase height */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Heading = styled.h1`
  color: #002147;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 25px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 5px;
`;

const Button = styled.button`
  background: ${colors.primary};
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background: ${colors.secondary};
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

const Th = styled.th`
  background: ${colors.secondary};
  color: white;
  padding: 10px;
  text-align: left;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  text-align: left;
`;

const ResourcesPage = () => {
  const [resourceRequests, setResourceRequests] = useState([]);
  const [newRequest, setNewRequest] = useState({
    resourceName: "",
    description: "",
    urgency: "Medium",
    status: "Pending",
  });

  const handleChange = (e) => {
    setNewRequest({ ...newRequest, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!newRequest.resourceName || !newRequest.description) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    setResourceRequests([
      ...resourceRequests,
      { ...newRequest, id: resourceRequests.length + 1, date: new Date().toLocaleDateString() },
    ]);

    setNewRequest({ resourceName: "", description: "", urgency: "Medium", status: "Pending" });
    alert("Resource request submitted successfully!");
  };

  return (
    <Container>
      <Heading>Request Additional Resources</Heading>

      {/* Request Form */}
      <Section>
        <h2>Submit a New Resource Request</h2>
        <Label>Resource Name</Label>
        <Input
          type="text"
          name="resourceName"
          value={newRequest.resourceName}
          onChange={handleChange}
          placeholder="Enter resource name "
        />

        <Label>Description</Label>
        <TextArea
          name="description"
          value={newRequest.description}
          onChange={handleChange}
          placeholder="Explain why this resource is needed."
        />

        <Label>Urgency Level</Label>
        <Select name="urgency" value={newRequest.urgency} onChange={handleChange}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </Select>

        <Button onClick={handleSubmit}>Request Resource</Button>
      </Section>

      {/* Resource Request History */}
      {resourceRequests.length > 0 && (
        <Section>
          <h2>Resource Request History</h2>
          <Table>
            <thead>
              <tr>
                <Th>ID</Th>
                <Th>Resource</Th>
                <Th>Description</Th>
                <Th>Urgency</Th>
                <Th>Status</Th>
                <Th>Date</Th>
              </tr>
            </thead>
            <tbody>
              {resourceRequests.map((request) => (
                <tr key={request.id}>
                  <Td>{request.id}</Td>
                  <Td>{request.resourceName}</Td>
                  <Td>{request.description}</Td>
                  <Td>{request.urgency}</Td>
                  <Td>{request.status}</Td>
                  <Td>{request.date}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Section>
      )}
    </Container>
  );
};

export default ResourcesPage;
