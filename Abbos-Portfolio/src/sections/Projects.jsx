import { ExternalLink, Github, Code2, Eye } from "lucide-react";
import { projects } from "../config/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary-50 to-white dark:from-secondary-900 dark:to-secondary-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-secondary-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            Here are some of my best works showcasing my skills and experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group rounded-3xl overflow-hidden border-2 border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-900 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 hover:shadow-2xl hover:translate-y-[-8px] flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-secondary-200 dark:bg-secondary-700 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white w-full">
                    <p className="text-sm font-semibold">Hover to see more</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col gap-6 flex-grow">
                {/* Header */}
                <div>
                  <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/40 dark:to-accent-900/40 text-primary-700 dark:text-primary-300 rounded-full text-xs font-semibold border border-primary-200 dark:border-primary-800 group-hover:border-primary-500 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-secondary-200 dark:border-secondary-700 mt-auto">
                  <a
                    href={project.github}
                    aria-label="GitHub"
                    className="flex-1 group/link flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-secondary-100 to-secondary-100 dark:from-secondary-800 dark:to-secondary-700 hover:from-primary-600 hover:to-primary-500 dark:hover:from-primary-600 dark:hover:to-primary-500 transition-all duration-300 font-semibold"
                  >
                    <Code2 className="w-4 h-4 text-secondary-700 dark:text-secondary-300 group-hover/link:text-white transition-colors" />
                    <span className="text-secondary-700 dark:text-secondary-300 group-hover/link:text-white transition-colors hidden sm:inline">
                      Code
                    </span>
                  </a>
                  <a
                    href={project.live}
                    aria-label="Live Demo"
                    className="flex-1 group/link flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-secondary-100 to-secondary-100 dark:from-secondary-800 dark:to-secondary-700 hover:from-accent-600 hover:to-accent-500 dark:hover:from-accent-600 dark:hover:to-accent-500 transition-all duration-300 font-semibold"
                  >
                    <Eye className="w-4 h-4 text-secondary-700 dark:text-secondary-300 group-hover/link:text-white transition-colors" />
                    <span className="text-secondary-700 dark:text-secondary-300 group-hover/link:text-white transition-colors hidden sm:inline">
                      Demo
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-16">
          <button className="px-12 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary-500/50 hover:scale-105 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
