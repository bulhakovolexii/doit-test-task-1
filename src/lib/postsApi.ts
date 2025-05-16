import { Post } from "@/types/json-placeholder-data";
import { api } from "./api";

export const postsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "posts",
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
