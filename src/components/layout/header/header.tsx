import { memo } from "react";
import { HeaderProps } from "./header.types";

export const Header: React.FC<HeaderProps> = memo(({ title }) => {
  // ********** JSX ***********
  return (
    <div className="header-wrapper">
      <span className="header-title">{title}</span>
    </div>
  );
});
