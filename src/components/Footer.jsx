import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  background: ${(props) => props.backgroundColor || "#FFF"};
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  height: 95px;
  color: #0f172a;

  div {
    display: flex;
    align-items: center;

    img {
      height: 35px;
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
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="first-div">
        <img src="assets/img/logo-2.png" />
      </div>
      <div className="middle-div">
        <p>@ 2023 Soller, Inc. All rights reserved.</p>
      </div>
      <div className="last-div">
        <a>Terms</a>
        <a>Privacy</a>
        <a>Support</a>
      </div>
    </FooterContainer>
  );
};

export default Footer;
