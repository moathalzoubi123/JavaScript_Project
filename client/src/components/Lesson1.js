import React, { useState } from "react";
import { Link } from "react-router-dom";
import { lessonOne } from "../data/data";
import Lesson1Item from "./Lesson1Item";
import GameOne from "./Game1MC";
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Button2 = styled.button`
  & {
    padding: 20px;
    width: 30%;
    font-size: 20px;
    background: #9d7bf4;
    color: white;
    border: 0;
    outline: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    margin: 40px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  }
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    background: #fe729b;
  }
`;

const Button = styled.button`
  & {
    padding: 20px;
    width: 30%;
    font-size: 20px;
    background: #9d7bf4;
    color: white;
    border: 0;
    outline: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    margin: 40px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  }
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    background: #fe729b;
  }
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-evenly;
`;

const ImgContainer = styled.div`
  display: flex;
  grid-template-columns: repeat(3, 1fr);
  display: grid;
  gap: 5rem;
  padding: 2rem;
`;

const Lesson1 = ({ textToSpeech }) => {
  const animalsList = lessonOne.map((animal, index) => {
    return (
      <Lesson1Item
        animal={animal}
        key={animal.id}
        index={index}
        textToSpeech={textToSpeech}
      />
    );
  });

  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown(true);
  };

  return (
    <>
      <div>
        <Heading>Lesson 1</Heading>
        <h2>Let's start with learning farm animals names in Polish</h2>
        <Paragraph>
          Hover over the animal image to learn its name in Polish.
        </Paragraph>
        <Paragraph>
          Hint! If you click on the Polish word, Zuzia will teach you how to
          pronunce it correctly. Remember to turn on your volume!
        </Paragraph>
        <Container>
          <ImgContainer>{animalsList}</ImgContainer>
        </Container>
        <Button onClick={handleClick}>Game time!</Button>
      </div>

      {isShown && (
        <div>
          <GameOne />
          <Button2>
            <StyledLink to="/lesson2"> Lesson 2 &gt;&gt; </StyledLink>
          </Button2>
        </div>
      )}
    </>
  );
};

export default Lesson1;
