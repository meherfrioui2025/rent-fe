import { FC } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
const Input: FC<InputProps> = (props) => {
  return (
    <input
      {...props}
      className={
        "flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus:border-gray-300 focus-visible:ring-ring md:text-sm" +
        " " +
        (props.className || "")
      }
    />
  );
};

export default Input;
