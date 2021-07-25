import styled from "styled-components";
import theme from "../../theme"

export const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0 1.5em;
  border-bottom: 1px solid ${theme.colors.darkGray};
  @media (min-width: 768px) {
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: flex-end;
    padding: 0 40px 0 0;
    border: none;
  }
`;

export const ButtonActive = styled.button`
  color: white;
  background-color: transparent;
  outline: none;
  font-size: 0.5625rem;
  font-weight: 600;
  border:none;
  letter-spacing: 2px;
  border-bottom: 4px solid ${theme.colors.purple};
  padding: 20px 4px;

  span{
    color: ${theme.colors.whiteAlpha50};
    margin-right: 0.5rem;
  }
  
  @media (min-width: 768px) {
    padding: 15px;
    width: 280px;
    border: 1px solid ${theme.colors.darkGray};
    background-color: ${theme.colors.purple};
    text-align: start;
  }
`;

export const ButtonInactive = styled.button`
  color: ${theme.colors.lightGray};
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 0.5625rem;
  font-weight: 600;
  letter-spacing: 2px;
  padding: 20px 4px;
  border-bottom: 4px solid transparent;
  span{
    color: ${theme.colors.whiteAlpha50};
    margin-right: 0.5rem;
  }
  @media (min-width: 768px) {
    padding: 15px;
    width: 280px;
    border: 1px solid ${theme.colors.darkGray};
    text-align: start;
    color: ${theme.colors.white}
  }
`;

export const MobileText = styled.p`
@media (min-width: 768px) {
  display: none;
}
`

export const DesktopText = styled.p`
display: none;
@media (min-width: 768px) {
  display: block;
}

`