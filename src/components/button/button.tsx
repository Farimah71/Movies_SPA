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
        <span>{icon && icon}</span>
        <span>{title}</span>
      </p>
    </button>
  );
};
