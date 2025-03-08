import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUsersParams } from "../../types/common/users.params.interface";
import { TUserDetails } from "../../types/common/user.type";

export const GetAllUsers = createApi({
  reducerPath: "GetUsersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://67c82dad0acf98d070854ab8.mockapi.io/api/v1/",
  }),
  endpoints: (builder) => ({
    fetchUser: builder.query<TUserDetails[], IUsersParams>({
      query: (params: IUsersParams) => {
        const url = new URL(
          "users",
          "https://67c82dad0acf98d070854ab8.mockapi.io/api/v1/"
        );
        if (params.page) {
          url.searchParams.append("page", params.page.toString());
        }
        if (params.limit) {
          url.searchParams.append("limit", params.limit.toString());
        }
        if (params.sortBy) {
          url.searchParams.append("sortBy", params.sortBy);
        }
        if (params.search) {
          url.searchParams.append("name", params.search);
        }
        return url.toString();
      },
    }),
  }),
});

export const { useFetchUserQuery } = GetAllUsers;
