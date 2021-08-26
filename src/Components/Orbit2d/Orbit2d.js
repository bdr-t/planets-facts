import {
  Body,
  Universe,
  Galaxy,
  Sun,
  MercuryPlanet,
  MercuryOrbit,
  VenusOrbit,
  VenusPlanet,
  EarthOrbit,
  EarthPlanet,
  MarsOrbit,
  MarsPlanet,
  JupiterOrbit,
  JupiterPlanet,
  SaturnOrbit,
  SaturnPlanet,
  UranusOrbit,
  UranusPlanet,
  NeptuneOrbit,
  NeptunePlanet,
  AsteroidsBelt,
} from "./Orbit2d.styles";

const Orbit2d = ({ handleChangePlanet }) => {
  return (
    <>
    <Body>
      <Universe>
        <Galaxy>
          <Sun />
          
          <MercuryOrbit onClick={() => handleChangePlanet("Mercury")}>
            <MercuryPlanet />
          </MercuryOrbit>

          <VenusOrbit onClick={() => handleChangePlanet("Venus")}> 
            <VenusPlanet />
          </VenusOrbit>

          <EarthOrbit onClick={() => handleChangePlanet("Earth")}>
            <EarthPlanet />
          </EarthOrbit>

          <MarsOrbit onClick={() => handleChangePlanet("Mars")}>
            <MarsPlanet />
          </MarsOrbit>

          <JupiterOrbit onClick={() => handleChangePlanet("Jupiter")}>
            <JupiterPlanet />
          </JupiterOrbit>

          <SaturnOrbit onClick={() => handleChangePlanet("Saturn")}>
            <SaturnPlanet />
          </SaturnOrbit>

          <UranusOrbit onClick={() => handleChangePlanet("Uranus")}>
            <UranusPlanet />
          </UranusOrbit>

          <NeptuneOrbit onClick={() => handleChangePlanet("Neputne")}>
            <NeptunePlanet/>
          </NeptuneOrbit>
        </Galaxy>
      </Universe>
      
    </Body>
    <AsteroidsBelt/>
    </>
  );
};

export default Orbit2d;
