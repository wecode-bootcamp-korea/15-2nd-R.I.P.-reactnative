import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import Stack from "./src/navigations/Stack";
import theme from "./src/styles/theme";
import Loading from "./src/screens/Loading/Loading";

export default function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </ThemeProvider>
  );
}
