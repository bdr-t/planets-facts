import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyles";
import theme from "./theme";
import { Container, FactsContainer, Wrapper } from "./App.styles";
import NavBar from "./Components/NavBar/index";
import Img from "./Components/Img/Img";
import Menu from "./Components/Menu/Menu";
import Content from "./Components/Content/Content";
import Facts from "./Components/Facts/Facts";
import earth from "./assets/images/planet-earth.svg";
import { useState, useEffect} from "react";
import data from './assets/data'

const App = () => {
  const [planetName, setPlanetName] = useState("earth");
  const [planetDetails, setPlanetDetails] = useState(data[planetName])
  const [menuPosition, setMenuPosition] = useState('overview')

  function handleChangePlanet(x) {
    setPlanetName(x.toLocaleLowerCase());
    setMenuPosition('overview')
  }
  function handleChangePosition(x) {
    setMenuPosition(x.toLocaleLowerCase());
  }

  useEffect(() =>{
      setPlanetDetails(data[planetName])
  },[planetName])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Container>
          <NavBar handleChangePlanet={handleChangePlanet} planetDetails={planetDetails}/>
          <Menu handleChangePosition={handleChangePosition} menuPosition={menuPosition} color={planetDetails.sectionColor}/>
          <Img menuPosition={menuPosition} planetDetails={planetDetails} />
          <Content planetDetails={planetDetails} menuPosition={menuPosition}/>
          <FactsContainer>
            <Facts title={"ROTATION TIME"} value={"0.99 DAYS"} />
            <Facts title={"REVOLUTION TIME"} value={"365.26 DAYS"} />
            <Facts title={"RADIUS"} value={"6,371 KM"} />
            <Facts title={"AVERAGE TEMP."} value={"16°C"} />
          </FactsContainer>
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
