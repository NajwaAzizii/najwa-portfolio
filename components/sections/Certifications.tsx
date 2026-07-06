import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">

        <SectionTitle
          badge="Certifications"
          title="Verified technical credentials and achievements"
          description="Professional certifications in cybersecurity, cloud, networking, and software engineering."
        />

        <div className="mt-14 space-y-14">

          {certifications.map((group) => (
            <div key={group.category}>

              {/* CATEGORY HEADER */}
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                  {group.category}
                </h3>

                <span className="text-xs text-neutral-500">
                  {group.items.length} certificates
                </span>
              </div>

              {/* GRID */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                {group.items.map((cert) => (
                  <Card
                    key={cert.title}
                    className="group overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >

                    {/* IMAGE */}
                    <div className="relative h-44 overflow-hidden bg-neutral-100">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* overlay */}
                      <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10" />
                    </div>

                    {/* CONTENT */}
                    <div className="p-5">

                      {/* TITLE */}
                      <h4 className="text-sm font-semibold leading-5">
                        {cert.title}
                      </h4>

                      {/* META */}
                      <p className="mt-2 text-xs text-neutral-500">
                        {cert.issuer} • {cert.year}
                      </p>

                      {/* BADGE */}
                      <div className="mt-4 flex items-center justify-between">

                        <span className="rounded-full border bg-neutral-50 px-2 py-1 text-[10px] text-neutral-600">
                          Verified Credential
                        </span>

                        <a
                          href={cert.credential}
                          className="text-xs font-medium text-neutral-900 hover:underline"
                        >
                          View →
                        </a>

                      </div>

                    </div>

                  </Card>
                ))}

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}