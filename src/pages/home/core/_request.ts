import { GET_MOVIES } from "./_api";
import { useQuery } from "@tanstack/react-query";
import { readData } from "../../../core/http-service";
import { ResponseModel } from "./_model";
import { Options } from "../../../types/req-options-type";

const getMovies = (options: Options) =>
  readData<ResponseModel>(
    `${GET_MOVIES}&page=${options.page}&primary_release_date.gte=${options.fromDate}&primary_release_date.lte=${options.toDate}`
  );

export const useGetMovies = (options: Options, enabled: boolean) => {
  const { data, isPending } = useQuery({
    queryKey: ["movies"],
    queryFn: () => getMovies(options),
    enabled: enabled,
  });

  return { data, isPending };
};
