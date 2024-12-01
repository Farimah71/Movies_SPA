import { API_KEY } from "../../../configs/global";

export const GET_MOVIES = `/discover/movie?api_key=${API_KEY}`;
export const SEARCH_MOVIES = `/search/movie?api_key=${API_KEY}`;