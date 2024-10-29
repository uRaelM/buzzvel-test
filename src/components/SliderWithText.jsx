import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import CallBtn from "./ui/CallBtn";
import Slider from "./Slider";

const Container = styled.section`
  padding: 4rem;
  width: calc(100%-8rem);
  height: calc(1000px - 8rem);
  background-color: ${(props) => props.backgroundColor || "#581C87"};
  color: ${(props) => props.textColor || "#FFF"};
  overflow: hidden;

  h1 {
    margin-block: 0.5rem;
  }

  h3 {
    color: ${(props) => props.subTitleColor || "#FCD34D"};
    margin-block: 0.5rem;
  }
  @media (max-width: 1250px) {
    height: calc(1000px - 8rem);
  }

  @media (max-width: 480px) {
    padding: 1rem;
    width: calc(100%-2rem);
    height: auto;
  }
`;

const TextGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin-bottom: -4rem;

  p {
    width: 50%;
  }

  @media (max-width: 1250px) {
    p {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    text-align: center;
    grid-template-columns: 1fr;

    .button {
      margin-top: 2rem;
      margin-inline: auto;
    }

    p {
      width: 100%;
    }
  }
`;

const SliderWithText = ({
  title,
  subtitle,
  paragraph,
  textColor,
  subTitleColor,
  testimoniesList,
  backgroundColor,
  btnColor,
  btnHoverColor,
}) => {
  return (
    <Container
      textColor={textColor}
      subTitleColor={subTitleColor}
      backgroundColor={backgroundColor}
    >
      <TextGrid>
        <div>
          <h3>{subtitle}</h3>
          <h1>{title}</h1>
          <p>{paragraph}</p>
        </div>
        <div className="button">
          <CallBtn callBtnColor={btnColor} callBtnHoverColor={btnHoverColor} />
        </div>
      </TextGrid>
      <div
        style={{
          marginBlock: "8rem",
        }}
      >
        <Slider
          testimoniesList={testimoniesList}
          btnColor={btnColor}
          btnHoverColor={btnHoverColor}
        />
      </div>
    </Container>
  );
};

export default SliderWithText;
