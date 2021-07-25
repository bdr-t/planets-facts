import {
  Flex,
  ButtonActive,
  ButtonInactive,
  MobileText,
  DesktopText,
} from "./Menu.styles";

const Menu = () => {
  return (
    <Flex>
      <ButtonActive>
        <MobileText>OVERVIEW</MobileText>
        <DesktopText>
          <span>01</span> OVERVIEW
        </DesktopText>
      </ButtonActive>

      <ButtonInactive>
        <MobileText>STRUCTURE</MobileText>
        <DesktopText>
          <span>02</span> INTERNAL STRUCTURE
        </DesktopText>
      </ButtonInactive>
      
      <ButtonInactive>
        <MobileText>SURFACE</MobileText>
        <DesktopText>
          <span> 03</span> SURFACE GEOLOGY
        </DesktopText>
      </ButtonInactive>
    </Flex>
  );
};

export default Menu;
