import { Flex, ButtonActive, ButtonInactive } from "./Menu.styles";

const Menu = () => {
  return (
    <Flex>
      <ButtonActive> OVERVIEW </ButtonActive>
      <ButtonInactive> STRUCTURE </ButtonInactive>
      <ButtonInactive> SURFACE </ButtonInactive>
    </Flex>
  );
};

export default Menu;
