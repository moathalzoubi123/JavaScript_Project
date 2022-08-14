import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
  background: #fcda7c;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 3rem;
`;

const Footer = () => {
  return (
    <FooterStyled>
      <p>
        LingoZilla was coded by Moath Al-Zoubi, Jack Carmichael, Sandy Yu, and
        Kat Zdzienkowska{" "}
      </p>
    </FooterStyled>
  );
};

export default Footer;
