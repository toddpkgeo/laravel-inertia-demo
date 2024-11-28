import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, usePage } from "@inertiajs/react";
import { type PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
  const showHome = usePage().url !== "/";
  return (
    <div className="flex min-h-screen flex-row items-start bg-black text-neutral-800">
      <div className="relative flex min-h-screen w-full flex-col px-6 py-4">
        <header className="grid pb-6">
          {showHome && (
            <Link href="/">
              <ApplicationLogo className="h-10 w-12 fill-current text-neutral-500" />
            </Link>
          )}
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}
