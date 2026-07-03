import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

const skillData = [
  {
    title: "Frontend Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend Development",
    skills: [
      "PHP",
      "Laravel",
      "Node.js",
      "MySQL",
      "REST API",
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "YOLOv8",
      "NLP",
      "LLM (Qwen2.5)",
    ],
  },
  {
    title: "Tools & Networking",
    skills: [
      "Git & GitHub",
      "Linux",
      "Cisco Networking",
      "MikroTik",
      "Docker (basic)",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">

        <SectionTitle
          badge="Skills"
          title="Technical skills and engineering stack"
          description="A combination of software development, artificial intelligence, and networking technologies I use to build real-world systems."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">

          {skillData.map((group) => (
            <Card key={group.title} className="p-6">

              <h3 className="text-lg font-semibold">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </Card>
          ))}

        </div>

      </div>
    </section>
  );
}