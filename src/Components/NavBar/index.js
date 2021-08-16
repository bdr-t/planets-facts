import { NavContainer, Flex, HamIcon, Nav, Li } from "./NavBar.styles";
import { useEffect, useState } from "react";

const Navbar = ({ handleChangePlanet, planet, color, data }) => {
  const [active, setActive] = useState(planet);
  
  useEffect(() =>{
    setActive(planet);
  },[planet])

  return (
    <NavContainer>
      <Flex>
        <h1>THE PLANETS</h1>
        <HamIcon />
        <Nav>
          <ul>
            <Li
              color={data['mercury'].sectionColor}
              active={active === "mercury" ? 1 : 2}
              onClick={() => handleChangePlanet("Mercury")}
            >
              Mercury
            </Li>
            <Li
              color={data['venus'].sectionColor}
              color={color}
              active={active === "venus" ? 1 : 2}
              onClick={() => handleChangePlanet("Venus")}
            >
              Venus
            </Li>
            <Li
            color={data['earth'].sectionColor}
              active={active === "earth" ? 1 : 2}
              onClick={() => handleChangePlanet("Earth")}
            >
              Earth
            </Li>
            <Li
            color={data['mars'].sectionColor}
              active={active === "mars" ? 1 : 2}
              onClick={() => handleChangePlanet("Mars")}
            >
              Mars
            </Li>
            <Li
            color={data['jupiter'].sectionColor}
              active={active === "jupiter" ? 1 : 2}
              onClick={() => handleChangePlanet("Jupiter")}
            >
              Jupiter
            </Li>
            <Li
            color={data['saturn'].sectionColor}
              active={active === "saturn" ? 1 : 2}
              onClick={() => handleChangePlanet("Saturn")}
            >
              Saturn
            </Li>
            <Li
            color={data['uranus'].sectionColor}
              active={active === "uranus" ? 1 : 2}
              onClick={() => handleChangePlanet("Uranus")}
            >
              Uranus
            </Li>
            <Li
            color={data['neptune'].sectionColor}
              active={active === "neptune" ? 1 : 2}
              onClick={() => handleChangePlanet("Neptune")}
            >
              Neptune
            </Li>
          </ul>
        </Nav>
      </Flex>
    </NavContainer>
  );
};

export default Navbar;
