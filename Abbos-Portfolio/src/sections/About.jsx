import { BookOpen, Code2, Zap } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="relative py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-secondary-50 to-white dark:from-secondary-800 dark:via-secondary-900 dark:to-secondary-800 overflow-hidden"
    >
      {/* Background animations */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl -z-10 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/40 dark:to-accent-900/40 rounded-full border border-primary-300 dark:border-primary-700 w-fit mb-6 backdrop-blur-sm">
            <span className="text-sm font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              👋 ABOUT ME
            </span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black text-secondary-900 dark:text-white mb-6">
            Get to Know Me
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-primary-500 via-primary-400 to-accent-500 mx-auto rounded-full animate-gradient-shift bg-200%"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 mb-24">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 animate-slide-up">
            <div className="space-y-6">
              <h3 className="text-5xl font-black text-secondary-900 dark:text-white leading-tight">
                Hey, I'm <span className="bg-gradient-to-r from-primary-600 via-primary-400 to-accent-500 bg-clip-text text-transparent">Abbos</span>
              </h3>
              <p className="text-xl text-secondary-700 dark:text-secondary-300 leading-relaxed font-medium">
                A passionate Frontend Developer from Tajikistan, currently studying at Najot Ta'lim. I'm obsessed with creating beautiful, responsive, and user-friendly web experiences that make people smile. 🚀
              </p>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl border-2 border-primary-300 dark:border-primary-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/20 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <p className="relative text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed font-medium italic">
                "My journey started with curiosity about how websites work. Now, I specialize in turning designs into interactive, functional web applications using React, JavaScript, and modern web technologies. Every project is an opportunity to learn something new."
              </p>
              <div className="absolute -top-4 -right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">💡</div>
            </div>

            <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed font-medium">
              When I'm not coding, you'll find me learning new technologies, contributing to open-source, or helping others in the developer community. I believe in continuous learning and growth. Let's build something amazing together! 🌟
            </p>
          </div>

          {/* Features - Enhanced Cards */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {[
              { icon: Code2, title: 'Clean Code', desc: 'Writing maintainable, scalable code', color: 'from-blue-500 to-blue-600' },
              { icon: Zap, title: 'Fast & Responsive', desc: 'High performance web experiences', color: 'from-yellow-500 to-yellow-600' },
              { icon: BookOpen, title: 'Always Learning', desc: 'Staying updated with latest tech', color: 'from-purple-500 to-purple-600' },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className={`group relative p-6 bg-gradient-to-br ${feature.color} text-white rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 active:scale-95 cursor-pointer border border-white/20 overflow-hidden`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <div className="relative flex items-start gap-4">
                    <Icon className="w-8 h-8 flex-shrink-0 mt-1 group-hover:scale-125 transition-transform duration-300" />
                    <div>
                      <h4 className="font-bold text-lg mb-2 group-hover:translate-x-1 transition-transform">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-white/90 font-medium">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education Cards */}
        <div className="space-y-6 animate-bounce-slow-up">
          <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">Education & Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Frontend Development', school: 'Najot Ta\'lim', year: '2024-Present', emoji: '🎓' },
              { title: 'Web Technologies Specialist', school: 'Self-Learning Journey', year: 'Ongoing', emoji: '💻' },
            ].map((edu, idx) => (
              <div
                key={idx}
                className="group relative p-8 bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-700 dark:to-secondary-800 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-secondary-200 dark:border-secondary-600 hover:border-primary-500 dark:hover:border-primary-400 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <div className="relative">
                  <div className="text-4xl mb-3">{edu.emoji}</div>
                  <h4 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                    {edu.title}
                  </h4>
                  <p className="text-secondary-600 dark:text-secondary-400 font-medium mb-1">
                    {edu.school}
                  </p>
                  <p className="text-sm text-secondary-500 dark:text-secondary-500 font-semibold">
                    {edu.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
