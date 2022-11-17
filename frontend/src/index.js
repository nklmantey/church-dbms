import React from "react";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

//pages
import App from "./App";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Finance from "./pages/Finance/Finance";
import Evangelism from "./pages/Evangelism/Evangelism";

//redux


const chakraTheme = extendTheme({
  colors: {
    gray: {
      50: "#f7fafc",
      100: "#edf2f7",
      200: "#e2e8f0",
      300: "#cbd5e0",
      400: "#a0aec0",
      500: "#718096",
      600: "#4a5568",
      700: "#2c3748",
      800: "#1a202c",
      900: "#000",
    },
    mine: {
      50: "#f2f2f2",
      100: "#d9d9d9",
      200: "#bfbfbf",
      300: "#a6a6a6",
      400: "#8c8c8c",
      500: "#808080",
      600: "#737373",
      700: "#594594",
      800: "#404040",
      900: "#262626",
    },
  },
  fonts: { heading: "Satoshi", body: "Satoshi" },
});
const emotionCache = createCache({
  key: "emotion-cache",
  prepend: true,
});

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    // <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <ChakraProvider theme={chakraTheme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="finance" element={<Finance />} />
              <Route path="evangelism" element={<Evangelism />} />
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </CacheProvider>
    // </Provider>
);
