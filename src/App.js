import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyles";
import theme from "./theme";
import { Container } from "./App.styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        hola
      </Container>
    </ThemeProvider>
  );
};

export default App;
