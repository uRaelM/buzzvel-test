import React from "react";
import styled from "styled-components";
import Balls from "./design/Balls";

// Styled components
const GridContainer = styled.section`
  padding: 4rem;
  width: calc(100% - 8rem);
  height: calc(1100px - 8rem);
  display: grid;
  grid-template-columns: ${(props) => (props.invert ? "4fr 2fr" : "2fr 4fr")};
  gap: 20px;
  color: ${(props) => props.textColor || "#0f172a"};

  h1 {
    font-size: 4rem;
    font-weight: 800;
  }

  h3 {
    font-weight: 400;
    color: ${(props) => props.subTitleColor || "#D97706"};
  }

  p {
    line-height: 2rem;
    font-weight: 400;
    font-size: 1.2rem;
  }
`;

const ImageGrid = styled.div``;

const TextGrid = styled.div`
  margin-block: auto;
  width: 100%;
  height: 60%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto auto;
  gap: 20px;
`;

const TitleSubTitle = styled.div`
  grid-column: span 2;
`;

const TextSection = styled.div`
  h4 {
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

function ImageWithGrid({
  textColor,
  subTitleColor,
  title,
  subtitle,
  paragraph,
  titleTextArray,
  ballImage,
  ballInnerImage,
  invert = false,
}) {
  return (
    <GridContainer
      textColor={textColor}
      subtitleColor={subTitleColor}
      invert={invert}
    >
      {/* Imagem na esqueda */}
      {!invert ? (
        <>
          <Balls
            top="10"
            left="-75"
            ballImage={ballImage}
            width="1000"
            height="1000"
            innerImage={ballInnerImage}
            innerImageLeft={"30"}
          />

          <TextGrid>
            <TitleSubTitle>
              <h3>{subtitle}</h3>
              <h1>{title}</h1>
              <p>{paragraph}</p>
            </TitleSubTitle>
            {titleTextArray.map((item, index) => (
              <TextSection key={index}>
                <h4>{item.title}</h4>
                <p>{item.paragraph}</p>
              </TextSection>
            ))}
          </TextGrid>
        </>
      ) : (
        <>
          <TextGrid>
            <TitleSubTitle>
              <h3>{subtitle}</h3>
              <h1>{title}</h1>
              <p>{paragraph}</p>
            </TitleSubTitle>
            {titleTextArray.map((item, index) => (
              <TextSection key={index}>
                <h4>{item.title}</h4>
                <p>{item.paragraph}</p>
              </TextSection>
            ))}
          </TextGrid>

          <Balls
            top="0"
            right="-500"
            ballImage={ballImage}
            width="1000"
            height="1000"
            innerImage={ballInnerImage}
            innerImageLeft={"30"}
          />
        </>
      )}
    </GridContainer>
  );
}

export default ImageWithGrid;
