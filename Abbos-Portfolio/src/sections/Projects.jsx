import { ExternalLink, Github } from "lucide-react";
import { projects } from "../config/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary-50 to-white dark:from-secondary-900 dark:to-secondary-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group border-2 border-secondary-200 dark:border-secondary-700 rounded-2xl overflow-hidden hover:border-primary-500 dark:hover:border-primary-500 bg-white dark:bg-secondary-900 transition-all duration-300 hover:shadow-2xl hover:translate-y-[-4px]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-secondary-200 dark:bg-secondary-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-semibold border border-primary-200 dark:border-primary-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-secondary-200 dark:border-secondary-700">
                  <a
                    href={project.github}
                    aria-label="GitHub"
                    className="group/link flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 hover:bg-primary-500 dark:hover:bg-primary-600 transition-all duration-300"
                  >
                    <Github className="w-5 h-5 text-secondary-700 dark:text-secondary-300 group-hover/link:text-white transition-colors" />
                    <span className="text-secondary-700 dark:text-secondary-300 group-hover/link:text-white font-semibold transition-colors">
                      Code
                    </span>
                  </a>
                  <a
                    href={project.live}
                    aria-label="Live Demo"
                    className="group/link flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 hover:bg-accent-500 dark:hover:bg-accent-600 transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5 text-secondary-700 dark:text-secondary-300 group-hover/link:text-white transition-colors" />
                    <span className="text-secondary-700 dark:text-secondary-300 group-hover/link:text-white font-semibold transition-colors">
                      Demo
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
