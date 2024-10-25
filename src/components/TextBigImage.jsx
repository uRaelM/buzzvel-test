import React from "react";
import styled, { keyframes } from "styled-components";
import Balls from "./design/Balls";

const scaleImg = keyframes`
from {
  scale: 0.8;
}
to {
  scale: 1;
}
`;

const Container = styled.section`
  padding: 4rem;
  margin-top: 5rem;
  width: calc(100% - 8rem);
  height: calc(1100px - 8rem);
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.backgroundColor || "transparent"};
  color: ${(props) => props.textColor || "#0f172a"};

  div {
    text-align: ${(props) => (props.textleft ? "left" : "center")};
    width: ${(props) => (props.textleft ? "55%" : "100%")};
    margin-left: ${(props) => (props.textleft ? "16rem" : "")};
  }

  h1 {
    font-size: 4rem;
    font-weight: 800;
  }

  h3 {
    font-weight: 400;
    color: ${(props) => props.subTitleColor || "#D97706"};
  }

  p {
    width: 50%;
    margin: 2rem auto 4rem auto;
    text-align: center;
    line-height: 2rem;
    font-weight: 400;
    font-size: 1.4rem;
  }

  img {
    z-index: 2;
    max-width: ${(props) => props.imageWidth || "100%"};
    height: ${(props) => props.imageHeight || "900px"};
    margin-inline: auto;

    -webkit-animation: ${scaleImg} ease-in-out both;
    -moz-animation: ${scaleImg} ease-in-out both;
    -o-animation: ${scaleImg} ease-in-out both;
    animation: ${scaleImg} ease-in-out both;
    animation-timeline: view();
    animation-range: entry 0;
  }
`;

function TextBigImage({
  title,
  textColor,
  subtitle,
  subTitleColor,
  paragraph,
  image,
  imageHeight,
  imageWidth,
  ballOne,
  ballTwo,
  backgroundColor,
  textleft = false,
}) {
  return (
    <Container
      backgroundColor={backgroundColor}
      textleft={textleft}
      textColor={textColor}
      subTitleColor={subTitleColor}
      imageHeight={imageHeight}
      imageWidth={imageWidth}
    >
      <div>
        <h3>{subtitle}</h3>
        <h1>{title}</h1>
      </div>
      <p>{paragraph}</p>
      <Balls
        ballImage={ballOne}
        height={"600"}
        width={"600"}
        top={"60"}
        right={"-1275"}
      />
      <img src={image} />
      <Balls
        ballImage={ballTwo}
        height={"750"}
        width={"750"}
        bottom={"300"}
        left={"-75"}
      />
    </Container>
  );
}

export default TextBigImage;
