import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Academic Project",
    period: "2025 - Present",
    description:
      "Built responsive web applications using Next.js, Tailwind CSS, and modern UI architecture.",
    points: [
      "Developed full-stack academic projects",
      "Implemented UI/UX design into production UI",
      "Improved performance and responsive layout",
    ],
  },
  {
    role: "AI / Machine Learning Engineer",
    company: "NLP & Computer Vision Projects",
    period: "2024 - 2025",
    description:
      "Worked on YOLOv8 object detection and NLP sentiment analysis using LLM models.",
    points: [
      "Built traffic violation detection system using YOLOv8",
      "Implemented sentiment analysis using Qwen2.5 LLM",
      "Processed real-world datasets for model training",
    ],
  },
  {
    role: "Network Engineering Learner",
    company: "Cisco & MikroTik Training",
    period: "2023 - 2024",
    description:
      "Focused on networking fundamentals, routing, switching, and security basics.",
    points: [
      "Studied CCNA networking fundamentals",
      "Configured MikroTik basic routing",
      "Learned network security principles",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">

        <SectionTitle
          badge="Experience"
          title="Engineering journey and practical experience"
          description="A timeline of my learning and project-based experience in software engineering, AI, and networking."
        />

        <div className="mt-14 relative">

          {/* Timeline line */}
          <div className="absolute left-3 top-0 h-full w-px bg-neutral-200" />

          <div className="space-y-10">

            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-10">

                {/* Dot */}
                <div className="absolute left-0 top-2 h-6 w-6 rounded-full border border-neutral-300 bg-white shadow-sm" />

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