import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-row items-start bg-neutral-100 pt-6 sm:justify-center sm:pt-0 dark:bg-neutral-900">
            <div>
                <Link href="/">
                    <ApplicationLogo className="h-10 w-10 fill-current text-neutral-500" />
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md lg:max-w-[80ch] sm:max-w-md sm:rounded-lg dark:bg-neutral-800">
                {children}
            </div>
        </div>
    );
}
