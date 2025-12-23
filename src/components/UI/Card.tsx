import { FC, HTMLAttributes, ReactNode } from "react";

interface BaseProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Card: FC<BaseProps> = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`rounded-xl border bg-white text-gray-200 shadow ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}
const CardHeader: React.FC<CardHeaderProps> = ({
  className = "",
  ...props
}) => {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
  );
};

const CardContent: FC<BaseProps> = ({ children, className = "", ...props }) => {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

export { Card, CardHeader, CardContent };
