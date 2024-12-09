import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import LastProjMd from "./LastProject.mdx";

// See storage/app/private for scratch files

export default function LastProject() {
  return (
    <GuestLayout>
      <Head title="Most Recent Project" />
      <article className="prose prose-neutral prose-ul:list-square prose-code:before:content-none prose-code:after:content-none">
        <LastProjMd />
      </article>
    </GuestLayout>
  );
}
