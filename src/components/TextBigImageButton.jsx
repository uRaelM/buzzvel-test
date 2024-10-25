import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import CallBtn from "./ui/CallBtn";
import TextBigImage from "./TextBigImage";
import Balls from "./design/Balls";

const AbsoluteContainer = styled.section`
  position: relative;
  bottom: -80px;
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
  return (
    <div style={{ marginTop: "-12rem" }}>
      <AbsoluteContainer>
        <ButtonDiv>
          <CallBtn
            callBtnColor={callBtnColor}
            callBtnHoverColor={callBtnHoverColor}
          />
          <p style={{ color: "#FFF", marginTop: "1rem" }}>{bottomBtnText}</p>
        </ButtonDiv>
        <Balls top={"0"} right={"0"} ballImage={ballImage} />
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
