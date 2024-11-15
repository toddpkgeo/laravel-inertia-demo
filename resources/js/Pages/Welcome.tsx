import GuestLayout from "../Layouts/GuestLayout";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";

export default function Welcome({
    laravelVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <GuestLayout>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3"></header>

                        <main className="mt-6">
                            <div className="flex flex-col items-center">
                                <Link
                                    href={route("mint-setup")}
                                    className="rounded-lg my-1 p-2 bg-neutral-200 dark:bg-neutral-800"
                                >
                                    <h2 className="text-xl font-semibold text-black dark:text-white">
                                        Linux Mint Tips
                                    </h2>
                                    <p>
                                        Some recommendations for a fresh install
                                    </p>
                                </Link>
                                <div className="rounded-lg my-1 p-2 bg-neutral-200 dark:bg-neutral-800">
                                    <h2 className="text-xl font-semibold text-black dark:text-white">
                                        Test 2
                                    </h2>
                                    <p>Testing two three four</p>
                                </div>
                            </div>
                        </main>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            A Laravel v{laravelVersion} demo
                        </footer>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
