import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import styled from "styled-components";
import { colors } from "../styles/colors";
const Container = styled.div`
  padding: 80px 40px 40px;
    background: ${colors.background};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% - 250px); /* Ensure content does not overlap sidebar */
    margin-left: 250px; /* Push content to the right */
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

const SelectionContainer = styled.div`
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

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #002147;
  margin-bottom: 8px;
`;

const Select = styled.select`
  padding: 12px;
  font-size: 16px;
  border: 2px solid #002147;
  border-radius: 5px;
  background: white;
  cursor: pointer;
  margin-bottom: 15px;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 2px solid #002147;
  border-radius: 5px;
  background: white;
  margin-bottom: 15px;
`;

const PreviewContainer = styled.div`
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
const Button = styled.button`
  background: #002147;
  color: white;
  padding: 16px 0; /* Remove side padding to allow full width */
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%; /* Make button full width */
  text-align: center;

  &:hover {
    background: #4A90E2;
  }
`;
const ButtonContainer = styled.div`
  width: 90%;
  max-width: 1400px; /* Match width of PreviewContainer */
  margin: 20px auto 0; /* Center the button */
  display: flex;
  justify-content: center;
`;


// Student Data
const studentsData = {
  "Batch A": ["John Doe", "Jane Smith", "Alice Johnson"],
  "Batch B": ["Mark Taylor", "Sarah Lee", "David Brown"],
  "Batch C": ["Emily Davis", "Michael Scott", "Laura Wilson"],
};

const CertificateGenerator = () => {
  const [batch, setBatch] = useState("");
  const [students, setStudents] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [completionDate, setCompletionDate] = useState("");

  const handleBatchChange = (e) => {
    const selectedBatch = e.target.value;
    setBatch(selectedBatch);
    setStudents(studentsData[selectedBatch] || []);
    setStudentName("");
  };

  const generatePDF = () => {
    const certificateElement = document.getElementById("certificate-preview");
    html2canvas(certificateElement, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("landscape", "mm", "a4");
      pdf.addImage(imgData, "PNG", 10, 10, 280, 150);
      pdf.save(`${studentName}_certificate.pdf`);
    });
  };

  return (
    <Container>
      <Heading>Certificate</Heading>
      <SelectionContainer>
        <Label>Select the batch:</Label>
        <Select value={batch} onChange={handleBatchChange}>
          <option value="">Select Batch</option>
          {Object.keys(studentsData).map((batch) => (
            <option key={batch} value={batch}>{batch}</option>
          ))}
        </Select>

        <Label>Select the student:</Label>
        <Select value={studentName} onChange={(e) => setStudentName(e.target.value)} disabled={!batch}>
          <option value="">Select Student</option>
          {students.map((student) => (
            <option key={student} value={student}>{student}</option>
          ))}
        </Select>

        <Label>Enter the course name:</Label>
        <Input type="text" placeholder="Course Name" value={courseName} onChange={(e) => setCourseName(e.target.value)} />

        <Label>Select the completion date:</Label>
        <Input type="date" value={completionDate} onChange={(e) => setCompletionDate(e.target.value)} />
      </SelectionContainer>

      <PreviewContainer id="certificate-preview">
        <h2 style={{ color: "#002147", marginTop: "20px" }}>EXPERIENCE CERTIFICATE</h2>
        <h3 style={{ textDecoration: "underline", marginBottom: "20px" }}>To Whom It May Concern</h3>
        <p>This is to certify that <strong>{studentName}</strong> has successfully completed a <strong>6-month</strong> professional engagement with our organization, gaining expertise in <strong>{courseName}</strong>.</p>
        <p>Their work involved various industry-standard projects, showcasing proficiency in full-stack development, database management, and application deployment.</p>
        <p>We appreciate their dedication and wish them continued success.</p>
        <p style={{ marginTop: "20px" }}><strong>Date of Issue:</strong> {completionDate}</p>
        <div style={{ marginTop: "40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <strong>Anchana A.S</strong>
            <br />
            Founder & CEO
          </div>
        </div>
      </PreviewContainer>
      <ButtonContainer>
             <Button onClick={generatePDF}>Generate & Download PDF</Button>
      </ButtonContainer>

    </Container>
  );
};

export default CertificateGenerator;







