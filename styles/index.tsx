import styled, { createGlobalStyle } from "styled-components";
import { device, theme } from "./theme";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }



  body, input, select, button, p {
    font: 16px 'Ubuntu', sans-serif;
    color: ${theme.white};
  }

  button { cursor: pointer; }
`;

export const WithoutContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1365px) {
    padding: 0;
  }
`;

export const sectionFullScreen = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${theme.blackMain};
  padding: 3rem;
  padding-top: 10rem;

  @media ${device.tablet} {
    padding: 1.5rem;
    padding-top: 7rem;
  }

  @media ${device.mobile} {
    padding: 0.2rem;
    padding-top: 7rem;
  }
  @media ${device.desktop} {
    padding: 0rem;
    padding-top: 10rem;
  }
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 0;
  gap: 3rem;
  max-width: 1440px;
  margin: 0 auto;
`;
