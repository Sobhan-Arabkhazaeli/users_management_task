import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TUserDetails } from "../../types/common/user.type";

export const GetAllUsers = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://67c82dad0acf98d070854ab8.mockapi.io/api/v1/",
  }),
  endpoints: (builder) => ({
    fetchUser: builder.query<
      {
        length: number;
        users: TUserDetails[];
      },
      void
    >({
      query: () => "users",
    }),
  }),
});

export const { useFetchUserQuery } = GetAllUsers;
