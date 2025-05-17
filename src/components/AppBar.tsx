"use client";

import {
  Badge,
  IconButton,
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import { ThemeToggle } from "./ThemeToggle";
import { Comment as CommentIcon, Menu as MenuIcon } from "@mui/icons-material";
import { useState } from "react";
import { appRoutes } from "../lib/routes";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";
import { useGetPostCommentsQuery } from "@/lib/postsApi";
import { CommentsDialog } from "./CommentsDialog";

export default function AppBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const pathname = usePathname();
  const postMatch = pathname.match(/^\/posts\/(\d+)$/);
  const postId = postMatch ? parseInt(postMatch[1]) : null;

  const { data: comments = [] } = useGetPostCommentsQuery(postId!, {
    skip: !postId,
  });

  const getTitle = () => {
    const defaultTitle = "DOiT MVP";

    // Checking if this is a separate post page
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
            onClick={() => setSidebarOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {getTitle()}
          </Typography>
          <ThemeToggle />
          {postId && (
            <IconButton color="inherit" onClick={() => setDialogOpen(true)}>
              <Badge badgeContent={comments?.length || 0} color="warning">
                <CommentIcon />
              </Badge>
            </IconButton>
          )}
        </Toolbar>
      </MuiAppBar>
      <Toolbar />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <CommentsDialog
        open={dialogOpen}
        comments={comments}
        onClose={() => setDialogOpen(false)}
      />
    </>
  );
}
