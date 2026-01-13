import { Github, Linkedin, Mail, ArrowRight, Sparkles } from "lucide-react";
import { useScrollToSection } from "../hooks";
import { socialLinks } from "../config/socialLinks";

export function Hero() {
  const scrollToSection = useScrollToSection();

  return (
    <section className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl -z-10 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-8 order-2 lg:order-1 animate-slide-up">
          <div className="space-y-6">
            {/* Badge with enhanced styling */}
            <div className="inline-flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/40 dark:to-accent-900/40 rounded-full border border-primary-300 dark:border-primary-700 w-fit backdrop-blur-sm hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300 animate-bounce-slow-up">
              <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                ✨ Welcome to my portfolio
              </span>
            </div>
            
            {/* Main Heading with gradient animation */}
            <h1 className="text-7xl lg:text-8xl font-black leading-tight">
              <span className="block text-secondary-900 dark:text-white">Creative</span>
              <span className="block bg-gradient-to-r from-primary-600 via-primary-400 to-accent-500 bg-clip-text text-transparent animate-gradient-shift bg-200% font-black">
                Frontend Developer
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="text-lg lg:text-xl text-secondary-600 dark:text-secondary-300 leading-relaxed max-w-2xl font-medium">
              I craft beautiful, responsive web experiences with <span className="text-primary-600 dark:text-primary-400 font-bold">React</span>, <span className="text-accent-600 dark:text-accent-400 font-bold">JavaScript</span>, and modern technologies that users love.
            </p>
          </div>

          {/* CTA Buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/50 hover:scale-110 hover:-translate-y-1 active:scale-95"
            >
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="group relative px-8 py-4 border-2 border-primary-500 text-primary-600 dark:text-primary-300 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 hover:scale-105 hover:-translate-y-1 active:scale-95 dark:border-primary-400"
            >
              <span className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">Let's Chat</span>
            </button>
          </div>

          {/* Social Links with animated backgrounds */}
          <div className="flex items-center gap-6 pt-6">
            <span className="text-sm font-bold text-secondary-600 dark:text-secondary-400 uppercase tracking-widest">Connect:</span>
            <div className="flex gap-4">
              {[
                { Icon: Github, href: socialLinks.githubLink, color: 'from-slate-600 to-slate-700' },
                { Icon: Linkedin, href: socialLinks.linkedinLink, color: 'from-blue-600 to-blue-700' },
                { Icon: Mail, href: socialLinks.emailLink, color: 'from-red-600 to-red-700' },
              ].map(({ Icon, href, color }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-4 rounded-2xl bg-gradient-to-br ${color} text-white font-bold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-${color.split('-')[1]}-500/50 hover:scale-110 hover:-translate-y-1 active:scale-95`}
                >
                  <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative block">
                    <Icon className="w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Avatar & Stats */}
        <div className="flex flex-col items-center lg:items-end gap-12 order-1 lg:order-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {/* Avatar with enhanced effects */}
          <div className="relative w-96 h-96 group animate-float">
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-accent-500 to-primary-700 rounded-3xl blur-3xl opacity-30 group-hover:opacity-70 transition-opacity duration-500 animate-pulse -z-10"></div>
            
            {/* Secondary glow */}
            <div className="absolute inset-0 bg-gradient-to-tl from-primary-600 to-accent-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 -z-10 animate-float" style={{ animationDelay: '1s' }}></div>
            
            {/* Main Avatar */}
            <div className="relative w-full h-full bg-gradient-to-br from-primary-500 via-primary-400 to-accent-500 rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl border-4 border-white/20 dark:border-primary-900/50 group-hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10"></div>
              <div className="relative text-center space-y-2 z-10">
                <div className="text-8xl font-black text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300">AI</div>
                <p className="text-white/80 font-bold text-lg drop-shadow-md">Frontend Master</p>
              </div>
              <Sparkles className="absolute top-6 right-6 w-8 h-8 text-white/40 animate-bounce-slow" />
              <Sparkles className="absolute bottom-6 left-6 w-8 h-8 text-white/40 animate-bounce-slow" style={{ animationDelay: '1s' }} />
            </div>

            {/* Shine effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>

          {/* Stats with animated cards */}
          <div className="grid grid-cols-3 gap-5 w-full animate-bounce-slow-up" style={{ animationDelay: '0.4s' }}>
            {[
              { value: '50+', label: 'Projects', icon: '🚀', gradient: 'from-primary-500 to-primary-600' },
              { value: '2+', label: 'Years', icon: '⭐', gradient: 'from-accent-500 to-accent-600' },
              { value: '100%', label: 'Passion', icon: '❤️', gradient: 'from-red-500 to-pink-600' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`group text-center p-5 bg-gradient-to-br ${stat.gradient} rounded-2xl hover:shadow-2xl hover:scale-110 transition-all duration-300 active:scale-95 cursor-pointer border border-white/20 overflow-hidden relative`}
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <div className="relative text-4xl font-black text-white drop-shadow-lg mb-1">{stat.value}</div>
                <p className="text-sm text-white/90 font-bold uppercase tracking-wider">{stat.label}</p>
                <div className="text-2xl absolute -bottom-1 -right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">{stat.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
