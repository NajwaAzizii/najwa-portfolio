import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { Mail, MapPin, FolderGit2, ExternalLink } from "lucide-react";

const contact = {
  email: "najwa@example.com",
  location: "Riau, Indonesia",
  github: "https://github.com/NajwaAzizii",
  linkedin: "https://linkedin.com/in/najwa-azizi",
};

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">

        <SectionTitle
          badge="Contact"
          title="Let’s build something impactful together"
          description="I’m open to internship opportunities, freelance projects, and collaborations in software engineering, AI, and networking."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">

          {/* Email Card */}
          <Card className="p-6 card-hover">
            <Mail className="mb-3" />
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="mt-2 text-neutral-600">{contact.email}</p>

            <a
              href={`mailto:${contact.email}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-neutral-900"
            >
              Send Email <ExternalLink size={16} />
            </a>
          </Card>

          {/* Location Card */}
          <Card className="p-6">
            <MapPin className="mb-3" />
            <h3 className="text-lg font-semibold">Location</h3>
            <p className="mt-2 text-neutral-600">{contact.location}</p>
          </Card>

          {/* GitHub Card */}
          <Card className="p-6 card-hover">
            <FolderGit2 className="mb-3" />
            <h3 className="text-lg font-semibold">GitHub</h3>
            <p className="mt-2 text-neutral-600">NajwaAzizii</p>

            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-neutral-900"
            >
              View Profile <ExternalLink size={16} />
            </a>
          </Card>

          {/* LinkedIn Card */}
          <Card className="p-6 card-hover">
            <ExternalLink className="mb-3" />
            <h3 className="text-lg font-semibold">LinkedIn</h3>
            <p className="mt-2 text-neutral-600">Professional Profile</p>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-neutral-900"
            >
              Connect <ExternalLink size={16} />
            </a>
          </Card>

        </div>

        {/* CTA BOTTOM */}
        <div className="mt-16 rounded-3xl border bg-neutral-900 p-10 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold">
            Ready to collaborate?
          </h3>

          <p className="mt-3 text-neutral-300">
            Let’s work together on impactful software solutions.
          </p>

          <a
            href={`mailto:${contact.email}`}
            className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
}