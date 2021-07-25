import styled from "styled-components";
import bk from "./assets/images/background-stars.svg";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background: ${(props) => props.theme.colors.black};
  background-image: url(${bk});
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
`;

export const MenuContainer = styled.div`
  padding: 0 1.5rem 3rem 1.5rem;

  @media (min-width: 768px){
    grid-area: 4 / 1 / 5 / 3;
    display: flex;
    gap: 11px;
    padding: 0 40px 36px 40px;
  }
`;
