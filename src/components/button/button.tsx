import { ButtonProps } from "./button.types";

export const Button: React.FC<ButtonProps> = ({
  title,
  icon,
  isLoading,
  className,
  ...rest
}) => {
  // ********** JSX ***********
  return (
    <button className={`btn ${className}`} {...rest}>
      <p className="flex gap-x-2">
        {icon && <span>{icon}</span>}
        <span>{isLoading ? "Wait..." : title}</span>
      </p>
    </button>
  );
};
