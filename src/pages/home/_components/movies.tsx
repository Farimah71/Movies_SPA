import { FC, useCallback, useEffect, useState } from "react";
import { MyTable } from "../../../components/table";
import { TopLoader } from "../../../components/top-loader";
import { useGetMovies, useSearchMovies } from "../core/_request";
import { MovieModel } from "../core/_model";
import { TableProps } from "antd";
import { debounce } from "lodash";
import { IMG_URL } from "../../../configs/global";

type Date = {
  from: string;
  to: string;
};

interface Data {
  id: number;
  title: string;
  poster: string;
  overview: string;
}

export const Movies: FC = () => {
  // ********** States ***********
  const [pageNumber, setPageNumber] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState<Data[]>();
  const [searchedData, setSearchedData] = useState<Data[]>();
  const [date, setDate] = useState<Date>({ from: "", to: "" });
  const [shouldFetch, setShouldFetch] = useState({ get: false, search: false });

  // ********** Variables ***********
  const queryOptions = {
    page: pageNumber,
    fromDate: date.from,
    toDate: date.to,
  };
  const searchOptions = {
    page: pageNumber,
    fromDate: date.from,
    toDate: date.to,
    query: searchTerm,
  };
  const columns: TableProps["columns"] = [
    {
      key: 1,
      title: "poster",
      dataIndex: "poster",
      render: (path: string) => (
        <img src={path} alt="Poster" width={100} className="rounded-md" />
      ),
      width: 200,
    },
    { key: 2, title: "title", dataIndex: "title", width: 200 },
    {
      key: 3,
      title: "overview",
      dataIndex: "overview",
      render: (overview: string) => (
        <span className="whitespace-normal">{overview}</span>
      ),
    },
  ];

  // ********** Hooks ***********
  const { data: response, isFetching } = useGetMovies(
    queryOptions,
    shouldFetch.get
  );
  const { data: searchResponse, isFetching: searchFetching } = useSearchMovies(
    searchOptions,
    shouldFetch.search
  );

  useEffect(() => {
    const fromDate = new Date(new Date().setDate(new Date().getDate() - 30))
      .toISOString()
      .split("T")[0];
    const toDate = new Date().toISOString().split("T")[0];
    setDate({ from: fromDate, to: toDate });
    setShouldFetch((prev) => ({ ...prev, get: true }));
  }, []);
  useEffect(() => {
    setShouldFetch({
      search: searchTerm ? true : false,
      get: searchTerm ? false : true,
    });
  }, [pageNumber]);
  useEffect(() => {
    if (response?.results.length) {
      setShouldFetch((prev) => ({ ...prev, get: false }));
      const data = response.results.map((movie: MovieModel) => ({
        id: movie.id,
        poster: IMG_URL + movie.poster_path,
        title: movie.title,
        overview: movie.overview,
      }));
      data && setData(data);
    }
  }, [response]);
  useEffect(() => {
    setShouldFetch((prev) => ({ ...prev, search: false }));
    if (searchResponse?.results) {
      const data = searchResponse.results.map((movie: MovieModel) => ({
        id: movie.id,
        poster: IMG_URL + movie.poster_path,
        title: movie.title,
        overview: movie.overview,
      }));
      data && setSearchedData(data);
    }
  }, [searchResponse, searchTerm]);

  // ********** Functions ***********
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setSearchTerm(value);
      setPageNumber(1);
      setShouldFetch((prev) => ({ ...prev, search: true }));
    }, 1000),
    []
  );

  // ********** JSX ***********
  return (
    <div className="w-full">
      <TopLoader isContentLoading={isFetching || searchFetching} />
      <MyTable
        dataSource={searchTerm ? searchedData : data}
        columns={columns}
        pageSize={20}
        totalCount={
          searchTerm ? searchResponse?.total_results : response?.total_pages
        }
        loading={isFetching || searchFetching}
        searchLoading={searchFetching}
        searchColumn="title"
        currentPage={pageNumber}
        onChangeHandler={(page) => {
          setPageNumber(page?.current!);
        }}
        onSearchHandler={(term) => debouncedSearch(term)}
      />
    </div>
  );
};
