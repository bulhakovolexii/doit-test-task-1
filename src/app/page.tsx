"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { useGetPostsQuery } from "@/lib/postsApi";
import { Box, Container, Typography } from "@mui/material";

export default function Home() {
  const { data: posts = [] } = useGetPostsQuery();
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Hello, World!
        </Typography>
        <ThemeToggle />
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.body}</li>
          ))}
        </ul>
      </Box>
    </Container>
  );
}
