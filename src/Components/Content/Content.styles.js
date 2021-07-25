import styled from "styled-components";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import theme from "../../theme";

export const Container = styled.div`
  @media (min-width: 768px) {
    grid-area: 3 / 1;
  }
  @media (min-width: 1024px) {
    grid-area: 2 / 2 / 3 / 3;
    display: flex;
    align-items: flex-end;
  }
`;
export const ConentDiv = styled.div`
  padding: 0 1.5rem;
  margin-bottom: 1.75rem;

  h1 {
    font-family: ${theme.fonts.secondary};
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-align: center;
    font-size: 2.5rem;
  }

  p {
    text-align: center;
    line-height: 22px;
    font-size: 0.6875rem;
    color: ${theme.colors.whiteAlpha75};
    margin-bottom: 10px;
  }

  @media (min-width: 768px) {
    padding: 0 0 0 40px;
    h1 {
      text-align: start;
      font-size: 48px;
      margin-bottom: 1.5rem;
    }
    p {
      text-align: start;
    }
  }

  @media (min-width: 1024px) {
    padding: 0 40px 0 0;
    h1 {
      font-size: 80px;
      margin-bottom: 34px;
    }
    p {
      font-size: 14px;
      margin-bottom: 24px;
    }
  }
`;

export const MoreInfoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  p {
    text-align: center;
    line-height: 25px;
    font-size: 0.75rem;
    color: ${theme.colors.lightGray};
    margin: 0;
  }
  a {
    text-align: center;
    line-height: 25px;
    font-weight: 600;
    font-size: 0.75rem;
    color: ${theme.colors.lightGray};
    display: flex;
    gap: 5px;
    align-items: center;
  }

  @media (min-width: 768px) {
    justify-content: flex-start;
    margin-top: 30px;
  }

  @media (min-width: 1024px) {
    p {
      font-size: 14px;
    }
    a {
      font-size: 14px;
    }
  }
`;

export const ExternalIcon = styled(FaExternalLinkSquareAlt)`
  width: 14px;
  height: 14px;

  @media (min-width: 1024px) {
    width: 16px;
    height: 16px;
  }
`;

export const TextWraper = styled.div`
  max-width: 500px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    max-width: 350px;
  }
`;
