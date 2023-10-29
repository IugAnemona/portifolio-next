import { device, theme } from "@/styles/theme";
import { styled } from "styled-components";

export const Project = styled.div`
  border-radius: 15px;
  margin-bottom: 3rem;
  position: relative;

  background-color: ${theme.greyShadow};
  box-shadow: rgba(235, 122, 122, 0.45) 0px 1px 4px;
  max-width: 400px;
`;

export const ImageContainer = styled.div`
  border-radius: 15px 15px 0 0;
  padding: 1rem;
  background-color: ${theme.pinkTransparent};

  img {
    height: auto;
    width: 100%;
  }
`;

export const ContentContainer = styled.div`
  padding: 1rem;

  h3 {
    color: ${theme.pink};
    text-transform: uppercase;
  }

  p {
    font-weight: 300;
  }
`;

export const LinksContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  bottom: -4.5rem;
`;
