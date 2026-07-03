import { ReactNode } from "react";

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium shadow-sm">
      {children}
    </span>
  );
}
