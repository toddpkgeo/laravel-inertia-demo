import { type InputHTMLAttributes } from "react";

export default function Checkbox({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      type="checkbox"
      className={
        "rounded border-gray-300 text-cyan-600 shadow-sm focus:ring-cyan-500 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-cyan-600 dark:focus:ring-offset-gray-800 " +
        className
      }
    />
  );
}
