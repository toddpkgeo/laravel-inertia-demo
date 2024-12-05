import { type AnchorHTMLAttributes } from "react";

export default function Anchor({
  className = "",
  href,
  target = "_blank",
  rel = "noreferrer",
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      href={href}
      target={target}
      rel={rel}
      className={
        "underline text-blue-600 dark:text-blue-400 hover:text-blue-800 visited:text-purple-600 dark:visited:text-purple-400" +
        className
      }
    >
      {children}
    </a>
  );
}
