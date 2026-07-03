import { FolderGit2, ArrowUpRight } from "lucide-react";
import { githubProfile } from "@/data/github";

export default function GitHub() {
  return (
    <section id="github" className="section">
      <div className="container">
        <div className="paper p-10 text-center">
          <FolderGit2 className="mx-auto mb-6" size={48} />

          <h2 className="text-4xl font-bold">
            Explore My GitHub
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            {githubProfile.description}
          </p>

          <div className="mt-8">
            <span className="rounded-full border bg-neutral-100 px-4 py-2 text-sm">
              @{githubProfile.username}
            </span>
          </div>

          <a
            href={githubProfile.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-10 inline-flex"
          >
            Visit GitHub
            <ArrowUpRight className="ml-2" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
