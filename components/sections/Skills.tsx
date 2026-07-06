import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { skillCategories } from "@/data/skills";

const getLevel = (skill: string) => {
  const expert = [
    "React.js",
    "Next.js",
    "Python",
    "JavaScript",
    "MySQL",
    "Laravel",
    "Machine Learning",
    "PySpark",
  ];

  const intermediate = [
    "PHP",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Figma",
    "Git",
    "Linux",
    "YOLOv8",
    "OpenCV",
    "Tableau",
    "Unity",
  ];

  return expert.includes(skill)
    ? "Expert"
    : intermediate.includes(skill)
    ? "Intermediate"
    : "Familiar";
};

const getBadgeStyle = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-black text-white";
    case "Intermediate":
      return "bg-neutral-200 text-neutral-800";
    default:
      return "bg-neutral-100 text-neutral-500";
  }
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">

        <SectionTitle
          badge="Skills"
          title="Technical expertise and engineering stack"
          description="A structured overview of my technical, analytical, and engineering capabilities across multiple domains."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">

          {skillCategories.map((group) => (
            <Card key={group.title} className="p-6">

              <h3 className="text-lg font-semibold">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">

                {group.skills.map((skill) => {
                  const level = getLevel(skill);

                  return (
                    <span
                      key={skill}
                      className={`rounded-full border px-3 py-1 text-xs ${getBadgeStyle(
                        level
                      )}`}
                    >
                      {skill}
                    </span>
                  );
                })}

              </div>

            </Card>
          ))}

        </div>

      </div>
    </section>
  );
}