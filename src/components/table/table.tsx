import { useState } from "react";
import { Table, Input } from "antd";
import { MyTableProps } from "./table.types";

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
  const [searchResult, setSearchResult] = useState<string[] | null>(null);

  const onSearch: SearchProps["onSearch"] = (value) => {
    const filteredData = dataSource.filter(
      (data: any) =>
        searchColumn &&
        data[searchColumn]
          ?.toString()
          .toLowerCase()
          .includes(value.toLowerCase())
    );
    setSearchResult(filteredData);
  };

  return (
    <div
      className={`mb-10 border-black mx-auto max-w-[250px] xs:max-w-[400px] sm:max-w-full w-full`}
      style={{
        padding: 24,
        borderRadius: "16px",
      }}
    >
      <div className="flex justify-between gap-x-5 my-3">
        <Search
          placeholder={searchColumn && `Search by ${searchColumn}...`}
          onSearch={onSearch}
          enterButton
          allowClear
          size="large"
        />
      </div>
      {totalCount && totalCount > 0 ? (
        <p className="my-2 text-text-primary-blue/50 dark:text-text-primary-blue/60 text-right">
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
        }}
        onChange={(page) => onChangeHandler && onChangeHandler(page)}
        sticky={{ offsetHeader: 100 }}
        scroll={{ x: "max-content" }}
      />
    </div>
  );
};
