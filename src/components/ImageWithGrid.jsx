import React, { useEffect, useState, Children, useRef } from "react";
import styled from "styled-components";
import Balls from "./design/Balls";
import { useScroll, motion, useTransform } from "framer-motion";

// Styled components
const GridContainer = styled.section`
  margin-block: 2rem;
  padding: 4rem;
  width: calc(100% - 8rem);
  height: calc(1100px - 8rem);
  display: grid;
  grid-template-columns: ${(props) => (props.invert ? "4fr 2fr" : "2fr 4fr")};
  gap: 20px;
  color: ${(props) => props.textColor || "#0f172a"};

  h3 {
    font-weight: 400;
    color: ${(props) => props.subTitleColor || "#D97706"};
  }

  @media (max-width: 480px) {
    text-align: center;
    padding: 1rem;
    width: calc(100% - 2rem);
    height: auto;
    grid-template-columns: 1fr;
  }
`;

const ImageGrid = styled.div`
  @media (max-width: 480px) {
    height: 350px;
  }
`;

const TextGrid = styled.div`
  margin-block: auto;
  width: 100%;
  height: 60%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto auto;
  gap: 20px;

  @media (max-width: 480px) {
    height: auto;
    grid-row: 1;
  }
`;

const TitleSubTitle = styled.div`
  grid-column: span 2;
  @media (max-width: 480px) {
    margin-bottom: 4rem;
  }
`;

const TextSection = styled.div`
  h4 {
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1rem;
  }
`;

const Word = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
};

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
  const [top1, setTop1] = useState(10);
  const [left1, setLeft1] = useState(-75);
  const [top2, setTop2] = useState(0);
  const [right2, setRight2] = useState(-500);
  const [offset, setOffset] = useState("1.2");
  const [offsetScreen, setOffsetScreen] = useState("65");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 480px)");
    const mediaQueryBigNotebook = window.matchMedia("(min-width: 1440px)");

    const updatePositions = () => {
      if (!mediaQuery.matches) {
        setTop1(0);
        setLeft1(-25);
        setTop2(-10);
        setRight2(-190);
        setOffset("2");
        setOffsetScreen("130");
      } else if (!mediaQueryBigNotebook) {
        setRight2(-400);
      } else {
        setTop1(10);
        setLeft1(-75);
        setTop2(0);
        setRight2(-500);
        setOffset("1.2");
        setOffsetScreen("65");
      }
    };

    updatePositions();

    mediaQuery.addEventListener("change", updatePositions);

    return () => mediaQuery.removeEventListener("change", updatePositions);
  }, []);

  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: [`start ${offset}`, `start ${offsetScreen}vh`],
  });

  return (
    <GridContainer
      textColor={textColor}
      subtitleColor={subTitleColor}
      invert={invert}
    >
      {/* Imagem na esqueda */}

      {!invert && (
        <ImageGrid>
          <Balls
            top={top1}
            left={left1}
            ballImage={ballImage}
            width="1000"
            height="1000"
            innerImageTop={"52.1"}
            innerImage={ballInnerImage}
            innerImageLeft={"30"}
          />
        </ImageGrid>
      )}
      <TextGrid>
        <TitleSubTitle>
          <h3>{subtitle}</h3>
          <h1>{title}</h1>
          <p>{paragraph}</p>
        </TitleSubTitle>
        {titleTextArray.map((item, index) => (
          <TextSection key={index}>
            <h4>{item.title}</h4>
            <p ref={element}>
              {item.paragraph.split("").map((word, i) => {
                const start = i / item.paragraph.split("").length;
                const end = start + 1 / item.paragraph.split("").length;
                return (
                  <Word key={i} range={[start, end]} progress={scrollYProgress}>
                    {word}
                  </Word>
                );
              })}
            </p>
          </TextSection>
        ))}
      </TextGrid>
      {invert && (
        <ImageGrid>
          <Balls
            top={top2}
            right={right2}
            ballImage={ballImage}
            width="1000"
            height="1000"
            innerImageTop={"52.1"}
            innerImage={ballInnerImage}
            innerImageLeft={"30"}
          />
        </ImageGrid>
      )}
    </GridContainer>
  );
}
export default ImageWithGrid;
