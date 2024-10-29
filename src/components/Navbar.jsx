import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import CallBtn from "./ui/CallBtn";

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  background-color: ${(props) => props.backgroundColor || "transparent"};
  color: ${(props) => props.textColor || "#0f172a"};
`;

const LeftNavbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 2;

  @media (max-width: 480px) {
    justify-content: flex-start;
  }
`;

const Logo = styled.img`
  width: ${(props) => props.logoWidth || "100%"};
  height: ${(props) => props.logoHeight || "50px"};
  margin-right: 2rem;

  @media (max-width: 480px) {
    margin-right: 0rem;
  }
`;

const NavLink = styled.a`
  color: ${(props) => props.textColor || "#0f172a"};
  text-decoration: none;
  transition: color 0.15s ease-in;
  &:hover {
    color: #f0a500;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const RightNavbar = styled(LeftNavbar)`
  span {
    margin: auto 0 auto -1.5rem;
    color: ${(props) => props.numberTextColor || "#0369A1"};
  }

  img {
    height: 25px;
    width: 25px;
  }

  @media (max-width: 480px) {
    display: none;
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
  CallBtnText,
}) {
  return (
    <div>
      <Helmet>
        <title>Soller - Navbar</title>
        <meta
          name="description"
          content="Learn more about Soller and our commitment to quality."
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
          <img src="assets/icons/phone.png" />
          <span numberTextColor={numberTextColor}>555 818 282</span>
          <CallBtn
            callBtnColor={callBtnColor}
            callBtnHoverColor={callBtnHoverColor}
            CallBtnText={CallBtnText}
          />
        </RightNavbar>
      </NavbarWrapper>
    </div>
  );
}

export default Navbar;
