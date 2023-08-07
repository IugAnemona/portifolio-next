import { theme } from "@/styles/theme";
import { styled } from "styled-components";

export const AppContainer = styled.main`
  display: flex;
  background-color: ${theme.greyShadow};
  flex-direction: column;
  margin: 0 auto;
  padding: 3rem;
  width: 100%;
  max-width: 640px;
  box-shadow: rgba(235, 122, 122, 0.45) 0px 1px 4px;
  border-radius: 10px;

  @media (max-width: 640px) {
    padding: 3rem 1rem;
  }
`;

export const Content = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  margin-bottom: 3rem;

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
