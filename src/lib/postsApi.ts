import { Post } from "@/types/json-placeholder-data";
import { api } from "./api";

export const postsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "posts",
    }),
    deletePost: builder.mutation<void, number>({
      query: (postId) => ({
        url: `posts/${postId}`,
        method: "DELETE",
      }),
      async onQueryStarted(postId, { dispatch, queryFulfilled }) {
        // optimistic cache updating
        await queryFulfilled;

        dispatch(
          postsApi.util.updateQueryData("getPosts", undefined, (draft) => {
            return draft.filter((post) => post.id !== postId);
          })
        );
      },
    }),
  }),
});

export const { useGetPostsQuery, useDeletePostMutation } = postsApi;
