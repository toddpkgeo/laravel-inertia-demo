import ApplicationLogo from "@/Components/ApplicationLogo";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import LastProjMd from "./LastProject.mdx";

// See storage/app/private for scratch files

export default function LastProject() {
  return (
    <GuestLayout>
      <Head title="FIX Me" />
      <article className="prose prose-neutral prose-ul:list-square">
        <LastProjMd />
      </article>
    </GuestLayout>
  );
}
