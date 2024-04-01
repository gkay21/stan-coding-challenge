import { horizontalPadding } from "@/theme";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Facebook from "@assets/social/facebook-white.svg";
import Instagram from "@assets/social/instagram-white.svg";
import Twitter from "@assets/social/twitter-white.svg";
import App from "@assets/store/app-store.svg";
import Play from "@assets/store/play-store.svg";
import Windows from "@assets/store/windows-store.svg";

const Wrapper = styled.div`
  margin-top: auto;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.palette.tertiary.main};
  color: ${(props) => props.theme.palette.tertiary.accent};

  ${horizontalPadding}
`;

const Links = styled.div`
  margin-top: 40px;
`;

const FooterLink = styled(Link)`
  color: ${(props) => props.theme.palette.tertiary.accent};
  padding: 0 20px;
  text-decoration: none;
  font-size: 0.7rem;
  font-weight: 600;

  &:first-child {
    padding-left: 0;
  }

  &:not(:last-child) {
    border-right: 1px solid ${(props) => props.theme.palette.tertiary.accent};
  }
`;

const Copyright = styled.p`
  margin-top: 20px;
  font-size: 0.7rem;
`;

const External = styled.div`
  margin-top: auto;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ExternalSection = styled.div`
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 20px;
`;

const SocialIcon = styled.img`
  height: 25px;
  width: 25px;
`;

const StoreIcon = styled.img`
  height: 30px;
`;

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Links>
        <FooterLink to="/">Home</FooterLink>
        <FooterLink to="/">Terms and Conditions</FooterLink>
        <FooterLink to="/">Privacy Policy</FooterLink>
        <FooterLink to="/">Collection Statement</FooterLink>
        <FooterLink to="/">Help</FooterLink>
        <FooterLink to="/">Manage Account</FooterLink>
      </Links>
      <Copyright>
        Copyright &copy; 2016 DEMO Streaming. All Rights Reserved.
      </Copyright>
      <External>
        <ExternalSection>
          <Link to="/">
            <SocialIcon aria-label="Facebook icon" src={Facebook} />
          </Link>
          <Link to="/">
            <SocialIcon aria-label="Twitter icon" src={Twitter} />
          </Link>
          <Link to="/">
            <SocialIcon aria-label="Instagram icon" src={Instagram} />
          </Link>
        </ExternalSection>
        <ExternalSection>
          <Link to="/">
            <StoreIcon aria-label="Facebook icon" src={App} />
          </Link>
          <Link to="/">
            <StoreIcon aria-label="Twitter icon" src={Play} />
          </Link>
          <Link to="/">
            <StoreIcon aria-label="Instagram icon" src={Windows} />
          </Link>
        </ExternalSection>
      </External>
    </Wrapper>
  );
};

export default Footer;
