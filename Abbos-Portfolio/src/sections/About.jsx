import { BookOpen, Code2, Zap } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary-50 to-white dark:from-secondary-900 dark:to-secondary-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-secondary-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-secondary-900 dark:text-white">
                Hey, I'm <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Abbos Ismoilov</span>
              </h3>
              <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
                A passionate Frontend Developer from Tajikistan, currently studying at Najot Ta'lim. I'm obsessed with creating beautiful, responsive, and user-friendly web experiences that make people smile.
              </p>
            </div>

            <p className="text-lg text-secondary-600 dark:text-secondary-400 leading-relaxed border-l-4 border-primary-500 pl-6 py-4 bg-white dark:bg-secondary-700 rounded-r-xl">
              My journey started with curiosity about how websites work. Now, I specialize in turning designs into interactive, functional web applications using React, JavaScript, and modern web technologies.
            </p>

            <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
              When I'm not coding, you'll find me learning new technologies, contributing to open-source, or helping others in the developer community. I believe in continuous learning and growth.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <div className="p-6 bg-white dark:bg-secondary-700 rounded-2xl border-2 border-primary-200 dark:border-primary-800 hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
              <div className="flex items-start gap-4">
                <Code2 className="w-7 h-7 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-secondary-900 dark:text-white mb-1">
                    Clean Code
                  </h4>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
                    Writing maintainable, scalable code
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-secondary-700 rounded-2xl border-2 border-accent-200 dark:border-accent-800 hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
              <div className="flex items-start gap-4">
                <Zap className="w-7 h-7 text-accent-600 dark:text-accent-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-secondary-900 dark:text-white mb-1">
                    Fast & Responsive
                  </h4>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
                    Optimized performance everywhere
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-secondary-700 rounded-2xl border-2 border-primary-200 dark:border-primary-800 hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
              <div className="flex items-start gap-4">
                <BookOpen className="w-7 h-7 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-secondary-900 dark:text-white mb-1">
                    Always Learning
                  </h4>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
                    Staying updated with latest tech
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl border-2 border-primary-200 dark:border-primary-800">
            <div className="flex items-start gap-4">
              <BookOpen className="w-8 h-8 text-primary-600 dark:text-primary-400 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                  Education
                </h4>
                <p className="text-secondary-700 dark:text-secondary-300 font-semibold">
                  Frontend Development
                </p>
                <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                  Najot Ta'lim Academy
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 rounded-2xl border-2 border-accent-200 dark:border-accent-800">
            <div className="flex items-start gap-4">
              <Code2 className="w-8 h-8 text-accent-600 dark:text-accent-400 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                  Specialization
                </h4>
                <p className="text-secondary-700 dark:text-secondary-300 font-semibold">
                  Frontend Development
                </p>
                <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                  React, JavaScript, Tailwind CSS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
