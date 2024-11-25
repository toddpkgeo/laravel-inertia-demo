import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, usePage } from "@inertiajs/react";
import { type PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
  const showHome = usePage().url !== "/";
  return (
    <div className="flex min-h-screen flex-row items-start bg-black text-neutral-800 selection:bg-purple-300 selection:text-black">
      <div className="relative flex min-h-screen flex-col items-center">
        <div className="relative w-full max-w-2xl px-6 py-4 lg:max-w-7xl">
          <header className="grid py-10">
            {showHome && (
              <Link href="/">
                <ApplicationLogo className="h-10 w-12 fill-current text-neutral-500" />
              </Link>
            )}
          </header>
          <main className="max-w-[80ch]">{children}</main>
        </div>
      </div>
    </div>
  );
}
