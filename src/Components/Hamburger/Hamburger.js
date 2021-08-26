import { IoIosArrowForward } from "react-icons/io";
import { Container, Btn, Planet, Circle, PlanetName } from "./Hamburger.styles";

const Hamburger = ({ data, handleChangePlanet, setHamInactive }) => {

  function handleClick(planet){
    handleChangePlanet(planet)
    setHamInactive()

  }

  return (
    <Container>
      <Btn onClick={()=> handleClick('mercury')}>
        <Planet>
          <Circle color={data["mercury"].sectionColor} />
          <PlanetName>Mercury</PlanetName>
        </Planet>
        <IoIosArrowForward size="20px" />
      </Btn>

      <Btn onClick={()=> handleClick('venus')}>
        <Planet>
          <Circle color={data["venus"].sectionColor} />
          <PlanetName>Venus</PlanetName>
        </Planet>
        <IoIosArrowForward size="20px" />
      </Btn>

      <Btn onClick={()=> handleClick('earth')}>
        <Planet>
          <Circle color={data["earth"].sectionColor} />
          <PlanetName>Earth</PlanetName>
        </Planet>
        <IoIosArrowForward size="20px" />
      </Btn>

      <Btn onClick={()=> handleClick('mars')}>
        <Planet>
          <Circle color={data["mars"].sectionColor} />
          <PlanetName>Mars</PlanetName>
        </Planet>
        <IoIosArrowForward size="20px" />
      </Btn>

      <Btn onClick={()=> handleClick('jupiter')}>
        <Planet>
          <Circle color={data["jupiter"].sectionColor} />
          <PlanetName>Jupiter</PlanetName>
        </Planet>
        <IoIosArrowForward size="20px" />
      </Btn>

      <Btn onClick={()=> handleClick('saturn')}>
        <Planet>
          <Circle color={data["saturn"].sectionColor} />
          <PlanetName>Saturn</PlanetName>
        </Planet>
        <IoIosArrowForward size="20px" />
      </Btn>

      <Btn onClick={()=> handleClick('uranus')}>
        <Planet>
          <Circle color={data["uranus"].sectionColor} />
          <PlanetName>Uranus</PlanetName>
        </Planet>
        <IoIosArrowForward size="20px" />
      </Btn>

      <Btn onClick={()=> handleClick('neptune')}>
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
