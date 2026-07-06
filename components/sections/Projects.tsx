import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">

        <SectionTitle
          badge="Projects"
          title="Selected work and engineering projects"
          description="A collection of AI, web, data, game, and software engineering projects built during academic and personal development."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">

          {projects.map((project, i) => (
            <Card key={i} className="overflow-hidden p-0 card-hover">

              {/* IMAGE */}
              {project.image && (
                <div className="h-48 w-full overflow-hidden bg-neutral-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}

              {/* CONTENT */}
              <div className="p-6">

                {/* CATEGORY */}
                <span className="inline-block rounded-full border px-3 py-1 text-xs text-neutral-600">
                  {project.category}
                </span>

                {/* TITLE */}
                <h3 className="mt-4 text-lg font-semibold">
                  {project.title}
                </h3>

                {/* PERIOD */}
                <p className="mt-1 text-xs text-neutral-500">
                  {project.period}
                </p>

                {/* DESCRIPTION */}
                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  {project.description}
                </p>

                {/* SKILLS */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border bg-neutral-50 px-3 py-1 text-xs text-neutral-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* BUTTON */}
                <a
                  href={project.link}
                  target="_blank"
                  className="mt-6 inline-block text-sm font-medium text-neutral-900 hover:underline"
                >
                  View Project →
                </a>

              </div>
            </Card>
          ))}

        </div>
      </div>
    </section>
  );
}