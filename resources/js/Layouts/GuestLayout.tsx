import { type PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-row items-start bg-neutral-100 text-black/50 selection:bg-purple-300 selection:text-black dark:bg-black dark:text-white/50">
      <div className="max-w-[80ch]">{children}</div>
    </div>
  );
}
