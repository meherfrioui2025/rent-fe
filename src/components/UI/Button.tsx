import * as React from "react";

type ButtonVariant = "default" | "destructive" | "outline" | "secondary";

type ButtonSize = "default" | "sm" | "lg" | "icon";

const BASE_BUTTON_CLASS =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors " +
  "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring " +
  "disabled:pointer-events-none disabled:opacity-50 border border-gray-200";

const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  default: "bg-blue-300 text-blue-300 shadow hover:bg-blue-300/90",
  destructive: "bg-red-300 text-red-300 shadow-sm hover:bg-red-300/90",
  outline:
    "border border-input shadow-sm hover:bg-gray-100 hover:text-gray-100",
  secondary: "bg-gray-300 text-gray-300 shadow-sm hover:bg-gray-300/80",
};

const BUTTON_SIZES: Record<ButtonSize, string> = {
  default: "h-9 px-4 py-2",
  sm: "h-8 rounded-md px-3 text-xs",
  lg: "h-10 rounded-md px-8",
  icon: "h-9 w-9",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button: React.FC<ButtonProps> = ({
  className = "",
  variant = "default",
  size = "default",
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`${BASE_BUTTON_CLASS} ${BUTTON_VARIANTS[variant]} ${BUTTON_SIZES[size]} ${className}`}
      {...props}
    />
  );
};

export default Button;
