import { User } from "@/types/json-placeholder-data";
import { api } from "./api";

export const postsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "users",
    }),
  }),
});

export const { useGetUsersQuery } = postsApi;
