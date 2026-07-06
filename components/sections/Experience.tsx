import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">

        <SectionTitle
          badge="Experience"
          title="Engineering journey and practical experience"
          description="A structured timeline of my experience across software engineering, AI, and networking."
        />

        <div className="mt-14 relative">

          {/* timeline line */}
          <div className="absolute left-3 top-0 h-full w-px bg-neutral-200" />

          <div className="space-y-10">

            {experience.map((exp) => (
              <div key={exp.role} className="relative pl-10">

                {/* dot */}
                <div className="absolute left-0 top-2 h-6 w-6 rounded-full border bg-white shadow-sm" />

                <Card className="p-6">

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold">
                      {exp.role}
                    </h3>

                    <span className="text-sm text-neutral-500">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-1 text-sm font-medium text-neutral-600">
                    {exp.company}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-neutral-600">
                    {exp.description}
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                    {exp.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>

                </Card>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}