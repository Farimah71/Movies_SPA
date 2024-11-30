import { useCallback, useState } from "react";
import { Table, Input } from "antd";
import { MyTableProps } from "./table.types";
import { debounce } from "lodash";

import type { GetProps } from "antd";
type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

export const MyTable = ({
  dataSource,
  columns,
  loading,
  pageSize,
  totalCount,
  currentPage,
  searchColumn,
  onChangeHandler,
}: MyTableProps) => {
  // ********** States ***********
  const [searchResult, setSearchResult] = useState<string[] | null>(null);

  // ********** Functions ***********
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      // API call
      // Save searched data in searchResult
    }, 2000),
    []
  );

  const onSearch: SearchProps["onSearch"] = (value) => {
    debouncedSearch(value);
  };

  return (
    <div
      className={`mb-10 border-black sm:w-full min-w-fit`}
      style={{
        padding: 24,
        borderRadius: "16px",
      }}
    >
      <div className="flex justify-between gap-x-5 my-3">
        <Search
          placeholder={searchColumn && `Search by ${searchColumn}...`}
          allowClear
          onChange={(e) => onSearch(e.target.value)}
          size="large"
          // loading
        />
      </div>
      {totalCount && totalCount > 0 ? (
        <p className="my-2 text-white/70 text-right">
          total:{" "}
          <span className="text-primary-blue">
            {totalCount} {totalCount === 1 ? "item" : "items"}
          </span>
        </p>
      ) : null}

      <Table
        loading={loading}
        columns={columns}
        dataSource={searchResult ? searchResult : dataSource}
        pagination={{
          pageSize: pageSize,
          current: currentPage,
          total: totalCount,
          showSizeChanger: false,
        }}
        onChange={(page) => onChangeHandler && onChangeHandler(page)}
      />
    </div>
  );
};
