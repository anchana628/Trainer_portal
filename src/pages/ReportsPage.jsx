import React, { useState } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import styled from "styled-components";
import { colors } from "../styles/colors";

/* Styled Components */
const ReportContainer = styled.div`
   padding: 80px 40px 40px;
    background: ${colors.background};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Heading = styled.h1`
    color: #002147;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 25px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const SelectLabel = styled.label`
  font-size: 18px;
  font-weight: bold;
  color: #002147;
  margin-bottom: 5px;
  display: block;
  text-align: left;
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;

const Select = styled.select`
    padding: 12px;
    font-size: 16px;
    border: 2px solid ${colors.primary};
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    width: 200px;
    background: white;
`;

const Button = styled.button`
  background: #002147;
  color: white;
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background: #4A90E2;
  }
`;

const StudentCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  gap: 40px;
  width: 100%;
  max-width: 1300px;
  margin-top: 20px;
  padding-left: 120px;
`;

const StudentCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  text-align: center;
  font-size: 20px;
  width: 100%;
`;

const studentsData = {
  batchA: [
    { id: 1, name: "Anchana A.S", attendance: 85, grade: "A", remarks: "Excellent" },
    { id: 2, name: "Anjali A.S", attendance: 60, grade: "B", remarks: "Needs Improvement" },
    { id: 3, name: "Lekshmi S", attendance: 92, grade: "A", remarks: "Good Performance" },
  ],
  batchB: [
    { id: 4, name: "Ravi Kumar", attendance: 78, grade: "B", remarks: "Consistent" },
    { id: 5, name: "Meera R", attendance: 95, grade: "A", remarks: "Outstanding" },
  ],
  batchC: [
    { id: 6, name: "Suresh P", attendance: 55, grade: "C", remarks: "Needs Focus" },
    { id: 7, name: "Divya V", attendance: 98, grade: "A", remarks: "Top Performer" },
  ],
};

const ReportsPage = () => {
  const [selectedBatch, setSelectedBatch] = useState("batchA");

  const handleBatchSelection = (event) => {
    setSelectedBatch(event.target.value);
  };

  /* Generate Professional PDF Report */
  const handleGenerateBatchPDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("Batch Performance Report", 14, 20);
    doc.setFontSize(16);
    doc.text(`Batch: ${selectedBatch.toUpperCase()}`, 14, 35);

    autoTable(doc, {
      startY: 50,
      theme: "grid",
      headStyles: { fillColor: [0, 33, 71] },
      head: [["ID", "Student Name", "Attendance (%)", "Grade", "Remarks"]],
      body: studentsData[selectedBatch].map((s) => [s.id, s.name, `${s.attendance}%`, s.grade, s.remarks]),
    });

    doc.setFontSize(12);
    doc.text("Generated on: " + new Date().toLocaleDateString(), 14, doc.internal.pageSize.height - 10);
    doc.save(`${selectedBatch.toUpperCase()}_Batch_Report.pdf`);
  };

  /* Generate Individual Student PDF */
  const handleGenerateStudentPDF = (student) => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("Student Performance Report", 14, 20);
    doc.setFontSize(16);
    doc.text(`Student: ${student.name}`, 14, 35);
    doc.text(`Batch: ${selectedBatch.toUpperCase()}`, 14, 45);

    autoTable(doc, {
      startY: 60,
      theme: "striped",
      head: [["Detail", "Value"]],
      body: [
        ["ID", student.id],
        ["Attendance (%)", `${student.attendance}%`],
        ["Grade", student.grade],
        ["Remarks", student.remarks],
      ],
    });

    doc.save(`${student.name.replace(" ", "_")}_Report.pdf`);
  };

  return (
    <ReportContainer>
      <Heading>Student Reports</Heading>
      <SelectContainer>
        <SelectLabel>Select the Batch</SelectLabel>
        <Select value={selectedBatch} onChange={handleBatchSelection}>
          <option value="batchA">Batch A</option>
          <option value="batchB">Batch B</option>
          <option value="batchC">Batch C</option>
        </Select>
        <Button onClick={handleGenerateBatchPDF}>Download Batch Report</Button>
      </SelectContainer>

      <StudentCardContainer>
        {studentsData[selectedBatch].map((student) => (
          <StudentCard key={student.id}>
            <h3>{student.name}</h3>
            <p><strong>Attendance:</strong> {student.attendance}%</p>
            <p><strong>Grade:</strong> {student.grade}</p>
            <p><strong>Remarks:</strong> {student.remarks}</p>
            <Button secondary onClick={() => handleGenerateStudentPDF(student)}>Download Report</Button>
          </StudentCard>
        ))}
      </StudentCardContainer>
    </ReportContainer>
  );
};

export default ReportsPage;