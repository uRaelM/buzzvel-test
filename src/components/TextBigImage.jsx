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

  @media (max-width: 1600px) {
    div {
      margin-left: ${(props) => (props.textleft ? "8rem" : "")};
    }
  }

  @media (max-width: 1250px) {
    img {
      height: ${(props) => props.imageHeight * 0.8 || "720"}px;
    }

    div {
      margin-left: ${(props) => (props.textleft ? "4rem" : "")};
      width: ${(props) => (props.textleft ? "65%" : "100%")};
    }
  }

  @media (max-width: 1000px) {
    img {
      height: ${(props) => props.imageHeight * 0.6 || "540"}px;
    }

    div {
      text-align: ${(props) => (props.textleft ? "center" : "center")};
      width: ${(props) => (props.textleft ? "100%" : "100%")};
      margin-left: ${(props) => (props.textleft ? "0rem" : "")};
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
    width: calc(100% - 2rem);
    height: auto;

    img {
      height: ${(props) => props.imageHeight * 0.25 || "250"}px;
    }

    p {
      width: 90%;
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
    const mediaQueryExtraSmall = window.matchMedia("(min-width: 401px)");
    const mediaQuery = window.matchMedia("(min-width: 481px)");
    const mediaQuerySmarthphoneM = window.matchMedia("(min-width: 630px)");
    const mediaQueryTabletP = window.matchMedia("(min-width: 769px)");
    const mediaQueryTabletM = window.matchMedia("(min-width: 851px)");
    const mediaQueryTabletG = window.matchMedia("(min-width: 1051px)");
    const mediaQueryNotebook = window.matchMedia("(min-width: 1151px)");
    const mediaQueryPNotebook = window.matchMedia("(min-width: 1251px)");
    const mediaQueryMNotebook = window.matchMedia("(min-width: 1351px)");
    const mediaQueryLNotebook = window.matchMedia("(min-width: 1441px)");
    const mediaQueryBigNotebook = window.matchMedia("(min-width: 1550px)");

    const updatePositions = () => {
      if (!mediaQueryExtraSmall.matches) {
        console.log("celular");
        setTop1(-25);
        setRight1(-225);
        setBottom2(70);
        setLeft2(-120);
      } else if (!mediaQuery.matches) {
        console.log("celular");
        setTop1(-25);
        setRight1(-300);
        setBottom2(70);
        setLeft2(-120);
      } else if (!mediaQuerySmarthphoneM.matches) {
        console.log("notebook");
        setTop1(-50);
        setRight1(-400);
        setBottom2(0);
        setLeft2(-75);
      } else if (!mediaQueryTabletP.matches) {
        console.log("notebook");
        setTop1(-50);
        setRight1(-475);
        setBottom2(0);
        setLeft2(-75);
      } else if (!mediaQueryTabletM.matches) {
        console.log("notebook");
        setTop1(80);
        setRight1(-575);
        setBottom2(300);
        setLeft2(-75);
      } else if (!mediaQueryTabletG.matches) {
        console.log("notebook");
        setTop1(80);
        setRight1(-675);
        setBottom2(300);
        setLeft2(-75);
      } else if (!mediaQueryNotebook.matches) {
        console.log("notebook");
        setTop1(80);
        setRight1(-875);
        setBottom2(300);
        setLeft2(-75);
      } else if (!mediaQueryPNotebook.matches) {
        console.log("notebook P");
        setTop1(80);
        setRight1(-975);
        setBottom2(300);
        setLeft2(-75);
      } else if (!mediaQueryMNotebook.matches) {
        console.log("notebook M");
        setTop1(80);
        setRight1(-875);
        setBottom2(300);
        setLeft2(-75);
      } else if (!mediaQueryLNotebook.matches) {
        console.log("notebook l");
        setTop1(80);
        setRight1(-1075);
        setBottom2(300);
        setLeft2(-75);
      } else if (!mediaQueryBigNotebook.matches) {
        console.log("notebook g");
        setTop1(60);
        setRight1(-1175);
        setBottom2(250);
        setLeft2(-75);
      } else {
        setTop1(60);
        setRight1(-1275);
        setBottom2(300);
        setLeft2(-75);
      }
    };

    updatePositions();

    mediaQueryPNotebook.addEventListener("change", updatePositions);
    mediaQueryExtraSmall.addEventListener("change", updatePositions);
    mediaQuery.addEventListener("change", updatePositions);
    mediaQueryBigNotebook.addEventListener("change", updatePositions);
    mediaQueryLNotebook.addEventListener("change", updatePositions);
    mediaQueryMNotebook.addEventListener("change", updatePositions);
    mediaQueryNotebook.addEventListener("change", updatePositions);
    mediaQueryTabletG.addEventListener("change", updatePositions);
    mediaQueryTabletM.addEventListener("change", updatePositions);
    mediaQueryTabletP.addEventListener("change", updatePositions);
    mediaQuerySmarthphoneM.addEventListener("change", updatePositions);

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
