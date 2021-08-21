import {
    Body,
    Universe,
    Galaxy,
    Sun,
    MercuryPlanet,
    MercuryOrbit,
    MercuryPos,
    VenusOrbit,
    VenusPos,
    VenusPlanet,
    EarthOrbit,
    EarthPos,
    EarthPlanet,
    MarsOrbit,
    MarsPos,
    MarsPlanet,
    JupiterOrbit,
    JupiterPos,
    JupiterPlanet,
    SaturnOrbit,
    SaturnPos,
    SaturnPlanet,
    UranusOrbit,
    UranusPos,
    UranusPlanet,
    NeptuneOrbit,
    NeptunePos,
    NeptunePlanet,
  } from "./Orbit.styles";

const Orbit = ({handleChangePlanet}) => {
  return (
    <Body>
      <Universe>
        <Galaxy>
          <Sun />
          <MercuryOrbit>
            <MercuryPos>
              <MercuryPlanet onClick={() => handleChangePlanet("Mercury")}/>
            </MercuryPos>
          </MercuryOrbit>

          <VenusOrbit>
            <VenusPos>
              <VenusPlanet onClick={() => handleChangePlanet("Venus")}  />
            </VenusPos>
          </VenusOrbit>


          <EarthOrbit>
            <EarthPos>
              <EarthPlanet onClick={() => handleChangePlanet("Earth")}/>
            </EarthPos>
          </EarthOrbit>


          <MarsOrbit>
            <MarsPos>
              <MarsPlanet  onClick={() => handleChangePlanet("Mars")}/>
            </MarsPos>
          </MarsOrbit>


          <JupiterOrbit>
            <JupiterPos>
              <JupiterPlanet onClick={() => handleChangePlanet("Jupiter")}/>
            </JupiterPos>
          </JupiterOrbit>

          <SaturnOrbit>
            <SaturnPos>
              <SaturnPlanet onClick={() => handleChangePlanet("Saturn")}/>
            </SaturnPos>
          </SaturnOrbit>

          <UranusOrbit>
            <UranusPos>
              <UranusPlanet onClick={() => handleChangePlanet("Uranus")}/>
            </UranusPos>
          </UranusOrbit>

          <NeptuneOrbit >
            <NeptunePos>
              <NeptunePlanet onClick={() => handleChangePlanet("Neputne")}/>
            </NeptunePos>
          </NeptuneOrbit>
          

        </Galaxy>
      </Universe>
    </Body>
  );
};

export default Orbit;
