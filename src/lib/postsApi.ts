import { Comment, Post } from "@/types/json-placeholder-data";
import { api } from "./api";

export const postsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "posts",
    }),
    getPost: builder.query<Post, number>({
      query: (postId) => `posts/${postId}`,
    }),
    getPostComments: builder.query<Comment[], number>({
      query: (postId) => `posts/${postId}/comments`,
    }),
    addPost: builder.mutation<Post, Partial<Post>>({
      query: (post) => ({
        url: "posts",
        method: "POST",
        body: post,
      }),
      async onQueryStarted(post, { dispatch, queryFulfilled }) {
        const { data: newPost } = await queryFulfilled;

        // Create a new post with an ID that we generate ourselves
        // because jsonplaceholder does not save real changes
        const mockPost: Post = {
          ...newPost,
          id: Date.now(),
          title: post.title || "",
          body: post.body || "",
          userId: post.userId || 1,
        };

        dispatch(
          postsApi.util.updateQueryData("getPosts", undefined, (draft) => {
            return [mockPost, ...draft];
          })
        );
      },
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

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useGetPostCommentsQuery,
  useAddPostMutation,
  useDeletePostMutation,
} = postsApi;
