import { type PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-row items-start bg-neutral-100 dark:bg-black text-black/50 dark:text-white/50 selection:bg-purple-300 selection:text-black">
      <div className="max-w-[80ch]">{children}</div>
    </div>
  );
}
