import { FC } from "react";
import { TopLoaderProps } from "./top-loader.types";
import LoadingBar from "react-top-loading-bar";

export const TopLoader: FC<TopLoaderProps> = ({ isContentLoading }) => {
  return <LoadingBar color="green" progress={isContentLoading ? 100 : 0} />;
};
