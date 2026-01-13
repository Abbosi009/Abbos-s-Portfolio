import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform with product filtering, shopping cart, and checkout functionality.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "REST APIs"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=400&fit=crop",
      github: "#",
      live: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A task management application with drag-and-drop functionality and local storage persistence.",
      technologies: ["React", "JavaScript", "CSS3", "Local Storage"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=400&fit=crop",
      github: "#",
      live: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A real-time weather dashboard with location-based forecasts and weather data visualization.",
      technologies: ["React", "API Integration", "Tailwind CSS", "Vite"],
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=400&fit=crop",
      github: "#",
      live: "#",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing projects and skills with dark mode support.",
      technologies: ["React", "Tailwind CSS", "next-themes", "Vite"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-900"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={project.github}
                    aria-label="GitHub"
                    className="group flex items-center gap-2"
                  >
                    <Github className="w-5 h-5 text-gray-700 dark:text-gray-400 group-hover:text-purple-500 group-hover:scale-110 transition-all duration-300" />
                    <span className="text-gray-700 dark:text-gray-400 group-hover:text-purple-500 transition-colors">
                      Code
                    </span>
                  </a>
                  <a
                    href={project.live}
                    aria-label="Live Demo"
                    className="group flex items-center gap-2"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-700 dark:text-gray-400 group-hover:text-green-500 group-hover:scale-110 transition-all duration-300" />
                    <span className="text-gray-700 dark:text-gray-400 group-hover:text-green-500 transition-colors">
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
