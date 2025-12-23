import * as React from "react";

type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

const BASE_BADGE_CLASS =
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors";

const BADGE_VARIANTS: Record<BadgeVariant, string> = {
  default:
    "border-transparent bg-blue-300 text-blue-300 shadow hover:bg-blue-300/80",
  secondary:
    "border-transparent bg-gray-200 text-gray-600 hover:bg-gray-200/80",
  destructive:
    "border-transparent bg-destructive text-destructive shadow hover:bg-destructive/80",
  outline: "text-gray-900 border-gray-200 hover:bg-gray-100",
};

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

const Badge: React.FC<BadgeProps> = ({
  className = "",
  variant = "default",
  ...props
}) => {
  return (
    <div
      className={`${BASE_BADGE_CLASS} ${BADGE_VARIANTS[variant]} ${className}`}
      {...props}
    />
  );
};

export default Badge;
