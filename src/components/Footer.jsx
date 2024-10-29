import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 1rem;
  width: (100% - 2rem);
  height: (95px- 2rem);
  background: ${(props) => props.backgroundColor || "#FFF"};
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  color: #0f172a;

  div {
    display: flex;
    align-items: center;

    img {
      height: ${(props) => props.logoHeight || "35px"};
      width: auto;
    }
  }

  .first-div {
    justify-content: center;
  }

  .middle-div {
    justify-content: flex-start;
  }

  .last-div {
    justify-content: flex-start;
    gap: 20px;
  }

  @media (max-width: 480px) {
    height: auto;
    grid-template-columns: 1fr;
    gap: 25px;

    .middle-div {
      justify-content: center;
    }

    .last-div {
      justify-content: center;
      gap: 20px;
    }
  }
`;

const FooterLink = styled.a`
  color: ${(props) => props.textColor || "#0f172a"};
  text-decoration: none;
  transition: color 0.15s ease-in;
  cursor: pointer;
  &:hover {
    color: #f0a500;
  }
`;

const Footer = ({ logo, logoHeight, backgroundColor, textColor }) => {
  return (
    <FooterContainer
      logo={logo}
      logoHeight={logoHeight}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      <div className="first-div">
        <img src={logo} />
      </div>
      <div className="middle-div">
        <p>@ 2023 Soller, Inc. All rights reserved.</p>
      </div>
      <div className="last-div">
        <FooterLink>Terms</FooterLink>
        <FooterLink>Privacy</FooterLink>
        <FooterLink>Support</FooterLink>
      </div>
    </FooterContainer>
  );
};

export default Footer;
