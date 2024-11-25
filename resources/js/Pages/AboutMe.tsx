import GuestLayout from "../Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import H1 from "@/Components/Title";

export default function AboutMe() {
  // TODO:
  // Date, anything else?
  // See Static hosting services for metadata ideas
  // Consider using a .env file to provide possibly sensitive info: name, city, email, experience, etc.
  return (
    <GuestLayout>
      <Head title="About Me" />
      <article className="prose prose-neutral prose-ul:list-square">
        <H1>About Me</H1>
        <p>
          I am a full-stack web developer with a decade of GIS experience, a
          background in Telecom Networks, and training in Civil engineering.
        </p>
      </article>
    </GuestLayout>
  );
}
