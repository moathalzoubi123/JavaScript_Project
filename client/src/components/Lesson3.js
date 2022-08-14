import React, { useState } from "react";
import { Link } from "react-router-dom";
import { lessonThree } from "../data/data";
import Lesson3Item from "./Lesson3Item";
import Game3 from "./Game3";
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Button2 = styled.button`
  & {
    padding: 20px;
    width: 30%;
    font-size: 20px;
    background: #fe729b;
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
    background: #9d7bf4;
  }
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  margin-left: 100px;
  margin-right: 100px;
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
  margin: 40px;
`;

const Lesson3 = ({ textToSpeech }) => {
  const animalsList3 = lessonThree.map((animal, index) => {
    return (
      <Lesson3Item
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
        <Heading>Lesson 3</Heading>
        <div>
          <h2>
            Let's revise previous lessons and throw in some basic Polish
            grammar.
          </h2>
          <Paragraph>
            Have a look at the images and their descriptions. First pair of
            sentences describes what is the animal, in English and then in
            Polish. The second pair tells you the colour of the animal.{" "}
          </Paragraph>
          <Paragraph>
            Hint! If you click on the Polish sentence, Zuzia will teach you how
            to pronunce it correctly. Remember to turn on your volume!
          </Paragraph>
        </div>
        <Container>
          <ImgContainer>{animalsList3}</ImgContainer>
        </Container>
        <Button onClick={handleClick}>Game time!</Button>
      </div>

      {isShown && (
        <div>
          <Game3 />
          <Button2>
            <StyledLink to="/quiz">Time for a Quiz!</StyledLink>
          </Button2>
        </div>
      )}
    </>
  );
};

export default Lesson3;
