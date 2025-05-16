"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleTheme } from "@/lib/themeSlice";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const ThemeToggle = () => {
  const mode = useAppSelector((state) => state.theme.mode);
  const dispatch = useAppDispatch();

  return (
    <IconButton onClick={() => dispatch(toggleTheme())} color="inherit">
      {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};
