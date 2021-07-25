import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyles";
import theme from "./theme";
import { Container, MenuContainer } from "./App.styles";
import NavBar from "./Components/NavBar/index";
import Img from "./Components/Img/Img";
import Menu from "./Components/Menu/Menu";
import Content from "./Components/Content/Content";
import Facts from "./Components/Facts/Facts";
import earth from "./assets/images/planet-earth.svg";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <NavBar />
        <Menu />
        <Img source={earth} />
        <Content />
        <MenuContainer>
          <Facts title={"ROTATION TIME"} value={"0.99 DAYS"} />
          <Facts title={"REVOLUTION TIME"} value={"365.26 DAYS"} />
          <Facts title={"RADIUS"} value={"6,371 KM"} />
          <Facts title={"AVERAGE TEMP."} value={"16°C"} />
        </MenuContainer>
      </Container>
    </ThemeProvider>
  );
};

export default App;
