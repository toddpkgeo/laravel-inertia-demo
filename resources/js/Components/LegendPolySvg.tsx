import { type SVGAttributes } from "react";

export default function LegendPolySvg({
  className = "",
  children,
  ...props
}: SVGAttributes<unknown>) {
  return (
    <svg
      className={className}
      viewBox="0 0 180 180"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <path
        d="m 20,5 140,40 c 7.99026,2.282933 15,6.69 15,15 v 100 c 0,8.31 -6.69,15 -15,15 H 20 C 11.69,175 5,168.31 5,160 V 20 C 5,11.69 12.009736,2.7170674 20,5 Z"
        stroke="black"
        strokeWidth="12px"
        {...props}
      />
      {children}
    </svg>
  );
}
