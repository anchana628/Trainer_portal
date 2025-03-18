import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

// Styled Components
const FeedbackContainer = styled.div`
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

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 2px solid #002147;
  border-radius: 5px;
  min-height: 120px;
  resize: none;
  margin-bottom: 15px;
`;

const Button = styled.button`
  background: #002147;
  color: white;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: #4A90E2;
  }
`;

const FeedbackHistory = styled.div`
  width: 90%;
  max-width: 1400px;
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  min-height: 300px;
  margin-top: 20px;
`;

const FeedbackItem = styled.div`
  background: #f9f9f9;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  font-size: 16px;
  border-left: 5px solid #002147;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const NoFeedbackMessage = styled.p`
  color: #777;
  font-size: 16px;
  font-style: italic;
  text-align: center;
  margin-top: 10px;
`;

const StarContainer = styled.div`
  display: flex;
  gap: 5px;
  font-size: 26px;
  cursor: pointer;
`;

const Star = styled.span`
  color: ${(props) => (props.filled ? "#FFD700" : "#C0C0C0")};
  transition: color 0.3s ease, transform 0.2s ease;
  &:hover {
    color: #ffcc00;
    transform: scale(1.1);
  }
`;

// Dummy Data for Batches & Students
const batches = {
  "Batch A": ["Anchana A.S", "Anjali A.S", "Lekshmi S"],
  "Batch B": ["Ravi Kumar", "Meera R"],
  "Batch C": ["Suresh P", "Divya V"],
};

// Star Rating Component
const StarRating = ({ rating, setRating }) => {
  return (
    <StarContainer>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} filled={star <= rating} onClick={() => setRating(star)}>
          ★
        </Star>
      ))}
    </StarContainer>
  );
};

const FeedbackPage = () => {
  const [selectedBatch, setSelectedBatch] = useState("Batch A");
  const [selectedStudent, setSelectedStudent] = useState(batches["Batch A"][0]);
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [feedbackHistory, setFeedbackHistory] = useState([]);

  const handleFeedbackSubmit = () => {
    if (!feedback.trim()) return;

    const newFeedback = {
      batch: selectedBatch,
      student: selectedStudent,
      text: feedback,
      rating,
    };

    setFeedbackHistory([...feedbackHistory, newFeedback]);
    setFeedback("");
    setRating(0);
  };

  return (
    <FeedbackContainer>
      <Heading>Trainer Feedback Submission</Heading>

      <SelectionContainer>
        <Label>Select the Batch:</Label>
        <Select
          value={selectedBatch}
          onChange={(e) => {
            setSelectedBatch(e.target.value);
            setSelectedStudent(batches[e.target.value][0]);
          }}
        >
          {Object.keys(batches).map((batch) => (
            <option key={batch} value={batch}>
              {batch}
            </option>
          ))}
        </Select>

        <Label>Select the Student:</Label>
        <Select value={selectedStudent} onChange={(e) => setSelectedStudent(e.target.value)}>
          {batches[selectedBatch].map((student) => (
            <option key={student} value={student}>
              {student}
            </option>
          ))}
        </Select>

        <Label>Give a Rating:</Label>
        <StarRating rating={rating} setRating={setRating} />

        <Label>Enter Feedback:</Label>
        <TextArea value={feedback} onChange={(e) => setFeedback(e.target.value)} />

        <Button onClick={handleFeedbackSubmit}>Submit Feedback</Button>
      </SelectionContainer>

      <FeedbackHistory>
        <h2>Feedback History</h2>
        {feedbackHistory.length === 0 ? (
          <NoFeedbackMessage>No feedback submitted yet</NoFeedbackMessage>
        ) : (
          feedbackHistory.map((entry, index) => (
            <FeedbackItem key={index}>
              <strong>{entry.batch} - {entry.student}</strong>
              <p>{entry.text}</p>
              <StarRating rating={entry.rating} setRating={() => {}} />
            </FeedbackItem>
          ))
        )}
      </FeedbackHistory>
    </FeedbackContainer>
  );
};

export default FeedbackPage;


