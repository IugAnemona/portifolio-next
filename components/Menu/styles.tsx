import styled from "styled-components";
import { device, theme } from "../../styles/theme";
import Link from "next/link";

export const Section = styled.section`
  width: 100%;
  position: fixed;
  z-index: 1050;
`;

interface ScrollProps {
  scroll: boolean;
}

export const Header = styled.header<ScrollProps>`
  transition: all 1s;
  background-color: ${(props) => (props.scroll ? theme.grey : theme.blackMain)};
  border: solid 1px ${(props) => (props.scroll ? theme.pink : theme.blackMain)};
  border-top: none;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 10px 0;
  max-width: 1440px;
  position: relative;
  border-bottom-left-radius: ${(props) => (props.scroll ? "10px" : 0)};
  border-bottom-right-radius: ${(props) => (props.scroll ? "10px" : 0)};

  @media ${device.mobile} {
    position: static;
    border: none;
    border-radius: 0;
  }
`;

export const Logo = styled(Link)`
  margin-left: 5rem;
  width: 50px;
  height: 50px;

  @media ${device.mobile} {
    margin-left: 20px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${theme.pink};
  }
`;

export const LinkRede = styled(Link)`
  color: ${theme.white};

  svg {
    font-size: 30px;
    display: block;
    margin-bottom: 16px;
    @media ${device.mobile} {
      font-size: 30px;
    }
  }
`;

export const Nav = styled.nav`
  font-family: "Ubuntu", sans-serif;
  letter-spacing: 0.5px;
  font-size: 18px;
  font-weight: 300;
  flex: 1;
  @media ${device.tablet} {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  margin-right: 5rem;

  a {
    text-decoration: none;
    margin-left: 2.5rem;
    &:first-child {
      margin-left: 0;
    }
    &:hover {
      color: ${theme.pinkShadow};
    }
  }
`;
