import GuestLayout from "../Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import AboutMeMd from "./AboutMe.mdx";
import { type PageProps } from "@/types";

export default function AboutMe({ fullname }: PageProps<{ fullname: string }>) {
  // TODO:
  // Date, anything else?
  return (
    <GuestLayout>
      <Head title="About Me" />
      <article className="prose prose-neutral prose-ul:list-square">
        <AboutMeMd fullname={fullname} />
      </article>
    </GuestLayout>
  );
}
