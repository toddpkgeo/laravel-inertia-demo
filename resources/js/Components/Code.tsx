import { type ButtonHTMLAttributes } from "react";

export default function Code({
  className = "",
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <code
      {...props}
      className={
        `inline-flex items-center rounded-md bg-white mx-1 px-1 py-0 text-sm font-medium tracking-widest text-neutral-700 dark:border-neutral-500 dark:bg-neutral-800 dark:text-neutral-300 ` +
        className
      }
    >
      {children}
    </code>
  );
}
