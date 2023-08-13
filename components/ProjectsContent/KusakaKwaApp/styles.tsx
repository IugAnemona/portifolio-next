import { device, theme } from "@/styles/theme";
import { styled } from "styled-components";

export const CardContainer = styled.section`
  width: 100%;
  padding: 0.25rem;
  margin: 1.25rem auto;
  background-color: ${theme.greyShadow};
  max-width: 48rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.75rem;
  box-shadow: rgba(235, 122, 122, 0.45) 0px 1px 4px;
`;
export const Title = styled.h1`
  color: ${theme.pink};
  font-weight: 700;
  font-size: 1.5rem;
  padding: 0.75rem;
  margin: 0.67rem 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  background-color: ${theme.grey};
  flex-wrap: wrap;

  img {
    width: 50%;
    height: auto;
    max-width: 300px;
    min-width: 200px;
  }
  @media ${device.mobile} {
    justify-content: center;
    img {
      width: 100%;
      height: auto;
    }
  }
`;
export const InfoCard = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  padding: 0.25rem;
  position: relative;
  justify-content: end;
  align-items: center;
  min-width: 200px;

  & > div {
    padding: 0.25rem;
    width: 100%;
  }

  @media ${device.mobile} {
    justify-content: space-between;
    & > div {
      padding: 1rem;
    }
  }
`;

export const Score = styled.span`
  position: absolute;
  top: 0;
  right: 0;

  @media ${device.mobile} {
    position: static;
  }
`;

export const InfoList = styled.ul`
  display: flex;
  padding: 0.5rem 0;
  line-height: 1.5rem;
  border-top: 1px solid ${theme.pink};
  flex-wrap: wrap;

  @media ${device.mobile} {
    font-size: 14px;
  }
  li {
    color: ${theme.pinkShadow};
    padding: 0;
    margin: 0 0.25rem 0 0;
    font-weight: 300;
    list-style: none;
  }

  span {
    color: ${theme.white};
    padding: 0;
    margin: 0 0.25rem 0 0;
    font-weight: 300;
  }
`;
export const SynopsisContainer = styled.div`
  padding: 0.75rem;

  h2 {
    font-weight: 700;
    margin: 1rem 0;
  }
  p {
    padding: 1.5rem 0;
    font-weight: 300;

    @media (${device.mobile}) {
      padding: 1.5rem 0.5rem;
    }
  }
`;
export const Content = styled.div`
  padding: 3rem 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  h1 {
    font-size: 32px;
    text-transform: capitalize;
    @media (max-width: 640px) {
      font-size: 28px;
    }
    span {
      color: ${theme.pink};
    }
  }

  button {
    border: none;
  }
`;

export const Input = styled.input`
  width: 70%;
  text-transform: capitalize;
  background-color: ${theme.grey};
  border: 1px solid ${theme.white};
  border-radius: 10px;
  padding: 1rem;
  color: ${theme.pink};
  box-shadow: rgba(0, 0, 0, 0.24) 6px 6px 8px;
  font-weight: 500;
  &:focus {
    border: solid 1px;
    border-color: ${theme.pink};
  }
`;

export const SearchButton = styled.button`
  padding: 1rem;
  border-radius: 50%;
  background-color: ${theme.blackMain};
  display: flex;

  svg {
    color: ${theme.pink};
    font-size: 20px;
  }
`;
