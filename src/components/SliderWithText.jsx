import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import CallBtn from "./ui/CallBtn";
import Slider from "./Slider";

const Container = styled.section`
  padding: 4rem;
  padding-block: 4rem;
  width: 100%;
  height: calc(1100px - 8rem);
  background-color: ${(props) => props.backgroundColor || "#581C87"};
  color: ${(props) => props.textColor || "#FFF"};

  h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-block: 0.5rem;
  }

  h3 {
    color: ${(props) => props.subTitleColor || "#FCD34D"};
    margin-block: 0.5rem;
  }

  p {
    line-height: 2rem;
    font-weight: 400;
    font-size: 1.2rem;
    margin-block: 0.5rem;
  }
`;

const TextGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

const SliderWithText = ({
  title,
  subtitle,
  paragraph,
  textColor,
  subTitleColor,
  testimoniesList,
  backgroundColor,
  callBtnColor,
  callBtnHoverColor,
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
          <CallBtn
            callBtnColor={callBtnColor}
            callBtnHoverColor={callBtnHoverColor}
          />
        </div>
      </TextGrid>
      <div style={{ marginBlock: "4rem" }}>
        <Slider testimoniesList={testimoniesList} />
      </div>
    </Container>
  );
};

export default SliderWithText;