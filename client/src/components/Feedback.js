import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const IndividualFeedback = styled.li`
  border: 2px solid black;
  list-style: none;
  border-radius: 5px;
  padding: 10px;
`;

const Text = styled.p`
  font-size: 1.5rem;
`;

const Feedback = ({ feedback }) => {
  const numberToDisplay = feedback.rating;

  return (
    <div className="Feedback">
      <IndividualFeedback>
        <h1> {feedback.name} 🎓</h1>
        <Text>
          <strong>Age Group: </strong>
          {feedback.ageGroup}
        </Text>
        <Text>
          <strong>Rating:</strong>{" "}
          {[...Array(numberToDisplay)].map((star) => {
            return <FaStar color="#FFC107" />;
          })}
        </Text>
        <Text>
          <strong>Feedback:</strong> {feedback.feedback}
        </Text>
        <Text>
          <strong>Date: </strong>
          {feedback.date}
        </Text>
      </IndividualFeedback>
    </div>
  );
};

export default Feedback;
