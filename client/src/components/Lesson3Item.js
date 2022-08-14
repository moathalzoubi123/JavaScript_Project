import React from "react";
import "./lesson1.css";
import styled from "styled-components";

const Text = styled.p`
  font-size: 1.5rem;
  padding: 5px;
`;

const Speech = styled.p`
  font-size: 1.5rem;
  padding: 5px;
  cursor: pointer;
`;

const Container = styled.div`
  margin-top: 15px;
`;

const Lesson3Item = ({ animal, textToSpeech }) => {
  const handleSpeech1 = () => {
    const word = animal.pl1;
    textToSpeech(word);
  };

  const handleSpeech2 = () => {
    const word = animal.pl2;
    textToSpeech(word);
  };

  return (
    <div>
      <div className="animal-card3">
        <img className="animal-card3" src={animal.image} alt={animal.en} />
      </div>
      <Container className="animal-name-en">
        <Text> 🇬🇧: {animal.en1}</Text>
        <Speech onClick={handleSpeech1}> 🇵🇱: {animal.pl1} 🔊</Speech>
        <br></br>
        <Text> 🇬🇧: {animal.en2}</Text>
        <Speech onClick={handleSpeech2}> 🇵🇱: {animal.pl2} 🔊</Speech>
      </Container>
    </div>
  );
};

export default Lesson3Item;
