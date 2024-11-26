import { Head } from "@inertiajs/react";
import LinuxMintSetupMd from "./LinuxMintSetup.mdx";
import GuestLayout from "../Layouts/GuestLayout";

export default function LinuxMintSetup() {
  return (
    <GuestLayout>
      <Head title="Linux Mint Setup" />
      <article className="prose prose-neutral prose-ul:list-square">
        <LinuxMintSetupMd />
      </article>
    </GuestLayout>
  );
}
