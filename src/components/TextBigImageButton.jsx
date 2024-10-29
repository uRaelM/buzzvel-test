import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CallBtn from "./ui/CallBtn";
import TextBigImage from "./TextBigImage";
import Balls from "./design/Balls";

const AbsoluteContainer = styled.section`
  position: relative;
  bottom: -80px;

  @media (max-width: 480px) {
    bottom: -350px;
  }
`;

const ButtonDiv = styled.div`
  z-index: 2;
  position: relative;
  top: 12rem;
  left: 77%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: #fff;
    margintop: 1rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    top: 0;
    left: 0%;

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
  const [top, setTop] = useState(0);
  const [right, setRight] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 480px)");

    const updatePositions = () => {
      if (!mediaQuery.matches) {
        setTop(-270);
        setRight(-125);
      } else {
        setTop(0);
        setRight(0);
      }
    };

    updatePositions();

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
