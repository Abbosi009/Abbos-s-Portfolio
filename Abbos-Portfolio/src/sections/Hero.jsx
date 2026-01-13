import { Github, Linkedin, Mail } from "lucide-react";
import { useScrollToSection } from "../hooks";
import { socialLinks } from "../config/socialLinks";

export function Hero() {
  const scrollToSection = useScrollToSection();

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-16">
        {/* Avatar */}
        <div className="flex-shrink-0 animate-fade-in">
          <div className="relative w-40 h-40 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-3xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <span className="text-6xl font-bold text-white">AI</span>
            <div className="absolute inset-0 rounded-3xl bg-white/10 backdrop-blur-sm"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center sm:items-start gap-8 max-w-xl animate-slide-up">
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary-900 dark:text-white leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">Abbos</span>
            </h1>
            <p className="text-2xl font-semibold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              Frontend Developer
            </p>
          </div>

          <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed text-center sm:text-left">
            I'm a passionate web developer studying at Najot Ta'lim. I create beautiful, responsive websites using modern technologies like React, JavaScript, and Tailwind CSS.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href={socialLinks.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group p-3 rounded-full bg-secondary-100 dark:bg-secondary-800 hover:bg-primary-500 dark:hover:bg-primary-600 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6 text-secondary-700 dark:text-secondary-300 group-hover:text-white transition-colors" />
            </a>
            <a
              href={socialLinks.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group p-3 rounded-full bg-secondary-100 dark:bg-secondary-800 hover:bg-primary-600 dark:hover:bg-primary-700 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-secondary-700 dark:text-secondary-300 group-hover:text-white transition-colors" />
            </a>
            <a
              href={socialLinks.emailLink}
              aria-label="Email"
              className="group p-3 rounded-full bg-secondary-100 dark:bg-secondary-800 hover:bg-red-500 dark:hover:bg-red-600 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6 text-secondary-700 dark:text-secondary-300 group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 rounded-xl font-semibold hover:bg-primary-50 dark:hover:bg-primary-500/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
