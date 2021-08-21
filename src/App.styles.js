import styled from "styled-components";
import bk from "./assets/images/background-stars.svg";

export const Container = styled.div`
  max-width: 1536px;
  position: relative;
  min-height: 100vh;
  margin: auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-auto-rows: minmax(min-content, max-content);
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1.5fr 1fr;
    grid-auto-rows: minmax(min-content, max-content);
  }
`;

export const FactsContainer = styled.div`
  padding: 0 1.5rem 3rem 1.5rem;

  @media (min-width: 768px) {
    grid-area: 4 / 1 / 5 / 3;
    display: flex;
    gap: 11px;
    padding: 0 40px 36px 40px;
  }

  @media (min-width: 1024px) {
    height: auto;
    justify-content: center;
    gap: 25px;
  }
`;

export const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.black};
  background-image: url(${bk});
`;

export const Button = styled.button`
  position: absolute;
  top: 15%;
  right: 10%;
  height: fit-content;
  width: fit-content;
  padding: 1em;
  background-color: pink;
`