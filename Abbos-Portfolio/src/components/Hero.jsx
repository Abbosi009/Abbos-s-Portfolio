import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-gray-300 rounded-full flex items-center justify-center">
            <span className="text-4xl font-bold text-white">AI</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center sm:items-start gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2">
              Hi, I'm Abbos Ismoilov
            </h1>
            <p className="text-2xl text-blue-500 font-semibold">Frontend Developer</p>
          </div>

          <p className="text-gray-600 dark:text-gray-400 max-w-lg text-center sm:text-left">
            I'm a passionate web developer studying at Najot Ta'lim. I create
            beautiful, responsive websites using modern technologies like React,
            JavaScript, and Tailwind CSS.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/Abbosi009"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group"
            >
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-400 group-hover:text-purple-500 group-hover:scale-110 transition-all duration-300" />
            </a>
            <a
              href="https://linkedin.com/in/abbos-ismoilov-27a7bb362"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group"
            >
              <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-400 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" />
            </a>
            <a
              href="mailto:abbosixan@gmail.com"
              aria-label="Email"
              className="group"
            >
              <Mail className="w-6 h-6 text-gray-700 dark:text-gray-400 group-hover:text-red-500 group-hover:scale-110 transition-all duration-300" />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-lg font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
