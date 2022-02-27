import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiHeaders = {
    'content-type': 'application/json',
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': ''
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = url => ({url, headers: apiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })
});

export const {
    useGetCryptosQuery
} = cryptoApi;