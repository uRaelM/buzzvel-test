import styled from "styled-components";

// Componente de Testemunho (Testimony) reutilizável
const TestimonyItem = styled.div`
  margin: auto 0 2rem 0;

  p {
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 1.8rem;
  }

  .testimony-data {
    margin-top: 0.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
      border-radius: 100%;
      width: 75px;
      height: 75px;
      margin-right: 0.5rem;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-left: 0.5rem;
      font-weight: 400;

      p {
        margin: 0;
      }

      span {
        color: #475569;
      }
    }
  }
`;

// Componente TestimonyItem para reutilização
const Testemony = ({ testimonyText, imgSrc, name, company }) => (
  <TestimonyItem>
    <p>{testimonyText}</p>
    <div className="testimony-data">
      <img src={imgSrc} alt={name} />
      <div>
        <p>{name}</p>
        <span>{company}</span>
      </div>
    </div>
  </TestimonyItem>
);

export default Testemony;
