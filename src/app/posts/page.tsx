"use client";

import PostPreviewCard from "@/components/PostPreviewCard";
import { useGetPostsQuery } from "@/lib/postsApi";
import { useGetUsersQuery } from "@/lib/usersApi";
import { Search as SearchIcon } from "@mui/icons-material";
import { Grid, InputAdornment, Skeleton, TextField } from "@mui/material";
import { useState } from "react";

export default function Posts() {
  const { data: posts = [], isLoading: postsIsLoading } = useGetPostsQuery();
  const { data: users = [], isLoading: usersIsLoading } = useGetUsersQuery();

  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isLoading = postsIsLoading || usersIsLoading;

  return (
    <>
      <TextField
        fullWidth
        placeholder="Пошук за заголовком"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ mb: 2 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Grid container spacing={2} alignContent="stretch">
        {isLoading
          ? Array.from({ length: 12 }).map((_, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Skeleton variant="rounded" height={220} />
              </Grid>
            ))
          : filteredPosts.map((post) => {
              const user = users.find((user) => user.id === post.userId);
              if (!user) return null;
              return (
                <Grid item xs={12} sm={6} md={4} key={post.id}>
                  <PostPreviewCard post={post} user={user} />
                </Grid>
              );
            })}
      </Grid>
    </>
  );
}
