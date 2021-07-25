import styled from "styled-components";
import theme from "../../theme"

export const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0 1.5em;
  border-bottom: 1px solid ${theme.colors.darkGray};
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
`;