import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Balls from "./design/Balls";

const scaleImg = keyframes`
from {
  transform: scale(0.8);
}
to {
  transform: scale(1);
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
    z-index: 2;
    text-align: ${(props) => (props.textleft ? "left" : "center")};
    width: ${(props) => (props.textleft ? "55%" : "100%")};
    margin-left: ${(props) => (props.textleft ? "16rem" : "")};
  }

  h3 {
    z-index: 290;
    color: ${(props) => props.subTitleColor || "#D97706"};
  }

  h1 {
    z-index: 290;
  }

  p {
    z-index: 290;
    width: 50%;
    margin: 2rem auto 4rem auto;
    text-align: center;
  }

  img {
    z-index: 1000;
    margin-block: 1rem;
    max-width: ${(props) => props.imageWidth || "100%"};
    height: ${(props) => props.imageHeight || "900"}px;
    margin-inline: auto;

    -webkit-animation: ${scaleImg} ease-in-out both;
    -moz-animation: ${scaleImg} ease-in-out both;
    -o-animation: ${scaleImg} ease-in-out both;
    animation: ${scaleImg} ease-in-out both;
    animation-timeline: view();
    animation-range: entry 0;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    width: calc(100% - 2rem);
    height: auto;

    img {
      height: ${(props) => props.imageHeight * 0.25 || "250"}px;
    }

    p {
      width: 90%;
    }

    div {
      text-align: ${(props) => (props.textleft ? "center" : "center")};
      width: ${(props) => (props.textleft ? "100%" : "100%")};
      margin-left: ${(props) => (props.textleft ? "0rem" : "")};
    }
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
  const [top1, setTop1] = useState(60);
  const [right1, setRight1] = useState(-1275);
  const [bottom2, setBottom2] = useState(300);
  const [left2, setLeft2] = useState(-75);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 480px)");

    const updatePositions = () => {
      if (!mediaQuery.matches) {
        setTop1(-25);
        setRight1(-325);
        setBottom2(70);
        setLeft2(-120);
      } else {
        setTop1(60);
        setRight1(-1275);
        setBottom2(300);
        setLeft2(-75);
      }
    };

    updatePositions();

    mediaQuery.addEventListener("change", updatePositions);

    return () => mediaQuery.removeEventListener("change", updatePositions);
  }, []);

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
        top={top1}
        right={right1}
      />
      <img src={image} />
      <Balls
        ballImage={ballTwo}
        height={"750"}
        width={"750"}
        bottom={bottom2}
        left={left2}
      />
    </Container>
  );
}

export default TextBigImage;
