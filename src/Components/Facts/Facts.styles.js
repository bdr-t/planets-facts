import styled from "styled-components";
import theme from "./../../theme";

export const FactsDiv = styled.div`
  display: flex;
  border: 1px solid ${theme.colors.darkGray};
  height: 3rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 0.5rem;
  h3 {
    font-size: 8px;
    color: ${theme.colors.lightGray};
    letter-spacing: 0.046rem;
    font-weight: 700;
  }

  h4 {
    font-family: ${theme.fonts.secondary};
    font-size: 20px;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 16px 0 19px 15px;
    align-items: flex-start;
    justify-content: center;
    gap: 9px;
    margin: 0;
    h4 {
      font-size: 24px;
      letter-spacing: -0.056rem;
    }

  }

  @media (min-width: 1024px){
      width: 210px;
      height: auto;
      padding: 21px 0 24px 20px;
      h4{
          font-size: 40px;
      }
      h3{
          font-size: 11px;
      }

  }
`;
