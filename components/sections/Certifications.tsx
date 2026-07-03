import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

const certifications = [
  {
    title: "Cisco Networking Academy",
    issuer: "Cisco",
    year: "2025",
    description:
      "Completed networking fundamentals including routing, switching, and security basics.",
  },
  {
    title: "CCNA Certification Preparation",
    issuer: "Cisco",
    year: "2025",
    description:
      "Studied and practiced core networking concepts aligned with CCNA certification.",
  },
  {
    title: "MikroTik MTCNA",
    issuer: "MikroTik",
    year: "2024",
    description:
      "Learned basic routing, wireless networking, and MikroTik configuration.",
  },
  {
    title: "EC-Council Cybersecurity Badge",
    issuer: "EC-Council",
    year: "2025",
    description:
      "Introduction to cybersecurity principles, threat analysis, and endpoint security.",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">

        <SectionTitle
          badge="Certifications"
          title="Professional certifications and technical credentials"
          description="Validated learning achievements in networking, cybersecurity, and software engineering fundamentals."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">

          {certifications.map((cert, i) => (
            <Card key={i} className="p-6">

              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                  {cert.title}
                </h3>

                <span className="text-sm text-neutral-500">
                  {cert.year}
                </span>
              </div>

              <p className="mt-1 text-sm font-medium text-neutral-600">
                {cert.issuer}
              </p>

              <p className="mt-4 text-sm leading-7 text-neutral-600">
                {cert.description}
              </p>

            </Card>
          ))}

        </div>

      </div>
    </section>
  );
}