import { achievements } from "@/data/achievements";
import { Trophy } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <span className="inline-flex rounded-full border bg-white px-4 py-2 text-sm font-medium shadow-sm">
          Achievements
        </span>

        <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
          Milestones Throughout My Learning Journey
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {achievements.map((item) => (
            <article key={item.title} className="paper card-hover p-6">
              <Trophy className="mb-5" />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-neutral-500">
                {item.organization} • {item.year}
              </p>
              <p className="mt-5 leading-7 text-neutral-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
