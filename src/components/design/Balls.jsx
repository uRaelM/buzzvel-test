import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const BallContainer = styled.div`
  z-index: 1;
  position: absolute;
  top: ${({ top }) => top}px;
  bottom: ${({ bottom }) => bottom}px;
  left: ${({ left }) => left}px;
  right: ${({ right }) => right}px;
  width: ${({ width }) => width || "650"}px;
  height: ${({ height }) => height || "700"}px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ ballImage }) => ballImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: fit;
`;

const BallImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const InnerImage = styled.img`
  position: absolute;

  top: ${({ innerImageTop }) => innerImageTop || "52.1"}%;
  left: ${({ innerImageLeft }) => innerImageLeft || "50"}%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Balls = ({
  top,
  bottom,
  left,
  right,
  ballImage,
  width,
  height,
  innerImage,
  innerImageTop,
  innerImageLeft,
}) => {
  return (
    <Container>
      <BallContainer
        top={top}
        bottom={bottom}
        left={left}
        right={right}
        ballImage={ballImage}
        width={width}
        height={height}
      >
        <BallImageContainer>
          {innerImage && (
            <InnerImage
              innerImageTop={innerImageTop}
              innerImageLeft={innerImageLeft}
              src={innerImage}
              alt="Inner"
            />
          )}
        </BallImageContainer>
      </BallContainer>
    </Container>
  );
};

export default Balls;
