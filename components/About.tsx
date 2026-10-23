export default function About() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-24 text-slate-900"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-600">
            Get to know me
          </p>

          <h2 className="text-4xl font-bold">
            About <span className="text-orange-500">Me.</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Introduction */}
          <div>
            <h3 className="mb-5 text-2xl font-semibold">
              Building software that solves real problems.
            </h3>

            <p className="mb-5 leading-8 text-slate-600">
              I'm Mbuyiselo (Bob) Thiya, a software engineering
              student at WeThinkCode_ in Johannesburg, South Africa.
              My primary interests are backend development,
              software architecture, and cloud technologies.
            </p>

            <p className="mb-5 leading-8 text-slate-600">
              I enjoy working with Java, Spring Boot, REST APIs,
              and databases to build practical applications.
              Through collaborative projects, I've gained
              experience with version control, testing,
              debugging, and software development workflows.
            </p>

            <p className="leading-8 text-slate-600">
              I'm also involved with the Africa Blockchain Club,
              where I'm expanding my knowledge of Ethereum,
              decentralised applications, smart contracts,
              and blockchain infrastructure.
            </p>
          </div>

          {/* Education and achievements */}
          <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                🎓 Education
              </h3>

              <p className="font-medium text-slate-800">
                WeThinkCode_
              </p>

              <p className="mt-2 text-sm text-slate-600">
                Software Engineering Programme
                <br />
                Expected completion: February 2027
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                🏆 Hackathon Achievement
              </h3>

              <p className="font-medium text-slate-800">
                G-13 Hackathon — Top 2
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Collaborated with a team to develop Thuso Health,
                a health-focused technology solution that achieved
                a Top 2 finish.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                🤝 Community & Leadership
              </h3>

              <p className="font-medium text-slate-800">
                Africa Blockchain Club
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Member of a blockchain developer community,
                exploring Web3 technologies and contributing
                to the ABC Pay frontend project.
              </p>

              <p className="mt-4 font-medium text-slate-800">
                Code Clinics
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Served as Project Maintainer and DevOps Lead
                on a collaborative booking system, supporting
                version control, code reviews, and team integration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}