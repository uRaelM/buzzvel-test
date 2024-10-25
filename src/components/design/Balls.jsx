import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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
`;

const BallImageContainer = styled(motion.div)`
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

const bounceVariants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

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
        <BallImageContainer
          variants={bounceVariants} // Aplica a animação
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.15 }}
        >
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
