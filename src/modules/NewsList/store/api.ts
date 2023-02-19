import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "@^/store";
import { INewsItem } from "../types";

const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_NEWS_API_PREFIX,
  }),
  endpoints: (build) => ({
    getNews: build.query<{ news: INewsItem[]; total: number }, string>({
      async queryFn(language, queryApi, extraOptions, baseQuery) {
        const state = queryApi.getState() as RootState;
        const selector = newsApi.endpoints.getNews.select(language) as (
          state: any
        ) => any;
        const result = selector(state) as { data: { news: INewsItem[] } };
        const oldData = result.data ?? { news: [], total: 0 };
        const { data, meta } = await baseQuery({
          url: `news?_start=${oldData.news.length}&_limit=2&lang=${language}`,
        });

        return {
          data: {
            total: +(meta?.response?.headers.get("x-total-count") ?? 0),
            news: [...oldData.news, ...(data as INewsItem[])],
          },
        };
      },
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;

export default newsApi;
