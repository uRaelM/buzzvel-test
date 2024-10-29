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
`;

const TextGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin-bottom: -4rem;
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
          <p style={{ width: "50%" }}>{paragraph}</p>
        </div>
        <div>
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
