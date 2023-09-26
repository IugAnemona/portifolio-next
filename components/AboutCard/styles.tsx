import { device, theme } from "@/styles/theme";
import Link from "next/link";
import styled from "styled-components";

export const CardContainer = styled.section`
  background-color: ${theme.grey};
  flex: 1 1 0;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(235, 122, 122, 0.45) 0px 1px 4px;

  text-align: center;
  position: relative;
  padding: 3rem 0;

  img {
    max-width: 270px;
    border-radius: 10px;
    position: absolute;
    top: -3rem;
    background-color: #fff;
    border: 3px solid ${theme.pinkShadow};
  }
`;

export const Occupation = styled.p`
  background-color: ${theme.blackMain};
  border-radius: 5px;
  letter-spacing: 0.5px;
  margin-top: 12rem;
  padding: 0.8rem 1.2rem;
  color: ${theme.pink};
  font-weight: 700;
  font-size: 1rem;
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(
    90deg,
    rgba(250, 82, 82, 1) 0%,
    rgba(221, 36, 118, 1) 100%
  );
  border-image-slice: 1;
`;

export const Contacts = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: ${theme.blackMain};
  border-radius: 5px;
`;

export const ContactsInfo = styled.div`
  width: 100%;
  text-align: start;
  display: flex;
  flex-direction: column;

  p {
    font-weight: bold;
  }
`;

export const ContactContent = styled.div`
  align-items: center;
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 0.8rem;
  margin-bottom: 0.8rem;
  border-bottom: 1px solid ${theme.pink};

  gap: 1rem;
  svg {
    color: ${theme.pink};
    background-color: ${theme.blackMain};
    border-radius: 10px;
    padding: 0.4rem;
    height: 2rem;
    width: 2rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 800;
    color: ${theme.pinkTransparent};
  }
`;

export const Sociais = styled.div`
  display: none;
  @media ${device.mobile} {
    background-color: ${theme.blackMain};
    border-radius: 5px;
    display: flex;
    justify-content: space-evenly;
    margin-top: 1rem;
    gap: 3rem;
    padding: 1rem;

    svg {
      color: ${theme.pink};
      font-size: 38px;
    }
  }
`;

export const Sociaislink = styled(Link)`
  text-decoration: none;
`;
