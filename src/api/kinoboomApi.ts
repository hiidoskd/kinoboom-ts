import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const kinoboomApi = axios.create({
  baseURL: API_URL,
  headers: {
    get: {
      'X-API-KEY': API_KEY,
    },
  },
});

export interface IFilters {
  genre?: number;
  ratingFrom?: number;
  ratingTo?: number;
  yearFrom?: number;
  yearTo?: number;
  order?: 'NUM_VOTE' | 'RATING' | 'YEAR';
  type?: 'FILM' | 'TV_SHOW' | 'TV_SERIES' | 'MINI_SERIES' | 'ALL';
}

export type getMoviesByFiltersProps = [
  filters: IFilters,
  page?: number | string,
  keyword?: string
];

export const getMoviesByFilters = async ([
  {
    genre,
    order = 'NUM_VOTE',
    type = 'ALL',
    ratingFrom = 0,
    ratingTo = 10,
    yearFrom = 1860,
    yearTo = 2023,
  },
  page = 1,
  keyword,
]: getMoviesByFiltersProps) => {
  const query =
    API_URL +
    `/v2.2/films?genres=${
      genre ? genre : ''
    }&order=${order}&type=${type}&ratingFrom=${ratingFrom}&ratingTo=${ratingTo}&yearFrom=${yearFrom}&yearTo=${yearTo}&keyword=${
      keyword ? keyword : ''
    }&page=${page}`;

  const response = await kinoboomApi.get(query);
  return response.data;
};
export const getMovieById = async (id: number | string) => {
  const query = API_URL + `/v2.2/films/${id}`;
  const response = await kinoboomApi.get(query);
  return response.data;
};

export const getMovieByKeyword = async (keyword: string) => {
  const query =
    API_URL + `/v2.1/films/search-by-keyword?keyword=${keyword}&page=1`;
  const response = await kinoboomApi.get(query);
  return response.data;
};
