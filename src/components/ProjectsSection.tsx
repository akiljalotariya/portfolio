import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import proje from "../../public/projects.png";


const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* -------- Project 1 -------- */}
          <article className="group rounded-2xl bg-background border border-border overflow-hidden card-hover">
            <div className="aspect-video overflow-hidden">
              <img
                src={proje}   // <-- public folder image
                alt="Portfolio Website"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                Portfolio Website
              </h3>

              <p className="text-muted-foreground text-sm">
                A modern, responsive portfolio website showcasing projects and skills.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                  React
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                  Framer Motion
                </span>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </a>
                </Button>

                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a
                    href="https://github.com/akiljalotariya/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </article>

          {/* ---- Add more projects by copying the article block ---- */}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" size={20} />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
