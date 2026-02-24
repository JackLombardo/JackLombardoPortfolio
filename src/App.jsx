// src/App.jsx
import ChatBox from "./ChatBox";

const API_BASE = import.meta.env.VITE_API_BASE;

const experience = [
  {
    role: "Junior Software Developer",
    company: "911inform",
    location: "Wall, New Jersey",
    dates: "2022 – 2023",
    bullets: [
      "Secured this role immediately after graduating from community college.",
      "Built a client-configurable email system that allowed each customer to customize internal employee emails while minimizing our company branding.",
      "Completed a solo integration with a smoke detector vendor so school/workplace alarms could trigger our platform during emergencies and identify the exact building location that detected smoke/fire first.",
      "Contributed to updates and improvements for the company’s Android app using Java and Android Studio.",
      "Developed end-to-end features using AngularJS + Bootstrap on the frontend, and Node.js with Koa and MongoDB on the backend for API & database work.",
    ],
  },
  {
    role: "Quality Assurance Engineer",
    company: "911inform",
    location: "Wall, New Jersey",
    dates: "Summer 2025",
    bullets: [
      "Wrote and maintained unit tests for key modules/components to improve coverage and prevent regressions.",
      "Documented QA results and provided release readiness feedback to the team.",
      "Executed manual test cases for web and/or mobile features, validating requirements and user workflows.",
      "Validated database changes by checking records, constraints, and data integrity after feature updates.",
    ],
  },
];

const education = [
  {
    school: "Kean University",
    degree: "B.S. Computer Science",
    location: "Union, New Jersey",
    dates: "2024 – May 2026",
    bullets: ["Decided to resume study after leaving 911inform to finish Bachelor’s degree."],
  },
  {
    school: "Brookdale Community College",
    degree: "A.A.S Computer Science",
    location: "Lincroft, New Jersey",
    dates: "2018 – 2021",
    bullets: [],
  },
];

const projects = [
  {
    title: "PixelLoop",
    desc: "Built a pixel-canvas drawing app for creating pixel art with save and export functionality.",
    bullets: ["Role: Did this entirely as a solo side project."],
    tech: ["C#", "MonoGame"],
  },
  {
    title: "Apartment Laundry Reservation System",
    desc: "Developed a web based laundry reservation system for apartment complexes, enabling tenants to book and manage shared washer/dryer time slots.",
    bullets: ["Role: Solo developer (end-to-end design, implementation, and deployment)."],
    tech: ["AAMPS (Apache, MySQL, PHP)"],
  },
];

function Chip({ children }) {
  return (
    <span className="px-2.5 py-1 rounded-full text-xs border border-neutral-700 text-neutral-200 bg-neutral-900/40">
      {children}
    </span>
  );
}

function ButtonLink({ href, children }) {
  const isMail = href?.startsWith("mailto:");
  return (
    <a
      href={href}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noreferrer"}
      className="inline-flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/40 px-4 py-2 text-sm text-neutral-100 hover:bg-neutral-900/70 transition"
    >
      {children}
    </a>
  );
}

function Card({ children }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6 shadow-sm backdrop-blur">
      {children}
    </div>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {subtitle ? <p className="mt-2 text-neutral-300">{subtitle}</p> : null}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-neutral-100">
      {/* background glow */}
      <div className="pointer-events-none fixed inset-0 opacity-40">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-neutral-200 blur-3xl" />
        <div className="absolute top-40 left-1/3 h-56 w-56 rounded-full bg-neutral-500 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 h-64 w-64 rounded-full bg-neutral-700 blur-3xl" />
      </div>

      <div className="relative min-h-screen w-full">
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-10">
          {/* Top nav */}
          <nav className="flex items-center justify-between">
            <div className="text-sm tracking-wide text-neutral-300">
              <span className="font-semibold text-neutral-100">Jack Lombardo</span>
              <span className="mx-2 text-neutral-600">•</span>
              <span>Portfolio</span>
            </div>

            <div className="flex gap-3">
              <a className="text-sm text-neutral-300 hover:text-neutral-100" href="#experience">
                Experience
              </a>
              <a className="text-sm text-neutral-300 hover:text-neutral-100" href="#education">
                Education
              </a>
              <a className="text-sm text-neutral-300 hover:text-neutral-100" href="#projects">
                Projects
              </a>
              <a className="text-sm text-neutral-300 hover:text-neutral-100" href="#assistant">
                Assistant
              </a>
              <a className="text-sm text-neutral-300 hover:text-neutral-100" href="#contact">
                Contact
              </a>
            </div>
          </nav>

          {/* Hero */}
          <header className="mt-14 text-center">
            <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              Full Stack • QA • Software Development
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
              Experience across end-to-end web development, QA, Android updates, and backend API/database work.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3" id="contact">
              <ButtonLink href="mailto:jhlombardo@comcast.net">Email</ButtonLink>
              <ButtonLink href="https://www.linkedin.com/in/jack-lombardo-45a85b226/">
                LinkedIn
              </ButtonLink>
              {/* <ButtonLink href="/resume.pdf">Resume</ButtonLink> */}
            </div>

            <div className="mx-auto mt-10 h-px max-w-3xl bg-neutral-800/70" />
          </header>

          {/* Experience */}
          <section className="mt-10" id="experience">
            <SectionTitle title="Experience" subtitle="Professional roles and impact." />

            <div className="mx-auto mt-6 grid w-full max-w-5xl grid-cols-1 gap-5">
              {experience.map((e) => (
                <Card key={`${e.company}-${e.role}`}>
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                    <h3 className="text-lg font-semibold">
                      {e.company} — {e.role}
                    </h3>
                    <span className="text-sm text-neutral-400">
                      {e.location} • {e.dates}
                    </span>
                  </div>

                  <ul className="mt-4 list-disc pl-5 text-neutral-300 space-y-2">
                    {e.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mt-12" id="education">
            <SectionTitle title="Education" subtitle="Academic background." />

            <div className="mx-auto mt-6 grid w-full max-w-5xl grid-cols-1 gap-5">
              {education.map((ed) => (
                <Card key={ed.school}>
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                    <h3 className="text-lg font-semibold">
                      {ed.school} — {ed.degree}
                    </h3>
                    <span className="text-sm text-neutral-400">
                      {ed.location} • {ed.dates}
                    </span>
                  </div>

                  {ed.bullets?.length ? (
                    <ul className="mt-4 list-disc pl-5 text-neutral-300 space-y-2">
                      {ed.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  ) : null}
                </Card>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="mt-12" id="projects">
            <SectionTitle title="Projects" subtitle="Selected projects and technologies." />

            <div className="mx-auto mt-6 grid w-full max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
              {projects.map((p) => (
                <Card key={p.title}>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-neutral-300">{p.desc}</p>

                  {p.bullets?.length ? (
                    <ul className="mt-3 list-disc pl-5 text-neutral-300 space-y-2">
                      {p.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Assistant */}
          <section className="mt-12" id="assistant">
            <SectionTitle
              title="Ask the Assistant"
              subtitle="Ask questions about my background, experience, and projects."
            />
            <div className="mt-6">
              <ChatBox apiBase={API_BASE} />
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-auto pt-14 text-center text-sm text-neutral-500">
            Deployed publicly • Built with React + Tailwind
          </footer>
        </div>
      </div>
    </div>
  );
}