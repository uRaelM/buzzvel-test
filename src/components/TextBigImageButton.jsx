import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CallBtn from "./ui/CallBtn";
import TextBigImage from "./TextBigImage";
import Balls from "./design/Balls";

const AbsoluteContainer = styled.section`
  position: relative;
  bottom: -250px;

  @media (max-width: 1000px) {
    bottom: -550px;
  }

  @media (max-width: 905px) {
    bottom: -600px;
  }

  @media (max-width: 768px) {
    bottom: -325px;
  }

  @media (max-width: 480px) {
    bottom: -350px;
  }
`;

const ButtonDiv = styled.div`
  z-index: 1000;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-16%, -0%);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: #fff;
    margintop: 1rem;
  }

  @media (max-width: 1000px) {
    width: 100%;

    transform: translate(-50%, -0%);

    p {
      margin-top: 0.2rem;
      margin-bottom: 1rem;
    }
  }
`;

function TextBigImageButton({
  title,
  textColor,
  subtitle,
  image,
  imageHeight,
  imageWidth,
  backgroundColor,
  textleft,
  subTitleColor,
  callBtnColor,
  callBtnHoverColor,
  bottomBtnText,
  ballImage,
}) {
  const [top, setTop] = useState(-169);
  const [right, setRight] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1000px)");
    const mediaQuery2 = window.matchMedia("(min-width: 905px)");
    const mediaQuerycellphone = window.matchMedia("(min-width: 769px)");
    const mediaQueryScellphone = window.matchMedia("(min-width: 480px)");

    const updatePositions = () => {
      if (!mediaQueryScellphone.matches) {
        setTop(-270);
      } else if (!mediaQuerycellphone.matches) {
        setTop(-245);
      } else if (!mediaQuery2.matches) {
        setTop(-520);
      } else if (!mediaQuery.matches) {
        setTop(-470);
      } else {
        setTop(-169);
      }
    };

    updatePositions();

    mediaQueryScellphone.addEventListener("change", updatePositions);
    mediaQuerycellphone.addEventListener("change", updatePositions);
    mediaQuery2.addEventListener("change", updatePositions);
    mediaQuery.addEventListener("change", updatePositions);

    return () => mediaQuery.removeEventListener("change", updatePositions);
  }, []);
  return (
    <div style={{ marginTop: "-12rem" }}>
      <AbsoluteContainer>
        <ButtonDiv>
          <CallBtn
            callBtnColor={callBtnColor}
            callBtnHoverColor={callBtnHoverColor}
          />
          <p>{bottomBtnText}</p>
        </ButtonDiv>
        <Balls top={top} right={right} ballImage={ballImage} />
      </AbsoluteContainer>
      <TextBigImage
        title={title}
        textColor={textColor}
        subtitle={subtitle}
        image={image}
        imageHeight={imageHeight}
        imageWidth={imageWidth}
        backgroundColor={backgroundColor}
        subTitleColor={subTitleColor}
        textleft={textleft}
      />
    </div>
  );
}

export default TextBigImageButton;
