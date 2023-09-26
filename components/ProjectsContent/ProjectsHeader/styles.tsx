import { styled } from "styled-components";
import { device, theme } from "../../../styles/theme";

export const ApresentationContainer = styled.header`
  width: 100%;
  margin-bottom: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  padding: 0 3rem;
  @media ${device.mobile} {
    padding: 0 1.5rem;
  }

  span {
    color: ${theme.pink};
    margin-bottom: 1rem;
    font-weight: 500;
    font-size: 20px;
  }
  h1 {
    width: 100%;
    font-size: 50px;
    margin-bottom: 1rem;

    span {
      font-size: 50px;
    }
    @media ${device.mobile} {
      font-size: 30px;
      span {
        font-size: 30px;
      }
    }
  }
`;

export const FullContainer = styled.div`
  flex-wrap: wrap;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  p {
    width: 100%;
    max-width: 768px;

    @media (max-width: "1024px") {
      width: 768px;
    }
  }
`;
