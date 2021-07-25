import styled from "styled-components";
import theme from "../../theme"

export const Nav = styled.div`
  padding: 16px 24px;
  border-bottom: 1px solid ${theme.colors.darkGray};
  grid-area: 1 / 1 / 2 / 3;
  
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  h1 {
    font-size: 28px;
    font-family: "Antonio", sans-serif;
    letter-spacing: -1.05px;
  }
`;
