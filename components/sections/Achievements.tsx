import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { achievements } from "@/data/achievements";

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">

        <SectionTitle
          badge="Honors & Awards"
          title="Key achievements and recognitions"
          description="Selected awards and competitions that highlight my academic and technical journey."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">

          {achievements.map((item) => (
            <Card
              key={item.title}
              className="overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* IMAGE */}
              <div className="h-44 bg-neutral-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">

                <h3 className="text-sm font-semibold leading-5">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs text-neutral-500">
                  {item.organization} • {item.year}
                </p>

                <p className="mt-4 text-sm leading-6 text-neutral-600">
                  {item.description}
                </p>

              </div>

            </Card>
          ))}

        </div>

      </div>
    </section>
  );
}