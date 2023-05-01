import React from "react";

import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import SwitcherTheme from "./Components/SwitcherTheme";
import { ThemeButton } from "./Components/UI";
import { temaClaro, temaEscuro } from "./Components/UI/temas";

function App() {

  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme((theme) => !theme)
  }

  return (
    <ThemeProvider theme={theme ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        <SwitcherTheme theme={theme} />
      </ThemeButton>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
