import { device, theme } from "@/styles/theme";
import { styled } from "styled-components";

export const TechnologiesContainer = styled.section`
  width: 100%;
  padding: 3rem;
  background-color: ${theme.grey};
  border-radius: 10px;
  box-shadow: rgba(235, 122, 122, 0.45) 0px 1px 4px;
  margin-bottom: 3rem;
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
`;

export const TechContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
`;

export const TechContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 250px;
  gap: 0.5rem;
  text-align: center;
  box-shadow: rgba(235, 122, 122, 0.45) 0px 1px 4px;
  padding: 0.5rem;

  &:hover {
    color: ${theme.pink};
    & > span {
      color: ${theme.white};
    }
  }

  @media ${device.tablet} {
    width: 150px;

    svg {
      font-size: 50px;
    }
  }

  span {
    font-size: 20px;
    font-weight: 700;
    color: ${theme.pink};
  }

  svg {
    font-size: 70px;
  }
`;
