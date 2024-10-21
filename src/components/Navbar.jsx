import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${(props) => props.backgroundColor || "transparent"};
  color: ${(props) => props.textColor || "#0f172a"};
`;

const LeftNavbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Logo = styled.img`
  width: ${(props) => props.logoWidth || "100px"};
  height: ${(props) => props.logoHeight || "50px"};
  margin-right: 2rem;
`;

const NavLink = styled.a`
  color: ${(props) => props.textColor || "#0f172a"};
  text-decoration: none;
  transition: color 0.15s ease-in;
  &:hover {
    color: #f0a500;
  }
`;

const RightNavbar = styled(LeftNavbar)`
  span {
    color: ${(props) => props.numberTextColor || "#0369A1"};
  }
`;

const CallBtn = styled.div`
  color: ${(props) => props.callBtnColor || "#581C87"};
  border: 2px solid ${(props) => props.callBtnColor || "#581C87"};
  border-radius: 30px;
  padding: 1rem 2rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.callBtnColor || "#581C87"};
    color: ${(props) => props.callBtnHoverColor || "#FCD34D"};
    transition: all 0.15s ease-in;
  }
`;

function Navbar({
  links,
  logo,
  logoWidth,
  logoHeight,
  textColor,
  backgroundColor,
  numberTextColor,
  callBtnColor,
  callBtnHoverColor,
}) {
  return (
    <div>
      <Helmet>
        <title>Navbar - Soller</title>
        <meta
          name="description"
          content="Learn more about Cozinha de Titânio and our commitment to quality."
        />
      </Helmet>
      <NavbarWrapper textColor={textColor} backgroundColor={backgroundColor}>
        <LeftNavbar logo={logo}>
          <Logo src={logo} logoWidth={logoWidth} logoHeight={logoHeight} />
          {links.map((link) => (
            <NavLink key={link.name} href={link.href} textColor={textColor}>
              {link.name}
            </NavLink>
          ))}
        </LeftNavbar>
        <RightNavbar>
          <span numberTextColor={numberTextColor}>555 818 282</span>
          <CallBtn
            callBtnColor={callBtnColor}
            callBtnHoverColor={callBtnHoverColor}
          >
            Request a Quote
          </CallBtn>
        </RightNavbar>
      </NavbarWrapper>
    </div>
  );
}

export default Navbar;
