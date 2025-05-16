"use client";

import {
  IconButton,
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import { ThemeToggle } from "./ThemeToggle";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useState } from "react";
import { appRoutes } from "../lib/routes";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";

export default function AppBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const getTitle = () => {
    const defaultTitle = "DOiT MVP";

    // Checking if this is a separate post page
    const postMatch = pathname.match(/^\/posts\/(\d+)$/);
    if (postMatch) {
      return `Пост #${postMatch[1]}`;
    }

    // Find the appropriate route
    const route = Object.values(appRoutes).find(
      (route) => route.path === pathname
    );

    if (route?.path === "/") {
      return defaultTitle;
    }
    return route?.label || defaultTitle;
  };
  return (
    <>
      <MuiAppBar>
        <Toolbar>
          <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {getTitle()}
          </Typography>
          <ThemeToggle />
        </Toolbar>
      </MuiAppBar>
      <Toolbar />
      <Sidebar open={open} onClose={() => setOpen(false)} />
    </>
  );
}
