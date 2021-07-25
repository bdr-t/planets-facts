import { NavContainer, Flex, HamIcon, Nav } from "./NavBar.styles";

const Navbar = () => {
  return (
    <NavContainer>
      <Flex>
        <h1>THE PLANETS</h1>
        <HamIcon />
        <Nav>
          <ul>
            <li>Mercury</li>
            <li>Venus</li>
            <li>Earth</li>
            <li>Mars</li>
            <li>Jupiter</li>
            <li>Saturn</li>
            <li>Uranus</li>
            <li>Neptune</li>
          </ul>
        </Nav>
      </Flex>
    </NavContainer>
  );
};

export default Navbar;
