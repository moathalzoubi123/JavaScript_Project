import React from "react";
import { Link } from "react-router-dom";
import { IoLogoOctocat } from "react-icons/io";
import { FaHorse } from "react-icons/fa";
import { IoColorPaletteOutline } from "react-icons/io5";
import { GiFarmTractor } from "react-icons/gi";
import styled from "styled-components";
import "./Lingo.css";

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

const LingoZilla = () => {
  return (
    <div>
      <Heading>Welcome to LingoZilla! 👋</Heading>
      <h1>
        Learn Polish through fun games and quizzes. <br /> Start your adventure
        by choosing one of the lessons below.
        <br /> <br />
        Have fun! 🥳
      </h1>
      <br />
      <section className="id1">
        <StyledLink to="/lesson1">
          <ul className="box1">
            <FaHorse className="lesson1" />
            One
          </ul>
        </StyledLink>

        <StyledLink to="/lesson2">
          <ul className="box2">
            <IoColorPaletteOutline className="lesson2" />
            Two
          </ul>
        </StyledLink>

        <StyledLink to="/lesson3">
          <ul className="box3">
            <GiFarmTractor className="lesson3" />
            Three
          </ul>
        </StyledLink>

        <StyledLink to="/quiz">
          <ul className="quiz-box">
            <IoLogoOctocat className="cat" />
            Quiz
          </ul>
        </StyledLink>
      </section>
    </div>
  );
};

export default LingoZilla;
