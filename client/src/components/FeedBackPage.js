import React from "react";
import Feedback from "./Feedback";
import styled from "styled-components";

const Heading = styled.h1`
  margin: 40px;
  text-align: center;
  font-size: 5rem;
  background-color: white;
  padding: 2px;
  border: 2px solid white;
  border-radius: 40px;
`;

const ItemContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 5rem;
  row-gap: 5rem;
  list-style: none;
  margin-bottom: 1rem;
  padding: 5rem 10rem;
`;

const FeedBackPage = ({ feedbacks }) => {
  const feedbackNodes = feedbacks.map((feedback) => {
    return <Feedback key={feedback._id} feedback={feedback} />;
  });

  return (
    <div className="FeedBackPage">
      <Heading>Testimonies from our Students✨</Heading>
      <ItemContainer>{feedbackNodes}</ItemContainer>
    </div>
  );
};

export default FeedBackPage;
