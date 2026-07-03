import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const projects = [
  {
    title: "POSBANKUM Information System",
    description:
      "Full-stack web application for legal aid management system with role-based access control.",
    tags: ["Laravel", "MySQL", "Bootstrap"],
    link: "#",
  },
  {
    title: "YOLO Traffic Violation Detection",
    description:
      "Deep learning system using YOLOv8 to detect traffic violations in real-time video streams.",
    tags: ["Python", "YOLOv8", "OpenCV"],
    link: "#",
  },
  {
    title: "Movie Sentiment Analysis AI",
    description:
      "NLP project using LLM (Qwen2.5) for sentiment classification on IMDb dataset.",
    tags: ["Python", "NLP", "LLM"],
    link: "#",
  },
  {
    title: "Portfolio Website v2",
    description:
      "Modern responsive portfolio built with Next.js 16, Tailwind CSS v4, and Framer-ready design system.",
    tags: ["Next.js", "Tailwind", "UI/UX"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">

        <SectionTitle
          badge="Projects"
          title="Selected work and engineering projects"
          description="A collection of systems, AI models, and web applications I have built across academic and personal development."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">

          {projects.map((project, i) => (
            <Card key={i} className="p-6">

              {/* Title */}
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action */}
              <div className="mt-6">
                <Button href={project.link} variant="secondary">
                  View Project
                </Button>
              </div>

            </Card>
          ))}

        </div>

      </div>
    </section>
  );
}