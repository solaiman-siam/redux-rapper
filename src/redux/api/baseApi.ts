import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
    reducerPath: 'baseQuery',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api'}),
    tagTypes: ['task'],
    endpoints: (builder) => ({
        getTask : builder.query({
            query : () => '/tasks',
            providesTags: ['task']
        }),
        createTask : builder.mutation({
            query : (taskData) => ({
                url: '/tasks',
                method: 'POST',
                body: taskData,
            }),
            invalidatesTags: ['task']
        }),
    })
})

export const  { useGetTaskQuery, useCreateTaskMutation} = baseApi
