import React, { useState, useEffect } from "react";
import styled from "styled-components";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { colors } from "../styles/colors";

/* Styled Components */
const AttendanceContainer = styled.div`
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
const BatchSelectionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.primary};
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

const TableContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
  padding: 25px;
  margin-top: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background: ${colors.primary};
  color: white;
  padding: 12px;
  text-align: left;
  font-size: 18px;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
  text-align: left;
  font-size: 18px;
`;

const RadioContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const SaveButton = styled.button`
  background: ${colors.primary};
  color: white;
  padding: 12px 25px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background: ${colors.secondary};
  }
`;

const DownloadButton = styled.button`
  background: ${colors.secondary};
  color: white;
  padding: 12px 25px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background: ${colors.primary};
  }
`;

/* Batch and Student Data */
const batches = [
  { id: "batchA", name: "Batch A" },
  { id: "batchB", name: "Batch B" },
  { id: "batchC", name: "Batch C" },
];

const studentsData = {
  batchA: [
    { id: 1, name: "Anchana A.S" },
    { id: 2, name: "Anjali A.S" },
    { id: 3, name: "Lekshmi S" },
  ],
  batchB: [
    { id: 4, name: "Ravi Kumar" },
    { id: 5, name: "Meera R" },
  ],
  batchC: [
    { id: 6, name: "Suresh P" },
    { id: 7, name: "Divya V" },
  ],
};

const Attendance = () => {
  const [selectedBatch, setSelectedBatch] = useState("batchA");
  const [attendance, setAttendance] = useState({});
  const [savedAttendance, setSavedAttendance] = useState({});

  /* Load Saved Attendance on Page Load */
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("savedAttendance")) || {};
    setSavedAttendance(storedData);
  }, []);

  /* Handle Batch Selection */
  const handleBatchSelection = (event) => {
    setSelectedBatch(event.target.value);
  };

  /* Handle Attendance Change */
  const handleAttendanceChange = (id, status) => {
    setAttendance((prev) => ({
      ...prev,
      [selectedBatch]: { ...prev[selectedBatch], [id]: status },
    }));
  };

  /* Handle Submit */
  const handleSubmit = () => {
    const newRecord = studentsData[selectedBatch].map((student) => ({
      id: student.id,
      name: student.name,
      status: attendance[selectedBatch]?.[student.id] || "Not Marked",
    }));

    // Retrieve previous attendance from localStorage
    const prevAttendance = JSON.parse(localStorage.getItem("savedAttendance")) || {};

    // Update attendance with new records
    const updatedAttendance = {
      ...prevAttendance,
      [selectedBatch]: newRecord,
    };

    // Save updated attendance in localStorage
    localStorage.setItem("savedAttendance", JSON.stringify(updatedAttendance));

    // Update state to show saved data
    setSavedAttendance(updatedAttendance);

    alert(`Attendance saved successfully for ${selectedBatch.toUpperCase()}!`);
  };

  /* Generate PDF */
  const generatePDF = () => {
    if (!savedAttendance[selectedBatch] || savedAttendance[selectedBatch].length === 0) {
      alert("No attendance data available to download.");
      return;
    }

    const doc = new jsPDF();
    doc.text(`Attendance Report - ${selectedBatch.toUpperCase()}`, 14, 15);

    autoTable(doc, {
      startY: 25,
      head: [["ID", "Name", "Attendance"]],
      body: savedAttendance[selectedBatch].map((record) => [
        record.id,
        record.name,
        record.status,
      ]),
    });

    doc.save(`Attendance_${selectedBatch}.pdf`);
  };

  return (
    <AttendanceContainer>
      <Heading>Attendance</Heading>

      {/* Batch Selection Dropdown */}
      <BatchSelectionContainer>
        <Label>Select the Batch:</Label>
        <Select value={selectedBatch} onChange={handleBatchSelection}>
          {batches.map((batch) => (
            <option key={batch.id} value={batch.id}>
              {batch.name}
            </option>
          ))}
        </Select>
      </BatchSelectionContainer>

      {/* Attendance Table */}
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Attendance</Th>
            </tr>
          </thead>
          <tbody>
            {studentsData[selectedBatch].map((student) => (
              <tr key={student.id}>
                <Td>{student.id}</Td>
                <Td>{student.name}</Td>
                <Td>
                  <RadioContainer>
                    <label>
                      <input
                        type="radio"
                        name={`attendance-${selectedBatch}-${student.id}`}
                        value="Present"
                        onChange={() => handleAttendanceChange(student.id, "Present")}
                      />
                      Present
                    </label>
                    <label>
                      <input
                        type="radio"
                        name={`attendance-${selectedBatch}-${student.id}`}
                        value="Absent"
                        onChange={() => handleAttendanceChange(student.id, "Absent")}
                      />
                      Absent
                    </label>
                    <label>
                      <input
                        type="radio"
                        name={`attendance-${selectedBatch}-${student.id}`}
                        value="Late"
                        onChange={() => handleAttendanceChange(student.id, "Late")}
                      />
                      Late
                    </label>
                  </RadioContainer>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>

      <SaveButton onClick={handleSubmit}>Save & Submit</SaveButton>
      <DownloadButton onClick={generatePDF}>Download PDF</DownloadButton>

      {/* Display Saved Attendance */}
      {savedAttendance[selectedBatch] && savedAttendance[selectedBatch].length > 0 && (
        <TableContainer>
          <h2>Saved Attendance for {selectedBatch.toUpperCase()}</h2>
          <Table>
            <thead>
              <tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Attendance</Th>
              </tr>
            </thead>
            <tbody>
              {savedAttendance[selectedBatch].map((record) => (
                <tr key={record.id}>
                  <Td>{record.id}</Td>
                  <Td>{record.name}</Td>
                  <Td>{record.status}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      )}
    </AttendanceContainer>
  );
};

export default Attendance;

