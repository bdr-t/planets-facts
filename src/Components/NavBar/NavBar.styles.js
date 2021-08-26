import styled from "styled-components";
import theme from "../../theme";
import { RiMenuFill } from "react-icons/ri";

export const NavContainer = styled.div`
  padding: 16px 24px;
  border-bottom: ${({border})=> border === 1 ? 'none' : `1px solid ${theme.colors.darkGray}` };
  grid-area: 1 / 1 / 2 / 3;
  @media (min-width: 768px) {
    padding: 32px 24px 27px 24px;
  }
  @media (min-width: 1024px) {
    padding: 0 40px 0 40px;
    height: 85px;
  }
`;

export const Li = styled.li`
  border-top: ${(props) =>
    props.active === 1 ? `7px solid ${props.color}` : `7px solid transparent`};
  &:hover{
    border-top: ${(props) => `7px solid ${props.color}`};
  }
  color: ${(props) =>
    props.active === 1 ? 'white' : `${theme.colors.whiteAlpha75}`};
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
    cursor: pointer;
  }

  @media (min-width: 768px) {
    justify-content: center;
    flex-direction: column;
    height: 100px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    height: 85px;
    justify-content: space-between;
  }
`;

export const HamIcon = styled(RiMenuFill)`
  width: 30px;
  height: 30px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: block;
    ul {
      margin-top: 40px;
      display: flex;
      gap: 32px;
    }

    li {
      font-size: 0.6857rem;
      font-weight: 600;
      text-transform: uppercase;
      line-height: 25px;
      letter-spacing: 1px;
      /* color: ${theme.colors.whiteAlpha75}; */
      cursor: pointer;
      display: flex;
      align-items: center;
      height: 82px;
    }
  }

  @media (min-width: 1024px) {
    ul {
      margin: 0;
    }
  }
`;
