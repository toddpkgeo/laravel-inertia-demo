import { AnchorHTMLAttributes } from "react";

export default function Title({
    className = "",
    href,
    target = "_blank",
    children,
    ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <a
            {...props}
            href={href}
            target={target}
            className={
                "underline text-blue-600 dark:text-blue-400 hover:text-blue-800 visited:text-purple-600 dark:visited:text-purple-400" +
                className
            }
        >
            {children}
        </a>
    );
}
