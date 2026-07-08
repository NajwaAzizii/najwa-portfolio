"use client";

import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { achievements } from "@/data/achievements";

export default function Achievements() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="achievements" className="section">
      <div className="container">

        <SectionTitle
          badge="Honors & Awards"
          title="Key achievements and recognitions"
          description="Selected awards and competitions that highlight my academic and technical journey."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">

          {achievements.map((item) => (
            <Card
              key={item.title}
              className="overflow-hidden bg-white p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="h-72 w-full bg-neutral-100 p-5">
                <button
                  type="button"
                  onClick={() => setSelectedImage(item.image)}
                  className="flex h-full w-full items-center justify-center cursor-zoom-in"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full rounded-xl object-contain shadow-sm transition-transform duration-300 hover:scale-105"
                  />
                </button>
              </div>

              <div className="relative z-10 border-t bg-white p-6">

                <h3 className="text-base font-semibold leading-6 text-neutral-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-neutral-500">
                  {item.organization} • {item.year}
                </p>

                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  {item.description}
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedImage(item.image)}
                  className="mt-5 rounded-lg border px-4 py-2 text-sm font-medium transition hover:bg-neutral-100"
                >
                  View Certificate →
                </button>

              </div>

            </Card>
          ))}

        </div>

      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="absolute right-8 top-8 text-4xl text-white"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Certificate Preview"
            className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </section>
  );
}
