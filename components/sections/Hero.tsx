import Link from "next/link";
import Image from "next/image";
import { heroData } from "@/data/hero";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-neutral-50 pt-32 lg:pt-40"
    >
      <div className="container relative">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>
            <span className="inline-flex rounded-full border bg-white px-5 py-2 text-sm font-medium shadow-sm">
              {heroData.badge}
            </span>

            <h1 className="mt-8 text-5xl font-bold tracking-tight lg:text-7xl">
              {heroData.headline}
            </h1>

            <p className="mt-6 max-w-xl text-lg text-neutral-600">
              {heroData.description}
            </p>

            <div className="mt-10 flex gap-4">
              <Link
                href={heroData.primaryCTA.href}
                className="rounded-xl bg-neutral-900 px-7 py-4 text-white"
              >
                {heroData.primaryCTA.label}
              </Link>

              <Link
                href={heroData.secondaryCTA.href}
                className="rounded-xl border px-7 py-4"
              >
                {heroData.secondaryCTA.label}
              </Link>
            </div>
          </div>

          <div className="relative rounded-[36px] border bg-[#f7f3eb] p-8 shadow-xl">

            <div className="flex items-start gap-6">

              <div className="-rotate-3 rounded-2xl border bg-white p-4 shadow-xl">
                <div className="relative aspect-[3/4] w-52 overflow-hidden rounded-lg">
                  <Image
                    src="/images/najwa-azizi.jpg"
                    alt="Najwa Azizi Profile Photo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <p className="mt-4 text-center font-semibold">
                  Najwa Azizi
                </p>
              </div>

              <div className="mt-16 rounded-2xl border bg-white p-6 shadow-lg">
                <h3 className="font-semibold">
                  Developer Notebook
                </h3>

                <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                  <li>• Software Engineering</li>
                  <li>• Web Development</li>
                  <li>• Artificial Intelligence</li>
                  <li>• Networking</li>
                </ul>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
