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



const SearchContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #002147;
  border-radius: 5px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #002147;
  border-radius: 5px;
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1000px;
`;

const CourseCard = styled.div`
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const ProgressBar = styled.div`
  height: 8px;
  background: #ddd;
  border-radius: 4px;
  margin-top: 10px;
  position: relative;
`;

const Progress = styled.div`
  height: 100%;
  border-radius: 4px;
  background: ${({ progress }) => (progress === 100 ? "green" : "#002147")};
  width: ${({ progress }) => `${progress}%`};
`;

const Status = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-top: 5px;
  color: ${({ status }) =>
    status === "Completed" ? "green" : status === "In Progress" ? "#FFA500" : "red"};
`;

const CourseTracking = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const courses = [
    { name: "HTML", progress: 50 },
    { name: "CSS", progress: 70 },
    { name: "Python", progress: 35 },
    { name: "Javascript", progress: 100 },
    { name: "MySQL", progress: 100 },
    { name: "Node.js", progress: 100 },
    { name: "MongoDB", progress: 100 },
  ];

  const getStatus = (progress) => {
    if (progress === 100) return "Completed";
    return "In Progress";
  };

  const filteredCourses = courses
    .filter((course) => course.name.toLowerCase().includes(search.toLowerCase()))
    .filter((course) => (filter === "All" ? true : getStatus(course.progress) === filter));

  return (
    <Container>
      <Heading>Course Completion Tracking</Heading>
      <SearchContainer>
        <Input
          type="text"
          placeholder="Search Course..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="In Progress">In Progress</option>
        </Select>
      </SearchContainer>

      <CourseGrid>
        {filteredCourses.map((course, index) => (
          <CourseCard key={index}>
            <h3>{course.name}</h3>
            <p>Progress: {course.progress}%</p>
            <ProgressBar>
              <Progress progress={course.progress} />
            </ProgressBar>
            <Status status={getStatus(course.progress)}>{getStatus(course.progress)}</Status>
          </CourseCard>
        ))}
      </CourseGrid>
    </Container>
  );
};

export default CourseTracking;
