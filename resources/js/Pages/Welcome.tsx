import { type PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import Anchor from "@/Components/Anchor";
import SimpleCard from "@/Components/SimpleCard";
import H1 from "@/Components/Title";
import GuestLayout from "../Layouts/GuestLayout";

export default function Welcome({
  fullName,
  myRole,
}: PageProps<{ fullName: string; myRole: string }>) {
  return (
    <GuestLayout>
      <Head title="Welcome" />
      <div className="relative flex w-full flex-col px-6 md:w-96">
        <div className="mb-4">
          <H1>{fullName}</H1>
          <p>
            This demo uses Laravel{" "}
            <Anchor href="https://inertiajs.com/pages" target="_blank">
              Inertia
            </Anchor>{" "}
            as an adapter between a TS+React front-end and a{" "}
            <Anchor
              href="https://laravel.com/docs/11.x#why-laravel"
              target="_blank"
            >
              Laravel
            </Anchor>{" "}
            back-end.
          </p>
        </div>
        <div className="flex flex-col items-stretch">
          <SimpleCard
            key="1"
            href={route("about-me")}
            title="About Me"
            description={myRole}
          ></SimpleCard>
          <SimpleCard
            key="2"
            href={route("last-project")}
            title="Most Recent Project"
            description="A collaborative map for fiber design"
          ></SimpleCard>
          <SimpleCard
            key="3"
            href={route("mint-setup")}
            title="Linux Mint Tips"
            description="Some recommendations for a fresh install"
          ></SimpleCard>
        </div>
      </div>
    </GuestLayout>
  );
}
