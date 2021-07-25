import { Nav, Flex } from "./NavBar.styles";

import { RiMenuFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <Nav>
      <Flex>
        <h1>THE PLANETS</h1>
        <RiMenuFill style={{width: '30px', height: '30px'}}/>
      </Flex>
    </Nav>
  );
};

export default Navbar;
