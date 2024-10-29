import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CallBtn from "./ui/CallBtn";
import Testemony from "./Testimony";
import Balls from "./design/Balls";

const Home = styled.main`
  padding: 4rem;
  width: calc(100% - 8rem);
  height: calc(700px - 8rem);
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: ${(props) => props.textColor || "#0f172a"};

  @media (max-width: 480px) {
    padding: 1rem;
    width: calc(100% - 1rem);
    height: auto;
    grid-template-columns: 1fr;
  }
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

  .button-div {
    margin: 1rem auto 0 0;
  }

  h1 {
    font-weight: 800;
    font-size: 4rem;
  }

  h3 {
    font-size: 1.4rem;
    line-height: 2rem;
  }

  @media (max-width: 480px) {
    text-align: center;
    gap: 10px;

    .button-div {
      margin: 1rem auto;
    }

    h1 {
      font-size: 2.5rem;
    }

    h3 {
      font-size: 1.2rem;
      line-height: 2rem;
    }
  }
`;

const RightSection = styled.div`
  height: 250px;
  @media (max-width: 480px) {
    grid-row: 1;
  }
`;

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
  const [right, setRight] = useState(-20);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 480px)");

    // Define o valor com base na largura da tela
    const updateValue = () => {
      setRight(mediaQuery.matches ? -70 : -20);
    };

    updateValue(); // Executa na montagem do componente

    mediaQuery.addEventListener("change", updateValue); // Escuta mudanças de tamanho

    return () => mediaQuery.removeEventListener("change", updateValue); // Cleanup
  }, []);

  return (
    <div>
      <Home textColor={textColor}>
        <LeftSection>
          <h1>Get the Sun to Power Your Home</h1>
          <h3>
            Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
            orci dui consequat turpis scelerisque.
          </h3>
          <div className="button-div">
            <CallBtn
              callBtnColor={callBtnColor}
              callBtnHoverColor={callBtnHoverColor}
              callBtnText={callBtnText}
            />
          </div>
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
            right={right}
            ballImage={ballImage}
            innerImage={innerImageBall}
          />
        </RightSection>
      </Home>
    </div>
  );
}

export default MainSection;
