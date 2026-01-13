import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { useScrollToSection } from "../hooks";
import { socialLinks } from "../config/socialLinks";

export function Hero() {
  const scrollToSection = useScrollToSection();

  return (
    <section className="pt-40 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full border border-primary-200 dark:border-primary-800 w-fit">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-primary-700 dark:text-primary-300">
                Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-secondary-900 dark:text-white">
              Creative <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-primary-500 bg-clip-text text-transparent">Frontend</span> Developer
            </h1>
            
            <p className="text-xl text-secondary-600 dark:text-secondary-400 leading-relaxed max-w-xl">
              I design and build beautiful, responsive web experiences using React, JavaScript, and modern web technologies.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary-500/50 hover:scale-105 transition-all duration-300"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border-2 border-primary-500 text-primary-600 dark:text-primary-400 rounded-xl font-semibold hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-all duration-300"
            >
              Let's Chat
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-4">
            <span className="text-sm font-semibold text-secondary-600 dark:text-secondary-400">Follow:</span>
            <div className="flex gap-3">
              <a
                href={socialLinks.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group p-3 rounded-full bg-secondary-100 dark:bg-secondary-800 hover:bg-primary-600 transition-all duration-300 hover:shadow-lg"
              >
                <Github className="w-5 h-5 text-secondary-700 dark:text-secondary-300 group-hover:text-white transition-colors" />
              </a>
              <a
                href={socialLinks.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group p-3 rounded-full bg-secondary-100 dark:bg-secondary-800 hover:bg-primary-600 transition-all duration-300 hover:shadow-lg"
              >
                <Linkedin className="w-5 h-5 text-secondary-700 dark:text-secondary-300 group-hover:text-white transition-colors" />
              </a>
              <a
                href={socialLinks.emailLink}
                aria-label="Email"
                className="group p-3 rounded-full bg-secondary-100 dark:bg-secondary-800 hover:bg-red-500 transition-all duration-300 hover:shadow-lg"
              >
                <Mail className="w-5 h-5 text-secondary-700 dark:text-secondary-300 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Avatar & Stats */}
        <div className="flex flex-col items-center lg:items-end gap-12 order-1 lg:order-2">
          {/* Avatar */}
          <div className="relative w-80 h-80 group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-accent-500 to-primary-700 rounded-3xl blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 -z-10"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl">
              <div className="text-9xl font-bold text-white/90">AI</div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 w-full">
            <div className="text-center p-4 bg-secondary-50 dark:bg-secondary-800 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">50+</div>
              <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-2">Projects Done</p>
            </div>
            <div className="text-center p-4 bg-secondary-50 dark:bg-secondary-800 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-accent-600 dark:text-accent-400">2+</div>
              <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-2">Years Experience</p>
            </div>
            <div className="text-center p-4 bg-secondary-50 dark:bg-secondary-800 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">100%</div>
              <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-2">Dedication</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
