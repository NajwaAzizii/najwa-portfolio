"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container pt-5">
        <nav
          className={`flex items-center justify-between rounded-2xl border px-6 py-4 backdrop-blur-xl transition-all ${
            scrolled
              ? "border-neutral-200 bg-white/80 shadow-lg"
              : "border-transparent bg-white/50"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="text-lg font-bold tracking-tight">
            Najwa Azizi
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-neutral-600 transition hover:text-neutral-900"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 md:block"
          >
            Hire Me
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div className="mt-3 rounded-2xl border bg-white p-5 shadow-lg md:hidden">
            <div className="flex flex-col gap-4">
              {links.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-neutral-600"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 rounded-xl bg-neutral-900 px-5 py-3 text-center text-sm font-medium text-white"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}