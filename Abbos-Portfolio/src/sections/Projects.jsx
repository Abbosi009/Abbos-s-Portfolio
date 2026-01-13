import { ExternalLink, Github, Code2, Eye } from "lucide-react";
import { projects } from "../config/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-secondary-50 to-white dark:from-secondary-800 dark:via-secondary-900 dark:to-secondary-800 overflow-hidden"
    >
      {/* Background animations */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl -z-10 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/40 dark:to-accent-900/40 rounded-full border border-primary-300 dark:border-primary-700 w-fit mb-6 backdrop-blur-sm">
            <span className="text-sm font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              🚀 FEATURED PROJECTS
            </span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black text-secondary-900 dark:text-white mb-6">
            My Best Works
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-primary-500 via-primary-400 to-accent-500 mx-auto rounded-full animate-gradient-shift bg-200% mb-6"></div>
          <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto font-medium">
            Showcasing my skills and experience in creating beautiful, functional web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-16 animate-slide-up">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative rounded-3xl overflow-hidden bg-white dark:bg-secondary-900 hover:shadow-2xl hover:scale-105 transition-all duration-300 active:scale-100 flex flex-col h-full border-2 border-secondary-200 dark:border-secondary-700 hover:border-primary-500 dark:hover:border-primary-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-secondary-300 to-secondary-400 dark:from-secondary-700 dark:to-secondary-800 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col gap-6 flex-grow relative">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                {/* Header */}
                <div className="relative">
                  <h3 className="text-3xl font-bold text-secondary-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-secondary-700 dark:text-secondary-300 leading-relaxed text-lg font-medium">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 relative">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/40 dark:to-accent-900/40 text-primary-700 dark:text-primary-300 rounded-lg text-xs font-bold border border-primary-200 dark:border-primary-700 group-hover:border-primary-400 group-hover:shadow-md transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4 relative">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group/btn relative p-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-slate-700/50 transition-all duration-300 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                    <Code2 className="w-5 h-5 relative group-hover/btn:scale-125 transition-transform duration-300" />
                    <span className="relative">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group/btn relative p-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                    <Eye className="w-5 h-5 relative group-hover/btn:scale-125 transition-transform duration-300" />
                    <span className="relative">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center animate-bounce-slow-up">
          <button className="group relative px-10 py-5 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-primary-500/50 hover:scale-110 transition-all duration-300 active:scale-95 border border-white/20 overflow-hidden">
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-2">
              View All Projects
              <ExternalLink className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
