import { type PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import Anchor from "@/Components/Anchor";
import SimpleCard from "@/Components/SimpleCard";
import Title from "@/Components/Title";
import GuestLayout from "../Layouts/GuestLayout";

export default function Welcome({
  laravelVersion,
}: PageProps<{ laravelVersion: string }>) {
  return (
    <GuestLayout>
      <Head title="Welcome" />
      <div className="relative min-h-screen flex flex-col w-full px-6 md:w-96">
        <header className="">
          <Title>Demo Content</Title>
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
        </header>
        <main className="grow-0 mt-6">
          <div className="flex flex-col items-stretch">
            <SimpleCard
              key="1"
              href={route("about-me")}
              title="About Me"
              description="Todd Puckett: GIS Web Developer"
            ></SimpleCard>
            {/* <SimpleCard
                            key="2"
                            href={route("last-project")}
                            title="Most Recent Project"
                            description="A collaborative map for fiber design"
                        ></SimpleCard> */}
            <SimpleCard
              key="3"
              href={route("mint-setup")}
              title="Linux Mint Tips"
              description="Some recommendations for a fresh install"
            ></SimpleCard>
          </div>
        </main>
        <footer className="grow content-end py-3 text-center text-sm text-black/50 dark:text-white/50">
          Powered by Laravel v{laravelVersion}
        </footer>
      </div>
    </GuestLayout>
  );
}
