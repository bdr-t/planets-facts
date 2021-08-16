import {
  Flex,
  Btn,
  MobileText,
  DesktopText,
} from "./Menu.styles";

import { useState, useEffect} from "react";

const Menu = ({ handleChangePosition, menuPosition}) => {
  const [active, setActive] = useState(menuPosition);

  function onClickOverview() {
    handleChangePosition("overview");
    setActive("overview");
  }

  function onClickStructure() {
    handleChangePosition("structure");
    setActive("structure");
  }

  function onClickGeology() {
    handleChangePosition("geology");
    setActive("geology");
  }

  useEffect(()=>{
    setActive(menuPosition)
    handleChangePosition(menuPosition);

  }, [menuPosition, handleChangePosition])

  return (
    <Flex>
      <Btn 
      active={active === 'overview' ? 1 : 2}
      onClick={() => onClickOverview("overview")}>
        <MobileText>OVERVIEW</MobileText>
        <DesktopText>
          <span>01</span> OVERVIEW
        </DesktopText>
      </Btn>

      <Btn
        active={active === 'structure' ? 1 : 2}
        onClick={() => onClickStructure("structure")}
      >
        <MobileText>STRUCTURE</MobileText>
        <DesktopText>
          <span>02</span> INTERNAL STRUCTURE
        </DesktopText>
      </Btn>

      <Btn 
      active={active === 'geology' ? 1 : 2}
      onClick={() => onClickGeology("geology")}>
        <MobileText>SURFACE</MobileText>
        <DesktopText>
          <span> 03</span> SURFACE GEOLOGY
        </DesktopText>
      </Btn>
    </Flex>
  );
};

export default Menu;
