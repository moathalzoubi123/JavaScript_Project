import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background: white;
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  gap: 3rem;
  list-style: none;
`;

const StyledLink = styled(Link)`
  & {
    color: black;
    text-decoration: none;
    margin: 1rem;
    position: relative;
    font-size: 1.5rem;
    transition: all 150ms ease-in-out;
  }
  &:hover {
    color: green;
  }
`;

const NavBar = () => {
  return (
    <Container>
      <NavLinks>
        <StyledLink to="/"> Home </StyledLink>

        <NavLinks>
          <StyledLink to="/lesson1"> Lesson 1 </StyledLink>
        </NavLinks>
        <NavLinks>
          <StyledLink to="/lesson2"> Lesson 2 </StyledLink>
        </NavLinks>
        <NavLinks>
          <StyledLink to="/lesson3"> Lesson 3 </StyledLink>
        </NavLinks>
        <NavLinks>
          <StyledLink to="/quiz"> Quiz </StyledLink>
        </NavLinks>

        <StyledLink to="/testimonies"> Testimonies </StyledLink>
      </NavLinks>
    </Container>
  );
};

export default NavBar;
