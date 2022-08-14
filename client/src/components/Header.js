import React from "react";
import styled from "styled-components";
import cutezilla from "../images/cutezilla.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  background: #fcda7c;
`;

const Heading = styled.h1`
  font-size: 7rem;
  margin-top: 50px;
  color: #2274A5
`;

const Header = () => {
    return (
        <Container>
            <img src={cutezilla} alt="LingoZilla logo" width={250} />
            <Heading>LingoZilla</Heading>
        </Container>
    );
};

export default Header;
