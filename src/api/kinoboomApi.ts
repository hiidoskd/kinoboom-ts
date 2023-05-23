import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const kinoboomApi = axios.create({ baseURL: API_URL });

export interface IFilters {
  genre: string;
  ratings: string;
  years: string;
  sortByRelease: number;
}

export type getMoviesByFiltersProps = [
  filters: IFilters,
  page: number | string,
  id: string
];

export const getMoviesByFilters = async ([
  filters,
  page,
  id,
]: getMoviesByFiltersProps) => {
  const query =
    API_URL +
    `/v1.3/movie?${filters.genre}&search=${id}&field=name&search=${filters.ratings}&field=rating.kp&search=${filters.years}&field=year&sortField=year&sortType=${filters.sortByRelease}&page=${page}&isStrict=false&token=${API_KEY}`;
  const response = await kinoboomApi.get(query);
  return response.data;
};
export const getMovieById = async (id: number | string) => {
  const query = API_URL + `/v1.3/movie?field=id&search=${id}&token=${API_KEY}`;
  const response = await kinoboomApi.get(query);
  return response.data;
};
