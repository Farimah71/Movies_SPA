import { FC, useEffect, useState } from "react";
import { MyTable } from "../../../components/table";
import { TopLoader } from "../../../components/top-loader";
import { useGetMovies } from "../core/_request";
import { MovieModel } from "../core/_model";
import { TableProps } from "antd";

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
  const [data, setData] = useState<Data[]>();
  const [date, setDate] = useState<Date>({ from: "", to: "" });
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);

  // ********** Hooks ***********
  const { data: response, isPending } = useGetMovies(
    { page: pageNumber, fromDate: date.from, toDate: date.to },
    shouldFetch
  );

  useEffect(() => {
    const fromDate = new Date(new Date().setDate(new Date().getDate() - 30))
      .toISOString()
      .split("T")[0];
    const toDate = new Date().toISOString().split("T")[0];
    setDate({ from: fromDate, to: toDate });
    setShouldFetch(true);
  }, []);
  useEffect(() => {
    setShouldFetch(true);
  }, [pageNumber]);
  useEffect(() => {
    if (response?.results.length) {
      setShouldFetch(false);
      const data = response.results.map((movie: MovieModel) => ({
        id: movie.id,
        poster: "https://image.tmdb.org/t/p/original" + movie.poster_path,
        title: movie.title,
        overview: movie.overview,
      }));
      data && setData(data);
    }
  }, [response]);

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

  // ********** JSX ***********
  return (
    <div className="w-full">
      <TopLoader isContentLoading={isPending} />
      <MyTable
        dataSource={data}
        columns={columns}
        totalCount={response?.total_pages}
        pageSize={20}
        loading={isPending}
        searchColumn="title"
        onChangeHandler={(page) => {
          setPageNumber(page?.current!);
        }}
      />
    </div>
  );
};
