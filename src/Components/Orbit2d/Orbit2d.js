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
} from "./Orbit2d.styles";

const Orbit2d = ({ handleChangePlanet }) => {
  return (
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
  );
};

export default Orbit2d;
