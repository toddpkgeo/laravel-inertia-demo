import GuestLayout from "../Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import AboutMeMd from "./AboutMe.mdx";

export default function AboutMe() {
  // TODO:
  // Date, anything else?
  // See Static hosting services for metadata ideas
  // Consider using a .env file to provide possibly sensitive info: name, city, email, experience, etc.
  return (
    <GuestLayout>
      <Head title="About Me" />
      <article className="prose prose-neutral prose-ul:list-square">
        <AboutMeMd />
      </article>
    </GuestLayout>
  );
}
