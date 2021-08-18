import { IoIosArrowForward } from "react-icons/io";
import { Container, Btn, Planet, Circle, PlanetName } from "./Hamburger.styles";

const Hamburger = ({ data }) => {
  return (
    <Container>
      <Btn>
        <Planet>
          <Circle color={data["mercury"].sectionColor} />
          <PlanetName>Mercury</PlanetName>
        </Planet>
        <IoIosArrowForward size="20px" />
      </Btn>

      <Btn>
        <Planet>
          <Circle color={data["venus"].sectionColor} />
          <PlanetName>Venus</PlanetName>
        </Planet>
        <IoIosArrowForward size="20px" />
      </Btn>
      <Btn>
        <Planet>
          <Circle color={data["earth"].sectionColor} />
          <PlanetName>Earth</PlanetName>
        </Planet>
        <IoIosArrowForward size="20px" />
      </Btn>
      <Btn>
        <Planet>
          <Circle color={data["mars"].sectionColor} />
          <PlanetName>Mars</PlanetName>
        </Planet>
        <IoIosArrowForward size="20px" />
      </Btn>

      <Btn>
        <Planet>
          <Circle color={data["jupiter"].sectionColor} />
          <PlanetName>Jupiter</PlanetName>
        </Planet>
        <IoIosArrowForward size="20px" />
      </Btn>

      <Btn>
        <Planet>
          <Circle color={data["saturn"].sectionColor} />
          <PlanetName>Saturn</PlanetName>
        </Planet>
        <IoIosArrowForward size="20px" />
      </Btn>

      <Btn>
        <Planet>
          <Circle color={data["uranus"].sectionColor} />
          <PlanetName>Uranus</PlanetName>
        </Planet>
        <IoIosArrowForward size="20px" />
      </Btn>
      <Btn>
        <Planet>
          <Circle color={data["neptune"].sectionColor} />
          <PlanetName>Neptune</PlanetName>
        </Planet>
        <IoIosArrowForward size="20px" />
      </Btn>
    </Container>
  );
};

export default Hamburger;
