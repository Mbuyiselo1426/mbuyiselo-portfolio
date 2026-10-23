import Image from "next/image";
import About from "@/components/About";
import Skills from "@/components/Skills";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <header className="absolute top-0 z-10 w-full">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a href="#" className="text-xl font-bold text-white">
            Mbuyiselo<span className="text-orange-500">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-300 transition hover:text-orange-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="rounded-md border border-orange-500 px-4 py-2 text-sm font-medium text-orange-400 transition hover:bg-orange-500 hover:text-white"
          >
            Let's Connect
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex min-h-screen items-center bg-[#081629] px-6 pt-24 text-white">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 py-20 lg:grid-cols-2">

          {/* Left Side: Introduction */}
          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
              Hello, I'm
            </p>

            <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Mbuyiselo
              <br />
              <span className="text-orange-500">(Bob) Thiya.</span>
            </h1>

            <h2 className="mb-6 text-xl font-medium text-slate-200 md:text-2xl">
              Junior Software Developer
              <span className="text-orange-500"> | </span>
              Backend Engineering
            </h2>

            <p className="mb-9 max-w-2xl text-lg leading-relaxed text-slate-400">
              I&apos;m a software engineering student at WeThinkCode_ in
              Johannesburg, South Africa. I build practical applications,
              develop RESTful APIs, and explore cloud and blockchain
              technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-md bg-orange-500 px-7 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                View My Projects
              </a>

              <a
                href="https://github.com/Mbuyiselo1426"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-slate-600 px-7 py-3 font-semibold text-white transition hover:border-orange-400"
              >
                GitHub Profile
              </a>
            </div>

            {/* Technologies */}
            <div className="mt-14 flex flex-wrap gap-3 text-sm text-slate-400">
              <span className="rounded-md border border-slate-700 px-3 py-2">
                Java & Spring Boot
              </span>

              <span className="rounded-md border border-slate-700 px-3 py-2">
                REST APIs
              </span>

              <span className="rounded-md border border-slate-700 px-3 py-2">
                Docker & Cloud
              </span>

              <span className="rounded-md border border-slate-700 px-3 py-2">
                Blockchain
              </span>
            </div>
          </div>

          {/* Right Side: Professional Profile Picture */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-orange-500 shadow-2xl shadow-orange-500/20 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <Image
                src="/images/linkedIn.jpg"
                alt="Mbuyiselo (Bob) Thiya"
                fill
                priority
                sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Me - Reusable Component */}
      <About />

      {/* Technical Skills - Reusable Component */}
      <Skills />

      {/* Featured Projects */}
      <section
        id="projects"
        className="bg-white px-6 py-24 text-slate-900"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Featured Projects</h2>

          <p className="mt-4 text-slate-600">
            A selection of applications I&apos;ve built and contributed to.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-[#081629] px-6 py-24 text-white"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Let&apos;s Connect</h2>

          <p className="mt-4 text-slate-400">
            Open to junior developer opportunities, internships,
            and collaborations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/Mbuyiselo1426"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-orange-500 px-6 py-3 font-medium text-white hover:bg-orange-600"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/mbuyiselo-thiya-b7655b219/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-slate-600 px-6 py-3 font-medium text-white hover:border-orange-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}