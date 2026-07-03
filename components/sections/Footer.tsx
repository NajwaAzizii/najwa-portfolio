import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="container py-14">

        {/* Top */}
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">

          {/* Left */}
          <div>
            <h3 className="text-xl font-bold tracking-tight">
              Najwa Azizi
            </h3>

            <p className="mt-2 text-sm text-neutral-500">
              Software Engineering Student • AI • Networking • Full Stack Developer
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="#about" className="text-neutral-600 hover:text-neutral-900">
              About
            </Link>
            <Link href="#projects" className="text-neutral-600 hover:text-neutral-900">
              Projects
            </Link>
            <Link href="#skills" className="text-neutral-600 hover:text-neutral-900">
              Skills
            </Link>
            <Link href="#experience" className="text-neutral-600 hover:text-neutral-900">
              Experience
            </Link>
            <Link href="#contact" className="text-neutral-600 hover:text-neutral-900">
              Contact
            </Link>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-neutral-200" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between">

          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Najwa Azizi. All rights reserved.
          </p>

          <p className="text-sm text-neutral-500">
            Built with Next.js • Tailwind CSS • Designed for engineering impact
          </p>

        </div>

      </div>
    </footer>
  );
}