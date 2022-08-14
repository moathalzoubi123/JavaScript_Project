import React, { useState } from "react";
import { lessonOne } from "../data/data";
import { lessonTwo } from "../data/data";
import WordInPl from "./WordInPl";
import "./Game3.css";
import ColourInPl from "./ColourInPl";
import Board from "./board";
import styled from "styled-components";

const Heading = styled.h1`
  font-size: 5rem;
`;

const Text = styled.p`
  font-size: 1.5rem;
`;

const Game3 = () => {
  return (
    <>
      <div>
        <Heading>Game3: Drag and Drop Match Game </Heading>
        <h2>Ready to test your skills after three lessons?</h2>
        <Text>
          Match the animal name and colour in Polish with the animal image .
        </Text>
        <Text>If correct, one point will be added to your final score.</Text>
        <Text>Good luck! 🤞</Text>
      </div>
      <br />
      <div className="choice-container">
        <div className="animal-container">
          <h2 className="center"> Animals in Polish: </h2>
          <div className="flex">
            {lessonOne.map((word, index) => {
              return <WordInPl word={word} key={word.id} index={index} />;
            })}{" "}
          </div>
        </div>
        <div className="colour-container">
          <h2 className="center"> Colours in Polish: </h2>
          <div className="flex">
            {" "}
            {lessonTwo.map((colour, index) => {
              return (
                <ColourInPl colour={colour} key={colour.id} index={index} />
              );
            })}{" "}
          </div>
        </div>
      </div>
      <div>
        <Board />
      </div>
    </>
  );
};

export default Game3;
