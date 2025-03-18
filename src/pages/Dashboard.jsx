import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styled from "styled-components";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { colors } from "../styles/colors";

const localizer = momentLocalizer(moment);
const currentYear = new Date().getFullYear();

const DashboardContainer = styled.div`
  padding: 20px;
  background-color: ${colors.background};
  min-height: 220vh;
`;

const Heading = styled.h1`
  color: ${colors.primary};
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`;

const ActionButton = styled(Link)`
  text-decoration: none;
  background: ${colors.secondary};
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  transition: 0.3s ease;
  &:hover {
    background: ${colors.primary};
  }
`;

const CustomCalendarWrapper = styled.div`
    width: 100%; /* Make it full width */
    max-width: 1000px; /* Increase max width */
    margin: 0 auto;
    height: 600px; /* Increase height */
  .rbc-calendar {
    border: none;
    border-radius: 8px;
    background: #f5f5f5;
  }

  .rbc-header {
    background: ${colors.primary};
    color: white;
    padding: 12px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .rbc-today {
    background: #add8e6 !important;
    color: black;
    font-weight: bold;
  }

  .rbc-event {
    background: #003366 !important;
    color: white;
    font-weight: bold;
    text-align: center;
    padding: 5px;
    border-radius: 5px;
  }
`;

const ChartContainer = styled.div`
  max-width: 1000px;
  margin: 20px auto;
  padding: 20px;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
  align-items: center;
`;

const FilterLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.primary};
`;

const FilterSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 2px solid ${colors.primary};
  border-radius: 5px;
  background: white;
`;

const Dashboard = () => {
  const now = new Date();
  const [selectedBatch, setSelectedBatch] = useState("All");
  const [selectedSubject, setSelectedSubject] = useState("All");

  const testEvents = [
    { id: 1, title: "React Basics", batch: "Batch A", subject: "React", start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0), end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11, 0) },
    { id: 2, title: "Advanced JavaScript", batch: "Batch B", subject: "JavaScript", start: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 10, 0), end: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 11, 0) },
    { id: 3, title: "Python for Beginners", batch: "Batch C", subject: "Python", start: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2, 14, 0), end: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2, 16, 0) },
  ];

  const filteredEvents = testEvents.filter((event) => 
    (selectedBatch === "All" || event.batch === selectedBatch) &&
    (selectedSubject === "All" || event.subject === selectedSubject)
  );

  const batchPerformanceData = [
    { name: "Batch A", performance: 80 },
    { name: "Batch B", performance: 70 },
    { name: "Batch C", performance: 85 },
  ];

  return (
    <DashboardContainer>
      <Heading>Trainer Dashboard</Heading>
      <ActionsContainer>
        <ActionButton to="/attendance">📋 Mark Attendance</ActionButton>
        <ActionButton to="/reports">📝 Submit Reports</ActionButton>
        <ActionButton to="/resources">📦 Request Resources</ActionButton>
      </ActionsContainer>
      
      <FilterContainer>
        <FilterLabel>Select the Batch:</FilterLabel>
        <FilterSelect value={selectedBatch} onChange={(e) => setSelectedBatch(e.target.value)}>
          <option value="All">All</option>
          <option value="Batch A">Batch A</option>
          <option value="Batch B">Batch B</option>
          <option value="Batch C">Batch C</option>
        </FilterSelect>

        <FilterLabel>Select the Subject:</FilterLabel>
        <FilterSelect value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
          <option value="All">All</option>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
        </FilterSelect>
      </FilterContainer>

      <CustomCalendarWrapper>
        <Calendar
          localizer={localizer} 
          events={filteredEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "500px", width: "100%" }}
          defaultView="month"
          defaultDate={new Date(currentYear, 2, 10)}
        />
      </CustomCalendarWrapper>

      <ChartContainer>
        <h2 style={{ textAlign: "center", color: colors.primary }}>Batch Performance</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={batchPerformanceData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="performance" fill="#4A90E2" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
