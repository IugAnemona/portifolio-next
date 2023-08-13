import { theme } from "@/styles/theme";
import styled from "styled-components";

export const AboutMainSection = styled.main`
  background-color: ${theme.grey};
  flex: 2 1 0;
  border-radius: 10px;
  padding: 3rem;
  box-shadow: rgba(235, 122, 122, 0.45) 0px 1px 4px;
`;
export const AboutMainContent = styled.section`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 2.2rem;
    margin-bottom: 1.3rem;
    gap: 1rem;
    display: flex;
    justify-content: start;
    align-items: center;
    position: relative;

    &::after {
      content: "";
      background: linear-gradient(
        90deg,
        rgba(250, 82, 82, 1) 0%,
        rgba(221, 36, 118, 1) 100%
      );
      height: 3px;
      width: 30%;
      max-width: 250px;
    }
  }
  span {
    font-weight: 500;
    margin-bottom: 1rem;
    line-height: 1.4rem;
  }
`;
