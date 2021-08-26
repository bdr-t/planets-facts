import styled from "styled-components";

import mercuryImage from "../../assets/images/planet-mercury.svg";
import venusImage from "../../assets/images/planet-venus.svg";
import earthImage from "../../assets/images/planet-earth.svg";
import marsImage from "../../assets/images/planet-mars.svg";
import jupiterImage from "../../assets/images/planet-jupiter.svg";
import saturnImage from "../../assets/images/planet-saturn.svg";
import uranusImage from "../../assets/images/planet-uranus.svg";
import neptuneImage from "../../assets/images/planet-neptune.svg";

import bk from "../../assets/images/background-stars.svg";
import flare from "../../assets/images/flare.png";
import S from "../../assets/images/sun.png";

export const Body = styled.div`
  font-size: 10px;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  background-color: hsl(240, 67%, 8%);
  background-image: url(${bk});
  height: calc(100vh - 90px);
`;

export const Universe = styled.div`
  z-index: 1;
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: calc(100vh - 90px);
  background-position: center 40%;
  background-repeat: no-repeat;
  background-size: cover;
  
`;

export const Galaxy = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const SunPlanet = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1em;
  height: 1em;
  margin-top: -0.5em;
  margin-left: -0.5em;
  border-radius: 50%;
`;

export const Sun = styled(SunPlanet)`
  background-color: #fb7209;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 0 60px rgba(255, 160, 60, 0.4);
  font-size: 12em;
  background-image: url(${S});
`;

export const Planet = styled(SunPlanet)`
  background-color: #202020;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Orbit = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  animation-name: orbit;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  &:hover{
      border: 1px solid white;
  }

  @keyframes orbit {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(-360deg);
    }
  }
`;

export const MercuryOrbit = styled(Orbit)`
  width: 14em;
  height: 14em;
  margin-top: -7em;
  margin-left: -7em;
  animation-duration: 3s;
  font-size: 1em;
  z-index: 10;
`;

export const MercuryPlanet = styled(Planet)`
  left: 0%;
  top: 50%;
  background-image: url(${mercuryImage});
  animation-duration: 3s;
`;

export const VenusOrbit = styled(Orbit)`
  width: 6em;
  height: 6em;
  margin-top: -3em;
  margin-left: -3em;
  animation-duration: 7s;
  font-size: 3em;
  z-index: 9;
`;

export const VenusPlanet = styled(Planet)`
  left: 0%;
  top: 50%;
  animation-duration: 7s;
  background-image: url(${venusImage});
`;

export const EarthOrbit = styled(Orbit)`
  width: 7.5em;
  height: 7.5em;
  margin-top: -3.75em;
  margin-left: -3.75em;
  animation-duration: 12s;
  font-size: 3em;
  z-index: 8;
`;

export const EarthPlanet = styled(Planet)`
left: 0%;
  top: 50%;
  animation-duration: 12s;
  background-image: url(${earthImage});
`;

export const MarsOrbit = styled(Orbit)`
  width: 15em;
  height: 15em;
  margin-top: -7.5em;
  margin-left: -7.5em;
  animation-duration: 22s;
  font-size: 2em;
  z-index: 7;
`;

export const MarsPlanet = styled(Planet)`
left: 0%;
  top: 50%;
  animation-duration: 22s;
  background-image: url(${marsImage});
`;

export const JupiterOrbit = styled(Orbit)`
  width: 7.5em;
  height: 7.5em;
  margin-top: -3.75em;
  margin-left: -3.75em;
  animation-duration: 133s;
  font-size: 5em;
  z-index: 6;
`;

export const JupiterPlanet = styled(Planet)`
left: 0%;
  top: 50%;
  animation-duration: 133s;
  background-image: url(${jupiterImage});
`;

export const SaturnOrbit = styled(Orbit)`

  width: 8em;
  height: 8em;
  margin-top: -4em;
  margin-left: -4em;
  animation-duration: 352s;
  font-size: 6em;
  z-index: 5;
`;

export const SaturnPlanet = styled(SunPlanet)`
left: 0%;
  top: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  animation-duration: 352s;
  background-image: url(${saturnImage});
  border-radius: 0;
  z-index: 4;
`;

export const UranusOrbit = styled(Orbit)`
  width: 18em;
  height: 18em;
  margin-top: -9em;
  margin-left: -9em;
  animation-duration: 700s;
  font-size: 3em;
  z-index: 3;
`;

export const UranusPlanet = styled(Planet)`
  animation-duration: 700s;
  background-image: url(${uranusImage});
  left: 0%;
  top: 50%;
`;

export const NeptuneOrbit = styled(Orbit)`
  width: 20em;
  height: 20em;
  margin-top: -10em;
  margin-left: -10em;
  animation-duration: 1000s;
  font-size: 3em;
  z-index: 2;
`;

export const NeptunePlanet = styled(Planet)`
  animation-duration: 1000s;
  background-image: url(${neptuneImage});
  left: 0%;
  top: 50%;
`;
