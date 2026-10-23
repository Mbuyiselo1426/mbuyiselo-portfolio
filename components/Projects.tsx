type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  highlights: string[];
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Instagram Feed API",
    category: "Backend Development",
    description:
      "A reusable REST API that retrieves Instagram posts and makes them available for integration into websites and other applications.",
    technologies: [
      "Node.js",
      "Express.js",
      "REST API",
      "Render",
      "GitHub Actions",
    ],
    highlights: [
      "Integrated with the Instagram API",
      "Implemented error handling and automated tests",
      "Deployed a working API and frontend demonstration",
    ],
    demo: "https://instagram-8hu8.onrender.com/demo/",
  },
  {
    title: "Robot Worlds",
    category: "Java Backend Engineering",
    description:
      "A client-server robot simulation developed collaboratively using Java, featuring configurable worlds, obstacles, commands, and persistent storage.",
    technologies: [
      "Java",
      "Maven",
      "JDBC",
      "SQL",
      "Docker",
    ],
    highlights: [
      "Implemented server-side functionality",
      "Worked with database persistence",
      "Contributed to client commands and testing",
    ],
  },
  {
    title: "Kasi FM",
    category: "Mobile & Backend Development",
    description:
      "A community radio platform combining an Android application with a Spring Boot backend to support radio streaming, programme schedules, and station information.",
    technologies: [
      "Android",
      "Java",
      "Spring Boot",
      "REST API",
      "GitHub Actions",
    ],
    highlights: [
      "Built an Android application",
      "Developed backend API endpoints",
      "Implemented radio streaming and schedule features",
    ],
  },
  {
    title: "ABC Pay",
    category: "Fintech & Blockchain",
    description:
      "A blockchain-focused payment platform concept designed to help merchants accept stablecoin payments and convert them into South African rand.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Web3",
    ],
    highlights: [
      "Developing the frontend interface",
      "Building wallet and payment dashboard features",
      "Collaborating with the Africa Blockchain Club",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-50 px-6 py-24 text-slate-900"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-600">
            My Work
          </p>

          <h2 className="text-4xl font-bold">
            Featured{" "}
            <span className="text-orange-500">Projects.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-600">
            A selection of projects where I&apos;ve applied software
            engineering principles to build practical solutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Project Banner */}
              <div className="flex h-40 items-center bg-[#081629] px-8">
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-orange-400">
                    {project.category}
                  </p>

                  <h3 className="text-3xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project Details */}
              <div className="flex flex-1 flex-col p-7">
                <p className="leading-7 text-slate-600">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="mt-7 space-y-3 text-sm text-slate-600">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="text-orange-500">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Project Links */}
                <div className="mt-auto pt-8">
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-md bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
                    >
                      View Live Demo ↗
                    </a>
                  ) : (
                    <span className="inline-flex rounded-md border border-slate-200 px-5 py-3 text-sm text-slate-500">
                      Project Showcase
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub Profile */}
        <div className="mt-14 text-center">
          <p className="mb-5 text-slate-600">
            Interested in seeing more of my work?
          </p>

          <a
            href="https://github.com/Mbuyiselo1426"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-orange-500 px-7 py-3 font-semibold text-orange-600 transition hover:bg-orange-500 hover:text-white"
          >
            Explore My GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}