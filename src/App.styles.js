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
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
`;
