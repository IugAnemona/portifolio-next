import { device, theme } from "@/styles/theme";
import Link from "next/link";
import { styled } from "styled-components";

export const RedesContainer = styled.div`
  display: flex;
  background-color: ${theme.pink};
  padding: 1rem 3rem 0 1.5rem;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2000;
  @media ${device.mobile} {
    display: none;
  }

  svg {
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const VerticalText = styled.div`
  transform: rotate(90deg);
  font-weight: 500;
  position: absolute;
  width: 100px;
  top: 50px;
  right: -30px;
  color: ${theme.blackMain};

  @media ${device.mobile} {
    display: none;
  }
`;

export const RedesContent = styled.div`
  width: 100%;
  @media ${device.mobile} {
    display: flex;
    justify-content: space-evenly;
  }
`;

export const LinkRede = styled(Link)`
  color: ${theme.white};

  svg {
    font-size: 30px;
    display: block;
    margin-bottom: 16px;
    @media ${device.mobile} {
      font-size: 40px;
      margin-bottom: 0;
    }
  }
`;
