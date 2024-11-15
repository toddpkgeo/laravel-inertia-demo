import GuestLayout from "../Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import Anchor from "@/Components/Anchor";
import Code from "@/Components/Code";
import H2 from "@/Components/Header2";
import Title from "@/Components/Title";

export default function AboutMe() {
    // TODO:
    // Date, anything else?
    // See Static hosting services for metadata ideas
    // Consider using a .env file to provide possibly sensitive info: name, city, email, experience, etc.
    return (
        <GuestLayout>
            <Head title="About Me" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative flex min-h-screen flex-col items-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl py-4 px-6 lg:max-w-7xl">
                        <main>
                            <Title>About Me</Title>
                            <p>
                                I am a full-stack web developer with a decade of
                                GIS experience, a background in Telecom
                                Networks, and training in Civil engineering.
                            </p>
                        </main>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
