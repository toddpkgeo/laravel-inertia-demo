import { SVGAttributes } from "react";

export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
    return (
        <svg {...props} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 8.5V5H6v8.5L2.5 17H5v12h8v-8h6v8h8V17h2.5L16 3.5zM26 16v12h-6v-8h-8v8H6V16H4.914L7 13.914V6h3v4.914l6-6L27.086 16z" />
        </svg>
    );
}
