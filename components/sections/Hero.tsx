import Link from "next/link";
import { heroData } from "@/data/hero";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-neutral-50 pt-32 lg:pt-40"
    >
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="container relative">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>

            {/* Badge */}
            <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-5 py-2 text-sm font-medium shadow-sm">
              {heroData.badge}
            </span>

            {/* Heading */}
            <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight text-neutral-900 lg:text-7xl">
              {heroData.headline}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
              {heroData.description}
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={heroData.primaryCTA.href}
                className="rounded-xl bg-neutral-900 px-7 py-4 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                {heroData.primaryCTA.label}
              </Link>

              <Link
                href={heroData.secondaryCTA.href}
                className="rounded-xl border border-neutral-300 bg-white px-7 py-4 text-sm font-medium transition hover:bg-neutral-100"
              >
                {heroData.secondaryCTA.label}
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-14 flex flex-wrap gap-10 border-t border-neutral-200 pt-8">
              {heroData.quickFacts.map((item) => (
                <div key={item.label}>
                  <p className="text-3xl font-bold">{item.value}</p>
                  <p className="text-sm text-neutral-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">

            {/* Main Card */}
            <div className="relative rounded-[36px] border border-neutral-200 bg-[#f7f3eb] p-8 shadow-[0_30px_80px_rgba(0,0,0,.12)]">

              {/* Availability */}
              <div className="absolute right-6 top-6 rotate-2 rounded-xl border bg-yellow-100 px-5 py-4 shadow">
                <p className="text-xs font-bold">AVAILABLE</p>
                <p className="text-sm">Internship • Freelance</p>
              </div>

              {/* Profile + Notebook */}
              <div className="flex items-start gap-6">

                {/* Profile */}
                <div className="-rotate-3 rounded-2xl border bg-white p-4 shadow-xl">
                  <div className="aspect-[3/4] w-52 rounded-lg bg-neutral-200" />
                  <p className="mt-4 text-center font-semibold">
                    Your Profile Photo
                  </p>
                </div>

                {/* Notebook */}
                <div className="mt-16 flex-1 rounded-2xl border bg-white p-6 shadow-lg">
                  <h3 className="font-semibold">Developer Notebook</h3>
                  <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                    <li>• Software Engineering</li>
                    <li>• Web Development</li>
                    <li>• Artificial Intelligence</li>
                    <li>• Networking</li>
                  </ul>
                </div>
              </div>

              {/* Bottom Cards */}
              <div className="mt-8 flex gap-4">

                <div className="flex-1 rounded-2xl border bg-white p-5 shadow">
                  <p className="font-semibold">Current Focus</p>
                  <p className="mt-2 text-sm text-neutral-500">
                    Building scalable and modern software solutions.
                  </p>
                </div>

                <div className="-rotate-2 rounded-xl border bg-amber-50 px-6 py-5 shadow">
                  <p className="font-semibold">Projects</p>
                  <p className="text-sm text-neutral-500">Explore →</p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}