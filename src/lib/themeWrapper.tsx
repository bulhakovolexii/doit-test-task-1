"use client";

import { Roboto } from "next/font/google";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { setTheme } from "./themeSlice";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

export const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.theme.mode);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as PaletteMode;

    if (savedTheme === "light" || savedTheme === "dark") {
      dispatch(setTheme(savedTheme));
    } else {
      const systemMode = prefersDarkMode ? "dark" : "light";
      dispatch(setTheme(systemMode));
    }

    setIsHydrated(true);
  }, [dispatch, prefersDarkMode]);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("theme", mode);
    }
  }, [mode, isHydrated]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode },
        typography: {
          fontFamily: roboto.style.fontFamily,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
