import { GET_MOVIES, SEARCH_MOVIES } from "./_api";
import { useQuery } from "@tanstack/react-query";
import { readData } from "../../../core/http-service";
import { ResponseModel } from "./_model";
import { GetOptions, SearchOptions } from "../../../types/req-options-type";

const getMovies = (params: string) =>
  readData<ResponseModel>(`${GET_MOVIES}${params}`);

export const useGetMovies = (options: GetOptions, enabled: boolean) => {
  const params = `&page=${options.page}&primary_release_date.gte=${options.fromDate}&primary_release_date.lte=${options.toDate}`;

  const { data, isFetching } = useQuery({
    queryKey: ["movies"],
    queryFn: () => getMovies(params),
    enabled: enabled,
  });

  return { data, isFetching };
};

// *******************************************
// *******************************************
const searchMovies = (params: string) =>
  readData<ResponseModel>(`${SEARCH_MOVIES}${params}`);

export const useSearchMovies = (options: SearchOptions, enabled: boolean) => {
  const params = `&page=${options.page}&query=${options.query}`;

  const { data, isFetching } = useQuery({
    queryKey: ["searched_movies"],
    queryFn: () => searchMovies(params),
    enabled: enabled,
  });

  return { data, isFetching };
};
