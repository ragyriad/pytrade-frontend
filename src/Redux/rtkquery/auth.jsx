import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URLS.PROD_BASE,
  }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    getCsrfToken: builder.query({
      query: () => import.meta.env.API_URLS.CSRF,
    }),
    getAuthWealthsimple: builder.mutation({
      query: (args) => {
        return {
          url: env.API_URLS.WS + env.API_URLS.AUTH,
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "X-CSRFToken": args.csrfToken,
            mode: "same-origin",
          },
          body: args.twoFaCode,
        };
      },
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetCsrfTokenQuery, useGetAuthWealthsimpleMutation } = authApi;
