import { ColumnsType, TablePaginationConfig } from "antd/es/table";

export type MyTableProps = {
  dataSource: any;
  columns: ColumnsType<any>;
  pageSize?: number;
  totalCount?: number;
  currentPage?: number;
  searchColumn?: string;
  loading?: boolean;
  onChangeHandler?: (page: TablePaginationConfig) => void;
  onSearchHandler?: (term: string) => void;
};
