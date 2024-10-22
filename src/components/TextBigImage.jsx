import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Balls from "./design/Balls";

const Container = styled.section`
  margin-top: 5rem;
  width: 100%;
  height: 1100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  background-color: ${(props) => props.backgroundColor || "transparent"};
  color: ${(props) => props.textColor || "#0f172a"};

  div {
    text-align: ${(props) => (props.textleft ? "left" : "center")};
  }

  h1 {
    font-size: 3rem;
  }

  h3 {
    color: ${(props) => props.subTitleColor || "#D97706"};
  }

  p {
    width: 50%;
    line-height: 2rem;
    font-weight: 400;
    font-size: 1.4rem;
    margin: 2rem auto 4rem auto;
    text-align: center;
  }

  img {
    z-index: 2;
    max-width: ${(props) => props.imageWidth || "100%"};
    height: ${(props) => props.imageHeight || "900px"};
    margin-inline: auto;
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
    <>
      <Helmet>
        <title>Soller - Pick the sun</title>
        <meta
          name="description"
          content="Et pulvinar nec interdum integer id urna molestie porta nullam."
        />
      </Helmet>
      <Container
        backgroundColor={backgroundColor}
        textleft={textleft}
        textColor={textColor}
        subTitleColor={subTitleColor}
        imageHeight={imageHeight}
        imageWidth={imageWidth}
      >
        <div style={{ width: "50%", marginInline: "auto" }}>
          <h3>{subtitle}</h3>
          <h1>{title}</h1>
        </div>
        <p>{paragraph}</p>
        <Balls
          ballImage={ballOne}
          height={"600"}
          width={"600"}
          top={"55"}
          right={"-1000"}
        />
        <img src={image} />
        <Balls
          ballImage={ballTwo}
          height={"750"}
          width={"750"}
          bottom={"300"}
          left={"-1000"}
        />
      </Container>
    </>
  );
}

export default TextBigImage;
