import { NavContainer, Flex, HamIcon, Nav } from "./NavBar.styles";
import {useEffect} from 'react'

const Navbar = ({handleChangePlanet}) => {

  return (
    <NavContainer>
      <Flex>
        <h1>THE PLANETS</h1>
        <HamIcon />
        <Nav>
          <ul>
            <li onClick={()=>handleChangePlanet('Mercury')}>Mercury</li>
            <li onClick={()=>handleChangePlanet('Venus')}>Venus</li>
            <li onClick={()=>handleChangePlanet('Earth')}>Earth</li>
            <li onClick={()=>handleChangePlanet('Mars')}>Mars</li>
            <li onClick={()=>handleChangePlanet('Jupiter')}>Jupiter</li>
            <li onClick={()=>handleChangePlanet('Saturn')}>Saturn</li>
            <li onClick={()=>handleChangePlanet('Uranus')}>Uranus</li>
            <li onClick={()=>handleChangePlanet('Neptune')}>Neptune</li>
          </ul>
        </Nav>
      </Flex>
    </NavContainer>
  );
};

export default Navbar;
