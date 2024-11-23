import { type InertiaLinkProps, Link } from "@inertiajs/react";
import H2 from "../Components/Header2";

export default function SimpleCard({
  title,
  description,
  target = "",
  ...props
}: InertiaLinkProps & { title: string; description: string }) {
  return (
    <Link
      {...props}
      target={target}
      className="rounded-lg my-1 p-2 bg-neutral-200 outline outline-1 outline-neutral-400 dark:bg-neutral-900 hover:bg-neutral-300 dark:hover:bg-neutral-700"
    >
      <H2>{title}</H2>
      <p>{description}</p>
    </Link>
  );
}
