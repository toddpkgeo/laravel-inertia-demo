import { HTMLAttributes } from "react";

export default function Title({
    className = "",
    children,
    ...props
}: HTMLAttributes<HTMLHeadElement>) {
    return (
        <h1
            {...props}
            className={
                "text-xl font-semibold text-black dark:text-white" + className
            }
        >
            {children}
        </h1>
    );
}
