import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-zinc-950/80 border-b border-zinc-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-medium">
            Tom Neumann
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#projects"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="rounded-full px-4 py-2 text-sm border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
            >
              Resume
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 blur-md opacity-70"></div>
              <img
                src="/me.jpg"
                alt="Tom Neumann"
                className="relative z-10 w-full h-full object-cover object-top rounded-full border-4 border-zinc-800"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hello, I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-400">
                Tom Neumann
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed">
              A 17 year old with a passion for creating innovative solutions
            </p>
            <div className="pt-6 flex justify-center md:justify-start gap-4">
              <Button className="rounded-full px-6 bg-zinc-100 text-zinc-900 hover:bg-white">
                <Link href="#projects">View Projects</Link>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 bg-zinc-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video bg-zinc-700 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-400">
                    <img
                      src={`/${project.image}`}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-zinc-700 rounded-full text-xs font-medium text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Link href="https://github.com/Tom-ne">
            <div className="mt-16 text-center">
              <Button
                variant="outline"
                className="rounded-full px-6 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
              >
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            My Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <SkillCategory
              title="Technologies"
              skills={[
                "Networking Protocols, Socket programming",
                "Flutter",
                "Operating Systems internals - Windows, Linux",
                "Reverse Engineering with IDA",
              ]}
            />
            <SkillCategory
              title="Programming Languages"
              skills={[
                "C++",
                "Rust",
                "Python",
                "C",
                "Assembly 8086",
                "Java",
                "C#",
              ]}
            />
            <SkillCategory
              title="Tools & Others"
              skills={["Git", "Docker", "Visual Studio", "VS Code"]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-zinc-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Get In Touch
          </h2>

          <div className="bg-zinc-800 rounded-3xl shadow-md p-8 md:p-12 border border-zinc-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Contact Information
                </h3>
                <p className="text-zinc-400 mb-8">
                  Feel free to reach out for collaborations or just a friendly
                  hello.
                </p>

                <div className="space-y-6">
                  <a
                    href="mailto:tomn505@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-zinc-700 p-3 rounded-full">
                        <Mail className="h-5 w-5 text-zinc-300" />
                      </div>
                      <div>
                        <p className="text-sm text-zinc-500">Email</p>
                        <p className="font-medium">tomn505@gmail.com</p>
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/tom-neumann-18876827a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-zinc-700 p-3 rounded-full">
                        <Linkedin className="h-5 w-5 text-zinc-300" />
                      </div>
                      <div>
                        <p className="text-sm text-zinc-500">LinkedIn</p>
                        <p className="font-medium">
                          linkedin.com/in/tom-neumann-18876827a
                        </p>
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://github.com/Tom-ne"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                  >
                    <div className="bg-zinc-700 p-3 rounded-full">
                      <Github className="h-5 w-5 text-zinc-300" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500">GitHub</p>
                      <p className="font-medium">github.com/Tom-ne</p>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-zinc-400 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-700 border border-zinc-600 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/10 focus:border-zinc-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-zinc-400 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-700 border border-zinc-600 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/10 focus:border-zinc-500 transition-colors"
                      placeholder="Your email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-zinc-400 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-700 border border-zinc-600 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/10 focus:border-zinc-500 transition-colors"
                      placeholder="Your message"
                    ></textarea>
                  </div>

                  <Button className="w-full rounded-xl py-6 bg-zinc-100 text-zinc-900 hover:bg-white">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-zinc-500">
            © {new Date().getFullYear()} Tom Neumann. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-6">
            <Link
              href="#"
              className="text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="#"
              className="text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="#"
              className="text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

// project data
const projects = [
  {
    title: "Quiz system",
    description:
      "A quiz system that uses blockchain technology to ensure the integrity of the quiz results.",
    technologies: ["C++", "Block Chain"],
    image: "QuizSystem.jpg",
  },
  {
    title: "Got",
    description: "A clone of the version control system Git, built using C++.",
    technologies: ["C++", "Git", "Sha1", "Version Control"],
    image: "got.png",
  },
  {
    title: "Modify",
    description: "A cli tool that allows you to easily install minecraft mods.",
    technologies: ["Rust", "CLI", "Minecraft"],
    image: "modify.png",
  },
];

// Skill Category Component
function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="bg-zinc-800 rounded-2xl p-6 shadow-md border border-zinc-700">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-zinc-100"></div>
            <span className="text-zinc-300">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
