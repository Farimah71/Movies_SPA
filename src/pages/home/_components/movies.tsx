import { FC } from "react";
import { MyTable } from "../../../components/table";
import { TopLoader } from "../../../components/top-loader";

export const Movies: FC = () => {
  // ********** JSX ***********
  return (
    <div>
      <TopLoader isContentLoading={true} />
      <MyTable
        dataSource={[]}
        columns={[]}
        totalCount={0}
        searchColumn="title"
      />
    </div>
  );
};
