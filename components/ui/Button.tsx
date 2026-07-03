import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
}: Props) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200",
        variant === "primary"
          ? "bg-neutral-900 text-white hover:bg-neutral-800"
          : "border border-neutral-300 bg-white hover:bg-neutral-100",
        className
      )}
    >
      {children}
    </Link>
  );
}
