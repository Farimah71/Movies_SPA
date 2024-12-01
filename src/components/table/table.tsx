import { FC } from "react";
import { Table, Input } from "antd";
import { MyTableProps } from "./table.types";

const { Search } = Input;

export const MyTable: FC<MyTableProps> = ({
  dataSource,
  columns,
  loading,
  searchLoading,
  pageSize,
  totalCount,
  currentPage,
  searchColumn,
  onChangeHandler,
  onSearchHandler,
}) => {
  // ********** JSX ***********
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
          onChange={(e) => onSearchHandler && onSearchHandler(e.target.value)}
          size="large"
          loading={searchLoading}
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
        dataSource={dataSource}
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
