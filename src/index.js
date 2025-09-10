// src/index.js
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import store from "./store";
import App from "./App";
import "./index.css";
import GlobalStyle from "./styles/GlobalStyle";
import { lightTheme, darkTheme } from "./styles/theme";

function Root() {
  const [isDark, setIsDark] = useState(false);

  return (
    <Provider store={store}>
      <BrowserRouter basename="/bss-tech">
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <GlobalStyle />
          <App toggleTheme={() => setIsDark(!isDark)} isDark={isDark} />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<Root />);
