import styled from "styled-components";
import Arrow from "../icons/Arrow";

const CallButton = styled.div`
  color: ${(props) => props.callBtnColor || "#581C87"};
  border: 2px solid ${(props) => props.callBtnColor || "#581C87"};
  border-radius: 30px;
  padding: 1rem 2rem;
  font-weight: bold;
  cursor: pointer;
  height: 18px;
  width: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${(props) => props.callBtnColor || "#581C87"};
    color: ${(props) => props.callBtnHoverColor || "#FCD34D"};
    transition: all 0.15s ease-in;
  }
`;

const CallBtn = ({
  callBtnColor,
  callBtnHoverColor,
  callBtnText,
  svgIcon,
  ...props
}) => {
  return (
    <CallButton
      {...props}
      callBtnColor={callBtnColor}
      callBtnHoverColor={callBtnHoverColor}
    >
      {callBtnText || "Request a Quote"}
      <div
        style={{
          rotate: "180deg",
          marginBottom: "0.1rem",
          marginLeft: "0.2rem",
        }}
      >
        <Arrow color={callBtnColor || "#581C87"} />
      </div>
      {/* Usa o texto padrão se callBtnText não for fornecido */}
    </CallButton>
  );
};

export default CallBtn;
