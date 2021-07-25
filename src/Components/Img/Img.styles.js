import styled from "styled-components";

export const ImgDiv = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: 2 / 1 / 3 / 3;

  img {
    max-width: 10.8125rem;
    max-height: 10.8125rem;
  }

  @media (min-width: 768px){
    height: 480px;
    img {
    max-width: 285px;
    max-height: 285px;
  }
  }


`;