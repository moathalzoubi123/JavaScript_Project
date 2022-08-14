import React, { useEffect, useState } from "react";
import { lessonOne } from "../data/data";
import { lessonTwo } from "../data/data";
import { lessonThree } from "../data/data";
import ColourInPl from "./ColourInPl";
import WordInPl from "./WordInPl";
import { useDrop } from "react-dnd";
import "../data/data";
import styled from "styled-components";

const Score = styled.span`
  font-size: 50px;
  color: #f66334;
  font-weight: bold;
  padding: 20px;
  margin-top: 3rem;
`;

const Text = styled.p`
  font-size: 1.5rem;
  margin-top: 2rem;
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
    margin-top: 2rem;
  }
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    background: #fe729b;
  }
`;

const Board = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [imageSelections, setImageSelections] = useState([]);
  const [wordBoard, setWordBoard] = useState([]);
  const [colourBoard, setColourBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "word",
    drop: (item) => addWordToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [collectedProps, dropp] = useDrop(() => ({
    accept: "word",
    drop: (item) => addColourToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addWordToBoard = (id) => {
    const updatedlessonOne = lessonOne.find((word) => id === word.id);
    setWordBoard((wordBoard) => [...wordBoard, updatedlessonOne]);
  };

  const addColourToBoard = (id) => {
    const updatedlessonTwo = lessonTwo.find((colour) => id === colour.id);
    setColourBoard([...colourBoard, updatedlessonTwo]);
  };

  const randomizeImages = () => {
    const data = [...lessonThree];
    const randomData = [];
    randomData.push(data.splice(Math.floor(Math.random() * data.length), 1));
    const animalObjects = randomData.flat();
    setImageSelections(animalObjects);
  };

  useEffect(() => {
    randomizeImages();
  }, []);

  const animalsImages = imageSelections.map((animal) => {
    return (
      <img
        className="board-img"
        src={animal.image}
        key={animal.id}
        alt={animal.animal}
        animalWordPoland={animal.wordpl}
        animalColourPoland={animal.colourpl}
        width="500"
      />
    );
  });

  const handleOnClick = () => {
    if (
      imageSelections[0].wordpl === wordBoard[0].pl &&
      imageSelections[0].colourpl === colourBoard[0].pl
    ) {
      setTotalScore(totalScore + 1);
      randomizeImages();
    } else {
      setTotalScore(totalScore - 1);
    }
    setColourBoard([]);
    setWordBoard([]);
  };

  return (
    <div className="Board">
      <div className="animal">{animalsImages}</div>
      <div>
        {wordBoard.map((word, index) => {
          return <WordInPl word={word} key={word.id} index={index} />;
        })}
      </div>
      <div>
        {colourBoard.map((colour, index) => {
          return <ColourInPl colour={colour} key={colour.id} index={index} />;
        })}
      </div>
      <Text>
        This is a <span ref={drop}>__________________</span>
        and the colour is <span ref={dropp}>_________________.</span>
      </Text>
      <br></br>
      <Button onClick={handleOnClick}>Submit Answer</Button>
      <br />
      <br />
      <Score>Total Score: {totalScore}</Score>
    </div>
  );
};

export default Board;
