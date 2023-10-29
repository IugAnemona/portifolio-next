import { device, theme } from "@/styles/theme";
import styled from "styled-components";

export const ProjectsContainer = styled.section`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  gap: 3rem;
  justify-content: center;

  @media ${device.mobile} {
    padding: 3rem 0.2rem;
  }
`;

export const ProductsMain = styled.section`
  padding: 3rem 1rem;
  background-color: ${theme.grey};
  border-radius: 10px;
  width: 100%;
  margin-bottom: 3rem;

  h2 {
    font-size: 2.2rem;
    margin-bottom: 1.3rem;
    gap: 1rem;
    display: flex;
    justify-content: start;
    align-items: center;
    position: relative;
    @media ${device.mobile} {
      padding: 1rem;
    }

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
  p {
    max-width: 640px;
    padding: 1rem;
    letter-spacing: 1.5px;
    font-weight: 500;
    margin-bottom: 1rem;
  }
`;
