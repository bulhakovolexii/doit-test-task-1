"use client";

import SinglePostCard from "@/components/SinglePostCard";
import { useGetPostQuery } from "@/lib/postsApi";
import { useGetUserQuery } from "@/lib/usersApi";
import { CircularProgress } from "@mui/material";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function Post({ params }: { params: Params }) {
  const { data: post, isLoading: postIsLoading } = useGetPostQuery(params.id);
  const { data: user, isLoading: userIsLoading } = useGetUserQuery(
    post?.userId ?? 0,
    {
      skip: !post?.userId,
    }
  );

  const isLoading = userIsLoading || postIsLoading;

  if (isLoading || !post || !user) return <CircularProgress />;

  return <SinglePostCard post={post} user={user} />;
}
