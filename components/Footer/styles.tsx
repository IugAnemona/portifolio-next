import { theme } from "@/styles/theme";
import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 20vh;
  background-color: ${theme.pinkShadow};

  span {
    margin-top: 2rem;
    font-size: 18px;
  }
`;
