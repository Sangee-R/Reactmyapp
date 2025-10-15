import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts',
      transformResponse: (response) => {
        // replicate to 500
        const replicated = []
        while (replicated.length < 500) {
          replicated.push(...response.map((p, i) => ({ ...p, id: replicated.length + i + 1 })))
        }
        return replicated.slice(0, 500)
      }
    }),
  }),
})

export const { useGetPostsQuery } = postsApi