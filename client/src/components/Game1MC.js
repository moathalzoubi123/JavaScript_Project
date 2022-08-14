import { useEffect, useState } from "react";
import horse from "../images/horse.png";
import sheep from "../images/sheep.png";
import rooster from "../images/rooster.png";
import cow from "../images/cow.png";
import pig from "../images/pig.png";
import dog from "../images/dog.png";
import horse_pl from "../images/horse_pl.png";
import sheep_pl from "../images/sheep_pl.png";
import rooster_pl from "../images/rooster_pl.png";
import cow_pl from "../images/cow_pl.png";
import pig_pl from "../images/pig_pl.png";
import dog_pl from "../images/dog_pl.png";
import cover from "../images/farm.png";
import "./game1mc.css";
import styled from "styled-components";

const Heading = styled.h1`
  font-size: 5rem;
`;

const Text = styled.p`
  font-size: 1.5rem;
`;

const Button = styled.button`
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

const Score = styled.span`
  font-size: 50px;
  color: #f66334;
  font-weight: bold;
  padding: 20px;
  margin-top: 50px;
`;

const cards = [
  {
    id: "horse_match",
    img: horse,
  },
  {
    id: "sheep_match",
    img: sheep,
  },
  {
    id: "rooster_match",
    img: rooster,
  },
  {
    id: "cow_match",
    img: cow,
  },
  {
    id: "pig_match",
    img: pig,
  },
  {
    id: "dog_match",
    img: dog,
  },
  {
    id: "horse_match",
    img: horse_pl,
  },
  {
    id: "sheep_match",
    img: sheep_pl,
  },
  {
    id: "rooster_match",
    img: rooster_pl,
  },
  {
    id: "cow_match",
    img: cow_pl,
  },
  {
    id: "pig_match",
    img: pig_pl,
  },
  {
    id: "dog_match",
    img: dog_pl,
  },
];

const GameOne = () => {
  const cardCover = cover; // blank image
  const [cardsList, setCardsList] = useState([]);
  const [cardPicked, setCardPicked] = useState([]);
  const [cardPickedId, setCardPickedId] = useState([]);
  const [score, setScore] = useState(0);
  const [openCards, setOpenCards] = useState([]);

  // render after shuffling
  useEffect(() => {
    const gameReady = () => {
      const shuffledArray = shuffleCards(cards);
      setCardsList(shuffledArray);
    };
    gameReady();
  }, []);

  const shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    // console.log(array)
    return array;
  };

  const flipCard = (card, index) => {
    // card selected check
    console.log(card, index);
    if (cardPickedId?.length === 1 && cardPickedId[0] === index) {
      return;
    }

    // conditional statements:
    if (cardPicked?.length < 2) {
      setCardPicked((cardPicked) => cardPicked?.concat(card));
      setCardPickedId((cardPickedId) => cardPickedId?.concat(index));

      if (cardPicked?.length === 1) {
        // are cards the same check
        if (cardPicked[0].id === card.id) {
          setScore((score) => score + 1);
          setOpenCards((openCards) => openCards?.concat([cardPicked[0], card]));
        }
        setTimeout(() => {
          setCardPickedId([]);
          setCardPicked([]);
        }, 800);
      }
    }
  };

  const onCardSelect = (card, index) => {
    return cardPickedId?.includes(index) || openCards?.includes(card);
  };

  const playAgain = () => {
    shuffleCards(cards);
    setCardPickedId([]);
    setCardPicked([]);
    setScore(0);
    setOpenCards([]);
  };

  return (
    <div>
      <div className="memory-game-container">
        <Heading>Memory Game</Heading>
        <h2>Ready to test your memory skills?</h2>
        <Text>
          In this fun memory game, match the images of cute farm animals with
          their Polish names.
        </Text>
        <Text>
          Turn over the cards by clicking on them to find out the pairs. Once
          matched, the cards will stay open and one point will be added to your
          final score.
        </Text>
        <Text>Good luck! 🤞</Text>
        <Score>Total Score: {score}</Score>

        <div className="memory-game-cards">
          {cardsList?.map((card, index) => {
            return (
              <div
                className="cardImage"
                key={index}
                onClick={() => flipCard(card, index)}
              >
                <img
                  className="image"
                  src={onCardSelect(card, index) ? card.img : cardCover}
                  alt="cover"
                />
              </div>
            );
          })}
        </div>

        <p>
          <Button onClick={playAgain}>Play again?</Button>
        </p>
      </div>
    </div>
  );
};

export default GameOne;
