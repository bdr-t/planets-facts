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
  transform: rotateX(75deg);
  transform-style: preserve-3d;
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
  transform-style: preserve-3d;
`;

export const Sun = styled(SunPlanet)`
  background-color: #fb7209;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 0 60px rgba(255, 160, 60, 0.4);
  transform: rotateX(-75deg);
  font-size: 24em;
  background-image: url(${S});
`;

export const Pos = styled.div`
  position: absolute;
  transform-style: preserve-3d;
  animation-name: invert;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes invert {
    0% {
      transform: rotateX(-90deg) rotateY(360deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(-90deg) rotateY(0deg) rotateZ(0deg);
    }
  }
`;

export const Planet = styled(SunPlanet)`
  background-color: #202020;
  background-repeat: no-repeat;
  background-size: cover;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: shadow;
  @keyframes shadow {
    0% {
      box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5);
      /* TOP */
    }

    25% {
      box-shadow: inset 16px 0 8px rgba(0, 0, 0, 0.5);
      /* LEFT */
    }

    50% {
      box-shadow: inset 40px -20px 16px rgba(0, 0, 0, 0.5);
      /* BOTTOM */
    }

    50.01% {
      box-shadow: inset -40px -20px 16px rgba(0, 0, 0, 0.5);
      /* BOTTOM */
    }

    75% {
      box-shadow: inset -16px 0 8px rgba(0, 0, 0, 0.5);
      /* RIGHT */
    }

    100% {
      box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5);
      /* TOP */
    }
  }
`;

export const Orbit = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  animation-name: orbit;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  transform-style: preserve-3d;

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
  width: 15em;
  height: 15em;
  margin-top: -7.5em;
  margin-left: -7.5em;
  animation-duration: 3s;
  font-size: 2em;
`;

export const MercuryPos = styled(Pos)`
  left: 50%;
  top: -1px;
  animation-duration: 3s;
`;

export const MercuryPlanet = styled(Planet)`
  background-image: url(${mercuryImage});
  animation-duration: 3s;
`;

export const VenusOrbit = styled(Orbit)`
  width: 7em;
  height: 7em;
  margin-top: -3.5em;
  margin-left: -3.5em;
  animation-duration: 7s;
  font-size: 5em;
  z-index: 9;
`;

export const VenusPos = styled(Pos)`
  left: 50%;
  top: -1px;
  border: solid 3px red;
  animation-duration: 7s;
`;

export const VenusPlanet = styled(Planet)`
  animation-duration: 7s;
  background-image: url(${venusImage});
`;

export const EarthOrbit = styled(Orbit)`
  width: 8.5em;
  height: 8.5em;
  margin-top: -4.25em;
  margin-left: -4.25em;
  animation-duration: 12s;
  font-size: 5em;
  z-index: 8;
`;

export const EarthPos = styled(Pos)`
  left: 50%;
  top: -1px;
  border: solid 3px red;
  animation-duration: 12s;
`;

export const EarthPlanet = styled(Planet)`
  animation-duration: 12s;
  background-image: url(${earthImage});
`;

export const MarsOrbit = styled(Orbit)`
  width: 18em;
  height: 18em;
  margin-top: -9em;
  margin-left: -9em;
  animation-duration: 22s;
  font-size: 3em;
  z-index: 7;
`;

export const MarsPos = styled(Pos)`
  left: 50%;
  top: -1px;
  border: solid 3px red;
  animation-duration: 22s;
`;

export const MarsPlanet = styled(Planet)`
  animation-duration: 22s;
  background-image: url(${marsImage});
`;

export const JupiterOrbit = styled(Orbit)`
  width: 10em;
  height: 10em;
  margin-top: -5em;
  margin-left: -5em;
  animation-duration: 133s;
  font-size: 7em;
  z-index: 6;
`;

export const JupiterPos = styled(Pos)`
  left: 50%;
  top: -1px;
  border: solid 3px red;
  animation-duration: 133s;
`;

export const JupiterPlanet = styled(Planet)`
  animation-duration: 133s;
  background-image: url(${jupiterImage});
`;

export const SaturnOrbit = styled(Orbit)`
  width: 12em;
  height: 12em;
  margin-top: -6em;
  margin-left: -6em;
  animation-duration: 352s;
  font-size: 8em;
  z-index: 5;
`;

export const SaturnPos = styled(Pos)`
  left: 50%;
  top: -1px;
  border: solid 3px red;
  animation-duration: 352s;
`;

export const SaturnPlanet = styled(SunPlanet)`
  background-repeat: no-repeat;
  background-size: cover;
  animation-duration: 352s;
  background-image: url(${saturnImage});
  border-radius: 0;
  z-index: 4;
`;

export const UranusOrbit = styled(Orbit)`
  width: 16em;
  height: 16em;
  margin-top: -8em;
  margin-left: -8em;
  animation-duration: 700s;
  font-size: 6em;
  z-index: 3;
`;

export const UranusPos = styled(Pos)`
  left: 50%;
  top: -1px;
  border: solid 3px red;
  animation-duration: 700s;
`;

export const UranusPlanet = styled(Planet)`
  animation-duration: 700s;
  background-image: url(${uranusImage});
`;

export const NeptuneOrbit = styled(Orbit)`
  width: 18em;
  height: 18em;
  margin-top: -9em;
  margin-left: -9em;
  animation-duration: 1000s;
  font-size: 6em;
  z-index: 2;
`;

export const NeptunePos = styled(Pos)`
  left: 50%;
  top: -1px;
  border: solid 3px red;
  animation-duration: 1000s;
`;

export const NeptunePlanet = styled(Planet)`
  animation-duration: 1000s;
  background-image: url(${neptuneImage});
`;
