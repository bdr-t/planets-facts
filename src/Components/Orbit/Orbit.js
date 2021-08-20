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

const Orbit = () => {
  return (
    <Body>
      <Universe>
        <Galaxy>
          <Sun />
          <MercuryOrbit>
            <MercuryPos>
              <MercuryPlanet />
            </MercuryPos>
          </MercuryOrbit>

          <VenusOrbit>
            <VenusPos>
              <VenusPlanet />
            </VenusPos>
          </VenusOrbit>


          <EarthOrbit>
            <EarthPos>
              <EarthPlanet />
            </EarthPos>
          </EarthOrbit>


          <MarsOrbit>
            <MarsPos>
              <MarsPlanet />
            </MarsPos>
          </MarsOrbit>


          <JupiterOrbit>
            <JupiterPos>
              <JupiterPlanet />
            </JupiterPos>
          </JupiterOrbit>

          <SaturnOrbit>
            <SaturnPos>
              <SaturnPlanet />
            </SaturnPos>
          </SaturnOrbit>

          <UranusOrbit>
            <UranusPos>
              <UranusPlanet />
            </UranusPos>
          </UranusOrbit>

          <NeptuneOrbit>
            <NeptunePos>
              <NeptunePlanet/>
            </NeptunePos>
          </NeptuneOrbit>
          

        </Galaxy>
      </Universe>
    </Body>
  );
};

export default Orbit;
