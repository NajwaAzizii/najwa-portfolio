import SectionTitle from "@/components/ui/SectionTitle";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">

        {/* Title */}
        <SectionTitle
          badge="About Me"
          title="Building software with clarity, structure, and purpose."
          description="I am an Informatics Engineering student focused on full-stack development, artificial intelligence, and networking. I enjoy turning complex problems into simple, scalable, and meaningful software solutions."
        />

        {/* Content Grid */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2">

          {/* LEFT: Story */}
          <div className="space-y-6 text-neutral-600 leading-8">

            <p>
              My journey started from curiosity about how systems work behind
              the screen. Over time, I developed strong interest in web
              development, AI implementation, and system design.
            </p>

            <p>
              I have worked on several real-world and academic projects,
              including information systems, machine learning models, and
              network-based applications.
            </p>

            <p>
              My focus is not only writing code, but also building systems that
              are reliable, maintainable, and scalable in real environments.
            </p>

          </div>

          {/* RIGHT: Highlights */}
          <div className="grid gap-6">

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Core Focus</h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                <li>• Full Stack Web Development</li>
                <li>• Artificial Intelligence & Machine Learning</li>
                <li>• Network Engineering</li>
                <li>• UI/UX Engineering</li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Working Style</h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                <li>• Clean and structured code</li>
                <li>• Problem-first approach</li>
                <li>• Continuous learning mindset</li>
                <li>• Detail-oriented execution</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}