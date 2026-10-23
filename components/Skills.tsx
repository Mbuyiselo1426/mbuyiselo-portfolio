const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Backend Development",
    skills: ["Spring Boot", "Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "GitLab", "Docker", "CI/CD", "Linux"],
  },
  {
    title: "Currently Learning",
    skills: ["AWS", "Solidity", "Blockchain", "Cloud Infrastructure"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-100 px-6 py-24 text-slate-900"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-600">
            What I work with
          </p>

          <h2 className="text-4xl font-bold">
            Technical <span className="text-orange-500">Skills.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-slate-600">
            Technologies and tools I've used through academic,
            collaborative, and personal software development projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-slate-200 bg-white p-6 transition hover:border-orange-300 hover:shadow-lg"
            >
              <h3 className="mb-5 text-xl font-semibold">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}