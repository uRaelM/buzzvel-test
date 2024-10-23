import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import CallBtn from "./ui/CallBtn";
import Testemony from "./testimony/Testimony";
import Balls from "./design/Balls";

const Home = styled.main`
  padding: 4rem;
  width: 100%;
  height: calc(700px - 8rem);
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: ${(props) => props.textColor || "#0f172a"};
`;

const LeftSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2rem 0 auto 0;
  width: 100%;
  max-width: 550px;
  height: 90%;

  h1 {
    font-weight: 800;
    font-size: 4rem;
  }

  h3 {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;

const RightSection = styled.div``;

function MainSection({
  textColor,
  callBtnColor,
  callBtnHoverColor,
  callBtnText,
  testimonyText,
  imgSrcTestimony,
  nameTestimony,
  companyTestimony,
  ballImage,
  innerImageBall,
}) {
  return (
    <div>
      <Helmet>
        <title>Soller - Sun to Power Your Home</title>
        <meta name="description" content="Get the Sun to Power Your Home." />
      </Helmet>
      <Home textColor={textColor}>
        <LeftSection>
          <h1>Get the Sun to Power Your Home</h1>
          <h3>
            Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
            orci dui consequat turpis scelerisque.
          </h3>
          <CallBtn
            callBtnColor={callBtnColor}
            callBtnHoverColor={callBtnHoverColor}
            callBtnText={callBtnText}
            style={{ margin: "1rem auto 0 0" }}
          />
          <Testemony
            testimonyText={testimonyText}
            imgSrc={imgSrcTestimony}
            name={nameTestimony}
            company={companyTestimony}
          />
        </LeftSection>
        <RightSection>
          <Balls
            top={"-150"}
            right={"0"}
            ballImage={ballImage}
            innerImage={innerImageBall}
          />
        </RightSection>
      </Home>
    </div>
  );
}

export default MainSection;
