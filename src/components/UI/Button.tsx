import { FC } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = (props) => {
  const initialStyles =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm cursor-pointer";

  return (
    <button
      {...props}
      className={`${initialStyles} ${props.className || ""}`}
    />
  );
};

export default Button;
