import { theme } from "@/styles/theme";
import { styled } from "styled-components";

export const ProjectsContainer = styled.section`
  width: 100%;
  background-color: ${theme.grey};
  border-radius: 10px;
  padding: 3rem;
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
