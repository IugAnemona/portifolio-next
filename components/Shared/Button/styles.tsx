import { theme } from "@/styles/theme";
import Link from "next/link";
import styled from "styled-components";

export const Button = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 15px 20px;
  background-color: transparent;
  color: ${theme.pink};
  border-radius: 30px;
  font-weight: 500;
  font-size: 18px;

  &:hover {
    color: ${theme.white};
  }

  &:active {
    background-color: ${theme.greyShadow};
    color: ${theme.pink};
  }

  svg {
    font-size: 20px;
    margin-left: 10px;
  }

  &.pink {
    background-color: ${theme.pink};
    color: ${theme.white};

    &:active {
      background-color: ${theme.greyShadow};
      color: ${theme.pink};
    }

    &:hover {
      background-color: ${theme.pinkTransparent};
    }
  }

  &.margin-top {
    margin-top: 1.5rem;
  }
`;
