import {
  Flex,
  ButtonActive,
  ButtonInactive,
  MobileText,
  DesktopText,
} from "./Menu.styles";

const Menu = ({handleChangePosition}) => {
  return (
    <Flex>
      <ButtonActive onClick={()=> handleChangePosition('overview')}>
        <MobileText>OVERVIEW</MobileText>
        <DesktopText>
          <span>01</span> OVERVIEW
        </DesktopText>
      </ButtonActive>

      <ButtonInactive onClick={()=> handleChangePosition('structure')}>
        <MobileText>STRUCTURE</MobileText>
        <DesktopText>
          <span>02</span> INTERNAL STRUCTURE
        </DesktopText>
      </ButtonInactive>
      
      <ButtonInactive onClick={()=> handleChangePosition('geology')}>
        <MobileText>SURFACE</MobileText>
        <DesktopText>
          <span> 03</span> SURFACE GEOLOGY
        </DesktopText>
      </ButtonInactive>
    </Flex>
  );
};

export default Menu;
