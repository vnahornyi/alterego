export interface INewsItem {
  id: number;
  name: string;
  lang: string;
  url: string;
  image: string;
}

export interface INewsState {
  isLoading: boolean;
  totalCount: number;
  news: Array<INewsItem>;
}
